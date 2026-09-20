---
id: legend-relation
title: Relation Functions
sidebar_label: Relation Functions
---

A **Relation** is Legend's tabular data type — rows and named, typed columns. If you have used pandas,
Ibis, Spark or dplyr, the shape will be familiar: you start from a table, then chain small operations
that each return a new relation. The difference is that Pure checks the columns at compile time, and
that against a database the whole chain is pushed down and executed as one SQL statement.

**This guide is a tour, not a complete reference.** It walks the paths most work goes down and skips
plenty — whole functions, and most of the overloads of the ones it does cover. The
[PCT Function Reference](pathname:///pct/PCT_Report_Functions.html) is the authoritative list: it is
generated from the platform sources on every engine build, so it carries every signature, the per-store
compatibility matrix, and the tests that pin each behaviour down. It will have things this page does
not, and it is never out of date. Every function named below links to it, and the
[function index](#function-index) at the end lists all 67 whether or not the prose reaches them.

When something here and the reference disagree, the reference is right.

The SQL shown beside each example is **DuckDB**, and every example was run through the engine to
confirm it. The SQL is simplified for reading — the engine's real output carries mechanical aliases
(`"trades_0"`) and, for joins, several layers of nested sub-select. DuckDB is
the dialect Legend has the closest parity with, so it is the clearest mirror; other stores differ in
places, and the compatibility matrix says where.

## What a Relation is

A relation's type lists its columns:

```Legend
Relation<(SYMBOL:Varchar(10), QTY:Int, PRICE:Float)>
```

That type is what makes the API safe to chain. Drop a column with [`select`](pathname:///pct/PCT_Report_Functions.html#f/select) and a later reference
to it is a **compile error**, not a run-time surprise. Add one with [`extend`](pathname:///pct/PCT_Report_Functions.html#f/extend) and the type grows to
match.

### Relation and TDS

Legend has two tabular APIs. `meta::pure::tds::TabularDataSet` — "TDS" — is the original one, and you
will meet it in older models and in the query builder. `Relation` is the newer, compile-time-typed one
and is what new code should use. They are not interchangeable: `olapGroupBy`, for instance, is a TDS
function with no relation equivalent — its job is done by [`extend`](pathname:///pct/PCT_Report_Functions.html#f/extend) with a window, described under
[Window functions](#window-functions).

See [Legend SQL](legend-sql.md) for how the two appear at the SQL layer.

### If you know pandas

A rough map, enough to get oriented:

| Relation | pandas |
| --- | --- |
| [`filter`](pathname:///pct/PCT_Report_Functions.html#f/relation/filter//core_functions_relation/relation/functions/iteration/filter.pure) | `frame.loc[…]` |
| [`extend`](pathname:///pct/PCT_Report_Functions.html#f/extend) | `.assign` |
| [`select`](pathname:///pct/PCT_Report_Functions.html#f/select) | `.filter(items=…)` |
| [`rename`](pathname:///pct/PCT_Report_Functions.html#f/rename) | `.rename` |
| [`distinct`](pathname:///pct/PCT_Report_Functions.html#f/distinct) | `.drop_duplicates` |
| [`sort`](pathname:///pct/PCT_Report_Functions.html#f/relation/sort//core_functions_relation/relation/functions/order/sort.pure) | `.sort_values` |
| [`limit`](pathname:///pct/PCT_Report_Functions.html#f/limit) | `.head` |
| [`size`](pathname:///pct/PCT_Report_Functions.html#f/relation/size//core_functions_relation/relation/functions/size/size.pure) | `.shape` |
| [`join`](pathname:///pct/PCT_Report_Functions.html#f/join) | `.merge` |

The analogy stops at grouping. Pure's [`groupBy`](pathname:///pct/PCT_Report_Functions.html#f/relation/groupBy//core_functions_relation/relation/functions/transformation/groupBy.pure) takes an explicit *map-then-reduce* pair rather
than a named aggregate, which is what lets it express things pandas cannot — see
[Grouping and aggregation](#grouping-and-aggregation).

## A minute of Pure syntax

The examples use five notations that a SQL reader has not met. Nothing else about Pure is needed to
follow this page.

| Written | Means |
| --- | --- |
| `$x->f(1)` | A function call. It is the same as `f($x, 1)` — the arrow just puts the subject first so chains read left to right. |
| `$x` | Reads a variable. Parameters and `let` bindings are referenced with the `$`. |
| `x \| $x.QTY > 100` | A lambda: parameter name, `\|`, body. `{x \| …}` is the same thing in braces, needed when the body spans statements or when the lambda takes several parameters (`{a, b \| …}`). |
| `~name` | A column. The next section covers the forms this takes. |
| `@Integer` | A type, passed as a value — used by `to(@Integer)` and `cast(@…)`. |

So this:

```Legend
$trades->filter(t | $t.QTY > 100)
```

reads as "take `$trades`, keep the rows whose `QTY` is over 100", and is exactly `filter($trades, …)`.

## Getting a relation

There are two doors, and most real work uses both.

### From a table

The `#>{…}#` accessor names a table in a `Database`, and `from` says which runtime to execute against:

```Legend
#>{guide::store::MarketDB.TRADES}#
  ->select(~[SYMBOL, QTY])
  ->from(guide::rt())
```

```sql
-- equivalent DuckDB SQL
SELECT SYMBOL, QTY FROM TRADES
```

`from` binds a runtime to the expression **before** it, which is why it usually reads last. It is not
decoration: a single query can carry more than one runtime, and that is how Legend federates across
stores — see the `from` overloads in `meta::pure::mapping`.

Throughout this guide `guide::rt()` stands for whatever runtime you are executing against, and
`guide::model::Trade` for a class mapped to the `TRADES` table below. Substitute your own; nothing
else in the examples depends on how they are defined.

All the examples use this store:

```Legend
Database guide::store::MarketDB
(
  Table TRADES
  (
    ID INTEGER PRIMARY KEY,
    SYMBOL VARCHAR(10) NOT NULL,
    TRADE_TIME TIMESTAMP NOT NULL,
    TRADE_DATE DATE NOT NULL,
    QTY INTEGER NOT NULL,
    PRICE FLOAT NOT NULL,
    TRADER VARCHAR(20) NOT NULL,
    COMMENTS VARCHAR(200)
  )

  Table QUOTES
  (
    ID INTEGER PRIMARY KEY,
    SYMBOL VARCHAR(10) NOT NULL,
    QUOTE_TIME TIMESTAMP NOT NULL,
    BID FLOAT NOT NULL,
    ASK FLOAT NOT NULL
  )

  Table ORDERS
  (
    ID INTEGER PRIMARY KEY,
    SYMBOL VARCHAR(10) NOT NULL,
    PAYLOAD SEMISTRUCTURED
  )

  Table BARS
  (
    SYMBOL VARCHAR(10) NOT NULL,
    BAR_TIME TIMESTAMP NOT NULL,
    OPEN_PX DOUBLE NOT NULL,
    HIGH_PX DOUBLE NOT NULL,
    LOW_PX DOUBLE NOT NULL,
    CLOSE_PX DOUBLE NOT NULL,
    VOLUME INTEGER NOT NULL
  )

  Table EMPLOYEES
  (
    EMP_ID INTEGER PRIMARY KEY,
    TITLE VARCHAR(50) NOT NULL,
    MANAGER_ID INTEGER
  )
)
```

### From a model

[`project`](pathname:///pct/PCT_Report_Functions.html#f/project) turns class instances into rows — one row per object, one column per named function.
This is the bridge from Legend's object model into the tabular world, and it is how a query over a
mapped model becomes SQL:

```Legend
guide::model::Trade.all()
  ->project(~[ticker : t | $t.symbol, qty : t | $t.qty])
  ->from(guide::model::TradeMapping, guide::rt())
```

```sql
-- equivalent DuckDB SQL
SELECT SYMBOL AS ticker, QTY AS qty FROM TRADES
```

The column functions are ordinary expressions, so they can compute, and they can **reach through
associations**:

```Legend
guide::model::Trade.all()
  ->project(~[ticker : t | $t.symbol, notional : t | $t.qty * $t.price])
  ->from(guide::model::TradeMapping, guide::rt())
```

```sql
-- equivalent DuckDB SQL
SELECT SYMBOL AS ticker, QTY * PRICE AS notional FROM TRADES
```

Note the second argument to `from`. A query over a table needs only a runtime; a query over a **model**
also needs the mapping that says which table the class lives in — `from(mapping, runtime)`.

One thing to expect: projecting a `[*]` property **multiplies rows**. An object with one name, two
addresses and three values yields six rows, not one — the projection is a cross product, and any later
[`filter`](pathname:///pct/PCT_Report_Functions.html#f/relation/filter//core_functions_relation/relation/functions/iteration/filter.pure) applies to the projected relation rather than to the original objects.

Everything after this point works the same whichever door you came through.

## Columns and specs

Almost every relation function takes a **column spec**, written with a leading `~`. One prefix covers
every kind; what follows the colon decides which you get.

| Written | Is a | Used by |
| --- | --- | --- |
| `~name` | `ColSpec` — a column by name | `select`, `distinct`, `rename`, `groupBy` keys, `over` |
| `~[a, b]` | `ColSpecArray` | the same, several columns |
| `~name : String[1]` | `ColSpec` with a declared type | `rename`, pinning a `recurse` schema |
| `~name : x \| $x.a + 1` | `FuncColSpec` — a computed column | `extend`, `project` |
| `~[a : x \| …, b : x \| …]` | `FuncColSpecArray` | `extend`, `project` |
| `~out : x \| $x.qty : y \| $y->sum()` | `AggColSpec` — map, then reduce | `groupBy`, `aggregate`, `pivot` |
| `~[n : x \| … : y \| …, …]` | `AggColSpecArray` | the same, several aggregates |
| `~out : {g \| …}` | `FuncColSpec` over the **group** | `groupBy`, `aggregate` — see [below](#advanced-aggregation-the-group-as-a-relation) |
| `~name : {p, w, r \| …}` | `FuncColSpec`, three-argument | windowed `extend` |
| `~'a space'` | a quoted column name | anywhere a name is needed |

Row lambdas receive one row and read columns off it by name: `{r | $r.QTY}`. The row's type is the
relation's row type, so `$r.NOPE` does not compile.

### Multiplicity: the first thing that bites

**How a column reads back depends on whether it can be null.** A `NOT NULL` column is `[1]` and
behaves as you would expect. A nullable one is `[0..1]`, and arithmetic or concatenation on `[0..1]`
will not compile — you have to say what should happen when the value is absent:

```Legend
// COMMENTS is nullable, so this is [0..1]
->filter(t | $t.COMMENTS->isNotEmpty())

// ...and this needs toOne() before it can be concatenated
->extend(~tag : t | $t.COMMENTS->toOne() + '!')
```

```sql
-- equivalent DuckDB SQL
WHERE COMMENTS IS NOT NULL
-- and
SELECT …, concat(COMMENTS, '!') AS tag FROM TRADES
```

[`toOne`](pathname:///pct/PCT_Report_Functions.html#f/toOne) narrows `[0..1]` to `[1]` so the expression type-checks; [`isEmpty`](pathname:///pct/PCT_Report_Functions.html#f/isEmpty) and
[`isNotEmpty`](pathname:///pct/PCT_Report_Functions.html#f/isNotEmpty) test without narrowing. Note what `toOne` does **not** do once the query is pushed
down: the SQL above is a plain `concat`, with no null check — the coercion is a compile-time promise
about the type, not a runtime guard. If a NULL can really be there, handle it explicitly with
[`coalesce`](pathname:///pct/PCT_Report_Functions.html#f/coalesce) or a filter rather than relying on `toOne` to catch it.

Columns from a model are `[1]` when the property is, and a `NOT NULL` store column is `[1]` too — so
reach for `toOne` only where the compiler actually asks for it.

### Reading a signature

The PCT pages describe columns with a small type algebra. It is worth five minutes:

| Notation | Means |
| --- | --- |
| `(id:Integer, name:String)` | a row type, listed inline |
| `Z⊆T` | `Z` is a subset of `T`'s columns — how `select` type-checks |
| `T+Z` | the two column sets combined — `extend`, `join`, `lateral` |
| `T-Z+V` | remove, then add — `rename` |
| `Z=(?:K)` | one anonymous column whose type is bound to `K` |

So `select(Relation<T>[1], ColSpecArray<Z⊆T>[1]):Relation<Z>[1]` reads: given a relation and some of
its columns, return a relation of just those.

## Core verbs

These nine cover most pipelines.

| Relation | SQL |
| --- | --- |
| [`select`](pathname:///pct/PCT_Report_Functions.html#f/select) | `SELECT a, b` |
| [`filter`](pathname:///pct/PCT_Report_Functions.html#f/relation/filter//core_functions_relation/relation/functions/iteration/filter.pure) | `WHERE` |
| [`extend`](pathname:///pct/PCT_Report_Functions.html#f/extend) | adds a column, keeps the rest |
| [`project`](pathname:///pct/PCT_Report_Functions.html#f/project) | `SELECT expr AS name` — **drops** what it does not name |
| [`rename`](pathname:///pct/PCT_Report_Functions.html#f/rename) | `AS` |
| [`distinct`](pathname:///pct/PCT_Report_Functions.html#f/distinct) | `SELECT DISTINCT` |
| [`sort`](pathname:///pct/PCT_Report_Functions.html#f/relation/sort//core_functions_relation/relation/functions/order/sort.pure) | `ORDER BY` |
| [`limit`](pathname:///pct/PCT_Report_Functions.html#f/limit) / [`drop`](pathname:///pct/PCT_Report_Functions.html#f/relation/drop//core_functions_relation/relation/functions/slice/drop.pure) / [`slice`](pathname:///pct/PCT_Report_Functions.html#f/relation/slice//core_functions_relation/relation/functions/slice/slice.pure) | `LIMIT` / `OFFSET` / both |
| [`concatenate`](pathname:///pct/PCT_Report_Functions.html#f/relation/concatenate//core_functions_relation/relation/functions/transformation/concatenate.pure) | `UNION ALL` |

[`concatenate`](pathname:///pct/PCT_Report_Functions.html#f/relation/concatenate//core_functions_relation/relation/functions/transformation/concatenate.pure) requires both sides to have **identical row types** — the same column
names, types and order. It is `UNION ALL`, and it is the only set operation Legend offers: there is no
`UNION DISTINCT`, `INTERSECT` or `EXCEPT`. Chain `distinct` after it for the first; express the other
two with `in` or `exists` from [subquery predicates](#subquery-predicates).

[`extend`](pathname:///pct/PCT_Report_Functions.html#f/extend) and [`project`](pathname:///pct/PCT_Report_Functions.html#f/project) are the pair worth keeping straight. Both compute columns; `extend`
adds to what is there, `project` keeps **only** what it names.

```Legend
#>{guide::store::MarketDB.TRADES}#
  ->select(~[SYMBOL, QTY, PRICE])
  ->extend(~notional : t | $t.QTY * $t.PRICE)
  ->from(guide::rt())
```

```sql
-- equivalent DuckDB SQL
SELECT SYMBOL, QTY, PRICE, QTY * PRICE AS notional FROM TRADES
```

Sorting takes one spec or a list, each built with [`ascending`](pathname:///pct/PCT_Report_Functions.html#f/ascending) or [`descending`](pathname:///pct/PCT_Report_Functions.html#f/descending):

```Legend
->sort([~SYMBOL->ascending(), ~QTY->descending()])
```

```sql
-- equivalent DuckDB SQL
ORDER BY SYMBOL, QTY DESC NULLS FIRST
```

By default an empty value sorts as the largest: `NULLS LAST` under `ascending`, `NULLS FIRST`
under `descending` — which is why the descending key above carries `NULLS FIRST` and the
ascending one carries nothing. To override it, chain [`emptyFirst`](pathname:///pct/PCT_Report_Functions.html#f/emptyFirst) or [`emptyLast`](pathname:///pct/PCT_Report_Functions.html#f/emptyLast)
onto the sort spec:

```Legend
->sort(~COMMENTS->descending()->emptyLast())
```

```sql
-- equivalent DuckDB SQL
ORDER BY COMMENTS DESC NULLS LAST
```

**Sort before you page.** A relation has no inherent row order, so `limit` without a `sort` returns
an arbitrary set of rows — reproducible only by accident.

Paging is three functions, not one: [`limit`](pathname:///pct/PCT_Report_Functions.html#f/limit) takes the first *n* rows (`LIMIT n`), [`drop`](pathname:///pct/PCT_Report_Functions.html#f/relation/drop//core_functions_relation/relation/functions/slice/drop.pure) skips them (`OFFSET n`), and [`slice`](pathname:///pct/PCT_Report_Functions.html#f/relation/slice//core_functions_relation/relation/functions/slice/slice.pure) takes a range — `slice(10, 20)` is `OFFSET 10 LIMIT 10`. There is no `take`.

[`size`](pathname:///pct/PCT_Report_Functions.html#f/relation/size//core_functions_relation/relation/functions/size/size.pure) counts rows (`SELECT count(*)`), and [`columns`](pathname:///pct/PCT_Report_Functions.html#f/columns) returns the column list — pair it with
the relation's own [`eval`](pathname:///pct/PCT_Report_Functions.html#f/relation/eval//core_functions_relation/relation/functions/eval.pure) to read a column chosen at run time rather than named literally:

```Legend
$rel->filter(row | eval(~code, $row)->isEmpty())
```

[`map`](pathname:///pct/PCT_Report_Functions.html#f/relation/map//core_functions_relation/relation/functions/iteration/map.pure) is the way *out* of a relation: it applies a function to each row and returns
ordinary Pure values rather than a relation, which is how results get back into the rest of a program.

## Grouping and aggregation

[`groupBy`](pathname:///pct/PCT_Report_Functions.html#f/relation/groupBy//core_functions_relation/relation/functions/transformation/groupBy.pure) takes the grouping columns, then one or more aggregate specs. An aggregate spec is a
**pair** of lambdas — first pull a value out of each row, then reduce the values of the group:

```Legend
#>{guide::store::MarketDB.TRADES}#
  ->groupBy(~SYMBOL, ~totalQty : t | $t.QTY : q | $q->sum())
  ->from(guide::rt())
```

```sql
-- equivalent DuckDB SQL
SELECT SYMBOL, sum(QTY) AS totalQty
FROM TRADES
GROUP BY SYMBOL
```

Several keys and several aggregates, using the `~[…]` forms:

```Legend
->groupBy(~[SYMBOL, TRADER],
          ~[totalQty : t | $t.QTY : q | $q->sum(),
            avgPrice : t | $t.PRICE : p | $p->average(),
            trades   : t | $t.ID : i | $i->count()])
```

```sql
-- equivalent DuckDB SQL
SELECT SYMBOL, TRADER,
       sum(QTY)   AS totalQty,
       avg(PRICE) AS avgPrice,
       count(ID)  AS trades
FROM TRADES
GROUP BY SYMBOL, TRADER
```

For a grand total with no grouping key, use [`aggregate`](pathname:///pct/PCT_Report_Functions.html#f/aggregate):

```Legend
->aggregate(~[totalQty : t | $t.QTY : q | $q->sum()])
```

```sql
-- equivalent DuckDB SQL
SELECT sum(QTY) AS totalQty FROM TRADES
```

**The reducers are not relation functions.** [`sum`](pathname:///pct/PCT_Report_Functions.html#f/sum), [`average`](pathname:///pct/PCT_Report_Functions.html#f/average), [`count`](pathname:///pct/PCT_Report_Functions.html#f/count), [`max`](pathname:///pct/PCT_Report_Functions.html#f/standard/max//core_functions_standard/math/aggregator/max.pure),
[`min`](pathname:///pct/PCT_Report_Functions.html#f/standard/min//core_functions_standard/math/aggregator/min.pure), [`percentile`](pathname:///pct/PCT_Report_Functions.html#f/percentile), [`median`](pathname:///pct/PCT_Report_Functions.html#f/median), [`stdDevPopulation`](pathname:///pct/PCT_Report_Functions.html#f/stdDevPopulation), [`variancePopulation`](pathname:///pct/PCT_Report_Functions.html#f/variancePopulation),
[`wavg`](pathname:///pct/PCT_Report_Functions.html#f/wavg) and [`corr`](pathname:///pct/PCT_Report_Functions.html#f/corr) come from the standard function library and work on any collection. There is
no `count` in the relation package — count rows with [`size`](pathname:///pct/PCT_Report_Functions.html#f/relation/size//core_functions_relation/relation/functions/size/size.pure), or `q | $q->count()` as a reducer.

## Advanced aggregation: the group as a relation

[`groupBy`](pathname:///pct/PCT_Report_Functions.html#f/relation/groupBy//core_functions_relation/relation/functions/transformation/groupBy.pure) has a second form whose lambda receives **the whole group as a relation** rather than a
column of values — `~out : {g | …}`. Because `$g` is a relation, every relation function is available
inside it, and that expresses things the map/reduce pair cannot.

The general reducer is `reduce`, which takes the same map and aggregate as before:

```Legend
->groupBy(~[SYMBOL], ~[allQty : {g | $g->reduce(t | $t.QTY, q | $q->sum())}])
```

That alone is just a longer way to write `sum`. What makes it worth knowing is what you can do to `$g`
first.

> The group-scoped `reduce` shares its name with the windowed [`reduce`](pathname:///pct/PCT_Report_Functions.html#f/reduce) used under
> [Window functions](#window-functions), and only the windowed one currently has a page in the function
> reference — so follow that link for the window form, and treat this section as the reference for the
> group form. [`joinStrings`](pathname:///pct/PCT_Report_Functions.html#f/relation/joinStrings//core_functions_relation/relation/functions/aggregation/joinStrings.pure), which is documented in full, is the same idea specialised to strings.

### Filtering the group — `FILTER (WHERE …)`

Filter the group and the aggregate sees fewer rows **without the query losing any**:

```Legend
->groupBy(~[SYMBOL],
          ~[bigQty : {g | $g->filter(t | $t.QTY > 100)->reduce(t | $t.QTY, q | $q->sum())}])
```

```sql
-- equivalent DuckDB SQL
SELECT SYMBOL, sum(QTY) FILTER (WHERE QTY > 100) AS bigQty
FROM TRADES
GROUP BY SYMBOL
```

This is the difference between `FILTER (WHERE …)` and a `WHERE` clause, and it is why filtered and
unfiltered aggregates can sit side by side in one pass:

```Legend
->groupBy(~[SYMBOL],
          ~[bigQty : {g | $g->filter(t | $t.QTY > 100)->reduce(t | $t.QTY, q | $q->sum())},
            allQty : {g | $g->reduce(t | $t.QTY, q | $q->sum())}])
```

```sql
-- equivalent DuckDB SQL
SELECT SYMBOL,
       sum(QTY) FILTER (WHERE QTY > 100) AS bigQty,
       sum(QTY)                          AS allQty
FROM TRADES
GROUP BY SYMBOL
```

A filtered `count(*)` is the same shape — the map lambda is the identity on the row:

```Legend
->groupBy(~[SYMBOL],
          ~[bigTrades : {g | $g->filter(t | $t.QTY > 100)->reduce(t | $t, r | $r->count())}])
```

```sql
-- equivalent DuckDB SQL
SELECT SYMBOL, count(*) FILTER (WHERE QTY > 100) AS bigTrades
FROM TRADES
GROUP BY SYMBOL
```

Only a **`filter` chain** on `$g` is recognised and lifted into the clause. Any other operation is left
where it is.

### Sorting the group — ordered aggregates

String aggregation without an order is not reproducible, and [`joinStrings`](pathname:///pct/PCT_Report_Functions.html#f/relation/joinStrings//core_functions_relation/relation/functions/aggregation/joinStrings.pure)'s documentation says so
outright: without a sort spec the order is undefined. The four-argument `reduce` takes one — note it is
a **list**:

```Legend
->groupBy(~[SYMBOL],
          ~[traders : {g | $g->reduce(t | $t.TRADER, n | $n->joinStrings(','), [~QTY->descending()])}])
```

```sql
-- equivalent DuckDB SQL
SELECT SYMBOL,
       string_agg(TRADER, ',' ORDER BY QTY DESC NULLS FIRST) AS traders
FROM TRADES
GROUP BY SYMBOL
```

The sort column need not be the column being joined — ordering by quantity while concatenating trader
names is the common case. For the string case specifically, [`joinStrings`](pathname:///pct/PCT_Report_Functions.html#f/relation/joinStrings//core_functions_relation/relation/functions/aggregation/joinStrings.pure) has a four-argument
overload that is shorter and compiles to exactly the same SQL:

```Legend
->groupBy(~[SYMBOL], ~[traders : {g | $g->joinStrings(~TRADER, ',', ~QTY->descending())}])
```

Filtering and ordering compose:

```Legend
~[traders : {g | $g->filter(t | $t.QTY > 100)
                   ->reduce(t | $t.TRADER, n | $n->joinStrings(','), [~QTY->descending()])}]
```

```sql
-- equivalent DuckDB SQL
string_agg(TRADER, ',' ORDER BY QTY DESC NULLS FIRST) FILTER (WHERE QTY > 100) AS traders
```

> DuckDB spells ordered aggregation with `ORDER BY` inside the call. The ANSI form is
> `WITHIN GROUP (ORDER BY …)`, and that is what some other stores emit — the Pure you write is the same
> either way.

## Pivot

[`pivot`](pathname:///pct/PCT_Report_Functions.html#f/pivot) rotates values out of rows and into columns. Grouping is **implicit**: every column that is
neither pivoted nor consumed by the aggregate becomes a grouping column, so removing an unrelated
column changes the shape of the result.

Generated columns are named `<value>__|__<aggName>`, and because which columns exist depends on the
data, the result is typed `Relation<Any>` and nearly always needs a `cast`. The overload taking an
explicit value list is the one to reach for, since it fixes the column set in advance:

```Legend
#>{guide::store::MarketDB.TRADES}#
  ->select(~[SYMBOL, TRADER, QTY])
  ->pivot(~TRADER, ['ALICE', 'BOB'], ~qty : t | $t.QTY : q | $q->sum())
  ->cast(@meta::pure::metamodel::relation::Relation<(SYMBOL:Varchar(10), 'ALICE__|__qty':Int, 'BOB__|__qty':Int)>)
  ->from(guide::rt())
```

```sql
-- equivalent DuckDB SQL
PIVOT (SELECT SYMBOL, TRADER, QTY FROM TRADES WHERE TRADER IN ('ALICE', 'BOB'))
  ON TRADER IN ('ALICE', 'BOB')
  USING sum(QTY)
```

Quote the generated names in the cast, as above — they contain characters a bare identifier cannot
hold. Where the pivot values are themselves quoted in the payload (a numeric year rendered as
`'2011'`, say) those quotes are part of the name and have to be escaped inside the cast as well:
`'\'2011__|__qty\''`.

## Window functions

What SQL calls window functions, and what the older TDS API called `olapGroupBy`, is done here by
[`extend`](pathname:///pct/PCT_Report_Functions.html#f/extend) with a window. If you came looking for `olapGroupBy`, this is the section you want — there
is no relation function by that name.

A window is built by [`over`](pathname:///pct/PCT_Report_Functions.html#f/over), and the new column's lambda takes **three** arguments: the partition,
the window, and the current row.

```Legend
#>{guide::store::MarketDB.TRADES}#
  ->select(~[SYMBOL, QTY])
  ->extend(over(~SYMBOL, ~QTY->descending()), ~rn : {p, w, r | $p->rowNumber($r)})
  ->from(guide::rt())
```

```sql
-- equivalent DuckDB SQL
SELECT SYMBOL, QTY,
       row_number() OVER (PARTITION BY SYMBOL ORDER BY QTY DESC NULLS FIRST) AS rn
FROM TRADES
```

[`over`](pathname:///pct/PCT_Report_Functions.html#f/over) has three independent parts, and any of them may be left out:

```Legend
over(~SYMBOL)                                       // partition only
over(~TRADE_TIME->ascending())                      // order only, one partition
over(~[SYMBOL, TRADER], ~TRADE_TIME->ascending())   // partition by two columns
over(~SYMBOL, ~TRADE_TIME->ascending(), rows(-4, 0))// ...and a five-row trailing frame
```

### Frames: which rows take part

A window's **frame** decides which rows around the current one the aggregate actually sees. Getting it
wrong does not error — it silently returns different numbers — so it is worth the detail.

**Leaving the frame out is not "the whole partition."** It means from the start of the partition to the
current row: a *running* aggregate.

```Legend
->extend(over(~SYMBOL, ~TRADE_TIME->ascending()),
         ~running : {p, w, r | $p->reduce($w, $r, t | $t.QTY, q | $q->sum())})
```

```sql
-- equivalent DuckDB SQL
sum(QTY) OVER (PARTITION BY SYMBOL ORDER BY TRADE_TIME ASC) AS running
```

There are two ways to say it explicitly, and they do **not** mean the same thing.

#### `rows` — counted in positions

[`rows`](pathname:///pct/PCT_Report_Functions.html#f/rows) counts rows from the current one, which is `0`. Negative is `PRECEDING`, positive is
`FOLLOWING`. A trailing three-row average:

```Legend
->extend(over(~SYMBOL, ~TRADE_TIME->ascending(), rows(-2, 0)),
         ~ma3 : {p, w, r | $p->reduce($w, $r, t | $t.QTY, q | $q->average())})
```

```sql
-- equivalent DuckDB SQL
avg(QTY) OVER (PARTITION BY SYMBOL ORDER BY TRADE_TIME ASC
               ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS ma3
```

[`unbounded`](pathname:///pct/PCT_Report_Functions.html#f/unbounded) reaches the edge of the partition, so a partition total is:

```Legend
->extend(over(~SYMBOL, ~TRADE_TIME->ascending(), rows(unbounded(), unbounded())),
         ~total : {p, w, r | $p->reduce($w, $r, t | $t.QTY, q | $q->sum())})
```

```sql
-- equivalent DuckDB SQL
sum(QTY) OVER (PARTITION BY SYMBOL ORDER BY TRADE_TIME ASC
               ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS total
```

#### `_range` — measured in ordering values

[`_range`](pathname:///pct/PCT_Report_Functions.html#f/_range) — the leading underscore is part of the name — bounds the frame by the *value* of
the ordering column rather than by position. The bounds are offsets from the current row's ordering
value, so how many rows that is depends on the data:

```Legend
->extend(over(~SYMBOL, ~QTY->ascending(), _range(-1, 1)),
         ~near : {p, w, r | $p->reduce($w, $r, t | $t.PRICE, x | $x->sum())})
```

```sql
-- equivalent DuckDB SQL
sum(PRICE) OVER (PARTITION BY SYMBOL ORDER BY QTY ASC
                 RANGE BETWEEN 1 PRECEDING AND 1 FOLLOWING) AS near
```

It takes `unbounded()` on either side too:

```Legend
->extend(over(~SYMBOL, ~QTY->ascending(), _range(unbounded(), 0)),
         ~upTo : {p, w, r | $p->reduce($w, $r, t | $t.PRICE, x | $x->sum())})
```

```sql
-- equivalent DuckDB SQL
sum(PRICE) OVER (PARTITION BY SYMBOL ORDER BY QTY ASC
                 RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS upTo
```

**Ties are the difference.** Because `_range` decides membership by value, rows that tie on the
ordering column always share a frame; `rows` counts positions and splits them. Over `0,1,10 / 0,1,10 /
0,3,30` ordered by the second column, `_range(unbounded(), 0)` gives `20` on *both* of the first two
rows, where `rows(unbounded(), 0)` gives `10` then `20`. If the ordering column has duplicates and you
want them treated alike, `_range` is the one you want.

Direction follows the ordering: under `ascending()` a positive offset reaches later values, and under
`descending()` the two swap. `0` on either side is `CURRENT ROW`, and the lower bound may not exceed the
upper.

#### `_range` over dates — rolling time windows

When the ordering column holds dates, `_range` takes a `DurationUnit` and the frame becomes a genuine
time interval — which is how you express "the last seven days" rather than "the last seven rows":

```Legend
->extend(over(~SYMBOL, ~TRADE_DATE->ascending(), _range(-6, DurationUnit.DAYS, 0, DurationUnit.DAYS)),
         ~qty7d : {p, w, r | $p->reduce($w, $r, t | $t.QTY, q | $q->sum())})
```

```sql
-- equivalent DuckDB SQL
sum(QTY) OVER (PARTITION BY SYMBOL ORDER BY TRADE_DATE ASC
               RANGE BETWEEN INTERVAL 6 DAYS PRECEDING AND CURRENT ROW) AS qty7d
```

This is the one to reach for on time series: a seven-row window silently means something different on
a symbol that traded twice last week. Overloads take `unbounded()` on either side, in which case only
the bounded side carries a unit.

### The window functions

| Function | SQL |
| --- | --- |
| [`rowNumber`](pathname:///pct/PCT_Report_Functions.html#f/rowNumber) | `row_number()` |
| [`rank`](pathname:///pct/PCT_Report_Functions.html#f/rank) | `rank()` |
| [`denseRank`](pathname:///pct/PCT_Report_Functions.html#f/denseRank) | `dense_rank()` |
| [`percentRank`](pathname:///pct/PCT_Report_Functions.html#f/percentRank) | `percent_rank()` |
| [`cumulativeDistribution`](pathname:///pct/PCT_Report_Functions.html#f/cumulativeDistribution) | `cume_dist()` |
| [`ntile`](pathname:///pct/PCT_Report_Functions.html#f/ntile) | `ntile(n)` |
| [`lag`](pathname:///pct/PCT_Report_Functions.html#f/lag) / [`lead`](pathname:///pct/PCT_Report_Functions.html#f/lead) | `lag()` / `lead()` |
| [`offset`](pathname:///pct/PCT_Report_Functions.html#f/offset) | the primitive `lag` and `lead` are built on — the row at an arbitrary offset |
| [`first`](pathname:///pct/PCT_Report_Functions.html#f/relation/first//core_functions_relation/relation/functions/slice/first.pure) / [`last`](pathname:///pct/PCT_Report_Functions.html#f/relation/last//core_functions_relation/relation/functions/slice/last.pure) / [`nth`](pathname:///pct/PCT_Report_Functions.html#f/nth) | `first_value()` / `last_value()` / `nth_value()` |
| [`reduce`](pathname:///pct/PCT_Report_Functions.html#f/reduce) | any aggregate, as a window function |

[`reduce`](pathname:///pct/PCT_Report_Functions.html#f/reduce) is the one to remember: there is no windowed `sum`. Either call `reduce` with
`sum` as its aggregate, as the frame examples above do, or use the map-then-reduce column form shown
under [rolling windows](#rolling-windows) — `~col : {p, w, r | $r.QTY} : y | $y->sum()`. The two
compile to the same SQL; the second reads better when you are aggregating a single expression.

[`first`](pathname:///pct/PCT_Report_Functions.html#f/relation/first//core_functions_relation/relation/functions/slice/first.pure), [`last`](pathname:///pct/PCT_Report_Functions.html#f/relation/last//core_functions_relation/relation/functions/slice/last.pure) and [`nth`](pathname:///pct/PCT_Report_Functions.html#f/nth) are **window** functions — they need a window and the current
row, and they answer "first in this frame", not "first row of the relation". For that, sort and
[`limit`](pathname:///pct/PCT_Report_Functions.html#f/limit).

`last` carries a trap worth knowing: **with no frame the window runs to the current row**, so
`last` returns the current row itself, every time. For the last row of the partition, pass an
explicit frame — `rows(unbounded(), unbounded())`.

[`lag`](pathname:///pct/PCT_Report_Functions.html#f/lag) and [`lead`](pathname:///pct/PCT_Report_Functions.html#f/lead) need only the partition and the row:

```Legend
->extend(over(~SYMBOL, ~TRADE_TIME->ascending()), ~prevPrice : {p, w, r | $p->lag($r).PRICE})
```

```sql
-- equivalent DuckDB SQL
lag(PRICE, 1) OVER (PARTITION BY SYMBOL ORDER BY TRADE_TIME ASC) AS prevPrice
```

## Joins

[`join`](pathname:///pct/PCT_Report_Functions.html#f/join) takes the other relation, a `JoinKind` (`INNER`, `LEFT`, `RIGHT`, `FULL`) and the condition:

```Legend
#>{guide::store::MarketDB.TRADES}#
  ->select(~[SYMBOL, QTY])
  ->rename(~SYMBOL, ~tSym)
  ->join(#>{guide::store::MarketDB.QUOTES}#->select(~[SYMBOL, BID]),
         JoinKind.INNER,
         {t, q | $t.tSym == $q.SYMBOL})
  ->from(guide::rt())
```

```sql
-- equivalent DuckDB SQL
SELECT t.SYMBOL AS tSym, t.QTY, q.SYMBOL, q.BID
FROM TRADES t
INNER JOIN QUOTES q ON t.SYMBOL = q.SYMBOL
```

**The two sides' column names must be distinct** — the result type is the union of both, and a clash is
a compile error. Hence the [`rename`](pathname:///pct/PCT_Report_Functions.html#f/rename) above; [`project`](pathname:///pct/PCT_Report_Functions.html#f/project) works just as well. `JoinKind.LEFT`
gives the same shape with the right-hand columns empty where nothing matched.

[`lateral`](pathname:///pct/PCT_Report_Functions.html#f/lateral) is the correlated cousin: a relation computed per row of the left side, which is how you
express "the best matching row for each" without a window.

```Legend
->lateral({t | #>{guide::store::MarketDB.QUOTES}#
                 ->filter(q | $q.SYMBOL == $t.tSym)
                 ->select(~[BID])
                 ->sort(~BID->descending())
                 ->limit(1)})
```

```sql
-- equivalent DuckDB SQL
... INNER JOIN LATERAL (
      SELECT BID FROM QUOTES WHERE SYMBOL = t.tSym ORDER BY BID DESC LIMIT 1
    ) s ON true
```

It joins **inner**, so a left row whose function returns no rows disappears — in the example above a
symbol with no quotes is dropped entirely. That is the opposite of [`asOfJoin`](pathname:///pct/PCT_Report_Functions.html#f/asOfJoin), which keeps
unmatched left rows with the right-hand columns empty. Choose deliberately.

## Subquery predicates

A relation can sit on the right of a comparison, which is Pure's `IN (SELECT …)` family. These are
recent additions and easy to miss:

| Pure | SQL |
| --- | --- |
| `$v->in($rel)` | `IN (SELECT …)` |
| `$v->equalTo($rel)`, `$v > $rel`, [`lessThan`](pathname:///pct/PCT_Report_Functions.html#f/relation/lessThan//core_functions_relation/relation/functions/comparison/lessThan.pure), … | `= (SELECT …)`, `> (SELECT …)` against a one-row relation |
| [`equalAny`](pathname:///pct/PCT_Report_Functions.html#f/equalAny), [`greaterThanAny`](pathname:///pct/PCT_Report_Functions.html#f/greaterThanAny), [`lessThanEqualAny`](pathname:///pct/PCT_Report_Functions.html#f/lessThanEqualAny), … | `= ANY (SELECT …)`, `> ANY (SELECT …)` |
| [`equalAll`](pathname:///pct/PCT_Report_Functions.html#f/equalAll), [`greaterThanAll`](pathname:///pct/PCT_Report_Functions.html#f/greaterThanAll), [`lessThanEqualAll`](pathname:///pct/PCT_Report_Functions.html#f/lessThanEqualAll), … | `= ALL (SELECT …)`, `> ALL (SELECT …)` |
| [`exists`](pathname:///pct/PCT_Report_Functions.html#f/relation/exists//core_functions_relation/relation/functions/quantification/exists.pure) | `EXISTS (SELECT 1 …)` |

The relation must have exactly one column for the value comparisons — narrow it with [`select`](pathname:///pct/PCT_Report_Functions.html#f/select) first.

```Legend
eval({|
  let trades = #>{guide::store::MarketDB.TRADES}#;
  let quoted = #>{guide::store::MarketDB.QUOTES}#->select(~[SYMBOL]);
  $trades->filter(t | $t.SYMBOL->meta::pure::functions::relation::in($quoted));
})->from(guide::rt())
```

```sql
-- equivalent DuckDB SQL
WITH trades AS (SELECT * FROM TRADES),
     quoted AS (SELECT SYMBOL FROM QUOTES)
SELECT * FROM trades
WHERE SYMBOL IN (SELECT SYMBOL FROM quoted WHERE SYMBOL IS NOT NULL)
```

Three things that example is showing at once.

**The `let` bindings became CTEs** — that is the next section.

**`in` sometimes needs qualifying.** `meta::pure::functions::collection::in` also exists, taking a
collection, and on a `NOT NULL` column (so `[1]`) the collection overload can win — which surfaces much
later as an unhelpful *"trying to get an element at offset 0 where the collection is of size 0"* during
SQL generation. Writing `meta::pure::functions::relation::in` settles it. Several of the other predicates have namesakes
too, but those take scalar arguments rather than a collection and so resolve correctly unqualified —
`greaterThan` and `greaterThanAll` both do:

```Legend
$trades->filter(t | $t.PRICE->greaterThanAll($bids))
```

```sql
-- equivalent DuckDB SQL
WHERE PRICE IS NOT NULL AND PRICE > ALL (SELECT BID FROM bids WHERE BID IS NOT NULL)
```

**These predicates are two-valued**, and the generated SQL works to keep them that way — note the
`IS NOT NULL` guards it adds on both sides, and that [`exists`](pathname:///pct/PCT_Report_Functions.html#f/relation/exists//core_functions_relation/relation/functions/quantification/exists.pure) compiles to `IS NOT DISTINCT FROM`
rather than `=`. A null answers `false`, never `UNKNOWN`.

Which is why **negating them is rejected** rather than silently differing between stores:

```
Negating in(value, Relation) is not supported on relational stores.
Use not exists instead.
```

SQL's `NOT IN` returns `UNKNOWN`, and therefore drops rows, as soon as the searched column holds a null.
Write the question with [`exists`](pathname:///pct/PCT_Report_Functions.html#f/relation/exists//core_functions_relation/relation/functions/quantification/exists.pure), which makes the treatment of an absent value explicit:

```Legend
$d.departmentId->isEmpty() || !$employees->exists(e | $e.department == $d.departmentId)
```

## Naming an intermediate relation

Give a relation a name with `let`, and it becomes a **common table expression** named after the
variable:

```Legend
eval({|
  let t = #>{guide::store::MarketDB.TRADES}#->select(~[SYMBOL, QTY]);
  $t->filter(r | $r.QTY > 100)
    ->concatenate($t->filter(r | $r.QTY <= 100));
})->from(guide::rt())
```

```sql
-- equivalent DuckDB SQL
WITH t AS (SELECT SYMBOL, QTY FROM TRADES)
SELECT * FROM (SELECT * FROM t WHERE QTY > 100
               UNION ALL
               SELECT * FROM t WHERE QTY <= 100)
```

Bind several and you get several CTEs, as the subquery example above showed.

Three things about this worth knowing, because none of them is guessable:

**The `eval({| … })` wrapper is required.** It is not ceremony. A function body holding a `let` *and* a
result is two expressions, and the router rejects that:

```
Function guide::cteB__Relation_MANY_ is not yet supported
as functions with more than one expression can not be routed
```

[`eval`](pathname:///pct/PCT_Report_Functions.html#f/essential/eval//platform/pure/essential/lang/eval/eval.pure) on a zero-argument lambda collapses the block into the single
expression the router needs. Note this is a **different function** from the relation's own
[`eval`](pathname:///pct/PCT_Report_Functions.html#f/relation/eval//core_functions_relation/relation/functions/eval.pure), which reads a column out of a row and has nothing to do with
CTEs.

**Binding is what creates the CTE, not reusing.** A `let`-bound relation referenced only once still
becomes a `WITH`. Repeating the accessor instead of naming it gives you no CTE at all — a plain
subquery:

```Legend
// no let: a subquery, not a CTE
#>{…TRADES}#->project(~[NAME : x | $x.SYMBOL])
  ->concatenate(#>{…TRADES}#->project(~[NAME : x | $x.SYMBOL]))
```

**The CTE holds whatever you bound.** `let t = #>{db.TRADES}#` binds the whole table, so the CTE selects
every column even if the outer query wants one. Narrow inside the `let` when that matters:
`let t = #>{db.TRADES}#->select(~[SYMBOL])`.

### Recursive CTEs

[`recurse`](pathname:///pct/PCT_Report_Functions.html#f/relation/recurse//core_functions_relation/relation/functions/transformation/recurse.pure) evaluates a function against a relation over and over, collecting every row it
produces, until it produces none. Each round runs against the rows the previous round returned,
starting from the relation you hand it. On a relational store it becomes `WITH RECURSIVE`.

Walking an org chart down from whoever has no manager:

```Legend
eval({|
  let employees = #>{guide::store::MarketDB.EMPLOYEES}#;
  let top = $employees->filter(e | $e.MANAGER_ID->isEmpty())
                      ->project(~[empId : e | $e.EMP_ID, title : e | $e.TITLE, level : e | 1]);
  $top->recurse(x |
    $x->join($employees->project(~[eId : e | $e.EMP_ID, eTitle : e | $e.TITLE, mId : e | $e.MANAGER_ID]),
             JoinKind.INNER,
             {r, e | $r.empId == $e.mId})
      ->project(~[empId : r | $r.eId, title : r | $r.eTitle, level : r | $r.level->toOne() + 1]));
})->from(guide::rt())
```

```sql
-- equivalent DuckDB SQL
WITH RECURSIVE
  employees AS (SELECT EMP_ID, TITLE, MANAGER_ID FROM EMPLOYEES),
  top AS (SELECT EMP_ID AS empId, TITLE AS title, 1 AS level
          FROM employees WHERE MANAGER_ID IS NULL),
  rcte AS (
      SELECT empId, title, level FROM top
    UNION ALL
      SELECT e.EMP_ID AS empId, e.TITLE AS title, rcte.level + 1 AS level
      FROM rcte JOIN employees e ON rcte.empId = e.MANAGER_ID
  )
SELECT empId, title, level FROM rcte
```

Two constraints, both of which bite:

**Nothing bounds the recursion but you.** The step has to narrow towards an empty result — here the
join eventually matches nobody, but a depth counter plus a [`filter`](pathname:///pct/PCT_Report_Functions.html#f/relation/filter//core_functions_relation/relation/functions/iteration/filter.pure) works just as well. Get it wrong
and it does not terminate.

**The step must return the starting relation's columns**, in the same order and with the same types.
The schema is fixed by the initial relation exactly as a recursive CTE's anchor fixes its own, and
returning anything else is a compile error. Types include *multiplicity*, which is the easy one to trip
over: `level : e | 1` is `[1]` because it comes from a literal, so the recursive branch has to produce
`[1]` too — hence the `->toOne()` on a column that is otherwise `[0..1]`. Where the two will not line
up on their own, declare the type (`~title : String[1]`).

## Semi-structured data

A column does not have to be flat. A `SEMISTRUCTURED` column — JSON in the database — reads in Pure as
a **`Variant`**, and the variant functions let you navigate it inside an ordinary relation pipeline.
The navigation is pushed down: it becomes the store's own JSON operators, not a post-processing step in
the engine.

Five functions do nearly all of it:

| Function | Purpose |
| --- | --- |
| [`get`](pathname:///pct/PCT_Report_Functions.html#f/variant/get//core_functions_variant/functions/navigation/get.pure) | Read a key (`get('venue')`) or an array index (`get(0)`); the result is still a `Variant`, so calls chain |
| [`to`](pathname:///pct/PCT_Report_Functions.html#f/to) | Read a variant out as a typed value — `to(@Integer)` |
| [`toMany`](pathname:///pct/PCT_Report_Functions.html#f/toMany) | Read a variant holding a **array** out as a collection |
| [`fromJson`](pathname:///pct/PCT_Report_Functions.html#f/fromJson) / [`toJson`](pathname:///pct/PCT_Report_Functions.html#f/toJson) | Parse a JSON string into a variant, and back |
| [`flatten`](pathname:///pct/PCT_Report_Functions.html#f/relation/flatten//core_functions_relation/relation/functions/variant/flatten.pure) | Turn a collection into a one-column relation — one row per element |

### Navigating a payload

`get` walks; `to` lands. Because `get` returns a variant, a nested path is just a chain:

```Legend
#>{guide::store::MarketDB.ORDERS}#
  ->extend(~venue : o | $o.PAYLOAD->get('venue')->to(@String))
  ->extend(~qty   : o | $o.PAYLOAD->get('fill')->get('qty')->to(@Integer))
  ->filter(o | $o.qty > 100)
  ->from(guide::rt())
```

```sql
-- equivalent DuckDB SQL
SELECT ID, SYMBOL, PAYLOAD,
       (PAYLOAD -> 'venue') ->> '$'                  AS venue,
       CAST((PAYLOAD -> 'fill') -> 'qty' AS BIGINT)  AS qty
FROM ORDERS
WHERE CAST((PAYLOAD -> 'fill') -> 'qty' AS BIGINT) IS NOT NULL
  AND CAST((PAYLOAD -> 'fill') -> 'qty' AS BIGINT) > 100
```

Array elements are reached the same way, by index:

```Legend
->extend(~firstLeg : o | $o.PAYLOAD->get('legs')->get(0)->to(@Integer))
```

```sql
-- equivalent DuckDB SQL
CAST(CAST(PAYLOAD -> 'legs' AS JSON[]) -> '$[0]' AS BIGINT) AS firstLeg
```

Note what the `filter` generated: an extracted column is nullable, so the engine adds its own
`IS NOT NULL` guard. That follows from the rules below.

### What is empty and what fails

This is the part worth getting right, because the two behave very differently:

- **A missing *key* is empty, not an error.** `get('nope')` on an object without that key yields
  empty, and so does `get` on an empty variant — so navigating a path of keys that does not exist is
  safe. Test it with `isEmpty` / `isNotEmpty`:

  ```Legend
  ->filter(o | $o.PAYLOAD->get('venue')->isNotEmpty())
  ```

  ```sql
  -- equivalent DuckDB SQL
  WHERE (PAYLOAD -> 'venue') IS NOT NULL
  ```

- **A missing *index* is not.** The index form behaves differently from the key form: `get(2)` on a
  two-element array **fails** rather than yielding empty, because it reads through
  `at(T[*], Integer[1])`. Only the key form is safe to probe blindly. Both forms also fail if the
  variant does not hold the right JSON type — `get('k')` on an array, or `get(0)` on an object.
- **A bad conversion fails.** `to` coerces across JSON types — `'"1"'` reads as `1` for `@Integer`,
  `'"1.25"'` as `1.25` for `@Float` — but it does not truncate, so a JSON number with a fractional part
  fails against `@Integer`. Anything that cannot be coerced raises rather than returning empty. The one
  exception: JSON `null` reads back as empty for every target type.
- **`toMany` requires an array.** A variant holding an object, a string or a number fails rather than
  yielding a one-element collection.

So: probe *keys* you are unsure of with `isEmpty`/`isNotEmpty`, and expect a failure for an
out-of-range index, a wrong JSON type, or a value that will not coerce.

### Working with arrays

[`toMany`](pathname:///pct/PCT_Report_Functions.html#f/toMany) unpacks a JSON array into an ordinary Pure collection, after which the ordinary
collection functions apply. The important part is that **they do not come back to the engine to run** —
they are translated into the store's own array functions, lambdas included:

```Legend
#>{guide::store::MarketDB.ORDERS}#
  ->project(~[id    : o | $o.ID,
              total : o | $o.PAYLOAD->get('legs')->toMany(@Integer)
                                    ->filter(v | $v > 1)
                                    ->map(v | $v * 10)
                                    ->sum()])
  ->from(guide::rt())
```

```sql
-- equivalent DuckDB SQL
SELECT ID AS id,
       array_aggregate(
         apply(
           filter(CAST(PAYLOAD -> 'legs' AS BIGINT[]), lambda v : CAST(v AS BIGINT) > 1),
           lambda v : CAST(v AS BIGINT) * 10),
         'sum') AS total
FROM ORDERS
```

Your `filter` lambda became a DuckDB `filter` lambda, your `map` an `apply`, and the whole chain stayed
inside the query. No rows are shipped back to filter a three-element array.

#### What pushes down

Verified against DuckDB; other stores vary, so check the
[compatibility matrix](pathname:///pct/PCT_Report_Compatibility.html).

| Pure | DuckDB |
| --- | --- |
| `->size()` | `json_array_length(…)` |
| `->filter(v \| …)` | `filter(arr, lambda v : …)` |
| `->map(v \| …)` | `apply(arr, lambda v : …)` |
| `->fold({v, acc \| …}, init)` | `reduce(arr, lambda acc, v : …, init)` |
| `->sum()`, `->max()`, `->min()` | `array_aggregate(arr, 'sum' \| 'max' \| 'min')` |
| `->contains(x)` | `array_contains(arr, x)` |
| `->distinct()` | `array_distinct(arr)` |
| `->sort()` | `array_sort(arr)` |
| `->indexOf(x)` | `array_position(arr, x) - 1` |
| `->slice(a, b)` | array slice syntax |
| `->joinStrings(sep)` | `array_to_string(arr, sep)` |

Note `fold`'s argument order flips in translation: Pure writes the lambda `{v, acc | …}` — element
first — while the SQL is `lambda acc, v`. Write the Pure form and let the translation deal with it.

#### `exists` and `forAll` do not push down

The two obvious quantifiers are the gap. `->exists(v | …)` fails during SQL generation with
*"Cannot cast a collection of size 0 to multiplicity [1]"*, and `->forAll(v | …)` fails too. Express
them with `filter` and a count instead, which does push down:

```Legend
// "any leg over 5" — instead of ->exists(v | $v > 5)
->filter(o | $o.PAYLOAD->get('legs')->toMany(@Integer)->filter(v | $v > 5)->size() > 0)

// "every leg positive" — instead of ->forAll(v | $v > 0)
->filter(o | $o.PAYLOAD->get('legs')->toMany(@Integer)->filter(v | $v <= 0)->size() == 0)
```

```sql
-- equivalent DuckDB SQL, for the first
WHERE ifnull(json_array_length(
         CAST(filter(CAST(PAYLOAD -> 'legs' AS BIGINT[]), lambda v : CAST(v AS BIGINT) > 5) AS JSON)),
       0) > 0
```

Negate the predicate and compare to zero for the "all" case, as the second line does.

#### Calling your own functions

An unpacked array can be handed to a function you wrote, and it **still** pushes down — the translation
follows the call and inlines it:

```Legend
function guide::hasTwoEvens(vals: Integer[*]): Boolean[1]
{
  $vals->filter(v | $v->mod(2) == 0)->size() == 2
}

#>{guide::store::MarketDB.ORDERS}#
  ->filter(o | $o.PAYLOAD->get('legs')->toMany(@Integer)->guide::hasTwoEvens())
  ->from(guide::rt())
```

```sql
-- equivalent DuckDB SQL
WHERE ifnull(json_array_length(CAST(
         filter(CAST(PAYLOAD -> 'legs' AS BIGINT[]),
                lambda v : CAST(fmod(CAST(v AS BIGINT), 2) AS INTEGER) = 0)
       AS JSON)), 0) = 2
```

Nothing of `hasTwoEvens` survives as a function call — its body is compiled into the predicate. That is
the general shape: reusable domain logic stays reusable without costing you a round trip.

Reading an array with `@Variant` rather than a primitive leaves the elements as variants, which is how
you walk a **heterogeneous** array — each element can then be navigated with `get` in its own right.

### From JSON into rows

[`flatten`](pathname:///pct/PCT_Report_Functions.html#f/relation/flatten//core_functions_relation/relation/functions/variant/flatten.pure) is the way in from a plain collection: one row per element. Combined with `fromJson`
and `toMany`, it turns a JSON document into a relation you can then treat like any other:

```Legend
fromJson('[{"sym":"AAPL","qty":10},{"sym":"MSFT","qty":20}]')
  ->toMany(@Variant)
  ->flatten(~row)
  ->extend(~sym : r | $r.row->get('sym')->to(@String))
  ->extend(~qty : r | $r.row->get('qty')->to(@Integer))
```

```
row,sym,qty
'{"sym":"AAPL","qty":10}',AAPL,10
'{"sym":"MSFT","qty":20}',MSFT,20
```

`flatten` gives **one row per element of the input, not per element of a nested array**. Flattening
`fromJson('[[1,2],[3,4],[5,6]]')->toMany(@Variant)` gives three rows, each still holding an array —
flatten again to open them. To explode an array column *per row* of an existing relation, pair it with
[`lateral`](pathname:///pct/PCT_Report_Functions.html#f/lateral).

### Converting to a model

`to(@SomeClass)` reads a JSON object into a class instance, resolving a subtype from a `_type` key when
there is one. There is a limitation worth knowing before you design around it: **projecting the whole
model instance is not supported**, and fails naming the class —

```Legend
// fails: "The type ...::Person is not supported yet!"
->project(~[person : x | $x.payload->to(@Person)])

// works: project a property of the conversion
->project(~[name : x | $x.payload->to(@Person).name])
```

So convert and reach through to the values you want; do not try to land a whole object in a column.

## Time series

Time series is where the relation API earns its keep, and the platform gives you four tools that
compose into one pushed-down query:

| What you need | Tool |
| --- | --- |
| Resample — collapse rows into fixed intervals | [`timeBucket`](pathname:///pct/PCT_Report_Functions.html#f/timeBucket) |
| A window measured in *time* rather than rows | [`_range` with a `DurationUnit`](#_range-over-dates--rolling-time-windows) |
| The previous or next observation | [`lag`](pathname:///pct/PCT_Report_Functions.html#f/relation/lag//core_functions_relation/relation/functions/slice/lag.pure) / [`lead`](pathname:///pct/PCT_Report_Functions.html#f/lead) |
| The value in force at a point in time | [`asOfJoin`](pathname:///pct/PCT_Report_Functions.html#f/asOfJoin) |

The examples below use the `BARS` table — OHLCV bars, the shape the platform's own worked analyses
take.

### Resampling with `timeBucket`

[`timeBucket`](pathname:///pct/PCT_Report_Functions.html#f/timeBucket) snaps a timestamp down to the start of its interval, so grouping by it
resamples the series. Daily VWAP — each bar's typical price weighted by volume:

```Legend
#>{guide::store::MarketDB.BARS}#
  ->extend(~day : b | $b.BAR_TIME->timeBucket(1, DurationUnit.DAYS))
  ->groupBy(~[SYMBOL, day],
            ~[pxVol  : b | ($b.HIGH_PX + $b.LOW_PX + $b.CLOSE_PX) / 3 * $b.VOLUME : x | $x->sum(),
              volume : b | $b.VOLUME : v | $v->sum()])
  ->extend(~vwap : r | $r.pxVol / $r.volume)
  ->from(guide::rt())
```

```sql
-- equivalent DuckDB SQL
SELECT SYMBOL,
       time_bucket(to_days(1), BAR_TIME, TIMESTAMP '1970-01-01') AS day,
       sum((HIGH_PX + LOW_PX + CLOSE_PX) / 3 * VOLUME)           AS pxVol,
       sum(VOLUME)                                               AS volume,
       sum((HIGH_PX + LOW_PX + CLOSE_PX) / 3 * VOLUME) / sum(VOLUME) AS vwap
FROM BARS
GROUP BY SYMBOL, day
```

Change the unit and the same pipeline resamples to five-minute bars or to months. Two things to know
before you rely on it:

- **A `DateTime` accepts any unit; a `StrictDate` accepts only `YEARS`, `MONTHS`, `WEEKS` and `DAYS`** —
  a date has no time of day, so there is nothing for a sub-day unit to round. That is why the example
  above buckets `BAR_TIME` (a timestamp) rather than a date column.
- **Buckets are measured from the Unix epoch**, not from a calendar boundary — which is the
  `TIMESTAMP '1970-01-01'` argument in the generated SQL. For a quantity of 1 that coincides with the
  calendar; for `timeBucket(7, DurationUnit.DAYS)` the weeks run from 1 January 1970, not from Monday.

Not every store has a native bucketing function — check the
[compatibility matrix](pathname:///pct/PCT_Report_Compatibility.html).

### Rolling windows

Two ways, and the difference matters on real data. A window of **rows**
(`rows(-9, 0)`) is ten observations; a window of **time**
([`_range` with a `DurationUnit`](#_range-over-dates--rolling-time-windows)) is ten days however many
observations fell in them. Use the time form whenever the series can have gaps — a symbol that did not
trade yesterday should not silently borrow a bar from last week.

This is also the place for the other window column form. Everywhere above used
`~col : {p, w, r | …}` with an explicit `reduce`; a **map-then-reduce pair** reads better when you are
simply aggregating one expression over the frame:

```Legend
->extend(over(~SYMBOL, ~BAR_TIME->ascending(), rows(-4, 0)),
         ~sma5 : {p, w, r | $r.CLOSE_PX} : y | $y->average())
```

```sql
-- equivalent DuckDB SQL
avg(CLOSE_PX) OVER (PARTITION BY SYMBOL ORDER BY BAR_TIME ASC
                    ROWS BETWEEN 4 PRECEDING AND CURRENT ROW) AS sma5
```

**The window does not have to be full.** The first row of a partition averages one value, the second
two. If you need a figure only once there is enough history, filter on a row count.

### Comparing with the previous observation

[`lag`](pathname:///pct/PCT_Report_Functions.html#f/relation/lag//core_functions_relation/relation/functions/slice/lag.pure) reaches
back within the partition, and the first row of each partition has nothing to reach back to — so it
comes back empty. Pairing it with [`coalesce`](pathname:///pct/PCT_Report_Functions.html#f/coalesce) is the standard idiom, and it is what the
platform's own analyses do:

```Legend
->extend(over(~SYMBOL, ~BAR_TIME->ascending()),
         ~logReturn : {p, w, r | log($r.CLOSE_PX / coalesce($p->lag($r).CLOSE_PX, $r.CLOSE_PX))})
```

```sql
-- equivalent DuckDB SQL
ln(CLOSE_PX / coalesce(lag(CLOSE_PX, 1) OVER (PARTITION BY SYMBOL ORDER BY BAR_TIME ASC),
                       CLOSE_PX)) AS logReturn
```

Coalescing to the current row makes the first return zero. Coalescing to something else, or leaving it
empty, is a modelling decision — make it deliberately.

### Point-in-time joins

[`asOfJoin`](pathname:///pct/PCT_Report_Functions.html#f/asOfJoin) joins each left row to the **closest** matching right row rather than to all of them —
the point-in-time join. Pairing a trade with the quote in force when it happened is the canonical case,
and an ordinary [`join`](pathname:///pct/PCT_Report_Functions.html#f/join) on `>` cannot do it, because it would match every earlier quote.

Reach for the two-condition form first. `match` fixes the time relationship and the direction; `join`
pins the partition, so a trade is matched against quotes for **its own symbol** rather than the whole
market:

```Legend
#>{guide::store::MarketDB.TRADES}#
  ->select(~[SYMBOL, TRADE_TIME, QTY])
  ->rename(~SYMBOL, ~tSym)
  ->asOfJoin(#>{guide::store::MarketDB.QUOTES}#->select(~[SYMBOL, QUOTE_TIME, BID]),
             {t, q | $t.TRADE_TIME > $q.QUOTE_TIME},
             {t, q | $t.tSym == $q.SYMBOL})
  ->from(guide::rt())
```

```sql
-- equivalent DuckDB SQL
SELECT t.SYMBOL AS tSym, t.TRADE_TIME, t.QTY, q.SYMBOL, q.QUOTE_TIME, q.BID
FROM TRADES t
ASOF LEFT JOIN QUOTES q
  ON t.TRADE_TIME > q.QUOTE_TIME
 AND t.SYMBOL = q.SYMBOL
```

Three behaviours to hold on to:

- **Exactly one row out per left row.** That is the whole point.
- **The direction follows the operator.** `>` takes the latest right row *before* the left one; `<`
  takes the earliest one *after*.
- **Unmatched left rows survive, with the right columns empty.** It behaves like a left join, so a
  trade with no quote before it does not disappear. As with [`join`](pathname:///pct/PCT_Report_Functions.html#f/join), the two sides' column names must
  be distinct.

The one-condition form drops the partition and searches the whole right relation — occasionally what you
want, usually not.

### A worked example: rolling volatility

The pieces compose. Log returns, then the standard deviation of those returns over a ten-bar window,
then annualised — two stacked windows and a projection, in one statement:

```Legend
#>{guide::store::MarketDB.BARS}#
  ->select(~[SYMBOL, BAR_TIME, CLOSE_PX])
  ->extend(over(~SYMBOL, ~BAR_TIME->ascending()),
           ~logReturn : {p, w, r | log($r.CLOSE_PX / coalesce($p->lag($r).CLOSE_PX, $r.CLOSE_PX))})
  ->extend(over(~SYMBOL, ~BAR_TIME->ascending(), rows(-9, 0)),
           ~vol10 : {p, w, r | $r.logReturn} : y | $y->stdDevPopulation())
  ->project(~[symbol        : x | $x.SYMBOL,
              time          : x | $x.BAR_TIME,
              logReturn     : x | $x.logReturn->round(6),
              annualisedVol : x | ($x.vol10 * sqrt(252))->cast(@Float)->round(6)])
  ->from(guide::rt())
```

```sql
-- equivalent DuckDB SQL
SELECT SYMBOL AS symbol, BAR_TIME AS time,
       round(logReturn, 6) AS logReturn,
       round(stddev_pop(logReturn) OVER (PARTITION BY SYMBOL ORDER BY BAR_TIME ASC
                                         ROWS BETWEEN 9 PRECEDING AND CURRENT ROW)
             * 15.874507866387544, 6) AS annualisedVol
FROM (SELECT SYMBOL, BAR_TIME, CLOSE_PX,
             ln(CLOSE_PX / coalesce(lag(CLOSE_PX, 1) OVER (PARTITION BY SYMBOL ORDER BY BAR_TIME ASC),
                                    CLOSE_PX)) AS logReturn
      FROM BARS)
```

Two things that example is quietly teaching. **A window column can be the input to a later window** —
the second `extend` aggregates the column the first one created, and the engine stacks them as a
sub-select. And **shaping happens in a final `project`**: compute the values first, then round and
rename in one pass at the end. That keeps each `extend` about one idea, and it is the shape the
platform's own analyses use.

The `cast(@Float)` before `round` is there because the two-argument `round` takes a `Float`, and the
multiplication produced a `Number`. A `cast` only re-declares a type, it does not convert — it works
here because `sqrt` really does return a `Float`. Where the value is not already the right type,
convert with `toFloat` or `toDecimal` instead.

### Ready-made analyses

The platform ships a set of these as tested, documented functions. They are worth reading as much as
calling — each one is a compact, idiomatic worked example over the same OHLCV shape:

| Function | What it does |
| --- | --- |
| [`simpleMovingAverage5Days`](pathname:///pct/PCT_Report_Functions.html#f/simpleMovingAverage5Days) | Five-day SMA of the close, per symbol |
| [`logReturn`](pathname:///pct/PCT_Report_Functions.html#f/logReturn) | Log return against the previous bar |
| [`annualizedRolling10DaysVolatility`](pathname:///pct/PCT_Report_Functions.html#f/annualizedRolling10DaysVolatility) | Rolling 10-day volatility, annualised — builds on `logReturn` |
| [`monthlyVWAP`](pathname:///pct/PCT_Report_Functions.html#f/monthlyVWAP) | Volume-weighted average price per calendar month, via `timeBucket` |
| [`maxDrawDown`](pathname:///pct/PCT_Report_Functions.html#f/maxDrawDown) | Worst peak-to-trough move per symbol |
| [`gapAnalysis`](pathname:///pct/PCT_Report_Functions.html#f/gapAnalysis) | Overnight gap between one bar's close and the next bar's open |

`annualizedRolling10DaysVolatility` is the one to read first: it calls `logReturn` and extends its
result, which is the point — these are ordinary functions over relations, so they compose like any
other.

## Where to go next

- **[All 67 relation functions](pathname:///pct/PCT_Report_Functions.html#p/relation/meta::pure::functions::relation)**
  — the package page, with every signature and its documentation. Go here when this guide does not
  mention what you need, or mentions it without the overload you want: the guide is selective, the
  package page is not.
- **[Per-store compatibility](pathname:///pct/PCT_Report_Compatibility.html)** — whether a function works
  on *your* database. Worth checking before building on anything in this guide.
- **[Function Reference](released-functions.md)** — the whole function library, relation and otherwise.
- **[Legend SQL](legend-sql.md)** — querying Legend over the Postgres wire protocol, and the Postgres
  parity reports.

Things that do not exist, so you can stop looking: there is no `take` ([`limit`](pathname:///pct/PCT_Report_Functions.html#f/limit), [`drop`](pathname:///pct/PCT_Report_Functions.html#f/relation/drop//core_functions_relation/relation/functions/slice/drop.pure),
[`slice`](pathname:///pct/PCT_Report_Functions.html#f/relation/slice//core_functions_relation/relation/functions/slice/slice.pure)), no `count` in the relation package ([`size`](pathname:///pct/PCT_Report_Functions.html#f/relation/size//core_functions_relation/relation/functions/size/size.pure), or `count` as a reducer), and no relation
`olapGroupBy` ([window functions](#window-functions)).

There are no set operations beyond `UNION ALL` either, and `exists`/`forAll` do not push down over
variant arrays.

Going the other way — a relation as the *source* of a mapped class — is a Mapping feature rather than a
query one: a class can be mapped to a relation-returning function with `~func`. See
[Relational mapping](../tutorials/studio-relational-mapping.md).

## Function index

Every function in the relation package, including those this guide does not discuss. Follow a link for
its signatures, documentation and per-store support.


| Function | Category | Reference |
| --- | --- | --- |
| `joinStrings` | aggregation | [`joinStrings`](pathname:///pct/PCT_Report_Functions.html#f/relation/joinStrings//core_functions_relation/relation/functions/aggregation/joinStrings.pure) |
| `equalTo` | comparison | [`equalTo`](pathname:///pct/PCT_Report_Functions.html#f/equalTo) |
| `greaterThan` | comparison | [`greaterThan`](pathname:///pct/PCT_Report_Functions.html#f/relation/greaterThan//core_functions_relation/relation/functions/comparison/greaterThan.pure) |
| `greaterThanEqual` | comparison | [`greaterThanEqual`](pathname:///pct/PCT_Report_Functions.html#f/relation/greaterThanEqual//core_functions_relation/relation/functions/comparison/greaterThanEqual.pure) |
| `lessThan` | comparison | [`lessThan`](pathname:///pct/PCT_Report_Functions.html#f/relation/lessThan//core_functions_relation/relation/functions/comparison/lessThan.pure) |
| `lessThanEqual` | comparison | [`lessThanEqual`](pathname:///pct/PCT_Report_Functions.html#f/relation/lessThanEqual//core_functions_relation/relation/functions/comparison/lessThanEqual.pure) |
| `assertTdsEquivalent` | core | [`assertTdsEquivalent`](pathname:///pct/PCT_Report_Functions.html#f/assertTdsEquivalent) |
| `columns` | core | [`columns`](pathname:///pct/PCT_Report_Functions.html#f/columns) |
| `eval` | core | [`eval`](pathname:///pct/PCT_Report_Functions.html#f/relation/eval//core_functions_relation/relation/functions/eval.pure) |
| `s` | core | [`s`](pathname:///pct/PCT_Report_Functions.html#f/s) |
| `toCSVString` | core | [`toCSVString`](pathname:///pct/PCT_Report_Functions.html#f/toCSVString) |
| `toString` | core | [`toString`](pathname:///pct/PCT_Report_Functions.html#f/relation/toString//core_functions_relation/relation/functions/toString.pure) |
| `wrapPrimitiveInTDS` | core | [`wrapPrimitiveInTDS`](pathname:///pct/PCT_Report_Functions.html#f/wrapPrimitiveInTDS) |
| `project` | graph | [`project`](pathname:///pct/PCT_Report_Functions.html#f/project) |
| `filter` | iteration | [`filter`](pathname:///pct/PCT_Report_Functions.html#f/relation/filter//core_functions_relation/relation/functions/iteration/filter.pure) |
| `map` | iteration | [`map`](pathname:///pct/PCT_Report_Functions.html#f/relation/map//core_functions_relation/relation/functions/iteration/map.pure) |
| `_range` | olap | [`_range`](pathname:///pct/PCT_Report_Functions.html#f/_range) |
| `over` | olap | [`over`](pathname:///pct/PCT_Report_Functions.html#f/over) |
| `reduce` | olap | [`reduce`](pathname:///pct/PCT_Report_Functions.html#f/reduce) |
| `rows` | olap | [`rows`](pathname:///pct/PCT_Report_Functions.html#f/rows) |
| `ascending` | order | [`ascending`](pathname:///pct/PCT_Report_Functions.html#f/ascending) |
| `descending` | order | [`descending`](pathname:///pct/PCT_Report_Functions.html#f/descending) |
| `emptyFirst` | order | [`emptyFirst`](pathname:///pct/PCT_Report_Functions.html#f/emptyFirst) |
| `emptyLast` | order | [`emptyLast`](pathname:///pct/PCT_Report_Functions.html#f/emptyLast) |
| `sort` | order | [`sort`](pathname:///pct/PCT_Report_Functions.html#f/relation/sort//core_functions_relation/relation/functions/order/sort.pure) |
| `equalAll` | quantification | [`equalAll`](pathname:///pct/PCT_Report_Functions.html#f/equalAll) |
| `equalAny` | quantification | [`equalAny`](pathname:///pct/PCT_Report_Functions.html#f/equalAny) |
| `exists` | quantification | [`exists`](pathname:///pct/PCT_Report_Functions.html#f/relation/exists//core_functions_relation/relation/functions/quantification/exists.pure) |
| `greaterThanAll` | quantification | [`greaterThanAll`](pathname:///pct/PCT_Report_Functions.html#f/greaterThanAll) |
| `greaterThanAny` | quantification | [`greaterThanAny`](pathname:///pct/PCT_Report_Functions.html#f/greaterThanAny) |
| `greaterThanEqualAll` | quantification | [`greaterThanEqualAll`](pathname:///pct/PCT_Report_Functions.html#f/greaterThanEqualAll) |
| `greaterThanEqualAny` | quantification | [`greaterThanEqualAny`](pathname:///pct/PCT_Report_Functions.html#f/greaterThanEqualAny) |
| `in` | quantification | [`in`](pathname:///pct/PCT_Report_Functions.html#f/relation/in//core_functions_relation/relation/functions/quantification/in.pure) |
| `lessThanAll` | quantification | [`lessThanAll`](pathname:///pct/PCT_Report_Functions.html#f/lessThanAll) |
| `lessThanAny` | quantification | [`lessThanAny`](pathname:///pct/PCT_Report_Functions.html#f/lessThanAny) |
| `lessThanEqualAll` | quantification | [`lessThanEqualAll`](pathname:///pct/PCT_Report_Functions.html#f/lessThanEqualAll) |
| `lessThanEqualAny` | quantification | [`lessThanEqualAny`](pathname:///pct/PCT_Report_Functions.html#f/lessThanEqualAny) |
| `cumulativeDistribution` | ranking | [`cumulativeDistribution`](pathname:///pct/PCT_Report_Functions.html#f/cumulativeDistribution) |
| `denseRank` | ranking | [`denseRank`](pathname:///pct/PCT_Report_Functions.html#f/denseRank) |
| `ntile` | ranking | [`ntile`](pathname:///pct/PCT_Report_Functions.html#f/ntile) |
| `percentRank` | ranking | [`percentRank`](pathname:///pct/PCT_Report_Functions.html#f/percentRank) |
| `rank` | ranking | [`rank`](pathname:///pct/PCT_Report_Functions.html#f/rank) |
| `rowNumber` | ranking | [`rowNumber`](pathname:///pct/PCT_Report_Functions.html#f/rowNumber) |
| `size` | size | [`size`](pathname:///pct/PCT_Report_Functions.html#f/relation/size//core_functions_relation/relation/functions/size/size.pure) |
| `drop` | slice | [`drop`](pathname:///pct/PCT_Report_Functions.html#f/relation/drop//core_functions_relation/relation/functions/slice/drop.pure) |
| `first` | slice | [`first`](pathname:///pct/PCT_Report_Functions.html#f/relation/first//core_functions_relation/relation/functions/slice/first.pure) |
| `lag` | slice | [`lag`](pathname:///pct/PCT_Report_Functions.html#f/lag) |
| `last` | slice | [`last`](pathname:///pct/PCT_Report_Functions.html#f/relation/last//core_functions_relation/relation/functions/slice/last.pure) |
| `lead` | slice | [`lead`](pathname:///pct/PCT_Report_Functions.html#f/lead) |
| `limit` | slice | [`limit`](pathname:///pct/PCT_Report_Functions.html#f/limit) |
| `nth` | slice | [`nth`](pathname:///pct/PCT_Report_Functions.html#f/nth) |
| `offset` | slice | [`offset`](pathname:///pct/PCT_Report_Functions.html#f/offset) |
| `slice` | slice | [`slice`](pathname:///pct/PCT_Report_Functions.html#f/relation/slice//core_functions_relation/relation/functions/slice/slice.pure) |
| `aggregate` | transformation | [`aggregate`](pathname:///pct/PCT_Report_Functions.html#f/aggregate) |
| `asOfJoin` | transformation | [`asOfJoin`](pathname:///pct/PCT_Report_Functions.html#f/asOfJoin) |
| `concatenate` | transformation | [`concatenate`](pathname:///pct/PCT_Report_Functions.html#f/relation/concatenate//core_functions_relation/relation/functions/transformation/concatenate.pure) |
| `distinct` | transformation | [`distinct`](pathname:///pct/PCT_Report_Functions.html#f/distinct) |
| `extend` | transformation | [`extend`](pathname:///pct/PCT_Report_Functions.html#f/extend) |
| `groupBy` | transformation | [`groupBy`](pathname:///pct/PCT_Report_Functions.html#f/relation/groupBy//core_functions_relation/relation/functions/transformation/groupBy.pure) |
| `join` | transformation | [`join`](pathname:///pct/PCT_Report_Functions.html#f/join) |
| `lateral` | transformation | [`lateral`](pathname:///pct/PCT_Report_Functions.html#f/lateral) |
| `pivot` | transformation | [`pivot`](pathname:///pct/PCT_Report_Functions.html#f/pivot) |
| `recurse` | transformation | [`recurse`](pathname:///pct/PCT_Report_Functions.html#f/relation/recurse//core_functions_relation/relation/functions/transformation/recurse.pure) |
| `rename` | transformation | [`rename`](pathname:///pct/PCT_Report_Functions.html#f/rename) |
| `select` | transformation | [`select`](pathname:///pct/PCT_Report_Functions.html#f/select) |
| `flatten` | variant | [`flatten`](pathname:///pct/PCT_Report_Functions.html#f/flatten) |
| `write` | write | [`write`](pathname:///pct/PCT_Report_Functions.html#f/write) |
