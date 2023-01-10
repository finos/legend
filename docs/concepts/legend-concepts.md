---
id: legend-concepts
title: Generic Data Modeling and Legend-specific Concepts
sidebar_label: Data Modeling & Legend Concepts
---

## Association

_Coming soon._

[Create an association](../tutorials/studio-create-association.md).

## Bindings

_Coming soon._

[Bindings technical documentation](../reference/bindings)

## Class

Classes define a business concept.

[Create a class](../tutorials/studio-create-model.md/#class).

## Connection

_Coming soon._

## Constraint

A data model has built-in governance features, called _data quality controls_. You create data quality controls every time you define a model. Constraints are governance tools added on top of quality controls. Use constraints to define a validation or condition on the model that's expected to be met.

[Add a constraint](../tutorials/studio-create-model.md/#constraint).

## Data model

Data models allow you to describe your data and data relationships. 

[Create a data model](../tutorials/studio-create-model.md).

## Data types 
_Coming soon._

## Dataspace

A dataspace is a block of code that groups together a default mapping, runtime and diagram in a Studio project to enable easy query capabilities. Dataspaces help users intuitively find and query the data models they're interested in.

[Create a dataspace](../tutorials/query-create-dataspace).

## Derived property

Derived properties use functions to operate on other attributes in the data model.

[Create a derived property](../tutorials/studio-create-model.md/#derived-property).

## Diagram
 
Diagrams are visual representations of your models to better visualize and communicate about data and their relationships. **Important to note** is that Diagrams are not auto-generated based on the created model. Instead, diagrams should be intentionally created to best represent the data being described.

[Create a diagram](../tutorials/studio-create-diagram.md).

## Enumeration

An enumeration is a model attribute that has a finite list of values.

[Create an enumeration](../tutorials/studio-create-model.md/#enumeration).

## File Generation

File Generations lets you generate your models in other codes or schemas. 

[Create a File Generation](../tutorials/studio-file-generation.md)

## Flat Data Schema

Flat Data is a feature of the external formats support within Legend. It covers simple file formats like CSVs and simple custom formats. More
sophisticated structured formats, that are described by well-defined schemas, such as XML (schema XSD) and JSON (schema JSON Schema) are
handled by other features of the External Formats framework.

The Flat Data feature is extensible so that support can be added for more file formats, for example as new data providers are onboarded. This guide
covers the configuration options for the core supported formats.

The Flat Data grammar is used to describe a particular file format so that data in that format can be read and/or written by Services defined in Legend.

[Create flat data schema](../tutorials/studio-create-flat-data-schema.md).

## Flat Data Store

_Coming soon._

## Form mode

_Coming soon._

## Functions

Functions are used to derive new values from existing values using various operations.

### Customized function

Defining a customized function allows you to re-use transformation logic as part of your mappings or services.

[Define a function](../tutorials/studio-define-function.md).

### Function editor

_Coming soon._

## Generation Specification

Generation Specification lets you specify the file and model generation elements that you want to run as part of your build.

[Generate models and files](../tutorials/studio-file-generation.md)

## Group workspace

There is also the option to create a **group workspace** which allows collaboration on the same workspace. Changes made in this workspace are visible to other users without the need to merge to master. 

[Create a group workspace](../tutorials/studio-create-model.md/#group-workspace).

## Mapping editor

The mapping editor lets you construct mapping elements and test them through mapping tests.

## Measure

_Coming soon._

## Model-to-model mapping

Model-to-model mappings are used to create model transformations. Model transformations are used to connect different models.

[Create model-to-model mappings](../tutorials/studio-m2m-mapping.md).

## Persistence

_Coming soon._

## Profile

Capture additional information (metadata) about the data model by creating a Profile. Profiles store and manage tagged values and stereotypes.

[Create and edit profiles](../tutorials/studio-create-model.md/#profile).

## Project dependencies

You can configure a project to depend on another project. In other words, you can leverage the features defined in another data model to run your own data model.  

[Define project dependencies](../tutorials/studio-project-dependencies.md)

## Property

Properties are components of classes that define the attributes of a business concept. Properties can be both primitives (like strings or integers) or other properties. Use properties in a class to define attributes of the business concept.

[Create a property](../tutorials/studio-create-model.md/#property---non-primitive-data-type).

## Query builder

_Coming soon._

## Relational database

_Coming soon._

## Relational mapping

Connect data to a data model to start querying data leveraging the business-friendly terms and data relationships defined in the data model.

[Create relational mappings](../tutorials/studio-relational-mapping.md).

## Runtime

_Coming soon._

## Schemaset

_Coming soon._

## Service 

_Coming soon._

## Service editor

The service editor has two main panels: general and execution. The general panel has basic metadata about your service. The execution panel has queries, and the ability to edit queries using the query builder. From there, you can also execute and register the service.

[Create services](../tutorials/studio-create-service.md).

## Service store

Service store is a collection of Service definitions that correspond to users' REST endpoints. Servicestore allows users to model their REST endpoints as stores in Legend, map them to their models, and author Services on these models.

[Service Store tutorial](../tutorials/studio-servicestore.md).

See the [Service store technical documentation](https://github.com/finos/legend-engine/tree/master/docs/store/extensions/ServiceStore)

## Stereotype

Stereotypes allow you to extend metadata information about a model.

[Create a stereotype](../tutorials/studio-create-model.md/#class-stereotype).

## Super type

Super types show a relationship between classes or business concepts within a model. Add a super type to the model to show a hierarchical relationship between classes or business concepts. 

[Create a super type](../tutorials/studio-create-model.md/#supertype).

## Tagged value

Tagged values allow you to add context to your data model. Tagged values can be added at the class level and at the property level.

[Add a tagged value](../tutorials/studio-create-model.md/#add-a-tagged-value-to-a-class).

## Text Mode

Text Mode allows you to see the entirety of your workplace's code and edit your elements with ASCII text (as opposed to an interactive editor)

Text Mode will also parse and compile your code. If the code compiles, your GUI graph will be updated and the changes will be updated in your forms.

[Access or exit Text Mode](../tutorials/studio-create-model.md/#text-mode).

## Workspace

A workspace is where you create your data models. It's a copy (also known as a branch) of a project which can be later merged back into the main project and shared with other users.

[Create a workspace](../tutorials/studio-create-model.md/#workspace).

