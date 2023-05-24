#!/bin/bash

rm -f /.buildinfo.json
touch /.buildinfo.json
echo "{" >> /.buildinfo.json
echo "  \"version\": \"$LEGEND_OMNIBUS_IMAGE_VERSION\"," >> /.buildinfo.json
echo "  \"gitlab_version\": \"$LEGEND_OMNIBUS_GITLAB_VERSION\"," >> /.buildinfo.json
echo "  \"engine_version\": \"$LEGEND_OMNIBUS_ENGINE_VERSION\"," >> /.buildinfo.json
echo "  \"sdlc_version\": \"$LEGEND_OMNIBUS_SDLC_VERSION\"," >> /.buildinfo.json
echo "  \"pure_ide_version\": \"$LEGEND_OMNIBUS_PURE_IDE_VERSION\"," >> /.buildinfo.json
echo "  \"studio_version\": \"$LEGEND_OMNIBUS_STUDIO_VERSION\"" >> /.buildinfo.json
echo "}" >> /.buildinfo.json
