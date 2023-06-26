#!/bin/bash

# NOTE: have to use -e for `echo` when using these colors to interpret the backslash escapes
LIGHT_BLUE='\033[1;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No color

source ./.env

DOCKER_IMAGE_NAME=finos/legend-omnibus
DOCKER_IMAGE_TAG=$LEGEND_OMNIBUS_IMAGE_VERSION

# Check if the image has already been published
ALREADY_PUBLISHED=true
docker pull finos/legend-omnibus:$DOCKER_IMAGE_TAG-slim >/dev/null 2>&1 || {
  ALREADY_PUBLISHED=false
}
if [[ $ALREADY_PUBLISHED = true ]]; then
  echo -e "${YELLOW}Image finos/legend-omnibus:$DOCKER_IMAGE_TAG-slim is already published. Aborting...${NC}"
  exit 0
fi

# ------------------------------- Test -------------------------------

echo "Running test(s)..."
bash ./build.sh

TEST_CONTAINER=$(docker run \
	--platform=linux/amd64 \
	-dit \
	-p $LEGEND_OMNIBUS_SUPERVISOR_PORT:$LEGEND_OMNIBUS_SUPERVISOR_PORT \
	-p $LEGEND_OMNIBUS_SUPERVISOR_STATUS_CHECKER_PORT:$LEGEND_OMNIBUS_SUPERVISOR_STATUS_CHECKER_PORT \
	-p $LEGEND_OMNIBUS_NGINX_PORT:$LEGEND_OMNIBUS_NGINX_PORT \
	-p $LEGEND_OMNIBUS_GITLAB_PORT:$LEGEND_OMNIBUS_GITLAB_PORT \
	-p $LEGEND_OMNIBUS_ENGINE_PORT:$LEGEND_OMNIBUS_ENGINE_PORT \
	-p $LEGEND_OMNIBUS_SDLC_PORT:$LEGEND_OMNIBUS_SDLC_PORT \
	-p $LEGEND_OMNIBUS_STUDIO_PORT:$LEGEND_OMNIBUS_STUDIO_PORT \
	--env LEGEND_OMNIBUS_REMOTE_GITLAB_PAT="$LEGEND_OMNIBUS_REMOTE_GITLAB_PAT" \
	legend-omnibus:latest-slim)

while :; do
	status_status_checker=$(curl --write-out %{http_code} --silent --output /dev/null http://localhost:$OMNIBUS_STATUS_REPORT_FILE_PATH/status)
	if [[ $status_status_checker -ge 300 ]]; then
	  echo -e "\e[31mFAILED: Status checker failed to start\e[0m"
		exit 1
	else
		status=$(curl --silent http://localhost:$LEGEND_OMNIBUS_SUPERVISOR_STATUS_CHECKER_PORT/status | jq -r '.status')
		if [[ $status == "FAILED" ]]; then
			echo -e "\e[31mFAILED: Some status checks failed. Please identify and fix the issue... 🙏🙏🙏\e[0m"
			exit 1
		elif [[ $status == "SUCCEEDED" ]]; then
			echo -e "\e[32mSUCCESS: All status checks passed! 🎉🎉🎉\e[0m"
			break
		fi
	fi

	sleep 10
done

docker stop $TEST_CONTAINER

# ----------------------------- Publish ------------------------------

docker tag legend-omnibus:latest-slim finos/legend-omnibus:$DOCKER_IMAGE_TAG-slim
docker push --quiet finos/legend-omnibus:$DOCKER_IMAGE_TAG-slim || {
  exit 1
}
docker tag legend-omnibus:latest-slim finos/legend-omnibus:latest-slim
docker push --quiet finos/legend-omnibus:latest-slim || {
  exit 1
}

# ------------------------- Summary -------------------------

echo -e "\n"
echo -e "${GREEN}Successfully published images to Docker Hub! ${NC}"
echo -e "\n"
