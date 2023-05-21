#!/bin/bash

java -cp /app/sdlc/lib/*-shaded.jar \
  -XX:+ExitOnOutOfMemoryError \
  -XX:MaxRAMPercentage=60 \
  -Xss4M \
  -Dfile.encoding=UTF8 \
  org.finos.legend.sdlc.server.LegendSDLCServer server /app/sdlc/config/config.yml
