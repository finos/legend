---
id: sdlc
title: Alloy SDLC
sidebar_label: SDLC
---

Alloy is integrated with SDLC (supported by GitLab) enabling changes to be reviewed and committed with ease.  

## How to review and commit a change

See steps below on how to review and commit a change:

### Review local changes
The diff view compares the local (un-synced) changes to the workspace.
>ADD SCREENSHOT

### Sync local changes to workspace
Sync the local changes to the workspace using the icon in the status bar shown or use `Ctrl+S`.
>ADD SCREENSHOT

### Create a review
To create a review, click the icon in the activity bar highlighted or hit `Ctrl + Shift + M` to go to the review panel. Review the code in the current workspace vs. the committed code in this view.

>ADD SCREENSHOT

### Commit the changes
After the review is approved, click commit. 
>ADD SCREENSHOT

## Update workspace with latest changes

When the workspace is out of date, hit the update button to bring in the latest chagnes.

>ADD SCREENSHOT

## Resolve a conflict in the workspace
A workspace update may result in a conflict.  Studio will open a new view to aid in resolving the conflict.  

Choose one of the following actions:

### Discard the changes

Choosing `Discard Changes` at this stage, will result in the workspace changes being removed.

>ADD SCREENSHOT

### Accept and review the changes

Changes in the workspace will be applied on top of the latest version. 

As the first step, review the changes and compile (with `F9`).

>ADD SCREENSHOT

Once the changes compile successfully, either Accept or Discard the changes.

>ADD SCREENSHOT






