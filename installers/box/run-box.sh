#!/bin/bash

docker run \
	-it \
	\
	-e ENGINE_HOME=/app/engine \
	-e ENGINE_PORT=6300 \
	-e ENGINE_MAVEN_VERSION=3.15.3 \
	-e METADATA_PURE_HOST=unused \
	-e METADATA_PURE_PORT=1234 \
	-e METADATA_ALLOY_HOST=unused \
	-e METADATA_ALLOY_PORT=4567 \
	-e TEMP_DB_PORT=9098 \
	-v `pwd`/engine/config:/app/engine/config \
	-p 6300:6300 \
	\
	-e SDLC_HOME=/app/sdlc \
	-e SDLC_PORT=6100 \
	-e SDLC_MAVEN_VERSION=0.91.1 \
	-e SDLC_ADMIN_PORT=6101 \
	-e SDLC_REDIRECT_URI=http://localhost:6100/api/auth/callback \
	-e SDLC_PROJECT_TAG=legend \
	-e SDLC_PROJECT_ID_PREFIX=^org\.demo\.legend\..+ \
	-e GITLAB_HOST=gitlab.com \
	-e GITLAB_APP_ID=unused \
	-e GITLAB_APP_SECRET=unused \
	-v `pwd`/sdlc/config:/app/sdlc/config \
	-p 6100:6100 \
	\
	-e DEPOT_HOME=/app/depot \
	-e DEPOT_PORT=6200 \
	-v `pwd`/depot/config:/app/depot/config \
	-p 6200:6200 \
	\
	-e STUDIO_HOME=/app/studio \
	-e STUDIO_PORT=9000 \
	-e TAXONOMY_PORT=1234 \
	-e TAXONOMY_HOST=unused \
	-v `pwd`/query/config:/app/query/config \
	-p 9000:9000 \
	\
	-e QUERY_HOME=/app/query \
	-e QUERY_PORT=9001 \
	-v `pwd`/studio/config:/app/studio/config \
	-p 9001:9001 \
	\
	-v `pwd`/nginx/config:/app/nginx/config \
	-p 9876:9876 \
	-p 9020:9020 \
	\
	legend-box
