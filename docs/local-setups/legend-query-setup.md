# Purpose
Documentation to set up Legend Depot, Legend Studio, Legend Engine, Legend SDLC, Legend Query


# Ports 

Ports will be assigned as followed: 
- 6060 -> `Legend Engine`
- 7070 -> `Legend SDLC`
- 8080 -> `Legend Studio`
- 8081 -> `Legend Query`
- 8075 -> `Legend Depot`
- 8076 -> `Legend Depot Store`
- 27017 -> Mongo


# Setting up gitlab




## Add applications to gilab
For authenication we will use gitlab.com as our oAuth provider. Add a new application and add the following callback urls

```
http://localhost:7070/api/auth/callback
http://localhost:7070/api/pac4j/login/callback
http://localhost:8080/api/auth/callback
http://localhost:8080/api/pac4j/login/callback
http://localhost:8080/studio/log.in/callback
http://127.0.0.1:8076/depot-store/callback

```



# Legend SDLC

## Build Info
* version: 0.85.0 
* repo: https://github.com/finos/legend-sdlc

## Build Steps
1. Run maven install/build (disable tests)
2. Run `org.finos.legend.sdlc.server.LegendSDLCServer` with args `server legend-sdlc-server/src/test/resources/config-test.yaml`
3. Sample config provided [sdlc config](./sample-legend-sdlc-config.yaml) (Replace gitlab appId and secretID with the one associated with your gitlab application).

# Legend Engine

## Build Info
- commitHash: 
- repo: https://github.com/finos/legend-engine

## Build Steps
1. Run maven install/build (disable tests)
2.  Run `org.finos.legend.engine.server.Server` with args `server legend-engine-server/src/test/resources/org/finos/legend/engine/server/test/userTestConfig.json`
3. Sample config provided [engine config](./sample-legend-engine-config.json)

# Legend Studio
## Build Info

- commitHash: 
- repo: https://github.com/finos/legend-studio

## Build Steps
1. run `yarn install && yarn setup && yarn dev`. This will bring legend studio up on port 8080. 
2. config will be auto generated and will be placed in directory `packages\legend-application-studio-deployment\dev\config.json`.
3. Sample config provided [studio config](./sample-legend-studio-config.json)




# Setup Gitlab Project to Publish
Open Project you plan to run this POC with. There are some issues with the gitlab ci files generated and the main pom file. This is due to an existing bug we plan to fix in the near future. To fix do the following

- Ensure you are updated to the latest project structure (12.2) and merge to master
- Manually change the version of  `platform.legend.engine.version` to 3.9.0 see: https://gitlab.com/p948/LegendPipelinePOC/-/commit/cda1af3239f11ada2e28982574827c463ed7c6e5. **No need to change any other version as the maven version plugin will fetch latest version during build**
- Change gitlab ci gile to the provided sample ci file [gitlab project ci file](./sample-gitlab-ci-file.yaml). This change will add publishing steps to your build to publish to your gitlab repo. Please change the groupId if you are publishing to a different group than [Legend Pipeline Testing](https://gitlab.com/p948).
- For all manual changes in your project you can use the gitlab  web IDE. 
- To test your changes create elements into your project and merge to master. You should see master-SNAPSHOT artifacts being published to your repo. [Example](https://gitlab.com/p948/LegendPipelinePOC/-/packages).
- Once confirmed, you can use the studio UI to create releases. Once build completed for the releases you should see those appear as well. [Example](https://gitlab.com/p948/LegendPipelinePOC/-/packages).


** Please verify your repo has the packages you expect otherwise `Legend Depot` will not pick them up.**

# Depot/Depot Store

## Build Info
- commitHash: 
- repo: https://github.com/finos/legend-depot

## Mongo Setup
1. Make sure you have mongo downloaded
2. create connection on `localhost:27017`
3. create database `depot-dev`

## Build Setup - Legend Depot Store
1. Run maven install/build (disable tests)
2. Add gitlab handle to `legend-depot-store-server/src/main/resources/authorisedIdentities.json`, see [sample](./sample-legend-depot-store-authorisedIdentities.json).
3. Update gitlab repo settings `legend-depot-store-server/src/test/resources/sample-repository-settings.xml`, see [sample](./sample-depot-store-repository-settings.xml). If you are fetching from a different repo please replace the groupID in the file.
3. Run `org.finos.legend.depot.store.server.LegendDepotStoreServer` with args `server legend-depot-store-server/src/test/resources/sample-server-config.json`
4. Use sample [depot store config](./sample-legend-depot-store-config.json). Replace the clientId to gitlab appId and secret with your gitlab secret.
5. Open [swagger page](http://127.0.0.1:8076/depot-store/api/swagger)
6. Register your project with depot store. Use [queue api](http://127.0.0.1:8076/depot-store/api/swagger#/Notifications/queueEvent).  i.e `{groupId}:{artifactID}:master-SNAPSHOT`, `{groupId}:{artifactID}:1.0.0`. Call this api for each version you want depot to fetch entities for.
7.  You can use this [api](http://127.0.0.1:8076/depot-store/api/swagger#/Notifications/getAllEventsInQueue) to see all queue events 


## Build Setup - Legend Depot 
1. Run `org.finos.legend.depot.server.LegendDepotServer` with args `server legend-depot-store-server/src/test/resources/sample-server-config.json`
2. Use sample [depot config](./sample-legend-depot-config.json)
3. You can test to see your entities are being picked up by legend depot through these [apis](http://localhost:8075/depot/api/swagger#/Entities).


# Legend Query 
- commitHash: 
- repo: https://github.com/finos/legend-studio

# Build Setup
1. if you have already built studio in the first step, all you have to run is `yarn dev:query`. This will bring up stand alone query 
2. config will be auto generated and will be placed in directory  packages\legend-application-query-deployment\dev\config.json. See [sample](./sample-legend-studio-config.json).
3. Upon home page click `create new query` (last option). You choudl see the groupId, artifact ids for any projects you have published entities for. If you have projects with mapping/runtime, they will show up there so you can query from there.








