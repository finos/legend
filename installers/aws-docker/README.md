# Overview 

This is a guide to install a minimal instance of the Legend platform, which consists of the following running on a single box :
* An instance of the Legend Engine Server
* An instance of the Legend SDLC Server 
* An instance of the Legend Studio Server 
* An instance of Mongodb 
* An instance of Gitlab

# Pre-requisites 
* A Linux box. This guide was tested on an AWS EC2 box.
* Docker service (and sudo privileges)
* Internet connectivity 
* Internet connectivity to Gitlab.com 

# Installation 

## 1/ Installing AWS Infrastructure 
This guide has been tested on an AWS EC2 box. See [aws-setup](setup-aws/README.md) for instructions.

## 2/ Setup install scripts 

Once the EC2 box has been created, login and clone this quickstart from the Legend Github repository.

```
$ cd install
```

## 3/ Generate secrets

Generate some random secrets for the various components. 

```
$ sudo ./deploy.sh gen_secrets 
```

## 4/ Install Mongo (Terminal 1)

The container is run in the background.

```
$ ./run-mongo.sh restart
```

## 5/ Install Gitlab (Terminal 1)

We run the the community edition of Gitlab. The Gitlab container takes about 4-5 minutes to complete intialization.

The container is run in the foreground to help with troubleshooting.

```
$ sudo ./run-gitlab.sh restart
```

## 6/ Configure Gitlab Oauth (Terminal 2 + Browser)

Access the locally running Gitlab via a browser.

```
$ ./deploy.sh print | grep GITLAB_PUBLIC_URL
```

__Note : Since we use a self signed SSL certificate for running Gitlab, the browser flags this as a insecure website. Click 'Advanced' and continue.__

(TODO : Generate CA certificates using LetsEncrypt).

Login to Gitlab as the ```root``` user. The password for the root user can be obtained from 

```
$ ./deploy.sh print_secrets 
```

The OpenID and OAuth configuration requires a Gitlab application to be registered. Navigate to ```User Settings > Applications``` and create an application with the following parameters :
* Name - Legend Demo 
* Redirect URI - Add the following redirect URIs 

```
$ ./deploy.sh print_oauth (Terminal 2)
```
* Enable the "Confidential" check box
* Enable these scopes : openid, profile, api 
* Finally, "Save Application"


## 7/ Generate configurations (Terminal 2)

The Legend SDLC, Engine and Studio servers require Gitlab Oauth configuration. 

```
$ ./deploy.sh gen_config <Gitlab application client id> <Gitlab application secret>
```

## 8/ Install Legend Engine (Terminal 3)

The container is run in the foreground to help with troubleshooting. 
```
$ sudo ./run-engine.sh restart
```

## 9/ Install Legend SDLC (Terminal 4) 

The container is run in the foreground to help with troubleshooting. 
```
$ sudo ./run-sdlc.sh restart
```

## 10/ Install Legend Studio (Terminal 5) 

The container is run in the foreground to help with troubleshooting. 

```
$ sudo ./run-studio.sh restart
```

## 11/ Access studio 

Access studio in a browser 

```
$ ./deploy.sh print | grep LEGEND_STUDIO_URL
```

Now, you can start using Legend Studio. 

Studio usage instructions can be found here : https://legend.finos.org/docs/getting-started/create-workspace
