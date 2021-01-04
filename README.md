[![FINOS - Incubating](https://cdn.jsdelivr.net/gh/finos/contrib-toolbox@master/images/badge-incubating.svg)](https://finosfoundation.atlassian.net/wiki/display/FINOS/Incubating)



# Legend Background
On November 20, 2019, at FINOS' flagship conference, the [Open Source Strategy Forum](https://opensourcestrategyforum.org/), FINOS Platinum member [Goldman Sachs](https://developer.gs.com/docs/products/) announced [its intention](https://www.finos.org/press/goldman-announces-pure-alloy-contribution) to open source two closely related products into FINOS:
* Its internally developed logical modeling language, referred to within the bank as "PURE", and
* A workbench of tools, including a visual modeling platform, collectively referred to as "Alloy", created and used within Goldman Sachs to build, design, and execute PURE models

The [PURE language](https://github.com/finos/legend-pure), together with four modules - [Studio](https://github.com/finos/legend-studio), [SDLC](https://github.com/finos/legend-sdlc), [Engine](https://github.com/finos/legend-engine), and [Shared](https://github.com/finos/legend-shared) - were open sourced into FINOS on October 19, 2020. Concurrent to their open sourcing, they were collectively given a new, unified name - "Legend". The choice of the Legend name reflects how for Goldman Sachs the language and platform have been a guide - a legend - for the bank's data strategy.

# Shared Public Instance of Legend
A shared, external instance of Legend deployed on AWS within FINOS' infrastructure is available at [https://legend.finos.org/studio](https://legend.finos.org/studio). The primary purpose of this instance is to provide a shared modeling environment for the FINOS community and its projects. An additional purpose of this instance is to provide a place where people can try out Legend for themselves, check out its tools and features, and see what a Legend model looks like. This instance of Legend was the same instance that was used by the pilot group to model in Phase 1 (see [Roadmap](#Roadmap) section below for more info on our phases).

To request an account on the shared instance, use the form at the bottom of [https://www.finos.org/legend](https://www.finos.org/legend). You will need a GitHub account and, if want to be able to create and edit models, be covered by a [Contributor License Agreement](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530375/Contribution+Compliance+Requirements#ContributionComplianceRequirements-ContributorLicenseAgreement) with FINOS (otherwise a read-only account will be created).

Note that the features available in the shared, external Legend instance within FINOS infrastructure largely map to the five modules open sourced to date. Features that are not yet available include model-to-database mappings and the execution of queries as services. As more modules are open sourced, more features will be activated in the shared instance. 

# Installation | Running a Legend Instance Locally | Deploying an Instance of Legend
Information on running and installing your own instance of Legend locally, on premise, or in a cloud provider can be found [here].(https://legend.finos.org/docs/getting-started/installation-guide).

# Code (and Model) Repositories
## GitHub and GitLab
The Legend platform and project makes use of both GitHub and GitLab.
### GitHub
* GitHub, specifically the [FINOS GitHub organization](https://github.com/finos/), is the distributed source and version control management system used for Legend code.
  * The Legend GitHub repos, like all FINOS repos, are configured to make use of the FINOS [Open Developer Platform](https://odp.finos.org/) tooling.
* GitHub infrastructure is what's used to do Legend builds (e.g., of [Legend JARS, which are then distributed through Maven Central](https://search.maven.org/search?q=g:org.finos.legend))
### GitLab
* GitLab is used for source control of models "under the hood" within the Legend SDLC module. As such the models, written in the Legend language, are stored in GitLab repositories.


## Repositories
### Code Repositories (GitHub)
[This repository (finos/legend)](https://www.github.com/finos/legend) is the parent repository for the project. It is used principally for overall Legend documentation and issue tracking. The code itself for the 5 modules open sourced thus far can be found in the following 5 child repositories:
* [Shared Module](https://github.com/finos/legend-shared): https://github.com/finos/legend-shared
* [SDLC Module](https://github.com/finos/legend-sdlc): https://github.com/finos/legend-sdlc
* [Studio Module](https://github.com/finos/legend-studio): https://github.com/finos/legend-studio
* [Engine Module](https://github.com/finos/legend-engine): https://github.com/finos/legend-engine
* [Legend Language](https://github.com/finos/legend-pure): https://github.com/finos/legend-pure
#### Module Specific Issues
Module specific issues are opened, maintained, and prioritized within the modules specific issue list (e.g., [https://github.com/finos/legend-studio/issues](https://github.com/finos/legend-studio/issues) for Legend Studio). Issues can be aggregated from multiple reposistories as needed through [FINOS organization level GitHub kanban boards("Projects")](https://github.com/orgs/finos/projects).

### Model Repositories (GitLab)
Legend models developed on [the external shared instance](https://legend.finos.org/studio), including those built during the Phase 1 pilot described below, are themselves open sourced code and available in the following GitLab repositories:
* FX Options extensions to the CDM: https://gitlab.legend.finos.org/legend-pilot/cdm
* Commodities Reference Data: https://gitlab.legend.finos.org/legend-pilot/commonrefdata

**Note on model access in GitLab** Currently to access (and fork, etc.) these GitLab model repositories directly, you will need an account on the Legend shared instance (an account is also required to model and access these models through the Studio UI). An account may be requested through the account request form at the bottom of https://www.finos.org/legend. In the future we plan to [migrate these model repositories](https://github.com/finos/alloy/issues/177) to public repos on GitLab.com, after which an account will no longer be needed to access and contain the repositories that contain the models.

# Contributing
To learn more about how to get involved with Legend and contribute to it, see the [CONTRIBUTING.md](CONTRIBUTING.md) file or the [Contribute section of the docs site](https://legend.finos.org/docs/getting-started/contribute-to-legend). 

# Development setup
(Coming Soon)

# Roadmap
## Phase 0 (October 2019 - January 2020) - COMPLETED
* Announced the intention to open source PURE/Alloy (now named Legend) at the [Open Source Strategy Forum](https://opensourcestrategyforum.org/)
* Deployed an [external instance of Legend](legend.finos.org/studio) to AWS within FINOS infrastructure, initially for use in Phase 1 (see below) for pilot participants to use to do shared modeling.
* Commenced internal code evaluation and preparation for open sourcing

## Phase 1 (January 2020 - September 2020) - COMPLETED
* Opened the [external instance of Legend](legend.finos.org/studio) Studio deployed in Phase 0 to a pilot group of financial institutions, composed of FINOS members plus several other institutions that expressed an interest in participating in the pilot, for them together with Goldman Sachs and FINOS to evaluate the use of Legend to do shared, collaborative modeling. In this release, Studio supported a limited set of functionality, including the creation of data models, model-to-model mappings, constraints and derivations
* During the pilot phase, modelers collaborated on the [Legend external instance](https://legend.finos.org/studio) to build shared models. Modeling occurred in two work streams: 
  * [An FX workstream of the the pilot group](https://github.com/finos/legend/tree/master/meeting-minutes/fx-options-wg) extended and expanded the FX Option model of the Common Domain Model (CDM), developed by the International Swaps and Derivatives Association (ISDA). The Averaging Model developed during the pilot has since been approved by the ISDA Architecture Review Committee and [released in the CDM (see 2.82.8)](https://docs.rosetta-technology.io/cdm/releases/all.html).
  * The pilot group also created a [Commodity Reference Data workstream](https://github.com/finos/legend/tree/master/meeting-minutes/commodities-ref-data-wg), to work on commodities data, especially in the context of a Fixed vs Float swap, including defining a payout model to be proposed into the CDM.
  
  Other areas that the pilot group have discussed as potential areas to model together in Legend include Environmental, Social and Governance (ESG) data as well as potentially continuing some of the work started by the [FINOS Financial Objects program on RFQ](https://fo.finos.org/docs/objects/rfq) in the context of interest rate swaps.

* Performed code readiness work to extract Legend code from GS infrastructure, and sufficiently abstract and generalize code base as needed. Revised code base to reflect new name (note that some references to old "PURE" and "Alloy" name still exist). GS Engineering, together with FINOS and Linux Foundation DevOps teams, performed code scanning and remediations. Moved Goldman Sachs's daily production builds of Legend to FINOS infrastructure and public GitHub repos.

## Phase 2 (October 2020 - December 2020)
* On 2020.10.19 made underlying code bases to five Legend modules available as open source under an Apache 2.0 license
* Announced new name (Legend) and rebranded
* Identify "good first issues" for developers new to Legend
* Begin accepting pull requests of code from external (non-GS) developers.
* Conduct office hours for external developers interested in getting involved with Legend

## Phase 3 (Q1 2021)
* Make additional functionality available in Studio, including relational execution, support for flat data sources (e.g., csv) and automated code generation (e.g., JSON schema, Protobuf, AVRO).
* Transition shared model repositories from hosted GitLab instance (gitlab.legend.finos.org) to gitlab.com.

## Phase 4 (Q3 2021)
* Open source Cube UI for user-friendly tabular data exploration.

## Phase 5 (Q4 2021)
* Open source Query UI to search and access modeled data.

## Phase 6 (Q4 2021)
* Open source Services UI. This will allow managing of production data services (APIs) for repeatable and controlled data access.

# Documentation 
## [Legend Documentation Site (legend.finos.org)](https://legend.finos.org/)
The [documentation site](https://legend.finos.org) is built using Docusaurus based on the markdown files in the [`docs`](/docs/) folder. 

_Feel free to suggest areas for documentation improvement by raising an [issue](https://github.com/finos/legend/issues)_

## [This Repository - GitHub.com (github.com/finos/legend)](https://github.com/finos/legend)

[This repository (github.com/finos/legend)](github.com/finos/legend) hosts:
* The underling files for the [Legend Documentation site](https://legend.finos.org) (composed in markdown file format and stored in the `docs/` folder)
* The [shared issues list](https://github.com/finos/legend/issues) used for task management to track project activity around documentation, deployments, and the overall effort associated with open sourcing Legend
*  These issues are organized in various kanban boards, including the [overall project kanban](https://github.com/orgs/finos/projects/5).

## [FINOS Hosted GitLab Repository (gitlab.legend.finos.org)](https://gitlab.legend.finos.org)
A separate [hosted Gitlab repository, gitlab.legend.finos.org](gitlab.legend.finos.org) hosts shared models that were developed by the [Legend project pilot team](https://groups.google.com/a/finos.org/forum/#!forum/legend-pilot).

## [gitlab.com (https://gitlab.com/finosfoundation)](https://gitlab.com/finosfoundation) [Not Yet Used]
In the future we intend to migrate the models repositories from the hosted GitLab repository to [https://gitlab.com/finosfoundation](https://gitlab.com/finosfoundation). For now, this is unused but will eventually be the long-term home for public models built using Legend.

# Find out more
## Review the existing materials
* 
* [Keynote: Open Sourcing Legend: The Flagship of Goldman Sachs’s Data Strategy – and Now Yours? - Pierre de Belen, Managing Director, Goldman Sachs
 at OSSF 2020](https://www.youtube.com/watch?v=93c966jNzYo&feature=youtu.be)
* [Why Open Sourced Data Models Revolutionize the Financial Industry - Pierre de Belen & Ffion Acland, Goldman Sachs at OSSF 2020](https://www.youtube.com/watch?v=6rUm7dN9pfU&feature=youtu.be) 
* [Legend Documentation site](https://legend.finos.org/)
* [Legend Demo by Pierre de Belen of Goldman Sachs at OSSF 2019](https://www.youtube.com/watch?v=na4DCgvdDJ4) (video)
* Legend meeting minutes:
  * [prior to July 2020](https://github.com/finos/legend/tree/master/meeting-minutes)
  * [July 2020 and later](https://github.com/finos/legend/issues?q=label%3Ameeting)
  
## [Raise an issue](https://github.com/finos/legend/issues)
* If you cannot find the answer to your question in the above materials, please raise an issue at https://github.com/finos/legend/issues

## Join the upcoming Legend meetings 

### Legend Office Hours (Completed)

### Legend General Meeting in January 2021
Legend General meetings are your opportunity to get updates on Legend, provide feedback on the product and the roadmap, see demos, and ask questions. The next general meeting is [scheduled for January 28, 2021](https://calendar.google.com/calendar/u/0/r/week/2021/1/28?eid=bGdwM2F0NmFob2kxdTQ0dGo2YjB2b3RkbTMgZmlub3Mub3JnX2ZhYzhtbzFyZmM2ZWhzY2cwZDgwZmk4amlnQGc&ctz=America/New_York&sf=true). 


# License
Copyright 2020 Goldman Sachs

Distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

SPDX-License-Identifier: [Apache-2.0](https://spdx.org/licenses/Apache-2.0)
