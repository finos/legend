# Legend Omnibus

Legend Omnibus is a way to package different services and tools required to run Legend, so that most users can install it without laborious configuration. Simply run:

```sh
docker run --platform=linux/amd64 -it -p 6900:6900 finos/legend-omnibus:latest

# Wait until the process completed successfully then launch Legend Studio at:
# http://localhost:9000/studio
#
# Check out Legend documentation at https://legend.finos.org/docs/overview/legend-overview
```

> NOTE: Legend relies on [Gitlab](https://about.gitlab.com/), the omnibus spins up its own Gitlab instance so users do not need to setup a Gitlab account, but this means the omnibus is more heavy and expensive to run, consider using [slim variant](#image-variants) if your environment is more tight on resource.

## Example Usage

### Use gitlab.com with Personal Access Token (PAT)

```sh
docker run --platform=linux/amd64 -it -p 6900:6900 --env LEGEND_OMNIBUS_CONFIG_SDLC_MODE="gitlab-pat" --env LEGEND_OMNIBUS_CONFIG_GITLAB_PAT="<your personal access token>" finos/legend-omnibus:latest-slim
```

### Use gitlab.com with OAuth

```sh
docker run --platform=linux/amd64 -it -p 6900:6900 --env LEGEND_OMNIBUS_CONFIG_SDLC_MODE="gitlab-oauth" --env LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID="<your OAuth app ID>" --env LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET="<your OAuth app secret>" finos/legend-omnibus:latest-slim
```

### Deploy Omnibus to the cloud (AWS, GCP, etc.)

When deployed on the remotely on the cloud, the omnibus can only be reached via a public address (which might be dynamic), in this case, `Legend Studio` config should be changed to use relative URLs instead.

```sh
docker run --platform=linux/amd64 -it -p 6900:6900 --env LEGEND_OMNIBUS_CONFIG_STUDIO_CONFIG_USE_RELATIVE_URL=true finos/legend-omnibus:latest
```

## Technical Overview

### Development

```sh
# Take the full omnibus as an example:

# Build the Docker image
sh -x ./variants/full/build.sh

# Run the Docker container
sh -x ./variants/full/run.sh
```

### Components

Each of the Legend components are distributed as individual Docker images. **Legend Omnibus** repackages these images together with the [Gitlab Omnibus](https://docs.gitlab.com/omnibus/) into a single Docker image. Edit the [.env](./.env) file to configure/update the Docker image.

In addition, it uses [Supervisor](http://supervisord.org/) to launch and manage the Legend components in the container to check the status of the components, you can use the `Supervisor` web interface at http://localhost:6901 and check the process logs. Also, it runs a [nginx](https://www.nginx.com/) proxy that is used to route to the various components. The components' URLs are listed below:

- **NginX (DEV):** http://localhost:6900
- **Supervisor (DEV):** http://localhost:6900/sd (exposable port: 6901)
- **Directory Server (DEV):** http://localhost:6900/dir (exposable port: 6902)
- **Gitlab:** http://localhost:6900/gitlab (exposable port: 6951)
- **Legend SDLC:** http://localhost:6900/sdlc (exposable port: 6100)
- **Legend Engine:** http://localhost:6900/engine (exposable port: 6300)
- **Legend Studio:** http://localhost:6900/studio (exposable port: 9000)
- **Legend Pure IDE:** http://localhost:6900/ide (exposable port: 9200)

### Image Variants

The `finos/legend-omnibus` image comes with [several variants](https://github.com/finos/legend/tree/master/installers/omnibus/variants), each designed for a specific use case and comes with different configurations:

- **Full/Standard (finos/legend-omnibus:\<version\>):** This includes all the components, it takes a while longer to run/build as it spins up its own instance of `Gitlab`
- **Slim (finos/legend-omnibus:\<version\>-slim):** This does not include `Gitlab` and `Pure IDE` and allows configuring `Legend SDLC` running mode

#### Options

**`LEGEND_OMNIBUS_CONFIG_STUDIO_CONFIG_USE_RELATIVE_URL`**

`boolean`, default: `false`.

When set to `true` this will change all URLs specified in `Legend Studio` config to relative and do not assume `localhost` as the host. This is useful when the omnibus is deployed on remotely on cloud services like AWS, GCP, etc. as the omnibus can only be reached via a public address (which might be dynamic).

---

**`LEGEND_OMNIBUS_CONFIG_REMOTE_GITLAB_PAT`**

`string`

> Only applicable in `full` variant

This is the Gitlab Personal Access Token (PAT) used to authenticate with `gitlab.com` (see [this guide](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) for help with creating the PAT). Setting this will configure the omnibus to run against `gitlab.com` instead of the local Gitlab instance.

---

**`LEGEND_OMNIBUS_CONFIG_SDLC_MODE`**

`string`, possible values: `gitlab-pat`, `gitlab-oauth`

> Only applicable in `slim` variant

This specifies `Legend SDLC` running mode:

- `gitlab-pat`: use remote Gitlab with Personal Access Token; this requires specifying `LEGEND_OMNIBUS_CONFIG_GITLAB_PAT`
- `gitlab-oauth`: use remote Gitlab with OAuth; this requires specifying `LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID` and `LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET`

---

**`LEGEND_OMNIBUS_CONFIG_GITLAB_PAT`**

`string`

> Only applicable in `slim` variant for `LEGEND_OMNIBUS_CONFIG_SDLC_MODE=gitlab-pat`

This is the Gitlab Personal Access Token (PAT) used to authenticate with `gitlab.com` (see [this guide](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) for help with creating the PAT).

---

**`LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID` and `LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET`**

`string`

> Only applicable in `slim` variant for `LEGEND_OMNIBUS_CONFIG_SDLC_MODE=gitlab-oauth`

These are information of the `OAuth` application that users will need to authorize so that `Legend SDLC` can make calls to Gitlab API on their behalf. To setup:

1. Create an OAuth application following [this guide](https://docs.gitlab.com/ee/integration/oauth_provider.html)

2. The OAuth application should be configured as follows:

- Redirect URI:

```
http://localhost:6100/api/auth/callback
http://localhost:6100/api/pac4j/callback
http://localhost:6300/api/pac4j/callback
http://localhost:9000/api/pac4j/callback
http://localhost:6900/sdlc/api/auth/callback
http://localhost:6900/sdlc/api/pac4j/callback
http://localhost:6900/engine/api/pac4j/callback
http://localhost:6900/studio/api/pac4j/callback
```

- Enable the `Confidential` check box
- Enable these scopes: `openid`, `profile`, `api`

3. Configure the options using the generated OAuth `application ID` and `secret`
