#!/bin/bash

# -------------------------- Setup Color -----------------------------
# NOTE: must use `echo -e` to interpret the backslash escapes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No color
# --------------------------------------------------------------------

IMAGE=finos/legend-omnibus:latest-slim

# ------------------------------- Check -------------------------------
# Check if repulling image is necessary

REMOTE_DIGEST=$(docker manifest inspect $IMAGE | awk -F ': "|"' '{for(i=1;i<=NF;i++){if($i~/^sha256:/){print substr($i,8);exit}}}')
LOCAL_DIGEST=$(docker images --digests --format "table {{.Repository}}:{{.Tag}}\t{{.Digest}}" | grep finos/legend-omnibus:latest-slim | awk -F 'sha256:' '{print $2}')
if [[ $LOCAL_DIGEST != $REMOTE_DIGEST ]]; then
  PULL_STRATEGY="always" # force re-pulling the image
else
  PULL_STRATEGY="missing"
fi

# ------------------------------- Run -------------------------------

echo -e "${YELLOW}Running Docker in detached mode, please make sure to stop the container if not aborted properly...${NC}"
if [[ "$LEGEND_OMNIBUS_CONFIG_EXPOSE_BACKEND_PORTS" = true ]]; then
  CONTAINER_ID=$(docker run --platform=linux/amd64 -d \
    -v /var/run/docker.sock:/var/run/docker.sock \
    --pull="$PULL_STRATEGY" \
    -p 6900:6900 -p 6100:6100 -p 6300:6300 \
    $IMAGE)
else
  CONTAINER_ID=$(docker run --platform=linux/amd64 -d \
    -v /var/run/docker.sock:/var/run/docker.sock \
    --pull="$PULL_STRATEGY" \
    -p 6900:6900 \
    $IMAGE)
fi
# NOTE: since we cannot run the script with `docker run -it` when consuming this
# with `curl ... | bash` method, we need to trap the exit/abort signal to stop the container manually
# See https://stackoverflow.com/questions/43099116/error-the-input-device-is-not-a-tty
trap "echo -e \"${YELLOW}\nStopping container...${NC}\" && docker stop $CONTAINER_ID && echo \"Aborted!\"" SIGINT
docker logs --follow $CONTAINER_ID
