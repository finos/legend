#!/bin/bash

source ./.env

STATUS_CHECK_URL=http://localhost:$LEGEND_OMNIBUS_SUPERVISOR_DIRECTORY_SERVER_PORT/.omnibus-status.json
check_status()
{
	while :; do
		status_status_checker=$(curl --write-out %{http_code} --silent --output /dev/null $STATUS_CHECK_URL)
		if [[ $status_status_checker -ge 300 ]]; then
			echo -e "\e[31mFAILED: Status checker failed to start\e[0m"
			exit 1
		else
			status=$(curl --silent $STATUS_CHECK_URL | jq -r '.status')
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
}

# Test Gitlab with PAT
TEST_CONTAINER=$(docker run \
	--platform=linux/amd64 \
	-dit \
	-p $LEGEND_OMNIBUS_SUPERVISOR_PORT:$LEGEND_OMNIBUS_SUPERVISOR_PORT \
	-p $LEGEND_OMNIBUS_SUPERVISOR_DIRECTORY_SERVER_PORT:$LEGEND_OMNIBUS_SUPERVISOR_DIRECTORY_SERVER_PORT \
	-p $LEGEND_OMNIBUS_NGINX_PORT:$LEGEND_OMNIBUS_NGINX_PORT \
	-p $LEGEND_OMNIBUS_ENGINE_PORT:$LEGEND_OMNIBUS_ENGINE_PORT \
	-p $LEGEND_OMNIBUS_SDLC_PORT:$LEGEND_OMNIBUS_SDLC_PORT \
	-p $LEGEND_OMNIBUS_STUDIO_PORT:$LEGEND_OMNIBUS_STUDIO_PORT \
	--env LEGEND_OMNIBUS_CONFIG_SDLC_MODE="gitlab-pat" --env LEGEND_OMNIBUS_CONFIG_GITLAB_PAT="$LEGEND_OMNIBUS_CONFIG_GITLAB_PAT" \
	legend-omnibus:latest-slim)

check_status
docker stop $TEST_CONTAINER

# Test Gitlab with OAuth
TEST_CONTAINER=$(docker run \
	--platform=linux/amd64 \
	-dit \
	-p $LEGEND_OMNIBUS_SUPERVISOR_PORT:$LEGEND_OMNIBUS_SUPERVISOR_PORT \
	-p $LEGEND_OMNIBUS_SUPERVISOR_DIRECTORY_SERVER_PORT:$LEGEND_OMNIBUS_SUPERVISOR_DIRECTORY_SERVER_PORT \
	-p $LEGEND_OMNIBUS_NGINX_PORT:$LEGEND_OMNIBUS_NGINX_PORT \
	-p $LEGEND_OMNIBUS_ENGINE_PORT:$LEGEND_OMNIBUS_ENGINE_PORT \
	-p $LEGEND_OMNIBUS_SDLC_PORT:$LEGEND_OMNIBUS_SDLC_PORT \
	-p $LEGEND_OMNIBUS_STUDIO_PORT:$LEGEND_OMNIBUS_STUDIO_PORT \
	--env LEGEND_OMNIBUS_CONFIG_SDLC_MODE="gitlab-oauth" --env LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID="$LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID" --env LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET="$LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET" \
	legend-omnibus:latest-slim)

check_status
docker stop $TEST_CONTAINER
