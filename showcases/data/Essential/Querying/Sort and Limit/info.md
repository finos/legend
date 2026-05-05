---
title: Querying - Sort and Limit
description: Use ->sort(...), ->take(n) and ->limit(n) to order and trim a result set.
---

`sort` orders a TDS by one or more columns using `asc('col')` / `desc('col')`. `take(n)`
and `limit(n)` keep only the first `n` rows of the result. They are typically composed
right after `project` / `groupBy` to produce a top-N report.

