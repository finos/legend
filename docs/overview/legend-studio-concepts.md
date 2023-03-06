---
id: legend-studio-concepts
title: Legend Concepts
sidebar_label: Legend
---
## Workspace

A workspace is where you create your data models. It's a copy (also known as a branch) of a project which can be later merged back into the main project and shared with other users.

See the [tutorial to create a workspace](../tutorials/studio-workspace.md/#workspace).

### Group workspace

There is also the option to create a **group workspace** which allows collaboration on the same workspace. Changes made in this workspace are visible to other users without the need to merge to master. 

See the [tutorial to create a group workspace](../tutorials/studio-workspace.md/#group-workspace).

## Diagram

Diagrams are visual representations of your models to better visualize and communicate about data and their relationships. **Important to note** is that Diagrams are not auto-generated based on the created model. Instead, diagrams should be intentionally created to best represent the data being described.

See the [tutorial to create a diagram](../tutorials/studio-create-diagram.md).

## Text Mode

Text mode allows you to see the entirety of your workplace's code and edit your elements with ASCII text (as opposed to an interactive editor)

Text mode will also parse and compile your code. If the code compiles, your GUI graph will be updated and the changes will be updated in your forms.

See the [tutorial to access or exit text mode](../tutorials/studio-workspace.md/#text-mode).

## Profile

Capture additional information (metadata) about the data model by creating a Profile. Profiles store and manage tagged values and stereotypes.

See the [tutorial to create and edit profiles](../tutorials/studio-workspace.md/#profile).

## Flat Data Schema

Flat Data is a feature of the external formats support within Legend. It covers simple file formats like CSVs and simple custom formats. More
sophisticated structured formats, that are described by well-defined schemas, such as XML (schema XSD) and JSON (schema JSON Schema) are
handled by other features of the External Formats framework.

The Flat Data feature is extensible so that support can be added for more file formats, for example as new data providers are onboarded. This guide
covers the configuration options for the core supported formats.

The Flat Data grammar is used to describe a particular file format so that data in that format can be read and/or written by Services defined in Legend.

See the [tutorial to create flat data schema](../tutorials/studio-flat-data-schema.md).

## Project dependencies

You can configure a project to depend on another project. In other words, you can leverage the features defined in another data model to run your own data model.  

See the [tutorial to define project dependencies](../tutorials/studio-project-dependencies.md)

## Service Editor

The service editor has two main panels: general and execution. The general panel has basic metadata about your service. The execution panel has queries, and the ability to edit queries using the query builder. From there, you can also execute and register the service.

See the [tutorial to create services](../tutorials/services-service.md).

## Model-to-Model Mapping

Model-to-model mappings are used to create model transformations. Model transformations are used to connect different models.

See the [tutorial to create model-to-model mappings](../tutorials/studio-m2m-mapping.md).

## Relational Mapping

Connect data to a data model to start querying data leveraging the business-friendly terms and data relationships defined in the data model.

See the [tutorial to create relational mappings](../tutorials/studio-relational-mapping.md).


