---
id: introduction-to-legend
title: Get Started
sidebar_label: Get Started
---

## Showcase Projects

See Legend features in action in [Legend showcase projects](../showcases/showcase-projects.md)

## Introductory Videos

Watch the introductory Studio & Query sessions hosted by Beeke-Marie Nelke for the FINOS Open Source community:

- [Legend 101](https://www.youtube.com/watch?v=Mruhx5hnLzQ). Learn the basics of data modeling in Legend Studio.
- [Legend New Feature Deep Dive](https://www.youtube.com/watch?v=7lJoik3r38k). Learn how to create mappings and query your data.

We highly recommend reviewing the [Legend talks and conferences](../community/legend-media.md) recordings.

## Tutorials

Review the step by step tutorials for [Studio](../tutorials/studio-workspace) and [Query](../tutorials/query-builder.md).

## Start Using Legend Today

### Studio hosted instance

This is the easiest way to get started with Legend as it does not involve any installation steps.

FINOS hosts a free instance of Legend to be used for shared modeling efforts.

Instructions to sign up and use this instance are available on the [FINOS website](https://www.finos.org/legend).

**Note: This is a shared instance which might not be appropriate for proprietary data models.**

### Using Legend Omnibus

This is a quick way to get the Lgend environment up and running locally. Make sure you have Docker [installed](https://docs.docker.com/engine/install/). Run the following command in the terminal.

```sh
docker run --platform=linux/amd64 -it -p 6900:6900 -p 6901:6901 -p 6902:6902 -p 6100:6100 -p 6300:6300 -p 9200:9200 -p 9000:9000 finos/legend-omnibus:latest
```

See the [Omnibus Guide](https://github.com/finos/legend/tree/master/installers/omnibus) for more details.


### Setup your own Legend environment

This is the recommended way to setup Legend for local development. See the [Installation Guide](../getting-started/installation-guide.md) for details.
