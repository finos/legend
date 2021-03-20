# Docker Compose for Legend with remote instance of Gitlab

Before running the setup script, make sure to supply a valid config file (you can use the template `config.properties`):

- Make sure to update the variables `HOST_DNS_NAME` and `HOST_ADDRESS` (if needed)
- Make sure to update Gitlab-related configs, follow [Gitlab OAuth config setup](#gitlab-oauth-config-setup).

```sh
# setup
./scripts/setup.sh ./config.properties

# start
docker-compose --env-file ~/legend-temp/.env --profile all up --detach

# stop
docker-compose --env-file ~/legend-temp/.env down
```

After starting the project, you can go to your browser at `http://${HOST_ADDRESS}:8080/studio` to launch Studio. This should redirect you to Gitlab, after logging-in you would be redirected back to Studio.

## Gitlab OAuth config setup

The OpenID and OAuth configuration requires a Gitlab application to be registered. Navigate to `User Settings > Applications` and create an application with the following parameters:

- Name: Legend Demo
- Redirect URI: If you don't know how to generate these, put a dummy URL for now, e.g. `http://dummy`
- Enable the "Confidential" check box
- Enable these scopes: openid, profile, api
- Finally, "Save Application"

In your config file (e.g. `config.properties`), set the value for `GITLAB_OAUTH_CLIENT_ID` and `GITLAB_OAUTH_SECRET` based on the newly created application.

If you used a dummy redirect URL, make sure to update the application with the proper redirect URLs as printed out in the terminal after running the setup script. You should see something like the following:

```sh
# This is just an example, subjected to change
http://192.168.1.100:6060/callback
http://192.168.1.100:7070/api/auth/callback
http://192.168.1.100:7070/api/pac4j/login/callback
http://192.168.1.100:8080/studio/log.in/callback
```

## Note on development

This Docker compose can also be used as a quick way to setup the backend for development of [legend-studio](https://github.com/finos/legend-studio). Make sure to add relevant redirect URIs to your Gitlab OAuth application. If you use `localhost` for the dev server, make sure to add the following:

```sh
http://localhost:6060/callback
http://localhost:7070/api/auth/callback
http://localhost:7070/api/pac4j/login/callback
http://localhost:8080/studio/log.in/callback
```

Then you can start the back end by starting the Docker compose with `core` profile

```sh
docker-compose --env-file ~/legend-temp/.env --profile core up --detach
```

> Since starting Studio in development mode using the ad-hoc dev server would not get the benefit of OAuth redirection, we would need to manually go to the SDLC server to get the OAuth token.
