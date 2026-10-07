# Legend SQL — Coverage Summary

## Function Coverage

Coverage of Postgres built-in functions in Legend SQL.
See [full details](function-coverage.md) for per-function results.

| Metric | TDS | Relation |
|--------|-----|----------|
| Total signatures | 660 | 660 |
| Unique function names | 346 | 346 |
| **Supported functions (PASS/PARTIAL)** | **123 (35.5%)** | **132 (38.2%)** |
| Total tests | 882 | 882 |
| ⚪ UNSUPPORTED | 62 | 62 |
| ✅ PASS | 209 | 226 |
| ⚠️ PARTIAL | 31 | 31 |
| ❌ FAIL | 8 | 8 |
| 💥 ERROR | 0 | 0 |
| ❓ UNTESTED | 350 | 333 |
| **Full pass rate** | **34.9%** | **37.8%** |
| **Pass + partial rate** | **40.1%** | **43.0%** |

_Percentages exclude unsupported functions from the denominator._

**Failed tests:**

- [div__num_num__from_table \[TDS\]](failure-details.md#fail-div__num_num__from_table-TDS)
- [div__num_num__from_table \[Relation\]](failure-details.md#fail-div__num_num__from_table-Relation)
- [concat_ws__txt_variadic__from_table \[TDS\]](failure-details.md#fail-concat_ws__txt_variadic__from_table-TDS)
- [concat_ws__txt_variadic__from_table \[Relation\]](failure-details.md#fail-concat_ws__txt_variadic__from_table-Relation)
- [initcap__txt__from_table \[TDS\]](failure-details.md#fail-initcap__txt__from_table-TDS)
- [initcap__txt__from_table \[Relation\]](failure-details.md#fail-initcap__txt__from_table-Relation)
- [string_to_array__txt_txt__from_table \[TDS\]](failure-details.md#fail-string_to_array__txt_txt__from_table-TDS)
- [string_to_array__txt_txt__from_table \[Relation\]](failure-details.md#fail-string_to_array__txt_txt__from_table-Relation)
- [regexp_count__start_position__ignored_by_legend \[TDS\]](failure-details.md#fail-regexp_count__start_position__ignored_by_legend-TDS)
- [regexp_count__start_position__ignored_by_legend \[Relation\]](failure-details.md#fail-regexp_count__start_position__ignored_by_legend-Relation)
- [regexp_substr__start_position__ignored_by_legend \[TDS\]](failure-details.md#fail-regexp_substr__start_position__ignored_by_legend-TDS)
- [regexp_substr__start_position__ignored_by_legend \[Relation\]](failure-details.md#fail-regexp_substr__start_position__ignored_by_legend-Relation)
- [regexp_substr__nth_occurrence__ignored_by_legend \[TDS\]](failure-details.md#fail-regexp_substr__nth_occurrence__ignored_by_legend-TDS)
- [regexp_substr__nth_occurrence__ignored_by_legend \[Relation\]](failure-details.md#fail-regexp_substr__nth_occurrence__ignored_by_legend-Relation)
- [regexp_substr__nth_occurrence_last__ignored_by_legend \[TDS\]](failure-details.md#fail-regexp_substr__nth_occurrence_last__ignored_by_legend-TDS)
- [regexp_substr__nth_occurrence_last__ignored_by_legend \[Relation\]](failure-details.md#fail-regexp_substr__nth_occurrence_last__ignored_by_legend-Relation)
- [regexp_substr__start_and_nth__ignored_by_legend \[TDS\]](failure-details.md#fail-regexp_substr__start_and_nth__ignored_by_legend-TDS)
- [regexp_substr__start_and_nth__ignored_by_legend \[Relation\]](failure-details.md#fail-regexp_substr__start_and_nth__ignored_by_legend-Relation)
- [json_extract_path__from_column \[Relation\]](failure-details.md#fail-json_extract_path__from_column-Relation)
- [array_position__anycompatiblearray_anycompatible__from_table \[Relation\]](failure-details.md#fail-array_position__anycompatiblearray_anycompatible__from_table-Relation)
- [max__anyarray__no_generator \[TDS\]](failure-details.md#fail-max__anyarray__no_generator-TDS)
- [max__anyarray__no_generator \[Relation\]](failure-details.md#fail-max__anyarray__no_generator-Relation)
- [min__anyarray__no_generator \[TDS\]](failure-details.md#fail-min__anyarray__no_generator-TDS)
- [min__anyarray__no_generator \[Relation\]](failure-details.md#fail-min__anyarray__no_generator-Relation)

---

## Operator Coverage

Coverage of Postgres built-in operators in Legend SQL.
See [full details](operator-coverage.md) for per-operator results.

| Metric | TDS | Relation |
|--------|-----|----------|
| Total operators | 548 | 548 |
| ⚪ UNSUPPORTED | 0 | 0 |
| ✅ PASS | 71 | 76 |
| ⚠️ PARTIAL | 7 | 10 |
| ❌ FAIL | 7 | 5 |
| 💥 ERROR | 0 | 0 |
| ❓ UNTESTED | 463 | 457 |
| **Full pass rate** | **13.0%** | **13.9%** |

---

## Structural Parity

Coverage of SQL structural features (joins, subqueries, aggregations, etc.).
See [full details](structural-parity.md) for per-feature results.

| Metric | TDS | Relation |
|--------|-----|----------|
| Total features | 612 | 612 |
| Total tests | 691 | 691 |
| ⚪ UNSUPPORTED | 211 | 47 |
| ✅ PASS | 305 | 432 |
| ⚠️ PARTIAL | 3 | 3 |
| ❌ FAIL | 10 | 11 |
| 💥 ERROR | 83 | 119 |
| ❓ UNTESTED | 0 | 0 |
| **Full pass rate** | **76.1%** | **76.5%** |
| **Pass + partial rate** | **76.8%** | **77.0%** |

_Percentages exclude unsupported features from the denominator._

**Failed tests:**

- [subquery_quant_all_empty_null_value \[Relation\]](failure-details.md#fail-subquery_quant_all_empty_null_value-Relation)
- [null_equals_null \[TDS\]](failure-details.md#fail-null_equals_null-TDS)
- [null_not_equals \[TDS\]](failure-details.md#fail-null_not_equals-TDS)
- [null_concat \[TDS\]](failure-details.md#fail-null_concat-TDS)
- [null_concat \[Relation\]](failure-details.md#fail-null_concat-Relation)
- [where_not_between \[TDS\]](failure-details.md#fail-where_not_between-TDS)
- [where_not_between \[Relation\]](failure-details.md#fail-where_not_between-Relation)
- [where_not_in_list \[TDS\]](failure-details.md#fail-where_not_in_list-TDS)
- [where_not_in_list \[Relation\]](failure-details.md#fail-where_not_in_list-Relation)
- [where_not_compound \[Relation\]](failure-details.md#fail-where_not_compound-Relation)
- [bool_null_and_false \[TDS\]](failure-details.md#fail-bool_null_and_false-TDS)
- [bool_null_and_false \[Relation\]](failure-details.md#fail-bool_null_and_false-Relation)
- [bool_null_or_true \[TDS\]](failure-details.md#fail-bool_null_or_true-TDS)
- [bool_null_or_true \[Relation\]](failure-details.md#fail-bool_null_or_true-Relation)
- [star_multiple_tables \[TDS\]](failure-details.md#fail-star_multiple_tables-TDS)
- [star_multiple_tables \[Relation\]](failure-details.md#fail-star_multiple_tables-Relation)
- [schema_information_tables \[TDS\]](failure-details.md#fail-schema_information_tables-TDS)
- [schema_information_tables \[Relation\]](failure-details.md#fail-schema_information_tables-Relation)
- [schema_information_columns \[TDS\]](failure-details.md#fail-schema_information_columns-TDS)
- [schema_information_columns \[Relation\]](failure-details.md#fail-schema_information_columns-Relation)
- [json_extract_array_index \[Relation\]](failure-details.md#fail-json_extract_array_index-Relation)
- [json_extract_array_negative_index \[Relation\]](failure-details.md#fail-json_extract_array_negative_index-Relation)
- [interval_compound_literal \[TDS\]](failure-details.md#fail-interval_compound_literal-TDS)
- [interval_compound_literal \[Relation\]](failure-details.md#fail-interval_compound_literal-Relation)

---

## Format Token Coverage

Coverage of `to_char` template patterns and `EXTRACT`/`date_part` field keywords.
See [full details](format-token-coverage.md) for per-token results.

| Metric | TDS | Relation |
|--------|-----|----------|
| Total tokens | 80 | 80 |
| ✅ PASS | 33 | 36 |
| **Pass rate** | **41.3%** | **45.0%** |

---

## Coverage vs. Postgres Docs

Fraction of cataloged functions/operators with *any* test at all — independent of
pass/fail — showing where there is a testing gap vs. a behavioral gap.

| Doc Section | Tested | Total | Tested % |
|---|---|---|---|
| [Mathematical Functions and Operators (9.3)](https://www.postgresql.org/docs/16/functions-math.html) | 72 | 72 | 100.0% |
| [String Functions and Operators (9.4)](https://www.postgresql.org/docs/16/functions-string.html) | 106 | 106 | 100.0% |
| [Binary String Functions (9.5)](https://www.postgresql.org/docs/16/functions-binarystring.html) | 9 | 9 | 100.0% |
| [Pattern Matching (9.7)](https://www.postgresql.org/docs/16/functions-matching.html) | 12 | 19 | 63.2% |
| [Data Type Formatting (9.8)](https://www.postgresql.org/docs/16/functions-formatting.html) | 10 | 10 | 100.0% |
| [Date/Time Functions and Operators (9.9)](https://www.postgresql.org/docs/16/functions-datetime.html) | 41 | 41 | 100.0% |
| [Conditional Expressions (9.18)](https://www.postgresql.org/docs/16/functions-conditional.html) | 7 | 7 | 100.0% |
| [JSON Functions and Operators (9.16)](https://www.postgresql.org/docs/16/functions-json.html) | 47 | 47 | 100.0% |
| [Array Functions and Operators (9.19)](https://www.postgresql.org/docs/16/functions-array.html) | 21 | 21 | 100.0% |
| [Aggregate Functions (9.21)](https://www.postgresql.org/docs/16/functions-aggregate.html) | 157 | 157 | 100.0% |
| [Window Functions (9.22)](https://www.postgresql.org/docs/16/functions-window.html) | 15 | 15 | 100.0% |
| [Network Address Functions (9.12)](https://www.postgresql.org/docs/16/functions-net.html) | 21 | 21 | 100.0% |
| [System Information Functions (9.26)](https://www.postgresql.org/docs/16/functions-info.html) | 41 | 41 | 100.0% |
| [Sequence Manipulation Functions (9.17)](https://www.postgresql.org/docs/16/functions-sequence.html) | 5 | 5 | 100.0% |
| [Set Returning Functions (9.25)](https://www.postgresql.org/docs/16/functions-srf.html) | 11 | 11 | 100.0% |
| [Cryptographic Functions (pgcrypto)](https://www.postgresql.org/docs/16/pgcrypto.html) | 1 | 22 | 4.5% |
| Other Functions | 56 | 56 | 100.0% |
| [Logical Operators (9.1)](https://www.postgresql.org/docs/16/functions-logical.html) | 3 | 3 | 100.0% |
| [Comparison Operators (9.2)](https://www.postgresql.org/docs/16/functions-comparison.html) | 26 | 26 | 100.0% |
| [Mathematical Operators (9.3)](https://www.postgresql.org/docs/16/functions-math.html) | 26 | 26 | 100.0% |
| [String Operators (9.4)](https://www.postgresql.org/docs/16/functions-string.html) | 37 | 37 | 100.0% |
| [Bit String Operators (9.6)](https://www.postgresql.org/docs/16/functions-bitstring.html) | 19 | 19 | 100.0% |
| [Array Operators (9.19)](https://www.postgresql.org/docs/16/functions-array.html) | 20 | 20 | 100.0% |
| [Range/Multirange Operators (9.19)](https://www.postgresql.org/docs/16/rangetypes.html) | 54 | 54 | 100.0% |
| [JSON/JSONB Operators (9.16)](https://www.postgresql.org/docs/16/functions-json.html) | 22 | 22 | 100.0% |
| [Network Address Operators (9.12)](https://www.postgresql.org/docs/16/functions-net.html) | 36 | 36 | 100.0% |
| [Geometric Operators (9.11)](https://www.postgresql.org/docs/16/functions-geometry.html) | 157 | 157 | 100.0% |
| [Full Text Search Operators (9.13)](https://www.postgresql.org/docs/16/textsearch.html) | 24 | 24 | 100.0% |
| Other Operators | 118 | 124 | 95.2% |

---

## Overall

Combined pass rate across function coverage and structural parity.

| Path | Pass | Tested | Pass Rate |
|------|------|--------|-----------|
| TDS | 618 | 1627 | **38.0%** |
| Relation | 770 | 1791 | **43.0%** |
| **Combined** | **1388** | **3338** | **41.6%** |

