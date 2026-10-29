---
id: introduction-to-legend
title: Get Started
sidebar_label: Get Started
---

New to Legend? Read [What is Legend?](../overview/legend-overview.md) first, then pick a way to try it below.

## Start Using Legend Today

### Studio hosted instance

FINOS hosts a shared instance of Legend, which needs no installation. It runs an older version of Legend than the latest release, so some features in these docs may be missing there.

Instructions to sign up are on the [FINOS website](https://www.finos.org/legend).

**Note:** this is a shared instance. Every project on it can be read by the public, so don't use it for proprietary data models.

### Using Legend Omnibus

Legend Omnibus runs Legend Studio, its servers and their dependencies on your machine with Docker. Make sure you have [Docker](https://docs.docker.com/engine/install/) installed, then run:

```sh
curl https://legend.finos.org/omnibus/start.sh | bash

# Or run the full Omnibus, with an embedded GitLab, which takes longer to start
curl https://legend.finos.org/omnibus/start.full.sh | bash
```

When it's ready, Legend Studio is at http://localhost:6900/studio.

> On Windows, use [Git Bash](https://git-scm.com/downloads) or [WSL](https://docs.docker.com/desktop/features/wsl/) to run the commands above.

The Omnibus images were last published in January 2025, and the full image in December 2023, so they run an older version of Legend than the latest release. See the [Omnibus guide](https://github.com/finos/legend/tree/master/installers/omnibus) for other ways to run it, such as with your own gitlab.com account.

### Run Legend from source

To run the latest Legend, build it from source. The [Installation Guide](./installation-guide.md) explains how to run the servers. The applications run from [finos/legend-studio](https://github.com/finos/legend-studio): its README explains how to start each one locally.

## Learn Legend

- **Showcase projects** are small, working examples of each feature. Browse them in Legend Studio's Showcase Explorer, from its start screen, or on the [Showcase projects](../showcases/showcase-projects.md) page.
- **Tutorials** walk through [Legend Studio](../tutorials/studio-workspace.md) and [Legend Query](../tutorials/query-builder.md) step by step.
- **Guides** explain each application's screens. Start with the [Legend Cube](/guides/cube) guide.
- **Reference** pages describe the [Legend language](../reference/legend-language.md), the [Relation API](../reference/legend-relation.md), [Legend SQL](../reference/legend-sql.md) and every [function](../reference/released-functions.md).
- The [Glossary](../overview/legend-glossary.md) defines the terms used across Legend.

## Introductory videos

These sessions for the FINOS community, hosted by Beeke-Marie Nelke, introduce Legend Studio and Legend Query:

- [Legend 101](https://www.youtube.com/watch?v=Mruhx5hnLzQ): the basics of data modeling in Legend Studio.
- [Legend New Feature Deep Dive](https://www.youtube.com/watch?v=7lJoik3r38k): how to create mappings and query your data.

More recordings are on the [Legend media](../community/legend-media.md) page.
