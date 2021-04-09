#!/bin/bash

/scripts/gen-config.sh
java -XX:+ExitOnOutOfMemoryError -Xss4M -XX:MaxRAMPercentage=60 -Dfile.encoding=UTF8 -cp /app/bin/*-shaded.jar org.finos.legend.engine.server.Server server /config/dev-config.json
