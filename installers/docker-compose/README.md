# Docker Compose for Legend

Before running the setup script, make sure to update the variables `HOST_DNS_NAME` and `HOST_ADDRESS` (if needed) variables in `./scripts/setup.sh`

> Check your build/temp directory for the file `.env`, it will contain all the passwords and secrets.

```sh
# setup
./scripts/setup.sh ./config.properties

# start
docker-compose --env-file ./build/.env up --detach

# stop
docker-compose --env-file ./build/.env down
```
