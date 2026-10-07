# SQL Structural Parity — Legend SQL (LegendSql)

## Summary

| Metric | TDS | Relation |
|--------|-----|----------|
| Total features | 612 | 612 |
| Total tests | 691 | 691 |
| ⚪ UNSUPPORTED | 232 | 52 |
| ✅ PASS | 354 (77.1%) | 497 (77.8%) |
| ❌ FAIL | 11 | 13 |
| 💥 ERROR | 94 | 129 |
| ❓ SKIP | 0 | 0 |
| **Pass rate** | **77.1%** | **77.8%** |

_Percentages exclude UNSUPPORTED and SKIP from the denominator._

---

## Error Categories

| Category | Description | TDS | Relation |
|----------|-------------|-----|----------|
| [ALIAS_NOT_FOUND](#alias-not-found) | Column or alias reference cannot be resolved | 7 | 6 |
| [MISC](#misc) | Other/uncategorized error | 43 | 85 |
| [UNSUPPORTED_SYNTAX](#unsupported-syntax) | SQL construct recognized but not yet implemented | 215 | 33 |
| [TYPE_ERROR](#type-error) | Type mismatch or cast error | 19 | 13 |
| [FUNCTION_NOT_SUPPORTED](#function-not-supported) | Function name not recognized by Legend SQL | 17 | 18 |
| [RESULT_MISMATCH](#result-mismatch) | Query executes but results differ from Postgres | 11 | 13 |
| [FUNCTION_NO_SQL_TRANSLATION](#function-no-sql-translation) | Pure function exists but has no SQL translation | 0 | 1 |
| [PARSE_ERROR](#parse-error) | SQL syntax not parseable by Legend SQL parser | 25 | 25 |

---

## Category Summary

| Category | Features | Tests | TDS PASS | TDS PARTIAL | TDS FAIL | TDS ERROR | TDS UNTESTED | Rel PASS | Rel PARTIAL | Rel FAIL | Rel ERROR | Rel UNTESTED |
|----------|----------|-------|----------|-------------|----------|-----------|--------------|----------|-------------|----------|-----------|-------------|
| [joins](#joins) | 10 | 24 | 10 | 0 | 0 | 0 | 0 | 10 | 0 | 0 | 0 | 0 |
| [set_operations](#set_operations) | 25 | 32 | 4 | 1 | 0 | 4 | 0 | 16 | 1 | 0 | 8 | 0 |
| [subqueries](#subqueries) | 34 | 48 | 5 | 0 | 0 | 0 | 0 | 26 | 1 | 0 | 5 | 0 |
| [ctes](#ctes) | 10 | 13 | 0 | 0 | 0 | 7 | 0 | 7 | 0 | 0 | 1 | 0 |
| [order_limit_offset](#order_limit_offset) | 20 | 30 | 20 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 |
| [group_by](#group_by) | 12 | 17 | 12 | 0 | 0 | 0 | 0 | 12 | 0 | 0 | 0 | 0 |
| [distinct](#distinct) | 11 | 14 | 10 | 0 | 0 | 1 | 0 | 10 | 0 | 0 | 1 | 0 |
| [null_semantics](#null_semantics) | 17 | 17 | 13 | 0 | 3 | 0 | 0 | 15 | 0 | 1 | 0 | 0 |
| [type_casting](#type_casting) | 12 | 12 | 10 | 0 | 0 | 2 | 0 | 11 | 0 | 0 | 1 | 0 |
| [case_expressions](#case_expressions) | 15 | 15 | 15 | 0 | 0 | 0 | 0 | 15 | 0 | 0 | 0 | 0 |
| [where_predicates](#where_predicates) | 20 | 20 | 12 | 0 | 2 | 0 | 0 | 17 | 0 | 3 | 0 | 0 |
| [aliases](#aliases) | 15 | 15 | 14 | 0 | 0 | 1 | 0 | 14 | 0 | 0 | 1 | 0 |
| [having](#having) | 11 | 11 | 11 | 0 | 0 | 0 | 0 | 11 | 0 | 0 | 0 | 0 |
| [lateral_joins](#lateral_joins) | 31 | 31 | 0 | 0 | 0 | 7 | 0 | 0 | 0 | 0 | 12 | 0 |
| [boolean_logic](#boolean_logic) | 16 | 16 | 10 | 0 | 2 | 4 | 0 | 9 | 0 | 2 | 5 | 0 |
| [select_star](#select_star) | 8 | 8 | 6 | 0 | 1 | 1 | 0 | 7 | 0 | 1 | 0 | 0 |
| [multiple_schemas](#multiple_schemas) | 7 | 7 | 4 | 0 | 2 | 0 | 0 | 5 | 0 | 2 | 0 | 0 |
| [json_operators](#json_operators) | 46 | 46 | 8 | 0 | 0 | 30 | 0 | 7 | 0 | 2 | 29 | 0 |
| [interval_arithmetic](#interval_arithmetic) | 16 | 25 | 8 | 2 | 0 | 4 | 0 | 8 | 1 | 0 | 5 | 0 |
| [column_resolution](#column_resolution) | 35 | 35 | 31 | 0 | 0 | 2 | 0 | 31 | 0 | 0 | 4 | 0 |
| [column_resolution_corpus](#column_resolution_corpus) | 121 | 121 | 71 | 0 | 0 | 1 | 0 | 114 | 0 | 0 | 2 | 0 |
| [grouping_sets](#grouping_sets) | 4 | 4 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 2 | 0 |
| [filter_clause](#filter_clause) | 3 | 3 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 |
| [within_group](#within_group) | 4 | 4 | 2 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 1 | 0 |
| [tablesample](#tablesample) | 3 | 3 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 3 | 0 |
| [fetch_with_ties](#fetch_with_ties) | 3 | 3 | 1 | 0 | 0 | 2 | 0 | 1 | 0 | 0 | 2 | 0 |
| [recursive_ctes](#recursive_ctes) | 10 | 10 | 0 | 0 | 0 | 3 | 0 | 6 | 0 | 0 | 3 | 0 |
| [values_clause](#values_clause) | 4 | 4 | 3 | 0 | 0 | 1 | 0 | 3 | 0 | 0 | 1 | 0 |
| [window_frames](#window_frames) | 23 | 30 | 3 | 0 | 0 | 4 | 0 | 7 | 0 | 0 | 16 | 0 |
| [window_partitioning](#window_partitioning) | 13 | 14 | 6 | 0 | 0 | 0 | 0 | 13 | 0 | 0 | 0 | 0 |
| [compositions](#compositions) | 53 | 59 | 16 | 0 | 0 | 4 | 0 | 32 | 0 | 0 | 17 | 0 |

---

<a id="joins"></a>

## joins

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | INNER JOIN | 4 | PASS (4/4) | PASS (4/4) |  |
| 🟢 | LEFT JOIN | 3 | PASS (3/3) | PASS (3/3) |  |
| 🟢 | RIGHT JOIN | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | FULL OUTER JOIN | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | CROSS JOIN | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | Self-join | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | Multi-table JOIN | 3 | PASS (3/3) | PASS (3/3) |  |
| 🟢 | JOIN + aggregation | 3 | PASS (3/3) | PASS (3/3) |  |
| 🟢 | JOIN on derived table re-binding an outer alias | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | JOIN on derived table whose inner scope collides with an outer alias | 1 | PASS (1/1) | PASS (1/1) |  |

<a id="set_operations"></a>

## set_operations

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | UNION ALL | 3 | PASS (3/3) | PASS (3/3) |  |
| 🟢 | UNION | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟡 | Multiple UNION | 2 | PARTIAL (1/2) | PARTIAL (1/2) | [ALIAS_NOT_FOUND](#fail-union_multiple_mixed-TDS), [MISC](#fail-union_multiple_mixed-Relation) |
| 🔴 | UNION with aggregates | 2 | ERROR (0/2) | ERROR (0/2) | [ALIAS_NOT_FOUND](#fail-union_with_agg-TDS), [MISC](#fail-union_with_agg-Relation) |
| 🟡 | EXCEPT | 2 | UNTESTED | PASS (2/2) | [UNSUPPORTED_SYNTAX](#fail-except_basic-TDS) |
| 🟡 | EXCEPT with LIMIT | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-except_with_limit-TDS) |
| 🟡 | Multiple EXCEPT | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-except_multiple-TDS) |
| 🟡 | EXCEPT with NULLs | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-except_nulls-TDS) |
| 🔴 | EXCEPT with aggregates | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-except_with_agg-TDS), [MISC](#fail-except_with_agg-Relation) |
| 🔴 | EXCEPT with expressions | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-except_expression-TDS), [MISC](#fail-except_expression-Relation) |
| 🟡 | EXCEPT count | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-except_count-TDS) |
| 🟡 | INTERSECT | 2 | UNTESTED | PASS (2/2) | [UNSUPPORTED_SYNTAX](#fail-intersect_basic-TDS) |
| 🟡 | INTERSECT with LIMIT | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-intersect_with_limit-TDS) |
| 🟡 | Multiple INTERSECT | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-intersect_multiple-TDS) |
| 🟡 | INTERSECT with NULLs | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-intersect_nulls-TDS) |
| 🔴 | INTERSECT with aggregates | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-intersect_with_agg-TDS), [MISC](#fail-intersect_with_agg-Relation) |
| 🔴 | INTERSECT with expressions | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-intersect_expression-TDS), [MISC](#fail-intersect_expression-Relation) |
| 🟡 | INTERSECT count | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-intersect_count-TDS) |
| 🟡 | EXCEPT with INTERSECT | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-except_then_intersect-TDS) |
| 🟡 | UNION with EXCEPT | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-union_then_except-TDS) |
| 🟢 | UNION ALL with NULLs | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | UNION ALL with expressions | 1 | ERROR (0/1) | ERROR (0/1) | [ALIAS_NOT_FOUND](#fail-union_all_expression-TDS), [MISC](#fail-union_all_expression-Relation) |
| 🔴 | UNION with CASE/labels | 1 | ERROR (0/1) | ERROR (0/1) | [ALIAS_NOT_FOUND](#fail-union_with_case-TDS), [MISC](#fail-union_with_case-Relation) |
| 🟢 | UNION ALL count | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | UNION dedup with NULL | 1 | ERROR (0/1) | ERROR (0/1) | [TYPE_ERROR](#fail-union_dedup_null-TDS), [MISC](#fail-union_dedup_null-Relation) |

<a id="subqueries"></a>

## subqueries

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| ⚪ | Scalar subquery in SELECT | 2 | UNTESTED | UNTESTED | [FUNCTION_NOT_SUPPORTED](#fail-subquery_scalar_select-TDS) |
| 🟡 | Subquery with IN | 2 | UNTESTED | PASS (2/2) | [UNSUPPORTED_SYNTAX](#fail-subquery_in_where-TDS) |
| 🟡 | Subquery with NOT IN | 2 | UNTESTED | PASS (2/2) | [UNSUPPORTED_SYNTAX](#fail-subquery_not_in-TDS) |
| 🟡 | Subquery with EXISTS | 2 | UNTESTED | PASS (2/2) | [UNSUPPORTED_SYNTAX](#fail-subquery_exists-TDS) |
| 🟡 | Subquery with NOT EXISTS | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-subquery_not_exists-TDS) |
| 🟢 | Derived table (subquery in FROM) | 2 | PASS (2/2) | PASS (2/2) |  |
| 🔴 | Correlated subquery | 2 | UNTESTED | ERROR (0/2) | [UNSUPPORTED_SYNTAX](#fail-subquery_correlated-TDS), [MISC](#fail-subquery_correlated-Relation), [FUNCTION_NOT_SUPPORTED](#fail-subquery_correlated_count-TDS) |
| 🟡 | Subquery with aggregate comparison | 2 | UNTESTED | PASS (2/2) | [UNSUPPORTED_SYNTAX](#fail-subquery_agg_comparison-TDS) |
| 🔴 | Subquery in HAVING | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-subquery_in_having-TDS), [MISC](#fail-subquery_in_having-Relation) |
| 🟡 | Subquery with UNION | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-subquery_union-TDS) |
| 🟡 | IN (subquery) over a UNION | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-subquery_in_over_union-TDS) |
| 🟢 | Derived table with HAVING | 1 | PASS (1/1) | PASS (1/1) |  |
| ⚪ | Scalar subquery in arithmetic | 1 | UNTESTED | UNTESTED | [FUNCTION_NOT_SUPPORTED](#fail-subquery_scalar_arithmetic-TDS) |
| 🟡 | EXISTS with multiple conditions | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-subquery_exists_multi_cond-TDS) |
| 🟡 | Subquery in CASE | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-subquery_in_case-TDS) |
| 🟡 | Uncorrelated EXISTS | 2 | UNTESTED | PASS (2/2) | [UNSUPPORTED_SYNTAX](#fail-subquery_exists_uncorrelated-TDS) |
| 🟡 | EXISTS selecting a column | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-subquery_exists_select_column-TDS) |
| 🔴 | EXISTS over grouped subquery | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-subquery_exists_grouped-TDS), [MISC](#fail-subquery_exists_grouped-Relation) |
| 🟡 | Uncorrelated IN (subquery) | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-subquery_in_uncorrelated_filtered-TDS) |
| 🔴 | Correlated IN (subquery) | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-subquery_in_correlated-TDS), [MISC](#fail-subquery_in_correlated-Relation) |
| 🟡 | IN (subquery) with empty result | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-subquery_in_empty-TDS) |
| 🟡 | Quantified comparison ANY | 3 | UNTESTED | PASS (3/3) | [UNSUPPORTED_SYNTAX](#fail-subquery_quant_gt_any-TDS) |
| 🟡 | Quantified comparison ALL | 2 | UNTESTED | PASS (2/2) | [UNSUPPORTED_SYNTAX](#fail-subquery_quant_gt_all-TDS) |
| 🟡 | Quantified comparison SOME | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-subquery_quant_ge_some-TDS) |
| 🟡 | Quantified comparison ALL over a nullable column | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-subquery_quant_all_null_in_subquery-TDS) |
| 🔴 | Correlated quantified comparison | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-subquery_quant_all_correlated_empty-TDS), [MISC](#fail-subquery_quant_all_correlated_empty-Relation) |
| 🟡 | Quantified comparison ALL over an empty subquery | 2 | UNTESTED | PARTIAL (1/2) | [UNSUPPORTED_SYNTAX](#fail-subquery_quant_all_empty-TDS), [RESULT_MISMATCH](#fail-subquery_quant_all_empty_null_value-Relation) |
| 🟡 | Quantified comparison ANY over an empty subquery | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-subquery_quant_any_empty-TDS) |
| 🟡 | Negated quantified comparison | 2 | UNTESTED | PASS (2/2) | [UNSUPPORTED_SYNTAX](#fail-subquery_quant_not_gt_any-TDS) |
| 🟡 | Correlated EXISTS with unqualified outer column | 2 | UNTESTED | PASS (2/2) | [UNSUPPORTED_SYNTAX](#fail-subquery_exists_correlated_unqualified_outer_column-TDS) |
| 🟡 | Correlated EXISTS with unqualified inner column | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-subquery_exists_unqualified_inner_column_control-TDS) |
| 🟢 | outer subquery alias reuses inner FROM alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | distinct outer/inner aliases (control) | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | outer alias matches inner join RHS alias | 1 | PASS (1/1) | PASS (1/1) |  |

<a id="ctes"></a>

## ctes

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟡 | Basic CTE | 2 | ERROR (0/2) | PASS (2/2) | [MISC](#fail-cte_basic-TDS) |
| 🟡 | Multiple CTEs | 1 | ERROR (0/1) | PASS (1/1) | [MISC](#fail-cte_multiple-TDS) |
| 🟡 | CTE referencing CTE | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-cte_chained-TDS) |
| 🟡 | CTE with aggregation | 2 | ERROR (0/2) | PASS (2/2) | [MISC](#fail-cte_with_agg-TDS) |
| 🔴 | CTE in JOIN | 2 | ERROR (0/2) | UNTESTED | [TYPE_ERROR](#fail-cte_in_join-TDS), [UNSUPPORTED_SYNTAX](#fail-cte_in_join-Relation) |
| ⚪ | CTE referenced multiple times | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-cte_used_twice-TDS), [FUNCTION_NO_SQL_TRANSLATION](#fail-cte_used_twice-Relation) |
| 🟡 | CTE with window function | 1 | ERROR (0/1) | PASS (1/1) | [MISC](#fail-cte_with_window-TDS) |
| 🔴 | CTE with UNION | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-cte_with_union-TDS) |
| 🟡 | CTE filter on aggregate | 1 | ERROR (0/1) | PASS (1/1) | [MISC](#fail-cte_filter_agg-TDS) |
| 🟡 | CTE with CASE | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-cte_with_case-TDS) |

<a id="order_limit_offset"></a>

## order_limit_offset

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | ORDER BY ASC | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | ORDER BY DESC | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | ORDER BY multiple columns | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | Positional ORDER BY | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | ORDER BY expression | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | LIMIT | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | LIMIT + OFFSET | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | NULLS FIRST | 3 | PASS (3/3) | PASS (3/3) |  |
| 🟢 | NULLS LAST | 3 | PASS (3/3) | PASS (3/3) |  |
| 🟢 | NULLS FIRST multi-column | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | NULLS LAST multi-column | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | NULLS FIRST/LAST mixed multi-column | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | NULLS ordering mixed with plain ordering | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | NULLS FIRST with LIMIT | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | FETCH FIRST | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | LIMIT 0 | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | OFFSET without LIMIT | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | ORDER BY CASE | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | ORDER BY alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | LIMIT + large OFFSET | 1 | PASS (1/1) | PASS (1/1) |  |

<a id="group_by"></a>

## group_by

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | GROUP BY single column | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | GROUP BY multiple columns | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | GROUP BY with HAVING | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | GROUP BY with multiple aggregates | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY expression | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | ORDER BY aggregate | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | Conditional aggregation | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY positional | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY with COALESCE | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY + COUNT(DISTINCT) | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY MIN/MAX on strings | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | HAVING with multiple conditions | 1 | PASS (1/1) | PASS (1/1) |  |

<a id="distinct"></a>

## distinct

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | DISTINCT single column | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | DISTINCT multiple columns | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | DISTINCT with NULLs | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | COUNT(DISTINCT) | 2 | PASS (2/2) | PASS (2/2) |  |
| 🔴 | DISTINCT ON | 1 | ERROR (0/1) | ERROR (0/1) | [PARSE_ERROR](#fail-distinct_on-TDS) |
| 🟢 | DISTINCT + ORDER BY | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | DISTINCT expression | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | DISTINCT in subquery | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | DISTINCT with COALESCE | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | SUM(DISTINCT) | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | DISTINCT + LIMIT | 1 | PASS (1/1) | PASS (1/1) |  |

<a id="null_semantics"></a>

## null_semantics

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | IS NULL | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | IS NOT NULL | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | NULL in arithmetic | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | NULL = NULL | 1 | FAIL (0/1) | PASS (1/1) | [RESULT_MISMATCH](#fail-null_equals_null-TDS) |
| 🟡 | NULL in comparison | 1 | FAIL (0/1) | PASS (1/1) | [RESULT_MISMATCH](#fail-null_not_equals-TDS) |
| 🟢 | COALESCE | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | COALESCE multi-arg | 1 | PASS (1/1) | PASS (1/1) |  |
| ⚪ | NULLIF | 1 | UNTESTED | UNTESTED | [FUNCTION_NOT_SUPPORTED](#fail-null_nullif-TDS) |
| 🟢 | NULL in COUNT | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | NULL in SUM | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | CASE with NULL | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | IS DISTINCT FROM | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | IS NOT DISTINCT FROM | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | NULL excluded from BETWEEN | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | NULL in concatenation | 1 | FAIL (0/1) | FAIL (0/1) | [RESULT_MISMATCH](#fail-null_concat-TDS) |
| 🟢 | NULL in GROUP BY | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GREATEST with NULL | 1 | PASS (1/1) | PASS (1/1) |  |

<a id="type_casting"></a>

## type_casting

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | CAST integer to text | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | CAST text to integer | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | CAST numeric to integer | 1 | ERROR (0/1) | ERROR (0/1) | [TYPE_ERROR](#fail-cast_numeric_to_int-TDS) |
| 🟢 | CAST NULL | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | CAST in WHERE | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | Boolean to text | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | Implicit type coercion | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | CAST float to integer | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | CAST integer to boolean | 1 | ERROR (0/1) | PASS (1/1) | [TYPE_ERROR](#fail-cast_int_to_bool-TDS) |
| 🟢 | CAST in expression | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | CAST date to text | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | CAST in ORDER BY | 1 | PASS (1/1) | PASS (1/1) |  |

<a id="case_expressions"></a>

## case_expressions

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | simple CASE | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | simple CASE without ELSE | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | simple CASE multiple WHENs | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | searched CASE | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | searched CASE without ELSE | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | searched CASE single WHEN | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | CASE returning NULL | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | CASE with NULL condition | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | simple CASE comparing NULL | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | CASE in WHERE | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | CASE in ORDER BY | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | CASE in GROUP BY | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | nested CASE | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | CASE inside aggregate | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | CASE with arithmetic | 1 | PASS (1/1) | PASS (1/1) |  |

<a id="where_predicates"></a>

## where_predicates

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | BETWEEN | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | NOT BETWEEN | 1 | FAIL (0/1) | FAIL (0/1) | [RESULT_MISMATCH](#fail-where_not_between-TDS) |
| 🟢 | BETWEEN with text | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | IN (list) | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | NOT IN (list) | 1 | FAIL (0/1) | FAIL (0/1) | [RESULT_MISMATCH](#fail-where_not_in_list-TDS) |
| 🟡 | IN (subquery) | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-where_in_subquery-TDS) |
| 🟡 | NOT IN (subquery) | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-where_not_in_subquery-TDS) |
| 🟢 | IN with strings | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | LIKE with % | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | LIKE with _ | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | NOT LIKE | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | ILIKE | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | NOT ILIKE | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | EXISTS | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-where_exists-TDS) |
| 🟡 | NOT EXISTS | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-where_not_exists-TDS) |
| 🟡 | ANY | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-where_any-TDS) |
| 🟡 | ALL | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-where_all-TDS) |
| 🟢 | compound AND/OR | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | NOT with compound | 1 | PASS (1/1) | FAIL (0/1) | [RESULT_MISMATCH](#fail-where_not_compound-Relation) |
| 🟢 | operator precedence (AND binds tighter) | 1 | PASS (1/1) | PASS (1/1) |  |

<a id="aliases"></a>

## aliases

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | column alias with AS | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | column alias without AS | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | expression alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | table alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | self-join with aliases | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | alias in ORDER BY | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | alias in HAVING | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | quoted identifier alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | reserved word as quoted alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | subquery alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | subquery alias with column list | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-alias_subquery_column_list-TDS) |
| 🟢 | sibling select item reads the displaced base column | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | displaced column must not escape the subquery | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | two computed columns aliased over two source columns | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | control - no collision, no displacement | 1 | PASS (1/1) | PASS (1/1) |  |

<a id="having"></a>

## having

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | HAVING with COUNT | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | HAVING with SUM | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | HAVING with AVG | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | HAVING with MAX | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | HAVING with multiple conditions | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | HAVING with OR | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | HAVING with arithmetic expression | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | HAVING with CASE | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | HAVING without GROUP BY | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | HAVING without GROUP BY (no result) | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | HAVING with non-selected aggregate | 1 | PASS (1/1) | PASS (1/1) |  |

<a id="lateral_joins"></a>

## lateral_joins

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| ⚪ | CROSS JOIN LATERAL | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-lateral_cross_basic-TDS), [FUNCTION_NOT_SUPPORTED](#fail-lateral_cross_basic-Relation) |
| 🔴 | CROSS JOIN LATERAL subquery | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-lateral_cross_subquery-TDS) |
| 🔴 | LEFT JOIN LATERAL | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-lateral_left_join-TDS) |
| 🔴 | LEFT JOIN LATERAL with no match | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-lateral_left_join_no_match-TDS) |
| 🔴 | LATERAL top-N per group | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-lateral_top_n-TDS) |
| ⚪ | function in FROM | 1 | UNTESTED | UNTESTED | [FUNCTION_NOT_SUPPORTED](#fail-lateral_function_in_from-TDS) |
| ⚪ | function in FROM with cross join | 1 | UNTESTED | UNTESTED | [FUNCTION_NOT_SUPPORTED](#fail-lateral_function_cross_join-TDS) |
| 🔴 | LATERAL with aggregation | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-lateral_aggregate-TDS) |
| ⚪ | LATERAL UNNEST with array literal | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_array_literal-TDS) |
| ⚪ | LATERAL UNNEST with string array | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_string_array-TDS) |
| 🔴 | LATERAL UNNEST with ordinality | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-lateral_unnest_with_ordinality-TDS) |
| ⚪ | LATERAL UNNEST with correlated column reference | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_correlated_size-TDS) |
| ⚪ | LATERAL UNNEST with conditional array | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_correlated_conditional-TDS) |
| ⚪ | LEFT JOIN LATERAL UNNEST | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_left_join-TDS) |
| ⚪ | LEFT JOIN LATERAL UNNEST with empty array | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_left_join_empty_array-TDS) |
| ⚪ | LATERAL UNNEST with WHERE clause on unnested value | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_with_where-TDS) |
| ⚪ | LATERAL UNNEST with join condition | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_with_join_condition-TDS) |
| 🔴 | LATERAL UNNEST with aggregation | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_aggregate_count-TDS), [TYPE_ERROR](#fail-lateral_unnest_aggregate_count-Relation) |
| 🔴 | LATERAL UNNEST with SUM aggregation | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_aggregate_sum-TDS), [MISC](#fail-lateral_unnest_aggregate_sum-Relation) |
| 🔴 | LATERAL UNNEST multiple arrays | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_multiple_arrays-TDS), [MISC](#fail-lateral_unnest_multiple_arrays-Relation) |
| ⚪ | LATERAL UNNEST in subquery | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_nested-TDS) |
| ⚪ | LATERAL UNNEST with decimal array | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_decimal_array-TDS) |
| ⚪ | LATERAL UNNEST with expression array | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_mixed_expressions-TDS) |
| 🔴 | LATERAL UNNEST for top-N per array element | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-lateral_unnest_top_n_per_array_element-TDS) |
| ⚪ | LATERAL UNNEST with CASE expression | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_with_case-TDS) |
| ⚪ | LATERAL UNNEST with self-join | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_self_join-TDS) |
| ⚪ | LATERAL UNNEST with NULL values in array | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_array_with_nulls-TDS) |
| ⚪ | LATERAL UNNEST with COALESCE on unnested nulls | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_coalesce-TDS) |
| 🔴 | LATERAL UNNEST with STRING_TO_ARRAY | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_string_to_array-TDS), [TYPE_ERROR](#fail-lateral_unnest_string_to_array-Relation) |
| 🔴 | LATERAL UNNEST with STRING_TO_ARRAY on correlated column | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_string_to_array_correlated-TDS), [TYPE_ERROR](#fail-lateral_unnest_string_to_array_correlated-Relation) |
| ⚪ | LATERAL UNNEST with STRING_TO_ARRAY custom delimiter | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-lateral_unnest_string_to_array_delimiter-TDS) |

<a id="boolean_logic"></a>

## boolean_logic

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | TRUE literal | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | FALSE literal | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | boolean literals in SELECT | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | boolean column without = TRUE | 1 | PASS (1/1) | ERROR (0/1) | [MISC](#fail-bool_column_implicit-Relation) |
| 🟢 | NOT boolean column | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | IS TRUE | 1 | ERROR (0/1) | ERROR (0/1) | [PARSE_ERROR](#fail-bool_is_true-TDS) |
| 🔴 | IS FALSE | 1 | ERROR (0/1) | ERROR (0/1) | [PARSE_ERROR](#fail-bool_is_false-TDS) |
| 🔴 | IS NOT TRUE | 1 | ERROR (0/1) | ERROR (0/1) | [PARSE_ERROR](#fail-bool_is_not_true-TDS) |
| 🔴 | IS NOT FALSE | 1 | ERROR (0/1) | ERROR (0/1) | [PARSE_ERROR](#fail-bool_is_not_false-TDS) |
| 🟢 | boolean expression in SELECT | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | compound boolean in SELECT | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | NULL AND TRUE | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | NULL AND FALSE | 1 | FAIL (0/1) | FAIL (0/1) | [RESULT_MISMATCH](#fail-bool_null_and_false-TDS) |
| 🔴 | NULL OR TRUE | 1 | FAIL (0/1) | FAIL (0/1) | [RESULT_MISMATCH](#fail-bool_null_or_true-TDS) |
| 🟢 | NULL OR FALSE | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | NOT NULL (boolean) | 1 | PASS (1/1) | PASS (1/1) |  |

<a id="select_star"></a>

## select_star

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | SELECT * | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | SELECT * with WHERE | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | SELECT table.* | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | SELECT table.* with join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | SELECT multiple table.* | 1 | FAIL (0/1) | FAIL (0/1) | [RESULT_MISMATCH](#fail-star_multiple_tables-TDS) |
| 🟢 | SELECT * from subquery | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | SELECT * from CTE | 1 | ERROR (0/1) | PASS (1/1) | [MISC](#fail-star_from_cte-TDS) |
| 🟢 | SELECT table.* with extra expression | 1 | PASS (1/1) | PASS (1/1) |  |

<a id="multiple_schemas"></a>

## multiple_schemas

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | schema-qualified table | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | schema-qualified SELECT * | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | schema-qualified join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | schema-qualified subquery | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-schema_qualified_subquery-TDS) |
| 🟢 | default schema resolution | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | information_schema.tables | 1 | FAIL (0/1) | FAIL (0/1) | [RESULT_MISMATCH](#fail-schema_information_tables-TDS) |
| 🔴 | information_schema.columns | 1 | FAIL (0/1) | FAIL (0/1) | [RESULT_MISMATCH](#fail-schema_information_columns-TDS) |

<a id="json_operators"></a>

## json_operators

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🔴 | JSON field extract (->) | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-json_extract_field-TDS) |
| 🔴 | JSON nested field extract (->)(->) | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-json_extract_field_nested-TDS) |
| 🔴 | JSON array index extract (-> int) | 1 | ERROR (0/1) | FAIL (0/1) | [MISC](#fail-json_extract_array_index-TDS), [RESULT_MISMATCH](#fail-json_extract_array_index-Relation) |
| 🔴 | JSON array negative index extract (-> -1) | 1 | ERROR (0/1) | FAIL (0/1) | [MISC](#fail-json_extract_array_negative_index-TDS), [RESULT_MISMATCH](#fail-json_extract_array_negative_index-Relation) |
| 🟡 | JSON field extract as text (->>) | 1 | PASS (1/1) | ERROR (0/1) | [MISC](#fail-json_extract_text_field-Relation) |
| 🟡 | JSON field extract number as text (->>) | 1 | PASS (1/1) | ERROR (0/1) | [MISC](#fail-json_extract_text_number-Relation) |
| 🟢 | JSON array index extract as text (->> int) | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | JSON extract text missing key returns NULL (->>) | 1 | PASS (1/1) | ERROR (0/1) | [MISC](#fail-json_extract_text_null_key-Relation) |
| 🔴 | JSON path extract (#>) | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-json_path_extract-TDS) |
| 🔴 | JSON path extract into array (#>) | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-json_path_extract_array-TDS) |
| 🔴 | JSON deep path extract (#>) | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-json_path_extract_deep-TDS) |
| 🟡 | JSON path extract as text (#>>) | 1 | PASS (1/1) | ERROR (0/1) | [MISC](#fail-json_path_extract_text-Relation) |
| 🟡 | JSON path extract number as text (#>>) | 1 | PASS (1/1) | ERROR (0/1) | [MISC](#fail-json_path_extract_text_number-Relation) |
| 🔴 | JSONB contains (@>) | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-jsonb_contains_right-TDS) |
| 🔴 | JSONB array contains (@>) | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-jsonb_contains_right_array-TDS) |
| 🔴 | JSONB contains false (@>) | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-jsonb_contains_right_false-TDS) |
| 🔴 | JSONB nested contains (@>) | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-jsonb_contains_right_nested-TDS) |
| 🔴 | JSONB contained by (<@) | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-jsonb_contained_by-TDS) |
| 🔴 | JSONB contained by false (<@) | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-jsonb_contained_by_false-TDS) |
| ⚪ | JSONB has key (?) | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-jsonb_has_key-TDS) |
| ⚪ | JSONB has key false (?) | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-jsonb_has_key_false-TDS) |
| ⚪ | JSONB has any key (?|) | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-jsonb_has_any_key-TDS) |
| ⚪ | JSONB has any key false (?|) | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-jsonb_has_any_key_false-TDS) |
| 🔴 | JSONB has all keys (?&) | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-jsonb_has_all_keys-TDS) |
| 🔴 | JSONB has all keys false (?&) | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-jsonb_has_all_keys_false-TDS) |
| ⚪ | JSONB concat objects (||) | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-jsonb_concat_objects-TDS) |
| ⚪ | JSONB concat override key (||) | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-jsonb_concat_override-TDS) |
| ⚪ | JSONB concat arrays (||) | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-jsonb_concat_arrays-TDS) |
| ⚪ | JSONB concat value to array (||) | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-jsonb_concat_value_to_array-TDS) |
| 🔴 | JSONB delete key (-) | 1 | ERROR (0/1) | ERROR (0/1) | [TYPE_ERROR](#fail-jsonb_delete_key-TDS) |
| 🔴 | JSONB delete array element by index (-) | 1 | ERROR (0/1) | ERROR (0/1) | [TYPE_ERROR](#fail-jsonb_delete_array_element-TDS) |
| 🔴 | JSONB delete missing key no-op (-) | 1 | ERROR (0/1) | ERROR (0/1) | [TYPE_ERROR](#fail-jsonb_delete_missing_key-TDS) |
| 🔴 | JSONB delete path (#-) | 1 | ERROR (0/1) | ERROR (0/1) | [TYPE_ERROR](#fail-jsonb_delete_path-TDS) |
| 🔴 | JSONB delete path array element (#-) | 1 | ERROR (0/1) | ERROR (0/1) | [TYPE_ERROR](#fail-jsonb_delete_path_array-TDS) |
| 🔴 | JSONB path exists (@?) | 1 | ERROR (0/1) | ERROR (0/1) | [TYPE_ERROR](#fail-jsonb_path_exists-TDS) |
| 🔴 | JSONB path exists false (@?) | 1 | ERROR (0/1) | ERROR (0/1) | [TYPE_ERROR](#fail-jsonb_path_exists_false-TDS) |
| 🔴 | JSONB path match (@@) | 1 | ERROR (0/1) | ERROR (0/1) | [TYPE_ERROR](#fail-jsonb_path_match-TDS) |
| 🔴 | JSONB path match false (@@) | 1 | ERROR (0/1) | ERROR (0/1) | [TYPE_ERROR](#fail-jsonb_path_match_false-TDS) |
| 🟡 | JSON extract then text (-> then ->>) | 1 | PASS (1/1) | ERROR (0/1) | [MISC](#fail-json_extract_then_text-Relation) |
| 🟢 | JSON operator in WHERE clause | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | JSONB containment in WHERE | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-jsonb_contains_in_where-TDS) |
| 🟡 | JSON column nested extract IS NULL in WHERE | 1 | ERROR (0/1) | PASS (1/1) | [TYPE_ERROR](#fail-json_column_nested_extract_in_where_is_null-TDS) |
| 🟡 | JSON column nested extract IS NOT NULL in WHERE | 1 | ERROR (0/1) | PASS (1/1) | [TYPE_ERROR](#fail-json_column_nested_extract_in_where_is_not_null-TDS) |
| 🟡 | JSON column nested extract NOT ... IS NULL in WHERE | 1 | ERROR (0/1) | PASS (1/1) | [TYPE_ERROR](#fail-json_column_nested_extract_in_where_not_is_null-TDS) |
| 🟡 | JSON column extract as text compared in WHERE | 1 | ERROR (0/1) | PASS (1/1) | [TYPE_ERROR](#fail-json_column_extract_text_in_where_equals-TDS) |
| 🟡 | JSON column nested extract in SELECT and WHERE | 1 | ERROR (0/1) | PASS (1/1) | [TYPE_ERROR](#fail-json_column_nested_extract_in_select_and_where-TDS) |

<a id="interval_arithmetic"></a>

## interval_arithmetic

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | date + interval | 3 | PASS (3/3) | PASS (3/3) |  |
| 🟢 | date - interval | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | timestamp + interval | 3 | PASS (3/3) | PASS (3/3) |  |
| 🟢 | timestamp - interval | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | date - date | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | timestamp - timestamp | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-interval_ts_diff_literal-TDS) |
| ⚪ | interval * scalar | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-interval_multiply_scalar-TDS) |
| ⚪ | interval / scalar | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-interval_divide_scalar-TDS) |
| 🟡 | compound interval literal | 2 | PARTIAL (1/2) | PARTIAL (1/2) | [RESULT_MISMATCH](#fail-interval_compound_literal-TDS) |
| 🟢 | interval in WHERE | 2 | PASS (1/2) | PASS (1/2) | [FUNCTION_NOT_SUPPORTED](#fail-interval_in_where_ts-TDS) |
| 🟡 | EXTRACT from interval | 2 | PARTIAL (1/2) | ERROR (0/2) | [MISC](#fail-interval_extract_epoch-TDS) |
| 🟢 | aggregate on date+interval | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | aggregate on date-interval | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | date + interval column | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-interval_column_plus_date-TDS) |
| 🔴 | timestamp + interval column | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-interval_column_plus_ts-TDS) |
| 🔴 | make_interval + date | 1 | ERROR (0/1) | ERROR (0/1) | [PARSE_ERROR](#fail-interval_make_interval_plus_date-TDS) |

<a id="column_resolution"></a>

## column_resolution

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | ORDER BY function expression | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | ORDER BY arithmetic expression | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | ORDER BY CASE expression | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | ORDER BY null-ordering CASE guard | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | ORDER BY multiple expression keys | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | ORDER BY COALESCE over nullable column | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | ORDER BY plain column then expression | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | ORDER BY expression over a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | ORDER BY expression alongside a computed select item | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | ORDER BY ordinal with a literal in the select list | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | ORDER BY plain column (control) | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | DISTINCT with plain ORDER BY (exclusion control) | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY qualified key over a join with a self-named alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY key from the right join side | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY keys from both join sides | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY over a join, aggregate over the other side | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY over a join with several aggregates | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY + HAVING over a join with a self-named alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY ordinal over a join with a self-named alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY with no aggregates over a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY over a self-join with a self-named alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY over a join ordered by the aggregate's output alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | window PARTITION BY over a join with a self-named alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | window ORDER BY key over a join with a self-named alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | window keys drawn from both join sides | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | two window functions over a join with a self-named alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | window aggregate over a join with a self-named alias | 1 | PASS (1/1) | ERROR (0/1) | [MISC](#fail-colres_e2_window_aggregate_over_join-Relation) |
| 🟢 | window over a self-join with a self-named alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | non-aggregate window argument naming a column the select list also renames | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-colres_e2_window_argument_renamed_column-TDS) |
| 🟡 | non-aggregate window argument over a self-join, both sides realiased | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-colres_e2_window_argument_renamed_column_self_join-TDS) |
| 🟡 | window partition key when both join sides expose the same column name | 1 | PASS (1/1) | ERROR (0/1) | [MISC](#fail-colres_e2_window_two_sides_renamed_differently-Relation) |
| 🟢 | GROUP BY key when both join sides expose the same column name | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | ORDER BY aggregate expression (excluded from materialisation) | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | ORDER BY expression in a window query (excluded from materialisation) | 1 | ERROR (0/1) | ERROR (0/1) | [ALIAS_NOT_FOUND](#fail-colres_gap_order_by_expression_in_window_query-TDS) |
| 🔴 | ORDER BY expression over a column the projection drops | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-colres_gap_order_by_expression_over_unprojected_column-TDS) |

<a id="column_resolution_corpus"></a>

## column_resolution_corpus

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | window ORDER BY ... DESC NULLS LAST over a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | window ORDER BY ... ASC NULLS FIRST over a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | window ORDER BY ... ASC NULLS LAST over a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | window ORDER BY ... DESC NULLS FIRST over a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | window ORDER BY with a null-ordered key plus a plain key, over a join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1a_win_order_nulls_last_then_plain_key-TDS) |
| 🟡 | window ORDER BY with two null-ordered keys, over a join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1a_win_order_two_null_ordered_keys-TDS) |
| 🟡 | window ORDER BY with three keys and mixed null ordering, over a join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1a_win_order_three_keys_mixed_null_ordering-TDS) |
| 🟡 | window ORDER BY null-ordered key from the right join side | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1a_win_order_nulls_last_key_from_right_side-TDS) |
| 🟡 | window partitioned on one join side, null-ordered on the other | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1a_win_partition_right_order_left_nulls_last-TDS) |
| 🟡 | window ORDER BY ... NULLS LAST over a LEFT OUTER JOIN | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1a_win_order_nulls_last_over_left_join-TDS) |
| 🟡 | window ORDER BY ... NULLS LAST over a three-way join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1a_win_order_nulls_last_over_three_way_join-TDS) |
| 🟡 | window ORDER BY ... NULLS LAST over a join of two derived tables | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1a_win_order_nulls_last_over_derived_table_join-TDS) |
| 🟡 | LEAD over a null-ordered window, over a join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1a_win_lead_nulls_last_over_join-TDS) |
| 🟡 | LAG over a null-ordered window, over a join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1a_win_lag_nulls_first_over_join-TDS) |
| 🟡 | ROW_NUMBER dedup with NULLS LAST in a derived table, filtered on rn = 1 | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1a_dedup_row_number_nulls_last_filtered-TDS) |
| 🟡 | ROW_NUMBER dedup with NULLS LAST over a LEFT JOIN, filtered on rn = 1 | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1a_dedup_row_number_nulls_last_left_join_filtered-TDS) |
| 🟡 | window ORDER BY ... NULLS LAST, single table (control: no join) | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1a_win_order_nulls_last_no_join-TDS) |
| 🟢 | statement-level ORDER BY ... NULLS LAST over a join (control: no window) | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | statement-level ORDER BY ... NULLS FIRST over a LEFT JOIN (control: no window) | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | window ORDER BY CASE null guard plus real key, over a join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1b_win_order_case_null_guard_over_join-TDS) |
| 🟡 | window ORDER BY CASE null guard as the leading key, over a join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1b_win_order_case_null_guard_only_over_join-TDS) |
| 🟡 | window ORDER BY CASE null guard with DESC, over a join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1b_win_order_case_null_guard_desc_over_join-TDS) |
| 🟡 | window ORDER BY CASE null guard on the right join side | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1b_win_order_case_null_guard_right_side_over_join-TDS) |
| 🟡 | window ORDER BY CASE null guard over a LEFT OUTER JOIN | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1b_win_order_case_null_guard_over_left_join-TDS) |
| 🟡 | ROW_NUMBER dedup with a CASE null guard, filtered on rn = 1 | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1b_dedup_case_null_guard_filtered-TDS) |
| 🟡 | window ORDER BY CASE null guard, single table (control: no join) | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1b_win_order_case_null_guard_no_join-TDS) |
| 🟢 | window ORDER BY UPPER(col) over a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | two window sort keys whose expressions differ only by table qualifier | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | window ORDER BY CAST(col AS DATE) over a join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1c_win_order_cast_to_date_over_join-TDS) |
| 🟡 | window ORDER BY COALESCE(col, literal) over a join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1c_win_order_coalesce_one_side_over_join-TDS) |
| 🟡 | window ORDER BY an expression reading both join sides | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1c_win_order_coalesce_both_sides_over_join-TDS) |
| 🟡 | window ORDER BY SUBSTRING(col ...) over a join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1c_win_order_substring_over_join-TDS) |
| 🟡 | window ORDER BY arithmetic across both join sides | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1c_win_order_arithmetic_both_sides_over_join-TDS) |
| 🟡 | window ORDER BY EXTRACT(part FROM col) over a join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1c_win_order_extract_over_join-TDS) |
| 🟡 | window ORDER BY a CASE nested inside a function, over a join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1c_win_order_nested_case_in_function_over_join-TDS) |
| 🟢 | window ORDER BY an expression the projection already computes | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | control: window ORDER BY UPPER(col), single table | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | control: window ORDER BY COALESCE(col, literal), single table | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1c_win_order_coalesce_single_table-TDS) |
| 🟡 | control: window ORDER BY a CASE expression, single table | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1c_win_order_case_single_table-TDS) |
| 🟢 | control: window PARTITION BY a CASE expression, single table | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | control: window ORDER BY an expression, single table, no aliasing | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g1c_win_order_expression_no_rename_single_table-TDS) |
| 🟢 | GROUP BY key that reaches the select list only inside an expression | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY key inside an expression, aggregate reading the other join side | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY key over a LEFT OUTER JOIN | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY alias.col AS col over a LEFT OUTER JOIN | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY key over a three-way join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY keys drawn from all three sides of a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY key over a join of two derived tables | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY a column computed inside the derived join side | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY an expression key over a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY a concatenation expression with COUNT(DISTINCT), over a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY with HAVING over a LEFT OUTER JOIN | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY over a join, ordered by an aggregate with NULLS LAST | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | window PARTITION BY CAST(col AS DATE) over a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | window PARTITION BY a CASE expression over a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | window PARTITION BY SUBSTRING(col ...) over a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | window PARTITION BY an expression reading both join sides | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | window PARTITION BY UPPER(...) over a LEFT OUTER JOIN | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | window PARTITION BY EXTRACT(part FROM col) over a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | window with expression keys in both PARTITION BY and ORDER BY, over a join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g3_partition_expression_and_order_expression_over_join-TDS) |
| 🟢 | window PARTITION BY a bare key over a three-way join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | two window functions with expression keys, over a join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g3_two_windows_with_expression_keys_over_join-TDS) |
| 🟡 | two window functions with null-ordered keys, over a join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g3_two_windows_with_null_ordered_keys_over_join-TDS) |
| 🟢 | statement ORDER BY a qualified key, two derived sides sharing an output name | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | statement ORDER BY a qualified key over a LEFT OUTER JOIN | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | statement ORDER BY qualified keys over a three-way join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | statement ORDER BY a column the projection keeps only through a CAST | 1 | ERROR (0/1) | ERROR (0/1) | [ALIAS_NOT_FOUND](#fail-crcs_g4_order_by_column_projected_only_through_a_cast-TDS) |
| 🟢 | statement ORDER BY an expression over a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | statement ORDER BY an aggregate expression over a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | statement ORDER BY an ordinal over a join (control) | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | SELECT DISTINCT with a qualified statement ORDER BY key, over a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | statement ORDER BY a source column the projection renamed away | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | statement ORDER BY an ordinal naming an unaliased column whose base name collides across the join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | statement ORDER BY a qualified key whose base name also matches an earlier select item | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | statement ORDER BY an aggregate the projection aliased, over a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | statement ORDER BY the projection's own output alias, over a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | correlated subquery referencing an outer alias, outer is a comma join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g5_correlated_subquery_outer_is_comma_join-TDS) |
| 🟡 | correlated subquery referencing an outer alias, outer is an explicit join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g5_correlated_subquery_outer_is_explicit_join-TDS) |
| 🟡 | correlated subquery referencing both outer join sides | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g5_correlated_subquery_referencing_both_join_sides-TDS) |
| ⚪ | correlated subquery in the select list, over a join | 1 | UNTESTED | UNTESTED | [FUNCTION_NOT_SUPPORTED](#fail-crcs_g5_correlated_subquery_in_select_list_over_join-TDS) |
| 🟡 | EXISTS correlated on an outer alias, over a join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g5_exists_correlated_over_join-TDS) |
| 🟡 | IN (correlated subquery) over a join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g5_in_subquery_correlated_over_join-TDS) |
| 🟡 | correlated MAX comparison against an outer alias, comma join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g5_correlated_max_then_compare_comma_join-TDS) |
| 🟢 | join whose right side is itself a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | predicate reading a column of a nested join side | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | derived-table alias referenced in a later join's ON, through a function | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | three derived join sides with chained ON clauses | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | derived table internally re-using the enclosing query's table alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | ON predicate comparing an outer alias against a derived table that re-uses that alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | left-nested three-way join whose derived right side re-uses a left alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | derived table re-using both enclosing aliases | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | outer alias re-used two subquery levels down | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | control: same shape with a non-colliding alias inside the derived table | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | alias re-use in a non-aggregating derived join side | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | alias re-use, outer alias also read in the ON predicate | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | alias re-use in a non-aggregating derived side of a left-nested three-way join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | alias re-use of both enclosing aliases, no aggregate | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | alias re-use two subquery levels down, no aggregate | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | control: non-aggregating derived side with no colliding alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | control: two derived join sides, no alias collision | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | two derived join sides where the right subquery re-uses the outer left alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | join of two derived sides that publish the same column name | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | window over a join of two derived sides sharing a column name | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g5_two_derived_sides_sharing_a_column_name_with_window-TDS) |
| ⚪ | SELECT alias.* over a join | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-crcs_g6_select_star_of_one_side_over_join-TDS) |
| ⚪ | SELECT alias.* plus a column from the other join side | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-crcs_g6_select_star_plus_other_side_column-TDS) |
| ⚪ | SELECT alias.* where the alias is a derived table, over a join | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-crcs_g6_select_star_of_derived_side_over_join-TDS) |
| ⚪ | SELECT x.* carrying a window over a derived join, filtered on the rank | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-crcs_g6_select_star_with_window_over_derived_join-TDS) |
| 🟢 | derived table wrapping a join, columns read from outside | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | GROUP BY over a derived table built from SELECT alias.* on a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | quoted reserved-word column alias carried through a UNION of derived selects | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | quoted reserved-word alias through a UNION ALL, grouped from outside | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | COUNT(*) as a sort key with EXTRACT group keys | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | COUNT(*) as a sort key over a join | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | UNION ALL of aggregate branches over different joins | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | UNION ALL where one branch carries a correlated filter over a comma join | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g6_union_all_branches_with_correlated_filters-TDS) |
| 🟢 | SELECT DISTINCT over a join whose right side is a DISTINCT derived table | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | both join sides projecting a column of the same base name | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | colliding base names with a window partitioned on the colliding column | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | self join with an expression key in the window ORDER BY | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g6_self_join_with_window_expression_key-TDS) |
| 🟡 | self join with NULLS LAST in the window ORDER BY | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g6_self_join_with_null_ordered_window_key-TDS) |
| 🔴 | aggregate + window over a join | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-crcs_g2_agg_win_over_join-TDS), [ALIAS_NOT_FOUND](#fail-crcs_g2_agg_win_over_join-Relation) |

<a id="grouping_sets"></a>

## grouping_sets

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🔴 | GROUPING SETS | 1 | ERROR (0/1) | ERROR (0/1) | [PARSE_ERROR](#fail-grouping_sets_basic-TDS) |
| ⚪ | ROLLUP | 1 | UNTESTED | UNTESTED | [FUNCTION_NOT_SUPPORTED](#fail-rollup_basic-TDS) |
| ⚪ | CUBE | 1 | UNTESTED | UNTESTED | [FUNCTION_NOT_SUPPORTED](#fail-cube_basic-TDS) |
| 🔴 | GROUPING function | 1 | ERROR (0/1) | ERROR (0/1) | [PARSE_ERROR](#fail-grouping_sets_with_grouping_func-TDS) |

<a id="filter_clause"></a>

## filter_clause

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟡 | FILTER (WHERE ...) on COUNT | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-filter_clause_count-TDS) |
| 🟡 | FILTER (WHERE ...) on SUM | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-filter_clause_sum-TDS) |
| 🟡 | FILTER (WHERE ...) multiple aggregates | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-filter_clause_multiple_aggs-TDS) |

<a id="within_group"></a>

## within_group

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | WITHIN GROUP percentile_cont | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | WITHIN GROUP percentile_disc | 1 | PASS (1/1) | PASS (1/1) |  |
| ⚪ | WITHIN GROUP mode | 1 | UNTESTED | UNTESTED | [FUNCTION_NOT_SUPPORTED](#fail-within_group_mode-TDS) |
| 🔴 | WITHIN GROUP hypothetical-set rank | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-within_group_rank_hypothetical-TDS), [MISC](#fail-within_group_rank_hypothetical-Relation) |

<a id="tablesample"></a>

## tablesample

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🔴 | TABLESAMPLE BERNOULLI | 1 | ERROR (0/1) | ERROR (0/1) | [PARSE_ERROR](#fail-tablesample_bernoulli-TDS) |
| 🔴 | TABLESAMPLE SYSTEM | 1 | ERROR (0/1) | ERROR (0/1) | [PARSE_ERROR](#fail-tablesample_system-TDS) |
| 🔴 | TABLESAMPLE without REPEATABLE | 1 | ERROR (0/1) | ERROR (0/1) | [PARSE_ERROR](#fail-tablesample_no_repeatable-TDS) |

<a id="fetch_with_ties"></a>

## fetch_with_ties

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🔴 | FETCH FIRST n ROWS WITH TIES | 1 | ERROR (0/1) | ERROR (0/1) | [PARSE_ERROR](#fail-fetch_first_with_ties-TDS) |
| 🟢 | FETCH FIRST n ROWS ONLY | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | OFFSET ... FETCH NEXT n ROWS WITH TIES | 1 | ERROR (0/1) | ERROR (0/1) | [PARSE_ERROR](#fail-fetch_next_with_ties-TDS) |

<a id="recursive_ctes"></a>

## recursive_ctes

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| ⚪ | WITH RECURSIVE simple series | 1 | UNTESTED | UNTESTED | [UNSUPPORTED_SYNTAX](#fail-recursive_cte_number_series-TDS) |
| 🟡 | WITH RECURSIVE self-join traversal | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-recursive_cte_hierarchy-TDS) |
| 🔴 | WITH ... AS MATERIALIZED | 1 | ERROR (0/1) | ERROR (0/1) | [PARSE_ERROR](#fail-cte_materialized_hint-TDS) |
| 🔴 | WITH ... AS NOT MATERIALIZED | 1 | ERROR (0/1) | ERROR (0/1) | [PARSE_ERROR](#fail-cte_not_materialized_hint-TDS) |
| 🟡 | WITH RECURSIVE over a table-backed anchor | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-recursive_cte_from_table_anchor-TDS) |
| 🟡 | WITH RECURSIVE feeding a downstream filter | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-recursive_cte_downstream_filter-TDS) |
| 🟡 | WITH RECURSIVE feeding a downstream aggregate | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-recursive_cte_downstream_aggregate-TDS) |
| 🔴 | WITH RECURSIVE using UNION rather than UNION ALL | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-recursive_cte_union_distinct_unsupported-TDS), [MISC](#fail-recursive_cte_union_distinct_unsupported-Relation) |
| 🟡 | WITH RECURSIVE list mixing a recursive and a plain member | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-recursive_cte_mixed_with_plain-TDS) |
| 🟡 | WITH RECURSIVE with no self-referencing member | 1 | ERROR (0/1) | PASS (1/1) | [MISC](#fail-recursive_keyword_without_recursion-TDS) |

<a id="values_clause"></a>

## values_clause

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | standalone VALUES list | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | VALUES as derived table with alias | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | VALUES combined with UNION | 1 | ERROR (0/1) | ERROR (0/1) | [PARSE_ERROR](#fail-values_in_union-TDS) |
| 🟢 | VALUES with explicit column typing | 1 | PASS (1/1) | PASS (1/1) |  |

<a id="window_frames"></a>

## window_frames

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🔴 | ROWS UNBOUNDED PRECEDING TO CURRENT ROW | 2 | UNTESTED | ERROR (0/2) | [UNSUPPORTED_SYNTAX](#fail-frame_rows_unbounded_current-TDS), [MISC](#fail-frame_rows_unbounded_current-Relation) |
| 🔴 | ROWS UNBOUNDED PRECEDING TO UNBOUNDED FOLLOWING | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-frame_rows_whole_partition-TDS), [MISC](#fail-frame_rows_whole_partition-Relation) |
| 🔴 | ROWS N PRECEDING TO N FOLLOWING | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-frame_rows_sliding_3-TDS), [MISC](#fail-frame_rows_sliding_3-Relation) |
| 🔴 | ROWS N PRECEDING TO CURRENT ROW | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-frame_rows_lookback_2-TDS), [MISC](#fail-frame_rows_lookback_2-Relation) |
| 🔴 | ROWS CURRENT ROW TO UNBOUNDED FOLLOWING | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-frame_rows_current_to_end-TDS), [MISC](#fail-frame_rows_current_to_end-Relation) |
| 🟡 | RANGE UNBOUNDED PRECEDING TO CURRENT ROW | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-frame_range_default-TDS) |
| 🟢 | Default frame (implicit) | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | Frame with multiple aggregates | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-frame_multi_agg-TDS), [MISC](#fail-frame_multi_agg-Relation) |
| 🔴 | ROWS N PRECEDING TO N PRECEDING | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-frame_rows_lookback_only-TDS), [MISC](#fail-frame_rows_lookback_only-Relation) |
| 🔴 | ROWS N FOLLOWING TO N FOLLOWING | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-frame_rows_lookahead-TDS), [MISC](#fail-frame_rows_lookahead-Relation) |
| 🟡 | RANGE with PARTITION BY | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-frame_range_partition-TDS) |
| 🔴 | ROWS CURRENT ROW only | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-frame_rows_current_only-TDS), [MISC](#fail-frame_rows_current_only-Relation) |
| 🔴 | Wide sliding window | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-frame_rows_wide_sliding-TDS), [MISC](#fail-frame_rows_wide_sliding-Relation) |
| 🔴 | EXCLUDE CURRENT ROW | 4 | ERROR (0/4) | ERROR (0/4) | [PARSE_ERROR](#fail-frame_exclude_current_row-TDS) |
| 🔴 | EXCLUDE GROUP | 2 | ERROR (0/2) | ERROR (0/2) | [PARSE_ERROR](#fail-frame_exclude_group-TDS) |
| 🔴 | EXCLUDE TIES | 2 | ERROR (0/2) | ERROR (0/2) | [PARSE_ERROR](#fail-frame_exclude_ties-TDS) |
| 🔴 | EXCLUDE NO OTHERS | 1 | ERROR (0/1) | ERROR (0/1) | [PARSE_ERROR](#fail-frame_exclude_no_others-TDS) |
| 🟢 | WINDOW clause | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | Multiple named windows | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | Named window with frame | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-named_window_with_frame-TDS), [MISC](#fail-named_window_with_frame-Relation) |
| 🟡 | Named window with partition + frame | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-named_window_partition_frame-TDS) |
| 🔴 | Named window with multiple aggregates | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-named_window_multi_agg-TDS), [MISC](#fail-named_window_multi_agg-Relation) |
| 🟡 | Named window with LAG/LEAD | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-named_window_lag_lead-TDS) |

<a id="window_partitioning"></a>

## window_partitioning

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🟢 | PARTITION BY single column | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | PARTITION BY multiple columns | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | No PARTITION BY | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | Window ORDER BY DESC | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | Window ORDER BY multiple columns | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-window_order_multi-TDS) |
| 🟢 | Multiple window functions | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | Different OVER clauses | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | PARTITION BY + ORDER BY + frame | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-partition_order_frame-TDS) |
| 🟡 | NTILE | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-window_ntile-TDS) |
| 🟡 | LAG | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-window_lag-TDS) |
| 🟡 | LEAD | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-window_lead-TDS) |
| 🟡 | LAG with offset | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-window_lag_offset-TDS) |
| 🟡 | FIRST_VALUE | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-window_first_last_value-TDS) |

<a id="compositions"></a>

## compositions

| | Feature | Tests | TDS | Relation | Error Category |
|--|---------|-------|-----|----------|----------------|
| 🔴 | Window over aggregate | 2 | UNTESTED | ERROR (0/2) | [UNSUPPORTED_SYNTAX](#fail-comp_agg_window_dept_pct-TDS), [MISC](#fail-comp_agg_window_dept_pct-Relation) |
| 🟢 | Running percentage within partition | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | Rank within group | 2 | PASS (2/2) | PASS (2/2) |  |
| 🟢 | Value vs partition average | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | Multiple windows + CASE | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | Window + arithmetic | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | Aggregate + window disjoint keys | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-comp_agg_win_disjoint_keys-TDS) |
| 🟡 | Aggregate + window partition is group key | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-comp_agg_win_partition_is_group_key-TDS) |
| 🟡 | Aggregate + window ORDER BY names aggregate output | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-comp_agg_win_order_names_aggregate_output-TDS) |
| 🔴 | Implicit aggregate + window | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-comp_agg_win_implicit_aggregate-TDS), [MISC](#fail-comp_agg_win_implicit_aggregate-Relation) |
| 🟡 | Aggregate + window + HAVING | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-comp_agg_win_with_having-TDS) |
| 🔴 | Aggregate + window used in outer expression | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-comp_agg_win_outer_expression-TDS), [MISC](#fail-comp_agg_win_outer_expression-Relation) |
| 🔴 | Aggregate + window multi-key ORDER BY with NULLS LAST | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-comp_agg_win_multi_key_order_relation_only-TDS), [ALIAS_NOT_FOUND](#fail-comp_agg_win_multi_key_order_relation_only-Relation) |
| 🟡 | 3-table JOIN + aggregation | 1 | ERROR (0/1) | PASS (1/1) | [MISC](#fail-comp_three_table_agg-TDS) |
| 🟢 | LEFT JOIN preserving empty groups | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | JOIN + HAVING | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | COUNT(DISTINCT) across JOIN | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | Self-join + aggregation | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | JOIN + CASE + aggregation | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | LEFT JOIN + COALESCE + multi-agg | 1 | ERROR (0/1) | PASS (1/1) | [MISC](#fail-comp_left_join_coalesce_multi-TDS) |
| 🟢 | 3-table JOIN + filter | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟢 | JOIN with derived table | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | JOIN + window + aggregate + CASE | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-stress_dashboard-TDS), [ALIAS_NOT_FOUND](#fail-stress_dashboard-Relation) |
| ⚪ | Deeply nested expressions | 1 | UNTESTED | UNTESTED | [FUNCTION_NOT_SUPPORTED](#fail-stress_zscore-TDS) |
| 🟢 | Top-N per group via subquery | 1 | PASS (1/1) | PASS (1/1) |  |
| 🔴 | Window with CASE expression | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-stress_running_case-TDS), [MISC](#fail-stress_running_case-Relation) |
| 🟡 | Multi-aggregate + COALESCE + JOINs | 1 | ERROR (0/1) | PASS (1/1) | [MISC](#fail-stress_multi_agg_join-TDS) |
| 🔴 | Percentile via ROW_NUMBER | 1 | ERROR (0/1) | ERROR (0/1) | [MISC](#fail-stress_percentile_sim-TDS) |
| 🟡 | CUME_DIST + PERCENT_RANK | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-stress_cume_dist-TDS) |
| 🔴 | LAG comparison over aggregates | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-stress_lag_comparison-TDS), [MISC](#fail-stress_lag_comparison-Relation) |
| 🟢 | Nested CASE with window function | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | COALESCE + window | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-stress_coalesce_window-TDS) |
| ⚪ | Correlated subquery in SELECT | 2 | UNTESTED | UNTESTED | [FUNCTION_NOT_SUPPORTED](#fail-nested_corr_in_select-TDS) |
| 🟢 | Multi-level nesting | 2 | PASS (1/2) | PASS (2/2) | [UNSUPPORTED_SYNTAX](#fail-nested_two_levels-TDS) |
| 🟡 | Subquery + JOIN | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-nested_subquery_join-TDS) |
| 🔴 | EXISTS with aggregate | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-nested_exists_agg-TDS), [MISC](#fail-nested_exists_agg-Relation) |
| 🟡 | Subquery filter + derived table | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-nested_filter_derived-TDS) |
| ⚪ | Scalar subquery arithmetic | 1 | UNTESTED | UNTESTED | [FUNCTION_NOT_SUPPORTED](#fail-nested_scalar_arithmetic-TDS) |
| 🟡 | IN subquery + JOIN | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-nested_in_with_join-TDS) |
| 🟢 | Derived table with window function | 1 | PASS (1/1) | PASS (1/1) |  |
| 🟡 | NOT EXISTS | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-nested_not_exists_derived-TDS) |
| ⚪ | Scalar subquery + COALESCE | 1 | UNTESTED | UNTESTED | [FUNCTION_NOT_SUPPORTED](#fail-nested_scalar_coalesce-TDS) |
| 🟡 | RANK over GROUP BY aggregate | 2 | UNTESTED | PASS (2/2) | [UNSUPPORTED_SYNTAX](#fail-window_over_agg_rank_sum-TDS) |
| 🔴 | Percentage of total across groups | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-window_over_agg_cum_pct-TDS), [MISC](#fail-window_over_agg_cum_pct-Relation) |
| 🔴 | Running total over groups | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-window_over_agg_running-TDS), [MISC](#fail-window_over_agg_running-Relation) |
| 🔴 | LAG over GROUP BY result | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-window_over_agg_lag-TDS), [MISC](#fail-window_over_agg_lag-Relation) |
| 🔴 | LEAD over GROUP BY result | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-window_over_agg_lead-TDS), [ALIAS_NOT_FOUND](#fail-window_over_agg_lead-Relation) |
| 🟡 | Top-N groups via window over aggregate | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-window_over_agg_topn-TDS) |
| 🟡 | NTILE over GROUP BY aggregate | 1 | UNTESTED | PASS (1/1) | [UNSUPPORTED_SYNTAX](#fail-window_over_agg_ntile-TDS) |
| 🔴 | MIN/MAX over GROUP BY aggregate | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-window_over_agg_minmax-TDS), [MISC](#fail-window_over_agg_minmax-Relation) |
| 🔴 | AVG over GROUP BY aggregate | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-window_over_agg_avg-TDS), [MISC](#fail-window_over_agg_avg-Relation) |
| 🔴 | FIRST_VALUE over GROUP BY aggregate | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-window_over_agg_first_value-TDS), [MISC](#fail-window_over_agg_first_value-Relation) |
| 🔴 | LAST_VALUE over GROUP BY aggregate | 1 | UNTESTED | ERROR (0/1) | [UNSUPPORTED_SYNTAX](#fail-window_over_agg_last_value-TDS), [MISC](#fail-window_over_agg_last_value-Relation) |

---

## Error Details

<a id="alias-not-found"></a>

### ALIAS_NOT_FOUND (11 tests)

#### <a id="fail-union_multiple_mixed-TDS"></a>`union_multiple_mixed`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT 'dept1' AS src, name FROM persons WHERE dept_id = 1 UNION ALL SELECT 'dept2', name FROM persons WHERE dept_id = 2 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT 'dept1' AS src, name FROM func('e2e::tds_persons') WHERE dept_id = 1 UNION ALL SELECT 'dept2', name FROM func('e2e::tds_persons') WHERE dept_id = 2 ORDER BY 1, 2
```

**Error:**
> Column 'dept2' (case sensitive? true) not found among: [src, name]


<br>

#### <a id="fail-union_with_agg-TDS"></a>`union_with_agg`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id UNION ALL SELECT NULL, COUNT(*) FROM persons ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id UNION ALL SELECT NULL, COUNT(*) FROM func('e2e::tds_persons') ORDER BY 1
```

**Error:**
> Column 'NULL' (case sensitive? true) not found among: [dept_id, cnt]


<br>

#### <a id="fail-union_with_agg_sum-TDS"></a>`union_with_agg_sum`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT 'by_dept' AS label, dept_id, SUM(salary) AS total FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id UNION ALL SELECT 'overall', NULL, SUM(salary) FROM persons WHERE salary IS NOT NULL ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT 'by_dept' AS label, dept_id, SUM(salary) AS total FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id UNION ALL SELECT 'overall', NULL, SUM(salary) FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1, 2
```

**Error:**
> Column 'overall' (case sensitive? true) not found among: [label, dept_id, total]


<br>

#### <a id="fail-union_all_expression-TDS"></a>`union_all_expression`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary * 1.1 AS adjusted FROM persons WHERE dept_id = 1 AND salary IS NOT NULL UNION ALL SELECT name, salary * 0.9 FROM persons WHERE dept_id = 2 AND salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary * 1.1 AS adjusted FROM func('e2e::tds_persons') WHERE dept_id = 1 AND salary IS NOT NULL UNION ALL SELECT name, salary * 0.9 FROM func('e2e::tds_persons') WHERE dept_id = 2 AND salary IS NOT NULL ORDER BY 1
```

**Error:**
> Column 'salary * 0.9' (case sensitive? true) not found among: [name, adjusted]


<br>

#### <a id="fail-union_with_case-TDS"></a>`union_with_case`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT 'active' AS status, name FROM persons WHERE active = true UNION ALL SELECT 'inactive', name FROM persons WHERE active = false ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT 'active' AS status, name FROM func('e2e::tds_persons') WHERE active = true UNION ALL SELECT 'inactive', name FROM func('e2e::tds_persons') WHERE active = false ORDER BY 1, 2
```

**Error:**
> Column 'inactive' (case sensitive? true) not found among: [status, name]


<br>

#### <a id="fail-colres_gap_order_by_expression_in_window_query-TDS"></a><a id="fail-colres_gap_order_by_expression_in_window_query-Relation"></a>`colres_gap_order_by_expression_in_window_query`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, dept_id, ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY name) AS rn FROM persons WHERE dept_id IS NOT NULL ORDER BY UPPER(name)
```

**Legend SQL:**
```sql
SELECT name, dept_id, ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY name) AS rn FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL ORDER BY UPPER(name)
```

**Error:**
> The column 'UPPER(name)' can't be found ("id","name","age","salary","hire_date","active","dept_id","rn")

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name, dept_id, ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY name) AS rn FROM persons WHERE dept_id IS NOT NULL ORDER BY UPPER(name)
```

**Legend SQL:**
```sql
SELECT name, dept_id, ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY name) AS rn FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL ORDER BY UPPER(name)
```

**Error:**
> The column 'UPPER(name)' can't be found in the relation (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer, rn:Integer[1])


<br>

#### <a id="fail-crcs_g4_order_by_column_projected_only_through_a_cast-TDS"></a><a id="fail-crcs_g4_order_by_column_projected_only_through_a_cast-Relation"></a>`crcs_g4_order_by_column_projected_only_through_a_cast`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT CAST(p.id AS VARCHAR(10)) AS id_text, p.name AS name FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY p.id
```

**Legend SQL:**
```sql
SELECT CAST(p.id AS VARCHAR(10)) AS id_text, p.name AS name FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY p.id
```

**Error:**
> The column 'id_p' can't be found ("id_text","name")

📗 **Relation Path**

**Input SQL:**
```sql
SELECT CAST(p.id AS VARCHAR(10)) AS id_text, p.name AS name FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY p.id
```

**Legend SQL:**
```sql
SELECT CAST(p.id AS VARCHAR(10)) AS id_text, p.name AS name FROM func('e2e::rel_persons') p INNER JOIN func('e2e::rel_departments') d ON p.dept_id = d.id ORDER BY p.id
```

**Error:**
> The column 'id_p' can't be found in the relation (id_text:String[1], name:String)


<br>

#### <a id="fail-crcs_g2_agg_win_over_join-Relation"></a>`crcs_g2_agg_win_over_join`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.dept_id AS dept_id, d.name AS dept_name, SUM(p.salary) AS s, RANK() OVER (PARTITION BY p.dept_id ORDER BY p.dept_id) AS r FROM persons p INNER JOIN departments d ON p.dept_id = d.id WHERE p.salary IS NOT NULL GROUP BY p.dept_id, d.name ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.dept_id AS dept_id, d.name AS dept_name, SUM(p.salary) AS s, RANK() OVER (PARTITION BY p.dept_id ORDER BY p.dept_id) AS r FROM func('e2e::rel_persons') p INNER JOIN func('e2e::rel_departments') d ON p.dept_id = d.id WHERE p.salary IS NOT NULL GROUP BY p.dept_id, d.name ORDER BY 1
```

**Error:**
> The column 'SUM(salary)' can't be found in the relation (dept_id:Integer, name_d:String, dept_name:String, s:Float[1])


<br>

#### <a id="fail-comp_agg_win_multi_key_order_relation_only-Relation"></a>`comp_agg_win_multi_key_order_relation_only`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS s, ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY MAX(hire_date) DESC NULLS LAST, dept_id ASC) AS rn FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS s, ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY MAX(hire_date) DESC NULLS LAST, dept_id ASC) AS rn FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> The column 'MAX(hire_date)' can't be found ("dept_id","s")


<br>

#### <a id="fail-stress_dashboard-Relation"></a>`stress_dashboard`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT d.name AS department, p.name AS employee, p.salary, RANK() OVER (PARTITION BY d.name ORDER BY p.salary DESC) AS dept_rank, CASE WHEN p.salary > 80000 THEN 'Senior' WHEN p.salary > 50000 THEN 'Mid' ELSE 'Junior' END AS band, COUNT(o.id) AS order_count, COALESCE(SUM(o.amount), 0) AS total_orders FROM persons p INNER JOIN departments d ON p.dept_id = d.id LEFT JOIN orders o ON o.person_id = p.id WHERE p.salary IS NOT NULL GROUP BY d.name, p.name, p.salary ORDER BY 1, 4
```

**Legend SQL:**
```sql
SELECT d.name AS department, p.name AS employee, p.salary, RANK() OVER (PARTITION BY d.name ORDER BY p.salary DESC) AS dept_rank, CASE WHEN p.salary > 80000 THEN 'Senior' WHEN p.salary > 50000 THEN 'Mid' ELSE 'Junior' END AS band, COUNT(o.id) AS order_count, COALESCE(SUM(o.amount), 0) AS total_orders FROM func('e2e::rel_persons') p INNER JOIN func('e2e::rel_departments') d ON p.dept_id = d.id LEFT JOIN func('e2e::rel_orders') o ON o.person_id = p.id WHERE p.salary IS NOT NULL GROUP BY d.name, p.name, p.salary ORDER BY 1, 4
```

**Error:**
> The column 'RANK()' can't be found in the relation (name_d:String, name_p:String, salary_p:Float, department:String, employee:String, band:String[1], order_count:Integer[1], total_orders:Number)


<br>

#### <a id="fail-window_over_agg_lead-Relation"></a>`window_over_agg_lead`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt, LEAD(COUNT(*)) OVER (ORDER BY dept_id) AS next_cnt FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt, LEAD(COUNT(*)) OVER (ORDER BY dept_id) AS next_cnt FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> The column 'offset_Relation_1__T_1__Integer_1__T_$0_1$_' can't be found ("dept_id","cnt")


<a id="misc"></a>

### MISC (99 tests)

#### <a id="fail-union_multiple_mixed-Relation"></a>`union_multiple_mixed`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT 'dept1' AS src, name FROM persons WHERE dept_id = 1 UNION ALL SELECT 'dept2', name FROM persons WHERE dept_id = 2 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT 'dept1' AS src, name FROM func('e2e::rel_persons') WHERE dept_id = 1 UNION ALL SELECT 'dept2', name FROM func('e2e::rel_persons') WHERE dept_id = 2 ORDER BY 1, 2
```

**Error:**
> The two relations are incompatible and can't be unioned (src:String[1], name:String) and (dept2:String[1], name:String)


<br>

#### <a id="fail-union_with_agg-Relation"></a>`union_with_agg`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id UNION ALL SELECT NULL, COUNT(*) FROM persons ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id UNION ALL SELECT NULL, COUNT(*) FROM func('e2e::rel_persons') ORDER BY 1
```

**Error:**
> The two relations are incompatible and can't be unioned (dept_id:Integer, cnt:Integer[1]) and (NULL:String[0], COUNT():Integer[1])


<br>

#### <a id="fail-union_with_agg_sum-Relation"></a>`union_with_agg_sum`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT 'by_dept' AS label, dept_id, SUM(salary) AS total FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id UNION ALL SELECT 'overall', NULL, SUM(salary) FROM persons WHERE salary IS NOT NULL ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT 'by_dept' AS label, dept_id, SUM(salary) AS total FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id UNION ALL SELECT 'overall', NULL, SUM(salary) FROM func('e2e::rel_persons') WHERE salary IS NOT NULL ORDER BY 1, 2
```

**Error:**
> The two relations are incompatible and can't be unioned (label:String[1], dept_id:Integer, total:Float[1]) and (overall:String[1], NULL:String[0], SUM(salary):Float[1])


<br>

#### <a id="fail-except_with_agg-Relation"></a>`except_with_agg`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT dept_id FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id EXCEPT SELECT id FROM departments WHERE budget < 600000 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id EXCEPT SELECT id FROM func('e2e::rel_departments') WHERE budget < 600000 ORDER BY 1
```

**Error:**
> The two relations are incompatible and can't be excepted (dept_id:Integer) and (id:Integer[1])


<br>

#### <a id="fail-except_expression-Relation"></a>`except_expression`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT salary * 1.1 AS adjusted FROM persons WHERE dept_id = 1 AND salary IS NOT NULL EXCEPT SELECT salary * 0.9 FROM persons WHERE dept_id = 2 AND salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT salary * 1.1 AS adjusted FROM func('e2e::rel_persons') WHERE dept_id = 1 AND salary IS NOT NULL EXCEPT SELECT salary * 0.9 FROM func('e2e::rel_persons') WHERE dept_id = 2 AND salary IS NOT NULL ORDER BY 1
```

**Error:**
> The two relations are incompatible and can't be excepted (adjusted:Float) and (salary * 0.9:Float)


<br>

#### <a id="fail-intersect_with_agg-Relation"></a>`intersect_with_agg`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT dept_id FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id INTERSECT SELECT id FROM departments WHERE budget > 400000 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id INTERSECT SELECT id FROM func('e2e::rel_departments') WHERE budget > 400000 ORDER BY 1
```

**Error:**
> The two relations are incompatible and can't be intersected (dept_id:Integer) and (id:Integer[1])


<br>

#### <a id="fail-intersect_expression-Relation"></a>`intersect_expression`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT salary * 1.1 AS adjusted FROM persons WHERE dept_id = 1 AND salary IS NOT NULL INTERSECT SELECT salary * 0.9 FROM persons WHERE dept_id = 2 AND salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT salary * 1.1 AS adjusted FROM func('e2e::rel_persons') WHERE dept_id = 1 AND salary IS NOT NULL INTERSECT SELECT salary * 0.9 FROM func('e2e::rel_persons') WHERE dept_id = 2 AND salary IS NOT NULL ORDER BY 1
```

**Error:**
> The two relations are incompatible and can't be intersected (adjusted:Float) and (salary * 0.9:Float)


<br>

#### <a id="fail-union_all_expression-Relation"></a>`union_all_expression`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name, salary * 1.1 AS adjusted FROM persons WHERE dept_id = 1 AND salary IS NOT NULL UNION ALL SELECT name, salary * 0.9 FROM persons WHERE dept_id = 2 AND salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary * 1.1 AS adjusted FROM func('e2e::rel_persons') WHERE dept_id = 1 AND salary IS NOT NULL UNION ALL SELECT name, salary * 0.9 FROM func('e2e::rel_persons') WHERE dept_id = 2 AND salary IS NOT NULL ORDER BY 1
```

**Error:**
> The two relations are incompatible and can't be unioned (name:String, adjusted:Float) and (name:String, salary * 0.9:Float)


<br>

#### <a id="fail-union_with_case-Relation"></a>`union_with_case`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT 'active' AS status, name FROM persons WHERE active = true UNION ALL SELECT 'inactive', name FROM persons WHERE active = false ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT 'active' AS status, name FROM func('e2e::rel_persons') WHERE active = true UNION ALL SELECT 'inactive', name FROM func('e2e::rel_persons') WHERE active = false ORDER BY 1, 2
```

**Error:**
> The two relations are incompatible and can't be unioned (status:String[1], name:String) and (inactive:String[1], name:String)


<br>

#### <a id="fail-union_dedup_null-Relation"></a>`union_dedup_null`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT dept_id FROM persons UNION SELECT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id FROM func('e2e::rel_persons') UNION SELECT NULL ORDER BY 1
```

**Error:**
> The two relations are incompatible and can't be unioned (dept_id:Integer) and (value:String[1])


<br>

#### <a id="fail-subquery_correlated-Relation"></a>`subquery_correlated`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, p.salary FROM persons p WHERE p.salary > (SELECT AVG(salary) FROM persons WHERE dept_id = p.dept_id AND salary IS NOT NULL) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name, p.salary FROM func('e2e::rel_persons') p WHERE p.salary > (SELECT AVG(salary) FROM func('e2e::rel_persons') WHERE dept_id = p.dept_id AND salary IS NOT NULL) ORDER BY 1
```

**Error:**
> Column 'dept_id' of the enclosing query cannot be referenced from this subquery: both use the table alias 'root'


<br>

#### <a id="fail-subquery_in_having-Relation"></a>`subquery_in_having`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id HAVING COUNT(*) > (SELECT AVG(cnt) FROM (SELECT COUNT(*) AS cnt FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id) sub) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id HAVING COUNT(*) > (SELECT AVG(cnt) FROM (SELECT COUNT(*) AS cnt FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id) sub) ORDER BY 1
```

**Error:**
> restrict__d#4_e1_d#2 not found


<br>

#### <a id="fail-subquery_exists_grouped-Relation"></a>`subquery_exists_grouped`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE EXISTS (SELECT o.person_id, COUNT(*) AS cnt FROM orders o WHERE o.person_id = p.id GROUP BY o.person_id) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::rel_persons') p WHERE EXISTS (SELECT o.person_id, COUNT(*) AS cnt FROM func('e2e::rel_orders') o WHERE o.person_id = p.id GROUP BY o.person_id) ORDER BY 1
```

**Error:**
> Column 'id' of the enclosing query cannot be referenced from this subquery: both use the table alias 'root'


<br>

#### <a id="fail-subquery_in_correlated-Relation"></a>`subquery_in_correlated`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE p.id IN (SELECT o.person_id FROM orders o WHERE o.amount > p.salary / 1000) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::rel_persons') p WHERE p.id IN (SELECT o.person_id FROM func('e2e::rel_orders') o WHERE o.amount > p.salary / 1000) ORDER BY 1
```

**Error:**
> Column 'salary' of the enclosing query cannot be referenced from this subquery: both use the table alias 'root'


<br>

#### <a id="fail-subquery_quant_all_correlated_empty-Relation"></a>`subquery_quant_all_correlated_empty`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE p.id < ALL (SELECT o.id FROM orders o WHERE o.person_id = p.id) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::rel_persons') p WHERE p.id < ALL(SELECT o.id FROM func('e2e::rel_orders') o WHERE o.person_id = p.id) ORDER BY 1
```

**Error:**
> Column 'id' of the enclosing query cannot be referenced from this subquery: both use the table alias 'root'


<br>

#### <a id="fail-cte_basic-TDS"></a>`cte_basic`

📘 **TDS Path**

**Input SQL:**
```sql
WITH active_persons AS (SELECT name, salary FROM persons WHERE active = true) SELECT name, salary FROM active_persons ORDER BY 1
```

**Legend SQL:**
```sql
WITH active_persons AS (SELECT name, salary FROM func('e2e::tds_persons') WHERE active = true) SELECT name, salary FROM active_persons ORDER BY 1
```

**Error:**
> Unhandled value type: meta::pure::tds::SortInformation


<br>

#### <a id="fail-cte_basic_filter-TDS"></a>`cte_basic_filter`

📘 **TDS Path**

**Input SQL:**
```sql
WITH high_earners AS (SELECT name, salary FROM persons WHERE salary > 70000) SELECT name, salary FROM high_earners ORDER BY 1
```

**Legend SQL:**
```sql
WITH high_earners AS (SELECT name, salary FROM func('e2e::tds_persons') WHERE salary > 70000) SELECT name, salary FROM high_earners ORDER BY 1
```

**Error:**
> Unhandled value type: meta::pure::tds::SortInformation


<br>

#### <a id="fail-cte_multiple-TDS"></a>`cte_multiple`

📘 **TDS Path**

**Input SQL:**
```sql
WITH dept_stats AS (SELECT dept_id, AVG(salary) AS avg_sal FROM persons WHERE salary IS NOT NULL GROUP BY dept_id), high_earners AS (SELECT name, salary, dept_id FROM persons WHERE salary > 70000) SELECT h.name, h.salary, d.avg_sal FROM high_earners h INNER JOIN dept_stats d ON h.dept_id = d.dept_id ORDER BY 1
```

**Legend SQL:**
```sql
WITH dept_stats AS (SELECT dept_id, AVG(salary) AS avg_sal FROM func('e2e::tds_persons') WHERE salary IS NOT NULL GROUP BY dept_id), high_earners AS (SELECT name, salary, dept_id FROM func('e2e::tds_persons') WHERE salary > 70000) SELECT h.name, h.salary, d.avg_sal FROM high_earners h INNER JOIN dept_stats d ON h.dept_id = d.dept_id ORDER BY 1
```

**Error:**
> Function with parameters not yet handled


<br>

#### <a id="fail-cte_with_agg-TDS"></a>`cte_with_agg`

📘 **TDS Path**

**Input SQL:**
```sql
WITH dept_summary AS (SELECT dept_id, COUNT(*) AS cnt, SUM(salary) AS total FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id) SELECT dept_id, cnt, total FROM dept_summary ORDER BY 1
```

**Legend SQL:**
```sql
WITH dept_summary AS (SELECT dept_id, COUNT(*) AS cnt, SUM(salary) AS total FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id) SELECT dept_id, cnt, total FROM dept_summary ORDER BY 1
```

**Error:**
> Unhandled value type: meta::pure::tds::SortInformation


<br>

#### <a id="fail-cte_with_agg_having-TDS"></a>`cte_with_agg_having`

📘 **TDS Path**

**Input SQL:**
```sql
WITH dept_counts AS (SELECT dept_id, COUNT(*) AS cnt FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id HAVING COUNT(*) > 2) SELECT dept_id, cnt FROM dept_counts ORDER BY 1
```

**Legend SQL:**
```sql
WITH dept_counts AS (SELECT dept_id, COUNT(*) AS cnt FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id HAVING COUNT(*) > 2) SELECT dept_id, cnt FROM dept_counts ORDER BY 1
```

**Error:**
> Unhandled value type: meta::pure::tds::SortInformation


<br>

#### <a id="fail-cte_with_window-TDS"></a>`cte_with_window`

📘 **TDS Path**

**Input SQL:**
```sql
WITH ranked AS (SELECT name, salary, RANK() OVER (ORDER BY salary DESC) AS rnk FROM persons WHERE salary IS NOT NULL) SELECT name, salary, rnk FROM ranked WHERE rnk <= 3 ORDER BY 1
```

**Legend SQL:**
```sql
WITH ranked AS (SELECT name, salary, RANK() OVER (ORDER BY salary DESC) AS rnk FROM func('e2e::tds_persons') WHERE salary IS NOT NULL) SELECT name, salary, rnk FROM ranked WHERE rnk <= 3 ORDER BY 1
```

**Error:**
> Function with parameters not yet handled


<br>

#### <a id="fail-cte_with_union-TDS"></a><a id="fail-cte_with_union-Relation"></a>`cte_with_union`

📘 **TDS Path**

**Input SQL:**
```sql
WITH high AS (SELECT name, salary FROM persons WHERE salary > 70000), low AS (SELECT name, salary FROM persons WHERE salary <= 70000 AND salary IS NOT NULL) SELECT name, salary, 'high' AS band FROM high UNION ALL SELECT name, salary, 'low' FROM low ORDER BY 1
```

**Legend SQL:**
```sql
WITH high AS (SELECT name, salary FROM func('e2e::tds_persons') WHERE salary > 70000), low AS (SELECT name, salary FROM func('e2e::tds_persons') WHERE salary <= 70000 AND salary IS NOT NULL) SELECT name, salary, 'high' AS band FROM high UNION ALL SELECT name, salary, 'low' FROM low ORDER BY 1
```

**Error:**
> Unhandled value type: meta::pure::tds::BasicColumnSpecification

📗 **Relation Path**

**Input SQL:**
```sql
WITH high AS (SELECT name, salary FROM persons WHERE salary > 70000), low AS (SELECT name, salary FROM persons WHERE salary <= 70000 AND salary IS NOT NULL) SELECT name, salary, 'high' AS band FROM high UNION ALL SELECT name, salary, 'low' FROM low ORDER BY 1
```

**Legend SQL:**
```sql
WITH high AS (SELECT name, salary FROM func('e2e::rel_persons') WHERE salary > 70000), low AS (SELECT name, salary FROM func('e2e::rel_persons') WHERE salary <= 70000 AND salary IS NOT NULL) SELECT name, salary, 'high' AS band FROM high UNION ALL SELECT name, salary, 'low' FROM low ORDER BY 1
```

**Error:**
> The two relations are incompatible and can't be unioned (name:String, salary:Float, band:String[1]) and (name:String, salary:Float, low:String[1])


<br>

#### <a id="fail-cte_filter_agg-TDS"></a>`cte_filter_agg`

📘 **TDS Path**

**Input SQL:**
```sql
WITH dept_stats AS (SELECT dept_id, COUNT(*) AS cnt, AVG(salary) AS avg_sal FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id) SELECT dept_id, cnt, avg_sal FROM dept_stats WHERE cnt > 2 ORDER BY 1
```

**Legend SQL:**
```sql
WITH dept_stats AS (SELECT dept_id, COUNT(*) AS cnt, AVG(salary) AS avg_sal FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id) SELECT dept_id, cnt, avg_sal FROM dept_stats WHERE cnt > 2 ORDER BY 1
```

**Error:**
> Function with parameters not yet handled


<br>

#### <a id="fail-alias_subquery_column_list-TDS"></a><a id="fail-alias_subquery_column_list-Relation"></a>`alias_subquery_column_list`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT s.n, s.s FROM (SELECT name, salary FROM persons) s(n, s) WHERE s.s IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT s.n, s.s FROM (SELECT name, salary FROM func('e2e::tds_persons')) s(n, s) WHERE s.s IS NOT NULL ORDER BY 1
```

**Error:**
> Execution error at (resource:/core_external_query_sql/binding/fromPure/fromPure.pure line:4238 column:28), "Cannot cast a collection of size 0 to multiplicity [1]"

📗 **Relation Path**

**Input SQL:**
```sql
SELECT s.n, s.s FROM (SELECT name, salary FROM persons) s(n, s) WHERE s.s IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT s.n, s.s FROM (SELECT name, salary FROM func('e2e::rel_persons')) s(n, s) WHERE s.s IS NOT NULL ORDER BY 1
```

**Error:**
> Column type is empty for col: n


<br>

#### <a id="fail-lateral_cross_subquery-TDS"></a><a id="fail-lateral_cross_subquery-Relation"></a>`lateral_cross_subquery`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT p.name, sub.colleague FROM persons p CROSS JOIN LATERAL (SELECT p2.name AS colleague FROM persons p2 WHERE p2.dept_id = p.dept_id AND p2.id != p.id) sub WHERE p.id <= 3 ORDER BY 1, 2
```

**Legend SQL (TDS):**
```sql
SELECT p.name, sub.colleague FROM func('e2e::tds_persons') p CROSS JOIN LATERAL (SELECT p2.name AS colleague FROM func('e2e::tds_persons') p2 WHERE p2.dept_id = p.dept_id AND p2.id != p.id) sub WHERE p.id <= 3 ORDER BY 1, 2
```

**Legend SQL (Relation):**
```sql
SELECT p.name, sub.colleague FROM func('e2e::rel_persons') p CROSS JOIN LATERAL (SELECT p2.name AS colleague FROM func('e2e::rel_persons') p2 WHERE p2.dept_id = p.dept_id AND p2.id != p.id) sub WHERE p.id <= 3 ORDER BY 1, 2
```

**Error:**
> no named relation found for 'p', ensure you have aliased the correct table/subquery


<br>

#### <a id="fail-lateral_left_join-TDS"></a><a id="fail-lateral_left_join-Relation"></a>`lateral_left_join`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT p.name, sub.top_sal FROM persons p LEFT JOIN LATERAL (SELECT MAX(salary) AS top_sal FROM persons p2 WHERE p2.dept_id = p.dept_id) sub ON TRUE WHERE p.id <= 5 ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT p.name, sub.top_sal FROM func('e2e::tds_persons') p LEFT JOIN LATERAL (SELECT MAX(salary) AS top_sal FROM func('e2e::tds_persons') p2 WHERE p2.dept_id = p.dept_id) sub ON TRUE WHERE p.id <= 5 ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT p.name, sub.top_sal FROM func('e2e::rel_persons') p LEFT JOIN LATERAL (SELECT MAX(salary) AS top_sal FROM func('e2e::rel_persons') p2 WHERE p2.dept_id = p.dept_id) sub ON TRUE WHERE p.id <= 5 ORDER BY 1
```

**Error:**
> no named relation found for 'p', ensure you have aliased the correct table/subquery


<br>

#### <a id="fail-lateral_left_join_no_match-TDS"></a><a id="fail-lateral_left_join_no_match-Relation"></a>`lateral_left_join_no_match`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT p.name, sub.colleague FROM persons p LEFT JOIN LATERAL (SELECT p2.name AS colleague FROM persons p2 WHERE p2.dept_id = p.dept_id AND p2.id != p.id AND p2.salary > 999999) sub ON TRUE WHERE p.id <= 3 ORDER BY 1, 2
```

**Legend SQL (TDS):**
```sql
SELECT p.name, sub.colleague FROM func('e2e::tds_persons') p LEFT JOIN LATERAL (SELECT p2.name AS colleague FROM func('e2e::tds_persons') p2 WHERE p2.dept_id = p.dept_id AND p2.id != p.id AND p2.salary > 999999) sub ON TRUE WHERE p.id <= 3 ORDER BY 1, 2
```

**Legend SQL (Relation):**
```sql
SELECT p.name, sub.colleague FROM func('e2e::rel_persons') p LEFT JOIN LATERAL (SELECT p2.name AS colleague FROM func('e2e::rel_persons') p2 WHERE p2.dept_id = p.dept_id AND p2.id != p.id AND p2.salary > 999999) sub ON TRUE WHERE p.id <= 3 ORDER BY 1, 2
```

**Error:**
> no named relation found for 'p', ensure you have aliased the correct table/subquery


<br>

#### <a id="fail-lateral_top_n-TDS"></a><a id="fail-lateral_top_n-Relation"></a>`lateral_top_n`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT d.name AS dept, sub.person_name FROM departments d CROSS JOIN LATERAL (SELECT p.name AS person_name FROM persons p WHERE p.dept_id = d.id ORDER BY p.salary DESC LIMIT 2) sub ORDER BY 1, 2
```

**Legend SQL (TDS):**
```sql
SELECT d.name AS dept, sub.person_name FROM func('e2e::tds_departments') d CROSS JOIN LATERAL (SELECT p.name AS person_name FROM func('e2e::tds_persons') p WHERE p.dept_id = d.id ORDER BY p.salary DESC LIMIT 2) sub ORDER BY 1, 2
```

**Legend SQL (Relation):**
```sql
SELECT d.name AS dept, sub.person_name FROM func('e2e::rel_departments') d CROSS JOIN LATERAL (SELECT p.name AS person_name FROM func('e2e::rel_persons') p WHERE p.dept_id = d.id ORDER BY p.salary DESC LIMIT 2) sub ORDER BY 1, 2
```

**Error:**
> no named relation found for 'd', ensure you have aliased the correct table/subquery


<br>

#### <a id="fail-lateral_aggregate-TDS"></a><a id="fail-lateral_aggregate-Relation"></a>`lateral_aggregate`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT p.name, sub.dept_count FROM persons p CROSS JOIN LATERAL (SELECT COUNT(*) AS dept_count FROM persons p2 WHERE p2.dept_id = p.dept_id) sub WHERE p.id <= 5 ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT p.name, sub.dept_count FROM func('e2e::tds_persons') p CROSS JOIN LATERAL (SELECT COUNT(*) AS dept_count FROM func('e2e::tds_persons') p2 WHERE p2.dept_id = p.dept_id) sub WHERE p.id <= 5 ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT p.name, sub.dept_count FROM func('e2e::rel_persons') p CROSS JOIN LATERAL (SELECT COUNT(*) AS dept_count FROM func('e2e::rel_persons') p2 WHERE p2.dept_id = p.dept_id) sub WHERE p.id <= 5 ORDER BY 1
```

**Error:**
> no named relation found for 'p', ensure you have aliased the correct table/subquery


<br>

#### <a id="fail-lateral_unnest_with_ordinality-TDS"></a><a id="fail-lateral_unnest_with_ordinality-Relation"></a>`lateral_unnest_with_ordinality`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT p.name, u.val, u.ord FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[10, 20, 30]) WITH ORDINALITY AS u(val, ord) WHERE p.id = 1 ORDER BY 2
```

**Legend SQL (TDS):**
```sql
SELECT p.name, u.val, u.ord FROM func('e2e::tds_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[10, 20, 30]) WITH ORDINALITY u(val, ord) WHERE p.id = 1 ORDER BY 2
```

**Legend SQL (Relation):**
```sql
SELECT p.name, u.val, u.ord FROM func('e2e::rel_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[10, 20, 30]) WITH ORDINALITY u(val, ord) WHERE p.id = 1 ORDER BY 2
```

**Error:**
> no named relation found for 'u', ensure you have aliased the correct table/subquery


<br>

#### <a id="fail-lateral_unnest_aggregate_sum-Relation"></a>`lateral_unnest_aggregate_sum`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, SUM(u.val) AS total FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[p.dept_id, p.dept_id * 2]) AS u(val) WHERE p.id <= 3 AND p.dept_id IS NOT NULL GROUP BY p.name ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name, SUM(u.val) AS total FROM func('e2e::rel_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[p.dept_id, p.dept_id * 2]) AS u(val) WHERE p.id <= 3 AND p.dept_id IS NOT NULL GROUP BY p.name ORDER BY 1
```

**Error:**
> Collection element must have a multiplicity [1] - Context:[build Lambda, new lambda, Applying meta::pure::functions::relation::sort, Applying meta::pure::functions::relation::groupBy, Applying meta::pure::functions::relation::filter, Applying meta::pure::functions::relation::lateral, new lambda, Applying meta::pure::functions::relation::variant::flatten], multiplicity:[0..1]


<br>

#### <a id="fail-lateral_unnest_multiple_arrays-Relation"></a>`lateral_unnest_multiple_arrays`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, u1.val AS val1, u2.val AS val2 FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2]) AS u1(val) CROSS JOIN LATERAL UNNEST(ARRAY['A', 'B']) AS u2(val) WHERE p.id = 1 ORDER BY 2, 3
```

**Legend SQL:**
```sql
SELECT p.name, u1.val AS val1, u2.val AS val2 FROM func('e2e::rel_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2]) AS u1(val) CROSS JOIN LATERAL UNNEST(ARRAY['A', 'B']) AS u2(val) WHERE p.id = 1 ORDER BY 2, 3
```

**Error:**
> no alias found with name: u1.val alias: val1


<br>

#### <a id="fail-lateral_unnest_top_n_per_array_element-TDS"></a><a id="fail-lateral_unnest_top_n_per_array_element-Relation"></a>`lateral_unnest_top_n_per_array_element`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT u.val, p.name FROM UNNEST(ARRAY[1, 2, 3]) AS u(val) CROSS JOIN LATERAL (SELECT name FROM persons WHERE dept_id = u.val ORDER BY salary DESC LIMIT 1) p ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT u.val, p.name FROM UNNEST(ARRAY[1, 2, 3]) AS u(val) CROSS JOIN LATERAL (SELECT name FROM func('e2e::tds_persons') WHERE dept_id = u.val ORDER BY salary DESC LIMIT 1) p ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT u.val, p.name FROM UNNEST(ARRAY[1, 2, 3]) AS u(val) CROSS JOIN LATERAL (SELECT name FROM func('e2e::rel_persons') WHERE dept_id = u.val ORDER BY salary DESC LIMIT 1) p ORDER BY 1
```

**Error:**
> no named relation found for 'u', ensure you have aliased the correct table/subquery


<br>

#### <a id="fail-bool_column_implicit-Relation"></a>`bool_column_implicit`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name FROM persons WHERE active ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name FROM func('e2e::rel_persons') WHERE active ORDER BY 1
```

**Error:**
> Can't find a match for function 'meta::pure::functions::relation::filter(Relation<(id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)>[1],LambdaFunction<{(id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]->Boolean[0..1]}>[1])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\tfilter(Relation<T>[1],Function<{T[1]->Boolean[1]}>[1]):Relation<T>[1]\n\t\tfilter(TabularDataSet[1],Function<{TDSRow[1]->Boolean[1]}>[1]):TabularDataSet[1]\n\t\tfilter(T[*],Function<{T[1]->Boolean[1]}>[1]):T[*]\n


<br>

#### <a id="fail-star_from_cte-TDS"></a>`star_from_cte`

📘 **TDS Path**

**Input SQL:**
```sql
WITH cte AS (SELECT name, dept_id FROM persons WHERE dept_id IS NOT NULL) SELECT * FROM cte ORDER BY name
```

**Legend SQL:**
```sql
WITH cte AS (SELECT name, dept_id FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL) SELECT * FROM cte ORDER BY name
```

**Error:**
> Unhandled value type: meta::pure::tds::SortInformation


<br>

#### <a id="fail-json_extract_field-TDS"></a><a id="fail-json_extract_field-Relation"></a>`json_extract_field`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT '{"a":1,"b":2}'::jsonb -> 'a' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '{"a":1,"b":2}'::jsonb -> 'a' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/pureToSQLQuery/pureToSQLQuery_deprecated.pure line:282 column:90), "Match failure: 1 instanceOf class org.finos.legend.pure.runtime.java.extension.external.variant.VariantInstanceImpl"

📗 **Relation Path**

**Input SQL:**
```sql
SELECT '{"a":1,"b":2}'::jsonb -> 'a' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '{"a":1,"b":2}'::jsonb -> 'a' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Error mapping not found for class Map cache:''


<br>

#### <a id="fail-json_extract_field_nested-TDS"></a><a id="fail-json_extract_field_nested-Relation"></a>`json_extract_field_nested`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT '{"a":{"b":3}}'::jsonb -> 'a' -> 'b' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '{"a":{"b":3}}'::jsonb -> 'a' -> 'b' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/pureToSQLQuery/pureToSQLQuery_deprecated.pure line:282 column:90), "Match failure: 3 instanceOf class org.finos.legend.pure.runtime.java.extension.external.variant.VariantInstanceImpl"

📗 **Relation Path**

**Input SQL:**
```sql
SELECT '{"a":{"b":3}}'::jsonb -> 'a' -> 'b' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '{"a":{"b":3}}'::jsonb -> 'a' -> 'b' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Error mapping not found for class Map cache:''


<br>

#### <a id="fail-json_extract_array_index-TDS"></a>`json_extract_array_index`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT '[10,20,30]'::jsonb -> 1 AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '[10,20,30]'::jsonb -> 1 AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/pureToSQLQuery/pureToSQLQuery_deprecated.pure line:282 column:90), "Match failure: 20 instanceOf class org.finos.legend.pure.runtime.java.extension.external.variant.VariantInstanceImpl"


<br>

#### <a id="fail-json_extract_array_negative_index-TDS"></a>`json_extract_array_negative_index`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT '[10,20,30]'::jsonb -> -1 AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '[10,20,30]'::jsonb -> -1 AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> Execution error at ??, "The system is trying to get an element at offset -1 where the collection is of size 3"


<br>

#### <a id="fail-json_extract_text_field-Relation"></a>`json_extract_text_field`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT '{"a":"hello","b":2}'::jsonb ->> 'a' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '{"a":"hello","b":2}'::jsonb ->> 'a' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Error mapping not found for class Map cache:''


<br>

#### <a id="fail-json_extract_text_number-Relation"></a>`json_extract_text_number`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT '{"a":1,"b":2}'::jsonb ->> 'a' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '{"a":1,"b":2}'::jsonb ->> 'a' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Error mapping not found for class Map cache:''


<br>

#### <a id="fail-json_extract_text_null_key-Relation"></a>`json_extract_text_null_key`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT '{"a":1}'::jsonb ->> 'missing' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '{"a":1}'::jsonb ->> 'missing' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Error mapping not found for class Map cache:''


<br>

#### <a id="fail-json_path_extract-TDS"></a><a id="fail-json_path_extract-Relation"></a>`json_path_extract`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT '{"a":{"b":{"c":42}}}'::jsonb #> '{a,b}' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '{"a":{"b":{"c":42}}}'::jsonb #> '{a,b}' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/pureToSQLQuery/pureToSQLQuery_deprecated.pure line:282 column:90), "Match failure: {"c":42} instanceOf class org.finos.legend.pure.runtime.java.extension.external.variant.VariantInstanceImpl"

📗 **Relation Path**

**Input SQL:**
```sql
SELECT '{"a":{"b":{"c":42}}}'::jsonb #> '{a,b}' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '{"a":{"b":{"c":42}}}'::jsonb #> '{a,b}' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Error mapping not found for class Map cache:''


<br>

#### <a id="fail-json_path_extract_array-TDS"></a><a id="fail-json_path_extract_array-Relation"></a>`json_path_extract_array`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT '{"a":[1,2,3]}'::jsonb #> '{a,1}' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '{"a":[1,2,3]}'::jsonb #> '{a,1}' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/pureToSQLQuery/pureToSQLQuery_deprecated.pure line:282 column:90), "Match failure: 2 instanceOf class org.finos.legend.pure.runtime.java.extension.external.variant.VariantInstanceImpl"

📗 **Relation Path**

**Input SQL:**
```sql
SELECT '{"a":[1,2,3]}'::jsonb #> '{a,1}' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '{"a":[1,2,3]}'::jsonb #> '{a,1}' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Error mapping not found for class Map cache:''


<br>

#### <a id="fail-json_path_extract_deep-TDS"></a><a id="fail-json_path_extract_deep-Relation"></a>`json_path_extract_deep`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT '{"a":{"b":{"c":"deep"}}}'::jsonb #> '{a,b,c}' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '{"a":{"b":{"c":"deep"}}}'::jsonb #> '{a,b,c}' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/pureToSQLQuery/pureToSQLQuery_deprecated.pure line:282 column:90), "Match failure: "deep" instanceOf class org.finos.legend.pure.runtime.java.extension.external.variant.VariantInstanceImpl"

📗 **Relation Path**

**Input SQL:**
```sql
SELECT '{"a":{"b":{"c":"deep"}}}'::jsonb #> '{a,b,c}' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '{"a":{"b":{"c":"deep"}}}'::jsonb #> '{a,b,c}' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Error mapping not found for class Map cache:''


<br>

#### <a id="fail-json_path_extract_text-Relation"></a>`json_path_extract_text`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT '{"a":{"b":"hello"}}'::jsonb #>> '{a,b}' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '{"a":{"b":"hello"}}'::jsonb #>> '{a,b}' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Error mapping not found for class Map cache:''


<br>

#### <a id="fail-json_path_extract_text_number-Relation"></a>`json_path_extract_text_number`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT '{"a":{"b":42}}'::jsonb #>> '{a,b}' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '{"a":{"b":42}}'::jsonb #>> '{a,b}' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Error mapping not found for class Map cache:''


<br>

#### <a id="fail-jsonb_contains_right-TDS"></a><a id="fail-jsonb_contains_right-Relation"></a>`jsonb_contains_right`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":1,"b":2}'::jsonb @> '{"a":1}'::jsonb AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":1,"b":2}'::jsonb @> '{"a":1}'::jsonb AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":1,"b":2}'::jsonb @> '{"a":1}'::jsonb AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> json operation right side must be integer or string


<br>

#### <a id="fail-jsonb_contains_right_array-TDS"></a><a id="fail-jsonb_contains_right_array-Relation"></a>`jsonb_contains_right_array`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '[1,2,3]'::jsonb @> '[1,3]'::jsonb AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '[1,2,3]'::jsonb @> '[1,3]'::jsonb AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '[1,2,3]'::jsonb @> '[1,3]'::jsonb AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> json operation right side must be integer or string


<br>

#### <a id="fail-jsonb_contains_right_false-TDS"></a><a id="fail-jsonb_contains_right_false-Relation"></a>`jsonb_contains_right_false`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":1}'::jsonb @> '{"a":2}'::jsonb AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":1}'::jsonb @> '{"a":2}'::jsonb AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":1}'::jsonb @> '{"a":2}'::jsonb AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> json operation right side must be integer or string


<br>

#### <a id="fail-jsonb_contains_right_nested-TDS"></a><a id="fail-jsonb_contains_right_nested-Relation"></a>`jsonb_contains_right_nested`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":{"b":1}}'::jsonb @> '{"a":{"b":1}}'::jsonb AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":{"b":1}}'::jsonb @> '{"a":{"b":1}}'::jsonb AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":{"b":1}}'::jsonb @> '{"a":{"b":1}}'::jsonb AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> json operation right side must be integer or string


<br>

#### <a id="fail-jsonb_contained_by-TDS"></a><a id="fail-jsonb_contained_by-Relation"></a>`jsonb_contained_by`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":1}'::jsonb <@ '{"a":1,"b":2}'::jsonb AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":1}'::jsonb <@ '{"a":1,"b":2}'::jsonb AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":1}'::jsonb <@ '{"a":1,"b":2}'::jsonb AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> json operation right side must be integer or string


<br>

#### <a id="fail-jsonb_contained_by_false-TDS"></a><a id="fail-jsonb_contained_by_false-Relation"></a>`jsonb_contained_by_false`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":1,"b":2}'::jsonb <@ '{"a":1}'::jsonb AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":1,"b":2}'::jsonb <@ '{"a":1}'::jsonb AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":1,"b":2}'::jsonb <@ '{"a":1}'::jsonb AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> json operation right side must be integer or string


<br>

#### <a id="fail-jsonb_has_all_keys-TDS"></a><a id="fail-jsonb_has_all_keys-Relation"></a>`jsonb_has_all_keys`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":1,"b":2,"c":3}'::jsonb ?& array['a','b'] AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":1,"b":2,"c":3}'::jsonb ?& ARRAY['a', 'b'] AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":1,"b":2,"c":3}'::jsonb ?& ARRAY['a', 'b'] AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> json operation right side must be integer or string


<br>

#### <a id="fail-jsonb_has_all_keys_false-TDS"></a><a id="fail-jsonb_has_all_keys_false-Relation"></a>`jsonb_has_all_keys_false`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":1,"b":2}'::jsonb ?& array['a','c'] AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":1,"b":2}'::jsonb ?& ARRAY['a', 'c'] AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":1,"b":2}'::jsonb ?& ARRAY['a', 'c'] AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> json operation right side must be integer or string


<br>

#### <a id="fail-json_extract_then_text-Relation"></a>`json_extract_then_text`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT '{"a":{"b":"value"}}'::jsonb -> 'a' ->> 'b' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '{"a":{"b":"value"}}'::jsonb -> 'a' ->> 'b' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Error mapping not found for class Map cache:''


<br>

#### <a id="fail-jsonb_contains_in_where-TDS"></a><a id="fail-jsonb_contains_in_where-Relation"></a>`jsonb_contains_in_where`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT 1 AS result FROM persons WHERE '{"active":true}'::jsonb @> '{"active":true}'::jsonb AND id = 1
```

**Legend SQL (TDS):**
```sql
SELECT 1 AS result FROM func('e2e::tds_persons') WHERE '{"active":true}'::jsonb @> '{"active":true}'::jsonb AND id = 1
```

**Legend SQL (Relation):**
```sql
SELECT 1 AS result FROM func('e2e::rel_persons') WHERE '{"active":true}'::jsonb @> '{"active":true}'::jsonb AND id = 1
```

**Error:**
> json operation right side must be integer or string


<br>

#### <a id="fail-interval_ts_diff_literal-TDS"></a><a id="fail-interval_ts_diff_literal-Relation"></a>`interval_ts_diff_literal`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ts - TIMESTAMP '2020-01-01 00:00:00' AS result FROM dates WHERE ts IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT ts - TIMESTAMP '2020-01-01 00:00:00' AS result FROM func('e2e::tds_dates') WHERE ts IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT ts - TIMESTAMP '2020-01-01 00:00:00' AS result FROM func('e2e::rel_dates') WHERE ts IS NOT NULL ORDER BY 1
```

**Error:**
> ERROR: Error while retrieving a row


<br>

#### <a id="fail-interval_extract_epoch-TDS"></a><a id="fail-interval_extract_epoch-Relation"></a>`interval_extract_epoch`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT EXTRACT(EPOCH FROM ts - TIMESTAMP '2020-01-01') AS result FROM dates WHERE ts IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT EXTRACT(EPOCH FROM ts - TIMESTAMP '2020-01-01') AS result FROM func('e2e::tds_dates') WHERE ts IS NOT NULL ORDER BY 1
```

**Error:**
> ERROR: operator does not exist: interval - timestamp without time zone\n  Hint: No operator matches the given name and argument types. You might need to add explicit type casts.\n  Position: 129

📗 **Relation Path**

**Input SQL:**
```sql
SELECT EXTRACT(EPOCH FROM ts - TIMESTAMP '2020-01-01') AS result FROM dates WHERE ts IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT EXTRACT(EPOCH FROM ts - TIMESTAMP '2020-01-01') AS result FROM func('e2e::rel_dates') WHERE ts IS NOT NULL ORDER BY 1
```

**Error:**
> Can't find a match for function 'meta::pure::functions::date::toEpochValue(Integer[1])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\ttoEpochValue(Date[1]):Integer[1]\nFunctions that can match if number of parameters are changed:\n\t\ttoEpochValue(Date[1],DurationUnit[1]):Integer[1]\n


<br>

#### <a id="fail-interval_extract_days-Relation"></a>`interval_extract_days`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT EXTRACT(DAY FROM ts - TIMESTAMP '2020-01-01') AS result FROM dates WHERE ts IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT EXTRACT(DAY FROM ts - TIMESTAMP '2020-01-01') AS result FROM func('e2e::rel_dates') WHERE ts IS NOT NULL ORDER BY 1
```

**Error:**
> Can't find a match for function 'meta::pure::functions::date::dayOfMonth(Integer[1])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\tdayOfMonth(Date[1]):Integer[1]\n


<br>

#### <a id="fail-interval_column_plus_date-TDS"></a><a id="fail-interval_column_plus_date-Relation"></a>`interval_column_plus_date`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT d + i AS result FROM dates WHERE d IS NOT NULL AND i IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT d + i AS result FROM func('e2e::tds_dates') WHERE d IS NOT NULL AND i IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT d + i AS result FROM func('e2e::rel_dates') WHERE d IS NOT NULL AND i IS NOT NULL ORDER BY 1
```

**Error:**
> no column found named: 'i'. Available columns: [id, d, ts, tsz]


<br>

#### <a id="fail-interval_column_plus_ts-TDS"></a><a id="fail-interval_column_plus_ts-Relation"></a>`interval_column_plus_ts`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ts + i AS result FROM dates WHERE ts IS NOT NULL AND i IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT ts + i AS result FROM func('e2e::tds_dates') WHERE ts IS NOT NULL AND i IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT ts + i AS result FROM func('e2e::rel_dates') WHERE ts IS NOT NULL AND i IS NOT NULL ORDER BY 1
```

**Error:**
> no column found named: 'i'. Available columns: [id, d, ts, tsz]


<br>

#### <a id="fail-colres_e2_window_aggregate_over_join-Relation"></a>`colres_e2_window_aggregate_over_join`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name AS name, p.dept_id AS dept_id, SUM(p.salary) OVER (PARTITION BY p.dept_id) AS dept_total FROM persons p INNER JOIN departments d ON p.dept_id = d.id WHERE p.salary IS NOT NULL ORDER BY 2, 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, p.dept_id AS dept_id, SUM(p.salary) OVER (PARTITION BY p.dept_id) AS dept_total FROM func('e2e::rel_persons') p INNER JOIN func('e2e::rel_departments') d ON p.dept_id = d.id WHERE p.salary IS NOT NULL ORDER BY 2, 1
```

**Error:**
> Can't find property 'salary_p' in class 'meta::pure::metamodel::relation::Relation'


<br>

#### <a id="fail-colres_e2_window_two_sides_renamed_differently-Relation"></a>`colres_e2_window_two_sides_renamed_differently`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name AS name, d.name AS dept_name, MAX(p.id) OVER (PARTITION BY d.name) AS max_id_in_dept FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 2, 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, d.name AS dept_name, MAX(p.id) OVER (PARTITION BY d.name) AS max_id_in_dept FROM func('e2e::rel_persons') p INNER JOIN func('e2e::rel_departments') d ON p.dept_id = d.id ORDER BY 2, 1
```

**Error:**
> Can't find property 'id_p' in class 'meta::pure::metamodel::relation::Relation'


<br>

#### <a id="fail-colres_gap_order_by_expression_over_unprojected_column-TDS"></a><a id="fail-colres_gap_order_by_expression_over_unprojected_column-Relation"></a>`colres_gap_order_by_expression_over_unprojected_column`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name FROM persons WHERE age IS NOT NULL ORDER BY age * 2, name
```

**Legend SQL (TDS):**
```sql
SELECT name FROM func('e2e::tds_persons') WHERE age IS NOT NULL ORDER BY age * 2, name
```

**Legend SQL (Relation):**
```sql
SELECT name FROM func('e2e::rel_persons') WHERE age IS NOT NULL ORDER BY age * 2, name
```

**Error:**
> no column found named: 'age'. Available columns: [name]


<br>

#### <a id="fail-within_group_rank_hypothetical-Relation"></a>`within_group_rank_hypothetical`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT RANK(50000) WITHIN GROUP (ORDER BY salary) AS rank_at_50k FROM persons
```

**Legend SQL:**
```sql
SELECT RANK(50000) WITHIN GROUP (ORDER BY salary) AS rank_at_50k FROM func('e2e::rel_persons')
```

**Error:**
> Can't find variable class for variable 'p' in the graph


<br>

#### <a id="fail-recursive_cte_union_distinct_unsupported-Relation"></a>`recursive_cte_union_distinct_unsupported`

📗 **Relation Path**

**Input SQL:**
```sql
WITH RECURSIVE t(n) AS (SELECT id FROM persons WHERE id = 1 UNION SELECT n + 1 FROM t WHERE n < 5) SELECT n FROM t ORDER BY 1
```

**Legend SQL:**
```sql
WITH RECURSIVE t (n) AS (SELECT id FROM func('e2e::rel_persons') WHERE id = 1 UNION SELECT n + 1 FROM t WHERE n < 5) SELECT n FROM t ORDER BY 1
```

**Error:**
> WITH RECURSIVE requires UNION ALL; UNION would have to de-duplicate across rounds, which recurse() does not do


<br>

#### <a id="fail-recursive_keyword_without_recursion-TDS"></a>`recursive_keyword_without_recursion`

📘 **TDS Path**

**Input SQL:**
```sql
WITH RECURSIVE t AS (SELECT name, salary FROM persons WHERE salary > 70000) SELECT name, salary FROM t ORDER BY 1
```

**Legend SQL:**
```sql
WITH RECURSIVE t AS (SELECT name, salary FROM func('e2e::tds_persons') WHERE salary > 70000) SELECT name, salary FROM t ORDER BY 1
```

**Error:**
> Unhandled value type: meta::pure::tds::SortInformation


<br>

#### <a id="fail-frame_rows_unbounded_current-Relation"></a>`frame_rows_unbounded_current`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total FROM func('e2e::rel_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Cannot invoke "Object.getClass()" because "resO" is null


<br>

#### <a id="fail-frame_rows_unbounded_current_avg-Relation"></a>`frame_rows_unbounded_current_avg`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name, salary, AVG(salary) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_avg FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, AVG(salary) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_avg FROM func('e2e::rel_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Cannot invoke "Object.getClass()" because "resO" is null


<br>

#### <a id="fail-frame_rows_whole_partition-Relation"></a>`frame_rows_whole_partition`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS total FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS total FROM func('e2e::rel_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Cannot invoke "Object.getClass()" because "resO" is null


<br>

#### <a id="fail-frame_rows_sliding_3-Relation"></a>`frame_rows_sliding_3`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name, salary, AVG(salary) OVER (ORDER BY name ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) AS moving_avg FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, AVG(salary) OVER (ORDER BY name ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) AS moving_avg FROM func('e2e::rel_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Cannot invoke "Object.getClass()" because "resO" is null


<br>

#### <a id="fail-frame_rows_lookback_2-Relation"></a>`frame_rows_lookback_2`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS sum_3 FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS sum_3 FROM func('e2e::rel_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Cannot invoke "Object.getClass()" because "resO" is null


<br>

#### <a id="fail-frame_rows_current_to_end-Relation"></a>`frame_rows_current_to_end`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name, salary, COUNT(*) OVER (ORDER BY name ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING) AS remaining FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, COUNT(*) OVER (ORDER BY name ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING) AS remaining FROM func('e2e::rel_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Cannot invoke "Object.getClass()" because "resO" is null


<br>

#### <a id="fail-frame_multi_agg-Relation"></a>`frame_multi_agg`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name, salary, SUM(salary) OVER w AS run_sum, AVG(salary) OVER w AS run_avg, COUNT(*) OVER w AS run_cnt, MIN(salary) OVER w AS run_min, MAX(salary) OVER w AS run_max FROM persons WHERE salary IS NOT NULL WINDOW w AS (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, SUM(salary) OVER w AS run_sum, AVG(salary) OVER w AS run_avg, COUNT(*) OVER w AS run_cnt, MIN(salary) OVER w AS run_min, MAX(salary) OVER w AS run_max FROM func('e2e::rel_persons') WHERE salary IS NOT NULL WINDOW w AS (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) ORDER BY 1
```

**Error:**
> 


<br>

#### <a id="fail-frame_rows_lookback_only-Relation"></a>`frame_rows_lookback_only`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN 2 PRECEDING AND 1 PRECEDING) AS prev_2 FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN 2 PRECEDING AND 1 PRECEDING) AS prev_2 FROM func('e2e::rel_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> 


<br>

#### <a id="fail-frame_rows_lookahead-Relation"></a>`frame_rows_lookahead`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN 1 FOLLOWING AND 2 FOLLOWING) AS next_2 FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN 1 FOLLOWING AND 2 FOLLOWING) AS next_2 FROM func('e2e::rel_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> 


<br>

#### <a id="fail-frame_rows_current_only-Relation"></a>`frame_rows_current_only`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN CURRENT ROW AND CURRENT ROW) AS self_only FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN CURRENT ROW AND CURRENT ROW) AS self_only FROM func('e2e::rel_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> 


<br>

#### <a id="fail-frame_rows_wide_sliding-Relation"></a>`frame_rows_wide_sliding`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name, salary, AVG(salary) OVER (ORDER BY name ROWS BETWEEN 3 PRECEDING AND 3 FOLLOWING) AS wide_avg FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, AVG(salary) OVER (ORDER BY name ROWS BETWEEN 3 PRECEDING AND 3 FOLLOWING) AS wide_avg FROM func('e2e::rel_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> 


<br>

#### <a id="fail-named_window_with_frame-Relation"></a>`named_window_with_frame`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name, salary, AVG(salary) OVER w AS moving_avg FROM persons WHERE salary IS NOT NULL WINDOW w AS (ORDER BY name ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, AVG(salary) OVER w AS moving_avg FROM func('e2e::rel_persons') WHERE salary IS NOT NULL WINDOW w AS (ORDER BY name ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) ORDER BY 1
```

**Error:**
> 


<br>

#### <a id="fail-named_window_multi_agg-Relation"></a>`named_window_multi_agg`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name, salary, MIN(salary) OVER w AS run_min, MAX(salary) OVER w AS run_max, COUNT(*) OVER w AS run_cnt FROM persons WHERE salary IS NOT NULL WINDOW w AS (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, MIN(salary) OVER w AS run_min, MAX(salary) OVER w AS run_max, COUNT(*) OVER w AS run_cnt FROM func('e2e::rel_persons') WHERE salary IS NOT NULL WINDOW w AS (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) ORDER BY 1
```

**Error:**
> 


<br>

#### <a id="fail-comp_agg_window_dept_pct-Relation"></a>`comp_agg_window_dept_pct`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS dept_total, SUM(SUM(salary)) OVER () AS grand_total FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS dept_total, SUM(SUM(salary)) OVER () AS grand_total FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> no column found named: 'salary'. Available columns: [dept_id, dept_total]


<br>

#### <a id="fail-comp_agg_window_running-Relation"></a>`comp_agg_window_running`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt, SUM(COUNT(*)) OVER (ORDER BY dept_id) AS running_cnt FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt, SUM(COUNT(*)) OVER (ORDER BY dept_id) AS running_cnt FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> Can't find a match for function 'meta::pure::functions::collection::count()'.\nFunctions that can match if number of parameters are changed:\n\t\tcount(Any[*]):Integer[1]\n


<br>

#### <a id="fail-comp_agg_win_implicit_aggregate-Relation"></a>`comp_agg_win_implicit_aggregate`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT SUM(salary) AS s, AVG(salary) OVER () AS a FROM persons WHERE salary IS NOT NULL
```

**Legend SQL:**
```sql
SELECT SUM(salary) AS s, AVG(salary) OVER () AS a FROM func('e2e::rel_persons') WHERE salary IS NOT NULL
```

**Error:**
> no column found named: 'salary'. Available columns: [s]


<br>

#### <a id="fail-comp_agg_win_outer_expression-Relation"></a>`comp_agg_win_outer_expression`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS s, SUM(salary) - AVG(SUM(salary)) OVER () AS diff FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS s, SUM(salary) - AVG(SUM(salary)) OVER () AS diff FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> no column found named: 'salary'. Available columns: [dept_id, s]


<br>

#### <a id="fail-comp_three_table_agg-TDS"></a>`comp_three_table_agg`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT d.name AS dept_name, COUNT(DISTINCT p.id) AS emp_count, COALESCE(SUM(o.amount), 0) AS total_orders FROM departments d LEFT JOIN persons p ON p.dept_id = d.id LEFT JOIN orders o ON o.person_id = p.id GROUP BY d.name ORDER BY 1
```

**Legend SQL:**
```sql
SELECT d.name AS dept_name, COUNT(DISTINCT p.id) AS emp_count, COALESCE(SUM(o.amount), 0) AS total_orders FROM func('e2e::tds_departments') d LEFT JOIN func('e2e::tds_persons') p ON p.dept_id = d.id LEFT JOIN func('e2e::tds_orders') o ON o.person_id = p.id GROUP BY d.name ORDER BY 1
```

**Error:**
> Could not find meta::relational::functions::sqlQueryToString::DynaFunctionRegistry.values['firstNotNull']


<br>

#### <a id="fail-comp_left_join_coalesce_multi-TDS"></a>`comp_left_join_coalesce_multi`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT d.name, COUNT(p.id) AS emps, COALESCE(MIN(p.salary), 0) AS min_sal, COALESCE(MAX(p.salary), 0) AS max_sal FROM departments d LEFT JOIN persons p ON p.dept_id = d.id GROUP BY d.name ORDER BY 1
```

**Legend SQL:**
```sql
SELECT d.name, COUNT(p.id) AS emps, COALESCE(MIN(p.salary), 0) AS min_sal, COALESCE(MAX(p.salary), 0) AS max_sal FROM func('e2e::tds_departments') d LEFT JOIN func('e2e::tds_persons') p ON p.dept_id = d.id GROUP BY d.name ORDER BY 1
```

**Error:**
> Could not find meta::relational::functions::sqlQueryToString::DynaFunctionRegistry.values['firstNotNull']


<br>

#### <a id="fail-stress_running_case-Relation"></a>`stress_running_case`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name, salary, SUM(CASE WHEN salary > 60000 THEN salary ELSE 0 END) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS high_earner_running FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, SUM(CASE WHEN salary > 60000 THEN salary ELSE 0 END) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS high_earner_running FROM func('e2e::rel_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> 


<br>

#### <a id="fail-stress_multi_agg_join-TDS"></a>`stress_multi_agg_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT d.name AS dept, COUNT(DISTINCT p.id) AS employees, COALESCE(AVG(p.salary), 0) AS avg_salary, COALESCE(SUM(o.amount), 0) AS total_orders, COALESCE(COUNT(DISTINCT o.id), 0) AS order_count FROM departments d LEFT JOIN persons p ON p.dept_id = d.id LEFT JOIN orders o ON o.person_id = p.id GROUP BY d.name ORDER BY 1
```

**Legend SQL:**
```sql
SELECT d.name AS dept, COUNT(DISTINCT p.id) AS employees, COALESCE(AVG(p.salary), 0) AS avg_salary, COALESCE(SUM(o.amount), 0) AS total_orders, COALESCE(COUNT(DISTINCT o.id), 0) AS order_count FROM func('e2e::tds_departments') d LEFT JOIN func('e2e::tds_persons') p ON p.dept_id = d.id LEFT JOIN func('e2e::tds_orders') o ON o.person_id = p.id GROUP BY d.name ORDER BY 1
```

**Error:**
> Could not find meta::relational::functions::sqlQueryToString::DynaFunctionRegistry.values['firstNotNull']


<br>

#### <a id="fail-stress_percentile_sim-TDS"></a><a id="fail-stress_percentile_sim-Relation"></a>`stress_percentile_sim`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, ROUND(CAST(rn AS NUMERIC) / cnt * 100, 1) AS percentile FROM (SELECT name, salary, ROW_NUMBER() OVER (ORDER BY salary) AS rn, COUNT(*) OVER () AS cnt FROM persons WHERE salary IS NOT NULL) sub ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, ROUND(CAST(rn AS NUMERIC) / cnt * 100, 1) AS percentile FROM (SELECT name, salary, ROW_NUMBER() OVER (ORDER BY salary) AS rn, COUNT(*) OVER () AS cnt FROM func('e2e::tds_persons') WHERE salary IS NOT NULL) sub ORDER BY 1
```

**Error:**
> Execution error at (resource:/core_external_query_sql/binding/fromPure/fromPure.pure line:1593 column:36), "Match failure: null"

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name, salary, ROUND(CAST(rn AS NUMERIC) / cnt * 100, 1) AS percentile FROM (SELECT name, salary, ROW_NUMBER() OVER (ORDER BY salary) AS rn, COUNT(*) OVER () AS cnt FROM persons WHERE salary IS NOT NULL) sub ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, ROUND(CAST(rn AS NUMERIC) / cnt * 100, 1) AS percentile FROM (SELECT name, salary, ROW_NUMBER() OVER (ORDER BY salary) AS rn, COUNT(*) OVER () AS cnt FROM func('e2e::rel_persons') WHERE salary IS NOT NULL) sub ORDER BY 1
```

**Error:**
> Can't find a match for function 'meta::pure::functions::math::round(Number[1],Integer[1])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\tround(Float[1],Integer[1]):Float[1]\n\t\tround(Decimal[1],Integer[1]):Decimal[1]\nFunctions that can match if number of parameters are changed:\n\t\tround(Number[1]):Integer[1]\n


<br>

#### <a id="fail-stress_lag_comparison-Relation"></a>`stress_lag_comparison`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, LAG(SUM(salary)) OVER (ORDER BY dept_id) AS prev, SUM(salary) - COALESCE(LAG(SUM(salary)) OVER (ORDER BY dept_id), 0) AS diff FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, LAG(SUM(salary)) OVER (ORDER BY dept_id) AS prev, SUM(salary) - COALESCE(LAG(SUM(salary)) OVER (ORDER BY dept_id), 0) AS diff FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> no column found named: 'salary'. Available columns: [dept_id, total]


<br>

#### <a id="fail-nested_exists_agg-Relation"></a>`nested_exists_agg`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT d.name, d.budget FROM departments d WHERE EXISTS (SELECT 1 FROM persons p WHERE p.dept_id = d.id GROUP BY p.dept_id HAVING COUNT(*) > 2) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT d.name, d.budget FROM func('e2e::rel_departments') d WHERE EXISTS (SELECT 1 FROM func('e2e::rel_persons') p WHERE p.dept_id = d.id GROUP BY p.dept_id HAVING COUNT(*) > 2) ORDER BY 1
```

**Error:**
> Column 'id' of the enclosing query cannot be referenced from this subquery: both use the table alias 'root'


<br>

#### <a id="fail-window_over_agg_cum_pct-Relation"></a>`window_over_agg_cum_pct`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, ROUND(SUM(salary) * 100.0 / SUM(SUM(salary)) OVER (), 2) AS pct FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, ROUND(SUM(salary) * 100.0 / SUM(SUM(salary)) OVER (), 2) AS pct FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> no column found named: 'salary'. Available columns: [dept_id, total]


<br>

#### <a id="fail-window_over_agg_running-Relation"></a>`window_over_agg_running`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, SUM(SUM(salary)) OVER (ORDER BY dept_id) AS running_total FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, SUM(SUM(salary)) OVER (ORDER BY dept_id) AS running_total FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> no column found named: 'salary'. Available columns: [dept_id, total]


<br>

#### <a id="fail-window_over_agg_lag-Relation"></a>`window_over_agg_lag`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, LAG(SUM(salary)) OVER (ORDER BY dept_id) AS prev_total FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, LAG(SUM(salary)) OVER (ORDER BY dept_id) AS prev_total FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> no column found named: 'salary'. Available columns: [dept_id, total]


<br>

#### <a id="fail-window_over_agg_minmax-Relation"></a>`window_over_agg_minmax`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt, MIN(COUNT(*)) OVER () AS min_cnt, MAX(COUNT(*)) OVER () AS max_cnt FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt, MIN(COUNT(*)) OVER () AS min_cnt, MAX(COUNT(*)) OVER () AS max_cnt FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> Can't find a match for function 'meta::pure::functions::collection::count()'.\nFunctions that can match if number of parameters are changed:\n\t\tcount(Any[*]):Integer[1]\n


<br>

#### <a id="fail-window_over_agg_avg-Relation"></a>`window_over_agg_avg`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, AVG(SUM(salary)) OVER () AS avg_total FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, AVG(SUM(salary)) OVER () AS avg_total FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> no column found named: 'salary'. Available columns: [dept_id, total]


<br>

#### <a id="fail-window_over_agg_first_value-Relation"></a>`window_over_agg_first_value`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, FIRST_VALUE(SUM(salary)) OVER (ORDER BY SUM(salary) DESC) AS highest FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, FIRST_VALUE(SUM(salary)) OVER (ORDER BY SUM(salary) DESC) AS highest FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> no column found named: 'salary'. Available columns: [dept_id, total]


<br>

#### <a id="fail-window_over_agg_last_value-Relation"></a>`window_over_agg_last_value`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, LAST_VALUE(SUM(salary)) OVER (ORDER BY SUM(salary) DESC ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS lowest FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, LAST_VALUE(SUM(salary)) OVER (ORDER BY SUM(salary) DESC ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS lowest FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> no column found named: 'salary'. Available columns: [dept_id, total]


<a id="unsupported-syntax"></a>

### UNSUPPORTED_SYNTAX (217 tests)

#### <a id="fail-except_basic-TDS"></a>`except_basic`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id FROM persons WHERE dept_id IS NOT NULL EXCEPT SELECT id as dept_id FROM departments WHERE budget < 600000 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL EXCEPT SELECT id AS dept_id FROM func('e2e::tds_departments') WHERE budget < 600000 ORDER BY 1
```

**Error:**
> Unsupported: except only supported on relation inputs


<br>

#### <a id="fail-except_strings-TDS"></a>`except_strings`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name FROM persons WHERE dept_id = 1 EXCEPT SELECT name FROM persons WHERE salary > 70000 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name FROM func('e2e::tds_persons') WHERE dept_id = 1 EXCEPT SELECT name FROM func('e2e::tds_persons') WHERE salary > 70000 ORDER BY 1
```

**Error:**
> Unsupported: except only supported on relation inputs


<br>

#### <a id="fail-except_with_limit-TDS"></a>`except_with_limit`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id FROM persons WHERE dept_id IS NOT NULL EXCEPT SELECT id as dept_id FROM departments WHERE budget < 600000 ORDER BY 1 LIMIT 5
```

**Legend SQL:**
```sql
SELECT dept_id FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL EXCEPT SELECT id AS dept_id FROM func('e2e::tds_departments') WHERE budget < 600000 ORDER BY 1 LIMIT 5
```

**Error:**
> Unsupported: except only supported on relation inputs


<br>

#### <a id="fail-except_multiple-TDS"></a>`except_multiple`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id FROM persons WHERE dept_id IS NOT NULL EXCEPT SELECT id as dept_id FROM departments WHERE budget < 400000 EXCEPT SELECT id as dept_id FROM departments WHERE budget > 900000 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL EXCEPT SELECT id AS dept_id FROM func('e2e::tds_departments') WHERE budget < 400000 EXCEPT SELECT id AS dept_id FROM func('e2e::tds_departments') WHERE budget > 900000 ORDER BY 1
```

**Error:**
> Unsupported: except only supported on relation inputs


<br>

#### <a id="fail-except_nulls-TDS"></a>`except_nulls`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT age FROM persons EXCEPT SELECT age FROM persons WHERE age > 40 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT age FROM func('e2e::tds_persons') EXCEPT SELECT age FROM func('e2e::tds_persons') WHERE age > 40 ORDER BY 1
```

**Error:**
> Unsupported: except only supported on relation inputs


<br>

#### <a id="fail-except_with_agg-TDS"></a>`except_with_agg`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id EXCEPT SELECT id FROM departments WHERE budget < 600000 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id EXCEPT SELECT id FROM func('e2e::tds_departments') WHERE budget < 600000 ORDER BY 1
```

**Error:**
> Unsupported: except only supported on relation inputs


<br>

#### <a id="fail-except_expression-TDS"></a>`except_expression`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT salary * 1.1 AS adjusted FROM persons WHERE dept_id = 1 AND salary IS NOT NULL EXCEPT SELECT salary * 0.9 FROM persons WHERE dept_id = 2 AND salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT salary * 1.1 AS adjusted FROM func('e2e::tds_persons') WHERE dept_id = 1 AND salary IS NOT NULL EXCEPT SELECT salary * 0.9 FROM func('e2e::tds_persons') WHERE dept_id = 2 AND salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: except only supported on relation inputs


<br>

#### <a id="fail-except_count-TDS"></a>`except_count`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT COUNT(*) AS total FROM (SELECT dept_id FROM persons WHERE dept_id IS NOT NULL EXCEPT SELECT id as dept_id FROM departments WHERE budget < 600000) sub
```

**Legend SQL:**
```sql
SELECT COUNT(*) AS total FROM (SELECT dept_id FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL EXCEPT SELECT id AS dept_id FROM func('e2e::tds_departments') WHERE budget < 600000) sub
```

**Error:**
> Unsupported: except only supported on relation inputs


<br>

#### <a id="fail-intersect_basic-TDS"></a>`intersect_basic`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id FROM persons WHERE dept_id IS NOT NULL AND salary > 50000 INTERSECT SELECT dept_id FROM persons WHERE dept_id IS NOT NULL AND age > 30 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary > 50000 INTERSECT SELECT dept_id FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND age > 30 ORDER BY 1
```

**Error:**
> Unsupported: except only supported on relation inputs


<br>

#### <a id="fail-intersect_strings-TDS"></a>`intersect_strings`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name FROM persons WHERE age > 30 INTERSECT SELECT name FROM persons WHERE salary > 70000 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name FROM func('e2e::tds_persons') WHERE age > 30 INTERSECT SELECT name FROM func('e2e::tds_persons') WHERE salary > 70000 ORDER BY 1
```

**Error:**
> Unsupported: except only supported on relation inputs


<br>

#### <a id="fail-intersect_with_limit-TDS"></a>`intersect_with_limit`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id FROM persons WHERE dept_id IS NOT NULL AND salary > 50000 INTERSECT SELECT dept_id FROM persons WHERE dept_id IS NOT NULL AND age > 30 ORDER BY 1 LIMIT 5
```

**Legend SQL:**
```sql
SELECT dept_id FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary > 50000 INTERSECT SELECT dept_id FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND age > 30 ORDER BY 1 LIMIT 5
```

**Error:**
> Unsupported: except only supported on relation inputs


<br>

#### <a id="fail-intersect_multiple-TDS"></a>`intersect_multiple`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id FROM persons WHERE dept_id IS NOT NULL INTERSECT SELECT dept_id FROM persons WHERE salary > 50000 INTERSECT SELECT dept_id FROM persons WHERE age > 30 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL INTERSECT SELECT dept_id FROM func('e2e::tds_persons') WHERE salary > 50000 INTERSECT SELECT dept_id FROM func('e2e::tds_persons') WHERE age > 30 ORDER BY 1
```

**Error:**
> Unsupported: except only supported on relation inputs


<br>

#### <a id="fail-intersect_nulls-TDS"></a>`intersect_nulls`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT age FROM persons INTERSECT SELECT age FROM persons WHERE age IS NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT age FROM func('e2e::tds_persons') INTERSECT SELECT age FROM func('e2e::tds_persons') WHERE age IS NULL ORDER BY 1
```

**Error:**
> Unsupported: except only supported on relation inputs


<br>

#### <a id="fail-intersect_with_agg-TDS"></a>`intersect_with_agg`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id INTERSECT SELECT id FROM departments WHERE budget > 400000 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id INTERSECT SELECT id FROM func('e2e::tds_departments') WHERE budget > 400000 ORDER BY 1
```

**Error:**
> Unsupported: except only supported on relation inputs


<br>

#### <a id="fail-intersect_expression-TDS"></a>`intersect_expression`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT salary * 1.1 AS adjusted FROM persons WHERE dept_id = 1 AND salary IS NOT NULL INTERSECT SELECT salary * 0.9 FROM persons WHERE dept_id = 2 AND salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT salary * 1.1 AS adjusted FROM func('e2e::tds_persons') WHERE dept_id = 1 AND salary IS NOT NULL INTERSECT SELECT salary * 0.9 FROM func('e2e::tds_persons') WHERE dept_id = 2 AND salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: except only supported on relation inputs


<br>

#### <a id="fail-intersect_count-TDS"></a>`intersect_count`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT COUNT(*) AS total FROM (SELECT dept_id FROM persons WHERE dept_id IS NOT NULL AND salary > 50000 INTERSECT SELECT dept_id FROM persons WHERE dept_id IS NOT NULL AND age > 30) sub
```

**Legend SQL:**
```sql
SELECT COUNT(*) AS total FROM (SELECT dept_id FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary > 50000 INTERSECT SELECT dept_id FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND age > 30) sub
```

**Error:**
> Unsupported: except only supported on relation inputs


<br>

#### <a id="fail-except_then_intersect-TDS"></a>`except_then_intersect`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id FROM persons WHERE dept_id IS NOT NULL EXCEPT SELECT id as dept_id FROM departments WHERE budget < 400000 INTERSECT SELECT dept_id FROM persons WHERE salary > 50000 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL EXCEPT SELECT id AS dept_id FROM func('e2e::tds_departments') WHERE budget < 400000 INTERSECT SELECT dept_id FROM func('e2e::tds_persons') WHERE salary > 50000 ORDER BY 1
```

**Error:**
> Unsupported: except only supported on relation inputs


<br>

#### <a id="fail-union_then_except-TDS"></a>`union_then_except`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id FROM persons WHERE dept_id = 1 UNION ALL SELECT dept_id FROM persons WHERE dept_id = 2 EXCEPT SELECT id as dept_id FROM departments WHERE budget < 400000 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id FROM func('e2e::tds_persons') WHERE dept_id = 1 UNION ALL SELECT dept_id FROM func('e2e::tds_persons') WHERE dept_id = 2 EXCEPT SELECT id AS dept_id FROM func('e2e::tds_departments') WHERE budget < 400000 ORDER BY 1
```

**Error:**
> Unsupported: except only supported on relation inputs


<br>

#### <a id="fail-subquery_in_where-TDS"></a>`subquery_in_where`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name FROM persons WHERE id IN (SELECT person_id FROM orders WHERE amount > 100) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name FROM func('e2e::tds_persons') WHERE id IN (SELECT person_id FROM func('e2e::tds_orders') WHERE amount > 100) ORDER BY 1
```

**Error:**
> Unsupported: in (subquery) only supported on relation inputs


<br>

#### <a id="fail-subquery_in_dept-TDS"></a>`subquery_in_dept`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name FROM persons WHERE dept_id IN (SELECT id FROM departments WHERE budget > 500000) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name FROM func('e2e::tds_persons') WHERE dept_id IN (SELECT id FROM func('e2e::tds_departments') WHERE budget > 500000) ORDER BY 1
```

**Error:**
> Unsupported: in (subquery) only supported on relation inputs


<br>

#### <a id="fail-subquery_not_in-TDS"></a>`subquery_not_in`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name FROM persons WHERE id NOT IN (SELECT person_id FROM orders WHERE person_id IS NOT NULL) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name FROM func('e2e::tds_persons') WHERE id NOT IN (SELECT person_id FROM func('e2e::tds_orders') WHERE person_id IS NOT NULL) ORDER BY 1
```

**Error:**
> Unsupported: not in (subquery) only supported on relation inputs


<br>

#### <a id="fail-subquery_not_in_dept-TDS"></a>`subquery_not_in_dept`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name FROM persons WHERE dept_id NOT IN (SELECT id FROM departments WHERE budget < 600000) AND dept_id IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name FROM func('e2e::tds_persons') WHERE dept_id NOT IN (SELECT id FROM func('e2e::tds_departments') WHERE budget < 600000) AND dept_id IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: not in (subquery) only supported on relation inputs


<br>

#### <a id="fail-subquery_exists-TDS"></a>`subquery_exists`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE EXISTS (SELECT 1 FROM orders o WHERE o.person_id = p.id) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE EXISTS (SELECT 1 FROM func('e2e::tds_orders') o WHERE o.person_id = p.id) ORDER BY 1
```

**Error:**
> Unsupported: exists only supported on relation inputs


<br>

#### <a id="fail-subquery_exists_dept-TDS"></a>`subquery_exists_dept`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT d.name FROM departments d WHERE EXISTS (SELECT 1 FROM persons p WHERE p.dept_id = d.id AND p.salary > 70000) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT d.name FROM func('e2e::tds_departments') d WHERE EXISTS (SELECT 1 FROM func('e2e::tds_persons') p WHERE p.dept_id = d.id AND p.salary > 70000) ORDER BY 1
```

**Error:**
> Unsupported: exists only supported on relation inputs


<br>

#### <a id="fail-subquery_not_exists-TDS"></a>`subquery_not_exists`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.person_id = p.id) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE NOT EXISTS (SELECT 1 FROM func('e2e::tds_orders') o WHERE o.person_id = p.id) ORDER BY 1
```

**Error:**
> Unsupported: exists only supported on relation inputs


<br>

#### <a id="fail-subquery_correlated-TDS"></a>`subquery_correlated`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, p.salary FROM persons p WHERE p.salary > (SELECT AVG(salary) FROM persons WHERE dept_id = p.dept_id AND salary IS NOT NULL) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name, p.salary FROM func('e2e::tds_persons') p WHERE p.salary > (SELECT AVG(salary) FROM func('e2e::tds_persons') WHERE dept_id = p.dept_id AND salary IS NOT NULL) ORDER BY 1
```

**Error:**
> Unsupported: scalar subquery comparison only supported on relation inputs


<br>

#### <a id="fail-subquery_agg_comparison-TDS"></a>`subquery_agg_comparison`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary FROM persons WHERE salary > (SELECT AVG(salary) FROM persons WHERE salary IS NOT NULL) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary FROM func('e2e::tds_persons') WHERE salary > (SELECT AVG(salary) FROM func('e2e::tds_persons') WHERE salary IS NOT NULL) ORDER BY 1
```

**Error:**
> Unsupported: scalar subquery comparison only supported on relation inputs


<br>

#### <a id="fail-subquery_agg_min-TDS"></a>`subquery_agg_min`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary FROM persons WHERE salary = (SELECT MIN(salary) FROM persons WHERE salary IS NOT NULL) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary FROM func('e2e::tds_persons') WHERE salary = (SELECT MIN(salary) FROM func('e2e::tds_persons') WHERE salary IS NOT NULL) ORDER BY 1
```

**Error:**
> Unsupported: scalar subquery comparison only supported on relation inputs


<br>

#### <a id="fail-subquery_in_having-TDS"></a>`subquery_in_having`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id HAVING COUNT(*) > (SELECT AVG(cnt) FROM (SELECT COUNT(*) AS cnt FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id) sub) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id HAVING COUNT(*) > (SELECT AVG(cnt) FROM (SELECT COUNT(*) AS cnt FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id) sub) ORDER BY 1
```

**Error:**
> Unsupported: scalar subquery comparison only supported on relation inputs


<br>

#### <a id="fail-subquery_union-TDS"></a>`subquery_union`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name FROM persons WHERE id IN (SELECT person_id FROM orders WHERE amount > 100 UNION SELECT person_id FROM orders WHERE status = 'completed') ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name FROM func('e2e::tds_persons') WHERE id IN (SELECT person_id FROM func('e2e::tds_orders') WHERE amount > 100 UNION SELECT person_id FROM func('e2e::tds_orders') WHERE status = 'completed') ORDER BY 1
```

**Error:**
> Unsupported: in (subquery) only supported on relation inputs


<br>

#### <a id="fail-subquery_in_over_union-TDS"></a>`subquery_in_over_union`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT sub.id, sub.name FROM (SELECT id, name FROM persons WHERE dept_id = 1 UNION ALL SELECT id, name FROM persons WHERE dept_id = 2) sub WHERE sub.id IN (SELECT person_id FROM orders WHERE amount > 100) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT sub.id, sub.name FROM (SELECT id, name FROM func('e2e::tds_persons') WHERE dept_id = 1 UNION ALL SELECT id, name FROM func('e2e::tds_persons') WHERE dept_id = 2) sub WHERE sub.id IN (SELECT person_id FROM func('e2e::tds_orders') WHERE amount > 100) ORDER BY 1
```

**Error:**
> Unsupported: in (subquery) only supported on relation inputs


<br>

#### <a id="fail-subquery_exists_multi_cond-TDS"></a>`subquery_exists_multi_cond`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE EXISTS (SELECT 1 FROM orders o WHERE o.person_id = p.id AND o.amount > 100 AND o.status = 'completed') ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE EXISTS (SELECT 1 FROM func('e2e::tds_orders') o WHERE o.person_id = p.id AND o.amount > 100 AND o.status = 'completed') ORDER BY 1
```

**Error:**
> Unsupported: exists only supported on relation inputs


<br>

#### <a id="fail-subquery_in_case-TDS"></a>`subquery_in_case`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, CASE WHEN salary > (SELECT AVG(salary) FROM persons WHERE salary IS NOT NULL) THEN 'Above' ELSE 'Below' END AS vs_avg FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, CASE WHEN salary > (SELECT AVG(salary) FROM func('e2e::tds_persons') WHERE salary IS NOT NULL) THEN 'Above' ELSE 'Below' END AS vs_avg FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: scalar subquery comparison only supported on relation inputs


<br>

#### <a id="fail-subquery_exists_uncorrelated-TDS"></a>`subquery_exists_uncorrelated`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE EXISTS (SELECT 1 FROM departments d WHERE d.budget > 900000) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE EXISTS (SELECT 1 FROM func('e2e::tds_departments') d WHERE d.budget > 900000) ORDER BY 1
```

**Error:**
> Unsupported: exists only supported on relation inputs


<br>

#### <a id="fail-subquery_exists_uncorrelated_empty-TDS"></a>`subquery_exists_uncorrelated_empty`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE EXISTS (SELECT 1 FROM departments d WHERE d.budget > 99999999) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE EXISTS (SELECT 1 FROM func('e2e::tds_departments') d WHERE d.budget > 99999999) ORDER BY 1
```

**Error:**
> Unsupported: exists only supported on relation inputs


<br>

#### <a id="fail-subquery_exists_select_column-TDS"></a>`subquery_exists_select_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE EXISTS (SELECT o.id FROM orders o WHERE o.person_id = p.id AND o.amount > 400) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE EXISTS (SELECT o.id FROM func('e2e::tds_orders') o WHERE o.person_id = p.id AND o.amount > 400) ORDER BY 1
```

**Error:**
> Unsupported: exists only supported on relation inputs


<br>

#### <a id="fail-subquery_exists_grouped-TDS"></a>`subquery_exists_grouped`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE EXISTS (SELECT o.person_id, COUNT(*) AS cnt FROM orders o WHERE o.person_id = p.id GROUP BY o.person_id) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE EXISTS (SELECT o.person_id, COUNT(*) AS cnt FROM func('e2e::tds_orders') o WHERE o.person_id = p.id GROUP BY o.person_id) ORDER BY 1
```

**Error:**
> Unsupported: exists only supported on relation inputs


<br>

#### <a id="fail-subquery_in_uncorrelated_filtered-TDS"></a>`subquery_in_uncorrelated_filtered`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE p.dept_id IN (SELECT d.id FROM departments d WHERE d.budget > 500000) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE p.dept_id IN (SELECT d.id FROM func('e2e::tds_departments') d WHERE d.budget > 500000) ORDER BY 1
```

**Error:**
> Unsupported: in (subquery) only supported on relation inputs


<br>

#### <a id="fail-subquery_in_correlated-TDS"></a>`subquery_in_correlated`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE p.id IN (SELECT o.person_id FROM orders o WHERE o.amount > p.salary / 1000) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE p.id IN (SELECT o.person_id FROM func('e2e::tds_orders') o WHERE o.amount > p.salary / 1000) ORDER BY 1
```

**Error:**
> Unsupported: in (subquery) only supported on relation inputs


<br>

#### <a id="fail-subquery_in_empty-TDS"></a>`subquery_in_empty`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE p.dept_id IN (SELECT d.id FROM departments d WHERE d.budget > 99999999) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE p.dept_id IN (SELECT d.id FROM func('e2e::tds_departments') d WHERE d.budget > 99999999) ORDER BY 1
```

**Error:**
> Unsupported: in (subquery) only supported on relation inputs


<br>

#### <a id="fail-subquery_quant_gt_any-TDS"></a>`subquery_quant_gt_any`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE p.age > ANY (SELECT p2.age FROM persons p2 WHERE p2.dept_id = 2) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE p.age > ANY(SELECT p2.age FROM func('e2e::tds_persons') p2 WHERE p2.dept_id = 2) ORDER BY 1
```

**Error:**
> Unsupported: quantified comparison only supported on relation inputs


<br>

#### <a id="fail-subquery_quant_eq_any-TDS"></a>`subquery_quant_eq_any`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE p.dept_id = ANY (SELECT d.id FROM departments d WHERE d.budget > 700000) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE p.dept_id = ANY(SELECT d.id FROM func('e2e::tds_departments') d WHERE d.budget > 700000) ORDER BY 1
```

**Error:**
> Unsupported: quantified comparison only supported on relation inputs


<br>

#### <a id="fail-subquery_quant_neq_any-TDS"></a>`subquery_quant_neq_any`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE p.dept_id <> ANY (SELECT d.id FROM departments d WHERE d.budget > 700000) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE p.dept_id <> ANY(SELECT d.id FROM func('e2e::tds_departments') d WHERE d.budget > 700000) ORDER BY 1
```

**Error:**
> Unsupported: quantified comparison only supported on relation inputs


<br>

#### <a id="fail-subquery_quant_gt_all-TDS"></a>`subquery_quant_gt_all`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE p.age > ALL (SELECT p2.age FROM persons p2 WHERE p2.dept_id = 2) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE p.age > ALL(SELECT p2.age FROM func('e2e::tds_persons') p2 WHERE p2.dept_id = 2) ORDER BY 1
```

**Error:**
> Unsupported: quantified comparison only supported on relation inputs


<br>

#### <a id="fail-subquery_quant_neq_all-TDS"></a>`subquery_quant_neq_all`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE p.dept_id <> ALL (SELECT d.id FROM departments d WHERE d.budget > 700000) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE p.dept_id <> ALL(SELECT d.id FROM func('e2e::tds_departments') d WHERE d.budget > 700000) ORDER BY 1
```

**Error:**
> Unsupported: quantified comparison only supported on relation inputs


<br>

#### <a id="fail-subquery_quant_ge_some-TDS"></a>`subquery_quant_ge_some`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE p.age >= SOME (SELECT p2.age FROM persons p2 WHERE p2.dept_id = 2) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE p.age >= SOME(SELECT p2.age FROM func('e2e::tds_persons') p2 WHERE p2.dept_id = 2) ORDER BY 1
```

**Error:**
> Unsupported: quantified comparison only supported on relation inputs


<br>

#### <a id="fail-subquery_quant_all_null_in_subquery-TDS"></a>`subquery_quant_all_null_in_subquery`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE p.salary > ALL (SELECT p2.salary FROM persons p2 WHERE p2.dept_id = 1) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE p.salary > ALL(SELECT p2.salary FROM func('e2e::tds_persons') p2 WHERE p2.dept_id = 1) ORDER BY 1
```

**Error:**
> Unsupported: quantified comparison only supported on relation inputs


<br>

#### <a id="fail-subquery_quant_all_correlated_empty-TDS"></a>`subquery_quant_all_correlated_empty`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE p.id < ALL (SELECT o.id FROM orders o WHERE o.person_id = p.id) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE p.id < ALL(SELECT o.id FROM func('e2e::tds_orders') o WHERE o.person_id = p.id) ORDER BY 1
```

**Error:**
> Unsupported: quantified comparison only supported on relation inputs


<br>

#### <a id="fail-subquery_quant_all_empty-TDS"></a>`subquery_quant_all_empty`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE p.id > ALL (SELECT p2.id FROM persons p2 WHERE p2.id > 100) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE p.id > ALL(SELECT p2.id FROM func('e2e::tds_persons') p2 WHERE p2.id > 100) ORDER BY 1
```

**Error:**
> Unsupported: quantified comparison only supported on relation inputs


<br>

#### <a id="fail-subquery_quant_all_empty_null_value-TDS"></a>`subquery_quant_all_empty_null_value`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE p.age > ALL (SELECT p2.age FROM persons p2 WHERE p2.id > 100) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE p.age > ALL(SELECT p2.age FROM func('e2e::tds_persons') p2 WHERE p2.id > 100) ORDER BY 1
```

**Error:**
> Unsupported: quantified comparison only supported on relation inputs


<br>

#### <a id="fail-subquery_quant_any_empty-TDS"></a>`subquery_quant_any_empty`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE p.id > ANY (SELECT p2.id FROM persons p2 WHERE p2.id > 100) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE p.id > ANY(SELECT p2.id FROM func('e2e::tds_persons') p2 WHERE p2.id > 100) ORDER BY 1
```

**Error:**
> Unsupported: quantified comparison only supported on relation inputs


<br>

#### <a id="fail-subquery_quant_not_gt_any-TDS"></a>`subquery_quant_not_gt_any`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE NOT (p.age > ANY (SELECT p2.age FROM persons p2 WHERE p2.dept_id = 2)) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE NOT (p.age > ANY(SELECT p2.age FROM func('e2e::tds_persons') p2 WHERE p2.dept_id = 2)) ORDER BY 1
```

**Error:**
> Unsupported: quantified comparison only supported on relation inputs


<br>

#### <a id="fail-subquery_quant_not_gt_all_null_in_subquery-TDS"></a>`subquery_quant_not_gt_all_null_in_subquery`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE NOT (p.salary > ALL (SELECT p2.salary FROM persons p2 WHERE p2.dept_id = 1)) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE NOT (p.salary > ALL(SELECT p2.salary FROM func('e2e::tds_persons') p2 WHERE p2.dept_id = 1)) ORDER BY 1
```

**Error:**
> Unsupported: quantified comparison only supported on relation inputs


<br>

#### <a id="fail-subquery_exists_correlated_unqualified_outer_column-TDS"></a>`subquery_exists_correlated_unqualified_outer_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE EXISTS (SELECT 1 FROM orders o WHERE o.person_id = p.id AND o.amount > salary / 1000) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE EXISTS (SELECT 1 FROM func('e2e::tds_orders') o WHERE o.person_id = p.id AND o.amount > salary / 1000) ORDER BY 1
```

**Error:**
> Unsupported: exists only supported on relation inputs


<br>

#### <a id="fail-subquery_exists_correlated_unqualified_outer_dept_id-TDS"></a>`subquery_exists_correlated_unqualified_outer_dept_id`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE EXISTS (SELECT 1 FROM orders o WHERE o.person_id = p.id AND dept_id IS NOT NULL) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE EXISTS (SELECT 1 FROM func('e2e::tds_orders') o WHERE o.person_id = p.id AND dept_id IS NOT NULL) ORDER BY 1
```

**Error:**
> Unsupported: exists only supported on relation inputs


<br>

#### <a id="fail-subquery_exists_unqualified_inner_column_control-TDS"></a>`subquery_exists_unqualified_inner_column_control`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE EXISTS (SELECT 1 FROM orders o WHERE o.person_id = p.id AND amount > 100) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::tds_persons') p WHERE EXISTS (SELECT 1 FROM func('e2e::tds_orders') o WHERE o.person_id = p.id AND amount > 100) ORDER BY 1
```

**Error:**
> Unsupported: exists only supported on relation inputs


<br>

#### <a id="fail-cte_chained-TDS"></a>`cte_chained`

📘 **TDS Path**

**Input SQL:**
```sql
WITH base AS (SELECT id, name, salary FROM persons WHERE salary IS NOT NULL), ranked AS (SELECT name, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) AS rn FROM base) SELECT name, salary, rn FROM ranked WHERE rn <= 5 ORDER BY 1
```

**Legend SQL:**
```sql
WITH base AS (SELECT id, name, salary FROM func('e2e::tds_persons') WHERE salary IS NOT NULL), ranked AS (SELECT name, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) AS rn FROM base) SELECT name, salary, rn FROM ranked WHERE rn <= 5 ORDER BY 1
```

**Error:**
> Generics not supported (function: meta::pure::tds::olapGroupBy_TabularDataSet_1__String_MANY__SortInformation_$0_1$__OlapOperation_1__String_1__TabularDataSet_1_)


<br>

#### <a id="fail-cte_in_join-Relation"></a>`cte_in_join`

📗 **Relation Path**

**Input SQL:**
```sql
WITH order_totals AS (SELECT person_id, SUM(amount) AS total_orders FROM orders GROUP BY person_id) SELECT p.name, COALESCE(o.total_orders, 0) AS total FROM persons p LEFT JOIN order_totals o ON p.id = o.person_id ORDER BY 1
```

**Legend SQL:**
```sql
WITH order_totals AS (SELECT person_id, SUM(amount) AS total_orders FROM func('e2e::rel_orders') GROUP BY person_id) SELECT p.name, COALESCE(o.total_orders, 0) AS total FROM func('e2e::rel_persons') p LEFT JOIN order_totals o ON p.id = o.person_id ORDER BY 1
```

**Error:**
> Function definition on ->with(..) accesses multiple stores and runtimes, and this is not supported:\n{Platform> [strategy_wrapper /let order_totals = {e2e::TestDB> [1 e2e_Order/[1 e2e_Order/Class Order].all()] -> project(~[id:id(),person_id:personId(),amount:amount(),order_date:orderDate(),status:status()]) -> groupBy(ColSpecArray , ~[total_orders:amount():sum_Float_MANY__Float_1_()])}]},\n{e2e::TestDB> [strategy_wrapper /[2 e2e_Person/[2 e2e_Person/Class Person].all()] -> project(~[id:id(),name:name(),age:age(),salary:salary(),hire_date:hireDate(),active:active(),dept_id:deptId()]) -> rename(ColSpec , ColSpec ) -> rename(ColSpec , ColSpec ) -> rename(ColSpec , ColSpec ) -> rename(ColSpec , ColSpec ) -> rename(ColSpec , ColSpec ) -> rename(ColSpec , ColSpec ) -> rename(ColSpec , ColSpec ) -> join($order_totals -> rename(ColSpec , ColSpec ) -> rename(ColSpec , ColSpec ), JoinKind LEFT, [Routed Func:row1:(id_p:Integer[1], name_p:String[0..1], age_p:Integer[0..1], salary_p:Float[0..1], hire_date_p:StrictDate[0..1], active_p:Boolean[0..1], dept_id_p:Integer[0..1])[1],row2:(person_id_o:Integer[0..1], total_orders_o:Float[1])[1] | $row1.id_p == $row2.person_id_o;]) -> project(~[name:name_p(),total:coalesce_T_$0_1$__T_$0_1$__T_$0_1$__T_$0_1$_(total_orders_o(),0,)]) -> sort(SortInfo )]}


<br>

#### <a id="fail-cte_in_join_dept-Relation"></a>`cte_in_join_dept`

📗 **Relation Path**

**Input SQL:**
```sql
WITH dept_avg AS (SELECT dept_id, AVG(salary) AS avg_sal FROM persons WHERE salary IS NOT NULL GROUP BY dept_id) SELECT d.name, COALESCE(da.avg_sal, 0) AS avg_salary FROM departments d LEFT JOIN dept_avg da ON d.id = da.dept_id ORDER BY 1
```

**Legend SQL:**
```sql
WITH dept_avg AS (SELECT dept_id, AVG(salary) AS avg_sal FROM func('e2e::rel_persons') WHERE salary IS NOT NULL GROUP BY dept_id) SELECT d.name, COALESCE(da.avg_sal, 0) AS avg_salary FROM func('e2e::rel_departments') d LEFT JOIN dept_avg da ON d.id = da.dept_id ORDER BY 1
```

**Error:**
> Function definition on ->with(..) accesses multiple stores and runtimes, and this is not supported:\n{Platform> [strategy_wrapper /let dept_avg = {e2e::TestDB> [1 e2e_Person/[1 e2e_Person/Class Person].all()] -> project(~[id:id(),name:name(),age:age(),salary:salary(),hire_date:hireDate(),active:active(),dept_id:deptId()]) -> filter([Routed Func:x:(id:Integer[1], name:String[0..1], age:Integer[0..1], salary:Float[0..1], hire_date:StrictDate[0..1], active:Boolean[0..1], dept_id:Integer[0..1])[1] | $x.salary -> isNotEmpty();]) -> groupBy(ColSpecArray , ~[avg_sal:salary():average_Float_MANY__Float_1_()])}]},\n{e2e::TestDB> [strategy_wrapper /[2 e2e_Department/[2 e2e_Department/Class Department].all()] -> project(~[id:id(),name:name(),budget:budget(),created_at:createdAt()]) -> rename(ColSpec , ColSpec ) -> rename(ColSpec , ColSpec ) -> rename(ColSpec , ColSpec ) -> rename(ColSpec , ColSpec ) -> join($dept_avg -> rename(ColSpec , ColSpec ) -> rename(ColSpec , ColSpec ), JoinKind LEFT, [Routed Func:row1:(id_d:Integer[1], name_d:String[0..1], budget_d:Float[0..1], created_at_d:DateTime[0..1])[1],row2:(dept_id_da:Integer[0..1], avg_sal_da:Float[1])[1] | $row1.id_d == $row2.dept_id_da;]) -> project(~[name:name_d(),avg_salary:coalesce_T_$0_1$__T_$0_1$__T_$0_1$__T_$0_1$_(avg_sal_da(),0,)]) -> sort(SortInfo )]}


<br>

#### <a id="fail-cte_used_twice-TDS"></a>`cte_used_twice`

📘 **TDS Path**

**Input SQL:**
```sql
WITH emp_data AS (SELECT dept_id, salary FROM persons WHERE salary IS NOT NULL AND dept_id IS NOT NULL) SELECT (SELECT COUNT(*) FROM emp_data) AS total_emps, (SELECT AVG(salary) FROM emp_data) AS avg_salary
```

**Legend SQL:**
```sql
WITH emp_data AS (SELECT dept_id, salary FROM func('e2e::tds_persons') WHERE salary IS NOT NULL AND dept_id IS NOT NULL) SELECT (SELECT COUNT(*) FROM emp_data) AS total_emps, (SELECT AVG(salary) FROM emp_data) AS avg_salary
```

**Error:**
> meta::pure::functions::relation::wrapPrimitiveInTDS_T_MANY__T_1__TDS_1_ is not supported yet!


<br>

#### <a id="fail-cte_with_case-TDS"></a>`cte_with_case`

📘 **TDS Path**

**Input SQL:**
```sql
WITH categorized AS (SELECT name, salary, CASE WHEN salary > 80000 THEN 'Senior' WHEN salary > 50000 THEN 'Mid' ELSE 'Junior' END AS band FROM persons WHERE salary IS NOT NULL) SELECT band, COUNT(*) AS cnt FROM categorized GROUP BY band ORDER BY 1
```

**Legend SQL:**
```sql
WITH categorized AS (SELECT name, salary, CASE WHEN salary > 80000 THEN 'Senior' WHEN salary > 50000 THEN 'Mid' ELSE 'Junior' END AS band FROM func('e2e::tds_persons') WHERE salary IS NOT NULL) SELECT band, COUNT(*) AS cnt FROM categorized GROUP BY band ORDER BY 1
```

**Error:**
> Generics not supported (function: meta::pure::tds::groupBy_TabularDataSet_1__String_MANY__AggregateValue_MANY__TabularDataSet_1_)


<br>

#### <a id="fail-where_in_subquery-TDS"></a>`where_in_subquery`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name FROM persons WHERE dept_id IN (SELECT id FROM departments WHERE name = 'Engineering') ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name FROM func('e2e::tds_persons') WHERE dept_id IN (SELECT id FROM func('e2e::tds_departments') WHERE name = 'Engineering') ORDER BY 1
```

**Error:**
> Unsupported: in (subquery) only supported on relation inputs


<br>

#### <a id="fail-where_not_in_subquery-TDS"></a>`where_not_in_subquery`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name FROM persons WHERE dept_id NOT IN (SELECT id FROM departments WHERE name = 'Engineering') ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name FROM func('e2e::tds_persons') WHERE dept_id NOT IN (SELECT id FROM func('e2e::tds_departments') WHERE name = 'Engineering') ORDER BY 1
```

**Error:**
> Unsupported: not in (subquery) only supported on relation inputs


<br>

#### <a id="fail-where_exists-TDS"></a>`where_exists`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name FROM persons p WHERE EXISTS (SELECT 1 FROM departments d WHERE d.id = p.dept_id) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name FROM func('e2e::tds_persons') p WHERE EXISTS (SELECT 1 FROM func('e2e::tds_departments') d WHERE d.id = p.dept_id) ORDER BY 1
```

**Error:**
> Unsupported: exists only supported on relation inputs


<br>

#### <a id="fail-where_not_exists-TDS"></a>`where_not_exists`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name FROM persons p WHERE NOT EXISTS (SELECT 1 FROM departments d WHERE d.id = p.dept_id AND d.name = 'Engineering') ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name FROM func('e2e::tds_persons') p WHERE NOT EXISTS (SELECT 1 FROM func('e2e::tds_departments') d WHERE d.id = p.dept_id AND d.name = 'Engineering') ORDER BY 1
```

**Error:**
> Unsupported: exists only supported on relation inputs


<br>

#### <a id="fail-where_any-TDS"></a>`where_any`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary FROM persons WHERE salary > ANY(SELECT salary FROM persons WHERE dept_id = 1) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary FROM func('e2e::tds_persons') WHERE salary > ANY(SELECT salary FROM func('e2e::tds_persons') WHERE dept_id = 1) ORDER BY 1
```

**Error:**
> Unsupported: quantified comparison only supported on relation inputs


<br>

#### <a id="fail-where_all-TDS"></a>`where_all`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary FROM persons WHERE salary > ALL(SELECT salary FROM persons WHERE dept_id = 2) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary FROM func('e2e::tds_persons') WHERE salary > ALL(SELECT salary FROM func('e2e::tds_persons') WHERE dept_id = 2) ORDER BY 1
```

**Error:**
> Unsupported: quantified comparison only supported on relation inputs


<br>

#### <a id="fail-lateral_cross_basic-TDS"></a>`lateral_cross_basic`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, g.val FROM persons p CROSS JOIN LATERAL GENERATE_SERIES(1, p.dept_id) AS g(val) WHERE p.id <= 3 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, g.val FROM func('e2e::tds_persons') p CROSS JOIN LATERAL GENERATE_SERIES(1, p.dept_id) AS g(val) WHERE p.id <= 3 ORDER BY 1, 2
```

**Error:**
> Unsupported: lateral only supported on relation inputs


<br>

#### <a id="fail-lateral_unnest_array_literal-TDS"></a><a id="fail-lateral_unnest_array_literal-Relation"></a>`lateral_unnest_array_literal`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2, 3]) AS u(val) WHERE p.id <= 2 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::tds_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2, 3]) AS u(val) WHERE p.id <= 2 ORDER BY 1, 2
```

**Error:**
> Unsupported: lateral only supported on relation inputs

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2, 3]) AS u(val) WHERE p.id <= 2 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::rel_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2, 3]) AS u(val) WHERE p.id <= 2 ORDER BY 1, 2
```

**Error:**
> Unsupported type on column: val (meta::pure::metamodel::valuespecification::InstanceValue), only primitive types and enums are supported


<br>

#### <a id="fail-lateral_unnest_string_array-TDS"></a><a id="fail-lateral_unnest_string_array-Relation"></a>`lateral_unnest_string_array`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, u.skill FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY['Java', 'SQL', 'Python']) AS u(skill) WHERE p.id <= 2 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, u.skill FROM func('e2e::tds_persons') p CROSS JOIN LATERAL UNNEST(ARRAY['Java', 'SQL', 'Python']) AS u(skill) WHERE p.id <= 2 ORDER BY 1, 2
```

**Error:**
> Unsupported: lateral only supported on relation inputs

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, u.skill FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY['Java', 'SQL', 'Python']) AS u(skill) WHERE p.id <= 2 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, u.skill FROM func('e2e::rel_persons') p CROSS JOIN LATERAL UNNEST(ARRAY['Java', 'SQL', 'Python']) AS u(skill) WHERE p.id <= 2 ORDER BY 1, 2
```

**Error:**
> Unsupported type on column: skill (meta::pure::metamodel::valuespecification::InstanceValue), only primitive types and enums are supported


<br>

#### <a id="fail-lateral_unnest_correlated_size-TDS"></a><a id="fail-lateral_unnest_correlated_size-Relation"></a>`lateral_unnest_correlated_size`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[p.age, p.age * 2, p.age * 3]) AS u(val) WHERE p.id <= 2 AND p.age IS NOT NULL ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::tds_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[p.age, p.age * 2, p.age * 3]) AS u(val) WHERE p.id <= 2 AND p.age IS NOT NULL ORDER BY 1, 2
```

**Error:**
> Unsupported: lateral only supported on relation inputs

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[p.age, p.age * 2, p.age * 3]) AS u(val) WHERE p.id <= 2 AND p.age IS NOT NULL ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::rel_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[p.age, p.age * 2, p.age * 3]) AS u(val) WHERE p.id <= 2 AND p.age IS NOT NULL ORDER BY 1, 2
```

**Error:**
> Unsupported type on column: val (meta::pure::metamodel::valuespecification::SimpleFunctionExpression), only primitive types and enums are supported


<br>

#### <a id="fail-lateral_unnest_correlated_conditional-TDS"></a><a id="fail-lateral_unnest_correlated_conditional-Relation"></a>`lateral_unnest_correlated_conditional`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL UNNEST(CASE WHEN p.dept_id = 1 THEN ARRAY[1, 2] ELSE ARRAY[3, 4] END) AS u(val) WHERE p.id <= 3 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::tds_persons') p CROSS JOIN LATERAL UNNEST(CASE WHEN p.dept_id = 1 THEN ARRAY[1, 2] ELSE ARRAY[3, 4] END) AS u(val) WHERE p.id <= 3 ORDER BY 1, 2
```

**Error:**
> Unsupported: lateral only supported on relation inputs

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL UNNEST(CASE WHEN p.dept_id = 1 THEN ARRAY[1, 2] ELSE ARRAY[3, 4] END) AS u(val) WHERE p.id <= 3 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::rel_persons') p CROSS JOIN LATERAL UNNEST(CASE WHEN p.dept_id = 1 THEN ARRAY[1, 2] ELSE ARRAY[3, 4] END) AS u(val) WHERE p.id <= 3 ORDER BY 1, 2
```

**Error:**
> Unsupported type on column: val (meta::pure::metamodel::valuespecification::InstanceValue), only primitive types and enums are supported


<br>

#### <a id="fail-lateral_unnest_left_join-TDS"></a><a id="fail-lateral_unnest_left_join-Relation"></a>`lateral_unnest_left_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p LEFT JOIN LATERAL UNNEST(ARRAY[1, 2]) AS u(val) ON TRUE WHERE p.id <= 3 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::tds_persons') p LEFT JOIN LATERAL UNNEST(ARRAY[1, 2]) AS u(val) ON TRUE WHERE p.id <= 3 ORDER BY 1, 2
```

**Error:**
> Unsupported: lateral only supported on relation inputs

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p LEFT JOIN LATERAL UNNEST(ARRAY[1, 2]) AS u(val) ON TRUE WHERE p.id <= 3 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::rel_persons') p LEFT JOIN LATERAL UNNEST(ARRAY[1, 2]) AS u(val) ON TRUE WHERE p.id <= 3 ORDER BY 1, 2
```

**Error:**
> LEFT join lateral is not supported; use cross join, inner join, or comma syntax instead


<br>

#### <a id="fail-lateral_unnest_left_join_empty_array-TDS"></a><a id="fail-lateral_unnest_left_join_empty_array-Relation"></a>`lateral_unnest_left_join_empty_array`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p LEFT JOIN LATERAL UNNEST(ARRAY[]::INTEGER[]) AS u(val) ON TRUE WHERE p.id = 1 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::tds_persons') p LEFT JOIN LATERAL UNNEST(ARRAY[]::INTEGER[]) AS u(val) ON TRUE WHERE p.id = 1 ORDER BY 1, 2
```

**Error:**
> Unsupported: lateral only supported on relation inputs

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p LEFT JOIN LATERAL UNNEST(ARRAY[]::INTEGER[]) AS u(val) ON TRUE WHERE p.id = 1 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::rel_persons') p LEFT JOIN LATERAL UNNEST(ARRAY[]::INTEGER[]) AS u(val) ON TRUE WHERE p.id = 1 ORDER BY 1, 2
```

**Error:**
> LEFT join lateral is not supported; use cross join, inner join, or comma syntax instead


<br>

#### <a id="fail-lateral_unnest_with_where-TDS"></a><a id="fail-lateral_unnest_with_where-Relation"></a>`lateral_unnest_with_where`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2, 3, 4, 5]) AS u(val) WHERE p.id = 1 AND u.val > 2 ORDER BY 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::tds_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2, 3, 4, 5]) AS u(val) WHERE p.id = 1 AND u.val > 2 ORDER BY 2
```

**Error:**
> Unsupported: lateral only supported on relation inputs

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2, 3, 4, 5]) AS u(val) WHERE p.id = 1 AND u.val > 2 ORDER BY 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::rel_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2, 3, 4, 5]) AS u(val) WHERE p.id = 1 AND u.val > 2 ORDER BY 2
```

**Error:**
> Unsupported type on column: val (meta::pure::metamodel::valuespecification::InstanceValue), only primitive types and enums are supported


<br>

#### <a id="fail-lateral_unnest_with_join_condition-TDS"></a><a id="fail-lateral_unnest_with_join_condition-Relation"></a>`lateral_unnest_with_join_condition`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p LEFT JOIN LATERAL UNNEST(ARRAY[1, 2, 3]) AS u(val) ON u.val = p.dept_id WHERE p.id <= 3 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::tds_persons') p LEFT JOIN LATERAL UNNEST(ARRAY[1, 2, 3]) AS u(val) ON u.val = p.dept_id WHERE p.id <= 3 ORDER BY 1, 2
```

**Error:**
> Unsupported: lateral only supported on relation inputs

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p LEFT JOIN LATERAL UNNEST(ARRAY[1, 2, 3]) AS u(val) ON u.val = p.dept_id WHERE p.id <= 3 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::rel_persons') p LEFT JOIN LATERAL UNNEST(ARRAY[1, 2, 3]) AS u(val) ON u.val = p.dept_id WHERE p.id <= 3 ORDER BY 1, 2
```

**Error:**
> LEFT join lateral is not supported; use cross join, inner join, or comma syntax instead


<br>

#### <a id="fail-lateral_unnest_aggregate_count-TDS"></a>`lateral_unnest_aggregate_count`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, COUNT(*) AS cnt FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2, 3]) AS u(val) WHERE p.id <= 2 GROUP BY p.name ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name, COUNT(*) AS cnt FROM func('e2e::tds_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2, 3]) AS u(val) WHERE p.id <= 2 GROUP BY p.name ORDER BY 1
```

**Error:**
> Unsupported: lateral only supported on relation inputs


<br>

#### <a id="fail-lateral_unnest_aggregate_sum-TDS"></a>`lateral_unnest_aggregate_sum`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, SUM(u.val) AS total FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[p.dept_id, p.dept_id * 2]) AS u(val) WHERE p.id <= 3 AND p.dept_id IS NOT NULL GROUP BY p.name ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name, SUM(u.val) AS total FROM func('e2e::tds_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[p.dept_id, p.dept_id * 2]) AS u(val) WHERE p.id <= 3 AND p.dept_id IS NOT NULL GROUP BY p.name ORDER BY 1
```

**Error:**
> Unsupported: lateral only supported on relation inputs


<br>

#### <a id="fail-lateral_unnest_multiple_arrays-TDS"></a>`lateral_unnest_multiple_arrays`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, u1.val AS val1, u2.val AS val2 FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2]) AS u1(val) CROSS JOIN LATERAL UNNEST(ARRAY['A', 'B']) AS u2(val) WHERE p.id = 1 ORDER BY 2, 3
```

**Legend SQL:**
```sql
SELECT p.name, u1.val AS val1, u2.val AS val2 FROM func('e2e::tds_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2]) AS u1(val) CROSS JOIN LATERAL UNNEST(ARRAY['A', 'B']) AS u2(val) WHERE p.id = 1 ORDER BY 2, 3
```

**Error:**
> Unsupported: lateral only supported on relation inputs


<br>

#### <a id="fail-lateral_unnest_nested-TDS"></a><a id="fail-lateral_unnest_nested-Relation"></a>`lateral_unnest_nested`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL (SELECT val FROM UNNEST(ARRAY[1, 2, 3]) AS t(val) WHERE val > 1) AS u WHERE p.id = 1 ORDER BY 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::tds_persons') p CROSS JOIN LATERAL (SELECT val FROM UNNEST(ARRAY[1, 2, 3]) AS t(val) WHERE val > 1) AS u WHERE p.id = 1 ORDER BY 2
```

**Error:**
> Unsupported: lateral only supported on relation inputs

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL (SELECT val FROM UNNEST(ARRAY[1, 2, 3]) AS t(val) WHERE val > 1) AS u WHERE p.id = 1 ORDER BY 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::rel_persons') p CROSS JOIN LATERAL (SELECT val FROM UNNEST(ARRAY[1, 2, 3]) AS t(val) WHERE val > 1) AS u WHERE p.id = 1 ORDER BY 2
```

**Error:**
> Unsupported type on column: val (meta::pure::metamodel::valuespecification::InstanceValue), only primitive types and enums are supported


<br>

#### <a id="fail-lateral_unnest_decimal_array-TDS"></a><a id="fail-lateral_unnest_decimal_array-Relation"></a>`lateral_unnest_decimal_array`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[1.5, 2.5, 3.5]) AS u(val) WHERE p.id = 1 ORDER BY 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::tds_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[1.5, 2.5, 3.5]) AS u(val) WHERE p.id = 1 ORDER BY 2
```

**Error:**
> Unsupported: lateral only supported on relation inputs

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[1.5, 2.5, 3.5]) AS u(val) WHERE p.id = 1 ORDER BY 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::rel_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[1.5, 2.5, 3.5]) AS u(val) WHERE p.id = 1 ORDER BY 2
```

**Error:**
> Unsupported type on column: val (meta::pure::metamodel::valuespecification::InstanceValue), only primitive types and enums are supported


<br>

#### <a id="fail-lateral_unnest_mixed_expressions-TDS"></a><a id="fail-lateral_unnest_mixed_expressions-Relation"></a>`lateral_unnest_mixed_expressions`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[p.id, p.id + 10, p.id + 20]) AS u(val) WHERE p.id <= 2 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::tds_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[p.id, p.id + 10, p.id + 20]) AS u(val) WHERE p.id <= 2 ORDER BY 1, 2
```

**Error:**
> Unsupported: lateral only supported on relation inputs

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[p.id, p.id + 10, p.id + 20]) AS u(val) WHERE p.id <= 2 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::rel_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[p.id, p.id + 10, p.id + 20]) AS u(val) WHERE p.id <= 2 ORDER BY 1, 2
```

**Error:**
> Unsupported type on column: val (meta::pure::metamodel::valuespecification::SimpleFunctionExpression), only primitive types and enums are supported


<br>

#### <a id="fail-lateral_unnest_with_case-TDS"></a><a id="fail-lateral_unnest_with_case-Relation"></a>`lateral_unnest_with_case`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, u.val, CASE WHEN u.val > 2 THEN 'high' ELSE 'low' END AS category FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2, 3, 4]) AS u(val) WHERE p.id = 1 ORDER BY 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val, CASE WHEN u.val > 2 THEN 'high' ELSE 'low' END AS category FROM func('e2e::tds_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2, 3, 4]) AS u(val) WHERE p.id = 1 ORDER BY 2
```

