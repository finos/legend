#!/bin/bash

pwd=`readlink -f $(dirname $0)`

. $pwd/env.sh

start()
{
	docker run --name mongo --publish 27017:27017 \
		-e MONGO_INITDB_ROOT_USERNAME=$MONGO_USER \
		-e MONGO_INITDB_ROOT_PASSWORD=$MONGO_PASSWORD \
		-d mongo:4.0 mongod --auth
}

stop()
{
	docker container prune -f
	docker container stop mongo
}

restart()
{
	stop
	start
}

$*
