[![FINOS - Incubating](https://cdn.jsdelivr.net/gh/finos/contrib-toolbox@master/images/badge-incubating.svg)](https://finosfoundation.atlassian.net/wiki/display/FINOS/Incubating)

# Legend

Legend provides an **end-to-end data platform experience covering the full data lifecycle**. It encompasses a suite of data management and governance components known as the **Legend Platform**. Legend enables breaking down silos and building a critical bridge over the historical divide between business and engineering, allowing companies to build data-driven applications and insightful business intelligence dashboards. Legend also includes novel features that accelerate data curation, exchange, and sharing such as:

- Consistent data vocabularies
- Self-service capabilities for retrieving and working with data, while respecting the entitlements of underlying sources
- Built-in mechanisms for data governance with formal constructs to define ownership, validations, and provenance
- Code translation to JSON Schema, Protobuf and AVRO, which enables easy interoperability across models and systems

The core component of the **Legend Platform** is [Legend Studio](https://github.com/finos/legend-studio) a visual data modeling environment, that is used to build data models in an intuitive, business-friendly way. Behind the scenes, Legend is backed by a powerful Execution [Engine](https://github.com/finos/legend-engine), and uses GitLab for its Software Development Lifecycle ([SDLC](https://github.com/finos/legend-sdlc)). This enables users to leverage their data models safely in business data processes.

The [Legend-Pure language](https://github.com/finos/legend-pure) is an immutable functional language based on the Unified Modeling Language (UML) and inspired by the Object Constraint Language (OCL).

## Components

Legend stack comprises several key components. Component-specific issues are opened, maintained, and prioritized within the component specific issue list. These usually involve new feature requests, bug reports or technical, tool-specific questions.

- [Legend Studio](https://github.com/finos/legend-studio/issues)
- [Legend Engine](https://github.com/finos/legend-engine/issues)
- [Legend SDLC](https://github.com/finos/legend-sdlc/issues)
- [Legend Depot](https://github.com/finos/legend-depot/issues)
- [Legend PURE](https://github.com/finos/legend-pure/issues)

# Installation

Find installation instructions [here](https://legend.finos.org/docs/getting-started/installation-guide).

# Documentation

- [Legend Documentation Site](https://legend.finos.org/)
- [Legend Getting Started Guide](https://legend.finos.org/docs/getting-started/introduction-to-legend)
- [Legend Studio User Guide](https://github.com/finos/legend-studio)
- [Legend Language](https://legend.finos.org/docs/reference/legend-language)

_The [documentation site](https://legend.finos.org) is built using Docusaurus based on the markdown files in the [`docs`](/docs/) folder._
_Feel free to suggest areas for documentation improvement by raising an [issue](https://github.com/finos/legend/issues)_.

# Contribute

## Contribute to Legend

To learn about contributing to Legend, see the [CONTRIBUTING.md](CONTRIBUTING.md) file or the ["contribute to Legend"](https://legend.finos.org/docs/contribute/contribute-to-legend) section of the Legend documentation site.

## Contribute to FINOS projects that use Legend as a data modeling tool

Several FINOS projects are leveraging Legend for data modeling efforts under the [FINOS Financial Object Special Interest Group](https://github.com/finos/financial-objects) umbrella. Get involved by [joining the next Financial Objects SIG meeting](https://github.com/finos/financial-objects/issues?q=label%3Ameeting) or by emailing the Financial Objects community at [fo@finos.org](mailto:fo@finos.org).

### Shared public instance of Legend

FINOS hosts a shared instance of Legend at [https://legend.finos.org/studio](https://legend.finos.org/studio). The shared instance of Legend is provided free-of-charge and as-is. It is primarily intended to be used for shared modeling efforts conducted by FINOS members and other non-member community participants as part of [FINOS hosted projects or initiatives](https://landscape.finos.org/).
This instance was used by participants in the [FINOS Legend pilot (April-September 2020)](https://www.finos.org/hubfs/FINOS/assets/FINOS%20Legend%20Case%20Study%202021.pdf?hsLang=en-us) and is continued to be used as part of the [FINOS Financial Object Special Interest Group (SIG)](https://github.com/finos/financial-objects).

The goal of the Financial Objects SIG is to provide a neutral forum for individuals across the financial services industry to collectively identify the need for new, open, financial objects standards as well as modifications to existing ones. The Financial Objects SIG also aims to promote adoption of financial object definitions and models that support common industry workflows and use cases.

Legend models developed in [the FINOS hosted shared instance of Legend](https://legend.finos.org/studio), are **open source** and available at https://gitlab.legend.finos.org/. Every project in the FINOS hosted instance of Legend maps to a public GitLab project. Hence, no proprietary models should be built in the Legend Shared instance.

To request an account on the shared instance, use the form at the bottom of [https://www.finos.org/legend](https://www.finos.org/legend).

# Questions?

If you have questions about Legend, check out the list of previously asked [questions](https://github.com/finos/legend/issues?q=label%3Aquestion) in case it has already been answered. If you have a new question, feel free to [raise a GitHub issue](https://github.com/finos/legend/issues/new?assignees=&labels=&template=Support_question.md&title=) or to email [legend@finos.org](mailto:legend@finos.org) and the Legend team will get back to you.

## Join the mailing list

The Legend community uses the legend@finos.org mailing list to communicate with each other and to share relevant project updates. See the [mailing list archive](https://groups.google.com/a/finos.org/g/legend) for background, and **subscribe to the mailing list by sending an email to [legend+subscribe@finos.org](mailto:legend+subscribe@finos.org).**

# Roadmap

Find the Legend roadmap in the [Legend GitHub repository](https://github.com/finos/legend/wiki/Roadmap)

# Code and data model repositories

Legend makes use of both GitHub and GitLab.

## GitHub

The [FINOS GitHub organization](https://github.com/finos/) hosts the Legend open source code: https://www.github.com/finos/legend is the project's parent repository and is used for overall Legend documentation and issue tracking. The code for the components open sourced thus far can be found in the child repositories:

- [github.com/finos/legend-studio](https://github.com/finos/legend-studio)
- [github.com/finos/legend-sdlc](https://github.com/finos/legend-sdlc)
- [github.com/finos/legend-engine](https://github.com/finos/legend-engine)
- [github.com/finos/legend-pure](https://github.com/finos/legend-pure)
- [github.com/finos/legend-shared](https://github.com/finos/legend-shared)

## GitLab

GitLab is used for source control of data models within the Legend SDLC component. The data model code is stored in GitLab repositories.

# Background

Legend was originally developed by Goldman Sachs and contributed to FINOS in October 2020. See the October 2020 [Open Sourcing Press Release](https://www.finos.org/press/goldman-sachs-open-sources-its-data-modeling-platform-through-finos), and coverage in Business Insider ["Code for Goldman Sachs' internal data platform is now open for anyone to use"](https://www.businessinsider.com/code-for-goldmans-data-platform-legend-open-sharing-github-2020-10), and Bloomberg ["Goldman Sachs Open Sources its Data Modeling Platform through FINOS"](https://www.bloomberg.com/press-releases/2020-10-19/goldman-sachs-open-sources-its-data-modeling-platform-through-finos).

# License

Copyright 2020 Goldman Sachs

Distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

SPDX-License-Identifier: [Apache-2.0](https://spdx.org/licenses/Apache-2.0)
