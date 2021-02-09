# Docker Cheatsheet

List running containers 

`docker container ls`

Stop a container 

`docker container stop <container name>`

Attach a shell to a running container 

`docker container exec -it <container name> bash`

# Gitlab Build

We use a simple Dockerfile that adds a config script to the Gitlab Docker image.

The config script disables user sign up. This is not an issue if the container is not publicly exposed (to the internet). But we have it just as a precaution. See https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/2837#note_109602925

