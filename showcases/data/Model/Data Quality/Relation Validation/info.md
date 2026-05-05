---
title: Data Quality - Relation Validation (ROW_LEVEL & AGGREGATE)
description: Use `DataQualityRelationValidation` to assert directly against a Relation (table / SQL view) without going through a Class mapping.
---

`DataQualityRelationValidation` is the table-shaped sibling of `DataQualityValidation`.
Instead of validating a class fetch tree, it validates a Relation expressed via the
`#>{ store::Path.tableName }#` Relation accessor.

Two `type`s are supported:

- `ROW_LEVEL` — the assertion lambda receives **one row at a time** (`row | <bool>`);
  the validation reports the rows that fail the predicate.
- `AGGREGATE` — the assertion lambda receives **the whole relation** (`rel | <bool>`);
  use this for whole-table invariants (e.g. "must not be empty",
  "row count > 0", "sum of column equals X"). When `type` is omitted the engine
  defaults to `AGGREGATE`.

The `query` may also be parameterised; matching parameters are then passed to each
assertion lambda.

