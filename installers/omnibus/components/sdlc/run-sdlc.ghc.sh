#!/bin/bash

# -------------------------- Setup Color -----------------------------
# NOTE: must use `echo -e` to interpret the backslash escapes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No color
# --------------------------------------------------------------------

source /.env

# NOTE: this is temporary until we can switch SDLC backend using the config
main_class=org.finos.legend.sdlc.server.LegendSDLCServer
lib_dir=/app/sdlc/lib

if [[ "$LEGEND_OMNIBUS_CONFIG_SDLC_MODE" = "gitlab-pat" ]]; then
  echo -e "Using remote Gitlab instance with Personal Access Token..."

  if [[ -z "$LEGEND_OMNIBUS_CONFIG_GITLAB_PAT" ]]; then
    echo -e "${RED}LEGEND_OMNIBUS_CONFIG_GITLAB_PAT is required to be set when using remote Gitlab instance with Personal Access Token${NC}"
    exit 1;
  fi

  config_file="config.gitlab-pat.slim.yml"
elif [[ "$LEGEND_OMNIBUS_CONFIG_SDLC_MODE" = "gitlab-oauth" ]]; then
  echo -e "Using remote Gitlab instance with OAuth..."

  if [[ -z "$LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID" ]]; then
    echo -e "${RED}LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID is required to be set when using remote Gitlab instance with OAuth${NC}"
    exit 1;
  fi

  if [[ -z "$LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET" ]]; then
    echo -e "${RED}LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET is required to be set when using remote Gitlab instance with OAuth${NC}"
    exit 1;
  fi

  if [[ -z "$LEGEND_OMNIBUS_CONFIG_BASE_URL" ]]; then
    export LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_REDIRECT_BASE_URL=http://localhost:$LEGEND_OMNIBUS_NGINX_PORT
  else
    export LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_REDIRECT_BASE_URL=$LEGEND_OMNIBUS_CONFIG_BASE_URL
  fi
  config_file="config.gitlab-oauth.slim.yml"
elif [[ "$LEGEND_OMNIBUS_CONFIG_SDLC_MODE" = "in-memory" ]]; then
  # Default to LEGEND_OMNIBUS_CONFIG_SDLC_MODE=in-memory
  LEGEND_OMNIBUS_CONFIG_SDLC_MODE="in-memory"
  echo -e "Using in-memory backend with no authentication..."

  main_class=org.finos.legend.sdlc.server.demo.LegendSDLCServerForDemo
  lib_dir=/app/sdlc-demo/lib
  config_file="config.in-memory.ghc.yml"
else
  LEGEND_OMNIBUS_CONFIG_SDLC_MODE="fileSystem"
  echo -e "Using file system backend with no authentication..."

  main_class=org.finos.legend.sdlc.server.startup.LegendSDLCServerFS
  lib_dir=/app/sdlc-fs/lib
  config_file="config.fileSystem.ghc.yml"
fi

java -cp $lib_dir/*-shaded.jar \
  -XX:+ExitOnOutOfMemoryError \
  -XX:MaxRAMPercentage=60 \
  -Xss4M \
  -Dfile.encoding=UTF8 \
  $main_class server "/app/sdlc/config/$config_file"
