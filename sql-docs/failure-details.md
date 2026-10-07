# Failure Details — Result Set Comparisons

Full expected (Postgres) vs actual (Legend) result sets for every test where results differ.

---

**Total result mismatches:** 86

## Table of Contents

- [div__num_num__from_table \[TDS\]](#fail-div__num_num__from_table-TDS)
- [div__num_num__from_table \[Relation\]](#fail-div__num_num__from_table-Relation)
- [concat_ws__txt_variadic__from_table \[TDS\]](#fail-concat_ws__txt_variadic__from_table-TDS)
- [concat_ws__txt_variadic__from_table \[Relation\]](#fail-concat_ws__txt_variadic__from_table-Relation)
- [initcap__txt__from_table \[TDS\]](#fail-initcap__txt__from_table-TDS)
- [initcap__txt__from_table \[Relation\]](#fail-initcap__txt__from_table-Relation)
- [regexp_substr__nth_occurrence__ignored_by_legend \[TDS\]](#fail-regexp_substr__nth_occurrence__ignored_by_legend-TDS)
- [regexp_substr__nth_occurrence__ignored_by_legend \[Relation\]](#fail-regexp_substr__nth_occurrence__ignored_by_legend-Relation)
- [regexp_substr__nth_occurrence_last__ignored_by_legend \[TDS\]](#fail-regexp_substr__nth_occurrence_last__ignored_by_legend-TDS)
- [regexp_substr__nth_occurrence_last__ignored_by_legend \[Relation\]](#fail-regexp_substr__nth_occurrence_last__ignored_by_legend-Relation)
- [regexp_substr__start_position__ignored_by_legend \[TDS\]](#fail-regexp_substr__start_position__ignored_by_legend-TDS)
- [regexp_substr__start_position__ignored_by_legend \[Relation\]](#fail-regexp_substr__start_position__ignored_by_legend-Relation)
- [regexp_substr__start_and_nth__ignored_by_legend \[TDS\]](#fail-regexp_substr__start_and_nth__ignored_by_legend-TDS)
- [regexp_substr__start_and_nth__ignored_by_legend \[Relation\]](#fail-regexp_substr__start_and_nth__ignored_by_legend-Relation)
- [regexp_count__start_position__ignored_by_legend \[TDS\]](#fail-regexp_count__start_position__ignored_by_legend-TDS)
- [regexp_count__start_position__ignored_by_legend \[Relation\]](#fail-regexp_count__start_position__ignored_by_legend-Relation)
- [string_to_array__txt_txt__from_table \[TDS\]](#fail-string_to_array__txt_txt__from_table-TDS)
- [string_to_array__txt_txt__from_table \[Relation\]](#fail-string_to_array__txt_txt__from_table-Relation)
- [json_extract_path__from_column \[Relation\]](#fail-json_extract_path__from_column-Relation)
- [array_position__anycompatiblearray_anycompatible__from_table \[Relation\]](#fail-array_position__anycompatiblearray_anycompatible__from_table-Relation)
- [max__anyarray__no_generator \[TDS\]](#fail-max__anyarray__no_generator-TDS)
- [max__anyarray__no_generator \[Relation\]](#fail-max__anyarray__no_generator-Relation)
- [min__anyarray__no_generator \[TDS\]](#fail-min__anyarray__no_generator-TDS)
- [min__anyarray__no_generator \[Relation\]](#fail-min__anyarray__no_generator-Relation)
- [op_div__int__truncates_toward_zero \[TDS\]](#fail-op_div__int__truncates_toward_zero-TDS)
- [op_div__int__truncates_toward_zero \[Relation\]](#fail-op_div__int__truncates_toward_zero-Relation)
- [op_div__negative__truncates_toward_zero \[TDS\]](#fail-op_div__negative__truncates_toward_zero-TDS)
- [op_div__negative__truncates_toward_zero \[Relation\]](#fail-op_div__negative__truncates_toward_zero-Relation)
- [op_mod__negative__basic \[TDS\]](#fail-op_mod__negative__basic-TDS)
- [op_mod__negative__basic \[Relation\]](#fail-op_mod__negative__basic-Relation)
- [op_mod__numeric__basic \[TDS\]](#fail-op_mod__numeric__basic-TDS)
- [op_sub__date_minus_int_days \[TDS\]](#fail-op_sub__date_minus_int_days-TDS)
- [op_sub__date_minus_int_days \[Relation\]](#fail-op_sub__date_minus_int_days-Relation)
- [concat_op__txt_txt__from_table \[TDS\]](#fail-concat_op__txt_txt__from_table-TDS)
- [concat_op__mixed_types__null_handling \[TDS\]](#fail-concat_op__mixed_types__null_handling-TDS)
- [eq__null_null \[TDS\]](#fail-eq__null_null-TDS)
- [neq__int__null \[TDS\]](#fail-neq__int__null-TDS)
- [neq__int__null \[Relation\]](#fail-neq__int__null-Relation)
- [lt__int__null \[Relation\]](#fail-lt__int__null-Relation)
- [gt__int__null \[Relation\]](#fail-gt__int__null-Relation)
- [neq__filter__int \[TDS\]](#fail-neq__filter__int-TDS)
- [neq__filter__int \[Relation\]](#fail-neq__filter__int-Relation)
- [and__false_null \[TDS\]](#fail-and__false_null-TDS)
- [and__false_null \[Relation\]](#fail-and__false_null-Relation)
- [or__true_null \[TDS\]](#fail-or__true_null-TDS)
- [or__true_null \[Relation\]](#fail-or__true_null-Relation)
- [json_arrow_get_field \[Relation\]](#fail-json_arrow_get_field-Relation)
- [jsonb_arrow_get_field \[Relation\]](#fail-jsonb_arrow_get_field-Relation)
- [json_arrow_get_index \[Relation\]](#fail-json_arrow_get_index-Relation)
- [jsonb_arrow_get_index \[Relation\]](#fail-jsonb_arrow_get_index-Relation)
- [json_hash_arrow_path \[Relation\]](#fail-json_hash_arrow_path-Relation)
- [jsonb_hash_arrow_path \[Relation\]](#fail-jsonb_hash_arrow_path-Relation)
- [array_gt \[TDS\]](#fail-array_gt-TDS)
- [anycompatible_concat_scalar_array \[TDS\]](#fail-anycompatible_concat_scalar_array-TDS)
- [anycompatible_concat_array_scalar \[TDS\]](#fail-anycompatible_concat_array_scalar-TDS)
- [anycompatible_concat_array_array \[TDS\]](#fail-anycompatible_concat_array_array-TDS)
- [between__int__null \[TDS\]](#fail-between__int__null-TDS)
- [between__int__null \[Relation\]](#fail-between__int__null-Relation)
- [is_distinct_from__int__one_null \[Relation\]](#fail-is_distinct_from__int__one_null-Relation)
- [to_char_token__YYY \[TDS\]](#fail-to_char_token__YYY-TDS)
- [to_char_token__D \[TDS\]](#fail-to_char_token__D-TDS)
- [to_char_token__D \[Relation\]](#fail-to_char_token__D-Relation)
- [subquery_quant_all_empty_null_value \[Relation\]](#fail-subquery_quant_all_empty_null_value-Relation)
- [null_equals_null \[TDS\]](#fail-null_equals_null-TDS)
- [null_not_equals \[TDS\]](#fail-null_not_equals-TDS)
- [null_concat \[TDS\]](#fail-null_concat-TDS)
- [null_concat \[Relation\]](#fail-null_concat-Relation)
- [where_not_between \[TDS\]](#fail-where_not_between-TDS)
- [where_not_between \[Relation\]](#fail-where_not_between-Relation)
- [where_not_in_list \[TDS\]](#fail-where_not_in_list-TDS)
- [where_not_in_list \[Relation\]](#fail-where_not_in_list-Relation)
- [where_not_compound \[Relation\]](#fail-where_not_compound-Relation)
- [bool_null_and_false \[TDS\]](#fail-bool_null_and_false-TDS)
- [bool_null_and_false \[Relation\]](#fail-bool_null_and_false-Relation)
- [bool_null_or_true \[TDS\]](#fail-bool_null_or_true-TDS)
- [bool_null_or_true \[Relation\]](#fail-bool_null_or_true-Relation)
- [star_multiple_tables \[TDS\]](#fail-star_multiple_tables-TDS)
- [star_multiple_tables \[Relation\]](#fail-star_multiple_tables-Relation)
- [schema_information_tables \[TDS\]](#fail-schema_information_tables-TDS)
- [schema_information_tables \[Relation\]](#fail-schema_information_tables-Relation)
- [schema_information_columns \[TDS\]](#fail-schema_information_columns-TDS)
- [schema_information_columns \[Relation\]](#fail-schema_information_columns-Relation)
- [json_extract_array_index \[Relation\]](#fail-json_extract_array_index-Relation)
- [json_extract_array_negative_index \[Relation\]](#fail-json_extract_array_negative_index-Relation)
- [interval_compound_literal \[TDS\]](#fail-interval_compound_literal-TDS)
- [interval_compound_literal \[Relation\]](#fail-interval_compound_literal-Relation)

---

<a id="fail-div__num_num__from_table-TDS"></a>

### ❌ div__num_num__from_table [TDS]

**SQL (Postgres):**
```sql
SELECT DIV(numeric_val, 3.0) AS result FROM numbers WHERE numeric_val IS NOT NULL AND numeric_val <> 0 ORDER BY 1
```

**SQL (Legend, rewritten):**
```sql
SELECT DIV(numeric_val, 3.0) AS result FROM func('e2e::tds_numbers') WHERE numeric_val IS NOT NULL AND numeric_val <> 0 ORDER BY 1
```

**SQL (Generated, executed against DB):**
```sql
select ((1.0 * "root".numeric_val) / 3.0) as "result" from public.numbers as "root" where ("root".numeric_val is not null and "root".numeric_val is distinct from 0) order by "result"
```

**Lambda (Pure expression):**
```json
|e2e::NumberRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.intVal,
      'int_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.floatVal,
      'float_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.numericVal,
      'numeric_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.smallVal,
      'small_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.bigVal,
      'big_val'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getFloat('numeric_val')->meta::pure::functions::collection::isNotEmpty() &&
    $row.getFloat('numeric_val') != 0
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getFloat('numeric_val') / 3.0,
      'result'
    )
)->meta::pure::tds::sort(
  meta::pure::tds::asc('result')
)
```

**Differences:**
- Row 0, column 'result': expected '-33333' but got '-33333.33333'
- Row 1, column 'result': expected '0' but got '-0.3333333333333333'
- Row 2, column 'result': expected '0' but got '-3.3333333333333333E-6'
- Row 3, column 'result': expected '0' but got '3.3333333333333333E-6'
- Row 4, column 'result': expected '111' but got '111.11111'
- Row 5, column 'result': expected '4115' but got '4115.2263'
- Row 6, column 'result': expected '16666' but got '16666.70781666667'

**Expected (Postgres):**

| result |
| --- |
| -33333 |
| 0 |
| 0 |
| 0 |
| 111 |
| 4115 |
| 16666 |
| 33333333333333 |

**Actual (Legend):**

| result |
| --- |
| -33333.33333 |
| -0.3333333333333333 |
| -3.3333333333333333E-6 |
| 3.3333333333333333E-6 |
| 111.11111 |
| 4115.2263 |
| 16666.70781666667 |
| 3.3333333333333332E13 |

---

<a id="fail-div__num_num__from_table-Relation"></a>

### ❌ div__num_num__from_table [Relation]

**SQL (Postgres):**
```sql
SELECT DIV(numeric_val, 3.0) AS result FROM numbers WHERE numeric_val IS NOT NULL AND numeric_val <> 0 ORDER BY 1
```

**SQL (Legend, rewritten):**
```sql
SELECT DIV(numeric_val, 3.0) AS result FROM func('e2e::rel_numbers') WHERE numeric_val IS NOT NULL AND numeric_val <> 0 ORDER BY 1
```

**SQL (Generated, executed against DB):**
```sql
select ((1.0 * "root".numeric_val) / 3.0) as "result" from public.numbers as "root" where ("root".numeric_val is not null and "root".numeric_val is distinct from 0) order by "result"
```

**Lambda (Pure expression):**
```json
|e2e::NumberRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::NumberRow[1]|$x.id,
     int_val: x: e2e::NumberRow[1]|$x.intVal,
     float_val: x: e2e::NumberRow[1]|$x.floatVal,
     numeric_val: x: e2e::NumberRow[1]|$x.numericVal,
     small_val: x: e2e::NumberRow[1]|$x.smallVal,
     big_val: x: e2e::NumberRow[1]|$x.bigVal
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.numeric_val->meta::pure::functions::collection::isNotEmpty() &&
    $x.numeric_val != 0
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.numeric_val->meta::pure::functions::multiplicity::toOne() / 3.0
   ]
)->meta::pure::functions::relation::sort(
  ~result->meta::pure::functions::relation::ascending()
)
```

**Differences:**
- Row 0, column 'result': expected '-33333' but got '-33333.33333'
- Row 1, column 'result': expected '0' but got '-0.3333333333333333'
- Row 2, column 'result': expected '0' but got '-3.3333333333333333E-6'
- Row 3, column 'result': expected '0' but got '3.3333333333333333E-6'
- Row 4, column 'result': expected '111' but got '111.11111'
- Row 5, column 'result': expected '4115' but got '4115.2263'
- Row 6, column 'result': expected '16666' but got '16666.70781666667'

**Expected (Postgres):**

| result |
| --- |
| -33333 |
| 0 |
| 0 |
| 0 |
| 111 |
| 4115 |
| 16666 |
| 33333333333333 |

**Actual (Legend):**

| result |
| --- |
| -33333.33333 |
| -0.3333333333333333 |
| -3.3333333333333333E-6 |
| 3.3333333333333333E-6 |
| 111.11111 |
| 4115.2263 |
| 16666.70781666667 |
| 3.3333333333333332E13 |

---

<a id="fail-concat_ws__txt_variadic__from_table-TDS"></a>

### ❌ concat_ws__txt_variadic__from_table [TDS]

**SQL (Postgres):**
```sql
SELECT CONCAT_WS(', ', val, nullable_val) AS result FROM strings ORDER BY 1
```

**SQL (Legend, rewritten):**
```sql
SELECT CONCAT_WS(', ', val, nullable_val) AS result FROM func('e2e::tds_strings') ORDER BY 1
```

**SQL (Generated, executed against DB):**
```sql
select "root".val || "root".nullable_val || Text', ' as "result" from public.strings as "root" order by "result"
```

**Lambda (Pure expression):**
```json
|e2e::StringRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.val,
      'val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.nullableVal,
      'nullable_val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.unicodeVal,
      'unicode_val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.emptyVal,
      'empty_val'
    )
  ]
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|[
        $row.getString('val'),
        $row.getString('nullable_val')
      ]->meta::pure::functions::string::joinStrings(', '),
      'result'
    )
)->meta::pure::tds::sort(
  meta::pure::tds::asc('result')
)
```

**Differences:**
- Row 0, column 'result': expected '' but got '  spaces  has spaces, '
- Row 1, column 'result': expected '  spaces  , has spaces' but got 'UPPERCASElowercase, '
- Row 2, column 'result': expected 'MiXeD CaSe' but got 'WORLDtest, '
- Row 3, column 'result': expected 'UPPERCASE, lowercase' but got 'abcdefghijABCDEFGHIJ, '
- Row 4, column 'result': expected 'WORLD, test' but got 'helloworld, '
- Row 5, column 'result': expected 'abcdefghij, ABCDEFGHIJ' but got 'repeatrepeat, '
- Row 6, column 'result': expected 'hello, world' but got 'special!@#$%12345, '
- Row 7, column 'result': expected 'repeat, repeat' but got 'the quick brown foxjumps over, '
- Row 8, column 'result': expected 'special!@#$%, 12345' but got 'null'
- Row 9, column 'result': expected 'the quick brown fox, jumps over' but got 'null'

**Expected (Postgres):**

| result |
| --- |
|  |
|   spaces  , has spaces |
| MiXeD CaSe |
| UPPERCASE, lowercase |
| WORLD, test |
| abcdefghij, ABCDEFGHIJ |
| hello, world |
| repeat, repeat |
| special!@#$%, 12345 |
| the quick brown fox, jumps over |

**Actual (Legend):**

| result |
| --- |
|   spaces  has spaces,  |
| UPPERCASElowercase,  |
| WORLDtest,  |
| abcdefghijABCDEFGHIJ,  |
| helloworld,  |
| repeatrepeat,  |
| special!@#$%12345,  |
| the quick brown foxjumps over,  |
| _NULL_ |
| _NULL_ |

---

<a id="fail-concat_ws__txt_variadic__from_table-Relation"></a>

### ❌ concat_ws__txt_variadic__from_table [Relation]

**SQL (Postgres):**
```sql
SELECT CONCAT_WS(', ', val, nullable_val) AS result FROM strings ORDER BY 1
```

**SQL (Legend, rewritten):**
```sql
SELECT CONCAT_WS(', ', val, nullable_val) AS result FROM func('e2e::rel_strings') ORDER BY 1
```

**SQL (Generated, executed against DB):**
```sql
select concat("root".val,Text', ',"root".nullable_val) as "result" from public.strings as "root" order by "result"
```

**Lambda (Pure expression):**
```json
|e2e::StringRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::StringRow[1]|$x.id,
     val: x: e2e::StringRow[1]|$x.val,
     nullable_val: x: e2e::StringRow[1]|$x.nullableVal,
     unicode_val: x: e2e::StringRow[1]|$x.unicodeVal,
     empty_val: x: e2e::StringRow[1]|$x.emptyVal
   ]
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], val:String, nullable_val:String, unicode_val:String, empty_val:String)[1]|[
    $x.val->meta::pure::functions::multiplicity::toOne(),
    $x.nullable_val->meta::pure::functions::multiplicity::toOne()
  ]->meta::pure::functions::string::joinStrings(', ')
   ]
)->meta::pure::functions::relation::sort(
  ~result->meta::pure::functions::relation::ascending()
)
```

**Differences:**
- Row 0, column 'result': expected '' but got '  spaces  , has spaces'
- Row 1, column 'result': expected '  spaces  , has spaces' but got ', '
- Row 2, column 'result': expected 'MiXeD CaSe' but got 'MiXeD CaSe, '

**Expected (Postgres):**

| result |
| --- |
|  |
|   spaces  , has spaces |
| MiXeD CaSe |
| UPPERCASE, lowercase |
| WORLD, test |
| abcdefghij, ABCDEFGHIJ |
| hello, world |
| repeat, repeat |
| special!@#$%, 12345 |
| the quick brown fox, jumps over |

**Actual (Legend):**

| result |
| --- |
|   spaces  , has spaces |
| ,  |
| MiXeD CaSe,  |
| UPPERCASE, lowercase |
| WORLD, test |
| abcdefghij, ABCDEFGHIJ |
| hello, world |
| repeat, repeat |
| special!@#$%, 12345 |
| the quick brown fox, jumps over |

---

<a id="fail-initcap__txt__from_table-TDS"></a>

### ❌ initcap__txt__from_table [TDS]

**SQL (Postgres):**
```sql
SELECT INITCAP(val) AS result FROM strings ORDER BY 1
```

**SQL (Legend, rewritten):**
```sql
SELECT INITCAP(val) AS result FROM func('e2e::tds_strings') ORDER BY 1
```

**SQL (Generated, executed against DB):**
```sql
select case when char_length("root".val) = 0 then "root".val else concat(upper(left("root".val,1)),'',substring("root".val, 2)) end as "result" from public.strings as "root" order by "result"
```

**Lambda (Pure expression):**
```json
|e2e::StringRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.val,
      'val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.nullableVal,
      'nullable_val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.unicodeVal,
      'unicode_val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.emptyVal,
      'empty_val'
    )
  ]
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getString('val')->meta::pure::functions::string::toUpperFirstCharacter(),
      'result'
    )
)->meta::pure::tds::sort(
  meta::pure::tds::asc('result')
)
```

**Differences:**
- Row 1, column 'result': expected '  Spaces  ' but got '  spaces  '
- Row 4, column 'result': expected 'Mixed Case' but got 'MiXeD CaSe'
- Row 7, column 'result': expected 'The Quick Brown Fox' but got 'The quick brown fox'
- Row 8, column 'result': expected 'Uppercase' but got 'UPPERCASE'
- Row 9, column 'result': expected 'World' but got 'WORLD'

**Expected (Postgres):**

| result |
| --- |
|  |
|   Spaces   |
| Abcdefghij |
| Hello |
| Mixed Case |
| Repeat |
| Special!@#$% |
| The Quick Brown Fox |
| Uppercase |
| World |

**Actual (Legend):**

| result |
| --- |
|  |
|   spaces   |
| Abcdefghij |
| Hello |
| MiXeD CaSe |
| Repeat |
| Special!@#$% |
| The quick brown fox |
| UPPERCASE |
| WORLD |

---

<a id="fail-initcap__txt__from_table-Relation"></a>

### ❌ initcap__txt__from_table [Relation]

**SQL (Postgres):**
```sql
SELECT INITCAP(val) AS result FROM strings ORDER BY 1
```

**SQL (Legend, rewritten):**
```sql
SELECT INITCAP(val) AS result FROM func('e2e::rel_strings') ORDER BY 1
```

**SQL (Generated, executed against DB):**
```sql
select case when char_length("root".val) = 0 then "root".val else concat(upper(left("root".val,1)), substring("root".val, 2)) end as "result" from public.strings as "root" order by "result"
```

**Lambda (Pure expression):**
```json
|e2e::StringRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::StringRow[1]|$x.id,
     val: x: e2e::StringRow[1]|$x.val,
     nullable_val: x: e2e::StringRow[1]|$x.nullableVal,
     unicode_val: x: e2e::StringRow[1]|$x.unicodeVal,
     empty_val: x: e2e::StringRow[1]|$x.emptyVal
   ]
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], val:String, nullable_val:String, unicode_val:String, empty_val:String)[1]|$x.val->meta::pure::functions::multiplicity::toOne()->meta::pure::functions::string::toUpperFirstCharacter()
   ]
)->meta::pure::functions::relation::sort(
  ~result->meta::pure::functions::relation::ascending()
)
```

**Differences:**
- Row 1, column 'result': expected '  Spaces  ' but got '  spaces  '
- Row 4, column 'result': expected 'Mixed Case' but got 'MiXeD CaSe'
- Row 7, column 'result': expected 'The Quick Brown Fox' but got 'The quick brown fox'
- Row 8, column 'result': expected 'Uppercase' but got 'UPPERCASE'
- Row 9, column 'result': expected 'World' but got 'WORLD'

**Expected (Postgres):**

| result |
| --- |
|  |
|   Spaces   |
| Abcdefghij |
| Hello |
| Mixed Case |
| Repeat |
| Special!@#$% |
| The Quick Brown Fox |
| Uppercase |
| World |

**Actual (Legend):**

| result |
| --- |
|  |
|   spaces   |
| Abcdefghij |
| Hello |
| MiXeD CaSe |
| Repeat |
| Special!@#$% |
| The quick brown fox |
| UPPERCASE |
| WORLD |

---

<a id="fail-regexp_substr__nth_occurrence__ignored_by_legend-TDS"></a>

### ❌ regexp_substr__nth_occurrence__ignored_by_legend [TDS]

**SQL (Postgres):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 1, 2) AS result FROM strings WHERE id = 10
```

**SQL (Legend, rewritten):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 1, 2) AS result FROM func('e2e::tds_strings') WHERE id = 10
```

**SQL (Generated, executed against DB):**
```sql
select regexp_substr("root".val, Text'[a-z]+', 1, 1, 'p', 0) as "result" from public.strings as "root" where "root".id = 10
```

**Lambda (Pure expression):**
```json
|e2e::StringRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.val,
      'val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.nullableVal,
      'nullable_val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.unicodeVal,
      'unicode_val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.emptyVal,
      'empty_val'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 10
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getString('val')->meta::pure::functions::string::regexpExtract(
        '[a-z]+',
        false
      )->meta::pure::functions::multiplicity::toOne(),
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected 'quick' but got 'the'

**Expected (Postgres):**

| result |
| --- |
| quick |

**Actual (Legend):**

| result |
| --- |
| the |

---

<a id="fail-regexp_substr__nth_occurrence__ignored_by_legend-Relation"></a>

### ❌ regexp_substr__nth_occurrence__ignored_by_legend [Relation]

**SQL (Postgres):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 1, 2) AS result FROM strings WHERE id = 10
```

**SQL (Legend, rewritten):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 1, 2) AS result FROM func('e2e::rel_strings') WHERE id = 10
```

**SQL (Generated, executed against DB):**
```sql
select regexp_substr("root".val, Text'[a-z]+', 1, 1, 'p', 0) as "result" from public.strings as "root" where "root".id = 10
```

**Lambda (Pure expression):**
```json
|e2e::StringRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::StringRow[1]|$x.id,
     val: x: e2e::StringRow[1]|$x.val,
     nullable_val: x: e2e::StringRow[1]|$x.nullableVal,
     unicode_val: x: e2e::StringRow[1]|$x.unicodeVal,
     empty_val: x: e2e::StringRow[1]|$x.emptyVal
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], val:String, nullable_val:String, unicode_val:String, empty_val:String)[1]|$x.id == 10
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], val:String, nullable_val:String, unicode_val:String, empty_val:String)[1]|$x.val->meta::pure::functions::multiplicity::toOne()->meta::pure::functions::string::regexpExtract(
    '[a-z]+',
    false
  )->meta::pure::functions::multiplicity::toOne()
   ]
)
```

**Differences:**
- Row 0, column 'result': expected 'quick' but got 'the'

**Expected (Postgres):**

| result |
| --- |
| quick |

**Actual (Legend):**

| result |
| --- |
| the |

---

<a id="fail-regexp_substr__nth_occurrence_last__ignored_by_legend-TDS"></a>

### ❌ regexp_substr__nth_occurrence_last__ignored_by_legend [TDS]

**SQL (Postgres):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 1, 4) AS result FROM strings WHERE id = 10
```

**SQL (Legend, rewritten):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 1, 4) AS result FROM func('e2e::tds_strings') WHERE id = 10
```

**SQL (Generated, executed against DB):**
```sql
select regexp_substr("root".val, Text'[a-z]+', 1, 1, 'p', 0) as "result" from public.strings as "root" where "root".id = 10
```

**Lambda (Pure expression):**
```json
|e2e::StringRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.val,
      'val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.nullableVal,
      'nullable_val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.unicodeVal,
      'unicode_val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.emptyVal,
      'empty_val'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 10
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getString('val')->meta::pure::functions::string::regexpExtract(
        '[a-z]+',
        false
      )->meta::pure::functions::multiplicity::toOne(),
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected 'fox' but got 'the'

**Expected (Postgres):**

| result |
| --- |
| fox |

**Actual (Legend):**

| result |
| --- |
| the |

---

<a id="fail-regexp_substr__nth_occurrence_last__ignored_by_legend-Relation"></a>

### ❌ regexp_substr__nth_occurrence_last__ignored_by_legend [Relation]

**SQL (Postgres):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 1, 4) AS result FROM strings WHERE id = 10
```

**SQL (Legend, rewritten):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 1, 4) AS result FROM func('e2e::rel_strings') WHERE id = 10
```

**SQL (Generated, executed against DB):**
```sql
select regexp_substr("root".val, Text'[a-z]+', 1, 1, 'p', 0) as "result" from public.strings as "root" where "root".id = 10
```

**Lambda (Pure expression):**
```json
|e2e::StringRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::StringRow[1]|$x.id,
     val: x: e2e::StringRow[1]|$x.val,
     nullable_val: x: e2e::StringRow[1]|$x.nullableVal,
     unicode_val: x: e2e::StringRow[1]|$x.unicodeVal,
     empty_val: x: e2e::StringRow[1]|$x.emptyVal
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], val:String, nullable_val:String, unicode_val:String, empty_val:String)[1]|$x.id == 10
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], val:String, nullable_val:String, unicode_val:String, empty_val:String)[1]|$x.val->meta::pure::functions::multiplicity::toOne()->meta::pure::functions::string::regexpExtract(
    '[a-z]+',
    false
  )->meta::pure::functions::multiplicity::toOne()
   ]
)
```

**Differences:**
- Row 0, column 'result': expected 'fox' but got 'the'

**Expected (Postgres):**

| result |
| --- |
| fox |

**Actual (Legend):**

| result |
| --- |
| the |

---

<a id="fail-regexp_substr__start_position__ignored_by_legend-TDS"></a>

### ❌ regexp_substr__start_position__ignored_by_legend [TDS]

**SQL (Postgres):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 5) AS result FROM strings WHERE id = 10
```

**SQL (Legend, rewritten):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 5) AS result FROM func('e2e::tds_strings') WHERE id = 10
```

**SQL (Generated, executed against DB):**
```sql
select regexp_substr("root".val, Text'[a-z]+', 1, 1, 'p', 0) as "result" from public.strings as "root" where "root".id = 10
```

**Lambda (Pure expression):**
```json
|e2e::StringRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.val,
      'val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.nullableVal,
      'nullable_val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.unicodeVal,
      'unicode_val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.emptyVal,
      'empty_val'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 10
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getString('val')->meta::pure::functions::string::regexpExtract(
        '[a-z]+',
        false
      )->meta::pure::functions::multiplicity::toOne(),
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected 'quick' but got 'the'

**Expected (Postgres):**

| result |
| --- |
| quick |

**Actual (Legend):**

| result |
| --- |
| the |

---

<a id="fail-regexp_substr__start_position__ignored_by_legend-Relation"></a>

### ❌ regexp_substr__start_position__ignored_by_legend [Relation]

**SQL (Postgres):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 5) AS result FROM strings WHERE id = 10
```

**SQL (Legend, rewritten):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 5) AS result FROM func('e2e::rel_strings') WHERE id = 10
```

**SQL (Generated, executed against DB):**
```sql
select regexp_substr("root".val, Text'[a-z]+', 1, 1, 'p', 0) as "result" from public.strings as "root" where "root".id = 10
```

**Lambda (Pure expression):**
```json
|e2e::StringRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::StringRow[1]|$x.id,
     val: x: e2e::StringRow[1]|$x.val,
     nullable_val: x: e2e::StringRow[1]|$x.nullableVal,
     unicode_val: x: e2e::StringRow[1]|$x.unicodeVal,
     empty_val: x: e2e::StringRow[1]|$x.emptyVal
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], val:String, nullable_val:String, unicode_val:String, empty_val:String)[1]|$x.id == 10
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], val:String, nullable_val:String, unicode_val:String, empty_val:String)[1]|$x.val->meta::pure::functions::multiplicity::toOne()->meta::pure::functions::string::regexpExtract(
    '[a-z]+',
    false
  )->meta::pure::functions::multiplicity::toOne()
   ]
)
```

**Differences:**
- Row 0, column 'result': expected 'quick' but got 'the'

**Expected (Postgres):**

| result |
| --- |
| quick |

**Actual (Legend):**

| result |
| --- |
| the |

---

<a id="fail-regexp_substr__start_and_nth__ignored_by_legend-TDS"></a>

### ❌ regexp_substr__start_and_nth__ignored_by_legend [TDS]

**SQL (Postgres):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 5, 2) AS result FROM strings WHERE id = 10
```

**SQL (Legend, rewritten):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 5, 2) AS result FROM func('e2e::tds_strings') WHERE id = 10
```

**SQL (Generated, executed against DB):**
```sql
select regexp_substr("root".val, Text'[a-z]+', 1, 1, 'p', 0) as "result" from public.strings as "root" where "root".id = 10
```

**Lambda (Pure expression):**
```json
|e2e::StringRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.val,
      'val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.nullableVal,
      'nullable_val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.unicodeVal,
      'unicode_val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.emptyVal,
      'empty_val'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 10
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getString('val')->meta::pure::functions::string::regexpExtract(
        '[a-z]+',
        false
      )->meta::pure::functions::multiplicity::toOne(),
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected 'brown' but got 'the'

**Expected (Postgres):**

| result |
| --- |
| brown |

**Actual (Legend):**

| result |
| --- |
| the |

---

<a id="fail-regexp_substr__start_and_nth__ignored_by_legend-Relation"></a>

### ❌ regexp_substr__start_and_nth__ignored_by_legend [Relation]

**SQL (Postgres):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 5, 2) AS result FROM strings WHERE id = 10
```

**SQL (Legend, rewritten):**
```sql
SELECT REGEXP_SUBSTR(val, '[a-z]+', 5, 2) AS result FROM func('e2e::rel_strings') WHERE id = 10
```

**SQL (Generated, executed against DB):**
```sql
select regexp_substr("root".val, Text'[a-z]+', 1, 1, 'p', 0) as "result" from public.strings as "root" where "root".id = 10
```

**Lambda (Pure expression):**
```json
|e2e::StringRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::StringRow[1]|$x.id,
     val: x: e2e::StringRow[1]|$x.val,
     nullable_val: x: e2e::StringRow[1]|$x.nullableVal,
     unicode_val: x: e2e::StringRow[1]|$x.unicodeVal,
     empty_val: x: e2e::StringRow[1]|$x.emptyVal
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], val:String, nullable_val:String, unicode_val:String, empty_val:String)[1]|$x.id == 10
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], val:String, nullable_val:String, unicode_val:String, empty_val:String)[1]|$x.val->meta::pure::functions::multiplicity::toOne()->meta::pure::functions::string::regexpExtract(
    '[a-z]+',
    false
  )->meta::pure::functions::multiplicity::toOne()
   ]
)
```

**Differences:**
- Row 0, column 'result': expected 'brown' but got 'the'

**Expected (Postgres):**

| result |
| --- |
| brown |

**Actual (Legend):**

| result |
| --- |
| the |

---

<a id="fail-regexp_count__start_position__ignored_by_legend-TDS"></a>

### ❌ regexp_count__start_position__ignored_by_legend [TDS]

**SQL (Postgres):**
```sql
SELECT REGEXP_COUNT(val, '[a-z]', 5) AS result FROM strings WHERE id = 10
```

**SQL (Legend, rewritten):**
```sql
SELECT REGEXP_COUNT(val, '[a-z]', 5) AS result FROM func('e2e::tds_strings') WHERE id = 10
```

**SQL (Generated, executed against DB):**
```sql
select regexp_count("root".val, Text'[a-z]', 1, 'p') as "result" from public.strings as "root" where "root".id = 10
```

**Lambda (Pure expression):**
```json
|e2e::StringRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.val,
      'val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.nullableVal,
      'nullable_val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.unicodeVal,
      'unicode_val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.emptyVal,
      'empty_val'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 10
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getString('val')->meta::pure::functions::string::regexpCount('[a-z]'),
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected '13' but got '16'

**Expected (Postgres):**

| result |
| --- |
| 13 |

**Actual (Legend):**

| result |
| --- |
| 16 |

---

<a id="fail-regexp_count__start_position__ignored_by_legend-Relation"></a>

### ❌ regexp_count__start_position__ignored_by_legend [Relation]

**SQL (Postgres):**
```sql
SELECT REGEXP_COUNT(val, '[a-z]', 5) AS result FROM strings WHERE id = 10
```

**SQL (Legend, rewritten):**
```sql
SELECT REGEXP_COUNT(val, '[a-z]', 5) AS result FROM func('e2e::rel_strings') WHERE id = 10
```

**SQL (Generated, executed against DB):**
```sql
select regexp_count("root".val, Text'[a-z]', 1, 'p') as "result" from public.strings as "root" where "root".id = 10
```

**Lambda (Pure expression):**
```json
|e2e::StringRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::StringRow[1]|$x.id,
     val: x: e2e::StringRow[1]|$x.val,
     nullable_val: x: e2e::StringRow[1]|$x.nullableVal,
     unicode_val: x: e2e::StringRow[1]|$x.unicodeVal,
     empty_val: x: e2e::StringRow[1]|$x.emptyVal
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], val:String, nullable_val:String, unicode_val:String, empty_val:String)[1]|$x.id == 10
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], val:String, nullable_val:String, unicode_val:String, empty_val:String)[1]|$x.val->meta::pure::functions::multiplicity::toOne()->meta::pure::functions::string::regexpCount('[a-z]')
   ]
)
```

**Differences:**
- Row 0, column 'result': expected '13' but got '16'

**Expected (Postgres):**

| result |
| --- |
| 13 |

**Actual (Legend):**

| result |
| --- |
| 16 |

---

<a id="fail-string_to_array__txt_txt__from_table-TDS"></a>

### ❌ string_to_array__txt_txt__from_table [TDS]

**SQL (Postgres):**
```sql
SELECT STRING_TO_ARRAY(val, ' ') AS result FROM strings WHERE val IS NOT NULL ORDER BY 1
```

**SQL (Legend, rewritten):**
```sql
SELECT STRING_TO_ARRAY(val, ' ') AS result FROM func('e2e::tds_strings') WHERE val IS NOT NULL ORDER BY 1
```

**SQL (Generated, executed against DB):**
```sql
select string_to_array("root".val, Text' ') as "result" from public.strings as "root" where "root".val is not null order by "result"
```

**Lambda (Pure expression):**
```json
|e2e::StringRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.val,
      'val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.nullableVal,
      'nullable_val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.unicodeVal,
      'unicode_val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.emptyVal,
      'empty_val'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getString('val')->meta::pure::functions::collection::isNotEmpty()
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getString('val')->meta::pure::functions::string::split(' '),
      'result'
    )
)->meta::pure::tds::sort(
  meta::pure::tds::asc('result')
)
```

**Differences:**
- Row 0, column 'result': expected '{}' but got '[]'
- Row 1, column 'result': expected '{"","",spaces,"",""}' but got '["","","spaces","",""]'
- Row 2, column 'result': expected '{MiXeD,CaSe}' but got '["MiXeD","CaSe"]'
- Row 3, column 'result': expected '{UPPERCASE}' but got '["UPPERCASE"]'
- Row 4, column 'result': expected '{WORLD}' but got '["WORLD"]'
- Row 5, column 'result': expected '{abcdefghij}' but got '["abcdefghij"]'
- Row 6, column 'result': expected '{hello}' but got '["hello"]'
- Row 7, column 'result': expected '{repeat}' but got '["repeat"]'
- Row 8, column 'result': expected '{special!@#$%}' but got '["special!@#$%"]'
- Row 9, column 'result': expected '{the,quick,brown,fox}' but got '["the","quick","brown","fox"]'

**Expected (Postgres):**

| result |
| --- |
| {} |
| {"","",spaces,"",""} |
| {MiXeD,CaSe} |
| {UPPERCASE} |
| {WORLD} |
| {abcdefghij} |
| {hello} |
| {repeat} |
| {special!@#$%} |
| {the,quick,brown,fox} |

**Actual (Legend):**

| result |
| --- |
| [] |
| ["","","spaces","",""] |
| ["MiXeD","CaSe"] |
| ["UPPERCASE"] |
| ["WORLD"] |
| ["abcdefghij"] |
| ["hello"] |
| ["repeat"] |
| ["special!@#$%"] |
| ["the","quick","brown","fox"] |

---

<a id="fail-string_to_array__txt_txt__from_table-Relation"></a>

### ❌ string_to_array__txt_txt__from_table [Relation]

**SQL (Postgres):**
```sql
SELECT STRING_TO_ARRAY(val, ' ') AS result FROM strings WHERE val IS NOT NULL ORDER BY 1
```

**SQL (Legend, rewritten):**
```sql
SELECT STRING_TO_ARRAY(val, ' ') AS result FROM func('e2e::rel_strings') WHERE val IS NOT NULL ORDER BY 1
```

**SQL (Generated, executed against DB):**
```sql
select string_to_array("root".val, Text' ') as "result" from public.strings as "root" where "root".val is not null order by "result"
```

**Lambda (Pure expression):**
```json
|e2e::StringRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::StringRow[1]|$x.id,
     val: x: e2e::StringRow[1]|$x.val,
     nullable_val: x: e2e::StringRow[1]|$x.nullableVal,
     unicode_val: x: e2e::StringRow[1]|$x.unicodeVal,
     empty_val: x: e2e::StringRow[1]|$x.emptyVal
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], val:String, nullable_val:String, unicode_val:String, empty_val:String)[1]|$x.val->meta::pure::functions::collection::isNotEmpty()
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], val:String, nullable_val:String, unicode_val:String, empty_val:String)[1]|$x.val->meta::pure::functions::multiplicity::toOne()->meta::pure::functions::string::split(' ')
   ]
)->meta::pure::functions::relation::sort(
  ~result->meta::pure::functions::relation::ascending()
)
```

**Differences:**
- Row 0, column 'result': expected '{}' but got '[]'
- Row 1, column 'result': expected '{"","",spaces,"",""}' but got '["","","spaces","",""]'
- Row 2, column 'result': expected '{MiXeD,CaSe}' but got '["MiXeD","CaSe"]'
- Row 3, column 'result': expected '{UPPERCASE}' but got '["UPPERCASE"]'
- Row 4, column 'result': expected '{WORLD}' but got '["WORLD"]'
- Row 5, column 'result': expected '{abcdefghij}' but got '["abcdefghij"]'
- Row 6, column 'result': expected '{hello}' but got '["hello"]'
- Row 7, column 'result': expected '{repeat}' but got '["repeat"]'
- Row 8, column 'result': expected '{special!@#$%}' but got '["special!@#$%"]'
- Row 9, column 'result': expected '{the,quick,brown,fox}' but got '["the","quick","brown","fox"]'

**Expected (Postgres):**

| result |
| --- |
| {} |
| {"","",spaces,"",""} |
| {MiXeD,CaSe} |
| {UPPERCASE} |
| {WORLD} |
| {abcdefghij} |
| {hello} |
| {repeat} |
| {special!@#$%} |
| {the,quick,brown,fox} |

**Actual (Legend):**

| result |
| --- |
| [] |
| ["","","spaces","",""] |
| ["MiXeD","CaSe"] |
| ["UPPERCASE"] |
| ["WORLD"] |
| ["abcdefghij"] |
| ["hello"] |
| ["repeat"] |
| ["special!@#$%"] |
| ["the","quick","brown","fox"] |

---

<a id="fail-json_extract_path__from_column-Relation"></a>

### ❌ json_extract_path__from_column [Relation]

**SQL (Postgres):**
```sql
SELECT JSON_EXTRACT_PATH(json_val, 'a', 'b', 'c') AS result FROM json_data WHERE id = 2
```

**SQL (Legend, rewritten):**
```sql
SELECT JSON_EXTRACT_PATH(json_val, 'a', 'b', 'c') AS result FROM func('e2e::rel_json_data') WHERE id = 2
```

**SQL (Generated, executed against DB):**
```sql
select jsonb_extract_path(cast(jsonb_extract_path(cast(jsonb_extract_path(cast("json_data_0".json_val as jsonb), Text'a') as jsonb), Text'b') as jsonb), Text'c') as "result" from public.json_data as "json_data_0" where "json_data_0".id = 2
```

**Lambda (Pure expression):**
```json
|#>{e2e::TestDB.public.json_data}#->meta::pure::functions::relation::filter(
  x: (id:meta::pure::precisePrimitives::Int[1], json_val:meta::pure::metamodel::variant::Variant, jsonb_val:meta::pure::metamodel::variant::Variant, json_arr:meta::pure::metamodel::variant::Variant, jsonb_arr:meta::pure::metamodel::variant::Variant)[1]|$x.id == 2
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:meta::pure::precisePrimitives::Int[1], json_val:meta::pure::metamodel::variant::Variant, jsonb_val:meta::pure::metamodel::variant::Variant, json_arr:meta::pure::metamodel::variant::Variant, jsonb_arr:meta::pure::metamodel::variant::Variant)[1]|$x.json_val->meta::pure::functions::variant::navigation::get('a')->meta::pure::functions::variant::navigation::get('b')->meta::pure::functions::variant::navigation::get('c')
   ]
)
```

**Differences:**
- Row 0, column 'result': expected '"nested"' but got '"\"nested\""'

**Expected (Postgres):**

| result |
| --- |
| "nested" |

**Actual (Legend):**

| result |
| --- |
| "\"nested\"" |

---

<a id="fail-array_position__anycompatiblearray_anycompatible__from_table-Relation"></a>

### ❌ array_position__anycompatiblearray_anycompatible__from_table [Relation]

**SQL (Postgres):**
```sql
SELECT ARRAY_POSITION(ARRAY[1,2,3], 2) AS result FROM numbers WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT ARRAY_POSITION(ARRAY[1, 2, 3], 2) AS result FROM func('e2e::rel_numbers') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select (coalesce((select min(t.o) from jsonb_array_elements(cast(cast(jsonb_build_array(1,2,3) as JSONB) as jsonb)) with ordinality t(v, o) where t.v = to_jsonb(2)), 0) - 1) as "result" from public.numbers as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::NumberRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::NumberRow[1]|$x.id,
     int_val: x: e2e::NumberRow[1]|$x.intVal,
     float_val: x: e2e::NumberRow[1]|$x.floatVal,
     numeric_val: x: e2e::NumberRow[1]|$x.numericVal,
     small_val: x: e2e::NumberRow[1]|$x.smallVal,
     big_val: x: e2e::NumberRow[1]|$x.bigVal
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.id == 1
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|[
    1,
    2,
    3
  ]->meta::pure::functions::collection::indexOf(2)
   ]
)
```

**Differences:**
- Row 0, column 'result': expected '2' but got '1'

**Expected (Postgres):**

| result |
| --- |
| 2 |

**Actual (Legend):**

| result |
| --- |
| 1 |

---

<a id="fail-max__anyarray__no_generator-TDS"></a>

### ❌ max__anyarray__no_generator [TDS]

**SQL (Postgres):**
```sql
SELECT MAX(ARRAY[id]) AS result FROM persons WHERE id IS NOT NULL
```

**SQL (Legend, rewritten):**
```sql
SELECT MAX(ARRAY[id]) AS result FROM func('e2e::tds_persons') WHERE id IS NOT NULL
```

**SQL (Generated, executed against DB):**
```sql
select max("root".id) as "result" from public.persons as "root" where "root".id is not null
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.name,
      'name'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.age,
      'age'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.salary,
      'salary'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.hireDate,
      'hire_date'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.active,
      'active'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.deptId,
      'dept_id'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id')->meta::pure::functions::collection::isNotEmpty()
)->meta::pure::tds::groupBy(
  [],
  'result'->meta::pure::tds::agg(
    row: meta::pure::tds::TDSRow[1]|$row.getInteger('id'),
    y: Integer[*]|$y->meta::pure::functions::math::max()
  )
)
```

**Differences:**
- Row 0, column 'result': expected '{10}' but got '10'

**Expected (Postgres):**

| result |
| --- |
| {10} |

**Actual (Legend):**

| result |
| --- |
| 10 |

---

<a id="fail-max__anyarray__no_generator-Relation"></a>

### ❌ max__anyarray__no_generator [Relation]

**SQL (Postgres):**
```sql
SELECT MAX(ARRAY[id]) AS result FROM persons WHERE id IS NOT NULL
```

**SQL (Legend, rewritten):**
```sql
SELECT MAX(ARRAY[id]) AS result FROM func('e2e::rel_persons') WHERE id IS NOT NULL
```

**SQL (Generated, executed against DB):**
```sql
select max("root".id) as "result" from public.persons as "root" where "root".id is not null
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::Person[1]|$x.id,
     name: x: e2e::Person[1]|$x.name,
     age: x: e2e::Person[1]|$x.age,
     salary: x: e2e::Person[1]|$x.salary,
     hire_date: x: e2e::Person[1]|$x.hireDate,
     active: x: e2e::Person[1]|$x.active,
     dept_id: x: e2e::Person[1]|$x.deptId
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|$x.id->meta::pure::functions::collection::isNotEmpty()
)->meta::pure::functions::relation::aggregate(
  ~[
     result: x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|$x.id:y: Integer[*]|$y->meta::pure::functions::math::max()
   ]
)
```

**Differences:**
- Row 0, column 'result': expected '{10}' but got '10'

**Expected (Postgres):**

| result |
| --- |
| {10} |

**Actual (Legend):**

| result |
| --- |
| 10 |

---

<a id="fail-min__anyarray__no_generator-TDS"></a>

### ❌ min__anyarray__no_generator [TDS]

**SQL (Postgres):**
```sql
SELECT MIN(ARRAY[id]) AS result FROM persons WHERE id IS NOT NULL
```

**SQL (Legend, rewritten):**
```sql
SELECT MIN(ARRAY[id]) AS result FROM func('e2e::tds_persons') WHERE id IS NOT NULL
```

**SQL (Generated, executed against DB):**
```sql
select min("root".id) as "result" from public.persons as "root" where "root".id is not null
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.name,
      'name'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.age,
      'age'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.salary,
      'salary'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.hireDate,
      'hire_date'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.active,
      'active'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.deptId,
      'dept_id'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id')->meta::pure::functions::collection::isNotEmpty()
)->meta::pure::tds::groupBy(
  [],
  'result'->meta::pure::tds::agg(
    row: meta::pure::tds::TDSRow[1]|$row.getInteger('id'),
    y: Integer[*]|$y->meta::pure::functions::math::min()
  )
)
```

**Differences:**
- Row 0, column 'result': expected '{1}' but got '1'

**Expected (Postgres):**

| result |
| --- |
| {1} |

**Actual (Legend):**

| result |
| --- |
| 1 |

---

<a id="fail-min__anyarray__no_generator-Relation"></a>

### ❌ min__anyarray__no_generator [Relation]

**SQL (Postgres):**
```sql
SELECT MIN(ARRAY[id]) AS result FROM persons WHERE id IS NOT NULL
```

**SQL (Legend, rewritten):**
```sql
SELECT MIN(ARRAY[id]) AS result FROM func('e2e::rel_persons') WHERE id IS NOT NULL
```

**SQL (Generated, executed against DB):**
```sql
select min("root".id) as "result" from public.persons as "root" where "root".id is not null
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::Person[1]|$x.id,
     name: x: e2e::Person[1]|$x.name,
     age: x: e2e::Person[1]|$x.age,
     salary: x: e2e::Person[1]|$x.salary,
     hire_date: x: e2e::Person[1]|$x.hireDate,
     active: x: e2e::Person[1]|$x.active,
     dept_id: x: e2e::Person[1]|$x.deptId
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|$x.id->meta::pure::functions::collection::isNotEmpty()
)->meta::pure::functions::relation::aggregate(
  ~[
     result: x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|$x.id:y: Integer[*]|$y->meta::pure::functions::math::min()
   ]
)
```

**Differences:**
- Row 0, column 'result': expected '{1}' but got '1'

**Expected (Postgres):**

| result |
| --- |
| {1} |

**Actual (Legend):**

| result |
| --- |
| 1 |

---

<a id="fail-op_div__int__truncates_toward_zero-TDS"></a>

### ❌ op_div__int__truncates_toward_zero [TDS]

**SQL (Postgres):**
```sql
SELECT id, int_val / 5 AS result FROM numbers WHERE id = 9
```

**SQL (Legend, rewritten):**
```sql
SELECT id, int_val / 5 AS result FROM func('e2e::tds_numbers') WHERE id = 9
```

**SQL (Generated, executed against DB):**
```sql
select "root".id as "id", ((1.0 * "root".int_val) / 5) as "result" from public.numbers as "root" where "root".id = 9
```

**Lambda (Pure expression):**
```json
|e2e::NumberRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.intVal,
      'int_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.floatVal,
      'float_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.numericVal,
      'numeric_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.smallVal,
      'small_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.bigVal,
      'big_val'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 9
)->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getInteger('id'),
      'id'
    ),
    meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getInteger('int_val') / 5,
      'result'
    )
  ]
)
```

**Differences:**
- Row 0, column 'result': expected '1' but got '1.4'

**Expected (Postgres):**

| id | result |
| --- | --- |
| 9 | 1 |

**Actual (Legend):**

| id | result |
| --- | --- |
| 9 | 1.4 |

---

<a id="fail-op_div__int__truncates_toward_zero-Relation"></a>

### ❌ op_div__int__truncates_toward_zero [Relation]

**SQL (Postgres):**
```sql
SELECT id, int_val / 5 AS result FROM numbers WHERE id = 9
```

**SQL (Legend, rewritten):**
```sql
SELECT id, int_val / 5 AS result FROM func('e2e::rel_numbers') WHERE id = 9
```

**SQL (Generated, executed against DB):**
```sql
select "root".id as "id", ((1.0 * "root".int_val) / 5) as "result" from public.numbers as "root" where "root".id = 9
```

**Lambda (Pure expression):**
```json
|e2e::NumberRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::NumberRow[1]|$x.id,
     int_val: x: e2e::NumberRow[1]|$x.intVal,
     float_val: x: e2e::NumberRow[1]|$x.floatVal,
     numeric_val: x: e2e::NumberRow[1]|$x.numericVal,
     small_val: x: e2e::NumberRow[1]|$x.smallVal,
     big_val: x: e2e::NumberRow[1]|$x.bigVal
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.id == 9
)->meta::pure::functions::relation::project(
  ~[
     id: x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.id,
     result: x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.int_val->meta::pure::functions::multiplicity::toOne() / 5
   ]
)
```

**Differences:**
- Row 0, column 'result': expected '1' but got '1.4'

**Expected (Postgres):**

| id | result |
| --- | --- |
| 9 | 1 |

**Actual (Legend):**

| id | result |
| --- | --- |
| 9 | 1.4 |

---

<a id="fail-op_div__negative__truncates_toward_zero-TDS"></a>

### ❌ op_div__negative__truncates_toward_zero [TDS]

**SQL (Postgres):**
```sql
SELECT id, int_val / 3 AS result FROM numbers WHERE id = 2
```

**SQL (Legend, rewritten):**
```sql
SELECT id, int_val / 3 AS result FROM func('e2e::tds_numbers') WHERE id = 2
```

**SQL (Generated, executed against DB):**
```sql
select "root".id as "id", ((1.0 * "root".int_val) / 3) as "result" from public.numbers as "root" where "root".id = 2
```

**Lambda (Pure expression):**
```json
|e2e::NumberRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.intVal,
      'int_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.floatVal,
      'float_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.numericVal,
      'numeric_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.smallVal,
      'small_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.bigVal,
      'big_val'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 2
)->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getInteger('id'),
      'id'
    ),
    meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getInteger('int_val') / 3,
      'result'
    )
  ]
)
```

**Differences:**
- Row 0, column 'result': expected '-3' but got '-3.3333333333333335'

**Expected (Postgres):**

| id | result |
| --- | --- |
| 2 | -3 |

**Actual (Legend):**

| id | result |
| --- | --- |
| 2 | -3.3333333333333335 |

---

<a id="fail-op_div__negative__truncates_toward_zero-Relation"></a>

### ❌ op_div__negative__truncates_toward_zero [Relation]

**SQL (Postgres):**
```sql
SELECT id, int_val / 3 AS result FROM numbers WHERE id = 2
```

**SQL (Legend, rewritten):**
```sql
SELECT id, int_val / 3 AS result FROM func('e2e::rel_numbers') WHERE id = 2
```

**SQL (Generated, executed against DB):**
```sql
select "root".id as "id", ((1.0 * "root".int_val) / 3) as "result" from public.numbers as "root" where "root".id = 2
```

**Lambda (Pure expression):**
```json
|e2e::NumberRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::NumberRow[1]|$x.id,
     int_val: x: e2e::NumberRow[1]|$x.intVal,
     float_val: x: e2e::NumberRow[1]|$x.floatVal,
     numeric_val: x: e2e::NumberRow[1]|$x.numericVal,
     small_val: x: e2e::NumberRow[1]|$x.smallVal,
     big_val: x: e2e::NumberRow[1]|$x.bigVal
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.id == 2
)->meta::pure::functions::relation::project(
  ~[
     id: x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.id,
     result: x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.int_val->meta::pure::functions::multiplicity::toOne() / 3
   ]
)
```

**Differences:**
- Row 0, column 'result': expected '-3' but got '-3.3333333333333335'

**Expected (Postgres):**

| id | result |
| --- | --- |
| 2 | -3 |

**Actual (Legend):**

| id | result |
| --- | --- |
| 2 | -3.3333333333333335 |

---

<a id="fail-op_mod__negative__basic-TDS"></a>

### ❌ op_mod__negative__basic [TDS]

**SQL (Postgres):**
```sql
SELECT id, int_val % 3 AS result FROM numbers WHERE id = 2
```

**SQL (Legend, rewritten):**
```sql
SELECT id, int_val % 3 AS result FROM func('e2e::tds_numbers') WHERE id = 2
```

**SQL (Generated, executed against DB):**
```sql
select "root".id as "id", mod(mod("root".int_val, 3) + 3, 3) as "result" from public.numbers as "root" where "root".id = 2
```

**Lambda (Pure expression):**
```json
|e2e::NumberRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.intVal,
      'int_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.floatVal,
      'float_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.numericVal,
      'numeric_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.smallVal,
      'small_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.bigVal,
      'big_val'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 2
)->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getInteger('id'),
      'id'
    ),
    meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getInteger('int_val')->meta::pure::functions::math::mod(3),
      'result'
    )
  ]
)
```

**Differences:**
- Row 0, column 'result': expected '-1' but got '2'

**Expected (Postgres):**

| id | result |
| --- | --- |
| 2 | -1 |

**Actual (Legend):**

| id | result |
| --- | --- |
| 2 | 2 |

---

<a id="fail-op_mod__negative__basic-Relation"></a>

### ❌ op_mod__negative__basic [Relation]

**SQL (Postgres):**
```sql
SELECT id, int_val % 3 AS result FROM numbers WHERE id = 2
```

**SQL (Legend, rewritten):**
```sql
SELECT id, int_val % 3 AS result FROM func('e2e::rel_numbers') WHERE id = 2
```

**SQL (Generated, executed against DB):**
```sql
select "root".id as "id", mod(mod("root".int_val, 3) + 3, 3) as "result" from public.numbers as "root" where "root".id = 2
```

**Lambda (Pure expression):**
```json
|e2e::NumberRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::NumberRow[1]|$x.id,
     int_val: x: e2e::NumberRow[1]|$x.intVal,
     float_val: x: e2e::NumberRow[1]|$x.floatVal,
     numeric_val: x: e2e::NumberRow[1]|$x.numericVal,
     small_val: x: e2e::NumberRow[1]|$x.smallVal,
     big_val: x: e2e::NumberRow[1]|$x.bigVal
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.id == 2
)->meta::pure::functions::relation::project(
  ~[
     id: x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.id,
     result: x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.int_val->meta::pure::functions::multiplicity::toOne()->meta::pure::functions::math::mod(3)
   ]
)
```

**Differences:**
- Row 0, column 'result': expected '-1' but got '2'

**Expected (Postgres):**

| id | result |
| --- | --- |
| 2 | -1 |

**Actual (Legend):**

| id | result |
| --- | --- |
| 2 | 2 |

---

<a id="fail-op_mod__numeric__basic-TDS"></a>

### ❌ op_mod__numeric__basic [TDS]

**SQL (Postgres):**
```sql
SELECT id, numeric_val % 3 AS result FROM numbers WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT id, numeric_val % 3 AS result FROM func('e2e::tds_numbers') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select "root".id as "id", mod(mod("root".numeric_val, 3) + 3, 3) as "result" from public.numbers as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::NumberRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.intVal,
      'int_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.floatVal,
      'float_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.numericVal,
      'numeric_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.smallVal,
      'small_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.bigVal,
      'big_val'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 1
)->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getInteger('id'),
      'id'
    ),
    meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getFloat('numeric_val')->meta::pure::functions::math::mod(3),
      'result'
    )
  ]
)
```

**Differences:**
- Row 0, column 'result': expected '0.67890' but got '0'

**Expected (Postgres):**

| id | result |
| --- | --- |
| 1 | 0.67890 |

**Actual (Legend):**

| id | result |
| --- | --- |
| 1 | 0 |

---

<a id="fail-op_sub__date_minus_int_days-TDS"></a>

### ❌ op_sub__date_minus_int_days [TDS]

**SQL (Postgres):**
```sql
SELECT d - 5 AS result FROM dates WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT d - 5 AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select ("root".d + (INTERVAL '1 DAYS' * 5)) as "result" from public.dates as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::DateRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::DateRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::DateRow[1]|$x.d,
      'd'
    ),
    meta::pure::tds::col(
      x: e2e::DateRow[1]|$x.ts,
      'ts'
    ),
    meta::pure::tds::col(
      x: e2e::DateRow[1]|$x.tsz,
      'tsz'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 1
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getStrictDate('d')->meta::pure::functions::date::adjust(
        5,
        meta::pure::functions::date::DurationUnit.DAYS
      ),
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected '2023-01-10' but got '2023-01-20 00:00:00.0'

**Expected (Postgres):**

| result |
| --- |
| 2023-01-10 |

**Actual (Legend):**

| result |
| --- |
| 2023-01-20 00:00:00.0 |

---

<a id="fail-op_sub__date_minus_int_days-Relation"></a>

### ❌ op_sub__date_minus_int_days [Relation]

**SQL (Postgres):**
```sql
SELECT d - 5 AS result FROM dates WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT d - 5 AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select ("root".d + (INTERVAL '1 DAYS' * 5)) as "result" from public.dates as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::DateRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::DateRow[1]|$x.id,
     d: x: e2e::DateRow[1]|$x.d,
     ts: x: e2e::DateRow[1]|$x.ts,
     tsz: x: e2e::DateRow[1]|$x.tsz
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], d:StrictDate, ts:DateTime, tsz:DateTime)[1]|$x.id == 1
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], d:StrictDate, ts:DateTime, tsz:DateTime)[1]|$x.d->meta::pure::functions::multiplicity::toOne()->meta::pure::functions::date::adjust(
    5,
    meta::pure::functions::date::DurationUnit.DAYS
  )
   ]
)
```

**Differences:**
- Row 0, column 'result': expected '2023-01-10' but got '2023-01-20 00:00:00.0'

**Expected (Postgres):**

| result |
| --- |
| 2023-01-10 |

**Actual (Legend):**

| result |
| --- |
| 2023-01-20 00:00:00.0 |

---

<a id="fail-concat_op__txt_txt__from_table-TDS"></a>

### ❌ concat_op__txt_txt__from_table [TDS]

**SQL (Postgres):**
```sql
SELECT val || '-' || nullable_val AS result FROM strings ORDER BY 1
```

**SQL (Legend, rewritten):**
```sql
SELECT val || '-' || nullable_val AS result FROM func('e2e::tds_strings') ORDER BY 1
```

**SQL (Generated, executed against DB):**
```sql
select concat("root".val,'',Text'-','',"root".nullable_val) as "result" from public.strings as "root" order by "result"
```

**Lambda (Pure expression):**
```json
|e2e::StringRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.val,
      'val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.nullableVal,
      'nullable_val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.unicodeVal,
      'unicode_val'
    ),
    meta::pure::tds::col(
      x: e2e::StringRow[1]|$x.emptyVal,
      'empty_val'
    )
  ]
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getString('val') + '-' + $row.getString('nullable_val'),
      'result'
    )
)->meta::pure::tds::sort(
  meta::pure::tds::asc('result')
)
```

**Differences:**
- Row 1, column 'result': expected 'UPPERCASE-lowercase' but got '-'
- Row 2, column 'result': expected 'WORLD-test' but got 'MiXeD CaSe-'
- Row 3, column 'result': expected 'abcdefghij-ABCDEFGHIJ' but got 'UPPERCASE-lowercase'
- Row 4, column 'result': expected 'hello-world' but got 'WORLD-test'
- Row 5, column 'result': expected 'repeat-repeat' but got 'abcdefghij-ABCDEFGHIJ'
- Row 6, column 'result': expected 'special!@#$%-12345' but got 'hello-world'
- Row 7, column 'result': expected 'the quick brown fox-jumps over' but got 'repeat-repeat'
- Row 8, column 'result': expected 'null' but got 'special!@#$%-12345'
- Row 9, column 'result': expected 'null' but got 'the quick brown fox-jumps over'

**Expected (Postgres):**

| result |
| --- |
|   spaces  -has spaces |
| UPPERCASE-lowercase |
| WORLD-test |
| abcdefghij-ABCDEFGHIJ |
| hello-world |
| repeat-repeat |
| special!@#$%-12345 |
| the quick brown fox-jumps over |
| _NULL_ |
| _NULL_ |

**Actual (Legend):**

| result |
| --- |
|   spaces  -has spaces |
| - |
| MiXeD CaSe- |
| UPPERCASE-lowercase |
| WORLD-test |
| abcdefghij-ABCDEFGHIJ |
| hello-world |
| repeat-repeat |
| special!@#$%-12345 |
| the quick brown fox-jumps over |

---

<a id="fail-concat_op__mixed_types__null_handling-TDS"></a>

### ❌ concat_op__mixed_types__null_handling [TDS]

**SQL (Postgres):**
```sql
SELECT 'val=' || NULL || '-' || 42 AS result FROM persons WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT 'val=' || NULL || '-' || 42 AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select Text'val=-42' as "result" from public.persons as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.name,
      'name'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.age,
      'age'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.salary,
      'salary'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.hireDate,
      'hire_date'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.active,
      'active'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.deptId,
      'dept_id'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 1
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|'val=' + [] + '-' + meta::pure::functions::string::toString(42),
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected 'null' but got 'val=-42'

**Expected (Postgres):**

| result |
| --- |
| _NULL_ |

**Actual (Legend):**

| result |
| --- |
| val=-42 |

---

<a id="fail-eq__null_null-TDS"></a>

### ❌ eq__null_null [TDS]

**SQL (Postgres):**
```sql
SELECT NULL = NULL AS result FROM persons WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT NULL = NULL AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select Boolean'true' as "result" from public.persons as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.name,
      'name'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.age,
      'age'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.salary,
      'salary'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.hireDate,
      'hire_date'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.active,
      'active'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.deptId,
      'dept_id'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 1
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|[] ==
        [],
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected 'null' but got 'true'

**Expected (Postgres):**

| result |
| --- |
| _NULL_ |

**Actual (Legend):**

| result |
| --- |
| true |

---

<a id="fail-neq__int__null-TDS"></a>

### ❌ neq__int__null [TDS]

**SQL (Postgres):**
```sql
SELECT id, int_val <> 42 AS result FROM numbers WHERE id = 5
```

**SQL (Legend, rewritten):**
```sql
SELECT id, int_val <> 42 AS result FROM func('e2e::tds_numbers') WHERE id = 5
```

**SQL (Generated, executed against DB):**
```sql
select "root".id as "id", "root".int_val is distinct from 42 as "result" from public.numbers as "root" where "root".id = 5
```

**Lambda (Pure expression):**
```json
|e2e::NumberRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.intVal,
      'int_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.floatVal,
      'float_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.numericVal,
      'numeric_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.smallVal,
      'small_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.bigVal,
      'big_val'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 5
)->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getInteger('id'),
      'id'
    ),
    meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getInteger('int_val') != 42,
      'result'
    )
  ]
)
```

**Differences:**
- Row 0, column 'result': expected 'null' but got 'true'

**Expected (Postgres):**

| id | result |
| --- | --- |
| 5 | _NULL_ |

**Actual (Legend):**

| id | result |
| --- | --- |
| 5 | true |

---

<a id="fail-neq__int__null-Relation"></a>

### ❌ neq__int__null [Relation]

**SQL (Postgres):**
```sql
SELECT id, int_val <> 42 AS result FROM numbers WHERE id = 5
```

**SQL (Legend, rewritten):**
```sql
SELECT id, int_val <> 42 AS result FROM func('e2e::rel_numbers') WHERE id = 5
```

**SQL (Generated, executed against DB):**
```sql
select "root".id as "id", "root".int_val is distinct from 42 as "result" from public.numbers as "root" where "root".id = 5
```

**Lambda (Pure expression):**
```json
|e2e::NumberRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::NumberRow[1]|$x.id,
     int_val: x: e2e::NumberRow[1]|$x.intVal,
     float_val: x: e2e::NumberRow[1]|$x.floatVal,
     numeric_val: x: e2e::NumberRow[1]|$x.numericVal,
     small_val: x: e2e::NumberRow[1]|$x.smallVal,
     big_val: x: e2e::NumberRow[1]|$x.bigVal
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.id == 5
)->meta::pure::functions::relation::project(
  ~[
     id: x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.id,
     result: x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.int_val != 42
   ]
)
```

**Differences:**
- Row 0, column 'result': expected 'null' but got 'true'

**Expected (Postgres):**

| id | result |
| --- | --- |
| 5 | _NULL_ |

**Actual (Legend):**

| id | result |
| --- | --- |
| 5 | true |

---

<a id="fail-lt__int__null-Relation"></a>

### ❌ lt__int__null [Relation]

**SQL (Postgres):**
```sql
SELECT id, int_val < 100 AS result FROM numbers WHERE id = 5
```

**SQL (Legend, rewritten):**
```sql
SELECT id, int_val < 100 AS result FROM func('e2e::rel_numbers') WHERE id = 5
```

**SQL (Generated, executed against DB):**
```sql
select "root".id as "id", ("root".int_val is not null and "root".int_val < 100) as "result" from public.numbers as "root" where "root".id = 5
```

**Lambda (Pure expression):**
```json
|e2e::NumberRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::NumberRow[1]|$x.id,
     int_val: x: e2e::NumberRow[1]|$x.intVal,
     float_val: x: e2e::NumberRow[1]|$x.floatVal,
     numeric_val: x: e2e::NumberRow[1]|$x.numericVal,
     small_val: x: e2e::NumberRow[1]|$x.smallVal,
     big_val: x: e2e::NumberRow[1]|$x.bigVal
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.id == 5
)->meta::pure::functions::relation::project(
  ~[
     id: x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.id,
     result: x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.int_val < 100
   ]
)
```

**Differences:**
- Row 0, column 'result': expected 'null' but got 'false'

**Expected (Postgres):**

| id | result |
| --- | --- |
| 5 | _NULL_ |

**Actual (Legend):**

| id | result |
| --- | --- |
| 5 | false |

---

<a id="fail-gt__int__null-Relation"></a>

### ❌ gt__int__null [Relation]

**SQL (Postgres):**
```sql
SELECT id, int_val > 10 AS result FROM numbers WHERE id = 5
```

**SQL (Legend, rewritten):**
```sql
SELECT id, int_val > 10 AS result FROM func('e2e::rel_numbers') WHERE id = 5
```

**SQL (Generated, executed against DB):**
```sql
select "root".id as "id", ("root".int_val is not null and "root".int_val > 10) as "result" from public.numbers as "root" where "root".id = 5
```

**Lambda (Pure expression):**
```json
|e2e::NumberRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::NumberRow[1]|$x.id,
     int_val: x: e2e::NumberRow[1]|$x.intVal,
     float_val: x: e2e::NumberRow[1]|$x.floatVal,
     numeric_val: x: e2e::NumberRow[1]|$x.numericVal,
     small_val: x: e2e::NumberRow[1]|$x.smallVal,
     big_val: x: e2e::NumberRow[1]|$x.bigVal
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.id == 5
)->meta::pure::functions::relation::project(
  ~[
     id: x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.id,
     result: x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.int_val > 10
   ]
)
```

**Differences:**
- Row 0, column 'result': expected 'null' but got 'false'

**Expected (Postgres):**

| id | result |
| --- | --- |
| 5 | _NULL_ |

**Actual (Legend):**

| id | result |
| --- | --- |
| 5 | false |

---

<a id="fail-neq__filter__int-TDS"></a>

### ❌ neq__filter__int [TDS]

**SQL (Postgres):**
```sql
SELECT id, name FROM persons WHERE age <> 30 ORDER BY id
```

**SQL (Legend, rewritten):**
```sql
SELECT id, name FROM func('e2e::tds_persons') WHERE age <> 30 ORDER BY id
```

**SQL (Generated, executed against DB):**
```sql
select "root".id as "id", "root".name as "name" from public.persons as "root" where "root".age is distinct from 30 order by "id"
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.name,
      'name'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.age,
      'age'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.salary,
      'salary'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.hireDate,
      'hire_date'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.active,
      'active'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.deptId,
      'dept_id'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('age') != 30
)->meta::pure::tds::restrict(
  [
    'id',
    'name'
  ]
)->meta::pure::tds::sort(
  meta::pure::tds::asc('id')
)
```

**Differences:**
- Row count mismatch: expected 8 but got 9

**Expected (Postgres):**

| id | name |
| --- | --- |
| 2 | Bob |
| 3 | Charlie |
| 4 | Diana |
| 5 | Eve |
| 6 | Frank |
| 8 | Hank |
| 9 | Ivy |
| 10 | Jack |

**Actual (Legend):**

| id | name |
| --- | --- |
| 2 | Bob |
| 3 | Charlie |
| 4 | Diana |
| 5 | Eve |
| 6 | Frank |
| 7 | Grace |
| 8 | Hank |
| 9 | Ivy |
| 10 | Jack |

---

<a id="fail-neq__filter__int-Relation"></a>

### ❌ neq__filter__int [Relation]

**SQL (Postgres):**
```sql
SELECT id, name FROM persons WHERE age <> 30 ORDER BY id
```

**SQL (Legend, rewritten):**
```sql
SELECT id, name FROM func('e2e::rel_persons') WHERE age <> 30 ORDER BY id
```

**SQL (Generated, executed against DB):**
```sql
select "root".id as "id", "root".name as "name" from public.persons as "root" where "root".age is distinct from 30 order by "id"
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::Person[1]|$x.id,
     name: x: e2e::Person[1]|$x.name,
     age: x: e2e::Person[1]|$x.age,
     salary: x: e2e::Person[1]|$x.salary,
     hire_date: x: e2e::Person[1]|$x.hireDate,
     active: x: e2e::Person[1]|$x.active,
     dept_id: x: e2e::Person[1]|$x.deptId
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|$x.age != 30
)->meta::pure::functions::relation::select(
  ~[
     id,
     name
   ]
)->meta::pure::functions::relation::sort(
  ~id->meta::pure::functions::relation::ascending()
)
```

**Differences:**
- Row count mismatch: expected 8 but got 9

**Expected (Postgres):**

| id | name |
| --- | --- |
| 2 | Bob |
| 3 | Charlie |
| 4 | Diana |
| 5 | Eve |
| 6 | Frank |
| 8 | Hank |
| 9 | Ivy |
| 10 | Jack |

**Actual (Legend):**

| id | name |
| --- | --- |
| 2 | Bob |
| 3 | Charlie |
| 4 | Diana |
| 5 | Eve |
| 6 | Frank |
| 7 | Grace |
| 8 | Hank |
| 9 | Ivy |
| 10 | Jack |

---

<a id="fail-and__false_null-TDS"></a>

### ❌ and__false_null [TDS]

**SQL (Postgres):**
```sql
SELECT (false AND CAST(NULL AS BOOLEAN)) AS result FROM persons WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT (false AND CAST(NULL AS BOOLEAN)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select null as "result" from public.persons as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.name,
      'name'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.age,
      'age'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.salary,
      'salary'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.hireDate,
      'hire_date'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.active,
      'active'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.deptId,
      'dept_id'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 1
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|[]->meta::pure::functions::lang::cast(@Boolean),
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected 'false' but got 'null'

**Expected (Postgres):**

| result |
| --- |
| false |

**Actual (Legend):**

| result |
| --- |
| _NULL_ |

---

<a id="fail-and__false_null-Relation"></a>

### ❌ and__false_null [Relation]

**SQL (Postgres):**
```sql
SELECT (false AND CAST(NULL AS BOOLEAN)) AS result FROM persons WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT (false AND CAST(NULL AS BOOLEAN)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select null as "result" from public.persons as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::Person[1]|$x.id,
     name: x: e2e::Person[1]|$x.name,
     age: x: e2e::Person[1]|$x.age,
     salary: x: e2e::Person[1]|$x.salary,
     hire_date: x: e2e::Person[1]|$x.hireDate,
     active: x: e2e::Person[1]|$x.active,
     dept_id: x: e2e::Person[1]|$x.deptId
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|$x.id == 1
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|[]->meta::pure::functions::lang::cast(@Boolean)
   ]
)
```

**Differences:**
- Row 0, column 'result': expected 'false' but got 'null'

**Expected (Postgres):**

| result |
| --- |
| false |

**Actual (Legend):**

| result |
| --- |
| _NULL_ |

---

<a id="fail-or__true_null-TDS"></a>

### ❌ or__true_null [TDS]

**SQL (Postgres):**
```sql
SELECT (true OR CAST(NULL AS BOOLEAN)) AS result FROM persons WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT (true OR CAST(NULL AS BOOLEAN)) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select null as "result" from public.persons as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.name,
      'name'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.age,
      'age'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.salary,
      'salary'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.hireDate,
      'hire_date'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.active,
      'active'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.deptId,
      'dept_id'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 1
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|[]->meta::pure::functions::lang::cast(@Boolean),
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected 'true' but got 'null'

**Expected (Postgres):**

| result |
| --- |
| true |

**Actual (Legend):**

| result |
| --- |
| _NULL_ |

---

<a id="fail-or__true_null-Relation"></a>

### ❌ or__true_null [Relation]

**SQL (Postgres):**
```sql
SELECT (true OR CAST(NULL AS BOOLEAN)) AS result FROM persons WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT (true OR CAST(NULL AS BOOLEAN)) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select null as "result" from public.persons as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::Person[1]|$x.id,
     name: x: e2e::Person[1]|$x.name,
     age: x: e2e::Person[1]|$x.age,
     salary: x: e2e::Person[1]|$x.salary,
     hire_date: x: e2e::Person[1]|$x.hireDate,
     active: x: e2e::Person[1]|$x.active,
     dept_id: x: e2e::Person[1]|$x.deptId
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|$x.id == 1
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|[]->meta::pure::functions::lang::cast(@Boolean)
   ]
)
```

**Differences:**
- Row 0, column 'result': expected 'true' but got 'null'

**Expected (Postgres):**

| result |
| --- |
| true |

**Actual (Legend):**

| result |
| --- |
| _NULL_ |

---

<a id="fail-json_arrow_get_field-Relation"></a>

### ❌ json_arrow_get_field [Relation]

**SQL (Postgres):**
```sql
SELECT json_val -> 'a' AS result FROM json_data WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT json_val -> 'a' AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select jsonb_extract_path(cast("json_data_0".json_val as jsonb), Text'a') as "result" from public.json_data as "json_data_0" where "json_data_0".id = 1
```

**Lambda (Pure expression):**
```json
|#>{e2e::TestDB.public.json_data}#->meta::pure::functions::relation::filter(
  x: (id:meta::pure::precisePrimitives::Int[1], json_val:meta::pure::metamodel::variant::Variant, jsonb_val:meta::pure::metamodel::variant::Variant, json_arr:meta::pure::metamodel::variant::Variant, jsonb_arr:meta::pure::metamodel::variant::Variant)[1]|$x.id == 1
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:meta::pure::precisePrimitives::Int[1], json_val:meta::pure::metamodel::variant::Variant, jsonb_val:meta::pure::metamodel::variant::Variant, json_arr:meta::pure::metamodel::variant::Variant, jsonb_arr:meta::pure::metamodel::variant::Variant)[1]|$x.json_val->meta::pure::functions::variant::navigation::get('a')
   ]
)
```

**Differences:**
- Row 0, column 'result': expected '1' but got '"1"'

**Expected (Postgres):**

| result |
| --- |
| 1 |

**Actual (Legend):**

| result |
| --- |
| "1" |

---

<a id="fail-jsonb_arrow_get_field-Relation"></a>

### ❌ jsonb_arrow_get_field [Relation]

**SQL (Postgres):**
```sql
SELECT jsonb_val -> 'b' AS result FROM json_data WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT jsonb_val -> 'b' AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select jsonb_extract_path(cast("json_data_0".jsonb_val as jsonb), Text'b') as "result" from public.json_data as "json_data_0" where "json_data_0".id = 1
```

**Lambda (Pure expression):**
```json
|#>{e2e::TestDB.public.json_data}#->meta::pure::functions::relation::filter(
  x: (id:meta::pure::precisePrimitives::Int[1], json_val:meta::pure::metamodel::variant::Variant, jsonb_val:meta::pure::metamodel::variant::Variant, json_arr:meta::pure::metamodel::variant::Variant, jsonb_arr:meta::pure::metamodel::variant::Variant)[1]|$x.id == 1
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:meta::pure::precisePrimitives::Int[1], json_val:meta::pure::metamodel::variant::Variant, jsonb_val:meta::pure::metamodel::variant::Variant, json_arr:meta::pure::metamodel::variant::Variant, jsonb_arr:meta::pure::metamodel::variant::Variant)[1]|$x.jsonb_val->meta::pure::functions::variant::navigation::get('b')
   ]
)
```

**Differences:**
- Row 0, column 'result': expected '"hello"' but got '"\"hello\""'

**Expected (Postgres):**

| result |
| --- |
| "hello" |

**Actual (Legend):**

| result |
| --- |
| "\"hello\"" |

---

<a id="fail-json_arrow_get_index-Relation"></a>

### ❌ json_arrow_get_index [Relation]

**SQL (Postgres):**
```sql
SELECT json_arr -> 0 AS result FROM json_data WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT json_arr -> 0 AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select (cast("json_data_0".json_arr as jsonb)->0) as "result" from public.json_data as "json_data_0" where "json_data_0".id = 1
```

**Lambda (Pure expression):**
```json
|#>{e2e::TestDB.public.json_data}#->meta::pure::functions::relation::filter(
  x: (id:meta::pure::precisePrimitives::Int[1], json_val:meta::pure::metamodel::variant::Variant, jsonb_val:meta::pure::metamodel::variant::Variant, json_arr:meta::pure::metamodel::variant::Variant, jsonb_arr:meta::pure::metamodel::variant::Variant)[1]|$x.id == 1
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:meta::pure::precisePrimitives::Int[1], json_val:meta::pure::metamodel::variant::Variant, jsonb_val:meta::pure::metamodel::variant::Variant, json_arr:meta::pure::metamodel::variant::Variant, jsonb_arr:meta::pure::metamodel::variant::Variant)[1]|$x.json_arr->meta::pure::functions::variant::navigation::get(0)
   ]
)
```

**Differences:**
- Row 0, column 'result': expected '1' but got '"1"'

**Expected (Postgres):**

| result |
| --- |
| 1 |

**Actual (Legend):**

| result |
| --- |
| "1" |

---

<a id="fail-jsonb_arrow_get_index-Relation"></a>

### ❌ jsonb_arrow_get_index [Relation]

**SQL (Postgres):**
```sql
SELECT jsonb_arr -> 1 AS result FROM json_data WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT jsonb_arr -> 1 AS result FROM func('e2e::rel_json_data') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select (cast("json_data_0".jsonb_arr as jsonb)->1) as "result" from public.json_data as "json_data_0" where "json_data_0".id = 1
```

**Lambda (Pure expression):**
```json
|#>{e2e::TestDB.public.json_data}#->meta::pure::functions::relation::filter(
  x: (id:meta::pure::precisePrimitives::Int[1], json_val:meta::pure::metamodel::variant::Variant, jsonb_val:meta::pure::metamodel::variant::Variant, json_arr:meta::pure::metamodel::variant::Variant, jsonb_arr:meta::pure::metamodel::variant::Variant)[1]|$x.id == 1
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:meta::pure::precisePrimitives::Int[1], json_val:meta::pure::metamodel::variant::Variant, jsonb_val:meta::pure::metamodel::variant::Variant, json_arr:meta::pure::metamodel::variant::Variant, jsonb_arr:meta::pure::metamodel::variant::Variant)[1]|$x.jsonb_arr->meta::pure::functions::variant::navigation::get(1)
   ]
)
```

**Differences:**
- Row 0, column 'result': expected '2' but got '"2"'

**Expected (Postgres):**

| result |
| --- |
| 2 |

**Actual (Legend):**

| result |
| --- |
| "2" |

---

<a id="fail-json_hash_arrow_path-Relation"></a>

### ❌ json_hash_arrow_path [Relation]

**SQL (Postgres):**
```sql
SELECT json_val #> '{a,b,c}' AS result FROM json_data WHERE id = 2
```

**SQL (Legend, rewritten):**
```sql
SELECT json_val #> '{a,b,c}' AS result FROM func('e2e::rel_json_data') WHERE id = 2
```

**SQL (Generated, executed against DB):**
```sql
select jsonb_extract_path(cast(jsonb_extract_path(cast(jsonb_extract_path(cast("json_data_0".json_val as jsonb), Text'a') as jsonb), Text'b') as jsonb), Text'c') as "result" from public.json_data as "json_data_0" where "json_data_0".id = 2
```

**Lambda (Pure expression):**
```json
|#>{e2e::TestDB.public.json_data}#->meta::pure::functions::relation::filter(
  x: (id:meta::pure::precisePrimitives::Int[1], json_val:meta::pure::metamodel::variant::Variant, jsonb_val:meta::pure::metamodel::variant::Variant, json_arr:meta::pure::metamodel::variant::Variant, jsonb_arr:meta::pure::metamodel::variant::Variant)[1]|$x.id == 2
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:meta::pure::precisePrimitives::Int[1], json_val:meta::pure::metamodel::variant::Variant, jsonb_val:meta::pure::metamodel::variant::Variant, json_arr:meta::pure::metamodel::variant::Variant, jsonb_arr:meta::pure::metamodel::variant::Variant)[1]|$x.json_val->meta::pure::functions::variant::navigation::get('a')->meta::pure::functions::variant::navigation::get('b')->meta::pure::functions::variant::navigation::get('c')
   ]
)
```

**Differences:**
- Row 0, column 'result': expected '"nested"' but got '"\"nested\""'

**Expected (Postgres):**

| result |
| --- |
| "nested" |

**Actual (Legend):**

| result |
| --- |
| "\"nested\"" |

---

<a id="fail-jsonb_hash_arrow_path-Relation"></a>

### ❌ jsonb_hash_arrow_path [Relation]

**SQL (Postgres):**
```sql
SELECT jsonb_val #> '{a,b,c}' AS result FROM json_data WHERE id = 2
```

**SQL (Legend, rewritten):**
```sql
SELECT jsonb_val #> '{a,b,c}' AS result FROM func('e2e::rel_json_data') WHERE id = 2
```

**SQL (Generated, executed against DB):**
```sql
select jsonb_extract_path(cast(jsonb_extract_path(cast(jsonb_extract_path(cast("json_data_0".jsonb_val as jsonb), Text'a') as jsonb), Text'b') as jsonb), Text'c') as "result" from public.json_data as "json_data_0" where "json_data_0".id = 2
```

**Lambda (Pure expression):**
```json
|#>{e2e::TestDB.public.json_data}#->meta::pure::functions::relation::filter(
  x: (id:meta::pure::precisePrimitives::Int[1], json_val:meta::pure::metamodel::variant::Variant, jsonb_val:meta::pure::metamodel::variant::Variant, json_arr:meta::pure::metamodel::variant::Variant, jsonb_arr:meta::pure::metamodel::variant::Variant)[1]|$x.id == 2
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:meta::pure::precisePrimitives::Int[1], json_val:meta::pure::metamodel::variant::Variant, jsonb_val:meta::pure::metamodel::variant::Variant, json_arr:meta::pure::metamodel::variant::Variant, jsonb_arr:meta::pure::metamodel::variant::Variant)[1]|$x.jsonb_val->meta::pure::functions::variant::navigation::get('a')->meta::pure::functions::variant::navigation::get('b')->meta::pure::functions::variant::navigation::get('c')
   ]
)
```

**Differences:**
- Row 0, column 'result': expected '"nested"' but got '"\"nested\""'

**Expected (Postgres):**

| result |
| --- |
| "nested" |

**Actual (Legend):**

| result |
| --- |
| "\"nested\"" |

---

<a id="fail-array_gt-TDS"></a>

### ❌ array_gt [TDS]

**SQL (Postgres):**
```sql
SELECT ARRAY[1,3] > ARRAY[1,2] AS result FROM persons WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT ARRAY[1, 3] > ARRAY[1, 2] AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select Boolean'false' as "result" from public.persons as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.name,
      'name'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.age,
      'age'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.salary,
      'salary'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.hireDate,
      'hire_date'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.active,
      'active'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.deptId,
      'dept_id'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 1
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|[
        1,
        3
      ] >
        [
        1,
        2
      ],
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected 'true' but got 'false'

**Expected (Postgres):**

| result |
| --- |
| true |

**Actual (Legend):**

| result |
| --- |
| false |

---

<a id="fail-anycompatible_concat_scalar_array-TDS"></a>

### ❌ anycompatible_concat_scalar_array [TDS]

**SQL (Postgres):**
```sql
SELECT 4 || ARRAY[1,2,3] AS result FROM persons WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT 4 || ARRAY[1, 2, 3] AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select Text'41' as "result" from public.persons as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.name,
      'name'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.age,
      'age'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.salary,
      'salary'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.hireDate,
      'hire_date'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.active,
      'active'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.deptId,
      'dept_id'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 1
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|meta::pure::functions::string::toString(4) + [
        1,
        2,
        3
      ]->meta::pure::functions::string::toString(),
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected '{4,1,2,3}' but got '41'

**Expected (Postgres):**

| result |
| --- |
| {4,1,2,3} |

**Actual (Legend):**

| result |
| --- |
| 41 |

---

<a id="fail-anycompatible_concat_array_scalar-TDS"></a>

### ❌ anycompatible_concat_array_scalar [TDS]

**SQL (Postgres):**
```sql
SELECT ARRAY[1,2,3] || 4 AS result FROM persons WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT ARRAY[1, 2, 3] || 4 AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select Text'14' as "result" from public.persons as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.name,
      'name'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.age,
      'age'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.salary,
      'salary'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.hireDate,
      'hire_date'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.active,
      'active'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.deptId,
      'dept_id'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 1
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|[
        1,
        2,
        3
      ]->meta::pure::functions::string::toString() + meta::pure::functions::string::toString(4),
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected '{1,2,3,4}' but got '14'

**Expected (Postgres):**

| result |
| --- |
| {1,2,3,4} |

**Actual (Legend):**

| result |
| --- |
| 14 |

---

<a id="fail-anycompatible_concat_array_array-TDS"></a>

### ❌ anycompatible_concat_array_array [TDS]

**SQL (Postgres):**
```sql
SELECT ARRAY[1,2] || ARRAY[3,4] AS result FROM persons WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT ARRAY[1, 2] || ARRAY[3, 4] AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select Text'13' as "result" from public.persons as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.name,
      'name'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.age,
      'age'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.salary,
      'salary'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.hireDate,
      'hire_date'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.active,
      'active'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.deptId,
      'dept_id'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 1
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|[
        1,
        2
      ]->meta::pure::functions::string::toString() + [
        3,
        4
      ]->meta::pure::functions::string::toString(),
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected '{1,2,3,4}' but got '13'

**Expected (Postgres):**

| result |
| --- |
| {1,2,3,4} |

**Actual (Legend):**

| result |
| --- |
| 13 |

---

<a id="fail-between__int__null-TDS"></a>

### ❌ between__int__null [TDS]

**SQL (Postgres):**
```sql
SELECT id, int_val BETWEEN 0 AND 100 AS result FROM numbers WHERE id = 5
```

**SQL (Legend, rewritten):**
```sql
SELECT id, int_val BETWEEN 0 AND 100 AS result FROM func('e2e::tds_numbers') WHERE id = 5
```

**SQL (Generated, executed against DB):**
```sql
select "root".id as "id", (("root".int_val is not null and "root".int_val >= 0) and ("root".int_val is not null and "root".int_val <= 100)) as "result" from public.numbers as "root" where "root".id = 5
```

**Lambda (Pure expression):**
```json
|e2e::NumberRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.intVal,
      'int_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.floatVal,
      'float_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.numericVal,
      'numeric_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.smallVal,
      'small_val'
    ),
    meta::pure::tds::col(
      x: e2e::NumberRow[1]|$x.bigVal,
      'big_val'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 5
)->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getInteger('id'),
      'id'
    ),
    meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getInteger('int_val')->meta::pure::functions::boolean::between(
        0,
        100
      ),
      'result'
    )
  ]
)
```

**Differences:**
- Row 0, column 'result': expected 'null' but got 'false'

**Expected (Postgres):**

| id | result |
| --- | --- |
| 5 | _NULL_ |

**Actual (Legend):**

| id | result |
| --- | --- |
| 5 | false |

---

<a id="fail-between__int__null-Relation"></a>

### ❌ between__int__null [Relation]

**SQL (Postgres):**
```sql
SELECT id, int_val BETWEEN 0 AND 100 AS result FROM numbers WHERE id = 5
```

**SQL (Legend, rewritten):**
```sql
SELECT id, int_val BETWEEN 0 AND 100 AS result FROM func('e2e::rel_numbers') WHERE id = 5
```

**SQL (Generated, executed against DB):**
```sql
select "root".id as "id", ((("root".int_val is not null and 0 is not null) and "root".int_val >= 0) and (("root".int_val is not null and 100 is not null) and "root".int_val <= 100)) as "result" from public.numbers as "root" where "root".id = 5
```

**Lambda (Pure expression):**
```json
|e2e::NumberRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::NumberRow[1]|$x.id,
     int_val: x: e2e::NumberRow[1]|$x.intVal,
     float_val: x: e2e::NumberRow[1]|$x.floatVal,
     numeric_val: x: e2e::NumberRow[1]|$x.numericVal,
     small_val: x: e2e::NumberRow[1]|$x.smallVal,
     big_val: x: e2e::NumberRow[1]|$x.bigVal
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.id == 5
)->meta::pure::functions::relation::project(
  ~[
     id: x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.id,
     result: x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.int_val->meta::pure::functions::boolean::between(
    0,
    100
  )
   ]
)
```

**Differences:**
- Row 0, column 'result': expected 'null' but got 'false'

**Expected (Postgres):**

| id | result |
| --- | --- |
| 5 | _NULL_ |

**Actual (Legend):**

| id | result |
| --- | --- |
| 5 | false |

---

<a id="fail-is_distinct_from__int__one_null-Relation"></a>

### ❌ is_distinct_from__int__one_null [Relation]

**SQL (Postgres):**
```sql
SELECT id, int_val IS DISTINCT FROM 42 AS result FROM numbers WHERE id = 5
```

**SQL (Legend, rewritten):**
```sql
SELECT id, int_val IS DISTINCT FROM 42 AS result FROM func('e2e::rel_numbers') WHERE id = 5
```

**SQL (Generated, executed against DB):**
```sql
select "root".id as "id", not (("root".int_val is null and 42 is null) or "root".int_val = 42) as "result" from public.numbers as "root" where "root".id = 5
```

**Lambda (Pure expression):**
```json
|e2e::NumberRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::NumberRow[1]|$x.id,
     int_val: x: e2e::NumberRow[1]|$x.intVal,
     float_val: x: e2e::NumberRow[1]|$x.floatVal,
     numeric_val: x: e2e::NumberRow[1]|$x.numericVal,
     small_val: x: e2e::NumberRow[1]|$x.smallVal,
     big_val: x: e2e::NumberRow[1]|$x.bigVal
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.id == 5
)->meta::pure::functions::relation::project(
  ~[
     id: x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|$x.id,
     result: x: (id:Integer[1], int_val:Integer, float_val:Float, numeric_val:Float, small_val:Integer, big_val:Integer)[1]|!(($x.int_val->meta::pure::functions::collection::isEmpty() &&
    meta::pure::functions::collection::isEmpty(42)) ||
    ($x.int_val == 42))
   ]
)
```

**Differences:**
- Row 0, column 'result': expected 'true' but got 'null'

**Expected (Postgres):**

| id | result |
| --- | --- |
| 5 | true |

**Actual (Legend):**

| id | result |
| --- | --- |
| 5 | _NULL_ |

---

<a id="fail-to_char_token__YYY-TDS"></a>

### ❌ to_char_token__YYY [TDS]

**SQL (Postgres):**
```sql
SELECT to_char(TIMESTAMP '2024-06-15 13:45:22', 'YYY') AS result FROM dates WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT to_char(TIMESTAMP '2024-06-15 13:45:22', 'YYY') AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select Text'2' as "result" from public.dates as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::DateRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::DateRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::DateRow[1]|$x.d,
      'd'
    ),
    meta::pure::tds::col(
      x: e2e::DateRow[1]|$x.ts,
      'ts'
    ),
    meta::pure::tds::col(
      x: e2e::DateRow[1]|$x.tsz,
      'tsz'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 1
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|meta::pure::functions::date::year(%2024-06-15T13:45:22+0000)->meta::pure::functions::string::toString()->meta::pure::functions::string::substring(
        2,
        3
      ),
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected '024' but got '2'

**Expected (Postgres):**

| result |
| --- |
| 024 |

**Actual (Legend):**

| result |
| --- |
| 2 |

---

<a id="fail-to_char_token__D-TDS"></a>

### ❌ to_char_token__D [TDS]

**SQL (Postgres):**
```sql
SELECT to_char(TIMESTAMP '2024-06-15 13:45:22', 'D') AS result FROM dates WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT to_char(TIMESTAMP '2024-06-15 13:45:22', 'D') AS result FROM func('e2e::tds_dates') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select Text'6' as "result" from public.dates as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::DateRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::DateRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::DateRow[1]|$x.d,
      'd'
    ),
    meta::pure::tds::col(
      x: e2e::DateRow[1]|$x.ts,
      'ts'
    ),
    meta::pure::tds::col(
      x: e2e::DateRow[1]|$x.tsz,
      'tsz'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 1
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|meta::pure::functions::date::dayOfWeekNumber(%2024-06-15T13:45:22+0000)->meta::pure::functions::string::toString(),
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected '7' but got '6'

**Expected (Postgres):**

| result |
| --- |
| 7 |

**Actual (Legend):**

| result |
| --- |
| 6 |

---

<a id="fail-to_char_token__D-Relation"></a>

### ❌ to_char_token__D [Relation]

**SQL (Postgres):**
```sql
SELECT to_char(TIMESTAMP '2024-06-15 13:45:22', 'D') AS result FROM dates WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT to_char(TIMESTAMP '2024-06-15 13:45:22', 'D') AS result FROM func('e2e::rel_dates') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select cast(date_part('dow', Timestamp'2024-06-15 13:45:22') as varchar) as "result" from public.dates as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::DateRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::DateRow[1]|$x.id,
     d: x: e2e::DateRow[1]|$x.d,
     ts: x: e2e::DateRow[1]|$x.ts,
     tsz: x: e2e::DateRow[1]|$x.tsz
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], d:StrictDate, ts:DateTime, tsz:DateTime)[1]|$x.id == 1
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], d:StrictDate, ts:DateTime, tsz:DateTime)[1]|meta::pure::functions::date::dayOfWeekNumber(%2024-06-15T13:45:22+0000)->meta::pure::functions::string::toString()
   ]
)
```

**Differences:**
- Row 0, column 'result': expected '7' but got '6'

**Expected (Postgres):**

| result |
| --- |
| 7 |

**Actual (Legend):**

| result |
| --- |
| 6 |

---

<a id="fail-subquery_quant_all_empty_null_value-Relation"></a>

### ❌ subquery_quant_all_empty_null_value [Relation]

**SQL (Postgres):**
```sql
SELECT p.name FROM persons p WHERE p.age > ALL (SELECT p2.age FROM persons p2 WHERE p2.id > 100) ORDER BY 1
```

**SQL (Legend, rewritten):**
```sql
SELECT p.name FROM func('e2e::rel_persons') p WHERE p.age > ALL(SELECT p2.age FROM func('e2e::rel_persons') p2 WHERE p2.id > 100) ORDER BY 1
```

**SQL (Generated, executed against DB):**
```sql
select "root".name as "name" from public.persons as "root" where (("root".age is not null and "root".age > all (select "persons_1".age as "age" from public.persons as "persons_1" where "persons_1".age is not null and "persons_1".id > 100)) and not exists(select 1 from public.persons as "persons_2" where "persons_2".id > 100 and "persons_2".age is null)) order by "name"
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::Person[1]|$x.id,
     name: x: e2e::Person[1]|$x.name,
     age: x: e2e::Person[1]|$x.age,
     salary: x: e2e::Person[1]|$x.salary,
     hire_date: x: e2e::Person[1]|$x.hireDate,
     active: x: e2e::Person[1]|$x.active,
     dept_id: x: e2e::Person[1]|$x.deptId
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|$x.age->meta::pure::functions::relation::greaterThanAll(
    e2e::Person.all()->meta::pure::functions::relation::project(
      ~[
         id: x: e2e::Person[1]|$x.id,
         name: x: e2e::Person[1]|$x.name,
         age: x: e2e::Person[1]|$x.age,
         salary: x: e2e::Person[1]|$x.salary,
         hire_date: x: e2e::Person[1]|$x.hireDate,
         active: x: e2e::Person[1]|$x.active,
         dept_id: x: e2e::Person[1]|$x.deptId
       ]
    )->meta::pure::functions::relation::filter(
      e: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|$e.id > 100
    )->meta::pure::functions::relation::select(
      ~[
         age
       ]
    )
  ) &&
    !e2e::Person.all()->meta::pure::functions::relation::project(
    ~[
       id: x: e2e::Person[1]|$x.id,
       name: x: e2e::Person[1]|$x.name,
       age: x: e2e::Person[1]|$x.age,
       salary: x: e2e::Person[1]|$x.salary,
       hire_date: x: e2e::Person[1]|$x.hireDate,
       active: x: e2e::Person[1]|$x.active,
       dept_id: x: e2e::Person[1]|$x.deptId
     ]
  )->meta::pure::functions::relation::filter(
    e: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|$e.id > 100
  )->meta::pure::functions::relation::select(
    ~[
       age
     ]
  )->meta::pure::functions::relation::exists(
    e: (age:Integer)[1]|$e.age->meta::pure::functions::collection::isEmpty()
  )
)->meta::pure::functions::relation::select(
  ~[
     name
   ]
)->meta::pure::functions::relation::sort(
  ~name->meta::pure::functions::relation::ascending()
)
```

**Differences:**
- Row count mismatch: expected 10 but got 9

**Expected (Postgres):**

| name |
| --- |
| Alice |
| Bob |
| Charlie |
| Diana |
| Eve |
| Frank |
| Grace |
| Hank |
| Ivy |
| Jack |

**Actual (Legend):**

| name |
| --- |
| Alice |
| Bob |
| Charlie |
| Diana |
| Eve |
| Frank |
| Hank |
| Ivy |
| Jack |

---

<a id="fail-null_equals_null-TDS"></a>

### ❌ null_equals_null [TDS]

**SQL (Postgres):**
```sql
SELECT (NULL = NULL) AS result FROM persons WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT (NULL = NULL) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select Boolean'true' as "result" from public.persons as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.name,
      'name'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.age,
      'age'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.salary,
      'salary'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.hireDate,
      'hire_date'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.active,
      'active'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.deptId,
      'dept_id'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 1
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|[] ==
        [],
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected 'null' but got 'true'

**Expected (Postgres):**

| result |
| --- |
| _NULL_ |

**Actual (Legend):**

| result |
| --- |
| true |

---

<a id="fail-null_not_equals-TDS"></a>

### ❌ null_not_equals [TDS]

**SQL (Postgres):**
```sql
SELECT (NULL <> 1) AS result FROM persons WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT (NULL <> 1) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select Boolean'true' as "result" from public.persons as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.name,
      'name'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.age,
      'age'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.salary,
      'salary'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.hireDate,
      'hire_date'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.active,
      'active'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.deptId,
      'dept_id'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 1
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|[] != 1,
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected 'null' but got 'true'

**Expected (Postgres):**

| result |
| --- |
| _NULL_ |

**Actual (Legend):**

| result |
| --- |
| true |

---

<a id="fail-null_concat-TDS"></a>

### ❌ null_concat [TDS]

**SQL (Postgres):**
```sql
SELECT name || ' age=' || CAST(age AS TEXT) AS result FROM persons ORDER BY 1
```

**SQL (Legend, rewritten):**
```sql
SELECT name || ' age=' || CAST(age AS TEXT) AS result FROM func('e2e::tds_persons') ORDER BY 1
```

**SQL (Generated, executed against DB):**
```sql
select concat("root".name,'',Text' age=','',cast("root".age as varchar)) as "result" from public.persons as "root" order by "result"
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.name,
      'name'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.age,
      'age'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.salary,
      'salary'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.hireDate,
      'hire_date'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.active,
      'active'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.deptId,
      'dept_id'
    )
  ]
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getString('name') + ' age=' + $row.getInteger('age')->meta::pure::functions::string::toString(),
      'result'
    )
)->meta::pure::tds::sort(
  meta::pure::tds::asc('result')
)
```

**Differences:**
- Row 6, column 'result': expected 'Hank age=50' but got 'Grace age='
- Row 7, column 'result': expected 'Ivy age=22' but got 'Hank age=50'
- Row 8, column 'result': expected 'Jack age=38' but got 'Ivy age=22'
- Row 9, column 'result': expected 'null' but got 'Jack age=38'

**Expected (Postgres):**

| result |
| --- |
| Alice age=30 |
| Bob age=25 |
| Charlie age=35 |
| Diana age=28 |
| Eve age=45 |
| Frank age=32 |
| Hank age=50 |
| Ivy age=22 |
| Jack age=38 |
| _NULL_ |

**Actual (Legend):**

| result |
| --- |
| Alice age=30 |
| Bob age=25 |
| Charlie age=35 |
| Diana age=28 |
| Eve age=45 |
| Frank age=32 |
| Grace age= |
| Hank age=50 |
| Ivy age=22 |
| Jack age=38 |

---

<a id="fail-null_concat-Relation"></a>

### ❌ null_concat [Relation]

**SQL (Postgres):**
```sql
SELECT name || ' age=' || CAST(age AS TEXT) AS result FROM persons ORDER BY 1
```

**SQL (Legend, rewritten):**
```sql
SELECT name || ' age=' || CAST(age AS TEXT) AS result FROM func('e2e::rel_persons') ORDER BY 1
```

**SQL (Generated, executed against DB):**
```sql
select case when "root".name is null then null else concat("root".name, Text' age=', cast("root".age as varchar)) end as "result" from public.persons as "root" order by "result"
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::Person[1]|$x.id,
     name: x: e2e::Person[1]|$x.name,
     age: x: e2e::Person[1]|$x.age,
     salary: x: e2e::Person[1]|$x.salary,
     hire_date: x: e2e::Person[1]|$x.hireDate,
     active: x: e2e::Person[1]|$x.active,
     dept_id: x: e2e::Person[1]|$x.deptId
   ]
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|if(
    $x.name->meta::pure::functions::collection::isEmpty(),
    |[],
    |$x.name->meta::pure::functions::multiplicity::toOne() + ' age=' + $x.age->meta::pure::functions::multiplicity::toOne()->meta::pure::functions::string::toString()
  )
   ]
)->meta::pure::functions::relation::sort(
  ~result->meta::pure::functions::relation::ascending()
)
```

**Differences:**
- Row 6, column 'result': expected 'Hank age=50' but got 'Grace age='
- Row 7, column 'result': expected 'Ivy age=22' but got 'Hank age=50'
- Row 8, column 'result': expected 'Jack age=38' but got 'Ivy age=22'
- Row 9, column 'result': expected 'null' but got 'Jack age=38'

**Expected (Postgres):**

| result |
| --- |
| Alice age=30 |
| Bob age=25 |
| Charlie age=35 |
| Diana age=28 |
| Eve age=45 |
| Frank age=32 |
| Hank age=50 |
| Ivy age=22 |
| Jack age=38 |
| _NULL_ |

**Actual (Legend):**

| result |
| --- |
| Alice age=30 |
| Bob age=25 |
| Charlie age=35 |
| Diana age=28 |
| Eve age=45 |
| Frank age=32 |
| Grace age= |
| Hank age=50 |
| Ivy age=22 |
| Jack age=38 |

---

<a id="fail-where_not_between-TDS"></a>

### ❌ where_not_between [TDS]

**SQL (Postgres):**
```sql
SELECT name, salary FROM persons WHERE salary NOT BETWEEN 40000 AND 60000 ORDER BY 1
```

**SQL (Legend, rewritten):**
```sql
SELECT name, salary FROM func('e2e::tds_persons') WHERE salary NOT BETWEEN 40000 AND 60000 ORDER BY 1
```

**SQL (Generated, executed against DB):**
```sql
select "root".name as "name", "root".salary as "salary" from public.persons as "root" where not (("root".salary is not null and "root".salary >= 40000) and ("root".salary is not null and "root".salary <= 60000)) order by "name"
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.name,
      'name'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.age,
      'age'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.salary,
      'salary'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.hireDate,
      'hire_date'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.active,
      'active'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.deptId,
      'dept_id'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|!$row.getFloat('salary')->meta::pure::functions::boolean::between(
    40000,
    60000
  )
)->meta::pure::tds::restrict(
  [
    'name',
    'salary'
  ]
)->meta::pure::tds::sort(
  meta::pure::tds::asc('name')
)
```

**Differences:**
- Row count mismatch: expected 6 but got 7

**Expected (Postgres):**

| name | salary |
| --- | --- |
| Bob | 60000.50 |
| Charlie | 75000.75 |
| Diana | 80000.25 |
| Eve | 95000.00 |
| Grace | 70000.00 |
| Jack | 120000.00 |

**Actual (Legend):**

| name | salary |
| --- | --- |
| Bob | 60000.5 |
| Charlie | 75000.75 |
| Diana | 80000.25 |
| Eve | 95000.0 |
| Grace | 70000.0 |
| Hank | _NULL_ |
| Jack | 120000.0 |

---

<a id="fail-where_not_between-Relation"></a>

### ❌ where_not_between [Relation]

**SQL (Postgres):**
```sql
SELECT name, salary FROM persons WHERE salary NOT BETWEEN 40000 AND 60000 ORDER BY 1
```

**SQL (Legend, rewritten):**
```sql
SELECT name, salary FROM func('e2e::rel_persons') WHERE salary NOT BETWEEN 40000 AND 60000 ORDER BY 1
```

**SQL (Generated, executed against DB):**
```sql
select "root".name as "name", "root".salary as "salary" from public.persons as "root" where not (("root".salary is not null and "root".salary >= 40000) and ("root".salary is not null and "root".salary <= 60000)) order by "name"
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::Person[1]|$x.id,
     name: x: e2e::Person[1]|$x.name,
     age: x: e2e::Person[1]|$x.age,
     salary: x: e2e::Person[1]|$x.salary,
     hire_date: x: e2e::Person[1]|$x.hireDate,
     active: x: e2e::Person[1]|$x.active,
     dept_id: x: e2e::Person[1]|$x.deptId
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|!$x.salary->meta::pure::functions::boolean::between(
    40000,
    60000
  )
)->meta::pure::functions::relation::select(
  ~[
     name,
     salary
   ]
)->meta::pure::functions::relation::sort(
  ~name->meta::pure::functions::relation::ascending()
)
```

**Differences:**
- Row count mismatch: expected 6 but got 7

**Expected (Postgres):**

| name | salary |
| --- | --- |
| Bob | 60000.50 |
| Charlie | 75000.75 |
| Diana | 80000.25 |
| Eve | 95000.00 |
| Grace | 70000.00 |
| Jack | 120000.00 |

**Actual (Legend):**

| name | salary |
| --- | --- |
| Bob | 60000.5 |
| Charlie | 75000.75 |
| Diana | 80000.25 |
| Eve | 95000.0 |
| Grace | 70000.0 |
| Hank | _NULL_ |
| Jack | 120000.0 |

---

<a id="fail-where_not_in_list-TDS"></a>

### ❌ where_not_in_list [TDS]

**SQL (Postgres):**
```sql
SELECT name, dept_id FROM persons WHERE dept_id NOT IN (1, 2) ORDER BY 1
```

**SQL (Legend, rewritten):**
```sql
SELECT name, dept_id FROM func('e2e::tds_persons') WHERE dept_id NOT IN (1, 2) ORDER BY 1
```

**SQL (Generated, executed against DB):**
```sql
select "root".name as "name", "root".dept_id as "dept_id" from public.persons as "root" where ("root".dept_id not in (1, 2) OR "root".dept_id is null) order by "name"
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.name,
      'name'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.age,
      'age'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.salary,
      'salary'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.hireDate,
      'hire_date'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.active,
      'active'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.deptId,
      'dept_id'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|!$row.getInteger('dept_id')->meta::pure::functions::collection::in(
    [
      1,
      2
    ]
  )
)->meta::pure::tds::restrict(
  [
    'name',
    'dept_id'
  ]
)->meta::pure::tds::sort(
  meta::pure::tds::asc('name')
)
```

**Differences:**
- Row count mismatch: expected 3 but got 4

**Expected (Postgres):**

| name | dept_id |
| --- | --- |
| Eve | 3 |
| Frank | 3 |
| Jack | 3 |

**Actual (Legend):**

| name | dept_id |
| --- | --- |
| Eve | 3 |
| Frank | 3 |
| Grace | _NULL_ |
| Jack | 3 |

---

<a id="fail-where_not_in_list-Relation"></a>

### ❌ where_not_in_list [Relation]

**SQL (Postgres):**
```sql
SELECT name, dept_id FROM persons WHERE dept_id NOT IN (1, 2) ORDER BY 1
```

**SQL (Legend, rewritten):**
```sql
SELECT name, dept_id FROM func('e2e::rel_persons') WHERE dept_id NOT IN (1, 2) ORDER BY 1
```

**SQL (Generated, executed against DB):**
```sql
select "root".name as "name", "root".dept_id as "dept_id" from public.persons as "root" where ("root".dept_id not in (1, 2) OR "root".dept_id is null) order by "name"
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::Person[1]|$x.id,
     name: x: e2e::Person[1]|$x.name,
     age: x: e2e::Person[1]|$x.age,
     salary: x: e2e::Person[1]|$x.salary,
     hire_date: x: e2e::Person[1]|$x.hireDate,
     active: x: e2e::Person[1]|$x.active,
     dept_id: x: e2e::Person[1]|$x.deptId
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|!$x.dept_id->meta::pure::functions::multiplicity::toOne()->meta::pure::functions::collection::in(
    [
      1,
      2
    ]
  )
)->meta::pure::functions::relation::select(
  ~[
     name,
     dept_id
   ]
)->meta::pure::functions::relation::sort(
  ~name->meta::pure::functions::relation::ascending()
)
```

**Differences:**
- Row count mismatch: expected 3 but got 4

**Expected (Postgres):**

| name | dept_id |
| --- | --- |
| Eve | 3 |
| Frank | 3 |
| Jack | 3 |

**Actual (Legend):**

| name | dept_id |
| --- | --- |
| Eve | 3 |
| Frank | 3 |
| Grace | _NULL_ |
| Jack | 3 |

---

<a id="fail-where_not_compound-Relation"></a>

### ❌ where_not_compound [Relation]

**SQL (Postgres):**
```sql
SELECT name FROM persons WHERE NOT (dept_id = 1 AND salary > 50000) ORDER BY 1
```

**SQL (Legend, rewritten):**
```sql
SELECT name FROM func('e2e::rel_persons') WHERE NOT (dept_id = 1 AND salary > 50000) ORDER BY 1
```

**SQL (Generated, executed against DB):**
```sql
select "root".name as "name" from public.persons as "root" where not ("root".dept_id = 1 and ("root".salary is not null and "root".salary > 50000)) order by "name"
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::Person[1]|$x.id,
     name: x: e2e::Person[1]|$x.name,
     age: x: e2e::Person[1]|$x.age,
     salary: x: e2e::Person[1]|$x.salary,
     hire_date: x: e2e::Person[1]|$x.hireDate,
     active: x: e2e::Person[1]|$x.active,
     dept_id: x: e2e::Person[1]|$x.deptId
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|!(($x.dept_id == 1) &&
    ($x.salary > 50000))
)->meta::pure::functions::relation::select(
  ~[
     name
   ]
)->meta::pure::functions::relation::sort(
  ~name->meta::pure::functions::relation::ascending()
)
```

**Differences:**
- Row count mismatch: expected 7 but got 8

**Expected (Postgres):**

| name |
| --- |
| Alice |
| Charlie |
| Diana |
| Eve |
| Frank |
| Ivy |
| Jack |

**Actual (Legend):**

| name |
| --- |
| Alice |
| Charlie |
| Diana |
| Eve |
| Frank |
| Hank |
| Ivy |
| Jack |

---

<a id="fail-bool_null_and_false-TDS"></a>

### ❌ bool_null_and_false [TDS]

**SQL (Postgres):**
```sql
SELECT (NULL AND FALSE) AS result FROM persons WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT (NULL AND FALSE) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select null as "result" from public.persons as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.name,
      'name'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.age,
      'age'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.salary,
      'salary'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.hireDate,
      'hire_date'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.active,
      'active'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.deptId,
      'dept_id'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 1
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|[]->meta::pure::functions::lang::cast(@Boolean),
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected 'false' but got 'null'

