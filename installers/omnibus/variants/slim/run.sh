#!/bin/bash

source .env

if [[ -z "$LEGEND_OMNIBUS_SDLC_MODE" ]]; then
  # TODO: support in-memory backend as default when we have official support for configurable backend
  echo "Using Legend SDLC using in-memory backend is currently not supported, please specify LEGEND_OMNIBUS_SDLC_MODE (possible values: gitlab-pat, gitlab-oauth)"
  exit 1;
fi

# Usage example of different SDLC modes, set the following environment variables:
# 1. Remote Gitlab with OAuth:
# --env LEGEND_OMNIBUS_SDLC_MODE="gitlab-oauth" --env LEGEND_OMNIBUS_GITLAB_OAUTH_APPLICATION_ID="$LEGEND_OMNIBUS_GITLAB_OAUTH_APPLICATION_ID" --env LEGEND_OMNIBUS_GITLAB_OAUTH_APPLICATION_SECRET="$LEGEND_OMNIBUS_GITLAB_OAUTH_APPLICATION_SECRET" \
# 2. Remote Gitlab with Private Access Token:
# --env LEGEND_OMNIBUS_SDLC_MODE="gitlab-pat" --env LEGEND_OMNIBUS_GITLAB_PAT="$LEGEND_OMNIBUS_GITLAB_PAT" \

docker run \
	--platform=linux/amd64 \
	-it \
	-p $LEGEND_OMNIBUS_SUPERVISOR_PORT:$LEGEND_OMNIBUS_SUPERVISOR_PORT \
	-p $LEGEND_OMNIBUS_SUPERVISOR_STATUS_CHECKER_PORT:$LEGEND_OMNIBUS_SUPERVISOR_STATUS_CHECKER_PORT \
	-p $LEGEND_OMNIBUS_NGINX_PORT:$LEGEND_OMNIBUS_NGINX_PORT \
	-p $LEGEND_OMNIBUS_ENGINE_PORT:$LEGEND_OMNIBUS_ENGINE_PORT \
	-p $LEGEND_OMNIBUS_SDLC_PORT:$LEGEND_OMNIBUS_SDLC_PORT \
	-p $LEGEND_OMNIBUS_STUDIO_PORT:$LEGEND_OMNIBUS_STUDIO_PORT \
	legend-omnibus:latest-slim
