---
id: roadmap
title: Roadmap
sidebar_label: Roadmap
---

# Roadmap

## Legend Pilot Phase 0 (October 2019 - January 2020) - *Completed*

### Phase 0 Goals

- Stand-up and deploy an external instance of Legend for shared modeling - *DONE*
- [Open Source Strategy Forum announcement](https://www.youtube.com/watch?v=fPUYUt9Yr_I) of Goldman Sachs' intention to open source Legend and the associated roadmap for that work - *DONE*
- Commence internal code evaluation and preparation for open sourcing - *DONE*

## Legend Pilot Phase 1 (January to September 2020) - *Completed*

### Phase 1 Goals

- **Goal 1:** Evaluate shared data modeling using Legend and define collaboration model for further model development
  - Evaluate how shared data modeling can work using Legend and define a framework for collaboration, by assessing:
    - Governance process
    - Collaboration amongst banks
    - Technical solution
  - Success Criteria
    - Basic fluency in Legend by non-GS modelers using Legend
    - Functional areas of interest identified and working groups to model in those areas commenced
    - Feedback on Legend functionality shared with GS development team can be incorporated, as feasible, into the open sourced version of Legend at the start of Phase 2

- **Goal 2:** Using Legend collectively develop a model or model extension
  - Find a good use case, with propensity for value creation through shared modeling and data shaping, and then work on something “production relevant”
    - Ideally shared models can be contributed back to respective standards bodies such as ISDA for derivatives (such as the proposed changes to the CDM)
    - FINOS members and community can provide further momentum by implementing models and supporting standards by convention
    - Stretch goal to submit changes back to respective standards body (ISDA) and, better still, see it accepted into the standard
  - Success Criteria
    - Support of standards body (ISDA)

- **Goal 3:** Prepare Legend code base, build system, and stakeholders for open sourcing of code

### Phase 1 Plan - Overall

#### Launch Pilot Group

- Pilot Kick-off (January 29) - *Completed*

#### Modeling

- Import and ready ISDA CDM in Legend - *Completed*
- Define, organize, and launch modeling working groups
  - FX Option - *Completed*
  - Commodities Reference Data - *Completed*
  - Sustainability / Renewable energy Working Group - *Proposed*
- Define potential areas of further modeling collaboration after pilot ends
  - Consider relationship with other FINOS projects like Financial Objects
  - Additional standards and/or standards bodies to collaborate with

## FX Option Working Group Plan

### Stage 1 (4/2 - 5/28/2020)

**Milestone:** One CDM FxOption model change - Outcome *[TBC]*

- Products: Fx Vanilla Option, Fx Barrier Option
- Review FpML FxOption model against CDM and identify relevant vs unused attributes; for relevant attributes review the cardinality and data types
- Submit and test changes to model in Legend Studio
- Add agreed changes to CDM Rosetta for testing and consideration by the CDM Design WG

### Stage 2 (6/4 - 6/25/2020)

**Milestone:** One CDM FX lifecycle model change - Outcome *[TBC]*

- Analyze the business events and primitive processes for 'Exercise', 'Expire' and any other applicable lifecycle events for Fx Vanilla Option
- Suggest and review new attributes for the model, considering validations/conditions are in line with CDM principles
- Submit and test changes to model in Legend Studio
- Add agreed changes to CDM Rosetta for testing and consideration by the CDM Design WG

### Stage 3 (7/2 - 8/6/2020)

**Milestone:** [TBC] - Outcome *[TBC]*

- Analyze other use cases e.g. Fx Strategies, Asian features, exotics scenarios etc 
- Suggest and review new attributes for the model, considering validations/conditions are in line with CDM principles
- Submit and test changes to model in Legend Studio
- Add agreed changes to CDM Rosetta for testing and consideration by the CDM Design WG

## Commodities Reference Data Working Group Plan

### Stage 1 (4/8 - 5/27/2020)

**Milestone:** Commodities Reference Data model proposal merge into Legend / Outcome: *Complete*

**Milestone:** CDM Payout change to support Commodities vanilla scenario / Outcome: *[TBC]*

- Product: WTI Fixed/Float Oil Swap.
- Review FpML and identify relevant v unused attributes; for relevant attributes review the cardinality and data types.
- Determine contractual data points v reference data points and how these two models should interact.
- Identify gaps in existing CDM model and make updates to cover the commodities fixed v float scenario.

### Stage 2 (6/3 - 6/25/2020)

**Milestone:** Extend Commodities Reference Data model properties to capture relevant data that can be associated with a product / Outcome *[TBC]*

**Milestone:** Capture extended Commodities use cases in the CDM model in Legend / Outcome: *[TBC]*

- Agree on Reference Data model structure.
- Identify associated data that is required in the industry associated with a product.
- Review additional Commodities payout scenarios and look to factor into the CDM model in Legend.
- Agree on best way to represent Commodities payout in CDM, either as a distinct class, or combined with another existing payout.

### Stage 3 (7/1 – 8/5/2020)

**Milestone #1:** Finalise Reference Data Model construct and agree on next industry steps post pilot phase / Outcome: *[TBC]*

**Milestone #2:** CDM Payout change to support Commodities vanilla scenario / Outcome: *[TBC]*

- Review options and agree on next steps for Reference Data model.
- Finalise Commodities Payout features and merge into Legend.
- Review required qualifier functions for CDM and agree solution for Commodities.
- Add agreed changes to CDM Rosetta for testing and consideration by the CDM Design WG.

## Open Source Preparations

### [Code Readiness](https://github.com/finos/legend/labels/Code%20Readiness)

- [Code Modulization](https://github.com/finos/legend/issues/119)
- [Refactor Execution code to remove GS connection management](https://github.com/finos/legend/issues/127) (GS)
- [Migrate Engine to GitLab](https://github.com/finos/legend/issues/134)
- [Re-name Legend in Studio code](https://github.com/finos/legend/issues/136)
- [Re-name Legend to New Name in SDLC code](https://github.com/finos/legend/issues/139)
- [Re-name Legend to New Name in PURE code](https://github.com/finos/legend/issues/140)
- [Re-name Legend to New Name in Engine code](https://github.com/finos/legend/issues/141)
- [Extract core PURE System ready for Open Sourcing](https://github.com/finos/legend/issues/142)
- [Open Source Legend SDLC code ](https://github.com/finos/legend/issues/145)
- [Open Source Legend Execution code](https://github.com/finos/legend/issues/146)
- [Open Source Legend Studio Code](https://github.com/finos/legend/issues/147)
- [Open Source PURE Language](https://github.com/finos/legend/issues/148)
- Break into two distinct GitLab repos

### [Build Readiness](https://github.com/finos/legend/labels/Build%20Readiness)

- [Define GitHub Actions for building and testing Docker images](https://github.com/finos/legend/issues/93) (FINOS + GS)
- [Deploying from external repo to GS works](https://github.com/finos/legend/issues/144)
- [Test build and deploy works in open source environment for SDLC](https://github.com/finos/legend/issues/129)
- [Build support for all test permutations](https://github.com/finos/legend/issues/130)
- [Discuss how to manage GA releases](https://github.com/finos/legend/issues/131)
- [Test build and deploy works in open source environment for Studio](https://github.com/finos/legend/issues/132)
- [Test build and deploy works in open source environment for Engine](https://github.com/finos/legend/issues/133)

### [Developer Readiness](https://github.com/finos/legend/labels/developer_readiness)

- [Define new code release process](https://github.com/finos/legend/issues/149)

### [Communication Readiness](https://github.com/finos/legend/labels/communication_readiness)

- [External Communication Plan for new name](https://github.com/finos/legend/issues/137)
- [Training Video Produced and Posted](https://github.com/finos/legend/issues/26)
- [User guide: how to run your own on premise version](https://github.com/finos/legend/issues/143)
- Press Release Prepared and Embargoed

- Support Plan
  - Escalation
  - Coverage Model

## Phase 1 Meeting Minutes

- [Legend General Monthly Meeting Minutes](https://github.com/finos/Legend/tree/master/meeting-minutes/general-meeting)
- [Legend Pilot Meeting Minutes](https://github.com/finos/Legend/tree/master/meeting-minutes/pilot-project-meeting-minutes)
- [Legend FX Options WG Meeting Minutes](https://github.com/finos/Legend/tree/master/meeting-minutes/fx-options-wg)
- [Legend Commodity Reference Data WG Meeting Minutes](https://github.com/finos/Legend/tree/master/meeting-minutes/commodities-ref-data-wg)

## Legend Pilot Phase 2 (September 2020 - Early 2021) - Yet to Start

### Phase 2 Goals

- Complete open sourcing of wave 1 of Legend code
- Further documentation and training material
- Prepare for wave 2 open sourcing of Legend code

### Phase 2 Plan

**Milestone 2.1:** – [Code Uplift](https://github.com/finos/legend/milestone/5)

**Milestone 2.2:** – [_**Code Release - 1st Wave (Target Summer - Early Fall 2020)**_.](https://github.com/finos/legend/milestone/6)

- *Code for SDLC, Execution, Studio, PURE System (tentative scope) made available in GitHub and/or GitLab under Apache 2.0 license**
- CI build + release process
- Deploy pipeline from code to demo environement on FINOS infrastructure (legend.finos.org/studio)

**Milestone 2.3:** - More Legend Documentation](https://github.com/finos/legend/milestone/8)

- Video tutorials for Studio
- Guide to building and deploying
- Guide to developing in Legend

**Milestone 2.4:**- Second batch of code open sourced](https://github.com/finos/legend/milestone/7)

- Code for Cube, Graph, Services (tentative scope) made available in GitHub and/or GitLab under Apache 2.0 license
  - [Open Source Services code](https://github.com/finos/legend/issues/150)
  - [Open Source Cube code](https://github.com/finos/legend/issues/151)
  - [Open Source Registry code](https://github.com/finos/legend/issues/152)
- Deploy demo database in demo environment in FINOS infrastructure to demonstrate execution
- Move instances to OpenShift (?)

## Next steps

- [Create a model](create-model.md)
- [Create a diagram](create-diagram.md)
- [Edit a model](edit-model.md)