**Error:**
> Unsupported: lateral only supported on relation inputs

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, u.val, CASE WHEN u.val > 2 THEN 'high' ELSE 'low' END AS category FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2, 3, 4]) AS u(val) WHERE p.id = 1 ORDER BY 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val, CASE WHEN u.val > 2 THEN 'high' ELSE 'low' END AS category FROM func('e2e::rel_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2, 3, 4]) AS u(val) WHERE p.id = 1 ORDER BY 2
```

**Error:**
> Unsupported type on column: val (meta::pure::metamodel::valuespecification::InstanceValue), only primitive types and enums are supported


<br>

#### <a id="fail-lateral_unnest_self_join-TDS"></a><a id="fail-lateral_unnest_self_join-Relation"></a>`lateral_unnest_self_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p1.name, p2.name, u.val FROM persons p1 CROSS JOIN persons p2 CROSS JOIN LATERAL UNNEST(ARRAY[1, 2]) AS u(val) WHERE p1.id = 1 AND p2.id = 2 ORDER BY 3
```

**Legend SQL:**
```sql
SELECT p1.name, p2.name, u.val FROM func('e2e::tds_persons') p1 CROSS JOIN func('e2e::tds_persons') p2 CROSS JOIN LATERAL UNNEST(ARRAY[1, 2]) AS u(val) WHERE p1.id = 1 AND p2.id = 2 ORDER BY 3
```

**Error:**
> Unsupported: lateral only supported on relation inputs

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p1.name, p2.name, u.val FROM persons p1 CROSS JOIN persons p2 CROSS JOIN LATERAL UNNEST(ARRAY[1, 2]) AS u(val) WHERE p1.id = 1 AND p2.id = 2 ORDER BY 3
```

**Legend SQL:**
```sql
SELECT p1.name, p2.name, u.val FROM func('e2e::rel_persons') p1 CROSS JOIN func('e2e::rel_persons') p2 CROSS JOIN LATERAL UNNEST(ARRAY[1, 2]) AS u(val) WHERE p1.id = 1 AND p2.id = 2 ORDER BY 3
```

**Error:**
> Unsupported type on column: val (meta::pure::metamodel::valuespecification::InstanceValue), only primitive types and enums are supported


<br>

#### <a id="fail-lateral_unnest_array_with_nulls-TDS"></a><a id="fail-lateral_unnest_array_with_nulls-Relation"></a>`lateral_unnest_array_with_nulls`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[1, NULL, 3]) AS u(val) WHERE p.id = 1 ORDER BY 2 NULLS LAST
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::tds_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[1, NULL, 3]) AS u(val) WHERE p.id = 1 ORDER BY 2 NULLS LAST
```

**Error:**
> Unsupported: lateral only supported on relation inputs

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[1, NULL, 3]) AS u(val) WHERE p.id = 1 ORDER BY 2 NULLS LAST
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::rel_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[1, NULL, 3]) AS u(val) WHERE p.id = 1 ORDER BY 2 NULLS LAST
```

