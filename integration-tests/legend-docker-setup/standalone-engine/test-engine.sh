#!/bin/bash -x

echo -e "+ Docker ps"
docker ps 

# docker compose logs engine -f

sleep_secs=30
echo -e "+ Wait for container init. Sleeping for $sleep_secs secs "
sleep $sleep_secs

engine_url=http://localhost:6300/api/server/v1/info
echo "+ Testing engine server at url $engine_url"

curl -v $engine_url > /tmp/engine.json

echo "+ Engine /info output"

cat /tmp/engine.json | jq .

echo "+ Verify engine /info output"

git_branch=`cat /tmp/engine.json | jq -r '.info.legendSDLC["git.branch"]'`

test "master" == $git_branch
