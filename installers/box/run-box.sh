#!/bin/bash

docker run \
	-it \
	-p 27017:27017 -p 6100:6100 -p 6200:6200 -p 6300:6300 -p 9000:9000 -p 9001:9001 -p 9876:9876 -p 9020:9020 \
	-e STUDIO_HOME=/app/studio \
	-e MONGO_HOME=/app/mongo \
	-e ENGINE_HOME=/app/engine \
	-e SDLC_HOME=/app/sdlc \
	-e QUERY_HOME=/app/query \
	-e DEPOT_HOME=/app/depot \
	-e MONGODB_URI=mongodb://localhost:27017 -e MONGO_SESSION_ENABLED=false -e MONGODB_NAME=legend \
	-e ENGINE_PORT=6300 \
	-e SDLC_PORT=6100 \
	-e SDLC_ADMIN_PORT=6101 \
	-e ENGINE_MAVEN_VERSION=3.15.3 \
	-e SDLC_MAVEN_VERSION=0.91.1 \
	-e SDLC_REDIRECT_URI=http://localhost:6100/api/auth/callback \
	-e SDLC_PROJECT_TAG=legend \
	-e SDLC_PROJECT_ID_PREFIX=^org\.demo\.legend\..+ \
	-e METADATA_PURE_HOST=unused -e METADATA_PURE_PORT=1234 \
	-e METADATA_ALLOY_HOST=unused -e METADATA_ALLOY_PORT=4567 \
	-e DEPOT_PORT=6200 \
	-e STUDIO_PORT=9000 \
	-e QUERY_PORT=9001 \
	-e GITLAB_HOST=gitlab.com \
	-e GITLAB_APP_ID=unused \
	-e GITLAB_APP_SECRET=unused \
	-e TEMP_DB_PORT=9098 \
	-e TAXONOMY_HOST=unused -e TAXONOMY_PORT=1234 \
	-v `pwd`/nginx/config:/app/nginx/config \
	-v `pwd`/mongo/config:/app/mongo/config \
	-v `pwd`/engine/config:/app/engine/config \
	-v `pwd`/sdlc/config:/app/sdlc/config \
	-v `pwd`/depot/config:/app/depot/config \
	-v `pwd`/studio/config:/app/studio/config \
	-v `pwd`/query/config:/app/query/config \
	legend-box
