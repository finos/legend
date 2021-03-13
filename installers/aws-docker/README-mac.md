# Overview

This is a guide to install a minimal instance of the Legend platform, which consists of the following running on a Mac.

# Pre-requisites

- Make sure you installed `openssl` via `Homebrew` (maybe optional as Mac XCode devtools comes with `openssl` of an older version).
- Docker Desktop [download](https://docs.docker.com/docker-for-mac/install/): Setup Docker resource to at least 16 GB space, 3 GB swap, and 4 GB of RAM.
- Firefox (so we can bypass security check on our self-signed SSL certificate).
- Internet connectivity.
- Internet connectivity to Gitlab.com

# Installation

## 1. Setup scripts environment flag

Make sure to execute the following command when open a new terminal tab

```sh
export SCRIPT_ENV=mac
```

## 2. Setup install scripts

Login and clone this quickstart from the Legend Github repository.

```sh
cd install
```

## 3. Generate secrets

Generate some random secrets for the various components.

```sh
./deploy.sh gen_secrets
```

## 4. Install Mongo (Terminal 1)

The container is run in the background.

```sh
./run-mongo.sh restart
```

## 5. Install Gitlab (Terminal 1)

We run the the community edition of Gitlab. The Gitlab container takes about 4-5 minutes to complete intialization.

The container is run in the foreground to help with troubleshooting.

```sh
./run-gitlab.sh restart
```

## 6. Configure Gitlab Oauth (Terminal 2 + Browser)

Access the locally running Gitlab via a browser.

```sh
./deploy.sh print | grep GITLAB_PUBLIC_URL
```

> Note: Since we use a self signed SSL certificate for running Gitlab, the browser flags this as a insecure website. Click 'Advanced' and continue. Chrome seems to disallow this so we acutally need to use Firefox to access the Gitlab site.

Login to Gitlab as the `root` user. The password for the root user can be obtained from

```sh
./deploy.sh print_secrets
```

The OpenID and OAuth configuration requires a Gitlab application to be registered. Navigate to `User Settings > Applications` and create an application with the following parameters :

- Name - Legend Demo
- Redirect URI - Add the following redirect URIs

```sh
./deploy.sh print_oauth (Terminal 2)
```

- Enable the "Confidential" check box
- Enable these scopes : openid, profile, api
- Finally, "Save Application"

## 7. Generate configurations (Terminal 2)

The Legend SDLC, Engine and Studio servers require Gitlab Oauth configuration.

```sh
./deploy.sh gen_config <Gitlab application client id> <Gitlab application secret>
```

## 8. Install Legend Engine (Terminal 3)

The container is run in the foreground to help with troubleshooting.

```sh
sudo ./run-engine.sh restart
```

## 9. Install Legend SDLC (Terminal 4)

The container is run in the foreground to help with troubleshooting.

```sh
sudo ./run-sdlc.sh restart
```

## 10. Install Legend Studio (Terminal 5)

The container is run in the foreground to help with troubleshooting.

```sh
sudo ./run-studio.sh restart
```

## 11. Access studio

Access studio in a browser

```sh
./deploy.sh print | grep LEGEND_STUDIO_URL
```

Now, you can start using Legend Studio.

Studio usage instructions can be found here : https://legend.finos.org/docs/getting-started/create-workspace
