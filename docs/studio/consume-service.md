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

2. Sync workspace.

3. Navigate to **Workflow Builds**.

4. Wait for the build to complete successfully.

5. Expand the generated workflow build to view the workflow details and click on **verify snapshot** to open the associated Gitlab pipeline.

7. In Gitlab, click on **Browse** under the Job artifacts.

8. Click on **artifacts**.

9. Locate the execution jar file and download it.

## Deploy JAR file

The executable JAR file can be used as a dependency to execute your service. 

List the JAR file as a dependency in the Java application. For production use cases, the recommendation is to fetch the JAR file from a published repository (such as the public Maven repo).

## See features in action
![consume a service](../assets/consume-service.gif)