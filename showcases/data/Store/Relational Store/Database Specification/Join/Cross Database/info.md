---
title: Relational Database Specification with Cross-Database Joins
description: Example of a Join that references tables defined in another included Database using the [db::path] qualifier.
---

When a `Database` `include`s another `Database`, joins (and view expressions) can reference
tables from the included database by qualifying them with `[fullyQualified::DbPath]`.
This makes it possible to express joins that span multiple stores while keeping each
database focused on its own tables.

