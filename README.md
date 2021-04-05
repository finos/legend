[![FINOS - Incubating](https://cdn.jsdelivr.net/gh/finos/contrib-toolbox@master/images/badge-incubating.svg)](https://finosfoundation.atlassian.net/wiki/display/FINOS/Incubating)

<img src="https://github.com/finos/branding/blob/master/project-logos/active-project-logos/Legend%20Logo/Logo/2020_Legend_Dark.png" width="300">

Legend provides an **end-to-end data platform experience covering the full data lifecycle**. It encompasses the [**Legend-Pure language**](https://github.com/finos/legend-pure) and a suite of data management and governance tools known as the **Legend Platform**, which allows engineers and non-engineers alike to describe, connect, visualize, and query high-quality data. 

The **[Legend-Pure language](https://github.com/finos/legend-pure)** is an immutable functional language based on the Unified Modeling Language (UML) and inspired by the Object Constraint Language (OCL). The **Legend Platform** is a collection of tools, including the [Legend Studio](https://github.com/finos/legend-studio) visual data modeling environment, that are used to design, build, and test models in an intuitive, business-friendly way. Behind the scenes, Legend is backed by a powerful **Execution [Engine](https://github.com/finos/legend-engine)**, and uses GitLab for its Software Development Lifecycle ([SDLC](https://github.com/finos/legend-sdlc)). This enables users to leverage their data models in business workflows, while ensuring that data models are safe to use in live business processes.

Legend supports flat data sources (e.g. csv) and relational execution, and can generate code in languages and formats such as SQL, JSON, Protobuf, AVRO, and Rosetta JSON Schema, which enables easy interoperability across models and systems. These features are expected to be open sourced in the Spring of 2021. Other Legend components include Cube UI for user-friendly tabular data exploration, Query UI to search and access modelled data, and Services UI, which will allow managing of production data services (APIs) for repeatable and controlled data access. Cube, Query and Services are on the roadmap to be open sourced in the Fall of 2021.

*Legend was originally developed by Goldman Sachs and contributed to FINOS in October 2020. See the October 2020 [Open Sourcing Press Release](https://www.finos.org/press/goldman-sachs-open-sources-its-data-modeling-platform-through-finos), and coverage in Business Insider ["Code for Goldman Sachs' internal data platform is now open for anyone to use"](https://www.businessinsider.com/code-for-goldmans-data-platform-legend-open-sharing-github-2020-10), and Bloomberg ["Goldman Sachs Open Sources its Data Modeling Platform through FINOS"](https://www.bloomberg.com/press-releases/2020-10-19/goldman-sachs-open-sources-its-data-modeling-platform-through-finos).* 

# Documentation  
The Legend documentation site at [legend.finos.org](https://legend.finos.org/) includes information and resources about Legend, including the Legend roadmap, information on getting started (including [video tutorials](https://legend.finos.org/docs/getting-started/getting-started-guide#introductory-videos)), installing and contributing to Legend, and background information on the [Legend Studio](https://github.com/finos/legend-studio) and [Legend Pure](https://github.com/finos/legend-studio) modules. 

_The [documentation site](https://legend.finos.org) is built using Docusaurus based on the markdown files in the [`docs`](/docs/) folder._
_Feel free to suggest areas for documentation improvement by raising an [issue](https://github.com/finos/legend/issues)_.

## Roadmap
See the Legend roadmap at [legend.finos.org](https://legend.finos.org/)

# Get Involved 

## Join the mailing list
The Legend community uses the legend@finos.org mailing list to communicate with eachother and to share relevant project updates. See the [mailing list archive](https://groups.google.com/a/finos.org/g/legend) for background, and **subscribe to the mailing list by sending an email to [legend+subscribe@finos.org](mailto:legend+subscribe@finos.org).**

## Join a meeting
_More information coming soon_

## Contribute
### Contribute to Legend
To learn about contributing to Legend, see the [CONTRIBUTING.md](CONTRIBUTING.md) file or the ["contribute to Legend"](https://legend.finos.org/docs/getting-started/contribute-to-legend) section of the Legend documentation site.

### Contribute to FINOS projects that use Legend as a data modeling tool
Several FINOS projects are leveraging Legend for data modeling efforts around [Currency Reference Data](https://github.com/finos/secref-data#currency-reference-data), [Commodities Payout](https://github.com/finos/finos-fo#commodities-payout-workstream), and [Product Control](https://github.com/finos/finos-fo#product-control-common-template-workstream).

# Questions?
If you have questions about Legend, check out the list of previously asked [questions](https://github.com/finos/legend/issues?q=label%3Aquestion) in case it has already been answered. If you have a new question, feel free to [raise a GitHub issue](https://github.com/finos/legend/issues/new?assignees=&labels=&template=Support_question.md&title=) or to email [legend@finos.org](mailto:legend@finos.org) and the Legend team will get back to you.

# Background information

## Code and model repositories
Legend makes use of both GitHub and GitLab.

### GitHub
The [FINOS **GitHub** organization](https://github.com/finos/) hosts the Legend open source code: https://www.github.com/finos/legend is the project's parent repository and is used for overall Legend documentation and issue tracking. The code for the modules open sourced thus far can be found in the child repositories: [github.com/finos/legend-shared](https://github.com/finos/legend-shared), [github.com/finos/legend-sdlc](https://github.com/finos/legend-sdlc), [github.com/finos/legend-studio](https://github.com/finos/legend-studio), [github.com/finos/legend-engine](https://github.com/finos/legend-engine), [github.com/finos/legend-pure](https://github.com/finos/legend-pure).

#### Module Specific Issues
Module specific issues are opened, maintained, and prioritized within the modules specific issue list (e.g., [https://github.com/finos/legend-studio/issues](https://github.com/finos/legend-studio/issues) for Legend Studio). Issues can be aggregated from multiple reposistories as needed through [FINOS organization level GitHub kanban boards("Projects")](https://github.com/orgs/finos/projects).

### GitLab
GitLab is used for source control of models within the Legend SDLC module. The models, written in the Legend language, are stored in GitLab repositories.

#### Shared Public Instance of Legend Studio
FINOS hosts a shared instance of Legend Studio at [https://legend.finos.org/studio](https://legend.finos.org/studio). The purpose of this instance is to (1) provide a shared modeling environment for the FINOS community and its projects, and to (2) provide a place where people can try out Legend Studio. 
This instance was used by participants in the [FINOS Legend Studio pilot (April-September 2020)](https://www.finos.org/press/goldman-sachs-open-sources-its-data-modeling-platform-through-finos). 

Legend models developed on [the FINOS hosted shared instance of Legend Studio](https://legend.finos.org/studio), are open source and available at https://gitlab.legend.finos.org/. 

To request an account on the shared instance, use the form at the bottom of [https://www.finos.org/legend](https://www.finos.org/legend).

## Open sourcing Legend
On November 20, 2019, at FINOS' flagship conference, the [Open Source Strategy Forum](https://opensourcestrategyforum.org/), FINOS Platinum member [Goldman Sachs](https://developer.gs.com/docs/products/) announced [its intention](https://www.finos.org/press/goldman-announces-pure-alloy-contribution) to open source two closely related products into FINOS:
* Its internally developed logical modeling language, referred to within the bank as "PURE", and
* A workbench of tools, including a visual modeling platform, collectively referred to as "Alloy", created and used within Goldman Sachs to build, design, and execute PURE models

See Pierre de Belen's [Legend Demo at OSSF 2019](https://www.youtube.com/watch?v=na4DCgvdDJ4).

The [PURE language](https://github.com/finos/legend-pure), together with four modules - [Studio](https://github.com/finos/legend-studio), [SDLC](https://github.com/finos/legend-sdlc), [Engine](https://github.com/finos/legend-engine), and [Shared](https://github.com/finos/legend-shared) - were open sourced into FINOS on October 19, 2020. Concurrent to their open sourcing, they were collectively given a new, unified name - "Legend". The choice of the Legend name reflects how for Goldman Sachs the language and platform have been a guide - a legend - for the bank's data strategy.




# License
Copyright 2020 Goldman Sachs

Distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

SPDX-License-Identifier: [Apache-2.0](https://spdx.org/licenses/Apache-2.0)
