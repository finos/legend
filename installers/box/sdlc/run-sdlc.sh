#!/bin/bash

java -cp $SDLC_HOME/lib/*-shaded.jar \
-XX:+ExitOnOutOfMemoryError \
-XX:MaxRAMPercentage=60 \
-Xss4M \
-Dfile.encoding=UTF8 \
org.finos.legend.sdlc.server.LegendSDLCServer server $SDLC_HOME/config/config.json
