#!/bin/bash

rm -f /.buildinfo.json
touch /.buildinfo.json
cat > /.buildinfo.json <<-END
{
  "version": "$LEGEND_OMNIBUS_IMAGE_VERSION",
  "gitlab_version": "$LEGEND_OMNIBUS_GITLAB_VERSION",
  "engine_version": "$LEGEND_OMNIBUS_ENGINE_VERSION",
  "sdlc_version": "$LEGEND_OMNIBUS_SDLC_VERSION",
  "pure_ide_version": "$LEGEND_OMNIBUS_PURE_IDE_VERSION",
  "studio_version": "$LEGEND_OMNIBUS_STUDIO_VERSION"
}
END
