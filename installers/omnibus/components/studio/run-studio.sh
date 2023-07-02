#!/bin/bash

source /.env

sed -i 's~${LEGEND_OMNIBUS_GITLAB_PERSONAL_ACCESS_TOKEN}~'$LEGEND_OMNIBUS_GITLAB_PERSONAL_ACCESS_TOKEN'~g' /app/studio/config/config.json

if [[ -z "$LEGEND_OMNIBUS_CONFIG_BASE_URL" ]]; then
  sed -i 's~${LEGEND_OMNIBUS_NGINX_PORT}~'$LEGEND_OMNIBUS_NGINX_PORT'~g' /app/studio/config/config.json
else
  # Assume that Studio is being served from the same host, therfore, make all paths relative
  sed -i 's~http://localhost:${LEGEND_OMNIBUS_NGINX_PORT}~''~g' /app/studio/config/config.json
fi

java -cp /app/studio/webapp-content:app/studio/* \
  org.finos.legend.server.shared.staticserver.Server server /app/studio/config/server-config.yml
