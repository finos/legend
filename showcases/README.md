# Contribution Guide

## Before you start

- **Keep the [Legend showcase folder](https://github.com/finos/legend/tree/master/showcases) structure clean**. This allows for easier navigation and breakdown of the supported features and use cases. Navigation is important for both developers and users. Example: if a particular milestoning works only for Relational, put it under Relational, and not under Core
- **`info.md`**. The `info.md` file is used for indexing, so make sure to choose words that you think a user would type in when doing free-text search
- **`code.pure`**. The `code.pure` file should highlight one, and only one feature. Do **not** showcase multiple features in the same file. Example: if a Connection type can have different authentication types, separate these into different files. Similarly, do **not** include a Mapping with ~filter and ~groupBy in it. These should be separate. The goal is to highlight the available "puzzle pieces" and allow users to combine them in ways that make sense with the folder hierarchy that we have provided.

## Step by step guide

1. Go to the [Legend showcase folder](https://github.com/finos/legend/tree/master/showcases) on GitHub and identify the appropriate folder to document your feature.

2. Update the `info.md` folder with a description of the feature and how it is meant to be used. The title and description parts will be displayed in the Legend Studio showcase explorer.

3. Update the `code.pure` file with the showcase project code. This should be the minimal amount of code needed to showcase a feature in isolation. For example, if you are contributing a filter relational mapping, you sould include a small model, store and mapping that has the ~filter within it.


## Showcases

Definition: the smallest snippet of code that highlights a feature.


## Navigation

Add any new showcase under the data directory. The src directory will contain
code that helps test and maintain the showcase code.
