#!/bin/bash

REPO_NAME="$1"
RELEASE_TYPE="$2"

# Query Maven Central API to get latest version
latest_version=$(curl -s "https://api.github.com/repos/${OWNER}/${REPO_NAME}/tags" | jq -r --arg repo_name "${REPO_NAME}" '.[] | select(.name | test("^" + $repo_name + "-[0-9]+\\.[0-9]+\\.[0-9]+$")) | .name' | sort -V | tail -n1 | sed "s/^${REPO_NAME}-//")

# Increment patch version
IFS='.' read -r major minor patch <<< "$latest_version"

if [ "$RELEASE_TYPE" == "major" ]; then
  major=$((major + 1))
elif [ "$RELEASE_TYPE" == "minor" ]; then
  minor=$((minor + 1))
else
  patch=$((patch + 1))
fi

new_version="${major}.${minor}.${patch}"
echo "::set-output name=new_version::$new_version"