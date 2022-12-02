# Overview

This directory contains a Docker Compose specification that can be used to spin up an instance of Legend Studio and Legend Query.

# Assumptions

## Localhost

This installer assumes that localhost resolves to where the various Legend JVMs are running and localhost can be reached from a browser. 

If this is not the case, for e.g, Legend containers are being run on a machine accessible only by an IP or other names, all references to localhost, both in the .env and Gitlab OAuth configuration has to be changed.

## Gitlab.com

Out of the box, Legend Studio uses Gitlab for model version control. The installer uses the public gitlab.com instance.

If you do not wish to use gitlab.com, you can use any Gitlab instance. Make sure to change all the GITHUB variables in .env to point to your Gitlab instance.

# Usage Instructions

## Create a Gitlab.com account

Legend uses Gitlab as the identity provider. Create a user account at https://gitlab.com

## Create a Gitlab OAuth application

Create an OAuth application as described here https://docs.gitlab.com/ee/integration/oauth_provider.html

The OAuth application should be configured as follows :

- Redirect URI:

```
http://localhost:6300/callback
http://localhost:6100/api/auth/callback
http://localhost:6100/api/pac4j/login/callback
http://localhost:6201/depot-store/callback
http://localhost:6200/depot/callback
http://localhost:9000/studio/log.in/callback
http://localhost:9001/query/log.in/callback
```

- Enable the "Confidential" check box
- Enable these scopes: openid, profile, api

Save the application and record the application id and secret.

## Set the app id and secret of your Gitlab application

```
export GITLAB_APP_ID=<add your app id>
export GITLAB_APP_SECRET=<add your app secret>
```

## Studio 

Start Studio as follows. 

```
./docker-compose.sh --profile studio up -d
```

After a few minutes, the containers should pass their health checks and be marked as healthy.

```

./docker-compose.sh ps
       Name                     Command                  State                Ports
---------------------------------------------------------------------------------------------
legend-engine        /bin/sh -c java -cp /app/b ...   Up (healthy)   0.0.0.0:6300->6300/tcp
legend-mongodb       docker-entrypoint.sh --auth      Up             0.0.0.0:27017->27017/tcp
legend-sdlc          /bin/sh -c java -cp /app/b ...   Up (healthy)   0.0.0.0:6100->6100/tcp
legend-studio        /bin/sh -c java -cp /app/b ...   Up (healthy)   0.0.0.0:9000->9000/tcp
setup                /setup/setup.sh                  Exit 0```
```

### Use Studio

Once all containers are running, you should be able to access Studio at `http://localhost:9000/studio`

When accessing Studio for the first time, you will see a URL redirect, redirecting you to Gitlab.com to authorize the Legend OAuth application.

Once authorized, you should be able to start using Studio.


### Open a sample project 

In the opening page of Studio, select the "Legend Installer Demo" project or navigate directly to the project using this link http://localhost:9000/studio/setup/40061958

## Run Query

Run Query as follows :
```
./docker-compose.sh --profile query up -d
```

After a few minutes, the containers should pass their health checks and be marked as healthy.

```
./docker-compose.sh ps
       Name                     Command                  State                Ports
---------------------------------------------------------------------------------------------
legend-depot         /app/entrypoint.sh               Up (healthy)   0.0.0.0:6200->6200/tcp
legend-depot-store   /app/entrypoint.sh               Up (healthy)   0.0.0.0:6201->6201/tcp
legend-engine        /bin/sh -c java -cp /app/b ...   Up (healthy)   0.0.0.0:6300->6300/tcp
legend-mongodb       docker-entrypoint.sh --auth      Up             0.0.0.0:27017->27017/tcp
legend-query         /bin/sh -c java -cp /app/b ...   Up (healthy)   0.0.0.0:9001->9001/tcp
legend-sdlc          /bin/sh -c java -cp /app/b ...   Up (healthy)   0.0.0.0:6100->6100/tcp
legend-studio        /bin/sh -c java -cp /app/b ...   Up (healthy)   0.0.0.0:9000->9000/tcp
setup                /setup/setup.sh                  Exit 0

```

### Use Query

Once all containers are running, you should be able to access Studio at `http://localhost:9001/query`

When accessing Studio for the first time, you will see a URL redirect, redirecting you to Gitlab.com to authorize the Legend OAuth application.

Once authorized, you should be able to start using Query.

### Index Projects

Query allows you to access projects that have been indexed by the depot store server.

We have automatically indexed a project into the depot store. If this project is not visible in query, execute the following command.

```
curl -v -X GET "http://localhost:6201/depot-store/api/queue/Legend%20Query%20Demo/org.finos.legend.demo/legend-query/1.0.2?maxRetries=5" -H "accept: text/plain"
```

# Known Issues / Gotchas

In some cases, navigating to the Studio/Query web page can return an "unauthorized" error. This is usually because of stale cookies. Clear browser cookies for localhost (or domain name/IP that you are using) and try again.
