# Postgres Date/Time Format Token Coverage — Legend SQL

Reference: [PostgreSQL 16 Data Type Formatting Functions](https://www.postgresql.org/docs/16/functions-formatting.html) (Table 9.25) and [Date/Time Functions](https://www.postgresql.org/docs/16/functions-datetime.html) (Table 9.33).

## `to_char` tokens (22/58 TDS PASS, 25/58 Relation PASS)

| Token | TDS | Relation | Test(s) |
|---|---|---|---|
| `HH` | ERROR | ERROR | to_char_token__HH |
| `HH12` | ERROR | ERROR | to_char_token__HH12 |
| `HH24` | PASS | PASS | to_char_token__HH24 |
| `MI` | PASS | PASS | to_char_token__MI |
| `SS` | PASS | PASS | to_char_token__SS |
| `MS` | ERROR | ERROR | to_char_token__MS |
| `US` | ERROR | ERROR | to_char_token__US |
| `FF1` | ERROR | ERROR | to_char_token__FF1 |
| `FF6` | ERROR | ERROR | to_char_token__FF6 |
| `SSSS` | ERROR | ERROR | to_char_token__SSSS |
| `AM` | ERROR | ERROR | to_char_token__AM |
| `PM` | ERROR | ERROR | to_char_token__PM |
| `Y,YYY` | ERROR | ERROR | to_char_token__Y_YYY |
| `YYYY` | PASS | PASS | to_char_token__YYYY |
| `YYY` | FAIL | PASS | to_char_token__YYY |
| `YY` | ERROR | PASS | to_char_token__YY |
| `Y` | ERROR | PASS | to_char_token__Y |
| `IYYY` | ERROR | ERROR | to_char_token__IYYY |
| `IY` | ERROR | ERROR | to_char_token__IY |
| `I` | ERROR | ERROR | to_char_token__I |
| `BC` | ERROR | ERROR | to_char_token__BC |
| `AD` | ERROR | ERROR | to_char_token__AD |
| `MONTH` | PASS | PASS | to_char_token__MONTH |
| `Month` | PASS | PASS | to_char_token__Month |
| `month` | PASS | PASS | to_char_token__month |
| `MON` | PASS | PASS | to_char_token__MON |
| `Mon` | PASS | PASS | to_char_token__Mon |
| `mon` | PASS | PASS | to_char_token__mon |
| `MM` | PASS | PASS | to_char_token__MM |
| `DAY` | PASS | PASS | to_char_token__DAY |
| `Day` | PASS | PASS | to_char_token__Day |
| `day` | PASS | PASS | to_char_token__day |
| `DY` | PASS | PASS | to_char_token__DY |
| `Dy` | PASS | PASS | to_char_token__Dy |
| `dy` | PASS | PASS | to_char_token__dy |
| `DDD` | PASS | PASS | to_char_token__DDD |
| `IDDD` | ERROR | ERROR | to_char_token__IDDD |
| `DD` | PASS | PASS | to_char_token__DD |
| `D` | FAIL | FAIL | to_char_token__D |
| `ID` | ERROR | ERROR | to_char_token__ID |
| `W` | ERROR | ERROR | to_char_token__W |
| `WW` | PASS | PASS | to_char_token__WW |
| `IW` | ERROR | ERROR | to_char_token__IW |
| `CC` | ERROR | ERROR | to_char_token__CC |
| `J` | ERROR | ERROR | to_char_token__J |
| `Q` | PASS | PASS | to_char_token__Q |
| `RM` | ERROR | ERROR | to_char_token__RM |
| `rm` | ERROR | ERROR | to_char_token__rm |
| `TZ` | ERROR | ERROR | to_char_token__TZ |
| `tz` | ERROR | ERROR | to_char_token__tz |
| `TZH` | ERROR | ERROR | to_char_token__TZH |
| `TZM` | ERROR | ERROR | to_char_token__TZM |
| `OF` | ERROR | ERROR | to_char_token__OF |
| `FM` | PASS | PASS | to_char_token__FM_modifier |
| `TH` | ERROR | ERROR | to_char_token__TH_modifier |
| `th` | ERROR | ERROR | to_char_token__th_modifier |
| `FX` | ERROR | ERROR | to_char_token__FX_modifier |
| `SP` | ERROR | ERROR | to_char_token__SP_modifier |

## `extract` tokens (11/22 TDS PASS, 11/22 Relation PASS)

| Token | TDS | Relation | Test(s) |
|---|---|---|---|
| `century` | ERROR | ERROR | extract_field__century |
| `day` | PASS | PASS | extract_field__day |
| `decade` | ERROR | ERROR | extract_field__decade |
| `dow` | PASS | PASS | extract_field__dow |
| `doy` | PASS | PASS | extract_field__doy |
| `epoch` | PASS | PASS | extract_field__epoch |
| `hour` | PASS | PASS | extract_field__hour |
| `isodow` | ERROR | ERROR | extract_field__isodow |
| `isoyear` | ERROR | ERROR | extract_field__isoyear |
| `julian` | ERROR | ERROR | extract_field__julian |
| `microseconds` | ERROR | ERROR | extract_field__microseconds |
| `millennium` | ERROR | ERROR | extract_field__millennium |
| `milliseconds` | ERROR | ERROR | extract_field__milliseconds |
| `minute` | PASS | PASS | extract_field__minute |
| `month` | PASS | PASS | extract_field__month |
| `quarter` | PASS | PASS | extract_field__quarter |
| `second` | PASS | PASS | extract_field__second |
| `timezone` | ERROR | ERROR | extract_field__timezone |
| `timezone_hour` | ERROR | ERROR | extract_field__timezone_hour |
| `timezone_minute` | ERROR | ERROR | extract_field__timezone_minute |
| `week` | PASS | PASS | extract_field__week |
| `year` | PASS | PASS | extract_field__year |

