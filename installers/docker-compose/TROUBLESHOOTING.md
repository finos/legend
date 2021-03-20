# Troubleshooting

## Out of space issue with `mongod` and/or `gitlab` container(s)

Try cleaning up dangling volumes created by Docker and remember to run `docker compose down` when shutting down the Compose project.

```sh
docker volume rm $(docker volume ls -qf dangling=true)
```

## Mongo fails to authenticate

If after running and restarting the docker up script a few times and Mongo starts to fail to authenticate, flags like `--force-recreate` and `--renew-anon-volumes` [might be needed when composing](https://stackoverflow.com/questions/53509236/mongo-authentication-inside-docker/53509958).

```sh
docker-compose --env-file ./build/.env up --detach --force-recreate --renew-anon-volumes
```

## Getting 'Your connection is not private' in Chromium-based browsers

You'd probably run into this issue when running in browsers like Chrome because it does not acknowledge our self-signed certificate. If so, you can follow this [guide](https://www.technipages.com/google-chrome-bypass-your-connection-is-not-private-message) on how to by pass this issue:

1. In the browser address bar, type `chrome://flags/#allow-insecure-localhost` and switch to `Enable`.
2. Go to the page again `localhost:8080/studio`, you should still see the warning. However, now, click somewhere on the page and type `thisisunsafe` and you should see the page gets reloaded and display properly.

## Getting `Unauthorized` and 401 call to SDLC after logging into Gitlab and being redirected to Studio

Follow the workaround for the issue with [non private connection in Chromium-based browser](#getting-your-connection-is-not-private-in-chromium-based-browsers).

> This is a [known issue](https://github.com/finos/legend-studio/issues/28) with the new `SameSite` cookie policy that Chromium-based browser has on our `LegendSSO` token. The fix involves setting `SameSite=None; Secure` on all cookies, which poses as a challenge since it requires us to serve every Legend endpoints with HTTPS. We might consider doing that for this Docker compose.

## Gitlab container takes a really long time to start

Make sure to configure your box or Docker Desktop [download](https://docs.docker.com/docker-for-mac/install/) to meet Gitlab [minimum resouce requirements](https://docs.gitlab.com/ee/install/requirements.html): 10 GB disk space, 3 GB swap, and 4 GB of RAM.

## Seeing `java.lang.NoClassDefFoundError` in Legend SDLC log

This is a problem that rarely comes up, but unfortunately, we haven't been able to reliably reproduce it. Sometimes from SDLC side, we observe `java.lang.NoClassDefFoundError`, this _might be_ due to resource-related issues (i.e. memory), try to improve the spec of the sytem running Docker if possible.
