#!/bin/bash

java -cp $DEPOT_HOME/config/:$DEPOT_HOME/lib/* \
-XX:+ExitOnOutOfMemoryError \
-XX:MaxRAMPercentage=60 \
-Xss4M \
-Dfile.encoding=UTF8 \
org.finos.legend.depot.server.LegendDepotServer server $DEPOT_HOME/config/config.json
