#!/bin/bash

/scripts/gen-config.sh
java -XX:+ExitOnOutOfMemoryError -Xss4M -XX:MaxRAMPercentage=60 -Dfile.encoding=UTF8 -cp /app/bin/webapp-content:/app/bin/* org.finos.legend.server.shared.staticserver.Server server /config/httpConfig.json
