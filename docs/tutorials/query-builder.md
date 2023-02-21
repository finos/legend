---
id: query-builder
title: Build and Run Queries
sidebar_label: Query Builder
---

## Build a Query
You can build a query directly in Alloy Studio using its drag-and-drop environment, Query Builder. To create a query, right-click any class with mapped data and drag-and-drop the fields you want to the central panel. To execute the query, click `play`. 

## Create a Query

_Coming soon._

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

### Constants

Constants are static values set to a variable name that can be leveraged within your query. They remain the same for ALL executions.

![Add a constant](../assets/query-builder/constants-simple.gif)

![Add a constant for milestone value](../assets/query-builder/constants-milestoning.gif)

### Filter
_Coming soon._

### Milestoning

![Milestoning](../assets/query-builder/milestoning.gif)

### Watermark

You can add a watermark to your query through the advanced options tab. If a watermark is present, a waterdrop icon will appear on the top left of your query and you can also edit your watermark by clicking that icon. 

![Watermark](../assets/query-builder/watermark.gif)

## Fetch Structure - Tabular Data Structure 

### Projection Columns

_Coming soon._

### Post Filter

You may add a filter that will be applied to your Tabular Data Structure Columns that were defined through the projection panel by adding a post-filter.

![Post Filter](../assets/query-builder/post-filter-simple.gif)
![Post Filter on aggregation](../assets/query-builder/post-filter-aggregation.gif)
![OLAP with Post Filter](../assets/query-builder/post-filter-derived.gif)

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

_Coming soon._

### Apply operations, transformations, and calculations to your datasets in the Query Editor

_Coming soon._

### Execute With Parameters

![Execute Params](../assets/query-builder/execute-params.gif)
![Export Params With Enums](../assets/query-builder/execute-params-enums.gif)

### Export Data

Once you are content with your data, you can also export to other types. For now we support exporting your query results to `CSV`.

![Export CSV](../assets/query-builder/export-csv.gif)

![Export CSV](../assets/query-builder/export-csv-params.gif)

## More
- [Showcase projects](../showcases/showcase-projects.md)
- [Legend Features](../overview/legend-features.md)
- [Legend Glossary](../overview/legend-glossary.md)
- [Reference documentation](../reference/legend-language.md)
- [Studio tutorials](../tutorials/studio-workspace.md)
- [Query tutorials](../tutorials/query-builder.md)
