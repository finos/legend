---
id: query-builder
title: Build and Run Queries
sidebar_label: Query Builder
---

## Build a Query
You can build a query directly in Alloy Studio using its drag-and-drop environment, Query Builder. To create a query, right-click any class with mapped data and drag-and-drop the fields you want to the central panel. To execute the query, click `play`. 

### Convert query attributes to Derivations
Further define the expected results of a query by writing functions.

![derivation in query](../assets/new-feature-derivation.jpg)

### See your query in text mode (PURE)
Review and edit your created queries using the user-friendly UI mode also in text mode.

![textmode in query](../assets/new-textmode-query.jpg)

## Notification upon exiting Query Editor
In order to prevent accidental loss of query edits when exiting the Query Editor, there is a pop up asking you if you would like to exit the Query Editor without saving your query. More details and **video walkthrough** [here](https://github.com/finos/legend-studio/pull/1278). 

### Leverage Subtype in Query Builder
Navigate properties of subtypes in the explorer tree. These properties can be used in building queries through projection, graph fetch and filter features in form mode. More details [here](https://github.com/finos/legend-studio/issues/630).

![subtype query](../assets/new-subtype-query.gif)

### Search for properties when building your data query
You can search for data model properties when building a query. The search functionality includes filtering by specific data types and dragging & dropping of the selected property into the fetch panel. More details and **video walkthrough** [here](https://github.com/finos/legend-studio/pull/1212).

### See the full element path of classes
 When selecting the class you want to query, you can see the full element path to avoid picking the wrong class in case of duplicates. More details and **video walkthrough** [here](https://github.com/finos/legend-studio/pull/1243).

### Review execution time and result set size of your query
You can see how long it takes to run your query and how many rows are being returned. This will help users to identify issues with their query. More details and **video walkthrough** [here](https://github.com/finos/legend-studio/pull/1244).

### Toggle between light & dark theme
Click on the light bulb icon on the top right corner and you will see the Query Editor in light theme. More details and **video walkthrough** [here](https://github.com/finos/legend-studio/pull/1388).

### Load a new query directly from the Query Editor.
Load a new query directly from the Query Editor. 

More details and **video walkthrough** [here](https://github.com/finos/legend-studio/pull/1436).

## Test Querying your Data model

_Coming soon._

## Core Features

### Class Explorer 

_Coming soon._

### Function Explorer

The function explorer shows you all the functions you have defined and lets you drag and drop to selected panels in the query builder including the derviation projection columns.  

![Function Explorer](../assets/query-builder/function-explorer.gif)

### Parameters

Parameters are variables assigned to your query. They are dynamic in nature and can change for each execution.

![Add a parameter](../assets/query-builder/params.gif)

We run validations upon creation of query parameters such as not allowing duplicate parameter names or empty names. More details [here](https://github.com/finos/legend-studio/issues/1269).

### Constants

Constants are static values set to a variable name that can be leveraged within your query. They remain the same for ALL executions.

![Add a constant](../assets/query-builder/constants-simple.gif)

![Add a constant for milestone value](../assets/query-builder/constants-milestoning.gif)

### Filter

#### Drag columns from projection to filter panel.
Drag & drop properties from the projection into the filter panel. More details and **video walkthrough** [here](https://github.com/finos/legend-studio/pull/1350).

#### "Filter by" results in your query

You can quickly filter by returned results (row entries) post running a query. This will add a post filter to your query that you can then further customize if needed. More details and **video walkthrough** [here](https://github.com/finos/legend-studio/pull/1204).

#### Date Filter and Operations
Leverage <kbd>&gt;</kbd>, <kbd>&gt;=</kbd>, <kbd>&lt;</kbd>, <kbd>&lt;=</kbd>, <kbd>is in</kbd>, and <kbd>is not in</kbd>. More details [here](https://github.com/finos/legend-studio/pull/784).

![date filter](../assets/new-date-filter.gif)

#### Type-ahead for filter
We support fuzzy search & type-ahead for filter and post-filter. More details and **video walkthrough** [here](https://github.com/finos/legend-studio/pull/1381).

### Milestoning

![Milestoning](../assets/query-builder/milestoning.gif)

#### Date Propagations for milestoned properties
Query supports propagations for milestoned properties. You can also overwrite default date parameter values for milestoned properties directly from the projection and filter panels or from Text Mode.

![milestoning](../assets/milestoning.gif)

### Watermark

You can add a watermark to your query through the advanced options tab. If a watermark is present, a waterdrop icon will appear on the top left of your query and you can also edit your watermark by clicking that icon. 

![Watermark](../assets/query-builder/watermark.gif)

## Fetch Structure - Tabular Data Structure 

### Projection Columns

#### Aggregations for Enumeration values.

You can perform aggregation operations in the projection column on an enumeration value when creating your query in the Query Builder. 

![enumeration aggregation](../assets/enumeration-aggregation.gif)

### Post Filter

You may add a filter that will be applied to your Tabular Data Structure Columns that were defined through the projection panel by adding a post-filter.

![Post Filter](../assets/query-builder/post-filter-simple.gif)
![Post Filter on aggregation](../assets/query-builder/post-filter-aggregation.gif)
![OLAP with Post Filter](../assets/query-builder/post-filter-derived.gif)

#### Type-ahead for post-filter
We support fuzzy search & type-ahead for filter and post-filter. More details and **video walkthrough** [here](https://github.com/finos/legend-studio/pull/1381).


### OLAP
OLAP lets you add [window](https://mode.com/sql-tutorial/sql-window-functions/) columns to your query. 
See: 

![Create Simple OLAP](../assets/query-builder/olap-simple.gif)
![OLAP Modal](../assets/query-builder/olap-create-modal.gif)
![OLAP with Post Filter](../assets/query-builder/olap-post-filter.gif)

### Result Modifiers

_Coming soon._

## Fetch Structure - Graph Fetch 

_Coming soon._

## Open an Existing Query 

_Coming soon._

## Edit a Service Query

_Coming soon._

## Executing Queries

### Query Data as of Specific Dates and Times

Query Builder supports filtering by additional date and time values. These include <kbd>now()</kbd>, <kbd>today ()</kbd>, and customized absolute date & time values. Additional, date and time values can be used for filters, post filters, parameters and derived properties.  

![datefilter](../assets/datefilter.gif)

### Apply operations, transformations, and calculations to your datasets in the Query Editor

The Query Editor supports performing aggregation functions as part of your query.

![aggregation in query](../assets/new-aggregations.jpg)

### Execute With Parameters

![Execute Params](../assets/query-builder/execute-params.gif)
![Export Params With Enums](../assets/query-builder/execute-params-enums.gif)

### Cancel queries while running.
You can cancel queries while they're running in the Query Builder as well as in the Service & Mapping Editor. More details and **video walkthrough** [here](https://github.com/finos/legend-studio/pull/1358).

### Running and exporting invalid queries
It is not allowed to run or export queries that are invalid - such as when no properties or duplicate properties are selected. More details and **video walkthrough** [here](https://github.com/finos/legend-studio/pull/1359).

## Export Data

Once you are content with your data, you can also export to other types. For now we support exporting your query results to `CSV`.

![Export CSV](../assets/query-builder/export-csv.gif)

![Export CSV](../assets/query-builder/export-csv-params.gif)

## Promote an ad-hoc query to a service
You can promote an ad-hoc query to a service. 

More details and **video walkthrough** [here](https://github.com/finos/legend-studio/pull/1506).

## More
- [Showcase projects](../showcases/showcase-projects.md)
- [Legend Features](../overview/legend-features.md)
- [Legend Glossary](../overview/legend-glossary.md)
- [Reference documentation](../reference/legend-language.md)
- [Studio tutorials](../tutorials/studio-workspace.md)
- [Query tutorials](../tutorials/query-builder.md)
