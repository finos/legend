#!/bin/bash

rm -f /.buildinfo.json
touch /.buildinfo.json
echo "{" >> /.buildinfo.json
echo "  \"version\": \"$LEGEND_OMNIBUS_IMAGE_VERSION\"," >> /.buildinfo.json
echo "  \"gitlab_version\": \"$LEGEND_OMNIBUS_GITLAB_VERSION\"," >> /.buildinfo.json
echo "  \"engine_image\": \"$LEGEND_OMNIBUS_ENGINE_VERSION\"," >> /.buildinfo.json
echo "  \"sdlc_image\": \"$LEGEND_OMNIBUS_SDLC_VERSION\"," >> /.buildinfo.json
echo "  \"pure_ide_image\": \"$LEGEND_OMNIBUS_PURE_IDE_IMAGE\"," >> /.buildinfo.json
echo "  \"studio_image\": \"$LEGEND_OMNIBUS_STUDIO_VERSION\"" >> /.buildinfo.json
echo "}" >> /.buildinfo.json
