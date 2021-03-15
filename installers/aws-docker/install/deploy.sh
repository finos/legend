#!/bin/bash

pwd="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

. $pwd/env.sh

clean_temp() {
	rm -rf $WORK_DIR
}

gen_secrets() {
	$pwd/gen-cert.sh
	# generate random strings. remove slash
	openssl rand -base64 8 | sed 's:/::g' >$WORK_DIR/mongo.pwd
	openssl rand -base64 8 | sed 's:/::g' >$WORK_DIR/gitlab.pwd
	openssl rand -base64 8 | sed 's:/::g' >$WORK_DIR/gitlab.token
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
	echo "GITLAB ROOT PRIVATE TOKEN : $(cat $WORK_DIR/gitlab.token)"
}

$*
