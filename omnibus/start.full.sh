#!/bin/bash

if [[ "$LEGEND_OMNIBUS_CONFIG_EXPOSE_BACKEND_PORTS" = true ]]; then
  docker run --platform=linux/amd64 -it -p 6900:6900 -p 6100:6100 -p 6300:6300 \
  finos/legend-omnibus:latest
else
  docker run --platform=linux/amd64 -it -p 6900:6900 finos/legend-omnibus:latest
fi
