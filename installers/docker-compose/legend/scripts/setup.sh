#!/bin/bash

PWD="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"


##########################################
# 	Load shared setup
##########################################

DOTENV_TEMPLATE_FILE=$PWD/../templates/.env

. $PWD/../../shared/scripts/setup.sh $1

PWD="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"


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
# 	Clean up and prepare build directory
##########################################

mkdir -p $BUILD_DIR/ssl


##########################################
# 	Generate certificates and secrets
##########################################

HOST_KEY_FILE=$BUILD_DIR/ssl/$HOST_DNS_NAME".key"
HOST_CERT_FILE=$BUILD_DIR/ssl/$HOST_DNS_NAME".crt"
HOST_DER_FILE=$BUILD_DIR/ssl/$HOST_DNS_NAME".der"
GITLAB_KEY_FILE=/etc/gitlab/ssl/$HOST_DNS_NAME".key"
GITLAB_CERT_FILE=/etc/gitlab/ssl/$HOST_DNS_NAME".crt"

TRUST_STORE=$BUILD_DIR/ssl/truststore.jks

# Generate secrets and passwords
MONGO_PASSWORD=$(echo $(grep -v '^#' $CONFIG_FILE | grep -e "MONGO_PASSWORD" | sed -e 's/.*=//'))
if [ -z "$MONGO_PASSWORD" ]; then
  MONGO_PASSWORD=$(openssl rand -base64 8 | sed 's:/::g')
fi
GITLAB_ROOT_PASSWORD=$(echo $(grep -v '^#' $CONFIG_FILE | grep -e "GITLAB_ROOT_PASSWORD" | sed -e 's/.*=//'))
if [ -z "$GITLAB_ROOT_PASSWORD" ]; then
  GITLAB_ROOT_PASSWORD=$(openssl rand -base64 8 | sed 's:/::g')
fi
GITLAB_PRIVATE_ACCESS_TOKEN=$(echo $(grep -v '^#' $CONFIG_FILE | grep -e "GITLAB_PRIVATE_ACCESS_TOKEN" | sed -e 's/.*=//'))
if [ -z "$GITLAB_PRIVATE_ACCESS_TOKEN" ]; then
  GITLAB_PRIVATE_ACCESS_TOKEN=$(openssl rand -base64 8 | sed 's:/::g')
fi

# Generate and convert certificate
# See https://www.digitalocean.com/community/tutorials/openssl-essentials-working-with-ssl-certificates-private-keys-and-csrs

CERT_CONFIG_FILE=$BUILD_DIR/cert.cnf
[ -e $CERT_CONFIG_FILE ] && rm $CERT_CONFIG_FILE
cp -r $PWD/../templates/cert.cnf $CERT_CONFIG_FILE
SED_CMD 's/__HOST_DNS_NAME__/'$HOST_DNS_NAME'/g' $CERT_CONFIG_FILE

# When we use EC2, the host address could be an DNS (e.g. ec2-5-43-58-857.us-east-2.compute.amazonaws.com),
# and assigning it to `IP.1` would be invalid, on the other hand, we know that when the host DNS is `localhost`
# the host address must be the IP.
# See https://security.stackexchange.com/questions/239369/openssl-general-namebad-ip-address-set-in-alt-names
if [ $HOST_DNS_NAME == 'localhost' ]; then
  SAN_CONFIG_LINE="IP.1=$HOST_ADDRESS"
else
  SAN_CONFIG_LINE="DNS.1=$HOST_ADDRESS"
fi
SED_CMD 's~__SAN_CONFIG_LINE__~'$SAN_CONFIG_LINE'~g' $CERT_CONFIG_FILE

openssl req \
  -newkey rsa:2048 -nodes \
  -keyout $HOST_KEY_FILE \
  -x509 -days 365 \
  -out $HOST_CERT_FILE \
  -config $BUILD_DIR/cert.cnf \
  -extensions req_ext \
  -subj "/C=US/ST=NY/L=NY/O=XX/CN=$HOST_DNS_NAME"

openssl x509 \
  -in $HOST_CERT_FILE \
  -outform der \
  -out $HOST_DER_FILE


# Copy certificates over for gitlab

mkdir -p $BUILD_DIR/container-data/gitlab
cp -r $BUILD_DIR/ssl $BUILD_DIR/container-data/gitlab

# Generate Java trust store and register the certificate

rm -rf $TRUST_STORE

TRUSTSTORE_PASSWORD=$(echo $(grep -v '^#' $DOTENV_TEMPLATE_FILE | grep -e "TRUSTSTORE_PASSWORD" | sed -e 's/.*=//'))

keytool -import -noprompt -alias $HOST_DNS_NAME -keystore $TRUST_STORE -file $HOST_DER_FILE -storepass $TRUSTSTORE_PASSWORD


##########################################
# 	Generate .env from template
##########################################

# Generate .env file

DOTENV_FILE=$BUILD_DIR/.env

SED_CMD 's/__MONGO_PASSWORD__/'$MONGO_PASSWORD'/g' $DOTENV_FILE

SED_CMD 's/__GITLAB_HOST__/'$HOST_ADDRESS'/g' $DOTENV_FILE
SED_CMD 's/__GITLAB_HOST_NAME__/'$HOST_DNS_NAME'/g' $DOTENV_FILE
SED_CMD 's/__GITLAB_ROOT_PASSWORD__/'$GITLAB_ROOT_PASSWORD'/g' $DOTENV_FILE
SED_CMD 's/__GITLAB_PRIVATE_ACCESS_TOKEN__/'$GITLAB_PRIVATE_ACCESS_TOKEN'/g' $DOTENV_FILE
SED_CMD 's~__GITLAB_KEY_FILE__~'$GITLAB_KEY_FILE'~g' $DOTENV_FILE
SED_CMD 's~__GITLAB_CERT_FILE__~'$GITLAB_CERT_FILE'~g' $DOTENV_FILE

GITLAB_PORT=$(echo $(grep -v '^#' $DOTENV_FILE | grep -e "GITLAB_PORT" | sed -e 's/.*=//'))
GITLAB_URL=$HOST_ADDRESS:$GITLAB_PORT

SED_CMD 's~__GITLAB_URL__~'$GITLAB_URL'~g' $DOTENV_FILE

##########################################
# 	Print out secrets/passwords
##########################################

# This is not safe, should only be used purely for non-production/demo

GITLAB_ROOT_USER=$(echo $(grep -v '^#' $DOTENV_TEMPLATE_FILE | grep -e "GITLAB_ROOT_USER" | sed -e 's/.*=//'))

echo ""
echo "Gitlab credentials (for non-production use only!):"
echo "username: $GITLAB_ROOT_USER"
echo "password: $GITLAB_ROOT_PASSWORD"
echo "access token: $GITLAB_PRIVATE_ACCESS_TOKEN"


##########################################
# 	Copy over templates and scripts
##########################################

cp -r $PWD $BUILD_DIR/scripts
cp -r $PWD/../../shared/scripts/ $BUILD_DIR/scripts
cp -r $PWD/../../shared/templates $BUILD_DIR/templates