**Error:**
> Unsupported type on column: val (meta::pure::metamodel::valuespecification::InstanceValue), only primitive types and enums are supported


<br>

#### <a id="fail-lateral_unnest_coalesce-TDS"></a><a id="fail-lateral_unnest_coalesce-Relation"></a>`lateral_unnest_coalesce`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, COALESCE(u.val, 0) AS val FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[1, NULL, 3]) AS u(val) WHERE p.id = 1 ORDER BY 2
```

**Legend SQL:**
```sql
SELECT p.name, COALESCE(u.val, 0) AS val FROM func('e2e::tds_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[1, NULL, 3]) AS u(val) WHERE p.id = 1 ORDER BY 2
```

**Error:**
> Unsupported: lateral only supported on relation inputs

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, COALESCE(u.val, 0) AS val FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[1, NULL, 3]) AS u(val) WHERE p.id = 1 ORDER BY 2
```

**Legend SQL:**
```sql
SELECT p.name, COALESCE(u.val, 0) AS val FROM func('e2e::rel_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[1, NULL, 3]) AS u(val) WHERE p.id = 1 ORDER BY 2
```

**Error:**
> Unsupported type on column: val (meta::pure::metamodel::valuespecification::InstanceValue), only primitive types and enums are supported


<br>

#### <a id="fail-lateral_unnest_string_to_array-TDS"></a>`lateral_unnest_string_to_array`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL UNNEST(STRING_TO_ARRAY('a,b,c', ',')) AS u(val) WHERE p.id = 1 ORDER BY 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::tds_persons') p CROSS JOIN LATERAL UNNEST(STRING_TO_ARRAY('a,b,c', ',')) AS u(val) WHERE p.id = 1 ORDER BY 2
```

**Error:**
> Unsupported: lateral only supported on relation inputs


<br>

#### <a id="fail-lateral_unnest_string_to_array_correlated-TDS"></a>`lateral_unnest_string_to_array_correlated`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL UNNEST(STRING_TO_ARRAY(p.name, '')) AS u(val) WHERE p.id <= 2 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::tds_persons') p CROSS JOIN LATERAL UNNEST(STRING_TO_ARRAY(p.name, '')) AS u(val) WHERE p.id <= 2 ORDER BY 1, 2
```

**Error:**
> Unsupported: lateral only supported on relation inputs


<br>

#### <a id="fail-lateral_unnest_string_to_array_delimiter-TDS"></a><a id="fail-lateral_unnest_string_to_array_delimiter-Relation"></a>`lateral_unnest_string_to_array_delimiter`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT u.val FROM UNNEST(STRING_TO_ARRAY('one|two|three|four', '|')) AS u(val) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT u.val FROM UNNEST(STRING_TO_ARRAY('one|two|three|four', '|')) AS u(val) ORDER BY 1
```

**Error:**
> Unsupported: unnest only supported on relation inputs


<br>

#### <a id="fail-schema_qualified_subquery-TDS"></a>`schema_qualified_subquery`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name FROM public.persons WHERE dept_id IN (SELECT id FROM public.departments WHERE budget > 500000) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name FROM func('e2e::tds_persons') WHERE dept_id IN (SELECT id FROM func('e2e::tds_departments') WHERE budget > 500000) ORDER BY 1
```

**Error:**
> Unsupported: in (subquery) only supported on relation inputs


<br>

#### <a id="fail-jsonb_has_key-TDS"></a><a id="fail-jsonb_has_key-Relation"></a>`jsonb_has_key`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":1,"b":2}'::jsonb ? 'a' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":1,"b":2}'::jsonb ? 'a' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":1,"b":2}'::jsonb ? 'a' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported JSON operator: ?


<br>

#### <a id="fail-jsonb_has_key_false-TDS"></a><a id="fail-jsonb_has_key_false-Relation"></a>`jsonb_has_key_false`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":1,"b":2}'::jsonb ? 'c' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":1,"b":2}'::jsonb ? 'c' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":1,"b":2}'::jsonb ? 'c' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported JSON operator: ?


<br>

#### <a id="fail-jsonb_has_any_key-TDS"></a><a id="fail-jsonb_has_any_key-Relation"></a>`jsonb_has_any_key`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":1,"b":2,"c":3}'::jsonb ?| array['b','d'] AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":1,"b":2,"c":3}'::jsonb ?| ARRAY['b', 'd'] AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":1,"b":2,"c":3}'::jsonb ?| ARRAY['b', 'd'] AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported JSON operator: ?


<br>

#### <a id="fail-jsonb_has_any_key_false-TDS"></a><a id="fail-jsonb_has_any_key_false-Relation"></a>`jsonb_has_any_key_false`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":1,"b":2}'::jsonb ?| array['c','d'] AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":1,"b":2}'::jsonb ?| ARRAY['c', 'd'] AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":1,"b":2}'::jsonb ?| ARRAY['c', 'd'] AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported JSON operator: ?


<br>

#### <a id="fail-jsonb_concat_objects-TDS"></a><a id="fail-jsonb_concat_objects-Relation"></a>`jsonb_concat_objects`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":1}'::jsonb || '{"b":2}'::jsonb AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":1}'::jsonb || '{"b":2}'::jsonb AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":1}'::jsonb || '{"b":2}'::jsonb AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported: concatenating json


<br>

#### <a id="fail-jsonb_concat_override-TDS"></a><a id="fail-jsonb_concat_override-Relation"></a>`jsonb_concat_override`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":1}'::jsonb || '{"a":2}'::jsonb AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":1}'::jsonb || '{"a":2}'::jsonb AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":1}'::jsonb || '{"a":2}'::jsonb AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported: concatenating json


<br>

#### <a id="fail-jsonb_concat_arrays-TDS"></a><a id="fail-jsonb_concat_arrays-Relation"></a>`jsonb_concat_arrays`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '[1,2]'::jsonb || '[3,4]'::jsonb AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '[1,2]'::jsonb || '[3,4]'::jsonb AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '[1,2]'::jsonb || '[3,4]'::jsonb AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported: concatenating json


<br>

#### <a id="fail-jsonb_concat_value_to_array-TDS"></a><a id="fail-jsonb_concat_value_to_array-Relation"></a>`jsonb_concat_value_to_array`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '[1,2]'::jsonb || '3'::jsonb AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '[1,2]'::jsonb || '3'::jsonb AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '[1,2]'::jsonb || '3'::jsonb AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported: concatenating json


<br>

#### <a id="fail-interval_multiply_scalar-TDS"></a><a id="fail-interval_multiply_scalar-Relation"></a>`interval_multiply_scalar`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT INTERVAL '1 hour' * 3 AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT INTERVAL '1 hour' * 3 AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT INTERVAL '1 hour' * 3 AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> date arithmetic expression not currently supported


<br>

#### <a id="fail-interval_divide_scalar-TDS"></a><a id="fail-interval_divide_scalar-Relation"></a>`interval_divide_scalar`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT INTERVAL '1 day' / 2 AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT INTERVAL '1 day' / 2 AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT INTERVAL '1 day' / 2 AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> arithmetic type DIVIDE not currently supported for dates


<br>

#### <a id="fail-colres_e2_window_argument_renamed_column-TDS"></a>`colres_e2_window_argument_renamed_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, LAG(p.name) OVER (ORDER BY p.id) AS prev_name FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name AS name, LAG(p.name) OVER (ORDER BY p.id) AS prev_name FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1, 2
```

**Error:**
> Unsupported: lag only supported on relation inputs


<br>

#### <a id="fail-colres_e2_window_argument_renamed_column_self_join-TDS"></a>`colres_e2_window_argument_renamed_column_self_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT b.salary AS salary, LAG(b.salary) OVER (ORDER BY a.id) AS prev_salary FROM persons a INNER JOIN persons b ON a.dept_id = b.dept_id AND a.id < b.id ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT b.salary AS salary, LAG(b.salary) OVER (ORDER BY a.id) AS prev_salary FROM func('e2e::tds_persons') a INNER JOIN func('e2e::tds_persons') b ON a.dept_id = b.dept_id AND a.id < b.id ORDER BY 1, 2
```

**Error:**
> Unsupported: lag only supported on relation inputs


<br>

#### <a id="fail-crcs_g1a_win_order_nulls_last_then_plain_key-TDS"></a>`crcs_g1a_win_order_nulls_last_then_plain_key`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY p.salary DESC NULLS LAST, p.name ASC) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY p.salary DESC NULLS LAST, p.name ASC) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1a_win_order_two_null_ordered_keys-TDS"></a>`crcs_g1a_win_order_two_null_ordered_keys`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY p.hire_date ASC NULLS FIRST, p.salary DESC NULLS LAST) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY p.hire_date ASC NULLS FIRST, p.salary DESC NULLS LAST) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1a_win_order_three_keys_mixed_null_ordering-TDS"></a>`crcs_g1a_win_order_three_keys_mixed_null_ordering`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY p.active DESC NULLS LAST, p.salary DESC NULLS LAST, p.name ASC) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY p.active DESC NULLS LAST, p.salary DESC NULLS LAST, p.name ASC) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1a_win_order_nulls_last_key_from_right_side-TDS"></a>`crcs_g1a_win_order_nulls_last_key_from_right_side`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY d.budget DESC NULLS LAST, p.name) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY d.budget DESC NULLS LAST, p.name) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1a_win_partition_right_order_left_nulls_last-TDS"></a>`crcs_g1a_win_partition_right_order_left_nulls_last`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY d.id ORDER BY p.salary DESC NULLS LAST, p.name) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY d.id ORDER BY p.salary DESC NULLS LAST, p.name) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1a_win_order_nulls_last_over_left_join-TDS"></a>`crcs_g1a_win_order_nulls_last_over_left_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY p.salary DESC NULLS LAST, p.name) AS rn FROM persons p LEFT OUTER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY p.salary DESC NULLS LAST, p.name) AS rn FROM func('e2e::tds_persons') p LEFT OUTER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1a_win_order_nulls_last_over_three_way_join-TDS"></a>`crcs_g1a_win_order_nulls_last_over_three_way_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, o.id AS order_id, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY o.amount DESC NULLS LAST, o.id) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id INNER JOIN orders o ON o.person_id = p.id ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name AS name, o.id AS order_id, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY o.amount DESC NULLS LAST, o.id) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id INNER JOIN func('e2e::tds_orders') o ON o.person_id = p.id ORDER BY 1, 2
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1a_win_order_nulls_last_over_derived_table_join-TDS"></a>`crcs_g1a_win_order_nulls_last_over_derived_table_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT x.name AS name, y.budget AS budget, ROW_NUMBER() OVER (PARTITION BY x.dept_id ORDER BY x.salary DESC NULLS LAST, x.name) AS rn FROM (SELECT id, name, salary, dept_id FROM persons) x INNER JOIN (SELECT id, budget FROM departments) y ON x.dept_id = y.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT x.name AS name, y.budget AS budget, ROW_NUMBER() OVER (PARTITION BY x.dept_id ORDER BY x.salary DESC NULLS LAST, x.name) AS rn FROM (SELECT id, name, salary, dept_id FROM func('e2e::tds_persons')) x INNER JOIN (SELECT id, budget FROM func('e2e::tds_departments')) y ON x.dept_id = y.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1a_win_lead_nulls_last_over_join-TDS"></a>`crcs_g1a_win_lead_nulls_last_over_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, LEAD(p.hire_date) OVER (PARTITION BY p.dept_id ORDER BY p.hire_date ASC NULLS LAST, p.name) AS next_hire FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, LEAD(p.hire_date) OVER (PARTITION BY p.dept_id ORDER BY p.hire_date ASC NULLS LAST, p.name) AS next_hire FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1a_win_lag_nulls_first_over_join-TDS"></a>`crcs_g1a_win_lag_nulls_first_over_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, LAG(p.salary) OVER (PARTITION BY p.dept_id ORDER BY p.salary ASC NULLS FIRST, p.name) AS prev_salary FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, LAG(p.salary) OVER (PARTITION BY p.dept_id ORDER BY p.salary ASC NULLS FIRST, p.name) AS prev_salary FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1a_dedup_row_number_nulls_last_filtered-TDS"></a>`crcs_g1a_dedup_row_number_nulls_last_filtered`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT a.name, a.budget FROM (SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY p.salary DESC NULLS LAST, p.name) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id) a WHERE a.rn = 1 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT a.name, a.budget FROM (SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY p.salary DESC NULLS LAST, p.name) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id) a WHERE a.rn = 1 ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1a_dedup_row_number_nulls_last_left_join_filtered-TDS"></a>`crcs_g1a_dedup_row_number_nulls_last_left_join_filtered`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT a.name, a.budget FROM (SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY p.hire_date DESC NULLS LAST, p.name) AS rn FROM persons p LEFT OUTER JOIN departments d ON p.dept_id = d.id) a WHERE a.rn = 1 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT a.name, a.budget FROM (SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY p.hire_date DESC NULLS LAST, p.name) AS rn FROM func('e2e::tds_persons') p LEFT OUTER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id) a WHERE a.rn = 1 ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1a_win_order_nulls_last_no_join-TDS"></a>`crcs_g1a_win_order_nulls_last_no_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY p.salary DESC NULLS LAST, p.name) AS rn FROM persons p ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY p.salary DESC NULLS LAST, p.name) AS rn FROM func('e2e::tds_persons') p ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1b_win_order_case_null_guard_over_join-TDS"></a>`crcs_g1b_win_order_case_null_guard_over_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY CASE WHEN p.salary IS NULL THEN 1 ELSE 0 END, p.salary DESC) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY CASE WHEN p.salary IS NULL THEN 1 ELSE 0 END, p.salary DESC) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1b_win_order_case_null_guard_only_over_join-TDS"></a>`crcs_g1b_win_order_case_null_guard_only_over_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY CASE WHEN p.salary IS NULL THEN 1 ELSE 0 END, p.name) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY CASE WHEN p.salary IS NULL THEN 1 ELSE 0 END, p.name) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1b_win_order_case_null_guard_desc_over_join-TDS"></a>`crcs_g1b_win_order_case_null_guard_desc_over_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY CASE WHEN p.hire_date IS NULL THEN 1 ELSE 0 END DESC, p.hire_date ASC, p.name) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY CASE WHEN p.hire_date IS NULL THEN 1 ELSE 0 END DESC, p.hire_date ASC, p.name) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1b_win_order_case_null_guard_right_side_over_join-TDS"></a>`crcs_g1b_win_order_case_null_guard_right_side_over_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY CASE WHEN d.budget IS NULL THEN 1 ELSE 0 END, d.budget DESC, p.name) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY CASE WHEN d.budget IS NULL THEN 1 ELSE 0 END, d.budget DESC, p.name) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1b_win_order_case_null_guard_over_left_join-TDS"></a>`crcs_g1b_win_order_case_null_guard_over_left_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY CASE WHEN p.salary IS NULL THEN 1 ELSE 0 END, p.salary DESC, p.name) AS rn FROM persons p LEFT OUTER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY CASE WHEN p.salary IS NULL THEN 1 ELSE 0 END, p.salary DESC, p.name) AS rn FROM func('e2e::tds_persons') p LEFT OUTER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1b_dedup_case_null_guard_filtered-TDS"></a>`crcs_g1b_dedup_case_null_guard_filtered`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT a.name, a.budget FROM (SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY CASE WHEN p.salary IS NULL THEN 1 ELSE 0 END, p.salary DESC, p.name) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id) a WHERE a.rn = 1 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT a.name, a.budget FROM (SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY CASE WHEN p.salary IS NULL THEN 1 ELSE 0 END, p.salary DESC, p.name) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id) a WHERE a.rn = 1 ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1b_win_order_case_null_guard_no_join-TDS"></a>`crcs_g1b_win_order_case_null_guard_no_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY CASE WHEN p.salary IS NULL THEN 1 ELSE 0 END, p.salary DESC, p.name) AS rn FROM persons p ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY CASE WHEN p.salary IS NULL THEN 1 ELSE 0 END, p.salary DESC, p.name) AS rn FROM func('e2e::tds_persons') p ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1c_win_order_cast_to_date_over_join-TDS"></a>`crcs_g1c_win_order_cast_to_date_over_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY CAST(d.created_at AS DATE), p.name) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY CAST(d.created_at AS DATE), p.name) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1c_win_order_coalesce_one_side_over_join-TDS"></a>`crcs_g1c_win_order_coalesce_one_side_over_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY COALESCE(p.salary, 0) DESC, p.name) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY COALESCE(p.salary, 0) DESC, p.name) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1c_win_order_coalesce_both_sides_over_join-TDS"></a>`crcs_g1c_win_order_coalesce_both_sides_over_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY COALESCE(p.age, d.id) DESC, p.name) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY COALESCE(p.age, d.id) DESC, p.name) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1c_win_order_substring_over_join-TDS"></a>`crcs_g1c_win_order_substring_over_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY SUBSTRING(p.name FROM 1 FOR 3), p.name) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY SUBSTRING(p.name FROM 1 FOR 3), p.name) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1c_win_order_arithmetic_both_sides_over_join-TDS"></a>`crcs_g1c_win_order_arithmetic_both_sides_over_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY COALESCE(p.salary, 0) + d.budget DESC, p.name) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY COALESCE(p.salary, 0) + d.budget DESC, p.name) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1c_win_order_extract_over_join-TDS"></a>`crcs_g1c_win_order_extract_over_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY EXTRACT(YEAR FROM p.hire_date), p.name) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY EXTRACT(YEAR FROM p.hire_date), p.name) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1c_win_order_nested_case_in_function_over_join-TDS"></a>`crcs_g1c_win_order_nested_case_in_function_over_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY UPPER(CASE WHEN p.active = true THEN p.name ELSE d.name END), p.name) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, d.budget AS budget, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY UPPER(CASE WHEN p.active = true THEN p.name ELSE d.name END), p.name) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1c_win_order_coalesce_single_table-TDS"></a>`crcs_g1c_win_order_coalesce_single_table`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY COALESCE(p.salary, 0) DESC, p.name) AS rn FROM persons p ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY COALESCE(p.salary, 0) DESC, p.name) AS rn FROM func('e2e::tds_persons') p ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1c_win_order_case_single_table-TDS"></a>`crcs_g1c_win_order_case_single_table`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY CASE WHEN p.salary IS NULL THEN 1 ELSE 0 END, p.name) AS rn FROM persons p ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY CASE WHEN p.salary IS NULL THEN 1 ELSE 0 END, p.name) AS rn FROM func('e2e::tds_persons') p ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g1c_win_order_expression_no_rename_single_table-TDS"></a>`crcs_g1c_win_order_expression_no_rename_single_table`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, ROW_NUMBER() OVER (ORDER BY COALESCE(salary, 0) DESC, name) AS rn FROM persons ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, ROW_NUMBER() OVER (ORDER BY COALESCE(salary, 0) DESC, name) AS rn FROM func('e2e::tds_persons') ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g3_partition_expression_and_order_expression_over_join-TDS"></a>`crcs_g3_partition_expression_and_order_expression_over_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, ROW_NUMBER() OVER (PARTITION BY CASE WHEN p.active = true THEN 1 ELSE 0 END ORDER BY COALESCE(p.salary, 0) DESC, p.name) AS rn FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, ROW_NUMBER() OVER (PARTITION BY CASE WHEN p.active = true THEN 1 ELSE 0 END ORDER BY COALESCE(p.salary, 0) DESC, p.name) AS rn FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g3_two_windows_with_expression_keys_over_join-TDS"></a>`crcs_g3_two_windows_with_expression_keys_over_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, ROW_NUMBER() OVER (PARTITION BY CASE WHEN p.active = true THEN 1 ELSE 0 END ORDER BY UPPER(p.name)) AS rn, RANK() OVER (PARTITION BY p.dept_id ORDER BY COALESCE(p.salary, 0) DESC, p.name) AS rk FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, ROW_NUMBER() OVER (PARTITION BY CASE WHEN p.active = true THEN 1 ELSE 0 END ORDER BY UPPER(p.name)) AS rn, RANK() OVER (PARTITION BY p.dept_id ORDER BY COALESCE(p.salary, 0) DESC, p.name) AS rk FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g3_two_windows_with_null_ordered_keys_over_join-TDS"></a>`crcs_g3_two_windows_with_null_ordered_keys_over_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY p.salary DESC NULLS LAST, p.name) AS rn, RANK() OVER (PARTITION BY p.dept_id ORDER BY p.hire_date ASC NULLS FIRST, p.name) AS rk FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name, ROW_NUMBER() OVER (PARTITION BY p.dept_id ORDER BY p.salary DESC NULLS LAST, p.name) AS rn, RANK() OVER (PARTITION BY p.dept_id ORDER BY p.hire_date ASC NULLS FIRST, p.name) AS rk FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g5_correlated_subquery_outer_is_comma_join-TDS"></a>`crcs_g5_correlated_subquery_outer_is_comma_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name FROM persons p, departments d WHERE p.dept_id = d.id AND p.salary = (SELECT MAX(p1.salary) FROM persons p1 WHERE p1.dept_id = p.dept_id) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name FROM func('e2e::tds_persons') p, func('e2e::tds_departments') d WHERE p.dept_id = d.id AND p.salary = (SELECT MAX(p1.salary) FROM func('e2e::tds_persons') p1 WHERE p1.dept_id = p.dept_id) ORDER BY 1
```

