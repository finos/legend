---
title: Relational Database Specification with View Join Chains (INNER / OUTER)
description: Example of a View using a chain of joins with explicit INNER and OUTER join types.
---

Inside a `View` (and inside join / filter expressions in general), several joins can be
chained together with the `>` operator and the join type can be made explicit by writing
`(INNER)` or `(OUTER)` before the `@joinName` reference:

```
@joinA > (INNER) @joinB > (OUTER) @joinC | someTable.someColumn
```

The chain is read left-to-right: start from the source table, traverse `joinA`, then
`joinB` as INNER, then `joinC` as OUTER, and finally project the column after `|`.
This is how non-trivial relationships are expressed at the database level without writing
SQL by hand.

