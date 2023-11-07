#!/bin/bash

rm -f /.buildinfo.json
touch /.buildinfo.json
cat > /.buildinfo.json <<-END
{
  "version": "$LEGEND_OMNIBUS_IMAGE_VERSION",
  "sdlc_version": "$LEGEND_OMNIBUS_SDLC_VERSION",
  "engine_version": "$LEGEND_OMNIBUS_ENGINE_VERSION",
  "studio_version": "$LEGEND_OMNIBUS_STUDIO_VERSION"
}
END
