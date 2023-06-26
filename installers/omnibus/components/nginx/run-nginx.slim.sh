#!/bin/bash

sed -i 's~${LEGEND_OMNIBUS_NGINX_PORT}~'$LEGEND_OMNIBUS_NGINX_PORT'~g' /app/nginx/config/nginx.slim.cfg
sed -i 's~${LEGEND_OMNIBUS_SUPERVISOR_PORT}~'$LEGEND_OMNIBUS_SUPERVISOR_PORT'~g' /app/nginx/config/nginx.slim.cfg
sed -i 's~${LEGEND_OMNIBUS_SUPERVISOR_DIRECTORY_SERVER_PORT}~'$LEGEND_OMNIBUS_SUPERVISOR_DIRECTORY_SERVER_PORT'~g' /app/nginx/config/nginx.slim.cfg
sed -i 's~${LEGEND_OMNIBUS_ENGINE_PORT}~'$LEGEND_OMNIBUS_ENGINE_PORT'~g' /app/nginx/config/nginx.slim.cfg
sed -i 's~${LEGEND_OMNIBUS_SDLC_PORT}~'$LEGEND_OMNIBUS_SDLC_PORT'~g' /app/nginx/config/nginx.slim.cfg
sed -i 's~${LEGEND_OMNIBUS_STUDIO_PORT}~'$LEGEND_OMNIBUS_STUDIO_PORT'~g' /app/nginx/config/nginx.slim.cfg

cat /app/nginx/config/nginx.slim.cfg

nginx -c /app/nginx/config/nginx.slim.cfg -g "daemon off;"
