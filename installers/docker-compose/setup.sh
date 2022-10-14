#!/bin/bash

BASE=/setup
. $BASE/.env

GEN=$BASE/z_generated 
mkdir -p $GEN

## Engine
SRC=$BASE/engine/config
DEST=$GEN/engine/config
mkdir -p $DEST
cp -r $SRC/* $DEST
sed -i 's~${MONGODB_URI}~'${MONGODB_URI}'~g' $DEST/vault.properties

## Studio 
SRC=$BASE/studio/config
DEST=$GEN/studio/config
mkdir -p $DEST
cp -r $SRC/* $DEST

sed -i 's~${ENGINE_HOST}~'$ENGINE_HOST'~g' $DEST/uiConfig.json
sed -i 's~${ENGINE_PORT}~'$ENGINE_PORT'~g' $DEST/uiConfig.json
sed -i 's~${SDLC_HOST}~'$SDLC_HOST'~g' $DEST/uiConfig.json
sed -i 's~${SDLC_PORT}~'$SDLC_PORT'~g' $DEST/uiConfig.json
sed -i 's~${DEPOT_HOST}~'$DEPOT_HOST'~g' $DEST/uiConfig.json
sed -i 's~${DEPOT_PORT}~'$DEPOT_PORT'~g' $DEST/uiConfig.json

## Depot 
SRC=$BASE/depot/config
DEST=$GEN/depot/config
mkdir -p $DEST
cp -r $SRC/* $DEST

## Depot Store
SRC=$BASE/depot-store/config
DEST=$GEN/depot-store/config
mkdir -p $DEST
cp -r $SRC/* $DEST
sed -i 's/${DEPOT_STORE_ADMIN_USER}/'$DEPOT_STORE_ADMIN_USER'/g' $DEST/authorisedIdentities.json

SRC=$BASE/depot-store/setup
DEST=$GEN/depot-store/setup
mkdir -p $DEST
cp -r $SRC/* $DEST

sed -i 's/${DEPOT_STORE_HOST}/'$DEPOT_STORE_HOST'/g' $DEST/setup.sh
sed -i 's/${DEPOT_STORE_PORT}/'$DEPOT_STORE_PORT'/g' $DEST/setup.sh

## Query
SRC=$BASE/query/config
DEST=$GEN/query/config
mkdir -p $DEST
cp -r $SRC/* $DEST

sed -i 's~${QUERY_HOST}~'$QUERY_HOST'~g' $DEST/uiConfig.json
sed -i 's~${QUERY_PORT}~'$QUERY_PORT'~g' $DEST/uiConfig.json
sed -i 's~${ENGINE_HOST}~'$ENGINE_HOST'~g' $DEST/uiConfig.json
sed -i 's~${ENGINE_PORT}~'$ENGINE_PORT'~g' $DEST/uiConfig.json
sed -i 's~${STUDIO_HOST}~'$STUDIO_HOST'~g' $DEST/uiConfig.json
sed -i 's~${STUDIO_PORT}~'$STUDIO_PORT'~g' $DEST/uiConfig.json
sed -i 's~${DEPOT_HOST}~'$DEPOT_HOST'~g' $DEST/uiConfig.json
sed -i 's~${DEPOT_PORT}~'$DEPOT_PORT'~g' $DEST/uiConfig.json
