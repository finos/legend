# Overview

Instructions for spinning up an instance of "Legend in a box"

# External Configuration

## Gitlab

- Create a Gitlab.com login
- Create a Gitlab Personal Access Token. Select all the scopes. https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html
- Record the Gitlab Personal Access Token somewhere

## Snowflake

- Create a Snowflake database
- Create a Snowflake account with KeyPair authentication https://docs.snowflake.com/en/user-guide/key-pair-auth
- Encrypt the KeyPair with a keyphrase. Record the encrypted private key and the keyphrase
- Setup tables with data

```sql
create SCHEMA SCHEMA1;
use schema SCHEMA1;
drop table if exists FIRM;
create table FIRM(ID INTEGER, LEGAL_NAME VARCHAR(200));
insert into FIRM(ID, LEGAL_NAME) values(100, 'ACME Corp.');
insert into FIRM(ID, LEGAL_NAME) values(200, 'Monsters Inc.');
drop table if exists PERSON;
create table PERSON(ID INTEGER, FIRMID INTEGER, FIRST_NAME VARCHAR(200), LAST_NAME VARCHAR(200));
insert into PERSON(ID, FIRMID, FIRST_NAME, LAST_NAME) values(1, 100, 'Road', 'Runner');
insert into PERSON(ID, FIRMID, FIRST_NAME, LAST_NAME) values(2, 100, 'Wile', 'Coyote');
insert into PERSON(ID, FIRMID, FIRST_NAME, LAST_NAME) values(3, 200, 'Jake', 'Sullivan');
insert into PERSON(ID, FIRMID, FIRST_NAME, LAST_NAME) values(4, 200, 'Mike', 'Wazwoski');
```

# Setup Container Configuration

## Engine

Update the engine configuration with the encrypted private key and keyphrase from the previous step.

```sh
# cat engine/config/vault.properties
...
snowflakePkRef=xxxxxxxxxxxxxxxxxxxxxxxxx  <-------------------- HERE
snowflakePkPassphraseRef=yyyyyyyyyyyyyyyyyyyyyy
```

## Studio

Update the Studio configuration with the Gitlab Personal Access Token created from the previous step.

```sh
# cat studio/config/config.json
{
  ...
  "sdlc": {
    "url": "http://localhost:9020/sdlc/api",
    "baseHeaders": {
      "legend-test-pat": "xxxxx" <---------------- HERE
    }
  }
  ...
}
```

# Build Docker image

Each of the Legend components are distributed as individual Docker images.

"Legend in a box" repackages these images into a single Docker image. In addition, it uses `supervisord` to launch and manage the Legend components in the container, and it runs a nginx proxy that is used to route to the various legend components.

- Studio - http://localhost:9020/studio (routes to http://localhost:9000/studio)
- Engine - http://localhost:9020/engine (routes to http://localhost:6300)
- SDLC - http://localhost:9020/sdlc (routes to http://localhost:6100)
- Supervisord - http://localhost:9020/sd (routes to http://localhost:9876)

> For troubleshooting/debugging, the internal ports/urls (i.e 9000, 6300, 6100, 9876 etc) are also exposed outside the container

```sh
docker build . -t legend-box
```

# Run the Docker container

```sh
sh -x ./run-box.sh
```

# Use Legend

> Note that it might take a few minutes for the components to start up, to check the status of the components, you can use the `supervisord` web interface at http://localhost:9020/sd and check the logs

http://localhost:9020/studio
