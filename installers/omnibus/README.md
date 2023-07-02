# Legend Omnibus

Legend Omnibus is a way to package different services required to run Legend, so that users can run Legend it without laborious configuration.

```sh
curl https://legend.finos.org/omnibus/start.sh | bash

# Wait until the process completed successfully then launch Legend Studio at:
# http://localhost:6900/studio
#
# Check out Legend documentation at https://legend.finos.org/docs/overview/legend-overview
```

## Example Usage

#### Use gitlab.com with Personal Access Token (PAT)

```sh
curl https://legend.finos.org/omnibus/start.gitlab-pat.sh | bash -i
```

#### Use gitlab.com with OAuth

```sh
curl https://legend.finos.org/omnibus/start.gitlab-oauth.sh | bash -i
```

#### Deploy Omnibus to the cloud (AWS, GCP, etc.)

When deployed on the remotely on the cloud, the omnibus is often only reachable via a public address (which might be dynamic if used with a load-balancer).

```sh
docker run --platform=linux/amd64 -it -p 6900:6900 \
  --env LEGEND_OMNIBUS_CONFIG_BASE_URL="<your deployment base URL>" \
  finos/legend-omnibus:latest-slim
```

#### Quickly setup local development environment for Legend Studio

```sh
LEGEND_OMNIBUS_CONFIG_EXPOSE_BACKEND_PORTS=true \
LEGEND_OMNIBUS_CONFIG_GITLAB_PAT="<your personal access token>" \
  curl https://legend.finos.org/omnibus/start.gitlab-pat.sh | bash
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

In addition, it uses [Supervisor](http://supervisord.org/) to launch and manage the Legend components in the container to check the status of the components, you can use the `Supervisor` web interface at http://localhost:6901 and check the process logs. Also, it runs a [nginx](https://www.nginx.com/) proxy that is used to route to the various components. The components' URLs are listed below (with their exposable ports):

- **NginX (DEV):** http://localhost:6900
- **Supervisor (DEV):** http://localhost:6900/sd (port: 6901)
- **Directory Server (DEV):** http://localhost:6900/dir (port: 6902)
- **Gitlab:** http://localhost:6900/gitlab (port: 6951)
- **Legend SDLC:** http://localhost:6900/sdlc (port: 6100)
- **Legend Engine:** http://localhost:6900/engine (port: 6300)
- **Legend Studio:** http://localhost:6900/studio (port: 9000)
- **Legend Pure IDE:** http://localhost:6900/ide (port: 9200)

### Image Variants

The `finos/legend-omnibus` image comes with [several variants](https://github.com/finos/legend/tree/master/installers/omnibus/variants), each designed for a specific use case and comes with different configurations:

- **Full/Standard (finos/legend-omnibus:\<version\>):** This includes all the components, it takes a while longer to run/build as it spins up its own instance of `Gitlab`
- **Slim (finos/legend-omnibus:\<version\>-slim):** This does not include `Gitlab` and `Pure IDE` and allows configuring `Legend SDLC` running mode

#### Options

Following options can be applied at run time to configure the omnibus:

> All options are of type **`string`** and work with all variants unless otherwise specified

|  | Variant | Description |
| :-- | :-: | --- |
| **LEGEND_OMNIBUS_CONFIG_BASE_URL** | - | The base URL of your omnibus when hosted/deployed remotely on cloud services as the deployment is often behind a load balancer and is reachable only via some public domain |
| **LEGEND_OMNIBUS_CONFIG_REMOTE_GITLAB_PAT** | `full` | The [Gitlab Personal Access Token (PAT)](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) used to authenticate with `gitlab.com`. _Setting this will configure the omnibus to run against `gitlab.com` instead of the local Gitlab instance._ |
| **LEGEND_OMNIBUS_CONFIG_SDLC_MODE** | `slim` | This specifies `Legend SDLC` running mode:<br/>- **`in-memory`** (default): use in-memory backend<br/> - **`gitlab-pat`**: use remote Gitlab with Personal Access Token backend _(requires specifying additional config at runtime)_<br/>- **`gitlab-oauth`**: use remote Gitlab with [OAuth](https://oauth.net/) backend _(requires specifying additional config at runtime)_ |
| **LEGEND_OMNIBUS_CONFIG_GITLAB_PAT** | `slim` | Required for **`gitlab-pat`** `Legend SDLC` backend mode<br/><br/>The [Gitlab Personal Access Token (PAT)](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html). |
| **LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_ID** | `slim` | Required for **`gitlab-oauth`** `Legend SDLC` backend mode<br/><br/>The **ID** for the [Gitlab OAuth](https://docs.gitlab.com/ee/integration/oauth_provider.html) application that users will need to authorize so that `Legend SDLC` can make calls to Gitlab API on their behalf. See this [guide](#configuring-your-gitlab-oauth-application) to configure your `Gitlab OAuth application` properly. |
| **LEGEND_OMNIBUS_CONFIG_GITLAB_OAUTH_APPLICATION_SECRET** | `slim` | Required for **`gitlab-oauth`** `Legend SDLC` backend mode<br/><br/>The **secret** for the [Gitlab OAuth](https://docs.gitlab.com/ee/integration/oauth_provider.html) application. |

### Apendix

#### Configuring your `Gitlab OAuth` Application

Follow [Gitlab OAuth guide](https://docs.gitlab.com/ee/integration/oauth_provider.html) to create the application and configure as follows:

- Redirect URI (must include the followings):

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

- Enable **`Confidential`** option
- Enable scopes: **`openid`**, **`profile`**, **`api`**
