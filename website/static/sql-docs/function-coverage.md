# Postgres Function Coverage — Legend SQL (LegendSql)

## Summary

| Metric | TDS | Relation |
|--------|-----|----------|
| Total signatures | 660 | 660 |
| Unique function names | 346 | 346 |
| **Supported functions (PASS/PARTIAL)** | **122 (35.3%)** | **123 (35.5%)** |
| Total tests | 882 | 882 |
| PASS | 320 | 330 |
| FAIL | 9 | 10 |
| ERROR | 84 | 73 |
| SKIP | 0 | 0 |
| UNSUPPORTED | 351 | 351 |

---

## Error Categories

| Category | Description | TDS | Relation |
|----------|-------------|-----|----------|
| [FUNCTION_NOT_SUPPORTED](#function-not-supported) | Function name not recognized by Legend SQL | 169 | 203 |
| [RESULT_MISMATCH](#result-mismatch) | Query executes but results differ from Postgres | 9 | 11 |
| [MISC](#misc) | Other/uncategorized error | 32 | 35 |
| [UNSUPPORTED_SYNTAX](#unsupported-syntax) | SQL construct recognized but not yet implemented | 59 | 43 |
| [TYPE_ERROR](#type-error) | Type mismatch or cast error | 81 | 41 |
| [PARSE_ERROR](#parse-error) | SQL syntax not parseable by Legend SQL parser | 11 | 11 |

---

## Category Summary

| Category | Total | TDS PASS | TDS PARTIAL | TDS FAIL | TDS ERROR | TDS UNTESTED | Rel PASS | Rel PARTIAL | Rel FAIL | Rel ERROR | Rel UNTESTED |
|----------|-------|----------|-------------|----------|-----------|--------------|----------|-------------|----------|-----------|-------------|
| [Mathematical Functions and Operators (9.3)](https://www.postgresql.org/docs/16/functions-math.html) / [details](#mathematical-functions-and-operators-(9.3)) | 72 | 45 | 0 | 1 | 0 | 6 | 45 | 0 | 1 | 0 | 6 |
| [String Functions and Operators (9.4)](https://www.postgresql.org/docs/16/functions-string.html) / [details](#string-functions-and-operators-(9.4)) | 106 | 35 | 2 | 3 | 0 | 4 | 34 | 2 | 3 | 0 | 5 |
| [Binary String Functions (9.5)](https://www.postgresql.org/docs/16/functions-binarystring.html) / [details](#binary-string-functions-(9.5)) | 9 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
| [Pattern Matching (9.7)](https://www.postgresql.org/docs/16/functions-matching.html) / [details](#pattern-matching-(9.7)) | 19 | 5 | 2 | 2 | 0 | 9 | 8 | 3 | 0 | 0 | 7 |
| [Data Type Formatting (9.8)](https://www.postgresql.org/docs/16/functions-formatting.html) / [details](#data-type-formatting-(9.8)) | 10 | 1 | 0 | 0 | 0 | 3 | 1 | 0 | 0 | 0 | 3 |
| [Date/Time Functions and Operators (9.9)](https://www.postgresql.org/docs/16/functions-datetime.html) / [details](#date/time-functions-and-operators-(9.9)) | 41 | 10 | 0 | 0 | 0 | 9 | 10 | 0 | 0 | 0 | 9 |
| [Conditional Expressions (9.18)](https://www.postgresql.org/docs/16/functions-conditional.html) / [details](#conditional-expressions-(9.18)) | 7 | 2 | 1 | 0 | 0 | 0 | 2 | 1 | 0 | 0 | 0 |
| [JSON Functions and Operators (9.16)](https://www.postgresql.org/docs/16/functions-json.html) / [details](#json-functions-and-operators-(9.16)) | 47 | 0 | 0 | 0 | 0 | 2 | 1 | 0 | 1 | 0 | 0 |
| [Array Functions and Operators (9.19)](https://www.postgresql.org/docs/16/functions-array.html) / [details](#array-functions-and-operators-(9.19)) | 21 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| [Aggregate Functions (9.21)](https://www.postgresql.org/docs/16/functions-aggregate.html) / [details](#aggregate-functions-(9.21)) | 157 | 67 | 6 | 0 | 0 | 9 | 67 | 6 | 0 | 0 | 9 |
| [Window Functions (9.22)](https://www.postgresql.org/docs/16/functions-window.html) / [details](#window-functions-(9.22)) | 15 | 3 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 |
| [Network Address Functions (9.12)](https://www.postgresql.org/docs/16/functions-net.html) / [details](#network-address-functions-(9.12)) | 21 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| [System Information Functions (9.26)](https://www.postgresql.org/docs/16/functions-info.html) / [details](#system-information-functions-(9.26)) | 41 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| [Sequence Manipulation Functions (9.17)](https://www.postgresql.org/docs/16/functions-sequence.html) / [details](#sequence-manipulation-functions-(9.17)) | 5 | 0 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 5 |
| [Set Returning Functions (9.25)](https://www.postgresql.org/docs/16/functions-srf.html) / [details](#set-returning-functions-(9.25)) | 11 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| [Cryptographic Functions (pgcrypto)](https://www.postgresql.org/docs/16/pgcrypto.html) / [details](#cryptographic-functions-(pgcrypto)) | 22 | 0 | 0 | 0 | 0 | 22 | 0 | 0 | 0 | 0 | 22 |
| [Other Functions](#other-functions) | 56 | 40 | 0 | 0 | 0 | 13 | 40 | 0 | 0 | 0 | 13 |

---

<a id="mathematical-functions-and-operators-(9.3)"></a>

## Mathematical Functions and Operators (9.3)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-math.html)

| | Function | Signature | TDS | Relation | Error Category | Notes |
|--|----------|-----------|-----|----------|----------------|-------|
| 🟢 | `abs` | `abs(bigint) → bigint` | PASS (3/3) | PASS (3/3) |  |  |
| 🟢 | `abs` | `abs(double precision) → double precision` | PASS (3/3) | PASS (3/3) |  |  |
| 🟢 | `abs` | `abs(integer) → integer` | PASS (3/3) | PASS (3/3) |  |  |
| 🟢 | `abs` | `abs(numeric) → numeric` | PASS (3/3) | PASS (3/3) |  |  |
| 🟢 | `abs` | `abs(real) → real` | PASS (3/3) | PASS (3/3) |  |  |
| 🟢 | `abs` | `abs(smallint) → smallint` | PASS (3/3) | PASS (3/3) |  |  |
| 🟢 | `acos` | `acos(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `acosh` | `acosh(double precision) → double precision` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-acosh__dp__from_table-TDS) | Function not supported |
| 🟢 | `asin` | `asin(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `asinh` | `asinh(double precision) → double precision` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-asinh__dp__from_table-TDS) | Function not supported |
| 🟢 | `atan` | `atan(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `atan2` | `atan2(double precision, double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `atanh` | `atanh(double precision) → double precision` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-atanh__dp__from_table-TDS) | Function not supported |
| 🟢 | `cbrt` | `cbrt(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `ceil` | `ceil(double precision) → double precision` | PASS (3/3) | PASS (3/3) |  |  |
| 🟢 | `ceil` | `ceil(numeric) → numeric` | PASS (3/3) | PASS (3/3) |  |  |
| 🟢 | `ceiling` | `ceiling(double precision) → double precision` | PASS (3/3) | PASS (3/3) |  |  |
| 🟢 | `ceiling` | `ceiling(numeric) → numeric` | PASS (3/3) | PASS (3/3) |  |  |
| 🟢 | `cos` | `cos(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `cosh` | `cosh(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `degrees` | `degrees(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🔴 | `div` | `div(numeric, numeric) → numeric` | FAIL (0/1) | FAIL (0/1) | [RESULT_MISMATCH](#fail-div__num_num__from_table-TDS) |  |
| ⚪ | `exp` | `exp(double precision) → double precision` | UNTESTED | UNTESTED | [MISC](#fail-exp__dp__from_table-TDS) |  |
| ⚪ | `exp` | `exp(numeric) → numeric` | UNTESTED | UNTESTED | [MISC](#fail-exp__num__from_table-TDS) |  |
| ⚪ | `factorial` | `factorial(bigint) → numeric` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-factorial__big__from_table-TDS) | Function not supported |
| 🟢 | `floor` | `floor(double precision) → double precision` | PASS (3/3) | PASS (3/3) |  |  |
| 🟢 | `floor` | `floor(numeric) → numeric` | PASS (3/3) | PASS (3/3) |  |  |
| ⚪ | `gcd` | `gcd(bigint, bigint) → bigint` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-gcd__big_big__from_table-TDS) | Function not supported |
| ⚪ | `gcd` | `gcd(integer, integer) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-gcd__int_int__from_table-TDS) | Function not supported |
| ⚪ | `gcd` | `gcd(numeric, numeric) → numeric` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-gcd__num_num__from_table-TDS) | Function not supported |
| ⚪ | `lcm` | `lcm(bigint, bigint) → bigint` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-lcm__big_big__from_table-TDS) | Function not supported |
| ⚪ | `lcm` | `lcm(integer, integer) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-lcm__int_int__from_table-TDS) | Function not supported |
| ⚪ | `lcm` | `lcm(numeric, numeric) → numeric` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-lcm__num_num__from_table-TDS) | Function not supported |
| 🟢 | `ln` | `ln(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `ln` | `ln(numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `log` | `log(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `log` | `log(numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `log` | `log(numeric, numeric) → numeric` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-log__num_num__from_table-TDS) | Unsupported feature |
| 🟢 | `log10` | `log10(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `log10` | `log10(numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `min_scale` | `min_scale(numeric) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-min_scale__num__from_table-TDS) | Function not supported |
| 🟢 | `mod` | `mod(bigint, bigint) → bigint` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `mod` | `mod(integer, integer) → integer` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `mod` | `mod(numeric, numeric) → numeric` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `mod` | `mod(smallint, smallint) → smallint` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `pi` | `pi() → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `power` | `power(double precision, double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `power` | `power(numeric, numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `radians` | `radians(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `random` | `random() → double precision` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-random__basic-TDS) | Function not supported |
| 🟢 | `round` | `round(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `round` | `round(numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `round` | `round(numeric, integer) → numeric` | PASS (2/2) | PASS (2/2) |  |  |
| ⚪ | `scale` | `scale(numeric) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-scale__num__from_table-TDS) | Function not supported |
| ⚪ | `setseed` | `setseed(double precision) → void` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-setseed__dp__basic-TDS) | Function not supported |
| 🟢 | `sign` | `sign(double precision) → double precision` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `sign` | `sign(numeric) → numeric` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `sin` | `sin(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `sinh` | `sinh(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `sqrt` | `sqrt(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `sqrt` | `sqrt(numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `tan` | `tan(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `tanh` | `tanh(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `trim_scale` | `trim_scale(numeric) → numeric` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-trim_scale__num__from_table-TDS) | Function not supported |
| ⚪ | `trunc` | `trunc(double precision) → double precision` | UNTESTED | UNTESTED | [MISC](#fail-trunc__dp__from_table-TDS) |  |
| ⚪ | `trunc` | `trunc(macaddr) → macaddr` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-trunc__macaddr__unsupported_type-TDS), [MISC](#fail-trunc_macaddr_cov-TDS) |  |
| ⚪ | `trunc` | `trunc(macaddr8) → macaddr8` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-trunc__macaddr8__unsupported_type-TDS), [MISC](#fail-trunc_macaddr8_cov-TDS) |  |
| ⚪ | `trunc` | `trunc(numeric) → numeric` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-trunc__num__from_table-TDS) |  |
| ⚪ | `trunc` | `trunc(numeric, integer) → numeric` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-trunc__num_int__from_table-TDS) | Unsupported feature |
| ⚪ | `width_bucket` | `width_bucket(anycompatible, anycompatiblearray) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-width_bucket__anycompatible_anycompatiblearray__unsupported_type-TDS) | Function not supported |
| ⚪ | `width_bucket` | `width_bucket(double precision, double precision, double precision, integer) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-width_bucket__dp_dp_dp_int__from_table-TDS) | Function not supported |
| ⚪ | `width_bucket` | `width_bucket(numeric, numeric, numeric, integer) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-width_bucket__num_num_num_int__from_table-TDS) | Function not supported |

<a id="string-functions-and-operators-(9.4)"></a>

## String Functions and Operators (9.4)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-string.html)

| | Function | Signature | TDS | Relation | Error Category | Notes |
|--|----------|-----------|-----|----------|----------------|-------|
| ⚪ | `array_to_string` | `array_to_string(anyarray, text) → text` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_to_string__anyarray_txt__no_generator-TDS) | Function not supported |
| ⚪ | `array_to_string` | `array_to_string(anyarray, text, text) → text` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_to_string__anyarray_txt_txt__from_table-TDS) | Function not supported |
| 🟢 | `ascii` | `ascii(text) → integer` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `bit_length` | `bit_length(bit) → integer` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-bit_length__bit__unsupported_type-TDS), [FUNCTION_NOT_SUPPORTED](#fail-bit_length_bit_cov-TDS) | Function not supported |
| ⚪ | `bit_length` | `bit_length(bytea) → integer` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-bit_length__bytea__unsupported_type-TDS), [FUNCTION_NOT_SUPPORTED](#fail-bit_length_bytea_cov-TDS) | Function not supported |
| ⚪ | `bit_length` | `bit_length(text) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-bit_length__txt__from_table-TDS) | Function not supported |
| ⚪ | `btrim` | `btrim(bytea, bytea) → bytea` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-btrim__bytea_bytea__unsupported_type-TDS) | Unsupported feature |
| 🟢 | `btrim` | `btrim(text) → text` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `btrim` | `btrim(text, text) → text` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-btrim__txt_txt__from_table-TDS) | Unsupported feature |
| ⚪ | `char_length` | `char_length(character) → integer` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-char_length__char__unsupported_type-TDS) | Unsupported feature |
| 🟢 | `char_length` | `char_length(text) → integer` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `character_length` | `character_length(character) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-character_length__char__unsupported_type-TDS) | Function not supported |
| ⚪ | `character_length` | `character_length(text) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-character_length__txt__from_table-TDS) | Function not supported |
| 🟢 | `chr` | `chr(integer) → text` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `concat` | `concat(VARIADIC "any") → text` | PASS (8/8) | PASS (8/8) |  |  |
| 🔴 | `concat_ws` | `concat_ws(text, VARIADIC "any") → text` | FAIL (0/1) | FAIL (0/1) | [RESULT_MISMATCH](#fail-concat_ws__txt_variadic__from_table-TDS) |  |
| ⚪ | `decode` | `decode(text, text) → bytea` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-decode__txt_txt__unsupported_type-TDS), [MISC](#fail-decode_text_text_cov-TDS) |  |
| ⚪ | `encode` | `encode(bytea, text) → text` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-encode__bytea_txt__unsupported_type-TDS), [MISC](#fail-encode_bytea_text_cov-TDS) | Unsupported feature |
| ⚪ | `format` | `format(text) → text` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-format__txt__from_table-TDS) | Function not supported |
| ⚪ | `format` | `format(text, VARIADIC "any") → text` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-format__txt_variadic__from_table-TDS) | Function not supported |
| 🔴 | `initcap` | `initcap(text) → text` | FAIL (0/1) | FAIL (0/1) | [RESULT_MISMATCH](#fail-initcap__txt__from_table-TDS) |  |
| ⚪ | `is_normalized` | `is_normalized(text, text DEFAULT 'NFC'::text) → boolean` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-is_normalized__txt_txtNFCtxt__from_table-TDS) | Function not supported |
| 🟢 | `left` | `left(text, integer) → text` | PASS (2/2) | PASS (2/2) |  |  |
| ⚪ | `length` | `length(bit) → integer` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-length__bit__unsupported_type-TDS) | Unsupported feature |
| ⚪ | `length` | `length(bytea) → integer` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-length__bytea__unsupported_type-TDS) | Unsupported feature |
| ⚪ | `length` | `length(bytea, name) → integer` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-length__bytea_name__unsupported_type-TDS) | Unsupported feature |
| ⚪ | `length` | `length(character) → integer` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-length__char__unsupported_type-TDS) | Unsupported feature |
| 🟡 | `length` | `length(lseg) → double precision` | PARTIAL (1/2) | PARTIAL (1/2) | [TYPE_ERROR](#fail-length__lseg__unsupported_type-TDS) |  |
| 🟡 | `length` | `length(path) → double precision` | PARTIAL (1/2) | PARTIAL (1/2) | [TYPE_ERROR](#fail-length__path__unsupported_type-TDS) |  |
| 🟢 | `length` | `length(text) → integer` | PASS (2/2) | PASS (2/2) |  |  |
| ⚪ | `length` | `length(tsvector) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-length__tsvector__unsupported_type-TDS) | Function not supported |
| ⚪ | `lower` | `lower(anymultirange) → anyelement` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-lower__anymultirange__unsupported_type-TDS) | Function not supported |
| ⚪ | `lower` | `lower(anyrange) → anyelement` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-lower__anyrange__unsupported_type-TDS) | Function not supported |
| 🟢 | `lower` | `lower(text) → text` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `lpad` | `lpad(text, integer) → text` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `lpad` | `lpad(text, integer, text) → text` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `ltrim` | `ltrim(bytea, bytea) → bytea` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-ltrim__bytea_bytea__unsupported_type-TDS) | Unsupported feature |
| 🟢 | `ltrim` | `ltrim(text) → text` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `ltrim` | `ltrim(text, text) → text` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `md5` | `md5(bytea) → text` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-md5__bytea__unsupported_type-TDS) | Unsupported feature |
| 🟢 | `md5` | `md5(text) → text` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `normalize` | `normalize(text, text DEFAULT 'NFC'::text) → text` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-normalize__txt_txtNFCtxt__from_table-TDS) | Function not supported |
| ⚪ | `octet_length` | `octet_length(bit) → integer` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-octet_length__bit__unsupported_type-TDS), [FUNCTION_NOT_SUPPORTED](#fail-octet_length_bit_cov-TDS) | Function not supported |
| ⚪ | `octet_length` | `octet_length(bytea) → integer` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-octet_length__bytea__unsupported_type-TDS), [FUNCTION_NOT_SUPPORTED](#fail-octet_length_bytea_cov-TDS) | Function not supported |
| ⚪ | `octet_length` | `octet_length(character) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-octet_length__char__unsupported_type-TDS) | Function not supported |
| ⚪ | `octet_length` | `octet_length(text) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-octet_length__txt__from_table-TDS) | Function not supported |
| ⚪ | `overlay` | `overlay(bit, bit, integer) → bit` | UNSUPPORTED | UNSUPPORTED | [PARSE_ERROR](#fail-overlay__bit_bit_int__unsupported_type-TDS), [FUNCTION_NOT_SUPPORTED](#fail-overlay_bit_bit_integer_cov-TDS) | Function not supported |
| ⚪ | `overlay` | `overlay(bit, bit, integer, integer) → bit` | UNSUPPORTED | UNSUPPORTED | [PARSE_ERROR](#fail-overlay__bit_bit_int_int__unsupported_type-TDS), [FUNCTION_NOT_SUPPORTED](#fail-overlay_bit_bit_integer_integer_cov-TDS) | Function not supported |
| ⚪ | `overlay` | `overlay(bytea, bytea, integer) → bytea` | UNSUPPORTED | UNSUPPORTED | [PARSE_ERROR](#fail-overlay__bytea_bytea_int__unsupported_type-TDS), [FUNCTION_NOT_SUPPORTED](#fail-overlay_bytea_bytea_integer_cov-TDS) | Function not supported |
| ⚪ | `overlay` | `overlay(bytea, bytea, integer, integer) → bytea` | UNSUPPORTED | UNSUPPORTED | [PARSE_ERROR](#fail-overlay__bytea_bytea_int_int__unsupported_type-TDS), [FUNCTION_NOT_SUPPORTED](#fail-overlay_bytea_bytea_integer_integer_cov-TDS) | Function not supported |
| ⚪ | `overlay` | `overlay(text, text, integer) → text` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-overlay__txt_txt_int__special_syntax-TDS) |  |
| ⚪ | `overlay` | `overlay(text, text, integer, integer) → text` | UNSUPPORTED | UNSUPPORTED | [PARSE_ERROR](#fail-overlay__txt_txt_int_int__special_syntax-TDS), [FUNCTION_NOT_SUPPORTED](#fail-overlay__txt_txt_int_int__func_syntax-TDS) | Function not supported |
| ⚪ | `position` | `position(bit, bit) → integer` | UNSUPPORTED | UNSUPPORTED | [PARSE_ERROR](#fail-position__bit_bit__unsupported_type-TDS), [FUNCTION_NOT_SUPPORTED](#fail-position_bit_bit_cov-TDS) | Function not supported |
| ⚪ | `position` | `position(bytea, bytea) → integer` | UNSUPPORTED | UNSUPPORTED | [PARSE_ERROR](#fail-position__bytea_bytea__unsupported_type-TDS), [FUNCTION_NOT_SUPPORTED](#fail-position_bytea_bytea_cov-TDS) | Function not supported |
| ⚪ | `position` | `position(text, text) → integer` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-position__txt_txt__from_table-TDS) |  |
| ⚪ | `quote_ident` | `quote_ident(text) → text` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-quote_ident__txt__from_table-TDS) | Function not supported |
| ⚪ | `quote_literal` | `quote_literal(anyelement) → text` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-quote_literal__anyelement__unsupported_type-TDS) | Function not supported |
| ⚪ | `quote_literal` | `quote_literal(text) → text` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-quote_literal__txt__from_table-TDS) | Function not supported |
| ⚪ | `quote_nullable` | `quote_nullable(anyelement) → text` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-quote_nullable__anyelement__unsupported_type-TDS) | Function not supported |
| ⚪ | `quote_nullable` | `quote_nullable(text) → text` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-quote_nullable__txt__from_table-TDS) | Function not supported |
| ⚪ | `regexp_match` | `regexp_match(text, text) → text[]` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-regexp_match__txt_txt__from_table-TDS) | Function not supported |
| ⚪ | `regexp_match` | `regexp_match(text, text, text) → text[]` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-regexp_match__txt_txt_txt__from_table-TDS) | Function not supported |
| ⚪ | `regexp_matches` | `regexp_matches(text, text) → SETOF text[]` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-regexp_matches__txt_txt__from_table-TDS) | Function not supported |
| ⚪ | `regexp_matches` | `regexp_matches(text, text, text) → SETOF text[]` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-regexp_matches__txt_txt_txt__from_table-TDS) | Function not supported |
| 🟢 | `regexp_replace` | `regexp_replace(text, text, text) → text` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `regexp_replace` | `regexp_replace(text, text, text, integer) → text` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `regexp_replace` | `regexp_replace(text, text, text, integer, integer) → text` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `regexp_replace` | `regexp_replace(text, text, text, integer, integer, text) → text` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `regexp_replace` | `regexp_replace(text, text, text, text) → text` | PASS (15/15) | PASS (15/15) |  |  |
| ⚪ | `regexp_split_to_array` | `regexp_split_to_array(text, text) → text[]` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-regexp_split_to_array__txt_txt__from_table-TDS) | Function not supported |
| ⚪ | `regexp_split_to_array` | `regexp_split_to_array(text, text, text) → text[]` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-regexp_split_to_array__txt_txt_txt__from_table-TDS) | Function not supported |
| ⚪ | `regexp_split_to_table` | `regexp_split_to_table(text, text) → SETOF text` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-regexp_split_to_table__txt_txt__from_table-TDS) | Function not supported |
| ⚪ | `regexp_split_to_table` | `regexp_split_to_table(text, text, text) → SETOF text` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-regexp_split_to_table__txt_txt_txt__from_table-TDS) | Function not supported |
| 🟢 | `repeat` | `repeat(text, integer) → text` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `replace` | `replace(text, text, text) → text` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `reverse` | `reverse(text) → text` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `right` | `right(text, integer) → text` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `rpad` | `rpad(text, integer) → text` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `rpad` | `rpad(text, integer, text) → text` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `rtrim` | `rtrim(bytea, bytea) → bytea` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-rtrim__bytea_bytea__unsupported_type-TDS) | Unsupported feature |
| 🟢 | `rtrim` | `rtrim(text) → text` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `rtrim` | `rtrim(text, text) → text` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `split_part` | `split_part(text, text, integer) → text` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `starts_with` | `starts_with(text, text) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🔴 | `string_to_array` | `string_to_array(text, text) → text[]` | FAIL (0/1) | FAIL (0/1) | [RESULT_MISMATCH](#fail-string_to_array__txt_txt__from_table-TDS) |  |
| ⚪ | `string_to_array` | `string_to_array(text, text, text) → text[]` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-string_to_array__txt_txt_txt__from_table-TDS) | Unsupported feature |
| 🟢 | `strpos` | `strpos(text, text) → integer` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `substr` | `substr(bytea, integer) → bytea` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-substr__bytea_int__unsupported_type-TDS), [MISC](#fail-substr_bytea_integer_cov-TDS) | Unsupported feature |
| ⚪ | `substr` | `substr(bytea, integer, integer) → bytea` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-substr__bytea_int_int__unsupported_type-TDS), [MISC](#fail-substr_bytea_integer_integer_cov-TDS) | Unsupported feature |
| 🟢 | `substr` | `substr(text, integer) → text` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `substr` | `substr(text, integer, integer) → text` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `substring` | `substring(bit, integer) → bit` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-substring__bit_int__unsupported_type-TDS), [MISC](#fail-substring_bit_integer_cov-TDS) | Unsupported feature |
| ⚪ | `substring` | `substring(bit, integer, integer) → bit` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-substring__bit_int_int__unsupported_type-TDS), [MISC](#fail-substring_bit_integer_integer_cov-TDS) | Unsupported feature |
| ⚪ | `substring` | `substring(bytea, integer) → bytea` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-substring__bytea_int__unsupported_type-TDS), [MISC](#fail-substring_bytea_integer_cov-TDS) | Unsupported feature |
| ⚪ | `substring` | `substring(bytea, integer, integer) → bytea` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-substring__bytea_int_int__unsupported_type-TDS), [MISC](#fail-substring_bytea_integer_integer_cov-TDS) | Unsupported feature |
| 🟢 | `substring` | `substring(text, integer) → text` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `substring` | `substring(text, integer, integer) → text` | PASS (2/2) | PASS (2/2) |  |  |
| 🟡 | `substring` | `substring(text, text) → text` | PASS (1/1) | UNTESTED | [MISC](#fail-substring__txt_txt__from_table-Relation) |  |
| ⚪ | `substring` | `substring(text, text, text) → text` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-substring__txt_txt_txt__from_table-TDS), [MISC](#fail-substring_text_text_text_cov-TDS) |  |
| ⚪ | `to_hex` | `to_hex(bigint) → text` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-to_hex__big__from_table-TDS) | Function not supported |
| ⚪ | `to_hex` | `to_hex(integer) → text` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-to_hex__int__from_table-TDS) | Function not supported |
| ⚪ | `translate` | `translate(text, text, text) → text` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-translate__txt_txt_txt__from_table-TDS) | Function not supported |
| ⚪ | `unistr` | `unistr(text) → text` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-unistr__txt__from_table-TDS) | Function not supported |
| ⚪ | `upper` | `upper(anymultirange) → anyelement` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-upper__anymultirange__unsupported_type-TDS) | Function not supported |
| ⚪ | `upper` | `upper(anyrange) → anyelement` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-upper__anyrange__unsupported_type-TDS) | Function not supported |
| 🟢 | `upper` | `upper(text) → text` | PASS (2/2) | PASS (2/2) |  |  |

<a id="binary-string-functions-(9.5)"></a>

## Binary String Functions (9.5)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-binarystring.html)

| | Function | Signature | TDS | Relation | Error Category | Notes |
|--|----------|-----------|-----|----------|----------------|-------|
| ⚪ | `convert` | `convert(bytea, name, name) → bytea` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-convert__bytea_name_name-TDS) | Function not supported |
| ⚪ | `convert_from` | `convert_from(bytea, name) → text` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-convert_from__bytea_name-TDS) | Function not supported |
| ⚪ | `convert_to` | `convert_to(text, name) → bytea` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-convert_to__txt_name-TDS) | Function not supported |
| ⚪ | `get_byte` | `get_byte(bytea, integer) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-get_byte__bytea_int-TDS) | Function not supported |
| ⚪ | `set_byte` | `set_byte(bytea, integer, integer) → bytea` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-set_byte__bytea_int_int-TDS) | Function not supported |
| ⚪ | `sha224` | `sha224(bytea) → bytea` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-sha224__bytea-TDS) | Function not supported |
| ⚪ | `sha256` | `sha256(bytea) → bytea` | UNTESTED | UNTESTED | [MISC](#fail-sha256__bytea-TDS) |  |
| ⚪ | `sha384` | `sha384(bytea) → bytea` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-sha384__bytea-TDS) | Function not supported |
| ⚪ | `sha512` | `sha512(bytea) → bytea` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-sha512__bytea-TDS) | Function not supported |

<a id="pattern-matching-(9.7)"></a>

## Pattern Matching (9.7)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-matching.html)

| | Function | Signature | TDS | Relation | Error Category | Notes |
|--|----------|-----------|-----|----------|----------------|-------|
| ⚪ | `like` | `like(bytea, bytea) → boolean` | UNTESTED | UNTESTED |  |  |
| ⚪ | `like` | `like(name, text) → boolean` | UNTESTED | UNTESTED |  |  |
| ⚪ | `like` | `like(text, text) → boolean` | UNTESTED | UNTESTED |  |  |
| 🟢 | `regexp_count` | `regexp_count(text, text) → integer` | PASS (1/1) | PASS (1/1) |  |  |
| 🟡 | `regexp_count` | `regexp_count(text, text, integer) → integer` | PARTIAL (1/2) | PARTIAL (1/2) | [RESULT_MISMATCH](#fail-regexp_count__start_position__ignored_by_legend-TDS) |  |
| 🟢 | `regexp_count` | `regexp_count(text, text, integer, text) → integer` | PASS (11/11) | PASS (11/11) |  |  |
| 🟢 | `regexp_instr` | `regexp_instr(text, text) → integer` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `regexp_instr` | `regexp_instr(text, text, integer) → integer` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-regexp_instr__constant__extra_args_error-TDS) | Unsupported feature |
| ⚪ | `regexp_instr` | `regexp_instr(text, text, integer, integer) → integer` | UNTESTED | UNTESTED |  |  |
| ⚪ | `regexp_instr` | `regexp_instr(text, text, integer, integer, integer) → integer` | UNTESTED | UNTESTED |  |  |
| ⚪ | `regexp_instr` | `regexp_instr(text, text, integer, integer, integer, text) → integer` | UNTESTED | UNTESTED |  |  |
| ⚪ | `regexp_instr` | `regexp_instr(text, text, integer, integer, integer, text, integer) → integer` | UNTESTED | UNTESTED |  |  |
| 🟢 | `regexp_like` | `regexp_like(text, text) → boolean` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `regexp_like` | `regexp_like(text, text, text) → boolean` | PASS (12/12) | PASS (12/12) |  |  |
| 🟡 | `regexp_substr` | `regexp_substr(text, text) → text` | UNTESTED | PASS (1/1) | [MISC](#fail-regexp_substr__constant__no_flags-TDS) |  |
| 🟡 | `regexp_substr` | `regexp_substr(text, text, integer) → text` | FAIL (0/2) | PARTIAL (1/2) | [RESULT_MISMATCH](#fail-regexp_substr__start_position__ignored_by_legend-TDS), [MISC](#fail-regexp_substr__constant__start_pos-TDS) |  |
| 🟡 | `regexp_substr` | `regexp_substr(text, text, integer, integer) → text` | FAIL (0/4) | PARTIAL (1/4) | [RESULT_MISMATCH](#fail-regexp_substr__nth_occurrence__ignored_by_legend-TDS), [MISC](#fail-regexp_substr__constant__start_pos_occurrence-TDS) |  |
| 🟡 | `regexp_substr` | `regexp_substr(text, text, integer, integer, text) → text` | PARTIAL (5/11) | PASS (11/11) | [MISC](#fail-regexp_substr__constant__flag_in-TDS) |  |
| 🟡 | `regexp_substr` | `regexp_substr(text, text, integer, integer, text, integer) → text` | UNTESTED | PASS (1/1) | [MISC](#fail-regexp_substr__constant__subexpr-TDS) |  |

<a id="data-type-formatting-(9.8)"></a>

## Data Type Formatting (9.8)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-formatting.html)

| | Function | Signature | TDS | Relation | Error Category | Notes |
|--|----------|-----------|-----|----------|----------------|-------|
| ⚪ | `to_char` | `to_char(bigint, text) → text` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-to_char__big_txt__from_table-TDS) | Unsupported feature |
| ⚪ | `to_char` | `to_char(double precision, text) → text` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-to_char__dp_txt__from_table-TDS) | Unsupported feature |
| ⚪ | `to_char` | `to_char(integer, text) → text` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-to_char__int_txt__from_table-TDS) | Unsupported feature |
| ⚪ | `to_char` | `to_char(interval, text) → text` | UNTESTED | UNTESTED | [MISC](#fail-to_char__intv_txt__from_table-TDS) |  |
| ⚪ | `to_char` | `to_char(numeric, text) → text` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-to_char__num_txt__from_table-TDS) | Unsupported feature |
| ⚪ | `to_char` | `to_char(real, text) → text` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-to_char__real_txt__from_table-TDS) |  |
| ⚪ | `to_char` | `to_char(timestamp with time zone, text) → text` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-to_char__tstz_txt__from_table-TDS) |  |
| 🟢 | `to_char` | `to_char(timestamp without time zone, text) → text` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `to_date` | `to_date(text, text) → date` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-to_date__txt_txt__from_table-TDS) | Function not supported |
| ⚪ | `to_number` | `to_number(text, text) → numeric` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-to_number__txt_txt__from_table-TDS) | Function not supported |

<a id="date/time-functions-and-operators-(9.9)"></a>

## Date/Time Functions and Operators (9.9)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-datetime.html)

| | Function | Signature | TDS | Relation | Error Category | Notes |
|--|----------|-----------|-----|----------|----------------|-------|
| ⚪ | `age` | `age(timestamp with time zone) → interval` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-age__tstz__from_table-TDS) | Function not supported |
| ⚪ | `age` | `age(timestamp with time zone, timestamp with time zone) → interval` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-age__tstz_tstz__from_table-TDS) | Function not supported |
| ⚪ | `age` | `age(timestamp without time zone) → interval` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-age__ts__from_table-TDS) | Function not supported |
| ⚪ | `age` | `age(timestamp without time zone, timestamp without time zone) → interval` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-age__ts_ts__from_table-TDS) | Function not supported |
| ⚪ | `age` | `age(xid) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-age__xid__unsupported_type-TDS) | Function not supported |
| ⚪ | `clock_timestamp` | `clock_timestamp() → timestamp with time zone` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-clock_timestamp__basic-TDS) | Function not supported |
| 🟢 | `date_part` | `date_part(text, date) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `date_part` | `date_part(text, interval) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `date_part` | `date_part(text, time with time zone) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `date_part` | `date_part(text, time without time zone) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `date_part` | `date_part(text, timestamp with time zone) → double precision` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-date_part__txt_tstz__from_table-TDS) |  |
| 🟢 | `date_part` | `date_part(text, timestamp without time zone) → double precision` | PASS (2/2) | PASS (2/2) |  |  |
| ⚪ | `date_trunc` | `date_trunc(text, interval) → interval` | UNTESTED | UNTESTED | [MISC](#fail-date_trunc__txt_intv__from_table-TDS) |  |
| ⚪ | `date_trunc` | `date_trunc(text, timestamp with time zone) → timestamp with time zone` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-date_trunc__txt_tstz__from_table-TDS) |  |
| ⚪ | `date_trunc` | `date_trunc(text, timestamp with time zone, text) → timestamp with time zone` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-date_trunc__txt_tstz_txt__from_table-TDS) |  |
| 🟢 | `date_trunc` | `date_trunc(text, timestamp without time zone) → timestamp without time zone` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `extract` | `extract(text, date) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `extract` | `extract(text, interval) → numeric` | UNTESTED | UNTESTED | [MISC](#fail-extract__txt_intv__from_table-TDS) |  |
| ⚪ | `extract` | `extract(text, time with time zone) → numeric` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-extract__txt_timetz__from_table-TDS) |  |
| ⚪ | `extract` | `extract(text, time without time zone) → numeric` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-extract__txt_time__from_table-TDS) |  |
| ⚪ | `extract` | `extract(text, timestamp with time zone) → numeric` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-extract__txt_tstz__from_table-TDS) |  |
| 🟢 | `extract` | `extract(text, timestamp without time zone) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `isfinite` | `isfinite(date) → boolean` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-isfinite__date__from_table-TDS) | Function not supported |
| ⚪ | `isfinite` | `isfinite(interval) → boolean` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-isfinite__intv__from_table-TDS) | Function not supported |
| ⚪ | `isfinite` | `isfinite(timestamp with time zone) → boolean` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-isfinite__tstz__from_table-TDS) | Function not supported |
| ⚪ | `isfinite` | `isfinite(timestamp without time zone) → boolean` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-isfinite__ts__from_table-TDS) | Function not supported |
| ⚪ | `justify_days` | `justify_days(interval) → interval` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-justify_days__intv__from_table-TDS) | Function not supported |
| ⚪ | `justify_hours` | `justify_hours(interval) → interval` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-justify_hours__intv__from_table-TDS) | Function not supported |
| ⚪ | `justify_interval` | `justify_interval(interval) → interval` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-justify_interval__intv__from_table-TDS) | Function not supported |
| 🟢 | `make_date` | `make_date(year integer, month integer, day integer) → date` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `make_interval` | `make_interval(years integer DEFAULT 0, months integer DEFAULT 0, weeks integer DEFAULT 0, days integer DEFAULT 0, hours integer DEFAULT 0, mins integer DEFAULT 0, secs double precision DEFAULT 0.0) → interval` | UNTESTED | UNTESTED | [PARSE_ERROR](#fail-make_interval__sint0_sint0_int0_sint0_sint0_sint0_sdp0.0__from_table-TDS) |  |
| ⚪ | `make_time` | `make_time(hour integer, min integer, sec double precision) → time without time zone` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-make_time__int_int_dp__from_table-TDS) | Function not supported |
| 🟢 | `make_timestamp` | `make_timestamp(year integer, month integer, mday integer, hour integer, min integer, sec double precision) → timestamp without time zone` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `make_timestamptz` | `make_timestamptz(year integer, month integer, mday integer, hour integer, min integer, sec double precision) → timestamp with time zone` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-make_timestamptz__int_int_t_int_int_dp__from_table-TDS) | Function not supported |
| ⚪ | `make_timestamptz` | `make_timestamptz(year integer, month integer, mday integer, hour integer, min integer, sec double precision, timezone text) → timestamp with time zone` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-make_timestamptz__int_int_t_int_int_dp_timezonetxt__from_table-TDS) | Function not supported |
| ⚪ | `now` | `now() → timestamp with time zone` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-now__basic-TDS) | Function not supported |
| ⚪ | `statement_timestamp` | `statement_timestamp() → timestamp with time zone` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-statement_timestamp__basic-TDS) | Function not supported |
| ⚪ | `timeofday` | `timeofday() → text` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-timeofday__basic-TDS) | Function not supported |
| ⚪ | `to_timestamp` | `to_timestamp(double precision) → timestamp with time zone` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-to_timestamp__dp__from_table-TDS) | Function not supported |
| ⚪ | `to_timestamp` | `to_timestamp(text, text) → timestamp with time zone` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-to_timestamp__txt_txt__no_generator-TDS) | Function not supported |
| ⚪ | `transaction_timestamp` | `transaction_timestamp() → timestamp with time zone` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-transaction_timestamp__basic-TDS) | Function not supported |

<a id="conditional-expressions-(9.18)"></a>

## Conditional Expressions (9.18)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-conditional.html)

| | Function | Signature | TDS | Relation | Error Category | Notes |
|--|----------|-----------|-----|----------|----------------|-------|
| ⚪ | `num_nonnulls` | `num_nonnulls(VARIADIC "any") → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-num_nonnulls__variadic__from_table-TDS) | Function not supported |
| ⚪ | `num_nulls` | `num_nulls(VARIADIC "any") → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-num_nulls__variadic__from_table-TDS) | Function not supported |
| ⚪ | `nullif` | `nullif(varchar, varchar) → varchar` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-nullif__varchar__equal-TDS) | Function not supported |
| 🟢 | `least` | `least(VARIADIC "any") → "any"` | PASS (3/3) | PASS (3/3) |  |  |
| 🟡 | `coalesce` | `coalesce(VARIADIC "any") → "any"` | PARTIAL (6/7) | PARTIAL (6/7) | [MISC](#fail-coalesce__all_null-TDS) |  |
| 🟢 | `greatest` | `greatest(VARIADIC "any") → "any"` | PASS (3/3) | PASS (3/3) |  |  |
| ⚪ | `nullif` | `nullif(integer, integer) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-nullif__int__equal-TDS) | Function not supported |

<a id="json-functions-and-operators-(9.16)"></a>

## JSON Functions and Operators (9.16)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-json.html)

| | Function | Signature | TDS | Relation | Error Category | Notes |
|--|----------|-----------|-----|----------|----------------|-------|
| ⚪ | `array_to_json` | `array_to_json(anyarray) → json` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_to_json__unsupported_type-TDS) | Function not supported |
| ⚪ | `array_to_json` | `array_to_json(anyarray, boolean) → json` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_to_json__bool__unsupported_type-TDS) | Function not supported |
| ⚪ | `json_array_elements` | `json_array_elements(from_json json, OUT value json) → SETOF json` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-json_array_elements__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-json_array_elements__from_column-Relation) | Function not supported |
| ⚪ | `json_array_elements_text` | `json_array_elements_text(from_json json, OUT value text) → SETOF text` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-json_array_elements_text__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-json_array_elements_text__from_column-Relation) | Function not supported |
| ⚪ | `json_array_length` | `json_array_length(json) → integer` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-json_array_length__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-json_array_length__from_column-Relation) | Function not supported |
| ⚪ | `json_build_array` | `json_build_array() → json` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-json_build_array__empty-TDS), [UNSUPPORTED_SYNTAX](#fail-json_build_array__empty-Relation) | Unsupported feature |
| ⚪ | `json_build_array` | `json_build_array(VARIADIC "any") → json` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-json_build_array__variadic__from_column-TDS), [UNSUPPORTED_SYNTAX](#fail-json_build_array__variadic__from_column-Relation) | Unsupported feature |
| ⚪ | `json_build_object` | `json_build_object() → json` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-json_build_object__empty-TDS), [UNSUPPORTED_SYNTAX](#fail-json_build_object__empty-Relation) | Unsupported feature |
| ⚪ | `json_build_object` | `json_build_object(VARIADIC "any") → json` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-json_build_object__variadic__from_column-TDS), [UNSUPPORTED_SYNTAX](#fail-json_build_object__variadic__from_column-Relation) | Unsupported feature |
| ⚪ | `json_each` | `json_each(from_json json, OUT key text, OUT value json) → SETOF record` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-json_each__from_column-TDS) | Function not supported |
| ⚪ | `json_each_text` | `json_each_text(from_json json, OUT key text, OUT value text) → SETOF record` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-json_each_text__from_column-TDS) | Function not supported |
| 🔴 | `json_extract_path` | `json_extract_path(from_json json, VARIADIC path_elems text[]) → json` | UNTESTED | FAIL (0/1) | [TYPE_ERROR](#fail-json_extract_path__from_column-TDS), [RESULT_MISMATCH](#fail-json_extract_path__from_column-Relation) |  |
| 🟡 | `json_extract_path_text` | `json_extract_path_text(from_json json, VARIADIC path_elems text[]) → text` | UNTESTED | PASS (1/1) | [TYPE_ERROR](#fail-json_extract_path_text__from_column-TDS) |  |
| ⚪ | `json_object` | `json_object(text[]) → json` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-json_object__text_array-TDS), [FUNCTION_NOT_SUPPORTED](#fail-json_object__text_array-Relation) | Function not supported |
| ⚪ | `json_object` | `json_object(text[], text[]) → json` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-json_object__keys_values-TDS), [FUNCTION_NOT_SUPPORTED](#fail-json_object__keys_values-Relation) | Function not supported |
| ⚪ | `json_object_keys` | `json_object_keys(json) → SETOF text` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-json_object_keys__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-json_object_keys__from_column-Relation) | Function not supported |
| ⚪ | `json_strip_nulls` | `json_strip_nulls(json) → json` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-json_strip_nulls__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-json_strip_nulls__from_column-Relation) | Function not supported |
| ⚪ | `json_typeof` | `json_typeof(json) → text` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-json_typeof__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-json_typeof__from_column-Relation) | Function not supported |
| ⚪ | `jsonb_array_elements` | `jsonb_array_elements(from_json jsonb, OUT value jsonb) → SETOF jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_array_elements__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_array_elements__from_column-Relation) | Function not supported |
| ⚪ | `jsonb_array_elements_text` | `jsonb_array_elements_text(from_json jsonb, OUT value text) → SETOF text` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_array_elements_text__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_array_elements_text__from_column-Relation) | Function not supported |
| ⚪ | `jsonb_array_length` | `jsonb_array_length(jsonb) → integer` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_array_length__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_array_length__from_column-Relation) | Function not supported |
| ⚪ | `jsonb_build_array` | `jsonb_build_array() → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_build_array__empty-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_build_array__empty-Relation) | Function not supported |
| ⚪ | `jsonb_build_array` | `jsonb_build_array(VARIADIC "any") → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_build_array__variadic__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_build_array__variadic__from_column-Relation) | Function not supported |
| ⚪ | `jsonb_build_object` | `jsonb_build_object() → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_build_object__empty-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_build_object__empty-Relation) | Function not supported |
| ⚪ | `jsonb_build_object` | `jsonb_build_object(VARIADIC "any") → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_build_object__variadic__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_build_object__variadic__from_column-Relation) | Function not supported |
| ⚪ | `jsonb_each` | `jsonb_each(from_json jsonb, OUT key text, OUT value jsonb) → SETOF record` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-jsonb_each__from_column-TDS) | Function not supported |
| ⚪ | `jsonb_each_text` | `jsonb_each_text(from_json jsonb, OUT key text, OUT value text) → SETOF record` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-jsonb_each_text__from_column-TDS) | Function not supported |
| ⚪ | `jsonb_extract_path` | `jsonb_extract_path(from_json jsonb, VARIADIC path_elems text[]) → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_extract_path__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_extract_path__from_column-Relation) | Function not supported |
| ⚪ | `jsonb_extract_path_text` | `jsonb_extract_path_text(from_json jsonb, VARIADIC path_elems text[]) → text` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_extract_path_text__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_extract_path_text__from_column-Relation) | Function not supported |
| ⚪ | `jsonb_insert` | `jsonb_insert(jsonb_in jsonb, path text[], replacement jsonb, insert_after boolean DEFAULT false) → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_insert__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_insert__from_column-Relation) | Function not supported |
| ⚪ | `jsonb_object` | `jsonb_object(text[]) → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_object__text_array-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_object__text_array-Relation) | Function not supported |
| ⚪ | `jsonb_object` | `jsonb_object(text[], text[]) → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_object__keys_values-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_object__keys_values-Relation) | Function not supported |
| ⚪ | `jsonb_object_keys` | `jsonb_object_keys(jsonb) → SETOF text` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_object_keys__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_object_keys__from_column-Relation) | Function not supported |
| ⚪ | `jsonb_path_exists` | `jsonb_path_exists(target jsonb, path jsonpath, vars jsonb DEFAULT '{}'::jsonb, silent boolean DEFAULT false) → boolean` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_path_exists__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_path_exists__from_column-Relation) | Function not supported |
| ⚪ | `jsonb_path_match` | `jsonb_path_match(target jsonb, path jsonpath, vars jsonb DEFAULT '{}'::jsonb, silent boolean DEFAULT false) → boolean` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_path_match__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_path_match__from_column-Relation) | Function not supported |
| ⚪ | `jsonb_path_query` | `jsonb_path_query(target jsonb, path jsonpath, vars jsonb DEFAULT '{}'::jsonb, silent boolean DEFAULT false) → SETOF jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_path_query__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_path_query__from_column-Relation) | Function not supported |
| ⚪ | `jsonb_path_query_array` | `jsonb_path_query_array(target jsonb, path jsonpath, vars jsonb DEFAULT '{}'::jsonb, silent boolean DEFAULT false) → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_path_query_array__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_path_query_array__from_column-Relation) | Function not supported |
| ⚪ | `jsonb_pretty` | `jsonb_pretty(jsonb) → text` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_pretty__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_pretty__from_column-Relation) | Function not supported |
| ⚪ | `jsonb_set` | `jsonb_set(jsonb_in jsonb, path text[], replacement jsonb, create_if_missing boolean DEFAULT true) → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_set__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_set__from_column-Relation) | Function not supported |
| ⚪ | `jsonb_strip_nulls` | `jsonb_strip_nulls(jsonb) → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_strip_nulls__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_strip_nulls__from_column-Relation) | Function not supported |
| ⚪ | `jsonb_typeof` | `jsonb_typeof(jsonb) → text` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_typeof__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_typeof__from_column-Relation) | Function not supported |
| ⚪ | `row_to_json` | `row_to_json(record) → json` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-row_to_json__unsupported_type-TDS) | Function not supported |
| ⚪ | `row_to_json` | `row_to_json(record, boolean) → json` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-row_to_json__bool__unsupported_type-TDS) | Function not supported |
| ⚪ | `to_json` | `to_json(anyelement) → json` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-to_json__from_column-TDS) | Function not supported |
| ⚪ | `to_jsonb` | `to_jsonb(anyelement) → jsonb` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-to_jsonb__from_column-TDS) | Function not supported |
| ⚪ | `jsonb_object_agg` | `jsonb_object_agg(key "any", value "any") → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_object_agg__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_object_agg__from_column-Relation) | Function not supported |
| ⚪ | `json_object_agg` | `json_object_agg(key "any", value "any") → json` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-json_object_agg__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-json_object_agg__from_column-Relation) | Function not supported |

<a id="array-functions-and-operators-(9.19)"></a>

## Array Functions and Operators (9.19)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-array.html)

| | Function | Signature | TDS | Relation | Error Category | Notes |
|--|----------|-----------|-----|----------|----------------|-------|
| ⚪ | `array_append` | `array_append(anycompatiblearray, anycompatible) → anycompatiblearray` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_append__anycompatiblearray_anycompatible__from_table-TDS) | Function not supported |
| ⚪ | `array_cat` | `array_cat(anycompatiblearray, anycompatiblearray) → anycompatiblearray` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_cat__anycompatiblearray_anycompatiblearray__from_table-TDS) | Function not supported |
| ⚪ | `array_dims` | `array_dims(anyarray) → text` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_dims__anyarray__from_table-TDS) | Function not supported |
| ⚪ | `array_fill` | `array_fill(anyelement, integer[]) → anyarray` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_fill__anyelement_int[]__from_table-TDS) | Function not supported |
| ⚪ | `array_fill` | `array_fill(anyelement, integer[], integer[]) → anyarray` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_fill__anyelement_int[]_int[]__from_table-TDS) | Function not supported |
| 🟢 | `array_length` | `array_length(anyarray, integer) → integer` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `array_lower` | `array_lower(anyarray, integer) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_lower__anyarray_int__from_table-TDS) | Function not supported |
| ⚪ | `array_ndims` | `array_ndims(anyarray) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_ndims__anyarray__from_table-TDS) | Function not supported |
| ⚪ | `array_position` | `array_position(anycompatiblearray, anycompatible) → integer` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-array_position__anycompatiblearray_anycompatible__from_table-TDS), [RESULT_MISMATCH](#fail-array_position__anycompatiblearray_anycompatible__from_table-Relation) | Unsupported feature |
| ⚪ | `array_position` | `array_position(anycompatiblearray, anycompatible, integer) → integer` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-array_position__anycompatiblearray_anycompatible_int__with_start-TDS) | Unsupported feature |
| ⚪ | `array_positions` | `array_positions(anycompatiblearray, anycompatible) → integer[]` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_positions__anycompatiblearray_anycompatible__from_table-TDS) | Function not supported |
| ⚪ | `array_prepend` | `array_prepend(anycompatible, anycompatiblearray) → anycompatiblearray` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_prepend__anycompatible_anycompatiblearray__from_table-TDS) | Function not supported |
| ⚪ | `array_remove` | `array_remove(anycompatiblearray, anycompatible) → anycompatiblearray` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_remove__anycompatiblearray_anycompatible__from_table-TDS) | Function not supported |
| ⚪ | `array_replace` | `array_replace(anycompatiblearray, anycompatible, anycompatible) → anycompatiblearray` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_replace__anycompatiblearray_anycompatible_anycompatible__from_table-TDS) | Function not supported |
| ⚪ | `array_sample` | `array_sample(anyarray, integer) → anyarray` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_sample__anyarray_int__from_table-TDS) | Function not supported |
| ⚪ | `array_shuffle` | `array_shuffle(anyarray) → anyarray` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_shuffle__anyarray__from_table-TDS) | Function not supported |
| ⚪ | `array_upper` | `array_upper(anyarray, integer) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_upper__anyarray_int__from_table-TDS) | Function not supported |
| ⚪ | `cardinality` | `cardinality(anyarray) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-cardinality__anyarray__from_table-TDS) | Function not supported |
| ⚪ | `unnest` | `unnest(anyarray) → SETOF anyelement` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-unnest__anyarray__from_table-TDS) | Function not supported |
| ⚪ | `unnest` | `unnest(anymultirange) → SETOF anyrange` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-unnest__anymultirange__unsupported_type-TDS) | Function not supported |
| ⚪ | `unnest` | `unnest(tsvector tsvector, OUT lexeme text, OUT positions smallint[], OUT weights text[]) → SETOF record` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-unnest__tsvectortsvector_OUTlexemetxt_OUTpositionssmall[]_OUTweightstxt[]__unsupported_type-TDS) | Function not supported |

<a id="aggregate-functions-(9.21)"></a>

## Aggregate Functions (9.21)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-aggregate.html)

| | Function | Signature | TDS | Relation | Error Category | Notes |
|--|----------|-----------|-----|----------|----------------|-------|
| ⚪ | `any_value` | `any_value(anyelement) → anyelement` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-any_value__anyelement__from_table-TDS) | Function not supported |
| ⚪ | `array_agg` | `array_agg(anyarray) → anyarray` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_agg__anyarray__no_generator-TDS) | Function not supported |
| ⚪ | `array_agg` | `array_agg(anynonarray) → anyarray` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-array_agg__anynonarray__from_table-TDS) | Function not supported |
| 🟢 | `avg` | `avg(bigint) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `avg` | `avg(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `avg` | `avg(integer) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `avg` | `avg(interval) → interval` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-avg__intv__from_table-TDS) | Unsupported feature |
| 🟢 | `avg` | `avg(numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `avg` | `avg(real) → double precision` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-avg__real__from_table-TDS) |  |
| 🟢 | `avg` | `avg(smallint) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `bit_and` | `bit_and(bigint) → bigint` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-bit_and__big__from_table-TDS) | Function not supported |
| ⚪ | `bit_and` | `bit_and(bit) → bit` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-bit_and__bit__no_generator-TDS) | Function not supported |
| ⚪ | `bit_and` | `bit_and(integer) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-bit_and__int__from_table-TDS) | Function not supported |
| ⚪ | `bit_and` | `bit_and(smallint) → smallint` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-bit_and__small__from_table-TDS) | Function not supported |
| ⚪ | `bit_or` | `bit_or(bigint) → bigint` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-bit_or__big__from_table-TDS) | Function not supported |
| ⚪ | `bit_or` | `bit_or(bit) → bit` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-bit_or__bit__no_generator-TDS) | Function not supported |
| ⚪ | `bit_or` | `bit_or(integer) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-bit_or__int__from_table-TDS) | Function not supported |
| ⚪ | `bit_or` | `bit_or(smallint) → smallint` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-bit_or__small__from_table-TDS) | Function not supported |
| ⚪ | `bit_xor` | `bit_xor(bigint) → bigint` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-bit_xor__big__from_table-TDS) | Function not supported |
| ⚪ | `bit_xor` | `bit_xor(bit) → bit` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-bit_xor__bit__no_generator-TDS) | Function not supported |
| ⚪ | `bit_xor` | `bit_xor(integer) → integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-bit_xor__int__from_table-TDS) | Function not supported |
| ⚪ | `bit_xor` | `bit_xor(smallint) → smallint` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-bit_xor__small__from_table-TDS) | Function not supported |
| 🟢 | `bool_and` | `bool_and(boolean) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `bool_or` | `bool_or(boolean) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `corr` | `corr(double precision, double precision) → double precision` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-corr__dp_dp__from_table-TDS) | Function not supported |
| 🟢 | `count` | `count() → bigint` | PASS (2/2) | PASS (2/2) |  |  |
| 🟢 | `count` | `count("any") → bigint` | PASS (2/2) | PASS (2/2) |  |  |
| ⚪ | `covar_pop` | `covar_pop(double precision, double precision) → double precision` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-covar_pop__dp_dp__from_table-TDS) | Function not supported |
| ⚪ | `covar_samp` | `covar_samp(double precision, double precision) → double precision` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-covar_samp__dp_dp__from_table-TDS) | Function not supported |
| ⚪ | `cume_dist` | `cume_dist(VARIADIC "any" ORDER BY VARIADIC "any") → double precision` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-cume_dist__variadicORDERBYvariadic__no_generator-TDS), [MISC](#fail-cume_dist__variadicORDERBYvariadic__no_generator-Relation) | Unsupported feature |
| ⚪ | `dense_rank` | `dense_rank(VARIADIC "any" ORDER BY VARIADIC "any") → bigint` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-dense_rank__variadicORDERBYvariadic__no_generator-TDS), [MISC](#fail-dense_rank__variadicORDERBYvariadic__no_generator-Relation) | Unsupported feature |
| 🟢 | `every` | `every(boolean) → boolean` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `json_agg` | `json_agg(anyelement) → json` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-json_agg__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-json_agg__from_column-Relation) | Function not supported |
| ⚪ | `json_agg_strict` | `json_agg_strict(anyelement) → json` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-json_agg_strict__anyelement__from_table-TDS) | Function not supported |
| ⚪ | `json_object_agg` | `json_object_agg("any", "any") → json` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-json_object_agg__any_any__from_table-TDS) | Function not supported |
| ⚪ | `json_object_agg_strict` | `json_object_agg_strict("any", "any") → json` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-json_object_agg_strict__any_any__from_table-TDS) | Function not supported |
| ⚪ | `json_object_agg_unique` | `json_object_agg_unique("any", "any") → json` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-json_object_agg_unique__any_any__from_table-TDS) | Function not supported |
| ⚪ | `json_object_agg_unique_strict` | `json_object_agg_unique_strict("any", "any") → json` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-json_object_agg_unique_strict__any_any__from_table-TDS) | Function not supported |
| ⚪ | `jsonb_agg` | `jsonb_agg(anyelement) → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_agg__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_agg__from_column-Relation) | Function not supported |
| ⚪ | `jsonb_agg_strict` | `jsonb_agg_strict(anyelement) → jsonb` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-jsonb_agg_strict__anyelement__from_table-TDS) | Function not supported |
| ⚪ | `jsonb_object_agg` | `jsonb_object_agg("any", "any") → jsonb` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-jsonb_object_agg__any_any__from_table-TDS) | Function not supported |
| ⚪ | `jsonb_object_agg_strict` | `jsonb_object_agg_strict("any", "any") → jsonb` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-jsonb_object_agg_strict__any_any__from_table-TDS) | Function not supported |
| ⚪ | `jsonb_object_agg_unique` | `jsonb_object_agg_unique("any", "any") → jsonb` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-jsonb_object_agg_unique__any_any__from_table-TDS) | Function not supported |
| ⚪ | `jsonb_object_agg_unique_strict` | `jsonb_object_agg_unique_strict("any", "any") → jsonb` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-jsonb_object_agg_unique_strict__any_any__from_table-TDS) | Function not supported |
| ⚪ | `max` | `max(anyarray) → anyarray` | UNSUPPORTED | UNSUPPORTED | [RESULT_MISMATCH](#fail-max__anyarray__no_generator-TDS), [UNSUPPORTED_SYNTAX](#fail-max_anyarray_cov-TDS) | Unsupported feature |
| ⚪ | `max` | `max(anyenum) → anyenum` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-max__anyenum__no_generator-TDS), [UNSUPPORTED_SYNTAX](#fail-max_anyenum_cov-TDS) | Unsupported feature |
| 🟢 | `max` | `max(bigint) → bigint` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `max` | `max(character) → character` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-max__char__no_generator-TDS) | Unsupported feature |
| 🟢 | `max` | `max(date) → date` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `max` | `max(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `max` | `max(inet) → inet` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-max__inet__no_generator-TDS), [UNSUPPORTED_SYNTAX](#fail-max_inet_cov-TDS) | Unsupported feature |
| 🟢 | `max` | `max(integer) → integer` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `max` | `max(interval) → interval` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-max__intv__from_table-TDS) | Unsupported feature |
| ⚪ | `max` | `max(money) → money` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-max__money__no_generator-TDS), [UNSUPPORTED_SYNTAX](#fail-max_money_cov-TDS) | Unsupported feature |
| 🟢 | `max` | `max(numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `max` | `max(oid) → oid` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-max__oid__no_generator-TDS), [UNSUPPORTED_SYNTAX](#fail-max_oid_cov-TDS) | Unsupported feature |
| ⚪ | `max` | `max(pg_lsn) → pg_lsn` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-max__pg_lsn__no_generator-TDS), [UNSUPPORTED_SYNTAX](#fail-max_pg_lsn_cov-TDS) | Unsupported feature |
| ⚪ | `max` | `max(real) → real` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-max__real__from_table-TDS) |  |
| 🟢 | `max` | `max(smallint) → smallint` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `max` | `max(text) → text` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `max` | `max(tid) → tid` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-max__tid__no_generator-TDS), [UNSUPPORTED_SYNTAX](#fail-max_tid_cov-TDS) | Unsupported feature |
| 🟡 | `max` | `max(time with time zone) → time with time zone` | PARTIAL (1/2) | PARTIAL (1/2) | [TYPE_ERROR](#fail-max__timetz__no_generator-TDS) |  |
| 🟡 | `max` | `max(time without time zone) → time without time zone` | PARTIAL (1/2) | PARTIAL (1/2) | [TYPE_ERROR](#fail-max__time__no_generator-TDS) |  |
| ⚪ | `max` | `max(timestamp with time zone) → timestamp with time zone` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-max__tstz__from_table-TDS) |  |
| 🟢 | `max` | `max(timestamp without time zone) → timestamp without time zone` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `max` | `max(xid8) → xid8` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-max__xid8__no_generator-TDS), [UNSUPPORTED_SYNTAX](#fail-max_xid8_cov-TDS) | Unsupported feature |
| ⚪ | `min` | `min(anyarray) → anyarray` | UNSUPPORTED | UNSUPPORTED | [RESULT_MISMATCH](#fail-min__anyarray__no_generator-TDS), [UNSUPPORTED_SYNTAX](#fail-min_anyarray_cov-TDS) | Unsupported feature |
| ⚪ | `min` | `min(anyenum) → anyenum` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-min__anyenum__no_generator-TDS), [UNSUPPORTED_SYNTAX](#fail-min_anyenum_cov-TDS) | Unsupported feature |
| 🟢 | `min` | `min(bigint) → bigint` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `min` | `min(character) → character` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-min__char__no_generator-TDS) | Unsupported feature |
| 🟢 | `min` | `min(date) → date` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `min` | `min(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `min` | `min(inet) → inet` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-min__inet__no_generator-TDS), [UNSUPPORTED_SYNTAX](#fail-min_inet_cov-TDS) | Unsupported feature |
| 🟢 | `min` | `min(integer) → integer` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `min` | `min(interval) → interval` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-min__intv__from_table-TDS) | Unsupported feature |
| ⚪ | `min` | `min(money) → money` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-min__money__no_generator-TDS), [UNSUPPORTED_SYNTAX](#fail-min_money_cov-TDS) | Unsupported feature |
| 🟢 | `min` | `min(numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `min` | `min(oid) → oid` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-min__oid__no_generator-TDS), [UNSUPPORTED_SYNTAX](#fail-min_oid_cov-TDS) | Unsupported feature |
| ⚪ | `min` | `min(pg_lsn) → pg_lsn` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-min__pg_lsn__no_generator-TDS), [UNSUPPORTED_SYNTAX](#fail-min_pg_lsn_cov-TDS) | Unsupported feature |
| ⚪ | `min` | `min(real) → real` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-min__real__from_table-TDS) |  |
| 🟢 | `min` | `min(smallint) → smallint` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `min` | `min(text) → text` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `min` | `min(tid) → tid` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-min__tid__no_generator-TDS), [UNSUPPORTED_SYNTAX](#fail-min_tid_cov-TDS) | Unsupported feature |
| 🟡 | `min` | `min(time with time zone) → time with time zone` | PARTIAL (1/2) | PARTIAL (1/2) | [TYPE_ERROR](#fail-min__timetz__no_generator-TDS) |  |
| 🟡 | `min` | `min(time without time zone) → time without time zone` | PARTIAL (1/2) | PARTIAL (1/2) | [TYPE_ERROR](#fail-min__time__no_generator-TDS) |  |
| ⚪ | `min` | `min(timestamp with time zone) → timestamp with time zone` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-min__tstz__from_table-TDS) |  |
| 🟢 | `min` | `min(timestamp without time zone) → timestamp without time zone` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `min` | `min(xid8) → xid8` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-min__xid8__no_generator-TDS), [UNSUPPORTED_SYNTAX](#fail-min_xid8_cov-TDS) | Unsupported feature |
| ⚪ | `mode` | `mode(ORDER BY anyelement) → anyelement` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-mode__ORDERBYanyelement__from_table-TDS) | Function not supported |
| ⚪ | `percent_rank` | `percent_rank(VARIADIC "any" ORDER BY VARIADIC "any") → double precision` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-percent_rank__variadicORDERBYvariadic__no_generator-TDS), [MISC](#fail-percent_rank__variadicORDERBYvariadic__no_generator-Relation) | Unsupported feature |
| 🟢 | `percentile_cont` | `percentile_cont(double precision ORDER BY double precision) → double precision` | PASS (2/2) | PASS (2/2) |  |  |
| ⚪ | `percentile_cont` | `percentile_cont(double precision ORDER BY interval) → interval` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-percentile_cont__dpORDERBYintv__no_generator-TDS) | Unsupported feature |
| 🟡 | `percentile_cont` | `percentile_cont(double precision[] ORDER BY double precision) → double precision[]` | PARTIAL (1/2) | PARTIAL (1/2) | [MISC](#fail-percentile_cont__dp[]ORDERBYdp__no_generator-TDS) |  |
| ⚪ | `percentile_cont` | `percentile_cont(double precision[] ORDER BY interval) → interval[]` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-percentile_cont__dp[]ORDERBYintv__no_generator-TDS) | Unsupported feature |
| 🟡 | `percentile_disc` | `percentile_disc(double precision ORDER BY anyelement) → anyelement` | PARTIAL (1/2) | PARTIAL (1/2) | [MISC](#fail-percentile_disc_double_precision_ORDER_BY_anye_cov-TDS) |  |
| ⚪ | `percentile_disc` | `percentile_disc(double precision[] ORDER BY anyelement) → anyarray` | UNTESTED | UNTESTED | [MISC](#fail-percentile_disc__dp[]ORDERBYanyelement__no_generator-TDS) |  |
| ⚪ | `range_agg` | `range_agg(anymultirange) → anymultirange` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_agg__anymultirange__no_generator-TDS) | Function not supported |
| ⚪ | `range_agg` | `range_agg(anyrange) → anymultirange` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_agg__anyrange__no_generator-TDS) | Function not supported |
| ⚪ | `range_intersect_agg` | `range_intersect_agg(anymultirange) → anymultirange` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_intersect_agg__anymultirange__no_generator-TDS) | Function not supported |
| ⚪ | `range_intersect_agg` | `range_intersect_agg(anyrange) → anyrange` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-range_intersect_agg__anyrange__no_generator-TDS) | Function not supported |
| ⚪ | `rank` | `rank(VARIADIC "any" ORDER BY VARIADIC "any") → bigint` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-rank__variadicORDERBYvariadic__no_generator-TDS), [MISC](#fail-rank__variadicORDERBYvariadic__no_generator-Relation) | Unsupported feature |
| ⚪ | `regr_avgx` | `regr_avgx(double precision, double precision) → double precision` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-regr_avgx__dp_dp__from_table-TDS) | Function not supported |
| ⚪ | `regr_avgy` | `regr_avgy(double precision, double precision) → double precision` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-regr_avgy__dp_dp__from_table-TDS) | Function not supported |
| ⚪ | `regr_count` | `regr_count(double precision, double precision) → bigint` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-regr_count__dp_dp__from_table-TDS) | Function not supported |
| ⚪ | `regr_intercept` | `regr_intercept(double precision, double precision) → double precision` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-regr_intercept__dp_dp__from_table-TDS) | Function not supported |
| ⚪ | `regr_r2` | `regr_r2(double precision, double precision) → double precision` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-regr_r2__dp_dp__from_table-TDS) | Function not supported |
| ⚪ | `regr_slope` | `regr_slope(double precision, double precision) → double precision` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-regr_slope__dp_dp__from_table-TDS) | Function not supported |
| ⚪ | `regr_sxx` | `regr_sxx(double precision, double precision) → double precision` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-regr_sxx__dp_dp__from_table-TDS) | Function not supported |
| ⚪ | `regr_sxy` | `regr_sxy(double precision, double precision) → double precision` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-regr_sxy__dp_dp__from_table-TDS) | Function not supported |
| ⚪ | `regr_syy` | `regr_syy(double precision, double precision) → double precision` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-regr_syy__dp_dp__from_table-TDS) | Function not supported |
| 🟢 | `stddev` | `stddev(bigint) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `stddev` | `stddev(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `stddev` | `stddev(integer) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `stddev` | `stddev(numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `stddev` | `stddev(real) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `stddev` | `stddev(smallint) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `stddev_pop` | `stddev_pop(bigint) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `stddev_pop` | `stddev_pop(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `stddev_pop` | `stddev_pop(integer) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `stddev_pop` | `stddev_pop(numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `stddev_pop` | `stddev_pop(real) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `stddev_pop` | `stddev_pop(smallint) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `stddev_samp` | `stddev_samp(bigint) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `stddev_samp` | `stddev_samp(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `stddev_samp` | `stddev_samp(integer) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `stddev_samp` | `stddev_samp(numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `stddev_samp` | `stddev_samp(real) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `stddev_samp` | `stddev_samp(smallint) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `string_agg` | `string_agg(bytea, bytea) → bytea` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-string_agg__bytea_bytea__no_generator-TDS), [MISC](#fail-string_agg_bytea_bytea_cov-TDS) |  |
| ⚪ | `string_agg` | `string_agg(text, text) → text` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-string_agg__txt_txt__from_table-TDS) | Unsupported feature |
| ⚪ | `sum` | `sum(bigint) → numeric` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-sum__big__group_by_filtered-TDS) | Unsupported feature |
| 🟢 | `sum` | `sum(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `sum` | `sum(integer) → bigint` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `sum` | `sum(interval) → interval` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-sum__intv__from_table-TDS) | Unsupported feature |
| ⚪ | `sum` | `sum(money) → money` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-sum__money__no_generator-TDS), [MISC](#fail-sum_money_cov-TDS) |  |
| 🟢 | `sum` | `sum(numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `sum` | `sum(real) → real` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-sum__real__from_table-TDS) |  |
| 🟢 | `sum` | `sum(smallint) → bigint` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `var_pop` | `var_pop(bigint) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `var_pop` | `var_pop(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `var_pop` | `var_pop(integer) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `var_pop` | `var_pop(numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `var_pop` | `var_pop(real) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `var_pop` | `var_pop(smallint) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `var_samp` | `var_samp(bigint) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `var_samp` | `var_samp(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `var_samp` | `var_samp(integer) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `var_samp` | `var_samp(numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `var_samp` | `var_samp(real) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `var_samp` | `var_samp(smallint) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `variance` | `variance(bigint) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `variance` | `variance(double precision) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `variance` | `variance(integer) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `variance` | `variance(numeric) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `variance` | `variance(real) → double precision` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `variance` | `variance(smallint) → numeric` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `xmlagg` | `xmlagg(xml) → xml` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-xmlagg__xml__no_generator-TDS) | Function not supported |

<a id="window-functions-(9.22)"></a>

## Window Functions (9.22)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-window.html)

| | Function | Signature | TDS | Relation | Error Category | Notes |
|--|----------|-----------|-----|----------|----------------|-------|
| ⚪ | `cume_dist` | `cume_dist() → double precision` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-cume_dist__from_table-TDS) | Unsupported feature |
| 🟢 | `dense_rank` | `dense_rank() → bigint` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `first_value` | `first_value(anyelement) → anyelement` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-first_value__anyelement__from_table-TDS) | Unsupported feature |
| ⚪ | `lag` | `lag(anycompatible, integer, anycompatible) → anycompatible` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-lag__anycompatible_int_anycompatible__from_table-TDS) | Unsupported feature |
| ⚪ | `lag` | `lag(anyelement) → anyelement` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-lag__anyelement__from_table-TDS) | Unsupported feature |
| ⚪ | `lag` | `lag(anyelement, integer) → anyelement` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-lag__anyelement_int__from_table-TDS) | Unsupported feature |
| ⚪ | `last_value` | `last_value(anyelement) → anyelement` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-last_value__anyelement__from_table-TDS), [MISC](#fail-last_value__anyelement__from_table-Relation) | Unsupported feature |
| ⚪ | `lead` | `lead(anycompatible, integer, anycompatible) → anycompatible` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-lead__anycompatible_int_anycompatible__from_table-TDS) | Unsupported feature |
| ⚪ | `lead` | `lead(anyelement) → anyelement` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-lead__anyelement__from_table-TDS) | Unsupported feature |
| ⚪ | `lead` | `lead(anyelement, integer) → anyelement` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-lead__anyelement_int__from_table-TDS) | Unsupported feature |
| ⚪ | `nth_value` | `nth_value(anyelement, integer) → anyelement` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-nth_value__anyelement_int__from_table-TDS) | Unsupported feature |
| ⚪ | `ntile` | `ntile(integer) → integer` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-ntile__int__from_table-TDS) | Unsupported feature |
| ⚪ | `percent_rank` | `percent_rank() → double precision` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-percent_rank__from_table-TDS) | Unsupported feature |
| 🟢 | `rank` | `rank() → bigint` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `row_number` | `row_number() → bigint` | PASS (1/1) | PASS (1/1) |  |  |

<a id="network-address-functions-(9.12)"></a>

## Network Address Functions (9.12)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-net.html)

| | Function | Signature | TDS | Relation | Error Category | Notes |
|--|----------|-----------|-----|----------|----------------|-------|
| ⚪ | `abbrev` | `abbrev(cidr) → text` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `abbrev` | `abbrev(inet) → text` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `broadcast` | `broadcast(inet) → inet` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `family` | `family(inet) → integer` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `host` | `host(inet) → text` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `hostmask` | `hostmask(inet) → inet` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `inet_client_addr` | `inet_client_addr() → inet` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `inet_client_port` | `inet_client_port() → integer` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `inet_server_addr` | `inet_server_addr() → inet` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `inet_server_port` | `inet_server_port() → integer` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `masklen` | `masklen(inet) → integer` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `netmask` | `netmask(inet) → inet` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `network` | `network(inet) → cidr` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `set_masklen` | `set_masklen(cidr, integer) → cidr` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `set_masklen` | `set_masklen(inet, integer) → inet` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `text` | `text("char") → text` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `text` | `text(boolean) → text` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `text` | `text(character) → text` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `text` | `text(inet) → text` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `text` | `text(name) → text` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `text` | `text(xml) → text` | UNSUPPORTED | UNSUPPORTED |  |  |

<a id="system-information-functions-(9.26)"></a>

## System Information Functions (9.26)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-info.html)

| | Function | Signature | TDS | Relation | Error Category | Notes |
|--|----------|-----------|-----|----------|----------------|-------|
| ⚪ | `col_description` | `col_description(oid, integer) → text` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `current_database` | `current_database() → name` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `current_query` | `current_query() → text` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `current_schema` | `current_schema() → name` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `current_schemas` | `current_schemas(boolean) → name[]` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `current_user` | `current_user() → name` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_column_privilege` | `has_column_privilege(name, oid, smallint, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_column_privilege` | `has_column_privilege(name, oid, text, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_column_privilege` | `has_column_privilege(name, text, smallint, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_column_privilege` | `has_column_privilege(name, text, text, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_column_privilege` | `has_column_privilege(oid, oid, smallint, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_column_privilege` | `has_column_privilege(oid, oid, text, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_column_privilege` | `has_column_privilege(oid, smallint, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_column_privilege` | `has_column_privilege(oid, text, smallint, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_column_privilege` | `has_column_privilege(oid, text, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_column_privilege` | `has_column_privilege(oid, text, text, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_column_privilege` | `has_column_privilege(text, smallint, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_column_privilege` | `has_column_privilege(text, text, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_database_privilege` | `has_database_privilege(name, oid, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_database_privilege` | `has_database_privilege(name, text, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_database_privilege` | `has_database_privilege(oid, oid, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_database_privilege` | `has_database_privilege(oid, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_database_privilege` | `has_database_privilege(oid, text, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_database_privilege` | `has_database_privilege(text, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_schema_privilege` | `has_schema_privilege(name, oid, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_schema_privilege` | `has_schema_privilege(name, text, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_schema_privilege` | `has_schema_privilege(oid, oid, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_schema_privilege` | `has_schema_privilege(oid, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_schema_privilege` | `has_schema_privilege(oid, text, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_schema_privilege` | `has_schema_privilege(text, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_table_privilege` | `has_table_privilege(name, oid, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_table_privilege` | `has_table_privilege(name, text, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_table_privilege` | `has_table_privilege(oid, oid, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_table_privilege` | `has_table_privilege(oid, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_table_privilege` | `has_table_privilege(oid, text, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `has_table_privilege` | `has_table_privilege(text, text) → boolean` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `obj_description` | `obj_description(oid) → text` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `obj_description` | `obj_description(oid, name) → text` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `session_user` | `session_user() → name` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `shobj_description` | `shobj_description(oid, name) → text` | UNSUPPORTED | UNSUPPORTED |  |  |
| ⚪ | `version` | `version() → text` | UNSUPPORTED | UNSUPPORTED |  |  |

<a id="sequence-manipulation-functions-(9.17)"></a>

## Sequence Manipulation Functions (9.17)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-sequence.html)

| | Function | Signature | TDS | Relation | Error Category | Notes |
|--|----------|-----------|-----|----------|----------------|-------|
| ⚪ | `currval` | `currval(regclass) → bigint` | UNTESTED | UNTESTED | [MISC](#fail-currval__regclass__basic-TDS) |  |
| ⚪ | `lastval` | `lastval() → bigint` | UNTESTED | UNTESTED | [MISC](#fail-lastval__basic-TDS) |  |
| ⚪ | `nextval` | `nextval(regclass) → bigint` | UNTESTED | UNTESTED | [MISC](#fail-nextval__regclass__basic-TDS) |  |
| ⚪ | `setval` | `setval(regclass, bigint) → bigint` | UNTESTED | UNTESTED | [MISC](#fail-setval__regclass_big__basic-TDS) |  |
| ⚪ | `setval` | `setval(regclass, bigint, boolean) → bigint` | UNTESTED | UNTESTED | [MISC](#fail-setval__regclass_big_bool__basic-TDS) |  |

<a id="set-returning-functions-(9.25)"></a>

## Set Returning Functions (9.25)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/functions-srf.html)

| | Function | Signature | TDS | Relation | Error Category | Notes |
|--|----------|-----------|-----|----------|----------------|-------|
| ⚪ | `generate_series` | `generate_series(bigint, bigint) → SETOF bigint` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-generate_series__big_big__from_table-TDS) | Function not supported |
| ⚪ | `generate_series` | `generate_series(bigint, bigint, bigint) → SETOF bigint` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-generate_series__big_big_big__from_table-TDS) | Function not supported |
| ⚪ | `generate_series` | `generate_series(integer, integer) → SETOF integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-generate_series__int_int__from_table-TDS) | Function not supported |
| ⚪ | `generate_series` | `generate_series(integer, integer, integer) → SETOF integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-generate_series__int_int_int__from_table-TDS) | Function not supported |
| ⚪ | `generate_series` | `generate_series(numeric, numeric) → SETOF numeric` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-generate_series__num_num__from_table-TDS) | Function not supported |
| ⚪ | `generate_series` | `generate_series(numeric, numeric, numeric) → SETOF numeric` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-generate_series__num_num_num__from_table-TDS) | Function not supported |
| ⚪ | `generate_series` | `generate_series(timestamp with time zone, timestamp with time zone, interval) → SETOF timestamp with time zone` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-generate_series__tstz_tstz_intv__from_table-TDS) | Function not supported |
| ⚪ | `generate_series` | `generate_series(timestamp with time zone, timestamp with time zone, interval, text) → SETOF timestamp with time zone` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-generate_series__tstz_tstz_intv_txt__from_table-TDS) | Function not supported |
| ⚪ | `generate_series` | `generate_series(timestamp without time zone, timestamp without time zone, interval) → SETOF timestamp without time zone` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-generate_series__ts_ts_intv__from_table-TDS) | Function not supported |
| ⚪ | `generate_subscripts` | `generate_subscripts(anyarray, integer) → SETOF integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-generate_subscripts__anyarray_int__from_table-TDS) | Function not supported |
| ⚪ | `generate_subscripts` | `generate_subscripts(anyarray, integer, boolean) → SETOF integer` | UNSUPPORTED | UNSUPPORTED | [FUNCTION_NOT_SUPPORTED](#fail-generate_subscripts__anyarray_int_bool__from_table-TDS) | Function not supported |

<a id="cryptographic-functions-(pgcrypto)"></a>

## Cryptographic Functions (pgcrypto)

Reference: [PostgreSQL 16 docs](https://www.postgresql.org/docs/16/pgcrypto.html)

| | Function | Signature | TDS | Relation | Error Category | Notes |
|--|----------|-----------|-----|----------|----------------|-------|
| ⚪ | `armor` | `armor(bytea) → text` | UNTESTED | UNTESTED |  |  |
| ⚪ | `armor` | `armor(bytea, text[], text[]) → text` | UNTESTED | UNTESTED |  |  |
| ⚪ | `crypt` | `crypt(text, text) → text` | UNTESTED | UNTESTED |  |  |
| ⚪ | `dearmor` | `dearmor(text) → bytea` | UNTESTED | UNTESTED |  |  |
| ⚪ | `digest` | `digest(bytea, text) → bytea` | UNTESTED | UNTESTED |  |  |
| ⚪ | `digest` | `digest(text, text) → bytea` | UNTESTED | UNTESTED | [MISC](#fail-digest_sha1__bytea-TDS) |  |
| ⚪ | `gen_random_bytes` | `gen_random_bytes(integer) → bytea` | UNTESTED | UNTESTED |  |  |
| ⚪ | `gen_random_uuid` | `gen_random_uuid() → uuid` | UNTESTED | UNTESTED |  |  |
| ⚪ | `gen_random_uuid` | `gen_random_uuid() → uuid` | UNTESTED | UNTESTED |  |  |
| ⚪ | `gen_salt` | `gen_salt(text) → text` | UNTESTED | UNTESTED |  |  |
| ⚪ | `gen_salt` | `gen_salt(text, integer) → text` | UNTESTED | UNTESTED |  |  |
| ⚪ | `hmac` | `hmac(bytea, bytea, text) → bytea` | UNTESTED | UNTESTED |  |  |
| ⚪ | `hmac` | `hmac(text, text, text) → bytea` | UNTESTED | UNTESTED |  |  |
| ⚪ | `pgp_pub_decrypt` | `pgp_pub_decrypt(bytea, bytea) → text` | UNTESTED | UNTESTED |  |  |
| ⚪ | `pgp_pub_decrypt` | `pgp_pub_decrypt(bytea, bytea, text) → text` | UNTESTED | UNTESTED |  |  |
| ⚪ | `pgp_pub_decrypt` | `pgp_pub_decrypt(bytea, bytea, text, text) → text` | UNTESTED | UNTESTED |  |  |
| ⚪ | `pgp_pub_encrypt` | `pgp_pub_encrypt(text, bytea) → bytea` | UNTESTED | UNTESTED |  |  |
| ⚪ | `pgp_pub_encrypt` | `pgp_pub_encrypt(text, bytea, text) → bytea` | UNTESTED | UNTESTED |  |  |
| ⚪ | `pgp_sym_decrypt` | `pgp_sym_decrypt(bytea, text) → text` | UNTESTED | UNTESTED |  |  |
| ⚪ | `pgp_sym_decrypt` | `pgp_sym_decrypt(bytea, text, text) → text` | UNTESTED | UNTESTED |  |  |
| ⚪ | `pgp_sym_encrypt` | `pgp_sym_encrypt(text, text) → bytea` | UNTESTED | UNTESTED |  |  |
| ⚪ | `pgp_sym_encrypt` | `pgp_sym_encrypt(text, text, text) → bytea` | UNTESTED | UNTESTED |  |  |

<a id="other-functions"></a>

## Other Functions

| | Function | Signature | TDS | Relation | Error Category | Notes |
|--|----------|-----------|-----|----------|----------------|-------|
| 🟢 | `TIMESTAMP 'YYYY-MM-DDTHH:MI:SS'` | `TIMESTAMP 'YYYY-MM-DDTHH:MI:SS'` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `'string'::timestamptz` | `'string'::timestamptz` | UNTESTED | UNTESTED | [TYPE_ERROR](#fail-date_literal__cast_string_to_timestamptz-TDS) |  |
| 🟢 | `DATE 'YYYY-M-D'` | `DATE 'YYYY-M-D'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `CAST` | `CAST('string' AS date)` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `DATE 'YYYY-MM-DD'` | `DATE 'YYYY-MM-DD'` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `TIMESTAMP 'infinity'` | `TIMESTAMP 'infinity'` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-date_literal__infinity-TDS) | Unsupported feature |
| 🟢 | `DATE 'Mon DD, YYYY'` | `DATE 'Mon DD, YYYY'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `DATE 'far future'` | `DATE 'far future'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `TIMESTAMP 'SS.S'` | `TIMESTAMP 'SS.S'` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `TIMESTAMPTZ 'dateTtime+tz'` | `TIMESTAMPTZ 'dateTtime+tz'` | UNTESTED | UNTESTED | [MISC](#fail-date_literal__datetime_t_with_tz-TDS) |  |
| ⚪ | `DATE 'M/D/YYYY' ` | `DATE 'M/D/YYYY' (MDY)` | UNTESTED | UNTESTED | [MISC](#fail-date_literal__mdy_us_style-TDS) |  |
| 🟢 | `DATE 'Jnnnnnnn'` | `DATE 'Jnnnnnnn'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `TIMESTAMP 'h:MI:SS PM'` | `TIMESTAMP 'h:MI:SS PM'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `TIMESTAMP 'YYYYMMDD HH:MI:SS.S'` | `TIMESTAMP 'YYYYMMDD HH:MI:SS.S'` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `TIMESTAMPTZ 'SS.MS+TZ'` | `TIMESTAMPTZ 'SS.MS+TZ'` | UNTESTED | UNTESTED | [MISC](#fail-date_literal__tz_with_subseconds-TDS) |  |
| 🟢 | `DATE 'YYMMDD'` | `DATE 'YYMMDD'` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `DATE 'Month DD, YY BC'` | `DATE 'Month DD, YY BC'` | UNTESTED | UNTESTED | [MISC](#fail-date_literal__bc_date-TDS) |  |
| 🟢 | `TIMESTAMP '00:00:00'` | `TIMESTAMP '00:00:00'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `TIMESTAMP '23:59:59'` | `TIMESTAMP '23:59:59'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `TIMESTAMP 'SS.SS'` | `TIMESTAMP 'SS.SS'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `DATE 'Mon-DD-YYYY'` | `DATE 'Mon-DD-YYYY'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `TIMESTAMP 'Y2K'` | `TIMESTAMP 'Y2K'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `TIMESTAMP 'YYYY-MM-DD HH:MI:SS'` | `TIMESTAMP 'YYYY-MM-DD HH:MI:SS'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `DATE 'Month DD, YYYY'` | `DATE 'Month DD, YYYY'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `DATE 'YYYYMMDD'` | `DATE 'YYYYMMDD'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `CAST` | `CAST('string' AS timestamp)` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `DATE 'leap year'` | `DATE 'leap year'` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `TIMESTAMPTZ '+00:00'` | `TIMESTAMPTZ '+00:00'` | UNTESTED | UNTESTED | [MISC](#fail-date_literal__tz_utc-TDS) |  |
| ⚪ | `TIMESTAMPTZ '-HH:MM'` | `TIMESTAMPTZ '-HH:MM'` | UNTESTED | UNTESTED | [MISC](#fail-date_literal__tz_negative_offset-TDS) |  |
| 🟢 | `TIMESTAMP 'epoch'` | `TIMESTAMP 'epoch'` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `jsonb_path_query_first` | `jsonb_path_query_first(target jsonb, path jsonpath, vars jsonb DEFAULT '{}'::jsonb, silent boolean DEFAULT false) → jsonb` | UNSUPPORTED | UNSUPPORTED | [TYPE_ERROR](#fail-jsonb_path_query_first__from_column-TDS), [FUNCTION_NOT_SUPPORTED](#fail-jsonb_path_query_first__from_column-Relation) | Function not supported |
| ⚪ | `DATE 'YY-MM-DD'` | `DATE 'YY-MM-DD'` | UNTESTED | UNTESTED | [MISC](#fail-date_literal__two_digit_year-TDS) |  |
| 🟢 | `TIMESTAMP 'Month DD, YYYY HH:MI:SS'` | `TIMESTAMP 'Month DD, YYYY HH:MI:SS'` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `DATE 'M-D-YYYY'` | `DATE 'M-D-YYYY'` | UNTESTED | UNTESTED | [MISC](#fail-date_literal__mdy_dashes-TDS) |  |
| 🟢 | `DATE 'Dy Mon DD YYYY'` | `DATE 'Dy Mon DD YYYY'` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `TIMESTAMPTZ '+HH'` | `TIMESTAMPTZ '+HH'` | UNTESTED | UNTESTED | [MISC](#fail-date_literal__tz_positive_offset-TDS) |  |
| ⚪ | `TIMESTAMP 'M/D/YYYY HH:MI:SS'` | `TIMESTAMP 'M/D/YYYY HH:MI:SS'` | UNTESTED | UNTESTED | [MISC](#fail-date_literal__mdy_timestamp-TDS) |  |
| ⚪ | `count` | `count(*) → bigint` | UNSUPPORTED | UNSUPPORTED | [UNSUPPORTED_SYNTAX](#fail-count__any__group_by_filtered-TDS) | Unsupported feature |
| 🟢 | `TIMESTAMP 'HH:MI'` | `TIMESTAMP 'HH:MI'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `TIMESTAMP 'YYYY-MM-DD HH:MI:SS.MS'` | `TIMESTAMP 'YYYY-MM-DD HH:MI:SS.MS'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `DATE 'early date'` | `DATE 'early date'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `TIMESTAMP 'SS.SSSSSS'` | `TIMESTAMP 'SS.SSSSSS'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `DATE 'DD-Mon-YYYY'` | `DATE 'DD-Mon-YYYY'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `TIMESTAMP 'SS.SSSSSSSSS'` | `TIMESTAMP 'SS.SSSSSSSSS'` | PASS (1/1) | PASS (1/1) |  |  |
| ⚪ | `DATE 'D.M.YYYY' ` | `DATE 'D.M.YYYY' (DMY)` | UNTESTED | UNTESTED | [MISC](#fail-date_literal__dmy_dots-TDS) |  |
| ⚪ | `TIMESTAMPTZ 'PST'` | `TIMESTAMPTZ 'PST'` | UNTESTED | UNTESTED | [MISC](#fail-date_literal__tz_abbrev_stripped-TDS) |  |
| 🟢 | `DATE 'DD Month YYYY'` | `DATE 'DD Month YYYY'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `DATE 'year boundary'` | `DATE 'year boundary'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `'string'::date` | `'string'::date` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `'string'::timestamp` | `'string'::timestamp` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `DATE 'Month DD, YYYY AD'` | `DATE 'Month DD, YYYY AD'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `TIMESTAMP '24:00:00'` | `TIMESTAMP '24:00:00'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `TIMESTAMP 'unix epoch'` | `TIMESTAMP 'unix epoch'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `DATE 'YYYY/M/D'` | `DATE 'YYYY/M/D'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `DATE 'YYYY.DDD'` | `DATE 'YYYY.DDD'` | PASS (1/1) | PASS (1/1) |  |  |
| 🟢 | `DATE 'YYYY-Mon-DD'` | `DATE 'YYYY-Mon-DD'` | PASS (1/1) | PASS (1/1) |  |  |

---

## Functions Not Implemented (289)

These Postgres functions are recognized in the catalog but Legend SQL does not implement them.
They fail with "No function matches the given name", "No SQL translation exists", or "Unsupported" errors.

### Mathematical Functions and Operators (9.3) (14)

| Function |
|----------|
| `acosh` |
| `asinh` |
| `atanh` |
| `factorial` |
| `gcd` |
| `lcm` |
| `log` |
| `min_scale` |
| `random` |
| `scale` |
| `setseed` |
| `trim_scale` |
| `trunc` |
| `width_bucket` |

### String Functions and Operators (9.4) (31)

| Function |
|----------|
| `array_to_string` |
| `bit_length` |
| `btrim` |
| `char_length` |
| `character_length` |
| `encode` |
| `format` |
| `is_normalized` |
| `length` |
| `lower` |
| `ltrim` |
| `md5` |
| `normalize` |
| `octet_length` |
| `overlay` |
| `position` |
| `quote_ident` |
| `quote_literal` |
| `quote_nullable` |
| `regexp_match` |
| `regexp_matches` |
| `regexp_split_to_array` |
| `regexp_split_to_table` |
| `rtrim` |
| `string_to_array` |
| `substr` |
| `substring` |
| `to_hex` |
| `translate` |
| `unistr` |
| `upper` |

### Binary String Functions (9.5) (8)

| Function |
|----------|
| `convert` |
| `convert_from` |
| `convert_to` |
| `get_byte` |
| `set_byte` |
| `sha224` |
| `sha384` |
| `sha512` |

### Pattern Matching (9.7) (1)

| Function |
|----------|
| `regexp_instr` |

### Data Type Formatting (9.8) (3)

| Function |
|----------|
| `to_char` |
| `to_date` |
| `to_number` |

### Date/Time Functions and Operators (9.9) (13)

| Function |
|----------|
| `age` |
| `clock_timestamp` |
| `isfinite` |
| `justify_days` |
| `justify_hours` |
| `justify_interval` |
| `make_time` |
| `make_timestamptz` |
| `now` |
| `statement_timestamp` |
| `timeofday` |
| `to_timestamp` |
| `transaction_timestamp` |

### Conditional Expressions (9.18) (3)

| Function |
|----------|
| `num_nonnulls` |
| `num_nulls` |
| `nullif` |

### JSON Functions and Operators (9.16) (37)

| Function |
|----------|
| `array_to_json` |
| `json_array_elements` |
| `json_array_elements_text` |
| `json_array_length` |
| `json_build_array` |
| `json_build_object` |
| `json_each` |
| `json_each_text` |
| `json_object` |
| `json_object_keys` |
| `json_strip_nulls` |
| `json_typeof` |
| `jsonb_array_elements` |
| `jsonb_array_elements_text` |
| `jsonb_array_length` |
| `jsonb_build_array` |
| `jsonb_build_object` |
| `jsonb_each` |
| `jsonb_each_text` |
| `jsonb_extract_path` |
| `jsonb_extract_path_text` |
| `jsonb_insert` |
| `jsonb_object` |
| `jsonb_object_keys` |
| `jsonb_path_exists` |
| `jsonb_path_match` |
| `jsonb_path_query` |
| `jsonb_path_query_array` |
| `jsonb_pretty` |
| `jsonb_set` |
| `jsonb_strip_nulls` |
| `jsonb_typeof` |
| `row_to_json` |
| `to_json` |
| `to_jsonb` |
| `jsonb_object_agg` |
| `json_object_agg` |

### Array Functions and Operators (9.19) (16)

| Function |
|----------|
| `array_append` |
| `array_cat` |
| `array_dims` |
| `array_fill` |
| `array_lower` |
| `array_ndims` |
| `array_position` |
| `array_positions` |
| `array_prepend` |
| `array_remove` |
| `array_replace` |
| `array_sample` |
| `array_shuffle` |
| `array_upper` |
| `cardinality` |
| `unnest` |

### Aggregate Functions (9.21) (43)

| Function |
|----------|
| `any_value` |
| `array_agg` |
| `avg` |
| `bit_and` |
| `bit_or` |
| `bit_xor` |
| `corr` |
| `covar_pop` |
| `covar_samp` |
| `cume_dist` |
| `dense_rank` |
| `json_agg` |
| `json_agg_strict` |
| `json_object_agg` |
| `json_object_agg_strict` |
| `json_object_agg_unique` |
| `json_object_agg_unique_strict` |
| `jsonb_agg` |
| `jsonb_agg_strict` |
| `jsonb_object_agg` |
| `jsonb_object_agg_strict` |
| `jsonb_object_agg_unique` |
| `jsonb_object_agg_unique_strict` |
| `max` |
| `min` |
| `mode` |
| `percent_rank` |
| `percentile_cont` |
| `range_agg` |
| `range_intersect_agg` |
| `rank` |
| `regr_avgx` |
| `regr_avgy` |
| `regr_count` |
| `regr_intercept` |
| `regr_r2` |
| `regr_slope` |
| `regr_sxx` |
| `regr_sxy` |
| `regr_syy` |
| `string_agg` |
| `sum` |
| `xmlagg` |

### Window Functions (9.22) (8)

| Function |
|----------|
| `cume_dist` |
| `first_value` |
| `lag` |
| `last_value` |
| `lead` |
| `nth_value` |
| `ntile` |
| `percent_rank` |

### Set Returning Functions (9.25) (2)

| Function |
|----------|
| `generate_series` |
| `generate_subscripts` |

### Other Functions (3)

| Function |
|----------|
| `TIMESTAMP 'infinity'` |
| `jsonb_path_query_first` |
| `count` |

---

## Unsupported Functions

Functions listed below have no supported signatures in Legend SQL.
Functions with at least one working overload (e.g., `length(text)`) are excluded.

### Mathematical Functions and Operators (9.3) (12 unsupported)

| Function | Reason |
|----------|--------|
| `acosh` | Function not supported |
| `asinh` | Function not supported |
| `atanh` | Function not supported |
| `factorial` | Function not supported |
| `gcd` | Function not supported |
| `lcm` | Function not supported |
| `min_scale` | Function not supported |
| `random` | Function not supported |
| `scale` | Function not supported |
| `setseed` | Function not supported |
| `trim_scale` | Function not supported |
| `width_bucket` | Function not supported |

### String Functions and Operators (9.4) (18 unsupported)

| Function | Reason |
|----------|--------|
| `array_to_string` | Function not supported |
| `bit_length` | Function not supported |
| `character_length` | Function not supported |
| `encode` | Unsupported feature |
| `format` | Function not supported |
| `is_normalized` | Function not supported |
| `normalize` | Function not supported |
| `octet_length` | Function not supported |
| `quote_ident` | Function not supported |
| `quote_literal` | Function not supported |
| `quote_nullable` | Function not supported |
| `regexp_match` | Function not supported |
| `regexp_matches` | Function not supported |
| `regexp_split_to_array` | Function not supported |
| `regexp_split_to_table` | Function not supported |
| `to_hex` | Function not supported |
| `translate` | Function not supported |
| `unistr` | Function not supported |

### Binary String Functions (9.5) (8 unsupported)

| Function | Reason |
|----------|--------|
| `convert` | Function not supported |
| `convert_from` | Function not supported |
| `convert_to` | Function not supported |
| `get_byte` | Function not supported |
| `set_byte` | Function not supported |
| `sha224` | Function not supported |
| `sha384` | Function not supported |
| `sha512` | Function not supported |

### Data Type Formatting (9.8) (2 unsupported)

| Function | Reason |
|----------|--------|
| `to_date` | Function not supported |
| `to_number` | Function not supported |

### Date/Time Functions and Operators (9.9) (13 unsupported)

| Function | Reason |
|----------|--------|
| `age` | Function not supported |
| `clock_timestamp` | Function not supported |
| `isfinite` | Function not supported |
| `justify_days` | Function not supported |
| `justify_hours` | Function not supported |
| `justify_interval` | Function not supported |
| `make_time` | Function not supported |
| `make_timestamptz` | Function not supported |
| `now` | Function not supported |
| `statement_timestamp` | Function not supported |
| `timeofday` | Function not supported |
| `to_timestamp` | Function not supported |
| `transaction_timestamp` | Function not supported |

### Conditional Expressions (9.18) (3 unsupported)

| Function | Reason |
|----------|--------|
| `num_nonnulls` | Function not supported |
| `num_nulls` | Function not supported |
| `nullif` | Function not supported |

### JSON Functions and Operators (9.16) (37 unsupported)

| Function | Reason |
|----------|--------|
| `array_to_json` | Function not supported |
| `json_array_elements` | Function not supported |
| `json_array_elements_text` | Function not supported |
| `json_array_length` | Function not supported |
| `json_build_array` | Unsupported feature |
| `json_build_object` | Unsupported feature |
| `json_each` | Function not supported |
| `json_each_text` | Function not supported |
| `json_object` | Function not supported |
| `json_object_keys` | Function not supported |
| `json_strip_nulls` | Function not supported |
| `json_typeof` | Function not supported |
| `jsonb_array_elements` | Function not supported |
| `jsonb_array_elements_text` | Function not supported |
| `jsonb_array_length` | Function not supported |
| `jsonb_build_array` | Function not supported |
| `jsonb_build_object` | Function not supported |
| `jsonb_each` | Function not supported |
| `jsonb_each_text` | Function not supported |
| `jsonb_extract_path` | Function not supported |
| `jsonb_extract_path_text` | Function not supported |
| `jsonb_insert` | Function not supported |
| `jsonb_object` | Function not supported |
| `jsonb_object_keys` | Function not supported |
| `jsonb_path_exists` | Function not supported |
| `jsonb_path_match` | Function not supported |
| `jsonb_path_query` | Function not supported |
| `jsonb_path_query_array` | Function not supported |
| `jsonb_pretty` | Function not supported |
| `jsonb_set` | Function not supported |
| `jsonb_strip_nulls` | Function not supported |
| `jsonb_typeof` | Function not supported |
| `row_to_json` | Function not supported |
| `to_json` | Function not supported |
| `to_jsonb` | Function not supported |
| `jsonb_object_agg` | Function not supported |
| `json_object_agg` | Function not supported |

### Array Functions and Operators (9.19) (16 unsupported)

| Function | Reason |
|----------|--------|
| `array_append` | Function not supported |
| `array_cat` | Function not supported |
| `array_dims` | Function not supported |
| `array_fill` | Function not supported |
| `array_lower` | Function not supported |
| `array_ndims` | Function not supported |
| `array_position` | Unsupported feature |
| `array_positions` | Function not supported |
| `array_prepend` | Function not supported |
| `array_remove` | Function not supported |
| `array_replace` | Function not supported |
| `array_sample` | Function not supported |
| `array_shuffle` | Function not supported |
| `array_upper` | Function not supported |
| `cardinality` | Function not supported |
| `unnest` | Function not supported |

### Aggregate Functions (9.21) (35 unsupported)

| Function | Reason |
|----------|--------|
| `any_value` | Function not supported |
| `array_agg` | Function not supported |
| `bit_and` | Function not supported |
| `bit_or` | Function not supported |
| `bit_xor` | Function not supported |
| `corr` | Function not supported |
| `covar_pop` | Function not supported |
| `covar_samp` | Function not supported |
| `cume_dist` | Unsupported feature |
| `json_agg` | Function not supported |
| `json_agg_strict` | Function not supported |
| `json_object_agg` | Function not supported |
| `json_object_agg_strict` | Function not supported |
| `json_object_agg_unique` | Function not supported |
| `json_object_agg_unique_strict` | Function not supported |
| `jsonb_agg` | Function not supported |
| `jsonb_agg_strict` | Function not supported |
| `jsonb_object_agg` | Function not supported |
| `jsonb_object_agg_strict` | Function not supported |
| `jsonb_object_agg_unique` | Function not supported |
| `jsonb_object_agg_unique_strict` | Function not supported |
| `mode` | Function not supported |
| `percent_rank` | Unsupported feature |
| `range_agg` | Function not supported |
| `range_intersect_agg` | Function not supported |
| `regr_avgx` | Function not supported |
| `regr_avgy` | Function not supported |
| `regr_count` | Function not supported |
| `regr_intercept` | Function not supported |
| `regr_r2` | Function not supported |
| `regr_slope` | Function not supported |
| `regr_sxx` | Function not supported |
| `regr_sxy` | Function not supported |
| `regr_syy` | Function not supported |
| `xmlagg` | Function not supported |

### Window Functions (9.22) (8 unsupported)

| Function | Reason |
|----------|--------|
| `cume_dist` | Unsupported feature |
| `first_value` | Unsupported feature |
| `lag` | Unsupported feature |
| `last_value` | Unsupported feature |
| `lead` | Unsupported feature |
| `nth_value` | Unsupported feature |
| `ntile` | Unsupported feature |
| `percent_rank` | Unsupported feature |

### Network Address Functions (9.12) (14 unsupported)

| Function | Reason |
|----------|--------|
| `abbrev` | Unsupported category/type |
| `broadcast` | Unsupported category/type |
| `family` | Unsupported category/type |
| `host` | Unsupported category/type |
| `hostmask` | Unsupported category/type |
| `inet_client_addr` | Unsupported category/type |
| `inet_client_port` | Unsupported category/type |
| `inet_server_addr` | Unsupported category/type |
| `inet_server_port` | Unsupported category/type |
| `masklen` | Unsupported category/type |
| `netmask` | Unsupported category/type |
| `network` | Unsupported category/type |
| `set_masklen` | Unsupported category/type |
| `text` | Unsupported category/type |

### System Information Functions (9.26) (14 unsupported)

| Function | Reason |
|----------|--------|
| `col_description` | Unsupported category/type |
| `current_database` | Unsupported category/type |
| `current_query` | Unsupported category/type |
| `current_schema` | Unsupported category/type |
| `current_schemas` | Unsupported category/type |
| `current_user` | Unsupported category/type |
| `has_column_privilege` | Unsupported category/type |
| `has_database_privilege` | Unsupported category/type |
| `has_schema_privilege` | Unsupported category/type |
| `has_table_privilege` | Unsupported category/type |
| `obj_description` | Unsupported category/type |
| `session_user` | Unsupported category/type |
| `shobj_description` | Unsupported category/type |
| `version` | Unsupported category/type |

### Set Returning Functions (9.25) (2 unsupported)

| Function | Reason |
|----------|--------|
| `generate_series` | Function not supported |
| `generate_subscripts` | Function not supported |

### Other Functions (2 unsupported)

| Function | Reason |
|----------|--------|
| `TIMESTAMP 'infinity'` | Unsupported feature |
| `jsonb_path_query_first` | Function not supported |

## Error Details

<a id="function-not-supported"></a>

### FUNCTION_NOT_SUPPORTED (264 tests)

#### <a id="fail-acosh__dp__from_table-TDS"></a><a id="fail-acosh__dp__from_table-Relation"></a>`acosh__dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ACOSH(ABS(float_val) + 1) AS result FROM numbers WHERE float_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT ACOSH(ABS(float_val) + 1) AS result FROM func('e2e::tds_numbers') WHERE float_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT ACOSH(ABS(float_val) + 1) AS result FROM func('e2e::rel_numbers') WHERE float_val IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "ACOSH"


<br>

#### <a id="fail-asinh__dp__from_table-TDS"></a><a id="fail-asinh__dp__from_table-Relation"></a>`asinh__dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ASINH(float_val) AS result FROM numbers WHERE float_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT ASINH(float_val) AS result FROM func('e2e::tds_numbers') WHERE float_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT ASINH(float_val) AS result FROM func('e2e::rel_numbers') WHERE float_val IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "ASINH"


<br>

#### <a id="fail-atanh__dp__from_table-TDS"></a><a id="fail-atanh__dp__from_table-Relation"></a>`atanh__dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ATANH(float_val / (ABS(float_val) + 1)) AS result FROM numbers WHERE float_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT ATANH(float_val / (ABS(float_val) + 1)) AS result FROM func('e2e::tds_numbers') WHERE float_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT ATANH(float_val / (ABS(float_val) + 1)) AS result FROM func('e2e::rel_numbers') WHERE float_val IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "ATANH"


<br>

#### <a id="fail-factorial__big__from_table-TDS"></a><a id="fail-factorial__big__from_table-Relation"></a>`factorial__big__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT FACTORIAL(small_val::bigint) AS result FROM numbers WHERE small_val IS NOT NULL AND small_val >= 0 AND small_val <= 20 ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT FACTORIAL(small_val::bigint) AS result FROM func('e2e::tds_numbers') WHERE small_val IS NOT NULL AND small_val >= 0 AND small_val <= 20 ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT FACTORIAL(small_val::bigint) AS result FROM func('e2e::rel_numbers') WHERE small_val IS NOT NULL AND small_val >= 0 AND small_val <= 20 ORDER BY 1
```

**Error:**
> No function matches the given name "FACTORIAL"


<br>

#### <a id="fail-gcd__big_big__from_table-TDS"></a><a id="fail-gcd__big_big__from_table-Relation"></a>`gcd__big_big__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT GCD(int_val, small_val) AS result FROM numbers WHERE int_val IS NOT NULL AND small_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT GCD(int_val, small_val) AS result FROM func('e2e::tds_numbers') WHERE int_val IS NOT NULL AND small_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT GCD(int_val, small_val) AS result FROM func('e2e::rel_numbers') WHERE int_val IS NOT NULL AND small_val IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "GCD"


<br>

#### <a id="fail-gcd__int_int__from_table-TDS"></a><a id="fail-gcd__int_int__from_table-Relation"></a>`gcd__int_int__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT GCD(int_val, small_val) AS result FROM numbers WHERE int_val IS NOT NULL AND small_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT GCD(int_val, small_val) AS result FROM func('e2e::tds_numbers') WHERE int_val IS NOT NULL AND small_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT GCD(int_val, small_val) AS result FROM func('e2e::rel_numbers') WHERE int_val IS NOT NULL AND small_val IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "GCD"


<br>

#### <a id="fail-gcd__num_num__from_table-TDS"></a><a id="fail-gcd__num_num__from_table-Relation"></a>`gcd__num_num__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT GCD(int_val, small_val) AS result FROM numbers WHERE int_val IS NOT NULL AND small_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT GCD(int_val, small_val) AS result FROM func('e2e::tds_numbers') WHERE int_val IS NOT NULL AND small_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT GCD(int_val, small_val) AS result FROM func('e2e::rel_numbers') WHERE int_val IS NOT NULL AND small_val IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "GCD"


<br>

#### <a id="fail-lcm__big_big__from_table-TDS"></a><a id="fail-lcm__big_big__from_table-Relation"></a>`lcm__big_big__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT LCM(int_val, small_val) AS result FROM numbers WHERE int_val IS NOT NULL AND small_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT LCM(int_val, small_val) AS result FROM func('e2e::tds_numbers') WHERE int_val IS NOT NULL AND small_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT LCM(int_val, small_val) AS result FROM func('e2e::rel_numbers') WHERE int_val IS NOT NULL AND small_val IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "LCM"


<br>

#### <a id="fail-lcm__int_int__from_table-TDS"></a><a id="fail-lcm__int_int__from_table-Relation"></a>`lcm__int_int__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT LCM(int_val, small_val) AS result FROM numbers WHERE int_val IS NOT NULL AND small_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT LCM(int_val, small_val) AS result FROM func('e2e::tds_numbers') WHERE int_val IS NOT NULL AND small_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT LCM(int_val, small_val) AS result FROM func('e2e::rel_numbers') WHERE int_val IS NOT NULL AND small_val IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "LCM"


<br>

#### <a id="fail-lcm__num_num__from_table-TDS"></a><a id="fail-lcm__num_num__from_table-Relation"></a>`lcm__num_num__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT LCM(int_val, small_val) AS result FROM numbers WHERE int_val IS NOT NULL AND small_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT LCM(int_val, small_val) AS result FROM func('e2e::tds_numbers') WHERE int_val IS NOT NULL AND small_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT LCM(int_val, small_val) AS result FROM func('e2e::rel_numbers') WHERE int_val IS NOT NULL AND small_val IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "LCM"


<br>

#### <a id="fail-min_scale__num__from_table-TDS"></a><a id="fail-min_scale__num__from_table-Relation"></a>`min_scale__num__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN_SCALE(numeric_val) AS result FROM numbers WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT MIN_SCALE(numeric_val) AS result FROM func('e2e::tds_numbers') WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT MIN_SCALE(numeric_val) AS result FROM func('e2e::rel_numbers') WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "MIN_SCALE"


<br>

#### <a id="fail-random__basic-TDS"></a><a id="fail-random__basic-Relation"></a>`random__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CASE WHEN RANDOM() >= 0 AND RANDOM() < 1 THEN 1 ELSE 0 END AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CASE WHEN RANDOM() >= 0 AND RANDOM() < 1 THEN 1 ELSE 0 END AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CASE WHEN RANDOM() >= 0 AND RANDOM() < 1 THEN 1 ELSE 0 END AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> No function matches the given name "RANDOM"


<br>

#### <a id="fail-random_cov-TDS"></a><a id="fail-random_cov-Relation"></a>`random_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT RANDOM() AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT RANDOM() AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT RANDOM() AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "RANDOM"


<br>

#### <a id="fail-scale__num__from_table-TDS"></a><a id="fail-scale__num__from_table-Relation"></a>`scale__num__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SCALE(numeric_val) AS result FROM numbers WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT SCALE(numeric_val) AS result FROM func('e2e::tds_numbers') WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT SCALE(numeric_val) AS result FROM func('e2e::rel_numbers') WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "SCALE"


<br>

#### <a id="fail-setseed__dp__basic-TDS"></a><a id="fail-setseed__dp__basic-Relation"></a>`setseed__dp__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SETSEED(0.5) FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SETSEED(0.5) FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SETSEED(0.5) FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> No function matches the given name "SETSEED"


<br>

#### <a id="fail-setseed_double_precision_cov-TDS"></a><a id="fail-setseed_double_precision_cov-Relation"></a>`setseed_double_precision_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SETSEED(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SETSEED(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SETSEED(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "SETSEED"


<br>

#### <a id="fail-trim_scale__num__from_table-TDS"></a><a id="fail-trim_scale__num__from_table-Relation"></a>`trim_scale__num__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TRIM_SCALE(numeric_val) AS result FROM numbers WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT TRIM_SCALE(numeric_val) AS result FROM func('e2e::tds_numbers') WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT TRIM_SCALE(numeric_val) AS result FROM func('e2e::rel_numbers') WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "TRIM_SCALE"


<br>

#### <a id="fail-width_bucket__anycompatible_anycompatiblearray__unsupported_type-TDS"></a><a id="fail-width_bucket__anycompatible_anycompatiblearray__unsupported_type-Relation"></a>`width_bucket__anycompatible_anycompatiblearray__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT WIDTH_BUCKET(5, ARRAY[1, 3, 5, 7, 9]) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT WIDTH_BUCKET(5, ARRAY[1, 3, 5, 7, 9]) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT WIDTH_BUCKET(5, ARRAY[1, 3, 5, 7, 9]) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "WIDTH_BUCKET"


<br>

#### <a id="fail-width_bucket_anycompatible_anycompatiblear_cov-TDS"></a><a id="fail-width_bucket_anycompatible_anycompatiblear_cov-Relation"></a>`width_bucket_anycompatible_anycompatiblear_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT WIDTH_BUCKET(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT WIDTH_BUCKET(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT WIDTH_BUCKET(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "WIDTH_BUCKET"


<br>

#### <a id="fail-width_bucket__dp_dp_dp_int__from_table-TDS"></a><a id="fail-width_bucket__dp_dp_dp_int__from_table-Relation"></a>`width_bucket__dp_dp_dp_int__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT WIDTH_BUCKET(float_val, -10.0, 10.0, 5) AS result FROM numbers WHERE float_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT WIDTH_BUCKET(float_val, -10.0, 10.0, 5) AS result FROM func('e2e::tds_numbers') WHERE float_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT WIDTH_BUCKET(float_val, -10.0, 10.0, 5) AS result FROM func('e2e::rel_numbers') WHERE float_val IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "WIDTH_BUCKET"


<br>

#### <a id="fail-width_bucket__num_num_num_int__from_table-TDS"></a><a id="fail-width_bucket__num_num_num_int__from_table-Relation"></a>`width_bucket__num_num_num_int__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT WIDTH_BUCKET(numeric_val, -100000.0, 100000.0, 10) AS result FROM numbers WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT WIDTH_BUCKET(numeric_val, -100000.0, 100000.0, 10) AS result FROM func('e2e::tds_numbers') WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT WIDTH_BUCKET(numeric_val, -100000.0, 100000.0, 10) AS result FROM func('e2e::rel_numbers') WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "WIDTH_BUCKET"


<br>

#### <a id="fail-array_to_string__anyarray_txt__no_generator-TDS"></a><a id="fail-array_to_string__anyarray_txt__no_generator-Relation"></a>`array_to_string__anyarray_txt__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_TO_STRING(ARRAY['a', 'b', 'c'], ',') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_TO_STRING(ARRAY['a', 'b', 'c'], ',') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_TO_STRING(ARRAY['a', 'b', 'c'], ',') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_TO_STRING"


<br>

#### <a id="fail-array_to_string_anyarray_text_cov-TDS"></a><a id="fail-array_to_string_anyarray_text_cov-Relation"></a>`array_to_string_anyarray_text_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_TO_STRING(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_TO_STRING(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_TO_STRING(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_TO_STRING"


<br>

#### <a id="fail-array_to_string__anyarray_txt_txt__from_table-TDS"></a><a id="fail-array_to_string__anyarray_txt_txt__from_table-Relation"></a>`array_to_string__anyarray_txt_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_TO_STRING(ARRAY[val, nullable_val], ', ') AS result FROM strings ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_TO_STRING(ARRAY[val, nullable_val], ', ') AS result FROM func('e2e::tds_strings') ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_TO_STRING(ARRAY[val, nullable_val], ', ') AS result FROM func('e2e::rel_strings') ORDER BY 1
```

**Error:**
> No function matches the given name "ARRAY_TO_STRING"


<br>

#### <a id="fail-bit_length_bit_cov-TDS"></a><a id="fail-bit_length_bit_cov-Relation"></a>`bit_length_bit_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_LENGTH(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT BIT_LENGTH(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT BIT_LENGTH(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "BIT_LENGTH"


<br>

#### <a id="fail-bit_length_bytea_cov-TDS"></a><a id="fail-bit_length_bytea_cov-Relation"></a>`bit_length_bytea_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_LENGTH(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT BIT_LENGTH(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT BIT_LENGTH(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "BIT_LENGTH"


<br>

#### <a id="fail-bit_length__txt__from_table-TDS"></a><a id="fail-bit_length__txt__from_table-Relation"></a>`bit_length__txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_LENGTH(val) AS result FROM strings ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT BIT_LENGTH(val) AS result FROM func('e2e::tds_strings') ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT BIT_LENGTH(val) AS result FROM func('e2e::rel_strings') ORDER BY 1
```

**Error:**
> No function matches the given name "BIT_LENGTH"


<br>

#### <a id="fail-character_length__char__unsupported_type-TDS"></a><a id="fail-character_length__char__unsupported_type-Relation"></a>`character_length__char__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CHARACTER_LENGTH('hello'::character(10)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CHARACTER_LENGTH('hello'::character(10)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CHARACTER_LENGTH('hello'::character(10)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "CHARACTER_LENGTH"


<br>

#### <a id="fail-character_length_character_cov-TDS"></a><a id="fail-character_length_character_cov-Relation"></a>`character_length_character_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CHARACTER_LENGTH(name) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CHARACTER_LENGTH(name) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CHARACTER_LENGTH(name) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "CHARACTER_LENGTH"


<br>

#### <a id="fail-character_length__txt__from_table-TDS"></a><a id="fail-character_length__txt__from_table-Relation"></a>`character_length__txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CHARACTER_LENGTH(val) AS result FROM strings ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT CHARACTER_LENGTH(val) AS result FROM func('e2e::tds_strings') ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT CHARACTER_LENGTH(val) AS result FROM func('e2e::rel_strings') ORDER BY 1
```

**Error:**
> No function matches the given name "CHARACTER_LENGTH"


<br>

#### <a id="fail-format__txt__from_table-TDS"></a><a id="fail-format__txt__from_table-Relation"></a>`format__txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT FORMAT('Hello World') AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT FORMAT('Hello World') AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT FORMAT('Hello World') AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> No function matches the given name "FORMAT"


<br>

#### <a id="fail-format__txt_variadic__from_table-TDS"></a><a id="fail-format__txt_variadic__from_table-Relation"></a>`format__txt_variadic__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT FORMAT('Hello %s, age %s', name, age) AS result FROM persons WHERE age IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT FORMAT('Hello %s, age %s', name, age) AS result FROM func('e2e::tds_persons') WHERE age IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT FORMAT('Hello %s, age %s', name, age) AS result FROM func('e2e::rel_persons') WHERE age IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "FORMAT"


<br>

#### <a id="fail-is_normalized__txt_txtNFCtxt__from_table-TDS"></a><a id="fail-is_normalized__txt_txtNFCtxt__from_table-Relation"></a>`is_normalized__txt_txtNFCtxt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT IS_NORMALIZED(unicode_val) AS result FROM strings WHERE unicode_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT IS_NORMALIZED(unicode_val) AS result FROM func('e2e::tds_strings') WHERE unicode_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT IS_NORMALIZED(unicode_val) AS result FROM func('e2e::rel_strings') WHERE unicode_val IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "IS_NORMALIZED"


<br>

#### <a id="fail-length__tsvector__unsupported_type-TDS"></a><a id="fail-length__tsvector__unsupported_type-Relation"></a>`length__tsvector__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT LENGTH(to_tsvector('english', 'the quick brown fox')) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT LENGTH(to_tsvector('english', 'the quick brown fox')) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT LENGTH(to_tsvector('english', 'the quick brown fox')) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "to_tsvector"


<br>

#### <a id="fail-lower__anymultirange__unsupported_type-TDS"></a><a id="fail-lower__anymultirange__unsupported_type-Relation"></a>`lower__anymultirange__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT LOWER(int4multirange(int4range(1,5))) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT LOWER(int4multirange(int4range(1, 5))) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT LOWER(int4multirange(int4range(1, 5))) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4multirange"


<br>

#### <a id="fail-lower__anyrange__unsupported_type-TDS"></a><a id="fail-lower__anyrange__unsupported_type-Relation"></a>`lower__anyrange__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT LOWER(int4range(1,5)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT LOWER(int4range(1, 5)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT LOWER(int4range(1, 5)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-normalize__txt_txtNFCtxt__from_table-TDS"></a><a id="fail-normalize__txt_txtNFCtxt__from_table-Relation"></a>`normalize__txt_txtNFCtxt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT NORMALIZE(unicode_val) AS result FROM strings WHERE unicode_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT NORMALIZE(unicode_val) AS result FROM func('e2e::tds_strings') WHERE unicode_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT NORMALIZE(unicode_val) AS result FROM func('e2e::rel_strings') WHERE unicode_val IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "NORMALIZE"


<br>

#### <a id="fail-octet_length_bit_cov-TDS"></a><a id="fail-octet_length_bit_cov-Relation"></a>`octet_length_bit_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT OCTET_LENGTH(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT OCTET_LENGTH(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT OCTET_LENGTH(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "OCTET_LENGTH"


<br>

#### <a id="fail-octet_length_bytea_cov-TDS"></a><a id="fail-octet_length_bytea_cov-Relation"></a>`octet_length_bytea_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT OCTET_LENGTH(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT OCTET_LENGTH(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT OCTET_LENGTH(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "OCTET_LENGTH"


<br>

#### <a id="fail-octet_length__char__unsupported_type-TDS"></a><a id="fail-octet_length__char__unsupported_type-Relation"></a>`octet_length__char__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT OCTET_LENGTH('hello'::character(10)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT OCTET_LENGTH('hello'::character(10)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT OCTET_LENGTH('hello'::character(10)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "OCTET_LENGTH"


<br>

#### <a id="fail-octet_length_character_cov-TDS"></a><a id="fail-octet_length_character_cov-Relation"></a>`octet_length_character_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT OCTET_LENGTH(name) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT OCTET_LENGTH(name) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT OCTET_LENGTH(name) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "OCTET_LENGTH"


<br>

#### <a id="fail-octet_length__txt__from_table-TDS"></a><a id="fail-octet_length__txt__from_table-Relation"></a>`octet_length__txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT OCTET_LENGTH(val) AS result FROM strings ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT OCTET_LENGTH(val) AS result FROM func('e2e::tds_strings') ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT OCTET_LENGTH(val) AS result FROM func('e2e::rel_strings') ORDER BY 1
```

**Error:**
> No function matches the given name "OCTET_LENGTH"


<br>

#### <a id="fail-overlay_bit_bit_integer_cov-TDS"></a><a id="fail-overlay_bit_bit_integer_cov-Relation"></a>`overlay_bit_bit_integer_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT OVERLAY(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT OVERLAY(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT OVERLAY(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "OVERLAY"


<br>

#### <a id="fail-overlay_bit_bit_integer_integer_cov-TDS"></a><a id="fail-overlay_bit_bit_integer_integer_cov-Relation"></a>`overlay_bit_bit_integer_integer_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT OVERLAY(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT OVERLAY(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT OVERLAY(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "OVERLAY"


<br>

#### <a id="fail-overlay_bytea_bytea_integer_cov-TDS"></a><a id="fail-overlay_bytea_bytea_integer_cov-Relation"></a>`overlay_bytea_bytea_integer_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT OVERLAY(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT OVERLAY(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT OVERLAY(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "OVERLAY"


<br>

#### <a id="fail-overlay_bytea_bytea_integer_integer_cov-TDS"></a><a id="fail-overlay_bytea_bytea_integer_integer_cov-Relation"></a>`overlay_bytea_bytea_integer_integer_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT OVERLAY(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT OVERLAY(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT OVERLAY(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "OVERLAY"


<br>

#### <a id="fail-overlay__txt_txt_int_int__func_syntax-TDS"></a><a id="fail-overlay__txt_txt_int_int__func_syntax-Relation"></a>`overlay__txt_txt_int_int__func_syntax`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT OVERLAY(val, 'XX', 1, 2) AS result FROM strings WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT OVERLAY(val, 'XX', 1, 2) AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT OVERLAY(val, 'XX', 1, 2) AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Error:**
> No function matches the given name "OVERLAY"


<br>

#### <a id="fail-position_bit_bit_cov-TDS"></a><a id="fail-position_bit_bit_cov-Relation"></a>`position_bit_bit_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT POSITION(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT POSITION(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT POSITION(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "POSITION"


<br>

#### <a id="fail-position_bytea_bytea_cov-TDS"></a><a id="fail-position_bytea_bytea_cov-Relation"></a>`position_bytea_bytea_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT POSITION(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT POSITION(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT POSITION(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "POSITION"


<br>

#### <a id="fail-quote_ident__txt__from_table-TDS"></a><a id="fail-quote_ident__txt__from_table-Relation"></a>`quote_ident__txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT QUOTE_IDENT(val) AS result FROM strings WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT QUOTE_IDENT(val) AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT QUOTE_IDENT(val) AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Error:**
> No function matches the given name "QUOTE_IDENT"


<br>

#### <a id="fail-quote_literal__anyelement__unsupported_type-TDS"></a><a id="fail-quote_literal__anyelement__unsupported_type-Relation"></a>`quote_literal__anyelement__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT QUOTE_LITERAL(age) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT QUOTE_LITERAL(age) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT QUOTE_LITERAL(age) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "QUOTE_LITERAL"


<br>

#### <a id="fail-quote_literal_anyelement_cov-TDS"></a><a id="fail-quote_literal_anyelement_cov-Relation"></a>`quote_literal_anyelement_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT QUOTE_LITERAL(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT QUOTE_LITERAL(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT QUOTE_LITERAL(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "QUOTE_LITERAL"


<br>

#### <a id="fail-quote_literal__txt__from_table-TDS"></a><a id="fail-quote_literal__txt__from_table-Relation"></a>`quote_literal__txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT QUOTE_LITERAL(val) AS result FROM strings WHERE val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT QUOTE_LITERAL(val) AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT QUOTE_LITERAL(val) AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "QUOTE_LITERAL"


<br>

#### <a id="fail-quote_nullable__anyelement__unsupported_type-TDS"></a><a id="fail-quote_nullable__anyelement__unsupported_type-Relation"></a>`quote_nullable__anyelement__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT QUOTE_NULLABLE(age) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT QUOTE_NULLABLE(age) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT QUOTE_NULLABLE(age) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "QUOTE_NULLABLE"


<br>

#### <a id="fail-quote_nullable_anyelement_cov-TDS"></a><a id="fail-quote_nullable_anyelement_cov-Relation"></a>`quote_nullable_anyelement_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT QUOTE_NULLABLE(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT QUOTE_NULLABLE(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT QUOTE_NULLABLE(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "QUOTE_NULLABLE"


<br>

#### <a id="fail-quote_nullable__txt__from_table-TDS"></a><a id="fail-quote_nullable__txt__from_table-Relation"></a>`quote_nullable__txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT QUOTE_NULLABLE(nullable_val) AS result FROM strings ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT QUOTE_NULLABLE(nullable_val) AS result FROM func('e2e::tds_strings') ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT QUOTE_NULLABLE(nullable_val) AS result FROM func('e2e::rel_strings') ORDER BY 1
```

**Error:**
> No function matches the given name "QUOTE_NULLABLE"


<br>

#### <a id="fail-regexp_match__txt_txt__from_table-TDS"></a><a id="fail-regexp_match__txt_txt__from_table-Relation"></a>`regexp_match__txt_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGEXP_MATCH(val, '([a-z]+)') AS result FROM strings WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT REGEXP_MATCH(val, '([a-z]+)') AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT REGEXP_MATCH(val, '([a-z]+)') AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Error:**
> No function matches the given name "REGEXP_MATCH"


<br>

#### <a id="fail-regexp_match__txt_txt_txt__from_table-TDS"></a><a id="fail-regexp_match__txt_txt_txt__from_table-Relation"></a>`regexp_match__txt_txt_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGEXP_MATCH(val, '([a-z]+)', 'i') AS result FROM strings WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT REGEXP_MATCH(val, '([a-z]+)', 'i') AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT REGEXP_MATCH(val, '([a-z]+)', 'i') AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Error:**
> No function matches the given name "REGEXP_MATCH"


<br>

#### <a id="fail-regexp_matches__txt_txt__from_table-TDS"></a><a id="fail-regexp_matches__txt_txt__from_table-Relation"></a>`regexp_matches__txt_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGEXP_MATCHES(val, '([a-z]+)', 'g') AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT REGEXP_MATCHES(val, '([a-z]+)', 'g') AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT REGEXP_MATCHES(val, '([a-z]+)', 'g') AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> No function matches the given name "REGEXP_MATCHES"


<br>

#### <a id="fail-regexp_matches_text_text_cov-TDS"></a><a id="fail-regexp_matches_text_text_cov-Relation"></a>`regexp_matches_text_text_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGEXP_MATCHES(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT REGEXP_MATCHES(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT REGEXP_MATCHES(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "REGEXP_MATCHES"


<br>

#### <a id="fail-regexp_matches__txt_txt_txt__from_table-TDS"></a><a id="fail-regexp_matches__txt_txt_txt__from_table-Relation"></a>`regexp_matches__txt_txt_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGEXP_MATCHES(val, '([a-z]+)', 'g') AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT REGEXP_MATCHES(val, '([a-z]+)', 'g') AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT REGEXP_MATCHES(val, '([a-z]+)', 'g') AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> No function matches the given name "REGEXP_MATCHES"


<br>

#### <a id="fail-regexp_matches_text_text_text_cov-TDS"></a><a id="fail-regexp_matches_text_text_text_cov-Relation"></a>`regexp_matches_text_text_text_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGEXP_MATCHES(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT REGEXP_MATCHES(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT REGEXP_MATCHES(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "REGEXP_MATCHES"


<br>

#### <a id="fail-regexp_split_to_array__txt_txt__from_table-TDS"></a><a id="fail-regexp_split_to_array__txt_txt__from_table-Relation"></a>`regexp_split_to_array__txt_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGEXP_SPLIT_TO_ARRAY(val, '\s+') AS result FROM strings WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT REGEXP_SPLIT_TO_ARRAY(val, '\s+') AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT REGEXP_SPLIT_TO_ARRAY(val, '\s+') AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Error:**
> No function matches the given name "REGEXP_SPLIT_TO_ARRAY"


<br>

#### <a id="fail-regexp_split_to_array__txt_txt_txt__from_table-TDS"></a><a id="fail-regexp_split_to_array__txt_txt_txt__from_table-Relation"></a>`regexp_split_to_array__txt_txt_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGEXP_SPLIT_TO_ARRAY(val, '\s+') AS result FROM strings WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT REGEXP_SPLIT_TO_ARRAY(val, '\s+') AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT REGEXP_SPLIT_TO_ARRAY(val, '\s+') AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Error:**
> No function matches the given name "REGEXP_SPLIT_TO_ARRAY"


<br>

#### <a id="fail-regexp_split_to_table__txt_txt__from_table-TDS"></a><a id="fail-regexp_split_to_table__txt_txt__from_table-Relation"></a>`regexp_split_to_table__txt_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGEXP_SPLIT_TO_TABLE(val, '\s+') AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT REGEXP_SPLIT_TO_TABLE(val, '\s+') AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT REGEXP_SPLIT_TO_TABLE(val, '\s+') AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> No function matches the given name "REGEXP_SPLIT_TO_TABLE"


<br>

#### <a id="fail-regexp_split_to_table_text_text_cov-TDS"></a><a id="fail-regexp_split_to_table_text_text_cov-Relation"></a>`regexp_split_to_table_text_text_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGEXP_SPLIT_TO_TABLE(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT REGEXP_SPLIT_TO_TABLE(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT REGEXP_SPLIT_TO_TABLE(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "REGEXP_SPLIT_TO_TABLE"


<br>

#### <a id="fail-regexp_split_to_table__txt_txt_txt__from_table-TDS"></a><a id="fail-regexp_split_to_table__txt_txt_txt__from_table-Relation"></a>`regexp_split_to_table__txt_txt_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGEXP_SPLIT_TO_TABLE(val, '\s+') AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT REGEXP_SPLIT_TO_TABLE(val, '\s+') AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT REGEXP_SPLIT_TO_TABLE(val, '\s+') AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> No function matches the given name "REGEXP_SPLIT_TO_TABLE"


<br>

#### <a id="fail-regexp_split_to_table_text_text_text_cov-TDS"></a><a id="fail-regexp_split_to_table_text_text_text_cov-Relation"></a>`regexp_split_to_table_text_text_text_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGEXP_SPLIT_TO_TABLE(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT REGEXP_SPLIT_TO_TABLE(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT REGEXP_SPLIT_TO_TABLE(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "REGEXP_SPLIT_TO_TABLE"


<br>

#### <a id="fail-to_hex__big__from_table-TDS"></a><a id="fail-to_hex__big__from_table-Relation"></a>`to_hex__big__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TO_HEX(int_val) AS result FROM numbers WHERE int_val IS NOT NULL AND int_val >= 0 ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT TO_HEX(int_val) AS result FROM func('e2e::tds_numbers') WHERE int_val IS NOT NULL AND int_val >= 0 ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT TO_HEX(int_val) AS result FROM func('e2e::rel_numbers') WHERE int_val IS NOT NULL AND int_val >= 0 ORDER BY 1
```

**Error:**
> No function matches the given name "TO_HEX"


<br>

#### <a id="fail-to_hex__int__from_table-TDS"></a><a id="fail-to_hex__int__from_table-Relation"></a>`to_hex__int__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TO_HEX(int_val) AS result FROM numbers WHERE int_val IS NOT NULL AND int_val >= 0 ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT TO_HEX(int_val) AS result FROM func('e2e::tds_numbers') WHERE int_val IS NOT NULL AND int_val >= 0 ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT TO_HEX(int_val) AS result FROM func('e2e::rel_numbers') WHERE int_val IS NOT NULL AND int_val >= 0 ORDER BY 1
```

**Error:**
> No function matches the given name "TO_HEX"


<br>

#### <a id="fail-translate__txt_txt_txt__from_table-TDS"></a><a id="fail-translate__txt_txt_txt__from_table-Relation"></a>`translate__txt_txt_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TRANSLATE(val, 'aeiou', 'AEIOU') AS result FROM strings ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT TRANSLATE(val, 'aeiou', 'AEIOU') AS result FROM func('e2e::tds_strings') ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT TRANSLATE(val, 'aeiou', 'AEIOU') AS result FROM func('e2e::rel_strings') ORDER BY 1
```

**Error:**
> No function matches the given name "TRANSLATE"


<br>

#### <a id="fail-unistr__txt__from_table-TDS"></a><a id="fail-unistr__txt__from_table-Relation"></a>`unistr__txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT UNISTR('\0041') AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT UNISTR('\0041') AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT UNISTR('\0041') AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> No function matches the given name "UNISTR"


<br>

#### <a id="fail-upper__anymultirange__unsupported_type-TDS"></a><a id="fail-upper__anymultirange__unsupported_type-Relation"></a>`upper__anymultirange__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT UPPER(int4multirange(int4range(1,5))) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT UPPER(int4multirange(int4range(1, 5))) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT UPPER(int4multirange(int4range(1, 5))) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4multirange"


<br>

#### <a id="fail-upper__anyrange__unsupported_type-TDS"></a><a id="fail-upper__anyrange__unsupported_type-Relation"></a>`upper__anyrange__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT UPPER(int4range(1,5)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT UPPER(int4range(1, 5)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT UPPER(int4range(1, 5)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "int4range"


<br>

#### <a id="fail-convert__bytea_name_name-TDS"></a><a id="fail-convert__bytea_name_name-Relation"></a>`convert__bytea_name_name`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CONVERT('Hello', 'UTF8', 'LATIN1') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CONVERT('Hello', 'UTF8', 'LATIN1') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CONVERT('Hello', 'UTF8', 'LATIN1') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "CONVERT"


<br>

#### <a id="fail-convert_from__bytea_name-TDS"></a><a id="fail-convert_from__bytea_name-Relation"></a>`convert_from__bytea_name`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CONVERT_FROM('Hello', 'UTF8') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CONVERT_FROM('Hello', 'UTF8') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CONVERT_FROM('Hello', 'UTF8') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "CONVERT_FROM"


<br>

#### <a id="fail-convert_to__txt_name-TDS"></a><a id="fail-convert_to__txt_name-Relation"></a>`convert_to__txt_name`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CONVERT_TO('Hello', 'UTF8') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CONVERT_TO('Hello', 'UTF8') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CONVERT_TO('Hello', 'UTF8') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "CONVERT_TO"


<br>

#### <a id="fail-get_byte__bytea_int-TDS"></a><a id="fail-get_byte__bytea_int-Relation"></a>`get_byte__bytea_int`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT GET_BYTE('AB', 0) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT GET_BYTE('AB', 0) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT GET_BYTE('AB', 0) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "GET_BYTE"


<br>

#### <a id="fail-set_byte__bytea_int_int-TDS"></a><a id="fail-set_byte__bytea_int_int-Relation"></a>`set_byte__bytea_int_int`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SET_BYTE('AB', 0, 67) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SET_BYTE('AB', 0, 67) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SET_BYTE('AB', 0, 67) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "SET_BYTE"


<br>

#### <a id="fail-sha224__bytea-TDS"></a><a id="fail-sha224__bytea-Relation"></a>`sha224__bytea`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SHA224('Hello') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SHA224('Hello') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SHA224('Hello') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "SHA224"


<br>

#### <a id="fail-sha384__bytea-TDS"></a><a id="fail-sha384__bytea-Relation"></a>`sha384__bytea`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SHA384('Hello') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SHA384('Hello') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SHA384('Hello') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "SHA384"


<br>

#### <a id="fail-sha512__bytea-TDS"></a><a id="fail-sha512__bytea-Relation"></a>`sha512__bytea`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SHA512('Hello') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SHA512('Hello') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SHA512('Hello') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "SHA512"


<br>

#### <a id="fail-to_date__txt_txt__from_table-TDS"></a><a id="fail-to_date__txt_txt__from_table-Relation"></a>`to_date__txt_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TO_DATE('2023-01-15', 'YYYY-MM-DD') AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT TO_DATE('2023-01-15', 'YYYY-MM-DD') AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT TO_DATE('2023-01-15', 'YYYY-MM-DD') AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No function matches the given name "TO_DATE"


<br>

#### <a id="fail-to_number__txt_txt__from_table-TDS"></a><a id="fail-to_number__txt_txt__from_table-Relation"></a>`to_number__txt_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TO_NUMBER('12,345.67', '99G999D99') AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT TO_NUMBER('12,345.67', '99G999D99') AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT TO_NUMBER('12,345.67', '99G999D99') AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> No function matches the given name "TO_NUMBER"


<br>

#### <a id="fail-age__tstz__from_table-TDS"></a><a id="fail-age__tstz__from_table-Relation"></a>`age__tstz__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT AGE(tsz::timestamptz) AS result FROM dates WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT AGE(tsz::timestamptz) AS result FROM func('e2e::tds_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT AGE(tsz::timestamptz) AS result FROM func('e2e::rel_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "AGE"


<br>

#### <a id="fail-age_timestamp_with_time_zone_cov-TDS"></a><a id="fail-age_timestamp_with_time_zone_cov-Relation"></a>`age_timestamp_with_time_zone_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT AGE(CAST('2023-01-01' AS TIMESTAMP)) IS NOT NULL AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT AGE(CAST('2023-01-01' AS TIMESTAMP)) IS NOT NULL AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT AGE(CAST('2023-01-01' AS TIMESTAMP)) IS NOT NULL AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "AGE"


<br>

#### <a id="fail-age__tstz_tstz__from_table-TDS"></a><a id="fail-age__tstz_tstz__from_table-Relation"></a>`age__tstz_tstz__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT AGE(tsz::timestamptz, '2000-01-01'::timestamptz) AS result FROM dates WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT AGE(tsz::timestamptz, '2000-01-01'::timestamptz) AS result FROM func('e2e::tds_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT AGE(tsz::timestamptz, '2000-01-01'::timestamptz) AS result FROM func('e2e::rel_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "AGE"


<br>

#### <a id="fail-age__ts__from_table-TDS"></a><a id="fail-age__ts__from_table-Relation"></a>`age__ts__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT AGE(ts) AS result FROM dates WHERE ts IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT AGE(ts) AS result FROM func('e2e::tds_dates') WHERE ts IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT AGE(ts) AS result FROM func('e2e::rel_dates') WHERE ts IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "AGE"


<br>

#### <a id="fail-age_timestamp_without_time_zone_cov-TDS"></a><a id="fail-age_timestamp_without_time_zone_cov-Relation"></a>`age_timestamp_without_time_zone_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT AGE(CAST('2023-01-01' AS TIMESTAMP)) IS NOT NULL AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT AGE(CAST('2023-01-01' AS TIMESTAMP)) IS NOT NULL AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT AGE(CAST('2023-01-01' AS TIMESTAMP)) IS NOT NULL AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "AGE"


<br>

#### <a id="fail-age__ts_ts__from_table-TDS"></a><a id="fail-age__ts_ts__from_table-Relation"></a>`age__ts_ts__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT AGE(ts, '2000-01-01'::timestamp) AS result FROM dates WHERE ts IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT AGE(ts, '2000-01-01'::timestamp) AS result FROM func('e2e::tds_dates') WHERE ts IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT AGE(ts, '2000-01-01'::timestamp) AS result FROM func('e2e::rel_dates') WHERE ts IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "AGE"


<br>

#### <a id="fail-age__xid__unsupported_type-TDS"></a><a id="fail-age__xid__unsupported_type-Relation"></a>`age__xid__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT AGE('100'::xid) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT AGE('100'::xid) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT AGE('100'::xid) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "AGE"


<br>

#### <a id="fail-age_xid_cov-TDS"></a><a id="fail-age_xid_cov-Relation"></a>`age_xid_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT AGE(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT AGE(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT AGE(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "AGE"


<br>

#### <a id="fail-clock_timestamp__basic-TDS"></a><a id="fail-clock_timestamp__basic-Relation"></a>`clock_timestamp__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CASE WHEN CLOCK_TIMESTAMP() > '2020-01-01'::timestamptz THEN 1 ELSE 0 END AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CASE WHEN CLOCK_TIMESTAMP() > '2020-01-01'::timestamptz THEN 1 ELSE 0 END AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CASE WHEN CLOCK_TIMESTAMP() > '2020-01-01'::timestamptz THEN 1 ELSE 0 END AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No function matches the given name "CLOCK_TIMESTAMP"


<br>

#### <a id="fail-clock_timestamp_cov-TDS"></a><a id="fail-clock_timestamp_cov-Relation"></a>`clock_timestamp_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CLOCK_TIMESTAMP() IS NOT NULL AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CLOCK_TIMESTAMP() IS NOT NULL AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CLOCK_TIMESTAMP() IS NOT NULL AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "CLOCK_TIMESTAMP"


<br>

#### <a id="fail-isfinite__date__from_table-TDS"></a><a id="fail-isfinite__date__from_table-Relation"></a>`isfinite__date__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ISFINITE(d) AS result FROM dates WHERE d IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT ISFINITE(d) AS result FROM func('e2e::tds_dates') WHERE d IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT ISFINITE(d) AS result FROM func('e2e::rel_dates') WHERE d IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "ISFINITE"


<br>

#### <a id="fail-isfinite__intv__from_table-TDS"></a><a id="fail-isfinite__intv__from_table-Relation"></a>`isfinite__intv__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ISFINITE(INTERVAL '1 day') AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ISFINITE(INTERVAL '1 day') AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ISFINITE(INTERVAL '1 day') AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No function matches the given name "ISFINITE"


<br>

#### <a id="fail-isfinite__tstz__from_table-TDS"></a><a id="fail-isfinite__tstz__from_table-Relation"></a>`isfinite__tstz__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ISFINITE(tsz::timestamptz) AS result FROM dates WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT ISFINITE(tsz::timestamptz) AS result FROM func('e2e::tds_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT ISFINITE(tsz::timestamptz) AS result FROM func('e2e::rel_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "ISFINITE"


<br>

#### <a id="fail-isfinite__ts__from_table-TDS"></a><a id="fail-isfinite__ts__from_table-Relation"></a>`isfinite__ts__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ISFINITE(ts) AS result FROM dates WHERE ts IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT ISFINITE(ts) AS result FROM func('e2e::tds_dates') WHERE ts IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT ISFINITE(ts) AS result FROM func('e2e::rel_dates') WHERE ts IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "ISFINITE"


<br>

#### <a id="fail-justify_days__intv__from_table-TDS"></a><a id="fail-justify_days__intv__from_table-Relation"></a>`justify_days__intv__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT JUSTIFY_DAYS(INTERVAL '35 days 25 hours') AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT JUSTIFY_DAYS(INTERVAL '35 days 25 hours') AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT JUSTIFY_DAYS(INTERVAL '35 days 25 hours') AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No function matches the given name "JUSTIFY_DAYS"


<br>

#### <a id="fail-justify_hours__intv__from_table-TDS"></a><a id="fail-justify_hours__intv__from_table-Relation"></a>`justify_hours__intv__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT JUSTIFY_HOURS(INTERVAL '35 days 25 hours') AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT JUSTIFY_HOURS(INTERVAL '35 days 25 hours') AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT JUSTIFY_HOURS(INTERVAL '35 days 25 hours') AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No function matches the given name "JUSTIFY_HOURS"


<br>

#### <a id="fail-justify_interval__intv__from_table-TDS"></a><a id="fail-justify_interval__intv__from_table-Relation"></a>`justify_interval__intv__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT JUSTIFY_INTERVAL(INTERVAL '35 days 25 hours') AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT JUSTIFY_INTERVAL(INTERVAL '35 days 25 hours') AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT JUSTIFY_INTERVAL(INTERVAL '35 days 25 hours') AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No function matches the given name "JUSTIFY_INTERVAL"


<br>

#### <a id="fail-make_time__int_int_dp__from_table-TDS"></a><a id="fail-make_time__int_int_dp__from_table-Relation"></a>`make_time__int_int_dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAKE_TIME(10, 30, 0.0) AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MAKE_TIME(10, 30, 0.0) AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MAKE_TIME(10, 30, 0.0) AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No function matches the given name "MAKE_TIME"


<br>

#### <a id="fail-make_timestamptz__int_int_t_int_int_dp__from_table-TDS"></a><a id="fail-make_timestamptz__int_int_t_int_int_dp__from_table-Relation"></a>`make_timestamptz__int_int_t_int_int_dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAKE_TIMESTAMPTZ(2023, 6, 15, 10, 30, 0.0) AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MAKE_TIMESTAMPTZ(2023, 6, 15, 10, 30, 0.0) AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MAKE_TIMESTAMPTZ(2023, 6, 15, 10, 30, 0.0) AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No function matches the given name "MAKE_TIMESTAMPTZ"


<br>

#### <a id="fail-make_timestamptz__int_int_t_int_int_dp_timezonetxt__from_table-TDS"></a><a id="fail-make_timestamptz__int_int_t_int_int_dp_timezonetxt__from_table-Relation"></a>`make_timestamptz__int_int_t_int_int_dp_timezonetxt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAKE_TIMESTAMPTZ(2023, 6, 15, 10, 30, 0.0, 'UTC') AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MAKE_TIMESTAMPTZ(2023, 6, 15, 10, 30, 0.0, 'UTC') AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MAKE_TIMESTAMPTZ(2023, 6, 15, 10, 30, 0.0, 'UTC') AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No function matches the given name "MAKE_TIMESTAMPTZ"


<br>

#### <a id="fail-now__basic-TDS"></a><a id="fail-now__basic-Relation"></a>`now__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CASE WHEN NOW() > '2020-01-01'::timestamptz THEN 1 ELSE 0 END AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CASE WHEN NOW() > '2020-01-01'::timestamptz THEN 1 ELSE 0 END AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CASE WHEN NOW() > '2020-01-01'::timestamptz THEN 1 ELSE 0 END AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No function matches the given name "NOW"


<br>

#### <a id="fail-now_cov-TDS"></a><a id="fail-now_cov-Relation"></a>`now_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT NOW() IS NOT NULL AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT NOW() IS NOT NULL AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT NOW() IS NOT NULL AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "NOW"


<br>

#### <a id="fail-statement_timestamp__basic-TDS"></a><a id="fail-statement_timestamp__basic-Relation"></a>`statement_timestamp__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CASE WHEN STATEMENT_TIMESTAMP() > '2020-01-01'::timestamptz THEN 1 ELSE 0 END AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CASE WHEN STATEMENT_TIMESTAMP() > '2020-01-01'::timestamptz THEN 1 ELSE 0 END AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CASE WHEN STATEMENT_TIMESTAMP() > '2020-01-01'::timestamptz THEN 1 ELSE 0 END AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No function matches the given name "STATEMENT_TIMESTAMP"


<br>

#### <a id="fail-statement_timestamp_cov-TDS"></a><a id="fail-statement_timestamp_cov-Relation"></a>`statement_timestamp_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT STATEMENT_TIMESTAMP() IS NOT NULL AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT STATEMENT_TIMESTAMP() IS NOT NULL AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT STATEMENT_TIMESTAMP() IS NOT NULL AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "STATEMENT_TIMESTAMP"


<br>

#### <a id="fail-timeofday__basic-TDS"></a><a id="fail-timeofday__basic-Relation"></a>`timeofday__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CASE WHEN LENGTH(TIMEOFDAY()) > 0 THEN 1 ELSE 0 END AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CASE WHEN LENGTH(TIMEOFDAY()) > 0 THEN 1 ELSE 0 END AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CASE WHEN LENGTH(TIMEOFDAY()) > 0 THEN 1 ELSE 0 END AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No function matches the given name "TIMEOFDAY"


<br>

#### <a id="fail-timeofday_cov-TDS"></a><a id="fail-timeofday_cov-Relation"></a>`timeofday_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TIMEOFDAY() IS NOT NULL AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT TIMEOFDAY() IS NOT NULL AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT TIMEOFDAY() IS NOT NULL AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "TIMEOFDAY"


<br>

#### <a id="fail-to_timestamp__dp__from_table-TDS"></a><a id="fail-to_timestamp__dp__from_table-Relation"></a>`to_timestamp__dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TO_TIMESTAMP(0) AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT TO_TIMESTAMP(0) AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT TO_TIMESTAMP(0) AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No function matches the given name "TO_TIMESTAMP"


<br>

#### <a id="fail-to_timestamp__txt_txt__no_generator-TDS"></a><a id="fail-to_timestamp__txt_txt__no_generator-Relation"></a>`to_timestamp__txt_txt__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TO_TIMESTAMP('2024-01-15', 'YYYY-MM-DD') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT TO_TIMESTAMP('2024-01-15', 'YYYY-MM-DD') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT TO_TIMESTAMP('2024-01-15', 'YYYY-MM-DD') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "TO_TIMESTAMP"


<br>

#### <a id="fail-to_timestamp_text_text_cov-TDS"></a><a id="fail-to_timestamp_text_text_cov-Relation"></a>`to_timestamp_text_text_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TO_TIMESTAMP('2023-01-15', 'YYYY-MM-DD') IS NOT NULL AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT TO_TIMESTAMP('2023-01-15', 'YYYY-MM-DD') IS NOT NULL AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT TO_TIMESTAMP('2023-01-15', 'YYYY-MM-DD') IS NOT NULL AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "TO_TIMESTAMP"


<br>

#### <a id="fail-transaction_timestamp__basic-TDS"></a><a id="fail-transaction_timestamp__basic-Relation"></a>`transaction_timestamp__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CASE WHEN TRANSACTION_TIMESTAMP() > '2020-01-01'::timestamptz THEN 1 ELSE 0 END AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CASE WHEN TRANSACTION_TIMESTAMP() > '2020-01-01'::timestamptz THEN 1 ELSE 0 END AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CASE WHEN TRANSACTION_TIMESTAMP() > '2020-01-01'::timestamptz THEN 1 ELSE 0 END AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No function matches the given name "TRANSACTION_TIMESTAMP"


<br>

#### <a id="fail-transaction_timestamp_cov-TDS"></a><a id="fail-transaction_timestamp_cov-Relation"></a>`transaction_timestamp_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TRANSACTION_TIMESTAMP() IS NOT NULL AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT TRANSACTION_TIMESTAMP() IS NOT NULL AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT TRANSACTION_TIMESTAMP() IS NOT NULL AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "TRANSACTION_TIMESTAMP"


<br>

#### <a id="fail-num_nonnulls__variadic__from_table-TDS"></a><a id="fail-num_nonnulls__variadic__from_table-Relation"></a>`num_nonnulls__variadic__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT NUM_NONNULLS(int_val, float_val, numeric_val) AS result FROM numbers ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT NUM_NONNULLS(int_val, float_val, numeric_val) AS result FROM func('e2e::tds_numbers') ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT NUM_NONNULLS(int_val, float_val, numeric_val) AS result FROM func('e2e::rel_numbers') ORDER BY 1
```

**Error:**
> No function matches the given name "NUM_NONNULLS"


<br>

#### <a id="fail-num_nulls__variadic__from_table-TDS"></a><a id="fail-num_nulls__variadic__from_table-Relation"></a>`num_nulls__variadic__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT NUM_NULLS(int_val, float_val, numeric_val) AS result FROM numbers ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT NUM_NULLS(int_val, float_val, numeric_val) AS result FROM func('e2e::tds_numbers') ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT NUM_NULLS(int_val, float_val, numeric_val) AS result FROM func('e2e::rel_numbers') ORDER BY 1
```

**Error:**
> No function matches the given name "NUM_NULLS"


<br>

#### <a id="fail-nullif__varchar__equal-TDS"></a><a id="fail-nullif__varchar__equal-Relation"></a>`nullif__varchar__equal`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT NULLIF(name, 'Alice') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT NULLIF(name, 'Alice') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT NULLIF(name, 'Alice') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "NULLIF"


<br>

#### <a id="fail-nullif__varchar__not_equal-TDS"></a><a id="fail-nullif__varchar__not_equal-Relation"></a>`nullif__varchar__not_equal`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT NULLIF(name, 'Nobody') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT NULLIF(name, 'Nobody') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT NULLIF(name, 'Nobody') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "NULLIF"


<br>

#### <a id="fail-nullif__int__equal-TDS"></a><a id="fail-nullif__int__equal-Relation"></a>`nullif__int__equal`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT NULLIF(int_val, 42) AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT NULLIF(int_val, 42) AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT NULLIF(int_val, 42) AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> No function matches the given name "NULLIF"


<br>

#### <a id="fail-nullif__int__not_equal-TDS"></a><a id="fail-nullif__int__not_equal-Relation"></a>`nullif__int__not_equal`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT NULLIF(int_val, 999) AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT NULLIF(int_val, 999) AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT NULLIF(int_val, 999) AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> No function matches the given name "NULLIF"


<br>

#### <a id="fail-array_to_json__unsupported_type-TDS"></a><a id="fail-array_to_json__unsupported_type-Relation"></a>`array_to_json__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_TO_JSON(ARRAY[1, 2, 3]) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_TO_JSON(ARRAY[1, 2, 3]) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_TO_JSON(ARRAY[1, 2, 3]) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_TO_JSON"


<br>

#### <a id="fail-array_to_json__bool__unsupported_type-TDS"></a><a id="fail-array_to_json__bool__unsupported_type-Relation"></a>`array_to_json__bool__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_TO_JSON(ARRAY[1, 2, 3], true) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_TO_JSON(ARRAY[1, 2, 3], true) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_TO_JSON(ARRAY[1, 2, 3], true) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_TO_JSON"


<br>

#### <a id="fail-json_array_elements__from_column-Relation"></a>`json_array_elements__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSON_ARRAY_ELEMENTS(json_arr) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_ARRAY_ELEMENTS(json_arr) AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSON_ARRAY_ELEMENTS"


<br>

#### <a id="fail-json_array_elements_text__from_column-Relation"></a>`json_array_elements_text__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSON_ARRAY_ELEMENTS_TEXT(json_arr) AS result FROM json_data WHERE id = 3
```

**Legend SQL:**
```sql
SELECT JSON_ARRAY_ELEMENTS_TEXT(json_arr) AS result FROM func('e2e::rel_json_data') WHERE id = 3
```

**Error:**
> No function matches the given name "JSON_ARRAY_ELEMENTS_TEXT"


<br>

#### <a id="fail-json_array_length__from_column-Relation"></a>`json_array_length__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSON_ARRAY_LENGTH(json_arr) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_ARRAY_LENGTH(json_arr) AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSON_ARRAY_LENGTH"


<br>

#### <a id="fail-json_array_length__null-Relation"></a>`json_array_length__null`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSON_ARRAY_LENGTH(json_arr) AS result FROM json_data WHERE id = 5
```

**Legend SQL:**
```sql
SELECT JSON_ARRAY_LENGTH(json_arr) AS result FROM func('e2e::rel_json_data') WHERE id = 5
```

**Error:**
> No function matches the given name "JSON_ARRAY_LENGTH"


<br>

#### <a id="fail-json_each__from_column-TDS"></a><a id="fail-json_each__from_column-Relation"></a>`json_each__from_column`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT key, value FROM JSON_EACH((SELECT json_val FROM json_data WHERE id = 1)) ORDER BY key
```

**Legend SQL (TDS):**
```sql
SELECT key, value FROM JSON_EACH((SELECT json_val FROM func('e2e::tds_json_data') WHERE id = 1)) ORDER BY key
```

**Legend SQL (Relation):**
```sql
SELECT key, value FROM JSON_EACH((SELECT json_val FROM func('e2e::rel_json_data') WHERE id = 1)) ORDER BY key
```

**Error:**
> No function matches the given name "JSON_EACH"


<br>

#### <a id="fail-json_each_text__from_column-TDS"></a><a id="fail-json_each_text__from_column-Relation"></a>`json_each_text__from_column`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT key, value FROM JSON_EACH_TEXT((SELECT json_val FROM json_data WHERE id = 1)) ORDER BY key
```

**Legend SQL (TDS):**
```sql
SELECT key, value FROM JSON_EACH_TEXT((SELECT json_val FROM func('e2e::tds_json_data') WHERE id = 1)) ORDER BY key
```

**Legend SQL (Relation):**
```sql
SELECT key, value FROM JSON_EACH_TEXT((SELECT json_val FROM func('e2e::rel_json_data') WHERE id = 1)) ORDER BY key
```

**Error:**
> No function matches the given name "JSON_EACH_TEXT"


<br>

#### <a id="fail-json_object__text_array-Relation"></a>`json_object__text_array`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSON_OBJECT(ARRAY['a', '1', 'b', '2']) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_OBJECT(ARRAY['a', '1', 'b', '2']) AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSON_OBJECT"


<br>

#### <a id="fail-json_object__keys_values-Relation"></a>`json_object__keys_values`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSON_OBJECT(ARRAY['a','b'], ARRAY['1','2']) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_OBJECT(ARRAY['a', 'b'], ARRAY['1', '2']) AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSON_OBJECT"


<br>

#### <a id="fail-json_object_keys__from_column-Relation"></a>`json_object_keys__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSON_OBJECT_KEYS(json_val) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_OBJECT_KEYS(json_val) AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSON_OBJECT_KEYS"


<br>

#### <a id="fail-json_strip_nulls__from_column-Relation"></a>`json_strip_nulls__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSON_STRIP_NULLS(json_val) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_STRIP_NULLS(json_val) AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSON_STRIP_NULLS"


<br>

#### <a id="fail-json_typeof__from_column-Relation"></a>`json_typeof__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSON_TYPEOF(json_val) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_TYPEOF(json_val) AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSON_TYPEOF"


<br>

#### <a id="fail-json_typeof__array_column-Relation"></a>`json_typeof__array_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSON_TYPEOF(json_arr) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_TYPEOF(json_arr) AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSON_TYPEOF"


<br>

#### <a id="fail-jsonb_array_elements__from_column-Relation"></a>`jsonb_array_elements__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_ARRAY_ELEMENTS(jsonb_arr) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_ARRAY_ELEMENTS(jsonb_arr) AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_ARRAY_ELEMENTS"


<br>

#### <a id="fail-jsonb_array_elements_text__from_column-Relation"></a>`jsonb_array_elements_text__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_ARRAY_ELEMENTS_TEXT(jsonb_arr) AS result FROM json_data WHERE id = 3
```

**Legend SQL:**
```sql
SELECT JSONB_ARRAY_ELEMENTS_TEXT(jsonb_arr) AS result FROM func('e2e::rel_json_data') WHERE id = 3
```

**Error:**
> No function matches the given name "JSONB_ARRAY_ELEMENTS_TEXT"


<br>

#### <a id="fail-jsonb_array_length__from_column-Relation"></a>`jsonb_array_length__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_ARRAY_LENGTH(jsonb_arr) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_ARRAY_LENGTH(jsonb_arr) AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_ARRAY_LENGTH"


<br>

#### <a id="fail-jsonb_array_length__null-Relation"></a>`jsonb_array_length__null`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_ARRAY_LENGTH(jsonb_arr) AS result FROM json_data WHERE id = 5
```

**Legend SQL:**
```sql
SELECT JSONB_ARRAY_LENGTH(jsonb_arr) AS result FROM func('e2e::rel_json_data') WHERE id = 5
```

**Error:**
> No function matches the given name "JSONB_ARRAY_LENGTH"


<br>

#### <a id="fail-jsonb_build_array__empty-Relation"></a>`jsonb_build_array__empty`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_BUILD_ARRAY() AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_BUILD_ARRAY() AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_BUILD_ARRAY"


<br>

#### <a id="fail-jsonb_build_array__variadic__from_column-Relation"></a>`jsonb_build_array__variadic__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_BUILD_ARRAY(id, jsonb_val ->> 'b') AS result FROM json_data WHERE id <= 3 ORDER BY id
```

**Legend SQL:**
```sql
SELECT JSONB_BUILD_ARRAY(id, jsonb_val ->> 'b') AS result FROM func('e2e::rel_json_data') WHERE id <= 3 ORDER BY id
```

**Error:**
> No function matches the given name "JSONB_BUILD_ARRAY"


<br>

#### <a id="fail-jsonb_build_object__empty-Relation"></a>`jsonb_build_object__empty`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_BUILD_OBJECT() AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_BUILD_OBJECT() AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_BUILD_OBJECT"


<br>

#### <a id="fail-jsonb_build_object__variadic__from_column-Relation"></a>`jsonb_build_object__variadic__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_BUILD_OBJECT('id', id, 'val', jsonb_val ->> 'b') AS result FROM json_data WHERE id <= 3 ORDER BY id
```

**Legend SQL:**
```sql
SELECT JSONB_BUILD_OBJECT('id', id, 'val', jsonb_val ->> 'b') AS result FROM func('e2e::rel_json_data') WHERE id <= 3 ORDER BY id
```

**Error:**
> No function matches the given name "JSONB_BUILD_OBJECT"


<br>

#### <a id="fail-jsonb_each__from_column-TDS"></a><a id="fail-jsonb_each__from_column-Relation"></a>`jsonb_each__from_column`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT key, value FROM JSONB_EACH((SELECT jsonb_val FROM json_data WHERE id = 1)) ORDER BY key
```

**Legend SQL (TDS):**
```sql
SELECT key, value FROM JSONB_EACH((SELECT jsonb_val FROM func('e2e::tds_json_data') WHERE id = 1)) ORDER BY key
```

**Legend SQL (Relation):**
```sql
SELECT key, value FROM JSONB_EACH((SELECT jsonb_val FROM func('e2e::rel_json_data') WHERE id = 1)) ORDER BY key
```

**Error:**
> No function matches the given name "JSONB_EACH"


<br>

#### <a id="fail-jsonb_each_text__from_column-TDS"></a><a id="fail-jsonb_each_text__from_column-Relation"></a>`jsonb_each_text__from_column`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT key, value FROM JSONB_EACH_TEXT((SELECT jsonb_val FROM json_data WHERE id = 1)) ORDER BY key
```

**Legend SQL (TDS):**
```sql
SELECT key, value FROM JSONB_EACH_TEXT((SELECT jsonb_val FROM func('e2e::tds_json_data') WHERE id = 1)) ORDER BY key
```

**Legend SQL (Relation):**
```sql
SELECT key, value FROM JSONB_EACH_TEXT((SELECT jsonb_val FROM func('e2e::rel_json_data') WHERE id = 1)) ORDER BY key
```

**Error:**
> No function matches the given name "JSONB_EACH_TEXT"


<br>

#### <a id="fail-jsonb_extract_path__from_column-Relation"></a>`jsonb_extract_path__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_EXTRACT_PATH(jsonb_val, 'a', 'b', 'c') AS result FROM json_data WHERE id = 2
```

**Legend SQL:**
```sql
SELECT JSONB_EXTRACT_PATH(jsonb_val, 'a', 'b', 'c') AS result FROM func('e2e::rel_json_data') WHERE id = 2
```

**Error:**
> No function matches the given name "JSONB_EXTRACT_PATH"


<br>

#### <a id="fail-jsonb_extract_path_text__from_column-Relation"></a>`jsonb_extract_path_text__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_EXTRACT_PATH_TEXT(jsonb_val, 'a', 'b', 'c') AS result FROM json_data WHERE id = 2
```

**Legend SQL:**
```sql
SELECT JSONB_EXTRACT_PATH_TEXT(jsonb_val, 'a', 'b', 'c') AS result FROM func('e2e::rel_json_data') WHERE id = 2
```

**Error:**
> No function matches the given name "JSONB_EXTRACT_PATH_TEXT"


<br>

#### <a id="fail-jsonb_insert__from_column-Relation"></a>`jsonb_insert__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_INSERT(jsonb_val, '{d}', '"inserted"') AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_INSERT(jsonb_val, '{d}', '"inserted"') AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_INSERT"


<br>

#### <a id="fail-jsonb_insert__after_true-Relation"></a>`jsonb_insert__after_true`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_INSERT(jsonb_arr, '{1}', '99', true) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_INSERT(jsonb_arr, '{1}', '99', true) AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_INSERT"


<br>

#### <a id="fail-jsonb_object__text_array-Relation"></a>`jsonb_object__text_array`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_OBJECT(ARRAY['a', '1', 'b', '2']) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_OBJECT(ARRAY['a', '1', 'b', '2']) AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_OBJECT"


<br>

#### <a id="fail-jsonb_object__keys_values-Relation"></a>`jsonb_object__keys_values`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_OBJECT(ARRAY['a','b'], ARRAY['1','2']) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_OBJECT(ARRAY['a', 'b'], ARRAY['1', '2']) AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_OBJECT"


<br>

#### <a id="fail-jsonb_object_keys__from_column-Relation"></a>`jsonb_object_keys__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_OBJECT_KEYS(jsonb_val) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_OBJECT_KEYS(jsonb_val) AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_OBJECT_KEYS"


<br>

#### <a id="fail-jsonb_path_exists__from_column-Relation"></a>`jsonb_path_exists__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_PATH_EXISTS(jsonb_val, '$.a') AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_PATH_EXISTS(jsonb_val, '$.a') AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_PATH_EXISTS"


<br>

#### <a id="fail-jsonb_path_exists__with_vars-Relation"></a>`jsonb_path_exists__with_vars`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_PATH_EXISTS(jsonb_val, '$.a ? (@ > $x)', '{"x":0}') AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_PATH_EXISTS(jsonb_val, '$.a ? (@ > $x)', '{"x":0}') AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_PATH_EXISTS"


<br>

#### <a id="fail-jsonb_path_match__from_column-Relation"></a>`jsonb_path_match__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_PATH_MATCH(jsonb_val, '$.a == 1') AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_PATH_MATCH(jsonb_val, '$.a == 1') AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_PATH_MATCH"


<br>

#### <a id="fail-jsonb_path_query__from_column-Relation"></a>`jsonb_path_query__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_PATH_QUERY(jsonb_val, '$.a') AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_PATH_QUERY(jsonb_val, '$.a') AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_PATH_QUERY"


<br>

#### <a id="fail-jsonb_path_query_array__from_column-Relation"></a>`jsonb_path_query_array__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_PATH_QUERY_ARRAY(jsonb_arr, '$[*]') AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_PATH_QUERY_ARRAY(jsonb_arr, '$[*]') AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_PATH_QUERY_ARRAY"


<br>

#### <a id="fail-jsonb_pretty__from_column-Relation"></a>`jsonb_pretty__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_PRETTY(jsonb_val) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_PRETTY(jsonb_val) AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_PRETTY"


<br>

#### <a id="fail-jsonb_set__from_column-Relation"></a>`jsonb_set__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_SET(jsonb_val, '{a}', '99') AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_SET(jsonb_val, '{a}', '99') AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_SET"


<br>

#### <a id="fail-jsonb_set__create_missing_false-Relation"></a>`jsonb_set__create_missing_false`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_SET(jsonb_val, '{z}', '"new"', false) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_SET(jsonb_val, '{z}', '"new"', false) AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_SET"


<br>

#### <a id="fail-jsonb_strip_nulls__from_column-Relation"></a>`jsonb_strip_nulls__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_STRIP_NULLS(jsonb_val) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_STRIP_NULLS(jsonb_val) AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_STRIP_NULLS"


<br>

#### <a id="fail-jsonb_typeof__from_column-Relation"></a>`jsonb_typeof__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_TYPEOF(jsonb_val) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_TYPEOF(jsonb_val) AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_TYPEOF"


<br>

#### <a id="fail-row_to_json__unsupported_type-TDS"></a><a id="fail-row_to_json__unsupported_type-Relation"></a>`row_to_json__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ROW_TO_JSON(persons) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ROW_TO_JSON(persons) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ROW_TO_JSON(persons) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "ROW_TO_JSON"


<br>

#### <a id="fail-row_to_json__bool__unsupported_type-TDS"></a><a id="fail-row_to_json__bool__unsupported_type-Relation"></a>`row_to_json__bool__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ROW_TO_JSON(persons, true) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ROW_TO_JSON(persons, true) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ROW_TO_JSON(persons, true) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "ROW_TO_JSON"


<br>

#### <a id="fail-to_json__from_column-TDS"></a><a id="fail-to_json__from_column-Relation"></a>`to_json__from_column`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TO_JSON(val) AS result FROM strings WHERE val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT TO_JSON(val) AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT TO_JSON(val) AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "TO_JSON"


<br>

#### <a id="fail-to_jsonb__from_column-TDS"></a><a id="fail-to_jsonb__from_column-Relation"></a>`to_jsonb__from_column`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TO_JSONB(val) AS result FROM strings WHERE val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT TO_JSONB(val) AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT TO_JSONB(val) AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL ORDER BY 1
```

**Error:**
> No function matches the given name "TO_JSONB"


<br>

#### <a id="fail-jsonb_object_agg__from_column-Relation"></a>`jsonb_object_agg__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_OBJECT_AGG(id, jsonb_val ->> 'b') AS result FROM json_data WHERE jsonb_val IS NOT NULL
```

**Legend SQL:**
```sql
SELECT JSONB_OBJECT_AGG(id, jsonb_val ->> 'b') AS result FROM func('e2e::rel_json_data') WHERE jsonb_val IS NOT NULL
```

**Error:**
> No function matches the given name "JSONB_OBJECT_AGG"


<br>

#### <a id="fail-json_object_agg__from_column-Relation"></a>`json_object_agg__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSON_OBJECT_AGG(id, json_val ->> 'b') AS result FROM json_data WHERE json_val IS NOT NULL
```

**Legend SQL:**
```sql
SELECT JSON_OBJECT_AGG(id, json_val ->> 'b') AS result FROM func('e2e::rel_json_data') WHERE json_val IS NOT NULL
```

**Error:**
> No function matches the given name "JSON_OBJECT_AGG"


<br>

#### <a id="fail-array_append__anycompatiblearray_anycompatible__from_table-TDS"></a><a id="fail-array_append__anycompatiblearray_anycompatible__from_table-Relation"></a>`array_append__anycompatiblearray_anycompatible__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_APPEND(ARRAY[1,2,3], int_val) AS result FROM numbers WHERE int_val IS NOT NULL AND id <= 3 ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_APPEND(ARRAY[1, 2, 3], int_val) AS result FROM func('e2e::tds_numbers') WHERE int_val IS NOT NULL AND id <= 3 ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_APPEND(ARRAY[1, 2, 3], int_val) AS result FROM func('e2e::rel_numbers') WHERE int_val IS NOT NULL AND id <= 3 ORDER BY 1
```

**Error:**
> No function matches the given name "ARRAY_APPEND"


<br>

#### <a id="fail-array_cat__anycompatiblearray_anycompatiblearray__from_table-TDS"></a><a id="fail-array_cat__anycompatiblearray_anycompatiblearray__from_table-Relation"></a>`array_cat__anycompatiblearray_anycompatiblearray__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_CAT(ARRAY[1,2], ARRAY[3,4]) AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_CAT(ARRAY[1, 2], ARRAY[3, 4]) AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_CAT(ARRAY[1, 2], ARRAY[3, 4]) AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_CAT"


<br>

#### <a id="fail-array_dims__anyarray__from_table-TDS"></a><a id="fail-array_dims__anyarray__from_table-Relation"></a>`array_dims__anyarray__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_DIMS(ARRAY[[1,2],[3,4]]) AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_DIMS(ARRAY[[1, 2], [3, 4]]) AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_DIMS(ARRAY[[1, 2], [3, 4]]) AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_DIMS"


<br>

#### <a id="fail-array_fill__anyelement_int[]__from_table-TDS"></a><a id="fail-array_fill__anyelement_int[]__from_table-Relation"></a>`array_fill__anyelement_int[]__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_FILL(0, ARRAY[3]) AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_FILL(0, ARRAY[3]) AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_FILL(0, ARRAY[3]) AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_FILL"


<br>

#### <a id="fail-array_fill__anyelement_int[]_int[]__from_table-TDS"></a><a id="fail-array_fill__anyelement_int[]_int[]__from_table-Relation"></a>`array_fill__anyelement_int[]_int[]__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_FILL(0, ARRAY[3]) AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_FILL(0, ARRAY[3]) AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_FILL(0, ARRAY[3]) AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_FILL"


<br>

#### <a id="fail-array_lower__anyarray_int__from_table-TDS"></a><a id="fail-array_lower__anyarray_int__from_table-Relation"></a>`array_lower__anyarray_int__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_LOWER(ARRAY[10,20,30], 1) AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_LOWER(ARRAY[10, 20, 30], 1) AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_LOWER(ARRAY[10, 20, 30], 1) AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_LOWER"


<br>

#### <a id="fail-array_ndims__anyarray__from_table-TDS"></a><a id="fail-array_ndims__anyarray__from_table-Relation"></a>`array_ndims__anyarray__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_NDIMS(ARRAY[[1,2],[3,4]]) AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_NDIMS(ARRAY[[1, 2], [3, 4]]) AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_NDIMS(ARRAY[[1, 2], [3, 4]]) AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_NDIMS"


<br>

#### <a id="fail-array_positions__anycompatiblearray_anycompatible__from_table-TDS"></a><a id="fail-array_positions__anycompatiblearray_anycompatible__from_table-Relation"></a>`array_positions__anycompatiblearray_anycompatible__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_POSITIONS(ARRAY[1,2,3,2,1], 2) AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_POSITIONS(ARRAY[1, 2, 3, 2, 1], 2) AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_POSITIONS(ARRAY[1, 2, 3, 2, 1], 2) AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_POSITIONS"


<br>

#### <a id="fail-array_prepend__anycompatible_anycompatiblearray__from_table-TDS"></a><a id="fail-array_prepend__anycompatible_anycompatiblearray__from_table-Relation"></a>`array_prepend__anycompatible_anycompatiblearray__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_PREPEND(0, ARRAY[1,2,3]) AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_PREPEND(0, ARRAY[1, 2, 3]) AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_PREPEND(0, ARRAY[1, 2, 3]) AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_PREPEND"


<br>

#### <a id="fail-array_remove__anycompatiblearray_anycompatible__from_table-TDS"></a><a id="fail-array_remove__anycompatiblearray_anycompatible__from_table-Relation"></a>`array_remove__anycompatiblearray_anycompatible__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_REMOVE(ARRAY[1,2,3,2], 2) AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_REMOVE(ARRAY[1, 2, 3, 2], 2) AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_REMOVE(ARRAY[1, 2, 3, 2], 2) AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_REMOVE"


<br>

#### <a id="fail-array_replace__anycompatiblearray_anycompatible_anycompatible__from_table-TDS"></a><a id="fail-array_replace__anycompatiblearray_anycompatible_anycompatible__from_table-Relation"></a>`array_replace__anycompatiblearray_anycompatible_anycompatible__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_REPLACE(ARRAY[1,2,3,2], 2, 99) AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_REPLACE(ARRAY[1, 2, 3, 2], 2, 99) AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_REPLACE(ARRAY[1, 2, 3, 2], 2, 99) AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_REPLACE"


<br>

#### <a id="fail-array_sample__anyarray_int__from_table-TDS"></a><a id="fail-array_sample__anyarray_int__from_table-Relation"></a>`array_sample__anyarray_int__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_LENGTH(ARRAY_SAMPLE(ARRAY[1,2,3,4,5], 3), 1) AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_LENGTH(ARRAY_SAMPLE(ARRAY[1, 2, 3, 4, 5], 3), 1) AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_LENGTH(ARRAY_SAMPLE(ARRAY[1, 2, 3, 4, 5], 3), 1) AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_SAMPLE"


<br>

#### <a id="fail-array_sample_anyarray_integer_cov-TDS"></a><a id="fail-array_sample_anyarray_integer_cov-Relation"></a>`array_sample_anyarray_integer_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_SAMPLE(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_SAMPLE(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_SAMPLE(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_SAMPLE"


<br>

#### <a id="fail-array_shuffle__anyarray__from_table-TDS"></a><a id="fail-array_shuffle__anyarray__from_table-Relation"></a>`array_shuffle__anyarray__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_LENGTH(ARRAY_SHUFFLE(ARRAY[1,2,3,4,5], 3), 1) AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_LENGTH(ARRAY_SHUFFLE(ARRAY[1, 2, 3, 4, 5], 3), 1) AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_LENGTH(ARRAY_SHUFFLE(ARRAY[1, 2, 3, 4, 5], 3), 1) AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_SHUFFLE"


<br>

#### <a id="fail-array_shuffle_anyarray_cov-TDS"></a><a id="fail-array_shuffle_anyarray_cov-Relation"></a>`array_shuffle_anyarray_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_SHUFFLE(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_SHUFFLE(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_SHUFFLE(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_SHUFFLE"


<br>

#### <a id="fail-array_upper__anyarray_int__from_table-TDS"></a><a id="fail-array_upper__anyarray_int__from_table-Relation"></a>`array_upper__anyarray_int__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_UPPER(ARRAY[10,20,30], 1) AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_UPPER(ARRAY[10, 20, 30], 1) AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_UPPER(ARRAY[10, 20, 30], 1) AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_UPPER"


<br>

#### <a id="fail-cardinality__anyarray__from_table-TDS"></a><a id="fail-cardinality__anyarray__from_table-Relation"></a>`cardinality__anyarray__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CARDINALITY(ARRAY[1,2,3]) AS result FROM numbers WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CARDINALITY(ARRAY[1, 2, 3]) AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CARDINALITY(ARRAY[1, 2, 3]) AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> No function matches the given name "CARDINALITY"


<br>

#### <a id="fail-unnest__anyarray__from_table-TDS"></a><a id="fail-unnest__anyarray__from_table-Relation"></a>`unnest__anyarray__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT UNNEST(ARRAY[1,2,3]) AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT UNNEST(ARRAY[1, 2, 3]) AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT UNNEST(ARRAY[1, 2, 3]) AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> No function matches the given name "UNNEST"


<br>

#### <a id="fail-unnest_anyarray_cov-TDS"></a><a id="fail-unnest_anyarray_cov-Relation"></a>`unnest_anyarray_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT UNNEST(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT UNNEST(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT UNNEST(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "UNNEST"


<br>

#### <a id="fail-unnest__anymultirange__unsupported_type-TDS"></a><a id="fail-unnest__anymultirange__unsupported_type-Relation"></a>`unnest__anymultirange__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT UNNEST(int4multirange(int4range(1,5))) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT UNNEST(int4multirange(int4range(1, 5))) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT UNNEST(int4multirange(int4range(1, 5))) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "UNNEST"


<br>

#### <a id="fail-unnest_anymultirange_cov-TDS"></a><a id="fail-unnest_anymultirange_cov-Relation"></a>`unnest_anymultirange_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT UNNEST(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT UNNEST(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT UNNEST(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "UNNEST"


<br>

#### <a id="fail-unnest__tsvectortsvector_OUTlexemetxt_OUTpositionssmall[]_OUTweightstxt[]__unsupported_type-TDS"></a><a id="fail-unnest__tsvectortsvector_OUTlexemetxt_OUTpositionssmall[]_OUTweightstxt[]__unsupported_type-Relation"></a>`unnest__tsvectortsvector_OUTlexemetxt_OUTpositionssmall[]_OUTweightstxt[]__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT UNNEST(to_tsvector('english', 'the quick brown fox')) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT UNNEST(to_tsvector('english', 'the quick brown fox')) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT UNNEST(to_tsvector('english', 'the quick brown fox')) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "UNNEST"


<br>

#### <a id="fail-unnest_tsvector_tsvector_OUT_lexeme_cov-TDS"></a><a id="fail-unnest_tsvector_tsvector_OUT_lexeme_cov-Relation"></a>`unnest_tsvector_tsvector_OUT_lexeme_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT UNNEST(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT UNNEST(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT UNNEST(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "UNNEST"


<br>

#### <a id="fail-any_value__anyelement__from_table-TDS"></a><a id="fail-any_value__anyelement__from_table-Relation"></a>`any_value__anyelement__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ANY_VALUE(name) AS result FROM persons WHERE dept_id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ANY_VALUE(name) AS result FROM func('e2e::tds_persons') WHERE dept_id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ANY_VALUE(name) AS result FROM func('e2e::rel_persons') WHERE dept_id = 1
```

**Error:**
> No function matches the given name "ANY_VALUE"


<br>

#### <a id="fail-array_agg__anyarray__no_generator-TDS"></a><a id="fail-array_agg__anyarray__no_generator-Relation"></a>`array_agg__anyarray__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_AGG(ARRAY[id]) AS result FROM persons WHERE id IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_AGG(ARRAY[id]) AS result FROM func('e2e::tds_persons') WHERE id IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_AGG(ARRAY[id]) AS result FROM func('e2e::rel_persons') WHERE id IS NOT NULL
```

**Error:**
> No function matches the given name "ARRAY_AGG"


<br>

#### <a id="fail-array_agg_anyarray_cov-TDS"></a><a id="fail-array_agg_anyarray_cov-Relation"></a>`array_agg_anyarray_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_AGG(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_AGG(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_AGG(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "ARRAY_AGG"


<br>

#### <a id="fail-array_agg__anynonarray__from_table-TDS"></a><a id="fail-array_agg__anynonarray__from_table-Relation"></a>`array_agg__anynonarray__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ARRAY_AGG(name ORDER BY name) AS result FROM persons WHERE name IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT ARRAY_AGG(name ORDER BY name) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT ARRAY_AGG(name ORDER BY name) AS result FROM func('e2e::rel_persons') WHERE name IS NOT NULL
```

**Error:**
> No function matches the given name "ARRAY_AGG"


<br>

#### <a id="fail-bit_and__big__from_table-TDS"></a><a id="fail-bit_and__big__from_table-Relation"></a>`bit_and__big__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_AND(big_val) AS result FROM numbers WHERE big_val IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT BIT_AND(big_val) AS result FROM func('e2e::tds_numbers') WHERE big_val IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT BIT_AND(big_val) AS result FROM func('e2e::rel_numbers') WHERE big_val IS NOT NULL
```

**Error:**
> No function matches the given name "BIT_AND"


<br>

#### <a id="fail-bit_and__bit__no_generator-TDS"></a><a id="fail-bit_and__bit__no_generator-Relation"></a>`bit_and__bit__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_AND(int_val::bit(32)) AS result FROM numbers WHERE int_val IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT BIT_AND(int_val::bit(32)) AS result FROM func('e2e::tds_numbers') WHERE int_val IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT BIT_AND(int_val::bit(32)) AS result FROM func('e2e::rel_numbers') WHERE int_val IS NOT NULL
```

**Error:**
> No function matches the given name "BIT_AND"


<br>

#### <a id="fail-bit_and_bit_cov-TDS"></a><a id="fail-bit_and_bit_cov-Relation"></a>`bit_and_bit_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_AND(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT BIT_AND(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT BIT_AND(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "BIT_AND"


<br>

#### <a id="fail-bit_and__int__from_table-TDS"></a><a id="fail-bit_and__int__from_table-Relation"></a>`bit_and__int__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_AND(int_val) AS result FROM numbers WHERE int_val IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT BIT_AND(int_val) AS result FROM func('e2e::tds_numbers') WHERE int_val IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT BIT_AND(int_val) AS result FROM func('e2e::rel_numbers') WHERE int_val IS NOT NULL
```

**Error:**
> No function matches the given name "BIT_AND"


<br>

#### <a id="fail-bit_and__small__from_table-TDS"></a><a id="fail-bit_and__small__from_table-Relation"></a>`bit_and__small__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_AND(small_val::smallint) AS result FROM numbers WHERE small_val IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT BIT_AND(small_val::smallint) AS result FROM func('e2e::tds_numbers') WHERE small_val IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT BIT_AND(small_val::smallint) AS result FROM func('e2e::rel_numbers') WHERE small_val IS NOT NULL
```

**Error:**
> No function matches the given name "BIT_AND"


<br>

#### <a id="fail-bit_or__big__from_table-TDS"></a><a id="fail-bit_or__big__from_table-Relation"></a>`bit_or__big__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_OR(big_val) AS result FROM numbers WHERE big_val IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT BIT_OR(big_val) AS result FROM func('e2e::tds_numbers') WHERE big_val IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT BIT_OR(big_val) AS result FROM func('e2e::rel_numbers') WHERE big_val IS NOT NULL
```

**Error:**
> No function matches the given name "BIT_OR"


<br>

#### <a id="fail-bit_or__bit__no_generator-TDS"></a><a id="fail-bit_or__bit__no_generator-Relation"></a>`bit_or__bit__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_OR(int_val::bit(32)) AS result FROM numbers WHERE int_val IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT BIT_OR(int_val::bit(32)) AS result FROM func('e2e::tds_numbers') WHERE int_val IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT BIT_OR(int_val::bit(32)) AS result FROM func('e2e::rel_numbers') WHERE int_val IS NOT NULL
```

**Error:**
> No function matches the given name "BIT_OR"


<br>

#### <a id="fail-bit_or_bit_cov-TDS"></a><a id="fail-bit_or_bit_cov-Relation"></a>`bit_or_bit_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_OR(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT BIT_OR(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT BIT_OR(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "BIT_OR"


<br>

#### <a id="fail-bit_or__int__from_table-TDS"></a><a id="fail-bit_or__int__from_table-Relation"></a>`bit_or__int__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_OR(int_val) AS result FROM numbers WHERE int_val IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT BIT_OR(int_val) AS result FROM func('e2e::tds_numbers') WHERE int_val IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT BIT_OR(int_val) AS result FROM func('e2e::rel_numbers') WHERE int_val IS NOT NULL
```

**Error:**
> No function matches the given name "BIT_OR"


<br>

#### <a id="fail-bit_or__small__from_table-TDS"></a><a id="fail-bit_or__small__from_table-Relation"></a>`bit_or__small__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_OR(small_val::smallint) AS result FROM numbers WHERE small_val IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT BIT_OR(small_val::smallint) AS result FROM func('e2e::tds_numbers') WHERE small_val IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT BIT_OR(small_val::smallint) AS result FROM func('e2e::rel_numbers') WHERE small_val IS NOT NULL
```

**Error:**
> No function matches the given name "BIT_OR"


<br>

#### <a id="fail-bit_xor__big__from_table-TDS"></a><a id="fail-bit_xor__big__from_table-Relation"></a>`bit_xor__big__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_XOR(big_val) AS result FROM numbers WHERE big_val IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT BIT_XOR(big_val) AS result FROM func('e2e::tds_numbers') WHERE big_val IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT BIT_XOR(big_val) AS result FROM func('e2e::rel_numbers') WHERE big_val IS NOT NULL
```

**Error:**
> No function matches the given name "BIT_XOR"


<br>

#### <a id="fail-bit_xor__bit__no_generator-TDS"></a><a id="fail-bit_xor__bit__no_generator-Relation"></a>`bit_xor__bit__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_XOR(int_val::bit(32)) AS result FROM numbers WHERE int_val IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT BIT_XOR(int_val::bit(32)) AS result FROM func('e2e::tds_numbers') WHERE int_val IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT BIT_XOR(int_val::bit(32)) AS result FROM func('e2e::rel_numbers') WHERE int_val IS NOT NULL
```

**Error:**
> No function matches the given name "BIT_XOR"


<br>

#### <a id="fail-bit_xor_bit_cov-TDS"></a><a id="fail-bit_xor_bit_cov-Relation"></a>`bit_xor_bit_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_XOR(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT BIT_XOR(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT BIT_XOR(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "BIT_XOR"


<br>

#### <a id="fail-bit_xor__int__from_table-TDS"></a><a id="fail-bit_xor__int__from_table-Relation"></a>`bit_xor__int__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_XOR(int_val) AS result FROM numbers WHERE int_val IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT BIT_XOR(int_val) AS result FROM func('e2e::tds_numbers') WHERE int_val IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT BIT_XOR(int_val) AS result FROM func('e2e::rel_numbers') WHERE int_val IS NOT NULL
```

**Error:**
> No function matches the given name "BIT_XOR"


<br>

#### <a id="fail-bit_xor__small__from_table-TDS"></a><a id="fail-bit_xor__small__from_table-Relation"></a>`bit_xor__small__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_XOR(small_val::smallint) AS result FROM numbers WHERE small_val IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT BIT_XOR(small_val::smallint) AS result FROM func('e2e::tds_numbers') WHERE small_val IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT BIT_XOR(small_val::smallint) AS result FROM func('e2e::rel_numbers') WHERE small_val IS NOT NULL
```

**Error:**
> No function matches the given name "BIT_XOR"


<br>

#### <a id="fail-corr__dp_dp__from_table-TDS"></a><a id="fail-corr__dp_dp__from_table-Relation"></a>`corr__dp_dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CORR(salary, age) AS result FROM persons WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT CORR(salary, age) AS result FROM func('e2e::tds_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT CORR(salary, age) AS result FROM func('e2e::rel_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Error:**
> No function matches the given name "CORR"


<br>

#### <a id="fail-covar_pop__dp_dp__from_table-TDS"></a><a id="fail-covar_pop__dp_dp__from_table-Relation"></a>`covar_pop__dp_dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT COVAR_POP(salary, age) AS result FROM persons WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT COVAR_POP(salary, age) AS result FROM func('e2e::tds_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT COVAR_POP(salary, age) AS result FROM func('e2e::rel_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Error:**
> No function matches the given name "COVAR_POP"


<br>

#### <a id="fail-covar_samp__dp_dp__from_table-TDS"></a><a id="fail-covar_samp__dp_dp__from_table-Relation"></a>`covar_samp__dp_dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT COVAR_SAMP(salary, age) AS result FROM persons WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT COVAR_SAMP(salary, age) AS result FROM func('e2e::tds_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT COVAR_SAMP(salary, age) AS result FROM func('e2e::rel_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Error:**
> No function matches the given name "COVAR_SAMP"


<br>

#### <a id="fail-json_agg__from_column-Relation"></a>`json_agg__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSON_AGG(json_val ->> 'b') AS result FROM json_data WHERE json_val IS NOT NULL
```

**Legend SQL:**
```sql
SELECT JSON_AGG(json_val ->> 'b') AS result FROM func('e2e::rel_json_data') WHERE json_val IS NOT NULL
```

**Error:**
> No function matches the given name "JSON_AGG"


<br>

#### <a id="fail-json_agg__anyelement__from_table-TDS"></a><a id="fail-json_agg__anyelement__from_table-Relation"></a>`json_agg__anyelement__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT JSON_AGG(val) AS result FROM strings WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (TDS):**
```sql
SELECT JSON_AGG(val) AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (Relation):**
```sql
SELECT JSON_AGG(val) AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL AND id <= 3
```

**Error:**
> No function matches the given name "JSON_AGG"


<br>

#### <a id="fail-json_agg_strict__anyelement__from_table-TDS"></a><a id="fail-json_agg_strict__anyelement__from_table-Relation"></a>`json_agg_strict__anyelement__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT JSON_AGG_STRICT(val) AS result FROM strings WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (TDS):**
```sql
SELECT JSON_AGG_STRICT(val) AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (Relation):**
```sql
SELECT JSON_AGG_STRICT(val) AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL AND id <= 3
```

**Error:**
> No function matches the given name "JSON_AGG_STRICT"


<br>

#### <a id="fail-json_object_agg__any_any__from_table-TDS"></a><a id="fail-json_object_agg__any_any__from_table-Relation"></a>`json_object_agg__any_any__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT JSON_OBJECT_AGG(id::text, val) AS result FROM strings WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (TDS):**
```sql
SELECT JSON_OBJECT_AGG(id::text, val) AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (Relation):**
```sql
SELECT JSON_OBJECT_AGG(id::text, val) AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL AND id <= 3
```

**Error:**
> No function matches the given name "JSON_OBJECT_AGG"


<br>

#### <a id="fail-json_object_agg_strict__any_any__from_table-TDS"></a><a id="fail-json_object_agg_strict__any_any__from_table-Relation"></a>`json_object_agg_strict__any_any__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT JSON_OBJECT_AGG_STRICT(id::text, val) AS result FROM strings WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (TDS):**
```sql
SELECT JSON_OBJECT_AGG_STRICT(id::text, val) AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (Relation):**
```sql
SELECT JSON_OBJECT_AGG_STRICT(id::text, val) AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL AND id <= 3
```

**Error:**
> No function matches the given name "JSON_OBJECT_AGG_STRICT"


<br>

#### <a id="fail-json_object_agg_unique__any_any__from_table-TDS"></a><a id="fail-json_object_agg_unique__any_any__from_table-Relation"></a>`json_object_agg_unique__any_any__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT JSON_OBJECT_AGG_UNIQUE(id::text, val) AS result FROM strings WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (TDS):**
```sql
SELECT JSON_OBJECT_AGG_UNIQUE(id::text, val) AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (Relation):**
```sql
SELECT JSON_OBJECT_AGG_UNIQUE(id::text, val) AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL AND id <= 3
```

**Error:**
> No function matches the given name "JSON_OBJECT_AGG_UNIQUE"


<br>

#### <a id="fail-json_object_agg_unique_strict__any_any__from_table-TDS"></a><a id="fail-json_object_agg_unique_strict__any_any__from_table-Relation"></a>`json_object_agg_unique_strict__any_any__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT JSON_OBJECT_AGG_UNIQUE_STRICT(id::text, val) AS result FROM strings WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (TDS):**
```sql
SELECT JSON_OBJECT_AGG_UNIQUE_STRICT(id::text, val) AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (Relation):**
```sql
SELECT JSON_OBJECT_AGG_UNIQUE_STRICT(id::text, val) AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL AND id <= 3
```

**Error:**
> No function matches the given name "JSON_OBJECT_AGG_UNIQUE_STRICT"


<br>

#### <a id="fail-jsonb_agg__from_column-Relation"></a>`jsonb_agg__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_AGG(jsonb_val ->> 'b') AS result FROM json_data WHERE jsonb_val IS NOT NULL
```

**Legend SQL:**
```sql
SELECT JSONB_AGG(jsonb_val ->> 'b') AS result FROM func('e2e::rel_json_data') WHERE jsonb_val IS NOT NULL
```

**Error:**
> No function matches the given name "JSONB_AGG"


<br>

#### <a id="fail-jsonb_agg__anyelement__from_table-TDS"></a><a id="fail-jsonb_agg__anyelement__from_table-Relation"></a>`jsonb_agg__anyelement__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT JSONB_AGG(val) AS result FROM strings WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (TDS):**
```sql
SELECT JSONB_AGG(val) AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (Relation):**
```sql
SELECT JSONB_AGG(val) AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL AND id <= 3
```

**Error:**
> No function matches the given name "JSONB_AGG"


<br>

#### <a id="fail-jsonb_agg_strict__anyelement__from_table-TDS"></a><a id="fail-jsonb_agg_strict__anyelement__from_table-Relation"></a>`jsonb_agg_strict__anyelement__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT JSONB_AGG_STRICT(val) AS result FROM strings WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (TDS):**
```sql
SELECT JSONB_AGG_STRICT(val) AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (Relation):**
```sql
SELECT JSONB_AGG_STRICT(val) AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL AND id <= 3
```

**Error:**
> No function matches the given name "JSONB_AGG_STRICT"


<br>

#### <a id="fail-jsonb_object_agg__any_any__from_table-TDS"></a><a id="fail-jsonb_object_agg__any_any__from_table-Relation"></a>`jsonb_object_agg__any_any__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT JSONB_OBJECT_AGG(id::text, val) AS result FROM strings WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (TDS):**
```sql
SELECT JSONB_OBJECT_AGG(id::text, val) AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (Relation):**
```sql
SELECT JSONB_OBJECT_AGG(id::text, val) AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL AND id <= 3
```

**Error:**
> No function matches the given name "JSONB_OBJECT_AGG"


<br>

#### <a id="fail-jsonb_object_agg_strict__any_any__from_table-TDS"></a><a id="fail-jsonb_object_agg_strict__any_any__from_table-Relation"></a>`jsonb_object_agg_strict__any_any__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT JSONB_OBJECT_AGG_STRICT(id::text, val) AS result FROM strings WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (TDS):**
```sql
SELECT JSONB_OBJECT_AGG_STRICT(id::text, val) AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (Relation):**
```sql
SELECT JSONB_OBJECT_AGG_STRICT(id::text, val) AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL AND id <= 3
```

**Error:**
> No function matches the given name "JSONB_OBJECT_AGG_STRICT"


<br>

#### <a id="fail-jsonb_object_agg_unique__any_any__from_table-TDS"></a><a id="fail-jsonb_object_agg_unique__any_any__from_table-Relation"></a>`jsonb_object_agg_unique__any_any__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT JSONB_OBJECT_AGG_UNIQUE(id::text, val) AS result FROM strings WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (TDS):**
```sql
SELECT JSONB_OBJECT_AGG_UNIQUE(id::text, val) AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (Relation):**
```sql
SELECT JSONB_OBJECT_AGG_UNIQUE(id::text, val) AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL AND id <= 3
```

**Error:**
> No function matches the given name "JSONB_OBJECT_AGG_UNIQUE"


<br>

#### <a id="fail-jsonb_object_agg_unique_strict__any_any__from_table-TDS"></a><a id="fail-jsonb_object_agg_unique_strict__any_any__from_table-Relation"></a>`jsonb_object_agg_unique_strict__any_any__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT JSONB_OBJECT_AGG_UNIQUE_STRICT(id::text, val) AS result FROM strings WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (TDS):**
```sql
SELECT JSONB_OBJECT_AGG_UNIQUE_STRICT(id::text, val) AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL AND id <= 3
```

**Legend SQL (Relation):**
```sql
SELECT JSONB_OBJECT_AGG_UNIQUE_STRICT(id::text, val) AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL AND id <= 3
```

**Error:**
> No function matches the given name "JSONB_OBJECT_AGG_UNIQUE_STRICT"


<br>

#### <a id="fail-mode__ORDERBYanyelement__from_table-TDS"></a><a id="fail-mode__ORDERBYanyelement__from_table-Relation"></a>`mode__ORDERBYanyelement__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MODE() WITHIN GROUP (ORDER BY dept_id) AS result FROM persons WHERE dept_id IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MODE() WITHIN GROUP (ORDER BY dept_id) AS result FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MODE() WITHIN GROUP (ORDER BY dept_id) AS result FROM func('e2e::rel_persons') WHERE dept_id IS NOT NULL
```

**Error:**
> No function matches the given name "MODE"


<br>

#### <a id="fail-range_agg__anymultirange__no_generator-TDS"></a><a id="fail-range_agg__anymultirange__no_generator-Relation"></a>`range_agg__anymultirange__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT RANGE_AGG(int4multirange(int4range(id, id + 10))) AS result FROM persons WHERE id IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT RANGE_AGG(int4multirange(int4range(id, id + 10))) AS result FROM func('e2e::tds_persons') WHERE id IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT RANGE_AGG(int4multirange(int4range(id, id + 10))) AS result FROM func('e2e::rel_persons') WHERE id IS NOT NULL
```

**Error:**
> No function matches the given name "RANGE_AGG"


<br>

#### <a id="fail-range_agg_anymultirange_cov-TDS"></a><a id="fail-range_agg_anymultirange_cov-Relation"></a>`range_agg_anymultirange_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT RANGE_AGG(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT RANGE_AGG(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT RANGE_AGG(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "RANGE_AGG"


<br>

#### <a id="fail-range_agg__anyrange__no_generator-TDS"></a><a id="fail-range_agg__anyrange__no_generator-Relation"></a>`range_agg__anyrange__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT RANGE_AGG(int4range(id, id + 10)) AS result FROM persons WHERE id IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT RANGE_AGG(int4range(id, id + 10)) AS result FROM func('e2e::tds_persons') WHERE id IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT RANGE_AGG(int4range(id, id + 10)) AS result FROM func('e2e::rel_persons') WHERE id IS NOT NULL
```

**Error:**
> No function matches the given name "RANGE_AGG"


<br>

#### <a id="fail-range_agg_anyrange_cov-TDS"></a><a id="fail-range_agg_anyrange_cov-Relation"></a>`range_agg_anyrange_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT RANGE_AGG(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT RANGE_AGG(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT RANGE_AGG(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "RANGE_AGG"


<br>

#### <a id="fail-range_intersect_agg__anymultirange__no_generator-TDS"></a><a id="fail-range_intersect_agg__anymultirange__no_generator-Relation"></a>`range_intersect_agg__anymultirange__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT RANGE_INTERSECT_AGG(int4multirange(int4range(id, id + 10))) AS result FROM persons WHERE id IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT RANGE_INTERSECT_AGG(int4multirange(int4range(id, id + 10))) AS result FROM func('e2e::tds_persons') WHERE id IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT RANGE_INTERSECT_AGG(int4multirange(int4range(id, id + 10))) AS result FROM func('e2e::rel_persons') WHERE id IS NOT NULL
```

**Error:**
> No function matches the given name "RANGE_INTERSECT_AGG"


<br>

#### <a id="fail-range_intersect_agg_anymultirange_cov-TDS"></a><a id="fail-range_intersect_agg_anymultirange_cov-Relation"></a>`range_intersect_agg_anymultirange_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT RANGE_INTERSECT_AGG(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT RANGE_INTERSECT_AGG(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT RANGE_INTERSECT_AGG(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "RANGE_INTERSECT_AGG"


<br>

#### <a id="fail-range_intersect_agg__anyrange__no_generator-TDS"></a><a id="fail-range_intersect_agg__anyrange__no_generator-Relation"></a>`range_intersect_agg__anyrange__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT RANGE_INTERSECT_AGG(int4range(id, id + 10)) AS result FROM persons WHERE id IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT RANGE_INTERSECT_AGG(int4range(id, id + 10)) AS result FROM func('e2e::tds_persons') WHERE id IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT RANGE_INTERSECT_AGG(int4range(id, id + 10)) AS result FROM func('e2e::rel_persons') WHERE id IS NOT NULL
```

**Error:**
> No function matches the given name "RANGE_INTERSECT_AGG"


<br>

#### <a id="fail-range_intersect_agg_anyrange_cov-TDS"></a><a id="fail-range_intersect_agg_anyrange_cov-Relation"></a>`range_intersect_agg_anyrange_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT RANGE_INTERSECT_AGG(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT RANGE_INTERSECT_AGG(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT RANGE_INTERSECT_AGG(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "RANGE_INTERSECT_AGG"


<br>

#### <a id="fail-regr_avgx__dp_dp__from_table-TDS"></a><a id="fail-regr_avgx__dp_dp__from_table-Relation"></a>`regr_avgx__dp_dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGR_AVGX(salary, age) AS result FROM persons WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT REGR_AVGX(salary, age) AS result FROM func('e2e::tds_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT REGR_AVGX(salary, age) AS result FROM func('e2e::rel_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Error:**
> No function matches the given name "REGR_AVGX"


<br>

#### <a id="fail-regr_avgy__dp_dp__from_table-TDS"></a><a id="fail-regr_avgy__dp_dp__from_table-Relation"></a>`regr_avgy__dp_dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGR_AVGY(salary, age) AS result FROM persons WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT REGR_AVGY(salary, age) AS result FROM func('e2e::tds_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT REGR_AVGY(salary, age) AS result FROM func('e2e::rel_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Error:**
> No function matches the given name "REGR_AVGY"


<br>

#### <a id="fail-regr_count__dp_dp__from_table-TDS"></a><a id="fail-regr_count__dp_dp__from_table-Relation"></a>`regr_count__dp_dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGR_COUNT(salary, age) AS result FROM persons WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT REGR_COUNT(salary, age) AS result FROM func('e2e::tds_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT REGR_COUNT(salary, age) AS result FROM func('e2e::rel_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Error:**
> No function matches the given name "REGR_COUNT"


<br>

#### <a id="fail-regr_intercept__dp_dp__from_table-TDS"></a><a id="fail-regr_intercept__dp_dp__from_table-Relation"></a>`regr_intercept__dp_dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGR_INTERCEPT(salary, age) AS result FROM persons WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT REGR_INTERCEPT(salary, age) AS result FROM func('e2e::tds_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT REGR_INTERCEPT(salary, age) AS result FROM func('e2e::rel_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Error:**
> No function matches the given name "REGR_INTERCEPT"


<br>

#### <a id="fail-regr_r2__dp_dp__from_table-TDS"></a><a id="fail-regr_r2__dp_dp__from_table-Relation"></a>`regr_r2__dp_dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGR_R2(salary, age) AS result FROM persons WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT REGR_R2(salary, age) AS result FROM func('e2e::tds_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT REGR_R2(salary, age) AS result FROM func('e2e::rel_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Error:**
> No function matches the given name "REGR_R2"


<br>

#### <a id="fail-regr_slope__dp_dp__from_table-TDS"></a><a id="fail-regr_slope__dp_dp__from_table-Relation"></a>`regr_slope__dp_dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGR_SLOPE(salary, age) AS result FROM persons WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT REGR_SLOPE(salary, age) AS result FROM func('e2e::tds_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT REGR_SLOPE(salary, age) AS result FROM func('e2e::rel_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Error:**
> No function matches the given name "REGR_SLOPE"


<br>

#### <a id="fail-regr_sxx__dp_dp__from_table-TDS"></a><a id="fail-regr_sxx__dp_dp__from_table-Relation"></a>`regr_sxx__dp_dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGR_SXX(salary, age) AS result FROM persons WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT REGR_SXX(salary, age) AS result FROM func('e2e::tds_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT REGR_SXX(salary, age) AS result FROM func('e2e::rel_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Error:**
> No function matches the given name "REGR_SXX"


<br>

#### <a id="fail-regr_sxy__dp_dp__from_table-TDS"></a><a id="fail-regr_sxy__dp_dp__from_table-Relation"></a>`regr_sxy__dp_dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGR_SXY(salary, age) AS result FROM persons WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT REGR_SXY(salary, age) AS result FROM func('e2e::tds_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT REGR_SXY(salary, age) AS result FROM func('e2e::rel_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Error:**
> No function matches the given name "REGR_SXY"


<br>

#### <a id="fail-regr_syy__dp_dp__from_table-TDS"></a><a id="fail-regr_syy__dp_dp__from_table-Relation"></a>`regr_syy__dp_dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGR_SYY(salary, age) AS result FROM persons WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT REGR_SYY(salary, age) AS result FROM func('e2e::tds_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT REGR_SYY(salary, age) AS result FROM func('e2e::rel_persons') WHERE salary IS NOT NULL AND age IS NOT NULL
```

**Error:**
> No function matches the given name "REGR_SYY"


<br>

#### <a id="fail-xmlagg__xml__no_generator-TDS"></a><a id="fail-xmlagg__xml__no_generator-Relation"></a>`xmlagg__xml__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT XMLAGG(name::xml) AS result FROM persons WHERE name IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT XMLAGG(name::xml) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT XMLAGG(name::xml) AS result FROM func('e2e::rel_persons') WHERE name IS NOT NULL
```

**Error:**
> No function matches the given name "XMLAGG"


<br>

#### <a id="fail-xmlagg_xml_cov-TDS"></a><a id="fail-xmlagg_xml_cov-Relation"></a>`xmlagg_xml_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT XMLAGG(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT XMLAGG(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT XMLAGG(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No function matches the given name "XMLAGG"


<br>

#### <a id="fail-generate_series__big_big__from_table-TDS"></a><a id="fail-generate_series__big_big__from_table-Relation"></a>`generate_series__big_big__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES(1::bigint, 5::bigint) AS g(val) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES(1::bigint, 5::bigint) AS g(val) ORDER BY 1
```

**Error:**
> No function matches the given name "GENERATE_SERIES"


<br>

#### <a id="fail-generate_series__big_big_big__from_table-TDS"></a><a id="fail-generate_series__big_big_big__from_table-Relation"></a>`generate_series__big_big_big__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES(1::bigint, 10::bigint, 2::bigint) AS g(val) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES(1::bigint, 10::bigint, 2::bigint) AS g(val) ORDER BY 1
```

**Error:**
> No function matches the given name "GENERATE_SERIES"


<br>

#### <a id="fail-generate_series__int_int__from_table-TDS"></a><a id="fail-generate_series__int_int__from_table-Relation"></a>`generate_series__int_int__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES(1, 5) AS g(val) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES(1, 5) AS g(val) ORDER BY 1
```

**Error:**
> No function matches the given name "GENERATE_SERIES"


<br>

#### <a id="fail-generate_series_empty_result-TDS"></a><a id="fail-generate_series_empty_result-Relation"></a>`generate_series_empty_result`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES(5, 1) AS g(val) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES(5, 1) AS g(val) ORDER BY 1
```

**Error:**
> No function matches the given name "GENERATE_SERIES"


<br>

#### <a id="fail-generate_series_single_value-TDS"></a><a id="fail-generate_series_single_value-Relation"></a>`generate_series_single_value`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES(1, 1) AS g(val) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES(1, 1) AS g(val) ORDER BY 1
```

**Error:**
> No function matches the given name "GENERATE_SERIES"


<br>

#### <a id="fail-generate_series_in_from-TDS"></a><a id="fail-generate_series_in_from-Relation"></a>`generate_series_in_from`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT g.result FROM GENERATE_SERIES(1, 3) AS g(result) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT g.result FROM GENERATE_SERIES(1, 3) AS g(result) ORDER BY 1
```

**Error:**
> No function matches the given name "GENERATE_SERIES"


<br>

#### <a id="fail-generate_series_cross_join-TDS"></a><a id="fail-generate_series_cross_join-Relation"></a>`generate_series_cross_join`

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

#### <a id="fail-generate_series__int_int_int__from_table-TDS"></a><a id="fail-generate_series__int_int_int__from_table-Relation"></a>`generate_series__int_int_int__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES(0, 20, 5) AS g(val) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES(0, 20, 5) AS g(val) ORDER BY 1
```

**Error:**
> No function matches the given name "GENERATE_SERIES"


<br>

#### <a id="fail-generate_series_negative_step-TDS"></a><a id="fail-generate_series_negative_step-Relation"></a>`generate_series_negative_step`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES(5, 1, -1) AS g(val) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES(5, 1, -1) AS g(val) ORDER BY 1
```

**Error:**
> No function matches the given name "GENERATE_SERIES"


<br>

#### <a id="fail-generate_series__num_num__from_table-TDS"></a><a id="fail-generate_series__num_num__from_table-Relation"></a>`generate_series__num_num__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES(1::numeric, 5::numeric) AS g(val) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES(1::numeric, 5::numeric) AS g(val) ORDER BY 1
```

**Error:**
> No function matches the given name "GENERATE_SERIES"


<br>

#### <a id="fail-generate_series__num_num_num__from_table-TDS"></a><a id="fail-generate_series__num_num_num__from_table-Relation"></a>`generate_series__num_num_num__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES(0::numeric, 2::numeric, 0.5::numeric) AS g(val) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES(0::numeric, 2::numeric, 0.5::numeric) AS g(val) ORDER BY 1
```

**Error:**
> No function matches the given name "GENERATE_SERIES"


<br>

#### <a id="fail-generate_series__tstz_tstz_intv__from_table-TDS"></a><a id="fail-generate_series__tstz_tstz_intv__from_table-Relation"></a>`generate_series__tstz_tstz_intv__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES('2023-01-01'::timestamptz, '2023-01-05'::timestamptz, '1 day'::interval) AS g(val) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES('2023-01-01'::timestamptz, '2023-01-05'::timestamptz, '1 day'::interval) AS g(val) ORDER BY 1
```

**Error:**
> No function matches the given name "GENERATE_SERIES"


<br>

#### <a id="fail-generate_series__tstz_tstz_intv_txt__from_table-TDS"></a><a id="fail-generate_series__tstz_tstz_intv_txt__from_table-Relation"></a>`generate_series__tstz_tstz_intv_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES('2023-01-01'::timestamptz, '2023-01-05'::timestamptz, '1 day'::interval, 'UTC') AS g(val) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES('2023-01-01'::timestamptz, '2023-01-05'::timestamptz, '1 day'::interval, 'UTC') AS g(val) ORDER BY 1
```

**Error:**
> No function matches the given name "GENERATE_SERIES"


<br>

#### <a id="fail-generate_series__ts_ts_intv__from_table-TDS"></a><a id="fail-generate_series__ts_ts_intv__from_table-Relation"></a>`generate_series__ts_ts_intv__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES('2023-01-01'::timestamp, '2023-01-05'::timestamp, '1 day'::interval) AS g(val) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SERIES('2023-01-01'::timestamp, '2023-01-05'::timestamp, '1 day'::interval) AS g(val) ORDER BY 1
```

**Error:**
> No function matches the given name "GENERATE_SERIES"


<br>

#### <a id="fail-generate_subscripts__anyarray_int__from_table-TDS"></a><a id="fail-generate_subscripts__anyarray_int__from_table-Relation"></a>`generate_subscripts__anyarray_int__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SUBSCRIPTS(ARRAY[10, 20, 30], 1) AS g(val) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SUBSCRIPTS(ARRAY[10, 20, 30], 1) AS g(val) ORDER BY 1
```

**Error:**
> No function matches the given name "GENERATE_SUBSCRIPTS"


<br>

#### <a id="fail-generate_subscripts__anyarray_int_bool__from_table-TDS"></a><a id="fail-generate_subscripts__anyarray_int_bool__from_table-Relation"></a>`generate_subscripts__anyarray_int_bool__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SUBSCRIPTS(ARRAY[10, 20, 30], 1, false) AS g(val) ORDER BY 1
```

**Legend SQL:**
```sql
SELECT g.val AS result FROM GENERATE_SUBSCRIPTS(ARRAY[10, 20, 30], 1, false) AS g(val) ORDER BY 1
```

**Error:**
> No function matches the given name "GENERATE_SUBSCRIPTS"


<br>

#### <a id="fail-jsonb_path_query_first__from_column-Relation"></a>`jsonb_path_query_first__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSONB_PATH_QUERY_FIRST(jsonb_arr, '$[*]') AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_PATH_QUERY_FIRST(jsonb_arr, '$[*]') AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> No function matches the given name "JSONB_PATH_QUERY_FIRST"


<a id="result-mismatch"></a>

### RESULT_MISMATCH (13 tests)

#### <a id="fail-div__num_num__from_table-TDS"></a><a id="fail-div__num_num__from_table-Relation"></a>`div__num_num__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT DIV(numeric_val, 3.0) AS result FROM numbers WHERE numeric_val IS NOT NULL AND numeric_val <> 0 ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT DIV(numeric_val, 3.0) AS result FROM func('e2e::tds_numbers') WHERE numeric_val IS NOT NULL AND numeric_val <> 0 ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT DIV(numeric_val, 3.0) AS result FROM func('e2e::rel_numbers') WHERE numeric_val IS NOT NULL AND numeric_val <> 0 ORDER BY 1
```

**Error:**
> null


<br>

#### <a id="fail-concat_ws__txt_variadic__from_table-TDS"></a><a id="fail-concat_ws__txt_variadic__from_table-Relation"></a>`concat_ws__txt_variadic__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CONCAT_WS(', ', val, nullable_val) AS result FROM strings ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT CONCAT_WS(', ', val, nullable_val) AS result FROM func('e2e::tds_strings') ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT CONCAT_WS(', ', val, nullable_val) AS result FROM func('e2e::rel_strings') ORDER BY 1
```

**Error:**
> null


<br>

#### <a id="fail-initcap__txt__from_table-TDS"></a><a id="fail-initcap__txt__from_table-Relation"></a>`initcap__txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT INITCAP(val) AS result FROM strings ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT INITCAP(val) AS result FROM func('e2e::tds_strings') ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT INITCAP(val) AS result FROM func('e2e::rel_strings') ORDER BY 1
```

**Error:**
> null


<br>

#### <a id="fail-string_to_array__txt_txt__from_table-TDS"></a><a id="fail-string_to_array__txt_txt__from_table-Relation"></a>`string_to_array__txt_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT STRING_TO_ARRAY(val, ' ') AS result FROM strings WHERE val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT STRING_TO_ARRAY(val, ' ') AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT STRING_TO_ARRAY(val, ' ') AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL ORDER BY 1
```

**Error:**
> null


<br>

#### <a id="fail-regexp_count__start_position__ignored_by_legend-TDS"></a><a id="fail-regexp_count__start_position__ignored_by_legend-Relation"></a>`regexp_count__start_position__ignored_by_legend`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGEXP_COUNT(val, '[a-z]', 5) AS result FROM strings WHERE id = 10
```

**Legend SQL (TDS):**
```sql
SELECT REGEXP_COUNT(val, '[a-z]', 5) AS result FROM func('e2e::tds_strings') WHERE id = 10
```

**Legend SQL (Relation):**
```sql
SELECT REGEXP_COUNT(val, '[a-z]', 5) AS result FROM func('e2e::rel_strings') WHERE id = 10
```

**Error:**
> null


<br>

#### <a id="fail-regexp_substr__start_position__ignored_by_legend-TDS"></a><a id="fail-regexp_substr__start_position__ignored_by_legend-Relation"></a>`regexp_substr__start_position__ignored_by_legend`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 5) AS result FROM strings WHERE id = 10
```

**Legend SQL (TDS):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 5) AS result FROM func('e2e::tds_strings') WHERE id = 10
```

**Legend SQL (Relation):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 5) AS result FROM func('e2e::rel_strings') WHERE id = 10
```

**Error:**
> null


<br>

#### <a id="fail-regexp_substr__nth_occurrence__ignored_by_legend-TDS"></a><a id="fail-regexp_substr__nth_occurrence__ignored_by_legend-Relation"></a>`regexp_substr__nth_occurrence__ignored_by_legend`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 1, 2) AS result FROM strings WHERE id = 10
```

**Legend SQL (TDS):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 1, 2) AS result FROM func('e2e::tds_strings') WHERE id = 10
```

**Legend SQL (Relation):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 1, 2) AS result FROM func('e2e::rel_strings') WHERE id = 10
```

**Error:**
> null


<br>

#### <a id="fail-regexp_substr__nth_occurrence_last__ignored_by_legend-TDS"></a><a id="fail-regexp_substr__nth_occurrence_last__ignored_by_legend-Relation"></a>`regexp_substr__nth_occurrence_last__ignored_by_legend`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 1, 4) AS result FROM strings WHERE id = 10
```

**Legend SQL (TDS):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 1, 4) AS result FROM func('e2e::tds_strings') WHERE id = 10
```

**Legend SQL (Relation):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 1, 4) AS result FROM func('e2e::rel_strings') WHERE id = 10
```

**Error:**
> null


<br>

#### <a id="fail-regexp_substr__start_and_nth__ignored_by_legend-TDS"></a><a id="fail-regexp_substr__start_and_nth__ignored_by_legend-Relation"></a>`regexp_substr__start_and_nth__ignored_by_legend`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 5, 2) AS result FROM strings WHERE id = 10
```

**Legend SQL (TDS):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 5, 2) AS result FROM func('e2e::tds_strings') WHERE id = 10
```

**Legend SQL (Relation):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 5, 2) AS result FROM func('e2e::rel_strings') WHERE id = 10
```

**Error:**
> null


<br>

#### <a id="fail-json_extract_path__from_column-Relation"></a>`json_extract_path__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSON_EXTRACT_PATH(json_val, 'a', 'b', 'c') AS result FROM json_data WHERE id = 2
```

**Legend SQL:**
```sql
SELECT JSON_EXTRACT_PATH(json_val, 'a', 'b', 'c') AS result FROM func('e2e::rel_json_data') WHERE id = 2
```

**Error:**
> null


<br>

#### <a id="fail-array_position__anycompatiblearray_anycompatible__from_table-Relation"></a>`array_position__anycompatiblearray_anycompatible__from_table`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT ARRAY_POSITION(ARRAY[1,2,3], 2) AS result FROM numbers WHERE id = 1
```

**Legend SQL:**
```sql
SELECT ARRAY_POSITION(ARRAY[1, 2, 3], 2) AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> null


<br>

#### <a id="fail-max__anyarray__no_generator-TDS"></a><a id="fail-max__anyarray__no_generator-Relation"></a>`max__anyarray__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(ARRAY[id]) AS result FROM persons WHERE id IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MAX(ARRAY[id]) AS result FROM func('e2e::tds_persons') WHERE id IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MAX(ARRAY[id]) AS result FROM func('e2e::rel_persons') WHERE id IS NOT NULL
```

**Error:**
> null


<br>

#### <a id="fail-min__anyarray__no_generator-TDS"></a><a id="fail-min__anyarray__no_generator-Relation"></a>`min__anyarray__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(ARRAY[id]) AS result FROM persons WHERE id IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MIN(ARRAY[id]) AS result FROM func('e2e::tds_persons') WHERE id IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MIN(ARRAY[id]) AS result FROM func('e2e::rel_persons') WHERE id IS NOT NULL
```

**Error:**
> null


<a id="misc"></a>

### MISC (68 tests)

#### <a id="fail-exp__dp__from_table-TDS"></a><a id="fail-exp__dp__from_table-Relation"></a>`exp__dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT EXP(small_val::double precision) AS result FROM numbers WHERE small_val IS NOT NULL AND small_val BETWEEN -10 AND 10 ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: 


<br>

#### <a id="fail-exp__num__from_table-TDS"></a><a id="fail-exp__num__from_table-Relation"></a>`exp__num__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT EXP(small_val::double precision) AS result FROM numbers WHERE small_val IS NOT NULL AND small_val BETWEEN -10 AND 10 ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: 


<br>

#### <a id="fail-trunc__dp__from_table-TDS"></a><a id="fail-trunc__dp__from_table-Relation"></a>`trunc__dp__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TRUNC(float_val::double precision) AS result FROM numbers WHERE float_val IS NOT NULL ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: 


<br>

#### <a id="fail-trunc_macaddr_cov-TDS"></a><a id="fail-trunc_macaddr_cov-Relation"></a>`trunc_macaddr_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TRUNC(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT TRUNC(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT TRUNC(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Postgres rejected reference SQL but Legend executed it successfully. Fix the reference SQL or the Legend parser/planner. Postgres error: ERROR: function trunc(unknown) is not unique
>   Hint: Could not choose a best candidate function. You might need to add explicit type casts.
>   Position: 8


<br>

#### <a id="fail-trunc_macaddr8_cov-TDS"></a><a id="fail-trunc_macaddr8_cov-Relation"></a>`trunc_macaddr8_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TRUNC(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT TRUNC(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT TRUNC(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Postgres rejected reference SQL but Legend executed it successfully. Fix the reference SQL or the Legend parser/planner. Postgres error: ERROR: function trunc(unknown) is not unique
>   Hint: Could not choose a best candidate function. You might need to add explicit type casts.
>   Position: 8


<br>

#### <a id="fail-decode_text_text_cov-TDS"></a><a id="fail-decode_text_text_cov-Relation"></a>`decode_text_text_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT DECODE(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT DECODE(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT DECODE(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> incorrect number of args to decode


<br>

#### <a id="fail-encode_bytea_text_cov-TDS"></a><a id="fail-encode_bytea_text_cov-Relation"></a>`encode_bytea_text_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ENCODE(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ENCODE(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ENCODE(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> incorrect number of args to encode


<br>

#### <a id="fail-substr_bytea_integer_cov-TDS"></a><a id="fail-substr_bytea_integer_cov-Relation"></a>`substr_bytea_integer_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SUBSTR(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SUBSTR(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SUBSTR(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> invalid number of args for substring


<br>

#### <a id="fail-substr_bytea_integer_integer_cov-TDS"></a><a id="fail-substr_bytea_integer_integer_cov-Relation"></a>`substr_bytea_integer_integer_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SUBSTR(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SUBSTR(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SUBSTR(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> invalid number of args for substring


<br>

#### <a id="fail-substring_bit_integer_cov-TDS"></a><a id="fail-substring_bit_integer_cov-Relation"></a>`substring_bit_integer_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SUBSTRING(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SUBSTRING(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SUBSTRING(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> invalid number of args for substring


<br>

#### <a id="fail-substring_bit_integer_integer_cov-TDS"></a><a id="fail-substring_bit_integer_integer_cov-Relation"></a>`substring_bit_integer_integer_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SUBSTRING(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SUBSTRING(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SUBSTRING(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> invalid number of args for substring


<br>

#### <a id="fail-substring_bytea_integer_cov-TDS"></a><a id="fail-substring_bytea_integer_cov-Relation"></a>`substring_bytea_integer_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SUBSTRING(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SUBSTRING(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SUBSTRING(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> invalid number of args for substring


<br>

#### <a id="fail-substring_bytea_integer_integer_cov-TDS"></a><a id="fail-substring_bytea_integer_integer_cov-Relation"></a>`substring_bytea_integer_integer_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SUBSTRING(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SUBSTRING(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SUBSTRING(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> invalid number of args for substring


<br>

#### <a id="fail-substring__txt_txt__from_table-Relation"></a>`substring__txt_txt__from_table`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT SUBSTRING(val FROM '[a-z]+') AS result FROM strings WHERE val ~ '[a-z]' ORDER BY 1
```

**Legend SQL:**
```sql
SELECT SUBSTRING(val FROM '[a-z]+') AS result FROM func('e2e::rel_strings') WHERE val ~ '[a-z]' ORDER BY 1
```

**Error:**
> Can't find a match for function 'meta::pure::functions::string::substring(String[1],String[1])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\tsubstring(String[1],Integer[1]):String[1]\nFunctions that can match if number of parameters are changed:\n\t\tsubstring(String[1],Integer[1],Integer[1]):String[1]\n


<br>

#### <a id="fail-substring_text_text_text_cov-TDS"></a><a id="fail-substring_text_text_text_cov-Relation"></a>`substring_text_text_text_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SUBSTRING(name) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SUBSTRING(name) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SUBSTRING(name) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> invalid number of args for substring


<br>

#### <a id="fail-sha256__bytea-TDS"></a><a id="fail-sha256__bytea-Relation"></a>`sha256__bytea`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SHA256('Hello') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SHA256('Hello') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SHA256('Hello') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> SHA256 function must be wrapped with encode(func, 'hex')


<br>

#### <a id="fail-regexp_substr__constant__no_flags-TDS"></a>`regexp_substr__constant__no_flags`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT REGEXP_SUBSTR('abc123def', '[0-9]+') AS matches, REGEXP_SUBSTR('abcdef', '[0-9]+') AS noMatch FROM strings WHERE id = 1
```

**Legend SQL:**
```sql
SELECT REGEXP_SUBSTR('abc123def', '[0-9]+') AS matches, REGEXP_SUBSTR('abcdef', '[0-9]+') AS noMatch FROM func('e2e::tds_strings') WHERE id = 1
```

**Error:**
> Execution error at ??, "Cannot cast a collection of size 0 to multiplicity [1]"


<br>

#### <a id="fail-regexp_substr__constant__start_pos-TDS"></a>`regexp_substr__constant__start_pos`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT REGEXP_SUBSTR('abc123def', '[a-z]+', 1) AS matches, REGEXP_SUBSTR('123', '[a-z]+', 1) AS noMatch FROM strings WHERE id = 1
```

**Legend SQL:**
```sql
SELECT REGEXP_SUBSTR('abc123def', '[a-z]+', 1) AS matches, REGEXP_SUBSTR('123', '[a-z]+', 1) AS noMatch FROM func('e2e::tds_strings') WHERE id = 1
```

**Error:**
> Execution error at ??, "Cannot cast a collection of size 0 to multiplicity [1]"


<br>

#### <a id="fail-regexp_substr__constant__start_pos_occurrence-TDS"></a>`regexp_substr__constant__start_pos_occurrence`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT REGEXP_SUBSTR('abc123def', '[a-z]+', 1, 1) AS matches, REGEXP_SUBSTR('123', '[a-z]+', 1, 1) AS noMatch FROM strings WHERE id = 1
```

**Legend SQL:**
```sql
SELECT REGEXP_SUBSTR('abc123def', '[a-z]+', 1, 1) AS matches, REGEXP_SUBSTR('123', '[a-z]+', 1, 1) AS noMatch FROM func('e2e::tds_strings') WHERE id = 1
```

**Error:**
> Execution error at ??, "Cannot cast a collection of size 0 to multiplicity [1]"


<br>

#### <a id="fail-regexp_substr__constant__flag_in-TDS"></a>`regexp_substr__constant__flag_in`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT REGEXP_SUBSTR('HELLO
world', '^[a-z]+$', 1, 1, 'in') AS matches, REGEXP_SUBSTR('123
456', '^[a-z]+$', 1, 1, 'in') AS noMatch FROM strings WHERE id = 1
```

**Legend SQL:**
```sql
SELECT REGEXP_SUBSTR('HELLO
world', '^[a-z]+$', 1, 1, 'in') AS matches, REGEXP_SUBSTR('123
456', '^[a-z]+$', 1, 1, 'in') AS noMatch FROM func('e2e::tds_strings') WHERE id = 1
```

**Error:**
> Execution error at ??, "Cannot cast a collection of size 0 to multiplicity [1]"


<br>

#### <a id="fail-regexp_substr__constant__flag_i-TDS"></a>`regexp_substr__constant__flag_i`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT REGEXP_SUBSTR('ABC123', '[a-z]+', 1, 1, 'i') AS matches, REGEXP_SUBSTR('123', '[a-z]+', 1, 1, 'i') AS noMatch FROM strings WHERE id = 1
```

**Legend SQL:**
```sql
SELECT REGEXP_SUBSTR('ABC123', '[a-z]+', 1, 1, 'i') AS matches, REGEXP_SUBSTR('123', '[a-z]+', 1, 1, 'i') AS noMatch FROM func('e2e::tds_strings') WHERE id = 1
```

**Error:**
> Execution error at ??, "Cannot cast a collection of size 0 to multiplicity [1]"


<br>

#### <a id="fail-regexp_substr__constant__flag_c-TDS"></a>`regexp_substr__constant__flag_c`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT REGEXP_SUBSTR('abc123', '[a-z]+', 1, 1, 'c') AS matches, REGEXP_SUBSTR('ABC123', '[a-z]+', 1, 1, 'c') AS noMatch FROM strings WHERE id = 1
```

**Legend SQL:**
```sql
SELECT REGEXP_SUBSTR('abc123', '[a-z]+', 1, 1, 'c') AS matches, REGEXP_SUBSTR('ABC123', '[a-z]+', 1, 1, 'c') AS noMatch FROM func('e2e::tds_strings') WHERE id = 1
```

**Error:**
> Execution error at ??, "Cannot cast a collection of size 0 to multiplicity [1]"


<br>

#### <a id="fail-regexp_substr__constant__flag_s-TDS"></a>`regexp_substr__constant__flag_s`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT REGEXP_SUBSTR('hello
world', '.+', 1, 1, 's') AS matches, REGEXP_SUBSTR('', '.+', 1, 1, 's') AS noMatch FROM strings WHERE id = 1
```

**Legend SQL:**
```sql
SELECT REGEXP_SUBSTR('hello
world', '.+', 1, 1, 's') AS matches, REGEXP_SUBSTR('', '.+', 1, 1, 's') AS noMatch FROM func('e2e::tds_strings') WHERE id = 1
```

**Error:**
> Execution error at ??, "Cannot cast a collection of size 0 to multiplicity [1]"


<br>

#### <a id="fail-regexp_substr__constant__flag_n-TDS"></a>`regexp_substr__constant__flag_n`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT REGEXP_SUBSTR('hello
world', '^world$', 1, 1, 'n') AS matches, REGEXP_SUBSTR('hello
world', '^nothere$', 1, 1, 'n') AS noMatch FROM strings WHERE id = 1
```

**Legend SQL:**
```sql
SELECT REGEXP_SUBSTR('hello
world', '^world$', 1, 1, 'n') AS matches, REGEXP_SUBSTR('hello
world', '^nothere$', 1, 1, 'n') AS noMatch FROM func('e2e::tds_strings') WHERE id = 1
```

**Error:**
> Execution error at ??, "Cannot cast a collection of size 0 to multiplicity [1]"


<br>

#### <a id="fail-regexp_substr__constant__flag_m-TDS"></a>`regexp_substr__constant__flag_m`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT REGEXP_SUBSTR('hello
world', '^world$', 1, 1, 'm') AS matches, REGEXP_SUBSTR('hello
world', '^nothere$', 1, 1, 'm') AS noMatch FROM strings WHERE id = 1
```

**Legend SQL:**
```sql
SELECT REGEXP_SUBSTR('hello
world', '^world$', 1, 1, 'm') AS matches, REGEXP_SUBSTR('hello
world', '^nothere$', 1, 1, 'm') AS noMatch FROM func('e2e::tds_strings') WHERE id = 1
```

**Error:**
> Execution error at ??, "Cannot cast a collection of size 0 to multiplicity [1]"


<br>

#### <a id="fail-regexp_substr__constant__subexpr-TDS"></a>`regexp_substr__constant__subexpr`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT REGEXP_SUBSTR('abc123def', '([a-z]+)([0-9]+)', 1, 1, 'i', 0) AS matches, REGEXP_SUBSTR('!!!', '([a-z]+)', 1, 1, 'i', 0) AS noMatch FROM strings WHERE id = 1
```

**Legend SQL:**
```sql
SELECT REGEXP_SUBSTR('abc123def', '([a-z]+)([0-9]+)', 1, 1, 'i', 0) AS matches, REGEXP_SUBSTR('!!!', '([a-z]+)', 1, 1, 'i', 0) AS noMatch FROM func('e2e::tds_strings') WHERE id = 1
```

**Error:**
> Execution error at ??, "Cannot cast a collection of size 0 to multiplicity [1]"


<br>

#### <a id="fail-to_char__intv_txt__from_table-TDS"></a><a id="fail-to_char__intv_txt__from_table-Relation"></a>`to_char__intv_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TO_CHAR(INTERVAL '1 year 2 months 3 days', 'YYYY MM DD') AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT TO_CHAR(INTERVAL '1 year 2 months 3 days', 'YYYY MM DD') AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT TO_CHAR(INTERVAL '1 year 2 months 3 days', 'YYYY MM DD') AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> interval literal only supported in certain contexts


<br>

#### <a id="fail-date_trunc__txt_intv__from_table-TDS"></a><a id="fail-date_trunc__txt_intv__from_table-Relation"></a>`date_trunc__txt_intv__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT DATE_TRUNC('hour', INTERVAL '3 hours 15 minutes') AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT DATE_TRUNC('hour', INTERVAL '3 hours 15 minutes') AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT DATE_TRUNC('hour', INTERVAL '3 hours 15 minutes') AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> interval literal only supported in certain contexts


<br>

#### <a id="fail-extract__txt_intv__from_table-TDS"></a><a id="fail-extract__txt_intv__from_table-Relation"></a>`extract__txt_intv__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT EXTRACT(HOUR FROM INTERVAL '3 hours 15 minutes') AS result FROM dates WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT EXTRACT(HOUR FROM INTERVAL '3 hours 15 minutes') AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT EXTRACT(HOUR FROM INTERVAL '3 hours 15 minutes') AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**Error:**
> interval literal only supported in certain contexts


<br>

#### <a id="fail-coalesce__all_null-TDS"></a><a id="fail-coalesce__all_null-Relation"></a>`coalesce__all_null`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT COALESCE(NULL, NULL, NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT COALESCE(NULL, NULL, NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core/pure/tds/tdsSchema.pure line:359 column:135), "Cannot cast a collection of size 0 to multiplicity [1]"

📗 **Relation Path**

**Input SQL:**
```sql
SELECT COALESCE(NULL, NULL, NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT COALESCE(NULL, NULL, NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Column type is empty for col: result


<br>

#### <a id="fail-cume_dist__variadicORDERBYvariadic__no_generator-Relation"></a>`cume_dist__variadicORDERBYvariadic__no_generator`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT CUME_DIST(30) WITHIN GROUP (ORDER BY age) AS result FROM persons WHERE age IS NOT NULL
```

**Legend SQL:**
```sql
SELECT CUME_DIST(30) WITHIN GROUP (ORDER BY age) AS result FROM func('e2e::rel_persons') WHERE age IS NOT NULL
```

**Error:**
> incorrect number of args for cume_dist


<br>

#### <a id="fail-cume_dist_VARIADIC_any_ORDER_BY_VARIAD_cov-Relation"></a>`cume_dist_VARIADIC_any_ORDER_BY_VARIAD_cov`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT CUME_DIST(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT CUME_DIST(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> incorrect number of args for cume_dist


<br>

#### <a id="fail-dense_rank__variadicORDERBYvariadic__no_generator-Relation"></a>`dense_rank__variadicORDERBYvariadic__no_generator`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT DENSE_RANK(30) WITHIN GROUP (ORDER BY age) AS result FROM persons WHERE age IS NOT NULL
```

**Legend SQL:**
```sql
SELECT DENSE_RANK(30) WITHIN GROUP (ORDER BY age) AS result FROM func('e2e::rel_persons') WHERE age IS NOT NULL
```

**Error:**
> Can't find variable class for variable 'p' in the graph


<br>

#### <a id="fail-dense_rank_VARIADIC_any_ORDER_BY_VARIAD_cov-Relation"></a>`dense_rank_VARIADIC_any_ORDER_BY_VARIAD_cov`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT DENSE_RANK(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT DENSE_RANK(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Can't find variable class for variable 'p' in the graph


<br>

#### <a id="fail-percent_rank__variadicORDERBYvariadic__no_generator-Relation"></a>`percent_rank__variadicORDERBYvariadic__no_generator`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT PERCENT_RANK(30) WITHIN GROUP (ORDER BY age) AS result FROM persons WHERE age IS NOT NULL
```

**Legend SQL:**
```sql
SELECT PERCENT_RANK(30) WITHIN GROUP (ORDER BY age) AS result FROM func('e2e::rel_persons') WHERE age IS NOT NULL
```

**Error:**
> incorrect number of args for percent_rank


<br>

#### <a id="fail-percent_rank_VARIADIC_any_ORDER_BY_VARIAD_cov-Relation"></a>`percent_rank_VARIADIC_any_ORDER_BY_VARIAD_cov`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT PERCENT_RANK(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT PERCENT_RANK(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> incorrect number of args for percent_rank


<br>

#### <a id="fail-percentile_cont__dp[]ORDERBYdp__no_generator-TDS"></a><a id="fail-percentile_cont__dp[]ORDERBYdp__no_generator-Relation"></a>`percentile_cont__dp[]ORDERBYdp__no_generator`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT PERCENTILE_CONT(ARRAY[0.25, 0.5, 0.75]) WITHIN GROUP (ORDER BY salary) AS result FROM persons WHERE salary IS NOT NULL
```

**Legend SQL:**
```sql
SELECT PERCENTILE_CONT(ARRAY[0.25, 0.5, 0.75]) WITHIN GROUP (ORDER BY salary) AS result FROM func('e2e::tds_persons') WHERE salary IS NOT NULL
```

**Error:**
> Ascending argument for percentile should be Boolean'true' or Boolean'false'. Got: 0.5

📗 **Relation Path**

**Input SQL:**
```sql
SELECT PERCENTILE_CONT(ARRAY[0.25, 0.5, 0.75]) WITHIN GROUP (ORDER BY salary) AS result FROM persons WHERE salary IS NOT NULL
```

**Legend SQL:**
```sql
SELECT PERCENTILE_CONT(ARRAY[0.25, 0.5, 0.75]) WITHIN GROUP (ORDER BY salary) AS result FROM func('e2e::rel_persons') WHERE salary IS NOT NULL
```

**Error:**
> Can't find a match for function 'meta::pure::functions::math::percentile(Float[*],Float[3])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\tpercentile(Number[*],Float[1]):Number[0..1]\nFunctions that can match if number of parameters are changed:\n\t\tpercentile(Number[*],Float[1],Boolean[1],Boolean[1]):Number[0..1]\n


<br>

#### <a id="fail-percentile_disc_double_precision_ORDER_BY_anye_cov-TDS"></a><a id="fail-percentile_disc_double_precision_ORDER_BY_anye_cov-Relation"></a>`percentile_disc_double_precision_ORDER_BY_anye_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT PERCENTILE_DISC(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT PERCENTILE_DISC(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT PERCENTILE_DISC(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> percentile must be within group


<br>

#### <a id="fail-percentile_disc__dp[]ORDERBYanyelement__no_generator-TDS"></a><a id="fail-percentile_disc__dp[]ORDERBYanyelement__no_generator-Relation"></a>`percentile_disc__dp[]ORDERBYanyelement__no_generator`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT PERCENTILE_DISC(ARRAY[0.25, 0.5, 0.75]) WITHIN GROUP (ORDER BY salary) AS result FROM persons WHERE salary IS NOT NULL
```

**Legend SQL:**
```sql
SELECT PERCENTILE_DISC(ARRAY[0.25, 0.5, 0.75]) WITHIN GROUP (ORDER BY salary) AS result FROM func('e2e::tds_persons') WHERE salary IS NOT NULL
```

**Error:**
> Ascending argument for percentile should be Boolean'true' or Boolean'false'. Got: 0.5

📗 **Relation Path**

**Input SQL:**
```sql
SELECT PERCENTILE_DISC(ARRAY[0.25, 0.5, 0.75]) WITHIN GROUP (ORDER BY salary) AS result FROM persons WHERE salary IS NOT NULL
```

**Legend SQL:**
```sql
SELECT PERCENTILE_DISC(ARRAY[0.25, 0.5, 0.75]) WITHIN GROUP (ORDER BY salary) AS result FROM func('e2e::rel_persons') WHERE salary IS NOT NULL
```

**Error:**
> Can't find a match for function 'meta::pure::functions::math::percentile(Float[*],Float[3],Boolean[1],Boolean[1])'.\nFunctions that can match if parameter types or multiplicities are changed:\n\t\tpercentile(Number[*],Float[1],Boolean[1],Boolean[1]):Number[0..1]\nFunctions that can match if number of parameters are changed:\n\t\tpercentile(Number[*],Float[1]):Number[0..1]\n


<br>

#### <a id="fail-percentile_disc_double_precision_ORDER_BY_an_cov-TDS"></a><a id="fail-percentile_disc_double_precision_ORDER_BY_an_cov-Relation"></a>`percentile_disc_double_precision_ORDER_BY_an_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT PERCENTILE_DISC(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT PERCENTILE_DISC(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT PERCENTILE_DISC(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> percentile must be within group


<br>

#### <a id="fail-rank__variadicORDERBYvariadic__no_generator-Relation"></a>`rank__variadicORDERBYvariadic__no_generator`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT RANK(30) WITHIN GROUP (ORDER BY age) AS result FROM persons WHERE age IS NOT NULL
```

**Legend SQL:**
```sql
SELECT RANK(30) WITHIN GROUP (ORDER BY age) AS result FROM func('e2e::rel_persons') WHERE age IS NOT NULL
```

**Error:**
> Can't find variable class for variable 'p' in the graph


<br>

#### <a id="fail-rank_VARIADIC_any_ORDER_BY_VARIAD_cov-Relation"></a>`rank_VARIADIC_any_ORDER_BY_VARIAD_cov`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT RANK(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT RANK(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Can't find variable class for variable 'p' in the graph


<br>

#### <a id="fail-string_agg_bytea_bytea_cov-TDS"></a><a id="fail-string_agg_bytea_bytea_cov-Relation"></a>`string_agg_bytea_bytea_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT STRING_AGG(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT STRING_AGG(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT STRING_AGG(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Error mapping not found for class Nil cache:''


<br>

#### <a id="fail-sum_money_cov-TDS"></a><a id="fail-sum_money_cov-Relation"></a>`sum_money_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SUM(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SUM(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SUM(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Error mapping not found for class Nil cache:''


<br>

#### <a id="fail-last_value__anyelement__from_table-Relation"></a>`last_value__anyelement__from_table`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT name, LAST_VALUE(name) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS result FROM persons WHERE name IS NOT NULL ORDER BY name
```

**Legend SQL:**
```sql
SELECT name, LAST_VALUE(name) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS result FROM func('e2e::rel_persons') WHERE name IS NOT NULL ORDER BY name
```

**Error:**
> Cannot invoke "Object.getClass()" because "resO" is null


<br>

#### <a id="fail-currval__regclass__basic-TDS"></a><a id="fail-currval__regclass__basic-Relation"></a>`currval__regclass__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CURRVAL('test_seq') AS result FROM (SELECT NEXTVAL('test_seq')) AS init
```

**Legend SQL:**
```sql
SELECT CURRVAL('test_seq') AS result FROM (SELECT NEXTVAL('test_seq')) AS init
```

**Error:**
> ERROR: org.postgresql.util.PSQLException: ERROR: relation "test_seq" does not exist
>   Position: 59


<br>

#### <a id="fail-lastval__basic-TDS"></a><a id="fail-lastval__basic-Relation"></a>`lastval__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT LASTVAL() AS result FROM (SELECT NEXTVAL('test_seq')) AS init
```

**Legend SQL:**
```sql
SELECT LASTVAL() AS result FROM (SELECT NEXTVAL('test_seq')) AS init
```

**Error:**
> ERROR: org.postgresql.util.PSQLException: ERROR: relation "test_seq" does not exist
>   Position: 49


<br>

#### <a id="fail-nextval__regclass__basic-TDS"></a><a id="fail-nextval__regclass__basic-Relation"></a>`nextval__regclass__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT NEXTVAL('test_seq') AS result
```

**Legend SQL:**
```sql
SELECT NEXTVAL('test_seq') AS result
```

**Error:**
> ERROR: org.postgresql.util.PSQLException: ERROR: relation "test_seq" does not exist
>   Position: 16


<br>

#### <a id="fail-setval__regclass_big__basic-TDS"></a><a id="fail-setval__regclass_big__basic-Relation"></a>`setval__regclass_big__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SETVAL('test_seq', 42) AS result
```

**Legend SQL:**
```sql
SELECT SETVAL('test_seq', 42) AS result
```

**Error:**
> ERROR: org.postgresql.util.PSQLException: ERROR: relation "test_seq" does not exist
>   Position: 15


<br>

#### <a id="fail-setval__regclass_big_bool__basic-TDS"></a><a id="fail-setval__regclass_big_bool__basic-Relation"></a>`setval__regclass_big_bool__basic`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SETVAL('test_seq', 100, true) AS result
```

**Legend SQL:**
```sql
SELECT SETVAL('test_seq', 100, true) AS result
```

**Error:**
> ERROR: org.postgresql.util.PSQLException: ERROR: relation "test_seq" does not exist
>   Position: 15


<br>

#### <a id="fail-digest_sha1__bytea-TDS"></a><a id="fail-digest_sha1__bytea-Relation"></a>`digest_sha1__bytea`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT digest('Hello, World!', 'sha1') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT digest('Hello, World!', 'sha1') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT digest('Hello, World!', 'sha1') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> SHA1 function must be wrapped with encode(func, 'hex')


<br>

#### <a id="fail-digest_sha256__bytea-TDS"></a><a id="fail-digest_sha256__bytea-Relation"></a>`digest_sha256__bytea`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT digest('Hello, World!', 'sha256') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT digest('Hello, World!', 'sha256') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT digest('Hello, World!', 'sha256') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> SHA256 function must be wrapped with encode(func, 'hex')


<br>

#### <a id="fail-digest_md5__bytea-TDS"></a><a id="fail-digest_md5__bytea-Relation"></a>`digest_md5__bytea`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT digest('Hello, World!', 'md5') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT digest('Hello, World!', 'md5') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT digest('Hello, World!', 'md5') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> MD5 function must be wrapped with encode(func, 'hex')


<br>

#### <a id="fail-digest_sha1_column__bytea-TDS"></a><a id="fail-digest_sha1_column__bytea-Relation"></a>`digest_sha1_column__bytea`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT digest(name, 'sha1') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT digest(name, 'sha1') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT digest(name, 'sha1') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> SHA1 function must be wrapped with encode(func, 'hex')


<br>

#### <a id="fail-digest_sha256_column__bytea-TDS"></a><a id="fail-digest_sha256_column__bytea-Relation"></a>`digest_sha256_column__bytea`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT digest(name, 'sha256') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT digest(name, 'sha256') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT digest(name, 'sha256') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> SHA256 function must be wrapped with encode(func, 'hex')


<br>

#### <a id="fail-digest_md5_column__bytea-TDS"></a><a id="fail-digest_md5_column__bytea-Relation"></a>`digest_md5_column__bytea`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT digest(name, 'md5') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT digest(name, 'md5') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT digest(name, 'md5') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> MD5 function must be wrapped with encode(func, 'hex')


<br>

#### <a id="fail-date_literal__datetime_t_with_tz-TDS"></a><a id="fail-date_literal__datetime_t_with_tz-Relation"></a>`date_literal__datetime_t_with_tz`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TIMESTAMP WITH TIME ZONE '1999-01-08T04:05:06+05:30' AS result FROM dates LIMIT 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: 


<br>

#### <a id="fail-date_literal__mdy_us_style-TDS"></a><a id="fail-date_literal__mdy_us_style-Relation"></a>`date_literal__mdy_us_style`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT DATE '1/8/1999' AS result FROM dates LIMIT 1
```

**Legend SQL (TDS):**
```sql
SELECT DATE '1/8/1999' AS result FROM func('e2e::tds_dates') LIMIT 1
```

**Legend SQL (Relation):**
```sql
SELECT DATE '1/8/1999' AS result FROM func('e2e::rel_dates') LIMIT 1
```

**Error:**
> Execution error at ??, "Failed to parse date string: 1/8/1999"


<br>

#### <a id="fail-date_literal__tz_with_subseconds-TDS"></a><a id="fail-date_literal__tz_with_subseconds-Relation"></a>`date_literal__tz_with_subseconds`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TIMESTAMP WITH TIME ZONE '1999-01-08 04:05:06.789+05:30' AS result FROM dates LIMIT 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: 


<br>

#### <a id="fail-date_literal__bc_date-TDS"></a><a id="fail-date_literal__bc_date-Relation"></a>`date_literal__bc_date`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT DATE 'January 8, 99 BC' AS result FROM dates LIMIT 1
```

**Legend SQL (TDS):**
```sql
SELECT DATE 'January 8, 99 BC' AS result FROM func('e2e::tds_dates') LIMIT 1
```

**Legend SQL (Relation):**
```sql
SELECT DATE 'January 8, 99 BC' AS result FROM func('e2e::rel_dates') LIMIT 1
```

**Error:**
> ERROR: time zone displacement out of range: "-98-01-08"\n  Position: 75


<br>

#### <a id="fail-date_literal__tz_utc-TDS"></a><a id="fail-date_literal__tz_utc-Relation"></a>`date_literal__tz_utc`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TIMESTAMP WITH TIME ZONE '1999-01-08 04:05:06+00:00' AS result FROM dates LIMIT 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: 


<br>

#### <a id="fail-date_literal__tz_negative_offset-TDS"></a><a id="fail-date_literal__tz_negative_offset-Relation"></a>`date_literal__tz_negative_offset`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TIMESTAMP WITH TIME ZONE '1999-01-08 04:05:06-05:00' AS result FROM dates LIMIT 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: 


<br>

#### <a id="fail-date_literal__two_digit_year-TDS"></a><a id="fail-date_literal__two_digit_year-Relation"></a>`date_literal__two_digit_year`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT DATE '99-01-08' AS result FROM dates LIMIT 1
```

**Legend SQL (TDS):**
```sql
SELECT DATE '99-01-08' AS result FROM func('e2e::tds_dates') LIMIT 1
```

**Legend SQL (Relation):**
```sql
SELECT DATE '99-01-08' AS result FROM func('e2e::rel_dates') LIMIT 1
```

**Error:**
> Postgres rejected reference SQL but Legend executed it successfully. Fix the reference SQL or the Legend parser/planner. Postgres error: ERROR: date/time field value out of range: "99-01-08"
>   Hint: Perhaps you need a different "datestyle" setting.
>   Position: 13


<br>

#### <a id="fail-date_literal__mdy_dashes-TDS"></a><a id="fail-date_literal__mdy_dashes-Relation"></a>`date_literal__mdy_dashes`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT DATE '1-8-1999' AS result FROM dates LIMIT 1
```

**Legend SQL (TDS):**
```sql
SELECT DATE '1-8-1999' AS result FROM func('e2e::tds_dates') LIMIT 1
```

**Legend SQL (Relation):**
```sql
SELECT DATE '1-8-1999' AS result FROM func('e2e::rel_dates') LIMIT 1
```

**Error:**
> Execution error at ??, "Failed to parse date string: 1-8-1999"


<br>

#### <a id="fail-date_literal__tz_positive_offset-TDS"></a><a id="fail-date_literal__tz_positive_offset-Relation"></a>`date_literal__tz_positive_offset`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TIMESTAMP WITH TIME ZONE '1999-01-08 04:05:06+02' AS result FROM dates LIMIT 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: 


<br>

#### <a id="fail-date_literal__mdy_timestamp-TDS"></a><a id="fail-date_literal__mdy_timestamp-Relation"></a>`date_literal__mdy_timestamp`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TIMESTAMP '1/8/1999 04:05:06' AS result FROM dates LIMIT 1
```

**Legend SQL (TDS):**
```sql
SELECT TIMESTAMP '1/8/1999 04:05:06' AS result FROM func('e2e::tds_dates') LIMIT 1
```

**Legend SQL (Relation):**
```sql
SELECT TIMESTAMP '1/8/1999 04:05:06' AS result FROM func('e2e::rel_dates') LIMIT 1
```

**Error:**
> Execution error at ??, "Failed to parse date string: 1/8/1999 04:05:06"


<br>

#### <a id="fail-date_literal__dmy_dots-TDS"></a><a id="fail-date_literal__dmy_dots-Relation"></a>`date_literal__dmy_dots`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT DATE '31.1.1999' AS result FROM dates LIMIT 1
```

**Legend SQL (TDS):**
```sql
SELECT DATE '31.1.1999' AS result FROM func('e2e::tds_dates') LIMIT 1
```

**Legend SQL (Relation):**
```sql
SELECT DATE '31.1.1999' AS result FROM func('e2e::rel_dates') LIMIT 1
```

**Error:**
> Execution error at ??, "Failed to parse date string: 31.1.1999"


<br>

#### <a id="fail-date_literal__tz_abbrev_stripped-TDS"></a><a id="fail-date_literal__tz_abbrev_stripped-Relation"></a>`date_literal__tz_abbrev_stripped`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TIMESTAMP WITH TIME ZONE '1999-01-08 04:05:06 PST' AS result FROM dates LIMIT 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: 


<a id="unsupported-syntax"></a>

### UNSUPPORTED_SYNTAX (88 tests)

#### <a id="fail-log__num_num__from_table-TDS"></a><a id="fail-log__num_num__from_table-Relation"></a>`log__num_num__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT LOG(10::numeric, ABS(numeric_val) + 1) AS result FROM numbers WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT LOG(10::numeric, ABS(numeric_val) + 1) AS result FROM func('e2e::tds_numbers') WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT LOG(10::numeric, ABS(numeric_val) + 1) AS result FROM func('e2e::rel_numbers') WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: only base 10 supported for log function


<br>

#### <a id="fail-trunc__num_int__from_table-TDS"></a><a id="fail-trunc__num_int__from_table-Relation"></a>`trunc__num_int__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TRUNC(numeric_val, 2) AS result FROM numbers WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT TRUNC(numeric_val, 2) AS result FROM func('e2e::tds_numbers') WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT TRUNC(numeric_val, 2) AS result FROM func('e2e::rel_numbers') WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: trunc with defined decimal places is not currently supported


<br>

#### <a id="fail-bit_length__bit__unsupported_type-TDS"></a><a id="fail-bit_length__bit__unsupported_type-Relation"></a>`bit_length__bit__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_LENGTH(B'1010') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT BIT_LENGTH(B'1010') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT BIT_LENGTH(B'1010') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-bit_length__bytea__unsupported_type-TDS"></a><a id="fail-bit_length__bytea__unsupported_type-Relation"></a>`bit_length__bytea__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BIT_LENGTH(E'\\xDEADBEEF'::bytea) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT BIT_LENGTH(E'\\xDEADBEEF'::bytea) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT BIT_LENGTH(E'\\xDEADBEEF'::bytea) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Escaped Chars String Literal


<br>

#### <a id="fail-btrim__bytea_bytea__unsupported_type-TDS"></a><a id="fail-btrim__bytea_bytea__unsupported_type-Relation"></a>`btrim__bytea_bytea__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BTRIM(E'\\x00DEADBEEF00'::bytea, E'\\x00'::bytea) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT BTRIM(E'\\x00DEADBEEF00'::bytea, E'\\x00'::bytea) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT BTRIM(E'\\x00DEADBEEF00'::bytea, E'\\x00'::bytea) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Escaped Chars String Literal


<br>

#### <a id="fail-btrim__txt_txt__from_table-TDS"></a><a id="fail-btrim__txt_txt__from_table-Relation"></a>`btrim__txt_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT BTRIM(val, 'hx') AS result FROM strings ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT BTRIM(val, 'hx') AS result FROM func('e2e::tds_strings') ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT BTRIM(val, 'hx') AS result FROM func('e2e::rel_strings') ORDER BY 1
```

**Error:**
> only empty string trim is currently supported


<br>

#### <a id="fail-char_length__char__unsupported_type-TDS"></a><a id="fail-char_length__char__unsupported_type-Relation"></a>`char_length__char__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT CHAR_LENGTH('hello'::character(10)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT CHAR_LENGTH('hello'::character(10)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT CHAR_LENGTH('hello'::character(10)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> parameters not currently supported for this cast type


<br>

#### <a id="fail-encode__bytea_txt__unsupported_type-TDS"></a><a id="fail-encode__bytea_txt__unsupported_type-Relation"></a>`encode__bytea_txt__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT ENCODE(E'\\xDEADBEEF'::bytea, 'hex') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT ENCODE(E'\\xDEADBEEF'::bytea, 'hex') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT ENCODE(E'\\xDEADBEEF'::bytea, 'hex') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Escaped Chars String Literal


<br>

#### <a id="fail-length__bit__unsupported_type-TDS"></a><a id="fail-length__bit__unsupported_type-Relation"></a>`length__bit__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT LENGTH(B'1010') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT LENGTH(B'1010') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT LENGTH(B'1010') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-length__bytea__unsupported_type-TDS"></a><a id="fail-length__bytea__unsupported_type-Relation"></a>`length__bytea__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT LENGTH(E'\\xDEADBEEF'::bytea) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT LENGTH(E'\\xDEADBEEF'::bytea) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT LENGTH(E'\\xDEADBEEF'::bytea) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Escaped Chars String Literal


<br>

#### <a id="fail-length__bytea_name__unsupported_type-TDS"></a><a id="fail-length__bytea_name__unsupported_type-Relation"></a>`length__bytea_name__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT LENGTH(E'\\xDEADBEEF'::bytea, 'UTF8') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT LENGTH(E'\\xDEADBEEF'::bytea, 'UTF8') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT LENGTH(E'\\xDEADBEEF'::bytea, 'UTF8') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Escaped Chars String Literal


<br>

#### <a id="fail-length__char__unsupported_type-TDS"></a><a id="fail-length__char__unsupported_type-Relation"></a>`length__char__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT LENGTH('hello'::character(10)) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT LENGTH('hello'::character(10)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT LENGTH('hello'::character(10)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> parameters not currently supported for this cast type


<br>

#### <a id="fail-ltrim__bytea_bytea__unsupported_type-TDS"></a><a id="fail-ltrim__bytea_bytea__unsupported_type-Relation"></a>`ltrim__bytea_bytea__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT LTRIM(E'\\x00DEADBEEF00'::bytea, E'\\x00'::bytea) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT LTRIM(E'\\x00DEADBEEF00'::bytea, E'\\x00'::bytea) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT LTRIM(E'\\x00DEADBEEF00'::bytea, E'\\x00'::bytea) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Escaped Chars String Literal


<br>

#### <a id="fail-md5__bytea__unsupported_type-TDS"></a><a id="fail-md5__bytea__unsupported_type-Relation"></a>`md5__bytea__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MD5(E'\\xDEADBEEF'::bytea) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MD5(E'\\xDEADBEEF'::bytea) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MD5(E'\\xDEADBEEF'::bytea) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Escaped Chars String Literal


<br>

#### <a id="fail-octet_length__bit__unsupported_type-TDS"></a><a id="fail-octet_length__bit__unsupported_type-Relation"></a>`octet_length__bit__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT OCTET_LENGTH(B'1010') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT OCTET_LENGTH(B'1010') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT OCTET_LENGTH(B'1010') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-octet_length__bytea__unsupported_type-TDS"></a><a id="fail-octet_length__bytea__unsupported_type-Relation"></a>`octet_length__bytea__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT OCTET_LENGTH(E'\\xDEADBEEF'::bytea) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT OCTET_LENGTH(E'\\xDEADBEEF'::bytea) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT OCTET_LENGTH(E'\\xDEADBEEF'::bytea) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Escaped Chars String Literal


<br>

#### <a id="fail-rtrim__bytea_bytea__unsupported_type-TDS"></a><a id="fail-rtrim__bytea_bytea__unsupported_type-Relation"></a>`rtrim__bytea_bytea__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT RTRIM(E'\\x00DEADBEEF00'::bytea, E'\\x00'::bytea) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT RTRIM(E'\\x00DEADBEEF00'::bytea, E'\\x00'::bytea) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT RTRIM(E'\\x00DEADBEEF00'::bytea, E'\\x00'::bytea) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Escaped Chars String Literal


<br>

#### <a id="fail-string_to_array__txt_txt_txt__from_table-TDS"></a><a id="fail-string_to_array__txt_txt_txt__from_table-Relation"></a>`string_to_array__txt_txt_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT STRING_TO_ARRAY(val, ' ', '') AS result FROM strings WHERE val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT STRING_TO_ARRAY(val, ' ', '') AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT STRING_TO_ARRAY(val, ' ', '') AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: only string_to_array with arg 2 supported


<br>

#### <a id="fail-substr__bytea_int__unsupported_type-TDS"></a><a id="fail-substr__bytea_int__unsupported_type-Relation"></a>`substr__bytea_int__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SUBSTR(E'\\xDEADBEEF'::bytea, 2) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SUBSTR(E'\\xDEADBEEF'::bytea, 2) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SUBSTR(E'\\xDEADBEEF'::bytea, 2) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Escaped Chars String Literal


<br>

#### <a id="fail-substr__bytea_int_int__unsupported_type-TDS"></a><a id="fail-substr__bytea_int_int__unsupported_type-Relation"></a>`substr__bytea_int_int__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SUBSTR(E'\\xDEADBEEF'::bytea, 2, 2) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SUBSTR(E'\\xDEADBEEF'::bytea, 2, 2) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SUBSTR(E'\\xDEADBEEF'::bytea, 2, 2) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Escaped Chars String Literal


<br>

#### <a id="fail-substring__bit_int__unsupported_type-TDS"></a><a id="fail-substring__bit_int__unsupported_type-Relation"></a>`substring__bit_int__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SUBSTRING(B'1010101010', 3) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SUBSTRING(B'1010101010', 3) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SUBSTRING(B'1010101010', 3) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-substring__bit_int_int__unsupported_type-TDS"></a><a id="fail-substring__bit_int_int__unsupported_type-Relation"></a>`substring__bit_int_int__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SUBSTRING(B'1010101010', 3, 2) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SUBSTRING(B'1010101010', 3, 2) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SUBSTRING(B'1010101010', 3, 2) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Bit String


<br>

#### <a id="fail-substring__bytea_int__unsupported_type-TDS"></a><a id="fail-substring__bytea_int__unsupported_type-Relation"></a>`substring__bytea_int__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SUBSTRING(E'\\xDEADBEEF'::bytea, 2) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SUBSTRING(E'\\xDEADBEEF'::bytea, 2) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SUBSTRING(E'\\xDEADBEEF'::bytea, 2) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Escaped Chars String Literal


<br>

#### <a id="fail-substring__bytea_int_int__unsupported_type-TDS"></a><a id="fail-substring__bytea_int_int__unsupported_type-Relation"></a>`substring__bytea_int_int__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SUBSTRING(E'\\xDEADBEEF'::bytea, 2, 2) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT SUBSTRING(E'\\xDEADBEEF'::bytea, 2, 2) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT SUBSTRING(E'\\xDEADBEEF'::bytea, 2, 2) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported Operation: Escaped Chars String Literal


<br>

#### <a id="fail-regexp_instr__constant__extra_args_error-TDS"></a><a id="fail-regexp_instr__constant__extra_args_error-Relation"></a>`regexp_instr__constant__extra_args_error`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT REGEXP_INSTR('abc123', '[0-9]', 1) AS result FROM strings WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT REGEXP_INSTR('abc123', '[0-9]', 1) AS result FROM func('e2e::tds_strings') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT REGEXP_INSTR('abc123', '[0-9]', 1) AS result FROM func('e2e::rel_strings') WHERE id = 1
```

**Error:**
> regexp_instr with a start position, occurrence or flags is not supported


<br>

#### <a id="fail-to_char__big_txt__from_table-TDS"></a><a id="fail-to_char__big_txt__from_table-Relation"></a>`to_char__big_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TO_CHAR(big_val, '9999999999') AS result FROM numbers WHERE big_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT TO_CHAR(big_val, '9999999999') AS result FROM func('e2e::tds_numbers') WHERE big_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT TO_CHAR(big_val, '9999999999') AS result FROM func('e2e::rel_numbers') WHERE big_val IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: to_char currently only supported for date inputs


<br>

#### <a id="fail-to_char__dp_txt__from_table-TDS"></a><a id="fail-to_char__dp_txt__from_table-Relation"></a>`to_char__dp_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TO_CHAR(float_val, '999.99') AS result FROM numbers WHERE float_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT TO_CHAR(float_val, '999.99') AS result FROM func('e2e::tds_numbers') WHERE float_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT TO_CHAR(float_val, '999.99') AS result FROM func('e2e::rel_numbers') WHERE float_val IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: to_char currently only supported for date inputs


<br>

#### <a id="fail-to_char__int_txt__from_table-TDS"></a><a id="fail-to_char__int_txt__from_table-Relation"></a>`to_char__int_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TO_CHAR(int_val, '999999') AS result FROM numbers WHERE int_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT TO_CHAR(int_val, '999999') AS result FROM func('e2e::tds_numbers') WHERE int_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT TO_CHAR(int_val, '999999') AS result FROM func('e2e::rel_numbers') WHERE int_val IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: to_char currently only supported for date inputs


<br>

#### <a id="fail-to_char__num_txt__from_table-TDS"></a><a id="fail-to_char__num_txt__from_table-Relation"></a>`to_char__num_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TO_CHAR(numeric_val, '999999.99') AS result FROM numbers WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT TO_CHAR(numeric_val, '999999.99') AS result FROM func('e2e::tds_numbers') WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT TO_CHAR(numeric_val, '999999.99') AS result FROM func('e2e::rel_numbers') WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Error:**
> Unsupported: to_char currently only supported for date inputs


<br>

#### <a id="fail-json_build_array__empty-Relation"></a>`json_build_array__empty`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSON_BUILD_ARRAY() AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_BUILD_ARRAY() AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::functions::collection::List), only primitive types and enums are supported


<br>

#### <a id="fail-json_build_array__variadic__from_column-Relation"></a>`json_build_array__variadic__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSON_BUILD_ARRAY(id, json_val ->> 'b') AS result FROM json_data WHERE id <= 3 ORDER BY id
```

**Legend SQL:**
```sql
SELECT JSON_BUILD_ARRAY(id, json_val ->> 'b') AS result FROM func('e2e::rel_json_data') WHERE id <= 3 ORDER BY id
```

**Error:**
> Unsupported type on column: result (meta::pure::functions::collection::List), only primitive types and enums are supported


<br>

#### <a id="fail-json_build_object__empty-Relation"></a>`json_build_object__empty`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSON_BUILD_OBJECT() AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_BUILD_OBJECT() AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::functions::collection::Map), only primitive types and enums are supported


<br>

#### <a id="fail-json_build_object__variadic__from_column-Relation"></a>`json_build_object__variadic__from_column`

📗 **Relation Path**

**Input SQL:**
```sql
SELECT JSON_BUILD_OBJECT('id', id, 'val', json_val ->> 'b') AS result FROM json_data WHERE id <= 3 ORDER BY id
```

**Legend SQL:**
```sql
SELECT JSON_BUILD_OBJECT('id', id, 'val', json_val ->> 'b') AS result FROM func('e2e::rel_json_data') WHERE id <= 3 ORDER BY id
```

**Error:**
> Unsupported type on column: result (meta::pure::functions::collection::Map), only primitive types and enums are supported


<br>

#### <a id="fail-array_position__anycompatiblearray_anycompatible__from_table-TDS"></a>`array_position__anycompatiblearray_anycompatible__from_table`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT ARRAY_POSITION(ARRAY[1,2,3], 2) AS result FROM numbers WHERE id = 1
```

**Legend SQL:**
```sql
SELECT ARRAY_POSITION(ARRAY[1, 2, 3], 2) AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Error:**
> Unsupported: array_position only supported on relation inputs


<br>

#### <a id="fail-array_position__anycompatiblearray_anycompatible_int__with_start-TDS"></a><a id="fail-array_position__anycompatiblearray_anycompatible_int__with_start-Relation"></a>`array_position__anycompatiblearray_anycompatible_int__with_start`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT ARRAY_POSITION(ARRAY[1,2,3,2], 2, 2) AS result FROM numbers WHERE id = 1
```

**Legend SQL:**
```sql
SELECT ARRAY_POSITION(ARRAY[1, 2, 3, 2], 2, 2) AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**Error:**
> Unsupported: array_position only supported on relation inputs

📗 **Relation Path**

**Input SQL:**
```sql
SELECT ARRAY_POSITION(ARRAY[1,2,3,2], 2, 2) AS result FROM numbers WHERE id = 1
```

**Legend SQL:**
```sql
SELECT ARRAY_POSITION(ARRAY[1, 2, 3, 2], 2, 2) AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**Error:**
> Unsupported: only two arg array_position supported


<br>

#### <a id="fail-avg__intv__from_table-TDS"></a><a id="fail-avg__intv__from_table-Relation"></a>`avg__intv__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT AVG(INTERVAL '1 day' * id) AS result FROM numbers WHERE id <= 3
```

**Legend SQL (TDS):**
```sql
SELECT AVG(INTERVAL '1 day' * id) AS result FROM func('e2e::tds_numbers') WHERE id <= 3
```

**Legend SQL (Relation):**
```sql
SELECT AVG(INTERVAL '1 day' * id) AS result FROM func('e2e::rel_numbers') WHERE id <= 3
```

**Error:**
> date arithmetic expression not currently supported


<br>

#### <a id="fail-cume_dist__variadicORDERBYvariadic__no_generator-TDS"></a>`cume_dist__variadicORDERBYvariadic__no_generator`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT CUME_DIST(30) WITHIN GROUP (ORDER BY age) AS result FROM persons WHERE age IS NOT NULL
```

**Legend SQL:**
```sql
SELECT CUME_DIST(30) WITHIN GROUP (ORDER BY age) AS result FROM func('e2e::tds_persons') WHERE age IS NOT NULL
```

**Error:**
> Unsupported: cume_dist only supported on relation inputs


<br>

#### <a id="fail-cume_dist_VARIADIC_any_ORDER_BY_VARIAD_cov-TDS"></a>`cume_dist_VARIADIC_any_ORDER_BY_VARIAD_cov`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT CUME_DIST(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT CUME_DIST(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> Unsupported: cume_dist only supported on relation inputs


<br>

#### <a id="fail-dense_rank__variadicORDERBYvariadic__no_generator-TDS"></a>`dense_rank__variadicORDERBYvariadic__no_generator`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT DENSE_RANK(30) WITHIN GROUP (ORDER BY age) AS result FROM persons WHERE age IS NOT NULL
```

**Legend SQL:**
```sql
SELECT DENSE_RANK(30) WITHIN GROUP (ORDER BY age) AS result FROM func('e2e::tds_persons') WHERE age IS NOT NULL
```

**Error:**
> Unsupported type on column: result (meta::pure::functions::collection::Map), only primitive types and enums are supported


<br>

#### <a id="fail-dense_rank_VARIADIC_any_ORDER_BY_VARIAD_cov-TDS"></a>`dense_rank_VARIADIC_any_ORDER_BY_VARIAD_cov`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT DENSE_RANK(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT DENSE_RANK(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::functions::collection::Map), only primitive types and enums are supported


<br>

#### <a id="fail-max_anyarray_cov-TDS"></a><a id="fail-max_anyarray_cov-Relation"></a>`max_anyarray_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MAX(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MAX(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::metamodel::type::Nil), only primitive types and enums are supported


<br>

#### <a id="fail-max_anyenum_cov-TDS"></a><a id="fail-max_anyenum_cov-Relation"></a>`max_anyenum_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MAX(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MAX(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::metamodel::type::Nil), only primitive types and enums are supported


<br>

#### <a id="fail-max__char__no_generator-TDS"></a><a id="fail-max__char__no_generator-Relation"></a>`max__char__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(name::char(10)) AS result FROM persons WHERE name IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MAX(name::char(10)) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MAX(name::char(10)) AS result FROM func('e2e::rel_persons') WHERE name IS NOT NULL
```

**Error:**
> parameters not currently supported for this cast type


<br>

#### <a id="fail-max_inet_cov-TDS"></a><a id="fail-max_inet_cov-Relation"></a>`max_inet_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MAX(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MAX(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::metamodel::type::Nil), only primitive types and enums are supported


<br>

#### <a id="fail-max__intv__from_table-TDS"></a><a id="fail-max__intv__from_table-Relation"></a>`max__intv__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(INTERVAL '1 day' * id) AS result FROM numbers WHERE id <= 5
```

**Legend SQL (TDS):**
```sql
SELECT MAX(INTERVAL '1 day' * id) AS result FROM func('e2e::tds_numbers') WHERE id <= 5
```

**Legend SQL (Relation):**
```sql
SELECT MAX(INTERVAL '1 day' * id) AS result FROM func('e2e::rel_numbers') WHERE id <= 5
```

**Error:**
> date arithmetic expression not currently supported


<br>

#### <a id="fail-max_money_cov-TDS"></a><a id="fail-max_money_cov-Relation"></a>`max_money_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MAX(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MAX(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::metamodel::type::Nil), only primitive types and enums are supported


<br>

#### <a id="fail-max_oid_cov-TDS"></a><a id="fail-max_oid_cov-Relation"></a>`max_oid_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MAX(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MAX(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::metamodel::type::Nil), only primitive types and enums are supported


<br>

#### <a id="fail-max_pg_lsn_cov-TDS"></a><a id="fail-max_pg_lsn_cov-Relation"></a>`max_pg_lsn_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MAX(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MAX(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::metamodel::type::Nil), only primitive types and enums are supported


<br>

#### <a id="fail-max_tid_cov-TDS"></a><a id="fail-max_tid_cov-Relation"></a>`max_tid_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MAX(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MAX(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::metamodel::type::Nil), only primitive types and enums are supported


<br>

#### <a id="fail-max_xid8_cov-TDS"></a><a id="fail-max_xid8_cov-Relation"></a>`max_xid8_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MAX(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MAX(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::metamodel::type::Nil), only primitive types and enums are supported


<br>

#### <a id="fail-min_anyarray_cov-TDS"></a><a id="fail-min_anyarray_cov-Relation"></a>`min_anyarray_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MIN(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MIN(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::metamodel::type::Nil), only primitive types and enums are supported


<br>

#### <a id="fail-min_anyenum_cov-TDS"></a><a id="fail-min_anyenum_cov-Relation"></a>`min_anyenum_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MIN(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MIN(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::metamodel::type::Nil), only primitive types and enums are supported


<br>

#### <a id="fail-min__char__no_generator-TDS"></a><a id="fail-min__char__no_generator-Relation"></a>`min__char__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(name::char(10)) AS result FROM persons WHERE name IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MIN(name::char(10)) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MIN(name::char(10)) AS result FROM func('e2e::rel_persons') WHERE name IS NOT NULL
```

**Error:**
> parameters not currently supported for this cast type


<br>

#### <a id="fail-min_inet_cov-TDS"></a><a id="fail-min_inet_cov-Relation"></a>`min_inet_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MIN(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MIN(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::metamodel::type::Nil), only primitive types and enums are supported


<br>

#### <a id="fail-min__intv__from_table-TDS"></a><a id="fail-min__intv__from_table-Relation"></a>`min__intv__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(INTERVAL '1 day' * id) AS result FROM numbers WHERE id <= 5
```

**Legend SQL (TDS):**
```sql
SELECT MIN(INTERVAL '1 day' * id) AS result FROM func('e2e::tds_numbers') WHERE id <= 5
```

**Legend SQL (Relation):**
```sql
SELECT MIN(INTERVAL '1 day' * id) AS result FROM func('e2e::rel_numbers') WHERE id <= 5
```

**Error:**
> date arithmetic expression not currently supported


<br>

#### <a id="fail-min_money_cov-TDS"></a><a id="fail-min_money_cov-Relation"></a>`min_money_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MIN(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MIN(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::metamodel::type::Nil), only primitive types and enums are supported


<br>

#### <a id="fail-min_oid_cov-TDS"></a><a id="fail-min_oid_cov-Relation"></a>`min_oid_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MIN(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MIN(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::metamodel::type::Nil), only primitive types and enums are supported


<br>

#### <a id="fail-min_pg_lsn_cov-TDS"></a><a id="fail-min_pg_lsn_cov-Relation"></a>`min_pg_lsn_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MIN(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MIN(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::metamodel::type::Nil), only primitive types and enums are supported


<br>

#### <a id="fail-min_tid_cov-TDS"></a><a id="fail-min_tid_cov-Relation"></a>`min_tid_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MIN(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MIN(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::metamodel::type::Nil), only primitive types and enums are supported


<br>

#### <a id="fail-min_xid8_cov-TDS"></a><a id="fail-min_xid8_cov-Relation"></a>`min_xid8_cov`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT MIN(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT MIN(NULL) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::metamodel::type::Nil), only primitive types and enums are supported


<br>

#### <a id="fail-percent_rank__variadicORDERBYvariadic__no_generator-TDS"></a>`percent_rank__variadicORDERBYvariadic__no_generator`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT PERCENT_RANK(30) WITHIN GROUP (ORDER BY age) AS result FROM persons WHERE age IS NOT NULL
```

**Legend SQL:**
```sql
SELECT PERCENT_RANK(30) WITHIN GROUP (ORDER BY age) AS result FROM func('e2e::tds_persons') WHERE age IS NOT NULL
```

**Error:**
> Unsupported: percent_rank only supported on relation inputs


<br>

#### <a id="fail-percent_rank_VARIADIC_any_ORDER_BY_VARIAD_cov-TDS"></a>`percent_rank_VARIADIC_any_ORDER_BY_VARIAD_cov`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT PERCENT_RANK(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT PERCENT_RANK(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> Unsupported: percent_rank only supported on relation inputs


<br>

#### <a id="fail-percentile_cont__dpORDERBYintv__no_generator-TDS"></a><a id="fail-percentile_cont__dpORDERBYintv__no_generator-Relation"></a>`percentile_cont__dpORDERBYintv__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY INTERVAL '1 day' * id) AS result FROM numbers WHERE id <= 5
```

**Legend SQL (TDS):**
```sql
SELECT PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY INTERVAL '1 day' * id) AS result FROM func('e2e::tds_numbers') WHERE id <= 5
```

**Legend SQL (Relation):**
```sql
SELECT PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY INTERVAL '1 day' * id) AS result FROM func('e2e::rel_numbers') WHERE id <= 5
```

**Error:**
> date arithmetic expression not currently supported


<br>

#### <a id="fail-percentile_cont__dp[]ORDERBYintv__no_generator-TDS"></a><a id="fail-percentile_cont__dp[]ORDERBYintv__no_generator-Relation"></a>`percentile_cont__dp[]ORDERBYintv__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT PERCENTILE_CONT(ARRAY[0.25, 0.5, 0.75]) WITHIN GROUP (ORDER BY INTERVAL '1 day' * id) AS result FROM numbers WHERE id <= 5
```

**Legend SQL (TDS):**
```sql
SELECT PERCENTILE_CONT(ARRAY[0.25, 0.5, 0.75]) WITHIN GROUP (ORDER BY INTERVAL '1 day' * id) AS result FROM func('e2e::tds_numbers') WHERE id <= 5
```

**Legend SQL (Relation):**
```sql
SELECT PERCENTILE_CONT(ARRAY[0.25, 0.5, 0.75]) WITHIN GROUP (ORDER BY INTERVAL '1 day' * id) AS result FROM func('e2e::rel_numbers') WHERE id <= 5
```

**Error:**
> date arithmetic expression not currently supported


<br>

#### <a id="fail-rank__variadicORDERBYvariadic__no_generator-TDS"></a>`rank__variadicORDERBYvariadic__no_generator`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT RANK(30) WITHIN GROUP (ORDER BY age) AS result FROM persons WHERE age IS NOT NULL
```

**Legend SQL:**
```sql
SELECT RANK(30) WITHIN GROUP (ORDER BY age) AS result FROM func('e2e::tds_persons') WHERE age IS NOT NULL
```

**Error:**
> Unsupported type on column: result (meta::pure::functions::collection::Map), only primitive types and enums are supported


<br>

#### <a id="fail-rank_VARIADIC_any_ORDER_BY_VARIAD_cov-TDS"></a>`rank_VARIADIC_any_ORDER_BY_VARIAD_cov`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT RANK(NULL) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
SELECT RANK(NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Error:**
> Unsupported type on column: result (meta::pure::functions::collection::Map), only primitive types and enums are supported


<br>

#### <a id="fail-string_agg__txt_txt__from_table-TDS"></a>`string_agg__txt_txt__from_table`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT STRING_AGG(name, ', ' ORDER BY name) AS result FROM persons WHERE name IS NOT NULL
```

**Legend SQL:**
```sql
SELECT STRING_AGG(name, ', ' ORDER BY name) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL
```

**Error:**
> Unsupported: ordered or filtered aggregation is only supported on relations


<br>

#### <a id="fail-string_agg__txt_txt__group_by_ordered-TDS"></a>`string_agg__txt_txt__group_by_ordered`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, STRING_AGG(name, ',' ORDER BY id DESC) AS result FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, STRING_AGG(name, ',' ORDER BY id DESC) AS result FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> Unsupported: ordered or filtered aggregation is only supported on relations


<br>

#### <a id="fail-string_agg__txt_txt__group_by_ordered_multiple_keys-TDS"></a>`string_agg__txt_txt__group_by_ordered_multiple_keys`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT active, STRING_AGG(name, ',' ORDER BY dept_id ASC, id DESC) AS result FROM persons WHERE dept_id IS NOT NULL AND active IS NOT NULL GROUP BY active ORDER BY 1
```

**Legend SQL:**
```sql
SELECT active, STRING_AGG(name, ',' ORDER BY dept_id ASC, id DESC) AS result FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL AND active IS NOT NULL GROUP BY active ORDER BY 1
```

**Error:**
> Unsupported: ordered or filtered aggregation is only supported on relations


<br>

#### <a id="fail-string_agg__txt_txt__group_by_ordered_mixed-TDS"></a>`string_agg__txt_txt__group_by_ordered_mixed`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, STRING_AGG(name, ',' ORDER BY id DESC) AS result, SUM(salary) AS total FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, STRING_AGG(name, ',' ORDER BY id DESC) AS result, SUM(salary) AS total FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> Unsupported: ordered or filtered aggregation is only supported on relations


<br>

#### <a id="fail-string_agg__txt_txt__group_by_filtered-TDS"></a>`string_agg__txt_txt__group_by_filtered`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, STRING_AGG(name, ',' ORDER BY id DESC) FILTER (WHERE salary > 50000) AS result FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, STRING_AGG(name, ',' ORDER BY id DESC) FILTER (WHERE salary > 50000) AS result FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> Unsupported: ordered or filtered aggregation is only supported on relations


<br>

#### <a id="fail-sum__big__group_by_filtered-TDS"></a>`sum__big__group_by_filtered`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) FILTER (WHERE active) AS result FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) FILTER (WHERE active) AS result FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> Unsupported: ordered or filtered aggregation is only supported on relations


<br>

#### <a id="fail-sum__big__group_by_filtered_alongside_unfiltered-TDS"></a>`sum__big__group_by_filtered_alongside_unfiltered`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, SUM(salary) FILTER (WHERE active) AS filtered, SUM(salary) AS total FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, SUM(salary) FILTER (WHERE active) AS filtered, SUM(salary) AS total FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> Unsupported: ordered or filtered aggregation is only supported on relations


<br>

#### <a id="fail-sum__intv__from_table-TDS"></a><a id="fail-sum__intv__from_table-Relation"></a>`sum__intv__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SUM(INTERVAL '1 day' * id) AS result FROM numbers WHERE id <= 3
```

**Legend SQL (TDS):**
```sql
SELECT SUM(INTERVAL '1 day' * id) AS result FROM func('e2e::tds_numbers') WHERE id <= 3
```

**Legend SQL (Relation):**
```sql
SELECT SUM(INTERVAL '1 day' * id) AS result FROM func('e2e::rel_numbers') WHERE id <= 3
```

**Error:**
> date arithmetic expression not currently supported


<br>

#### <a id="fail-cume_dist__from_table-TDS"></a>`cume_dist__from_table`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, CUME_DIST() OVER (ORDER BY age) AS result FROM persons WHERE age IS NOT NULL ORDER BY name
```

**Legend SQL:**
```sql
SELECT name, CUME_DIST() OVER (ORDER BY age) AS result FROM func('e2e::tds_persons') WHERE age IS NOT NULL ORDER BY name
```

**Error:**
> Unsupported: cume_dist only supported on relation inputs


<br>

#### <a id="fail-first_value__anyelement__from_table-TDS"></a>`first_value__anyelement__from_table`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, FIRST_VALUE(name) OVER (ORDER BY name) AS result FROM persons WHERE name IS NOT NULL ORDER BY name
```

**Legend SQL:**
```sql
SELECT name, FIRST_VALUE(name) OVER (ORDER BY name) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL ORDER BY name
```

**Error:**
> Unsupported: first_value only supported on relation inputs


<br>

#### <a id="fail-lag__anycompatible_int_anycompatible__from_table-TDS"></a>`lag__anycompatible_int_anycompatible__from_table`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, LAG(name, 2, 'n/a') OVER (ORDER BY name) AS result FROM persons WHERE name IS NOT NULL ORDER BY name
```

**Legend SQL:**
```sql
SELECT name, LAG(name, 2, 'n/a') OVER (ORDER BY name) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL ORDER BY name
```

**Error:**
> Unsupported: lag only supported on relation inputs


<br>

#### <a id="fail-lag__anyelement__from_table-TDS"></a>`lag__anyelement__from_table`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, LAG(name) OVER (ORDER BY name) AS result FROM persons WHERE name IS NOT NULL ORDER BY name
```

**Legend SQL:**
```sql
SELECT name, LAG(name) OVER (ORDER BY name) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL ORDER BY name
```

**Error:**
> Unsupported: lag only supported on relation inputs


<br>

#### <a id="fail-lag__anyelement_int__from_table-TDS"></a>`lag__anyelement_int__from_table`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, LAG(name, 2) OVER (ORDER BY name) AS result FROM persons WHERE name IS NOT NULL ORDER BY name
```

**Legend SQL:**
```sql
SELECT name, LAG(name, 2) OVER (ORDER BY name) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL ORDER BY name
```

**Error:**
> Unsupported: lag only supported on relation inputs


<br>

#### <a id="fail-last_value__anyelement__from_table-TDS"></a>`last_value__anyelement__from_table`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, LAST_VALUE(name) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS result FROM persons WHERE name IS NOT NULL ORDER BY name
```

**Legend SQL:**
```sql
SELECT name, LAST_VALUE(name) OVER (ORDER BY name ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL ORDER BY name
```

**Error:**
> Unsupported: window frame only supported on relation inputs


<br>

#### <a id="fail-lead__anycompatible_int_anycompatible__from_table-TDS"></a>`lead__anycompatible_int_anycompatible__from_table`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, LEAD(name, 2, 'n/a') OVER (ORDER BY name) AS result FROM persons WHERE name IS NOT NULL ORDER BY name
```

**Legend SQL:**
```sql
SELECT name, LEAD(name, 2, 'n/a') OVER (ORDER BY name) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL ORDER BY name
```

**Error:**
> Unsupported: lead only supported on relation inputs


<br>

#### <a id="fail-lead__anyelement__from_table-TDS"></a>`lead__anyelement__from_table`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, LEAD(name) OVER (ORDER BY name) AS result FROM persons WHERE name IS NOT NULL ORDER BY name
```

**Legend SQL:**
```sql
SELECT name, LEAD(name) OVER (ORDER BY name) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL ORDER BY name
```

**Error:**
> Unsupported: lead only supported on relation inputs


<br>

#### <a id="fail-lead__anyelement_int__from_table-TDS"></a>`lead__anyelement_int__from_table`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, LEAD(name, 2) OVER (ORDER BY name) AS result FROM persons WHERE name IS NOT NULL ORDER BY name
```

**Legend SQL:**
```sql
SELECT name, LEAD(name, 2) OVER (ORDER BY name) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL ORDER BY name
```

**Error:**
> Unsupported: lead only supported on relation inputs


<br>

#### <a id="fail-nth_value__anyelement_int__from_table-TDS"></a>`nth_value__anyelement_int__from_table`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, NTH_VALUE(name, 2) OVER (ORDER BY name) AS result FROM persons WHERE name IS NOT NULL ORDER BY name
```

**Legend SQL:**
```sql
SELECT name, NTH_VALUE(name, 2) OVER (ORDER BY name) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL ORDER BY name
```

**Error:**
> Unsupported: lead only supported on relation inputs


<br>

#### <a id="fail-ntile__int__from_table-TDS"></a>`ntile__int__from_table`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, NTILE(3) OVER (ORDER BY name) AS result FROM persons WHERE name IS NOT NULL ORDER BY name
```

**Legend SQL:**
```sql
SELECT name, NTILE(3) OVER (ORDER BY name) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL ORDER BY name
```

**Error:**
> Unsupported: ntile only supported on relation inputs


<br>

#### <a id="fail-percent_rank__from_table-TDS"></a>`percent_rank__from_table`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT name, PERCENT_RANK() OVER (ORDER BY age) AS result FROM persons WHERE age IS NOT NULL ORDER BY name
```

**Legend SQL:**
```sql
SELECT name, PERCENT_RANK() OVER (ORDER BY age) AS result FROM func('e2e::tds_persons') WHERE age IS NOT NULL ORDER BY name
```

**Error:**
> Unsupported: percent_rank only supported on relation inputs


<br>

#### <a id="fail-date_literal__infinity-TDS"></a><a id="fail-date_literal__infinity-Relation"></a>`date_literal__infinity`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TIMESTAMP 'infinity' AS result FROM dates LIMIT 1
```

**Legend SQL (TDS):**
```sql
SELECT TIMESTAMP 'infinity' AS result FROM func('e2e::tds_dates') LIMIT 1
```

**Legend SQL (Relation):**
```sql
SELECT TIMESTAMP 'infinity' AS result FROM func('e2e::rel_dates') LIMIT 1
```

**Error:**
> Execution error at ??, "Infinity dates are not supported in Pure"


<br>

#### <a id="fail-count__any__group_by_filtered-TDS"></a>`count__any__group_by_filtered`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT dept_id, COUNT(*) FILTER (WHERE active) AS result FROM persons WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Legend SQL:**
```sql
SELECT dept_id, COUNT(*) FILTER (WHERE active) AS result FROM func('e2e::tds_persons') WHERE dept_id IS NOT NULL GROUP BY dept_id ORDER BY 1
```

**Error:**
> Unsupported: ordered or filtered aggregation is only supported on relations


<a id="type-error"></a>

### TYPE_ERROR (87 tests)

#### <a id="fail-trunc__macaddr__unsupported_type-TDS"></a><a id="fail-trunc__macaddr__unsupported_type-Relation"></a>`trunc__macaddr__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TRUNC('08:00:2b:01:02:03'::macaddr) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT TRUNC('08:00:2b:01:02:03'::macaddr) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT TRUNC('08:00:2b:01:02:03'::macaddr) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for MACADDR


<br>

#### <a id="fail-trunc__macaddr8__unsupported_type-TDS"></a><a id="fail-trunc__macaddr8__unsupported_type-Relation"></a>`trunc__macaddr8__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TRUNC('08:00:2b:01:02:03:04:05'::macaddr8) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT TRUNC('08:00:2b:01:02:03:04:05'::macaddr8) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT TRUNC('08:00:2b:01:02:03:04:05'::macaddr8) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for MACADDR8


<br>

#### <a id="fail-trunc__num__from_table-TDS"></a><a id="fail-trunc__num__from_table-Relation"></a>`trunc__num__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TRUNC(numeric_val) AS result FROM numbers WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT TRUNC(numeric_val) AS result FROM func('e2e::tds_numbers') WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT TRUNC(numeric_val) AS result FROM func('e2e::rel_numbers') WHERE numeric_val IS NOT NULL ORDER BY 1
```

**Error:**
> ERROR: integer out of range


<br>

#### <a id="fail-decode__txt_txt__unsupported_type-TDS"></a><a id="fail-decode__txt_txt__unsupported_type-Relation"></a>`decode__txt_txt__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT DECODE('deadbeef', 'hex') AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT DECODE('deadbeef', 'hex') AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT DECODE('deadbeef', 'hex') AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for hex, expected one of [base64]


<br>

#### <a id="fail-length__lseg__unsupported_type-TDS"></a><a id="fail-length__lseg__unsupported_type-Relation"></a>`length__lseg__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT LENGTH('[(0,0),(3,4)]'::lseg) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT LENGTH('[(0,0),(3,4)]'::lseg) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT LENGTH('[(0,0),(3,4)]'::lseg) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for LSEG


<br>

#### <a id="fail-length__path__unsupported_type-TDS"></a><a id="fail-length__path__unsupported_type-Relation"></a>`length__path__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT LENGTH('((0,0),(1,1),(2,0))'::path) AS result FROM persons WHERE id = 1
```

**Legend SQL (TDS):**
```sql
SELECT LENGTH('((0,0),(1,1),(2,0))'::path) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**Legend SQL (Relation):**
```sql
SELECT LENGTH('((0,0),(1,1),(2,0))'::path) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**Error:**
> No value found for PATH


<br>

#### <a id="fail-to_char__real_txt__from_table-TDS"></a><a id="fail-to_char__real_txt__from_table-Relation"></a>`to_char__real_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TO_CHAR(float_val::real, '999.99') AS result FROM numbers WHERE float_val IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT TO_CHAR(float_val::real, '999.99') AS result FROM func('e2e::tds_numbers') WHERE float_val IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT TO_CHAR(float_val::real, '999.99') AS result FROM func('e2e::rel_numbers') WHERE float_val IS NOT NULL ORDER BY 1
```

**Error:**
> No value found for REAL, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-to_char__tstz_txt__from_table-TDS"></a><a id="fail-to_char__tstz_txt__from_table-Relation"></a>`to_char__tstz_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT TO_CHAR(tsz::timestamptz, 'YYYY-MM-DD HH24:MI:SS TZ') AS result FROM dates WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT TO_CHAR(tsz::timestamptz, 'YYYY-MM-DD HH24:MI:SS TZ') AS result FROM func('e2e::tds_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT TO_CHAR(tsz::timestamptz, 'YYYY-MM-DD HH24:MI:SS TZ') AS result FROM func('e2e::rel_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Error:**
> No value found for TIMESTAMPTZ, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-date_part__txt_tstz__from_table-TDS"></a><a id="fail-date_part__txt_tstz__from_table-Relation"></a>`date_part__txt_tstz__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT DATE_PART('year', tsz::timestamptz) AS result FROM dates WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT DATE_PART('year', tsz::timestamptz) AS result FROM func('e2e::tds_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT DATE_PART('year', tsz::timestamptz) AS result FROM func('e2e::rel_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Error:**
> No value found for TIMESTAMPTZ, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-date_trunc__txt_tstz__from_table-TDS"></a><a id="fail-date_trunc__txt_tstz__from_table-Relation"></a>`date_trunc__txt_tstz__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT DATE_TRUNC('month', tsz::timestamptz) AS result FROM dates WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT DATE_TRUNC('month', tsz::timestamptz) AS result FROM func('e2e::tds_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT DATE_TRUNC('month', tsz::timestamptz) AS result FROM func('e2e::rel_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Error:**
> No value found for TIMESTAMPTZ, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-date_trunc__txt_tstz_txt__from_table-TDS"></a><a id="fail-date_trunc__txt_tstz_txt__from_table-Relation"></a>`date_trunc__txt_tstz_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT DATE_TRUNC('month', tsz::timestamptz) AS result FROM dates WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT DATE_TRUNC('month', tsz::timestamptz) AS result FROM func('e2e::tds_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT DATE_TRUNC('month', tsz::timestamptz) AS result FROM func('e2e::rel_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Error:**
> No value found for TIMESTAMPTZ, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-extract__txt_timetz__from_table-TDS"></a><a id="fail-extract__txt_timetz__from_table-Relation"></a>`extract__txt_timetz__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT EXTRACT(YEAR FROM tsz::timestamptz) AS result FROM dates WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT EXTRACT(YEAR FROM tsz::timestamptz) AS result FROM func('e2e::tds_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT EXTRACT(YEAR FROM tsz::timestamptz) AS result FROM func('e2e::rel_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Error:**
> No value found for TIMESTAMPTZ, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-extract__txt_time__from_table-TDS"></a><a id="fail-extract__txt_time__from_table-Relation"></a>`extract__txt_time__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT EXTRACT(YEAR FROM tsz::timestamptz) AS result FROM dates WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT EXTRACT(YEAR FROM tsz::timestamptz) AS result FROM func('e2e::tds_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT EXTRACT(YEAR FROM tsz::timestamptz) AS result FROM func('e2e::rel_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Error:**
> No value found for TIMESTAMPTZ, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-extract__txt_tstz__from_table-TDS"></a><a id="fail-extract__txt_tstz__from_table-Relation"></a>`extract__txt_tstz__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT EXTRACT(YEAR FROM tsz::timestamptz) AS result FROM dates WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (TDS):**
```sql
SELECT EXTRACT(YEAR FROM tsz::timestamptz) AS result FROM func('e2e::tds_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Legend SQL (Relation):**
```sql
SELECT EXTRACT(YEAR FROM tsz::timestamptz) AS result FROM func('e2e::rel_dates') WHERE tsz IS NOT NULL ORDER BY 1
```

**Error:**
> No value found for TIMESTAMPTZ, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-json_array_elements__from_column-TDS"></a>`json_array_elements__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSON_ARRAY_ELEMENTS(json_arr) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_ARRAY_ELEMENTS(json_arr) AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_array_elements_text__from_column-TDS"></a>`json_array_elements_text__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSON_ARRAY_ELEMENTS_TEXT(json_arr) AS result FROM json_data WHERE id = 3
```

**Legend SQL:**
```sql
SELECT JSON_ARRAY_ELEMENTS_TEXT(json_arr) AS result FROM func('e2e::tds_json_data') WHERE id = 3
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_array_length__from_column-TDS"></a>`json_array_length__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSON_ARRAY_LENGTH(json_arr) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_ARRAY_LENGTH(json_arr) AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_array_length__null-TDS"></a>`json_array_length__null`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSON_ARRAY_LENGTH(json_arr) AS result FROM json_data WHERE id = 5
```

**Legend SQL:**
```sql
SELECT JSON_ARRAY_LENGTH(json_arr) AS result FROM func('e2e::tds_json_data') WHERE id = 5
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_build_array__empty-TDS"></a>`json_build_array__empty`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSON_BUILD_ARRAY() AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_BUILD_ARRAY() AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_build_array__variadic__from_column-TDS"></a>`json_build_array__variadic__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSON_BUILD_ARRAY(id, json_val ->> 'b') AS result FROM json_data WHERE id <= 3 ORDER BY id
```

**Legend SQL:**
```sql
SELECT JSON_BUILD_ARRAY(id, json_val ->> 'b') AS result FROM func('e2e::tds_json_data') WHERE id <= 3 ORDER BY id
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_build_object__empty-TDS"></a>`json_build_object__empty`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSON_BUILD_OBJECT() AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_BUILD_OBJECT() AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_build_object__variadic__from_column-TDS"></a>`json_build_object__variadic__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSON_BUILD_OBJECT('id', id, 'val', json_val ->> 'b') AS result FROM json_data WHERE id <= 3 ORDER BY id
```

**Legend SQL:**
```sql
SELECT JSON_BUILD_OBJECT('id', id, 'val', json_val ->> 'b') AS result FROM func('e2e::tds_json_data') WHERE id <= 3 ORDER BY id
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_extract_path__from_column-TDS"></a>`json_extract_path__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSON_EXTRACT_PATH(json_val, 'a', 'b', 'c') AS result FROM json_data WHERE id = 2
```

**Legend SQL:**
```sql
SELECT JSON_EXTRACT_PATH(json_val, 'a', 'b', 'c') AS result FROM func('e2e::tds_json_data') WHERE id = 2
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_extract_path_text__from_column-TDS"></a>`json_extract_path_text__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSON_EXTRACT_PATH_TEXT(json_val, 'a', 'b', 'c') AS result FROM json_data WHERE id = 2
```

**Legend SQL:**
```sql
SELECT JSON_EXTRACT_PATH_TEXT(json_val, 'a', 'b', 'c') AS result FROM func('e2e::tds_json_data') WHERE id = 2
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_object__text_array-TDS"></a>`json_object__text_array`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSON_OBJECT(ARRAY['a', '1', 'b', '2']) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_OBJECT(ARRAY['a', '1', 'b', '2']) AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_object__keys_values-TDS"></a>`json_object__keys_values`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSON_OBJECT(ARRAY['a','b'], ARRAY['1','2']) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_OBJECT(ARRAY['a', 'b'], ARRAY['1', '2']) AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_object_keys__from_column-TDS"></a>`json_object_keys__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSON_OBJECT_KEYS(json_val) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_OBJECT_KEYS(json_val) AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_strip_nulls__from_column-TDS"></a>`json_strip_nulls__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSON_STRIP_NULLS(json_val) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_STRIP_NULLS(json_val) AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_typeof__from_column-TDS"></a>`json_typeof__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSON_TYPEOF(json_val) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_TYPEOF(json_val) AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_typeof__array_column-TDS"></a>`json_typeof__array_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSON_TYPEOF(json_arr) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSON_TYPEOF(json_arr) AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_array_elements__from_column-TDS"></a>`jsonb_array_elements__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_ARRAY_ELEMENTS(jsonb_arr) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_ARRAY_ELEMENTS(jsonb_arr) AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_array_elements_text__from_column-TDS"></a>`jsonb_array_elements_text__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_ARRAY_ELEMENTS_TEXT(jsonb_arr) AS result FROM json_data WHERE id = 3
```

**Legend SQL:**
```sql
SELECT JSONB_ARRAY_ELEMENTS_TEXT(jsonb_arr) AS result FROM func('e2e::tds_json_data') WHERE id = 3
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_array_length__from_column-TDS"></a>`jsonb_array_length__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_ARRAY_LENGTH(jsonb_arr) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_ARRAY_LENGTH(jsonb_arr) AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_array_length__null-TDS"></a>`jsonb_array_length__null`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_ARRAY_LENGTH(jsonb_arr) AS result FROM json_data WHERE id = 5
```

**Legend SQL:**
```sql
SELECT JSONB_ARRAY_LENGTH(jsonb_arr) AS result FROM func('e2e::tds_json_data') WHERE id = 5
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_build_array__empty-TDS"></a>`jsonb_build_array__empty`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_BUILD_ARRAY() AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_BUILD_ARRAY() AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_build_array__variadic__from_column-TDS"></a>`jsonb_build_array__variadic__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_BUILD_ARRAY(id, jsonb_val ->> 'b') AS result FROM json_data WHERE id <= 3 ORDER BY id
```

**Legend SQL:**
```sql
SELECT JSONB_BUILD_ARRAY(id, jsonb_val ->> 'b') AS result FROM func('e2e::tds_json_data') WHERE id <= 3 ORDER BY id
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_build_object__empty-TDS"></a>`jsonb_build_object__empty`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_BUILD_OBJECT() AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_BUILD_OBJECT() AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_build_object__variadic__from_column-TDS"></a>`jsonb_build_object__variadic__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_BUILD_OBJECT('id', id, 'val', jsonb_val ->> 'b') AS result FROM json_data WHERE id <= 3 ORDER BY id
```

**Legend SQL:**
```sql
SELECT JSONB_BUILD_OBJECT('id', id, 'val', jsonb_val ->> 'b') AS result FROM func('e2e::tds_json_data') WHERE id <= 3 ORDER BY id
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_extract_path__from_column-TDS"></a>`jsonb_extract_path__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_EXTRACT_PATH(jsonb_val, 'a', 'b', 'c') AS result FROM json_data WHERE id = 2
```

**Legend SQL:**
```sql
SELECT JSONB_EXTRACT_PATH(jsonb_val, 'a', 'b', 'c') AS result FROM func('e2e::tds_json_data') WHERE id = 2
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_extract_path_text__from_column-TDS"></a>`jsonb_extract_path_text__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_EXTRACT_PATH_TEXT(jsonb_val, 'a', 'b', 'c') AS result FROM json_data WHERE id = 2
```

**Legend SQL:**
```sql
SELECT JSONB_EXTRACT_PATH_TEXT(jsonb_val, 'a', 'b', 'c') AS result FROM func('e2e::tds_json_data') WHERE id = 2
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_insert__from_column-TDS"></a>`jsonb_insert__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_INSERT(jsonb_val, '{d}', '"inserted"') AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_INSERT(jsonb_val, '{d}', '"inserted"') AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_insert__after_true-TDS"></a>`jsonb_insert__after_true`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_INSERT(jsonb_arr, '{1}', '99', true) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_INSERT(jsonb_arr, '{1}', '99', true) AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_object__text_array-TDS"></a>`jsonb_object__text_array`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_OBJECT(ARRAY['a', '1', 'b', '2']) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_OBJECT(ARRAY['a', '1', 'b', '2']) AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_object__keys_values-TDS"></a>`jsonb_object__keys_values`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_OBJECT(ARRAY['a','b'], ARRAY['1','2']) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_OBJECT(ARRAY['a', 'b'], ARRAY['1', '2']) AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_object_keys__from_column-TDS"></a>`jsonb_object_keys__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_OBJECT_KEYS(jsonb_val) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_OBJECT_KEYS(jsonb_val) AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_path_exists__from_column-TDS"></a>`jsonb_path_exists__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_PATH_EXISTS(jsonb_val, '$.a') AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_PATH_EXISTS(jsonb_val, '$.a') AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_path_exists__with_vars-TDS"></a>`jsonb_path_exists__with_vars`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_PATH_EXISTS(jsonb_val, '$.a ? (@ > $x)', '{"x":0}') AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_PATH_EXISTS(jsonb_val, '$.a ? (@ > $x)', '{"x":0}') AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_path_match__from_column-TDS"></a>`jsonb_path_match__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_PATH_MATCH(jsonb_val, '$.a == 1') AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_PATH_MATCH(jsonb_val, '$.a == 1') AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_path_query__from_column-TDS"></a>`jsonb_path_query__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_PATH_QUERY(jsonb_val, '$.a') AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_PATH_QUERY(jsonb_val, '$.a') AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_path_query_array__from_column-TDS"></a>`jsonb_path_query_array__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_PATH_QUERY_ARRAY(jsonb_arr, '$[*]') AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_PATH_QUERY_ARRAY(jsonb_arr, '$[*]') AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_pretty__from_column-TDS"></a>`jsonb_pretty__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_PRETTY(jsonb_val) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_PRETTY(jsonb_val) AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_set__from_column-TDS"></a>`jsonb_set__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_SET(jsonb_val, '{a}', '99') AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_SET(jsonb_val, '{a}', '99') AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_set__create_missing_false-TDS"></a>`jsonb_set__create_missing_false`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_SET(jsonb_val, '{z}', '"new"', false) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_SET(jsonb_val, '{z}', '"new"', false) AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_strip_nulls__from_column-TDS"></a>`jsonb_strip_nulls__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_STRIP_NULLS(jsonb_val) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_STRIP_NULLS(jsonb_val) AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_typeof__from_column-TDS"></a>`jsonb_typeof__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_TYPEOF(jsonb_val) AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_TYPEOF(jsonb_val) AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_object_agg__from_column-TDS"></a>`jsonb_object_agg__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_OBJECT_AGG(id, jsonb_val ->> 'b') AS result FROM json_data WHERE jsonb_val IS NOT NULL
```

**Legend SQL:**
```sql
SELECT JSONB_OBJECT_AGG(id, jsonb_val ->> 'b') AS result FROM func('e2e::tds_json_data') WHERE jsonb_val IS NOT NULL
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-json_object_agg__from_column-TDS"></a>`json_object_agg__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSON_OBJECT_AGG(id, json_val ->> 'b') AS result FROM json_data WHERE json_val IS NOT NULL
```

**Legend SQL:**
```sql
SELECT JSON_OBJECT_AGG(id, json_val ->> 'b') AS result FROM func('e2e::tds_json_data') WHERE json_val IS NOT NULL
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-avg__real__from_table-TDS"></a><a id="fail-avg__real__from_table-Relation"></a>`avg__real__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT AVG(float_val::real) AS result FROM numbers WHERE float_val IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT AVG(float_val::real) AS result FROM func('e2e::tds_numbers') WHERE float_val IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT AVG(float_val::real) AS result FROM func('e2e::rel_numbers') WHERE float_val IS NOT NULL
```

**Error:**
> No value found for REAL, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-json_agg__from_column-TDS"></a>`json_agg__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSON_AGG(json_val ->> 'b') AS result FROM json_data WHERE json_val IS NOT NULL
```

**Legend SQL:**
```sql
SELECT JSON_AGG(json_val ->> 'b') AS result FROM func('e2e::tds_json_data') WHERE json_val IS NOT NULL
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-jsonb_agg__from_column-TDS"></a>`jsonb_agg__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_AGG(jsonb_val ->> 'b') AS result FROM json_data WHERE jsonb_val IS NOT NULL
```

**Legend SQL:**
```sql
SELECT JSONB_AGG(jsonb_val ->> 'b') AS result FROM func('e2e::tds_json_data') WHERE jsonb_val IS NOT NULL
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<br>

#### <a id="fail-max__anyenum__no_generator-TDS"></a><a id="fail-max__anyenum__no_generator-Relation"></a>`max__anyenum__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(name::mood) AS result FROM persons WHERE name IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MAX(name::mood) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MAX(name::mood) AS result FROM func('e2e::rel_persons') WHERE name IS NOT NULL
```

**Error:**
> No value found for MOOD


<br>

#### <a id="fail-max__inet__no_generator-TDS"></a><a id="fail-max__inet__no_generator-Relation"></a>`max__inet__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(name::inet) AS result FROM persons WHERE name IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MAX(name::inet) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MAX(name::inet) AS result FROM func('e2e::rel_persons') WHERE name IS NOT NULL
```

**Error:**
> No value found for INET


<br>

#### <a id="fail-max__money__no_generator-TDS"></a><a id="fail-max__money__no_generator-Relation"></a>`max__money__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(salary::money) AS result FROM persons WHERE salary IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MAX(salary::money) AS result FROM func('e2e::tds_persons') WHERE salary IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MAX(salary::money) AS result FROM func('e2e::rel_persons') WHERE salary IS NOT NULL
```

**Error:**
> No value found for MONEY, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-max__oid__no_generator-TDS"></a><a id="fail-max__oid__no_generator-Relation"></a>`max__oid__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(id::oid) AS result FROM persons WHERE id IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MAX(id::oid) AS result FROM func('e2e::tds_persons') WHERE id IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MAX(id::oid) AS result FROM func('e2e::rel_persons') WHERE id IS NOT NULL
```

**Error:**
> No value found for OID, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-max__pg_lsn__no_generator-TDS"></a><a id="fail-max__pg_lsn__no_generator-Relation"></a>`max__pg_lsn__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(name::pg_lsn) AS result FROM persons WHERE name IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MAX(name::pg_lsn) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MAX(name::pg_lsn) AS result FROM func('e2e::rel_persons') WHERE name IS NOT NULL
```

**Error:**
> No value found for PG_LSN


<br>

#### <a id="fail-max__real__from_table-TDS"></a><a id="fail-max__real__from_table-Relation"></a>`max__real__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(float_val::real) AS result FROM numbers WHERE float_val IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MAX(float_val::real) AS result FROM func('e2e::tds_numbers') WHERE float_val IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MAX(float_val::real) AS result FROM func('e2e::rel_numbers') WHERE float_val IS NOT NULL
```

**Error:**
> No value found for REAL, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-max__tid__no_generator-TDS"></a><a id="fail-max__tid__no_generator-Relation"></a>`max__tid__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(name::tid) AS result FROM persons WHERE name IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MAX(name::tid) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MAX(name::tid) AS result FROM func('e2e::rel_persons') WHERE name IS NOT NULL
```

**Error:**
> No value found for TID


<br>

#### <a id="fail-max__timetz__no_generator-TDS"></a><a id="fail-max__timetz__no_generator-Relation"></a>`max__timetz__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(ts::timetz) AS result FROM dates WHERE ts IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MAX(ts::timetz) AS result FROM func('e2e::tds_dates') WHERE ts IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MAX(ts::timetz) AS result FROM func('e2e::rel_dates') WHERE ts IS NOT NULL
```

**Error:**
> No value found for TIMETZ, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-max__time__no_generator-TDS"></a><a id="fail-max__time__no_generator-Relation"></a>`max__time__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(ts::time) AS result FROM dates WHERE ts IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MAX(ts::time) AS result FROM func('e2e::tds_dates') WHERE ts IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MAX(ts::time) AS result FROM func('e2e::rel_dates') WHERE ts IS NOT NULL
```

**Error:**
> No value found for TIME, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-max__tstz__from_table-TDS"></a><a id="fail-max__tstz__from_table-Relation"></a>`max__tstz__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(tsz::timestamptz) AS result FROM dates WHERE tsz IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MAX(tsz::timestamptz) AS result FROM func('e2e::tds_dates') WHERE tsz IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MAX(tsz::timestamptz) AS result FROM func('e2e::rel_dates') WHERE tsz IS NOT NULL
```

**Error:**
> No value found for TIMESTAMPTZ, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-max__xid8__no_generator-TDS"></a><a id="fail-max__xid8__no_generator-Relation"></a>`max__xid8__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAX(id::xid8) AS result FROM persons WHERE id IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MAX(id::xid8) AS result FROM func('e2e::tds_persons') WHERE id IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MAX(id::xid8) AS result FROM func('e2e::rel_persons') WHERE id IS NOT NULL
```

**Error:**
> No value found for XID8, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-min__anyenum__no_generator-TDS"></a><a id="fail-min__anyenum__no_generator-Relation"></a>`min__anyenum__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(name::mood) AS result FROM persons WHERE name IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MIN(name::mood) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MIN(name::mood) AS result FROM func('e2e::rel_persons') WHERE name IS NOT NULL
```

**Error:**
> No value found for MOOD


<br>

#### <a id="fail-min__inet__no_generator-TDS"></a><a id="fail-min__inet__no_generator-Relation"></a>`min__inet__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(name::inet) AS result FROM persons WHERE name IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MIN(name::inet) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MIN(name::inet) AS result FROM func('e2e::rel_persons') WHERE name IS NOT NULL
```

**Error:**
> No value found for INET


<br>

#### <a id="fail-min__money__no_generator-TDS"></a><a id="fail-min__money__no_generator-Relation"></a>`min__money__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(salary::money) AS result FROM persons WHERE salary IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MIN(salary::money) AS result FROM func('e2e::tds_persons') WHERE salary IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MIN(salary::money) AS result FROM func('e2e::rel_persons') WHERE salary IS NOT NULL
```

**Error:**
> No value found for MONEY, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-min__oid__no_generator-TDS"></a><a id="fail-min__oid__no_generator-Relation"></a>`min__oid__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(id::oid) AS result FROM persons WHERE id IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MIN(id::oid) AS result FROM func('e2e::tds_persons') WHERE id IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MIN(id::oid) AS result FROM func('e2e::rel_persons') WHERE id IS NOT NULL
```

**Error:**
> No value found for OID, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-min__pg_lsn__no_generator-TDS"></a><a id="fail-min__pg_lsn__no_generator-Relation"></a>`min__pg_lsn__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(name::pg_lsn) AS result FROM persons WHERE name IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MIN(name::pg_lsn) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MIN(name::pg_lsn) AS result FROM func('e2e::rel_persons') WHERE name IS NOT NULL
```

**Error:**
> No value found for PG_LSN


<br>

#### <a id="fail-min__real__from_table-TDS"></a><a id="fail-min__real__from_table-Relation"></a>`min__real__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(float_val::real) AS result FROM numbers WHERE float_val IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MIN(float_val::real) AS result FROM func('e2e::tds_numbers') WHERE float_val IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MIN(float_val::real) AS result FROM func('e2e::rel_numbers') WHERE float_val IS NOT NULL
```

**Error:**
> No value found for REAL, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-min__tid__no_generator-TDS"></a><a id="fail-min__tid__no_generator-Relation"></a>`min__tid__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(name::tid) AS result FROM persons WHERE name IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MIN(name::tid) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MIN(name::tid) AS result FROM func('e2e::rel_persons') WHERE name IS NOT NULL
```

**Error:**
> No value found for TID


<br>

#### <a id="fail-min__timetz__no_generator-TDS"></a><a id="fail-min__timetz__no_generator-Relation"></a>`min__timetz__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(ts::timetz) AS result FROM dates WHERE ts IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MIN(ts::timetz) AS result FROM func('e2e::tds_dates') WHERE ts IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MIN(ts::timetz) AS result FROM func('e2e::rel_dates') WHERE ts IS NOT NULL
```

**Error:**
> No value found for TIMETZ, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-min__time__no_generator-TDS"></a><a id="fail-min__time__no_generator-Relation"></a>`min__time__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(ts::time) AS result FROM dates WHERE ts IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MIN(ts::time) AS result FROM func('e2e::tds_dates') WHERE ts IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MIN(ts::time) AS result FROM func('e2e::rel_dates') WHERE ts IS NOT NULL
```

**Error:**
> No value found for TIME, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-min__tstz__from_table-TDS"></a><a id="fail-min__tstz__from_table-Relation"></a>`min__tstz__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(tsz::timestamptz) AS result FROM dates WHERE tsz IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MIN(tsz::timestamptz) AS result FROM func('e2e::tds_dates') WHERE tsz IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MIN(tsz::timestamptz) AS result FROM func('e2e::rel_dates') WHERE tsz IS NOT NULL
```

**Error:**
> No value found for TIMESTAMPTZ, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-min__xid8__no_generator-TDS"></a><a id="fail-min__xid8__no_generator-Relation"></a>`min__xid8__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MIN(id::xid8) AS result FROM persons WHERE id IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT MIN(id::xid8) AS result FROM func('e2e::tds_persons') WHERE id IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT MIN(id::xid8) AS result FROM func('e2e::rel_persons') WHERE id IS NOT NULL
```

**Error:**
> No value found for XID8, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-string_agg__bytea_bytea__no_generator-TDS"></a><a id="fail-string_agg__bytea_bytea__no_generator-Relation"></a>`string_agg__bytea_bytea__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT STRING_AGG(name::bytea, ','::bytea) AS result FROM persons WHERE name IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT STRING_AGG(name::bytea, ','::bytea) AS result FROM func('e2e::tds_persons') WHERE name IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT STRING_AGG(name::bytea, ','::bytea) AS result FROM func('e2e::rel_persons') WHERE name IS NOT NULL
```

**Error:**
> No value found for BYTEA


<br>

#### <a id="fail-sum__money__no_generator-TDS"></a><a id="fail-sum__money__no_generator-Relation"></a>`sum__money__no_generator`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SUM(salary::money) AS result FROM persons WHERE salary IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT SUM(salary::money) AS result FROM func('e2e::tds_persons') WHERE salary IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT SUM(salary::money) AS result FROM func('e2e::rel_persons') WHERE salary IS NOT NULL
```

**Error:**
> No value found for MONEY, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-sum__real__from_table-TDS"></a><a id="fail-sum__real__from_table-Relation"></a>`sum__real__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SUM(float_val::real) AS result FROM numbers WHERE float_val IS NOT NULL
```

**Legend SQL (TDS):**
```sql
SELECT SUM(float_val::real) AS result FROM func('e2e::tds_numbers') WHERE float_val IS NOT NULL
```

**Legend SQL (Relation):**
```sql
SELECT SUM(float_val::real) AS result FROM func('e2e::rel_numbers') WHERE float_val IS NOT NULL
```

**Error:**
> No value found for REAL, expected one of [BIGINT,BOOLEAN,DATE,DECIMAL,DOUBLE PRECISION,FLOAT8,INTEGER,JSON,NUMERIC,SMALLINT,TEXT,TIMESTAMP,VARCHAR]


<br>

#### <a id="fail-date_literal__cast_string_to_timestamptz-TDS"></a><a id="fail-date_literal__cast_string_to_timestamptz-Relation"></a>`date_literal__cast_string_to_timestamptz`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT '1999-01-08 04:05:06+02:00'::timestamptz AS result FROM dates LIMIT 1
```

**Legend SQL (TDS):**
```sql
SELECT '1999-01-08 04:05:06+02:00'::timestamptz AS result FROM func('e2e::tds_dates') LIMIT 1
```

**Legend SQL (Relation):**
```sql
SELECT '1999-01-08 04:05:06+02:00'::timestamptz AS result FROM func('e2e::rel_dates') LIMIT 1
```

**Error:**
> No value found for TIMESTAMPTZ


<br>

#### <a id="fail-jsonb_path_query_first__from_column-TDS"></a>`jsonb_path_query_first__from_column`

📘 **TDS Path**

**Input SQL:**
```sql
SELECT JSONB_PATH_QUERY_FIRST(jsonb_arr, '$[*]') AS result FROM json_data WHERE id = 1
```

**Legend SQL:**
```sql
SELECT JSONB_PATH_QUERY_FIRST(jsonb_arr, '$[*]') AS result FROM func('e2e::tds_json_data') WHERE id = 1
```

**Error:**
> Execution error at (resource:/core_relational/relational/functions/tableToTDS.pure line:48 column:108), "Cast exception: Class cannot be cast to DataType"


<a id="parse-error"></a>

### PARSE_ERROR (11 tests)

#### <a id="fail-overlay__bit_bit_int__unsupported_type-TDS"></a><a id="fail-overlay__bit_bit_int__unsupported_type-Relation"></a>`overlay__bit_bit_int__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT OVERLAY(B'1010101010' PLACING B'1111' FROM 3) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'PLACING'. Expected one of: {ORDER, ',', ')'} at line 1, column 30


<br>

#### <a id="fail-overlay__bit_bit_int_int__unsupported_type-TDS"></a><a id="fail-overlay__bit_bit_int_int__unsupported_type-Relation"></a>`overlay__bit_bit_int_int__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT OVERLAY(B'1010101010' PLACING B'1111' FROM 3 FOR 2) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'PLACING'. Expected one of: {ORDER, ',', ')'} at line 1, column 30


<br>

#### <a id="fail-overlay__bytea_bytea_int__unsupported_type-TDS"></a><a id="fail-overlay__bytea_bytea_int__unsupported_type-Relation"></a>`overlay__bytea_bytea_int__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT OVERLAY(E'\\xDEADBEEF'::bytea PLACING E'\\xFF'::bytea FROM 2) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'PLACING'. Expected one of: {ORDER, ',', ')'} at line 1, column 38


<br>

#### <a id="fail-overlay__bytea_bytea_int_int__unsupported_type-TDS"></a><a id="fail-overlay__bytea_bytea_int_int__unsupported_type-Relation"></a>`overlay__bytea_bytea_int_int__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT OVERLAY(E'\\xDEADBEEF'::bytea PLACING E'\\xFF'::bytea FROM 2 FOR 1) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: Unexpected token 'PLACING'. Expected one of: {ORDER, ',', ')'} at line 1, column 38


<br>

#### <a id="fail-overlay__txt_txt_int__special_syntax-TDS"></a><a id="fail-overlay__txt_txt_int__special_syntax-Relation"></a>`overlay__txt_txt_int__special_syntax`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT OVERLAY(val PLACING 'XX' FROM 1) AS result FROM strings WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input 'val PLACING'


<br>

#### <a id="fail-overlay__txt_txt_int_int__special_syntax-TDS"></a><a id="fail-overlay__txt_txt_int_int__special_syntax-Relation"></a>`overlay__txt_txt_int_int__special_syntax`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT OVERLAY(val PLACING 'XX' FROM 1 FOR 2) AS result FROM strings WHERE val IS NOT NULL AND val <> '' ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input 'val PLACING'


<br>

#### <a id="fail-position__bit_bit__unsupported_type-TDS"></a><a id="fail-position__bit_bit__unsupported_type-Relation"></a>`position__bit_bit__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT POSITION(B'11' IN B'1011') AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input 'IN B'1011''


<br>

#### <a id="fail-position__bytea_bytea__unsupported_type-TDS"></a><a id="fail-position__bytea_bytea__unsupported_type-Relation"></a>`position__bytea_bytea__unsupported_type`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT POSITION(E'\\xAD'::bytea IN E'\\xDEADBEEF'::bytea) AS result FROM persons WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input 'IN E'\\xDEADBEEF''


<br>

#### <a id="fail-position__txt_txt__from_table-TDS"></a><a id="fail-position__txt_txt__from_table-Relation"></a>`position__txt_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT POSITION('lo' IN val) AS result FROM strings ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input 'IN val'


<br>

#### <a id="fail-substring__txt_txt_txt__from_table-TDS"></a><a id="fail-substring__txt_txt_txt__from_table-Relation"></a>`substring__txt_txt_txt__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT SUBSTRING(val SIMILAR '%#"[a-z]+#"%' ESCAPE '#') AS result FROM strings WHERE val ~ '[a-z]' ORDER BY 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input 'SUBSTRING(val SIMILAR'


<br>

#### <a id="fail-make_interval__sint0_sint0_int0_sint0_sint0_sint0_sdp0.0__from_table-TDS"></a><a id="fail-make_interval__sint0_sint0_int0_sint0_sint0_sint0_sdp0.0__from_table-Relation"></a>`make_interval__sint0_sint0_int0_sint0_sint0_sint0_sdp0.0__from_table`

🔴 **Failed in both TDS and Relation**

**Input SQL:**
```sql
SELECT MAKE_INTERVAL(years => 1, months => 2, days => 3) AS result FROM dates WHERE id = 1
```

**Legend SQL:**
```sql
null
```

**Error:**
> Rewrite failed: no viable alternative at input '=>'


