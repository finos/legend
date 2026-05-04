---
title: Relational Database Specification with Processing Snapshot Milestoning
description: Example of a table milestoned by a single PROCESSING_SNAPSHOT_DATE column.
---

In addition to the IN/OUT style processing milestoning, a table can be milestoned by a
single **snapshot** column using `processing(PROCESSING_SNAPSHOT_DATE = <col>)`. Each
row is then valid only at the snapshot date stored in that column, and the engine
automatically applies the relevant snapshot predicate when querying the table.

This is the processing-time equivalent of `business(BUS_SNAPSHOT_DATE = …)`.

