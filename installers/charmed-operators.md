# Overview

This tutorial will cover how to use Juju and Charmed Operators to deploy an instance of the Legend stack on Kubernetes. You can use either [gitlab.com](https://gitlab.com) or a self-hosted version of GitLab. 

The applications stack will be deployed as a *bundle* in the same cloud. Juju allows, however, for you to deploy each application on a different cloud and then integrate the stack across your estate. 

# Prerequisites
If you have all the prerequistes in your system, you can skip to step [1. Deploying Legend](#deploying-legend).
* Linux box. 
  * This guide was tested on Ubuntu 20.04.
* Internet connection. 
  * You can also [deploy charmed operators offline](https://juju.is/docs/olm/working-offline). 
* [Access to a Kubernetes cluster](#kubernetes-cluster)
  * If you don't have a Kubernetes cluster at hand, we will show you how to use Microk8s on your laptop. 
* A [gitlab.com](https://gitlab.com) account, or a private instance and rights to create an application. 
  * If you don't have access to a GitLab instance, you can follow [this tutorial](TODO) to get one up and running. 
* [Juju CLI](#juju)

## Kubernetes cluster

Juju will bootstrap to most Kubernetes clusters (regardless of the vendor) and you can use your own for the rest of this tutorial. If you don't have access to a cluster, you can follow the Kubernetes installation instructions [here](https://microk8s.io/docs). You can customise the intallation for this tutorial as follows: 

Add an alias for `kubectl`:

``` bash
snap alias microk8s.kubectl kubectl
```

Create a new shell session with active membership to the `microk8s` group. You can also acheive this by logging out, and logging back in again:

``` bash
newgrp microk8s
```

Enable the `dns`, `storage` and `ingress` add-ons:

``` bash
microk8s.enable dns storage ingress
```

The command above will take a few moment to complete. You can check the status with:

``` bash
microk8s status --wait-ready
```

## Gitlab Application

You will need application creation rights on a GitLab public or private instance

* Log in to Gitlab
* Go top-left to User Settings > Applications
* Create a new application with the following:
  * *Name:* "Legend Demo"
  * *Confidential:* yes
  * *Scopes:* openid, profile, api
  * *Redirect URI:* set it to http://localhost:8080/callback
* **Save the Client ID and Secret for later**

## Juju

You can follow [the instructions in the docs](https://juju.is/docs/olm/installing-juju) or simply install a Juju with:

``` bash
sudo snap install juju --classic
```

If you are *not* using Microk8s, you can [manually add the credentials](https://juju.is/docs/olm/clouds) to your cloud. 

## Deploy Legend

Up until now, we've been preparing our system to host Legend. In the next steps, we will:

1. Bootstrap Juju to your cluster
2. Add a model to host Legend
3. Deploy the bundle
4. Pass the GitLab token to the stack

## 1. Bootstrap to your cluster

In Juju terms, "bootstrap" means "create a Juju controller", which is the is the part of Juju that runs in your cluster and controls the applications. 

To install the Juju controller in your cloud, simply run

``` bash
juju bootstrap <cloud_name> <controller_name> 
```

If you are following this tutorial with Microk8s, run

``` bash
juju bootstrap microk8s finos-legend-controller
```

Otherwise, `<cloud_name>` can be found running `juju clouds`.

Running `juju status` will now show the Juju Controller in your cloud. 

## 2. Create a model

[Juju models](https://juju.is/docs/olm/models) are a logical grouping of applications and infrastructure that work together to deliver a service or product. In Kubernetes terms, models are effectively namespaces. Models are fundamental concepts in Juju and implement service isolation, access control, repeatability and boundaries.

You can add a new model with

``` bash
juju add-model <model_name>.  
```

We will name our model `finos-legend`

``` bash
juju add-model finos-legend
```

## 3. Deploy Legend

When you deploy an application with Juju, the installation code in the charmed operator will run and set up all the resources and environmental variables needed for the application to run properly. In the case of this tutorial, we are deploying a *bundle* -- which not only describes what applications we want deployed, but also the relations between them. 

Deploy the [finos-legend-bundle](https://charmhub.io/finos-legend-bundle) in the `finos-legend` model.

``` bash
juju deploy finos-legend-bundle
```

In another terminal window, you can see the applications being deployed and the integration code running

``` bash
watch --color juju status --color
```

After a couple of minutes, you'll notice that your applications looks like this

[TODO]

This is perfectly normal, as the Legend stack is now waiting for you to pass the GitLab token as a configuration parameter. 

The way you will do that depends on your GitLab instance. The next step will go through the commands you need to run for each of the options.

## 4. Passing the GitLab token

At this point, your Legend stack is deployed and integrated, but you still need to configure it with the GitLab token. 

The process to do that will depend on your GitLab instance. We will show options for a local deployment or gitlab.com.

### Private GitLab instance

If you are using your already existing GitLab instance or one deployed with docker compose, you can follow the steps below to inform the Legend stack about your access token. 

Convert the certificate (`*.der`) into base64: 

``` bash
CERT=`base64 -w 0 /path/to/certfile.der
```

Configure the finos-legend-gitlab-integrator charm with your GitLab credentials. The default `gitlab-host` value for GitLab deployed via `docker-compose` is `172.18.0.2`.

``` bash
juju config finos-legend-gitlab-integrator-k8s \
     gitlab-host= <gitlab-host> \
     gitlab-host-der-b64="$CERT" \
     gitlab-port=443 \
     access-token="<access-token>"
```

Run `juju status` to see the applications reacting to this configuration change. 

Once all the applications have become active, you can go to [5. Authorise the user and application](#authorise-the-user-and-application).

### gitlab.com

#### Fetching the redirect URIs

You can run the commands below to get the redirect URIs that will be later used by gitlab.com.

Get the name of the GitLab integrator charm:

``` bash
juju status | grep gitlab
finos-legend-gitlab-integrator-k8s/0*  active    idle   10.1.184.238
```

Run an action against the charm to get the URIs 

``` bash
juju run-action finos-legend-gitlab-integrator-k8s/0 get-redirect-uris
Action queued with id: "2"
```

Show the action output with `juju show-action-output 2`: 

``` yaml
UnitId: finos-legend-gitlab-integrator-k8s/0
id: "2"
results:
  result: |-
    http://10.1.184.224:6060/api/callback
    http://10.1.184.236:7070/api/auth/callback
    http://10.1.184.236:7070/api/pac4j/login/callback
    http://10.1.184.241:8080/studio/log.in/callback
status: completed
timing:
  completed: 2021-09-27 18:50:39 +0000 UTC
  enqueued: 2021-09-27 18:50:38 +0000 UTC
  started: 2021-09-27 18:50:38 +0000 UTC
```

You can now enter these URIs into GitLab:

* Log back into your GitLab portal.
* Go to the application created during the preparation steps.
* Edit the Redirect URI setting of the application.
* Paste the output of the `result` field from the `juju show-action-output` command run previously.
  
Run `juju status` to see the applications reacting to this configuration change. 

Once all the applications have become active, you can go to [5. Authorise the user and application](#authorise-the-user-and-application).

## 5. Authorise the user and application

Get the ip of the pod where Legend Studio is running with

``` bash
juju status
``` 
Enter `<legend_ip>:8080` and authorise the GitLab application to talk to Studio. 

Do the same for `sdlc` at `<ip_studio>:7070/api/auth/aautorize`. 

## Accessing the studio dashboard

You should now be able to access the Legend Studio dashboard at `<studio_ip>:8080/studio`
