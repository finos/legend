# USER JOURNEY #1: Describe business concepts & relationships

## Overview 

TODO: add image or diagram representing user journey flow

TODO: describe user journey, what you can do with Legend + hyperlink to tutorials + why this user journey is relevant/impactful

## Describe business concepts and relationships in a data model
- Describe business concepts and how they relate to each other in a data model
- Create a project where your data model is stored
- Create a model. Build a data model to curate and visualize data relationships. 
- Visualize your data model and edit it
- Create an association: create a relationship between two data concepts and navigate bi-directionally when querying your data

### Relevant tutorials
- [model creation](../tutorials/studio-create-model.md) tutorial  
- [data modeling and Studio concepts](../concepts/legend-concepts)
- [workspace creation](../tutorials/studio-create-model.md/#workspace) tutorial
- [diagram creation](../tutorials/studio-create-diagram) tutorial
- [association creation](../tutorials/studio-create-association.md) tutorial

## Manage your data model
- Manage your data model information and workspaces

### Relevant tutorials
- [model information and workspace management](../tutorials/studio-manage-model-information.md) tutorial

## Make changes to your data model

- Make changes to your data model. Safely make changes to your data model and release a new version for your data consumers.
- Save changes to your data model, create a review and get it approved
- Load the latest changes from master into your workspace
- Release a new version of your data model and make it available to consumers

### Relevant tutorials
- [SDLC tutorial](../tutorials/studio-sdlc.md)

## Troubleshoot

- Troubleshoot issues with your data model
- Navigate quickly to the underlying GitLab project
- Share your project with others in read-only mode
- Troubleshoot, inspect your code, and make changes to your data model in Text Mode

## Relevant tutorials
- [SDLC tutorial](../tutorials/studio-sdlc.md).

## Features
TODO: add link to glossary
- Package
- Model
- Class
- Enumeration
- Profile
- Association
- Diagram
- Workspace
- SDLC

## Showcase project
- TODO: add link to showcase project

# USER JOURNEY #2: Discover, re-use, and share models

## Overview 

TODO: add image or diagram representing user journey flow

TODO: describe user journey, what you can do with Legend + hyperlink to tutorials + why this user journey is relevant/impactful

Discover, access and re-use existing models, classes, mappings, runtimes, functions. Recommend a way for others to access your models, classes, mappings, runtimes, functions, and share helpful information about your data with consumers.

## Discover and re-use/consume

- Find an existing project to make edits to the data model
- Re-use classes, mappings, and runtimes that make sense for your data model
- Connect your model to another model to de-duplicate modeling efforts and use recommended datasets and models.
- Add a project/data model dependency to your data model and resolve project dependency conflicts 
- Re-use transformation logic as part of your mappings or services by defining a customized function

### Relevant tutorials
- [model discovery](../tutorials/studio-find-models.md) tutorial
- [model-to-model mapping](../tutorials/studio-m2m-mapping) tutorial
- [project dependency](../tutorials/studio-project-dependencies.md) tutorial
- [function definition](../tutorials/studio-define-function.md) tutorial

## Share what you produced

- Recommend a way to access your data and share helpful information about your data with consumers
- Release a new version of your data model and make it available to consumers
- Share your project with others in read-only mode
- Generate files

### Relevant tutorials
- [SDLC](../tutorials/studio-sdlc.md) tutorial
- [File Generation](../tutorials/studio-file-generation.md) tutorial

## Features
- Mapping
- Mapping Editor
- Function
- File Generation
- Generation Specification

## Showcase project
- TODO: add link to showcase project


# USER JOURNEY #3: Connect your model to data

## Overview 

TODO: add image or diagram representing user journey flow

TODO: describe user journey, what you can do with Legend + hyperlink to tutorials + why this user journey is relevant/impactful

- Connect your data model to data.
- Connect your data model to a relational data store
- Connect your data to a semi-structured file
- Connect your data model to an API (Service store)

### Relevant tutorials
- [relational mapping](../tutorials/studio-relational-mapping.md) and [relational test data](../tutorials/studio-create-test-data.md/#relational) tutorials
- [model to files connection](../tutorials/studio-connect-files) tutorial
- [service store](../tutorials/studio-servicestore) tutorial

## Features
- Mapping
- Mapping Editor
- Runtime
- Connection
- Flat-Data Schema
- Flat-Data Store
- Relational Database
- Data
- Binding (?)

## Showcase project
- TODO: add link to showcase project


# USER JOURNEY #4: Query data

## Overview 

TODO: add image or diagram representing user journey flow

TODO: describe user journey, what you can do with Legend + hyperlink to tutorials + why this user journey is relevant/impactful

- Create and run a query
- Open an existing query
- Edit query
- Dataspaces/create query from a dataspace
- Query data as of specific dates and times
- Run queries with parameters
- Filter your queries
- Test querying your data model before making it available to consumers
- Debug/troubleshoot issues with your query by reviewing execution details (Plan View)

### Relevant tutorials
- [query creation & query running](../tutorials/query-tutorial.md) tutorial
- [date- and time-specific queries](../tutorials/query-specific-dates-times.md) tutorial
- [parameterized query](../tutorials/query-build-run-parameter-query.md) tutorial
- [query filtering](../tutorials/query-filter.md) tutorial
- [query creation & query running](../tutorials/query-tutorial.md/#test-querying-your-data-model) tutorial
- [SDLC](../tutorials/studio-sdlc/#troubleshoot-issues-with-your-data-model-query-or-service) tutorial

## Features
- Query Builder
- Query Editor
- Data Spaces

## Showcase project
- TODO: add link to showcase project


# USER JOURNEY #5: Consume and transform datasets

## Overview 

TODO: add image or diagram representing user journey flow

TODO: describe user journey, what you can do with Legend + hyperlink to tutorials + why this user journey is relevant/impactful

- Define how your datasets are transformed and stored
- Apply operations, transformations, and calculations to your datasets in the Query Editor
- Import a database schema and model it in Studio (?)

### Relevant tutorials

- [dataset transformation and storage](../tutorials/studio-define-dataset-transformation-storage) tutorial
- [dataset transformation](../tutorials/query-transform-datasets.md) tutorial
- [database schema import](../tutorials/studio-import-database-schema.md) tutorial.

## Features
- TODO: add features

## Showcase project
- TODO: add link to showcase project


# USER JOURNEY #6: Send and receive data from multiple sources

## Overview 

TODO: add image or diagram representing user journey flow

TODO: describe user journey, what you can do with Legend + hyperlink to tutorials + why this user journey is relevant/impactful

- Define a data service querying your data model and define tests to ensure it does not break
- Create a service
- Query and edit a service query in the Query Editor
- Retrieve services metadata via API endpoints

### Relevant tutorials
- [service creation](../tutorials/services-create-service.md) tutorial
- [service query editing](../tutorials/query-edit-service-query.md) tutorial
- [service metadata retrieval](../tutorials/services-retrieve-service-metadata.md) tutorial

## Features
- Service
- Connection
- Mapping
- Mapping Editor
- Runtime

## Showcase project
- TODO: add link to showcase project

# USER JOURNEY #7: Analyze data

## Overview 

TODO: add image or diagram representing user journey flow

TODO: describe user journey, what you can do with Legend + hyperlink to tutorials + why this user journey is relevant/impactful

- Consume Legend models & services using Business Intelligence and Machine Learning tools

## Features
- TODO: add features

## Showcase project
- TODO: add link to showcase project


# USER JOURNEY #8: Test & Troubleshoot Models, Queries and Services

TODO: add image or diagram representing user journey flow

TODO: describe user journey, what you can do with Legend + hyperlink to tutorials + why this user journey is relevant/impactful

- Test & Troubleshoot Models, Queries and Services
- Create a unit test for the feature you are using so that Platform upgrades do not cause your projects to break
- Review available unit tests to understand Legend/PURE grammar functionality
- Run all your tests globally across the project

### Relevant tutorials 
- [unit test](../tutorials/studio-unit-tests) tutorial
- [test running](../tutorials/studio-run-tests) tutorial

## Features
- Text mode
- Mapping editor (mapping tests)

## Showcase project
- n/a (?)



# USER JOURNEY #9: Developer

## Overview

TODO: add image or diagram representing user journey flow

TODO: describe user journey, what you can do with Legend + hyperlink to tutorials + why this user journey is relevant/impactful

- Install your own Legend

## Features
- Text mode

## Reference documentation
- TODO: link to reference docs









