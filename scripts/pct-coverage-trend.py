#!/usr/bin/env python3
"""
Build a weekly PCT (Pure Compatibility Test) coverage trend from this repo's git history.

`website/static/pct/*` is machine-managed: the legend-engine `legend-docs` job pushes a fresh
PCT report here on nearly every engine build. Each of those commits is a point-in-time snapshot
of how much of the Pure function surface every execution target (adapter) supports, so the git
history *is* the trend data -- nothing else needs to be recorded.

This script walks that history, samples one commit per ISO week, extracts per-adapter test
results, and writes a tidy CSV plus a self-contained HTML chart.

Two storage eras are handled transparently (detected per commit, never by date):
  * era "json" -- `pct-docs.json` holds the data, `PCT_Report_Compatibility.html` is just a viewer.
  * era "html" -- the older report embedded every result in one big HTML table.

Metrics per (week, adapter), both measured against the *whole* PCT suite of that week:
  tests_passed / suite_tests           -- primary. PCT test cases the target passes.
  functions_supported / suite_functions -- functions the target supports at all, counting a
                                          function once it passes any of its tests. Partial
                                          support is still support: a function that works for
                                          most argument types is usable, and holding out for
                                          all-or-nothing hides most of the progress a target
                                          makes between "unusable" and "complete".

The common denominator matters. The two eras disagree about unrun tests: the HTML report simply
omitted a test an adapter could not attempt, while the JSON report lists it as a failure. Taking
each adapter's own reported total as the denominator therefore makes the same engine look ~20
points better before 2026-W05 than after. So the suite is reconstructed identically in both eras:
for every function, the number of tests in the suite is the most any single adapter ran, and an
adapter is credited only with what it actually passed. Not-run and failed both count against a
target, which is what "supported" means to someone choosing an execution target.

Adapters that do not exist yet in a given week are omitted (not zero-filled), so newly added
targets start their line where they were introduced instead of showing a fake climb from 0%.

The dataset under `website/static/pct-coverage/` is committed, and each run appends only the
completed weeks it does not already hold. That keeps the weekly job's diff to a block of new
rows, and keeps the history readable from a shallow clone or after the report format changes
again -- weeks git can no longer parse stay in the file rather than vanishing from the chart.

Usage:
    python3 scripts/pct-coverage-trend.py            # append new weeks, refresh the page
    python3 scripts/pct-coverage-trend.py --rebuild  # re-derive every week from git history
    python3 scripts/pct-coverage-trend.py --summary "$GITHUB_STEP_SUMMARY"
"""

from __future__ import annotations

import argparse
import csv
import datetime as dt
import html
import json
import re
import subprocess
import sys
from collections import defaultdict
from html.parser import HTMLParser
from pathlib import Path

PCT_DIR = "website/static/pct"                 # the machine-managed report this reads
HTML_PATH = f"{PCT_DIR}/PCT_Report_Compatibility.html"
JSON_PATH = f"{PCT_DIR}/pct-docs.json"

# A sibling directory, deliberately not under PCT_DIR: legend-engine overwrites everything in
# there on every build, and the git pathspec above must not pick up our own commits.
SITE_DIR = "website/static/pct-coverage"

REPO_ROOT = Path(__file__).resolve().parent.parent


# --------------------------------------------------------------------------------------
# git helpers
# --------------------------------------------------------------------------------------

def git(*args: str) -> str:
    return subprocess.run(
        ["git", *args], cwd=REPO_ROOT, check=True,
        stdout=subprocess.PIPE, stderr=subprocess.PIPE,
    ).stdout.decode("utf-8", "replace")


def git_bytes(*args: str) -> bytes:
    return subprocess.run(
        ["git", *args], cwd=REPO_ROOT, check=True,
        stdout=subprocess.PIPE, stderr=subprocess.PIPE,
    ).stdout


def path_exists_at(ref: str, path: str) -> bool:
    return subprocess.run(
        ["git", "cat-file", "-e", f"{ref}:{path}"], cwd=REPO_ROOT,
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    ).returncode == 0


def weekly_commits(since: str | None, until: str | None) -> list[tuple[str, dt.date]]:
    """Last commit touching the PCT directory in each ISO week, oldest first."""
    args = ["log", "--format=%H %cd", "--date=short"]
    if since:
        args.append(f"--since={since}")
    if until:
        args.append(f"--until={until}")
    args += ["--", PCT_DIR]

    by_week: dict[tuple[int, int], tuple[str, dt.date]] = {}
    for line in git(*args).splitlines():          # git log is newest-first...
        sha, date_s = line.split()
        date = dt.date.fromisoformat(date_s)
        key = date.isocalendar()[:2]
        if key not in by_week:                    # ...so the first hit per week is its latest commit
            by_week[key] = (sha, date)
    return [by_week[k] for k in sorted(by_week)]


# --------------------------------------------------------------------------------------
# era "json": pct-docs.json
# --------------------------------------------------------------------------------------

def adapter_label(group: str, name: str, platform: str) -> str:
    """Stable display name for an adapter across both eras.

    "Native" exists twice (compiled and interpreted engines) and is only distinguishable by
    platform, so it always carries the suffix. Everything else is unique by name.
    """
    if name == "Native":
        return f"Native ({platform})"
    return name


def parse_json_era(blob: bytes) -> dict[str, dict]:
    doc = json.loads(blob)

    # functionTestResults is keyed "platform:group:name"; recover group/platform from the
    # adapters list so the label logic matches the HTML era.
    meta: dict[str, tuple[str, str, str]] = {}
    for entry in doc.get("adapters", []):
        ad = entry.get("adapter", {})
        name, group, platform = ad.get("name", ""), ad.get("group", ""), entry.get("platform", "")
        meta[f"{platform}:{group}:{name}"] = (group, name, platform)

    out: dict[str, dict] = {}

    def bucket(key: str) -> dict:
        group, name, platform = meta.get(key, ("", key.split(":")[-1], key.split(":")[0]))
        label = adapter_label(group, name, platform)
        return out.setdefault(label, {"group": group, "platform": platform, "results": {}})

    for i, fd in enumerate(doc.get("functionsDocumentation", [])):
        fdef = fd.get("functionDefinition") or {}
        fkey = f"{fdef.get('_package') or ''}::{fdef.get('name') or i}"
        for key, res in (fd.get("functionTestResults") or {}).items():
            tests = res.get("tests") or []
            if not tests:
                continue
            b = bucket(key)
            passed = sum(1 for t in tests if t.get("success"))
            b["results"][fkey] = (passed, len(tests))

    return out


# --------------------------------------------------------------------------------------
# era "html": data embedded in one big table
# --------------------------------------------------------------------------------------

