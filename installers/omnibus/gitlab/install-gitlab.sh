#!/bin/bash

if [[ "$LEGEND_OMNIBUS_GITLAB_USE_REMOTE" = true ]]; then
  exit 0;
fi

# Follow the Omnibus installation guide
# See https://about.gitlab.com/install/#ubuntu

apt-get update && apt-get install -y curl openssh-server ca-certificates tzdata perl
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | bash

# Set the root password before installation
export GITLAB_ROOT_PASSWORD=$LEGEND_OMNIBUS_GITLAB_ROOT_PASSWORD

if [[ ! -z "$LEGEND_OMNIBUS_GITLAB_VERSION" ]]; then
  apt-get install gitlab-ee=$LEGEND_OMNIBUS_GITLAB_VERSION
else
  apt-get install gitlab-ee
fi