**Error:**
> Unsupported: scalar subquery comparison only supported on relation inputs


<br>

#### <a id="fail-crcs_g5_correlated_subquery_outer_is_explicit_join-TDS"></a>`crcs_g5_correlated_subquery_outer_is_explicit_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name FROM persons p INNER JOIN departments d ON p.dept_id = d.id WHERE p.salary = (SELECT MAX(p1.salary) FROM persons p1 WHERE p1.dept_id = p.dept_id) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id WHERE p.salary = (SELECT MAX(p1.salary) FROM func('e2e::tds_persons') p1 WHERE p1.dept_id = p.dept_id) ORDER BY 1
```

**Error:**
> Unsupported: scalar subquery comparison only supported on relation inputs


<br>

#### <a id="fail-crcs_g5_correlated_subquery_referencing_both_join_sides-TDS"></a>`crcs_g5_correlated_subquery_referencing_both_join_sides`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name FROM persons p INNER JOIN departments d ON p.dept_id = d.id WHERE p.salary > (SELECT AVG(p1.salary) FROM persons p1 WHERE p1.dept_id = d.id) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id WHERE p.salary > (SELECT AVG(p1.salary) FROM func('e2e::tds_persons') p1 WHERE p1.dept_id = d.id) ORDER BY 1
```

