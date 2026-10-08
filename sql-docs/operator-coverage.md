# Postgres Operator Coverage — Legend SQL (LegendSql)

Reference: [PostgreSQL 16 Functions and Operators](https://www.postgresql.org/docs/16/functions.html)

## Summary

| Path | PASS | PARTIAL | FAIL | ERROR | UNTESTED | UNSUPPORTED | Total |
|---|---|---|---|---|---|---|---|
| TDS | 71 | 7 | 7 | 0 | 354 | 109 | 548 |
| Relation | 76 | 10 | 5 | 0 | 348 | 109 | 548 |

---

## Error Categories

| Category | Description | TDS | Relation |
|----------|-------------|-----|----------|
| [RESULT_MISMATCH](#result-mismatch) | Query executes but results differ from Postgres | 13 | 14 |
| [TYPE_ERROR](#type-error) | Type mismatch or cast error | 207 | 178 |
| [UNSUPPORTED_SYNTAX](#unsupported-syntax) | SQL construct recognized but not yet implemented | 39 | 46 |
| [MISC](#misc) | Other/uncategorized error | 18 | 34 |
| [PARSE_ERROR](#parse-error) | SQL syntax not parseable by Legend SQL parser | 131 | 131 |
| [FUNCTION_NOT_SUPPORTED](#function-not-supported) | Function name not recognized by Legend SQL | 63 | 63 |

---

## Category Summary

| Category | Total | TDS PASS | TDS PARTIAL | TDS FAIL | TDS ERROR | TDS UNTESTED | Rel PASS | Rel PARTIAL | Rel FAIL | Rel ERROR | Rel UNTESTED |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [Logical Operators (9.1)](#logical-operators-91) | 3 | 1 | 2 | 0 | 0 | 0 | 1 | 2 | 0 | 0 | 0 |
| [Comparison Operators (9.2)](#comparison-operators-92) | 26 | 23 | 1 | 0 | 0 | 2 | 21 | 3 | 0 | 0 | 2 |
| [Mathematical Operators (9.3)](#mathematical-operators-93) | 26 | 7 | 2 | 1 | 0 | 8 | 7 | 2 | 1 | 0 | 8 |
| [String Operators (9.4)](#string-operators-94) | 37 | 10 | 0 | 1 | 0 | 18 | 11 | 0 | 0 | 0 | 18 |
| [Bit String Operators (9.6)](#bit-string-operators-96) | 19 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
| [Array Operators (9.19)](#array-operators-919) | 20 | 4 | 0 | 1 | 0 | 13 | 2 | 0 | 2 | 0 | 14 |
| [Range/Multirange Operators (9.19)](#rangemultirange-operators-919) | 54 | 0 | 0 | 0 | 0 | 16 | 0 | 0 | 0 | 0 | 16 |
| [JSON/JSONB Operators (9.16)](#jsonjsonb-operators-916) | 22 | 0 | 0 | 0 | 0 | 18 | 4 | 2 | 2 | 0 | 10 |
| [Network Address Operators (9.12)](#network-address-operators-912) | 36 | 0 | 0 | 0 | 0 | 36 | 0 | 0 | 0 | 0 | 36 |
| [Geometric Operators (9.11)](#geometric-operators-911) | 157 | 0 | 0 | 0 | 0 | 155 | 0 | 0 | 0 | 0 | 155 |
| [Full Text Search Operators (9.13)](#full-text-search-operators-913) | 24 | 0 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 5 |
| [Other Operators](#other-operators) | 124 | 26 | 2 | 4 | 0 | 82 | 30 | 1 | 0 | 0 | 83 |

---

## Logical Operators (9.1)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-logical.html)

| | Operator | Signature | TDS | Relation | Error Category | Notes |
|--|---|---|---|---|---|---|
| 🟡 | `AND` | `AND(boolean, boolean) → boolean` | PARTIAL (6/7) | PARTIAL (6/7) | [RESULT_MISMATCH](#fail-and__false_null-TDS) |  |
| 🟡 | `OR` | `OR(boolean, boolean) → boolean` | PARTIAL (6/7) | PARTIAL (6/7) | [RESULT_MISMATCH](#fail-or__true_null-TDS) |  |
| 🟢 | `NOT` | `NOT(boolean, boolean) → boolean` | PASS (4/4) | PASS (4/4) |  |  |

## Comparison Operators (9.2)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-comparison.html)

| | Operator | Signature | TDS | Relation | Error Category | Notes |
|--|---|---|---|---|---|---|
| 🟢 | `<` | `<(boolean, boolean) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `<` | `<(string, string) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `<` | `<(datetime, datetime) → boolean` | PASS (2/2) | PASS (2/2) |  |  |
| 🟡 | `<` | `<(numeric, numeric) → boolean` | PASS (7/7) | PARTIAL (6/7) | [RESULT_MISMATCH](#fail-lt__int__null-Relation) |  |
| 🟢 | `<=` | `<=(boolean, boolean) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `<=` | `<=(string, string) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `<=` | `<=(datetime, datetime) → boolean` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `<=` | `<=(numeric, numeric) → boolean` | PASS (3/3) | PASS (3/3) |  |  |
| 🟢 | `<>` | `<>(boolean, boolean) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `<>` | `<>(string, string) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `<>` | `<>(datetime, datetime) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🟡 | `<>` | `<>(numeric, numeric) → boolean` | PARTIAL (2/4) | PARTIAL (2/4) | [RESULT_MISMATCH](#fail-neq__int__null-TDS) |  |
| ⚪ | `<>` | `<>(xid, numeric) → boolean` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-neq__xid_vs_numeric-TDS) |  |
| 🟢 | `=` | `=(boolean, boolean) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `=` | `=(string, string) → boolean` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `=` | `=(datetime, datetime) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `=` | `=(numeric, numeric) → boolean` | PASS (7/7) | PASS (7/7) |  |  |
| ⚪ | `=` | `=(xid, numeric) → boolean` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-eq__xid_vs_numeric-TDS) |  |
| 🟢 | `>` | `>(boolean, boolean) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `>` | `>(string, string) → boolean` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `>` | `>(datetime, datetime) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🟡 | `>` | `>(numeric, numeric) → boolean` | PASS (8/8) | PARTIAL (7/8) | [RESULT_MISMATCH](#fail-gt__int__null-Relation) |  |
| 🟢 | `>=` | `>=(boolean, boolean) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `>=` | `>=(string, string) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `>=` | `>=(datetime, datetime) → boolean` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `>=` | `>=(numeric, numeric) → boolean` | PASS (3/3) | PASS (3/3) |  |  |

## Mathematical Operators (9.3)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-math.html)

| | Operator | Signature | TDS | Relation | Error Category | Notes |
|--|---|---|---|---|---|---|
| ⚪ | `#` | `#(numeric, numeric) → numeric` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-op_bitxor__int__basic-TDS) | Unsupported feature |
| 🟡 | `%` | `%(numeric, numeric) → numeric` | PARTIAL (2/5) | PARTIAL (2/5) | [RESULT_MISMATCH](#fail-op_mod__negative__basic-TDS), [MISC](#fail-op_mod__by_zero__error-TDS) |  |
| ⚪ | `&` | `&(numeric, numeric) → numeric` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-op_bitand__bigint__basic-TDS) | Unsupported feature |
| 🟢 | `*` | `*(numeric, numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `*` | `*(numeric, datetime) → datetime` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-op_mul__numeric_times_interval-TDS) | Unsupported feature |
| ⚪ | `*` | `*(datetime, numeric) → datetime` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-op_mul__interval_times_numeric-TDS) | Unsupported feature |
| 🟢 | `+` | `+(-, numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `+` | `+(datetime, numeric) → datetime` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `+` | `+(numeric, numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `+` | `+(numeric, datetime) → datetime` | UNTESTED | UNTESTED | [MISC](#fail-op_add__int_plus_date_days-TDS) |  |
| ⚪ | `+` | `+(numeric, pg_lsn) → pg_lsn` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-op_add__numeric_plus_pg_lsn-TDS) |  |
| ⚪ | `+` | `+(pg_lsn, numeric) → pg_lsn` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-op_add__pg_lsn_plus_numeric-TDS) |  |
| 🟢 | `-` | `-(-, numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🔴 | `-` | `-(datetime, numeric) → datetime` | FAIL (0/1) | FAIL (0/1) | [RESULT_MISMATCH](#fail-op_sub__date_minus_int_days-TDS) |  |
| 🟢 | `-` | `-(numeric, numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `-` | `-(pg_lsn, numeric) → pg_lsn` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-op_sub__pg_lsn_minus_numeric-TDS) |  |
| 🟡 | `/` | `/(numeric, numeric) → numeric` | PARTIAL (4/7) | PARTIAL (4/7) | [RESULT_MISMATCH](#fail-op_div__int__truncates_toward_zero-TDS), [MISC](#fail-op_div__by_zero__error-TDS) |  |
| ⚪ | `/` | `/(datetime, numeric) → datetime` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-op_div__interval_by_numeric-TDS) | Unsupported feature |
| ⚪ | `<<` | `<<(numeric, numeric) → numeric` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-op_bitshl__int__basic-TDS) | Unsupported feature |
| ⚪ | `>>` | `>>(numeric, numeric) → numeric` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-op_bitshr__int__basic-TDS) | Unsupported feature |
| ⚪ | `@` | `@(-, numeric) → numeric` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-op_abs__int__prefix-TDS) |  |
| 🟢 | `^` | `^(numeric, numeric) → numeric` | PASS (3/3) | PASS (3/3) |  |  |
| ⚪ | `|` | `|(numeric, numeric) → numeric` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-op_bitor__int__basic-TDS) | Unsupported feature |
| ⚪ | `|/` | `|/(-, numeric) → numeric` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-op_sqrt__dp__basic-TDS) |  |
| ⚪ | `||/` | `||/(-, numeric) → numeric` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-op_cbrt__dp__basic-TDS) |  |
| ⚪ | `~` | `~(-, numeric) → numeric` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-op_bitnot__int__basic-TDS) |  |

## String Operators (9.4)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-string.html)

| | Operator | Signature | TDS | Relation | Error Category | Notes |
|--|---|---|---|---|---|---|
| ⚪ | `!~` | `!~(bpchar, text) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-regex_not_match__bpchar__basic-TDS) | Unsupported feature |
| ⚪ | `!~` | `!~(name, text) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-regex_not_match__name__basic-TDS) |  |
| 🟢 | `!~` | `!~(text, text) → bool` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `!~*` | `!~*(bpchar, text) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-regex_not_match_ci__bpchar__basic-TDS) | Unsupported feature |
| ⚪ | `!~*` | `!~*(name, text) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-regex_not_match_ci__name__basic-TDS) |  |
| 🟢 | `!~*` | `!~*(text, text) → bool` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `!~~` | `!~~(bpchar, text) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-not_like__bpchar__basic-TDS) | Unsupported feature |
| ⚪ | `!~~` | `!~~(name, text) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-not_like__name__basic-TDS) |  |
| 🟢 | `!~~` | `!~~(text, text) → bool` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `!~~*` | `!~~*(bpchar, text) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-not_ilike__bpchar__basic-TDS) | Unsupported feature |
| ⚪ | `!~~*` | `!~~*(name, text) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-not_ilike__name__basic-TDS) |  |
| 🟢 | `!~~*` | `!~~*(text, text) → bool` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `@@` | `@@(text, text) → bool` | UNTESTED | UNTESTED | [MISC](#fail-text_fts_match_op-TDS) |  |
| ⚪ | `^@` | `^@(text, text) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-text_starts_with_op-TDS) |  |
| 🟢 | `||` | `||(anynonarray, text) → text` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `||` | `||(text, anynonarray) → text` | PASS (1/1) | PASS (1/1) |  |  |
| 🟡 | `||` | `||(text, text) → text` | FAIL (0/1) | PASS (1/1) | [RESULT_MISMATCH](#fail-concat_op__txt_txt__from_table-TDS) |  |
| ⚪ | `~` | `~(bpchar, text) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-regex_match__bpchar__basic-TDS) | Unsupported feature |
| ⚪ | `~` | `~(name, text) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-regex_match__name__basic-TDS) |  |
| 🟢 | `~` | `~(text, text) → bool` | PASS (5/5) | PASS (5/5) |  |  |
| ⚪ | `~*` | `~*(bpchar, text) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-regex_match_ci__bpchar__basic-TDS) | Unsupported feature |
| ⚪ | `~*` | `~*(name, text) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-regex_match_ci__name__basic-TDS) |  |
| 🟢 | `~*` | `~*(text, text) → bool` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `~<=~` | `~<=~(bpchar, bpchar) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-bpchar_lte-TDS) |  |
| ⚪ | `~<=~` | `~<=~(text, text) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-text_lte_lexcompare-TDS) |  |
| ⚪ | `~<~` | `~<~(bpchar, bpchar) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-bpchar_lt-TDS) |  |
| ⚪ | `~<~` | `~<~(text, text) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-text_lt_lexcompare-TDS) |  |
| ⚪ | `~>=~` | `~>=~(bpchar, bpchar) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-bpchar_gte-TDS) |  |
| ⚪ | `~>=~` | `~>=~(text, text) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-text_gte_lexcompare-TDS) |  |
| ⚪ | `~>~` | `~>~(bpchar, bpchar) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-bpchar_gt-TDS) |  |
| ⚪ | `~>~` | `~>~(text, text) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-text_gt_lexcompare-TDS) |  |
| ⚪ | `~~` | `~~(bpchar, text) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-like__bpchar__basic-TDS) | Unsupported feature |
| ⚪ | `~~` | `~~(name, text) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-like__name__basic-TDS) |  |
| 🟢 | `~~` | `~~(text, text) → bool` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `~~*` | `~~*(bpchar, text) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-ilike__bpchar__basic-TDS) | Unsupported feature |
| ⚪ | `~~*` | `~~*(name, text) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-ilike__name__basic-TDS) |  |
| 🟢 | `~~*` | `~~*(text, text) → bool` | PASS (1/1) | PASS (1/1) |  |  |

## Bit String Operators (9.6)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-bitstring.html)

| | Operator | Signature | TDS | Relation | Error Category | Notes |
|--|---|---|---|---|---|---|
| ⚪ | `#` | `#(bit, bit) → bit` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-bit_xor-TDS) | Unsupported feature |
| ⚪ | `&` | `&(bit, bit) → bit` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-bit_and-TDS) | Unsupported feature |
| ⚪ | `<` | `<(bit, bit) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-bit_lt-TDS) | Unsupported feature |
| ⚪ | `<` | `<(varbit, varbit) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-varbit_lt-TDS) | Unsupported feature |
| ⚪ | `<<` | `<<(bit, int4) → bit` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-bit_shift_left-TDS) | Unsupported feature |
| ⚪ | `<=` | `<=(bit, bit) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-bit_lte-TDS) | Unsupported feature |
| ⚪ | `<=` | `<=(varbit, varbit) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-varbit_lte-TDS) | Unsupported feature |
| ⚪ | `<>` | `<>(bit, bit) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-bit_neq-TDS) | Unsupported feature |
| ⚪ | `<>` | `<>(varbit, varbit) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-varbit_neq-TDS) | Unsupported feature |
| ⚪ | `=` | `=(bit, bit) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-bit_eq-TDS) | Unsupported feature |
| ⚪ | `=` | `=(varbit, varbit) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-varbit_eq-TDS) | Unsupported feature |
| ⚪ | `>` | `>(bit, bit) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-bit_gt-TDS) | Unsupported feature |
| ⚪ | `>` | `>(varbit, varbit) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-varbit_gt-TDS) | Unsupported feature |
| ⚪ | `>=` | `>=(bit, bit) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-bit_gte-TDS) | Unsupported feature |
| ⚪ | `>=` | `>=(varbit, varbit) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-varbit_gte-TDS) | Unsupported feature |
| ⚪ | `>>` | `>>(bit, int4) → bit` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-bit_shift_right-TDS) | Unsupported feature |
| ⚪ | `|` | `|(bit, bit) → bit` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-bit_or-TDS) | Unsupported feature |
| ⚪ | `||` | `||(varbit, varbit) → varbit` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-bit_concat-TDS) | Unsupported feature |
| ⚪ | `~` | `~(-, bit) → bit` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-bit_not-TDS) |  |

## Array Operators (9.19)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-array.html)

