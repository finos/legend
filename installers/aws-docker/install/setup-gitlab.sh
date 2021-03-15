#!/bin/bash

pwd="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

. $pwd/env.sh

GITLAB_DATA_DIR=$CONTAINER_WORK_DIR/gitlab
GITLAB_URL="https://$HOST_DNS_NAME:6443"

GITLAB_SHARED_SECRET=$(cat $GITLAB_DATA_DIR/gitlab-secrets.json | jq .gitlab_shell.secret_token | jq -r)
BASE64_ENCODED_GITLAB_SHARED_SECRET=$(echo -n "$GITLAB_SHARED_SECRET" | base64)
GITLAB_INTERNAL_AUTH_HEADER="Gitlab-Shared-Secret: $BASE64_ENCODED_GITLAB_SHARED_SECRET"

docker exec gitlab gitlab-rails runner 'token = User.find_by_username("root").personal_access_tokens.create(scopes: [:api, :read_api, :read_user, :read_repository, :write_repository, :sudo], name: "Automation token"); token.set_token("'$GITLAB_ROOT_PRIVATE_TOKEN'"); token.save!'

# Configure Gitlab Oauth

GITLAB_OAUTH_APPLICATION=$(curl --request POST "$GITLAB_URL/api/v4/applications" \
  --insecure --silent \
  --header "PRIVATE-TOKEN: $GITLAB_ROOT_PRIVATE_TOKEN" \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "name":"Legend Demo",
    "redirect_uri": "'"$LEGEND_ENGINE_URL/callback\\n$LEGEND_SDLC_URL/api/auth/callback\\n$LEGEND_SDLC_URL/api/pac4j/login/callback\\n$LEGEND_STUDIO_URL/log.in/callback\\n"'",
    "scopes": "openid\nprofile\napi",
    "confidential": false
  }')

GITLAB_OAUTH_CLIENT_ID=$(echo $GITLAB_OAUTH_APPLICATION | jq .application_id | jq -r)
GITLAB_OAUTH_SECRET=$(echo $GITLAB_OAUTH_APPLICATION | jq .secret | jq -r)

echo $GITLAB_OAUTH_CLIENT_ID
echo $GITLAB_OAUTH_SECRET
