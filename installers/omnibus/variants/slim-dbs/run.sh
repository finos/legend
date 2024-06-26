#!/bin/bash

source .env

# Usage example of different SDLC modes, set the following environment variables:
# 1. Remote Gitlab with OAuth:
# --env LEGEND_OMNIBUS_CONFIG_SDLC_MODE="gitlab-oauth" --env LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID="$LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID" --env LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET="$LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET" \
# 2. Remote Gitlab with Personal Access Token:
# --env LEGEND_OMNIBUS_CONFIG_SDLC_MODE="gitlab-pat" --env LEGEND_OMNIBUS_CONFIG_GITLAB_PAT="$LEGEND_OMNIBUS_CONFIG_GITLAB_PAT" \

docker run \
	--platform=linux/amd64 \
	-it \
	-p $LEGEND_OMNIBUS_SUPERVISOR_PORT:$LEGEND_OMNIBUS_SUPERVISOR_PORT \
	-p $LEGEND_OMNIBUS_SUPERVISOR_DIRECTORY_SERVER_PORT:$LEGEND_OMNIBUS_SUPERVISOR_DIRECTORY_SERVER_PORT \
	-p $LEGEND_OMNIBUS_NGINX_PORT:$LEGEND_OMNIBUS_NGINX_PORT \
	-p $LEGEND_OMNIBUS_ENGINE_PORT:$LEGEND_OMNIBUS_ENGINE_PORT \
	-p $LEGEND_OMNIBUS_SDLC_PORT:$LEGEND_OMNIBUS_SDLC_PORT \
	-p $LEGEND_OMNIBUS_STUDIO_PORT:$LEGEND_OMNIBUS_STUDIO_PORT \
	-p 6910:5432 \
	--env LEGEND_OMNIBUS_CONFIG_SDLC_MODE="in-memory" \
	legend-omnibus:latest-slim-dbs
