# CDK Installer

This installer is intended for use to provision a working instance of Legend Studio on an existing AWS account.

## Requirements

### Domain Name

Before proceeding, you will need to have a designated domain name registered, with nameservers delegated to a Route53 hosted zone. [Instructions are located here.](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/migrate-dns-domain-in-use.html)

### Gitlab Application

Before proceeding, you will need to have a Gitlab application configured. [Instructions are located here.](https://legend.finos.org/docs/getting-started/installation-guide#prerequisites)

When providing allowed Callback URLs, use the following:

```
https://legend.<your domain name>:6060/callback
https://legend.<your domain name>:7070/api/auth/callback
https://legend.<your domain name>:7070/api/pac4j/login/callback
https://legend.<your domain name>/studio/log.in/callback 
```

### CDK Setup

Before proceeding, you will need to install and configure AWS CDK CLI. [Instructions are located here.](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)

### Legend Studio Docker Image

#### ECR Repository

Before proceeding, you will need to create an ECR repository, then build and deploy a custom docker image for Docker Studio to it.

[Instructions for creating an ECR repository are here.](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-create.html)
The ECR repository name must be exactly `legend-studio-repo`.

#### Docker Image

From the AWS Console, locate the ECR repository you have just created. From the console of the ECR repository, there is a "View Push Commands" button. Click that button.

Open a terminal session in the `cdk` directory of this repository (the directory where this README is located).

From the "View Push Commands" interface, copy each of the commands into your terminal session and run it.

Verify that the ECR repository now shows a 'latest' image.

## Installation

Once all of the above requirements are ready, you should be set to run the cdk deploy commands to install.

```
Note : Make sure that CDK has been bootstrapped for the account and region in which you are deploying Legend.
```

### Commands

```
cdk deploy --all \
  -c gitlabAppId=${GITLAB_APP_ID} \
  -c gitlabAppSecret=${GITLAB_APP_SECRET} \
  -c domainName=${LEGEND_DOMAIN}
```

```
Note : The CDK deploy command will prompt you many times to approve changes to your account. You can provide a CLI flag to the deploy command to customize the approval behavior. See "Security-related changes" at https://docs.aws.amazon.com/cdk/v2/guide/cli.html 

```

## Accessing Studio

Once the deployment is finished, you should be able to access Legend Studio at: `https://legend.<your domain name>/studio`
yy