---
id: review-and-commit-changes
title: Review and commit changes
sidebar_label: Review and commit changes
---

Legend is integrated with the software development lifecycle (SDLC) supported by GitLab, which lets you review and commit changes.

Follow these steps to review and commit a change.

1. Press `Ctrl+S` to sync the local changes to the workspace.

    ![Sync local changes to workspace](../assets/sync-local-changes.JPG)

2. Select the diff view to review the synced changes in workspace.

    ![Review changes](../assets/review-changes.JPG)

3. To create a review, click the highlighted icon in the activity bar or press `Ctrl + Shift + M` to go to the review panel. Here you can review the code in the current workspace vs. the committed code.

    ![Create a review](../assets/create-review.JPG)

4. After the review is approved, click **Commit**.

    ![Commit the changes](../assets/commit-changes.JPG)

## Update workspace with latest changes

When the workspace is out of date, Studio provides a notification in the status bar on the bottom left. Click the update button on the sidebar to bring in the latest changes.

![](../assets/sdlc_step5.JPG)

## Resolve a conflict in the workspace

A workspace update may result in a conflict. Studio will open a new view to aid in resolving the conflict.  

1. Choose one of the following actions:

    - **Discard the changes**: the workspace changes are removed.

    - **Review the changes**: the workspace changes will be applied on top of the latest version.

    ![Discard or review changes](../assets/discard-or-remove-changes.JPG)

2. If you chooose to review changes, review and press `F9` to compile.

3. Once the changes compile successfully, either accept or discard the changes.

    ![Accept or discard changes](../assets/accept-or-discard-changes.JPG)
