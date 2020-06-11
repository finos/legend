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

# Create contribute.md docs page, from .github/CONTRIBUTING.md
CONTRIB_MD_PATH=docs/contribute.md
if [ -f ".github/CONTRIBUTING.md" ]; then
rm -rf $CONTRIB_MD_PATH
touch $CONTRIB_MD_PATH
cat <<EOT >> $CONTRIB_MD_PATH
---
id: contribute
title: Contributing to Alloy
sidebar_label: Contribute
---
EOT
# Remove title (first line) from MD file content
sed 1d .github/CONTRIBUTING.md >> $CONTRIB_MD_PATH
fi

# Create roadmap.md docs page, from .github/ROADMAP.md
ROADMAP_MD_PATH=docs/roadmap.md
if [ -f ".github/ROADMAP.md" ]; then
rm -rf $ROADMAP_MD_PATH
touch $ROADMAP_MD_PATH
cat <<EOT >> $ROADMAP_MD_PATH
---
id: roadmap
title: Alloy Roadmap
sidebar_label: Roadmap
---
EOT
# Remove title (first line) from MD file content
sed 1d .github/ROADMAP.md >> $ROADMAP_MD_PATH
fi

# Where the docusaurus app lives
cd website

# Install docusaurus deps
yarn install

# Build Docusaurus site
yarn build

cd -
