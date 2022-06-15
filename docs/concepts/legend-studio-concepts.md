---
id: legend-concepts
title: Legend Concepts
sidebar_label: Legend Concepts
---

## Workspace
A workspace is where you create your data models. It's a copy (also known as a branch) of a project which can be later merged back into the main project and shared with other users.

_[TODO: add screenshot]_

The left side tells you the name of your project and whether your workspace is up to date with your project head.

The right side has actionable icons. In order, they: Sync your workspace `(Ctrl + S)`, compile your workspace `(F9)`, toggle your screen size, toggle the auxiliary panel, and toggle text mode `(F8)`.

### Group workspace
There is also the option to create a **group workspace** which allows collaboration on the same workspace. Changes made in this workspace are visible to other users without the need to merge to master. 

## Diagram

Diagrams are visual representations of your data models. The diagram shows the relationships between business concepts. You can use the diagram to edit your models.
 
Diagrams are visual representations of your models to better visualize and communicate about data and their relationships. **Important to note** is that Diagrams are not auto-generated based on the created model. Instead, diagrams should be intentionally created to best represent the data being described.

## Text Mode

Text mode allows you to see the entirety of your workplace's code and edit your elements with ASCII text (as opposed to an interactive editor)

Text mode will also parse and compile your code. If the code compiles, your GUI graph will be updated and the changes will be updated in your forms

## Profile

Capture additional information (metadata) about the data model by creating a Profile. Profiles store and manage tagged values and stereotypes.

## Flat Data Schema

Flat Data is a feature of the external formats support within Legend. It covers simple file formats like CSVs and simple custom formats. More
sophisticated structured formats, that are described by well-defined schemas, such as XML (schema XSD) and JSON (schema JSON Schema) are
handled by other features of the External Formats framework.

The Flat Data feature is extensible so that support can be added for more file formats, for example as new data providers are onboarded. This guide
covers the configuration options for the core supported formats.

The Flat Data grammar is used to describe a particular file format so that data in that format can be read and/or written by Services defined in Legend.

## Project dependencies

You can configure a project to depend on another project. In other words, you can leverage the features defined in another data model to run your own data model. 

## Query Builder

You can build a query directly in Alloy Studio using its drag-and-drop environment, Query Builder.

## Service Editor

The service editor has two main panels: general and execution. The general panel has basic metadata about your service. The execution panel has queries, and the ability to edit queries using the query builder. From there, you can also execute and register the service.

## Query Services 

A query service allows you to save and share the queries that you and your team built, and execute them with ease.

## File Generation
File generation lets you generate your models in other codes or schemas.


