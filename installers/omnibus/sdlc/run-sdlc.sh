#!/bin/bash

source /.env

# make the the environment variables available for the application configuration
export LEGEND_OMNIBUS_GITLAB_URL_SCHEME=$LEGEND_OMNIBUS_GITLAB_URL_SCHEME
export LEGEND_OMNIBUS_GITLAB_URL_HOST=$LEGEND_OMNIBUS_GITLAB_URL_HOST
export LEGEND_OMNIBUS_GITLAB_URL_PORT=$LEGEND_OMNIBUS_GITLAB_URL_PORT

java -cp /app/sdlc/lib/*-shaded.jar \
  -XX:+ExitOnOutOfMemoryError \
  -XX:MaxRAMPercentage=60 \
  -Xss4M \
  -Dfile.encoding=UTF8 \
  org.finos.legend.sdlc.server.LegendSDLCServer server /app/sdlc/config/config.yml
