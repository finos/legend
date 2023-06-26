#!/bin/bash

source /.env

if [[ "$LEGEND_OMNIBUS_CONFIG_SDLC_MODE" = "gitlab-pat" ]]; then
  echo -e "\e[33mUsing Legend SDLC using remote Gitlab instance with Private Access Token...\e[0m"

  if [[ -z "$LEGEND_OMNIBUS_CONFIG_GITLAB_PAT" ]]; then
    echo -e "\e[31mLEGEND_OMNIBUS_CONFIG_GITLAB_PAT is required to be set when using remote Gitlab instance with Private Access Token\e[0m"
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
else
  echo -e "\e[33mUsing Legend SDLC using in-memory backend (default)...\e[0m"
  # TODO: support in-memory backend when we have official support for configurable backend
  echo -e "\e[31mUsing Legend SDLC using in-memory backend is currently not supported, please specify LEGEND_OMNIBUS_CONFIG_SDLC_MODE (possible values: gitlab-pat, gitlab-oauth)\e[0m"
  exit 1;
fi

java -cp /app/sdlc/lib/*-shaded.jar \
  -XX:+ExitOnOutOfMemoryError \
  -XX:MaxRAMPercentage=60 \
  -Xss4M \
  -Dfile.encoding=UTF8 \
  org.finos.legend.sdlc.server.LegendSDLCServer server "/app/sdlc/config/$config_file"
