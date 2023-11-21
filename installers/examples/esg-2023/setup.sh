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

## Sdlc
SRC=$BASE/sdlc/config
DEST=$GEN/sdlc/config
mkdir -p $DEST
cp -r $SRC/* $DEST

## Studio 
SRC=$BASE/studio/config
DEST=$GEN/studio/config
mkdir -p $DEST
cp -r $SRC/* $DEST
sed -i 's~__LEGEND_EXTERNAL_BASE_URL__~'${LEGEND_EXTERNAL_BASE_URL}'~g' $DEST/config.json

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
