---
id: pilot-model-governance
title: Pilot Model Governance
sidebar_label: Pilot Model Governance
---

There are three roles involved in the submission of model changes.
* **MODELER**. The person making the model changes. 
* **APPROVER(s)**. The person or people who review and approve the model changes amongst a working group building models together. Approvals are votes in support of merging, and hence codifying, the change. Generally approvers of models will be people with functional/product knowledge of that which is being modeled (e.g., if, say, an FX Option is being modeled, this would be a person or people with some expertise on how FX Options are quoted and traded)
* **MERGER**. Also sometimes referred to as a "committer" this is the person or people with administrative privledges to the GitLab repo required to actually merge in the model changes to the master version of a model within Alloy. Such merge privledges are generally only granted to a few within a project or working group -- usually the working group lead(s) and/or systems administrators as well as, potentially and optionally, a couple other contributors who have a substantial track record of making contributions and have been deemed by the participants of a working group to be good custodians and to have earned the right to merge changes. 

In the explanations below, roles are indicated in capitals -- e.g., "MODELER"

_Note About Model Approvals:_ Approvals in GitLab are similar to "likes" or "+1"s in common consumer social media platforms. Everyone in a pilot group may give their "+1" (approval) of a change (everyone other than the modeler her/himself submitting a particular change, that is). GitLab approvals provide working groups a great bit of flexibility on how they might choose to develop an approval policy that works best for them. Options may include 
* a consensus model (one or more fellow modelers need to "+1" a change)
* (a) designated approver(s) (one or people are designated as approvers who must approve changes)
* One specific person plus, say, any two other people within the working group.
* or some combination thereof. 


## Review process overview within Alloy
The following are the steps the MODELER, APPROVER, and MERGER take to submit, review, and merge a new change to a model.

### MODELER submits a change 
As a modeler makes modes changes in Alloy, Alloy keeps track of these changes made locally ("unsynched changes"), which will need to be synched to the SDLC server in order for the modeler to subsequently submit them for approval:
![](assets/pilot_unsynched_changes.JPG)

#### MODELER syncs
In order to submit a change, or group of changes, that a modeler has completed and for which the modeler intends to seek approval to merge, the modeler needs to [sync](sdlc.md#sync-local-changes-to-workspace) their local changes to the SDLC server. A modeler does this by pressing the sync icon in the status bar, or by using keyboard shortcut `Ctrl+S`.
![](assets/sdlc_step1.JPG)

_Tech Note_: "Under the hood", within GitLab, these changes are created as commits. The changes themselves are actually changes to the underlying model code as represented in JSON.
![](assets/pilot_gitlab_commit.JPG)

#### MODELER reviews changes, creates a review, and shares review
Next the modeler should review their pending change (the commit) using the Review tool ...
![](assets/pilot_diff.JPG)
... then create a review by giving it a name and clicking the '+' icon ...
![](assets/pilot_create_review.JPG)
... hence creating the review. A small diagonal arrow icon will appear ...
![](assets/pilot_review_created_arrow.JPG)
... which, when pressed, will open the newly created review in a new tab where the URL of the review can be copied ...
![](assets/pilot_review_created_get_url.JPG)
... and then pasted into an email the modeler might send to the working group requesting one or several other participants in the working group review and add their approval (i.e., their "+1" in support of merging).


### APPROVER(s) perform(s) review 
Once a review has been created and shared, others in the working group may review a proposed change and add their approval by clicking the checkmark icon.
![](assets/pilot_approval_checkmark.JPG)

_Tech Note_ In GitLab, the commit will be shown to be awaiting approval. Approvals may be done there alternatively though it's recommended that modelers use the Alloy UI. The merge button is grayed out as sufficient approvals have not been reached.
![](assets/pilot_gitlab_approve_merge_screen.JPG)

### MERGER merges an approved change
Once a sufficient number of approvals have been received based on the policy of the working group, the MERGER can codify the change by merging it in ("committing the review"). 
![](assets/pilot_merge_button.JPG)

#### Merging in GitLab
Alternatively the merger can do the merge directly in GitLab
![](assets/sdlc_merge_button.JPG)

#### CLA Bot Check
As is visible in GitLab, GitLab and Alloy are configured to make use of the FINOS Open Developer Platform's CLA Bot. The CLA Bot checks that the modeler who submitted the change is covered under a Contributor License Agreement authorizing him/her to make contributions of code (i.e., models) into FINOS
![](assets/sdlc_cla_bot.JPG)


### MODELER(s) update their workspaces/branches 

* Modelers update their workspaces with the latest approved/merged updates (e.g., this came up when the CDN got updated)
* aka.a "merges FROM master" 


## Synching Changes Beyond Alloy



### Change proposed back to standards body
Alloy supports the ability to extract code .... general 


Coming Soon Documentation ... General Description ... 
* When working group has a complete set of changes, make a proposal 


### Latest changes from standards body pushed back to Alloy

Upon request, the hosted instance can be updated with the latest of the version of the ISDA CDM; ... in the future ... <there is no button to push>


