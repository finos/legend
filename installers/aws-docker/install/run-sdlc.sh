#!/bin/bash

pwd="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

. $pwd/env.sh

start()
{
	docker run --name sdlc --entrypoint '/bin/sh' \
		--publish $LEGEND_SDLC_PORT:$LEGEND_SDLC_PORT \
		-v $WORK_DIR/generated-sdlc-config:/config \
		-v $WORK_DIR/ssl:/ssl finos/legend-sdlc-server:0.22.0 \
		-c 'java -Xmx2G -Xms256M -Xss4M -Djavax.net.ssl.trustStore=/ssl/truststore.jks -Djavax.net.ssl.trustStorePassword=changeit -cp /app/bin/*.jar -Dfile.encoding=UTF8 org.finos.legend.sdlc.server.LegendSDLCServer server /config/config.yml'
}

stop()
{
	docker container prune -f
	docker container stop sdlc
}

restart()
{
	stop
	start
}

$*
