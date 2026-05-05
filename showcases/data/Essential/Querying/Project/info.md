---
title: Querying - Project
description: Use ->project(...) to materialize a TDS (table-shaped result) from a class.
---

`project` turns a stream of objects into a tabular result set (TDS) by giving it a
list of column-extractor lambdas and a parallel list of column names. It is the most
common terminator for class-based queries that need to be returned to a caller as
rows / columns.

