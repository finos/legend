#!/bin/bash

# This is required in Gitlab configuration
EXTERNAL_URL=http://localhost

# NOTE: we cannot exactly foolow step detailed in the omnibus installation guide
# See https://about.gitlab.com/install/#ubuntu
# Due to a problem with logrotate service, auto-reconfiguration will get stuck
# so we have to use the following workaround
# See https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/4257
# See https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/7776
/opt/gitlab/embedded/bin/runsvdir-start &

gitlab-ctl reconfigure

# NOTE: in this file, we call Gitlab Rails console to do a some hacking to make booting up the application
# stack more smoothly; however, this bypasses the safety net that the abstraction API layer provides and can
# break if underlying implementation changes so we should almost always prefer using APIs over Rails console.
# See https://docs.gitlab.com/ee/administration/operations/rails_console.html

# Configure Gitlab via gitlab-rails
# - Disallow signup
# - Add private access token
gitlab-rails runner '\
  ApplicationSetting.last.update_attribute(:signup_enabled, false);\
  user = User.find_by_username("'$LEGEND_OMNIBUS_GITLAB_ROOT_USER'");\
  token = user.personal_access_tokens.find_or_create_by(scopes: [:api, :read_api, :read_user, :read_repository, :write_repository, :sudo], name: "Automation token");\
  token.set_token("'$LEGEND_OMNIBUS_GITLAB_PRIVATE_ACCESS_TOKEN'"); token.save! if user.personal_access_tokens.find_by_token("'$LEGEND_OMNIBUS_GITLAB_PRIVATE_ACCESS_TOKEN'") == nil;\
'

# Configure Gitlab Oauth
# NOTE: the following section is needed if we need to auto setup an OAuth application for authentication;
# however, since we use private access token directly, we can skip this step, but it's handy to keep around
# NOTE: if enabled, this requires `jq` so add `apt-get update && apt-get install -y jq` to the Dockerfile

# GITLAB_OAUTH_APPLICATION=$(curl --request POST "http://localhost:80/api/v4/applications" \
#   --insecure --silent \
#   --header "PRIVATE-TOKEN: $LEGEND_OMNIBUS_GITLAB_PRIVATE_ACCESS_TOKEN" \
#   --data "name=Legend%20Demo\
# &redirect_uri=\
# http://localhost:$LEGEND_OMNIBUS_ENGINE_PORT/callback%0A\
# http://localhost:$LEGEND_OMNIBUS_SDLC_PORT/api/auth/callback%0A\
# http://localhost:$LEGEND_OMNIBUS_SDLC_PORT/api/pac4j/login/callback%0A\
# http://localhost:$LEGEND_OMNIBUS_STUDIO_PORT/studio/log.in/callback%0A\
# &scopes=openid%0Aprofile%0Aapi\
# &confidential=false"
# )

# # Make the application trusted so we can skip authorizing it when starting Studio
# # See https://docs.gitlab.com/ee/integration/oauth_provider.html#instance-wide-applications
# APPLICATION_ID=$(echo $GITLAB_OAUTH_APPLICATION | tr --delete '\n' | jq .id | jq -r)
# gitlab-rails runner '\
#   application = ApplicationsFinder.new.execute.find_by_id("'$APPLICATION_ID'");\
#   application.trusted=true;\
#   application.save!;\
# '

# GITLAB_ENV_FILE=/config/gitlab.env
# [ -e $GITLAB_ENV_FILE ] && rm $GITLAB_ENV_FILE
# mkdir -p /config/
# touch $GITLAB_ENV_FILE
# echo "GITLAB_OAUTH_CLIENT_ID=$(echo $GITLAB_OAUTH_APPLICATION | tr --delete '\n' | jq .application_id | jq -r)" >> $GITLAB_ENV_FILE
# echo "GITLAB_OAUTH_SECRET=$(echo $GITLAB_OAUTH_APPLICATION | tr --delete '\n' | jq .secret | jq -r)" >> $GITLAB_ENV_FILE