**Error:**
> Unsupported: scalar subquery comparison only supported on relation inputs


<br>

#### <a id="fail-crcs_g5_exists_correlated_over_join-TDS"></a>`crcs_g5_exists_correlated_over_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name FROM persons p INNER JOIN departments d ON p.dept_id = d.id WHERE EXISTS (SELECT 1 FROM orders o WHERE o.person_id = p.id) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id WHERE EXISTS (SELECT 1 FROM func('e2e::tds_orders') o WHERE o.person_id = p.id) ORDER BY 1
```

**Error:**
> Unsupported: exists only supported on relation inputs


<br>

#### <a id="fail-crcs_g5_in_subquery_correlated_over_join-TDS"></a>`crcs_g5_in_subquery_correlated_over_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name FROM persons p INNER JOIN departments d ON p.dept_id = d.id WHERE p.id IN (SELECT o.person_id FROM orders o WHERE o.amount > 100 AND o.person_id = p.id) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name AS name FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id WHERE p.id IN (SELECT o.person_id FROM func('e2e::tds_orders') o WHERE o.amount > 100 AND o.person_id = p.id) ORDER BY 1
```

**Error:**
> Unsupported: in (subquery) only supported on relation inputs


<br>

#### <a id="fail-crcs_g5_correlated_max_then_compare_comma_join-TDS"></a>`crcs_g5_correlated_max_then_compare_comma_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name AS name, o.amount AS amount FROM persons p, orders o WHERE o.person_id = p.id AND o.amount = (SELECT MAX(o1.amount) FROM orders o1 WHERE o1.person_id = p.id) ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name AS name, o.amount AS amount FROM func('e2e::tds_persons') p, func('e2e::tds_orders') o WHERE o.person_id = p.id AND o.amount = (SELECT MAX(o1.amount) FROM func('e2e::tds_orders') o1 WHERE o1.person_id = p.id) ORDER BY 1, 2
```

**Error:**
> Unsupported: scalar subquery comparison only supported on relation inputs


<br>

#### <a id="fail-crcs_g5_two_derived_sides_sharing_a_column_name_with_window-TDS"></a>`crcs_g5_two_derived_sides_sharing_a_column_name_with_window`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT l.k AS left_k, ROW_NUMBER() OVER (ORDER BY r.k DESC NULLS LAST, l.k) AS rn FROM (SELECT id AS k FROM persons) l INNER JOIN (SELECT id AS k FROM departments) r ON l.k = r.k ORDER BY 1
```

