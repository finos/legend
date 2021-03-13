#!/bin/bash

if [ $SCRIPT_ENV == "mac" ]; then
	pwd="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
else
	pwd=$(readlink -f $(dirname $0))
fi

. $pwd/env.sh

# Note that we set GITLAB_POST_RECONFIGURE_SCRIPT to disable public
# signup. It's currently impossible to do this via the normal config,
# this has been an open issue for a few years.
#
# See https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/2837#note_109602925.

CERT_DIR=$WORK_DIR
KEY_FILE=/etc/gitlab/ssl/$HOST_DNS_NAME".key"
CERT_FILE=/etc/gitlab/ssl/$HOST_DNS_NAME".crt"

GITLAB_DATA_DIR=$CONTAINER_WORK_DIR/gitlab
mkdir -p $GITLAB_DATA_DIR

start() {
	cp -r $CERT_DIR/ssl $GITLAB_DATA_DIR
	docker run --name gitlab --env \
		GITLAB_OMNIBUS_CONFIG="external_url 'https://$HOST_DNS_NAME:6443/'; gitlab_rails['lfs_enabled'] = true; nginx['listen_port'] =443 ; nginx['ssl_certificate'] = '$CERT_FILE' ; nginx['ssl_certificate_key'] = '$KEY_FILE'; letsencrypt['enable'] = false ; gitlab_rails['initial_root_password'] = '$GITLAB_ROOT_PASSWORD';" \
		--env \
		GITLAB_POST_RECONFIGURE_SCRIPT="gitlab-rails runner 'ApplicationSetting.last.update_attributes(signup_enabled: false)'" \
		--publish 6443:443 \
		--volume $GITLAB_DATA_DIR:/etc/gitlab \
		gitlab/gitlab-ce:latest
}

stop() {
	docker container prune -f
	docker container stop gitlab
}

restart() {
	stop
	start
}

$*
