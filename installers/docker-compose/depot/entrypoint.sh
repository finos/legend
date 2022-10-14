#!/bin/bash

echo "Container Start: $(time +%s)"

java -cp /config:/app/bin/* -XX:+ExitOnOutOfMemoryError -XX:MaxRAMPercentage=60 -Xss4M -Dfile.encoding=UTF8  org.finos.legend.depot.server.LegendDepotServer server /config/config.json
