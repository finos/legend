---
id: pilot-model-governance
title: Pilot Model Governance
sidebar_label: Pilot Model Governance
---

## Roles

There are three roles involved in the submission of model changes.
* **MODELER**. The person making the model changes. 
* **APPROVER**. The person or people who review and approve the model changes amongst a working group building models together. Approvals are votes in support of merging, and hence codifying, the change. Generally, approvers of models will be people with functional/product knowledge of that which is being modeled (e.g., if, say, an FX Option is being modeled, this would be a person or people with some expertise on how FX Options are quoted and traded)
* **MERGER**. Also sometimes referred to as a "committer", this is the person or people with administrative privileges to the GitLab repo required to merge model changes to the master version of a model within Alloy. Such merge privileges are generally only granted to a few within a project or working group -- usually the working group lead(s) and/or systems administrators. Potentially and optionally, merge privileges can be granted to other contributors who have a substantial contributions track record and have been deemed by the working group participants to be good custodians and to have earned the right to merge changes. 

In the explanations below, roles are indicated in capitals -- e.g., "MODELER"

_Note About Model Approvals:_ Approvals in GitLab are similar to "likes" or "+1"s in common consumer social media platforms. Anyone in a pilot group - except for the modeler who submitted that particular change - may give their "+1" (approval) of a change. GitLab approvals provide working groups great flexibility on how they might choose to develop an approval policy that works best for them. Options may include:
* a consensus model (one or more fellow modelers need to "+1" a change)
* (a) designated approver(s) (one or people are designated as approvers who must approve changes)
* One specific person plus, say, any two other people within the working group.
* or some combination thereof. 


## Review process
The following are the steps the MODELER, APPROVER, and MERGER take to submit, review, and merge a new change to a model within Alloy.

### Step 1. MODELER submits a change 
As a modeler makes model changes in Alloy, Alloy keeps track of these changes made locally ("unsynched changes"). These changes  will need to be synched to the SDLC server in order for the modeler to subsequently submit them for approval:
![](assets/pilot_unsynched_changes.JPG)

#### Step 1.1. MODELER syncs their local changes to the SDLC server.
In order to submit a change, or group of changes, that a MODELER has completed and for which the MODELER intends to seek approval to merge, the MODELER needs to [sync](sdlc.md#sync-local-changes-to-workspace) their local changes to the SDLC server. A MODELER can do this by pressing the sync icon in the status bar, or by using the `Ctrl+S` keyboard shortcut.
![](assets/sdlc_step1.JPG)

_Tech Note_: "Under the hood", within GitLab, these changes are created as commits. The changes themselves are actually changes to the underlying model code as represented in JSON.
![](assets/pilot_gitlab_commit.JPG)

#### Step 1.2. MODELER reviews changes, creates a review, and shares review
Next the MODELER should review their pending change (the commit) using the Review tool ...
![](assets/pilot_diff.JPG)
... then create a review by giving it a name and clicking the '+' icon ...
![](assets/pilot_create_review.JPG)
... hence creating the review. A small diagonal arrow icon will appear ...
![](assets/pilot_review_created_arrow.JPG)
... which, when pressed, will open the newly created review in a new tab where the URL of the review can be copied ...
![](assets/pilot_review_created_get_url.JPG)
... and then pasted into an email the modeler might send to the working group requesting one or several other participants in the working group review and add their approval (i.e., their "+1" in support of merging).


### Step 2. APPROVER reviews and approves the change 
Once a review has been created and shared, others in the working group may review a proposed change and add their approval by clicking the checkmark icon.
![](assets/pilot_approval_checkmark.JPG)

_Tech Note_ In GitLab, the commit will be shown to be awaiting approval. Approvals may be done there alternatively though it's recommended that MODELERS use the Alloy UI. The merge button is grayed out as sufficient approvals have not been reached.
![](assets/pilot_gitlab_approve_merge_screen.JPG)

### Step 2.1 a) MERGER merges an approved change
Once a sufficient number of approvals have been received based on the policy of the working group, the MERGER can codify the change by merging it in ("committing the review"). 
![](assets/pilot_merge_button.JPG)

#### Step 2.1. b) Merging in GitLab
Alternatively, the MERGER can do the merge directly in GitLab
![](assets/sdlc_merge_button.JPG)

#### Step 2.2. CLA Bot Check
As is visible in GitLab, GitLab and Alloy are configured to make use of the FINOS Open Developer Platform's CLA Bot. The CLA Bot checks that the MODELER who submitted the change is covered under a Contributor License Agreement authorizing him/her to make contributions of code (i.e., models) into FINOS
![](assets/sdlc_cla_bot.JPG)

### Step 3. MODELER(s) update their workspaces/branches 

After new changes are merged into "master" branch of a project, modelers will usually want to pull the latest/greatest changes into the their current Alloy Workspace (their "branch" in GitLab terminology). That there are changes available to be pulled will be indicated by a blue dot on the cloud icon. Modelers will also see this icon, and need to pull down changes, whenever models may be updates from an exteranl source (e.g., the ISDA CDM master)
![](assets/pilot_workspace_updater_icon.JPG)


## Synching Changes Beyond Alloy (Coming Soon)
Alloy supports the ability to import updates from external sources and to also extract models as transformations that can be imported. 

### Change proposed back to standards body
(Coming Soon)

### Pulling latest changes from standards body back into Alloy
(Coming Soon)


