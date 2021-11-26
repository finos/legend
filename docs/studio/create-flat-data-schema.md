---
id: create-flat-data-schema
title: Create a Flat Data schema
sidebar_label: Create a Flat Data schema
---

Flat Data is a feature of the External Formats support within Legend. It covers simple file formats like CSVs and simple custom formats. More
sophisticated structured formats, that are described by well-defined schemas, such as XML (schema XSD) and JSON (schema JSON Schema) are
handled by other features of the External Formats framework.

The Flat Data feature is extensible so that support can be added for more file formats, for example as new data providers are onboarded. This guide
covers the configuration options for the core supported formats.

The Flat Data grammar is used to describe a particular file format so that data in that format can be read and/or written by Services defined in Legend.

## Steps to Create

1. Click the **+** on the left-hand side and select **New SchemaSet**.
2. Enter a name for the SchemaSet
3. Ensure the type (top left) is selected as **FlatData**
4. Click the **+** next to the type to add a schema.  For FlatData only a single schema should be added to a SchemaSet.
5. For FlatData the **Id** and **Location** can be left blank
6. Define the format of the file by entering the [Flat Data Grammar](#flat-data-grammar)


   ![Edit a SchemaSet](../assets/edit-schemaset.JPG)

## Flat Data Grammar

### Sections
Each file format is defined by a schema (a single entry in a Legend SchemaSet). Each schema consists of one or more sections. A section is defined in
grammar as:

```Legend
section section_name: driver_type
{
  properties
  record_definition
}
```

The `section_name` provides a name for the section and must be unique within a schema.

The `driver_type` defines the type of data contained in the section. See below for details of the core driver types available.

The `properties` are specific to the driver type and are detailed below. Each property is specified either as a name or as a name and value. Each
property specified is terminated by a semicolon (`;`). See example below.

A `record_definition` may be given for driver types that support one. 

### Record definitions
A record definition is specified as:

```Legend
Record
{
  record_fields
}
```

Where a `record_field` is:
```Legend
field_name: data_type(arguments)
```
or
```Legend
field_name {address}: data_type(arguments)
```
dependent on whether the driver type is self-describing (without address) or not (with address).

The `field_name` is the field's name. For self-describing drivers this will be the name of the field exactly as it appears in the file (for example the heading of the
column). If the `field_name` contains non-alphanumeric characters (other than underscores) it should be enclosed in single quotes (`''`). For drivers that
are not self-describing the `field_name` can be any name that is unique within a record type. The `address` then specifies how the field is identified
within the data. The `address` is thus driver specific, it is always given within braces (`{}`).

### Data Types

The valid `data_types` are given below. All data types can take arguments; when none are used the parentheses (`()`) are omitted. Arguments consist of
the single word `optional` or are a specified as `argument=value`. Multiple arguments are comma (`,`) separated.

