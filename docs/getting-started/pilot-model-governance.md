---
id: pilot-model-governance
title: Pilot Model Governance
sidebar_label: Pilot Model Governance
---

There are three roles related to the submission of changes
* **Modeler**. The person making the model changes.
* **Approver(s)**. The person or people who review and approve the model changes. Generally these will be people with functional/product knowledge of that which is being modeled (e.g., if, say, an FX Option is being modeled, this would be a person or people with some expertise on how an FX Option works).
* **Merger**. Also sometimes referred to as a "committer" this is the person with administrative privledges to the GitLab repo with permission to merge and commit the model change. This may be an approver or an adminstrator who merges on the recommendation of approvers. 

In the instructions below, roles are indicated in paratheses - e.g., "(Modeler)"

_Note About Model Approvals:_ Groups collaborating on a model can choose whatever approval process works best them. Options include 
* a consensus model (one or more fellow modelers need to "+1" a change)
* (a) designated approver(s) (one or people are designated as approvers who must approve changes)
* or some combination thereof. 

## Review process overview


### Perform review (Approver)
![](assets/sdlc_gitlab_approval.JPG)

#### CLA Bot Check
![](assets/sdlc_cla_bot.JPG)

### Merge the change (Merger)
![](assets/sdlc_merge_button.JPG)