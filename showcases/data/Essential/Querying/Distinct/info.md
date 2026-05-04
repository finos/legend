---
title: Querying - Distinct
description: Use ->distinct() on a TDS to deduplicate rows.
---

`distinct` removes duplicate rows from a TDS based on the values in all projected
columns. Apply it after `project` to obtain a unique set of value tuples.

