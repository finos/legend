#!/bin/bash

java -cp /app/pure-ide/lib/*-shaded.jar \
  -XX:+ExitOnOutOfMemoryError \
  -XX:MaxRAMPercentage=60 \
  -Xss4M \
  -Dfile.encoding=UTF8 \
  org.finos.legend.engine.ide.PureIDELight_NoExtension server /app/pure-ide/config/config.yml