* [STRING](#string)
* [BOOLEAN](#boolean)
* [INTEGER](#integer)
* [DECIMAL](#decimal)
* [DATE](#date)
* [DATETIME](#datetime)

#### STRING

Allowable Options: 
* `optional`

Examples:
* `STRING`
* `STRING(optional)`

#### BOOLEAN

Allowable Options:
* `optional`
* `trueString`
* `falseString`

Examples:
* `BOOLEAN`
* `BOOLEAN(optional, trueString='Yes')`
* `BOOLEAN(trueString='Y',falseString='N')`

Notes:
* If no `trueString` or `falseString` is specified then `true` (case insensitive) is taken to be true and any other value is considered false.
* If only a `trueString` is specified then its value (case insensitive) is taken to be true and any other value is considered  false.
* If only a `falseString` is specified then its value (case insensitive) is taken to be false and any other value is considered  true.
* If both a `trueString` and a `falseString` are specified their values (case insensitive) are taken to be true/false  respectively and any other value is considered an error.
* The properties `defaultTrueString` and `defaultFalseString` can be used to specify behaviour for all BOOLEAN  fields in a section.

#### INTEGER

Allowable Options:
* `optional`
* `format`

Examples
* `INTEGER`
* `INTEGER(optional, format='#,##0')`

Notes:
* Valid format strings are per Java's [DecimalFormat](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/text/DecimalFormat.html) (as used for integer-only strings).
* The format for all `INTEGER` fields in a section can be specified using the defaultIntegerFormat property.

#### DECIMAL

Allowable Options:
* `optional`
* `format`

Examples
* `DECIMAL`
* `DECIMAL(optional, format='#,##0.0')`

Notes:
* Valid format strings are per Java's [DecimalFormat](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/text/DecimalFormat.html) (as used for integer-only strings).
* The format for all `DECIMAL` fields in a section can be specified using the defaultDecimalFormat property.

#### DATE

Allowable Options:
* `optional`
* `format`

Examples
* `DATE`
* `DATE(optional, format='dd/MM/yyyy')`

Notes:
* Valid format strings are per Java's [DateTimeFormatter](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/format/DateTimeFormatter.html) (as used for date-only strings).
* The format for all `DATE` fields in a section can be specified using the `defaultDateFormat` property.
* If a format is not specified, dates are expected to be in ISO 8601 format for dates only (`yyyy-MM-dd`).

#### DATETIME

Allowable Options:
* `optional`
* `format`
* `timeZone`

Examples
* `DATETIME`
* `DATETIME(optional, format='dd/MM/yyyy HH:mm')`
* `DATETIME(timeZone='EST')`

Notes:
* Valid format strings are per Java's [DateTimeFormatter](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/format/DateTimeFormatter.html).
* The format for all `DATETIME` fields in a section can be specified using the `defaultDateTimeFormat` property. 
* If a format is not specified, datetimes are expected to be in ISO 8601 format.
* If the datetime data does not include time zone information the time zone will be set according to the arguments/properties specified. 
* Valid timeZone values are per Java's [ZoneId](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/ZoneId.html) including [SHORT_IDS](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/ZoneId.html#SHORT_IDS). 
* The default time zone for all `DATETIME` fields in a section can be specified using the `defaultTimeZone` property.
* When no time zone information is specified it is assumes to be UTC.

### Driver: DelimitedWithHeadings
This driver reads data rows in which columns of data are separated by a delimiter. The first row specifies the headings for each column and hence defines
the order of data. A classic CSV file is an example of this.

####Properties
* [Common Streaming Properties](#common-streaming-properties).
* [Common Delimited Properties](#common-delimited-properties).
* [Common Data Properties](#common-data-properties).
* `modelledColumnsMustBePresent` optional property which can be added as an option to assert that all fields specified in the Record must be present
in the column headings row regardless of whether the field is optional.
* `onlyModelledColumnsAllowed` optional property which can be added as an option to prohibit any fields not specified in the Record from being
present in the column headings row.

####Record
A `Record` definition is expected for this driver and its fields must not specify address values.

### Driver: DelimitedWithoutHeadings
This driver reads data rows in which columns of data are separated by a delimiter and where no headings row is present.

####Properties
* [Common Streaming Properties](#common-streaming-properties).
* [Common Delimited Properties](#common-delimited-properties).
* [Common Data Properties](#common-data-properties).

####Record
A `Record` definition is expected for this driver and its fields must specify address values. 
The addresses are the one-based column positions of the data within the file.

### Driver: ImmaterialLines
This driver is used to skip unnecessary lines of data.

####Properties
* [Common Streaming Properties](#common-streaming-properties).

####Record
A `Record` definition must not be specified.

### Common Delimited Properties
* `delimiter` mandatory property which specifies the column separator character(s).


* `quoteChar` optional property which defines the character used for quoting strings within the file rows so that they can include delimiters and/or ends-of-lines.

  When quoting is used a quote character within a quoted string can be escaped by repeating it (for example the text 'It''s OK', where `quoteChar: '\'';` has been specified, equates to the value It's OK).


* `escapingChar` optional property which defines the character used to escape other characters. 
  Escaping can be used both within and outside quoted text.

  Inside a quoted string the above example could have been `'It\'s OK'`, where `quoteChar: \'';` and `escapingChar: '\\'`; have been specified, also equates to the value It's OK.

  Outside it can be used to escape delimiters such that the text `Hello\, World, Goodbye`, where `delimiter: ',';` and `escapingChar: '\\';` have been specified, equates to two column values of `Hello, World` and `Goodbye`.


* `nullString` - optional property defining the text which equates to a null (missing) value. 
  When this property is not specified the value is considered to be always present thus two delimiters in succession is interpreted as an empty string. 
  To treat that as a null value you need to specify `nullString: '';`. 

  Multiple `nullString` properties can be used to specify more that one value.

### Common Streaming Properties
* `recordSeparator` optional property that defines the character(s) used to separate records within the file. 
  This is commonly the end-of-line character(s).

  If this option is not specified the file will be separated using any of the commonly used line endings (`\n`, `\r\n` and `\r`); 
  **this is usually the best option to alleviate issues with data being copied between different computers with different operating systems.**


* `mayContainBlankLines` optional property which can be added as an option to specify that blank lines within the file should be ignored.


* `scope` required property that specifies the scope of the section. 
  Options are:
  * `scope.default;` use this unless you want a specific alternative
  * `scope.forNumberOfLines: n;` if the section spans an exact number of lines
  * `scope.untilLineEquals: 'END';` if the section spans until a marker line of the specified text
  * `scope.untilEof;` if the section spans for the remainder of the data

### Common Data Properties
* `defaultIntegerFormat`
* `defaultDecimalFormat`
* `defaultTrueString`
* `defaultFalseString`
* `defaultDateFormat`
* `defaultDateTimeFormat`
* `defaultTimeZone`

See [Data Types](#data-types) for usage.

### Examples

This example defines a CSV file with:
* an ignored header row
* a column headings row
* data rows

```Legend
section header: ImmaterialLines
{
  scope.forNumberOfLines: 1;
}

section data: DelimitedWithHeadings
{
  scope.default;
  delimiter: ',';
  modelledColumnsMustBePresent;
  onlyModelledColumnsAllowed;

  Record
  {
    'First Name': STRING;
    'Last Name': STRING;
    Age: INTEGER(optional);
  }
}
```

This example defines a pipe-delimited file without headers. 
Columns are therefore addressed positionally:

```Legend
section data: DelimitedWithoutHeadings
{
  scope.default;
  delimiter: '|';

  Record
  {
    FirstName {1}: STRING;
    LastName {2}: STRING;
    Age {3}: INTEGER(optional);
  }
}
```