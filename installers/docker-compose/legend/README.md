# Docker Compose for Legend

Before running the setup script, make sure to supply a valid config file (you can use the template `config.properties`):

- Make sure to update the variables `HOST_DNS_NAME` and `HOST_ADDRESS` (if needed)

```sh
# setup
./scripts/setup.sh ./config.properties

# start
docker-compose --env-file ~/legend-temp/.env up --detach

# stop
docker-compose --env-file ~/legend-temp/.env down
```

> After setting up, check your build/temp directory for the file `.env`, it will contain all the passwords and secrets. This is useful if you don't specify them in the config and have us auto-generated them.
