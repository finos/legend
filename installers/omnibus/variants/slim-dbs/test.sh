#!/bin/bash

# -------------------------- Setup Color -----------------------------
# NOTE: must use `echo -e` to interpret the backslash escapes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No color
# --------------------------------------------------------------------

source ./.env
IMAGE=legend-omnibus:latest-slim-dbs

STATUS_CHECK_URL=http://localhost:$LEGEND_OMNIBUS_NGINX_PORT/dir/.omnibus-status.json
check_status()
{
	while :; do
		status_status_checker=$(curl --write-out %{http_code} --silent --output /dev/null $STATUS_CHECK_URL)
		if [[ $status_status_checker -ge 300 ]]; then
			echo -e "${RED}FAILED: Status checker failed to start${NC}"
			exit 1
		else
			status=$(curl --silent $STATUS_CHECK_URL | jq -r '.status')
			if [[ $status == "FAILED" ]]; then
				echo -e "${RED}FAILED: Some status checks failed. Please identify and fix the issue... 🙏🙏🙏${NC}"
				exit 1
			elif [[ $status == "SUCCEEDED" ]]; then
				echo -e "${GREEN}SUCCESS: All status checks passed! 🎉🎉🎉${NC}"
				break
			fi
		fi

		sleep 10
	done
}

# Test for SDLC with In-Memory backend
echo -e "${YELLOW}Testing SDLC with In-Memory backend...${NC}"
TEST_CONTAINER=$(docker run \
	--platform=linux/amd64 \
	-dit \
	-p $LEGEND_OMNIBUS_NGINX_PORT:$LEGEND_OMNIBUS_NGINX_PORT \
	--env LEGEND_OMNIBUS_CONFIG_SDLC_MODE="in-memory" \
	$IMAGE)
docker logs -f $TEST_CONTAINER &
check_status
docker stop $TEST_CONTAINER

# Test for SDLC with Gitlab (PAT) backend
echo -e "${YELLOW}Testing SDLC with Gitlab (PAT) backend...${NC}"
TEST_CONTAINER=$(docker run \
	--platform=linux/amd64 \
	-dit \
	-p $LEGEND_OMNIBUS_NGINX_PORT:$LEGEND_OMNIBUS_NGINX_PORT \
	--env LEGEND_OMNIBUS_CONFIG_SDLC_MODE="gitlab-pat" \
	--env LEGEND_OMNIBUS_CONFIG_GITLAB_PAT="$LEGEND_OMNIBUS_CONFIG_GITLAB_PAT" \
	$IMAGE)
docker logs -f $TEST_CONTAINER &
check_status
docker stop $TEST_CONTAINER

# Test for SDLC with Gitlab (OAuth) backend
echo -e "${YELLOW}Testing SDLC with Gitlab (OAuth) backend...${NC}"
TEST_CONTAINER=$(docker run \
	--platform=linux/amd64 \
	-dit \
	-p $LEGEND_OMNIBUS_NGINX_PORT:$LEGEND_OMNIBUS_NGINX_PORT \
	--env LEGEND_OMNIBUS_CONFIG_SDLC_MODE="gitlab-oauth" \
	--env LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID="$LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID" \
	--env LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET="$LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET" \
	$IMAGE)
docker logs -f $TEST_CONTAINER &
check_status
docker stop $TEST_CONTAINER
