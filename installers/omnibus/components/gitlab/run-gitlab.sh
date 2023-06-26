#!/bin/bash

if [[ ! -z "$LEGEND_OMNIBUS_CONFIG_REMOTE_GITLAB_PAT" ]]; then
  echo -e "\e[33mUsing remote Gitlab instance...\e[0m"
  echo "LEGEND_OMNIBUS_GITLAB_PERSONAL_ACCESS_TOKEN=$LEGEND_OMNIBUS_CONFIG_REMOTE_GITLAB_PAT" >> /.env
  echo "LEGEND_OMNIBUS_GITLAB_URL_SCHEME=https" >> /.env
  echo "LEGEND_OMNIBUS_GITLAB_URL_HOST=gitlab.com" >> /.env
  echo "LEGEND_OMNIBUS_GITLAB_URL_PORT=443" >> /.env
  exit 0
fi

# Set the URL
# See https://docs.gitlab.com/omnibus/settings/configuration.html#configure-a-relative-url-for-gitlab
sed -i'' -e "s/^external_url.*/external_url \"http:\/\/localhost:$LEGEND_OMNIBUS_GITLAB_PORT\"/" /etc/gitlab/gitlab.rb

# Set the initial root password
# See https://docs.gitlab.cn/14.0/omnibus/installation/#set-up-the-initial-password
sed -i'' -e "s/^# gitlab_rails\['initial_root_password'\].*/gitlab_rails['initial_root_password'] = \"$LEGEND_OMNIBUS_GITLAB_ROOT_PASSWORD\"/" /etc/gitlab/gitlab.rb

# Turn off init detection
# See https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/3552
# See https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/3028
sed -i'' -e "s/^# package\['detect_init'\].*/package['detect_init'] = false/" /etc/gitlab/gitlab.rb

# NOTE: we cannot exactly foolow step detailed in the omnibus installation guide
# See https://about.gitlab.com/install/#ubuntu
# Due to a problem with `logrotate` service, auto-reconfiguration will get stuck
# so we have to use the following workaround
# See https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/4257
# See https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/7776
/opt/gitlab/embedded/bin/runsvdir-start &

gitlab-ctl reconfigure

########################## Post Configuration ##########################

# Generate Personal Access Token
LEGEND_OMNIBUS_GITLAB_PERSONAL_ACCESS_TOKEN=$(openssl rand -base64 8 | sed 's:/::g')
echo "LEGEND_OMNIBUS_GITLAB_PERSONAL_ACCESS_TOKEN=$LEGEND_OMNIBUS_GITLAB_PERSONAL_ACCESS_TOKEN" >> /.env
echo "LEGEND_OMNIBUS_GITLAB_URL_SCHEME=http" >> /.env
echo "LEGEND_OMNIBUS_GITLAB_URL_HOST=localhost" >> /.env
echo "LEGEND_OMNIBUS_GITLAB_URL_PORT=$LEGEND_OMNIBUS_GITLAB_PORT" >> /.env

# NOTE: in this file, we call Gitlab Rails console to do a some hacking to make booting up the application
# stack more smoothly; however, this bypasses the safety net that the abstraction API layer provides and can
# break if underlying implementation changes so we should almost always prefer using APIs over Rails console.
# See https://docs.gitlab.com/ee/administration/operations/rails_console.html
#
# Note that it is required to set an expiry date for the access token, so we choose 90-day as a reasonable period
# See https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/6625

# Configure Gitlab via gitlab-rails
# - Disallow signup
# - Add personal access token
gitlab-rails runner '\
  ApplicationSetting.last.update_attribute(:signup_enabled, false);\
  user = User.find_by_username("'$LEGEND_OMNIBUS_GITLAB_ROOT_USER'");\
  token = user.personal_access_tokens.find_or_create_by(scopes: [:api, :read_api, :read_user, :read_repository, :write_repository, :sudo], name: "Automation token", expires_at: Date.current.advance(days: 90));\
  token.set_token("'$LEGEND_OMNIBUS_GITLAB_PERSONAL_ACCESS_TOKEN'"); token.save! if user.personal_access_tokens.find_by_token("'$LEGEND_OMNIBUS_GITLAB_PERSONAL_ACCESS_TOKEN'") == nil;\
'

# Configure Gitlab Oauth
# NOTE: the following section is needed if we need to auto setup an OAuth application for authentication;
# however, since we use personal access token directly, we can skip this step, but it's handy to keep around
# NOTE: if enabled, this requires `jq` so add `apt-get update && apt-get install -y jq` to the Dockerfile

# GITLAB_OAUTH_APPLICATION=$(curl --request POST "http://localhost:80/api/v4/applications" \
#   --insecure --silent \
#   --header "PRIVATE-TOKEN: $LEGEND_OMNIBUS_GITLAB_PERSONAL_ACCESS_TOKEN" \
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