**Expected (Postgres):**

| result |
| --- |
| false |

**Actual (Legend):**

| result |
| --- |
| _NULL_ |

---

<a id="fail-bool_null_and_false-Relation"></a>

### ❌ bool_null_and_false [Relation]

**SQL (Postgres):**
```sql
SELECT (NULL AND FALSE) AS result FROM persons WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT (NULL AND FALSE) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select null as "result" from public.persons as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::Person[1]|$x.id,
     name: x: e2e::Person[1]|$x.name,
     age: x: e2e::Person[1]|$x.age,
     salary: x: e2e::Person[1]|$x.salary,
     hire_date: x: e2e::Person[1]|$x.hireDate,
     active: x: e2e::Person[1]|$x.active,
     dept_id: x: e2e::Person[1]|$x.deptId
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|$x.id == 1
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|[]->meta::pure::functions::lang::cast(@Boolean)
   ]
)
```

**Differences:**
- Row 0, column 'result': expected 'false' but got 'null'

**Expected (Postgres):**

| result |
| --- |
| false |

**Actual (Legend):**

| result |
| --- |
| _NULL_ |

---

<a id="fail-bool_null_or_true-TDS"></a>

### ❌ bool_null_or_true [TDS]

**SQL (Postgres):**
```sql
SELECT (NULL OR TRUE) AS result FROM persons WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT (NULL OR TRUE) AS result FROM func('e2e::tds_persons') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select null as "result" from public.persons as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.name,
      'name'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.age,
      'age'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.salary,
      'salary'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.hireDate,
      'hire_date'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.active,
      'active'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.deptId,
      'dept_id'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id') == 1
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|[]->meta::pure::functions::lang::cast(@Boolean),
      'result'
    )
)
```

