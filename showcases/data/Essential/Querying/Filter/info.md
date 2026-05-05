---
title: Querying - Filter
description: Use ->filter(...) to keep only the objects matching a predicate.
---

`filter` takes a single-argument lambda returning `Boolean[1]` and keeps only the
elements for which it evaluates to `true`. It can be chained before `->project(...)`,
combined with `&&` / `||`, and works against any collection of objects (`.all()`,
nested properties, intermediate results).

