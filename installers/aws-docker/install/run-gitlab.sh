#!/bin/bash

pwd=`readlink -f $(dirname $0)`

. $pwd/env.sh

CERT_DIR=$WORK_DIR
KEY_FILE=/etc/gitlab/ssl/$HOST_DNS_NAME".key"
CERT_FILE=/etc/gitlab/ssl/$HOST_DNS_NAME".crt"

GITLAB_DATA_DIR=$CONTAINER_WORK_DIR/gitlab
mkdir -p $GITLAB_DATA_DIR

build()
{
	$pwd/gitlab/build.sh
}

start()
{
	build 

	cp -r $CERT_DIR/ssl $GITLAB_DATA_DIR

	docker run --name gitlab --env \
		GITLAB_OMNIBUS_CONFIG="external_url 'https://$HOST_DNS_NAME:6443/'; gitlab_rails['lfs_enabled'] = true; nginx['listen_port'] =443 ; nginx['ssl_certificate'] = '$CERT_FILE' ; nginx['ssl_certificate_key'] = '$KEY_FILE'; letsencrypt['enable'] = false ; gitlab_rails['initial_root_password'] = '$GITLAB_ROOT_PASSWORD';" \
		--publish 6443:443 \
		-v $GITLAB_DATA_DIR:/etc/gitlab \
		gitlab-ce-custom:latest
}

stop()
{
	docker container prune -f
	docker container stop gitlab
}

restart()
{
	stop
	start
}

$*