**Differences:**
- Row 0, column 'result': expected 'true' but got 'null'

**Expected (Postgres):**

| result |
| --- |
| true |

**Actual (Legend):**

| result |
| --- |
| _NULL_ |

---

<a id="fail-bool_null_or_true-Relation"></a>

### ❌ bool_null_or_true [Relation]

**SQL (Postgres):**
```sql
SELECT (NULL OR TRUE) AS result FROM persons WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT (NULL OR TRUE) AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select null as "result" from public.persons as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::Person[1]|$x.id,
     name: x: e2e::Person[1]|$x.name,
     age: x: e2e::Person[1]|$x.age,
     salary: x: e2e::Person[1]|$x.salary,
     hire_date: x: e2e::Person[1]|$x.hireDate,
     active: x: e2e::Person[1]|$x.active,
     dept_id: x: e2e::Person[1]|$x.deptId
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|$x.id == 1
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|[]->meta::pure::functions::lang::cast(@Boolean)
   ]
)
```

**Differences:**
- Row 0, column 'result': expected 'true' but got 'null'

**Expected (Postgres):**

| result |
| --- |
| true |

**Actual (Legend):**

| result |
| --- |
| _NULL_ |

---

<a id="fail-star_multiple_tables-TDS"></a>

### ❌ star_multiple_tables [TDS]