class CompatTableParser(HTMLParser):
    """Pull the adapter columns out of the legacy report.

    The table is positional, so cells must be collected in order -- a function with no tests on
    an adapter renders an *empty* <td>, and a regex sweep for "N/M" would silently shift every
    later column. The signature cell also contains a nested <table>, so only depth-1 <td>s count.
    """

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.header_rows: list[list[tuple[str, int]]] = []   # (text, colspan) for the first 2 rows
        self.data_rows: list[list[str]] = []
        self._table_depth = 0
        self._row: list[str] | None = None
        self._header: list[tuple[str, int]] | None = None
        self._cell_depth = 0                                 # nesting inside the current td/th
        self._buf: list[str] = []
        self._colspan = 1

    # -- structure ---------------------------------------------------------------------
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "table":
            self._table_depth += 1
        elif tag == "tr" and self._table_depth == 1:
            self._row, self._header = [], []
        elif tag in ("td", "th") and self._table_depth == 1 and self._row is not None:
            if self._cell_depth == 0:
                self._buf = []
                self._colspan = int(a.get("colspan", 1) or 1)
                self._is_header = tag == "th"
            self._cell_depth += 1
        elif self._cell_depth:
            self._cell_depth += 1 if tag in ("td", "th") else 0

    def handle_endtag(self, tag):
        if tag == "table":
            self._table_depth -= 1
        elif tag in ("td", "th") and self._cell_depth:
            self._cell_depth -= 1
            if self._cell_depth == 0 and self._row is not None:
                text = "".join(self._buf).strip()
                self._row.append(text)
                if self._is_header and self._header is not None:
                    self._header.append((text, self._colspan))
        elif tag == "tr" and self._table_depth == 1 and self._row is not None:
            if self._header:
                self.header_rows.append(self._header)
            else:
                self.data_rows.append(self._row)
            self._row = self._header = None

    def handle_data(self, data):
        if self._cell_depth:
            self._buf.append(data)


RESULT_RE = re.compile(r"^(\d+)\s*/\s*(\d+)")


def parse_html_era(blob: bytes) -> dict[str, dict]:
    text = blob.decode("utf-8", "replace")
    # Tooltips embed raw error messages containing stray "<"/">" that confuse the parser far less
    # than they confuse a regex, but drop the tooltip payload anyway -- only the "N/M" prefix of
    # each cell matters and the tooltips are ~95% of the file.
    text = re.sub(r"<div class='tooltip-text'.*?</div>", "", text, flags=re.S)

    p = CompatTableParser()
    p.feed(text)

    if len(p.header_rows) < 2:
        raise ValueError("could not locate the two header rows of the compatibility table")

    group_row, name_row = p.header_rows[0], p.header_rows[1]

    names = [label.strip() for label, _ in name_row]

    # How many leading label columns there are is *not* fixed: reports before mid-2025 had three
    # (blank / Group / Function), later ones four (a "Signatures & Documentation" column was
    # added). Getting this wrong shifts every adapter one column to the left, silently -- it does
    # not raise, it just attributes each target's results to its neighbour. The label headers are
    # a closed set and no adapter is ever named one of them, so count them directly. The
    # group-row colspan is *not* trustworthy here: some 2025-06 builds emitted colspan=5 over a
    # four-column label block.
    LABEL_HEADERS = {"", "group", "function", "signatures & documentation"}
    first_adapter = 0
    while first_adapter < len(names) and names[first_adapter].lower() in LABEL_HEADERS:
        first_adapter += 1

    # Header row 1: group bands. Its first cell covers the whole label block; the rest map onto
    # the adapter columns in order.
    groups: list[str] = []
    for label, span in group_row[1:]:
        groups.extend([label.strip()] * span)
    n_adapters = len(names) - first_adapter
    if len(groups) < n_adapters:
        groups += [""] * (n_adapters - len(groups))
    elif len(groups) > n_adapters:
        raise ValueError(f"header rows disagree: {len(groups)} group bands over "
                         f"{n_adapters} adapter columns")

    columns: list[tuple[str, str, str]] = []   # (label, group, platform)
    native_seen = 0
    for i in range(first_adapter, len(names)):
        name, group = names[i], groups[i - first_adapter]
        if name == "Native":
            # The legacy header cannot express platform; the report emits compiled then
            # interpreted, in that order. verify_boundary() checks this against the JSON era.
            platform = "compiled" if native_seen == 0 else "interpreted"
            native_seen += 1
        else:
            platform = "compiled"
        columns.append((adapter_label(group, name, platform), group, platform))

    out: dict[str, dict] = {
        label: {"group": group, "platform": platform, "results": {}}
        for label, group, platform in columns
    }

    n_cols = len(names)
    for r, row in enumerate(p.data_rows):
        if len(row) != n_cols:
            continue                                    # package / category grouping rows
        # The function name is not unique on its own (overloads across packages share it), and the
        # legacy table exposes no package for the row -- the row's own position is the stable key.
        fkey = f"row{r}:{row[2].strip()}"
        for idx, (label, _g, _p) in enumerate(columns):
            cell = html.unescape(row[first_adapter + idx]).replace("\xa0", " ").strip()
            m = RESULT_RE.match(cell)
            if not m:
                continue
            passed, total = int(m.group(1)), int(m.group(2))
            if total == 0:
                continue
            out[label]["results"][fkey] = (passed, total)

    return {k: v for k, v in out.items() if v["results"]}


# --------------------------------------------------------------------------------------
# sampling
# --------------------------------------------------------------------------------------

def snapshot(sha: str) -> tuple[str, dict[str, dict]]:
    """(era, per-adapter raw results) for one commit. Prefers the JSON source when both exist."""
    if path_exists_at(sha, JSON_PATH):
        return "json", parse_json_era(git_bytes("show", f"{sha}:{JSON_PATH}"))
    if path_exists_at(sha, HTML_PATH):
        return "html", parse_html_era(git_bytes("show", f"{sha}:{HTML_PATH}"))
    return "none", {}


def score(raw: dict[str, dict]) -> tuple[dict[str, dict], int, int]:
    """Score every adapter of one snapshot against that snapshot's whole PCT suite.

    A function contributes as many tests as the *best-covered* adapter ran for it -- that
    reconstructs the full suite in both eras, including the tests the legacy report silently
    dropped for adapters that could not attempt them.
    """
    corpus: dict[str, int] = {}
    for a in raw.values():
        for fkey, (_passed, total) in a["results"].items():
            if total > corpus.get(fkey, 0):
                corpus[fkey] = total

    suite_tests = sum(corpus.values())
    suite_functions = len(corpus)

    stats: dict[str, dict] = {}
    for label, a in raw.items():
        passed = sum(p for p, _ in a["results"].values())
        supported = sum(1 for p, _t in a["results"].values() if p > 0)
        stats[label] = {
            "group": a["group"], "platform": a["platform"],
            "tests_passed": passed, "functions_supported": supported,
            # Kept for transparency: what this adapter's own report row claimed.
            "tests_reported": sum(t for _p, t in a["results"].values()),
            "functions_reported": len(a["results"]),
        }
    return stats, suite_tests, suite_functions


