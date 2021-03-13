#!/bin/bash

# https://www.digitalocean.com/community/tutorials/openssl-essentials-working-with-ssl-certificates-private-keys-and-csrs

if [ $SCRIPT_ENV == "mac" ]; then
  pwd="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
else
  pwd=$(readlink -f $(dirname $0))
fi

. $pwd/env.sh

mkdir -p $WORK_DIR/ssl

KEY_FILE=$WORK_DIR/ssl/$HOST_DNS_NAME".key"
CERT_FILE=$WORK_DIR/ssl/$HOST_DNS_NAME".crt"
DER_FILE=$WORK_DIR/ssl/$HOST_DNS_NAME".der"
TRUST_STORE=$WORK_DIR/ssl/truststore.jks

echo "Generating certs to $WORK_DIR/ssl ..."

# Generate cert

openssl req \
  -newkey rsa:2048 -nodes \
  -keyout $KEY_FILE \
  -x509 -days 365 \
  -out $CERT_FILE \
  -subj "/C=US/ST=NY/L=NY/O=XX/CN=$HOST_DNS_NAME"

# Convert cert

openssl x509 \
  -in $CERT_FILE \
  -outform der \
  -out $DER_FILE

# Print cert

# openssl x509 -text -noout -in $CERT_FILE

# Generate Java trust store

rm -rf $TRUST_STORE

keytool -import -noprompt -alias $HOST_DNS_NAME -keystore $TRUST_STORE -file $DER_FILE -storepass $TRUSTSTORE_PASSWORD
