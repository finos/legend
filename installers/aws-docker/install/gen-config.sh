#!/bin/bash

if [ $SCRIPT_ENV == "mac" ]; then
	pwd="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
else
	pwd=$(readlink -f $(dirname $0))
fi

GITLAB_OAUTH_CLIENT_ID=$1
GITLAB_OAUTH_SECRET=$2

generator_config=$pwd/env.sh

templates=$pwd/templates

. $generator_config

engine_config=$WORK_DIR/generated-engine-config
sdlc_config=$WORK_DIR/generated-sdlc-config
studio_config=$WORK_DIR/generated-studio-config

echo "Generating configs to $WORK_DIR"

find_replace() {
	local dir=$1
	for f in $(find $dir -type f); do
		sed -i 's/__MONGO_HOST_PORT__/'$MONGO_HOST_PORT'/g' $f
		sed -i 's/__MONGO_USER__/'$MONGO_USER'/g' $f
		sed -i 's/__MONGO_PASSWORD__/'$MONGO_PASSWORD'/g' $f
		sed -i 's/__HOST_PUBLIC_IP__/'$HOST_PUBLIC_IP'/g' $f
		sed -i 's/__GITLAB_OAUTH_CLIENT_ID__'/$GITLAB_OAUTH_CLIENT_ID'/g' $f
		sed -i 's/__GITLAB_OAUTH_SECRET__'/$GITLAB_OAUTH_SECRET'/g' $f
		sed -i 's~__GITLAB_PUBLIC_URL__'~$GITLAB_PUBLIC_URL'~g' $f
		sed -i 's/__GITLAB_HOST__'/$GITLAB_HOST'/g' $f
		sed -i 's/__GITLAB_PORT__'/$GITLAB_PORT'/g' $f
		sed -i 's/__LEGEND_SDLC_PORT__'/$LEGEND_SDLC_PORT'/g' $f
		sed -i 's~__LEGEND_SDLC_URL__'~$LEGEND_SDLC_URL'~g' $f
		sed -i 's/__LEGEND_ENGINE_PORT__'/$LEGEND_ENGINE_PORT'/g' $f
		sed -i 's~__LEGEND_ENGINE_URL__'~$LEGEND_ENGINE_URL'~g' $f
		sed -i 's/__LEGEND_STUDIO_PORT__'/$LEGEND_STUDIO_PORT'/g' $f
		sed -i 's~__LEGEND_STUDIO_URL__'~$LEGEND_STUDIO_URL'~g' $f
	done
}

generate_engine_config() {
	rm -rf $engine_config
	cp -r $templates/engine $engine_config
	find_replace $engine_config
}

generate_sdlc_config() {
	rm -rf $sdlc_config
	cp -r $templates/sdlc $sdlc_config
	find_replace $sdlc_config
}

generate_studio_config() {
	rm -rf $studio_config
	cp -r $templates/studio $studio_config
	find_replace $studio_config
}

generate_engine_config
generate_sdlc_config
generate_studio_config
