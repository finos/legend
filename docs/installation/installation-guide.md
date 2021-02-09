---
id: installation-guide
title: Installation guide
sidebar_label: Installation guide
---

There are a few different options to install and use Legend. They are listed below in increasing order of integration and installation complexity.

## Hosted FINOS 

This is the easiest option as it does not require any install. Instructions can be found [here](hosted-finos.md).

__Note : This is a shared instance which might not be appropriate for proprietary data models.__

## Maven Install 

This option is for software developers who want to build and run Legend from source. Instructions can be found [here](maven-install.md).

## AWS Docker Install

This option is for software developers who want to run the Legend Docker images on AWS for running a proof of concept. Instructions can be found [here](aws-docker.md).

## Production Install 

A production install will have to be adjusted to match your specific deployment environment. We publish Docker images, but some additional setup is required. 

This includes but is not limited to :
* Configuring SSL Certificates 
* Configuring OAuth on Gitlab 
* Configuring authentication using an identity provider

We are happy to help develop installation instructions to meet your particular deployment environment.

