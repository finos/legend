---
id: legend-glossary
title: Glossary
sidebar_label: Glossary
---

The terms used across Legend, in alphabetical order. Each entry links to a tutorial or a reference page where there is one.

## Association

An association links two classes, such as a firm and its employees, and adds a property to each side of the link. Each end has a multiplicity, so a link can be one to one, one to many or many to many.

See [Create an association](../tutorials/studio-association.md).

## Binding

A binding ties a schema set to classes, so that data in an external format can be read into instances of the classes and written back out. Formats include JSON Schema, XSD, Avro, Protobuf and flat data.

See [Create a binding](../tutorials/studio-binding.md) and the [external format reference](../reference/external-format.md#bindings).

## Class

A class is a business concept, such as a trade or a firm. It has properties, and can have derived properties, constraints and super types.

See [Create a class](../tutorials/studio-class.md).

## Connection

A connection tells Legend Engine how to reach a store: for a database, its type, where it is and how to authenticate.

See [Create a connection](../tutorials/studio-relational-mapping.md#create-a-connection).

## Constant

A constant is a named value in a query that stays the same every time the query runs.

## Constraint

A constraint is a rule that a class's data must follow, written as an expression, for example that a trade's quantity is positive. Data that breaks a constraint is reported when it is read or validated.

See [Add a constraint](../tutorials/studio-class.md#constraint).

## Data product

A data product publishes data for consumers. It has a title and a description, and groups of access points, each a query that returns part of the data. Consumers find data products in Legend Marketplace, request access to them, and query them in Legend Query.

## Data quality

Legend checks data against the expectations kept with its model: the model's structure, such as each property's type and multiplicity, its constraints, validations on relations, and checks that run after a service.

See legend-engine's [data quality documentation](https://github.com/finos/legend-engine/blob/master/docs/data-quality/data-quality-overview.md).

## Data space

A data space packages a model for the people who query it: its execution contexts, each a mapping and a runtime, its diagrams and its documentation, under one name. Legend Query can start a query from a data space, so its users don't have to know which mapping or runtime to pick.

## Data type

A property's type is a class, an enumeration or a primitive type. The primitive types include String, Boolean, Integer, Float, Decimal, Date, StrictDate and DateTime.

## Derived property

A derived property is computed from other properties by an expression, for example a person's full name from their first and last names.

See [Add a derived property](../tutorials/studio-class.md#derived-property).

## Diagram

A diagram draws classes and the links between them. Diagrams are not generated from the model: you draw each one to show the part of the model it is about.

See [Create a diagram](../tutorials/studio-diagram.md).

## Enumeration

An enumeration is a type with a fixed list of values, such as the sides of a trade.

See [Create an enumeration](../tutorials/studio-enumeration.md).

## Externalize

Externalize is a function that writes instances of classes in an external format, using a binding. It takes the instances, the binding and a graph fetch tree that says which properties to write.

## File generation

A file generation produces files from the model in another format, such as JSON Schema, Avro or Protobuf.

See [Create a file generation](../tutorials/studio-file-generation.md).

## Flat data schema

A flat data schema describes the records and fields of a flat file, such as a CSV file. Mappings and bindings use it to read and write such files.

See [Create a flat data schema](../tutorials/studio-flat-data-schema.md).

## Function

A function is a named expression written in the Legend language. Functions can be used in mappings, queries and services, can have tests, and can be activated. The functions Legend provides are listed in the [function reference](../reference/released-functions.md).

See [Define a function](../tutorials/studio-function.md).

## Function activator

A function activator runs a function outside Legend Engine, for example as a Snowflake app or as a hosted service with its own URL.

## Generation specification

A generation specification lists the model and file generations that a project's build runs.

See [Generation specification](../tutorials/studio-file-generation.md#generation-specification).

## Graph fetch

A graph fetch query returns objects, as a tree serialized as JSON, rather than a table. The tree says which properties to return, including the properties of related objects.

## Group workspace

A group workspace is a workspace that several people share. Their changes are visible to each other without being committed to the project first.

See [Create a group workspace](../tutorials/studio-workspace.md#group-workspace).

## Internalize

Internalize is a function that reads data in an external format into instances of classes, using a binding. It takes the class, the binding and the data.

## Mapping

A mapping ties classes to data: to the tables, files or endpoints of a store, or to other classes. A query on a class runs through a mapping. Mappings can have tests.

### Model-to-model mapping

A model-to-model mapping fills one model's classes from another model's classes, to change data from one shape into another.

See [Create a model-to-model mapping](../tutorials/studio-m2m-mapping.md).

### Relational mapping

A relational mapping fills classes from the tables of a relational database.

See [Create a relational mapping](../tutorials/studio-relational-mapping.md).

## Measure

A measure is a quantity, such as mass, with its units, such as grams and kilograms, and how to convert between them.

## Milestoning

Milestoning is how Legend handles data that changes over time. A class can be business-temporal, with data valid for a business date, processing-temporal, with data as recorded at a processing date, or bitemporal, with both. A query on such a class says which dates it wants the data for.

## OLAP

An OLAP, or window, column computes a value over a group of rows, such as a running total or a rank, and adds it to each row of a query's results.

## Package

A package groups elements, like a folder, and gives each its full name: the class `Firm` in the package `model::domain` is `model::domain::Firm`.

See [Create a package](../tutorials/studio-package.md).

## Persistence

A persistence describes how the results of a service are written to a target, such as a database table: when it runs, how new data is merged with the data already there, and how history is kept.

## Profile

A profile declares stereotypes and tags, which add information about the model to its elements.

See [Create a profile](../tutorials/studio-profile.md).

## Project dependencies

A project can depend on released versions of other projects to use their elements. Their own dependencies come with them.

See [Define project dependencies](../tutorials/studio-project-dependencies.md).

## Property

A property is an attribute of a class, such as a trade's date. It has a type and a multiplicity, which says how many values it holds, for example exactly one, or zero or more.

See [Add a property](../tutorials/studio-class.md#property---primitive-data-type).

## Query builder

The query builder builds a query by dragging properties into columns and filters, in Legend Studio and Legend Query. It also shows the query as Legend language text.

See [Build and run queries](../tutorials/query-builder.md).

## Query parameters

A query parameter is a named value that a query asks for each time it runs.

## Relation

A relation is tabular data: rows with named, typed columns. The Relation API's functions, such as filter, select, extend, groupBy and join, transform relations, and Legend Engine runs them as SQL against the store.

See the [Relation API reference](../reference/legend-relation.md).

## Relational database

A database element describes a relational store: its schemas, tables, views and columns, and the joins and filters between them. Relational mappings refer to it.

See [Create a relational database schema](../tutorials/studio-relational-mapping.md#create-a-relational-database-schema).

## Runtime

A runtime says which connection to use for each store that a mapping reads from. A query or a service runs with a mapping and a runtime.

See [Create a runtime](../tutorials/studio-relational-mapping.md#create-a-runtime).

## Schema set

A schema set holds external schemas in one format, such as JSON Schema, XSD or flat data. A binding ties a schema set to classes.

## Service

A service publishes a query as an API: it pairs the query with a mapping and a runtime, and has tests. Other applications call it by its URL. Its editor has tabs for its general details, its execution and its tests.

See [Create a service](../tutorials/services-service.md).

## Service store

A service store describes HTTP endpoints as a store, so that a mapping can fill classes from the data they return.

See the [service store tutorial](../tutorials/studio-servicestore.md) and legend-engine's [service store documentation](https://github.com/finos/legend-engine/tree/master/docs/store/extensions/ServiceStore).

## Stereotype

A stereotype is a label, declared in a profile, that you put on an element, such as marking a class as temporal.

See [Create a stereotype](../tutorials/studio-profile.md#stereotype).

## Super type

A class's super type is a more general class it extends, such as a legal entity for a firm. The class has the super type's properties too.

See [Add a super type](../tutorials/studio-profile.md#supertype).

## Tagged value

A tagged value is a value for a tag declared in a profile, such as a description or an alias for a class or a property.

See [Add a tagged value](../tutorials/studio-profile.md#profile).

## Test

Mappings, services and functions have test suites. Each test gives input data and the expected result. Legend Studio runs them one at a time or all together, and the project's build runs them too.

See [Create tests](../tutorials/studio-tests.md).

## Text

A text element holds plain text or Markdown, such as a project's README.

See [Create a text element](../tutorials/studio-text.md).

## Text mode

Text mode shows the whole workspace as Legend language text instead of form editors. Press `F8` to open or close it, and `F9` to compile.

See [Text mode](../tutorials/studio-workspace.md#text-mode).

## Watermark

A watermark is a value attached to a query with the `forWatermark` function. Add one to a query from the query builder's advanced options.

## Workspace

A workspace is where you change a project: a copy of it, kept as a branch of the project's GitLab repository. Once the changes are reviewed and approved, they're committed to the project.

See [Create a workspace](../tutorials/studio-workspace.md).