**SQL (Postgres):**
```sql
SELECT p.*, d.* FROM persons p JOIN departments d ON p.dept_id = d.id WHERE p.id <= 3 ORDER BY p.id
```

**SQL (Legend, rewritten):**
```sql
SELECT p.*, d.* FROM func('e2e::tds_persons') p JOIN func('e2e::tds_departments') d ON p.dept_id = d.id WHERE p.id <= 3 ORDER BY p.id
```

**SQL (Generated, executed against DB):**
```sql
select "persons_0"."id_p" as "id", "persons_0"."name_p" as "name", "persons_0"."age_p" as "age", "persons_0"."salary_p" as "salary", "persons_0"."hire_date_p" as "hire_date", "persons_0"."active_p" as "active", "persons_0"."dept_id_p" as "dept_id", "persons_0"."budget_d" as "budget", "persons_0"."created_at_d" as "created_at" from (select "persons_1"."id_p" as "id_p", "persons_1"."name_p" as "name_p", "persons_1"."age_p" as "age_p", "persons_1"."salary_p" as "salary_p", "persons_1"."hire_date_p" as "hire_date_p", "persons_1"."active_p" as "active_p", "persons_1"."dept_id_p" as "dept_id_p", "persons_1"."budget_d" as "budget_d", "persons_1"."created_at_d" as "created_at_d" from (select * from (select "persons_3"."id" as "id_p", "persons_3"."name" as "name_p", "persons_3"."age" as "age_p", "persons_3"."salary" as "salary_p", "persons_3"."hire_date" as "hire_date_p", "persons_3"."active" as "active_p", "persons_3"."dept_id" as "dept_id_p" from (select "root".id as "id", "root".name as "name", "root".age as "age", "root".salary as "salary", "root".hire_date as "hire_date", "root".active as "active", "root".dept_id as "dept_id" from public.persons as "root") as "persons_3") as "persons_2" inner join (select "departments_1"."id" as "id_d", "departments_1"."name" as "name_d", "departments_1"."budget" as "budget_d", "departments_1"."created_at" as "created_at_d" from (select "root".id as "id", "root".name as "name", "root".budget as "budget", "root".created_at as "created_at" from public.departments as "root") as "departments_1") as "departments_0" on ("persons_2"."dept_id_p" = "departments_0"."id_d")) as "persons_1" where "persons_1"."id_p" <= 3 order by "id_p") as "persons_0"
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.name,
      'name'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.age,
      'age'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.salary,
      'salary'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.hireDate,
      'hire_date'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.active,
      'active'
    ),
    meta::pure::tds::col(
      x: e2e::Person[1]|$x.deptId,
      'dept_id'
    )
  ]
)->meta::pure::tds::renameColumns(
  [
    'id'->meta::pure::functions::collection::pair('id_p'),
    'name'->meta::pure::functions::collection::pair('name_p'),
    'age'->meta::pure::functions::collection::pair('age_p'),
    'salary'->meta::pure::functions::collection::pair('salary_p'),
    'hire_date'->meta::pure::functions::collection::pair('hire_date_p'),
    'active'->meta::pure::functions::collection::pair('active_p'),
    'dept_id'->meta::pure::functions::collection::pair('dept_id_p')
  ]
)->meta::pure::tds::join(
  e2e::Department.all()->meta::pure::tds::project(
    [
      meta::pure::tds::col(
        x: e2e::Department[1]|$x.id,
        'id'
      ),
      meta::pure::tds::col(
        x: e2e::Department[1]|$x.name,
        'name'
      ),
      meta::pure::tds::col(
        x: e2e::Department[1]|$x.budget,
        'budget'
      ),
      meta::pure::tds::col(
        x: e2e::Department[1]|$x.createdAt,
        'created_at'
      )
    ]
  )->meta::pure::tds::renameColumns(
    [
      'id'->meta::pure::functions::collection::pair('id_d'),
      'name'->meta::pure::functions::collection::pair('name_d'),
      'budget'->meta::pure::functions::collection::pair('budget_d'),
      'created_at'->meta::pure::functions::collection::pair('created_at_d')
    ]
  ),
  meta::relational::metamodel::join::JoinType.INNER,
  {row1: meta::pure::tds::TDSRow[1], row2: meta::pure::tds::TDSRow[1]|$row1.getInteger('dept_id_p') ==
    $row2.getInteger('id_d')  }
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getInteger('id_p') <= 3
)->meta::pure::tds::sort(
  meta::pure::tds::asc('id_p')
)->meta::pure::tds::restrict(
  [
    'id_p',
    'name_p',
    'age_p',
    'salary_p',
    'hire_date_p',
    'active_p',
    'dept_id_p',
    'budget_d',
    'created_at_d'
  ]
)->meta::pure::tds::renameColumns(
  [
    'id_p'->meta::pure::functions::collection::pair('id'),
    'name_p'->meta::pure::functions::collection::pair('name'),
    'age_p'->meta::pure::functions::collection::pair('age'),
    'salary_p'->meta::pure::functions::collection::pair('salary'),
    'hire_date_p'->meta::pure::functions::collection::pair('hire_date'),
    'active_p'->meta::pure::functions::collection::pair('active'),
    'dept_id_p'->meta::pure::functions::collection::pair('dept_id'),
    'budget_d'->meta::pure::functions::collection::pair('budget'),
    'created_at_d'->meta::pure::functions::collection::pair('created_at')
  ]
)
```

