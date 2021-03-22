#!/bin/bash

pwd=`readlink -f $(dirname $0)`

. $pwd/env.sh

start() {
	docker run --name engine --entrypoint '/bin/sh' \
		--publish $LEGEND_ENGINE_PORT:$LEGEND_ENGINE_PORT \
		-v $WORK_DIR/generated-engine-config:/config \
		-v $WORK_DIR/ssl:/ssl finos/legend-engine-server:2.6.1-SNAPSHOT \
		-c 'java -Xmx2G -Xms256M -Xss4M -Djavax.net.ssl.trustStore=/ssl/truststore.jks -Djavax.net.ssl.trustStorePassword=changeit -cp /app/bin/*-shaded.jar -Dfile.encoding=UTF8 org.finos.legend.engine.server.Server server /config/config.json'
}

stop() {
	docker container prune -f
	docker container stop engine
}

restart() {
	stop
	start
}

$*
