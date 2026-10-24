---
id: legend-overview
title: What is Legend?
sidebar_label: What is Legend?
---

Legend is an open-source data platform. You describe your data once, as a model, and connect that model to where the data lives. Then you query, share and publish the data in the model's terms instead of the stores'. Legend was built at Goldman Sachs and contributed to [FINOS](https://www.finos.org) in October 2020.

## How Legend works

1. **Model the data.** A model names the business concepts, such as a trade, a firm or a person, with their properties and how they relate to each other. It also states the rules the data must follow. Models are written in the [Legend language](../reference/legend-language.md), so they are code: kept in a project, reviewed, versioned and tested.
2. **Connect the model to the data.** A mapping ties the model to a store: a relational database such as Snowflake, Databricks, BigQuery or Postgres, files in formats such as JSON, XML or CSV, or HTTP services. A runtime says which connection to use for each store.
3. **Query the data.** Queries are written against the model. The engine compiles each query into an execution plan, runs it against the stores, for example as SQL, and returns the results in the model's terms. Tabular data can also be queried directly with the [Relation API](../reference/legend-relation.md) or with [Legend SQL](../reference/legend-sql.md).
4. **Share the data.** A query can become a service, which other applications call as an API. A function can be activated to run elsewhere, for example as a Snowflake app. A data product publishes data for others to find and request access to.

Because the model, the mappings and the tests live together, everyone who uses the data sees the same definitions, and a change is reviewed and tested before anyone depends on it.

## Applications

| Application | What it's for |
| --- | --- |
| **Legend Studio** | Edit a project: its models, mappings, connections, services, data products and tests. Review changes, then release a version. |
| **Legend Query** | Build and save queries with a drag-and-drop query builder, starting from a data space, a data product or a service. |
| **Legend DataCube** | Explore query results in a grid: filter, sort, group, pivot and add columns. |
| **Legend Analytics** | Build a query as a chain of steps on a canvas, with [Legend Cube](/guides/cube). |
| **Legend Marketplace** | Find data products and request access to them. |
| **Legend REPL** | Run Legend language expressions from a terminal, and see their results in DataCube. |
| **Legend Pure IDE** | Write and run Legend language code against the Pure runtime. It is used to develop the language itself. |

## Servers

| Server | What it does |
| --- | --- |
| **Legend Engine** | Compiles models, generates execution plans and runs them against stores. It also runs services and activates functions. |
| **Legend SDLC** | Keeps each project in a GitLab repository, with workspaces, reviews and released versions. |
| **Legend Depot** | Stores released versions of projects, so that projects can depend on each other and applications can query them. |

The code for all of them is on GitHub: [legend-studio](https://github.com/finos/legend-studio) for the applications, and [legend-engine](https://github.com/finos/legend-engine), [legend-sdlc](https://github.com/finos/legend-sdlc), [legend-depot](https://github.com/finos/legend-depot) and [legend-pure](https://github.com/finos/legend-pure) for the servers and the language.

## Where to go next

- [Get Started](../getting-started/introduction-to-legend.md) to try Legend or install it.
- The [Glossary](./legend-glossary.md) for the terms used across Legend.
- [Showcase projects](../showcases/showcase-projects.md), small working examples of each feature.
- The [Studio](../tutorials/studio-workspace.md) and [Query](../tutorials/query-builder.md) tutorials, and the [Legend Cube](/guides/cube) guide.