**Legend SQL:**
```sql
SELECT l.k AS left_k, ROW_NUMBER() OVER (ORDER BY r.k DESC NULLS LAST, l.k) AS rn FROM (SELECT id AS k FROM func('e2e::tds_persons')) l INNER JOIN (SELECT id AS k FROM func('e2e::tds_departments')) r ON l.k = r.k ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g6_select_star_of_one_side_over_join-TDS"></a><a id="fail-crcs_g6_select_star_of_one_side_over_join-Relation"></a>`crcs_g6_select_star_of_one_side_over_join`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT p.* FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT p.* FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT p.* FROM func('e2e::rel_persons') p INNER JOIN func('e2e::rel_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> select * not currently supported for index group by


<br>

#### <a id="fail-crcs_g6_select_star_plus_other_side_column-TDS"></a><a id="fail-crcs_g6_select_star_plus_other_side_column-Relation"></a>`crcs_g6_select_star_plus_other_side_column`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT p.*, d.budget AS budget FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT p.*, d.budget AS budget FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT p.*, d.budget AS budget FROM func('e2e::rel_persons') p INNER JOIN func('e2e::rel_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> select * not currently supported for index group by


<br>

#### <a id="fail-crcs_g6_select_star_of_derived_side_over_join-TDS"></a><a id="fail-crcs_g6_select_star_of_derived_side_over_join-Relation"></a>`crcs_g6_select_star_of_derived_side_over_join`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT x.* FROM (SELECT id, name, dept_id, salary FROM persons) x INNER JOIN departments d ON x.dept_id = d.id ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT x.* FROM (SELECT id, name, dept_id, salary FROM func('e2e::tds_persons')) x INNER JOIN func('e2e::tds_departments') d ON x.dept_id = d.id ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT x.* FROM (SELECT id, name, dept_id, salary FROM func('e2e::rel_persons')) x INNER JOIN func('e2e::rel_departments') d ON x.dept_id = d.id ORDER BY 1
```

**Error:**
> select * not currently supported for index group by


