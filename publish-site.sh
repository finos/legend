#!/bin/bash

# Configure GitHub to push on gh-pages branch
git config --global user.name "${GH_NAME}"
git config --global user.email "${GH_EMAIL}"
echo "machine github.com login ${GH_NAME} password ${GH_TOKEN}" > ~/.netrc

# Where the docusaurus app lives
cd website

# Build HTML and push it to gh-pages branch
GIT_USER="${GH_NAME}" yarn run publish-gh-pages