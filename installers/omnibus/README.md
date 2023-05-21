# Legend Omnibus

## Getting Started

```sh
# Build the Docker image
sh -x ./build.sh

# Run the Docker container
sh -x ./run.sh

# Or if the image is already built/published, simply run:
docker run --platform=linux/amd64 -it -p 80:80 -p 6100:6100 -p 6300:6300 -p 9000:9000 -p 6900:6900 -p 6901:6901 legend-omnibus

# Wait until the process completed successfully then launch Legend Studio at:
# http://localhost:9000/studio
#
# Check out Legend documentation at https://legend.finos.org/docs/overview/legend-overview
```

## Debug

Each of the Legend components are distributed as individual Docker images. **Legend Omnibus** repackages these images together with the [Gitlab Omnibus](https://docs.gitlab.com/omnibus/) into a single Docker image.

In addition, it uses [Supervisor](http://supervisord.org/) to launch and manage the Legend components in the container to check the status of the components, you can use the `Supervisor` web interface at http://localhost:6901 and check the process logs. Also, it runs a [nginx](https://www.nginx.com/) proxy that is used to route to the various components. The components' URLs are listed below:

- **Supervisor:** http://localhost:6901 (routed from http://localhost:6900/sd)
- **Gitlab:** http://localhost:80
- **Legend Engine:** http://localhost:6300 (routed from http://localhost:6900/engine)
- **Legend SDLC:** http://localhost:6100 (routed from http://localhost:6900/sdlc)
- **Legend Studio:** http://localhost:9000/studio (routed from http://localhost:6900/studio)

## Configuration

Edit the [.env](./.env) file to configure the Docker image

> Note that updating `LEGEND_OMNIBUS_GITLAB_PORT=80` is currently not possible since we're setting up `Legend SDLC` Pac4j to be used with [GitlabPersonalAccessTokenClient](https://github.com/finos/legend-shared/blob/master/legend-shared-pac4j-gitlab/src/main/java/org/finos/legend/server/pac4j/gitlab/GitlabPersonalAccessTokenClient.java) but this implementation does not allow customization of the port, hence default port 80 must be used
