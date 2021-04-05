#!/bin/bash

# NOTE: in this file, we call Gitlab Rails console to do a some hacking to make booting up the application
# stack more smoothly; however, this bypasses the safety net that the abstraction API layer provides and can
# break if underlying implementation changes so we should almost always prefer using APIs over Rails console.
# See https://docs.gitlab.com/ee/administration/operations/rails_console.html

# Configure Gitlab via gitlab-rails
# - Disallow signup
# - Add private access token
gitlab-rails runner '\
  ApplicationSetting.last.update_attributes(signup_enabled: false);\
  user = User.find_by_username("'$GITLAB_ROOT_USER'");\
  token = user.personal_access_tokens.find_or_create_by(scopes: [:api, :read_api, :read_user, :read_repository, :write_repository, :sudo], name: "Automation token");\
  token.set_token("'$GITLAB_PRIVATE_ACCESS_TOKEN'"); token.save! if user.personal_access_tokens.find_by_token("'$GITLAB_PRIVATE_ACCESS_TOKEN'") == nil;\
'

# Install `jq` for JSON processing
apt-get update && apt-get --assume-yes install jq

# Configure Gitlab Oauth

GITLAB_OAUTH_APPLICATION=$(curl --request POST "https://localhost:443/api/v4/applications" \
  --insecure --silent \
  --header "PRIVATE-TOKEN: $GITLAB_PRIVATE_ACCESS_TOKEN" \
  --data "name=Legend%20Demo\
&redirect_uri=\
$LEGEND_ENGINE_PUBLIC_URL/callback%0A\
$LEGEND_SDLC_PUBLIC_URL/api/auth/callback%0A\
$LEGEND_SDLC_PUBLIC_URL/api/pac4j/login/callback%0A\
$LEGEND_STUDIO_PUBLIC_URL/studio/log.in/callback%0A\
&scopes=openid%0Aprofile%0Aapi\
&confidential=false"
)

# Make the application trusted so we can skip authorizing it when starting Studio
# See https://docs.gitlab.com/ee/integration/oauth_provider.html#instance-wide-applications
APPLICATION_ID=$(echo $GITLAB_OAUTH_APPLICATION | tr --delete '\n' | jq .id | jq -r)
gitlab-rails runner '\
  application = ApplicationsFinder.new.execute.find_by_id("'$APPLICATION_ID'");\
  application.trusted=true;\
  application.save!;\
'

GITLAB_ENV_FILE=/config/gitlab.env
[ -e $GITLAB_ENV_FILE ] && rm $GITLAB_ENV_FILE
echo "GITLAB_OAUTH_CLIENT_ID=$(echo $GITLAB_OAUTH_APPLICATION | tr --delete '\n' | jq .application_id | jq -r)" >> $GITLAB_ENV_FILE
echo "GITLAB_OAUTH_SECRET=$(echo $GITLAB_OAUTH_APPLICATION | tr --delete '\n' | jq .secret | jq -r)" >> $GITLAB_ENV_FILE
