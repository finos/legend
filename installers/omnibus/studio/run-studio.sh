#!/bin/bash

sed -i 's~${LEGEND_OMNIBUS_GITLAB_PRIVATE_ACCESS_TOKEN}~'$LEGEND_OMNIBUS_GITLAB_PRIVATE_ACCESS_TOKEN'~g' /app/studio/config/config.json
sed -i 's~${LEGEND_OMNIBUS_NGINX_PORT}~'$LEGEND_OMNIBUS_NGINX_PORT'~g' /app/studio/config/config.json

java -cp /app/studio/webapp-content:app/studio/* \
  org.finos.legend.server.shared.staticserver.Server server /app/studio/config/server-config.yml
