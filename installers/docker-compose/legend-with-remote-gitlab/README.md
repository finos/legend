# Docker Compose for Legend with remote instance of Gitlab

1. Modify the config file (you can use the template `config.properties`):

- Change the values for `HOST_DNS_NAME` and `HOST_ADDRESS` (if needed)
- Change the values for `GITLAB_URL` and Gitlab OAuth configs: `GITLAB_OAUTH_CLIENT_ID` and `GITLAB_OAUTH_SECRET`.

> Note that for OAuth configs, you would need to either create a new or use an existing Gitlab OAuth application registered at `GITLAB_URL`, follow [Gitlab OAuth config setup](#gitlab-oauth-config-setup) for more details.

2. Run the setup script:

```sh
./scripts/setup.sh ./config.properties
```

> After setting up, the terminal will print proper redirect URIs for your OAuth application, so if you used a dummy redirect URL while setting up your Gitlab OAuth application, make sure to update the application with the proper redirect URLs. You should expect to see something like the following:

```sh
# This is just an example, subjected to change
http://192.168.1.100:6060/callback
http://192.168.1.100:7070/api/auth/callback
http://192.168.1.100:7070/api/pac4j/login/callback
http://192.168.1.100:8080/studio/log.in/callback
```

3. Run the Docker compose project

```sh
docker-compose --env-file ~/legend-temp/.env --profile all up --detach
```

> Notice `--profile all`. This is needed to start Studio, which is the front UI of the stack. If you are a developer working on Studio, see [note on development](#note-on-development)

4. Run the application

After starting the project, you can go to your browser at `http://${HOST_ADDRESS}:8080/studio` to launch Studio. This should redirect you to Gitlab, after logging-in you would be redirected back to Studio.

5. Stop the Docker compose project

```sh
docker-compose --env-file ~/legend-temp/.env down
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

## Gitlab OAuth config setup

If you don't already have a Gitlab OAuth application, first, navigate to `User Settings > Applications` and create an application with the following parameters:

- Name: Legend Demo
- Redirect URI: If you don't know how to generate these, put a dummy URL for now, e.g. `http://dummy`
- Enable the "Confidential" check box
- Enable these scopes: openid, profile, api
- Finally, "Save Application"
