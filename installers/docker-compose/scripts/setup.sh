#!/bin/bash

PWD="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"


##########################################
# 	Get input parameters
##########################################

if [ -z "$1" ]; then
  BUILD_DIR=$PWD/../build
else
  BUILD_DIR=$1
fi

HOST_DNS_NAME= # e.g. localhost
HOST_DNS= # e.g. 192.168.1.100

# A small note on Docker Compose networking
#
# If we have an EC2/Linux box with some HOST_DNS_NAME other than `localhost`,
# e.g. http://169.254.169.254/latest/meta-data/public-hostname
# then there is not a lot to worry about because inside each Docker container
# this host can be referred as-is
#
# However, if we use `localhost`, we cannot use refer to that hostname cross containers
# even if we expose the ports
# See https://pythonspeed.com/articles/docker-connection-refused/
# 
# However, we can refer to other container using their container name
# thanks to Docker Compose `networks` setting
# e.g. mongodb://mongod:27017 is accessible from containers other than `mongod`, but not mongodb://localhost:27017
# See https://docs.docker.com/compose/networking/
#
# But if we use host name like `localhost` or `gitlab`, or container's name, or IP address
# Java processes might require us to also provide Subject Alternative Name (SAN)
# We do this by using extensions in V3 of OpenSSL config
# This is important in order to avoid errors such as `No name matching` or `No subject alternative names matching IP address`
# when Java calling to these addresses
# See https://medium.com/@antelle/how-to-generate-a-self-signed-ssl-certificate-for-an-ip-address-f0dd8dddf754

##########################################
# 	Clean up and reset build directory
##########################################

[ -e $BUILD_DIR ] && rm -r $BUILD_DIR
mkdir -p $BUILD_DIR
mkdir -p $BUILD_DIR/ssl
mkdir -p $BUILD_DIR/container-data
mkdir -p $BUILD_DIR/generated-configs
mkdir -p $BUILD_DIR/generated-configs/gitlab
mkdir -p $BUILD_DIR/generated-configs/sdlc
mkdir -p $BUILD_DIR/generated-configs/engine
mkdir -p $BUILD_DIR/generated-configs/studio


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
MONGO_PASSWORD=$(openssl rand -base64 8 | sed 's:/::g')
GITLAB_ROOT_PASSWORD=$(openssl rand -base64 8 | sed 's:/::g')
GITLAB_PRIVATE_ACCESS_TOKEN=$(openssl rand -base64 8 | sed 's:/::g')

# Generate and convert certificate
# See https://www.digitalocean.com/community/tutorials/openssl-essentials-working-with-ssl-certificates-private-keys-and-csrs

GITLAB_SERVICE_NAME=$(echo $(grep -v '^#' $PWD/../templates/.env | grep -e "GITLAB_SERVICE_NAME" | sed -e 's/.*=//'))

CERT_CONFIG_FILE=$BUILD_DIR/cert.cnf
[ -e $CERT_CONFIG_FILE ] && rm $CERT_CONFIG_FILE
cp -r $PWD/../templates/cert.cnf $CERT_CONFIG_FILE
sed -i 's/__HOST_DNS_NAME__/'$HOST_DNS_NAME'/g' $CERT_CONFIG_FILE
sed -i 's/__GITLAB_SERVICE_NAME__/'$GITLAB_SERVICE_NAME'/g' $CERT_CONFIG_FILE
sed -i 's/__HOST_DNS__/'$HOST_DNS'/g' $CERT_CONFIG_FILE

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

# Generate Java trust store and register the certificate

rm -rf $TRUST_STORE

TRUSTSTORE_PASSWORD=$(echo $(grep -v '^#' $PWD/../templates/.env | grep -e "TRUSTSTORE_PASSWORD" | sed -e 's/.*=//'))

keytool -import -noprompt -alias $HOST_DNS_NAME -keystore $TRUST_STORE -file $HOST_DER_FILE -storepass $TRUSTSTORE_PASSWORD

# Copy certificates over for gitlab

mkdir -p $BUILD_DIR/container-data/gitlab
cp -r $BUILD_DIR/ssl $BUILD_DIR/container-data/gitlab

##########################################
# 	Generate .env from template
##########################################

# Generate .env file

DOTENV_FILE=$BUILD_DIR/.env
[ -e $DOTENV_FILE ] && rm $DOTENV_FILE
cp -r $PWD/../templates/.env $DOTENV_FILE

sed -i 's~__BUILD_DIR__~'$BUILD_DIR'~g' $DOTENV_FILE
sed -i 's/__MONGO_PASSWORD__/'$MONGO_PASSWORD'/g' $DOTENV_FILE
sed -i 's/__GITLAB_HOST__/'$HOST_DNS'/g' $DOTENV_FILE
sed -i 's/__GITLAB_HOST_NAME__/'$HOST_DNS_NAME'/g' $DOTENV_FILE
sed -i 's/__GITLAB_ROOT_PASSWORD__/'$GITLAB_ROOT_PASSWORD'/g' $DOTENV_FILE
sed -i 's/__GITLAB_PRIVATE_ACCESS_TOKEN__/'$GITLAB_PRIVATE_ACCESS_TOKEN'/g' $DOTENV_FILE
sed -i 's~__GITLAB_KEY_FILE__~'$GITLAB_KEY_FILE'~g' $DOTENV_FILE
sed -i 's~__GITLAB_CERT_FILE__~'$GITLAB_CERT_FILE'~g' $DOTENV_FILE

GITLAB_PORT=$(echo $(grep -v '^#' $DOTENV_FILE | grep -e "GITLAB_PORT" | sed -e 's/.*=//'))
GITLAB_URL=https://$HOST_DNS:$GITLAB_PORT
LEGEND_SDLC_PORT=$(echo $(grep -v '^#' $DOTENV_FILE | grep -e "LEGEND_SDLC_PORT" | sed -e 's/.*=//'))
LEGEND_SDLC_PUBLIC_URL=http://$HOST_DNS:$LEGEND_SDLC_PORT
LEGEND_ENGINE_PORT=$(echo $(grep -v '^#' $DOTENV_FILE | grep -e "LEGEND_ENGINE_PORT" | sed -e 's/.*=//'))
LEGEND_ENGINE_PUBLIC_URL=http://$HOST_DNS:$LEGEND_ENGINE_PORT
LEGEND_STUDIO_PORT=$(echo $(grep -v '^#' $DOTENV_FILE | grep -e "LEGEND_STUDIO_PORT" | sed -e 's/.*=//'))
LEGEND_STUDIO_PUBLIC_URL=http://$HOST_DNS:$LEGEND_STUDIO_PORT

sed -i 's~__GITLAB_URL__~'$GITLAB_URL'~g' $DOTENV_FILE
sed -i 's~__LEGEND_SDLC_PUBLIC_URL__~'$LEGEND_SDLC_PUBLIC_URL'~g' $DOTENV_FILE
sed -i 's~__LEGEND_ENGINE_PUBLIC_URL__~'$LEGEND_ENGINE_PUBLIC_URL'~g' $DOTENV_FILE
sed -i 's~__LEGEND_STUDIO_PUBLIC_URL__~'$LEGEND_STUDIO_PUBLIC_URL'~g' $DOTENV_FILE
