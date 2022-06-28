---
id: maven-install-guide
title: Maven Install Guide
sidebar_label: Maven Install Guide
---

The Legend platform has several components. The minimum required to run Legend are `Engine`, `SDLC`, and `Studio`. These components include:

- **Engine**: Provides a Pure parser and compiler that executes plans when provided with a Pure function, a mapping, and a runtime. It's also an access point for model transformers written using the Legend language.
- **SDLC**: Provides a rich REST API letting users manage metadata. Most SDLCs are file and text-centric, but the Legend SDLC is model-centric, meaning users interact with model entities rather than with files and folders. The Legend SDLC enables:
  - Users to develop with tools designed for editing models (rather than files or code).
  - Users to view changes with tools designed for viewing model-level changes (rather than text changes).
  - Clients to create their own tools for their own use cases.
- **Studio**: Provides a way to describe and connect data in business terms to create data models.
- **Pure**: Provides a way to alter Pure, the underlying language for Legend.
- **Shared**: Provides shared code used across Legend apps for generic server-side functionality, such as serving static files, performing authentication, and so on.

## Prerequisites

- A GitLab.com account or your own GitLab server.

  Create an _Application_ by navigating to `User Settings > Applications` and create an application with the following parameters:

  - Name: Legend Demo
  - Enable the "Confidential" check box
  - Enable these scopes: openid, profile, api
  - Redirect URI: Add the followings:

```sh
http://localhost:7070/api/auth/callback
http://localhost:7070/api/pac4j/login/callback
```

- Java Development Kit (JDK) 11 or later.
- Maven 3.6 or later.

## Installation steps

### Setup **legend-engine**.

From the root directory of the `legend-engine` repo, follow the steps below in order:

```sh
mvn install [-DskipTests]
```

```sh
java -cp legend-engine-server/target/*-shaded.jar org.finos.legend.engine.server.Server server legend-engine-server/src/test/resources/org/finos/legend/engine/server/test/userTestConfig.json
```

Test by going to http://localhost:6060 in a browser. The Swagger page can be accessed at http://localhost:6060/api/swagger.

### Setup **legend-sdlc**.

Create a configuration file based on your particular environment. This can be JSON or YAML.

A [sample configuration file](https://github.com/finos/legend-sdlc/blob/master/legend-sdlc-server/src/test/resources/config-sample.yaml) is included to help you get started. You will need to replace some `placeholders`, such as Gitlab instance your SDLC server is pointing at.

From the root directory of the `legend-sdlc` repo, follow the steps below in order:

```sh
mvn install [-DskipTests]
```

```sh
# Make sure to replace <path-to-config>
java -cp legend-sdlc-server/target/*-shaded.jar org.finos.legend.sdlc.server.LegendSDLCServer server <path-to-config>
```

Test by going to http://localhost:7070/api/info in the browser. The page should return basic server information.

Visit http://localhost:7070/api/auth/authorize in your browser, you might get redirected to the Gitlab login page or a Gitlab page that askes you to authorize Legend application. After you authenticate/authorize you should be redirected back to SDLC.

### Setup **legend-depot**.

Follow this [guide](https://github.com/finos/legend-depot/blob/master/README.md#getting-started) on how to start local Depot.

### Setup **legend-studio**.

Follow this [guide](https://github.com/finos/legend-studio/blob/master/README.md#getting-started) on how to start local Studio.


### You're all set :tada:

Visit http://localhost:8080/studio and start hacking!
