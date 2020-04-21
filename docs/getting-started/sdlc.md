---
id: sdlc
title: Alloy SDLC
sidebar_label: SDLC
---

Alloy is integrated with SDLC (supported by GitLab) enabling changes to be reviewed and committed with ease.

There are three roles related to the submission of changes
* **Modeler**. The person making the changes
* **Approvers**. The person or people who review and approve the model changes. Generally these will be people with functional/product knowledge of that which is being modeled (e.g., if, say, an FX Option is being modeled, this would be a person or people with some expertise on how an FX Option works)
* **Merger**. Also sometimes referred to as a "committer" this is the person with administrative privledges to the GitLab repo with permission to merge and commit the model change. This may be an approver or an adminstrator who merges on the recommendation of approvers. 

## How to review and commit a change

See steps below on how to review and commit a change:

### Sync local changes to workspace
Sync the local changes to the workspace using the icon in the status bar shown or use `Ctrl+S`.

![](assets/sdlc_step1.JPG)

### Review changes
Select the diff view to review the sync'ed changes in workspace.

![](assets/sdlc_step2.JPG)

### Create a review
To create a review, click the highlighted icon in the activity bar or hit `Ctrl + Shift + M` to go to the review panel. Review the code in the current workspace vs. the committed code in this view.

![](assets/sdlc_step3.JPG)

### Commit the changes
After the review is approved, click commit. 

![](assets/sdlc_step4.JPG)

## Update workspace with latest changes

When the workspace is out of date, Studio provides a notification in the status bar on the bottom left. Select the update button to bring in the latest changes.

![](assets/sdlc_step5.JPG)

## Resolve a conflict in the workspace
A workspace update may result in a conflict.  

Studio will open a new view to aid in resolving the conflict.  

![](assets/sdlc_step6.JPG)

Choose one of the following actions:

### Discard the changes

Choosing `Discard Changes` at this stage, will result in the workspace changes being removed.

### Review the changes

Chossing `Review changes` will result in a view where the workspace changes will be applied on top of the latest version. 

As the first step, review the changes and compile (with `F9`).

Once the changes compile successfully, either Accept or Discard the changes.

![](assets/sdlc_step7.JPG)







