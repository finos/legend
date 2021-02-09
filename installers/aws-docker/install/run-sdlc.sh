#!/bin/bash

pwd=`readlink -f $(dirname $0)`

. $pwd/env.sh


start()
{
	docker run --name sdlc --entrypoint '/bin/sh' \
		--publish $LEGEND_SDLC_PORT:$LEGEND_SDLC_PORT \
		-v $WORK_DIR/generated-sdlc-config:/config \
		-v $WORK_DIR/ssl:/ssl finos/legend-sdlc-server:0.12.1-SNAPSHOT \
		-c 'java -Xmx2G -Xms256M -Xss4M -Djavax.net.ssl.trustStore=/ssl/truststore.jks -Djavax.net.ssl.trustStorePassword=changeit -cp /app/bin/*.jar -Dfile.encoding=UTF8 org.finos.legend.sdlc.server.LegendSDLCServer server /config/config.json'
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

