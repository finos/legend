[![Build Status](https://travis-ci.org/finos/alloy.svg?branch=master)](https://travis-ci.org/finos/alloy)
[![FINOS - Incubating](https://cdn.jsdelivr.net/gh/finos/contrib-toolbox@master/images/badge-forming.svg)](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530756/Project+Lifecycle)

# Legend Background
On November 20, 2019, at FINOS' flagship conference, the [Open Source Strategy Forum](https://opensourcestrategyforum.org/), FINOS Platinum member [Goldman Sachs](https://developer.gs.com/docs/products/) announced [its intention](https://www.finos.org/press/goldman-announces-pure-alloy-contribution) to open source two closely related products into FINOS:
* Its internally developed logical modeling language, referred to within the bank as "PURE", and
* A suite and workbench of tools, including a visual modeling platform, collectively referred to as "Alloy", used to build, design, and execute PURE models

The [PURE language](https://github.com/finos/legend-pure), together with four modules - [Studio](https://github.com/finos/legend-studio), [SDLC](https://github.com/finos/legend-sdlc), [Engine](https://github.com/finos/legend-engine), and [Shared](https://github.com/finos/legend-shared) - were open sourced into FINOS on October 19, 2020. Concurrently and collectively they have also were given a new, unified name - "Legend". This choice of this name reflects how for Goldman Sachs the language and platform have been a guide - a legend – for the bank's data strategy.

# Shared Public Instance of Legend
A shared instance of Legend deployed on AWS within FINOS' infrastructure is available at [https://legend.finos.org/studio](https://legend.finos.org/studio). The purpose of this instance is to provide a shared modeling environment for the FINOS community, and to also provide a place where people can try out and take a look at how Legend works, its tools and features, and what a Legend model looks like. This instance was what was used by the pilot group to model in Phase 1 (see Roadmap section below for more info on our phases.)

To request an account on the shared instance, use the form at the bottom of https://www.finos.org/legend. You will need a GitHub account and if want to be able to create and edit models, be covered by a [Contributor License Agreement](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530375/Contribution+Compliance+Requirements#ContributionComplianceRequirements-ContributorLicenseAgreement) with FINOS. 

Note that the features available in the shared instance within FINOS infrastructure largely map to the five modules open sourced to date. Features that are not yet available include model-to-database mappings and the execution of queries as services. As more modules are open sourced, more features will be activated in the shared instance. 

# Code (and Model) Repositories
[This repository (finos/legend)](www.github.com/finos/legend) is the parent repository for the project. It is used principly for documentation and issue tracking. The code itself for the 5 modules open sourced thusfar can be found in the following 5 child repositories:
* [Shared Module](https://github.com/finos/legend-shared): https://github.com/finos/legend-shared
* [SDLC Module](https://github.com/finos/legend-sdlc): https://github.com/finos/legend-sdlc
* [Studio Module](https://github.com/finos/legend-studio): https://github.com/finos/legend-studio
* [Engine Module](https://github.com/finos/legend-engine): https://github.com/finos/legend-engine
* [Legend Language](https://github.com/finos/legend-pure): https://github.com/finos/legend-pure

Additionally, the shared Legend models developed during the Phase 1 pilot (described below) are themselves open sourced code and available in the following GitLab repositories:
* FX Options extensions to the CDM: https://gitlab.legend.finos.org/alloy-pilot/cdm
* Commodities Reference Data: https://gitlab.legend.finos.org/alloy-pilot/commonrefdata

Note: To access (and fork, etc.) these GitLab model repositories directly, you will need an account on the Legend shared instance (also required to model and access these models through the Studio UI). An account may requested through the account request form at the bottom of https://www.finos.org/legend. (In the future we plan to migrate these repositories to public repos on GitLab.com, after which an account will no longer be needed to access the repositories that contain the models.)

# Roadmap
## Phase 0 (October 2019 - January 2020) - COMPLETED
* Announced the intention to open source PURE/Alloy (now named Legend) at the [Open Source Strategy Forum](https://opensourcestrategyforum.org/)
* Deployed an external instance of Legend to AWS for Phase 1 shared modeling
* Commenced internal code evaluation and preparation for open sourcing

## Phase 1 (January 2020 - September 2020) - COMPLETED
* Using the [external instance of Legend](legend.finos.org/) made Studio available to a pilot group of financial institutions, composed of FINOS members plus several other institutions that expressed an interest in participating in the pilot, for them, together with Goldman Sachs and FINOS, to evaluate the use of Legend to do shared, collaborative modeling. In this release, Studio supported a limited set of functionality, including the creation of data models, model-to-model mappings, constraints and derivations
* During the pilot phase, modelers collaborated on Legend to build shared models. Modeling occurred in two work streams: 
  * Using the FX Option in the Common Domain Model (CDM), developed by the International Swaps and Derivatives Association (ISDA), as a starting point, extended and expanded the FX Option model, specifically the Averaging Modeling. The extensions built during the pilot have since been proposed and accepted by the ISDA Architecture Review Committee into the CDM.
  * Commodity Reference Data, especially in the context of a Fixed vs Float swap, including defining a payout model to be proposed into the CDM.
  Other areas that the pilot group have discussed as potential areas to model together in Legend include Environmental, Social and Governance (ESG) data as well as potentially continuing some of the work started by the FINOS Financial Objects program on RFQ in the context of interest rate swaps.
* Performed code readiness work to extract Legend code from GS infrastructure, and sufficiently abstract and generalize code base as needed. Revised code base to reflect new name (note that some references to old "PURE" and "Alloy" name still exist). GS Engineering, together with FINOS and Linux Foundation DevOps teams, performed code scanning and remediations. Moved Goldman Sachs's daily production builds of Legend to FINOS infrastructure and public GitHub repos.

## Phase 2 (October 2020 -):
  * On 2020.10.19 made underlying code bases to five Legend modules available as open source under an Apache 2.0 license
  * Announced new name (Legend) and rebranded
  * Identify "good first issues" for developers new to Legend
  * Begin accepting pull requests of code from external (non-GS) developers.
  * Conduct office hours for external developers interested in getting involved with Legend


# Contributing
See our [CONTRIBUTING.md](CONTRIBUTING.md) file.

# Installation and Running a Legend Instance of One's Own
([Coming Soon](https://github.com/finos/alloy/issues/143); Information on running and installing your own instance of Legend, either on premise or in a cloud provider such as AWS, Azure, OpenShift, Google, etc.)

# Usage example
(Coming Soon)

# Development setup
(Coming Soon)

# Documentation 
## [Legend Documentation Site (legend.finos.org)](https://legend.finos.org/)
The [documentation site](https://legend.finos.org) is built using Docusaurus based on the markdown files in the [`docs`](/docs/) folder. 

## [This Repository - GitHub.com (github.com/finos/legend)](https://github.com/finos/legend)

[This repository (github.com/finos/legend)](github.com/finos/legend) hosts:
* The underling files for the [Legend Documentation site](https://legend.finos.org) (composed in markdown file format and stored in the `docs/` folder)
* The [shared issues list](https://github.com/finos/legend/issues) used for task management to track project activity around documentation, deployments, and the overall effort associated with open sourcing Legend
*  These issues are organized in various kanban boards, including the [overall project kanban](https://github.com/orgs/finos/projects/5).

## [FINOS Hosted GitLab Repository (gitlab.legend.finos.org)](https://gitlab.legend.finos.org)
A separate [hosted Gitlab repository, gitlab.legend.finos.org](gitlab.legend.finos.org) hosts shared models that were developed by the [Legend project pilot team](https://groups.google.com/a/finos.org/forum/#!forum/legend-pilot).

## [gitlab.com (https://gitlab.com/finosfoundation)](gitlab.com/finosfoundation) [Not Yet Used]
In the future we intend to migrate the models repositories from the hosted GitLab repository to [https://gitlab.com/finosfoundation](https://gitlab.com/finosfoundation). For now, this is unused but will eventually be the long-term home for public models built uysing Legend.

# Find out more

## Review the existing materials
* [Legend Demo by Pierre de Belen of Goldman Sachs at OSSF 2019](https://www.youtube.com/watch?v=na4DCgvdDJ4) (video)
* [Replay from May 6th Legend Pilot Call Presentation - Part 1 of Open Source Fundamentals & Concepts for Legend Modeling](https://www.finos.org/hubfs/FINOS/2020%20Video%20Uploads/FINOS%20-%20Open%20Source%20Fundamentals%20-%20Part%201%20-%2006%20May%2020.mp4) (video)
* [Replay from May 20th Legend Pilot Call Presentation - Part 2 of Open Source Fundamentals & Concepts for Legend Modeling](https://www.finos.org/hubfs/FINOS/2020%20Video%20Uploads/FINOS%20-%20Open%20Source%20Fundamentals%20-%20Part%202%20-%2013%20May%2020.mp4) (video)
* [Legend Documentation site](https://legend.finos.org/)
* Legend meeting minutes:
  * [prior to July 2020](https://github.com/finos/legend/tree/master/meeting-minutes)
  * [July 2020 and later](https://github.com/finos/legend/issues?q=label%3Ameeting)
  
## [Raise an issue](https://github.com/finos/legend/issues)
* If you cannot find the answer to your question in the above materials, please raise an issue at https://github.com/finos/legend/issues

## Join Legend Office Hours _(more information coming soon)_

# License
Copyright 2020 Goldman Sachs

Distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

SPDX-License-Identifier: [Apache-2.0](https://spdx.org/licenses/Apache-2.0)
