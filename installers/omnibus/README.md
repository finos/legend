# Legend Omnibus

## Getting Started

```sh
# Build the Docker image
sh -x ./build.sh

# Run the Docker container
sh -x ./run.sh

# Or using published image (e.g. finos/legend-omnibus:latest), simply run:
docker run --platform=linux/amd64 -it -p 6900:6900 -p 6901:6901 -p 6902:6902 -p 6903:6903 -p 6100:6100 -p 6300:6300 -p 9200:9200 -p 9000:9000 finos/legend-omnibus:latest

# Wait until the process completed successfully then launch Legend Studio at:
# http://localhost:9000/studio
#
# Check out Legend documentation at https://legend.finos.org/docs/overview/legend-overview
```

## Example Usage

### Use gitlab.com with Private Access Token (PAT)

```sh
docker run --platform=linux/amd64 -it -p 6900:6900 -p 6901:6901 -p 6902:6902 -p 6903:6903 -p 6100:6100 -p 6300:6300 -p 9200:9200 -p 9000:9000 --env LEGEND_OMNIBUS_REMOTE_GITLAB_PAT="<your private access token>" finos/legend-omnibus:latest-slim
```

## Technical Overview

### Components

Each of the Legend components are distributed as individual Docker images. **Legend Omnibus** repackages these images together with the [Gitlab Omnibus](https://docs.gitlab.com/omnibus/) into a single Docker image. Edit the [.env](./.env) file to configure/update the Docker image.

In addition, it uses [Supervisor](http://supervisord.org/) to launch and manage the Legend components in the container to check the status of the components, you can use the `Supervisor` web interface at http://localhost:6901 and check the process logs. Also, it runs a [nginx](https://www.nginx.com/) proxy that is used to route to the various components. The components' URLs are listed below:

- **Supervisor:** http://localhost:6901 (routed from http://localhost:6900/sd)
- **Gitlab:** http://localhost:6902
- **Legend Engine:** http://localhost:6300 (routed from http://localhost:6900/engine)
- **Legend SDLC:** http://localhost:6100 (routed from http://localhost:6900/sdlc)
- **Legend Pure IDE:** http://localhost:9200/ide (routed from http://localhost:6900/pure-ide)
- **Legend Studio:** http://localhost:9000/studio (routed from http://localhost:6900/studio)

### Image Variants

The `finos/legend-omnibus` comes in many flavors, each designed for a specific use case.

> Note: we should reorganize the variants build/run scripts as we start to have more and more custom builds.

#### finos/legend-omnibus:\<version\>

This includes all the components, it takes a while longer to run/build as it includes `Gitlab`

#### finos/legend-omnibus:\<version\>-slim

This is the same as `Standard` but without `Gitlab`, the flag `LEGEND_OMNIBUS_REMOTE_GITLAB_PAT` is required to be set when running this build. This is more agile and a good starting point for development.
