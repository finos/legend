## Phase 0 (Completed)
### Phase 0 Goals
* Stand-up and deploy an external instance of Alloy for shared modeling - DONE
* [Open Source Strategy Forum announcement](https://www.youtube.com/watch?v=fPUYUt9Yr_I) of Goldman Sachs intention to open source Alloy and the associated roadmap for that work (i.e., this doc) - DONE 
* Commence internal code evaluation and preparation for open sourcing - DONE


## Phase 1 (In Progress)
### Phase 1 Goals
#### Phase 1 Goal 1: Evaluate shared modeling using Alloy and and define dollaboration model for further model development
* Evaluate how shared modeling can work using Alloy and define the best process to work together, by assessing: 
    * Governance process 
    * Collaboration amongst banks 
    * Technical solution 
* Success Criteria
    * Basic fluency in Alloy by non-GS modelers using Alloy
    * Functional areas of interest identified and working groups to model in those areas commenced
    * Feedback on Alloy shared with Goldman development team such that said feedback can be incorporated, as feasible, into the version of Alloy released as open source at the start of Phase 2 

#### Phase 1 Goal 2: Using Alloy collectively develop a model or model extension
* Find a good use case, with propensity for value creation through shared modeling and data shaping,  and then work on (i.e., model) something “production relevant” 
    * Ideally shared models can and should also be contributed back to respective standards bodies such as ISDA for derivatives (e.g., proposed changes to the CDM) 
    * FINOS members and community can provide further momentum by implementing models and supporting standards by convention
    * Stretch goal to submut changed back to respective standards body (ISDA) and, better still, see it accepted into the standard
* Success Criteria
    * Support of standards body (ISDA)


### Phase 1 Milestones
#### Launch Pilot Group
* StandPilot Kick-off (January 29) - Completed 

#### Open Source Preparations
##### Code Readiness
* Milestone 1
* Milestone 2

##### Build Readiness
* [Define GitHub Actions for building and testing Docker images](https://github.com/finos/alloy/issues/93)
* Milestone 2

##### Developer Readinesss
* Milestone 1
* Milestone 2

##### FINOS Hosted Instace Readiness
* Milestone 1
* Milestone 2

##### Communication and Change Readiness
* [Training Video Produced and Posted](https://github.com/finos/alloy/issues/26)
* Press Release Prepared and Embargoed


### Phase 1 Meeting Minutes
* [Alloy General Monthly Meeting Minutes]
* [Alloy Pilot Meeting Minutes]
    

## Phase 2 Milestone Plan & Roadmap (Tentative)
* Milestone 2.1 – Code uplift
* Milestone 2.2 – [_**Code Release - 1st Wave (Target Summer - Early Fall 2020)**_.](https://github.com/finos/alloy/issues?q=is%3Aopen+is%3Aissue+label%3A%22Milestone%3A+Code+Open+Sourced+%281st+Wave%29%22)
  * *Code for SDLC, Execution, Studio, PURE System (tentative scope) made available in GitHub and/or GitLab under Apache 2.0 license**
  * CI build + release process
  * Deploy pipeline from code to demo environement on FINOS infrastructure (alloy.finos.org/studio)
* Milestone 2.3 - (More) Documentation
  * Video tutorials for Studio
  * Guide to building and deploying
  * Guide to developing in Alloy
* Milestone 2.4 - Second batch of code open sourced
  * Code for Cube, Graph, Services (tentative scope) made available in GitHub and/or Gitlab under Apache 2.0 license
  * Deploy demo database in demo environment in FINOS infrastructure to demonstrate execution