<br>

#### <a id="fail-crcs_g6_select_star_with_window_over_derived_join-TDS"></a><a id="fail-crcs_g6_select_star_with_window_over_derived_join-Relation"></a>`crcs_g6_select_star_with_window_over_derived_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT y.* FROM (SELECT x.*, ROW_NUMBER() OVER (PARTITION BY x.dept_id ORDER BY x.salary DESC NULLS LAST, x.name) AS rank_num FROM (SELECT p.id AS id, p.name AS name, p.salary AS salary, p.dept_id AS dept_id FROM persons p INNER JOIN departments d ON p.dept_id = d.id) x) y WHERE y.rank_num = 1 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT y.* FROM (SELECT x.*, ROW_NUMBER() OVER (PARTITION BY x.dept_id ORDER BY x.salary DESC NULLS LAST, x.name) AS rank_num FROM (SELECT p.id AS id, p.name AS name, p.salary AS salary, p.dept_id AS dept_id FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id) x) y WHERE y.rank_num = 1 ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported

📗 **Relation Path**

**Input SQL:**
```sql
SELECT y.* FROM (SELECT x.*, ROW_NUMBER() OVER (PARTITION BY x.dept_id ORDER BY x.salary DESC NULLS LAST, x.name) AS rank_num FROM (SELECT p.id AS id, p.name AS name, p.salary AS salary, p.dept_id AS dept_id FROM persons p INNER JOIN departments d ON p.dept_id = d.id) x) y WHERE y.rank_num = 1 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT y.* FROM (SELECT x.*, ROW_NUMBER() OVER (PARTITION BY x.dept_id ORDER BY x.salary DESC NULLS LAST, x.name) AS rank_num FROM (SELECT p.id AS id, p.name AS name, p.salary AS salary, p.dept_id AS dept_id FROM func('e2e::rel_persons') p INNER JOIN func('e2e::rel_departments') d ON p.dept_id = d.id) x) y WHERE y.rank_num = 1 ORDER BY 1
```

**Error:**
> select * not currently supported for index group by


<br>

#### <a id="fail-crcs_g6_union_all_branches_with_correlated_filters-TDS"></a>`crcs_g6_union_all_branches_with_correlated_filters`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT b.name AS name FROM (SELECT p.name AS name FROM persons p, departments d WHERE p.dept_id = d.id AND p.salary = (SELECT MAX(p1.salary) FROM persons p1 WHERE p1.dept_id = p.dept_id) UNION ALL SELECT p.name AS name FROM persons p WHERE p.dept_id IS NULL) b ORDER BY 1
```

**Legend SQL:**
```sql
SELECT b.name AS name FROM (SELECT p.name AS name FROM func('e2e::tds_persons') p, func('e2e::tds_departments') d WHERE p.dept_id = d.id AND p.salary = (SELECT MAX(p1.salary) FROM func('e2e::tds_persons') p1 WHERE p1.dept_id = p.dept_id) UNION ALL SELECT p.name AS name FROM func('e2e::tds_persons') p WHERE p.dept_id IS NULL) b ORDER BY 1
```

**Error:**
> Unsupported: scalar subquery comparison only supported on relation inputs


<br>

#### <a id="fail-crcs_g6_self_join_with_window_expression_key-TDS"></a>`crcs_g6_self_join_with_window_expression_key`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT a.name AS name, b.id AS b_id, ROW_NUMBER() OVER (PARTITION BY a.dept_id ORDER BY COALESCE(a.salary, 0) DESC, a.name, b.id) AS rn FROM persons a INNER JOIN persons b ON a.dept_id = b.dept_id AND a.id < b.id ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT a.name AS name, b.id AS b_id, ROW_NUMBER() OVER (PARTITION BY a.dept_id ORDER BY COALESCE(a.salary, 0) DESC, a.name, b.id) AS rn FROM func('e2e::tds_persons') a INNER JOIN func('e2e::tds_persons') b ON a.dept_id = b.dept_id AND a.id < b.id ORDER BY 1, 2
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g6_self_join_with_null_ordered_window_key-TDS"></a>`crcs_g6_self_join_with_null_ordered_window_key`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT a.name AS name, b.id AS b_id, ROW_NUMBER() OVER (PARTITION BY a.dept_id ORDER BY a.salary DESC NULLS LAST, a.name, b.id) AS rn FROM persons a INNER JOIN persons b ON a.dept_id = b.dept_id AND a.id < b.id ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT a.name AS name, b.id AS b_id, ROW_NUMBER() OVER (PARTITION BY a.dept_id ORDER BY a.salary DESC NULLS LAST, a.name, b.id) AS rn FROM func('e2e::tds_persons') a INNER JOIN func('e2e::tds_persons') b ON a.dept_id = b.dept_id AND a.id < b.id ORDER BY 1, 2
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-crcs_g2_agg_win_over_join-TDS"></a>`crcs_g2_agg_win_over_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.dept_id AS dept_id, d.name AS dept_name, SUM(p.salary) AS s, RANK() OVER (PARTITION BY p.dept_id ORDER BY p.dept_id) AS r FROM persons p INNER JOIN departments d ON p.dept_id = d.id WHERE p.salary IS NOT NULL GROUP BY p.dept_id, d.name ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.dept_id AS dept_id, d.name AS dept_name, SUM(p.salary) AS s, RANK() OVER (PARTITION BY p.dept_id ORDER BY p.dept_id) AS r FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id WHERE p.salary IS NOT NULL GROUP BY p.dept_id, d.name ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-filter_clause_count-TDS"></a>`filter_clause_count`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, COUNT(*) FILTER (WHERE active) AS active_cnt, COUNT(*) AS total_cnt FROM persons GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, COUNT(*) FILTER (WHERE active) AS active_cnt, COUNT(*) AS total_cnt FROM func('e2e::tds_persons') GROUP BY dept_id ORDER BY 1
```

**Error:**
> Unsupported: ordered or filtered aggregation is only supported on relations


<br>

#### <a id="fail-filter_clause_sum-TDS"></a>`filter_clause_sum`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) FILTER (WHERE active) AS active_salary FROM persons GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) FILTER (WHERE active) AS active_salary FROM func('e2e::tds_persons') GROUP BY dept_id ORDER BY 1
```

**Error:**
> Unsupported: ordered or filtered aggregation is only supported on relations


<br>

#### <a id="fail-filter_clause_multiple_aggs-TDS"></a>`filter_clause_multiple_aggs`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, COUNT(*) FILTER (WHERE age > 30) AS older, COUNT(*) FILTER (WHERE age <= 30) AS younger FROM persons GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, COUNT(*) FILTER (WHERE age > 30) AS older, COUNT(*) FILTER (WHERE age <= 30) AS younger FROM func('e2e::tds_persons') GROUP BY dept_id ORDER BY 1
```

**Error:**
> Unsupported: ordered or filtered aggregation is only supported on relations


<br>

#### <a id="fail-within_group_rank_hypothetical-TDS"></a>`within_group_rank_hypothetical`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT RANK(50000) WITHIN GROUP (ORDER BY salary) AS rank_at_50k FROM persons
```

**Legend SQL:**
```sql
SELECT RANK(50000) WITHIN GROUP (ORDER BY salary) AS rank_at_50k FROM func('e2e::tds_persons')
```

**Error:**
> Unsupported type on column: rank_at_50k (meta::pure::functions::collection::Map), only primitive types and enums are supported


<br>

#### <a id="fail-recursive_cte_number_series-TDS"></a><a id="fail-recursive_cte_number_series-Relation"></a>`recursive_cte_number_series`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
WITH RECURSIVE t(n) AS (SELECT 1 UNION ALL SELECT n + 1 FROM t WHERE n < 5) SELECT n FROM t ORDER BY 1
```

**Legend SQL:**
```sql
WITH RECURSIVE t (n) AS (SELECT 1 UNION ALL SELECT n + 1 FROM t WHERE n < 5) SELECT n FROM t ORDER BY 1
```

**Error:**
> Unsupported: WITH RECURSIVE only supported on relation inputs


<br>

#### <a id="fail-recursive_cte_hierarchy-TDS"></a>`recursive_cte_hierarchy`

📘 **TDS Path**

**Input SQL:**
```sql
WITH RECURSIVE org(id, name, dept_id, depth) AS (SELECT id, name, dept_id, 0 FROM persons WHERE dept_id = 1 UNION ALL SELECT p.id, p.name, p.dept_id, org.depth + 1 FROM persons p JOIN org ON p.dept_id = org.dept_id AND p.id > org.id) SELECT * FROM org ORDER BY depth, id
```

**Legend SQL:**
```sql
WITH RECURSIVE org (id, name, dept_id, depth) AS (SELECT id, name, dept_id, 0 FROM func('e2e::tds_persons') WHERE dept_id = 1 UNION ALL SELECT p.id, p.name, p.dept_id, org.depth + 1 FROM func('e2e::tds_persons') p JOIN org ON p.dept_id = org.dept_id AND p.id > org.id) SELECT * FROM org ORDER BY depth, id
```

**Error:**
> Unsupported: WITH RECURSIVE only supported on relation inputs


<br>

#### <a id="fail-recursive_cte_from_table_anchor-TDS"></a>`recursive_cte_from_table_anchor`

📘 **TDS Path**

**Input SQL:**
```sql
WITH RECURSIVE t(n) AS (SELECT id FROM persons WHERE id = 1 UNION ALL SELECT n + 1 FROM t WHERE n < 5) SELECT n FROM t ORDER BY 1
```

**Legend SQL:**
```sql
WITH RECURSIVE t (n) AS (SELECT id FROM func('e2e::tds_persons') WHERE id = 1 UNION ALL SELECT n + 1 FROM t WHERE n < 5) SELECT n FROM t ORDER BY 1
```

**Error:**
> Unsupported: WITH RECURSIVE only supported on relation inputs


<br>

#### <a id="fail-recursive_cte_downstream_filter-TDS"></a>`recursive_cte_downstream_filter`

📘 **TDS Path**

**Input SQL:**
```sql
WITH RECURSIVE t(n) AS (SELECT id FROM persons WHERE id = 1 UNION ALL SELECT n + 1 FROM t WHERE n < 5) SELECT n FROM t WHERE n > 2 ORDER BY 1
```

**Legend SQL:**
```sql
WITH RECURSIVE t (n) AS (SELECT id FROM func('e2e::tds_persons') WHERE id = 1 UNION ALL SELECT n + 1 FROM t WHERE n < 5) SELECT n FROM t WHERE n > 2 ORDER BY 1
```

**Error:**
> Unsupported: WITH RECURSIVE only supported on relation inputs


<br>

#### <a id="fail-recursive_cte_downstream_aggregate-TDS"></a>`recursive_cte_downstream_aggregate`

📘 **TDS Path**

**Input SQL:**
```sql
WITH RECURSIVE t(n) AS (SELECT id FROM persons WHERE id = 1 UNION ALL SELECT n + 1 FROM t WHERE n < 5) SELECT COUNT(*) AS cnt FROM t
```

**Legend SQL:**
```sql
WITH RECURSIVE t (n) AS (SELECT id FROM func('e2e::tds_persons') WHERE id = 1 UNION ALL SELECT n + 1 FROM t WHERE n < 5) SELECT COUNT(*) AS cnt FROM t
```

**Error:**
> Unsupported: WITH RECURSIVE only supported on relation inputs


<br>

#### <a id="fail-recursive_cte_union_distinct_unsupported-TDS"></a>`recursive_cte_union_distinct_unsupported`

📘 **TDS Path**

**Input SQL:**
```sql
WITH RECURSIVE t(n) AS (SELECT id FROM persons WHERE id = 1 UNION SELECT n + 1 FROM t WHERE n < 5) SELECT n FROM t ORDER BY 1
```

**Legend SQL:**
```sql
WITH RECURSIVE t (n) AS (SELECT id FROM func('e2e::tds_persons') WHERE id = 1 UNION SELECT n + 1 FROM t WHERE n < 5) SELECT n FROM t ORDER BY 1
```

**Error:**
> Unsupported: WITH RECURSIVE only supported on relation inputs


<br>

#### <a id="fail-recursive_cte_mixed_with_plain-TDS"></a>`recursive_cte_mixed_with_plain`

📘 **TDS Path**

**Input SQL:**
```sql
WITH RECURSIVE t(n) AS (SELECT id FROM persons WHERE id = 1 UNION ALL SELECT n + 1 FROM t WHERE n < 5), summary AS (SELECT n FROM t WHERE n > 2) SELECT n FROM summary ORDER BY 1
```

**Legend SQL:**
```sql
WITH RECURSIVE t (n) AS (SELECT id FROM func('e2e::tds_persons') WHERE id = 1 UNION ALL SELECT n + 1 FROM t WHERE n < 5), summary AS (SELECT n FROM t WHERE n > 2) SELECT n FROM summary ORDER BY 1
```

**Error:**
> Unsupported: WITH RECURSIVE only supported on relation inputs


<br>

#### <a id="fail-frame_rows_unbounded_current-TDS"></a>`frame_rows_unbounded_current`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: window frame only supported on relation inputs


<br>

#### <a id="fail-frame_rows_unbounded_current_avg-TDS"></a>`frame_rows_unbounded_current_avg`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, AVG(salary) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_avg FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, AVG(salary) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_avg FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: window frame only supported on relation inputs


<br>

#### <a id="fail-frame_rows_whole_partition-TDS"></a>`frame_rows_whole_partition`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS total FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS total FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: window frame only supported on relation inputs


<br>

#### <a id="fail-frame_rows_sliding_3-TDS"></a>`frame_rows_sliding_3`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, AVG(salary) OVER (ORDER BY name ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) AS moving_avg FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, AVG(salary) OVER (ORDER BY name ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) AS moving_avg FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: window frame only supported on relation inputs


<br>

#### <a id="fail-frame_rows_lookback_2-TDS"></a>`frame_rows_lookback_2`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS sum_3 FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS sum_3 FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: window frame only supported on relation inputs


<br>

#### <a id="fail-frame_rows_current_to_end-TDS"></a>`frame_rows_current_to_end`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, COUNT(*) OVER (ORDER BY name ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING) AS remaining FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, COUNT(*) OVER (ORDER BY name ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING) AS remaining FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: window frame only supported on relation inputs


<br>

#### <a id="fail-frame_range_default-TDS"></a>`frame_range_default`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY salary RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS cum_sum FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY salary RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS cum_sum FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: window frame only supported on relation inputs


<br>

#### <a id="fail-frame_multi_agg-TDS"></a>`frame_multi_agg`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, SUM(salary) OVER w AS run_sum, AVG(salary) OVER w AS run_avg, COUNT(*) OVER w AS run_cnt, MIN(salary) OVER w AS run_min, MAX(salary) OVER w AS run_max FROM persons WHERE salary IS NOT NULL WINDOW w AS (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, SUM(salary) OVER w AS run_sum, AVG(salary) OVER w AS run_avg, COUNT(*) OVER w AS run_cnt, MIN(salary) OVER w AS run_min, MAX(salary) OVER w AS run_max FROM func('e2e::tds_persons') WHERE salary IS NOT NULL WINDOW w AS (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) ORDER BY 1
```

**Error:**
> Unsupported: window frame only supported on relation inputs


<br>

#### <a id="fail-frame_rows_lookback_only-TDS"></a>`frame_rows_lookback_only`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN 2 PRECEDING AND 1 PRECEDING) AS prev_2 FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN 2 PRECEDING AND 1 PRECEDING) AS prev_2 FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: window frame only supported on relation inputs


<br>

#### <a id="fail-frame_rows_lookahead-TDS"></a>`frame_rows_lookahead`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN 1 FOLLOWING AND 2 FOLLOWING) AS next_2 FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN 1 FOLLOWING AND 2 FOLLOWING) AS next_2 FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: window frame only supported on relation inputs


<br>

#### <a id="fail-frame_range_partition-TDS"></a>`frame_range_partition`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, dept_id, salary, SUM(salary) OVER (PARTITION BY dept_id ORDER BY salary RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS dept_cum FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, dept_id, salary, SUM(salary) OVER (PARTITION BY dept_id ORDER BY salary RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS dept_cum FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: window frame only supported on relation inputs


<br>

#### <a id="fail-frame_rows_current_only-TDS"></a>`frame_rows_current_only`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN CURRENT ROW AND CURRENT ROW) AS self_only FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN CURRENT ROW AND CURRENT ROW) AS self_only FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: window frame only supported on relation inputs


<br>

#### <a id="fail-frame_rows_wide_sliding-TDS"></a>`frame_rows_wide_sliding`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, AVG(salary) OVER (ORDER BY name ROWS BETWEEN 3 PRECEDING AND 3 FOLLOWING) AS wide_avg FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, AVG(salary) OVER (ORDER BY name ROWS BETWEEN 3 PRECEDING AND 3 FOLLOWING) AS wide_avg FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: window frame only supported on relation inputs


<br>

#### <a id="fail-named_window_with_frame-TDS"></a>`named_window_with_frame`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, AVG(salary) OVER w AS moving_avg FROM persons WHERE salary IS NOT NULL WINDOW w AS (ORDER BY name ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, AVG(salary) OVER w AS moving_avg FROM func('e2e::tds_persons') WHERE salary IS NOT NULL WINDOW w AS (ORDER BY name ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) ORDER BY 1
```

**Error:**
> Unsupported: window frame only supported on relation inputs


<br>

#### <a id="fail-named_window_partition_frame-TDS"></a>`named_window_partition_frame`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, dept_id, salary, SUM(salary) OVER w AS dept_running FROM persons WHERE salary IS NOT NULL AND dept_id IS NOT NULL WINDOW w AS (PARTITION BY dept_id ORDER BY salary ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, dept_id, salary, SUM(salary) OVER w AS dept_running FROM func('e2e::tds_persons') WHERE salary IS NOT NULL AND dept_id IS NOT NULL WINDOW w AS (PARTITION BY dept_id ORDER BY salary ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) ORDER BY 1
```

**Error:**
> Unsupported: window frame only supported on relation inputs


<br>

#### <a id="fail-named_window_multi_agg-TDS"></a>`named_window_multi_agg`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, MIN(salary) OVER w AS run_min, MAX(salary) OVER w AS run_max, COUNT(*) OVER w AS run_cnt FROM persons WHERE salary IS NOT NULL WINDOW w AS (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, MIN(salary) OVER w AS run_min, MAX(salary) OVER w AS run_max, COUNT(*) OVER w AS run_cnt FROM func('e2e::tds_persons') WHERE salary IS NOT NULL WINDOW w AS (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) ORDER BY 1
```

**Error:**
> Unsupported: window frame only supported on relation inputs


<br>

#### <a id="fail-named_window_lag_lead-TDS"></a>`named_window_lag_lead`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, LAG(salary) OVER w AS prev, LEAD(salary) OVER w AS next FROM persons WHERE salary IS NOT NULL WINDOW w AS (ORDER BY name) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, LAG(salary) OVER w AS prev, LEAD(salary) OVER w AS next FROM func('e2e::tds_persons') WHERE salary IS NOT NULL WINDOW w AS (ORDER BY name) ORDER BY 1
```

**Error:**
> Unsupported: lag only supported on relation inputs


<br>

#### <a id="fail-window_order_multi-TDS"></a>`window_order_multi`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, dept_id, salary, ROW_NUMBER() OVER (ORDER BY dept_id, salary DESC) AS rn FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, dept_id, salary, ROW_NUMBER() OVER (ORDER BY dept_id, salary DESC) AS rn FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: multiple window sort items not yet supported


<br>

#### <a id="fail-partition_order_frame-TDS"></a>`partition_order_frame`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, dept_id, salary, SUM(salary) OVER (PARTITION BY dept_id ORDER BY salary ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, dept_id, salary, SUM(salary) OVER (PARTITION BY dept_id ORDER BY salary ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: window frame only supported on relation inputs


<br>

#### <a id="fail-window_ntile-TDS"></a>`window_ntile`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, NTILE(3) OVER (ORDER BY salary DESC) AS tercile FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, NTILE(3) OVER (ORDER BY salary DESC) AS tercile FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: ntile only supported on relation inputs


<br>

#### <a id="fail-window_lag-TDS"></a>`window_lag`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, LAG(salary) OVER (ORDER BY name) AS prev_salary FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, LAG(salary) OVER (ORDER BY name) AS prev_salary FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: lag only supported on relation inputs


<br>

#### <a id="fail-window_lead-TDS"></a>`window_lead`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, LEAD(salary) OVER (ORDER BY name) AS next_salary FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, LEAD(salary) OVER (ORDER BY name) AS next_salary FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: lead only supported on relation inputs


<br>

#### <a id="fail-window_lag_offset-TDS"></a>`window_lag_offset`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, LAG(salary, 2, 0) OVER (ORDER BY name) AS prev2 FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, LAG(salary, 2, 0) OVER (ORDER BY name) AS prev2 FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: lag only supported on relation inputs


<br>

#### <a id="fail-window_first_last_value-TDS"></a>`window_first_last_value`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, dept_id, salary, FIRST_VALUE(name) OVER (PARTITION BY dept_id ORDER BY salary DESC) AS top_earner FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, dept_id, salary, FIRST_VALUE(name) OVER (PARTITION BY dept_id ORDER BY salary DESC) AS top_earner FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: first_value only supported on relation inputs


<br>

#### <a id="fail-comp_agg_window_dept_pct-TDS"></a>`comp_agg_window_dept_pct`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS dept_total, SUM(SUM(salary)) OVER () AS grand_total FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS dept_total, SUM(SUM(salary)) OVER () AS grand_total FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-comp_agg_window_running-TDS"></a>`comp_agg_window_running`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt, SUM(COUNT(*)) OVER (ORDER BY dept_id) AS running_cnt FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt, SUM(COUNT(*)) OVER (ORDER BY dept_id) AS running_cnt FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-comp_agg_win_disjoint_keys-TDS"></a>`comp_agg_win_disjoint_keys`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS s, ROW_NUMBER() OVER (ORDER BY dept_id) AS rn FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS s, ROW_NUMBER() OVER (ORDER BY dept_id) AS rn FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-comp_agg_win_partition_is_group_key-TDS"></a>`comp_agg_win_partition_is_group_key`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS s, RANK() OVER (PARTITION BY dept_id ORDER BY dept_id) AS r FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS s, RANK() OVER (PARTITION BY dept_id ORDER BY dept_id) AS r FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-comp_agg_win_order_names_aggregate_output-TDS"></a>`comp_agg_win_order_names_aggregate_output`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS s, RANK() OVER (ORDER BY SUM(salary) DESC) AS r FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS s, RANK() OVER (ORDER BY SUM(salary) DESC) AS r FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-comp_agg_win_implicit_aggregate-TDS"></a>`comp_agg_win_implicit_aggregate`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT SUM(salary) AS s, AVG(salary) OVER () AS a FROM persons WHERE salary IS NOT NULL
```

**Legend SQL:**
```sql
SELECT SUM(salary) AS s, AVG(salary) OVER () AS a FROM func('e2e::tds_persons') WHERE salary IS NOT NULL
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-comp_agg_win_with_having-TDS"></a>`comp_agg_win_with_having`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS s, RANK() OVER (ORDER BY dept_id) AS r FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id HAVING SUM(salary) > 100000 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS s, RANK() OVER (ORDER BY dept_id) AS r FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id HAVING SUM(salary) > 100000 ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-comp_agg_win_outer_expression-TDS"></a>`comp_agg_win_outer_expression`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS s, SUM(salary) - AVG(SUM(salary)) OVER () AS diff FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS s, SUM(salary) - AVG(SUM(salary)) OVER () AS diff FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-comp_agg_win_multi_key_order_relation_only-TDS"></a>`comp_agg_win_multi_key_order_relation_only`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS s, ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY MAX(hire_date) DESC NULLS LAST, dept_id ASC) AS rn FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS s, ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY MAX(hire_date) DESC NULLS LAST, dept_id ASC) AS rn FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-stress_dashboard-TDS"></a>`stress_dashboard`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT d.name AS department, p.name AS employee, p.salary, RANK() OVER (PARTITION BY d.name ORDER BY p.salary DESC) AS dept_rank, CASE WHEN p.salary > 80000 THEN 'Senior' WHEN p.salary > 50000 THEN 'Mid' ELSE 'Junior' END AS band, COUNT(o.id) AS order_count, COALESCE(SUM(o.amount), 0) AS total_orders FROM persons p INNER JOIN departments d ON p.dept_id = d.id LEFT JOIN orders o ON o.person_id = p.id WHERE p.salary IS NOT NULL GROUP BY d.name, p.name, p.salary ORDER BY 1, 4
```

**Legend SQL:**
```sql
SELECT d.name AS department, p.name AS employee, p.salary, RANK() OVER (PARTITION BY d.name ORDER BY p.salary DESC) AS dept_rank, CASE WHEN p.salary > 80000 THEN 'Senior' WHEN p.salary > 50000 THEN 'Mid' ELSE 'Junior' END AS band, COUNT(o.id) AS order_count, COALESCE(SUM(o.amount), 0) AS total_orders FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id LEFT JOIN func('e2e::tds_orders') o ON o.person_id = p.id WHERE p.salary IS NOT NULL GROUP BY d.name, p.name, p.salary ORDER BY 1, 4
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-stress_running_case-TDS"></a>`stress_running_case`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, SUM(CASE WHEN salary > 60000 THEN salary ELSE 0 END) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS high_earner_running FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, SUM(CASE WHEN salary > 60000 THEN salary ELSE 0 END) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS high_earner_running FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: window frame only supported on relation inputs


<br>

#### <a id="fail-stress_cume_dist-TDS"></a>`stress_cume_dist`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary, CUME_DIST() OVER (ORDER BY salary) AS cume, PERCENT_RANK() OVER (ORDER BY salary) AS pct_rank FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary, CUME_DIST() OVER (ORDER BY salary) AS cume, PERCENT_RANK() OVER (ORDER BY salary) AS pct_rank FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: cume_dist only supported on relation inputs


<br>

#### <a id="fail-stress_lag_comparison-TDS"></a>`stress_lag_comparison`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, LAG(SUM(salary)) OVER (ORDER BY dept_id) AS prev, SUM(salary) - COALESCE(LAG(SUM(salary)) OVER (ORDER BY dept_id), 0) AS diff FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, LAG(SUM(salary)) OVER (ORDER BY dept_id) AS prev, SUM(salary) - COALESCE(LAG(SUM(salary)) OVER (ORDER BY dept_id), 0) AS diff FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-stress_coalesce_window-TDS"></a>`stress_coalesce_window`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, COALESCE(salary, 0) AS sal, SUM(COALESCE(salary, 0)) OVER (ORDER BY name) AS running FROM persons ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, COALESCE(salary, 0) AS sal, SUM(COALESCE(salary, 0)) OVER (ORDER BY name) AS running FROM func('e2e::tds_persons') ORDER BY 1
```

**Error:**
> Unsupported: unsupported window aggregation expression


<br>

#### <a id="fail-nested_two_levels-TDS"></a>`nested_two_levels`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, salary FROM persons WHERE dept_id IN (SELECT dept_id FROM persons WHERE salary > (SELECT AVG(salary) FROM persons WHERE salary IS NOT NULL) AND dept_id IS NOT NULL GROUP BY dept_id) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name, salary FROM func('e2e::tds_persons') WHERE dept_id IN (SELECT dept_id FROM func('e2e::tds_persons') WHERE salary > (SELECT AVG(salary) FROM func('e2e::tds_persons') WHERE salary IS NOT NULL) AND dept_id IS NOT NULL GROUP BY dept_id) ORDER BY 1
```

**Error:**
> Unsupported: in (subquery) only supported on relation inputs


<br>

#### <a id="fail-nested_subquery_join-TDS"></a>`nested_subquery_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, p.salary, d.name AS dept FROM persons p INNER JOIN departments d ON p.dept_id = d.id WHERE p.salary > (SELECT AVG(salary) FROM persons WHERE salary IS NOT NULL) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name, p.salary, d.name AS dept FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id WHERE p.salary > (SELECT AVG(salary) FROM func('e2e::tds_persons') WHERE salary IS NOT NULL) ORDER BY 1
```

**Error:**
> Unsupported: scalar subquery comparison only supported on relation inputs


<br>

#### <a id="fail-nested_exists_agg-TDS"></a>`nested_exists_agg`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT d.name, d.budget FROM departments d WHERE EXISTS (SELECT 1 FROM persons p WHERE p.dept_id = d.id GROUP BY p.dept_id HAVING COUNT(*) > 2) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT d.name, d.budget FROM func('e2e::tds_departments') d WHERE EXISTS (SELECT 1 FROM func('e2e::tds_persons') p WHERE p.dept_id = d.id GROUP BY p.dept_id HAVING COUNT(*) > 2) ORDER BY 1
```

**Error:**
> Unsupported: exists only supported on relation inputs


<br>

#### <a id="fail-nested_filter_derived-TDS"></a>`nested_filter_derived`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT sub.name, sub.salary FROM (SELECT name, salary, dept_id FROM persons WHERE salary IS NOT NULL) sub WHERE sub.dept_id IN (SELECT id FROM departments WHERE budget > 500000) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT sub.name, sub.salary FROM (SELECT name, salary, dept_id FROM func('e2e::tds_persons') WHERE salary IS NOT NULL) sub WHERE sub.dept_id IN (SELECT id FROM func('e2e::tds_departments') WHERE budget > 500000) ORDER BY 1
```

**Error:**
> Unsupported: in (subquery) only supported on relation inputs


<br>

#### <a id="fail-nested_in_with_join-TDS"></a>`nested_in_with_join`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT p.name, p.salary FROM persons p WHERE p.id IN (SELECT o.person_id FROM orders o INNER JOIN departments d ON d.id = p.dept_id WHERE o.amount > 50) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name, p.salary FROM func('e2e::tds_persons') p WHERE p.id IN (SELECT o.person_id FROM func('e2e::tds_orders') o INNER JOIN func('e2e::tds_departments') d ON d.id = p.dept_id WHERE o.amount > 50) ORDER BY 1
```

**Error:**
> Unsupported: in (subquery) only supported on relation inputs


<br>

#### <a id="fail-nested_not_exists_derived-TDS"></a>`nested_not_exists_derived`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT d.name FROM departments d WHERE NOT EXISTS (SELECT 1 FROM persons p WHERE p.dept_id = d.id AND p.salary > 90000) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT d.name FROM func('e2e::tds_departments') d WHERE NOT EXISTS (SELECT 1 FROM func('e2e::tds_persons') p WHERE p.dept_id = d.id AND p.salary > 90000) ORDER BY 1
```

**Error:**
> Unsupported: exists only supported on relation inputs


<br>

#### <a id="fail-window_over_agg_rank_sum-TDS"></a>`window_over_agg_rank_sum`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, RANK() OVER (ORDER BY SUM(salary) DESC) AS salary_rank FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, RANK() OVER (ORDER BY SUM(salary) DESC) AS salary_rank FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-window_over_agg_dense_rank-TDS"></a>`window_over_agg_dense_rank`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt, DENSE_RANK() OVER (ORDER BY COUNT(*) DESC) AS cnt_rank FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt, DENSE_RANK() OVER (ORDER BY COUNT(*) DESC) AS cnt_rank FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-window_over_agg_cum_pct-TDS"></a>`window_over_agg_cum_pct`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, ROUND(SUM(salary) * 100.0 / SUM(SUM(salary)) OVER (), 2) AS pct FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, ROUND(SUM(salary) * 100.0 / SUM(SUM(salary)) OVER (), 2) AS pct FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-window_over_agg_running-TDS"></a>`window_over_agg_running`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, SUM(SUM(salary)) OVER (ORDER BY dept_id) AS running_total FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, SUM(SUM(salary)) OVER (ORDER BY dept_id) AS running_total FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-window_over_agg_lag-TDS"></a>`window_over_agg_lag`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, LAG(SUM(salary)) OVER (ORDER BY dept_id) AS prev_total FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, LAG(SUM(salary)) OVER (ORDER BY dept_id) AS prev_total FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-window_over_agg_lead-TDS"></a>`window_over_agg_lead`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt, LEAD(COUNT(*)) OVER (ORDER BY dept_id) AS next_cnt FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt, LEAD(COUNT(*)) OVER (ORDER BY dept_id) AS next_cnt FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-window_over_agg_topn-TDS"></a>`window_over_agg_topn`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, total FROM (SELECT dept_id, SUM(salary) AS total, ROW_NUMBER() OVER (ORDER BY SUM(salary) DESC) AS rn FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id) sub WHERE rn <= 2 ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, total FROM (SELECT dept_id, SUM(salary) AS total, ROW_NUMBER() OVER (ORDER BY SUM(salary) DESC) AS rn FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id) sub WHERE rn <= 2 ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-window_over_agg_ntile-TDS"></a>`window_over_agg_ntile`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, NTILE(2) OVER (ORDER BY SUM(salary) DESC) AS bucket FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, NTILE(2) OVER (ORDER BY SUM(salary) DESC) AS bucket FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-window_over_agg_minmax-TDS"></a>`window_over_agg_minmax`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt, MIN(COUNT(*)) OVER () AS min_cnt, MAX(COUNT(*)) OVER () AS max_cnt FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, COUNT(*) AS cnt, MIN(COUNT(*)) OVER () AS min_cnt, MAX(COUNT(*)) OVER () AS max_cnt FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-window_over_agg_avg-TDS"></a>`window_over_agg_avg`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, AVG(SUM(salary)) OVER () AS avg_total FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, AVG(SUM(salary)) OVER () AS avg_total FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-window_over_agg_first_value-TDS"></a>`window_over_agg_first_value`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, FIRST_VALUE(SUM(salary)) OVER (ORDER BY SUM(salary) DESC) AS highest FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, FIRST_VALUE(SUM(salary)) OVER (ORDER BY SUM(salary) DESC) AS highest FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<br>

#### <a id="fail-window_over_agg_last_value-TDS"></a>`window_over_agg_last_value`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, LAST_VALUE(SUM(salary)) OVER (ORDER BY SUM(salary) DESC ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS lowest FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) AS total, LAST_VALUE(SUM(salary)) OVER (ORDER BY SUM(salary) DESC ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS lowest FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND salary IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> combining aggregations with window functions not currently supported


<a id="type-error"></a>

### TYPE_ERROR (22 tests)

#### <a id="fail-union_dedup_null-TDS"></a>`union_dedup_null`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id FROM persons UNION SELECT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id FROM func('e2e::tds_persons') UNION SELECT NULL ORDER BY 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/pureToSQLQuery/pureToSQLQuery.pure line:3177 column:77), "Cast exception: ClassInstanceHolder cannot be cast to SelectWithCursor"


<br>

#### <a id="fail-cte_in_join-TDS"></a>`cte_in_join`

📘 **TDS Path**

**Input SQL:**
```sql
WITH order_totals AS (SELECT person_id, SUM(amount) AS total_orders FROM orders GROUP BY person_id) SELECT p.name, COALESCE(o.total_orders, 0) AS total FROM persons p LEFT JOIN order_totals o ON p.id = o.person_id ORDER BY 1
```

**Legend SQL:**
```sql
WITH order_totals AS (SELECT person_id, SUM(amount) AS total_orders FROM func('e2e::tds_orders') GROUP BY person_id) SELECT p.name, COALESCE(o.total_orders, 0) AS total FROM func('e2e::tds_persons') p LEFT JOIN order_totals o ON p.id = o.person_id ORDER BY 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/pureToSQLQuery/pureToSQLQuery.pure line:7797 column:36), "Cast exception: SelectSQLQuery cannot be cast to TdsSelectSqlQuery"


<br>

#### <a id="fail-cte_in_join_dept-TDS"></a>`cte_in_join_dept`

📘 **TDS Path**

**Input SQL:**
```sql
WITH dept_avg AS (SELECT dept_id, AVG(salary) AS avg_sal FROM persons WHERE salary IS NOT NULL GROUP BY dept_id) SELECT d.name, COALESCE(da.avg_sal, 0) AS avg_salary FROM departments d LEFT JOIN dept_avg da ON d.id = da.dept_id ORDER BY 1
```

