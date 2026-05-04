---
title: Data Quality - Validation Tree
description: A `DataQualityValidation` element runs a set of class constraints over a structural fetch tree, anchored to a DataSpace execution context.
---

`DataQualityValidation` is a packageable element (DSL `###DataQualityValidation`) that
declares **which constraints to enforce on which subgraph**. It has:

- `context` — typically `fromDataSpace(<DataSpace>, '<executionContextName>')`, which
  resolves to the mapping + runtime to query against;
- `validationTree` — a `$[ ... ]$` graph-fetch shaped tree that picks the classes /
  properties to validate. Each node may list named class-level constraints to enforce
  in `<...>`. Properties without `<...>` are still checked against any class
  constraints attached to their type.

This is the recommended way to ship reusable, audit-able quality reports against a
data product.

