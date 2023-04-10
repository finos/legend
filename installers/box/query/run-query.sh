#!/bin/bash

PROTOCOL=${PROTOCOL:-http}
ENGINE_HOST=${ENGINE_HOST:-localhost}
ENGINE_PORT=${ENGINE_PORT:-6300}
SDLC_HOST=${SDLC_HOST:-localhost}
SDLC_PORT=${SDLC_PORT:-6100}
DEPOT_HOST=${DEPOT_HOST:-localhost}
DEPOT_PORT=${DEPOT_PORT:-7000}
TAXONOMY_HOST=${TAXONOMY_HOST:-localhost}
TAXONOMY_PORT=${TAXONOMY_PORT:-8000}

sed -i 's~${PROTOCOL}~'$PROTOCOL'~g' $QUERY_HOME/config/config.json
sed -i 's~${ENGINE_HOST}~'$ENGINE_HOST'~g' $QUERY_HOME/config/config.json
sed -i 's~${ENGINE_PORT}~'$ENGINE_PORT'~g' $QUERY_HOME/config/config.json
sed -i 's~${SDLC_HOST}~'$SDLC_HOST'~g' $QUERY_HOME/config/config.json
sed -i 's~${SDLC_PORT}~'$SDLC_PORT'~g' $QUERY_HOME/config/config.json
sed -i 's~${DEPOT_HOST}~'$DEPOT_HOST'~g' $QUERY_HOME/config/config.json
sed -i 's~${DEPOT_PORT}~'$DEPOT_PORT'~g' $QUERY_HOME/config/config.json
sed -i 's~${TAXONOMY_HOST}~'$TAXONOMY_HOST'~g' $QUERY_HOME/config/config.json
sed -i 's~${TAXONOMY_PORT}~'$TAXONOMY_PORT'~g' $QUERY_HOME/config/config.json

java -cp $QUERY_HOME/webapp-content:$QUERY_HOME/* org.finos.legend.server.shared.staticserver.Server server $QUERY_HOME/config/server-config.json
