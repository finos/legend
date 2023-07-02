#!/bin/bash

if [[ "$EXPOSE_BACKEND_PORTS" = true ]]; then
  docker run --platform=linux/amd64 -it -p 6900:6900 -p 6100:6100 -p 6300:6300 \
  finos/legend-omnibus:latest-slim
else
  docker run --platform=linux/amd64 -it -p 6900:6900 finos/legend-omnibus:latest-slim
fi
