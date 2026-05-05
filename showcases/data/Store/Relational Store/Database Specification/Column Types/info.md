---
title: Relational Database Specification - Column Types and Constraints
description: Overview of the column data types and column-level constraints supported by the Database grammar.
---

The Database grammar supports a rich set of SQL-like data types as well as the
`PRIMARY KEY` and `NOT NULL` column constraints. Column names that contain spaces
or otherwise need escaping can be quoted using double quotes.

Supported types include:

- Character / string: `CHAR(n)`, `VARCHAR(n)`
- Numeric: `TINYINT`, `SMALLINT`, `INTEGER` (alias `INT`), `BIGINT`,
  `FLOAT`, `REAL`, `DOUBLE`, `NUMERIC(p, s)`, `DECIMAL(p, s)`
- Date / time: `DATE`, `TIMESTAMP`
- Binary: `BINARY(n)`, `VARBINARY(n)`
- Other: `BIT`, `OTHER` (catch-all, also used for `ARRAY`)

Constraints:

- `PRIMARY KEY` – marks the column as part of the primary key (composite keys are
  expressed by tagging multiple columns).
- `NOT NULL` – the column cannot hold null values.

