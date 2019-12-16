#!/bin/bash

# Define which models to embed in the site
export ALLOY_MODELS="purealloy-modeling purealloy-modeling-samples"

# Where the model MD files will be checked out
export DOCS_FOLDER=${PWD}/docs/models

# Import docs from modeling projects in gitlab.com/finos-foundation
cd /tmp
mkdir -p ${DOCS_FOLDER}
for ALLOY_MODEL in ${ALLOY_MODELS}
do
    rm -rf ${ALLOY_MODEL}
    git clone https://gitlab.com/finosfoundation/${ALLOY_MODEL}.git
    mkdir -p ${DOCS_FOLDER}/${ALLOY_MODEL}
    cp -Rf ${ALLOY_MODEL}/docs/* ${DOCS_FOLDER}/${ALLOY_MODEL}
done
cd -

# Where the docusaurus app lives
cd website

# Install docusaurus deps
yarn install

# Build Docusaurus site
yarn build

cd -
