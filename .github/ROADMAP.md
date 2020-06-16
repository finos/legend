
# Alloy Pilot Phase 0 (October 2019 - January 2020) - Completed
## Phase 0 Goals
* Stand-up and deploy an external instance of Alloy for shared modeling - *DONE*
* [Open Source Strategy Forum announcement](https://www.youtube.com/watch?v=fPUYUt9Yr_I) of Goldman Sachs intention to open source Alloy and the associated roadmap for that work (i.e. this doc) - *DONE*
* Commence internal code evaluation and preparation for open sourcing - *DONE*


# Alloy Pilot Phase 1 (January to September 2020) - *In Progress* 
## Phase 1 Goals
### Phase 1 Goal 1: Evaluate shared modeling using Alloy and and define collaboration model for further model development
* Evaluate how shared modeling can work using Alloy and define the best process to work together, by assessing: 
    * Governance process 
    * Collaboration amongst banks 
    * Technical solution 
* Success Criteria
    * Basic fluency in Alloy by non-GS modelers using Alloy
    * Functional areas of interest identified and working groups to model in those areas commenced
    * Feedback on Alloy shared with Goldman development team such that said feedback can be incorporated, as feasible, into the version of Alloy released as open source at the start of Phase 2 

### Phase 1 Goal 2: Using Alloy collectively develop a model or model extension
* Find a good use case, with propensity for value creation through shared modeling and data shaping, and then work on (i.e., model) something “production relevant” 
    * Ideally shared models can and should also be contributed back to respective standards bodies such as ISDA for derivatives (e.g., proposed changes to the CDM) 
    * FINOS members and community can provide further momentum by implementing models and supporting standards by convention
    * Stretch goal to submut changed back to respective standards body (ISDA) and, better still, see it accepted into the standard
* Success Criteria
    * Support of standards body (ISDA)

### Phase 1 Goal 3: Prepare Alloy code base, build system, and stakeholders for open sourcing of code


## Phase 1 Plan - Overall
### Launch Pilot Group
* Pilot Kick-off (January 29) - *Completed* 

### Modeling
* Import and ready ISDA CDM in Alloy - *Completed*
* Define, organize, and launch modeling working groups
  * FX Option - *Launched*
  * Commodities Reference Data - *Launched*
  * Sustainability / Renewable energy Working Group - *Proposed*
* Define potential areas of further modeling collaboration after pilot ends
  * Consider relationship with other FINOS projects like Financial Objects
  * Additional standards and/or standards bodies to collaborate with


## FX Option Working Group Plan
### Stage 1 (4/2 - 5/28/2020)
#### Milestone: One CDM FxOption model change - Outcome *[TBC]*
* Products: Fx Vanilla Option, Fx Barrier Option
* Review FpML FxOption model against CDM and identify relevant vs unused attributes; for relevant attributes review the cardinality and data types
* Submit and test changes to model in AlloyStudio
* Add agreed changes to CDM Rosetta for testing and consideration by the CDM Design WG

### Stage 2 (6/4 - 6/25/2020) 
#### Milestone: One CDM FX lifecycle model change - Outcome *[TBC]*
* Analyse the business events and primitive processes for 'Exercise', 'Expire' and any other applicable lifecycle events for Fx Vanilla Option
* Suggest and review new attributes for the model, considering validations/conditions are in line with CDM principles
* Submit and test changes to model in AlloyStudio
* Add agreed changes to CDM Rosetta for testing and consideration by the CDM Design WG

### Stage 3 (7/2 - 8/6/2020)
#### Milestone:[TBC] - Outcome *[TBC]*                       
* Analyse other use cases e.g. Fx Strategies, Asian features, exotics scenarios etc 
* Suggest and review new attributes for the model, considering validations/conditions are in line with CDM principles
* Submit and test changes to model in AlloyStudio
* Add agreed changes to CDM Rosetta for testing and consideration by the CDM Design WG


## Commodities Reference Data Working Group Plan
### Stage 1 (4/8 - 5/27/2020) 
#### Milestone: Commodities Reference Data model proposal merge into Alloy / Outcome: *Complete*
#### Milestone: CDM Payout change to support Commodities vanilla scenario / Outcome: *[TBC]*
* Product: WTI Fixed/Float Oil Swap.
* Review FpML and identify relevant v unused attributes; for relevant attributes review the cardinality and data types.
* Determine contractual data points v reference data points and how these two models should interact.
* Identify gaps in existing CDM model and make updates to cover the commodities fixed v float scenario.

### Stage 2 (6/3 - 6/25/2020)
#### Milestone: Extend Commodities Reference Data model properties to capture relevant data that can be associated with a product / Outcome *[TBC]*
#### Milestone: Capture extended Commodities use cases in the CDM model in Alloy / Outcome: *[TBC]*
* Agree on Reference Data model structure.
* Identify associated data that is required in the industry associated with a product.
* Review additional Commodities payout scenarios and look to factor into the CDM model in Alloy. 
* Agree on best way to represent Commodities payout in CDM, either as a distinct class, or combined with another existing payout. 

### Stage 3 (7/1 – 8/5/2020)
#### Milestone #1: Finalise Reference Data Model construct and agree on next industry steps post pilot phase / Outcome: *[TBC]*
#### Milestone#2: CDM Payout change to support Commodities vanilla scenario / Outcome: *[TBC]*
* Review options and agree on next steps for Reference Data model.
* Finalise Commodities Payout features and merge into Alloy.
* Review required qualifier functions for CDM and agree solution for Commodities.
* Add agreed changes to CDM Rosetta for testing and consideration by the CDM Design WG.

## Open Source Preparations

### [Code Readiness](https://github.com/finos/alloy/labels/Code%20Readiness)
* [Code Modulization](https://github.com/finos/alloy/issues/119)
* [Refactor Execution code to remove GS connection management](https://github.com/finos/alloy/issues/127) (GS)
* [Migrate Engine to GitLab](https://github.com/finos/alloy/issues/134)
* [Re-name Alloy in Studio code](https://github.com/finos/alloy/issues/136)
* [Re-name Alloy to New Name in SDLC code](https://github.com/finos/alloy/issues/139)
* [Re-name Alloy to New Name in PURE code](https://github.com/finos/alloy/issues/140)
* [Re-name Alloy to New Name in Engine code](https://github.com/finos/alloy/issues/141)
* [Extract core PURE System ready for Open Sourcing](https://github.com/finos/alloy/issues/142)
* [Open Source Alloy SDLC code ](https://github.com/finos/alloy/issues/145)
* [Open Source Alloy Execution code](https://github.com/finos/alloy/issues/146)
* [Open Source Alloy Studio Code](https://github.com/finos/alloy/issues/147)
* [Open Source PURE Language](https://github.com/finos/alloy/issues/148)

* Break into two distinct GitLab repos

### [Build Readiness](https://github.com/finos/alloy/labels/Build%20Readiness)
* [Define GitHub Actions for building and testing Docker images](https://github.com/finos/alloy/issues/93) (FINOS + GS)
* [Deploying from external repo to GS works](https://github.com/finos/alloy/issues/144)
* [Test build and deploy works in open source environment for SDLC](https://github.com/finos/alloy/issues/129)
* [Build support for all test permutations](https://github.com/finos/alloy/issues/130)
* [Discuss how to manage GA releases](https://github.com/finos/alloy/issues/131)
* [Test build and deploy works in open source environment for Studio](https://github.com/finos/alloy/issues/132)
* [Test build and deploy works in open source environment for Engine](https://github.com/finos/alloy/issues/133)

### [Developer Readiness](https://github.com/finos/alloy/labels/developer_readiness)
* [Define new code release process](https://github.com/finos/alloy/issues/149)

### [Communication Readiness](https://github.com/finos/alloy/labels/communication_readiness)
* [External Communication Plan for new name](https://github.com/finos/alloy/issues/137)
* [Training Video Produced and Posted](https://github.com/finos/alloy/issues/26)
* [User guide: how to run your own on premise version](https://github.com/finos/alloy/issues/143)
* Press Release Prepared and Embargoed

* Support Plan 
  * Escalation
  * Coverage Model

## Phase 1 Meeting Minutes
* [Alloy General Monthly Meeting Minutes](https://github.com/finos/alloy/tree/master/meeting-minutes/general-meeting)
* [Alloy Pilot Meeting Minutes](https://github.com/finos/alloy/tree/master/meeting-minutes/pilot-project-meeting-minutes)
* [Alloy FX Options WG Meeting Minutes](https://github.com/finos/alloy/tree/master/meeting-minutes/fx-options-wg)
* [Alloy Commodity Reference Data WG Meeting Minutes](https://github.com/finos/alloy/tree/master/meeting-minutes/commodities-ref-data-wg)


# Alloy Pilot Phase 2 (September 2020 - Early 2021) - Yet to Start
## Phase 2 Goals
* Complete open sourcing of wave 1 of Alloy code
* Further documentationa and training material
* Prepare for and wave 2 open sourcing of Alloy code 
## Phase 2 Plan
### Milestone 2.1 – [Code Uplift](https://github.com/finos/alloy/milestone/5)
### Milestone 2.2 – [_**Code Release - 1st Wave (Target Summer - Early Fall 2020)**_.](https://github.com/finos/alloy/milestone/6)
  * *Code for SDLC, Execution, Studio, PURE System (tentative scope) made available in GitHub and/or GitLab under Apache 2.0 license**
  * CI build + release process
  * Deploy pipeline from code to demo environement on FINOS infrastructure (alloy.finos.org/studio)
### [Milestone 2.3 - More Alloy Documentation](https://github.com/finos/alloy/milestone/8)
  * Video tutorials for Studio
  * Guide to building and deploying
  * Guide to developing in Alloy
### [Milestone 2.4 - Second batch of code open sourced](https://github.com/finos/alloy/milestone/7)
  * Code for Cube, Graph, Services (tentative scope) made available in GitHub and/or Gitlab under Apache 2.0 license
    * [Open Source Services code](https://github.com/finos/alloy/issues/150)
    * [Open Source Cube code](https://github.com/finos/alloy/issues/151)
    * [Open Source Registry code](https://github.com/finos/alloy/issues/152)
  * Deploy demo database in demo environment in FINOS infrastructure to demonstrate execution
  * Move instances to OpenShift (?)
