#!/bin/bash

source /.env

sed -i 's~${LEGEND_OMNIBUS_GITLAB_PERSONAL_ACCESS_TOKEN}~'$LEGEND_OMNIBUS_CONFIG_GITLAB_PAT'~g' /app/studio/config/config.json

if [[ "$LEGEND_OMNIBUS_CONFIG_STUDIO_CONFIG_USE_RELATIVE_URL" = true ]]; then
  sed -i 's~http://localhost:${LEGEND_OMNIBUS_NGINX_PORT}~''~g' /app/studio/config/config.json
else
  sed -i 's~${LEGEND_OMNIBUS_NGINX_PORT}~'$LEGEND_OMNIBUS_NGINX_PORT'~g' /app/studio/config/config.json
fi

java -cp /app/studio/webapp-content:app/studio/* \
  org.finos.legend.server.shared.staticserver.Server server /app/studio/config/server-config.yml
