#!/bin/bash

START_TIME=$(date +%s)
GITLAB_ENV_FILE=/gitlab-config/gitlab.env

# Wait for Gitlab setup to finish
# See https://docs.docker.com/compose/startup-order/
while [ ! -f $GITLAB_ENV_FILE ];
do
  echo "Gitlab is setting up - waiting"
  sleep 10
done

GITLAB_OAUTH_CLIENT_ID=$(echo $(grep -v '^#' $GITLAB_ENV_FILE | grep -e "GITLAB_OAUTH_CLIENT_ID" | sed -e 's/.*=//'))
GITLAB_OAUTH_SECRET=$(echo $(grep -v '^#' $GITLAB_ENV_FILE | grep -e "GITLAB_OAUTH_SECRET" | sed -e 's/.*=//'))

# Generate config
[ "$(ls -A /config)" ] && rm /config/*
cp -r /templates/* /config
for f in $(find /config -type f); do
  sed -i 's/__LEGEND_SDLC_PORT__/'$LEGEND_SDLC_PORT'/g' $f
  sed -i 's~__LEGEND_SDLC_PUBLIC_URL__~'$LEGEND_SDLC_PUBLIC_URL'~g' $f
  sed -i 's/__MONGO_HOST__/'$MONGO_SERVICE_NAME'/g' $f
  sed -i 's/__MONGO_PORT__/'$MONGO_PORT'/g' $f
  sed -i 's/__MONGO_USER__/'$MONGO_USER'/g' $f
  sed -i 's/__MONGO_PASSWORD__/'$MONGO_PASSWORD'/g' $f
  sed -i 's/__HOST_PUBLIC_IP__/'$HOST_PUBLIC_IP'/g' $f
  sed -i 's/__GITLAB_SERVICE_NAME__/'$GITLAB_SERVICE_NAME'/g' $f
  sed -i 's/__GITLAB_OAUTH_CLIENT_ID__/'$GITLAB_OAUTH_CLIENT_ID'/g' $f
  sed -i 's/__GITLAB_OAUTH_SECRET__/'$GITLAB_OAUTH_SECRET'/g' $f
  sed -i 's/__GITLAB_HOST__/'$GITLAB_HOST'/g' $f
  sed -i 's/__GITLAB_PORT__/'$GITLAB_PORT'/g' $f
  sed -i 's~__GITLAB_URL__~'$GITLAB_URL'~g' $f
done

DURATION=$(($(date +%s) - $START_TIME))
echo "Waited ${DURATION}s for Gitlab config file to be built. Starting server now..."

# Run the server
java -XX:+ExitOnOutOfMemoryError -Xss4M -XX:MaxRAMPercentage=60 -Djavax.net.ssl.trustStore=/ssl/truststore.jks -Djavax.net.ssl.trustStorePassword=$TRUSTSTORE_PASSWORD -Dfile.encoding=UTF8 -cp /app/bin/*.jar org.finos.legend.sdlc.server.LegendSDLCServer server /config/config.yml
