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

_Coming soon._

## More
- [Legend language](../reference/legend-language.md)
- [Reference documentation](../reference/legend-language)
- [Released functions](../reference/released-functions.md)
- [Upcoming functions](../reference/upcoming-functions.md)
- [Legend concepts](../overview/legend-glossary.md)