FIELDS = [
    "week", "week_ending", "commit", "era", "adapter", "group", "platform",
    "tests_passed", "suite_tests", "test_pass_pct",
    "functions_supported", "suite_functions", "function_supported_pct",
    "tests_reported", "functions_reported",
]


def iso_week(date: dt.date) -> str:
    y, w, _ = date.isocalendar()
    return f"{y}-W{w:02d}"


def collect(commits: list[tuple[str, dt.date]], verbose: bool) -> tuple[list[dict], list[str]]:
    """Score the given snapshots. Returns (rows, weeks that could not be parsed)."""
    rows: list[dict] = []
    failed: list[str] = []
    for n, (sha, date) in enumerate(commits, 1):
        try:
            era, raw = snapshot(sha)
        except Exception as exc:                        # a malformed snapshot skips its week
            print(f"  ! {date} {sha[:8]}: {exc}", file=sys.stderr)
            failed.append(iso_week(date))
            continue
        if not raw:
            print(f"  ! {date} {sha[:8]}: no PCT data", file=sys.stderr)
            failed.append(iso_week(date))
            continue
        stats, suite_tests, suite_functions = score(raw)
        iso = date.isocalendar()
        for label, s in sorted(stats.items()):
            rows.append({
                "week": f"{iso[0]}-W{iso[1]:02d}",
                "week_ending": date.isoformat(),
                "commit": sha[:10],
                "era": era,
                "adapter": label,
                "group": s["group"],
                "platform": s["platform"],
                "tests_passed": s["tests_passed"],
                "suite_tests": suite_tests,
                "test_pass_pct": round(100.0 * s["tests_passed"] / suite_tests, 2),
                "functions_supported": s["functions_supported"],
                "suite_functions": suite_functions,
                "function_supported_pct": round(
                    100.0 * s["functions_supported"] / suite_functions, 2),
                "tests_reported": s["tests_reported"],
                "functions_reported": s["functions_reported"],
            })
        if verbose:
            print(f"  [{n}/{len(commits)}] {date} {sha[:8]} ({era}) "
                  f"{len(stats)} adapters, suite {suite_tests} tests / "
                  f"{suite_functions} functions", file=sys.stderr)
    return rows, failed


# --------------------------------------------------------------------------------------
# the committed dataset
# --------------------------------------------------------------------------------------

NUMERIC = {"tests_passed", "suite_tests", "functions_supported", "suite_functions",
           "tests_reported", "functions_reported"}
FLOATS = {"test_pass_pct", "function_supported_pct"}


def read_data(path: Path) -> list[dict]:
    """Load the committed history, refusing anything that is not the current schema.

    The schema has changed once already and will change again. Failing here is much cheaper
    than discovering half a file of mixed-shape rows a year of weekly commits later.
    """
    if not path.exists():
        return []
    with path.open(newline="", encoding="utf-8") as fh:
        reader = csv.DictReader(fh)
        if reader.fieldnames != FIELDS:
            raise SystemExit(
                f"{path} has an unexpected schema.\n"
                f"  found:    {reader.fieldnames}\n"
                f"  expected: {FIELDS}\n"
                f"Re-derive the file from git history with --rebuild.")
        rows = []
        for r in reader:
            for k in NUMERIC:
                r[k] = int(r[k])
            for k in FLOATS:
                r[k] = float(r[k])
            rows.append(r)
    return rows


