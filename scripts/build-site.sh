#!/bin/bash

# Define which models to embed in the site. Blank for now
export LEGEND_MODELS=""

# Where the model MD files will be checked out
export DOCS_FOLDER=${PWD}/docs/models

# Import docs from modeling projects in gitlab.com/finos-foundation
cd /tmp
mkdir -p ${DOCS_FOLDER}
for LEGEND_MODEL in ${LEGEND_MODELS}
do
    rm -rf ${LEGEND_MODEL}
    git clone https://gitlab.com/finosfoundation/${LEGEND_MODEL}.git
    mkdir -p ${DOCS_FOLDER}/${LEGEND_MODEL}
    cp -Rf ${LEGEND_MODEL}/docs/* ${DOCS_FOLDER}/${LEGEND_MODEL}
done
cd -

# Create contribute.md docs page, from CONTRIBUTING.md
# CONTRIB_MD_PATH=docs/contribute.md
# if [ -f "CONTRIBUTING.md" ]; then
# rm -rf $CONTRIB_MD_PATH
# touch $CONTRIB_MD_PATH
# cat <<EOT >> $CONTRIB_MD_PATH
# ---
# id: contribute
# title: Contributing to Alloy
# sidebar_label: Contribute
# ---
# EOT

# Remove title (first line) from MD file content
# sed 1d .github/CONTRIBUTING.md >> $CONTRIB_MD_PATH
# fi

# Create roadmap.md docs page, from .github/ROADMAP.md
# ROADMAP_MD_PATH=docs/roadmap.md
# if [ -f ".github/ROADMAP.md" ]; then
# rm -rf $ROADMAP_MD_PATH
# touch $ROADMAP_MD_PATH
# cat <<EOT >> $ROADMAP_MD_PATH
# ---
# id: roadmap
# title: Alloy Roadmap
# sidebar_label: Roadmap
# ---
# EOT
# Remove title (first line) from MD file content
# sed 1d .github/ROADMAP.md >> $ROADMAP_MD_PATH
# fi

# Where the docusaurus app lives
cd website

# Install docusaurus deps
yarn install

# Build Docusaurus site
yarn build

cd -
