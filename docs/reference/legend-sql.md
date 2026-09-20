---
id: legend-sql
title: Legend SQL
sidebar_label: Legend SQL
---

Legend SQL lets a PostgreSQL client query Legend. The Legend Postgres server speaks the PostgreSQL wire protocol, so
JDBC and ODBC drivers connect to it as though it were a Postgres database — but what they query is your Legend model:
functions, services, and mapped relational stores exposed as tables.

## Connecting

The server is `legend-engine-xt-sql-postgres-server`. Its launcher takes one optional argument, the path to a JSON
config; with no argument it falls back to the bundled `defaultLegendConfig.json`:

```bash
java -cp <server-jar> org.finos.legend.engine.postgres.PostgresServerLauncher /path/to/config.json
```

A published Docker image is available as `finos/legend-engine-xt-sql-postgres-server:snapshot`.

The defaults are:

| Setting | Default | Notes |
|---|---|---|
| Wire protocol port | `9998` | What clients connect to |
| Authentication | `NO_PASSWORD` / `ANONYMOUS` | `PASSWORD` and Kerberos (`GSS`) are also supported |
| Legend engine | `http://localhost:6300` | The server forwards queries here; it executes nothing itself |
| HTTP port | `8080` | Serves `/server/info` and `/prometheus` |

So a client connects the way it would to any Postgres instance:

```
jdbc:postgresql://127.0.0.1:9998/postgres
```

Under `NO_PASSWORD` the username and password are not checked. The server reports itself as PostgreSQL `10.5`, which
is the version clients will negotiate against.

> **Docker is required on the host running the server**, not only for tests: the server starts a `postgres:10.5`
> container of its own to answer `information_schema` and `pg_catalog` queries.

## What you query

There are no ordinary tables. A `FROM` clause names one of three Legend things through a table function, along with
where the model lives:

```sql
SELECT * FROM func('my::func__TabularDataSet_1_', coordinates => 'com.gs:proj1:1.0.0')

SELECT * FROM service('/my/service', project => 'PROD-12345', workspace => 'myWorkspace')

SELECT * FROM relationalStore(connection => 'my::Connection', store => 'my::Store',
                              schema => 'schema1', table => 'table1', coordinates => 'com.gs:proj1:1.0.0')
```

- **`func('<path>')`** — a Pure function, by its full path. It must return `TabularDataSet`, `TableTDS`, or
  `Relation`; anything else is rejected. A function that takes parameters receives them as further named arguments.
- **`service('<pattern>')`** — a Legend Service.
- **`relationalStore(...)`** — a table in a mapped database, bypassing Pure entirely.

Each takes the model source in the same named-argument style: `coordinates => '<group:artifact:version>'` for a
published project, or `project => … , workspace => …` for one still in a workspace.

Everything else in the statement is ordinary SQL. The server hands the query to the Legend engine, which plans and
executes it against whatever those sources resolve to.

## Postgres parity

Legend SQL is not a Postgres reimplementation — it accepts Postgres SQL and answers it through Legend, and the two do
not agree everywhere yet. To keep that honest, every build runs a parity suite: SQL statements executed against a real
PostgreSQL 16 database **and** against Legend, with the result sets compared cell by cell. What agrees is
supported; what does not is reported with the actual difference.

Each statement is run twice, against two Pure representations of the same data, which is why every result has two
columns:

- **TDS** — the function returns `meta::pure::tds::TabularDataSet`, the original tabular API.
- **Relation** — the function returns `meta::pure::metamodel::relation::Relation<(…)>`, the newer, compile-time-typed
  API preferred for new code. See [Relation Functions](legend-relation.md) for a guide to writing it.

Each function, operator, and construct lands in one of six states:

| Status | Meaning |
|---|---|
| `PASS` | Legend returned exactly what Postgres returned |
| `PARTIAL` | Some cases for that function pass, others do not |
| `FAIL` | The query ran, but the results differ |
| `ERROR` | Legend could not run the query |
| `UNSUPPORTED` | Not applicable to Legend — no test is expected |
| `UNTESTED` | Listed in the Postgres manual, but no test covers it yet — a testing gap, not a known failure |

## The reports

**[Coverage summary](pathname:///sql-parity/summary.html)** — the headline numbers, and every failing test linked to
its diff.

<iframe src="/sql-parity/summary.html" title="Legend SQL coverage summary" loading="lazy" style="width: 100%; height: 70vh; border: 1px solid var(--ifm-color-emphasis-300); border-radius: 4px;"></iframe>

Five reports sit behind it:

- **[Function coverage](pathname:///sql-parity/function-coverage.html)** — every Postgres built-in function
  signature, grouped by its section of the Postgres manual, each with its status on both paths and the category of
  error where it fails.
- **[Operator coverage](pathname:///sql-parity/operator-coverage.html)** — the same for Postgres built-in operators.
- **[Structural parity](pathname:///sql-parity/structural-parity.html)** — SQL constructs rather than functions:
  joins, CTEs, subqueries, set operations, window frames, `GROUP BY`, `DISTINCT`, and so on.
- **[Format token coverage](pathname:///sql-parity/format-token-coverage.html)** — the `to_char` template patterns
  and the `EXTRACT` / `date_part` field keywords.
- **[Failure details](pathname:///sql-parity/failure-details.html)** — for every mismatch, the original SQL, the
  rewritten SQL, and the full expected-versus-actual result sets. The coverage reports link straight into it.

The reports are regenerated on every `master` build of
[`legend-engine`](https://github.com/finos/legend-engine);
[`git-info.json`](pathname:///sql-parity/git-info.json) beside them records the commit they came from.

## Known gaps

The reports are the authority on which functions and constructs work. A few limitations they do not cover:

- `SET` statements are accepted and ignored, so session variables have no effect.
- Bound parameters on prepared statements are not implemented — build the statement text instead.
- Array values are not decoded.

## Adding a test

Parity cases are YAML, one file per function category or SQL feature, in
[`legend-engine-xt-sql-e2e-tests`](https://github.com/finos/legend-engine/tree/master/legend-engine-xts-sql/legend-engine-xt-sql-e2e-tests):

```yaml
- id: my_new_function__basic
  sql: "SELECT MY_FUNC(col) AS result FROM numbers ORDER BY 1"
  function: my_func
  signature: "my_func(integer) → integer"
```

Run the suite once with `-Dparity.updateStatus=true` and it records the current status as the baseline, so a later
regression fails the build and a later fix shows up as a status change in your diff. The module
[README](https://github.com/finos/legend-engine/blob/master/legend-engine-xts-sql/legend-engine-xt-sql-e2e-tests/README.md)
has the full workflow.

## More
- [Query Protocol](query-protocol.md)
- [Function Reference](released-functions.md)
- [Legend language](legend-language.md)
- [Contribute to Legend](../community/contribute-to-legend.md)
