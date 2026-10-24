---
id: installation-guide
title: Installation Guide
sidebar_label: Installation Guide
---

To try Legend without installing it, use the [Studio hosted instance](./introduction-to-legend.md#studio-hosted-instance) or [Legend Omnibus](./introduction-to-legend.md#using-legend-omnibus). To install it, pick one of the options below. They are listed from the least to the most work.

The [installers](https://github.com/finos/legend/tree/master/installers) in finos/legend are meant for prototypes and proofs of concept. Unless a guide says otherwise, they are not set up for production.

## Setup Maven

For developers who want to build and run the Legend servers from source. Instructions are in the [Maven installer](https://github.com/finos/legend/tree/master/installers/maven).

The applications, such as Legend Studio and Legend Query, run from [finos/legend-studio](https://github.com/finos/legend-studio). Its README explains how to start them against these servers.

## Docker Compose

Starts the published Legend Docker images, for a proof of concept. Instructions are in the [Docker Compose installer](https://github.com/finos/legend/tree/master/installers/docker-compose).

## Production Install

A production install has to match your deployment environment. The Docker images are published, but they need more setup, including:

- SSL certificates
- OAuth on GitLab
- Authentication with an identity provider

We are happy to help write installation instructions for your environment: ask on the [Legend mailing list](mailto:legend@finos.org) or [open an issue](https://github.com/finos/legend/issues/new/choose).
