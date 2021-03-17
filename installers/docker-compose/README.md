# Docker Compose

Before running the setup script, make sure to update the `HOST_DNS_NAME` and `HOST_DNS` variables in `./scripts/setup.sh`

> Check your build/temp directory for the file `.env`, it will contain all the passwords and secrets.

```sh
# setup
./scripts/setup.sh
./scripts/setup.sh [<temp_dir>]

# start
docker-compose --env-file ./build/.env up # modify env file location if you specify the `temp_dir`
# if you get authentication issue with Mongo, try the following command. Read more in the Troubleshooting section
docker-compose --env-file ./build/.env up --detach --force-recreate --renew-anon-volumes

# stop
docker-compose down
```

# Known limitations

To authenticate, ideally, we can set the OAuth application in Gitlab to `trusted`, this will avoid the redirection to Gitlab in order to authorize the OAuth application for the user and thus can better serve use cases like automated end-to-end testing. However, if we do so, SDLC server will throw exception (maybe this is something we need to investigate).

Also, if we use `localhost`, we have to access via browser using the `HOST_DNS` (e.g. 192.168.1.100), if we want to make this work for `localhost` as well, we might need to adjust the OAuth application on Gitlab to include redirect URIs using `localhost`.

# Troubleshooting

## Out of space issue with `mongod` and/or `gitlab` container(s)

```sh
# cleanup dangling volumes
docker volume rm $(docker volume ls -qf dangling=true)
```

## Mongo fails to authenticate

Flags like `--force-recreate` and `--renew-anon-volumes` might be needed when composing
See https://stackoverflow.com/questions/53509236/mongo-authentication-inside-docker/53509958

## Setup script doesn't work on Mac

MacOS `sed` is [different from that of Linux](https://stackoverflow.com/questions/4247068/sed-command-with-i-option-failing-on-mac-but-works-on-linux). Replace all `sed -i ...` in scripts with `sed -i '' ...`

## Which IP address to use as HOST_DNS for localhost in the setup script?

```sh
ifconfig | grep 'inet 192'| awk '{ print $2}' # this works on Mac, we haven't tested this elsewhere
```

## Getting 401 Unauthorized when running in browser

You'd probably run into this issue when running in browsers like Chrome because it does not acknowledge our self-signed certificate. If so, you can follow this [guide](https://www.technipages.com/google-chrome-bypass-your-connection-is-not-private-message) on how to by pass this issue

```
1. In the Chrome address bar, type "chrome://flags/#allow-insecure-localhost"
2. Switch to "Enable"
3. Go to the page again localhost:8080/studio, click somewhere on the page and type `thisisunsafe`
```

## Gitlab container takes a really long time to start

Make sure to configure your box or Docker Desktop [download](https://docs.docker.com/docker-for-mac/install/) to meet Gitlab [minimum resouce requirements](https://docs.gitlab.com/ee/install/requirements.html): 10 GB disk space, 3 GB swap, and 4 GB of RAM.