def write_data(path: Path, rows: list[dict]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as fh:
        # csv defaults to CRLF; this file is committed weekly, so keep its diffs to the rows
        # that actually changed rather than a line-ending flip on every platform.
        w = csv.DictWriter(fh, fieldnames=FIELDS, lineterminator="\n")
        w.writeheader()
        w.writerows(sorted(rows, key=lambda r: (r["week"], r["adapter"])))


def merge(existing: list[dict], fresh: list[dict]) -> list[dict]:
    """Fresh rows replace their week wholesale; every other recorded week is left alone.

    Weeks git cannot currently see -- a shallow clone, a rewritten history, a report that has
    since moved -- must survive untouched. Surviving that is the whole reason the dataset is
    committed rather than re-derived on demand.
    """
    replaced = {r["week"] for r in fresh}
    return [r for r in existing if r["week"] not in replaced] + fresh


METRICS = {"test_pass_pct": "tests", "function_supported_pct": "functions"}


def verify_boundary(rows: list[dict], threshold: float = 15.0,
                    weeks_of_interest: set[str] | None = None) -> list[str]:
    """The script's regression tripwire -- run it on every measure the script emits.

    Several things here are assumptions rather than facts read off the source: which legacy
    "Native" column is the compiled engine, how many leading label columns a given report has,
    and that the two eras can be scored on one denominator. Every one of them fails the same
    way -- silently, as a step change in one target's series. So flag any week-over-week move
    past `threshold`, and mark the ones landing on an era handover, where a step means the
    reconstruction is wrong rather than that the engine changed.

    `weeks_of_interest` limits the report to steps landing on those weeks. The weekly job passes
    the weeks it just added, so its summary carries this run's news instead of re-listing every
    inflection since April 2025 -- a recurring report nobody can skim is one nobody reads.
    """
    warnings: list[str] = []
    by_week: dict[str, dict[str, dict]] = defaultdict(dict)
    for r in rows:
        by_week[r["week"]][r["adapter"]] = r
    weeks = sorted(by_week)
    for prev_w, w in zip(weeks, weeks[1:]):
        if weeks_of_interest is not None and w not in weeks_of_interest:
            continue
        for adapter, cur in sorted(by_week[w].items()):
            prev = by_week[prev_w].get(adapter)
            if not prev:
                continue
            boundary = prev["era"] != cur["era"]
            for key, noun in METRICS.items():
                delta = cur[key] - prev[key]
                if abs(delta) < threshold:
                    continue
                flag = " [ERA BOUNDARY -- check the reconstruction]" if boundary else ""
                warnings.append(
                    f"{adapter} {noun}: {prev[key]:.1f}% ({prev_w}) -> "
                    f"{cur[key]:.1f}% ({w}), {delta:+.1f} pts{flag}")
    return warnings


# --------------------------------------------------------------------------------------
# chart
# --------------------------------------------------------------------------------------

GROUP_LABELS = {
    "": "Core engine",
    "Platform": "Platform binding",
    "Store_Relational": "Relational (SQL)",
    "Store_Deephaven": "Deephaven",
    "Reverse_PCT": "Query translation",
}


def write_chart(rows: list[dict], path: Path, metric: str) -> None:
    weeks = sorted({r["week"] for r in rows})
    index = {(r["adapter"], r["week"]): r for r in rows}
    week_meta = {}
    for r in rows:
        week_meta[r["week"]] = {"ending": r["week_ending"], "era": r["era"],
                                "suite_tests": r["suite_tests"],
                                "suite_functions": r["suite_functions"]}

    series = []
    for a in sorted({r["adapter"] for r in rows}):
        pts = [index.get((a, w)) for w in weeks]
        first = next(r for r in pts if r)
        series.append({
            "name": a,
            "group": GROUP_LABELS.get(first["group"], first["group"] or "Core engine"),
            "detail": [None if r is None else
                       [r["tests_passed"], r["suite_tests"],
                        r["functions_supported"], r["suite_functions"]] for r in pts],
        })

    payload = {
        "weeks": weeks,
        "weekMeta": [week_meta[w] for w in weeks],
        "series": series,
        "metric": "pct" if metric == "test_pass_pct" else "fn",
        "generated": dt.date.today().isoformat(),
    }
    body = CHART_BODY.replace("__DATA__", json.dumps(payload))
    path.write_text(STANDALONE.format(head=CHART_HEAD, body=body), encoding="utf-8")
    return CHART_HEAD + body


# The page is emitted two ways from one source: as a standalone .html file, and as an Artifact
# body (which is wrapped in its own <!doctype>/<head>/<body> skeleton at publish time).
CHART_HEAD = r"""<title>Legend PCT Coverage</title>
<style>
  :root {
    color-scheme: light;
    --plane: #f9f9f7;   --surface-1: #fcfcfb;
    --ink-1: #0b0b0b;   --ink-2: #52514e;   --muted: #898781;
    --grid: #e1e0d9;    --axis: #c3c2b7;    --hairline: rgba(11,11,11,0.10);
    --series-1: #2a78d6;
    --good: #006300;    --bad: #d03b3b;
  }
  @media (prefers-color-scheme: dark) { :root:where(:not([data-theme="light"])) {
    color-scheme: dark;
    --plane: #0d0d0d;   --surface-1: #1a1a19;
    --ink-1: #ffffff;   --ink-2: #c3c2b7;   --muted: #898781;
    --grid: #2c2c2a;    --axis: #383835;    --hairline: rgba(255,255,255,0.10);
    --series-1: #3987e5;
    --good: #0ca30c;    --bad: #e66767;
  } }
  :root[data-theme="dark"] {
    color-scheme: dark;
    --plane: #0d0d0d;   --surface-1: #1a1a19;
    --ink-1: #ffffff;   --ink-2: #c3c2b7;   --muted: #898781;
    --grid: #2c2c2a;    --axis: #383835;    --hairline: rgba(255,255,255,0.10);
    --series-1: #3987e5;
    --good: #0ca30c;    --bad: #e66767;
  }

  * { box-sizing: border-box; }
  body { margin: 0; padding: 40px 24px 72px; background: var(--plane); color: var(--ink-1);
         font-family: system-ui, -apple-system, "Segoe UI", sans-serif; font-size: 15px;
         line-height: 1.5; }
  .wrap { max-width: 1180px; margin: 0 auto; }

  h1 { font-size: 28px; font-weight: 600; letter-spacing: -0.015em; margin: 0 0 8px; }
  h2 { font-size: 17px; font-weight: 600; margin: 0 0 2px; }
  .lede { color: var(--ink-2); margin: 0 0 28px; max-width: 76ch; }
  .cap { color: var(--ink-2); font-size: 13.5px; margin: 0 0 18px; }

  .card { background: var(--surface-1); border: 1px solid var(--hairline); border-radius: 14px;
          padding: 22px 24px 20px; margin-bottom: 20px; }

  /* one filter row above everything it scopes */
  .filters { display: flex; gap: 10px 22px; flex-wrap: wrap; align-items: center;
             margin-bottom: 20px; }
  .filters label { display: flex; align-items: center; gap: 8px; font-size: 13px;
                   color: var(--ink-2); }
  select { font: inherit; font-size: 13.5px; padding: 6px 10px; border-radius: 8px;
           border: 1px solid var(--hairline); background: var(--surface-1); color: var(--ink-1);
           min-height: 32px; }

  .kpis { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 14px;
          margin-bottom: 20px; }
  .tile { background: var(--surface-1); border: 1px solid var(--hairline); border-radius: 14px;
          padding: 16px 18px 14px; }
  .tile .lbl { font-size: 12.5px; color: var(--ink-2); margin-bottom: 6px; }
  .tile .val { font-size: 34px; font-weight: 600; letter-spacing: -0.02em; line-height: 1.1; }
  .tile .dlt { font-size: 12.5px; color: var(--ink-2); margin-top: 4px; }

  .up { color: var(--good); } .down { color: var(--bad); } .flat { color: var(--muted); }

  svg { display: block; width: 100%; height: auto; overflow: visible; }
  .grid-line { stroke: var(--grid); stroke-width: 1; }
  .axis-line { stroke: var(--axis); stroke-width: 1; }
  .tick { fill: var(--muted); font-size: 11px; font-variant-numeric: tabular-nums; }
  .ln { fill: none; stroke: var(--series-1); stroke-width: 2;
        stroke-linejoin: round; stroke-linecap: round; }
  .ln-ghost { fill: none; stroke: var(--muted); stroke-width: 1.25; opacity: .55; }
  .band { fill: var(--series-1); opacity: .10; }
  .dot { fill: var(--series-1); stroke: var(--surface-1); stroke-width: 2; }
  .endlbl { fill: var(--ink-1); font-size: 12.5px; font-weight: 600; }
  .marker { stroke: var(--axis); stroke-width: 1; }
  .marker-lbl { fill: var(--muted); font-size: 10.5px; }
  .hit { fill: transparent; }

  .panels { display: grid; grid-template-columns: repeat(auto-fill, minmax(248px, 1fr)); gap: 16px; }
  .panel { border: 1px solid var(--hairline); border-radius: 12px; padding: 13px 14px 8px; }
  .panel .nm { font-size: 14px; font-weight: 600; display: flex; justify-content: space-between;
               align-items: baseline; gap: 8px; }
  .panel .nm em { font-style: normal; font-size: 19px; font-weight: 600; }
  .panel .meta { font-size: 11.5px; color: var(--ink-2); margin: 2px 0 8px;
                 display: flex; justify-content: space-between; gap: 8px; }
  .panel .grp { color: var(--muted); }

  table { border-collapse: collapse; width: 100%; font-size: 13.5px;
          font-variant-numeric: tabular-nums; }
  th, td { text-align: right; padding: 8px 10px; border-bottom: 1px solid var(--hairline);
           white-space: nowrap; }
  th:first-child, td:first-child { text-align: left; font-variant-numeric: normal; }
  thead th { color: var(--ink-2); font-weight: 600; font-size: 11.5px; text-transform: uppercase;
             letter-spacing: 0.05em; }
  tbody tr:last-child td { border-bottom: 0; }
  .swatch { display: inline-block; width: 8px; height: 8px; border-radius: 2px;
            background: var(--series-1); margin-right: 9px; vertical-align: middle; }
  .table-scroll { overflow-x: auto; }

  .foot { font-size: 12.5px; color: var(--ink-2); max-width: 88ch; }
  .foot p { margin: 0 0 9px; }

  #tip { position: fixed; pointer-events: none; opacity: 0; transition: opacity .08s;
         background: var(--ink-1); color: var(--plane); border-radius: 9px; padding: 8px 11px;
         font-size: 12.5px; line-height: 1.45; z-index: 20; max-width: 250px;
         box-shadow: 0 6px 20px rgba(0,0,0,.22); }
</style>
"""

CHART_BODY = r"""<div class="wrap">
  <h1>Legend PCT coverage by execution target</h1>
  <p class="lede" id="lede"></p>

  <div class="filters">
    <label>Targets
      <select id="grp"><option value="">All groups</option></select>
    </label>
    <label>Measure
      <select id="metric">
        <option value="pct">Tests passing</option>
        <option value="fn">Functions supported</option>
      </select>
    </label>
    <label>Period
      <select id="range">
        <option value="0">Full history</option>
        <option value="26">Last 26 weeks</option>
        <option value="13">Last 13 weeks</option>
      </select>
    </label>
  </div>

  <div class="kpis" id="kpis"></div>

  <div class="card">
    <h2>Fleet coverage over time</h2>
    <p class="cap" id="cap1"></p>
    <svg id="hero" viewBox="0 0 1000 300" role="img"
         aria-label="Median PCT coverage across execution targets, by week"></svg>
  </div>

  <div class="card">
    <h2>Each target, week by week</h2>
    <p class="cap" id="cap2"></p>
    <div class="panels" id="panels"></div>
  </div>

  <div class="card">
    <h2>Current standing</h2>
    <p class="cap" id="cap3"></p>
    <div class="table-scroll">
      <table>
        <thead><tr>
          <th>Execution target</th><th>Group</th><th>Tests passing</th><th>% of tests</th>
          <th>Functions supported</th><th>4 wk</th><th>13 wk</th><th>Since start</th>
        </tr></thead>
        <tbody id="tbody"></tbody>
      </table>
    </div>
  </div>

  <div class="foot" id="foot"></div>
</div>
<div id="tip" role="status"></div>

<script>
const DATA = __DATA__;
let metric = DATA.metric, groupFilter = "", rangeW = 0;

/* ---------- data helpers ------------------------------------------------------------ */
const slice = () => {
  const n = DATA.weeks.length;
  const from = rangeW ? Math.max(0, n - rangeW) : 0;
  return {from, idx: DATA.weeks.map((_, i) => i).slice(from)};
};
const value = (s, i) => {
  const d = s.detail[i];
  if (!d) return null;
  return metric === "pct" ? 100 * d[0] / d[1] : 100 * d[2] / d[3];
};
const shown = () => DATA.series.filter(s => !groupFilter || s.group === groupFilter);
const lastIdx = (s, upto) => {
  for (let i = upto; i >= 0; i--) if (s.detail[i]) return i;
  return -1;
};
const median = a => {
  if (!a.length) return null;
  const v = [...a].sort((x, y) => x - y), m = v.length >> 1;
  return v.length % 2 ? v[m] : (v[m - 1] + v[m]) / 2;
};
// A headline percentage rounds to the integer, except near the top: 99.5% must not be
// announced as "100%" when four tests still fail.
const big = v => (v < 100 && v >= 99.5) ? v.toFixed(1) + "%" : v.toFixed(0) + "%";
const deltaHtml = (v, unit, dp) => {
  if (v === null || v === undefined) return '<span class="flat">—</span>';
  const d = dp === undefined ? 1 : dp;
  if (v > 0.5) return `<span class="up">▲ +${v.toFixed(d)}${unit || ""}</span>`;
  if (v < -0.5) return `<span class="down">▼ ${v.toFixed(d)}${unit || ""}</span>`;
  return `<span class="flat">no change</span>`;
};

const NS = "http://www.w3.org/2000/svg";
const mk = (n, a, cls) => {
  const e = document.createElementNS(NS, n);
  if (cls) e.setAttribute("class", cls);
  for (const k in a) e.setAttribute(k, a[k]);
  return e;
};
const pathOf = pts => pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");

/* ---------- tooltip ----------------------------------------------------------------- */
const tip = document.getElementById("tip");
function showTip(ev, html) {
  tip.innerHTML = html;
  tip.style.opacity = 1;
  const pad = 14, r = tip.getBoundingClientRect();
  tip.style.left = Math.max(8, Math.min(ev.clientX + pad, innerWidth - r.width - 8)) + "px";
  tip.style.top = Math.max(8, Math.min(ev.clientY + pad, innerHeight - r.height - 8)) + "px";
}
const hideTip = () => { tip.style.opacity = 0; };

/* ---------- headline: median line + min-max band ------------------------------------ */
function drawHero() {
  const svg = document.getElementById("hero");
  svg.replaceChildren();
  const {idx} = slice();
  const W = 1000, H = 300, M = {t: 12, r: 92, b: 40, l: 44};
  const iw = W - M.l - M.r, ih = H - M.t - M.b;
  const x = k => M.l + (idx.length === 1 ? iw / 2 : k * iw / (idx.length - 1));
  const y = v => M.t + ih - (v / 100) * ih;

  const series = shown();
  const stat = idx.map(i => {
    const vs = series.map(s => value(s, i)).filter(v => v !== null);
    return vs.length ? {med: median(vs), lo: Math.min(...vs), hi: Math.max(...vs), n: vs.length} : null;
  });

  for (let v = 0; v <= 100; v += 25) {
    svg.append(mk("line", {x1: M.l, x2: M.l + iw, y1: y(v), y2: y(v)},
      v === 0 ? "axis-line" : "grid-line"));
    const t = mk("text", {x: M.l - 10, y: y(v) + 4, "text-anchor": "end"}, "tick");
    t.textContent = v + "%";
    svg.append(t);
  }

  // The final week is always labelled; drop any regular tick that would crowd it.
  const step = Math.max(1, Math.ceil(idx.length / 12));
  const last = idx.length - 1;
  const ticks = idx.map((_, k) => k)
    .filter(k => k === last || (k % step === 0 && x(last) - x(k) > 62));
  ticks.forEach(k => {
    const t = mk("text", {x: x(k), y: H - 14, "text-anchor": "middle"}, "tick");
    t.textContent = DATA.weeks[idx[k]];
    svg.append(t);
  });

  // report-scope change: the suite the targets are measured against was redefined
  idx.forEach((i, k) => {
    if (k === 0 || i === 0) return;
    if (DATA.weekMeta[i].era === DATA.weekMeta[i - 1].era) return;
    svg.append(mk("line", {x1: x(k), x2: x(k), y1: M.t, y2: M.t + ih}, "marker"));
    const t = mk("text", {x: x(k) + 5, y: M.t + 11}, "marker-lbl");
    t.textContent = "report scope changed";
    svg.append(t);
  });

  const solid = stat.map((s, k) => s ? k : -1).filter(k => k >= 0);
  if (solid.length) {
    const up = solid.map(k => [x(k), y(stat[k].hi)]);
    const dn = solid.map(k => [x(k), y(stat[k].lo)]).reverse();
    svg.append(mk("path", {d: pathOf(up) + " " + pathOf(dn).replace("M", "L") + " Z"}, "band"));
    svg.append(mk("path", {d: pathOf(solid.map(k => [x(k), y(stat[k].med)]))}, "ln"));

    const k = solid[solid.length - 1], s = stat[k];
    svg.append(mk("circle", {cx: x(k), cy: y(s.med), r: 4.5}, "dot"));
    const lb = mk("text", {x: x(k) + 10, y: y(s.med) + 4}, "endlbl");
    lb.textContent = "median " + s.med.toFixed(0) + "%";
    svg.append(lb);
  }

  idx.forEach((i, k) => {
    const w = Math.max(10, iw / Math.max(1, idx.length));
    const r = mk("rect", {x: x(k) - w / 2, y: M.t, width: w, height: ih}, "hit");
    r.addEventListener("mousemove", ev => {
      const s = stat[k];
      if (!s) return hideTip();
      const m = DATA.weekMeta[i];
      showTip(ev, `<b>${DATA.weeks[i]}</b> <span style="opacity:.6">week ending ${m.ending}</span><br>` +
        `median <b>${s.med.toFixed(1)}%</b> across ${s.n} targets<br>` +
        `range ${s.lo.toFixed(1)}% – ${s.hi.toFixed(1)}%<br>` +
        `<span style="opacity:.6">suite: ${m.suite_tests.toLocaleString()} tests / ` +
        `${m.suite_functions} functions</span>`);
    });
    r.addEventListener("mouseleave", hideTip);
    svg.append(r);
  });
}

/* ---------- small multiples --------------------------------------------------------- */
function drawPanels() {
  const box = document.getElementById("panels");
  box.replaceChildren();
  const {idx} = slice();
  const end = idx[idx.length - 1];

  const rows = shown().map(s => {
    const li = lastIdx(s, end);
    return li < 0 ? null : {s, li, now: value(s, li)};
  }).filter(Boolean).sort((a, b) => b.now - a.now);

  const W = 260, H = 62, PAD = 3;
  const x = k => PAD + (idx.length === 1 ? (W - 2 * PAD) / 2 : k * (W - 2 * PAD) / (idx.length - 1));
  const y = v => PAD + (H - 2 * PAD) - (v / 100) * (H - 2 * PAD);

  rows.forEach(({s, li, now}) => {
    const d = s.detail[li];
    const back = idx.find(i => s.detail[i]);
    const since = back === undefined ? null : now - value(s, back);

    const card = document.createElement("div");
    card.className = "panel";
    card.innerHTML =
      `<div class="nm"><span>${s.name}</span><em>${big(now)}</em></div>` +
      `<div class="meta"><span class="grp">${s.group}</span>` +
      `<span>${deltaHtml(since, " pts")}</span></div>`;

    const svg = mk("svg", {viewBox: `0 0 ${W} ${H}`, preserveAspectRatio: "none",
      role: "img", "aria-label": `${s.name}: ${now.toFixed(0)} percent`});
    svg.style.height = H + "px";

    svg.append(mk("line", {x1: 0, x2: W, y1: y(0), y2: y(0)}, "grid-line"));

    let run = [];
    const flush = () => {
      if (run.length > 1) {
        const area = pathOf(run) + ` L ${run[run.length - 1][0].toFixed(1)} ${y(0)}` +
                     ` L ${run[0][0].toFixed(1)} ${y(0)} Z`;
        svg.append(mk("path", {d: area}, "band"));
        svg.append(mk("path", {d: pathOf(run)}, "ln"));
      } else if (run.length === 1) {
        svg.append(mk("circle", {cx: run[0][0], cy: run[0][1], r: 2}, "dot"));
      }
      run = [];
    };
    idx.forEach((i, k) => {
      const v = value(s, i);
      if (v === null) flush(); else run.push([x(k), y(v)]);
    });
    flush();

    const lk = idx.indexOf(li);
    if (lk >= 0) svg.append(mk("circle", {cx: x(lk), cy: y(now), r: 4}, "dot"));

    idx.forEach((i, k) => {
      const w = Math.max(6, (W - 2 * PAD) / Math.max(1, idx.length));
      const r = mk("rect", {x: x(k) - w / 2, y: 0, width: w, height: H}, "hit");
      r.addEventListener("mousemove", ev => {
        const dd = s.detail[i];
        if (!dd) return hideTip();
        showTip(ev, `<b>${s.name}</b> · ${DATA.weeks[i]}<br>` +
          `${(100 * dd[0] / dd[1]).toFixed(1)}% of tests <span style="opacity:.6">` +
          `(${dd[0].toLocaleString()} / ${dd[1].toLocaleString()})</span><br>` +
          `${(100 * dd[2] / dd[3]).toFixed(1)}% of functions <span style="opacity:.6">` +
          `(${dd[2]} / ${dd[3]})</span>`);
      });
      r.addEventListener("mouseleave", hideTip);
      svg.append(r);
    });

    card.append(svg);
    box.append(card);
  });
}

/* ---------- KPI tiles --------------------------------------------------------------- */
function drawKpis() {
  const {idx} = slice();
  const end = idx[idx.length - 1], start = idx[0];
  const back = idx.length > 13 ? idx[idx.length - 14] : start;
  const backLbl = idx.length > 13 ? "13 weeks" : DATA.weeks[start];

  const at = i => shown().map(s => value(s, i)).filter(v => v !== null);
  const nowV = at(end), oldV = at(back);
  const med = median(nowV), medOld = median(oldV);
  const meta = DATA.weekMeta[end], metaOld = DATA.weekMeta[back];
  const above = nowV.filter(v => v >= 75).length;
  const aboveOld = oldV.filter(v => v >= 75).length;

  const tiles = [
    {lbl: metric === "pct" ? "Median share of tests passing"
                            : "Median share of functions supported",
     val: med === null ? "—" : big(med),
     dlt: medOld === null ? "" : `${deltaHtml(med - medOld, " pts")} vs ${backLbl}`},
    {lbl: "Targets at 75% or better", val: `${above} of ${nowV.length}`,
     dlt: `${deltaHtml(above - aboveOld, " targets", 0)} vs ${backLbl}`},
    {lbl: metric === "pct" ? "PCT tests in the suite" : "Functions in the suite",
     val: (metric === "pct" ? meta.suite_tests : meta.suite_functions).toLocaleString(),
     dlt: `${deltaHtml((metric === "pct" ? meta.suite_tests - metaOld.suite_tests
                                         : meta.suite_functions - metaOld.suite_functions),
                       metric === "pct" ? " tests" : " functions", 0)}` +
          ` vs ${backLbl}`},
    {lbl: "Best-covered target",
     val: nowV.length ? big(Math.max(...nowV)) : "—",
     dlt: (() => {
       const b = shown().map(s => ({s, v: value(s, lastIdx(s, end))}))
         .filter(o => o.v !== null).sort((a, b2) => b2.v - a.v)[0];
       return b ? b.s.name : "";
     })()},
  ];

  document.getElementById("kpis").innerHTML = tiles.map(t =>
    `<div class="tile"><div class="lbl">${t.lbl}</div>` +
    `<div class="val">${t.val}</div><div class="dlt">${t.dlt}</div></div>`).join("");
}

/* ---------- table ------------------------------------------------------------------- */
function drawTable() {
  const {idx} = slice();
  const end = idx[idx.length - 1];
  const rows = shown().map(s => {
    const li = lastIdx(s, end);
    if (li < 0) return null;
    const back = k => (li - k >= 0 && s.detail[li - k]) ? value(s, li - k) : null;
    const first = idx.find(i => s.detail[i]);
    const now = value(s, li);
    return {s, d: s.detail[li], now,
      d4: back(4) === null ? null : now - back(4),
      d13: back(13) === null ? null : now - back(13),
      dAll: first === undefined ? null : now - value(s, first)};
  }).filter(Boolean).sort((a, b) => b.now - a.now);

  document.getElementById("tbody").innerHTML = rows.map(r =>
    `<tr><td><span class="swatch"></span>${r.s.name}</td>` +
    `<td style="text-align:left;color:var(--ink-2)">${r.s.group}</td>` +
    `<td>${r.d[0].toLocaleString()} / ${r.d[1].toLocaleString()}</td>` +
    `<td><b>${(100 * r.d[0] / r.d[1]).toFixed(1)}%</b></td>` +
    `<td>${r.d[2]} / ${r.d[3]} (${(100 * r.d[2] / r.d[3]).toFixed(0)}%)</td>` +
    `<td>${deltaHtml(r.d4)}</td><td>${deltaHtml(r.d13)}</td><td>${deltaHtml(r.dAll)}</td></tr>`
  ).join("");
}

/* ---------- copy & wiring ----------------------------------------------------------- */
function drawCopy() {
  const {idx} = slice();
  const a = DATA.weeks[idx[0]], b = DATA.weeks[idx[idx.length - 1]];
  const measure = metric === "pct" ? "PCT test cases passing" : "functions supported";
  document.getElementById("lede").textContent =
    `How much of Legend's Pure function surface each execution target supports, sampled once ` +
    `per week from the PCT report published in finos/legend. ${a} to ${b}, ` +
    `${shown().length} targets. Generated ${DATA.generated}.`;
  document.getElementById("cap1").textContent =
    `Median ${measure} across the selected targets; the shaded band spans the weakest to the ` +
    `strongest target that week.`;
  document.getElementById("cap3").textContent =
    `Ordered by the selected measure (${measure}). Change columns are percentage-point moves in ` +
    `that measure; "no change" means it moved less than half a point, and a dash means the ` +
    `target was not in the report that far back.`;
  document.getElementById("cap2").textContent =
    measure[0].toUpperCase() + measure.slice(1) +
    `, on a 0–100% scale in every panel, ordered by current standing.`;
  document.getElementById("foot").innerHTML =
    `<p><b>What is measured.</b> The Pure Compatibility Test suite runs the same function tests ` +
    `against every execution target. <b>Tests passing</b> is the share of the whole suite a ` +
    `target passes. <b>Functions supported</b> counts a function as soon as the target passes ` +
    `any of its tests — partial support is still support, since a function that works for most ` +
    `argument types is usable today. The two read together: the function count is how much of ` +
    `the language you can reach, the test count is how completely. A test the target cannot ` +
    `even attempt counts against it — the question being answered is "can I run this function ` +
    `here", not "of what was tried, what worked".</p>` +
    `<p><b>Source.</b> One snapshot per ISO week, taken from the last PCT report committed to ` +
    `<code>website/static/pct</code> that week. legend-engine publishes that report on nearly ` +
    `every build, so the git history is the record; nothing else is collected.</p>` +
    `<p><b>The one discontinuity.</b> In 2026-W05 the report generator changed and dropped ` +
    `roughly 40 platform-reflection functions no SQL target could ever implement. Nothing about ` +
    `the targets changed — each passes exactly the same tests either side of that week — but ` +
    `the suite they are measured against shrank, lifting them all in one step: about 8 points ` +
    `on tests passing, about 11 on functions supported. That week is marked on the chart. Both ` +
    `eras are otherwise scored identically.</p>` +
    `<p><b>Targets are omitted before they existed.</b> A new target's line starts the week it ` +
    `entered the report rather than rising from zero.</p>`;
}

function redraw() { drawCopy(); drawKpis(); drawHero(); drawPanels(); drawTable(); }

const gsel = document.getElementById("grp");
[...new Set(DATA.series.map(s => s.group))].sort().forEach(g => {
  const o = document.createElement("option"); o.value = o.textContent = g; gsel.append(o);
});
gsel.onchange = e => { groupFilter = e.target.value; redraw(); };
document.getElementById("metric").value = metric;
document.getElementById("metric").onchange = e => { metric = e.target.value; redraw(); };
document.getElementById("range").onchange = e => { rangeW = +e.target.value; redraw(); };

redraw();
addEventListener("resize", () => { hideTip(); });
</script>
"""

STANDALONE = ('<!DOCTYPE html>\n<html lang="en"><head><meta charset="utf-8">\n'
              '<meta name="viewport" content="width=device-width, initial-scale=1">\n'
              "{head}</head>\n<body>\n{body}</body></html>\n")


# --------------------------------------------------------------------------------------
# reporting
# --------------------------------------------------------------------------------------

def median(values: list[float]) -> float | None:
    if not values:
        return None
    v = sorted(values)
    m = len(v) // 2
    return v[m] if len(v) % 2 else (v[m - 1] + v[m]) / 2


def week_median(rows: list[dict], week: str, key: str) -> float | None:
    return median([r[key] for r in rows if r["week"] == week])


def describe_delta(before: list[dict], after: list[dict]) -> str:
    """One line summarising what this run added -- the commit subject, and what a human skims.

    Nobody watches an unattended weekly job, so the delta has to travel with the commit rather
    than live in a log nobody opens.
    """
    old_weeks = {r["week"] for r in before}
    new_weeks = sorted({r["week"] for r in after} - old_weeks)
    if not new_weeks:
        return "no new weeks"

    latest = new_weeks[-1]
    bits = [f"{latest}"]
    if len(new_weeks) > 1:
        bits[0] = f"{new_weeks[0]}..{latest}"
    bits.append(f"+{len(after) - len(before)} rows")

    prev_weeks = sorted(old_weeks)
    if prev_weeks:
        for key, noun in (("test_pass_pct", "tests"), ("function_supported_pct", "functions")):
            was, now = week_median(before, prev_weeks[-1], key), week_median(after, latest, key)
            if was is not None and now is not None:
                bits.append(f"median {noun} {was:.1f}%->{now:.1f}%")
    return "; ".join(bits)


# --------------------------------------------------------------------------------------

def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--data", default=f"{SITE_DIR}/pct-coverage-weekly.csv",
                    help="the committed weekly dataset, read and rewritten in place")
    ap.add_argument("--out-dir", default=SITE_DIR,
                    help="where the report page is written")
    ap.add_argument("--artifact-body", default="build/pct-coverage/artifact-body.html",
                    help="the page without its document skeleton, for publishing as an Artifact")
    ap.add_argument("--rebuild", action="store_true",
                    help="re-derive every week from git history instead of appending to --data")
    ap.add_argument("--since", help="only scan commits after this date (YYYY-MM-DD)")
    ap.add_argument("--until", help="only scan commits before this date (YYYY-MM-DD)")
    ap.add_argument("--metric", choices=["test_pass_pct", "function_supported_pct"],
                    default="test_pass_pct", help="measure the chart opens on")
    ap.add_argument("--no-chart", action="store_true", help="update the dataset only")
    ap.add_argument("--summary", metavar="PATH",
                    help="append a markdown run summary here (e.g. $GITHUB_STEP_SUMMARY)")
    ap.add_argument("--delta-out", metavar="PATH",
                    help="write the one-line delta here, for use as a commit message")
    ap.add_argument("-q", "--quiet", action="store_true")
    args = ap.parse_args()

    def resolve(v: str) -> Path:
        pth = Path(v)
        return pth if pth.is_absolute() else REPO_ROOT / pth

    data_path, out = resolve(args.data), resolve(args.out_dir)
    existing = [] if args.rebuild else read_data(data_path)

    # Only completed ISO weeks are recorded, so the dataset is append-only and each weekly
    # commit is a clean block of added rows rather than a rewrite of the tail.
    this_week = iso_week(dt.date.today())
    commits = [(sha, d) for sha, d in weekly_commits(args.since, args.until)
               if iso_week(d) < this_week]
    if not commits and not existing:
        print("No completed weeks with a PCT report in the selected range.", file=sys.stderr)
        return 1

    recorded = {r["week"]: r["commit"] for r in existing}
    # Re-sample a week only when it is new, or when its last commit is not the one on record --
    # which happens when a run lands mid-week and more reports arrive before the week closes.
    todo = [(sha, d) for sha, d in commits
            if recorded.get(iso_week(d)) not in (sha[:10],)]

    if not args.quiet:
        mode = "rebuilding from git history" if args.rebuild else \
               f"{len(recorded)} weeks on record, {len(todo)} to sample"
        print(f"PCT coverage trend: {mode}", file=sys.stderr)

    fresh, failed = collect(todo, not args.quiet)
    rows = merge(existing, fresh)
    if not rows:
        print("No PCT snapshots could be read.", file=sys.stderr)
        return 1

    write_data(data_path, rows)
    weeks = sorted({r["week"] for r in rows})
    delta = describe_delta(existing, rows)
    print(f"\n{len(rows)} rows across {len(weeks)} weeks ({weeks[0]} .. {weeks[-1]}) "
          f"-> {data_path}\n  delta: {delta}", file=sys.stderr)

    # On a rebuild, audit the whole series; on the weekly append, only what this run added.
    added = {r["week"] for r in rows} - {r["week"] for r in existing}
    flags = verify_boundary(rows, weeks_of_interest=None if args.rebuild else added)
    for warn in flags:
        print(f"  check: {warn}", file=sys.stderr)

    if not args.no_chart:
        chart_path = out / "pct-coverage-trend.html"
        chart_path.parent.mkdir(parents=True, exist_ok=True)
        body = write_chart(rows, chart_path, args.metric)
        print(f"chart -> {chart_path}", file=sys.stderr)
        art = resolve(args.artifact_body)
        art.parent.mkdir(parents=True, exist_ok=True)
        art.write_text(body, encoding="utf-8")
        print(f"artifact body -> {art}", file=sys.stderr)

    if args.delta_out:
        Path(args.delta_out).write_text(delta + "\n", encoding="utf-8")

    if args.summary:
        with open(args.summary, "a", encoding="utf-8") as fh:
            fh.write(f"## PCT coverage trend\n\n**{delta}**\n\n"
                     f"{len(rows)} rows across {len(weeks)} weeks "
                     f"({weeks[0]} .. {weeks[-1]}).\n\n")
            if failed:
                fh.write("Weeks that could not be parsed: "
                         + ", ".join(sorted(set(failed))) + "\n\n")
            if flags:
                fh.write("Step changes in the weeks just added:\n\n"
                         + "".join(f"- {f}\n" for f in flags) + "\n")

    # Unattended, silence is the failure mode to guard against: if the report format changes
    # again, every weekly run would otherwise "succeed" while appending nothing, forever. The
    # newest completed week having no row is the signal, so make it a red build.
    if not args.rebuild and commits:
        newest = iso_week(commits[-1][1])
        if newest not in {r["week"] for r in rows}:
            print(f"\nFAILED: {newest} has a PCT report in git but produced no rows. "
                  f"The report format has most likely changed.", file=sys.stderr)
            return 1

    return 0


if __name__ == "__main__":
    sys.exit(main())
