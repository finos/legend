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
# Here, we build the slim image and test against it to make sure
# the setup is proper and the configs are up-to-date, if any components
# make a breaking change in their config, this test will detect it

echo "Running tests on the slim image..."
bash ./build-slim.sh
TEST_CONTAINER=$(docker run \
	--platform=linux/amd64 \
	-dit \
	-p $LEGEND_OMNIBUS_SUPERVISOR_PORT:$LEGEND_OMNIBUS_SUPERVISOR_PORT \
	-p $LEGEND_OMNIBUS_SUPERVISOR_STATUS_CHECKER_PORT:$LEGEND_OMNIBUS_SUPERVISOR_STATUS_CHECKER_PORT \
	-p $LEGEND_OMNIBUS_NGINX_PORT:$LEGEND_OMNIBUS_NGINX_PORT \
	-p $LEGEND_OMNIBUS_GITLAB_PORT:$LEGEND_OMNIBUS_GITLAB_PORT \
	-p $LEGEND_OMNIBUS_ENGINE_PORT:$LEGEND_OMNIBUS_ENGINE_PORT \
	-p $LEGEND_OMNIBUS_SDLC_PORT:$LEGEND_OMNIBUS_SDLC_PORT \
	-p $LEGEND_OMNIBUS_PURE_IDE_PORT:$LEGEND_OMNIBUS_PURE_IDE_PORT \
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
# Login to Docker Hub
#
# NOTE: Apparently, we cannot call `docker login ...` from `github-actions` pipeline
# as we will get the error: Cannot perform an interactive login from a non TTY device.
# so we will use `docker/login-action`, if we run this script manually, make sure we
# login beforehand.

# ------------------------- Slim Variant -------------------------
# This build skips Gitlab

docker tag legend-omnibus:latest-slim finos/legend-omnibus:snapshot-slim
docker push --quiet finos/legend-omnibus:snapshot-slim || {
  exit 1
}
docker tag legend-omnibus:latest-slim finos/legend-omnibus:latest-slim
docker push --quiet finos/legend-omnibus:latest-slim || {
  exit 1
}

# ------------------------- Standard Variant -------------------------

bash ./build.sh
docker tag legend-omnibus:latest finos/legend-omnibus:snapshot
docker push --quiet finos/legend-omnibus:snapshot || {
  exit 1
}
docker tag legend-omnibus:latest finos/legend-omnibus:latest
docker push --quiet finos/legend-omnibus:latest || {
  exit 1
}

# ------------------------- Summary -------------------------

echo -e "\n"
echo -e "${GREEN}Successfully published snapshot images to Docker Hub! ${NC}"
echo -e "\n"
