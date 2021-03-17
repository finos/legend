#!/bin/bash

# Configure Gitlab via gitlab-rails
# - Disallow signup
# - Add private access token
gitlab-rails runner '\
  ApplicationSetting.last.update_attributes(signup_enabled: false);\
  user = User.find_by_username("'$GITLAB_ROOT_USER'");\
  token = user.personal_access_tokens.find_or_create_by(scopes: [:api, :read_api, :read_user, :read_repository, :write_repository, :sudo], name: "Automation token");\
  token.set_token("'$GITLAB_PRIVATE_ACCESS_TOKEN'"); token.save! if user.personal_access_tokens.find_by_token("'$GITLAB_PRIVATE_ACCESS_TOKEN'") == nil;\
'

# # Install `jq` for JSON processing
apt-get update && apt-get --assume-yes install jq
jq

# Configure Gitlab Oauth

GITLAB_OAUTH_APPLICATION=$(curl --request POST "https://localhost:443/api/v4/applications" \
  --insecure --silent \
  --header "PRIVATE-TOKEN: $GITLAB_PRIVATE_ACCESS_TOKEN" \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "name":"Legend Demo",
    "redirect_uri": "'"\
$LEGEND_ENGINE_PUBLIC_URL/callback\\n\
$LEGEND_SDLC_PUBLIC_URL/api/auth/callback\\n\
$LEGEND_SDLC_PUBLIC_URL/api/pac4j/login/callback\\n\
$LEGEND_STUDIO_PUBLIC_URL/studio/log.in/callback\\n"'",
    "scopes": "openid\nprofile\napi",
    "confidential": false
  }')

GITLAB_ENV_FILE=/config/gitlab.env
[ -e $GITLAB_ENV_FILE ] && rm $GITLAB_ENV_FILE
echo "GITLAB_OAUTH_CLIENT_ID=$(echo $GITLAB_OAUTH_APPLICATION | jq .application_id | jq -r)" >> $GITLAB_ENV_FILE
echo "GITLAB_OAUTH_SECRET=$(echo $GITLAB_OAUTH_APPLICATION | jq .secret | jq -r)" >> $GITLAB_ENV_FILE
