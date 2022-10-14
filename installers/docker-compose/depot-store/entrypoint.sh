#!/bin/bash

echo "Container Start: $(time +%s) 2"

ls /app/bin/*

java -cp /config:/app/bin/* -XX:+ExitOnOutOfMemoryError -XX:MaxRAMPercentage=60 -Xss4M -Dfile.encoding=UTF8 org.finos.legend.depot.store.server.LegendDepotStoreServer server /config/config.json
