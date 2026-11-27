# Postgres Date/Time Format Token Coverage — Legend SQL

Reference: [PostgreSQL 16 Data Type Formatting Functions](https://www.postgresql.org/docs/16/functions-formatting.html) (Table 9.25) and [Date/Time Functions](https://www.postgresql.org/docs/16/functions-datetime.html) (Table 9.33).

## `to_char` tokens (22/58 TDS PASS, 25/58 Relation PASS, 25/58 Grammar PASS)

| Token | TDS | Relation | Grammar | Test(s) |
|---|---|---|---|---|
| `HH` | ERROR | ERROR | ERROR | to_char_token__HH |
| `HH12` | ERROR | ERROR | ERROR | to_char_token__HH12 |
| `HH24` | PASS | PASS | PASS | to_char_token__HH24 |
| `MI` | PASS | PASS | PASS | to_char_token__MI |
| `SS` | PASS | PASS | PASS | to_char_token__SS |
| `MS` | ERROR | ERROR | ERROR | to_char_token__MS |
| `US` | ERROR | ERROR | ERROR | to_char_token__US |
| `FF1` | ERROR | ERROR | ERROR | to_char_token__FF1 |
| `FF6` | ERROR | ERROR | ERROR | to_char_token__FF6 |
| `SSSS` | ERROR | ERROR | ERROR | to_char_token__SSSS |
| `AM` | ERROR | ERROR | ERROR | to_char_token__AM |
| `PM` | ERROR | ERROR | ERROR | to_char_token__PM |
| `Y,YYY` | ERROR | ERROR | ERROR | to_char_token__Y_YYY |
| `YYYY` | PASS | PASS | PASS | to_char_token__YYYY |
| `YYY` | FAIL | PASS | PASS | to_char_token__YYY |
| `YY` | ERROR | PASS | PASS | to_char_token__YY |
| `Y` | ERROR | PASS | PASS | to_char_token__Y |
| `IYYY` | ERROR | ERROR | ERROR | to_char_token__IYYY |
| `IY` | ERROR | ERROR | ERROR | to_char_token__IY |
| `I` | ERROR | ERROR | ERROR | to_char_token__I |
| `BC` | ERROR | ERROR | ERROR | to_char_token__BC |
| `AD` | ERROR | ERROR | ERROR | to_char_token__AD |
| `MONTH` | PASS | PASS | PASS | to_char_token__MONTH |
| `Month` | PASS | PASS | PASS | to_char_token__Month |
| `month` | PASS | PASS | PASS | to_char_token__month |
| `MON` | PASS | PASS | PASS | to_char_token__MON |
| `Mon` | PASS | PASS | PASS | to_char_token__Mon |
| `mon` | PASS | PASS | PASS | to_char_token__mon |
| `MM` | PASS | PASS | PASS | to_char_token__MM |
| `DAY` | PASS | PASS | PASS | to_char_token__DAY |
| `Day` | PASS | PASS | PASS | to_char_token__Day |
| `day` | PASS | PASS | PASS | to_char_token__day |
| `DY` | PASS | PASS | PASS | to_char_token__DY |
| `Dy` | PASS | PASS | PASS | to_char_token__Dy |
| `dy` | PASS | PASS | PASS | to_char_token__dy |
| `DDD` | PASS | PASS | PASS | to_char_token__DDD |
| `IDDD` | ERROR | ERROR | ERROR | to_char_token__IDDD |
| `DD` | PASS | PASS | PASS | to_char_token__DD |
| `D` | FAIL | FAIL | FAIL | to_char_token__D |
| `ID` | ERROR | ERROR | ERROR | to_char_token__ID |
| `W` | ERROR | ERROR | ERROR | to_char_token__W |
| `WW` | PASS | PASS | PASS | to_char_token__WW |
| `IW` | ERROR | ERROR | ERROR | to_char_token__IW |
| `CC` | ERROR | ERROR | ERROR | to_char_token__CC |
| `J` | ERROR | ERROR | ERROR | to_char_token__J |
| `Q` | PASS | PASS | PASS | to_char_token__Q |
| `RM` | ERROR | ERROR | ERROR | to_char_token__RM |
| `rm` | ERROR | ERROR | ERROR | to_char_token__rm |
| `TZ` | ERROR | ERROR | ERROR | to_char_token__TZ |
| `tz` | ERROR | ERROR | ERROR | to_char_token__tz |
| `TZH` | ERROR | ERROR | ERROR | to_char_token__TZH |
| `TZM` | ERROR | ERROR | ERROR | to_char_token__TZM |
| `OF` | ERROR | ERROR | ERROR | to_char_token__OF |
| `FM` | PASS | PASS | PASS | to_char_token__FM_modifier |
| `TH` | ERROR | ERROR | ERROR | to_char_token__TH_modifier |
| `th` | ERROR | ERROR | ERROR | to_char_token__th_modifier |
| `FX` | ERROR | ERROR | ERROR | to_char_token__FX_modifier |
| `SP` | ERROR | ERROR | ERROR | to_char_token__SP_modifier |

## `extract` tokens (11/22 TDS PASS, 11/22 Relation PASS, 11/22 Grammar PASS)

| Token | TDS | Relation | Grammar | Test(s) |
|---|---|---|---|---|
| `century` | ERROR | ERROR | ERROR | extract_field__century |
| `day` | PASS | PASS | PASS | extract_field__day |
| `decade` | ERROR | ERROR | ERROR | extract_field__decade |
| `dow` | PASS | PASS | PASS | extract_field__dow |
| `doy` | PASS | PASS | PASS | extract_field__doy |
| `epoch` | PASS | PASS | PASS | extract_field__epoch |
| `hour` | PASS | PASS | PASS | extract_field__hour |
| `isodow` | ERROR | ERROR | ERROR | extract_field__isodow |
| `isoyear` | ERROR | ERROR | ERROR | extract_field__isoyear |
| `julian` | ERROR | ERROR | ERROR | extract_field__julian |
| `microseconds` | ERROR | ERROR | ERROR | extract_field__microseconds |
| `millennium` | ERROR | ERROR | ERROR | extract_field__millennium |
| `milliseconds` | ERROR | ERROR | ERROR | extract_field__milliseconds |
| `minute` | PASS | PASS | PASS | extract_field__minute |
| `month` | PASS | PASS | PASS | extract_field__month |
| `quarter` | PASS | PASS | PASS | extract_field__quarter |
| `second` | PASS | PASS | PASS | extract_field__second |
| `timezone` | ERROR | ERROR | ERROR | extract_field__timezone |
| `timezone_hour` | ERROR | ERROR | ERROR | extract_field__timezone_hour |
| `timezone_minute` | ERROR | ERROR | ERROR | extract_field__timezone_minute |
| `week` | PASS | PASS | PASS | extract_field__week |
| `year` | PASS | PASS | PASS | extract_field__year |

