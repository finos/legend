---
id: installation-guide
title: Installation Guide
sidebar_label: Installation Guide
---

There are multiple ways to get started with Legend: [getting access to the Studio hosted instance](./introduction-to-legend.md/#studio-hosted-instance), using [Legend Omnibus](./introduction-to-legend.md/#using-legend-omnibus) to get the Legend environment up and running locally, or installing Legend.

There are a few different options to install and use Legend. They are listed below in increasing order of integration and installation complexity.

## Setup Maven

This installation option is for software developers who want to build and run Legend from source. Instructions can be found [here](https://github.com/finos/legend/tree/master/installers/maven).

## Docker Compose

This option is a more automated process to start Legend Docker images for running a proof of concept. Instructions can be found [here](https://github.com/finos/legend/tree/master/installers/docker-compose).

## Production Install

A production install will have to be adjusted to match your specific deployment environment. We publish Docker images, but some additional setup is required.

This includes but is not limited to:

- Configuring SSL Certificates
- Configuring OAuth on Gitlab
- Configuring authentication using an identity provider

We are happy to help develop installation instructions to meet your particular deployment environment.

## More
- [Get started with Legend](./introduction-to-legend.md/#start-using-legend-today)
- [Get access to the Studio hosted instance](./introduction-to-legend.md/#studio-hosted-instance)
- [Legend Omnibus](./introduction-to-legend.md/#using-legend-omnibus)