| | Operator | Signature | TDS | Relation | Error Category | Notes |
|--|---|---|---|---|---|---|
| ⚪ | `#-` | `#-(jsonb, anyarray) → jsonb` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-jsonb_delete_path_column-TDS) |  |
| 🔴 | `#>` | `#>(json, anyarray) → json` | UNTESTED | FAIL (0/1) | [TYPE_ERROR](#fail-json_hash_arrow_path-TDS), [RESULT_MISMATCH](#fail-json_hash_arrow_path-Relation) |  |
| 🔴 | `#>` | `#>(jsonb, anyarray) → jsonb` | UNTESTED | FAIL (0/1) | [TYPE_ERROR](#fail-jsonb_hash_arrow_path-TDS), [RESULT_MISMATCH](#fail-jsonb_hash_arrow_path-Relation) |  |
| 🟡 | `#>>` | `#>>(json, anyarray) → text` | UNTESTED | PASS (1/1) | [TYPE_ERROR](#fail-json_hash_arrow_text_path-TDS) |  |
| 🟡 | `#>>` | `#>>(jsonb, anyarray) → text` | UNTESTED | PASS (1/1) | [TYPE_ERROR](#fail-jsonb_hash_arrow_text_path-TDS) |  |
| ⚪ | `&&` | `&&(anyarray, anyarray) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-array_overlap-TDS) |  |
| ⚪ | `+` | `+(anyarray, aclitem) → _aclitem` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-aclitem_array_append-TDS) |  |
| ⚪ | `-` | `-(anyarray, aclitem) → _aclitem` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-aclitem_array_remove-TDS) |  |
| ⚪ | `-` | `-(jsonb, anyarray) → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_delete_keys-TDS), [UNSUPPORTED_SYNTAX](#fail-jsonb_delete_keys-Relation) | Unsupported feature |
| ⚪ | `<` | `<(anyarray, anyarray) → bool` | UNTESTED | UNTESTED | [MISC](#fail-array_lt-TDS) |  |
| 🟡 | `<=` | `<=(anyarray, anyarray) → bool` | PASS (1/1) | UNTESTED | [MISC](#fail-array_lte-Relation) |  |
| 🟡 | `<>` | `<>(anyarray, anyarray) → bool` | PASS (1/1) | UNTESTED | [MISC](#fail-array_neq-Relation) |  |
| ⚪ | `<@` | `<@(anyarray, anyarray) → bool` | UNTESTED | UNTESTED | [MISC](#fail-array_contained_by-TDS) |  |
| 🟡 | `=` | `=(anyarray, anyarray) → bool` | PASS (1/1) | UNTESTED | [MISC](#fail-array_eq-Relation) |  |
| 🔴 | `>` | `>(anyarray, anyarray) → bool` | FAIL (0/1) | UNTESTED | [RESULT_MISMATCH](#fail-array_gt-TDS), [MISC](#fail-array_gt-Relation) |  |
| 🟡 | `>=` | `>=(anyarray, anyarray) → bool` | PASS (1/1) | UNTESTED | [MISC](#fail-array_gte-Relation) |  |
| ⚪ | `?&` | `?&(jsonb, anyarray) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-jsonb_exists_all-TDS), [MISC](#fail-jsonb_exists_all-Relation) |  |
| ⚪ | `?|` | `?|(jsonb, anyarray) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-jsonb_exists_any-TDS) | Unsupported feature |
| ⚪ | `@>` | `@>(anyarray, aclitem) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-aclitem_array_contains-TDS) |  |
| ⚪ | `@>` | `@>(anyarray, anyarray) → bool` | UNTESTED | UNTESTED | [MISC](#fail-array_contains-TDS) |  |

## Range/Multirange Operators (9.19)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/rangetypes.html)

| | Operator | Signature | TDS | Relation | Error Category | Notes |
|--|---|---|---|---|---|---|
| ⚪ | `&&` | `&&(anymultirange, anymultirange) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-range_overlap__multirange_multirange-TDS) |  |
| ⚪ | `&&` | `&&(anymultirange, anyrange) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-range_overlap__multirange_range-TDS) |  |
| ⚪ | `&&` | `&&(anyrange, anymultirange) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-range_overlap__range_multirange-TDS) |  |
| ⚪ | `&&` | `&&(anyrange, anyrange) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-range_overlap__range_range-TDS) |  |
| ⚪ | `&<` | `&<(anymultirange, anymultirange) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-range_not_extend_right__multirange_multirange-TDS) |  |
| ⚪ | `&<` | `&<(anymultirange, anyrange) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-range_not_extend_right__multirange_range-TDS) |  |
| ⚪ | `&<` | `&<(anyrange, anymultirange) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-range_not_extend_right__range_multirange-TDS) |  |
| ⚪ | `&<` | `&<(anyrange, anyrange) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-range_not_extend_right__range_range-TDS) |  |
| ⚪ | `&>` | `&>(anymultirange, anymultirange) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-range_not_extend_left__multirange_multirange-TDS) |  |
| ⚪ | `&>` | `&>(anymultirange, anyrange) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-range_not_extend_left__multirange_range-TDS) |  |
| ⚪ | `&>` | `&>(anyrange, anymultirange) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-range_not_extend_left__range_multirange-TDS) |  |
| ⚪ | `&>` | `&>(anyrange, anyrange) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-range_not_extend_left__range_range-TDS) |  |
| ⚪ | `*` | `*(anymultirange, anymultirange) → anymultirange` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_intersect__multirange_multirange-TDS) | Operator not supported |
| ⚪ | `*` | `*(anyrange, anyrange) → anyrange` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_intersect__range_range-TDS) | Operator not supported |
| ⚪ | `+` | `+(anymultirange, anymultirange) → anymultirange` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_union__multirange_multirange-TDS) | Operator not supported |
| ⚪ | `+` | `+(anyrange, anyrange) → anyrange` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_union__range_range-TDS) | Operator not supported |
| ⚪ | `-` | `-(anymultirange, anymultirange) → anymultirange` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_diff__multirange_multirange-TDS) | Operator not supported |
| ⚪ | `-` | `-(anyrange, anyrange) → anyrange` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_diff__range_range-TDS) | Operator not supported |
| ⚪ | `-|-` | `-|-(anymultirange, anymultirange) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-range_adjacent__multirange_multirange-TDS) |  |
| ⚪ | `-|-` | `-|-(anymultirange, anyrange) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-range_adjacent__multirange_range-TDS) |  |
| ⚪ | `-|-` | `-|-(anyrange, anymultirange) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-range_adjacent__range_multirange-TDS) |  |
| ⚪ | `-|-` | `-|-(anyrange, anyrange) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-range_adjacent__range_range-TDS) |  |
| ⚪ | `<` | `<(anymultirange, anymultirange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-multirange_lt-TDS) | Operator not supported |
| ⚪ | `<` | `<(anyrange, anyrange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_lt-TDS) | Operator not supported |
| ⚪ | `<<` | `<<(anymultirange, anymultirange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_strictly_left__multirange_multirange-TDS) | Operator not supported |
| ⚪ | `<<` | `<<(anymultirange, anyrange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_strictly_left__multirange_range-TDS) | Operator not supported |
| ⚪ | `<<` | `<<(anyrange, anymultirange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_strictly_left__range_multirange-TDS) | Operator not supported |
| ⚪ | `<<` | `<<(anyrange, anyrange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_strictly_left__range_range-TDS) | Operator not supported |
| ⚪ | `<=` | `<=(anymultirange, anymultirange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-multirange_lte-TDS) | Operator not supported |
| ⚪ | `<=` | `<=(anyrange, anyrange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_lte-TDS) | Operator not supported |
| ⚪ | `<>` | `<>(anymultirange, anymultirange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-multirange_neq-TDS) | Operator not supported |
| ⚪ | `<>` | `<>(anyrange, anyrange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_neq-TDS) | Operator not supported |
| ⚪ | `<@` | `<@(anyelement, anymultirange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_contained_by__element_multirange-TDS) | Operator not supported |
| ⚪ | `<@` | `<@(anyelement, anyrange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_contained_by__element_range-TDS) | Operator not supported |
| ⚪ | `<@` | `<@(anymultirange, anymultirange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_contained_by__multirange_multirange-TDS) | Operator not supported |
| ⚪ | `<@` | `<@(anymultirange, anyrange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_contained_by__multirange_range-TDS) | Operator not supported |
| ⚪ | `<@` | `<@(anyrange, anymultirange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_contained_by__range_multirange-TDS) | Operator not supported |
| ⚪ | `<@` | `<@(anyrange, anyrange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_contained_by__range_range-TDS) | Operator not supported |
| ⚪ | `=` | `=(anymultirange, anymultirange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-multirange_eq-TDS) | Operator not supported |
| ⚪ | `=` | `=(anyrange, anyrange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_eq-TDS) | Operator not supported |
| ⚪ | `>` | `>(anymultirange, anymultirange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-multirange_gt-TDS) | Operator not supported |
| ⚪ | `>` | `>(anyrange, anyrange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_gt-TDS) | Operator not supported |
| ⚪ | `>=` | `>=(anymultirange, anymultirange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-multirange_gte-TDS) | Operator not supported |
| ⚪ | `>=` | `>=(anyrange, anyrange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_gte-TDS) | Operator not supported |
| ⚪ | `>>` | `>>(anymultirange, anymultirange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_strictly_right__multirange_multirange-TDS) | Operator not supported |
| ⚪ | `>>` | `>>(anymultirange, anyrange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_strictly_right__multirange_range-TDS) | Operator not supported |
| ⚪ | `>>` | `>>(anyrange, anymultirange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_strictly_right__range_multirange-TDS) | Operator not supported |
| ⚪ | `>>` | `>>(anyrange, anyrange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_strictly_right__range_range-TDS) | Operator not supported |
| ⚪ | `@>` | `@>(anymultirange, anyelement) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_contains__multirange_element-TDS) | Operator not supported |
| ⚪ | `@>` | `@>(anymultirange, anymultirange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_contains__multirange_multirange-TDS) | Operator not supported |
| ⚪ | `@>` | `@>(anymultirange, anyrange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_contains__multirange_range-TDS) | Operator not supported |
| ⚪ | `@>` | `@>(anyrange, anyelement) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_contains__range_element-TDS) | Operator not supported |
| ⚪ | `@>` | `@>(anyrange, anymultirange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_contains__range_multirange-TDS) | Operator not supported |
| ⚪ | `@>` | `@>(anyrange, anyrange) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_contains__range_range-TDS) | Operator not supported |

## JSON/JSONB Operators (9.16)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-json.html)

| | Operator | Signature | TDS | Relation | Error Category | Notes |
|--|---|---|---|---|---|---|
| ⚪ | `-` | `-(jsonb, int4) → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_delete_index-TDS), [UNSUPPORTED_SYNTAX](#fail-jsonb_delete_index-Relation) | Unsupported feature |
| ⚪ | `-` | `-(jsonb, text) → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_delete_key_column-TDS), [UNSUPPORTED_SYNTAX](#fail-jsonb_delete_key_column-Relation) | Unsupported feature |
| 🔴 | `->` | `->(json, int4) → json` | UNTESTED | FAIL (0/1) | [TYPE_ERROR](#fail-json_arrow_get_index-TDS), [RESULT_MISMATCH](#fail-json_arrow_get_index-Relation) |  |
| 🟡 | `->` | `->(json, text) → json` | UNTESTED | PARTIAL (1/2) | [TYPE_ERROR](#fail-json_arrow_get_field-TDS), [RESULT_MISMATCH](#fail-json_arrow_get_field-Relation) |  |
| 🔴 | `->` | `->(jsonb, int4) → jsonb` | UNTESTED | FAIL (0/1) | [TYPE_ERROR](#fail-jsonb_arrow_get_index-TDS), [RESULT_MISMATCH](#fail-jsonb_arrow_get_index-Relation) |  |
| 🟡 | `->` | `->(jsonb, text) → jsonb` | UNTESTED | PARTIAL (1/2) | [TYPE_ERROR](#fail-jsonb_arrow_get_field-TDS), [RESULT_MISMATCH](#fail-jsonb_arrow_get_field-Relation) |  |
| 🟡 | `->>` | `->>(json, int4) → text` | UNTESTED | PASS (1/1) | [TYPE_ERROR](#fail-json_arrow_text_get_index-TDS) |  |
| 🟡 | `->>` | `->>(json, text) → text` | UNTESTED | PASS (1/1) | [TYPE_ERROR](#fail-json_arrow_text_get_field-TDS) |  |
| 🟡 | `->>` | `->>(jsonb, int4) → text` | UNTESTED | PASS (1/1) | [TYPE_ERROR](#fail-jsonb_arrow_text_get_index-TDS) |  |
| 🟡 | `->>` | `->>(jsonb, text) → text` | UNTESTED | PASS (1/1) | [TYPE_ERROR](#fail-jsonb_arrow_text_get_field-TDS) |  |
| ⚪ | `<` | `<(jsonb, jsonb) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-jsonb_lt-TDS), [MISC](#fail-jsonb_lt-Relation) |  |
| ⚪ | `<=` | `<=(jsonb, jsonb) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-jsonb_lte-TDS), [MISC](#fail-jsonb_lte-Relation) |  |
| ⚪ | `<>` | `<>(jsonb, jsonb) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-jsonb_neq-TDS), [MISC](#fail-jsonb_neq-Relation) |  |
| ⚪ | `<@` | `<@(jsonb, jsonb) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-jsonb_contained_by_column-TDS), [MISC](#fail-jsonb_contained_by_column-Relation) |  |
| ⚪ | `=` | `=(jsonb, jsonb) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-jsonb_eq-TDS), [MISC](#fail-jsonb_eq-Relation) |  |
| ⚪ | `>` | `>(jsonb, jsonb) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-jsonb_gt-TDS), [MISC](#fail-jsonb_gt-Relation) |  |
| ⚪ | `>=` | `>=(jsonb, jsonb) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-jsonb_gte-TDS), [MISC](#fail-jsonb_gte-Relation) |  |
| ⚪ | `?` | `?(jsonb, text) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-jsonb_exists_key-TDS) | Unsupported feature |
| ⚪ | `@>` | `@>(jsonb, jsonb) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-jsonb_contains-TDS) |  |
| ⚪ | `@?` | `@?(jsonb, jsonpath) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-jsonb_path_exists_op-TDS) |  |
| ⚪ | `@@` | `@@(jsonb, jsonpath) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-jsonb_path_match_op-TDS) |  |
| ⚪ | `||` | `||(jsonb, jsonb) → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_concat-TDS), [UNSUPPORTED_SYNTAX](#fail-jsonb_concat-Relation) | Unsupported feature |

## Network Address Operators (9.12)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-net.html)

| | Operator | Signature | TDS | Relation | Error Category | Notes |
|--|---|---|---|---|---|---|
| ⚪ | `&` | `&(inet, inet) → inet` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-inet_and-TDS) |  |
| ⚪ | `&` | `&(macaddr, macaddr) → macaddr` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-macaddr_and-TDS) |  |
| ⚪ | `&` | `&(macaddr8, macaddr8) → macaddr8` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-macaddr8_and-TDS) |  |
| ⚪ | `&&` | `&&(inet, inet) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-inet_overlap-TDS) |  |
| ⚪ | `+` | `+(inet, int8) → inet` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-inet_plus_bigint-TDS) |  |
| ⚪ | `+` | `+(int8, inet) → inet` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-bigint_plus_inet-TDS) |  |
| ⚪ | `-` | `-(inet, inet) → int8` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-inet_minus_inet-TDS) |  |
| ⚪ | `-` | `-(inet, int8) → inet` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-inet_minus_bigint-TDS) |  |
| ⚪ | `<` | `<(inet, inet) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-inet_lt-TDS) |  |
| ⚪ | `<` | `<(macaddr, macaddr) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-macaddr_lt-TDS) |  |
| ⚪ | `<` | `<(macaddr8, macaddr8) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-macaddr8_lt-TDS) |  |
| ⚪ | `<<` | `<<(inet, inet) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-inet_subnet_or_eq-TDS) |  |
| ⚪ | `<<=` | `<<=(inet, inet) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-inet_subnet_or_eq2-TDS) |  |
| ⚪ | `<=` | `<=(inet, inet) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-inet_lte-TDS) |  |
| ⚪ | `<=` | `<=(macaddr, macaddr) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-macaddr_lte-TDS) |  |
| ⚪ | `<=` | `<=(macaddr8, macaddr8) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-macaddr8_lte-TDS) |  |
| ⚪ | `<>` | `<>(inet, inet) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-inet_neq-TDS) |  |
| ⚪ | `<>` | `<>(macaddr, macaddr) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-macaddr_neq-TDS) |  |
| ⚪ | `<>` | `<>(macaddr8, macaddr8) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-macaddr8_neq-TDS) |  |
| ⚪ | `=` | `=(inet, inet) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-inet_eq-TDS) |  |
| ⚪ | `=` | `=(macaddr, macaddr) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-macaddr_eq-TDS) |  |
| ⚪ | `=` | `=(macaddr8, macaddr8) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-macaddr8_eq-TDS) |  |
| ⚪ | `>` | `>(inet, inet) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-inet_gt-TDS) |  |
| ⚪ | `>` | `>(macaddr, macaddr) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-macaddr_gt-TDS) |  |
| ⚪ | `>` | `>(macaddr8, macaddr8) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-macaddr8_gt-TDS) |  |
| ⚪ | `>=` | `>=(inet, inet) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-inet_gte-TDS) |  |
| ⚪ | `>=` | `>=(macaddr, macaddr) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-macaddr_gte-TDS) |  |
| ⚪ | `>=` | `>=(macaddr8, macaddr8) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-macaddr8_gte-TDS) |  |
| ⚪ | `>>` | `>>(inet, inet) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-inet_supernet-TDS) |  |
| ⚪ | `>>=` | `>>=(inet, inet) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-inet_supernet_or_eq-TDS) |  |
| ⚪ | `|` | `|(inet, inet) → inet` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-inet_or-TDS) |  |
| ⚪ | `|` | `|(macaddr, macaddr) → macaddr` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-macaddr_or-TDS) |  |
| ⚪ | `|` | `|(macaddr8, macaddr8) → macaddr8` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-macaddr8_or-TDS) |  |
| ⚪ | `~` | `~(-, inet) → inet` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-inet_not-TDS) |  |
| ⚪ | `~` | `~(-, macaddr) → macaddr` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-macaddr_not-TDS) |  |
| ⚪ | `~` | `~(-, macaddr8) → macaddr8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-macaddr8_not-TDS) |  |

## Geometric Operators (9.11)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-geometry.html)

| | Operator | Signature | TDS | Relation | Error Category | Notes |
|--|---|---|---|---|---|---|
| ⚪ | `#` | `#(-, path) → int4` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_hash__path_npoints-TDS) |  |
| ⚪ | `#` | `#(-, polygon) → int4` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_hash__polygon_npoints-TDS) |  |
| ⚪ | `#` | `#(box, box) → box` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_hash__box_intersection-TDS) |  |
| ⚪ | `#` | `#(line, line) → point` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_hash__line_intersection-TDS) |  |
| ⚪ | `#` | `#(lseg, lseg) → point` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_hash__lseg_intersection-TDS) |  |
| ⚪ | `##` | `##(line, lseg) → point` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_hashhash__line_lseg-TDS) |  |
| ⚪ | `##` | `##(lseg, box) → point` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_hashhash__lseg_box-TDS) |  |
| ⚪ | `##` | `##(lseg, lseg) → point` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_hashhash__lseg_lseg-TDS) |  |
| ⚪ | `##` | `##(point, box) → point` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_hashhash__point_box-TDS) |  |
| ⚪ | `##` | `##(point, line) → point` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_hashhash__point_line-TDS) |  |
| ⚪ | `##` | `##(point, lseg) → point` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_hashhash__point_lseg-TDS) |  |
| ⚪ | `&&` | `&&(box, box) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_overlap__box_box-TDS) |  |
| ⚪ | `&&` | `&&(circle, circle) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_overlap__circle_circle-TDS) |  |
| ⚪ | `&&` | `&&(polygon, polygon) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_overlap__polygon_polygon-TDS) |  |
| ⚪ | `&<` | `&<(box, box) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_notright__box_box-TDS) |  |
| ⚪ | `&<` | `&<(circle, circle) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_notright__circle_circle-TDS) |  |
| ⚪ | `&<` | `&<(polygon, polygon) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_notright__polygon_polygon-TDS) |  |
| ⚪ | `&<|` | `&<|(box, box) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_notabove__box_box-TDS) |  |
| ⚪ | `&<|` | `&<|(circle, circle) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_notabove__circle_circle-TDS) |  |
| ⚪ | `&<|` | `&<|(polygon, polygon) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_notabove__polygon_polygon-TDS) |  |
| ⚪ | `&>` | `&>(box, box) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_notleft__box_box-TDS) |  |
| ⚪ | `&>` | `&>(circle, circle) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_notleft__circle_circle-TDS) |  |
| ⚪ | `&>` | `&>(polygon, polygon) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_notleft__polygon_polygon-TDS) |  |
| ⚪ | `*` | `*(box, point) → box` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_mul__box_point-TDS) |  |
| ⚪ | `*` | `*(circle, point) → circle` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_mul__circle_point-TDS) |  |
| ⚪ | `*` | `*(path, point) → path` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_mul__path_point-TDS) |  |
| ⚪ | `*` | `*(point, point) → point` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_mul__point_point-TDS) |  |
| ⚪ | `+` | `+(box, point) → box` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_add__box_point-TDS) |  |
| ⚪ | `+` | `+(circle, point) → circle` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_add__circle_point-TDS) |  |
| ⚪ | `+` | `+(path, path) → path` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_add__path_path-TDS) |  |
| ⚪ | `+` | `+(path, point) → path` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_add__path_point-TDS) |  |
| ⚪ | `+` | `+(point, point) → point` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_add__point_point-TDS) |  |
| ⚪ | `-` | `-(box, point) → box` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_sub__box_point-TDS) |  |
| ⚪ | `-` | `-(circle, point) → circle` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_sub__circle_point-TDS) |  |
| ⚪ | `-` | `-(path, point) → path` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_sub__path_point-TDS) |  |
| ⚪ | `-` | `-(point, point) → point` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_sub__point_point-TDS) |  |
| ⚪ | `/` | `/(box, point) → box` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_div__box_point-TDS) |  |
| ⚪ | `/` | `/(circle, point) → circle` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_div__circle_point-TDS) |  |
| ⚪ | `/` | `/(path, point) → path` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_div__path_point-TDS) |  |
| ⚪ | `/` | `/(point, point) → point` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_div__point_point-TDS) |  |
| ⚪ | `<` | `<(box, box) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_lt__box_box-TDS) |  |
| ⚪ | `<` | `<(circle, circle) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_lt__circle_circle-TDS) |  |
| ⚪ | `<` | `<(lseg, lseg) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_lt__lseg_lseg-TDS) |  |
| ⚪ | `<` | `<(path, path) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_lt__path_path-TDS) |  |
| ⚪ | `<->` | `<->(box, box) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__box_box-TDS) |  |
| ⚪ | `<->` | `<->(box, lseg) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__box_lseg-TDS) |  |
| ⚪ | `<->` | `<->(box, point) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__box_point-TDS) |  |
| ⚪ | `<->` | `<->(circle, circle) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__circle_circle-TDS) |  |
| ⚪ | `<->` | `<->(circle, point) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__circle_point-TDS) |  |
| ⚪ | `<->` | `<->(circle, polygon) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__circle_polygon-TDS) |  |
| ⚪ | `<->` | `<->(line, line) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__line_line-TDS) |  |
| ⚪ | `<->` | `<->(line, lseg) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__line_lseg-TDS) |  |
| ⚪ | `<->` | `<->(line, point) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__line_point-TDS) |  |
| ⚪ | `<->` | `<->(lseg, box) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__lseg_box-TDS) |  |
| ⚪ | `<->` | `<->(lseg, line) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__lseg_line-TDS) |  |
| ⚪ | `<->` | `<->(lseg, lseg) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__lseg_lseg-TDS) |  |
| ⚪ | `<->` | `<->(lseg, point) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__lseg_point-TDS) |  |
| ⚪ | `<->` | `<->(path, path) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__path_path-TDS) |  |
| ⚪ | `<->` | `<->(path, point) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__path_point-TDS) |  |
| ⚪ | `<->` | `<->(point, box) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__point_box-TDS) |  |
| ⚪ | `<->` | `<->(point, circle) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__point_circle-TDS) |  |
| ⚪ | `<->` | `<->(point, line) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__point_line-TDS) |  |
| ⚪ | `<->` | `<->(point, lseg) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__point_lseg-TDS) |  |
| ⚪ | `<->` | `<->(point, path) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__point_path-TDS) |  |
| ⚪ | `<->` | `<->(point, point) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__point_point-TDS) |  |
| ⚪ | `<->` | `<->(point, polygon) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__point_polygon-TDS) |  |
| ⚪ | `<->` | `<->(polygon, circle) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__polygon_circle-TDS) |  |
| ⚪ | `<->` | `<->(polygon, point) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__polygon_point-TDS) |  |
| ⚪ | `<->` | `<->(polygon, polygon) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_dist__polygon_polygon-TDS) |  |
| ⚪ | `<<` | `<<(box, box) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_strictly_left__box_box-TDS) |  |
| ⚪ | `<<` | `<<(circle, circle) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_strictly_left__circle_circle-TDS) |  |
| ⚪ | `<<` | `<<(point, point) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_strictly_left__point_point-TDS) |  |
| ⚪ | `<<` | `<<(polygon, polygon) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_strictly_left__polygon_polygon-TDS) |  |
| ⚪ | `<<|` | `<<|(box, box) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_strictly_below__box_box-TDS) |  |
| ⚪ | `<<|` | `<<|(circle, circle) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_strictly_below__circle_circle-TDS) |  |
| ⚪ | `<<|` | `<<|(point, point) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_strictly_below__point_point-TDS) |  |
| ⚪ | `<<|` | `<<|(polygon, polygon) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_strictly_below__polygon_polygon-TDS) |  |
| ⚪ | `<=` | `<=(box, box) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_lte__box_box-TDS) |  |
| ⚪ | `<=` | `<=(circle, circle) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_lte__circle_circle-TDS) |  |
| ⚪ | `<=` | `<=(lseg, lseg) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_lte__lseg_lseg-TDS) |  |
| ⚪ | `<=` | `<=(path, path) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_lte__path_path-TDS) |  |
| ⚪ | `<>` | `<>(circle, circle) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_neq__circle_circle-TDS) |  |
| ⚪ | `<>` | `<>(lseg, lseg) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_neq__lseg_lseg-TDS) |  |
| ⚪ | `<>` | `<>(point, point) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_neq__point_point-TDS) |  |
| ⚪ | `<@` | `<@(box, box) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_contained_by__box_box-TDS) |  |
| ⚪ | `<@` | `<@(circle, circle) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_contained_by__circle_circle-TDS) |  |
| ⚪ | `<@` | `<@(lseg, box) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_contained_by__lseg_box-TDS) |  |
| ⚪ | `<@` | `<@(lseg, line) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_contained_by__lseg_line-TDS) |  |
| ⚪ | `<@` | `<@(point, box) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_contained_by__point_box-TDS) |  |
| ⚪ | `<@` | `<@(point, circle) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_contained_by__point_circle-TDS) |  |
| ⚪ | `<@` | `<@(point, line) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_contained_by__point_line-TDS) |  |
| ⚪ | `<@` | `<@(point, lseg) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_contained_by__point_lseg-TDS) |  |
| ⚪ | `<@` | `<@(point, path) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_contained_by__point_path-TDS) |  |
| ⚪ | `<@` | `<@(point, polygon) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_contained_by__point_polygon-TDS) |  |
| ⚪ | `<@` | `<@(polygon, polygon) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_contained_by__polygon_polygon-TDS) |  |
| ⚪ | `<^` | `<^(box, box) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_below_or_left__box_box-TDS) |  |
| ⚪ | `<^` | `<^(point, point) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_below_or_left__point_point-TDS) |  |
| ⚪ | `=` | `=(box, box) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_eq__box_box-TDS) |  |
| ⚪ | `=` | `=(circle, circle) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_eq__circle_circle-TDS) |  |
| ⚪ | `=` | `=(line, line) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_eq__line_line-TDS) |  |
| ⚪ | `=` | `=(lseg, lseg) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_eq__lseg_lseg-TDS) |  |
| ⚪ | `=` | `=(path, path) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_eq__path_path-TDS) |  |
| ⚪ | `>` | `>(box, box) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_gt__box_box-TDS) |  |
| ⚪ | `>` | `>(circle, circle) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_gt__circle_circle-TDS) |  |
| ⚪ | `>` | `>(lseg, lseg) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_gt__lseg_lseg-TDS) |  |
| ⚪ | `>` | `>(path, path) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_gt__path_path-TDS) |  |
| ⚪ | `>=` | `>=(box, box) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_gte__box_box-TDS) |  |
| ⚪ | `>=` | `>=(circle, circle) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_gte__circle_circle-TDS) |  |
| ⚪ | `>=` | `>=(lseg, lseg) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_gte__lseg_lseg-TDS) |  |
| ⚪ | `>=` | `>=(path, path) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_gte__path_path-TDS) |  |
| ⚪ | `>>` | `>>(box, box) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_strictly_right__box_box-TDS) |  |
| ⚪ | `>>` | `>>(circle, circle) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_strictly_right__circle_circle-TDS) |  |
| ⚪ | `>>` | `>>(point, point) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_strictly_right__point_point-TDS) |  |
| ⚪ | `>>` | `>>(polygon, polygon) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_strictly_right__polygon_polygon-TDS) |  |
| ⚪ | `>^` | `>^(box, box) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_above_or_right__box_box-TDS) |  |
| ⚪ | `>^` | `>^(point, point) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_above_or_right__point_point-TDS) |  |
| ⚪ | `?#` | `?#(box, box) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_intersects__box_box-TDS) |  |
| ⚪ | `?#` | `?#(line, box) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_intersects__line_box-TDS) |  |
| ⚪ | `?#` | `?#(line, line) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_intersects__line_line-TDS) |  |
| ⚪ | `?#` | `?#(lseg, box) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_intersects__lseg_box-TDS) |  |
| ⚪ | `?#` | `?#(lseg, line) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_intersects__lseg_line-TDS) |  |
| ⚪ | `?#` | `?#(lseg, lseg) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_intersects__lseg_lseg-TDS) |  |
| ⚪ | `?#` | `?#(path, path) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_intersects__path_path-TDS) |  |
| ⚪ | `?-` | `?-(-, line) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_horizontal__line-TDS) |  |
| ⚪ | `?-` | `?-(-, lseg) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_horizontal__lseg-TDS) |  |
| ⚪ | `?-` | `?-(point, point) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-geo_horizontal__point_point-TDS) | Unsupported feature |
| ⚪ | `?-|` | `?-|(line, line) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_perpendicular__line_line-TDS) |  |
| ⚪ | `?-|` | `?-|(lseg, lseg) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_perpendicular__lseg_lseg-TDS) |  |
| ⚪ | `?|` | `?|(-, line) → bool` | UNTESTED | UNTESTED | [MISC](#fail-geo_vertical__line-TDS) |  |
| ⚪ | `?|` | `?|(-, lseg) → bool` | UNTESTED | UNTESTED | [MISC](#fail-geo_vertical__lseg-TDS) |  |
| ⚪ | `?|` | `?|(point, point) → bool` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-geo_vertical__point_point-TDS) | Unsupported feature |
| ⚪ | `?||` | `?||(line, line) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_parallel__line_line-TDS) |  |
| ⚪ | `?||` | `?||(lseg, lseg) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_parallel__lseg_lseg-TDS) |  |
| ⚪ | `@-@` | `@-@(-, lseg) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_length__lseg-TDS) |  |
| ⚪ | `@-@` | `@-@(-, path) → float8` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_length__path-TDS) |  |
| ⚪ | `@>` | `@>(box, box) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_contains__box_box-TDS) |  |
| ⚪ | `@>` | `@>(box, point) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_contains__box_point-TDS) |  |
| ⚪ | `@>` | `@>(circle, circle) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_contains__circle_circle-TDS) |  |
| ⚪ | `@>` | `@>(circle, point) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_contains__circle_point-TDS) |  |
| ⚪ | `@>` | `@>(path, point) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_contains__path_point-TDS) |  |
| ⚪ | `@>` | `@>(polygon, point) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_contains__polygon_point-TDS) |  |
| ⚪ | `@>` | `@>(polygon, polygon) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-geo_contains__polygon_polygon-TDS) |  |
| ⚪ | `@@` | `@@(-, box) → point` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_center__box-TDS) |  |
| ⚪ | `@@` | `@@(-, circle) → point` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_center__circle-TDS) |  |
| ⚪ | `@@` | `@@(-, lseg) → point` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_center__lseg-TDS) |  |
| ⚪ | `@@` | `@@(-, polygon) → point` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_center__polygon-TDS) |  |
| ⚪ | `|&>` | `|&>(box, box) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_notabove2__box_box-TDS) |  |
| ⚪ | `|&>` | `|&>(circle, circle) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_notabove2__circle_circle-TDS) |  |
| ⚪ | `|&>` | `|&>(polygon, polygon) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_notabove2__polygon_polygon-TDS) |  |
| ⚪ | `|>>` | `|>>(box, box) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_strictly_above__box_box-TDS) |  |
| ⚪ | `|>>` | `|>>(circle, circle) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_strictly_above__circle_circle-TDS) |  |
| ⚪ | `|>>` | `|>>(point, point) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_strictly_above__point_point-TDS) |  |
| ⚪ | `|>>` | `|>>(polygon, polygon) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_strictly_above__polygon_polygon-TDS) |  |
| ⚪ | `~=` | `~=(box, box) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_same_as__box_box-TDS) |  |
| ⚪ | `~=` | `~=(circle, circle) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_same_as__circle_circle-TDS) |  |
| ⚪ | `~=` | `~=(point, point) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_same_as__point_point-TDS) |  |
| ⚪ | `~=` | `~=(polygon, polygon) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-geo_same_as__polygon_polygon-TDS) |  |

## Full Text Search Operators (9.13)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/textsearch.html)

| | Operator | Signature | TDS | Relation | Error Category | Notes |
|--|---|---|---|---|---|---|
| ⚪ | `!!` | `!!(-, tsquery) → tsquery` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-tsquery_negate-TDS) |  |
| ⚪ | `&&` | `&&(tsquery, tsquery) → tsquery` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-tsquery_and-TDS) |  |
| ⚪ | `<` | `<(tsquery, tsquery) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-tsquery_lt-TDS) | Operator not supported |
| ⚪ | `<` | `<(tsvector, tsvector) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-tsvector_lt-TDS) | Operator not supported |
| ⚪ | `<->` | `<->(tsquery, tsquery) → tsquery` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-tsquery_phrase-TDS) |  |
| ⚪ | `<=` | `<=(tsquery, tsquery) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-tsquery_lte-TDS) | Operator not supported |
| ⚪ | `<=` | `<=(tsvector, tsvector) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-tsvector_lte-TDS) | Operator not supported |
| ⚪ | `<>` | `<>(tsquery, tsquery) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-tsquery_neq-TDS) | Operator not supported |
| ⚪ | `<>` | `<>(tsvector, tsvector) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-tsvector_neq-TDS) | Operator not supported |
| ⚪ | `<@` | `<@(tsquery, tsquery) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-tsquery_contained_by-TDS) | Operator not supported |
| ⚪ | `=` | `=(tsquery, tsquery) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-tsquery_eq-TDS) | Operator not supported |
| ⚪ | `=` | `=(tsvector, tsvector) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-tsvector_eq-TDS) | Operator not supported |
| ⚪ | `>` | `>(tsquery, tsquery) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-tsquery_gt-TDS) | Operator not supported |
| ⚪ | `>` | `>(tsvector, tsvector) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-tsvector_gt-TDS) | Operator not supported |
| ⚪ | `>=` | `>=(tsquery, tsquery) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-tsquery_gte-TDS) | Operator not supported |
| ⚪ | `>=` | `>=(tsvector, tsvector) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-tsvector_gte-TDS) | Operator not supported |
| ⚪ | `@>` | `@>(tsquery, tsquery) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-tsquery_contains-TDS) | Operator not supported |
| ⚪ | `@@` | `@@(text, tsquery) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-fts_match_text_tsquery-TDS) | Operator not supported |
| ⚪ | `@@` | `@@(tsquery, tsvector) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-fts_match_tsquery_tsvector-TDS) | Operator not supported |
| ⚪ | `@@` | `@@(tsvector, tsquery) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-fts_match_tsvector_tsquery-TDS) | Operator not supported |
| ⚪ | `@@@` | `@@@(tsquery, tsvector) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-fts_match3_tsquery_tsvector-TDS) |  |
| ⚪ | `@@@` | `@@@(tsvector, tsquery) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-fts_match3_tsvector_tsquery-TDS) |  |
| ⚪ | `||` | `||(tsquery, tsquery) → tsquery` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-tsquery_or-TDS) | Operator not supported |
| ⚪ | `||` | `||(tsvector, tsvector) → tsvector` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-tsvector_concat-TDS) | Operator not supported |

## Other Operators

