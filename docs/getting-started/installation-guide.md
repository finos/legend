---
id: installation-guide
title: Installation Guide
sidebar_label: Installation Guide
---

There are a few different options to install and use Legend. They are listed below in increasing order of integration and installation complexity.

## Setup Maven

This instllation option is for software developers who want to build and run Legend from source. Instructions can be found [here](https://github.com/finos/legend/tree/master/installers/maven).

## Docker Compose

This option is a more automated process to start Legend Docker images for running a proof of concept. Instructions can be found [here](https://github.com/finos/legend/tree/master/installers/docker-compose).

## Production Install

A production install will have to be adjusted to match your specific deployment environment. We publish Docker images, but some additional setup is required.

This includes but is not limited to:

- Configuring SSL Certificates
- Configuring OAuth on Gitlab
- Configuring authentication using an identity provider

We are happy to help develop installation instructions to meet your particular deployment environment.
