---
id: pilot-model-governance
title: Pilot Model Governance
sidebar_label: Pilot Model Governance
---

There are three roles related to the submission of changes
* **MODELER**. The person making the model changes.
* **APPROVER(s)**. The person or people who review and approve the model changes. Generally these will be people with functional/product knowledge of that which is being modeled (e.g., if, say, an FX Option is being modeled, this would be a person or people with some expertise on how an FX Option works).
* **MERGER**. Also sometimes referred to as a "committer" this is the person with administrative privledges to the GitLab repo with permission to merge and commit the model change. This may be an approver or an adminstrator who merges on the recommendation of approvers. 

In the instructions below, roles are indicated in paratheses - e.g., "(Modeler)"

_Note About Model Approvals:_ Groups collaborating on a model can choose whatever approval process works best them. Options include 
* a consensus model (one or more fellow modelers need to "+1" a change)
* (a) designated approver(s) (one or people are designated as approvers who must approve changes)
* or some combination thereof. 

## Review process overview

### MODELER submits a change

### APPROVER performs review (Approver)
![](assets/sdlc_gitlab_approval.JPG)

### APPROVER requests an update

### APPROVER approves

#### CLA Bot Check
![](assets/sdlc_cla_bot.JPG)

### MERGER merges an approved change

### MODELER(s) update their workspaces/branches 
![](assets/sdlc_merge_button.JPG)
* Modelers update their workspaces with the latest approved/merged updates (e.g., this came up when the CDN got updated)
* aka.a "merges FROM master" 


### Change proposed back to standards body


### Latest changes from standards body pushed back to Alloy


