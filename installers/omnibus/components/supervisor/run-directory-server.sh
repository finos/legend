#!/bin/bash

# Setup a light HTTP server to serve the static directory
# which can be leveraged to help with status checking, testing, and debugging
python3 -m http.server $LEGEND_OMNIBUS_SUPERVISOR_DIRECTORY_SERVER_PORT
