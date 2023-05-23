---
id: studio-tests
title: Tests
sidebar_label: Studio Tests
---

## Review available unit tests

Review available unit tests to understand Legend/PURE grammar functionality.

_Tutorial coming soon._

## Create a unit test 

Create a unit test for the feature you are using so that Platform upgrades do not cause your projects to break.

_Tutorial coming soon._

## Create Test Data

Data Elements are top level elements that define test data for store/external formats. They are useful for sharing test data among different tests.

### Relational
Test data for relational is defined through CSV values for each table, which is to be used when a user is sourcing data from relational databases. The name of the schema, the table, and the related CSV values must all be specified. Additionally, the primary keys have to be distinct.

![data-element-relational-sample-database](../assets/create-a-data-element-relational-sample-database.png)
![data-element-relational-person-table](../assets/create-a-data-element-relational-person-table.png)
![data-element-relational-firm-table](../assets/create-a-data-element-relational-firm-table.png)

### External Format (model-to-model)
Test data for model to model can be defined through external format. Provides test data for properties of source classes that are being used in the mapping.

   ![Create a data element](../assets/create-a-data-element-external-format-m2m.gif)

### Service Store
`UrlPath` in `Service Request Pattern` is the root path defined in the `Service Group` of `Service Store`, and the path specified in the service for which this data element is created.

`Service Response Definition` panel provides test data for all used properties in the chosen format. Details below:

   ![data-element-service-store](../assets/create-a-service-store-data-element.gif)


## Run all your tests globally across the project

You can run all saved tests across your Studio project at the same time in the new "testables" section. Previously, users needed to navigate to the Service or Mapping editor respectively to run tests. This will be hugely beneficial when testing how changes to your data model may impact data feeds or ad-hoc data queries of your data consumers. More details and **video walkthrough** [here](https://github.com/finos/legend-studio/pull/1114).

## More
- [Showcase projects](../showcases/showcase-projects.md)
- [Legend Features](../overview/legend-features.md)
- [Legend Glossary](../overview/legend-glossary.md)
- [Reference documentation](../reference/legend-language.md)
- [Studio tutorials](../tutorials/studio-workspace.md)
- [Query tutorials](../tutorials/query-builder.md)