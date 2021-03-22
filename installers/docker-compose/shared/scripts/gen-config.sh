#!/bin/bash

GITLAB_ENV_FILE=/gitlab-config/gitlab.env

if [ ! -f $GITLAB_ENV_FILE ]; then
  echo "gitlab.env file is not found"
  exit 1
fi

GITLAB_OAUTH_CLIENT_ID=$(echo $(grep -v '^#' $GITLAB_ENV_FILE | grep -e "GITLAB_OAUTH_CLIENT_ID" | sed -e 's/.*=//'))
GITLAB_OAUTH_SECRET=$(echo $(grep -v '^#' $GITLAB_ENV_FILE | grep -e "GITLAB_OAUTH_SECRET" | sed -e 's/.*=//'))

# Generate config
[ "$(ls -A /config)" ] && rm /config/*
cp -r /templates/* /config
for f in $(find /config -type f); do
  sed -i 's/__MONGO_HOST__/'$MONGO_SERVICE_NAME'/g' $f
  sed -i 's/__MONGO_PORT__/'$MONGO_PORT'/g' $f
  sed -i 's/__MONGO_USER__/'$MONGO_USER'/g' $f
  sed -i 's/__MONGO_PASSWORD__/'$MONGO_PASSWORD'/g' $f
  sed -i 's/__GITLAB_SERVICE_NAME__/'$GITLAB_SERVICE_NAME'/g' $f
  sed -i 's~__GITLAB_URL__~'$GITLAB_URL'~g' $f
  sed -i 's/__GITLAB_OAUTH_CLIENT_ID__/'$GITLAB_OAUTH_CLIENT_ID'/g' $f
  sed -i 's/__GITLAB_OAUTH_SECRET__/'$GITLAB_OAUTH_SECRET'/g' $f
  sed -i 's/__LEGEND_SDLC_PORT__/'$LEGEND_SDLC_PORT'/g' $f
  sed -i 's~__LEGEND_SDLC_PUBLIC_URL__~'$LEGEND_SDLC_PUBLIC_URL'~g' $f
  sed -i 's/__LEGEND_ENGINE_PORT__/'$LEGEND_ENGINE_PORT'/g' $f
  sed -i 's~__LEGEND_ENGINE_URL__~'$LEGEND_ENGINE_PUBLIC_URL'~g' $f
  sed -i 's/__LEGEND_STUDIO_PORT__/'$LEGEND_STUDIO_PORT'/g' $f
  sed -i 's~__LEGEND_SDLC_URL__~'$LEGEND_SDLC_PUBLIC_URL'~g' $f
done
