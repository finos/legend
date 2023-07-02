#!/bin/bash

echo "Running Omnibus with Legend SDLC using Gitlab (OAuth) backend..."
if [[ -z "$PS1" ]]; then
  # non-interactive
  if [[ -z "$LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID" ]]; then
    echo "Failed: LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID is not set"
    exit 1
  fi
  if [[ -z "$LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET" ]]; then
    echo "Failed: LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET is not set"
    exit 1
  fi
else
  # interactive
  if [[ -z "$LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID" ]]; then
    echo "Enter Gitlab OAuth application ID:"
    read LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID
  fi
  if [[ -z "$LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET" ]]; then
    echo "Enter Gitlab OAuth application secret:"
    read -s LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET
  fi
fi

if [[ "$LEGEND_OMNIBUS_CONFIG_EXPOSE_BACKEND_PORTS" = true ]]; then
  docker run --platform=linux/amd64 -it -p 6900:6900 -p 6100:6100 -p 6300:6300 \
    --env LEGEND_OMNIBUS_CONFIG_SDLC_MODE="gitlab-oauth" \
    --env LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID="$LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID" \
    --env LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET="$LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET" \
    finos/legend-omnibus:latest-slim
else
  docker run --platform=linux/amd64 -it -p 6900:6900 \
    --env LEGEND_OMNIBUS_CONFIG_SDLC_MODE="gitlab-oauth" \
    --env LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID="$LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID" \
    --env LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET="$LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET" \
    finos/legend-omnibus:latest-slim
fi
