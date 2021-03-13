#!/bin/bash

if [ $SCRIPT_ENV == "mac" ]; then
	pwd="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
else
	pwd=$(readlink -f $(dirname $0))
fi

. $pwd/env.sh

clean_temp() {
	rm -rf $WORK_DIR
}

gen_secrets() {
	$pwd/gen-cert.sh
	# generate random strings. remove slash
	openssl rand -base64 8 | sed 's:/::g' >$WORK_DIR/mongo.pwd
	openssl rand -base64 8 | sed 's:/::g' >$WORK_DIR/gitlab.pwd
}

gen_config() {
	$pwd/gen-config.sh $*
}

print() {
	(
		set -o posix
		set
	) | egrep "DNS|PUBLIC_IP|GITLAB|MONGO|ENGINE|SDLC|STUDIO" | sort | nl
}

print_secrets() {
	echo "MONGO ROOT PWD : $(cat $WORK_DIR/mongo.pwd)"
	echo "GITLAB ROOT PWD : $(cat $WORK_DIR/gitlab.pwd)"
}

print_oauth() {
	echo $LEGEND_ENGINE_URL/callback
	echo $LEGEND_SDLC_URL/api/auth/callback
	echo $LEGEND_SDLC_URL/api/pac4j/login/callback
	echo $LEGEND_STUDIO_URL/log.in/callback
}

$*
