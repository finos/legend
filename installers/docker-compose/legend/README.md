# Docker Compose for Legend

1. Modify the config file (you can use the template `config.properties`): change the values for `HOST_DNS_NAME` and `HOST_ADDRESS` (if needed)

2. Run the setup script:

```sh
./scripts/setup.sh ./config.properties
```

> After setting up, we should print all the secrets/passwords in the terminal. These are also stored in `<build_dir>/.env` file.

3. Run the Docker compose project

```sh
docker-compose --env-file ~/legend-temp/.env up --detach
```

4. Run the application

After starting the project, you can go to your browser at [http://`HOST_ADDRESS`:8080/studio]() to launch Studio. This should redirect you to Gitlab, after logging-in you would be redirected back to Studio.

> NOTE: if you face problem with HTTPS/authorization, please refer to [TROUBLESHOOTING.md](../TROUBLESHOOTING.md)

5. Stop the Docker compose project

```sh
docker-compose --env-file ~/legend-temp/.env down
```