| | Operator | Signature | TDS | Relation | Error Category | Notes |
|--|---|---|---|---|---|---|
| ⚪ | `!~~` | `!~~(bytea, bytea) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-bytea_not_like-TDS) |  |
| ⚪ | `*<` | `*<(record, record) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-record_distinct_lt-TDS) |  |
| ⚪ | `*<=` | `*<=(record, record) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-record_distinct_lte-TDS) |  |
| ⚪ | `*<>` | `*<>(record, record) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-record_distinct_neq-TDS) |  |
| ⚪ | `*=` | `*=(record, record) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-record_distinct_eq-TDS) |  |
| ⚪ | `*>` | `*>(record, record) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-record_distinct_gt-TDS) |  |
| ⚪ | `*>=` | `*>=(record, record) → bool` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-record_distinct_gte-TDS) |  |
| 🟢 | `+` | `+(date, interval) → timestamp` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `+` | `+(date, time) → timestamp` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-op_add__date_plus_time-TDS) |  |
| ⚪ | `+` | `+(date, timetz) → timestamptz` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-op_add__date_plus_timetz-TDS) |  |
| ⚪ | `+` | `+(interval, date) → timestamp` | UNTESTED | UNTESTED | [MISC](#fail-op_add__interval_plus_date-TDS) |  |
| ⚪ | `+` | `+(interval, interval) → interval` | UNTESTED | UNTESTED | [MISC](#fail-op_add__interval_plus_interval-TDS) |  |
| ⚪ | `+` | `+(interval, time) → time` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-op_add__interval_plus_time-TDS) |  |
| ⚪ | `+` | `+(interval, timestamp) → timestamp` | UNTESTED | UNTESTED | [MISC](#fail-op_add__interval_plus_timestamp-TDS) |  |
| ⚪ | `+` | `+(interval, timestamptz) → timestamptz` | UNTESTED | UNTESTED | [MISC](#fail-op_add__interval_plus_timestamptz-TDS) |  |
| ⚪ | `+` | `+(interval, timetz) → timetz` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-op_add__interval_plus_timetz-TDS) |  |
| ⚪ | `+` | `+(time, date) → timestamp` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-op_add__time_plus_date-TDS) |  |
| ⚪ | `+` | `+(time, interval) → time` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-op_add__time_plus_interval-TDS) |  |
| 🟢 | `+` | `+(timestamp, interval) → timestamp` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `+` | `+(timestamptz, interval) → timestamptz` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `+` | `+(timetz, date) → timestamptz` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-op_add__timetz_plus_date-TDS) |  |
| ⚪ | `+` | `+(timetz, interval) → timetz` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-op_add__timetz_plus_interval-TDS) |  |
| ⚪ | `-` | `-(-, interval) → interval` | UNTESTED | UNTESTED | [MISC](#fail-op_unary_minus__interval-TDS) |  |
| 🟢 | `-` | `-(date, date) → int4` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `-` | `-(date, interval) → timestamp` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `-` | `-(interval, interval) → interval` | UNTESTED | UNTESTED | [MISC](#fail-op_sub__interval_minus_interval-TDS) |  |
| ⚪ | `-` | `-(pg_lsn, pg_lsn) → numeric` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-op_sub__pg_lsn_minus_pg_lsn-TDS) |  |
| ⚪ | `-` | `-(time, interval) → time` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-op_sub__time_minus_interval-TDS) |  |
| ⚪ | `-` | `-(time, time) → interval` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-op_sub__time_minus_time-TDS) |  |
| 🟢 | `-` | `-(timestamp, interval) → timestamp` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `-` | `-(timestamp, timestamp) → interval` | UNTESTED | UNTESTED | [MISC](#fail-op_sub__timestamp_minus_timestamp-TDS) |  |
| 🟢 | `-` | `-(timestamptz, interval) → timestamptz` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `-` | `-(timestamptz, timestamptz) → interval` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-op_sub__timestamptz_minus_timestamptz-TDS) |  |
| ⚪ | `-` | `-(timetz, interval) → timetz` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-op_sub__timetz_minus_interval-TDS) |  |
| ⚪ | `<` | `<(anyenum, anyenum) → bool` | UNTESTED | UNTESTED |  |  |
| ⚪ | `<` | `<(bytea, bytea) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-bytea_lt-TDS) |  |
| ⚪ | `<` | `<(oid, oid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-oid_lt-TDS) |  |
| ⚪ | `<` | `<(pg_lsn, pg_lsn) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-pg_lsn_lt-TDS) |  |
| ⚪ | `<` | `<(record, record) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-record_lt-TDS) | Operator not supported |
| ⚪ | `<` | `<(tid, tid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-tid_lt-TDS) |  |
| ⚪ | `<` | `<(uuid, uuid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-uuid_lt-TDS) |  |
| ⚪ | `<` | `<(xid8, xid8) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-xid8_lt-TDS) |  |
| ⚪ | `<=` | `<=(anyenum, anyenum) → bool` | UNTESTED | UNTESTED |  |  |
| ⚪ | `<=` | `<=(bytea, bytea) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-bytea_lte-TDS) |  |
| ⚪ | `<=` | `<=(oid, oid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-oid_lte-TDS) |  |
| ⚪ | `<=` | `<=(pg_lsn, pg_lsn) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-pg_lsn_lte-TDS) |  |
| ⚪ | `<=` | `<=(record, record) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-record_lte-TDS) | Operator not supported |
| ⚪ | `<=` | `<=(tid, tid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-tid_lte-TDS) |  |
| ⚪ | `<=` | `<=(uuid, uuid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-uuid_lte-TDS) |  |
| ⚪ | `<=` | `<=(xid8, xid8) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-xid8_lte-TDS) |  |
| ⚪ | `<>` | `<>(anyenum, anyenum) → bool` | UNTESTED | UNTESTED |  |  |
| ⚪ | `<>` | `<>(bytea, bytea) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-bytea_neq-TDS) |  |
| ⚪ | `<>` | `<>(oid, oid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-oid_neq-TDS) |  |
| ⚪ | `<>` | `<>(pg_lsn, pg_lsn) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-pg_lsn_neq-TDS) |  |
| ⚪ | `<>` | `<>(record, record) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-record_neq-TDS) | Operator not supported |
| ⚪ | `<>` | `<>(tid, tid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-tid_neq-TDS) |  |
| ⚪ | `<>` | `<>(uuid, uuid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-uuid_neq-TDS) |  |
| ⚪ | `<>` | `<>(xid, xid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-xid_neq-TDS) |  |
| ⚪ | `<>` | `<>(xid8, xid8) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-xid8_neq-TDS) |  |
| ⚪ | `=` | `=(aclitem, aclitem) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-aclitem_eq-TDS) |  |
| ⚪ | `=` | `=(anyenum, anyenum) → bool` | UNTESTED | UNTESTED |  |  |
| ⚪ | `=` | `=(bytea, bytea) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-bytea_eq-TDS) |  |
| ⚪ | `=` | `=(cid, cid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-cid_eq-TDS) |  |
| ⚪ | `=` | `=(oid, oid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-oid_eq-TDS) |  |
| ⚪ | `=` | `=(pg_lsn, pg_lsn) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-pg_lsn_eq-TDS) |  |
| ⚪ | `=` | `=(record, record) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-record_eq-TDS) | Operator not supported |
| ⚪ | `=` | `=(tid, tid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-tid_eq-TDS) |  |
| ⚪ | `=` | `=(uuid, uuid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-uuid_eq-TDS) |  |
| ⚪ | `=` | `=(xid, xid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-xid_eq-TDS) |  |
| ⚪ | `=` | `=(xid8, xid8) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-xid8_eq-TDS) |  |
| ⚪ | `>` | `>(anyenum, anyenum) → bool` | UNTESTED | UNTESTED |  |  |
| ⚪ | `>` | `>(bytea, bytea) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-bytea_gt-TDS) |  |
| ⚪ | `>` | `>(oid, oid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-oid_gt-TDS) |  |
| ⚪ | `>` | `>(pg_lsn, pg_lsn) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-pg_lsn_gt-TDS) |  |
| ⚪ | `>` | `>(record, record) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-record_gt-TDS) | Operator not supported |
| ⚪ | `>` | `>(tid, tid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-tid_gt-TDS) |  |
| ⚪ | `>` | `>(uuid, uuid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-uuid_gt-TDS) |  |
| ⚪ | `>` | `>(xid8, xid8) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-xid8_gt-TDS) |  |
| ⚪ | `>=` | `>=(anyenum, anyenum) → bool` | UNTESTED | UNTESTED |  |  |
| ⚪ | `>=` | `>=(bytea, bytea) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-bytea_gte-TDS) |  |
| ⚪ | `>=` | `>=(oid, oid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-oid_gte-TDS) |  |
| ⚪ | `>=` | `>=(pg_lsn, pg_lsn) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-pg_lsn_gte-TDS) |  |
| ⚪ | `>=` | `>=(record, record) → bool` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-record_gte-TDS) | Operator not supported |
| ⚪ | `>=` | `>=(tid, tid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-tid_gte-TDS) |  |
| ⚪ | `>=` | `>=(uuid, uuid) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-uuid_gte-TDS) |  |
| ⚪ | `>=` | `>=(xid8, xid8) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-xid8_gte-TDS) |  |
| 🔴 | `||` | `||(anycompatible, anycompatiblearray) → anycompatiblearray` | FAIL (0/1) | UNTESTED | [RESULT_MISMATCH](#fail-anycompatible_concat_scalar_array-TDS), [MISC](#fail-anycompatible_concat_scalar_array-Relation) |  |
| 🔴 | `||` | `||(anycompatiblearray, anycompatible) → anycompatiblearray` | FAIL (0/1) | UNTESTED | [RESULT_MISMATCH](#fail-anycompatible_concat_array_scalar-TDS), [MISC](#fail-anycompatible_concat_array_scalar-Relation) |  |
| 🔴 | `||` | `||(anycompatiblearray, anycompatiblearray) → anycompatiblearray` | FAIL (0/1) | UNTESTED | [RESULT_MISMATCH](#fail-anycompatible_concat_array_array-TDS), [MISC](#fail-anycompatible_concat_array_array-Relation) |  |
| ⚪ | `||` | `||(bytea, bytea) → bytea` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-bytea_concat-TDS) |  |
| ⚪ | `~~` | `~~(bytea, bytea) → bool` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-bytea_like-TDS) |  |
| ⚪ | `jsonb[text] → jsonb` | `jsonb[text] → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_subscript_field-TDS), [UNSUPPORTED_SYNTAX](#fail-jsonb_subscript_field-Relation) | Unsupported feature |
| 🟢 | `=` | `=(unknown, date) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `integer * double precision * numeric → numeric` | `integer * double precision * numeric → numeric` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `ilike` | `ilike(text, text) → boolean` | PASS (3/3) | PASS (3/3) |  |  |
| 🟢 | `integer - integer → integer` | `integer - integer → integer` | PASS (2/2) | PASS (2/2) |  |  |
| ⚪ | `like` | `like(bytea, bytea) → boolean` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-like__bytea_bytea__unsupported_type-TDS) | Unsupported feature |
| ⚪ | `similar_to` | `similar_to(text, text) → boolean` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-similar_to__txt_txt__unsupported-TDS) |  |
| ⚪ | `jsonb[integer] → jsonb` | `jsonb[integer] → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_subscript_array_index-TDS), [UNSUPPORTED_SYNTAX](#fail-jsonb_subscript_array_index-Relation) | Unsupported feature |
| 🟢 | `!=` | `!=(integer, integer) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `>` | `>(any, any) → boolean` | UNTESTED | UNTESTED | [MISC](#fail-comparison__select__multi_type-TDS) |  |
| 🟡 | `json -> text -> text ->> text → text` | `json -> text -> text ->> text → text` | UNTESTED | PASS (1/1) | [TYPE_ERROR](#fail-json_chained_arrow-TDS) |  |
| 🟡 | `like` | `like(text, text) → boolean` | PARTIAL (8/9) | PARTIAL (8/9) | [PARSE_ERROR](#fail-like__txt_txt__func_syntax-TDS) |  |
| 🟢 | `numeric - numeric → numeric` | `numeric - numeric → numeric` | PASS (4/4) | PASS (4/4) |  |  |
| ⚪ | `<` | `<(unknown, integer) → boolean` | UNTESTED | UNTESTED | [MISC](#fail-lt__string_literal_int__pg_unknown_cast-TDS) |  |
| 🟢 | `integer - double precision - numeric → numeric` | `integer - double precision - numeric → numeric` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `integer + integer + integer → integer` | `integer + integer + integer → integer` | PASS (2/2) | PASS (2/2) |  |  |
| ⚪ | `>=` | `>=(unknown, numeric) → boolean` | UNTESTED | UNTESTED | [MISC](#fail-gte__string_literal_decimal__pg_unknown_cast-TDS) |  |
| 🟢 | `numeric + numeric → numeric` | `numeric + numeric → numeric` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `<>` | `<>(unknown, timestamp) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `>` | `>(unknown, date) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `like` | `like(name, text) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `integer * integer * integer → integer` | `integer * integer * integer → integer` | PASS (3/3) | PASS (3/3) |  |  |
| 🟡 | `jsonb -> text -> text ->> text → text` | `jsonb -> text -> text ->> text → text` | UNTESTED | PASS (1/1) | [TYPE_ERROR](#fail-jsonb_chained_arrow-TDS) |  |
| 🟢 | `integer * integer → integer` | `integer * integer → integer` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `comparison operators → boolean` | `comparison operators → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🟡 | `text || text → text` | `text || text → text` | PARTIAL (6/7) | PASS (7/7) | [RESULT_MISMATCH](#fail-concat_op__mixed_types__null_handling-TDS) |  |
| 🟢 | `integer + double precision + numeric → numeric` | `integer + double precision + numeric → numeric` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `numeric * numeric → numeric` | `numeric * numeric → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `jsonb[text][text][text] → jsonb` | `jsonb[text][text][text] → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_subscript_nested-TDS), [UNSUPPORTED_SYNTAX](#fail-jsonb_subscript_nested-Relation) | Unsupported feature |
| 🟢 | `integer - integer - integer → integer` | `integer - integer - integer → integer` | PASS (2/2) | PASS (2/2) |  |  |
| 🟡 | `=` | `=(unknown, unknown) → boolean` | FAIL (0/1) | PASS (1/1) | [RESULT_MISMATCH](#fail-eq__null_null-TDS) |  |
| 🟢 | `integer + integer → integer` | `integer + integer → integer` | PASS (2/2) | PASS (2/2) |  |  |
| ⚪ | `=` | `=(unknown, boolean) → boolean` | UNTESTED | UNTESTED | [MISC](#fail-eq__string_literal_boolean__pg_unknown_cast-TDS) |  |

---

## Error Details

<a id="result-mismatch"></a>

### RESULT_MISMATCH (24 tests)

#### <a id="fail-and__false_null-TDS"></a><a id="fail-and__false_null-Relation"></a>`and__false_null`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT (false AND CAST(NULL AS BOOLEAN)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT (false AND CAST(NULL AS BOOLEAN)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT (false AND CAST(NULL AS BOOLEAN)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-or__true_null-TDS"></a><a id="fail-or__true_null-Relation"></a>`or__true_null`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT (true OR CAST(NULL AS BOOLEAN)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT (true OR CAST(NULL AS BOOLEAN)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT (true OR CAST(NULL AS BOOLEAN)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-lt__int__null-Relation"></a>`lt__int__null`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT id, int_val < 100 AS result FROM numbers WHERE id = 5
```

**Legend SQL:**
```sql
SELECT id, int_val < 100 AS result FROM func('e2e::rel_numbers') WHERE id = 5
```

**Error:**
> null


<br>

#### <a id="fail-neq__int__null-TDS"></a><a id="fail-neq__int__null-Relation"></a>`neq__int__null`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT id, int_val <> 42 AS result FROM numbers WHERE id = 5
```

**Legend SQL (TDS):**
```sql
SELECT id, int_val <> 42 AS result FROM func('e2e::tds_numbers') WHERE id = 5
```

**Legend SQL (Relation):**
```sql
SELECT id, int_val <> 42 AS result FROM func('e2e::rel_numbers') WHERE id = 5
```

**Error:**
> null


<br>

#### <a id="fail-neq__filter__int-TDS"></a><a id="fail-neq__filter__int-Relation"></a>`neq__filter__int`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT id, name FROM persons WHERE age <> 30 ORDER BY id
```

**Legend SQL (TDS):**
```sql
SELECT id, name FROM func('e2e::tds_persons') WHERE age <> 30 ORDER BY id
```

**Legend SQL (Relation):**
```sql
SELECT id, name FROM func('e2e::rel_persons') WHERE age <> 30 ORDER BY id
```

**Error:**
> null


<br>

#### <a id="fail-gt__int__null-Relation"></a>`gt__int__null`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT id, int_val > 10 AS result FROM numbers WHERE id = 5
```

**Legend SQL:**
```sql
SELECT id, int_val > 10 AS result FROM func('e2e::rel_numbers') WHERE id = 5
```

**Error:**
> null


<br>

#### <a id="fail-op_mod__negative__basic-TDS"></a><a id="fail-op_mod__negative__basic-Relation"></a>`op_mod__negative__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT id, int_val % 3 AS result FROM numbers WHERE id = 2
```

**Legend SQL (TDS):**
```sql
SELECT id, int_val % 3 AS result FROM func('e2e::tds_numbers') WHERE id = 2
```

**Legend SQL (Relation):**
```sql
SELECT id, int_val % 3 AS result FROM func('e2e::rel_numbers') WHERE id = 2
```

**Error:**
> null


<br>

#### <a id="fail-op_mod__numeric__basic-TDS"></a>`op_mod__numeric__basic`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT id, numeric_val % 3 AS result FROM numbers WHERE id = 1
```

**Legend SQL:**
```sql
SELECT id, numeric_val % 3 AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-op_sub__date_minus_int_days-TDS"></a><a id="fail-op_sub__date_minus_int_days-Relation"></a>`op_sub__date_minus_int_days`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT d - 5 AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT d - 5 AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT d - 5 AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-op_div__int__truncates_toward_zero-TDS"></a><a id="fail-op_div__int__truncates_toward_zero-Relation"></a>`op_div__int__truncates_toward_zero`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT id, int_val / 5 AS result FROM numbers WHERE id = 9
```

**Legend SQL (TDS):**
```sql
SELECT id, int_val / 5 AS result FROM func('e2e::tds_numbers') WHERE id = 9
```

**Legend SQL (Relation):**
```sql
SELECT id, int_val / 5 AS result FROM func('e2e::rel_numbers') WHERE id = 9
```

**Error:**
> null


<br>

#### <a id="fail-op_div__negative__truncates_toward_zero-TDS"></a><a id="fail-op_div__negative__truncates_toward_zero-Relation"></a>`op_div__negative__truncates_toward_zero`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT id, int_val / 3 AS result FROM numbers WHERE id = 2
```

**Legend SQL (TDS):**
```sql
SELECT id, int_val / 3 AS result FROM func('e2e::tds_numbers') WHERE id = 2
```

**Legend SQL (Relation):**
```sql
SELECT id, int_val / 3 AS result FROM func('e2e::rel_numbers') WHERE id = 2
```

**Error:**
> null


<br>

#### <a id="fail-concat_op__txt_txt__from_table-TDS"></a>`concat_op__txt_txt__from_table`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT val || '-' || nullable_val AS result FROM strings ORDER BY 1
```

**Legend SQL:**
```sql
SELECT val || '-' || nullable_val AS result FROM func('e2e::tds_strings') ORDER BY 1
```

**Error:**
> null


<br>

#### <a id="fail-json_hash_arrow_path-Relation"></a>`json_hash_arrow_path`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT json_val #> '{a,b,c}' AS result FROM json_data WHERE id = 2
```

**Legend SQL:**
```sql
SELECT json_val #> '{a,b,c}' AS result FROM func('e2e::rel_json_data') WHERE id = 2
```

**Error:**
> null


<br>

#### <a id="fail-jsonb_hash_arrow_path-Relation"></a>`jsonb_hash_arrow_path`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_val #> '{a,b,c}' AS result FROM json_data WHERE id = 2
```

**Legend SQL:**
```sql
SELECT jsonb_val #> '{a,b,c}' AS result FROM func('e2e::rel_json_data') WHERE id = 2
```

**Error:**
> null


<br>

#### <a id="fail-array_gt-TDS"></a>`array_gt`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT ARRAY[1,3] > ARRAY[1,2] AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT ARRAY[1, 3] > ARRAY[1, 2] AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-json_arrow_get_index-Relation"></a>`json_arrow_get_index`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT json_arr -> 0 AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT json_arr -> 0 AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-json_arrow_get_field-Relation"></a>`json_arrow_get_field`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT json_val -> 'a' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT json_val -> 'a' AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-jsonb_arrow_get_index-Relation"></a>`jsonb_arrow_get_index`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_arr -> 1 AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_arr -> 1 AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-jsonb_arrow_get_field-Relation"></a>`jsonb_arrow_get_field`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_val -> 'b' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val -> 'b' AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-anycompatible_concat_scalar_array-TDS"></a>`anycompatible_concat_scalar_array`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT 4 || ARRAY[1,2,3] AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT 4 || ARRAY[1, 2, 3] AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-anycompatible_concat_array_scalar-TDS"></a>`anycompatible_concat_array_scalar`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT ARRAY[1,2,3] || 4 AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT ARRAY[1, 2, 3] || 4 AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-anycompatible_concat_array_array-TDS"></a>`anycompatible_concat_array_array`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT ARRAY[1,2] || ARRAY[3,4] AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT ARRAY[1, 2] || ARRAY[3, 4] AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-concat_op__mixed_types__null_handling-TDS"></a>`concat_op__mixed_types__null_handling`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT 'val=' || NULL || '-' || 42 AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT 'val=' || NULL || '-' || 42 AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-eq__null_null-TDS"></a>`eq__null_null`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT NULL = NULL AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT NULL = NULL AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> null


<a id="type-error"></a>

### TYPE_ERROR (209 tests)

#### <a id="fail-neq__xid_vs_numeric-TDS"></a><a id="fail-neq__xid_vs_numeric-Relation"></a>`neq__xid_vs_numeric`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('1' AS xid) <> 2 AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('1' AS xid) <> 2 AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('1' AS xid) <> 2 AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for XID


<br>

#### <a id="fail-eq__xid_vs_numeric-TDS"></a><a id="fail-eq__xid_vs_numeric-Relation"></a>`eq__xid_vs_numeric`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('1' AS xid) = 1 AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('1' AS xid) = 1 AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('1' AS xid) = 1 AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for XID


<br>

#### <a id="fail-op_add__numeric_plus_pg_lsn-TDS"></a><a id="fail-op_add__numeric_plus_pg_lsn-Relation"></a>`op_add__numeric_plus_pg_lsn`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT 16 + CAST('0/1' AS pg_lsn) AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT 16 + CAST('0/1' AS pg_lsn) AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT 16 + CAST('0/1' AS pg_lsn) AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No value found for PG_LSN, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-op_add__pg_lsn_plus_numeric-TDS"></a><a id="fail-op_add__pg_lsn_plus_numeric-Relation"></a>`op_add__pg_lsn_plus_numeric`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('0/1' AS pg_lsn) + 16 AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('0/1' AS pg_lsn) + 16 AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('0/1' AS pg_lsn) + 16 AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No value found for PG_LSN, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-op_sub__pg_lsn_minus_numeric-TDS"></a><a id="fail-op_sub__pg_lsn_minus_numeric-Relation"></a>`op_sub__pg_lsn_minus_numeric`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('0/10' AS pg_lsn) - 16 AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('0/10' AS pg_lsn) - 16 AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('0/10' AS pg_lsn) - 16 AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No value found for PG_LSN, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-regex_not_match__name__basic-TDS"></a><a id="fail-regex_not_match__name__basic-Relation"></a>`regex_not_match__name__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS name) !~ '^hello$' AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(val AS name) !~ '^hello$' AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(val AS name) !~ '^hello$' AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> No value found for NAME


<br>

#### <a id="fail-regex_not_match_ci__name__basic-TDS"></a><a id="fail-regex_not_match_ci__name__basic-Relation"></a>`regex_not_match_ci__name__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS name) !~* '^HELLO$' AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(val AS name) !~* '^HELLO$' AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(val AS name) !~* '^HELLO$' AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> No value found for NAME


<br>

#### <a id="fail-not_like__name__basic-TDS"></a><a id="fail-not_like__name__basic-Relation"></a>`not_like__name__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS name) !~~ 'zzz%' AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(val AS name) !~~ 'zzz%' AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(val AS name) !~~ 'zzz%' AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> No value found for NAME


<br>

#### <a id="fail-not_ilike__name__basic-TDS"></a><a id="fail-not_ilike__name__basic-Relation"></a>`not_ilike__name__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS name) !~~* 'ZZZ%' AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(val AS name) !~~* 'ZZZ%' AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(val AS name) !~~* 'ZZZ%' AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> No value found for NAME


<br>

#### <a id="fail-regex_match__name__basic-TDS"></a><a id="fail-regex_match__name__basic-Relation"></a>`regex_match__name__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS name) ~ '^hello$' AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(val AS name) ~ '^hello$' AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(val AS name) ~ '^hello$' AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> No value found for NAME


<br>

#### <a id="fail-regex_match_ci__name__basic-TDS"></a><a id="fail-regex_match_ci__name__basic-Relation"></a>`regex_match_ci__name__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS name) ~* '^HELLO$' AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(val AS name) ~* '^HELLO$' AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(val AS name) ~* '^HELLO$' AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> No value found for NAME


<br>

#### <a id="fail-like__name__basic-TDS"></a><a id="fail-like__name__basic-Relation"></a>`like__name__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS name) ~~ 'hel%' AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(val AS name) ~~ 'hel%' AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(val AS name) ~~ 'hel%' AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> No value found for NAME


<br>

#### <a id="fail-ilike__name__basic-TDS"></a><a id="fail-ilike__name__basic-Relation"></a>`ilike__name__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS name) ~~* 'HEL%' AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(val AS name) ~~* 'HEL%' AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(val AS name) ~~* 'HEL%' AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> No value found for NAME


<br>

#### <a id="fail-jsonb_delete_path_column-TDS"></a><a id="fail-jsonb_delete_path_column-Relation"></a>`jsonb_delete_path_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val #- '{a,b}' AS result FROM json_data WHERE id = 2
```

**Legend SQL:**
```sql
SELECT jsonb_val #- '{a,b}' AS result FROM func('e2e::tds_json_data') WHERE id = 2
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_val #- '{a,b}' AS result FROM json_data WHERE id = 2
```

**Legend SQL:**
```sql
SELECT jsonb_val #- '{a,b}' AS result FROM func('e2e::rel_json_data') WHERE id = 2
```

**Error:**
> No value found for JSONB_PATH_DELETE


<br>

#### <a id="fail-json_hash_arrow_path-TDS"></a>`json_hash_arrow_path`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT json_val #> '{a,b,c}' AS result FROM json_data WHERE id = 2
```

**Legend SQL:**
```sql
SELECT json_val #> '{a,b,c}' AS result FROM func('e2e::tds_json_data') WHERE id = 2
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_hash_arrow_path-TDS"></a>`jsonb_hash_arrow_path`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val #> '{a,b,c}' AS result FROM json_data WHERE id = 2
```

**Legend SQL:**
```sql
SELECT jsonb_val #> '{a,b,c}' AS result FROM func('e2e::tds_json_data') WHERE id = 2
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_hash_arrow_text_path-TDS"></a>`json_hash_arrow_text_path`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT json_val #>> '{a,b,c}' AS result FROM json_data WHERE id = 2
```

**Legend SQL:**
```sql
SELECT json_val #>> '{a,b,c}' AS result FROM func('e2e::tds_json_data') WHERE id = 2
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_hash_arrow_text_path-TDS"></a>`jsonb_hash_arrow_text_path`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val #>> '{a,b,c}' AS result FROM json_data WHERE id = 2
```

**Legend SQL:**
```sql
SELECT jsonb_val #>> '{a,b,c}' AS result FROM func('e2e::tds_json_data') WHERE id = 2
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-aclitem_array_append-TDS"></a><a id="fail-aclitem_array_append-Relation"></a>`aclitem_array_append`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY['foo=r/bar'::aclitem] + 'baz=w/bar'::aclitem AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY['foo=r/bar'::aclitem] + 'baz=w/bar'::aclitem AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY['foo=r/bar'::aclitem] + 'baz=w/bar'::aclitem AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for ACLITEM, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-aclitem_array_remove-TDS"></a><a id="fail-aclitem_array_remove-Relation"></a>`aclitem_array_remove`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY['foo=r/bar'::aclitem, 'baz=w/bar'::aclitem] - 'baz=w/bar'::aclitem AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY['foo=r/bar'::aclitem, 'baz=w/bar'::aclitem] - 'baz=w/bar'::aclitem AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY['foo=r/bar'::aclitem, 'baz=w/bar'::aclitem] - 'baz=w/bar'::aclitem AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for ACLITEM, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-jsonb_delete_keys-TDS"></a>`jsonb_delete_keys`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val - array['a','c'] AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val - ARRAY['a', 'c'] AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_exists_all-TDS"></a>`jsonb_exists_all`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val ?& array['a','b'] AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val ?& ARRAY['a', 'b'] AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-aclitem_array_contains-TDS"></a><a id="fail-aclitem_array_contains-Relation"></a>`aclitem_array_contains`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY['foo=r/bar'::aclitem, 'baz=w/bar'::aclitem] @> 'baz=w/bar'::aclitem AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY['foo=r/bar'::aclitem, 'baz=w/bar'::aclitem] @> 'baz=w/bar'::aclitem AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY['foo=r/bar'::aclitem, 'baz=w/bar'::aclitem] @> 'baz=w/bar'::aclitem AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for ACLITEM


<br>

#### <a id="fail-jsonb_delete_index-TDS"></a>`jsonb_delete_index`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_arr - 0 AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_arr - 0 AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_delete_key_column-TDS"></a>`jsonb_delete_key_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val - 'c' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val - 'c' AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_arrow_get_index-TDS"></a>`json_arrow_get_index`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT json_arr -> 0 AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT json_arr -> 0 AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_arrow_get_field-TDS"></a>`json_arrow_get_field`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT json_val -> 'a' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT json_val -> 'a' AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_arrow_null-TDS"></a>`json_arrow_null`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT json_val -> 'a' AS result FROM json_data WHERE id = 5
```

**Legend SQL:**
```sql
SELECT json_val -> 'a' AS result FROM func('e2e::tds_json_data') WHERE id = 5
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_arrow_get_index-TDS"></a>`jsonb_arrow_get_index`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_arr -> 1 AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_arr -> 1 AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_arrow_get_field-TDS"></a>`jsonb_arrow_get_field`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val -> 'b' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val -> 'b' AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_arrow_null-TDS"></a>`jsonb_arrow_null`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val -> 'a' AS result FROM json_data WHERE id = 5
```

**Legend SQL:**
```sql
SELECT jsonb_val -> 'a' AS result FROM func('e2e::tds_json_data') WHERE id = 5
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_arrow_text_get_index-TDS"></a>`json_arrow_text_get_index`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT json_arr ->> 0 AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT json_arr ->> 0 AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_arrow_text_get_field-TDS"></a>`json_arrow_text_get_field`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT json_val ->> 'b' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT json_val ->> 'b' AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_arrow_text_get_index-TDS"></a>`jsonb_arrow_text_get_index`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_arr ->> 1 AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_arr ->> 1 AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_arrow_text_get_field-TDS"></a>`jsonb_arrow_text_get_field`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val ->> 'b' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val ->> 'b' AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_lt-TDS"></a>`jsonb_lt`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val < '{"z":9}' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val < '{"z":9}' AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_lte-TDS"></a>`jsonb_lte`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val <= '{"z":9}' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val <= '{"z":9}' AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_neq-TDS"></a>`jsonb_neq`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val <> '{"a":1}' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val <> '{"a":1}' AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_contained_by_column-TDS"></a>`jsonb_contained_by_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT '{"a":1}' <@ jsonb_val AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '{"a":1}' <@ jsonb_val AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_eq-TDS"></a>`jsonb_eq`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val = '{"a":1,"b":"hello","c":null}' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val = '{"a":1,"b":"hello","c":null}' AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_gt-TDS"></a>`jsonb_gt`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val > '{"a":0}' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val > '{"a":0}' AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_gte-TDS"></a>`jsonb_gte`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val >= '{"a":0}' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val >= '{"a":0}' AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_contains-TDS"></a><a id="fail-jsonb_contains-Relation"></a>`jsonb_contains`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val @> '{"a":1}' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val @> '{"a":1}' AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_val @> '{"a":1}' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val @> '{"a":1}' AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No value found for JSONB_CONTAIN_RIGHT


<br>

#### <a id="fail-jsonb_path_exists_op-TDS"></a><a id="fail-jsonb_path_exists_op-Relation"></a>`jsonb_path_exists_op`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val @? '$.a' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val @? '$.a' AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_val @? '$.a' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val @? '$.a' AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No value found for JSONB_PATH_CONTAIN_ANY_VALUE


<br>

#### <a id="fail-jsonb_path_match_op-TDS"></a><a id="fail-jsonb_path_match_op-Relation"></a>`jsonb_path_match_op`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val @@ '$.a == 1' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val @@ '$.a == 1' AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_val @@ '$.a == 1' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val @@ '$.a == 1' AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No value found for JSONB_PATH_PREDICATE_CHECK


<br>

#### <a id="fail-jsonb_concat-TDS"></a>`jsonb_concat`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val || '{"d":4}' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val || '{"d":4}' AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-inet_and-TDS"></a><a id="fail-inet_and-Relation"></a>`inet_and`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('192.168.1.5' AS inet) & CAST('0.0.0.255' AS inet) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('192.168.1.5' AS inet) & CAST('0.0.0.255' AS inet) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('192.168.1.5' AS inet) & CAST('0.0.0.255' AS inet) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for INET, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-macaddr_and-TDS"></a><a id="fail-macaddr_and-Relation"></a>`macaddr_and`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('08:00:2b:01:02:03' AS macaddr) & CAST('ff:ff:ff:00:00:00' AS macaddr) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('08:00:2b:01:02:03' AS macaddr) & CAST('ff:ff:ff:00:00:00' AS macaddr) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('08:00:2b:01:02:03' AS macaddr) & CAST('ff:ff:ff:00:00:00' AS macaddr) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for MACADDR, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-macaddr8_and-TDS"></a><a id="fail-macaddr8_and-Relation"></a>`macaddr8_and`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('08:00:2b:01:02:03:04:05' AS macaddr8) & CAST('ff:ff:ff:00:00:00:00:00' AS macaddr8) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('08:00:2b:01:02:03:04:05' AS macaddr8) & CAST('ff:ff:ff:00:00:00:00:00' AS macaddr8) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('08:00:2b:01:02:03:04:05' AS macaddr8) & CAST('ff:ff:ff:00:00:00:00:00' AS macaddr8) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for MACADDR8, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-inet_plus_bigint-TDS"></a><a id="fail-inet_plus_bigint-Relation"></a>`inet_plus_bigint`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('192.168.1.5' AS inet) + CAST(10 AS bigint) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('192.168.1.5' AS inet) + CAST(10 AS bigint) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('192.168.1.5' AS inet) + CAST(10 AS bigint) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for INET, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-bigint_plus_inet-TDS"></a><a id="fail-bigint_plus_inet-Relation"></a>`bigint_plus_inet`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(10 AS bigint) + CAST('192.168.1.5' AS inet) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(10 AS bigint) + CAST('192.168.1.5' AS inet) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(10 AS bigint) + CAST('192.168.1.5' AS inet) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for INET, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-inet_minus_inet-TDS"></a><a id="fail-inet_minus_inet-Relation"></a>`inet_minus_inet`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('192.168.1.15' AS inet) - CAST('192.168.1.5' AS inet) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('192.168.1.15' AS inet) - CAST('192.168.1.5' AS inet) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('192.168.1.15' AS inet) - CAST('192.168.1.5' AS inet) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for INET, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-inet_minus_bigint-TDS"></a><a id="fail-inet_minus_bigint-Relation"></a>`inet_minus_bigint`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('192.168.1.15' AS inet) - CAST(10 AS bigint) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('192.168.1.15' AS inet) - CAST(10 AS bigint) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('192.168.1.15' AS inet) - CAST(10 AS bigint) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for INET, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-inet_lt-TDS"></a><a id="fail-inet_lt-Relation"></a>`inet_lt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('192.168.1.5' AS inet) < CAST('192.168.1.6' AS inet) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('192.168.1.5' AS inet) < CAST('192.168.1.6' AS inet) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('192.168.1.5' AS inet) < CAST('192.168.1.6' AS inet) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for INET


<br>

#### <a id="fail-macaddr_lt-TDS"></a><a id="fail-macaddr_lt-Relation"></a>`macaddr_lt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('08:00:2b:01:02:03' AS macaddr) < CAST('08:00:2b:01:02:04' AS macaddr) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('08:00:2b:01:02:03' AS macaddr) < CAST('08:00:2b:01:02:04' AS macaddr) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('08:00:2b:01:02:03' AS macaddr) < CAST('08:00:2b:01:02:04' AS macaddr) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for MACADDR


<br>

#### <a id="fail-macaddr8_lt-TDS"></a><a id="fail-macaddr8_lt-Relation"></a>`macaddr8_lt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('08:00:2b:01:02:03:04:05' AS macaddr8) < CAST('08:00:2b:01:02:03:04:06' AS macaddr8) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('08:00:2b:01:02:03:04:05' AS macaddr8) < CAST('08:00:2b:01:02:03:04:06' AS macaddr8) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('08:00:2b:01:02:03:04:05' AS macaddr8) < CAST('08:00:2b:01:02:03:04:06' AS macaddr8) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for MACADDR8


<br>

#### <a id="fail-inet_subnet_or_eq-TDS"></a><a id="fail-inet_subnet_or_eq-Relation"></a>`inet_subnet_or_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('192.168.1.0/24' AS inet) << CAST('192.168.0.0/16' AS inet) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('192.168.1.0/24' AS inet) << CAST('192.168.0.0/16' AS inet) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('192.168.1.0/24' AS inet) << CAST('192.168.0.0/16' AS inet) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for INET, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-inet_lte-TDS"></a><a id="fail-inet_lte-Relation"></a>`inet_lte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('192.168.1.5' AS inet) <= CAST('192.168.1.6' AS inet) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('192.168.1.5' AS inet) <= CAST('192.168.1.6' AS inet) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('192.168.1.5' AS inet) <= CAST('192.168.1.6' AS inet) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for INET


<br>

#### <a id="fail-macaddr_lte-TDS"></a><a id="fail-macaddr_lte-Relation"></a>`macaddr_lte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('08:00:2b:01:02:03' AS macaddr) <= CAST('08:00:2b:01:02:04' AS macaddr) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('08:00:2b:01:02:03' AS macaddr) <= CAST('08:00:2b:01:02:04' AS macaddr) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('08:00:2b:01:02:03' AS macaddr) <= CAST('08:00:2b:01:02:04' AS macaddr) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for MACADDR


<br>

#### <a id="fail-macaddr8_lte-TDS"></a><a id="fail-macaddr8_lte-Relation"></a>`macaddr8_lte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('08:00:2b:01:02:03:04:05' AS macaddr8) <= CAST('08:00:2b:01:02:03:04:06' AS macaddr8) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('08:00:2b:01:02:03:04:05' AS macaddr8) <= CAST('08:00:2b:01:02:03:04:06' AS macaddr8) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('08:00:2b:01:02:03:04:05' AS macaddr8) <= CAST('08:00:2b:01:02:03:04:06' AS macaddr8) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for MACADDR8


<br>

#### <a id="fail-inet_neq-TDS"></a><a id="fail-inet_neq-Relation"></a>`inet_neq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('192.168.1.5' AS inet) <> CAST('192.168.1.6' AS inet) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('192.168.1.5' AS inet) <> CAST('192.168.1.6' AS inet) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('192.168.1.5' AS inet) <> CAST('192.168.1.6' AS inet) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for INET


<br>

#### <a id="fail-macaddr_neq-TDS"></a><a id="fail-macaddr_neq-Relation"></a>`macaddr_neq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('08:00:2b:01:02:03' AS macaddr) <> CAST('08:00:2b:01:02:04' AS macaddr) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('08:00:2b:01:02:03' AS macaddr) <> CAST('08:00:2b:01:02:04' AS macaddr) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('08:00:2b:01:02:03' AS macaddr) <> CAST('08:00:2b:01:02:04' AS macaddr) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for MACADDR


<br>

#### <a id="fail-macaddr8_neq-TDS"></a><a id="fail-macaddr8_neq-Relation"></a>`macaddr8_neq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('08:00:2b:01:02:03:04:05' AS macaddr8) <> CAST('08:00:2b:01:02:03:04:06' AS macaddr8) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('08:00:2b:01:02:03:04:05' AS macaddr8) <> CAST('08:00:2b:01:02:03:04:06' AS macaddr8) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('08:00:2b:01:02:03:04:05' AS macaddr8) <> CAST('08:00:2b:01:02:03:04:06' AS macaddr8) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for MACADDR8


<br>

#### <a id="fail-inet_eq-TDS"></a><a id="fail-inet_eq-Relation"></a>`inet_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('192.168.1.5' AS inet) = CAST('192.168.1.5' AS inet) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('192.168.1.5' AS inet) = CAST('192.168.1.5' AS inet) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('192.168.1.5' AS inet) = CAST('192.168.1.5' AS inet) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for INET


<br>

#### <a id="fail-macaddr_eq-TDS"></a><a id="fail-macaddr_eq-Relation"></a>`macaddr_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('08:00:2b:01:02:03' AS macaddr) = CAST('08:00:2b:01:02:03' AS macaddr) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('08:00:2b:01:02:03' AS macaddr) = CAST('08:00:2b:01:02:03' AS macaddr) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('08:00:2b:01:02:03' AS macaddr) = CAST('08:00:2b:01:02:03' AS macaddr) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for MACADDR


<br>

#### <a id="fail-macaddr8_eq-TDS"></a><a id="fail-macaddr8_eq-Relation"></a>`macaddr8_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('08:00:2b:01:02:03:04:05' AS macaddr8) = CAST('08:00:2b:01:02:03:04:05' AS macaddr8) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('08:00:2b:01:02:03:04:05' AS macaddr8) = CAST('08:00:2b:01:02:03:04:05' AS macaddr8) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('08:00:2b:01:02:03:04:05' AS macaddr8) = CAST('08:00:2b:01:02:03:04:05' AS macaddr8) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for MACADDR8


<br>

#### <a id="fail-inet_gt-TDS"></a><a id="fail-inet_gt-Relation"></a>`inet_gt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('192.168.1.6' AS inet) > CAST('192.168.1.5' AS inet) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('192.168.1.6' AS inet) > CAST('192.168.1.5' AS inet) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('192.168.1.6' AS inet) > CAST('192.168.1.5' AS inet) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for INET


<br>

#### <a id="fail-macaddr_gt-TDS"></a><a id="fail-macaddr_gt-Relation"></a>`macaddr_gt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('08:00:2b:01:02:04' AS macaddr) > CAST('08:00:2b:01:02:03' AS macaddr) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('08:00:2b:01:02:04' AS macaddr) > CAST('08:00:2b:01:02:03' AS macaddr) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('08:00:2b:01:02:04' AS macaddr) > CAST('08:00:2b:01:02:03' AS macaddr) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for MACADDR


<br>

#### <a id="fail-macaddr8_gt-TDS"></a><a id="fail-macaddr8_gt-Relation"></a>`macaddr8_gt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('08:00:2b:01:02:03:04:06' AS macaddr8) > CAST('08:00:2b:01:02:03:04:05' AS macaddr8) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('08:00:2b:01:02:03:04:06' AS macaddr8) > CAST('08:00:2b:01:02:03:04:05' AS macaddr8) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('08:00:2b:01:02:03:04:06' AS macaddr8) > CAST('08:00:2b:01:02:03:04:05' AS macaddr8) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for MACADDR8


<br>

#### <a id="fail-inet_gte-TDS"></a><a id="fail-inet_gte-Relation"></a>`inet_gte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('192.168.1.6' AS inet) >= CAST('192.168.1.5' AS inet) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('192.168.1.6' AS inet) >= CAST('192.168.1.5' AS inet) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('192.168.1.6' AS inet) >= CAST('192.168.1.5' AS inet) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for INET


<br>

#### <a id="fail-macaddr_gte-TDS"></a><a id="fail-macaddr_gte-Relation"></a>`macaddr_gte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('08:00:2b:01:02:04' AS macaddr) >= CAST('08:00:2b:01:02:03' AS macaddr) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('08:00:2b:01:02:04' AS macaddr) >= CAST('08:00:2b:01:02:03' AS macaddr) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('08:00:2b:01:02:04' AS macaddr) >= CAST('08:00:2b:01:02:03' AS macaddr) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for MACADDR


<br>

#### <a id="fail-macaddr8_gte-TDS"></a><a id="fail-macaddr8_gte-Relation"></a>`macaddr8_gte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('08:00:2b:01:02:03:04:06' AS macaddr8) >= CAST('08:00:2b:01:02:03:04:05' AS macaddr8) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('08:00:2b:01:02:03:04:06' AS macaddr8) >= CAST('08:00:2b:01:02:03:04:05' AS macaddr8) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('08:00:2b:01:02:03:04:06' AS macaddr8) >= CAST('08:00:2b:01:02:03:04:05' AS macaddr8) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for MACADDR8


<br>

#### <a id="fail-inet_supernet-TDS"></a><a id="fail-inet_supernet-Relation"></a>`inet_supernet`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('192.168.0.0/16' AS inet) >> CAST('192.168.1.0/24' AS inet) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('192.168.0.0/16' AS inet) >> CAST('192.168.1.0/24' AS inet) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('192.168.0.0/16' AS inet) >> CAST('192.168.1.0/24' AS inet) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for INET, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-inet_or-TDS"></a><a id="fail-inet_or-Relation"></a>`inet_or`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('192.168.1.5' AS inet) | CAST('0.0.0.255' AS inet) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('192.168.1.5' AS inet) | CAST('0.0.0.255' AS inet) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('192.168.1.5' AS inet) | CAST('0.0.0.255' AS inet) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for INET, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-macaddr_or-TDS"></a><a id="fail-macaddr_or-Relation"></a>`macaddr_or`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('08:00:2b:01:02:03' AS macaddr) | CAST('00:00:00:ff:ff:ff' AS macaddr) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('08:00:2b:01:02:03' AS macaddr) | CAST('00:00:00:ff:ff:ff' AS macaddr) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('08:00:2b:01:02:03' AS macaddr) | CAST('00:00:00:ff:ff:ff' AS macaddr) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for MACADDR, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-macaddr8_or-TDS"></a><a id="fail-macaddr8_or-Relation"></a>`macaddr8_or`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('08:00:2b:01:02:03:04:05' AS macaddr8) | CAST('00:00:00:ff:ff:ff:ff:ff' AS macaddr8) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('08:00:2b:01:02:03:04:05' AS macaddr8) | CAST('00:00:00:ff:ff:ff:ff:ff' AS macaddr8) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('08:00:2b:01:02:03:04:05' AS macaddr8) | CAST('00:00:00:ff:ff:ff:ff:ff' AS macaddr8) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for MACADDR8, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_hash__box_intersection-TDS"></a><a id="fail-geo_hash__box_intersection-Relation"></a>`geo_hash__box_intersection`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(3,3),(1,1)' # box '(4,4),(2,2)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT box '(3,3),(1,1)' # box '(4,4),(2,2)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT box '(3,3),(1,1)' # box '(4,4),(2,2)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BOX, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_hash__line_intersection-TDS"></a><a id="fail-geo_hash__line_intersection-Relation"></a>`geo_hash__line_intersection`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT line '{1,0,0}' # line '{0,1,0}' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT line '{1,0,0}' # line '{0,1,0}' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT line '{1,0,0}' # line '{0,1,0}' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for LINE, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_hash__lseg_intersection-TDS"></a><a id="fail-geo_hash__lseg_intersection-Relation"></a>`geo_hash__lseg_intersection`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(0,0),(2,2)]' # lseg '[(0,2),(2,0)]' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT lseg '[(0,0),(2,2)]' # lseg '[(0,2),(2,0)]' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT lseg '[(0,0),(2,2)]' # lseg '[(0,2),(2,0)]' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for LSEG, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_mul__box_point-TDS"></a><a id="fail-geo_mul__box_point-Relation"></a>`geo_mul__box_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(3,3),(1,1)' * point '(2,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT box '(3,3),(1,1)' * point '(2,0)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT box '(3,3),(1,1)' * point '(2,0)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BOX, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_mul__circle_point-TDS"></a><a id="fail-geo_mul__circle_point-Relation"></a>`geo_mul__circle_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),5>' * point '(2,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT circle '<(0,0),5>' * point '(2,0)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT circle '<(0,0),5>' * point '(2,0)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for CIRCLE, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_mul__path_point-TDS"></a><a id="fail-geo_mul__path_point-Relation"></a>`geo_mul__path_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT path '((1,1),(2,2),(3,1))' * point '(2,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT path '((1,1),(2,2),(3,1))' * point '(2,0)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT path '((1,1),(2,2),(3,1))' * point '(2,0)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for PATH, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_mul__point_point-TDS"></a><a id="fail-geo_mul__point_point-Relation"></a>`geo_mul__point_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(1,1)' * point '(2,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT point '(1,1)' * point '(2,0)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT point '(1,1)' * point '(2,0)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for POINT, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_add__box_point-TDS"></a><a id="fail-geo_add__box_point-Relation"></a>`geo_add__box_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(3,3),(1,1)' + point '(1,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT box '(3,3),(1,1)' + point '(1,1)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT box '(3,3),(1,1)' + point '(1,1)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BOX, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_add__circle_point-TDS"></a><a id="fail-geo_add__circle_point-Relation"></a>`geo_add__circle_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),5>' + point '(1,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT circle '<(0,0),5>' + point '(1,1)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT circle '<(0,0),5>' + point '(1,1)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for CIRCLE, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_add__path_path-TDS"></a><a id="fail-geo_add__path_path-Relation"></a>`geo_add__path_path`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT path '((1,1),(2,2))' + path '((3,3),(4,4))' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT path '((1,1),(2,2))' + path '((3,3),(4,4))' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT path '((1,1),(2,2))' + path '((3,3),(4,4))' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for PATH, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_add__path_point-TDS"></a><a id="fail-geo_add__path_point-Relation"></a>`geo_add__path_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT path '((1,1),(2,2),(3,1))' + point '(1,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT path '((1,1),(2,2),(3,1))' + point '(1,1)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT path '((1,1),(2,2),(3,1))' + point '(1,1)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for PATH, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_add__point_point-TDS"></a><a id="fail-geo_add__point_point-Relation"></a>`geo_add__point_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(1,1)' + point '(2,2)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT point '(1,1)' + point '(2,2)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT point '(1,1)' + point '(2,2)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for POINT, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_sub__box_point-TDS"></a><a id="fail-geo_sub__box_point-Relation"></a>`geo_sub__box_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(3,3),(1,1)' - point '(1,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT box '(3,3),(1,1)' - point '(1,1)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT box '(3,3),(1,1)' - point '(1,1)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BOX, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_sub__circle_point-TDS"></a><a id="fail-geo_sub__circle_point-Relation"></a>`geo_sub__circle_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(3,3),5>' - point '(1,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT circle '<(3,3),5>' - point '(1,1)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT circle '<(3,3),5>' - point '(1,1)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for CIRCLE, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_sub__path_point-TDS"></a><a id="fail-geo_sub__path_point-Relation"></a>`geo_sub__path_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT path '((1,1),(2,2),(3,1))' - point '(1,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT path '((1,1),(2,2),(3,1))' - point '(1,1)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT path '((1,1),(2,2),(3,1))' - point '(1,1)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for PATH, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_sub__point_point-TDS"></a><a id="fail-geo_sub__point_point-Relation"></a>`geo_sub__point_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(2,2)' - point '(1,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT point '(2,2)' - point '(1,1)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT point '(2,2)' - point '(1,1)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for POINT, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_div__box_point-TDS"></a><a id="fail-geo_div__box_point-Relation"></a>`geo_div__box_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(4,4),(2,2)' / point '(2,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT box '(4,4),(2,2)' / point '(2,1)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT box '(4,4),(2,2)' / point '(2,1)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BOX, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_div__circle_point-TDS"></a><a id="fail-geo_div__circle_point-Relation"></a>`geo_div__circle_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),10>' / point '(2,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT circle '<(0,0),10>' / point '(2,1)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT circle '<(0,0),10>' / point '(2,1)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for CIRCLE, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_div__path_point-TDS"></a><a id="fail-geo_div__path_point-Relation"></a>`geo_div__path_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT path '((2,2),(4,4))' / point '(2,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT path '((2,2),(4,4))' / point '(2,1)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT path '((2,2),(4,4))' / point '(2,1)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for PATH, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_div__point_point-TDS"></a><a id="fail-geo_div__point_point-Relation"></a>`geo_div__point_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(4,4)' / point '(2,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT point '(4,4)' / point '(2,1)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT point '(4,4)' / point '(2,1)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for POINT, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_lt__box_box-TDS"></a><a id="fail-geo_lt__box_box-Relation"></a>`geo_lt__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(2,2),(1,1)' < box '(4,4),(1,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT box '(2,2),(1,1)' < box '(4,4),(1,1)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT box '(2,2),(1,1)' < box '(4,4),(1,1)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BOX


<br>

#### <a id="fail-geo_lt__circle_circle-TDS"></a><a id="fail-geo_lt__circle_circle-Relation"></a>`geo_lt__circle_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),1>' < circle '<(0,0),5>' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT circle '<(0,0),1>' < circle '<(0,0),5>' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT circle '<(0,0),1>' < circle '<(0,0),5>' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for CIRCLE


<br>

#### <a id="fail-geo_lt__lseg_lseg-TDS"></a><a id="fail-geo_lt__lseg_lseg-Relation"></a>`geo_lt__lseg_lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(0,0),(1,1)]' < lseg '[(0,0),(5,5)]' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT lseg '[(0,0),(1,1)]' < lseg '[(0,0),(5,5)]' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT lseg '[(0,0),(1,1)]' < lseg '[(0,0),(5,5)]' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for LSEG


<br>

#### <a id="fail-geo_lt__path_path-TDS"></a><a id="fail-geo_lt__path_path-Relation"></a>`geo_lt__path_path`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT path '((0,0),(1,1))' < path '((0,0),(5,5))' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT path '((0,0),(1,1))' < path '((0,0),(5,5))' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT path '((0,0),(1,1))' < path '((0,0),(5,5))' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for PATH


<br>

#### <a id="fail-geo_strictly_left__box_box-TDS"></a><a id="fail-geo_strictly_left__box_box-Relation"></a>`geo_strictly_left__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(1,1),(0,0)' << box '(9,9),(8,8)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT box '(1,1),(0,0)' << box '(9,9),(8,8)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT box '(1,1),(0,0)' << box '(9,9),(8,8)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BOX, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_strictly_left__circle_circle-TDS"></a><a id="fail-geo_strictly_left__circle_circle-Relation"></a>`geo_strictly_left__circle_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),1>' << circle '<(9,9),1>' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT circle '<(0,0),1>' << circle '<(9,9),1>' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT circle '<(0,0),1>' << circle '<(9,9),1>' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for CIRCLE, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_strictly_left__point_point-TDS"></a><a id="fail-geo_strictly_left__point_point-Relation"></a>`geo_strictly_left__point_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(0,0)' << point '(9,9)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT point '(0,0)' << point '(9,9)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT point '(0,0)' << point '(9,9)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for POINT, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_strictly_left__polygon_polygon-TDS"></a><a id="fail-geo_strictly_left__polygon_polygon-Relation"></a>`geo_strictly_left__polygon_polygon`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT polygon '((0,0),(0,1),(1,1),(1,0))' << polygon '((9,9),(9,10),(10,10),(10,9))' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT polygon '((0,0),(0,1),(1,1),(1,0))' << polygon '((9,9),(9,10),(10,10),(10,9))' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT polygon '((0,0),(0,1),(1,1),(1,0))' << polygon '((9,9),(9,10),(10,10),(10,9))' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for POLYGON, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_lte__box_box-TDS"></a><a id="fail-geo_lte__box_box-Relation"></a>`geo_lte__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(1,1),(0,0)' <= box '(4,4),(0,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT box '(1,1),(0,0)' <= box '(4,4),(0,0)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT box '(1,1),(0,0)' <= box '(4,4),(0,0)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BOX


<br>

#### <a id="fail-geo_lte__circle_circle-TDS"></a><a id="fail-geo_lte__circle_circle-Relation"></a>`geo_lte__circle_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),1>' <= circle '<(0,0),5>' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT circle '<(0,0),1>' <= circle '<(0,0),5>' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT circle '<(0,0),1>' <= circle '<(0,0),5>' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for CIRCLE


<br>

#### <a id="fail-geo_lte__lseg_lseg-TDS"></a><a id="fail-geo_lte__lseg_lseg-Relation"></a>`geo_lte__lseg_lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(0,0),(1,1)]' <= lseg '[(0,0),(5,5)]' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT lseg '[(0,0),(1,1)]' <= lseg '[(0,0),(5,5)]' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT lseg '[(0,0),(1,1)]' <= lseg '[(0,0),(5,5)]' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for LSEG


<br>

#### <a id="fail-geo_lte__path_path-TDS"></a><a id="fail-geo_lte__path_path-Relation"></a>`geo_lte__path_path`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT path '((0,0),(1,1))' <= path '((0,0),(5,5))' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT path '((0,0),(1,1))' <= path '((0,0),(5,5))' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT path '((0,0),(1,1))' <= path '((0,0),(5,5))' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for PATH


<br>

#### <a id="fail-geo_neq__circle_circle-TDS"></a><a id="fail-geo_neq__circle_circle-Relation"></a>`geo_neq__circle_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),1>' <> circle '<(0,0),5>' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT circle '<(0,0),1>' <> circle '<(0,0),5>' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT circle '<(0,0),1>' <> circle '<(0,0),5>' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for CIRCLE


<br>

#### <a id="fail-geo_neq__lseg_lseg-TDS"></a><a id="fail-geo_neq__lseg_lseg-Relation"></a>`geo_neq__lseg_lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(0,0),(1,1)]' <> lseg '[(0,0),(5,5)]' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT lseg '[(0,0),(1,1)]' <> lseg '[(0,0),(5,5)]' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT lseg '[(0,0),(1,1)]' <> lseg '[(0,0),(5,5)]' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for LSEG


<br>

#### <a id="fail-geo_neq__point_point-TDS"></a><a id="fail-geo_neq__point_point-Relation"></a>`geo_neq__point_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(0,0)' <> point '(1,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT point '(0,0)' <> point '(1,1)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT point '(0,0)' <> point '(1,1)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for POINT


<br>

#### <a id="fail-geo_contained_by__box_box-TDS"></a><a id="fail-geo_contained_by__box_box-Relation"></a>`geo_contained_by__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(1,1),(0,0)' <@ box '(9,9),(0,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT box '(1,1),(0,0)' <@ box '(9,9),(0,0)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT box '(1,1),(0,0)' <@ box '(9,9),(0,0)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BOX


<br>

#### <a id="fail-geo_contained_by__circle_circle-TDS"></a><a id="fail-geo_contained_by__circle_circle-Relation"></a>`geo_contained_by__circle_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),1>' <@ circle '<(0,0),5>' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT circle '<(0,0),1>' <@ circle '<(0,0),5>' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT circle '<(0,0),1>' <@ circle '<(0,0),5>' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for CIRCLE


<br>

#### <a id="fail-geo_contained_by__lseg_box-TDS"></a><a id="fail-geo_contained_by__lseg_box-Relation"></a>`geo_contained_by__lseg_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(1,1),(2,2)]' <@ box '(9,9),(0,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT lseg '[(1,1),(2,2)]' <@ box '(9,9),(0,0)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT lseg '[(1,1),(2,2)]' <@ box '(9,9),(0,0)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for LSEG


<br>

#### <a id="fail-geo_contained_by__lseg_line-TDS"></a><a id="fail-geo_contained_by__lseg_line-Relation"></a>`geo_contained_by__lseg_line`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(1,1),(2,2)]' <@ line '{1,-1,0}' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT lseg '[(1,1),(2,2)]' <@ line '{1,-1,0}' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT lseg '[(1,1),(2,2)]' <@ line '{1,-1,0}' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for LSEG


<br>

#### <a id="fail-geo_contained_by__point_box-TDS"></a><a id="fail-geo_contained_by__point_box-Relation"></a>`geo_contained_by__point_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(1,1)' <@ box '(9,9),(0,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT point '(1,1)' <@ box '(9,9),(0,0)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT point '(1,1)' <@ box '(9,9),(0,0)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for POINT


<br>

#### <a id="fail-geo_contained_by__point_circle-TDS"></a><a id="fail-geo_contained_by__point_circle-Relation"></a>`geo_contained_by__point_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(1,1)' <@ circle '<(0,0),5>' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT point '(1,1)' <@ circle '<(0,0),5>' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT point '(1,1)' <@ circle '<(0,0),5>' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for POINT


<br>

#### <a id="fail-geo_contained_by__point_line-TDS"></a><a id="fail-geo_contained_by__point_line-Relation"></a>`geo_contained_by__point_line`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(1,1)' <@ line '{1,-1,0}' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT point '(1,1)' <@ line '{1,-1,0}' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT point '(1,1)' <@ line '{1,-1,0}' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for POINT


<br>

#### <a id="fail-geo_contained_by__point_lseg-TDS"></a><a id="fail-geo_contained_by__point_lseg-Relation"></a>`geo_contained_by__point_lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(1,1)' <@ lseg '[(0,0),(2,2)]' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT point '(1,1)' <@ lseg '[(0,0),(2,2)]' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT point '(1,1)' <@ lseg '[(0,0),(2,2)]' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for POINT


<br>

#### <a id="fail-geo_contained_by__point_path-TDS"></a><a id="fail-geo_contained_by__point_path-Relation"></a>`geo_contained_by__point_path`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(1,1)' <@ path '((0,0),(2,2),(4,0))' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT point '(1,1)' <@ path '((0,0),(2,2),(4,0))' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT point '(1,1)' <@ path '((0,0),(2,2),(4,0))' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for POINT


<br>

#### <a id="fail-geo_contained_by__point_polygon-TDS"></a><a id="fail-geo_contained_by__point_polygon-Relation"></a>`geo_contained_by__point_polygon`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(1,1)' <@ polygon '((0,0),(0,9),(9,9),(9,0))' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT point '(1,1)' <@ polygon '((0,0),(0,9),(9,9),(9,0))' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT point '(1,1)' <@ polygon '((0,0),(0,9),(9,9),(9,0))' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for POINT


<br>

#### <a id="fail-geo_contained_by__polygon_polygon-TDS"></a><a id="fail-geo_contained_by__polygon_polygon-Relation"></a>`geo_contained_by__polygon_polygon`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT polygon '((1,1),(1,2),(2,2),(2,1))' <@ polygon '((0,0),(0,9),(9,9),(9,0))' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT polygon '((1,1),(1,2),(2,2),(2,1))' <@ polygon '((0,0),(0,9),(9,9),(9,0))' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT polygon '((1,1),(1,2),(2,2),(2,1))' <@ polygon '((0,0),(0,9),(9,9),(9,0))' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for POLYGON


<br>

#### <a id="fail-geo_eq__box_box-TDS"></a><a id="fail-geo_eq__box_box-Relation"></a>`geo_eq__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(1,1),(0,0)' = box '(1,1),(0,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT box '(1,1),(0,0)' = box '(1,1),(0,0)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT box '(1,1),(0,0)' = box '(1,1),(0,0)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BOX


<br>

#### <a id="fail-geo_eq__circle_circle-TDS"></a><a id="fail-geo_eq__circle_circle-Relation"></a>`geo_eq__circle_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),1>' = circle '<(0,0),1>' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT circle '<(0,0),1>' = circle '<(0,0),1>' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT circle '<(0,0),1>' = circle '<(0,0),1>' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for CIRCLE


<br>

#### <a id="fail-geo_eq__line_line-TDS"></a><a id="fail-geo_eq__line_line-Relation"></a>`geo_eq__line_line`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT line '{1,0,0}' = line '{1,0,0}' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT line '{1,0,0}' = line '{1,0,0}' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT line '{1,0,0}' = line '{1,0,0}' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for LINE


<br>

#### <a id="fail-geo_eq__lseg_lseg-TDS"></a><a id="fail-geo_eq__lseg_lseg-Relation"></a>`geo_eq__lseg_lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(0,0),(1,1)]' = lseg '[(0,0),(1,1)]' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT lseg '[(0,0),(1,1)]' = lseg '[(0,0),(1,1)]' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT lseg '[(0,0),(1,1)]' = lseg '[(0,0),(1,1)]' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for LSEG


<br>

#### <a id="fail-geo_eq__path_path-TDS"></a><a id="fail-geo_eq__path_path-Relation"></a>`geo_eq__path_path`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT path '((0,0),(1,1))' = path '((0,0),(1,1))' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT path '((0,0),(1,1))' = path '((0,0),(1,1))' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT path '((0,0),(1,1))' = path '((0,0),(1,1))' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for PATH


<br>

#### <a id="fail-geo_gt__box_box-TDS"></a><a id="fail-geo_gt__box_box-Relation"></a>`geo_gt__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(4,4),(0,0)' > box '(1,1),(0,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT box '(4,4),(0,0)' > box '(1,1),(0,0)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT box '(4,4),(0,0)' > box '(1,1),(0,0)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BOX


<br>

#### <a id="fail-geo_gt__circle_circle-TDS"></a><a id="fail-geo_gt__circle_circle-Relation"></a>`geo_gt__circle_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),5>' > circle '<(0,0),1>' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT circle '<(0,0),5>' > circle '<(0,0),1>' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT circle '<(0,0),5>' > circle '<(0,0),1>' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for CIRCLE


<br>

#### <a id="fail-geo_gt__lseg_lseg-TDS"></a><a id="fail-geo_gt__lseg_lseg-Relation"></a>`geo_gt__lseg_lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(0,0),(5,5)]' > lseg '[(0,0),(1,1)]' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT lseg '[(0,0),(5,5)]' > lseg '[(0,0),(1,1)]' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT lseg '[(0,0),(5,5)]' > lseg '[(0,0),(1,1)]' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for LSEG


<br>

#### <a id="fail-geo_gt__path_path-TDS"></a><a id="fail-geo_gt__path_path-Relation"></a>`geo_gt__path_path`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT path '((0,0),(5,5))' > path '((0,0),(1,1))' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT path '((0,0),(5,5))' > path '((0,0),(1,1))' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT path '((0,0),(5,5))' > path '((0,0),(1,1))' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for PATH


<br>

#### <a id="fail-geo_gte__box_box-TDS"></a><a id="fail-geo_gte__box_box-Relation"></a>`geo_gte__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(4,4),(0,0)' >= box '(1,1),(0,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT box '(4,4),(0,0)' >= box '(1,1),(0,0)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT box '(4,4),(0,0)' >= box '(1,1),(0,0)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BOX


<br>

#### <a id="fail-geo_gte__circle_circle-TDS"></a><a id="fail-geo_gte__circle_circle-Relation"></a>`geo_gte__circle_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),5>' >= circle '<(0,0),1>' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT circle '<(0,0),5>' >= circle '<(0,0),1>' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT circle '<(0,0),5>' >= circle '<(0,0),1>' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for CIRCLE


<br>

#### <a id="fail-geo_gte__lseg_lseg-TDS"></a><a id="fail-geo_gte__lseg_lseg-Relation"></a>`geo_gte__lseg_lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(0,0),(5,5)]' >= lseg '[(0,0),(1,1)]' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT lseg '[(0,0),(5,5)]' >= lseg '[(0,0),(1,1)]' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT lseg '[(0,0),(5,5)]' >= lseg '[(0,0),(1,1)]' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for LSEG


<br>

#### <a id="fail-geo_gte__path_path-TDS"></a><a id="fail-geo_gte__path_path-Relation"></a>`geo_gte__path_path`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT path '((0,0),(5,5))' >= path '((0,0),(1,1))' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT path '((0,0),(5,5))' >= path '((0,0),(1,1))' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT path '((0,0),(5,5))' >= path '((0,0),(1,1))' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for PATH


<br>

#### <a id="fail-geo_strictly_right__box_box-TDS"></a><a id="fail-geo_strictly_right__box_box-Relation"></a>`geo_strictly_right__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(9,9),(8,8)' >> box '(1,1),(0,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT box '(9,9),(8,8)' >> box '(1,1),(0,0)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT box '(9,9),(8,8)' >> box '(1,1),(0,0)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BOX, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_strictly_right__circle_circle-TDS"></a><a id="fail-geo_strictly_right__circle_circle-Relation"></a>`geo_strictly_right__circle_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(9,9),1>' >> circle '<(0,0),1>' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT circle '<(9,9),1>' >> circle '<(0,0),1>' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT circle '<(9,9),1>' >> circle '<(0,0),1>' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for CIRCLE, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_strictly_right__point_point-TDS"></a><a id="fail-geo_strictly_right__point_point-Relation"></a>`geo_strictly_right__point_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(9,9)' >> point '(0,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT point '(9,9)' >> point '(0,0)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT point '(9,9)' >> point '(0,0)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for POINT, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_strictly_right__polygon_polygon-TDS"></a><a id="fail-geo_strictly_right__polygon_polygon-Relation"></a>`geo_strictly_right__polygon_polygon`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT polygon '((9,9),(9,10),(10,10),(10,9))' >> polygon '((0,0),(0,1),(1,1),(1,0))' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT polygon '((9,9),(9,10),(10,10),(10,9))' >> polygon '((0,0),(0,1),(1,1),(1,0))' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT polygon '((9,9),(9,10),(10,10),(10,9))' >> polygon '((0,0),(0,1),(1,1),(1,0))' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for POLYGON, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_horizontal__line-TDS"></a><a id="fail-geo_horizontal__line-Relation"></a>`geo_horizontal__line`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ?- line '{0,1,0}' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ? - line '{0,1,0}' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ? - line '{0,1,0}' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for LINE, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_horizontal__lseg-TDS"></a><a id="fail-geo_horizontal__lseg-Relation"></a>`geo_horizontal__lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ?- lseg '[(0,0),(5,0)]' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ? - lseg '[(0,0),(5,0)]' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ? - lseg '[(0,0),(5,0)]' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for LSEG, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-geo_contains__box_box-TDS"></a><a id="fail-geo_contains__box_box-Relation"></a>`geo_contains__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(9,9),(0,0)' @> box '(2,2),(1,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT box '(9,9),(0,0)' @> box '(2,2),(1,1)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT box '(9,9),(0,0)' @> box '(2,2),(1,1)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BOX


<br>

#### <a id="fail-geo_contains__box_point-TDS"></a><a id="fail-geo_contains__box_point-Relation"></a>`geo_contains__box_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(9,9),(0,0)' @> point '(1,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT box '(9,9),(0,0)' @> point '(1,1)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT box '(9,9),(0,0)' @> point '(1,1)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BOX


<br>

#### <a id="fail-geo_contains__circle_circle-TDS"></a><a id="fail-geo_contains__circle_circle-Relation"></a>`geo_contains__circle_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),5>' @> circle '<(0,0),1>' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT circle '<(0,0),5>' @> circle '<(0,0),1>' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT circle '<(0,0),5>' @> circle '<(0,0),1>' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for CIRCLE


<br>

#### <a id="fail-geo_contains__circle_point-TDS"></a><a id="fail-geo_contains__circle_point-Relation"></a>`geo_contains__circle_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),5>' @> point '(1,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT circle '<(0,0),5>' @> point '(1,1)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT circle '<(0,0),5>' @> point '(1,1)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for CIRCLE


<br>

#### <a id="fail-geo_contains__path_point-TDS"></a><a id="fail-geo_contains__path_point-Relation"></a>`geo_contains__path_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT path '((0,0),(2,2),(4,0))' @> point '(2,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT path '((0,0),(2,2),(4,0))' @> point '(2,1)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT path '((0,0),(2,2),(4,0))' @> point '(2,1)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for PATH


<br>

#### <a id="fail-geo_contains__polygon_point-TDS"></a><a id="fail-geo_contains__polygon_point-Relation"></a>`geo_contains__polygon_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT polygon '((0,0),(0,9),(9,9),(9,0))' @> point '(1,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT polygon '((0,0),(0,9),(9,9),(9,0))' @> point '(1,1)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT polygon '((0,0),(0,9),(9,9),(9,0))' @> point '(1,1)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for POLYGON


<br>

#### <a id="fail-geo_contains__polygon_polygon-TDS"></a><a id="fail-geo_contains__polygon_polygon-Relation"></a>`geo_contains__polygon_polygon`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT polygon '((0,0),(0,9),(9,9),(9,0))' @> polygon '((1,1),(1,2),(2,2),(2,1))' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT polygon '((0,0),(0,9),(9,9),(9,0))' @> polygon '((1,1),(1,2),(2,2),(2,1))' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT polygon '((0,0),(0,9),(9,9),(9,0))' @> polygon '((1,1),(1,2),(2,2),(2,1))' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for POLYGON


<br>

#### <a id="fail-bytea_not_like-TDS"></a><a id="fail-bytea_not_like-Relation"></a>`bytea_not_like`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('abc' AS bytea) !~~ CAST('z%' AS bytea) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('abc' AS bytea) !~~ CAST('z%' AS bytea) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('abc' AS bytea) !~~ CAST('z%' AS bytea) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BYTEA


<br>

#### <a id="fail-op_add__date_plus_time-TDS"></a><a id="fail-op_add__date_plus_time-Relation"></a>`op_add__date_plus_time`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT d + TIME '10:30:00' AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT d + TIME '10:30:00' AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT d + TIME '10:30:00' AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No value found for TIME, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-op_add__date_plus_timetz-TDS"></a><a id="fail-op_add__date_plus_timetz-Relation"></a>`op_add__date_plus_timetz`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT d + CAST('10:30:00+00' AS timetz) AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT d + CAST('10:30:00+00' AS timetz) AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT d + CAST('10:30:00+00' AS timetz) AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No value found for TIMETZ, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-op_add__interval_plus_time-TDS"></a><a id="fail-op_add__interval_plus_time-Relation"></a>`op_add__interval_plus_time`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT INTERVAL '1 hour' + TIME '10:30:00' AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT INTERVAL '1 hour' + TIME '10:30:00' AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT INTERVAL '1 hour' + TIME '10:30:00' AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No value found for TIME, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-op_add__interval_plus_timetz-TDS"></a><a id="fail-op_add__interval_plus_timetz-Relation"></a>`op_add__interval_plus_timetz`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT INTERVAL '1 hour' + CAST('10:30:00+00' AS timetz) AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT INTERVAL '1 hour' + CAST('10:30:00+00' AS timetz) AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT INTERVAL '1 hour' + CAST('10:30:00+00' AS timetz) AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No value found for TIMETZ, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-op_add__time_plus_date-TDS"></a><a id="fail-op_add__time_plus_date-Relation"></a>`op_add__time_plus_date`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TIME '10:30:00' + d AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT TIME '10:30:00' + d AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT TIME '10:30:00' + d AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No value found for TIME, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-op_add__time_plus_interval-TDS"></a><a id="fail-op_add__time_plus_interval-Relation"></a>`op_add__time_plus_interval`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TIME '10:30:00' + INTERVAL '1 hour' AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT TIME '10:30:00' + INTERVAL '1 hour' AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT TIME '10:30:00' + INTERVAL '1 hour' AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No value found for TIME, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-op_add__timetz_plus_date-TDS"></a><a id="fail-op_add__timetz_plus_date-Relation"></a>`op_add__timetz_plus_date`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('10:30:00+00' AS timetz) + d AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('10:30:00+00' AS timetz) + d AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('10:30:00+00' AS timetz) + d AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No value found for TIMETZ, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-op_add__timetz_plus_interval-TDS"></a><a id="fail-op_add__timetz_plus_interval-Relation"></a>`op_add__timetz_plus_interval`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('10:30:00+00' AS timetz) + INTERVAL '1 hour' AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('10:30:00+00' AS timetz) + INTERVAL '1 hour' AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('10:30:00+00' AS timetz) + INTERVAL '1 hour' AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No value found for TIMETZ, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-op_sub__pg_lsn_minus_pg_lsn-TDS"></a><a id="fail-op_sub__pg_lsn_minus_pg_lsn-Relation"></a>`op_sub__pg_lsn_minus_pg_lsn`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('0/10' AS pg_lsn) - CAST('0/1' AS pg_lsn) AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('0/10' AS pg_lsn) - CAST('0/1' AS pg_lsn) AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('0/10' AS pg_lsn) - CAST('0/1' AS pg_lsn) AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No value found for PG_LSN, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-op_sub__time_minus_interval-TDS"></a><a id="fail-op_sub__time_minus_interval-Relation"></a>`op_sub__time_minus_interval`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TIME '10:30:00' - INTERVAL '1 hour' AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT TIME '10:30:00' - INTERVAL '1 hour' AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT TIME '10:30:00' - INTERVAL '1 hour' AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No value found for TIME, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-op_sub__time_minus_time-TDS"></a><a id="fail-op_sub__time_minus_time-Relation"></a>`op_sub__time_minus_time`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TIME '10:30:00' - TIME '08:00:00' AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT TIME '10:30:00' - TIME '08:00:00' AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT TIME '10:30:00' - TIME '08:00:00' AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No value found for TIME, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-op_sub__timestamptz_minus_timestamptz-TDS"></a><a id="fail-op_sub__timestamptz_minus_timestamptz-Relation"></a>`op_sub__timestamptz_minus_timestamptz`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT tsz - CAST('2000-01-01 00:00:00' AS timestamptz) AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT tsz - CAST('2000-01-01 00:00:00' AS timestamptz) AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT tsz - CAST('2000-01-01 00:00:00' AS timestamptz) AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No value found for TIMESTAMPTZ, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-op_sub__timetz_minus_interval-TDS"></a><a id="fail-op_sub__timetz_minus_interval-Relation"></a>`op_sub__timetz_minus_interval`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('10:30:00+00' AS timetz) - INTERVAL '1 hour' AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('10:30:00+00' AS timetz) - INTERVAL '1 hour' AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('10:30:00+00' AS timetz) - INTERVAL '1 hour' AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No value found for TIMETZ, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-bytea_lt-TDS"></a><a id="fail-bytea_lt-Relation"></a>`bytea_lt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('\x01' AS bytea) < CAST('\x02' AS bytea) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('\x01' AS bytea) < CAST('\x02' AS bytea) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('\x01' AS bytea) < CAST('\x02' AS bytea) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BYTEA


<br>

#### <a id="fail-oid_lt-TDS"></a><a id="fail-oid_lt-Relation"></a>`oid_lt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(1 AS oid) < CAST(2 AS oid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(1 AS oid) < CAST(2 AS oid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(1 AS oid) < CAST(2 AS oid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for OID, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-pg_lsn_lt-TDS"></a><a id="fail-pg_lsn_lt-Relation"></a>`pg_lsn_lt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('0/1' AS pg_lsn) < CAST('0/2' AS pg_lsn) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('0/1' AS pg_lsn) < CAST('0/2' AS pg_lsn) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('0/1' AS pg_lsn) < CAST('0/2' AS pg_lsn) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for PG_LSN


<br>

#### <a id="fail-tid_lt-TDS"></a><a id="fail-tid_lt-Relation"></a>`tid_lt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('(0,1)' AS tid) < CAST('(0,2)' AS tid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('(0,1)' AS tid) < CAST('(0,2)' AS tid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('(0,1)' AS tid) < CAST('(0,2)' AS tid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for TID


<br>

#### <a id="fail-uuid_lt-TDS"></a><a id="fail-uuid_lt-Relation"></a>`uuid_lt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('00000000-0000-0000-0000-000000000000' AS uuid) < CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('00000000-0000-0000-0000-000000000000' AS uuid) < CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('00000000-0000-0000-0000-000000000000' AS uuid) < CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for UUID


<br>

#### <a id="fail-xid8_lt-TDS"></a><a id="fail-xid8_lt-Relation"></a>`xid8_lt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('1' AS xid8) < CAST('2' AS xid8) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('1' AS xid8) < CAST('2' AS xid8) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('1' AS xid8) < CAST('2' AS xid8) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for XID8


<br>

#### <a id="fail-bytea_lte-TDS"></a><a id="fail-bytea_lte-Relation"></a>`bytea_lte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('\x01' AS bytea) <= CAST('\x02' AS bytea) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('\x01' AS bytea) <= CAST('\x02' AS bytea) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('\x01' AS bytea) <= CAST('\x02' AS bytea) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BYTEA


<br>

#### <a id="fail-oid_lte-TDS"></a><a id="fail-oid_lte-Relation"></a>`oid_lte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(1 AS oid) <= CAST(2 AS oid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(1 AS oid) <= CAST(2 AS oid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(1 AS oid) <= CAST(2 AS oid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for OID, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-pg_lsn_lte-TDS"></a><a id="fail-pg_lsn_lte-Relation"></a>`pg_lsn_lte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('0/1' AS pg_lsn) <= CAST('0/2' AS pg_lsn) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('0/1' AS pg_lsn) <= CAST('0/2' AS pg_lsn) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('0/1' AS pg_lsn) <= CAST('0/2' AS pg_lsn) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for PG_LSN


<br>

#### <a id="fail-tid_lte-TDS"></a><a id="fail-tid_lte-Relation"></a>`tid_lte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('(0,1)' AS tid) <= CAST('(0,2)' AS tid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('(0,1)' AS tid) <= CAST('(0,2)' AS tid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('(0,1)' AS tid) <= CAST('(0,2)' AS tid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for TID


<br>

#### <a id="fail-uuid_lte-TDS"></a><a id="fail-uuid_lte-Relation"></a>`uuid_lte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('00000000-0000-0000-0000-000000000000' AS uuid) <= CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('00000000-0000-0000-0000-000000000000' AS uuid) <= CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('00000000-0000-0000-0000-000000000000' AS uuid) <= CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for UUID


<br>

#### <a id="fail-xid8_lte-TDS"></a><a id="fail-xid8_lte-Relation"></a>`xid8_lte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('1' AS xid8) <= CAST('2' AS xid8) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('1' AS xid8) <= CAST('2' AS xid8) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('1' AS xid8) <= CAST('2' AS xid8) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for XID8


<br>

#### <a id="fail-bytea_neq-TDS"></a><a id="fail-bytea_neq-Relation"></a>`bytea_neq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('\x0102' AS bytea) <> CAST('\x03' AS bytea) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('\x0102' AS bytea) <> CAST('\x03' AS bytea) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('\x0102' AS bytea) <> CAST('\x03' AS bytea) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BYTEA


<br>

#### <a id="fail-oid_neq-TDS"></a><a id="fail-oid_neq-Relation"></a>`oid_neq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(1 AS oid) <> CAST(2 AS oid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(1 AS oid) <> CAST(2 AS oid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(1 AS oid) <> CAST(2 AS oid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for OID, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-pg_lsn_neq-TDS"></a><a id="fail-pg_lsn_neq-Relation"></a>`pg_lsn_neq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('0/1' AS pg_lsn) <> CAST('0/2' AS pg_lsn) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('0/1' AS pg_lsn) <> CAST('0/2' AS pg_lsn) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('0/1' AS pg_lsn) <> CAST('0/2' AS pg_lsn) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for PG_LSN


<br>

#### <a id="fail-tid_neq-TDS"></a><a id="fail-tid_neq-Relation"></a>`tid_neq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('(0,1)' AS tid) <> CAST('(0,2)' AS tid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('(0,1)' AS tid) <> CAST('(0,2)' AS tid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('(0,1)' AS tid) <> CAST('(0,2)' AS tid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for TID


<br>

#### <a id="fail-uuid_neq-TDS"></a><a id="fail-uuid_neq-Relation"></a>`uuid_neq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) <> CAST('00000000-0000-0000-0000-000000000000' AS uuid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) <> CAST('00000000-0000-0000-0000-000000000000' AS uuid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) <> CAST('00000000-0000-0000-0000-000000000000' AS uuid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for UUID


<br>

#### <a id="fail-xid_neq-TDS"></a><a id="fail-xid_neq-Relation"></a>`xid_neq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('1' AS xid) <> CAST('2' AS xid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('1' AS xid) <> CAST('2' AS xid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('1' AS xid) <> CAST('2' AS xid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for XID


<br>

#### <a id="fail-xid8_neq-TDS"></a><a id="fail-xid8_neq-Relation"></a>`xid8_neq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('1' AS xid8) <> CAST('2' AS xid8) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('1' AS xid8) <> CAST('2' AS xid8) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('1' AS xid8) <> CAST('2' AS xid8) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for XID8


<br>

#### <a id="fail-aclitem_eq-TDS"></a><a id="fail-aclitem_eq-Relation"></a>`aclitem_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT 'foo=r/bar'::aclitem = 'foo=r/bar'::aclitem AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT 'foo=r/bar'::aclitem = 'foo=r/bar'::aclitem AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT 'foo=r/bar'::aclitem = 'foo=r/bar'::aclitem AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for ACLITEM


<br>

#### <a id="fail-bytea_eq-TDS"></a><a id="fail-bytea_eq-Relation"></a>`bytea_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('\x0102' AS bytea) = CAST('\x0102' AS bytea) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('\x0102' AS bytea) = CAST('\x0102' AS bytea) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('\x0102' AS bytea) = CAST('\x0102' AS bytea) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BYTEA


<br>

#### <a id="fail-cid_eq-TDS"></a><a id="fail-cid_eq-Relation"></a>`cid_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(1 AS cid) = CAST(1 AS cid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(1 AS cid) = CAST(1 AS cid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(1 AS cid) = CAST(1 AS cid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for CID, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-oid_eq-TDS"></a><a id="fail-oid_eq-Relation"></a>`oid_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(1 AS oid) = CAST(1 AS oid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(1 AS oid) = CAST(1 AS oid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(1 AS oid) = CAST(1 AS oid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for OID, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-pg_lsn_eq-TDS"></a><a id="fail-pg_lsn_eq-Relation"></a>`pg_lsn_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('0/1' AS pg_lsn) = CAST('0/1' AS pg_lsn) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('0/1' AS pg_lsn) = CAST('0/1' AS pg_lsn) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('0/1' AS pg_lsn) = CAST('0/1' AS pg_lsn) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for PG_LSN


<br>

#### <a id="fail-tid_eq-TDS"></a><a id="fail-tid_eq-Relation"></a>`tid_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('(0,1)' AS tid) = CAST('(0,1)' AS tid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('(0,1)' AS tid) = CAST('(0,1)' AS tid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('(0,1)' AS tid) = CAST('(0,1)' AS tid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for TID


<br>

#### <a id="fail-uuid_eq-TDS"></a><a id="fail-uuid_eq-Relation"></a>`uuid_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) = CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) = CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) = CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for UUID


<br>

#### <a id="fail-xid_eq-TDS"></a><a id="fail-xid_eq-Relation"></a>`xid_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('1' AS xid) = CAST('1' AS xid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('1' AS xid) = CAST('1' AS xid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('1' AS xid) = CAST('1' AS xid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for XID


<br>

#### <a id="fail-xid8_eq-TDS"></a><a id="fail-xid8_eq-Relation"></a>`xid8_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('1' AS xid8) = CAST('1' AS xid8) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('1' AS xid8) = CAST('1' AS xid8) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('1' AS xid8) = CAST('1' AS xid8) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for XID8


<br>

#### <a id="fail-bytea_gt-TDS"></a><a id="fail-bytea_gt-Relation"></a>`bytea_gt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('\x02' AS bytea) > CAST('\x01' AS bytea) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('\x02' AS bytea) > CAST('\x01' AS bytea) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('\x02' AS bytea) > CAST('\x01' AS bytea) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BYTEA


<br>

#### <a id="fail-oid_gt-TDS"></a><a id="fail-oid_gt-Relation"></a>`oid_gt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(2 AS oid) > CAST(1 AS oid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(2 AS oid) > CAST(1 AS oid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(2 AS oid) > CAST(1 AS oid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for OID, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-pg_lsn_gt-TDS"></a><a id="fail-pg_lsn_gt-Relation"></a>`pg_lsn_gt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('0/2' AS pg_lsn) > CAST('0/1' AS pg_lsn) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('0/2' AS pg_lsn) > CAST('0/1' AS pg_lsn) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('0/2' AS pg_lsn) > CAST('0/1' AS pg_lsn) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for PG_LSN


<br>

#### <a id="fail-tid_gt-TDS"></a><a id="fail-tid_gt-Relation"></a>`tid_gt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('(0,2)' AS tid) > CAST('(0,1)' AS tid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('(0,2)' AS tid) > CAST('(0,1)' AS tid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('(0,2)' AS tid) > CAST('(0,1)' AS tid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for TID


<br>

#### <a id="fail-uuid_gt-TDS"></a><a id="fail-uuid_gt-Relation"></a>`uuid_gt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) > CAST('00000000-0000-0000-0000-000000000000' AS uuid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) > CAST('00000000-0000-0000-0000-000000000000' AS uuid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) > CAST('00000000-0000-0000-0000-000000000000' AS uuid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for UUID


<br>

#### <a id="fail-xid8_gt-TDS"></a><a id="fail-xid8_gt-Relation"></a>`xid8_gt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('2' AS xid8) > CAST('1' AS xid8) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('2' AS xid8) > CAST('1' AS xid8) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('2' AS xid8) > CAST('1' AS xid8) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for XID8


<br>

#### <a id="fail-bytea_gte-TDS"></a><a id="fail-bytea_gte-Relation"></a>`bytea_gte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('\x02' AS bytea) >= CAST('\x01' AS bytea) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('\x02' AS bytea) >= CAST('\x01' AS bytea) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('\x02' AS bytea) >= CAST('\x01' AS bytea) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BYTEA


<br>

#### <a id="fail-oid_gte-TDS"></a><a id="fail-oid_gte-Relation"></a>`oid_gte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(2 AS oid) >= CAST(1 AS oid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(2 AS oid) >= CAST(1 AS oid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(2 AS oid) >= CAST(1 AS oid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for OID, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-pg_lsn_gte-TDS"></a><a id="fail-pg_lsn_gte-Relation"></a>`pg_lsn_gte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('0/2' AS pg_lsn) >= CAST('0/1' AS pg_lsn) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('0/2' AS pg_lsn) >= CAST('0/1' AS pg_lsn) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('0/2' AS pg_lsn) >= CAST('0/1' AS pg_lsn) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for PG_LSN


<br>

#### <a id="fail-tid_gte-TDS"></a><a id="fail-tid_gte-Relation"></a>`tid_gte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('(0,2)' AS tid) >= CAST('(0,1)' AS tid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('(0,2)' AS tid) >= CAST('(0,1)' AS tid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('(0,2)' AS tid) >= CAST('(0,1)' AS tid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for TID


<br>

#### <a id="fail-uuid_gte-TDS"></a><a id="fail-uuid_gte-Relation"></a>`uuid_gte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) >= CAST('00000000-0000-0000-0000-000000000000' AS uuid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) >= CAST('00000000-0000-0000-0000-000000000000' AS uuid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('123e4567-e89b-12d3-a456-426614174000' AS uuid) >= CAST('00000000-0000-0000-0000-000000000000' AS uuid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for UUID


<br>

#### <a id="fail-xid8_gte-TDS"></a><a id="fail-xid8_gte-Relation"></a>`xid8_gte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('2' AS xid8) >= CAST('1' AS xid8) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('2' AS xid8) >= CAST('1' AS xid8) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('2' AS xid8) >= CAST('1' AS xid8) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for XID8


<br>

#### <a id="fail-bytea_concat-TDS"></a><a id="fail-bytea_concat-Relation"></a>`bytea_concat`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('\x01' AS bytea) || CAST('\x02' AS bytea) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('\x01' AS bytea) || CAST('\x02' AS bytea) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('\x01' AS bytea) || CAST('\x02' AS bytea) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BYTEA


<br>

#### <a id="fail-bytea_like-TDS"></a><a id="fail-bytea_like-Relation"></a>`bytea_like`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('abc' AS bytea) ~~ CAST('a%' AS bytea) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST('abc' AS bytea) ~~ CAST('a%' AS bytea) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST('abc' AS bytea) ~~ CAST('a%' AS bytea) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for BYTEA


<br>

#### <a id="fail-jsonb_subscript_field-TDS"></a>`jsonb_subscript_field`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val['a'] AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val['a'] AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_subscript_array_index-TDS"></a>`jsonb_subscript_array_index`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_arr[0] AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_arr[0] AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_chained_arrow-TDS"></a>`json_chained_arrow`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT json_val -> 'a' -> 'b' ->> 'c' AS result FROM json_data WHERE id = 2
```

**Legend SQL:**
```sql
SELECT json_val -> 'a' -> 'b' ->> 'c' AS result FROM func('e2e::tds_json_data') WHERE id = 2
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_chained_arrow-TDS"></a>`jsonb_chained_arrow`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val -> 'a' -> 'b' ->> 'c' AS result FROM json_data WHERE id = 2
```

**Legend SQL:**
```sql
SELECT jsonb_val -> 'a' -> 'b' ->> 'c' AS result FROM func('e2e::tds_json_data') WHERE id = 2
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_subscript_nested-TDS"></a>`jsonb_subscript_nested`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT jsonb_val['a']['b']['c'] AS result FROM json_data WHERE id = 2
```

**Legend SQL:**
```sql
SELECT jsonb_val['a']['b']['c'] AS result FROM func('e2e::tds_json_data') WHERE id = 2
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<a id="unsupported-syntax"></a>

### UNSUPPORTED_SYNTAX (47 tests)

#### <a id="fail-op_bitxor__int__basic-TDS"></a><a id="fail-op_bitxor__int__basic-Relation"></a>`op_bitxor__int__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT id, int_val # small_val AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT id, int_val # small_val AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT id, int_val # small_val AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> [unsupported-api] The function 'bitXor' (state: [Select, false]) is not supported yet


<br>

#### <a id="fail-op_bitand__bigint__basic-TDS"></a><a id="fail-op_bitand__bigint__basic-Relation"></a>`op_bitand__bigint__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT id, big_val & 255 AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT id, big_val & 255 AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT id, big_val & 255 AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> [unsupported-api] The function 'bitAnd' (state: [Select, false]) is not supported yet


<br>

#### <a id="fail-op_bitand__int__basic-TDS"></a><a id="fail-op_bitand__int__basic-Relation"></a>`op_bitand__int__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT id, int_val & small_val AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT id, int_val & small_val AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT id, int_val & small_val AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> [unsupported-api] The function 'bitAnd' (state: [Select, false]) is not supported yet


<br>

#### <a id="fail-op_mul__numeric_times_interval-TDS"></a><a id="fail-op_mul__numeric_times_interval-Relation"></a>`op_mul__numeric_times_interval`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT 2 * INTERVAL '1 day' AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT 2 * INTERVAL '1 day' AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT 2 * INTERVAL '1 day' AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> date arithmetic expression not currently supported


<br>

#### <a id="fail-op_mul__interval_times_numeric-TDS"></a><a id="fail-op_mul__interval_times_numeric-Relation"></a>`op_mul__interval_times_numeric`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT INTERVAL '1 day' * 2 AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT INTERVAL '1 day' * 2 AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT INTERVAL '1 day' * 2 AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> date arithmetic expression not currently supported


<br>

#### <a id="fail-op_div__interval_by_numeric-TDS"></a><a id="fail-op_div__interval_by_numeric-Relation"></a>`op_div__interval_by_numeric`

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

#### <a id="fail-op_bitshl__int__basic-TDS"></a><a id="fail-op_bitshl__int__basic-Relation"></a>`op_bitshl__int__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT id, int_val << 2 AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT id, int_val << 2 AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT id, int_val << 2 AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> [unsupported-api] The function 'bitShiftLeft' (state: [Select, false]) is not supported yet


<br>

#### <a id="fail-op_bitshr__int__basic-TDS"></a><a id="fail-op_bitshr__int__basic-Relation"></a>`op_bitshr__int__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT id, int_val >> 2 AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT id, int_val >> 2 AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT id, int_val >> 2 AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> [unsupported-api] The function 'bitShiftRight' (state: [Select, false]) is not supported yet


<br>

#### <a id="fail-op_bitor__int__basic-TDS"></a><a id="fail-op_bitor__int__basic-Relation"></a>`op_bitor__int__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT id, int_val | small_val AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT id, int_val | small_val AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT id, int_val | small_val AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> [unsupported-api] The function 'bitOr' (state: [Select, false]) is not supported yet


<br>

#### <a id="fail-regex_not_match__bpchar__basic-TDS"></a><a id="fail-regex_not_match__bpchar__basic-Relation"></a>`regex_not_match__bpchar__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS CHAR(20)) !~ '^hello' AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(val AS CHAR(20)) !~ '^hello' AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(val AS CHAR(20)) !~ '^hello' AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> parameters not currently supported for this cast type


<br>

#### <a id="fail-regex_not_match_ci__bpchar__basic-TDS"></a><a id="fail-regex_not_match_ci__bpchar__basic-Relation"></a>`regex_not_match_ci__bpchar__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS CHAR(20)) !~* '^HELLO' AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(val AS CHAR(20)) !~* '^HELLO' AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(val AS CHAR(20)) !~* '^HELLO' AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> parameters not currently supported for this cast type


<br>

#### <a id="fail-not_like__bpchar__basic-TDS"></a><a id="fail-not_like__bpchar__basic-Relation"></a>`not_like__bpchar__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS CHAR(20)) !~~ 'zzz%' AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(val AS CHAR(20)) !~~ 'zzz%' AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(val AS CHAR(20)) !~~ 'zzz%' AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> parameters not currently supported for this cast type


<br>

#### <a id="fail-not_ilike__bpchar__basic-TDS"></a><a id="fail-not_ilike__bpchar__basic-Relation"></a>`not_ilike__bpchar__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS CHAR(20)) !~~* 'ZZZ%' AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(val AS CHAR(20)) !~~* 'ZZZ%' AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(val AS CHAR(20)) !~~* 'ZZZ%' AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> parameters not currently supported for this cast type


<br>

#### <a id="fail-regex_match__bpchar__basic-TDS"></a><a id="fail-regex_match__bpchar__basic-Relation"></a>`regex_match__bpchar__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS CHAR(20)) ~ '^hello' AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(val AS CHAR(20)) ~ '^hello' AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(val AS CHAR(20)) ~ '^hello' AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> parameters not currently supported for this cast type


<br>

#### <a id="fail-regex_match_ci__bpchar__basic-TDS"></a><a id="fail-regex_match_ci__bpchar__basic-Relation"></a>`regex_match_ci__bpchar__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS CHAR(20)) ~* '^HELLO' AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(val AS CHAR(20)) ~* '^HELLO' AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(val AS CHAR(20)) ~* '^HELLO' AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> parameters not currently supported for this cast type


<br>

#### <a id="fail-like__bpchar__basic-TDS"></a><a id="fail-like__bpchar__basic-Relation"></a>`like__bpchar__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS CHAR(20)) ~~ 'hel%' AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(val AS CHAR(20)) ~~ 'hel%' AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(val AS CHAR(20)) ~~ 'hel%' AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> parameters not currently supported for this cast type


<br>

#### <a id="fail-ilike__bpchar__basic-TDS"></a><a id="fail-ilike__bpchar__basic-Relation"></a>`ilike__bpchar__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS CHAR(20)) ~~* 'HEL%' AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(val AS CHAR(20)) ~~* 'HEL%' AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(val AS CHAR(20)) ~~* 'HEL%' AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> parameters not currently supported for this cast type


<br>

#### <a id="fail-bit_xor-TDS"></a><a id="fail-bit_xor-Relation"></a>`bit_xor`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(B'1010' AS bit(4)) # CAST(B'0110' AS bit(4)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(B'1010' AS bit(4)) # CAST(B'0110' AS bit(4)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(B'1010' AS bit(4)) # CAST(B'0110' AS bit(4)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-bit_and-TDS"></a><a id="fail-bit_and-Relation"></a>`bit_and`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(B'1010' AS bit(4)) & CAST(B'0110' AS bit(4)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(B'1010' AS bit(4)) & CAST(B'0110' AS bit(4)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(B'1010' AS bit(4)) & CAST(B'0110' AS bit(4)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-bit_lt-TDS"></a><a id="fail-bit_lt-Relation"></a>`bit_lt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(B'0010' AS bit(4)) < CAST(B'1010' AS bit(4)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(B'0010' AS bit(4)) < CAST(B'1010' AS bit(4)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(B'0010' AS bit(4)) < CAST(B'1010' AS bit(4)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-varbit_lt-TDS"></a><a id="fail-varbit_lt-Relation"></a>`varbit_lt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(B'0010' AS varbit) < CAST(B'1010' AS varbit) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(B'0010' AS varbit) < CAST(B'1010' AS varbit) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(B'0010' AS varbit) < CAST(B'1010' AS varbit) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-bit_shift_left-TDS"></a><a id="fail-bit_shift_left-Relation"></a>`bit_shift_left`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(B'1010' AS bit(4)) << 1 AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(B'1010' AS bit(4)) << 1 AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(B'1010' AS bit(4)) << 1 AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-bit_lte-TDS"></a><a id="fail-bit_lte-Relation"></a>`bit_lte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(B'0010' AS bit(4)) <= CAST(B'1010' AS bit(4)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(B'0010' AS bit(4)) <= CAST(B'1010' AS bit(4)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(B'0010' AS bit(4)) <= CAST(B'1010' AS bit(4)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-varbit_lte-TDS"></a><a id="fail-varbit_lte-Relation"></a>`varbit_lte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(B'0010' AS varbit) <= CAST(B'1010' AS varbit) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(B'0010' AS varbit) <= CAST(B'1010' AS varbit) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(B'0010' AS varbit) <= CAST(B'1010' AS varbit) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-bit_neq-TDS"></a><a id="fail-bit_neq-Relation"></a>`bit_neq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(B'1010' AS bit(4)) <> CAST(B'0110' AS bit(4)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(B'1010' AS bit(4)) <> CAST(B'0110' AS bit(4)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(B'1010' AS bit(4)) <> CAST(B'0110' AS bit(4)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-varbit_neq-TDS"></a><a id="fail-varbit_neq-Relation"></a>`varbit_neq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(B'1010' AS varbit) <> CAST(B'0110' AS varbit) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(B'1010' AS varbit) <> CAST(B'0110' AS varbit) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(B'1010' AS varbit) <> CAST(B'0110' AS varbit) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-bit_eq-TDS"></a><a id="fail-bit_eq-Relation"></a>`bit_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(B'1010' AS bit(4)) = CAST(B'1010' AS bit(4)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(B'1010' AS bit(4)) = CAST(B'1010' AS bit(4)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(B'1010' AS bit(4)) = CAST(B'1010' AS bit(4)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-varbit_eq-TDS"></a><a id="fail-varbit_eq-Relation"></a>`varbit_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(B'1010' AS varbit) = CAST(B'1010' AS varbit) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(B'1010' AS varbit) = CAST(B'1010' AS varbit) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(B'1010' AS varbit) = CAST(B'1010' AS varbit) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-bit_gt-TDS"></a><a id="fail-bit_gt-Relation"></a>`bit_gt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(B'1010' AS bit(4)) > CAST(B'0010' AS bit(4)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(B'1010' AS bit(4)) > CAST(B'0010' AS bit(4)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(B'1010' AS bit(4)) > CAST(B'0010' AS bit(4)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-varbit_gt-TDS"></a><a id="fail-varbit_gt-Relation"></a>`varbit_gt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(B'1010' AS varbit) > CAST(B'0010' AS varbit) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(B'1010' AS varbit) > CAST(B'0010' AS varbit) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(B'1010' AS varbit) > CAST(B'0010' AS varbit) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-bit_gte-TDS"></a><a id="fail-bit_gte-Relation"></a>`bit_gte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(B'1010' AS bit(4)) >= CAST(B'0010' AS bit(4)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(B'1010' AS bit(4)) >= CAST(B'0010' AS bit(4)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(B'1010' AS bit(4)) >= CAST(B'0010' AS bit(4)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-varbit_gte-TDS"></a><a id="fail-varbit_gte-Relation"></a>`varbit_gte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(B'1010' AS varbit) >= CAST(B'0010' AS varbit) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(B'1010' AS varbit) >= CAST(B'0010' AS varbit) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(B'1010' AS varbit) >= CAST(B'0010' AS varbit) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-bit_shift_right-TDS"></a><a id="fail-bit_shift_right-Relation"></a>`bit_shift_right`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(B'1010' AS bit(4)) >> 1 AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(B'1010' AS bit(4)) >> 1 AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(B'1010' AS bit(4)) >> 1 AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-bit_or-TDS"></a><a id="fail-bit_or-Relation"></a>`bit_or`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(B'1010' AS bit(4)) | CAST(B'0110' AS bit(4)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(B'1010' AS bit(4)) | CAST(B'0110' AS bit(4)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(B'1010' AS bit(4)) | CAST(B'0110' AS bit(4)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-bit_concat-TDS"></a><a id="fail-bit_concat-Relation"></a>`bit_concat`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(B'1010' AS varbit) || CAST(B'0110' AS varbit) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CAST(B'1010' AS varbit) || CAST(B'0110' AS varbit) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CAST(B'1010' AS varbit) || CAST(B'0110' AS varbit) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-jsonb_delete_keys-Relation"></a>`jsonb_delete_keys`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_val - array['a','c'] AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val - ARRAY['a', 'c'] AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::metamodel::type::Any), only primitive types and enums are supported


<br>

#### <a id="fail-jsonb_exists_any-TDS"></a><a id="fail-jsonb_exists_any-Relation"></a>`jsonb_exists_any`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT jsonb_val ?| array['a','z'] AS result FROM json_data WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT jsonb_val ?| ARRAY['a', 'z'] AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT jsonb_val ?| ARRAY['a', 'z'] AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> Unsupported JSON operator: ?


<br>

#### <a id="fail-jsonb_delete_index-Relation"></a>`jsonb_delete_index`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_arr - 0 AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_arr - 0 AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::metamodel::type::Any), only primitive types and enums are supported


<br>

#### <a id="fail-jsonb_delete_key_column-Relation"></a>`jsonb_delete_key_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_val - 'c' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val - 'c' AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::metamodel::type::Any), only primitive types and enums are supported


<br>

#### <a id="fail-jsonb_exists_key-TDS"></a><a id="fail-jsonb_exists_key-Relation"></a>`jsonb_exists_key`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT jsonb_val ? 'a' AS result FROM json_data WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT jsonb_val ? 'a' AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT jsonb_val ? 'a' AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> Unsupported JSON operator: ?


<br>

#### <a id="fail-jsonb_concat-Relation"></a>`jsonb_concat`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_val || '{"d":4}' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val || '{"d":4}' AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> Unsupported: concatenating json


<br>

#### <a id="fail-geo_horizontal__point_point-TDS"></a><a id="fail-geo_horizontal__point_point-Relation"></a>`geo_horizontal__point_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(0,0)' ?- point '(5,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT point '(0,0)' ? -point '(5,0)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT point '(0,0)' ? -point '(5,0)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported JSON operator: ?


<br>

#### <a id="fail-geo_vertical__point_point-TDS"></a><a id="fail-geo_vertical__point_point-Relation"></a>`geo_vertical__point_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(0,0)' ?| point '(0,5)' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT point '(0,0)' ?| point '(0,5)' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT point '(0,0)' ?| point '(0,5)' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported JSON operator: ?


<br>

#### <a id="fail-jsonb_subscript_field-Relation"></a>`jsonb_subscript_field`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_val['a'] AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val['a'] AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> subscript on variant not supported


<br>

#### <a id="fail-like__bytea_bytea__unsupported_type-TDS"></a><a id="fail-like__bytea_bytea__unsupported_type-Relation"></a>`like__bytea_bytea__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT (E'\\xDEADBEEF'::bytea LIKE E'\\xDEAD%'::bytea) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT (E'\\xDEADBEEF'::bytea LIKE E'\\xDEAD%'::bytea) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT (E'\\xDEADBEEF'::bytea LIKE E'\\xDEAD%'::bytea) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Escaped Chars String Literal


<br>

#### <a id="fail-jsonb_subscript_array_index-Relation"></a>`jsonb_subscript_array_index`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_arr[0] AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_arr[0] AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> subscript on variant not supported


<br>

#### <a id="fail-jsonb_subscript_nested-Relation"></a>`jsonb_subscript_nested`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_val['a']['b']['c'] AS result FROM json_data WHERE id = 2
```

**Legend SQL:**
```sql
SELECT jsonb_val['a']['b']['c'] AS result FROM func('e2e::rel_json_data') WHERE id = 2
```

**Error:**
> subscript on variant not supported


<a id="misc"></a>

### MISC (37 tests)

#### <a id="fail-op_mod__by_zero__error-TDS"></a><a id="fail-op_mod__by_zero__error-Relation"></a>`op_mod__by_zero__error`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT id, int_val % 0 AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT id, int_val % 0 AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT id, int_val % 0 AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> ERROR: division by zero


<br>

#### <a id="fail-op_mod__numeric__basic-Relation"></a>`op_mod__numeric__basic`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT id, numeric_val % 3 AS result FROM numbers WHERE id = 1
```

**Legend SQL:**
```sql
SELECT id, numeric_val % 3 AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> Can't find a match for function 'meta::pure::functions::math::mod(Float[1],Integer[1])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\tmod(Integer[1],Integer[1]):Integer[1]\n


<br>

#### <a id="fail-op_add__int_plus_date_days-TDS"></a><a id="fail-op_add__int_plus_date_days-Relation"></a>`op_add__int_plus_date_days`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT 5 + d AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT 5 + d AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT 5 + d AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> left side of date arithmetic must be non interval date


<br>

#### <a id="fail-op_div__by_zero__error-TDS"></a><a id="fail-op_div__by_zero__error-Relation"></a>`op_div__by_zero__error`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT id, int_val / 0 AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT id, int_val / 0 AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT id, int_val / 0 AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> ERROR: division by zero


<br>

#### <a id="fail-text_fts_match_op-TDS"></a><a id="fail-text_fts_match_op-Relation"></a>`text_fts_match_op`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT val @@ 'hello' AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT val @@ 'hello' AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT val @@ 'hello' AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> json operation left side must be variant


<br>

#### <a id="fail-array_lt-TDS"></a><a id="fail-array_lt-Relation"></a>`array_lt`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT ARRAY[1,2] < ARRAY[1,3] AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT ARRAY[1, 2] < ARRAY[1, 3] AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> Execution error at ??, "Cannot cast a collection of size 2 to multiplicity [1]"

📗 **Relation Path**

**Input SQL:**
```sql
SELECT ARRAY[1,2] < ARRAY[1,3] AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT ARRAY[1, 2] < ARRAY[1, 3] AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Can't find a match for function 'lessThan(Integer[2],Integer[2])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\tlessThan(U[0..1],Relation<Z=(?:U)>[1]):Boolean[1]\n\t\tlessThan(Boolean[1],Boolean[1]):Boolean[1]\n\t\tlessThan(Boolean[1],Boolean[0..1]):Boolean[1]\n\t\tlessThan(Boolean[0..1],Boolean[1]):Boolean[1]\n\t\tlessThan(Boolean[0..1],Boolean[0..1]):Boolean[1]\n\t\tlessThan(Date[1],Date[1]):Boolean[1]\n\t\tlessThan(Date[1],Date[0..1]):Boolean[1]\n\t\tlessThan(Date[0..1],Date[1]):Boolean[1]\n\t\tlessThan(Date[0..1],Date[0..1]):Boolean[1]\n\t\tlessThan(Number[1],Number[1]):Boolean[1]\n\t\tlessThan(Number[1],Number[0..1]):Boolean[1]\n\t\tlessThan(Number[0..1],Number[1]):Boolean[1]\n\t\tlessThan(Number[0..1],Number[0..1]):Boolean[1]\n\t\tlessThan(String[1],String[1]):Boolean[1]\n\t\tlessThan(String[1],String[0..1]):Boolean[1]\n\t\tlessThan(String[0..1],String[1]):Boolean[1]\n\t\tlessThan(String[0..1],String[0..1]):Boolean[1]\n


<br>

#### <a id="fail-array_lte-Relation"></a>`array_lte`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT ARRAY[1,2] <= ARRAY[1,3] AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT ARRAY[1, 2] <= ARRAY[1, 3] AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Can't find a match for function 'lessThanEqual(Integer[2],Integer[2])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\tlessThanEqual(U[0..1],Relation<Z=(?:U)>[1]):Boolean[1]\n\t\tlessThanEqual(Boolean[1],Boolean[1]):Boolean[1]\n\t\tlessThanEqual(Boolean[1],Boolean[0..1]):Boolean[1]\n\t\tlessThanEqual(Boolean[0..1],Boolean[1]):Boolean[1]\n\t\tlessThanEqual(Boolean[0..1],Boolean[0..1]):Boolean[1]\n\t\tlessThanEqual(Date[1],Date[1]):Boolean[1]\n\t\tlessThanEqual(Date[1],Date[0..1]):Boolean[1]\n\t\tlessThanEqual(Date[0..1],Date[1]):Boolean[1]\n\t\tlessThanEqual(Date[0..1],Date[0..1]):Boolean[1]\n\t\tlessThanEqual(Number[1],Number[1]):Boolean[1]\n\t\tlessThanEqual(Number[1],Number[0..1]):Boolean[1]\n\t\tlessThanEqual(Number[0..1],Number[1]):Boolean[1]\n\t\tlessThanEqual(Number[0..1],Number[0..1]):Boolean[1]\n\t\tlessThanEqual(String[1],String[1]):Boolean[1]\n\t\tlessThanEqual(String[1],String[0..1]):Boolean[1]\n\t\tlessThanEqual(String[0..1],String[1]):Boolean[1]\n\t\tlessThanEqual(String[0..1],String[0..1]):Boolean[1]\n


<br>

#### <a id="fail-array_neq-Relation"></a>`array_neq`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT ARRAY[1,2,3] <> ARRAY[4,5,6] AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT ARRAY[1, 2, 3] <> ARRAY[4, 5, 6] AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Left multiplicity error. Please use 'exists' instead of '==' in the expression: [1, 2, 3] == [4, 5, 6]


<br>

#### <a id="fail-array_contained_by-TDS"></a><a id="fail-array_contained_by-Relation"></a>`array_contained_by`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY[2,3] <@ ARRAY[1,2,3] AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY[2, 3] <@ ARRAY[1, 2, 3] AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY[2, 3] <@ ARRAY[1, 2, 3] AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> json operation left side must be variant


<br>

#### <a id="fail-array_eq-Relation"></a>`array_eq`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT ARRAY[1,2,3] = ARRAY[1,2,3] AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT ARRAY[1, 2, 3] = ARRAY[1, 2, 3] AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Left multiplicity error. Please use 'exists' instead of '==' in the expression: [1, 2, 3] == [1, 2, 3]


<br>

#### <a id="fail-array_gt-Relation"></a>`array_gt`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT ARRAY[1,3] > ARRAY[1,2] AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT ARRAY[1, 3] > ARRAY[1, 2] AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Can't find a match for function 'greaterThan(Integer[2],Integer[2])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\tgreaterThan(U[0..1],Relation<Z=(?:U)>[1]):Boolean[1]\n\t\tgreaterThan(Boolean[1],Boolean[1]):Boolean[1]\n\t\tgreaterThan(Boolean[1],Boolean[0..1]):Boolean[1]\n\t\tgreaterThan(Boolean[0..1],Boolean[1]):Boolean[1]\n\t\tgreaterThan(Boolean[0..1],Boolean[0..1]):Boolean[1]\n\t\tgreaterThan(Date[1],Date[1]):Boolean[1]\n\t\tgreaterThan(Date[1],Date[0..1]):Boolean[1]\n\t\tgreaterThan(Date[0..1],Date[1]):Boolean[1]\n\t\tgreaterThan(Date[0..1],Date[0..1]):Boolean[1]\n\t\tgreaterThan(Number[1],Number[1]):Boolean[1]\n\t\tgreaterThan(Number[1],Number[0..1]):Boolean[1]\n\t\tgreaterThan(Number[0..1],Number[1]):Boolean[1]\n\t\tgreaterThan(Number[0..1],Number[0..1]):Boolean[1]\n\t\tgreaterThan(String[1],String[1]):Boolean[1]\n\t\tgreaterThan(String[1],String[0..1]):Boolean[1]\n\t\tgreaterThan(String[0..1],String[1]):Boolean[1]\n\t\tgreaterThan(String[0..1],String[0..1]):Boolean[1]\n


<br>

#### <a id="fail-array_gte-Relation"></a>`array_gte`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT ARRAY[1,3] >= ARRAY[1,2] AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT ARRAY[1, 3] >= ARRAY[1, 2] AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Can't find a match for function 'greaterThanEqual(Integer[2],Integer[2])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\tgreaterThanEqual(U[0..1],Relation<Z=(?:U)>[1]):Boolean[1]\n\t\tgreaterThanEqual(Boolean[1],Boolean[1]):Boolean[1]\n\t\tgreaterThanEqual(Boolean[1],Boolean[0..1]):Boolean[1]\n\t\tgreaterThanEqual(Boolean[0..1],Boolean[1]):Boolean[1]\n\t\tgreaterThanEqual(Boolean[0..1],Boolean[0..1]):Boolean[1]\n\t\tgreaterThanEqual(Date[1],Date[1]):Boolean[1]\n\t\tgreaterThanEqual(Date[1],Date[0..1]):Boolean[1]\n\t\tgreaterThanEqual(Date[0..1],Date[1]):Boolean[1]\n\t\tgreaterThanEqual(Date[0..1],Date[0..1]):Boolean[1]\n\t\tgreaterThanEqual(Number[1],Number[1]):Boolean[1]\n\t\tgreaterThanEqual(Number[1],Number[0..1]):Boolean[1]\n\t\tgreaterThanEqual(Number[0..1],Number[1]):Boolean[1]\n\t\tgreaterThanEqual(Number[0..1],Number[0..1]):Boolean[1]\n\t\tgreaterThanEqual(String[1],String[1]):Boolean[1]\n\t\tgreaterThanEqual(String[1],String[0..1]):Boolean[1]\n\t\tgreaterThanEqual(String[0..1],String[1]):Boolean[1]\n\t\tgreaterThanEqual(String[0..1],String[0..1]):Boolean[1]\n


<br>

#### <a id="fail-jsonb_exists_all-Relation"></a>`jsonb_exists_all`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_val ?& array['a','b'] AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val ?& ARRAY['a', 'b'] AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> json operation right side must be integer or string


<br>

#### <a id="fail-array_contains-TDS"></a><a id="fail-array_contains-Relation"></a>`array_contains`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY[1,2,3] @> ARRAY[2,3] AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY[1, 2, 3] @> ARRAY[2, 3] AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY[1, 2, 3] @> ARRAY[2, 3] AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> json operation left side must be variant


<br>

#### <a id="fail-jsonb_lt-Relation"></a>`jsonb_lt`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_val < '{"z":9}' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val < '{"z":9}' AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> Can't find a match for function 'lessThan(Variant[0..1],String[1])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\tlessThan(U[0..1],Relation<Z=(?:U)>[1]):Boolean[1]\n\t\tlessThan(Boolean[1],Boolean[1]):Boolean[1]\n\t\tlessThan(Boolean[1],Boolean[0..1]):Boolean[1]\n\t\tlessThan(Boolean[0..1],Boolean[1]):Boolean[1]\n\t\tlessThan(Boolean[0..1],Boolean[0..1]):Boolean[1]\n\t\tlessThan(Date[1],Date[1]):Boolean[1]\n\t\tlessThan(Date[1],Date[0..1]):Boolean[1]\n\t\tlessThan(Date[0..1],Date[1]):Boolean[1]\n\t\tlessThan(Date[0..1],Date[0..1]):Boolean[1]\n\t\tlessThan(Number[1],Number[1]):Boolean[1]\n\t\tlessThan(Number[1],Number[0..1]):Boolean[1]\n\t\tlessThan(Number[0..1],Number[1]):Boolean[1]\n\t\tlessThan(Number[0..1],Number[0..1]):Boolean[1]\n\t\tlessThan(String[1],String[1]):Boolean[1]\n\t\tlessThan(String[1],String[0..1]):Boolean[1]\n\t\tlessThan(String[0..1],String[1]):Boolean[1]\n\t\tlessThan(String[0..1],String[0..1]):Boolean[1]\n


<br>

#### <a id="fail-jsonb_lte-Relation"></a>`jsonb_lte`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_val <= '{"z":9}' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val <= '{"z":9}' AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> Can't find a match for function 'lessThanEqual(Variant[0..1],String[1])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\tlessThanEqual(U[0..1],Relation<Z=(?:U)>[1]):Boolean[1]\n\t\tlessThanEqual(Boolean[1],Boolean[1]):Boolean[1]\n\t\tlessThanEqual(Boolean[1],Boolean[0..1]):Boolean[1]\n\t\tlessThanEqual(Boolean[0..1],Boolean[1]):Boolean[1]\n\t\tlessThanEqual(Boolean[0..1],Boolean[0..1]):Boolean[1]\n\t\tlessThanEqual(Date[1],Date[1]):Boolean[1]\n\t\tlessThanEqual(Date[1],Date[0..1]):Boolean[1]\n\t\tlessThanEqual(Date[0..1],Date[1]):Boolean[1]\n\t\tlessThanEqual(Date[0..1],Date[0..1]):Boolean[1]\n\t\tlessThanEqual(Number[1],Number[1]):Boolean[1]\n\t\tlessThanEqual(Number[1],Number[0..1]):Boolean[1]\n\t\tlessThanEqual(Number[0..1],Number[1]):Boolean[1]\n\t\tlessThanEqual(Number[0..1],Number[0..1]):Boolean[1]\n\t\tlessThanEqual(String[1],String[1]):Boolean[1]\n\t\tlessThanEqual(String[1],String[0..1]):Boolean[1]\n\t\tlessThanEqual(String[0..1],String[1]):Boolean[1]\n\t\tlessThanEqual(String[0..1],String[0..1]):Boolean[1]\n


<br>

#### <a id="fail-jsonb_neq-Relation"></a>`jsonb_neq`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_val <> '{"a":1}' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val <> '{"a":1}' AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> ERROR: operator does not exist: jsonb = text\n  Hint: No operator matches the given name and argument types. You might need to add explicit type casts.\n  Position: 95


<br>

#### <a id="fail-jsonb_contained_by_column-Relation"></a>`jsonb_contained_by_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT '{"a":1}' <@ jsonb_val AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT '{"a":1}' <@ jsonb_val AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> json operation left side must be variant


<br>

#### <a id="fail-jsonb_eq-Relation"></a>`jsonb_eq`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_val = '{"a":1,"b":"hello","c":null}' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val = '{"a":1,"b":"hello","c":null}' AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> ERROR: operator does not exist: jsonb = text\n  Hint: No operator matches the given name and argument types. You might need to add explicit type casts.\n  Position: 95


<br>

#### <a id="fail-jsonb_gt-Relation"></a>`jsonb_gt`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_val > '{"a":0}' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val > '{"a":0}' AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> Can't find a match for function 'greaterThan(Variant[0..1],String[1])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\tgreaterThan(U[0..1],Relation<Z=(?:U)>[1]):Boolean[1]\n\t\tgreaterThan(Boolean[1],Boolean[1]):Boolean[1]\n\t\tgreaterThan(Boolean[1],Boolean[0..1]):Boolean[1]\n\t\tgreaterThan(Boolean[0..1],Boolean[1]):Boolean[1]\n\t\tgreaterThan(Boolean[0..1],Boolean[0..1]):Boolean[1]\n\t\tgreaterThan(Date[1],Date[1]):Boolean[1]\n\t\tgreaterThan(Date[1],Date[0..1]):Boolean[1]\n\t\tgreaterThan(Date[0..1],Date[1]):Boolean[1]\n\t\tgreaterThan(Date[0..1],Date[0..1]):Boolean[1]\n\t\tgreaterThan(Number[1],Number[1]):Boolean[1]\n\t\tgreaterThan(Number[1],Number[0..1]):Boolean[1]\n\t\tgreaterThan(Number[0..1],Number[1]):Boolean[1]\n\t\tgreaterThan(Number[0..1],Number[0..1]):Boolean[1]\n\t\tgreaterThan(String[1],String[1]):Boolean[1]\n\t\tgreaterThan(String[1],String[0..1]):Boolean[1]\n\t\tgreaterThan(String[0..1],String[1]):Boolean[1]\n\t\tgreaterThan(String[0..1],String[0..1]):Boolean[1]\n


<br>

#### <a id="fail-jsonb_gte-Relation"></a>`jsonb_gte`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT jsonb_val >= '{"a":0}' AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT jsonb_val >= '{"a":0}' AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> Can't find a match for function 'greaterThanEqual(Variant[0..1],String[1])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\tgreaterThanEqual(U[0..1],Relation<Z=(?:U)>[1]):Boolean[1]\n\t\tgreaterThanEqual(Boolean[1],Boolean[1]):Boolean[1]\n\t\tgreaterThanEqual(Boolean[1],Boolean[0..1]):Boolean[1]\n\t\tgreaterThanEqual(Boolean[0..1],Boolean[1]):Boolean[1]\n\t\tgreaterThanEqual(Boolean[0..1],Boolean[0..1]):Boolean[1]\n\t\tgreaterThanEqual(Date[1],Date[1]):Boolean[1]\n\t\tgreaterThanEqual(Date[1],Date[0..1]):Boolean[1]\n\t\tgreaterThanEqual(Date[0..1],Date[1]):Boolean[1]\n\t\tgreaterThanEqual(Date[0..1],Date[0..1]):Boolean[1]\n\t\tgreaterThanEqual(Number[1],Number[1]):Boolean[1]\n\t\tgreaterThanEqual(Number[1],Number[0..1]):Boolean[1]\n\t\tgreaterThanEqual(Number[0..1],Number[1]):Boolean[1]\n\t\tgreaterThanEqual(Number[0..1],Number[0..1]):Boolean[1]\n\t\tgreaterThanEqual(String[1],String[1]):Boolean[1]\n\t\tgreaterThanEqual(String[1],String[0..1]):Boolean[1]\n\t\tgreaterThanEqual(String[0..1],String[1]):Boolean[1]\n\t\tgreaterThanEqual(String[0..1],String[0..1]):Boolean[1]\n


<br>

#### <a id="fail-geo_vertical__line-TDS"></a><a id="fail-geo_vertical__line-Relation"></a>`geo_vertical__line`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ?| line '{1,0,0}' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ? | line '{1,0,0}' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ? | line '{1,0,0}' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> cannot determine type for positional parameter 1


<br>

#### <a id="fail-geo_vertical__lseg-TDS"></a><a id="fail-geo_vertical__lseg-Relation"></a>`geo_vertical__lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ?| lseg '[(0,0),(0,5)]' AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ? | lseg '[(0,0),(0,5)]' AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ? | lseg '[(0,0),(0,5)]' AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> cannot determine type for positional parameter 1


<br>

#### <a id="fail-op_add__interval_plus_date-TDS"></a><a id="fail-op_add__interval_plus_date-Relation"></a>`op_add__interval_plus_date`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT INTERVAL '1 day' + d AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT INTERVAL '1 day' + d AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT INTERVAL '1 day' + d AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> right side of date arithmetic must be numeric or interval


<br>

#### <a id="fail-op_add__interval_plus_interval-TDS"></a><a id="fail-op_add__interval_plus_interval-Relation"></a>`op_add__interval_plus_interval`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT INTERVAL '1 day' + INTERVAL '2 hours' AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT INTERVAL '1 day' + INTERVAL '2 hours' AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT INTERVAL '1 day' + INTERVAL '2 hours' AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_external_query_sql/binding/fromPure/fromPure.pure line:5263 column:13), "Match failure: IntervalLiteralWrapperObject instanceOf IntervalLiteralWrapper"


<br>

#### <a id="fail-op_add__interval_plus_timestamp-TDS"></a><a id="fail-op_add__interval_plus_timestamp-Relation"></a>`op_add__interval_plus_timestamp`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT INTERVAL '1 day' + ts AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT INTERVAL '1 day' + ts AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT INTERVAL '1 day' + ts AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> right side of date arithmetic must be numeric or interval


<br>

#### <a id="fail-op_add__interval_plus_timestamptz-TDS"></a><a id="fail-op_add__interval_plus_timestamptz-Relation"></a>`op_add__interval_plus_timestamptz`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT INTERVAL '1 day' + tsz AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT INTERVAL '1 day' + tsz AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT INTERVAL '1 day' + tsz AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> right side of date arithmetic must be numeric or interval


<br>

#### <a id="fail-op_unary_minus__interval-TDS"></a><a id="fail-op_unary_minus__interval-Relation"></a>`op_unary_minus__interval`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT -INTERVAL '1 day' AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT -INTERVAL '1 day' AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT -INTERVAL '1 day' AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> interval literal only supported in certain contexts


<br>

#### <a id="fail-op_sub__interval_minus_interval-TDS"></a><a id="fail-op_sub__interval_minus_interval-Relation"></a>`op_sub__interval_minus_interval`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT INTERVAL '1 day' - INTERVAL '2 hours' AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT INTERVAL '1 day' - INTERVAL '2 hours' AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT INTERVAL '1 day' - INTERVAL '2 hours' AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_external_query_sql/binding/fromPure/fromPure.pure line:5263 column:13), "Match failure: IntervalLiteralWrapperObject instanceOf IntervalLiteralWrapper"


<br>

#### <a id="fail-op_sub__timestamp_minus_timestamp-TDS"></a><a id="fail-op_sub__timestamp_minus_timestamp-Relation"></a>`op_sub__timestamp_minus_timestamp`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ts - TIMESTAMP '2000-01-01 00:00:00' AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ts - TIMESTAMP '2000-01-01 00:00:00' AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ts - TIMESTAMP '2000-01-01 00:00:00' AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> ERROR: Error while retrieving a row


<br>

#### <a id="fail-anycompatible_concat_scalar_array-Relation"></a>`anycompatible_concat_scalar_array`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT 4 || ARRAY[1,2,3] AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT 4 || ARRAY[1, 2, 3] AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Can't find a match for function 'meta::pure::functions::string::toString(Integer[3])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\ttoString(Any[1]):String[1]\n


<br>

#### <a id="fail-anycompatible_concat_array_scalar-Relation"></a>`anycompatible_concat_array_scalar`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT ARRAY[1,2,3] || 4 AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT ARRAY[1, 2, 3] || 4 AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Can't find a match for function 'meta::pure::functions::string::toString(Integer[3])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\ttoString(Any[1]):String[1]\n


<br>

#### <a id="fail-anycompatible_concat_array_array-Relation"></a>`anycompatible_concat_array_array`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT ARRAY[1,2] || ARRAY[3,4] AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT ARRAY[1, 2] || ARRAY[3, 4] AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Can't find a match for function 'meta::pure::functions::string::toString(Integer[2])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\ttoString(Any[1]):String[1]\n


<br>

#### <a id="fail-comparison__select__multi_type-TDS"></a><a id="fail-comparison__select__multi_type-Relation"></a>`comparison__select__multi_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT id, int_val > 0 AS positive, float_val > 0 AS float_positive, name > 'D' AS name_after_d FROM persons WHERE id IN (1, 3, 5) ORDER BY id
```

**Legend SQL (TDS):**
```sql
SELECT id, int_val > 0 AS positive, float_val > 0 AS float_positive, name > 'D' AS name_after_d FROM func('e2e::tds_persons') WHERE id IN (1, 3, 5) ORDER BY id
```

**Legend SQL (Relation):**
```sql
SELECT id, int_val > 0 AS positive, float_val > 0 AS float_positive, name > 'D' AS name_after_d FROM func('e2e::rel_persons') WHERE id IN (1, 3, 5) ORDER BY id
```

**Error:**
> no column found named: 'int_val'. Available columns: [id, name, age, salary, hire_date, active, dept_id]


<br>

#### <a id="fail-lt__string_literal_int__pg_unknown_cast-TDS"></a><a id="fail-lt__string_literal_int__pg_unknown_cast-Relation"></a>`lt__string_literal_int__pg_unknown_cast`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT CASE WHEN '5' < int_val THEN true ELSE false END AS result FROM numbers WHERE id = 1
```

**Legend SQL:**
```sql
SELECT CASE WHEN '5' < int_val THEN true ELSE false END AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Error:**
> ERROR: operator does not exist: text < integer\n  Hint: No operator matches the given name and argument types. You might need to add explicit type casts.\n  Position: 89

📗 **Relation Path**

**Input SQL:**
```sql
SELECT CASE WHEN '5' < int_val THEN true ELSE false END AS result FROM numbers WHERE id = 1
```

**Legend SQL:**
```sql
SELECT CASE WHEN '5' < int_val THEN true ELSE false END AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> Can't find a match for function 'lessThan(String[1],Integer[0..1])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\tlessThan(U[0..1],Relation<Z=(?:U)>[1]):Boolean[1]\n\t\tlessThan(Boolean[1],Boolean[1]):Boolean[1]\n\t\tlessThan(Boolean[1],Boolean[0..1]):Boolean[1]\n\t\tlessThan(Boolean[0..1],Boolean[1]):Boolean[1]\n\t\tlessThan(Boolean[0..1],Boolean[0..1]):Boolean[1]\n\t\tlessThan(Date[1],Date[1]):Boolean[1]\n\t\tlessThan(Date[1],Date[0..1]):Boolean[1]\n\t\tlessThan(Date[0..1],Date[1]):Boolean[1]\n\t\tlessThan(Date[0..1],Date[0..1]):Boolean[1]\n\t\tlessThan(Number[1],Number[1]):Boolean[1]\n\t\tlessThan(Number[1],Number[0..1]):Boolean[1]\n\t\tlessThan(Number[0..1],Number[1]):Boolean[1]\n\t\tlessThan(Number[0..1],Number[0..1]):Boolean[1]\n\t\tlessThan(String[1],String[1]):Boolean[1]\n\t\tlessThan(String[1],String[0..1]):Boolean[1]\n\t\tlessThan(String[0..1],String[1]):Boolean[1]\n\t\tlessThan(String[0..1],String[0..1]):Boolean[1]\n


<br>

#### <a id="fail-gte__string_literal_decimal__pg_unknown_cast-TDS"></a><a id="fail-gte__string_literal_decimal__pg_unknown_cast-Relation"></a>`gte__string_literal_decimal__pg_unknown_cast`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT CASE WHEN '50000.00' >= salary THEN true ELSE false END AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT CASE WHEN '50000.00' >= salary THEN true ELSE false END AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> ERROR: operator does not exist: text >= numeric\n  Hint: No operator matches the given name and argument types. You might need to add explicit type casts.\n  Position: 96

📗 **Relation Path**

**Input SQL:**
```sql
SELECT CASE WHEN '50000.00' >= salary THEN true ELSE false END AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT CASE WHEN '50000.00' >= salary THEN true ELSE false END AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Can't find a match for function 'greaterThanEqual(String[1],Float[0..1])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\tgreaterThanEqual(U[0..1],Relation<Z=(?:U)>[1]):Boolean[1]\n\t\tgreaterThanEqual(Boolean[1],Boolean[1]):Boolean[1]\n\t\tgreaterThanEqual(Boolean[1],Boolean[0..1]):Boolean[1]\n\t\tgreaterThanEqual(Boolean[0..1],Boolean[1]):Boolean[1]\n\t\tgreaterThanEqual(Boolean[0..1],Boolean[0..1]):Boolean[1]\n\t\tgreaterThanEqual(Date[1],Date[1]):Boolean[1]\n\t\tgreaterThanEqual(Date[1],Date[0..1]):Boolean[1]\n\t\tgreaterThanEqual(Date[0..1],Date[1]):Boolean[1]\n\t\tgreaterThanEqual(Date[0..1],Date[0..1]):Boolean[1]\n\t\tgreaterThanEqual(Number[1],Number[1]):Boolean[1]\n\t\tgreaterThanEqual(Number[1],Number[0..1]):Boolean[1]\n\t\tgreaterThanEqual(Number[0..1],Number[1]):Boolean[1]\n\t\tgreaterThanEqual(Number[0..1],Number[0..1]):Boolean[1]\n\t\tgreaterThanEqual(String[1],String[1]):Boolean[1]\n\t\tgreaterThanEqual(String[1],String[0..1]):Boolean[1]\n\t\tgreaterThanEqual(String[0..1],String[1]):Boolean[1]\n\t\tgreaterThanEqual(String[0..1],String[0..1]):Boolean[1]\n


<br>

#### <a id="fail-eq__string_literal_boolean__pg_unknown_cast-TDS"></a><a id="fail-eq__string_literal_boolean__pg_unknown_cast-Relation"></a>`eq__string_literal_boolean__pg_unknown_cast`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CASE WHEN 'true' = active THEN 'match' ELSE 'no match' END AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CASE WHEN 'true' = active THEN 'match' ELSE 'no match' END AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CASE WHEN 'true' = active THEN 'match' ELSE 'no match' END AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> ERROR: operator does not exist: text = boolean\n  Hint: No operator matches the given name and argument types. You might need to add explicit type casts.\n  Position: 92


<a id="parse-error"></a>

### PARSE_ERROR (132 tests)

#### <a id="fail-op_abs__int__prefix-TDS"></a><a id="fail-op_abs__int__prefix-Relation"></a>`op_abs__int__prefix`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT id, @ int_val AS result FROM numbers WHERE id = 2
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '@' at line 1, column 12


<br>

#### <a id="fail-op_sqrt__dp__basic-TDS"></a><a id="fail-op_sqrt__dp__basic-Relation"></a>`op_sqrt__dp__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT id, |/ float_val AS result FROM numbers WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '|'. Expected one of: {AUTHORIZATION, TO, AT, DEALLOCATE, NOT, EXISTS, ILIKE, NULL, TRUE, FALSE, IGNORE, RESPECT, FETCH, NEXT, SUBSTRING, TRIM, LEADING, TRAILING, BOTH, TIME, ZONE, YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, CURRENT_DATE, CURRENT_TIME, CURRENT_TIMESTAMP, CURRENT_SCHEMA, CURRENT_USER, SESSION_USER, EXTRACT, CASE, IF, INTERVAL, LEFT, RIGHT, OVER, WINDOW, PARTITION, PROMOTE, RANGE, ROWS, PRECEDING, FOLLOWING, CURRENT, ROW, WITHOUT, BLOB, SWAP, GC, DANGLING, ARTIFACTS, DECOMMISSION, CLUSTER, REPOSITORY, SNAPSHOT, KILL, ONLY, OPEN, CLOSE, RENAME, REROUTE, MOVE, SHARD, ALLOCATE, REPLICA, CANCEL, RETRY, FAILED, BOOLEAN, BYTE, SHORT, INTEGER, INT, LONG, FLOAT, DOUBLE, PRECISION, TIMESTAMP, IP, CHARACTER, '"CHAR"', VARYING, OBJECT, STRING_TYPE, GEO_POINT, GEO_SHAPE, GLOBAL, SESSION, LOCAL, LICENSE, BEGIN, START, COMMIT, WORK, TRANSACTION, TRANSACTION_ISOLATION, CHARACTERISTICS, ISOLATION, LEVEL, SERIALIZABLE, REPEATABLE, COMMITTED, UNCOMMITTED, READ, WRITE, DEFERRABLE, REPLACE, LANGUAGE, ANALYZE, DISCARD, PLANS, SEQUENCES, TEMPORARY, TEMP, CHECK, EXPLAIN, FORMAT, TYPE, TEXT, GRAPHVIZ, LOGICAL, DISTRIBUTED, CAST, TRY_CAST, SHOW, TABLES, SCHEMAS, CATALOGS, COLUMNS, PARTITIONS, FUNCTIONS, MATERIALIZED, VIEW, OPTIMIZE, REFRESH, RESTORE, ALIAS, SYSTEM, BERNOULLI, TABLESAMPLE, VALUES, KEY, DUPLICATE, CONFLICT, DO, NOTHING, COPY, CLUSTERED, SHARDS, OFF, FULLTEXT, FILTER, PLAIN, STORAGE, RETURNING, DYNAMIC, STRICT, IGNORED, ARRAY, ANALYZER, EXTENDS, TOKENIZER, TOKEN_FILTERS, CHAR_FILTERS, PARTITIONED, PREPARE, MATCH, GENERATED, ALWAYS, USER, PRIVILEGES, SCHEMA, RETURN, SUMMARY, METADATA, PUBLICATION, SUBSCRIPTION, CONNECTION, ENABLE, DISABLE, DECLARE, CURSOR, ASENSITIVE, INSENSITIVE, BINARY, NO, SCROLL, HOLD, ABSOLUTE, FORWARD, BACKWARD, RELATIVE, PRIOR, '+', '-', '*', '(', '{', '[', '[]', '?', '$', STRING, ESCAPED_STRING, BIT_STRING, INTEGER_VALUE, DECIMAL_VALUE, IDENTIFIER, DIGIT_IDENTIFIER, QUOTED_IDENTIFIER, BACKQUOTED_IDENTIFIER, BEGIN_DOLLAR_QUOTED_STRING} at line 1, column 12


<br>

#### <a id="fail-op_cbrt__dp__basic-TDS"></a><a id="fail-op_cbrt__dp__basic-Relation"></a>`op_cbrt__dp__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT id, ||/ float_val AS result FROM numbers WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '||'. Expected one of: {AUTHORIZATION, TO, AT, DEALLOCATE, NOT, EXISTS, ILIKE, NULL, TRUE, FALSE, IGNORE, RESPECT, FETCH, NEXT, SUBSTRING, TRIM, LEADING, TRAILING, BOTH, TIME, ZONE, YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, CURRENT_DATE, CURRENT_TIME, CURRENT_TIMESTAMP, CURRENT_SCHEMA, CURRENT_USER, SESSION_USER, EXTRACT, CASE, IF, INTERVAL, LEFT, RIGHT, OVER, WINDOW, PARTITION, PROMOTE, RANGE, ROWS, PRECEDING, FOLLOWING, CURRENT, ROW, WITHOUT, BLOB, SWAP, GC, DANGLING, ARTIFACTS, DECOMMISSION, CLUSTER, REPOSITORY, SNAPSHOT, KILL, ONLY, OPEN, CLOSE, RENAME, REROUTE, MOVE, SHARD, ALLOCATE, REPLICA, CANCEL, RETRY, FAILED, BOOLEAN, BYTE, SHORT, INTEGER, INT, LONG, FLOAT, DOUBLE, PRECISION, TIMESTAMP, IP, CHARACTER, '"CHAR"', VARYING, OBJECT, STRING_TYPE, GEO_POINT, GEO_SHAPE, GLOBAL, SESSION, LOCAL, LICENSE, BEGIN, START, COMMIT, WORK, TRANSACTION, TRANSACTION_ISOLATION, CHARACTERISTICS, ISOLATION, LEVEL, SERIALIZABLE, REPEATABLE, COMMITTED, UNCOMMITTED, READ, WRITE, DEFERRABLE, REPLACE, LANGUAGE, ANALYZE, DISCARD, PLANS, SEQUENCES, TEMPORARY, TEMP, CHECK, EXPLAIN, FORMAT, TYPE, TEXT, GRAPHVIZ, LOGICAL, DISTRIBUTED, CAST, TRY_CAST, SHOW, TABLES, SCHEMAS, CATALOGS, COLUMNS, PARTITIONS, FUNCTIONS, MATERIALIZED, VIEW, OPTIMIZE, REFRESH, RESTORE, ALIAS, SYSTEM, BERNOULLI, TABLESAMPLE, VALUES, KEY, DUPLICATE, CONFLICT, DO, NOTHING, COPY, CLUSTERED, SHARDS, OFF, FULLTEXT, FILTER, PLAIN, STORAGE, RETURNING, DYNAMIC, STRICT, IGNORED, ARRAY, ANALYZER, EXTENDS, TOKENIZER, TOKEN_FILTERS, CHAR_FILTERS, PARTITIONED, PREPARE, MATCH, GENERATED, ALWAYS, USER, PRIVILEGES, SCHEMA, RETURN, SUMMARY, METADATA, PUBLICATION, SUBSCRIPTION, CONNECTION, ENABLE, DISABLE, DECLARE, CURSOR, ASENSITIVE, INSENSITIVE, BINARY, NO, SCROLL, HOLD, ABSOLUTE, FORWARD, BACKWARD, RELATIVE, PRIOR, '+', '-', '*', '(', '{', '[', '[]', '?', '$', STRING, ESCAPED_STRING, BIT_STRING, INTEGER_VALUE, DECIMAL_VALUE, IDENTIFIER, DIGIT_IDENTIFIER, QUOTED_IDENTIFIER, BACKQUOTED_IDENTIFIER, BEGIN_DOLLAR_QUOTED_STRING} at line 1, column 12


<br>

#### <a id="fail-op_bitnot__int__basic-TDS"></a><a id="fail-op_bitnot__int__basic-Relation"></a>`op_bitnot__int__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT id, ~int_val AS result FROM numbers WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '~' at line 1, column 12


<br>

#### <a id="fail-text_starts_with_op-TDS"></a><a id="fail-text_starts_with_op-Relation"></a>`text_starts_with_op`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT val ^@ 'hel' AS result FROM strings WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '@' at line 1, column 13


<br>

#### <a id="fail-bpchar_lte-TDS"></a><a id="fail-bpchar_lte-Relation"></a>`bpchar_lte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS CHAR(20)) ~<=~ CAST('zzz' AS CHAR(20)) AS result FROM strings WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '~<='


<br>

#### <a id="fail-text_lte_lexcompare-TDS"></a><a id="fail-text_lte_lexcompare-Relation"></a>`text_lte_lexcompare`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT val ~<=~ 'zzz' AS result FROM strings WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '~<='


<br>

#### <a id="fail-bpchar_lt-TDS"></a><a id="fail-bpchar_lt-Relation"></a>`bpchar_lt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS CHAR(20)) ~<~ CAST('zzz' AS CHAR(20)) AS result FROM strings WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '~<'


<br>

#### <a id="fail-text_lt_lexcompare-TDS"></a><a id="fail-text_lt_lexcompare-Relation"></a>`text_lt_lexcompare`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT val ~<~ 'zzz' AS result FROM strings WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '~<'


<br>

#### <a id="fail-bpchar_gte-TDS"></a><a id="fail-bpchar_gte-Relation"></a>`bpchar_gte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS CHAR(20)) ~>=~ CAST('aaa' AS CHAR(20)) AS result FROM strings WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '~>='


<br>

#### <a id="fail-text_gte_lexcompare-TDS"></a><a id="fail-text_gte_lexcompare-Relation"></a>`text_gte_lexcompare`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT val ~>=~ 'aaa' AS result FROM strings WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '~>='


<br>

#### <a id="fail-bpchar_gt-TDS"></a><a id="fail-bpchar_gt-Relation"></a>`bpchar_gt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST(val AS CHAR(20)) ~>~ CAST('aaa' AS CHAR(20)) AS result FROM strings WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '~>'


<br>

#### <a id="fail-text_gt_lexcompare-TDS"></a><a id="fail-text_gt_lexcompare-Relation"></a>`text_gt_lexcompare`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT val ~>~ 'aaa' AS result FROM strings WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '~>'


<br>

#### <a id="fail-bit_not-TDS"></a><a id="fail-bit_not-Relation"></a>`bit_not`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ~ CAST(B'1010' AS bit(4)) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '~' at line 1, column 8


<br>

#### <a id="fail-array_overlap-TDS"></a><a id="fail-array_overlap-Relation"></a>`array_overlap`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY[1,2,3] && ARRAY[3,4,5] AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '&' at line 1, column 22


<br>

#### <a id="fail-range_overlap__multirange_multirange-TDS"></a><a id="fail-range_overlap__multirange_multirange-Relation"></a>`range_overlap__multirange_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(1,10)) && int4multirange(int4range(5,15)) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '&' at line 1, column 41


<br>

#### <a id="fail-range_overlap__multirange_range-TDS"></a><a id="fail-range_overlap__multirange_range-Relation"></a>`range_overlap__multirange_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(1,10)) && int4range(5,15) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '&' at line 1, column 41


<br>

#### <a id="fail-range_overlap__range_multirange-TDS"></a><a id="fail-range_overlap__range_multirange-Relation"></a>`range_overlap__range_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(1,10) && int4multirange(int4range(5,15)) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '&' at line 1, column 25


<br>

#### <a id="fail-range_overlap__range_range-TDS"></a><a id="fail-range_overlap__range_range-Relation"></a>`range_overlap__range_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(1,10) && int4range(5,15) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '&' at line 1, column 25


<br>

#### <a id="fail-range_not_extend_right__multirange_multirange-TDS"></a><a id="fail-range_not_extend_right__multirange_multirange-Relation"></a>`range_not_extend_right__multirange_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(1,10)) &< int4multirange(int4range(5,15)) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '<' at line 1, column 41


<br>

#### <a id="fail-range_not_extend_right__multirange_range-TDS"></a><a id="fail-range_not_extend_right__multirange_range-Relation"></a>`range_not_extend_right__multirange_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(1,10)) &< int4range(5,15) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '<' at line 1, column 41


<br>

#### <a id="fail-range_not_extend_right__range_multirange-TDS"></a><a id="fail-range_not_extend_right__range_multirange-Relation"></a>`range_not_extend_right__range_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(1,10) &< int4multirange(int4range(5,15)) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '<' at line 1, column 25


<br>

#### <a id="fail-range_not_extend_right__range_range-TDS"></a><a id="fail-range_not_extend_right__range_range-Relation"></a>`range_not_extend_right__range_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(1,10) &< int4range(5,15) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '<' at line 1, column 25


<br>

#### <a id="fail-range_not_extend_left__multirange_multirange-TDS"></a><a id="fail-range_not_extend_left__multirange_multirange-Relation"></a>`range_not_extend_left__multirange_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(5,15)) &> int4multirange(int4range(1,10)) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '>' at line 1, column 41


<br>

#### <a id="fail-range_not_extend_left__multirange_range-TDS"></a><a id="fail-range_not_extend_left__multirange_range-Relation"></a>`range_not_extend_left__multirange_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(5,15)) &> int4range(1,10) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '>' at line 1, column 41


<br>

#### <a id="fail-range_not_extend_left__range_multirange-TDS"></a><a id="fail-range_not_extend_left__range_multirange-Relation"></a>`range_not_extend_left__range_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(5,15) &> int4multirange(int4range(1,10)) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '>' at line 1, column 25


<br>

#### <a id="fail-range_not_extend_left__range_range-TDS"></a><a id="fail-range_not_extend_left__range_range-Relation"></a>`range_not_extend_left__range_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(5,15) &> int4range(1,10) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '>' at line 1, column 25


<br>

#### <a id="fail-range_adjacent__multirange_multirange-TDS"></a><a id="fail-range_adjacent__multirange_multirange-Relation"></a>`range_adjacent__multirange_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(1,10)) -|- int4multirange(int4range(10,20)) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '-|'


<br>

#### <a id="fail-range_adjacent__multirange_range-TDS"></a><a id="fail-range_adjacent__multirange_range-Relation"></a>`range_adjacent__multirange_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(1,10)) -|- int4range(10,20) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '-|'


<br>

#### <a id="fail-range_adjacent__range_multirange-TDS"></a><a id="fail-range_adjacent__range_multirange-Relation"></a>`range_adjacent__range_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(1,10) -|- int4multirange(int4range(10,20)) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '-|'


<br>

#### <a id="fail-range_adjacent__range_range-TDS"></a><a id="fail-range_adjacent__range_range-Relation"></a>`range_adjacent__range_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(1,10) -|- int4range(10,20) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '-|'


<br>

#### <a id="fail-inet_overlap-TDS"></a><a id="fail-inet_overlap-Relation"></a>`inet_overlap`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('192.168.1.0/24' AS inet) && CAST('192.168.1.128/25' AS inet) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '&' at line 1, column 40


<br>

#### <a id="fail-inet_subnet_or_eq2-TDS"></a><a id="fail-inet_subnet_or_eq2-Relation"></a>`inet_subnet_or_eq2`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('192.168.1.0/24' AS inet) <<= CAST('192.168.1.0/24' AS inet) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<<='


<br>

#### <a id="fail-inet_supernet_or_eq-TDS"></a><a id="fail-inet_supernet_or_eq-Relation"></a>`inet_supernet_or_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CAST('192.168.1.0/24' AS inet) >>= CAST('192.168.1.0/24' AS inet) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '=' at line 1, column 41


<br>

#### <a id="fail-inet_not-TDS"></a><a id="fail-inet_not-Relation"></a>`inet_not`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ~ CAST('192.168.1.5' AS inet) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '~' at line 1, column 8


<br>

#### <a id="fail-macaddr_not-TDS"></a><a id="fail-macaddr_not-Relation"></a>`macaddr_not`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ~ CAST('08:00:2b:01:02:03' AS macaddr) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '~' at line 1, column 8


<br>

#### <a id="fail-macaddr8_not-TDS"></a><a id="fail-macaddr8_not-Relation"></a>`macaddr8_not`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ~ CAST('08:00:2b:01:02:03:04:05' AS macaddr8) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '~' at line 1, column 8


<br>

#### <a id="fail-geo_hash__path_npoints-TDS"></a><a id="fail-geo_hash__path_npoints-Relation"></a>`geo_hash__path_npoints`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT # path '((1,1),(2,2),(3,1))' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '#' at line 1, column 8


<br>

#### <a id="fail-geo_hash__polygon_npoints-TDS"></a><a id="fail-geo_hash__polygon_npoints-Relation"></a>`geo_hash__polygon_npoints`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT # polygon '((0,0),(0,1),(1,1),(1,0))' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '#' at line 1, column 8


<br>

#### <a id="fail-geo_hashhash__line_lseg-TDS"></a><a id="fail-geo_hashhash__line_lseg-Relation"></a>`geo_hashhash__line_lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT line '{1,0,0}' ## lseg '[(1,1),(1,5)]' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '#' at line 1, column 24


<br>

#### <a id="fail-geo_hashhash__lseg_box-TDS"></a><a id="fail-geo_hashhash__lseg_box-Relation"></a>`geo_hashhash__lseg_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(0,0),(5,5)]' ## box '(3,3),(1,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '#' at line 1, column 30


<br>

#### <a id="fail-geo_hashhash__lseg_lseg-TDS"></a><a id="fail-geo_hashhash__lseg_lseg-Relation"></a>`geo_hashhash__lseg_lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(0,0),(2,2)]' ## lseg '[(0,2),(2,0)]' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '#' at line 1, column 30


<br>

#### <a id="fail-geo_hashhash__point_box-TDS"></a><a id="fail-geo_hashhash__point_box-Relation"></a>`geo_hashhash__point_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(0,0)' ## box '(3,3),(1,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '#' at line 1, column 23


<br>

#### <a id="fail-geo_hashhash__point_line-TDS"></a><a id="fail-geo_hashhash__point_line-Relation"></a>`geo_hashhash__point_line`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(0,0)' ## line '{1,0,-5}' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '#' at line 1, column 23


<br>

#### <a id="fail-geo_hashhash__point_lseg-TDS"></a><a id="fail-geo_hashhash__point_lseg-Relation"></a>`geo_hashhash__point_lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(0,0)' ## lseg '[(1,1),(1,5)]' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '#' at line 1, column 23


<br>

#### <a id="fail-geo_overlap__box_box-TDS"></a><a id="fail-geo_overlap__box_box-Relation"></a>`geo_overlap__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(3,3),(1,1)' && box '(4,4),(2,2)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '&' at line 1, column 27


<br>

#### <a id="fail-geo_overlap__circle_circle-TDS"></a><a id="fail-geo_overlap__circle_circle-Relation"></a>`geo_overlap__circle_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),5>' && circle '<(3,3),5>' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '&' at line 1, column 28


<br>

#### <a id="fail-geo_overlap__polygon_polygon-TDS"></a><a id="fail-geo_overlap__polygon_polygon-Relation"></a>`geo_overlap__polygon_polygon`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT polygon '((0,0),(0,2),(2,2),(2,0))' && polygon '((1,1),(1,3),(3,3),(3,1))' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '&' at line 1, column 45


<br>

#### <a id="fail-geo_notright__box_box-TDS"></a><a id="fail-geo_notright__box_box-Relation"></a>`geo_notright__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(3,3),(1,1)' &< box '(4,4),(2,2)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '<' at line 1, column 27


<br>

#### <a id="fail-geo_notright__circle_circle-TDS"></a><a id="fail-geo_notright__circle_circle-Relation"></a>`geo_notright__circle_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),5>' &< circle '<(3,3),5>' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '<' at line 1, column 28


<br>

#### <a id="fail-geo_notright__polygon_polygon-TDS"></a><a id="fail-geo_notright__polygon_polygon-Relation"></a>`geo_notright__polygon_polygon`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT polygon '((0,0),(0,2),(2,2),(2,0))' &< polygon '((1,1),(1,3),(3,3),(3,1))' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '<' at line 1, column 45


<br>

#### <a id="fail-geo_notabove__box_box-TDS"></a><a id="fail-geo_notabove__box_box-Relation"></a>`geo_notabove__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(3,3),(1,1)' &<| box '(4,4),(2,2)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '<'. Expected one of: {AUTHORIZATION, TO, AT, DEALLOCATE, EXISTS, ILIKE, NULL, TRUE, FALSE, IGNORE, RESPECT, FETCH, NEXT, SUBSTRING, TRIM, LEADING, TRAILING, BOTH, TIME, ZONE, YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, CURRENT_DATE, CURRENT_TIME, CURRENT_TIMESTAMP, CURRENT_SCHEMA, CURRENT_USER, SESSION_USER, EXTRACT, CASE, IF, INTERVAL, LEFT, RIGHT, OVER, WINDOW, PARTITION, PROMOTE, RANGE, ROWS, PRECEDING, FOLLOWING, CURRENT, ROW, WITHOUT, BLOB, SWAP, GC, DANGLING, ARTIFACTS, DECOMMISSION, CLUSTER, REPOSITORY, SNAPSHOT, KILL, ONLY, OPEN, CLOSE, RENAME, REROUTE, MOVE, SHARD, ALLOCATE, REPLICA, CANCEL, RETRY, FAILED, BOOLEAN, BYTE, SHORT, INTEGER, INT, LONG, FLOAT, DOUBLE, PRECISION, TIMESTAMP, IP, CHARACTER, '"CHAR"', VARYING, OBJECT, STRING_TYPE, GEO_POINT, GEO_SHAPE, GLOBAL, SESSION, LOCAL, LICENSE, BEGIN, START, COMMIT, WORK, TRANSACTION, TRANSACTION_ISOLATION, CHARACTERISTICS, ISOLATION, LEVEL, SERIALIZABLE, REPEATABLE, COMMITTED, UNCOMMITTED, READ, WRITE, DEFERRABLE, REPLACE, LANGUAGE, ANALYZE, DISCARD, PLANS, SEQUENCES, TEMPORARY, TEMP, CHECK, EXPLAIN, FORMAT, TYPE, TEXT, GRAPHVIZ, LOGICAL, DISTRIBUTED, CAST, TRY_CAST, SHOW, TABLES, SCHEMAS, CATALOGS, COLUMNS, PARTITIONS, FUNCTIONS, MATERIALIZED, VIEW, OPTIMIZE, REFRESH, RESTORE, ALIAS, SYSTEM, BERNOULLI, TABLESAMPLE, VALUES, KEY, DUPLICATE, CONFLICT, DO, NOTHING, COPY, CLUSTERED, SHARDS, OFF, FULLTEXT, FILTER, PLAIN, STORAGE, RETURNING, DYNAMIC, STRICT, IGNORED, ARRAY, ANALYZER, EXTENDS, TOKENIZER, TOKEN_FILTERS, CHAR_FILTERS, PARTITIONED, PREPARE, GENERATED, ALWAYS, USER, PRIVILEGES, SCHEMA, RETURN, SUMMARY, METADATA, PUBLICATION, SUBSCRIPTION, CONNECTION, ENABLE, DISABLE, DECLARE, CURSOR, ASENSITIVE, INSENSITIVE, BINARY, NO, SCROLL, HOLD, ABSOLUTE, FORWARD, BACKWARD, RELATIVE, PRIOR, '+', '-', '(', '{', '[', '[]', '?', '$', STRING, ESCAPED_STRING, BIT_STRING, INTEGER_VALUE, DECIMAL_VALUE, IDENTIFIER, DIGIT_IDENTIFIER, QUOTED_IDENTIFIER, BACKQUOTED_IDENTIFIER, BEGIN_DOLLAR_QUOTED_STRING} at line 1, column 27


<br>

#### <a id="fail-geo_notabove__circle_circle-TDS"></a><a id="fail-geo_notabove__circle_circle-Relation"></a>`geo_notabove__circle_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),5>' &<| circle '<(3,3),5>' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '<'. Expected one of: {AUTHORIZATION, TO, AT, DEALLOCATE, EXISTS, ILIKE, NULL, TRUE, FALSE, IGNORE, RESPECT, FETCH, NEXT, SUBSTRING, TRIM, LEADING, TRAILING, BOTH, TIME, ZONE, YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, CURRENT_DATE, CURRENT_TIME, CURRENT_TIMESTAMP, CURRENT_SCHEMA, CURRENT_USER, SESSION_USER, EXTRACT, CASE, IF, INTERVAL, LEFT, RIGHT, OVER, WINDOW, PARTITION, PROMOTE, RANGE, ROWS, PRECEDING, FOLLOWING, CURRENT, ROW, WITHOUT, BLOB, SWAP, GC, DANGLING, ARTIFACTS, DECOMMISSION, CLUSTER, REPOSITORY, SNAPSHOT, KILL, ONLY, OPEN, CLOSE, RENAME, REROUTE, MOVE, SHARD, ALLOCATE, REPLICA, CANCEL, RETRY, FAILED, BOOLEAN, BYTE, SHORT, INTEGER, INT, LONG, FLOAT, DOUBLE, PRECISION, TIMESTAMP, IP, CHARACTER, '"CHAR"', VARYING, OBJECT, STRING_TYPE, GEO_POINT, GEO_SHAPE, GLOBAL, SESSION, LOCAL, LICENSE, BEGIN, START, COMMIT, WORK, TRANSACTION, TRANSACTION_ISOLATION, CHARACTERISTICS, ISOLATION, LEVEL, SERIALIZABLE, REPEATABLE, COMMITTED, UNCOMMITTED, READ, WRITE, DEFERRABLE, REPLACE, LANGUAGE, ANALYZE, DISCARD, PLANS, SEQUENCES, TEMPORARY, TEMP, CHECK, EXPLAIN, FORMAT, TYPE, TEXT, GRAPHVIZ, LOGICAL, DISTRIBUTED, CAST, TRY_CAST, SHOW, TABLES, SCHEMAS, CATALOGS, COLUMNS, PARTITIONS, FUNCTIONS, MATERIALIZED, VIEW, OPTIMIZE, REFRESH, RESTORE, ALIAS, SYSTEM, BERNOULLI, TABLESAMPLE, VALUES, KEY, DUPLICATE, CONFLICT, DO, NOTHING, COPY, CLUSTERED, SHARDS, OFF, FULLTEXT, FILTER, PLAIN, STORAGE, RETURNING, DYNAMIC, STRICT, IGNORED, ARRAY, ANALYZER, EXTENDS, TOKENIZER, TOKEN_FILTERS, CHAR_FILTERS, PARTITIONED, PREPARE, GENERATED, ALWAYS, USER, PRIVILEGES, SCHEMA, RETURN, SUMMARY, METADATA, PUBLICATION, SUBSCRIPTION, CONNECTION, ENABLE, DISABLE, DECLARE, CURSOR, ASENSITIVE, INSENSITIVE, BINARY, NO, SCROLL, HOLD, ABSOLUTE, FORWARD, BACKWARD, RELATIVE, PRIOR, '+', '-', '(', '{', '[', '[]', '?', '$', STRING, ESCAPED_STRING, BIT_STRING, INTEGER_VALUE, DECIMAL_VALUE, IDENTIFIER, DIGIT_IDENTIFIER, QUOTED_IDENTIFIER, BACKQUOTED_IDENTIFIER, BEGIN_DOLLAR_QUOTED_STRING} at line 1, column 28


<br>

#### <a id="fail-geo_notabove__polygon_polygon-TDS"></a><a id="fail-geo_notabove__polygon_polygon-Relation"></a>`geo_notabove__polygon_polygon`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT polygon '((0,0),(0,2),(2,2),(2,0))' &<| polygon '((1,1),(1,3),(3,3),(3,1))' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '<'. Expected one of: {AUTHORIZATION, TO, AT, DEALLOCATE, EXISTS, ILIKE, NULL, TRUE, FALSE, IGNORE, RESPECT, FETCH, NEXT, SUBSTRING, TRIM, LEADING, TRAILING, BOTH, TIME, ZONE, YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, CURRENT_DATE, CURRENT_TIME, CURRENT_TIMESTAMP, CURRENT_SCHEMA, CURRENT_USER, SESSION_USER, EXTRACT, CASE, IF, INTERVAL, LEFT, RIGHT, OVER, WINDOW, PARTITION, PROMOTE, RANGE, ROWS, PRECEDING, FOLLOWING, CURRENT, ROW, WITHOUT, BLOB, SWAP, GC, DANGLING, ARTIFACTS, DECOMMISSION, CLUSTER, REPOSITORY, SNAPSHOT, KILL, ONLY, OPEN, CLOSE, RENAME, REROUTE, MOVE, SHARD, ALLOCATE, REPLICA, CANCEL, RETRY, FAILED, BOOLEAN, BYTE, SHORT, INTEGER, INT, LONG, FLOAT, DOUBLE, PRECISION, TIMESTAMP, IP, CHARACTER, '"CHAR"', VARYING, OBJECT, STRING_TYPE, GEO_POINT, GEO_SHAPE, GLOBAL, SESSION, LOCAL, LICENSE, BEGIN, START, COMMIT, WORK, TRANSACTION, TRANSACTION_ISOLATION, CHARACTERISTICS, ISOLATION, LEVEL, SERIALIZABLE, REPEATABLE, COMMITTED, UNCOMMITTED, READ, WRITE, DEFERRABLE, REPLACE, LANGUAGE, ANALYZE, DISCARD, PLANS, SEQUENCES, TEMPORARY, TEMP, CHECK, EXPLAIN, FORMAT, TYPE, TEXT, GRAPHVIZ, LOGICAL, DISTRIBUTED, CAST, TRY_CAST, SHOW, TABLES, SCHEMAS, CATALOGS, COLUMNS, PARTITIONS, FUNCTIONS, MATERIALIZED, VIEW, OPTIMIZE, REFRESH, RESTORE, ALIAS, SYSTEM, BERNOULLI, TABLESAMPLE, VALUES, KEY, DUPLICATE, CONFLICT, DO, NOTHING, COPY, CLUSTERED, SHARDS, OFF, FULLTEXT, FILTER, PLAIN, STORAGE, RETURNING, DYNAMIC, STRICT, IGNORED, ARRAY, ANALYZER, EXTENDS, TOKENIZER, TOKEN_FILTERS, CHAR_FILTERS, PARTITIONED, PREPARE, GENERATED, ALWAYS, USER, PRIVILEGES, SCHEMA, RETURN, SUMMARY, METADATA, PUBLICATION, SUBSCRIPTION, CONNECTION, ENABLE, DISABLE, DECLARE, CURSOR, ASENSITIVE, INSENSITIVE, BINARY, NO, SCROLL, HOLD, ABSOLUTE, FORWARD, BACKWARD, RELATIVE, PRIOR, '+', '-', '(', '{', '[', '[]', '?', '$', STRING, ESCAPED_STRING, BIT_STRING, INTEGER_VALUE, DECIMAL_VALUE, IDENTIFIER, DIGIT_IDENTIFIER, QUOTED_IDENTIFIER, BACKQUOTED_IDENTIFIER, BEGIN_DOLLAR_QUOTED_STRING} at line 1, column 45


<br>

#### <a id="fail-geo_notleft__box_box-TDS"></a><a id="fail-geo_notleft__box_box-Relation"></a>`geo_notleft__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(4,4),(2,2)' &> box '(3,3),(1,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '>' at line 1, column 27


<br>

#### <a id="fail-geo_notleft__circle_circle-TDS"></a><a id="fail-geo_notleft__circle_circle-Relation"></a>`geo_notleft__circle_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(3,3),5>' &> circle '<(0,0),5>' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '>' at line 1, column 28


<br>

#### <a id="fail-geo_notleft__polygon_polygon-TDS"></a><a id="fail-geo_notleft__polygon_polygon-Relation"></a>`geo_notleft__polygon_polygon`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT polygon '((1,1),(1,3),(3,3),(3,1))' &> polygon '((0,0),(0,2),(2,2),(2,0))' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '>' at line 1, column 45


<br>

#### <a id="fail-geo_dist__box_box-TDS"></a><a id="fail-geo_dist__box_box-Relation"></a>`geo_dist__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(1,1),(0,0)' <-> box '(5,5),(4,4)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__box_lseg-TDS"></a><a id="fail-geo_dist__box_lseg-Relation"></a>`geo_dist__box_lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(1,1),(0,0)' <-> lseg '[(4,4),(5,5)]' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__box_point-TDS"></a><a id="fail-geo_dist__box_point-Relation"></a>`geo_dist__box_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(1,1),(0,0)' <-> point '(5,5)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__circle_circle-TDS"></a><a id="fail-geo_dist__circle_circle-Relation"></a>`geo_dist__circle_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),1>' <-> circle '<(5,5),1>' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__circle_point-TDS"></a><a id="fail-geo_dist__circle_point-Relation"></a>`geo_dist__circle_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),1>' <-> point '(5,5)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__circle_polygon-TDS"></a><a id="fail-geo_dist__circle_polygon-Relation"></a>`geo_dist__circle_polygon`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),1>' <-> polygon '((5,5),(5,6),(6,6),(6,5))' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__line_line-TDS"></a><a id="fail-geo_dist__line_line-Relation"></a>`geo_dist__line_line`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT line '{1,0,0}' <-> line '{0,1,0}' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__line_lseg-TDS"></a><a id="fail-geo_dist__line_lseg-Relation"></a>`geo_dist__line_lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT line '{1,0,0}' <-> lseg '[(5,5),(6,6)]' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__line_point-TDS"></a><a id="fail-geo_dist__line_point-Relation"></a>`geo_dist__line_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT line '{1,0,0}' <-> point '(5,5)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__lseg_box-TDS"></a><a id="fail-geo_dist__lseg_box-Relation"></a>`geo_dist__lseg_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(4,4),(5,5)]' <-> box '(1,1),(0,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__lseg_line-TDS"></a><a id="fail-geo_dist__lseg_line-Relation"></a>`geo_dist__lseg_line`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(5,5),(6,6)]' <-> line '{1,0,0}' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__lseg_lseg-TDS"></a><a id="fail-geo_dist__lseg_lseg-Relation"></a>`geo_dist__lseg_lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(0,0),(1,1)]' <-> lseg '[(5,5),(6,6)]' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__lseg_point-TDS"></a><a id="fail-geo_dist__lseg_point-Relation"></a>`geo_dist__lseg_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(0,0),(1,1)]' <-> point '(5,5)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__path_path-TDS"></a><a id="fail-geo_dist__path_path-Relation"></a>`geo_dist__path_path`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT path '((0,0),(1,1))' <-> path '((5,5),(6,6))' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__path_point-TDS"></a><a id="fail-geo_dist__path_point-Relation"></a>`geo_dist__path_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT path '((0,0),(1,1))' <-> point '(5,5)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__point_box-TDS"></a><a id="fail-geo_dist__point_box-Relation"></a>`geo_dist__point_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(5,5)' <-> box '(1,1),(0,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__point_circle-TDS"></a><a id="fail-geo_dist__point_circle-Relation"></a>`geo_dist__point_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(5,5)' <-> circle '<(0,0),1>' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__point_line-TDS"></a><a id="fail-geo_dist__point_line-Relation"></a>`geo_dist__point_line`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(5,5)' <-> line '{1,0,0}' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__point_lseg-TDS"></a><a id="fail-geo_dist__point_lseg-Relation"></a>`geo_dist__point_lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(5,5)' <-> lseg '[(0,0),(1,1)]' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__point_path-TDS"></a><a id="fail-geo_dist__point_path-Relation"></a>`geo_dist__point_path`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(5,5)' <-> path '((0,0),(1,1))' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__point_point-TDS"></a><a id="fail-geo_dist__point_point-Relation"></a>`geo_dist__point_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(0,0)' <-> point '(3,4)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__point_polygon-TDS"></a><a id="fail-geo_dist__point_polygon-Relation"></a>`geo_dist__point_polygon`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(5,5)' <-> polygon '((0,0),(0,1),(1,1),(1,0))' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__polygon_circle-TDS"></a><a id="fail-geo_dist__polygon_circle-Relation"></a>`geo_dist__polygon_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT polygon '((0,0),(0,1),(1,1),(1,0))' <-> circle '<(5,5),1>' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__polygon_point-TDS"></a><a id="fail-geo_dist__polygon_point-Relation"></a>`geo_dist__polygon_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT polygon '((0,0),(0,1),(1,1),(1,0))' <-> point '(5,5)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_dist__polygon_polygon-TDS"></a><a id="fail-geo_dist__polygon_polygon-Relation"></a>`geo_dist__polygon_polygon`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT polygon '((0,0),(0,1),(1,1),(1,0))' <-> polygon '((5,5),(5,6),(6,6),(6,5))' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-geo_strictly_below__box_box-TDS"></a><a id="fail-geo_strictly_below__box_box-Relation"></a>`geo_strictly_below__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(1,1),(0,0)' <<| box '(9,9),(8,8)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<<|'


<br>

#### <a id="fail-geo_strictly_below__circle_circle-TDS"></a><a id="fail-geo_strictly_below__circle_circle-Relation"></a>`geo_strictly_below__circle_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),1>' <<| circle '<(9,9),1>' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<<|'


<br>

#### <a id="fail-geo_strictly_below__point_point-TDS"></a><a id="fail-geo_strictly_below__point_point-Relation"></a>`geo_strictly_below__point_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(0,0)' <<| point '(0,9)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<<|'


<br>

#### <a id="fail-geo_strictly_below__polygon_polygon-TDS"></a><a id="fail-geo_strictly_below__polygon_polygon-Relation"></a>`geo_strictly_below__polygon_polygon`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT polygon '((0,0),(0,1),(1,1),(1,0))' <<| polygon '((0,9),(0,10),(1,10),(1,9))' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<<|'


<br>

#### <a id="fail-geo_below_or_left__box_box-TDS"></a><a id="fail-geo_below_or_left__box_box-Relation"></a>`geo_below_or_left__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(1,1),(0,0)' <^ box '(9,9),(8,8)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<^'


<br>

#### <a id="fail-geo_below_or_left__point_point-TDS"></a><a id="fail-geo_below_or_left__point_point-Relation"></a>`geo_below_or_left__point_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(0,0)' <^ point '(0,9)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<^'


<br>

#### <a id="fail-geo_above_or_right__box_box-TDS"></a><a id="fail-geo_above_or_right__box_box-Relation"></a>`geo_above_or_right__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(9,9),(8,8)' >^ box '(1,1),(0,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '>^'


<br>

#### <a id="fail-geo_above_or_right__point_point-TDS"></a><a id="fail-geo_above_or_right__point_point-Relation"></a>`geo_above_or_right__point_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(0,9)' >^ point '(0,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '>^'


<br>

#### <a id="fail-geo_intersects__box_box-TDS"></a><a id="fail-geo_intersects__box_box-Relation"></a>`geo_intersects__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(3,3),(1,1)' ?# box '(4,4),(2,2)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '#' at line 1, column 27


<br>

#### <a id="fail-geo_intersects__line_box-TDS"></a><a id="fail-geo_intersects__line_box-Relation"></a>`geo_intersects__line_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT line '{1,0,0}' ?# box '(3,3),(1,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '#' at line 1, column 24


<br>

#### <a id="fail-geo_intersects__line_line-TDS"></a><a id="fail-geo_intersects__line_line-Relation"></a>`geo_intersects__line_line`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT line '{1,0,0}' ?# line '{0,1,0}' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '#' at line 1, column 24


<br>

#### <a id="fail-geo_intersects__lseg_box-TDS"></a><a id="fail-geo_intersects__lseg_box-Relation"></a>`geo_intersects__lseg_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(0,0),(5,5)]' ?# box '(3,3),(1,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '#' at line 1, column 30


<br>

#### <a id="fail-geo_intersects__lseg_line-TDS"></a><a id="fail-geo_intersects__lseg_line-Relation"></a>`geo_intersects__lseg_line`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(0,0),(5,5)]' ?# line '{1,-1,0}' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '#' at line 1, column 30


<br>

#### <a id="fail-geo_intersects__lseg_lseg-TDS"></a><a id="fail-geo_intersects__lseg_lseg-Relation"></a>`geo_intersects__lseg_lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(0,0),(2,2)]' ?# lseg '[(0,2),(2,0)]' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '#' at line 1, column 30


<br>

#### <a id="fail-geo_intersects__path_path-TDS"></a><a id="fail-geo_intersects__path_path-Relation"></a>`geo_intersects__path_path`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT path '((0,0),(2,2))' ?# path '((0,2),(2,0))' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '#' at line 1, column 30


<br>

#### <a id="fail-geo_perpendicular__line_line-TDS"></a><a id="fail-geo_perpendicular__line_line-Relation"></a>`geo_perpendicular__line_line`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT line '{1,0,0}' ?-| line '{0,1,0}' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '|' at line 1, column 25


<br>

#### <a id="fail-geo_perpendicular__lseg_lseg-TDS"></a><a id="fail-geo_perpendicular__lseg_lseg-Relation"></a>`geo_perpendicular__lseg_lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(0,0),(1,0)]' ?-| lseg '[(0,0),(0,1)]' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '|' at line 1, column 31


<br>

#### <a id="fail-geo_parallel__line_line-TDS"></a><a id="fail-geo_parallel__line_line-Relation"></a>`geo_parallel__line_line`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT line '{1,0,0}' ?|| line '{1,0,5}' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '||' at line 1, column 24


<br>

#### <a id="fail-geo_parallel__lseg_lseg-TDS"></a><a id="fail-geo_parallel__lseg_lseg-Relation"></a>`geo_parallel__lseg_lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT lseg '[(0,0),(1,1)]' ?|| lseg '[(0,1),(1,2)]' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '||' at line 1, column 30


<br>

#### <a id="fail-geo_length__lseg-TDS"></a><a id="fail-geo_length__lseg-Relation"></a>`geo_length__lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT @-@ lseg '[(0,0),(3,4)]' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '@' at line 1, column 8


<br>

#### <a id="fail-geo_length__path-TDS"></a><a id="fail-geo_length__path-Relation"></a>`geo_length__path`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT @-@ path '((0,0),(3,4))' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '@' at line 1, column 8


<br>

#### <a id="fail-geo_center__box-TDS"></a><a id="fail-geo_center__box-Relation"></a>`geo_center__box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT @@ box '(4,4),(0,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '@@' at line 1, column 8


<br>

#### <a id="fail-geo_center__circle-TDS"></a><a id="fail-geo_center__circle-Relation"></a>`geo_center__circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT @@ circle '<(2,2),5>' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '@@' at line 1, column 8


<br>

#### <a id="fail-geo_center__lseg-TDS"></a><a id="fail-geo_center__lseg-Relation"></a>`geo_center__lseg`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT @@ lseg '[(0,0),(4,4)]' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '@@' at line 1, column 8


<br>

#### <a id="fail-geo_center__polygon-TDS"></a><a id="fail-geo_center__polygon-Relation"></a>`geo_center__polygon`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT @@ polygon '((0,0),(0,4),(4,4),(4,0))' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '@@' at line 1, column 8


<br>

#### <a id="fail-geo_notabove2__box_box-TDS"></a><a id="fail-geo_notabove2__box_box-Relation"></a>`geo_notabove2__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(1,1),(0,0)' |&> box '(9,9),(8,8)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '|&'


<br>

#### <a id="fail-geo_notabove2__circle_circle-TDS"></a><a id="fail-geo_notabove2__circle_circle-Relation"></a>`geo_notabove2__circle_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),1>' |&> circle '<(9,9),1>' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '|&'


<br>

#### <a id="fail-geo_notabove2__polygon_polygon-TDS"></a><a id="fail-geo_notabove2__polygon_polygon-Relation"></a>`geo_notabove2__polygon_polygon`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT polygon '((0,0),(0,1),(1,1),(1,0))' |&> polygon '((9,9),(9,10),(10,10),(10,9))' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '|&'


<br>

#### <a id="fail-geo_strictly_above__box_box-TDS"></a><a id="fail-geo_strictly_above__box_box-Relation"></a>`geo_strictly_above__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(9,9),(8,8)' |>> box '(1,1),(0,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '|>>'


<br>

#### <a id="fail-geo_strictly_above__circle_circle-TDS"></a><a id="fail-geo_strictly_above__circle_circle-Relation"></a>`geo_strictly_above__circle_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(9,9),1>' |>> circle '<(0,0),1>' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '|>>'


<br>

#### <a id="fail-geo_strictly_above__point_point-TDS"></a><a id="fail-geo_strictly_above__point_point-Relation"></a>`geo_strictly_above__point_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(0,9)' |>> point '(0,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '|>>'


<br>

#### <a id="fail-geo_strictly_above__polygon_polygon-TDS"></a><a id="fail-geo_strictly_above__polygon_polygon-Relation"></a>`geo_strictly_above__polygon_polygon`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT polygon '((9,9),(9,10),(10,10),(10,9))' |>> polygon '((0,0),(0,1),(1,1),(1,0))' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '|>>'


<br>

#### <a id="fail-geo_same_as__box_box-TDS"></a><a id="fail-geo_same_as__box_box-Relation"></a>`geo_same_as__box_box`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT box '(1,1),(0,0)' ~= box '(1,1),(0,0)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '~='


<br>

#### <a id="fail-geo_same_as__circle_circle-TDS"></a><a id="fail-geo_same_as__circle_circle-Relation"></a>`geo_same_as__circle_circle`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT circle '<(0,0),1>' ~= circle '<(0,0),1>' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '~='


<br>

#### <a id="fail-geo_same_as__point_point-TDS"></a><a id="fail-geo_same_as__point_point-Relation"></a>`geo_same_as__point_point`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT point '(1,1)' ~= point '(1,1)' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '~='


<br>

#### <a id="fail-geo_same_as__polygon_polygon-TDS"></a><a id="fail-geo_same_as__polygon_polygon-Relation"></a>`geo_same_as__polygon_polygon`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT polygon '((0,0),(0,1),(1,1),(1,0))' ~= polygon '((0,0),(0,1),(1,1),(1,0))' AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '~='


<br>

#### <a id="fail-tsquery_negate-TDS"></a><a id="fail-tsquery_negate-Relation"></a>`tsquery_negate`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT !! to_tsquery('english', 'fox') AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '!'. Expected one of: {AUTHORIZATION, TO, AT, ALL, DEALLOCATE, DISTINCT, NOT, EXISTS, ILIKE, NULL, TRUE, FALSE, IGNORE, RESPECT, FETCH, NEXT, SUBSTRING, TRIM, LEADING, TRAILING, BOTH, TIME, ZONE, YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, CURRENT_DATE, CURRENT_TIME, CURRENT_TIMESTAMP, CURRENT_SCHEMA, CURRENT_USER, SESSION_USER, EXTRACT, CASE, IF, INTERVAL, LEFT, RIGHT, OVER, WINDOW, PARTITION, PROMOTE, RANGE, ROWS, PRECEDING, FOLLOWING, CURRENT, ROW, WITHOUT, BLOB, SWAP, GC, DANGLING, ARTIFACTS, DECOMMISSION, CLUSTER, REPOSITORY, SNAPSHOT, KILL, ONLY, OPEN, CLOSE, RENAME, REROUTE, MOVE, SHARD, ALLOCATE, REPLICA, CANCEL, RETRY, FAILED, BOOLEAN, BYTE, SHORT, INTEGER, INT, LONG, FLOAT, DOUBLE, PRECISION, TIMESTAMP, IP, CHARACTER, '"CHAR"', VARYING, OBJECT, STRING_TYPE, GEO_POINT, GEO_SHAPE, GLOBAL, SESSION, LOCAL, LICENSE, BEGIN, START, COMMIT, WORK, TRANSACTION, TRANSACTION_ISOLATION, CHARACTERISTICS, ISOLATION, LEVEL, SERIALIZABLE, REPEATABLE, COMMITTED, UNCOMMITTED, READ, WRITE, DEFERRABLE, REPLACE, LANGUAGE, ANALYZE, DISCARD, PLANS, SEQUENCES, TEMPORARY, TEMP, CHECK, EXPLAIN, FORMAT, TYPE, TEXT, GRAPHVIZ, LOGICAL, DISTRIBUTED, CAST, TRY_CAST, SHOW, TABLES, SCHEMAS, CATALOGS, COLUMNS, PARTITIONS, FUNCTIONS, MATERIALIZED, VIEW, OPTIMIZE, REFRESH, RESTORE, ALIAS, SYSTEM, BERNOULLI, TABLESAMPLE, VALUES, KEY, DUPLICATE, CONFLICT, DO, NOTHING, COPY, CLUSTERED, SHARDS, OFF, FULLTEXT, FILTER, PLAIN, STORAGE, RETURNING, DYNAMIC, STRICT, IGNORED, ARRAY, ANALYZER, EXTENDS, TOKENIZER, TOKEN_FILTERS, CHAR_FILTERS, PARTITIONED, PREPARE, MATCH, GENERATED, ALWAYS, USER, PRIVILEGES, SCHEMA, RETURN, SUMMARY, METADATA, PUBLICATION, SUBSCRIPTION, CONNECTION, ENABLE, DISABLE, DECLARE, CURSOR, ASENSITIVE, INSENSITIVE, BINARY, NO, SCROLL, HOLD, ABSOLUTE, FORWARD, BACKWARD, RELATIVE, PRIOR, '+', '-', '*', '(', '{', '[', '[]', '?', '$', STRING, ESCAPED_STRING, BIT_STRING, INTEGER_VALUE, DECIMAL_VALUE, IDENTIFIER, DIGIT_IDENTIFIER, QUOTED_IDENTIFIER, BACKQUOTED_IDENTIFIER, BEGIN_DOLLAR_QUOTED_STRING} at line 1, column 8


<br>

#### <a id="fail-tsquery_and-TDS"></a><a id="fail-tsquery_and-Relation"></a>`tsquery_and`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsquery('english', 'fox') && to_tsquery('english', 'dog') AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '&' at line 1, column 38


<br>

#### <a id="fail-tsquery_phrase-TDS"></a><a id="fail-tsquery_phrase-Relation"></a>`tsquery_phrase`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsquery('english', 'fox') <-> to_tsquery('english', 'jumps') AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '<->'


<br>

#### <a id="fail-fts_match3_tsquery_tsvector-TDS"></a><a id="fail-fts_match3_tsquery_tsvector-Relation"></a>`fts_match3_tsquery_tsvector`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsquery('english', 'fox') @@@ to_tsvector('english', 'the quick brown fox') AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '@' at line 1, column 39


<br>

#### <a id="fail-fts_match3_tsvector_tsquery-TDS"></a><a id="fail-fts_match3_tsvector_tsquery-Relation"></a>`fts_match3_tsvector_tsquery`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsvector('english', 'the quick brown fox') @@@ to_tsquery('english', 'fox') AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token '@' at line 1, column 56


<br>

#### <a id="fail-record_distinct_lt-TDS"></a><a id="fail-record_distinct_lt-Relation"></a>`record_distinct_lt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ROW(1, 'a') *< ROW(2, 'b') AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Postgres: ERROR: operator does not exist: integer *< integer
>   Hint: No operator matches the given name and argument types. You might need to add explicit type casts.
>   Position: 20 | Legend rewrite: Unexpected token '<' at line 1, column 21


<br>

#### <a id="fail-record_distinct_lte-TDS"></a><a id="fail-record_distinct_lte-Relation"></a>`record_distinct_lte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ROW(1, 'a') *<= ROW(2, 'b') AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Postgres: ERROR: operator does not exist: integer *<= integer
>   Hint: No operator matches the given name and argument types. You might need to add explicit type casts.
>   Position: 20 | Legend rewrite: Unexpected token '<=' at line 1, column 21


<br>

#### <a id="fail-record_distinct_neq-TDS"></a><a id="fail-record_distinct_neq-Relation"></a>`record_distinct_neq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ROW(1, 'a') *<> ROW(2, 'b') AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Postgres: ERROR: operator does not exist: integer *<> integer
>   Hint: No operator matches the given name and argument types. You might need to add explicit type casts.
>   Position: 20 | Legend rewrite: Unexpected token '<>' at line 1, column 21


<br>

#### <a id="fail-record_distinct_eq-TDS"></a><a id="fail-record_distinct_eq-Relation"></a>`record_distinct_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ROW(1, 'a') *= ROW(1, 'a') AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Postgres: ERROR: operator does not exist: integer *= integer
>   Hint: No operator matches the given name and argument types. You might need to add explicit type casts.
>   Position: 20 | Legend rewrite: Unexpected token '=' at line 1, column 21


<br>

#### <a id="fail-record_distinct_gt-TDS"></a><a id="fail-record_distinct_gt-Relation"></a>`record_distinct_gt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ROW(2, 'b') *> ROW(1, 'a') AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Postgres: ERROR: operator does not exist: integer *> integer
>   Hint: No operator matches the given name and argument types. You might need to add explicit type casts.
>   Position: 20 | Legend rewrite: Unexpected token '>' at line 1, column 21


<br>

#### <a id="fail-record_distinct_gte-TDS"></a><a id="fail-record_distinct_gte-Relation"></a>`record_distinct_gte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ROW(2, 'b') *>= ROW(1, 'a') AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Postgres: ERROR: operator does not exist: integer *>= integer
>   Hint: No operator matches the given name and argument types. You might need to add explicit type casts.
>   Position: 20 | Legend rewrite: Unexpected token '>=' at line 1, column 21


<br>

#### <a id="fail-similar_to__txt_txt__unsupported-TDS"></a><a id="fail-similar_to__txt_txt__unsupported-Relation"></a>`similar_to__txt_txt__unsupported`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT val SIMILAR TO 'h%' AS result FROM strings WHERE val IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'TO'. Expected one of: {<EOF>, ';'} at line 1, column 20


<br>

#### <a id="fail-not_similar_to__txt_txt__unsupported-TDS"></a><a id="fail-not_similar_to__txt_txt__unsupported-Relation"></a>`not_similar_to__txt_txt__unsupported`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT val NOT SIMILAR TO 'h%' AS result FROM strings WHERE val IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'NOT'. Expected one of: {<EOF>, ';'} at line 1, column 12


<br>

#### <a id="fail-like__txt_txt__func_syntax-TDS"></a><a id="fail-like__txt_txt__func_syntax-Relation"></a>`like__txt_txt__func_syntax`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT LIKE(val, '%lo%') AS result FROM strings ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'LIKE' at line 1, column 8


<a id="function-not-supported"></a>

### FUNCTION_NOT_SUPPORTED (63 tests)

#### <a id="fail-range_intersect__multirange_multirange-TDS"></a><a id="fail-range_intersect__multirange_multirange-Relation"></a>`range_intersect__multirange_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(1,10)) * int4multirange(int4range(5,15)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4multirange(int4range(1, 10)) * int4multirange(int4range(5, 15)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4multirange(int4range(1, 10)) * int4multirange(int4range(5, 15)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4multirange"


<br>

#### <a id="fail-range_intersect__range_range-TDS"></a><a id="fail-range_intersect__range_range-Relation"></a>`range_intersect__range_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(1,10) * int4range(5,15) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4range(1, 10) * int4range(5, 15) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4range(1, 10) * int4range(5, 15) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-range_union__multirange_multirange-TDS"></a><a id="fail-range_union__multirange_multirange-Relation"></a>`range_union__multirange_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(1,10)) + int4multirange(int4range(5,15)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4multirange(int4range(1, 10)) + int4multirange(int4range(5, 15)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4multirange(int4range(1, 10)) + int4multirange(int4range(5, 15)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4multirange"


<br>

#### <a id="fail-range_union__range_range-TDS"></a><a id="fail-range_union__range_range-Relation"></a>`range_union__range_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(1,10) + int4range(5,15) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4range(1, 10) + int4range(5, 15) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4range(1, 10) + int4range(5, 15) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-range_diff__multirange_multirange-TDS"></a><a id="fail-range_diff__multirange_multirange-Relation"></a>`range_diff__multirange_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(1,15)) - int4multirange(int4range(5,10)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4multirange(int4range(1, 15)) - int4multirange(int4range(5, 10)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4multirange(int4range(1, 15)) - int4multirange(int4range(5, 10)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4multirange"


<br>

#### <a id="fail-range_diff__range_range-TDS"></a><a id="fail-range_diff__range_range-Relation"></a>`range_diff__range_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(1,15) - int4range(5,10) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4range(1, 15) - int4range(5, 10) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4range(1, 15) - int4range(5, 10) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-multirange_lt-TDS"></a><a id="fail-multirange_lt-Relation"></a>`multirange_lt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(1,10)) < int4multirange(int4range(5,15)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4multirange(int4range(1, 10)) < int4multirange(int4range(5, 15)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4multirange(int4range(1, 10)) < int4multirange(int4range(5, 15)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4multirange"


<br>

#### <a id="fail-range_lt-TDS"></a><a id="fail-range_lt-Relation"></a>`range_lt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(1,10) < int4range(5,15) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4range(1, 10) < int4range(5, 15) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4range(1, 10) < int4range(5, 15) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-range_strictly_left__multirange_multirange-TDS"></a><a id="fail-range_strictly_left__multirange_multirange-Relation"></a>`range_strictly_left__multirange_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(1,5)) << int4multirange(int4range(10,15)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4multirange(int4range(1, 5)) << int4multirange(int4range(10, 15)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4multirange(int4range(1, 5)) << int4multirange(int4range(10, 15)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4multirange"


<br>

#### <a id="fail-range_strictly_left__multirange_range-TDS"></a><a id="fail-range_strictly_left__multirange_range-Relation"></a>`range_strictly_left__multirange_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(1,5)) << int4range(10,15) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4multirange(int4range(1, 5)) << int4range(10, 15) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4multirange(int4range(1, 5)) << int4range(10, 15) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4multirange"


<br>

#### <a id="fail-range_strictly_left__range_multirange-TDS"></a><a id="fail-range_strictly_left__range_multirange-Relation"></a>`range_strictly_left__range_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(1,5) << int4multirange(int4range(10,15)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4range(1, 5) << int4multirange(int4range(10, 15)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4range(1, 5) << int4multirange(int4range(10, 15)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-range_strictly_left__range_range-TDS"></a><a id="fail-range_strictly_left__range_range-Relation"></a>`range_strictly_left__range_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(1,5) << int4range(10,15) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4range(1, 5) << int4range(10, 15) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4range(1, 5) << int4range(10, 15) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-multirange_lte-TDS"></a><a id="fail-multirange_lte-Relation"></a>`multirange_lte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(1,10)) <= int4multirange(int4range(1,10)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4multirange(int4range(1, 10)) <= int4multirange(int4range(1, 10)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4multirange(int4range(1, 10)) <= int4multirange(int4range(1, 10)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4multirange"


<br>

#### <a id="fail-range_lte-TDS"></a><a id="fail-range_lte-Relation"></a>`range_lte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(1,10) <= int4range(1,10) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4range(1, 10) <= int4range(1, 10) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4range(1, 10) <= int4range(1, 10) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-multirange_neq-TDS"></a><a id="fail-multirange_neq-Relation"></a>`multirange_neq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(1,10)) <> int4multirange(int4range(5,15)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4multirange(int4range(1, 10)) <> int4multirange(int4range(5, 15)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4multirange(int4range(1, 10)) <> int4multirange(int4range(5, 15)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4multirange"


<br>

#### <a id="fail-range_neq-TDS"></a><a id="fail-range_neq-Relation"></a>`range_neq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(1,10) <> int4range(5,15) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4range(1, 10) <> int4range(5, 15) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4range(1, 10) <> int4range(5, 15) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-range_contained_by__element_multirange-TDS"></a><a id="fail-range_contained_by__element_multirange-Relation"></a>`range_contained_by__element_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT 5 <@ int4multirange(int4range(1,10)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT 5 <@ int4multirange(int4range(1, 10)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT 5 <@ int4multirange(int4range(1, 10)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-range_contained_by__element_range-TDS"></a><a id="fail-range_contained_by__element_range-Relation"></a>`range_contained_by__element_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT 5 <@ int4range(1,10) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT 5 <@ int4range(1, 10) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT 5 <@ int4range(1, 10) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-range_contained_by__multirange_multirange-TDS"></a><a id="fail-range_contained_by__multirange_multirange-Relation"></a>`range_contained_by__multirange_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(3,7)) <@ int4multirange(int4range(1,10)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4multirange(int4range(3, 7)) <@ int4multirange(int4range(1, 10)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4multirange(int4range(3, 7)) <@ int4multirange(int4range(1, 10)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-range_contained_by__multirange_range-TDS"></a><a id="fail-range_contained_by__multirange_range-Relation"></a>`range_contained_by__multirange_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(3,7)) <@ int4range(1,10) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4multirange(int4range(3, 7)) <@ int4range(1, 10) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4multirange(int4range(3, 7)) <@ int4range(1, 10) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-range_contained_by__range_multirange-TDS"></a><a id="fail-range_contained_by__range_multirange-Relation"></a>`range_contained_by__range_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(3,7) <@ int4multirange(int4range(1,10)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4range(3, 7) <@ int4multirange(int4range(1, 10)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4range(3, 7) <@ int4multirange(int4range(1, 10)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-range_contained_by__range_range-TDS"></a><a id="fail-range_contained_by__range_range-Relation"></a>`range_contained_by__range_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(3,7) <@ int4range(1,10) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4range(3, 7) <@ int4range(1, 10) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4range(3, 7) <@ int4range(1, 10) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-multirange_eq-TDS"></a><a id="fail-multirange_eq-Relation"></a>`multirange_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(1,10)) = int4multirange(int4range(1,10)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4multirange(int4range(1, 10)) = int4multirange(int4range(1, 10)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4multirange(int4range(1, 10)) = int4multirange(int4range(1, 10)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4multirange"


<br>

#### <a id="fail-range_eq-TDS"></a><a id="fail-range_eq-Relation"></a>`range_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(1,10) = int4range(1,10) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4range(1, 10) = int4range(1, 10) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4range(1, 10) = int4range(1, 10) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-multirange_gt-TDS"></a><a id="fail-multirange_gt-Relation"></a>`multirange_gt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(5,15)) > int4multirange(int4range(1,10)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4multirange(int4range(5, 15)) > int4multirange(int4range(1, 10)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4multirange(int4range(5, 15)) > int4multirange(int4range(1, 10)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4multirange"


<br>

#### <a id="fail-range_gt-TDS"></a><a id="fail-range_gt-Relation"></a>`range_gt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(5,15) > int4range(1,10) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4range(5, 15) > int4range(1, 10) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4range(5, 15) > int4range(1, 10) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-multirange_gte-TDS"></a><a id="fail-multirange_gte-Relation"></a>`multirange_gte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(1,10)) >= int4multirange(int4range(1,10)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4multirange(int4range(1, 10)) >= int4multirange(int4range(1, 10)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4multirange(int4range(1, 10)) >= int4multirange(int4range(1, 10)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4multirange"


<br>

#### <a id="fail-range_gte-TDS"></a><a id="fail-range_gte-Relation"></a>`range_gte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(1,10) >= int4range(1,10) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4range(1, 10) >= int4range(1, 10) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4range(1, 10) >= int4range(1, 10) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-range_strictly_right__multirange_multirange-TDS"></a><a id="fail-range_strictly_right__multirange_multirange-Relation"></a>`range_strictly_right__multirange_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(10,15)) >> int4multirange(int4range(1,5)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4multirange(int4range(10, 15)) >> int4multirange(int4range(1, 5)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4multirange(int4range(10, 15)) >> int4multirange(int4range(1, 5)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4multirange"


<br>

#### <a id="fail-range_strictly_right__multirange_range-TDS"></a><a id="fail-range_strictly_right__multirange_range-Relation"></a>`range_strictly_right__multirange_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(10,15)) >> int4range(1,5) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4multirange(int4range(10, 15)) >> int4range(1, 5) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4multirange(int4range(10, 15)) >> int4range(1, 5) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4multirange"


<br>

#### <a id="fail-range_strictly_right__range_multirange-TDS"></a><a id="fail-range_strictly_right__range_multirange-Relation"></a>`range_strictly_right__range_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(10,15) >> int4multirange(int4range(1,5)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4range(10, 15) >> int4multirange(int4range(1, 5)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4range(10, 15) >> int4multirange(int4range(1, 5)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-range_strictly_right__range_range-TDS"></a><a id="fail-range_strictly_right__range_range-Relation"></a>`range_strictly_right__range_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(10,15) >> int4range(1,5) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4range(10, 15) >> int4range(1, 5) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4range(10, 15) >> int4range(1, 5) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-range_contains__multirange_element-TDS"></a><a id="fail-range_contains__multirange_element-Relation"></a>`range_contains__multirange_element`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(1,10)) @> 5 AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4multirange(int4range(1, 10)) @> 5 AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4multirange(int4range(1, 10)) @> 5 AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-range_contains__multirange_multirange-TDS"></a><a id="fail-range_contains__multirange_multirange-Relation"></a>`range_contains__multirange_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(1,10)) @> int4multirange(int4range(3,7)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4multirange(int4range(1, 10)) @> int4multirange(int4range(3, 7)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4multirange(int4range(1, 10)) @> int4multirange(int4range(3, 7)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-range_contains__multirange_range-TDS"></a><a id="fail-range_contains__multirange_range-Relation"></a>`range_contains__multirange_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4multirange(int4range(1,10)) @> int4range(3,7) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4multirange(int4range(1, 10)) @> int4range(3, 7) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4multirange(int4range(1, 10)) @> int4range(3, 7) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-range_contains__range_element-TDS"></a><a id="fail-range_contains__range_element-Relation"></a>`range_contains__range_element`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(1,10) @> 5 AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4range(1, 10) @> 5 AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4range(1, 10) @> 5 AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-range_contains__range_multirange-TDS"></a><a id="fail-range_contains__range_multirange-Relation"></a>`range_contains__range_multirange`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(1,10) @> int4multirange(int4range(3,7)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4range(1, 10) @> int4multirange(int4range(3, 7)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4range(1, 10) @> int4multirange(int4range(3, 7)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-range_contains__range_range-TDS"></a><a id="fail-range_contains__range_range-Relation"></a>`range_contains__range_range`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT int4range(1,10) @> int4range(3,7) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT int4range(1, 10) @> int4range(3, 7) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT int4range(1, 10) @> int4range(3, 7) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-tsquery_lt-TDS"></a><a id="fail-tsquery_lt-Relation"></a>`tsquery_lt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsquery('english', 'dog') < to_tsquery('english', 'fox') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT to_tsquery('english', 'dog') < to_tsquery('english', 'fox') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT to_tsquery('english', 'dog') < to_tsquery('english', 'fox') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsquery"


<br>

#### <a id="fail-tsvector_lt-TDS"></a><a id="fail-tsvector_lt-Relation"></a>`tsvector_lt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsvector('english', 'dog') < to_tsvector('english', 'fox') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT to_tsvector('english', 'dog') < to_tsvector('english', 'fox') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT to_tsvector('english', 'dog') < to_tsvector('english', 'fox') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsvector"


<br>

#### <a id="fail-tsquery_lte-TDS"></a><a id="fail-tsquery_lte-Relation"></a>`tsquery_lte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsquery('english', 'dog') <= to_tsquery('english', 'fox') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT to_tsquery('english', 'dog') <= to_tsquery('english', 'fox') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT to_tsquery('english', 'dog') <= to_tsquery('english', 'fox') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsquery"


<br>

#### <a id="fail-tsvector_lte-TDS"></a><a id="fail-tsvector_lte-Relation"></a>`tsvector_lte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsvector('english', 'dog') <= to_tsvector('english', 'fox') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT to_tsvector('english', 'dog') <= to_tsvector('english', 'fox') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT to_tsvector('english', 'dog') <= to_tsvector('english', 'fox') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsvector"


<br>

#### <a id="fail-tsquery_neq-TDS"></a><a id="fail-tsquery_neq-Relation"></a>`tsquery_neq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsquery('english', 'dog') <> to_tsquery('english', 'fox') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT to_tsquery('english', 'dog') <> to_tsquery('english', 'fox') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT to_tsquery('english', 'dog') <> to_tsquery('english', 'fox') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsquery"


<br>

#### <a id="fail-tsvector_neq-TDS"></a><a id="fail-tsvector_neq-Relation"></a>`tsvector_neq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsvector('english', 'dog') <> to_tsvector('english', 'fox') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT to_tsvector('english', 'dog') <> to_tsvector('english', 'fox') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT to_tsvector('english', 'dog') <> to_tsvector('english', 'fox') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsvector"


<br>

#### <a id="fail-tsquery_contained_by-TDS"></a><a id="fail-tsquery_contained_by-Relation"></a>`tsquery_contained_by`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsquery('english', 'fox') <@ to_tsquery('english', 'fox & dog') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT to_tsquery('english', 'fox') <@ to_tsquery('english', 'fox & dog') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT to_tsquery('english', 'fox') <@ to_tsquery('english', 'fox & dog') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsquery"


<br>

#### <a id="fail-tsquery_eq-TDS"></a><a id="fail-tsquery_eq-Relation"></a>`tsquery_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsquery('english', 'fox') = to_tsquery('english', 'fox') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT to_tsquery('english', 'fox') = to_tsquery('english', 'fox') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT to_tsquery('english', 'fox') = to_tsquery('english', 'fox') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsquery"


<br>

#### <a id="fail-tsvector_eq-TDS"></a><a id="fail-tsvector_eq-Relation"></a>`tsvector_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsvector('english', 'fox') = to_tsvector('english', 'fox') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT to_tsvector('english', 'fox') = to_tsvector('english', 'fox') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT to_tsvector('english', 'fox') = to_tsvector('english', 'fox') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsvector"


<br>

#### <a id="fail-tsquery_gt-TDS"></a><a id="fail-tsquery_gt-Relation"></a>`tsquery_gt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsquery('english', 'fox') > to_tsquery('english', 'dog') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT to_tsquery('english', 'fox') > to_tsquery('english', 'dog') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT to_tsquery('english', 'fox') > to_tsquery('english', 'dog') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsquery"


<br>

#### <a id="fail-tsvector_gt-TDS"></a><a id="fail-tsvector_gt-Relation"></a>`tsvector_gt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsvector('english', 'fox') > to_tsvector('english', 'dog') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT to_tsvector('english', 'fox') > to_tsvector('english', 'dog') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT to_tsvector('english', 'fox') > to_tsvector('english', 'dog') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsvector"


<br>

#### <a id="fail-tsquery_gte-TDS"></a><a id="fail-tsquery_gte-Relation"></a>`tsquery_gte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsquery('english', 'fox') >= to_tsquery('english', 'dog') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT to_tsquery('english', 'fox') >= to_tsquery('english', 'dog') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT to_tsquery('english', 'fox') >= to_tsquery('english', 'dog') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsquery"


<br>

#### <a id="fail-tsvector_gte-TDS"></a><a id="fail-tsvector_gte-Relation"></a>`tsvector_gte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsvector('english', 'fox') >= to_tsvector('english', 'dog') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT to_tsvector('english', 'fox') >= to_tsvector('english', 'dog') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT to_tsvector('english', 'fox') >= to_tsvector('english', 'dog') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsvector"


<br>

#### <a id="fail-tsquery_contains-TDS"></a><a id="fail-tsquery_contains-Relation"></a>`tsquery_contains`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsquery('english', 'fox & dog') @> to_tsquery('english', 'fox') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT to_tsquery('english', 'fox & dog') @> to_tsquery('english', 'fox') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT to_tsquery('english', 'fox & dog') @> to_tsquery('english', 'fox') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsquery"


<br>

#### <a id="fail-fts_match_text_tsquery-TDS"></a><a id="fail-fts_match_text_tsquery-Relation"></a>`fts_match_text_tsquery`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT 'the quick brown fox' @@ to_tsquery('english', 'fox') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT 'the quick brown fox' @@ to_tsquery('english', 'fox') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT 'the quick brown fox' @@ to_tsquery('english', 'fox') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsquery"


<br>

#### <a id="fail-fts_match_tsquery_tsvector-TDS"></a><a id="fail-fts_match_tsquery_tsvector-Relation"></a>`fts_match_tsquery_tsvector`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsquery('english', 'fox') @@ to_tsvector('english', 'the quick brown fox') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT to_tsquery('english', 'fox') @@ to_tsvector('english', 'the quick brown fox') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT to_tsquery('english', 'fox') @@ to_tsvector('english', 'the quick brown fox') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsquery"


<br>

#### <a id="fail-fts_match_tsvector_tsquery-TDS"></a><a id="fail-fts_match_tsvector_tsquery-Relation"></a>`fts_match_tsvector_tsquery`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsvector('english', 'the quick brown fox') @@ to_tsquery('english', 'fox') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT to_tsvector('english', 'the quick brown fox') @@ to_tsquery('english', 'fox') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT to_tsvector('english', 'the quick brown fox') @@ to_tsquery('english', 'fox') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsvector"


<br>

#### <a id="fail-tsquery_or-TDS"></a><a id="fail-tsquery_or-Relation"></a>`tsquery_or`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsquery('english', 'fox') || to_tsquery('english', 'dog') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT to_tsquery('english', 'fox') || to_tsquery('english', 'dog') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT to_tsquery('english', 'fox') || to_tsquery('english', 'dog') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsquery"


<br>

#### <a id="fail-tsvector_concat-TDS"></a><a id="fail-tsvector_concat-Relation"></a>`tsvector_concat`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT to_tsvector('english', 'fox') || to_tsvector('english', 'dog') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT to_tsvector('english', 'fox') || to_tsvector('english', 'dog') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT to_tsvector('english', 'fox') || to_tsvector('english', 'dog') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsvector"


<br>

#### <a id="fail-record_lt-TDS"></a><a id="fail-record_lt-Relation"></a>`record_lt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ROW(1, 'a') < ROW(2, 'b') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ROW(1, 'a') < ROW(2, 'b') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ROW(1, 'a') < ROW(2, 'b') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "ROW"


<br>

#### <a id="fail-record_lte-TDS"></a><a id="fail-record_lte-Relation"></a>`record_lte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ROW(1, 'a') <= ROW(2, 'b') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ROW(1, 'a') <= ROW(2, 'b') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ROW(1, 'a') <= ROW(2, 'b') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "ROW"


<br>

#### <a id="fail-record_neq-TDS"></a><a id="fail-record_neq-Relation"></a>`record_neq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ROW(1, 'a') <> ROW(2, 'b') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ROW(1, 'a') <> ROW(2, 'b') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ROW(1, 'a') <> ROW(2, 'b') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "ROW"


<br>

#### <a id="fail-record_eq-TDS"></a><a id="fail-record_eq-Relation"></a>`record_eq`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ROW(1, 'a') = ROW(1, 'a') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ROW(1, 'a') = ROW(1, 'a') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ROW(1, 'a') = ROW(1, 'a') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "ROW"


<br>

#### <a id="fail-record_gt-TDS"></a><a id="fail-record_gt-Relation"></a>`record_gt`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ROW(2, 'b') > ROW(1, 'a') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ROW(2, 'b') > ROW(1, 'a') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ROW(2, 'b') > ROW(1, 'a') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "ROW"


<br>

#### <a id="fail-record_gte-TDS"></a><a id="fail-record_gte-Relation"></a>`record_gte`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ROW(2, 'b') >= ROW(1, 'a') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ROW(2, 'b') >= ROW(1, 'a') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ROW(2, 'b') >= ROW(1, 'a') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "ROW"


