#!/bin/bash

pwd="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

##########################################
## Fill in these values (OPTIONAL)
##########################################

# USER_WORK_DIR= # TODO: if not available, use the default values below
# USER_TRUSTSTORE_PASSWORD= # TODO: right now the value is `changeit`, and hard-coded in other scripts

##########################################
# The values below are computed/static
##########################################

if [ $SCRIPT_ENV == "ec2" ]; then
	WORK_DIR=/home/ec2-user/legend-temp
else
	WORK_DIR=/Users/$(whoami)/Desktop/legend-temp
fi

mkdir -p $WORK_DIR

CONTAINER_WORK_DIR=$WORK_DIR/container-data
mkdir -p $CONTAINER_WORK_DIR

if [ $SCRIPT_ENV == "ec2" ]; then
	HOST_DNS_NAME=$(curl -s http://169.254.169.254/latest/meta-data/public-hostname)
	HOST_PUBLIC_IP=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)
elif [ $SCRIPT_ENV == "mac" ]; then
	HOST_DNS_NAME="localhost" # Check your Network in Mac
	HOST_PUBLIC_IP=$(curl --silent https://ifconfig.me)
else
	HOST_DNS_NAME=$(hostname)
	HOST_PUBLIC_IP=$(hostname -i)
fi

# Secrets
MONGO_PASSWORD=""
if [ -e $WORK_DIR/mongo.pwd ]; then
	MONGO_PASSWORD=$(cat $WORK_DIR/mongo.pwd)
fi

GITLAB_ROOT_PASSWORD=""
if [ -e $WORK_DIR/gitlab.pwd ]; then
	GITLAB_ROOT_PASSWORD=$(cat $WORK_DIR/gitlab.pwd)
fi

GITLAB_ROOT_PRIVATE_TOKEN=""
if [ -e $WORK_DIR/gitlab.token ]; then
	GITLAB_ROOT_PRIVATE_TOKEN=$(cat $WORK_DIR/gitlab.token)
fi

# Certs
TRUSTSTORE_PASSWORD=changeit

# Gitlab
GITLAB_PORT=6443
GITLAB_ROOT_USER=root
GITLAB_HOST=$HOST_DNS_NAME
GITLAB_PUBLIC_URL=https://$GITLAB_HOST:$GITLAB_PORT

# Mongo
MONGO_USER=admin
MONGO_HOST_PORT=$HOST_DNS_NAME:27017

# Engine
LEGEND_ENGINE_PORT=6060
LEGEND_ENGINE_URL=http://$HOST_DNS_NAME:$LEGEND_ENGINE_PORT

# LEGEND_SDLC
LEGEND_SDLC_PORT=7070
LEGEND_SDLC_URL=http://$HOST_DNS_NAME:$LEGEND_SDLC_PORT

# Studio
LEGEND_STUDIO_PORT=8080
LEGEND_STUDIO_URL=http://$HOST_DNS_NAME:$LEGEND_STUDIO_PORT/studio
