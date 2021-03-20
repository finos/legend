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

# Generate config
/scripts/gen-config.sh

DURATION=$(($(date +%s) - $START_TIME))
echo "Waited ${DURATION}s for Gitlab config file to be built. Starting server now..."

# Run the server
java -XX:+ExitOnOutOfMemoryError -Xss4M -XX:MaxRAMPercentage=60 -Djavax.net.ssl.trustStore=/ssl/truststore.jks -Djavax.net.ssl.trustStorePassword=$TRUSTSTORE_PASSWORD -Dfile.encoding=UTF8 -cp /app/bin/*.jar org.finos.legend.sdlc.server.LegendSDLCServer server /config/config.yml
