#!/bin/bash

# -------------------------- Setup Color -----------------------------
# NOTE: must use `echo -e` to interpret the backslash escapes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No color
# --------------------------------------------------------------------

source ./.env

DOCKER_IMAGE_NAME=finos/legend-omnibus
DOCKER_IMAGE_TAG_SUFFIX=slim-dbs
DOCKER_IMAGE_TAG=$LEGEND_OMNIBUS_IMAGE_VERSION

# ------------------------------- Check -------------------------------

# Check if the image has already been published
ALREADY_PUBLISHED=true
docker pull finos/legend-omnibus:$DOCKER_IMAGE_TAG-$DOCKER_IMAGE_TAG_SUFFIX >/dev/null 2>&1 || {
  ALREADY_PUBLISHED=false
}
if [[ $ALREADY_PUBLISHED = true ]]; then
  echo -e "${YELLOW}Image finos/legend-omnibus:$DOCKER_IMAGE_TAG-$DOCKER_IMAGE_TAG_SUFFIX is already published. Aborting...${NC}"
  exit 0
fi

# ------------------------------- Test -------------------------------

echo "Running test(s)..."
bash ./variants/slim-dbs/build.sh
bash ./variants/slim-dbs/test.sh

test_result=$?
if [[ $test_result == 0 ]]; then
  echo -e "${GREEN}Test passed successfully!${NC}"
else
  echo -e "${RED}Test failed!${NC}"
  exit 1
fi

# ----------------------------- Publish ------------------------------

docker tag legend-omnibus:latest-$DOCKER_IMAGE_TAG_SUFFIX finos/legend-omnibus:$DOCKER_IMAGE_TAG-$DOCKER_IMAGE_TAG_SUFFIX
docker push --quiet finos/legend-omnibus:$DOCKER_IMAGE_TAG-$DOCKER_IMAGE_TAG_SUFFIX || {
  exit 1
}
docker tag legend-omnibus:latest-$DOCKER_IMAGE_TAG_SUFFIX finos/legend-omnibus:latest-$DOCKER_IMAGE_TAG_SUFFIX
docker push --quiet finos/legend-omnibus:latest-$DOCKER_IMAGE_TAG_SUFFIX || {
  exit 1
}

# ------------------------- Summary -------------------------

echo -e "\n"
echo -e "${GREEN}Successfully published images to Docker Hub! ${NC}"
echo -e "\n"
