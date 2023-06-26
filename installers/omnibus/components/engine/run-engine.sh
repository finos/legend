#!/bin/bash

export CP=$(find /app/engine/lib -name '*.jar' | egrep "shaded|bc" | tr '\n' ':')

java -cp $CP \
  -XX:+ExitOnOutOfMemoryError \
  -XX:MaxRAMPercentage=60 \
  -Xss4M \
  -Dfile.encoding=UTF8 \
  org.finos.legend.engine.server.Server server /app/engine/config/config.yml
