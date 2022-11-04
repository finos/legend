#!/bin/bash

mkdir -p /config/
wget -O /config/uiConfig.json ${CONFIGURATION_URL_UICONFIG}
wget -O /config/httpConfig.json ${CONFIGURATION_URL_HTTPCONFIG}

cat /config/uiConfig.json
cat /config/httpConfig.json

java -cp /app/bin/webapp-content:/app/bin/* org.finos.legend.server.shared.staticserver.Server server /config/httpConfig.json