**Differences:**
- Column count mismatch: expected 11 but got 9

**Expected (Postgres):**

| id | name | age | salary | hire_date | active | dept_id | id | name | budget | created_at |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Alice | 30 | 50000.00 | 2020-01-15 | true | 1 | 1 | Engineering | 1000000.00 | 2015-01-01 09:00:00.0 |
| 2 | Bob | 25 | 60000.50 | 2021-03-20 | true | 1 | 1 | Engineering | 1000000.00 | 2015-01-01 09:00:00.0 |
| 3 | Charlie | 35 | 75000.75 | 2019-06-10 | false | 2 | 2 | Marketing | 500000.00 | 2016-06-15 10:30:00.0 |

**Actual (Legend):**

| id | name | age | salary | hire_date | active | dept_id | budget | created_at |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Alice | 30 | 50000.0 | 2020-01-15 | true | 1 | 1000000.0 | 2015-01-01 09:00:00.0 |
| 2 | Bob | 25 | 60000.5 | 2021-03-20 | true | 1 | 1000000.0 | 2015-01-01 09:00:00.0 |
| 3 | Charlie | 35 | 75000.75 | 2019-06-10 | false | 2 | 500000.0 | 2016-06-15 10:30:00.0 |

---

<a id="fail-star_multiple_tables-Relation"></a>

