---
id: consume-service
title: Consume a service
sidebar_label: Consume a service
---

Consume data services via **executable service JAR files**. As part of the project build, an executable JAR file is generated for each service defined in the project. The executable service JAR file will be published in the Gitlab project that stores the data model code. The JAR file can be consumed by any Java application.

## Creating and Consuming a service execution JAR file

### Create and locate a JAR file

See below steps how to create and locate an executable JAR file for consumption in Studio.

1. Create a data service. Find instructions here.

2. Sync workspace

3. Navigate to **Builds**

4. Wait for the build to complete successfully.

5. Double click on the build to open the associated Gitlab pipeline

6. Click on **verify snapshot**

7. Click on **Browse**

8. Click on **artifacts**

9. Locate the execution jar file and download it.

## Deploy JAR file

The executable JAR file can be used as a dependency to execute your service. 

1. Unzip the JAR file to review its content.

2. List the JAR file as a dependency in the Java application. For production use cases, the recommendation is to fetch the JAR file from a published repository (such as the public Maven repo).

## See features in action

## Next steps

- [Create a model](create-model.md)
- [Create a diagram](create-diagram.md)
- [Edit a model](edit-model.md)
