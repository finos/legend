---
id: sdlc
title: Alloy SDLC
sidebar_label: SDLC
---

Alloy is integrated with a software development lifecycle (SDLC), powered by GitLab, enabling changes to be reviewed and committed with ease.

## How to review and commit a change

See steps below on how to review and commit a change:

### Sync local changes to workspace (Modeler)
Sync the local changes to the workspace using the icon in the status bar shown or use `Ctrl+S`.

![](assets/sdlc_step1.JPG)

### Review changes (Modeler)
Select the diff view to review the sync'ed changes in workspace.

![](assets/sdlc_step2.JPG)

### Create a review (Modeler)
To create a review, click the highlighted icon in the activity bar or hit `Ctrl + Shift + M` to go to the review panel. Review the code in the current workspace vs. the committed code in this view.

![](assets/sdlc_step3.JPG)

### Perform review (Approver)
![](assets/sdlc_gitlab_approval.JPG)

#### CLA Bot Check
![](assets/sdlc_cla_bot.JPG)

### Merge the change (Merger)
![](assets/sdlc_merge_button.JPG)

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


## Proposing model changes back to external standards bodies (e.g., ISDA)
To Come Later







