---
id: create-service
title: Create a service
sidebar_label: Create a service
---

## Create a new service (beta)
Build services on top of data queries to consume modeled data systematically. To create a service select **New Service** from the drop down menu to launch the **Service Editor**. Please note that the Service Editor is still in beta state and some features may not be fully available yet.

### General Tab

In the **General** tab of the Service Editor, users can specify metadata of their service including URL, documentation and owners. URL parameters can be directly defined within the {} sytnax.

### Execution Tab

In the execution tab, users can create and edit the service query. By hitting the "Edit Query" button, users can edit the query using the **Query Editor**. Users can make changes to the query either in the user-friendly form mode or in text mode.

#### Mapping & Runtime

Specify Mapping and Runtime for the service. 

#### Tests

Auto-generating test data for the service and testing its execution, is **not** yet supported.

### Review the SQL generated from the service

This feature is **not** yet supported.

## Promote a model-to-model mapping query to a service

1. Create a model-to-model mapping (find instructions here) and select the **Promote to Service** icon.

2. Add a name for the service and hit create to launch the Service Editor.

## Promote a relational-to-model query to a service

This feature is not yet supported.

### See features in action

![Create a service](../assets/create-a-service.gif)

## Next steps

- [Create a model](create-model.md)
- [Create a diagram](create-diagram.md)
- [Edit a model](edit-model.md)
