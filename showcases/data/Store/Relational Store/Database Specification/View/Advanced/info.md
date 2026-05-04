---
title: Relational Database Specification with Advanced View features
description: Example of a View using ~filter, ~groupBy, ~distinct and inline expressions (case, plus, sqlNull).
---

In addition to simple column projections, a `View` can declare:

- `~filter <filterName>` – apply a database-level `Filter` (or `MultiGrainFilter`) to the view.
- `~groupBy ( … )` – group rows by one or more expressions; non-grouped projected columns
  must be aggregations.
- `~distinct` – return only distinct rows.
- Inline expressions on projected columns: SQL-like operators (`=`, `!=`, `<`, `>`, `is null`,
  `and`, `or`, …), arithmetic, string functions and the special constructors `case(...)`,
  `plus(...)`, `sqlNull()`, etc.
- Joins inside an expression using the `@joinName` placeholder.

