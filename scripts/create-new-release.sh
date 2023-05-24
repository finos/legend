#!/bin/bash

# --------------------------- Setup ------------------------------

source ./installers/omnibus/.env

echo "Creating new release version $NEW_VERSION..."

if [[ -z $NEW_VERSION ]]; then
  NEW_VERSION=$(date '+%Y-%m-%d')
fi

if [[ -z $NEW_ENGINE_VERSION ]]; then
  NEW_ENGINE_VERSION=$LEGEND_OMNIBUS_ENGINE_VERSION
else
  echo "Bumping Legend Engine: $LEGEND_OMNIBUS_ENGINE_VERSION to $NEW_ENGINE_VERSION..."
fi

if [[ -z $NEW_SDLC_VERSION ]]; then
  NEW_SDLC_VERSION=$LEGEND_OMNIBUS_SDLC_VERSION
else
  echo "Bumping Legend SDLC: $LEGEND_OMNIBUS_SDLC_VERSION to $NEW_SDLC_VERSION..."
fi

if [[ -z $NEW_STUDIO_VERSION ]]; then
  NEW_STUDIO_VERSION=$LEGEND_OMNIBUS_STUDIO_VERSION
else
  echo "Bumping Legend Studio: $LEGEND_OMNIBUS_STUDIO_VERSION to $NEW_STUDIO_VERSION..."
fi

# --------------------------- Check ------------------------------

# Check if the version tag is valid and not already existed
if [[ ! "$NEW_VERSION" =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$ ]]; then
  echo "Version tag must starts with a date-like string (YYYY-MM-DD)"
  exit 1
fi

if [[ -d "./releases/$NEW_VERSION" ]]; then
  echo "Release $NEW_VERSION already exists"
  exit 1
fi

# --------------------------- Make Changes ------------------------------

mkdir -p ./releases/$NEW_VERSION
touch ./releases/$NEW_VERSION/manifest.json
cat > ./releases/$NEW_VERSION/manifest.json <<-END
{
  "version": "$NEW_VERSION",
  "timestamp": $(date +%s),
  "releaseNotesUrl": "",
  "core": {
    "finos/legend-engine-server": "$NEW_ENGINE_VERSION",
    "finos/legend-sdlc-server": "$NEW_SDLC_VERSION",
    "finos/legend-studio": "$NEW_STUDIO_VERSION"
  }
}
END

sed -i'' -e "s/^LEGEND_OMNIBUS_IMAGE_VERSION.*/LEGEND_OMNIBUS_IMAGE_VERSION=$NEW_VERSION/" ./installers/omnibus/.env
sed -i'' -e "s/^LEGEND_OMNIBUS_ENGINE_VERSION.*/LEGEND_OMNIBUS_ENGINE_VERSION=$NEW_ENGINE_VERSION/" ./installers/omnibus/.env
sed -i'' -e "s/^LEGEND_OMNIBUS_SDLC_VERSION.*/LEGEND_OMNIBUS_SDLC_VERSION=$NEW_SDLC_VERSION/" ./installers/omnibus/.env
sed -i'' -e "s/^LEGEND_OMNIBUS_PURE_IDE_VERSION.*/LEGEND_OMNIBUS_PURE_IDE_VERSION=$NEW_ENGINE_VERSION/" ./installers/omnibus/.env
sed -i'' -e "s/^LEGEND_OMNIBUS_STUDIO_VERSION.*/LEGEND_OMNIBUS_STUDIO_VERSION=$NEW_STUDIO_VERSION/" ./installers/omnibus/.env

# --------------------------- Commit Changes ------------------------------

git add .
git commit -m "new Docker release $NEW_VERSION"
git push