### ❌ star_multiple_tables [Relation]

**SQL (Postgres):**
```sql
SELECT p.*, d.* FROM persons p JOIN departments d ON p.dept_id = d.id WHERE p.id <= 3 ORDER BY p.id
```

**SQL (Legend, rewritten):**
```sql
SELECT p.*, d.* FROM func('e2e::rel_persons') p JOIN func('e2e::rel_departments') d ON p.dept_id = d.id WHERE p.id <= 3 ORDER BY p.id
```

**SQL (Generated, executed against DB):**
```sql
select "persons_0"."id_p" as "id", "persons_0"."name_p" as "name", "persons_0"."age_p" as "age", "persons_0"."salary_p" as "salary", "persons_0"."hire_date_p" as "hire_date", "persons_0"."active_p" as "active", "persons_0"."dept_id_p" as "dept_id", "persons_0"."budget_d" as "budget", "persons_0"."created_at_d" as "created_at" from (select "persons_1"."id_p" as "id_p", "persons_1"."name_p" as "name_p", "persons_1"."age_p" as "age_p", "persons_1"."salary_p" as "salary_p", "persons_1"."hire_date_p" as "hire_date_p", "persons_1"."active_p" as "active_p", "persons_1"."dept_id_p" as "dept_id_p", "persons_1"."budget_d" as "budget_d", "persons_1"."created_at_d" as "created_at_d" from (select * from (select "persons_3"."id" as "id_p", "persons_3"."name" as "name_p", "persons_3"."age" as "age_p", "persons_3"."salary" as "salary_p", "persons_3"."hire_date" as "hire_date_p", "persons_3"."active" as "active_p", "persons_3"."dept_id" as "dept_id_p" from (select "root".id as "id", "root".name as "name", "root".age as "age", "root".salary as "salary", "root".hire_date as "hire_date", "root".active as "active", "root".dept_id as "dept_id" from public.persons as "root") as "persons_3") as "persons_2" inner join (select "departments_1"."id" as "id_d", "departments_1"."name" as "name_d", "departments_1"."budget" as "budget_d", "departments_1"."created_at" as "created_at_d" from (select "root".id as "id", "root".name as "name", "root".budget as "budget", "root".created_at as "created_at" from public.departments as "root") as "departments_1") as "departments_0" on ("persons_2"."dept_id_p" = "departments_0"."id_d")) as "persons_1" where "persons_1"."id_p" <= 3 order by "id_p") as "persons_0"
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::Person[1]|$x.id,
     name: x: e2e::Person[1]|$x.name,
     age: x: e2e::Person[1]|$x.age,
     salary: x: e2e::Person[1]|$x.salary,
     hire_date: x: e2e::Person[1]|$x.hireDate,
     active: x: e2e::Person[1]|$x.active,
     dept_id: x: e2e::Person[1]|$x.deptId
   ]
)->meta::pure::functions::relation::rename(
  ~id,
  ~id_p
)->meta::pure::functions::relation::rename(
  ~name,
  ~name_p
)->meta::pure::functions::relation::rename(
  ~age,
  ~age_p
)->meta::pure::functions::relation::rename(
  ~salary,
  ~salary_p
)->meta::pure::functions::relation::rename(
  ~hire_date,
  ~hire_date_p
)->meta::pure::functions::relation::rename(
  ~active,
  ~active_p
)->meta::pure::functions::relation::rename(
  ~dept_id,
  ~dept_id_p
)->meta::pure::functions::relation::join(
  e2e::Department.all()->meta::pure::functions::relation::project(
    ~[
       id: x: e2e::Department[1]|$x.id,
       name: x: e2e::Department[1]|$x.name,
       budget: x: e2e::Department[1]|$x.budget,
       created_at: x: e2e::Department[1]|$x.createdAt
     ]
  )->meta::pure::functions::relation::rename(
    ~id,
    ~id_d
  )->meta::pure::functions::relation::rename(
    ~name,
    ~name_d
  )->meta::pure::functions::relation::rename(
    ~budget,
    ~budget_d
  )->meta::pure::functions::relation::rename(
    ~created_at,
    ~created_at_d
  ),
  meta::pure::functions::relation::JoinKind.INNER,
  {row1: (id_p:Integer[1], name_p:String, age_p:Integer, salary_p:Float, hire_date_p:StrictDate, active_p:Boolean, dept_id_p:Integer)[1], row2: (id_d:Integer[1], name_d:String, budget_d:Float, created_at_d:DateTime)[1]|$row1.dept_id_p ==
    $row2.id_d  }
)->meta::pure::functions::relation::filter(
  x: (id_p:Integer[1], name_p:String, age_p:Integer, salary_p:Float, hire_date_p:StrictDate, active_p:Boolean, dept_id_p:Integer, id_d:Integer[1], name_d:String, budget_d:Float, created_at_d:DateTime)[1]|$x.id_p <= 3
)->meta::pure::functions::relation::sort(
  ~id_p->meta::pure::functions::relation::ascending()
)->meta::pure::functions::relation::select(
  ~[
     id_p,
     name_p,
     age_p,
     salary_p,
     hire_date_p,
     active_p,
     dept_id_p,
     budget_d,
     created_at_d
   ]
)->meta::pure::functions::relation::rename(
  ~id_p,
  ~id
)->meta::pure::functions::relation::rename(
  ~name_p,
  ~name
)->meta::pure::functions::relation::rename(
  ~age_p,
  ~age
)->meta::pure::functions::relation::rename(
  ~salary_p,
  ~salary
)->meta::pure::functions::relation::rename(
  ~hire_date_p,
  ~hire_date
)->meta::pure::functions::relation::rename(
  ~active_p,
  ~active
)->meta::pure::functions::relation::rename(
  ~dept_id_p,
  ~dept_id
)->meta::pure::functions::relation::rename(
  ~budget_d,
  ~budget
)->meta::pure::functions::relation::rename(
  ~created_at_d,
  ~created_at
)
```

