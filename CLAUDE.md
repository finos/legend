# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

`finos/legend` is the **parent/meta repo** of the Legend platform — it contains **no product source code**. Engine, Studio, SDLC, Depot, and Pure live in sibling repos (`finos/legend-engine`, `finos/legend-studio`, …). What lives here:

| Area | Purpose |
| --- | --- |
| `docs/` + `website/` | The Docusaurus documentation site published at https://legend.finos.org |
| `showcases/` | Minimal Pure code snippets, compile-tested and indexed for the Studio showcase explorer |
| `installers/` | Ways to stand up Legend (omnibus, docker-compose, helm-ocp, cdk, maven) — prototyping, not production |
| `releases/` | One `<YYYY-MM-DD>/manifest.json` per Omnibus Docker release, rendered at `/releases` |
| `scripts/` + `.github/workflows/` | Release automation, index generation, link checking |

## Commands

### Website (Docusaurus 3, Node 21 in CI)

```sh
cd website
npm install
npm run start        # dev server at http://localhost:3000, live reload
npm run build        # static output into website/build/
```

Broken-link check (run from the repo root, **after** a website build — it reads `website/build/`):

```sh
node ./scripts/check-legend-application-documentation-broken-links.js
```

It validates the URLs inside `website/static/resource/studio/documentation/*.json` (the in-app Studio doc registry), including `#anchor` targets, against both the built site and the live web.

### Showcases (Java 11 + Maven)

```sh
cd showcases
mvn test                                              # compile-test every showcase
mvn -Dshowcase.locations="data/Essential/Querying" test   # one directory
mvn -Dshowcase.locations="data/Essential/Querying/Distinct/code.pure" test  # one file
```

`showcase.locations` is a comma-separated list of directories or `.pure` files **relative to `showcases/`**, defaulting to `data`. Each `code.pure` becomes one parameterized JUnit case that parses, compiles, round-trips the grammar, and runs any embedded testables.

CI runs `mvn versions:use-latest-versions` before testing, so the pinned `<legend.engine.version>` in `showcases/pom.xml` is a floor — CI validates against the newest published engine, not that version.

### Showcase index (root package.json)

```sh
npm install
npm run check:showcases-index    # regenerate website/static/showcases/data.json
```

## Machine-managed files — do not hand-edit

- `website/static/pct/*` — the PCT function reference and compatibility report. Generated in **legend-engine** by `GeneratePCTFiles` and pushed here by the `legend-docs` job in that repo's `build.yml` (the stream of `maint: update legend-engine docs from ref: …` commits, committer `FINOS Admin <infra@finos.org>`). Nothing in this repo generates them.
- `website/static/sql-parity/*` — the Legend SQL Postgres parity reports, pushed by the same `legend-docs` job. Generated in **legend-engine** by the `legend-engine-xt-sql-e2e-tests` suite; documented for readers at `docs/reference/legend-sql.md`.
- `website/static/pct-coverage/*` — the weekly PCT coverage trend page and its dataset. Built by `scripts/pct-coverage-trend.py` from the git history of `website/static/pct`, then appended to and auto-committed to `master` every Monday by the *Update PCT Coverage Trend* workflow (`maint: update PCT coverage trend (<week>)`). The CSV is the durable record — change the script, never the files; `--rebuild` re-derives both, and only from a full clone.
- `website/static/showcases/data.json` — regenerated and auto-committed to `master` by the *Build Showcases Index* workflow whenever `showcases/**` changes. Contributors do not commit it.
- `installers/omnibus/.env` version block — `scripts/create-new-release.sh` rewrites those lines with `sed`, so the exact line formatting (`LEGEND_OMNIBUS_*_VERSION=…` at start of line) is load-bearing.
- `website/static/omnibus/` — overwritten at publish time with a copy of `installers/omnibus/scripts/*`. Edit the source under `installers/`.

## Docs site structure

- Markdown content lives in `docs/`, **not** in `website/` (`docs.path` is `../docs`). Frontmatter is `id` / `title` / `sidebar_label`.
- `website/sidebars.json` is the nav. **A new doc page is invisible on the site until its `id` is added there.**
- `website/pureHighlighter.js` registers the `legend` (Pure) syntax highlighting language.
- The `/releases` route is produced by an inline Docusaurus plugin in `website/docusaurus.config.js` that reads every `releases/*/manifest.json` and feeds it to `website/src/components/releases.js`.
- Broken links are `warn`, not `throw` — a bad link will not fail the build; the link-check script is the real gate.

## Showcase conventions

Layout is `showcases/data/<Category>/<Sub-category>/<Feature>/` containing exactly:

- `code.pure` — **one feature per file**, the minimal model/store/mapping needed to demonstrate it. Do not combine features (e.g. a `~filter` mapping and a `~groupBy` mapping belong in separate showcases).
- `info.md` — title + description shown in the Studio showcase explorer, and the text that free-text search indexes. Word it the way a user would search for it.

The folder hierarchy is user-facing navigation; place a feature where it actually applies (a Relational-only capability goes under Relational, not Core).

## Releases

An Omnibus release is created by the *(Manual) Create New Docker Release* workflow, which runs `scripts/create-new-release.sh`: it writes `releases/<YYYY-MM-DD>/manifest.json`, bumps `installers/omnibus/.env`, commits, then publishes the `slim` and `slim-dbs` Docker variants (`full` is disabled — GitLab makes it too costly). The version tag must match `YYYY-MM-DD…`.

`legend-release.yml` is separate: it computes next versions with `scripts/compute-version.sh`, then fires `repository_dispatch` (`legend-stack-release`) at each component repo in dependency order — shared and pure in parallel, then engine, then sdlc, then depot — polling each downstream workflow to completion and waiting for the artifact to appear on Maven Central before moving on.
