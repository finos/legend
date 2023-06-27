#!/bin/bash

source /.env

MAIN_CLASS=org.finos.legend.sdlc.server.LegendSDLCServer
LIB_DIR=$/app/sdlc/lib


if [[ "$LEGEND_OMNIBUS_CONFIG_SDLC_MODE" = "gitlab-pat" ]]; then
  echo -e "\e[33mUsing Legend SDLC using remote Gitlab instance with Personal Access Token...\e[0m"

  if [[ -z "$LEGEND_OMNIBUS_CONFIG_GITLAB_PAT" ]]; then
    echo -e "\e[31mLEGEND_OMNIBUS_CONFIG_GITLAB_PAT is required to be set when using remote Gitlab instance with Personal Access Token\e[0m"
    exit 1;
  fi

  config_file="config.gitlab-pat.slim.yml"
elif [[ "$LEGEND_OMNIBUS_CONFIG_SDLC_MODE" = "gitlab-oauth" ]]; then
  echo -e "\e[33mUsing Legend SDLC using remote Gitlab instance with OAuth...\e[0m"

  if [[ -z "$LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID" ]]; then
    echo -e "\e[31mLEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID is required to be set when using remote Gitlab instance with OAuth\e[0m"
    exit 1;
  fi

  if [[ -z "$LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET" ]]; then
    echo -e "\e[31mLEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET is required to be set when using remote Gitlab instance with OAuth\e[0m"
    exit 1;
  fi

  config_file="config.gitlab-oauth.slim.yml"
elif [[ "$LEGEND_OMNIBUS_CONFIG_SDLC_MODE" = "in-memory" ]]; then
  echo -e "\e[33mUsing Legend SDLC using in-memory backend with no authentication...\e[0m"

  MAIN_CLASS=org.finos.legend.sdlc.server.demo.LegendSDLCServerForDemo
  LIB_DIR=/app/sdlc-demo/lib

  config_file="config.memory.slim.yml"
else
  echo -e "\e[31mUnsupported Legend SDLC mode ${LEGEND_OMNIBUS_CONFIG_SDLC_MODE} \e[0m"
  exit 1;
fi

java -cp $LIB_DIR/*-shaded.jar \
  -XX:+ExitOnOutOfMemoryError \
  -XX:MaxRAMPercentage=60 \
  -Xss4M \
  -Dfile.encoding=UTF8 \
  $MAIN_CLASS server "/app/sdlc/config/$config_file"
