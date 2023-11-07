#!/bin/bash

# -------------------------- Setup Color -----------------------------
# NOTE: must use `echo -e` to interpret the backslash escapes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No color
# --------------------------------------------------------------------

sed -i'' -e "s/^LEGEND_OMNIBUS_IMAGE_VERSION.*/LEGEND_OMNIBUS_IMAGE_VERSION=snapshot/" ./.env
sed -i'' -e "s/^LEGEND_OMNIBUS_ENGINE_VERSION.*/LEGEND_OMNIBUS_ENGINE_VERSION=snapshot/" ./.env
sed -i'' -e "s/^LEGEND_OMNIBUS_SDLC_VERSION.*/LEGEND_OMNIBUS_SDLC_VERSION=snapshot/" ./.env
sed -i'' -e "s/^LEGEND_OMNIBUS_STUDIO_VERSION.*/LEGEND_OMNIBUS_STUDIO_VERSION=snapshot/" ./.env

source ./.env
DOCKER_IMAGE_TAG_SUFFIX=example-esg

# ------------------------------- Test -------------------------------

echo "Running test(s)..."
bash ./variants/example-esg/build.sh
bash ./variants/example-esg/test.sh

test_result=$?
if [[ $test_result == 0 ]]; then
  echo -e "${GREEN}Test passed successfully!${NC}"
else
  echo -e "${RED}Test failed!${NC}"
  exit 1
fi

# ----------------------------- Publish ------------------------------

docker tag legend-omnibus:latest-$DOCKER_IMAGE_TAG_SUFFIX finos/legend-omnibus:snapshot-$DOCKER_IMAGE_TAG_SUFFIX
docker push --quiet finos/legend-omnibus:snapshot-$DOCKER_IMAGE_TAG_SUFFIX || {
  exit 1
}
docker tag legend-omnibus:latest-$DOCKER_IMAGE_TAG_SUFFIX finos/legend-omnibus:latest-$DOCKER_IMAGE_TAG_SUFFIX
docker push --quiet finos/legend-omnibus:snapshot-$DOCKER_IMAGE_TAG_SUFFIX || {
  exit 1
}

# ------------------------- Summary -------------------------

echo -e "\n"
echo -e "${GREEN}Successfully published snapshot images to Docker Hub! ${NC}"
echo -e "\n"