**Differences:**
- Column count mismatch: expected 11 but got 9

**Expected (Postgres):**

| id | name | age | salary | hire_date | active | dept_id | id | name | budget | created_at |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Alice | 30 | 50000.00 | 2020-01-15 | true | 1 | 1 | Engineering | 1000000.00 | 2015-01-01 09:00:00.0 |
| 2 | Bob | 25 | 60000.50 | 2021-03-20 | true | 1 | 1 | Engineering | 1000000.00 | 2015-01-01 09:00:00.0 |
| 3 | Charlie | 35 | 75000.75 | 2019-06-10 | false | 2 | 2 | Marketing | 500000.00 | 2016-06-15 10:30:00.0 |

**Actual (Legend):**

| id | name | age | salary | hire_date | active | dept_id | budget | created_at |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Alice | 30 | 50000.0 | 2020-01-15 | true | 1 | 1000000.0 | 2015-01-01 09:00:00.0 |
| 2 | Bob | 25 | 60000.5 | 2021-03-20 | true | 1 | 1000000.0 | 2015-01-01 09:00:00.0 |
| 3 | Charlie | 35 | 75000.75 | 2019-06-10 | false | 2 | 500000.0 | 2016-06-15 10:30:00.0 |

---

<a id="fail-schema_information_tables-TDS"></a>

