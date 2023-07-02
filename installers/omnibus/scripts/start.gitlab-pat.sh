#!/bin/bash

echo "Running Omnibus with Legend SDLC using Gitlab (PAT) backend..."
if [[ -z "$LEGEND_OMNIBUS_CONFIG_GITLAB_PAT" ]]; then
  echo "Failed: LEGEND_OMNIBUS_CONFIG_GITLAB_PAT is not set"
  exit 1
fi

if [[ "$EXPOSE_BACKEND_PORTS" = true ]]; then
  docker run --platform=linux/amd64 -it -p 6900:6900 -p 6100:6100 -p 6300:6300 \
    --env LEGEND_OMNIBUS_CONFIG_SDLC_MODE="gitlab-pat" \
    --env LEGEND_OMNIBUS_CONFIG_GITLAB_PAT="$LEGEND_OMNIBUS_CONFIG_GITLAB_PAT" \
    finos/legend-omnibus:latest-slim
else
  docker run --platform=linux/amd64 -it -p 6900:6900 \
    --env LEGEND_OMNIBUS_CONFIG_SDLC_MODE="gitlab-pat" \
    --env LEGEND_OMNIBUS_CONFIG_GITLAB_PAT="$LEGEND_OMNIBUS_CONFIG_GITLAB_PAT" \
    finos/legend-omnibus:latest-slim
fi
