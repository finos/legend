---
id: released-functions
title: Function Reference
sidebar_label: Function Reference
---

Legend's function library is documented in the **PCT Function Reference** — a browsable reference generated from
the platform sources themselves, so it never drifts from what the engine actually ships.

Every function covered by a Pure Compatibility Test (PCT) suite appears there with:

- **All overloads**, with parameters, return type, and documentation.
- **Every test case** defined for the function, with the behaviour each one pins down.
- **Per-store compatibility** — which of the relational stores, the in-memory engines and the Python and SQL
  targets support the function, and the error message behind each failure. Every store with a PCT adapter is
  covered, so the list grows as adapters are added.

The reference is regenerated on every `legend-engine` master build, so it tracks the latest release.

## Browse the reference

**[Open the PCT Function Reference](pathname:///pct/PCT_Report_Functions.html)** — best read full-page, where every
function has its own address. To send someone straight to one, append `#f/` and the function name:

```
https://legend.finos.org/pct/PCT_Report_Functions.html#f/tan
```

To point at one overload rather than the whole function, add its parameter types:

```
https://legend.finos.org/pct/PCT_Report_Functions.html#f/times(Decimal)
```

Where a name is used in more than one package — `max`, `filter`, `exists` — the link lands on a short list of the
functions sharing it, unless the overload says which was meant: `#f/max(Date[1..*])` goes straight to the date one.
The `#` beside a signature always gives the shortest link to it.

<iframe src="/pct/PCT_Report_Functions.html" title="PCT Function Reference" loading="lazy" style="width: 100%; height: 80vh; border: 1px solid var(--ifm-color-emphasis-300); border-radius: 4px;"></iframe>

## Compatibility at a glance

To compare stores rather than read up on a single function, the
**[PCT Compatibility Report](pathname:///pct/PCT_Report_Compatibility.html)** puts every function against every
store in a single matrix.

For the same picture over time — which targets are gaining coverage, and how fast — the
**[PCT Coverage Trend](pathname:///pct-coverage/pct-coverage-trend.html)** charts every execution target week by
week, back to April 2025. The weekly figures behind it are published as
[CSV](pathname:///pct-coverage/pct-coverage-weekly.csv).

## How the reference is produced

Function documentation and test expectations live next to the code, in the `.pure` sources in
[`legend-engine`](https://github.com/finos/legend-engine). Compatibility results come from each store's PCT
manifest, recorded when that store's test suite runs. The engine build aggregates both and publishes them here —
see the [PCT documentation guide](https://github.com/finos/legend-engine/blob/master/docs/pct/pct-documentation.md)
to document a function you have contributed.

## More
- [Legend language](legend-language.md)
- [Showcase projects](../showcases/showcase-projects.md)
- [Legend features](../overview/legend-features.md)
- [Legend glossary](../overview/legend-glossary.md)
- [User journeys](../user-journeys/build-data-model.md)
- [Studio tutorials](../tutorials/studio-workspace.md)
- [Query tutorials](../tutorials/query-builder.md)
- [Contribute to Legend](../community/contribute-to-legend.md)
