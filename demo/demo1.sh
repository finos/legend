#!/bin/bash

docker run -v --platform=linux/amd64 -it \
	-p 6900:6900 \
	-p 6901:6901 \
	-p 6902:6902 \
       	-p 6903:6903 \
	-p 6100:6100 \
	-p 6300:6300 \
	-p 9000:9000 \
	--env LEGEND_OMNIBUS_CONFIG_SDLC_MODE="in-memory" \
	legenddemo/legend-omnibus:v1-slim
