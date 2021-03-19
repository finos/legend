#!/bin/bash

PWD="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"


##########################################
# 	Load shared setup
##########################################

DOTENV_TEMPLATE_FILE=$PWD/../templates/.env

. $PWD/../../shared/scripts/setup.sh $1


##########################################
# 	Parse config file
##########################################

if [ -z "$1" ]; then
  echo "Config file is not provided."
  exit 1
else
  CONFIG_FILE=$1
fi


##########################################
# 	Generate certificates and secrets
##########################################

GITLAB_KEY_FILE=/etc/gitlab/ssl/$HOST_DNS_NAME".key"
GITLAB_CERT_FILE=/etc/gitlab/ssl/$HOST_DNS_NAME".crt"

# Generate secrets and passwords
GITLAB_ROOT_PASSWORD=$(echo $(grep -v '^#' $CONFIG_FILE | grep -e "GITLAB_ROOT_PASSWORD" | sed -e 's/.*=//'))
if [ -z "$GITLAB_ROOT_PASSWORD" ]; then
  GITLAB_ROOT_PASSWORD=$(openssl rand -base64 8 | sed 's:/::g')
fi
GITLAB_PRIVATE_ACCESS_TOKEN=$(echo $(grep -v '^#' $CONFIG_FILE | grep -e "GITLAB_PRIVATE_ACCESS_TOKEN" | sed -e 's/.*=//'))
if [ -z "$GITLAB_ROOT_PASSWORD" ]; then
  GITLAB_PRIVATE_ACCESS_TOKEN=$(openssl rand -base64 8 | sed 's:/::g')
fi

# Copy certificates over for gitlab

mkdir -p $BUILD_DIR/container-data/gitlab
cp -r $BUILD_DIR/ssl $BUILD_DIR/container-data/gitlab

##########################################
# 	Generate .env from template
##########################################

# Generate .env file

DOTENV_FILE=$BUILD_DIR/.env

SED_CMD 's/__GITLAB_HOST__/'$HOST_ADDRESS'/g' $DOTENV_FILE
SED_CMD 's/__GITLAB_HOST_NAME__/'$HOST_DNS_NAME'/g' $DOTENV_FILE
SED_CMD 's/__GITLAB_ROOT_PASSWORD__/'$GITLAB_ROOT_PASSWORD'/g' $DOTENV_FILE
SED_CMD 's/__GITLAB_PRIVATE_ACCESS_TOKEN__/'$GITLAB_PRIVATE_ACCESS_TOKEN'/g' $DOTENV_FILE
SED_CMD 's~__GITLAB_KEY_FILE__~'$GITLAB_KEY_FILE'~g' $DOTENV_FILE
SED_CMD 's~__GITLAB_CERT_FILE__~'$GITLAB_CERT_FILE'~g' $DOTENV_FILE

GITLAB_PORT=$(echo $(grep -v '^#' $DOTENV_FILE | grep -e "GITLAB_PORT" | sed -e 's/.*=//'))
GITLAB_URL=$HOST_ADDRESS:$GITLAB_PORT

SED_CMD 's~__GITLAB_URL__~'$GITLAB_URL'~g' $DOTENV_FILE