### ❌ schema_information_tables [TDS]

**SQL (Postgres):**
```sql
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY 1
```

**Differences:**
- Row count mismatch: expected 8 but got 0

**Expected (Postgres):**

| table_name |
| --- |
| dates |
| departments |
| empty_table |
| json_data |
| numbers |
| orders |
| persons |
| strings |

**Actual (Legend):**

| table_name |
| --- |

---

<a id="fail-schema_information_tables-Relation"></a>

### ❌ schema_information_tables [Relation]

**SQL (Postgres):**
```sql
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY 1
```

**Differences:**
- Row count mismatch: expected 8 but got 0

**Expected (Postgres):**

| table_name |
| --- |
| dates |
| departments |
| empty_table |
| json_data |
| numbers |
| orders |
| persons |
| strings |

**Actual (Legend):**

| table_name |
| --- |

---

<a id="fail-schema_information_columns-TDS"></a>

### ❌ schema_information_columns [TDS]

**SQL (Postgres):**
```sql
SELECT column_name FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'persons' ORDER BY 1
```

**Differences:**
- Row count mismatch: expected 7 but got 0

**Expected (Postgres):**

| column_name |
| --- |
| active |
| age |
| dept_id |
| hire_date |
| id |
| name |
| salary |

**Actual (Legend):**

| column_name |
| --- |

---

<a id="fail-schema_information_columns-Relation"></a>

### ❌ schema_information_columns [Relation]

**SQL (Postgres):**
```sql
SELECT column_name FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'persons' ORDER BY 1
```

**Differences:**
- Row count mismatch: expected 7 but got 0

**Expected (Postgres):**

| column_name |
| --- |
| active |
| age |
| dept_id |
| hire_date |
| id |
| name |
| salary |

**Actual (Legend):**

| column_name |
| --- |

---

<a id="fail-json_extract_array_index-Relation"></a>

### ❌ json_extract_array_index [Relation]

**SQL (Postgres):**
```sql
SELECT '[10,20,30]'::jsonb -> 1 AS result FROM persons WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT '[10,20,30]'::jsonb -> 1 AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select (cast(cast(Text'[10,20,30]' as JSONB) as jsonb)->1) as "result" from public.persons as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::Person[1]|$x.id,
     name: x: e2e::Person[1]|$x.name,
     age: x: e2e::Person[1]|$x.age,
     salary: x: e2e::Person[1]|$x.salary,
     hire_date: x: e2e::Person[1]|$x.hireDate,
     active: x: e2e::Person[1]|$x.active,
     dept_id: x: e2e::Person[1]|$x.deptId
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|$x.id == 1
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|meta::pure::functions::variant::convert::fromJson('[10,20,30]')->meta::pure::functions::variant::navigation::get(1)
   ]
)
```

**Differences:**
- Row 0, column 'result': expected '20' but got '"20"'

**Expected (Postgres):**

| result |
| --- |
| 20 |

**Actual (Legend):**

| result |
| --- |
| "20" |

---

<a id="fail-json_extract_array_negative_index-Relation"></a>

### ❌ json_extract_array_negative_index [Relation]

**SQL (Postgres):**
```sql
SELECT '[10,20,30]'::jsonb -> -1 AS result FROM persons WHERE id = 1
```

**SQL (Legend, rewritten):**
```sql
SELECT '[10,20,30]'::jsonb -> -1 AS result FROM func('e2e::rel_persons') WHERE id = 1
```

**SQL (Generated, executed against DB):**
```sql
select (cast(cast(Text'[10,20,30]' as JSONB) as jsonb)->-1) as "result" from public.persons as "root" where "root".id = 1
```

**Lambda (Pure expression):**
```json
|e2e::Person.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::Person[1]|$x.id,
     name: x: e2e::Person[1]|$x.name,
     age: x: e2e::Person[1]|$x.age,
     salary: x: e2e::Person[1]|$x.salary,
     hire_date: x: e2e::Person[1]|$x.hireDate,
     active: x: e2e::Person[1]|$x.active,
     dept_id: x: e2e::Person[1]|$x.deptId
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|$x.id == 1
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], name:String, age:Integer, salary:Float, hire_date:StrictDate, active:Boolean, dept_id:Integer)[1]|meta::pure::functions::variant::convert::fromJson('[10,20,30]')->meta::pure::functions::variant::navigation::get(
    -1
  )
   ]
)
```

**Differences:**
- Row 0, column 'result': expected '30' but got '"30"'

**Expected (Postgres):**

| result |
| --- |
| 30 |

**Actual (Legend):**

| result |
| --- |
| "30" |

---

<a id="fail-interval_compound_literal-TDS"></a>

### ❌ interval_compound_literal [TDS]

**SQL (Postgres):**
```sql
SELECT d + INTERVAL '1 year 2 months 3 days' AS result FROM dates WHERE d IS NOT NULL ORDER BY 1
```

**SQL (Legend, rewritten):**
```sql
SELECT d + INTERVAL '1 year 2 months 3 days' AS result FROM func('e2e::tds_dates') WHERE d IS NOT NULL ORDER BY 1
```

**SQL (Generated, executed against DB):**
```sql
select ((("root".d + (INTERVAL '1 YEARS' * 1)) + (INTERVAL '1 MONTHS' * 2)) + (INTERVAL '1 DAYS' * 3)) as "result" from public.dates as "root" where "root".d is not null order by "result"
```

**Lambda (Pure expression):**
```json
|e2e::DateRow.all()->meta::pure::tds::project(
  [
    meta::pure::tds::col(
      x: e2e::DateRow[1]|$x.id,
      'id'
    ),
    meta::pure::tds::col(
      x: e2e::DateRow[1]|$x.d,
      'd'
    ),
    meta::pure::tds::col(
      x: e2e::DateRow[1]|$x.ts,
      'ts'
    ),
    meta::pure::tds::col(
      x: e2e::DateRow[1]|$x.tsz,
      'tsz'
    )
  ]
)->meta::pure::tds::filter(
  row: meta::pure::tds::TDSRow[1]|$row.getStrictDate('d')->meta::pure::functions::collection::isNotEmpty()
)->meta::pure::tds::project(
  meta::pure::tds::col(
      row: meta::pure::tds::TDSRow[1]|$row.getStrictDate('d')->meta::pure::functions::date::adjust(
        1,
        meta::pure::functions::date::DurationUnit.YEARS
      )->meta::pure::functions::date::adjust(
        2,
        meta::pure::functions::date::DurationUnit.MONTHS
      )->meta::pure::functions::date::adjust(
        3,
        meta::pure::functions::date::DurationUnit.DAYS
      ),
      'result'
    )
)->meta::pure::tds::sort(
  meta::pure::tds::asc('result')
)
```

**Differences:**
- Row 3, column 'result': expected '2021-05-02 00:00:00.0' but got '2021-05-01 00:00:00.0'

**Expected (Postgres):**

| result |
| --- |
| 1971-03-04 00:00:00.0 |
| 2001-03-03 00:00:00.0 |
| 2001-03-04 00:00:00.0 |
| 2021-05-02 00:00:00.0 |
| 2024-03-18 00:00:00.0 |
| 2024-09-07 00:00:00.0 |
| 2025-08-18 00:00:00.0 |
| 2027-02-28 00:00:00.0 |
| 2027-03-04 00:00:00.0 |

**Actual (Legend):**

| result |
| --- |
| 1971-03-04 00:00:00.0 |
| 2001-03-03 00:00:00.0 |
| 2001-03-04 00:00:00.0 |
| 2021-05-01 00:00:00.0 |
| 2024-03-18 00:00:00.0 |
| 2024-09-07 00:00:00.0 |
| 2025-08-18 00:00:00.0 |
| 2027-02-28 00:00:00.0 |
| 2027-03-04 00:00:00.0 |

---

<a id="fail-interval_compound_literal-Relation"></a>

### ❌ interval_compound_literal [Relation]

**SQL (Postgres):**
```sql
SELECT d + INTERVAL '1 year 2 months 3 days' AS result FROM dates WHERE d IS NOT NULL ORDER BY 1
```

**SQL (Legend, rewritten):**
```sql
SELECT d + INTERVAL '1 year 2 months 3 days' AS result FROM func('e2e::rel_dates') WHERE d IS NOT NULL ORDER BY 1
```

**SQL (Generated, executed against DB):**
```sql
select ((("root".d + (INTERVAL '1 YEARS' * 1)) + (INTERVAL '1 MONTHS' * 2)) + (INTERVAL '1 DAYS' * 3)) as "result" from public.dates as "root" where "root".d is not null order by "result"
```

**Lambda (Pure expression):**
```json
|e2e::DateRow.all()->meta::pure::functions::relation::project(
  ~[
     id: x: e2e::DateRow[1]|$x.id,
     d: x: e2e::DateRow[1]|$x.d,
     ts: x: e2e::DateRow[1]|$x.ts,
     tsz: x: e2e::DateRow[1]|$x.tsz
   ]
)->meta::pure::functions::relation::filter(
  x: (id:Integer[1], d:StrictDate, ts:DateTime, tsz:DateTime)[1]|$x.d->meta::pure::functions::collection::isNotEmpty()
)->meta::pure::functions::relation::project(
  ~[
     result: x: (id:Integer[1], d:StrictDate, ts:DateTime, tsz:DateTime)[1]|$x.d->meta::pure::functions::multiplicity::toOne()->meta::pure::functions::date::adjust(
    1,
    meta::pure::functions::date::DurationUnit.YEARS
  )->meta::pure::functions::date::adjust(
    2,
    meta::pure::functions::date::DurationUnit.MONTHS
  )->meta::pure::functions::date::adjust(
    3,
    meta::pure::functions::date::DurationUnit.DAYS
  )
   ]
)->meta::pure::functions::relation::sort(
  ~result->meta::pure::functions::relation::ascending()
)
```

**Differences:**
- Row 3, column 'result': expected '2021-05-02 00:00:00.0' but got '2021-05-01 00:00:00.0'

**Expected (Postgres):**

| result |
| --- |
| 1971-03-04 00:00:00.0 |
| 2001-03-03 00:00:00.0 |
| 2001-03-04 00:00:00.0 |
| 2021-05-02 00:00:00.0 |
| 2024-03-18 00:00:00.0 |
| 2024-09-07 00:00:00.0 |
| 2025-08-18 00:00:00.0 |
| 2027-02-28 00:00:00.0 |
| 2027-03-04 00:00:00.0 |

**Actual (Legend):**

| result |
| --- |
| 1971-03-04 00:00:00.0 |
| 2001-03-03 00:00:00.0 |
| 2001-03-04 00:00:00.0 |
| 2021-05-01 00:00:00.0 |
| 2024-03-18 00:00:00.0 |
| 2024-09-07 00:00:00.0 |
| 2025-08-18 00:00:00.0 |
| 2027-02-28 00:00:00.0 |
| 2027-03-04 00:00:00.0 |

---

