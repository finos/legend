#!/bin/bash

# -------------------------- Setup Color -----------------------------
# NOTE: must use `echo -e` to interpret the backslash escapes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No color
# --------------------------------------------------------------------

source /.env

echo -e "Using file system backend with no authentication..."

# NOTE: this is temporary until we can switch SDLC backend using the config
config_file="config.file-system.yml"
main_class=org.finos.legend.sdlc.server.startup.LegendSDLCServerFS
lib_dir=/app/sdlc-fs/lib

java -cp $lib_dir/*-shaded.jar \
  -XX:+ExitOnOutOfMemoryError \
  -XX:MaxRAMPercentage=60 \
  -Xss4M \
  -Dfile.encoding=UTF8 \
  $main_class server "/app/sdlc/config/$config_file"
