---
id: pilot-model-governance
title: Pilot Model Governance
sidebar_label: Pilot Model Governance
---

There are three roles related to the submission of changes
* **MODELER**. The person making the model changes.
* **APPROVER(s)**. The person or people who review and approve the model changes. Generally these will be people with functional/product knowledge of that which is being modeled (e.g., if, say, an FX Option is being modeled, this would be a person or people with some expertise on how an FX Option works).
* **MERGER**. Also sometimes referred to as a "committer" this is the person with administrative privledges to the GitLab repo with permission to merge and commit the model change. This may be an approver or an adminstrator who merges on the recommendation of approvers. 

In the instructions below, roles are indicated in capitals -- e.g., "MODELER"

_Note About Model Approvals:_ Approvals in GitLab are similar to "likes" or "+1"s in common consumer social media platforms. Everyone in a pilot group, other than the modeler submitting change, may give their "approval" of a change. This provide working groups a great bit of flexibility on how they might choose to develop an approval policy that works best for them. Options may include 
* a consensus model (one or more fellow modelers need to "+1" a change)
* (a) designated approver(s) (one or people are designated as approvers who must approve changes)
* or some combination thereof. 


## Review process overview within Alloy
The following are the steps the MODELER, APPROVER, and MERGER take to submit, review, and merge a new change to a model.

### MODELER submits a change

As you make changes, Alloy will keep track of changes ("unsynched changes") made locally that need to be synched with SDLC server.
(assets/pilot_unsynched_changes.JPG)

#### [Synch](sdlc.md#sync-local-changes-to-workspace))

To sumbit your changes [synch](sdlc.md#sync-local-changes-to-workspace) Sync the local changes to the the synch icon in the status bar use keyboard shortcut `Ctrl+S`.
![](assets/sdlc_step1.JPG)

"Under the hood", within GitLab, these changes will be created as commits:
![](assets/pilot_gitlab_commit.JPG)




### APPROVER performs review 
  Need a screen shot of someone doing this in Alloy
![](assets/sdlc_gitlab_approval.JPG)

### APPROVER requests an update
  Get screen shot 

### APPROVER approves
    Get screen shot
   

#### CLA Bot Check
![](assets/sdlc_cla_bot.JPG)

### MERGER merges an approved change

### MODELER(s) update their workspaces/branches 
![](assets/sdlc_merge_button.JPG)
* Modelers update their workspaces with the latest approved/merged updates (e.g., this came up when the CDN got updated)
* aka.a "merges FROM master" 


## Synching Changes Beyond Alloy



### Change proposed back to standards body
Alloy supports the ability to extract code .... general 


Coming Soon Documentation ... General Description ... 
* When working group has a complete set of changes, make a proposal 


### Latest changes from standards body pushed back to Alloy

Upon request, the hosted instance can be updated with the latest of the version of the ISDA CDM; ... in the future ... <there is no button to push>


