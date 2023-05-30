#!/bin/bash

sed -i 's~${LEGEND_OMNIBUS_NGINX_PORT}~'$LEGEND_OMNIBUS_NGINX_PORT'~g' /app/nginx/config/nginx.cfg
sed -i 's~${LEGEND_OMNIBUS_SUPERVISOR_PORT}~'$LEGEND_OMNIBUS_SUPERVISOR_PORT'~g' /app/nginx/config/nginx.cfg
sed -i 's~${LEGEND_OMNIBUS_SUPERVISOR_STATUS_CHECKER_PORT}~'$LEGEND_OMNIBUS_SUPERVISOR_STATUS_CHECKER_PORT'~g' /app/nginx/config/nginx.cfg
sed -i 's~${LEGEND_OMNIBUS_GITLAB_PORT}~'$LEGEND_OMNIBUS_GITLAB_PORT'~g' /app/nginx/config/nginx.cfg
sed -i 's~${LEGEND_OMNIBUS_ENGINE_PORT}~'$LEGEND_OMNIBUS_ENGINE_PORT'~g' /app/nginx/config/nginx.cfg
sed -i 's~${LEGEND_OMNIBUS_SDLC_PORT}~'$LEGEND_OMNIBUS_SDLC_PORT'~g' /app/nginx/config/nginx.cfg
sed -i 's~${LEGEND_OMNIBUS_PURE_IDE_PORT}~'$LEGEND_OMNIBUS_PURE_IDE_PORT'~g' /app/nginx/config/nginx.cfg
sed -i 's~${LEGEND_OMNIBUS_STUDIO_PORT}~'$LEGEND_OMNIBUS_STUDIO_PORT'~g' /app/nginx/config/nginx.cfg

cat /app/nginx/config/nginx.cfg

nginx -c /app/nginx/config/nginx.cfg -g "daemon off;"