**Legend SQL:**
```sql
WITH dept_avg AS (SELECT dept_id, AVG(salary) AS avg_sal FROM func('e2e::tds_persons') WHERE salary IS NOT NULL GROUP BY dept_id) SELECT d.name, COALESCE(da.avg_sal, 0) AS avg_salary FROM func('e2e::tds_departments') d LEFT JOIN dept_avg da ON d.id = da.dept_id ORDER BY 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/pureToSQLQuery/pureToSQLQuery.pure line:7797 column:36), "Cast exception: SelectSQLQuery cannot be cast to TdsSelectSqlQuery"


<br>

#### <a id="fail-cast_numeric_to_int-TDS"></a><a id="fail-cast_numeric_to_int-Relation"></a>`cast_numeric_to_int`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(numeric_val AS INTEGER) AS result FROM numbers WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(numeric_val AS INTEGER) AS result FROM func('e2e::tds_numbers') WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(numeric_val AS INTEGER) AS result FROM func('e2e::rel_numbers') WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Error:**
> Postgres rejected reference SQL but Legend executed it successfully. Fix the reference SQL or the Legend parser/planner. Postgres error: ERROR: integer out of range


<br>

#### <a id="fail-cast_int_to_bool-TDS"></a>`cast_int_to_bool`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT CAST(1 AS BOOLEAN) AS t_val, CAST(0 AS BOOLEAN) AS f_val FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT CAST(1 AS BOOLEAN) AS t_val, CAST(0 AS BOOLEAN) AS f_val FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> Execution error at ??, "Cast exception: Integer cannot be cast to Boolean"


<br>

#### <a id="fail-lateral_unnest_aggregate_count-Relation"></a>`lateral_unnest_aggregate_count`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, COUNT(*) AS cnt FROM persons p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2, 3]) AS u(val) WHERE p.id <= 2 GROUP BY p.name ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name, COUNT(*) AS cnt FROM func('e2e::rel_persons') p CROSS JOIN LATERAL UNNEST(ARRAY[1, 2, 3]) AS u(val) WHERE p.id <= 2 GROUP BY p.name ORDER BY 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/pureToSQLQuery/pureToSQLQuery.pure line:7306 column:21), "Cast exception: ClassInstanceHolder cannot be cast to SelectWithCursor"


<br>

#### <a id="fail-lateral_unnest_string_to_array-Relation"></a>`lateral_unnest_string_to_array`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL UNNEST(STRING_TO_ARRAY('a,b,c', ',')) AS u(val) WHERE p.id = 1 ORDER BY 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::rel_persons') p CROSS JOIN LATERAL UNNEST(STRING_TO_ARRAY('a,b,c', ',')) AS u(val) WHERE p.id = 1 ORDER BY 2
```

**Error:**
> Execution error at (resource:/core_relational/relational/pureToSQLQuery/pureToSQLQuery.pure line:7306 column:21), "Cast exception: ClassInstanceHolder cannot be cast to SelectWithCursor"


<br>

#### <a id="fail-lateral_unnest_string_to_array_correlated-Relation"></a>`lateral_unnest_string_to_array_correlated`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, u.val FROM persons p CROSS JOIN LATERAL UNNEST(STRING_TO_ARRAY(p.name, '')) AS u(val) WHERE p.id <= 2 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, u.val FROM func('e2e::rel_persons') p CROSS JOIN LATERAL UNNEST(STRING_TO_ARRAY(p.name, '')) AS u(val) WHERE p.id <= 2 ORDER BY 1, 2
```

**Error:**
> ERROR: cannot cast type text[] to jsonb\n  Position: 256


<br>

#### <a id="fail-jsonb_delete_key-TDS"></a><a id="fail-jsonb_delete_key-Relation"></a>`jsonb_delete_key`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":1,"b":2,"c":3}'::jsonb - 'b' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":1,"b":2,"c":3}'::jsonb - 'b' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":1,"b":2,"c":3}'::jsonb - 'b' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for JSONB, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-jsonb_delete_array_element-TDS"></a><a id="fail-jsonb_delete_array_element-Relation"></a>`jsonb_delete_array_element`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '["a","b","c"]'::jsonb - 1 AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '["a","b","c"]'::jsonb - 1 AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '["a","b","c"]'::jsonb - 1 AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for JSONB, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-jsonb_delete_missing_key-TDS"></a><a id="fail-jsonb_delete_missing_key-Relation"></a>`jsonb_delete_missing_key`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":1,"b":2}'::jsonb - 'z' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":1,"b":2}'::jsonb - 'z' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":1,"b":2}'::jsonb - 'z' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for JSONB, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-jsonb_delete_path-TDS"></a><a id="fail-jsonb_delete_path-Relation"></a>`jsonb_delete_path`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":{"b":1,"c":2}}'::jsonb #- '{a,b}' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":{"b":1,"c":2}}'::jsonb #- '{a,b}' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":{"b":1,"c":2}}'::jsonb #- '{a,b}' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for JSONB_PATH_DELETE


<br>

#### <a id="fail-jsonb_delete_path_array-TDS"></a><a id="fail-jsonb_delete_path_array-Relation"></a>`jsonb_delete_path_array`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":[1,2,3]}'::jsonb #- '{a,1}' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":[1,2,3]}'::jsonb #- '{a,1}' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":[1,2,3]}'::jsonb #- '{a,1}' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for JSONB_PATH_DELETE


<br>

#### <a id="fail-jsonb_path_exists-TDS"></a><a id="fail-jsonb_path_exists-Relation"></a>`jsonb_path_exists`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":[1,2,3]}'::jsonb @? '$.a[*] ? (@ > 2)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":[1,2,3]}'::jsonb @? '$.a[*] ? (@ > 2)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":[1,2,3]}'::jsonb @? '$.a[*] ? (@ > 2)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for JSONB_PATH_CONTAIN_ANY_VALUE


<br>

#### <a id="fail-jsonb_path_exists_false-TDS"></a><a id="fail-jsonb_path_exists_false-Relation"></a>`jsonb_path_exists_false`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":[1,2,3]}'::jsonb @? '$.a[*] ? (@ > 5)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":[1,2,3]}'::jsonb @? '$.a[*] ? (@ > 5)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":[1,2,3]}'::jsonb @? '$.a[*] ? (@ > 5)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for JSONB_PATH_CONTAIN_ANY_VALUE


<br>

#### <a id="fail-jsonb_path_match-TDS"></a><a id="fail-jsonb_path_match-Relation"></a>`jsonb_path_match`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":10}'::jsonb @@ '$.a > 5' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":10}'::jsonb @@ '$.a > 5' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":10}'::jsonb @@ '$.a > 5' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for JSONB_PATH_PREDICATE_CHECK


<br>

#### <a id="fail-jsonb_path_match_false-TDS"></a><a id="fail-jsonb_path_match_false-Relation"></a>`jsonb_path_match_false`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '{"a":3}'::jsonb @@ '$.a > 5' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT '{"a":3}'::jsonb @@ '$.a > 5' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT '{"a":3}'::jsonb @@ '$.a > 5' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for JSONB_PATH_PREDICATE_CHECK


<br>

#### <a id="fail-json_column_nested_extract_in_where_is_null-TDS"></a>`json_column_nested_extract_in_where_is_null`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT id FROM json_data WHERE json_val -> 'a' -> 'b' IS NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT id FROM func('e2e::tds_json_data') WHERE json_val -> 'a' -> 'b' IS NULL ORDER BY 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_column_nested_extract_in_where_is_not_null-TDS"></a>`json_column_nested_extract_in_where_is_not_null`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT id FROM json_data WHERE json_val -> 'a' -> 'b' IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT id FROM func('e2e::tds_json_data') WHERE json_val -> 'a' -> 'b' IS NOT NULL ORDER BY 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_column_nested_extract_in_where_not_is_null-TDS"></a>`json_column_nested_extract_in_where_not_is_null`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT id FROM json_data WHERE NOT json_val -> 'a' -> 'b' IS NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT id FROM func('e2e::tds_json_data') WHERE NOT json_val -> 'a' -> 'b' IS NULL ORDER BY 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_column_extract_text_in_where_equals-TDS"></a>`json_column_extract_text_in_where_equals`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT id FROM json_data WHERE json_val ->> 'b' = 'hello' ORDER BY 1
```

**Legend SQL:**
```sql
SELECT id FROM func('e2e::tds_json_data') WHERE json_val ->> 'b' = 'hello' ORDER BY 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_column_nested_extract_in_select_and_where-TDS"></a>`json_column_nested_extract_in_select_and_where`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT id, json_val -> 'a' -> 'b' AS nested FROM json_data WHERE json_val -> 'a' -> 'b' IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
SELECT id, json_val -> 'a' -> 'b' AS nested FROM func('e2e::tds_json_data') WHERE json_val -> 'a' -> 'b' IS NOT NULL ORDER BY 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<a id="function-not-supported"></a>

### FUNCTION_NOT_SUPPORTED (18 tests)

#### <a id="fail-subquery_scalar_select-TDS"></a><a id="fail-subquery_scalar_select-Relation"></a>`subquery_scalar_select`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name, salary, (SELECT AVG(salary) FROM persons WHERE salary IS NOT NULL) AS avg_salary FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT name, salary, (SELECT AVG(salary) FROM func('e2e::tds_persons') WHERE salary IS NOT NULL) AS avg_salary FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT name, salary, (SELECT AVG(salary) FROM func('e2e::rel_persons') WHERE salary IS NOT NULL) AS avg_salary FROM func('e2e::rel_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "func"


<br>

#### <a id="fail-subquery_scalar_max-TDS"></a><a id="fail-subquery_scalar_max-Relation"></a>`subquery_scalar_max`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name, salary, (SELECT MAX(salary) FROM persons) AS max_salary FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT name, salary, (SELECT MAX(salary) FROM func('e2e::tds_persons')) AS max_salary FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT name, salary, (SELECT MAX(salary) FROM func('e2e::rel_persons')) AS max_salary FROM func('e2e::rel_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "func"


<br>

#### <a id="fail-subquery_correlated_count-TDS"></a><a id="fail-subquery_correlated_count-Relation"></a>`subquery_correlated_count`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT p.name, (SELECT COUNT(*) FROM orders o WHERE o.person_id = p.id) AS order_count FROM persons p ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT p.name, (SELECT COUNT(*) FROM func('e2e::tds_orders') o WHERE o.person_id = p.id) AS order_count FROM func('e2e::tds_persons') p ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT p.name, (SELECT COUNT(*) FROM func('e2e::rel_orders') o WHERE o.person_id = p.id) AS order_count FROM func('e2e::rel_persons') p ORDER BY 1
```

**Error:**
> No function matches the given name "func"


<br>

#### <a id="fail-subquery_scalar_arithmetic-TDS"></a><a id="fail-subquery_scalar_arithmetic-Relation"></a>`subquery_scalar_arithmetic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name, salary - (SELECT MIN(salary) FROM persons WHERE salary IS NOT NULL) AS above_min FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT name, salary - (SELECT MIN(salary) FROM func('e2e::tds_persons') WHERE salary IS NOT NULL) AS above_min FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT name, salary - (SELECT MIN(salary) FROM func('e2e::rel_persons') WHERE salary IS NOT NULL) AS above_min FROM func('e2e::rel_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "func"


<br>

#### <a id="fail-null_nullif-TDS"></a><a id="fail-null_nullif-Relation"></a>`null_nullif`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT NULLIF(dept_id, 1) AS result FROM persons WHERE dept_id IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT NULLIF(dept_id, 1) AS result FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT NULLIF(dept_id, 1) AS result FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "NULLIF"


<br>

#### <a id="fail-lateral_cross_basic-Relation"></a>`lateral_cross_basic`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name, g.val FROM persons p CROSS JOIN LATERAL GENERATE_SERIES(1, p.dept_id) AS g(val) WHERE p.id <= 3 ORDER BY 1, 2
```

**Legend SQL:**
```sql
SELECT p.name, g.val FROM func('e2e::rel_persons') p CROSS JOIN LATERAL GENERATE_SERIES(1, p.dept_id) AS g(val) WHERE p.id <= 3 ORDER BY 1, 2
```

**Error:**
> No function matches the given name "GENERATE_SERIES"


<br>

#### <a id="fail-lateral_function_in_from-TDS"></a><a id="fail-lateral_function_in_from-Relation"></a>`lateral_function_in_from`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT g.val FROM GENERATE_SERIES(1, 5) AS g(val) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT g.val FROM GENERATE_SERIES(1, 5) AS g(val) ORDER BY 1
```

**Error:**
> No function matches the given name "GENERATE_SERIES"


<br>

#### <a id="fail-lateral_function_cross_join-TDS"></a><a id="fail-lateral_function_cross_join-Relation"></a>`lateral_function_cross_join`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT p.name, g.val FROM persons p, GENERATE_SERIES(1, 2) AS g(val) WHERE p.id <= 2 ORDER BY 1, 2
```

**Legend SQL (TDS):**
```sql
SELECT p.name, g.val FROM func('e2e::tds_persons') p, GENERATE_SERIES(1, 2) AS g(val) WHERE p.id <= 2 ORDER BY 1, 2
```

**Legend SQL (Relation):**
```sql
SELECT p.name, g.val FROM func('e2e::rel_persons') p, GENERATE_SERIES(1, 2) AS g(val) WHERE p.id <= 2 ORDER BY 1, 2
```

**Error:**
> No function matches the given name "GENERATE_SERIES"


<br>

#### <a id="fail-interval_in_where_ts-TDS"></a><a id="fail-interval_in_where_ts-Relation"></a>`interval_in_where_ts`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ts AS result FROM dates WHERE ts > NOW() - INTERVAL '10 years' AND ts IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT ts AS result FROM func('e2e::tds_dates') WHERE ts > NOW() - INTERVAL '10 years' AND ts IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT ts AS result FROM func('e2e::rel_dates') WHERE ts > NOW() - INTERVAL '10 years' AND ts IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "NOW"


<br>

#### <a id="fail-crcs_g5_correlated_subquery_in_select_list_over_join-TDS"></a><a id="fail-crcs_g5_correlated_subquery_in_select_list_over_join-Relation"></a>`crcs_g5_correlated_subquery_in_select_list_over_join`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT p.name AS name, (SELECT COUNT(*) FROM orders o WHERE o.person_id = p.id) AS order_count FROM persons p INNER JOIN departments d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT p.name AS name, (SELECT COUNT(*) FROM func('e2e::tds_orders') o WHERE o.person_id = p.id) AS order_count FROM func('e2e::tds_persons') p INNER JOIN func('e2e::tds_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT p.name AS name, (SELECT COUNT(*) FROM func('e2e::rel_orders') o WHERE o.person_id = p.id) AS order_count FROM func('e2e::rel_persons') p INNER JOIN func('e2e::rel_departments') d ON p.dept_id = d.id ORDER BY 1
```

**Error:**
> No function matches the given name "func"


<br>

#### <a id="fail-rollup_basic-TDS"></a><a id="fail-rollup_basic-Relation"></a>`rollup_basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT dept_id, active, COUNT(*) AS cnt FROM persons GROUP BY ROLLUP (dept_id, active) ORDER BY 1, 2
```

**Legend SQL (TDS):**
```sql
SELECT dept_id, active, COUNT(*) AS cnt FROM func('e2e::tds_persons') GROUP BY ROLLUP(dept_id, active) ORDER BY 1, 2
```

**Legend SQL (Relation):**
```sql
SELECT dept_id, active, COUNT(*) AS cnt FROM func('e2e::rel_persons') GROUP BY ROLLUP(dept_id, active) ORDER BY 1, 2
```

**Error:**
> No function matches the given name "ROLLUP"


<br>

#### <a id="fail-cube_basic-TDS"></a><a id="fail-cube_basic-Relation"></a>`cube_basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT dept_id, active, COUNT(*) AS cnt FROM persons GROUP BY CUBE (dept_id, active) ORDER BY 1, 2
```

**Legend SQL (TDS):**
```sql
SELECT dept_id, active, COUNT(*) AS cnt FROM func('e2e::tds_persons') GROUP BY CUBE(dept_id, active) ORDER BY 1, 2
```

**Legend SQL (Relation):**
```sql
SELECT dept_id, active, COUNT(*) AS cnt FROM func('e2e::rel_persons') GROUP BY CUBE(dept_id, active) ORDER BY 1, 2
```

**Error:**
> No function matches the given name "CUBE"


<br>

#### <a id="fail-within_group_mode-TDS"></a><a id="fail-within_group_mode-Relation"></a>`within_group_mode`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT dept_id, MODE() WITHIN GROUP (ORDER BY age) AS common_age FROM persons GROUP BY dept_id ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT dept_id, MODE() WITHIN GROUP (ORDER BY age) AS common_age FROM func('e2e::tds_persons') GROUP BY dept_id ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT dept_id, MODE() WITHIN GROUP (ORDER BY age) AS common_age FROM func('e2e::rel_persons') GROUP BY dept_id ORDER BY 1
```

**Error:**
> No function matches the given name "MODE"


<br>

#### <a id="fail-stress_zscore-TDS"></a><a id="fail-stress_zscore-Relation"></a>`stress_zscore`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name, salary, ROUND(CAST((salary - AVG(salary) OVER ()) / NULLIF(STDDEV(salary) OVER (), 0) AS NUMERIC), 3) AS z_score FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT name, salary, ROUND(CAST((salary - AVG(salary) OVER ()) / NULLIF(STDDEV(salary) OVER (), 0) AS NUMERIC), 3) AS z_score FROM func('e2e::tds_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT name, salary, ROUND(CAST((salary - AVG(salary) OVER ()) / NULLIF(STDDEV(salary) OVER (), 0) AS NUMERIC), 3) AS z_score FROM func('e2e::rel_persons') WHERE salary IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "NULLIF"


<br>

#### <a id="fail-nested_corr_in_select-TDS"></a><a id="fail-nested_corr_in_select-Relation"></a>`nested_corr_in_select`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT p.name, p.salary, (SELECT COUNT(*) FROM orders o WHERE o.person_id = p.id) AS order_count, (SELECT COALESCE(SUM(o.amount), 0) FROM orders o WHERE o.person_id = p.id) AS total_spent FROM persons p WHERE p.salary IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT p.name, p.salary, (SELECT COUNT(*) FROM func('e2e::tds_orders') o WHERE o.person_id = p.id) AS order_count, (SELECT COALESCE(SUM(o.amount), 0) FROM func('e2e::tds_orders') o WHERE o.person_id = p.id) AS total_spent FROM func('e2e::tds_persons') p WHERE p.salary IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT p.name, p.salary, (SELECT COUNT(*) FROM func('e2e::rel_orders') o WHERE o.person_id = p.id) AS order_count, (SELECT COALESCE(SUM(o.amount), 0) FROM func('e2e::rel_orders') o WHERE o.person_id = p.id) AS total_spent FROM func('e2e::rel_persons') p WHERE p.salary IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "func"


<br>

#### <a id="fail-nested_corr_dept_avg-TDS"></a><a id="fail-nested_corr_dept_avg-Relation"></a>`nested_corr_dept_avg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT p.name, p.salary, (SELECT AVG(salary) FROM persons p2 WHERE p2.dept_id = p.dept_id AND p2.salary IS NOT NULL) AS dept_avg FROM persons p WHERE p.salary IS NOT NULL AND p.dept_id IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT p.name, p.salary, (SELECT AVG(salary) FROM func('e2e::tds_persons') p2 WHERE p2.dept_id = p.dept_id AND p2.salary IS NOT NULL) AS dept_avg FROM func('e2e::tds_persons') p WHERE p.salary IS NOT NULL AND p.dept_id IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT p.name, p.salary, (SELECT AVG(salary) FROM func('e2e::rel_persons') p2 WHERE p2.dept_id = p.dept_id AND p2.salary IS NOT NULL) AS dept_avg FROM func('e2e::rel_persons') p WHERE p.salary IS NOT NULL AND p.dept_id IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "func"


<br>

#### <a id="fail-nested_scalar_arithmetic-TDS"></a><a id="fail-nested_scalar_arithmetic-Relation"></a>`nested_scalar_arithmetic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT p.name, p.salary - (SELECT AVG(salary) FROM persons WHERE salary IS NOT NULL) AS diff_from_avg FROM persons p WHERE p.salary IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT p.name, p.salary - (SELECT AVG(salary) FROM func('e2e::tds_persons') WHERE salary IS NOT NULL) AS diff_from_avg FROM func('e2e::tds_persons') p WHERE p.salary IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT p.name, p.salary - (SELECT AVG(salary) FROM func('e2e::rel_persons') WHERE salary IS NOT NULL) AS diff_from_avg FROM func('e2e::rel_persons') p WHERE p.salary IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "func"


<br>

#### <a id="fail-nested_scalar_coalesce-TDS"></a><a id="fail-nested_scalar_coalesce-Relation"></a>`nested_scalar_coalesce`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT p.name, COALESCE((SELECT SUM(o.amount) FROM orders o WHERE o.person_id = p.id), 0) AS total_spent FROM persons p ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT p.name, COALESCE((SELECT SUM(o.amount) FROM func('e2e::tds_orders') o WHERE o.person_id = p.id), 0) AS total_spent FROM func('e2e::tds_persons') p ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT p.name, COALESCE((SELECT SUM(o.amount) FROM func('e2e::rel_orders') o WHERE o.person_id = p.id), 0) AS total_spent FROM func('e2e::rel_persons') p ORDER BY 1
```

**Error:**
> No function matches the given name "func"


<a id="result-mismatch"></a>

### RESULT_MISMATCH (15 tests)

#### <a id="fail-subquery_quant_all_empty_null_value-Relation"></a>`subquery_quant_all_empty_null_value`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT p.name FROM persons p WHERE p.age > ALL (SELECT p2.age FROM persons p2 WHERE p2.id > 100) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT p.name FROM func('e2e::rel_persons') p WHERE p.age > ALL(SELECT p2.age FROM func('e2e::rel_persons') p2 WHERE p2.id > 100) ORDER BY 1
```

**Error:**
> null


<br>

#### <a id="fail-null_equals_null-TDS"></a>`null_equals_null`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT (NULL = NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT (NULL = NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-null_not_equals-TDS"></a>`null_not_equals`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT (NULL <> 1) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT (NULL <> 1) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-null_concat-TDS"></a><a id="fail-null_concat-Relation"></a>`null_concat`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name || ' age=' || CAST(age AS TEXT) AS result FROM persons ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT name || ' age=' || CAST(age AS TEXT) AS result FROM func('e2e::tds_persons') ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT name || ' age=' || CAST(age AS TEXT) AS result FROM func('e2e::rel_persons') ORDER BY 1
```

**Error:**
> null


<br>

#### <a id="fail-where_not_between-TDS"></a><a id="fail-where_not_between-Relation"></a>`where_not_between`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name, salary FROM persons WHERE salary NOT BETWEEN 40000 AND 60000 ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT name, salary FROM func('e2e::tds_persons') WHERE salary NOT BETWEEN 40000 AND 60000 ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT name, salary FROM func('e2e::rel_persons') WHERE salary NOT BETWEEN 40000 AND 60000 ORDER BY 1
```

**Error:**
> null


<br>

#### <a id="fail-where_not_in_list-TDS"></a><a id="fail-where_not_in_list-Relation"></a>`where_not_in_list`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name, dept_id FROM persons WHERE dept_id NOT IN (1, 2) ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT name, dept_id FROM func('e2e::tds_persons') WHERE dept_id NOT IN (1, 2) ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT name, dept_id FROM func('e2e::rel_persons') WHERE dept_id NOT IN (1, 2) ORDER BY 1
```

**Error:**
> null


<br>

#### <a id="fail-where_not_compound-Relation"></a>`where_not_compound`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name FROM persons WHERE NOT (dept_id = 1 AND salary > 50000) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT name FROM func('e2e::rel_persons') WHERE NOT (dept_id = 1 AND salary > 50000) ORDER BY 1
```

**Error:**
> null


<br>

#### <a id="fail-bool_null_and_false-TDS"></a><a id="fail-bool_null_and_false-Relation"></a>`bool_null_and_false`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT (NULL AND FALSE) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT (NULL AND FALSE) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT (NULL AND FALSE) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-bool_null_or_true-TDS"></a><a id="fail-bool_null_or_true-Relation"></a>`bool_null_or_true`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT (NULL OR TRUE) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT (NULL OR TRUE) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT (NULL OR TRUE) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-star_multiple_tables-TDS"></a><a id="fail-star_multiple_tables-Relation"></a>`star_multiple_tables`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT p.*, d.* FROM persons p JOIN departments d ON p.dept_id = d.id WHERE p.id <= 3 ORDER BY p.id
```

**Legend SQL (TDS):**
```sql
SELECT p.*, d.* FROM func('e2e::tds_persons') p JOIN func('e2e::tds_departments') d ON p.dept_id = d.id WHERE p.id <= 3 ORDER BY p.id
```

**Legend SQL (Relation):**
```sql
SELECT p.*, d.* FROM func('e2e::rel_persons') p JOIN func('e2e::rel_departments') d ON p.dept_id = d.id WHERE p.id <= 3 ORDER BY p.id
```

**Error:**
> null


<br>

#### <a id="fail-schema_information_tables-TDS"></a><a id="fail-schema_information_tables-Relation"></a>`schema_information_tables`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY 1
```

**Legend SQL:**
```sql
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY 1
```

**Error:**
> null


<br>

#### <a id="fail-schema_information_columns-TDS"></a><a id="fail-schema_information_columns-Relation"></a>`schema_information_columns`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT column_name FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'persons' ORDER BY 1
```

**Legend SQL:**
```sql
SELECT column_name FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'persons' ORDER BY 1
```

**Error:**
> null


<br>

#### <a id="fail-json_extract_array_index-Relation"></a>`json_extract_array_index`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT '[10,20,30]'::jsonb -> 1 AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '[10,20,30]'::jsonb -> 1 AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-json_extract_array_negative_index-Relation"></a>`json_extract_array_negative_index`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT '[10,20,30]'::jsonb -> -1 AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '[10,20,30]'::jsonb -> -1 AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-interval_compound_literal-TDS"></a><a id="fail-interval_compound_literal-Relation"></a>`interval_compound_literal`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT d + INTERVAL '1 year 2 months 3 days' AS result FROM dates WHERE d IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT d + INTERVAL '1 year 2 months 3 days' AS result FROM func('e2e::tds_dates') WHERE d IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT d + INTERVAL '1 year 2 months 3 days' AS result FROM func('e2e::rel_dates') WHERE d IS NOT NULL ORDER BY 1
```

**Error:**
> null


<a id="function-no-sql-translation"></a>

### FUNCTION_NO_SQL_TRANSLATION (1 tests)

#### <a id="fail-cte_used_twice-Relation"></a>`cte_used_twice`

📗 **Relation Path**

**Input SQL:**
```sql
WITH emp_data AS (SELECT dept_id, salary FROM persons WHERE salary IS NOT NULL AND dept_id IS NOT NULL) SELECT (SELECT COUNT(*) FROM emp_data) AS total_emps, (SELECT AVG(salary) FROM emp_data) AS avg_salary
```

**Legend SQL:**
```sql
WITH emp_data AS (SELECT dept_id, salary FROM func('e2e::rel_persons') WHERE salary IS NOT NULL AND dept_id IS NOT NULL) SELECT (SELECT COUNT(*) FROM emp_data) AS total_emps, (SELECT AVG(salary) FROM emp_data) AS avg_salary
```

**Error:**
> No SQL translation exists for the PURE function 'wrapPrimitiveInTDS_T_MANY__T_1__TDS_1_'. \nIf you would like to add a SQL translation for the function then follow the step-by-step guide on the PURE wiki.


<a id="parse-error"></a>

### PARSE_ERROR (25 tests)

#### <a id="fail-distinct_on-TDS"></a><a id="fail-distinct_on-Relation"></a>`distinct_on`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT DISTINCT ON (dept_id) dept_id, name, salary FROM persons WHERE dept_id IS NOT NULL AND salary IS NOT NULL ORDER BY dept_id, salary DESC
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'ON' at line 1, column 17


<br>

#### <a id="fail-bool_is_true-TDS"></a><a id="fail-bool_is_true-Relation"></a>`bool_is_true`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name FROM persons WHERE active IS TRUE ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input 'IS TRUE'


<br>

#### <a id="fail-bool_is_false-TDS"></a><a id="fail-bool_is_false-Relation"></a>`bool_is_false`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name FROM persons WHERE active IS FALSE ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input 'IS FALSE'


<br>

#### <a id="fail-bool_is_not_true-TDS"></a><a id="fail-bool_is_not_true-Relation"></a>`bool_is_not_true`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name FROM persons WHERE active IS NOT TRUE ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input 'IS NOT TRUE'


<br>

#### <a id="fail-bool_is_not_false-TDS"></a><a id="fail-bool_is_not_false-Relation"></a>`bool_is_not_false`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name FROM persons WHERE active IS NOT FALSE ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input 'IS NOT FALSE'


<br>

#### <a id="fail-interval_make_interval_plus_date-TDS"></a><a id="fail-interval_make_interval_plus_date-Relation"></a>`interval_make_interval_plus_date`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAKE_INTERVAL(days => 10) + d AS result FROM dates WHERE d IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '=>'


<br>

#### <a id="fail-grouping_sets_basic-TDS"></a><a id="fail-grouping_sets_basic-Relation"></a>`grouping_sets_basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT dept_id, active, COUNT(*) AS cnt FROM persons GROUP BY GROUPING SETS ((dept_id), (active), ()) ORDER BY 1, 2
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input 'GROUPING SETS'


<br>

#### <a id="fail-grouping_sets_with_grouping_func-TDS"></a><a id="fail-grouping_sets_with_grouping_func-Relation"></a>`grouping_sets_with_grouping_func`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT dept_id, active, GROUPING(dept_id) AS g, COUNT(*) AS cnt FROM persons GROUP BY GROUPING SETS ((dept_id), (active)) ORDER BY 1, 2
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input 'GROUPING SETS'


<br>

#### <a id="fail-tablesample_bernoulli-TDS"></a><a id="fail-tablesample_bernoulli-Relation"></a>`tablesample_bernoulli`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT COUNT(*) FROM persons TABLESAMPLE BERNOULLI (50) REPEATABLE (1)
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'BERNOULLI'. Expected one of: {<EOF>, ';'} at line 1, column 42


<br>

#### <a id="fail-tablesample_system-TDS"></a><a id="fail-tablesample_system-Relation"></a>`tablesample_system`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT COUNT(*) FROM persons TABLESAMPLE SYSTEM (50) REPEATABLE (1)
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'SYSTEM'. Expected one of: {<EOF>, ';'} at line 1, column 42


<br>

#### <a id="fail-tablesample_no_repeatable-TDS"></a><a id="fail-tablesample_no_repeatable-Relation"></a>`tablesample_no_repeatable`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT COUNT(*) FROM persons TABLESAMPLE BERNOULLI (10)
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'BERNOULLI'. Expected one of: {<EOF>, ';'} at line 1, column 42


<br>

#### <a id="fail-fetch_first_with_ties-TDS"></a><a id="fail-fetch_first_with_ties-Relation"></a>`fetch_first_with_ties`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT dept_id, salary FROM persons ORDER BY salary DESC FETCH FIRST 3 ROWS WITH TIES
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input 'FETCH FIRST 3 ROWS WITH'


<br>

#### <a id="fail-fetch_next_with_ties-TDS"></a><a id="fail-fetch_next_with_ties-Relation"></a>`fetch_next_with_ties`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT dept_id, salary FROM persons ORDER BY salary DESC OFFSET 1 FETCH NEXT 3 ROWS WITH TIES
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'WITH'. Expected one of: ONLY at line 1, column 85


<br>

#### <a id="fail-cte_materialized_hint-TDS"></a><a id="fail-cte_materialized_hint-Relation"></a>`cte_materialized_hint`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
WITH cte AS MATERIALIZED (SELECT dept_id, COUNT(*) AS cnt FROM persons GROUP BY dept_id) SELECT * FROM cte ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'MATERIALIZED' at line 1, column 13


<br>

#### <a id="fail-cte_not_materialized_hint-TDS"></a><a id="fail-cte_not_materialized_hint-Relation"></a>`cte_not_materialized_hint`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
WITH cte AS NOT MATERIALIZED (SELECT dept_id, COUNT(*) AS cnt FROM persons GROUP BY dept_id) SELECT * FROM cte ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'NOT'. Expected one of: '(' at line 1, column 13


<br>

#### <a id="fail-values_in_union-TDS"></a><a id="fail-values_in_union-Relation"></a>`values_in_union`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
VALUES (1), (2) UNION SELECT id FROM persons WHERE id IN (1, 2, 3)
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'UNION'. Expected one of: {<EOF>, ';'} at line 1, column 17


<br>

#### <a id="fail-frame_exclude_current_row-TDS"></a><a id="fail-frame_exclude_current_row-Relation"></a>`frame_exclude_current_row`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING EXCLUDE CURRENT ROW) AS neighbors FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'EXCLUDE' at line 1, column 95


<br>

#### <a id="fail-frame_exclude_current_row_avg-TDS"></a><a id="fail-frame_exclude_current_row_avg-Relation"></a>`frame_exclude_current_row_avg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name, salary, AVG(salary) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING EXCLUDE CURRENT ROW) AS avg_others FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'EXCLUDE' at line 1, column 111


<br>

#### <a id="fail-frame_exclude_current_count-TDS"></a><a id="fail-frame_exclude_current_count-Relation"></a>`frame_exclude_current_count`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name, salary, COUNT(*) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING EXCLUDE CURRENT ROW) AS others_cnt FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'EXCLUDE' at line 1, column 108


<br>

#### <a id="fail-frame_exclude_current_minmax-TDS"></a><a id="fail-frame_exclude_current_minmax-Relation"></a>`frame_exclude_current_minmax`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name, salary, MIN(salary) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING EXCLUDE CURRENT ROW) AS min_others, MAX(salary) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING EXCLUDE CURRENT ROW) AS max_others FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'EXCLUDE' at line 1, column 111


<br>

#### <a id="fail-frame_exclude_group-TDS"></a><a id="fail-frame_exclude_group-Relation"></a>`frame_exclude_group`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name, dept_id, salary, SUM(salary) OVER (ORDER BY dept_id ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING EXCLUDE GROUP) AS sum_others FROM persons WHERE salary IS NOT NULL AND dept_id IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'EXCLUDE' at line 1, column 123


<br>

#### <a id="fail-frame_exclude_group_partition-TDS"></a><a id="fail-frame_exclude_group_partition-Relation"></a>`frame_exclude_group_partition`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name, dept_id, salary, SUM(salary) OVER (PARTITION BY dept_id ORDER BY salary ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING EXCLUDE GROUP) AS others FROM persons WHERE salary IS NOT NULL AND dept_id IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'EXCLUDE' at line 1, column 143


<br>

#### <a id="fail-frame_exclude_ties-TDS"></a><a id="fail-frame_exclude_ties-Relation"></a>`frame_exclude_ties`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name, dept_id, salary, SUM(salary) OVER (ORDER BY dept_id ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING EXCLUDE TIES) AS sum_no_ties FROM persons WHERE salary IS NOT NULL AND dept_id IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'EXCLUDE' at line 1, column 123


<br>

#### <a id="fail-frame_exclude_ties_partition-TDS"></a><a id="fail-frame_exclude_ties_partition-Relation"></a>`frame_exclude_ties_partition`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name, dept_id, salary, COUNT(*) OVER (PARTITION BY dept_id ORDER BY salary ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING EXCLUDE TIES) AS cnt_no_ties FROM persons WHERE salary IS NOT NULL AND dept_id IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'EXCLUDE' at line 1, column 140


<br>

#### <a id="fail-frame_exclude_no_others-TDS"></a><a id="fail-frame_exclude_no_others-Relation"></a>`frame_exclude_no_others`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT name, salary, SUM(salary) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW EXCLUDE NO OTHERS) AS running FROM persons WHERE salary IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'EXCLUDE' at line 1, column 103


