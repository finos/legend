---
id: contribute-to-legend
title: Contribute to Legend
sidebar_label: Contribute to Legend
---

There are many ways to contribute to Legend and many of them don't involve writing any code. Here are a few ideas to get started:

1. [Contribute code](contribute-to-legend.md#contribute-code) to any of the Legend components by submitting a pull request.

2. Start using Legend Studio to provide feedback, [and contribute to, existing models](contribute-to-legend.md#contribute-to-models). Request access to the modeling instance at https://www.finos.org/legend and go [through our Getting started guide](../getting-started/studio/create-workspace.md). If you encounter an issue, let us know by [opening an issue](https://github.com/finos/legend/issues/new/choose).

3. [Help build out the documentation](contribute-to-legend.md#contribute-documentation). If you find anything that's confusing or can be improved, submit a pull request. 

4. [Contribute issues: identify bugs, suggest new features, and provide feedback on prioritization](contribute-to-legend.md#contribute-issues). Look through the [open issues](https://github.com/finos/legend/issues?q=is%3Aissue+is%3Aopen+). Provide workarounds, ask for clarification, or suggest labels. If you find an issue you'd like to fix, [open a pull request](https://github.com/finos/legend/pulls). Start with issues tagged as **Good first issue**. Take a look at the features requested by others in the community and consider opening a pull request if you see something you want to work on.

## Prerequisites

To create and/or edit models in the Legend hosted instance or make code contributions, you need to have a GitHub Account. 

### GitHub account setup

To configure your GitHub access:

1. [Create an account on GitHub.com](https://help.github.com/en/github/getting-started-with-github/signing-up-for-a-new-github-account).
2. [Set up a Git client locally](https://help.github.com/en/github/getting-started-with-github/set-up-git).
3. Ensure that the Git client is configured with your `<username>@users.github.com` email address (you can use the `git config --list | grep user.email` command). If you use a different email address, you may face one of the following issues:

     a) Your corporate firewall blocks Git activity, unless you're signed in with an `@<your company domain>` email address.
     b) GitHub forces you to set the email address as public, or it would reject push operations with the error `push declined due to email privacy restrictions`.
     
*Note:* Email help@finos.org if you encounter any issues while setting up your GitHub account.

### FINOS Contributor License Agreement ("CLA")

A Contributor License Agreement ("CLA") is a document that specifies how a project is allowed to use your contribution; they are commonly used in many open source projects.

_NOTE:_ Commits and pull requests to FINOS project repositories, including Legend, will only be accepted from those contributors with an active, executed Individual Contributor License Agreement (ICLA) with FINOS OR who are covered under an existing and active Corporate Contribution License Agreement (CCLA) executed with FINOS. See the [Contribute page on the FINOS Wiki for more information](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/83034172/Contribute). Commits from individuals not covered under an ICLA or CCLA will be flagged and blocked by the FINOS ["CLA Bot" tool](https://github.com/finos/cla-bot). Please note that some CCLAs require individuals/employees to be explicitly named on the CCLA. PRs submitted to the Legend project cannot be accepted until you have a CLA in place with the Foundation. CLAs are also required for modelers participating in the pilot.

_NOTE:_ **Even if you have signed and are covered by a CLA, the [CLA Bot](https://github.com/finos/cla-bot) may block your Pull Requests if your Git client is configured with an email address other than your `<username>@users.github.com` email address**. (you can use the `git config --list | grep user.email` command to see which email address your git client is configured with). If your git client is not correctly configured, the CLA bot will not be able to parse your GitHub details and identify you, which will block your Pull Request. In order to fix this issue, please follow the instructions below.

   1. Check your git client is configured with a user email `git config --list | grep email`
   2. If the user email is missing, run the following command, substituting with your git commit email address `git config --global user.email email@example.com`
   3. Make sure your git commit email is configured on GitHub by [Setting your Commit Email Address](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address)
   4. Then, amend the authors in your commit history by using `git commit --amend` to change your last commit.

   Alternatively, use the slightly more complex `git reset --soft` and `git rebase` to checkout your changes, rewrite the commit history locally and (force) push changes to the downstream branch.

   If you have any issues with the steps above, please email help@finos.org so we can help you resolve before reviewing and accepting your pull request.

Need an ICLA? Unsure if you are covered under an existing CCLA? Email [help@finos.org](mailto:help@finos.org?subject=CLA)

## Contribute code

The following list is a high-level overview of the code contribution workflow.

1. Read our [Community Code of Conduct](https://www.finos.org/code-of-conduct).
2. Fork the Legend repository (<https://github.com/finos/legend/fork>).
3. Create your feature branch (`git checkout -b feature/fooBar`).
4. Make and test your changes locally.
5. Add your changes (`git add <filename containing fooBar change>`).
6. Commit your changes (`git commit -m 'Add some fooBar'`).
7. Push to the branch (`git push origin feature/fooBar`).
8. Optional but recommeded: Do a build in/from your fork; further evaluate and test it.
9. If all looks good, propose a pull request into the [Legend GitHub repo](https://github.com/finos/legend/pull/new/master) from your fork.

### Propose and submit pull requests

To make review of PRs easier:

- Confirm your PRs will merge cleanly—PRs that don't won't be accepted.
- For code contributions, follow the existing code layout.
- For doc contributions, follow the general structure, language, and tone of the [existing docs](https://github.com/finos/legend/wiki).
- Keep commits small and cohesive. If you have multiple contributions, submit them as independent commits (and ideally as independent PRs, too).
- Reference issue #s if your PR has anything to do with an issue (even if it doesn't address it).
- Minimise non-functional changes (like whitespace).
- Confirm all new files include a header comment block containing the [Apache License v2.0 and your copyright information](http://www.apache.org/licenses/LICENSE-2.0#apply).
- If necessary (due to 3rd party dependency licensing requirements), update the [NOTICE file](https://github.com/finos/legend/blob/master/NOTICE) with any new attribution or other notices.

### Commit and PR messages

- **Reference issues, wiki pages, and pull requests liberally.**
- Use the present tense ("Add feature" not "Added feature").
- Use the imperative mood ("Move button left..." not "Moves button left...").
- Limit the first line to 72 characters or less.

## Contribute to models

FINOS hosts a shared version of Legend Studio in the public cloud, which is available to prototype collaborative data modeling, at https://legend.finos.org/studio. If you'd like to access the existing models, **request access to the modeling instance** at [finos.org/legend](https://www.finos.org/legend).

Once you've requested access to the modeling instance, you can get started and [create a model](../getting-started/studio/create-model.md).

If you have questions or encounter any issues, raise an issue at https://github.com/finos/legend/issues.
 

If you have suggestions or ideas for modeling use cases for which Legend may be appropriate, we'd love to hear your ideas -- send a note with your suggestion to the [Legend General List](mailto:legend@finos.org).

### Background: The Legend Pilot—Shared modeling in Legend (January - September 2020)

In January 2020, FINOS launched a pilot with FINOS member organizations interested in evaluating Legend. Modeling occurred on the FINOS hosted, shared version of Legend Studio in the public cloud, which was used by FINOS members to collaborate on Legend Studio by building extensions to the [ISDA Common Domain Model (CDM)](https://www.isda.org/2018/11/22/isda-cdm-factsheet/). Modeling occurred in two workstreams: **FX Options** and **Commodities Reference Data**, which concluded their work in September 2020. We expect that further working groups may use Legend for data modeling in these and/or other areas after the first wave of code has been open sourced in October 2020.

## Contribute documentation

You can get involved with Legend by suggesting topics you'd like to see in our documentation. Suggest a topic for our docs by [opening an issue in our GitHub repo](https://github.com/finos/legend/issues/new/choose). Ideas are also welcome through the [Legend General List](mailto:legend@finos.org).

### Edit the documentation site directly

To make edits to the website itself, you need to run the website locally. You must have:

- A Git client installed to checkout the code from github.com/finos/legend (`master` branch). The `git` command must be available via command-line, as it's needed to run the `build-site.sh` script.
- [Yarn installed](https://yarnpkg.com/lang/en/docs/install).

The following code automatically launches a browser and takes you to the staging website, located at http://localhost:3000. File changes are live rendered, speeding up the editorial workflow.

```git
git clone git@github.com:<yourfork>/legend.git
git checkout -b feature/myProposedDocChanges
cd legend ; ./build-site.sh
cd website ; yarn start
```

Once you're satisfied with your documentation changes, commit and propose them in line with the general process described above. Specifically for doc edits, it might look like this:

- Commit your changes (`git commit -am <short description of what docs you changed/added>`).
- Push to the branch to your forked repo on GitHub (`git push origin myProposedDocChanges`).
- Review and test the changes in your fork.
- If all looks good, propose a pull request into the [FINOS Legend GitHub Repo](https://github.com/finos/legend) from your fork.

### Docusaurus

To learn more about Docusaurus, read the following resources:

- https://github.com/finos/legend/tree/master/website
- https://finosfoundation.atlassian.net/wiki/spaces/FDX/pages/844759075/Using+Docusaurus+recommended 
- https://docusaurus.io

**Note:** [The documentation build script](https://github.com/finos/legend/blob/master/build-site.sh) can be configured to pull in and include files from GitLab repositories housing modeling documentation into the GitHub pages/Docusaurus-powered site.

## Contribute issues

View the prerequisites and steps to report an issue in GitHub.

### Prerequisites

- [Search for duplicates](https://github.com/finos/legend/issues?utf8=%E2%9C%93&q=). A search for exception error messages or a summary of the unexpected behaviour is enough.
- Are you running the latest version?
- Are you sure this is a bug or missing capability?

### Create an issue in GitHub

1. Create your issue [in GitHub](https://github.com/finos/legend/issues/new).
2. New issues contain two templates in the description: bug report and enhancement request. Select the most appropriate for your issue, *then delete the other*.
3. Tag the new issue with either **Bug** or **Enhancement**.
4. Use [Markdown formatting](https://help.github.com/categories/writing-on-github/) to improve readability. For example, use [code fences](https://help.github.com/articles/creating-and-highlighting-code-blocks/) for exception stack traces and log entries.

## More info

- [Get involved](how-to-get-involved.md)
- [Installation guide](../getting-started/installation/installation-guide.md)
- [Create a workspace](../getting-started/studio/create-workspace.md)
