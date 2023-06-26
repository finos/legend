#!/bin/bash

# NOTE: have to use -e for `echo` when using these colors to interpret the backslash escapes
LIGHT_BLUE='\033[1;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No color

sed -i'' -e "s/^LEGEND_OMNIBUS_IMAGE_VERSION.*/LEGEND_OMNIBUS_IMAGE_VERSION=snapshot/" ./.env
sed -i'' -e "s/^LEGEND_OMNIBUS_ENGINE_VERSION.*/LEGEND_OMNIBUS_ENGINE_VERSION=snapshot/" ./.env
sed -i'' -e "s/^LEGEND_OMNIBUS_SDLC_VERSION.*/LEGEND_OMNIBUS_SDLC_VERSION=snapshot/" ./.env
sed -i'' -e "s/^LEGEND_OMNIBUS_PURE_IDE_VERSION.*/LEGEND_OMNIBUS_PURE_IDE_VERSION=snapshot/" ./.env
sed -i'' -e "s/^LEGEND_OMNIBUS_STUDIO_VERSION.*/LEGEND_OMNIBUS_STUDIO_VERSION=snapshot/" ./.env

source ./.env

# ------------------------------- Test -------------------------------

echo "Running test(s)..."
bash ./variants/full/build.sh

# ----------------------------- Publish ------------------------------

docker tag legend-omnibus:latest finos/legend-omnibus:snapshot
docker push --quiet finos/legend-omnibus:snapshot || {
  exit 1
}
docker tag legend-omnibus:latest finos/legend-omnibus:latest
docker push --quiet finos/legend-omnibus:snapshot || {
  exit 1
}

# ------------------------- Summary -------------------------

echo -e "\n"
echo -e "${GREEN}Successfully published snapshot images to Docker Hub! ${NC}"
echo -e "\n"
