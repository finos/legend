## Phase 0 (Completed)
### Phase 0 Goals
* Stand-up and deploy an external instance of Alloy for shared modeling - DONE
* [Open Source Strategy Forum announcement](https://www.youtube.com/watch?v=fPUYUt9Yr_I) of Goldman Sachs intention to open source Alloy and the associated roadmap for that work (i.e., this doc) - DONE 
* Commence internal code evaluation and preparation for open sourcing - DONE


## Phase 1 (In Progress)
### Phase 1 Goals
#### Phase 1 Goal 1: Evaluate shared modeling using Alloy and and define collaboration model for further model development
* Evaluate how shared modeling can work using Alloy and define the best process to work together, by assessing: 
    * Governance process 
    * Collaboration amongst banks 
    * Technical solution 
* Success Criteria
    * Basic fluency in Alloy by non-GS modelers using Alloy
    * Functional areas of interest identified and working groups to model in those areas commenced
    * Feedback on Alloy shared with Goldman development team such that said feedback can be incorporated, as feasible, into the version of Alloy released as open source at the start of Phase 2 

#### Phase 1 Goal 2: Using Alloy collectively develop a model or model extension
* Find a good use case, with propensity for value creation through shared modeling and data shaping, and then work on (i.e., model) something “production relevant” 
    * Ideally shared models can and should also be contributed back to respective standards bodies such as ISDA for derivatives (e.g., proposed changes to the CDM) 
    * FINOS members and community can provide further momentum by implementing models and supporting standards by convention
    * Stretch goal to submut changed back to respective standards body (ISDA) and, better still, see it accepted into the standard
* Success Criteria
    * Support of standards body (ISDA)

#### Phase 1 Goal 3: Prepare Alloy code base, build system, and stakeholders for open sourcing of code


### Phase 1 Plan
#### Launch Pilot Group
* Pilot Kick-off (January 29) - Completed 

#### Modeling
* Import and ready ISDA CDM in Alloy - Completed
* Define, organize, and launch modeling working grous
  * FX Option - Launched
  * Commodities Reference Data - Launched
  * Sustainability / Renewable energy Working Group - Proposed
* Define potential areas of further modeling collaboration after pilot ends
  * Consider relationship with other FINOS projects like Financial Objects
  * Additional standards and/or standards bodies to collaborte with


##### FX Option Working Group - Finos-Alloy Pilot: FX Options WG Plan
* Stage 1      2nd April 2020 – 28th May 2020 / Milestone: 1 CDM FxOption model change / Outcome [TBC]
  *  Products: Fx Vanilla Option, Fx Barrier Option
  * Review FpML FxOption model against CDM and identify relevant vs unused attributes; for relevant attributes review the cardinality and data types

·         Submit and test changes to model in AlloyStudio

·         Add agreed changes to CDM Rosetta for testing and consideration by the CDM Design WG

Phase 2      4th June 2020 – 25th June 2020 / Milestone: 1 CDM Fx lifecycle model change / Outcome [TBC]

·         Analyse the business events and primitive processes for 'Exercise', 'Expire' and any other applicable lifecycle events for Fx Vanilla Option

·         Suggest and review new attributes for the model, considering validations/conditions are in line with CDM principles

·         Submit and test changes to model in AlloyStudio

·         Add agreed changes to CDM Rosetta for testing and consideration by the CDM Design WG

Phase 3      2nd July 2020 – 6th August 2020 / Milestone [TBC] / Outcome [TBC]                        

·         Analyse other use cases e.g. Fx Strategies, Asian features, exotics scenarios etc 

·         Suggest and review new attributes for the model, considering validations/conditions are in line with CDM principles

·         Submit and test changes to model in AlloyStudio

·         Add agreed changes to CDM Rosetta for testing and consideration by the CDM Design WG

 




* Stage 1 (2nd April 2020 - 26th May): Milestone - CDM FX Option Model Change
  * Products: FX vailla Options, FX Barrier Option
  * Review FpML FxOption model against CDM 
* Stage 2
* Stage 3 2nd July 2020 - 6th August 2020
  * Analyze other use cases



###### CMD Reference Data WG Plan
* Stage 1	8th April – 27th May 2020 
  * Milestone: Commodities Reference Data model proposal merge into Alloy / Outcome: Complete
Milestone: CDM Payout change to support Commodities vanilla scenario / Outcome	 [TBC]
Product: WTI Fixed/Float Oil Swap.
Review FpML and identify relevant v unused attributes; for relevant attributes review the cardinality and data types.
Determine contractual data points v reference data points and how these two models should interact.
Identify gaps in existing CDM model and make updates to cover the commodities fixed v float scenario.
Stage 2	3rd June 2020 – 25th June 2020
 Milestone: Extend Commodities Reference Data model properties to capture relevant data that can be associated 
with a product / Outcome [TBC]
Milestone: Capture extended Commodities use cases in the CDM model in Alloy /Outcome [TBC]
Agree on Reference Data model structure.
Identify associated data that is required in the industry associated with a product.
Review additional Commodities payout scenarios and look to factor into the CDM model in Alloy. 
Agree on best way to represent Commodities payout in CDM, either as a distinct class, or combined with another existing payout. 
Stage 3	1st July 2020 – 5th August 2020 
Milestone: Finalise Reference Data Model construct and agree on next industry steps post pilot phase / Outcome: [TBC]
Milestone: CDM Payout change to support Commodities vanilla scenario / Outcome	 [TBC]
Review options and agree on next steps for Reference Data model.
Finalise Commodities Payout features and merge into Alloy.
Review required qualifier functions for CDM and agree solution for Commodities.
Add agreed changes to CDM Rosetta for testing and consideration by the CDM Design WG.



  

#### Open Source Preparations

##### [Code Readiness](https://github.com/finos/alloy/labels/Code%20Readiness)
* [Code Modulization](https://github.com/finos/alloy/issues/119)
* [Refactor Execution code to remove GS connection management](https://github.com/finos/alloy/issues/127) (GS)
  * Migrate Engine (Execution Server) to Gitlab (from SVN)
  * Break into two distinct Gitab repos

##### Build Readiness
* Define GitHub Actions for building and testing Docker images(https://github.com/finos/alloy/issues/93) (FINOS + GS)




* Extract core PURE
* REname Alloyu

* Release Code
  *Open Source PURE

 * Repoint to new open source repor

fda


##### Build Readiness
* Test and build deploits wokr sin open soure in ... (GS / FINOS; Targetted to complete in mid June)
  * ... SLDC
  * ... Studio
  * .... Engine

* Deplout from external repo to GS work
  * Rightnow we have lots of agility 
  * Critial Success Factor: Maintain same speed and agility as presently wiht internal repor
    * Bad news --> 
    * If we need to do a 



* [Define GitHub Actions for building and testing Docker images](https://github.com/finos/alloy/issues/93)
* Milestone 2

##### Developer Readinesss
* Figure out the development process GS-OSS .. going to have to start on GS-OSS ... feel some pain and evolve GS-OSS
* Milestone 2

##### FINOS Hosted Instace Readiness
* Do we move the hosted insstance got gitlab.com and if so then?
* Part of FINOS infrastraucture -- part ODP ... hosted instance is available basically adn y and all FINOS project that would like to make use to modeling ... 
* Also a sort of showcase/demo of Alloy and also a sandbox ...

##### Communication and Change Readiness -- Organizational and Support Readiness
  * Internal GS
  * FINOS
* Build User Guide for On Premise


* Support Plan 
  * Escalation
  * Coverage


* Blacklist the gitlab repo

* [Training Video Produced and Posted](https://github.com/finos/alloy/issues/26)
* Press Release Prepared and Embargoed


##### Model Readinesss
* Get one CDM change accepted by ISDA
* How to do continue ....


* How to get CDM into our own instances ... import functionality .... 
* Model repository ... 
* How do we share and keep in synch 
* How do we play with the own internal BitBucket ... go through own fir
* Ajith --> 



Move instances to openshift ... 

... then services, cube, and registry ... bottom three ticket 

### Phase 1 Meeting Minutes
* [Alloy General Monthly Meeting Minutes](https://github.com/finos/alloy/tree/master/meeting-minutes/general-meeting)
* [Alloy Pilot Meeting Minutes](https://github.com/finos/alloy/tree/master/meeting-minutes/pilot-project-meeting-minutes)
    

## Phase 2
### Phase 2 Goals
* 


### Phase 2 Plan
* Milestone 2.1 – [Code Uplift](https://github.com/finos/alloy/milestone/5)
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