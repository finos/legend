# Contributing to Legend

#### *Are you using Legend? Are you planning to deploy, or have you already deployed your own internal instance of Legend?*
If you already use, or are planning to use Legend at an individual or corporate level, we would like to hear from you: just email the [Legend General List](legend@finos.org) with details about how you are using it. 

# Get Started
There are many ways to contribute to Legend, and many of them do not involve writing any code. Here are a few ideas to get started:

1. Start using Legend Studio to provide feedback, and contribute to, existing models. Request access to the modeling instance at https://www.finos.org/legend and go through the [Getting Started](https://legend.finos.org/docs/getting-started/studio#getting-started) guide. Does everything work as expected? If not, we're always looking for improvements. Let us know by [opening an issue](https://github.com/finos/legend/issues/new/choose)

2. [Contribute code](contribute-code.md)

3. [Help build out the documentation](contribute-documentation.md). Read through the [Legend documentation site](https://legend.finos.org/docs/contribute). If you find anything that is confusing or can be improved, submit a Pull Request. 

4. [Contribute issues: identify bugs, suggest new features, and provide feedback on prioritization](contribute-issues). Look through the [open issues](https://github.com/finos/legend/issues?q=is%3Aissue+is%3Aopen+). Provide workarounds, ask for clarification, or suggest labels. If you find an issue you would like to fix, [open a pull request](https://github.com/finos/legend/pulls). Issues tagged as Good first issue are a good place to get started. Take a look at the features requested by others in the community and consider opening a pull request if you see something you want to work on.
## Prerequisites 
If you would like to create and/or edit models in the Legend hosted instance or make Code contributions, you will need to have a GitHub Account. 
#### GitHub Account Setup
In order to configure your GitHub access, you will need to:

1. [Create an account on GitHub.com](https://help.github.com/en/github/getting-started-with-github/signing-up-for-a-new-github-account)
2. [Set up a Git client locally](https://help.github.com/en/github/getting-started-with-github/set-up-git)
3. Ensure that the Git client is configured with your `<username>@users.github.com` email address (you can do so using the `git config --list | grep user.email` command). If you use a different email address, you may face one of the following issues:

     a) Your corporate firewall blocks Git activity, unless you are signed in with an `@<your company domain>` email address
 
     b) GitHub forces you to set the email address as public, or it would reject push operations with the error `push declined due to email privacy restrictions`.
     
_Please email help@finos.org if you encounter any issues while setting up your GitHub account. The FINOS staff will be happy to assist you._

#### FINOS Contributor License Agreement ("CLA")
A Contributor License Agreement ("CLA") is a document that specifies how a project is allowed to use your contribution; they are commonly used in many open source projects.

_NOTE:_ Commits and pull requests to FINOS project repositories, including Legend, will only be accepted from those contributors with an active, executed Individual Contributor License Agreement (ICLA) with FINOS OR who are covered under an existing and active Corporate Contribution License Agreement (CCLA) executed with FINOS. See the [Contribute page on the FINOS Wiki for more information](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/83034172/Contribute). Commits from individuals not covered under an ICLA or CCLA will be flagged and blocked by the FINOS ["CLA Bot" tool](https://github.com/finos/cla-bot). Please note that some CCLAs require individuals/employees to be explicitly named on the CCLA. PRs submitted to the Legend project cannot be accepted until you have a CLA in place with the Foundation. CLAs are also required for modelers participating in the pilot.

_NOTE:_ **Even if you have signed and are covered by a CLA, the [CLA Bot](https://github.com/finos/cla-bot) may block your Pull Requests if your Git client is configured with an email address other than your `<username>@users.github.com` email address**. (you can use the `git config --list | grep user.email` command to see which email address your git client is configured with). If your git client is not correctly configured, the CLA bot will not be able to parse your GitHub details and identify you, which will block your Pull Request. In order to fix this issue, please follow the instructions below.

   1. Check your git client is configured with a user email `git config --list | grep email`
   2. If the user email is missing, run the following command, substituting with your git commit email address `git config --global user.email email@example.com`
   3. Make sure your git commit email is configured on GitHub by [Setting your Commit Email Address](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address)
   4. Then, amend the authors in your commit history by using `git commit --amend` to change your last commit.

   Alternatively, use the slightly more complex `git reset --soft` and `git rebase` to checkout your changes, rewrite the commit history locally and (force) push changes to the downstream branch.

   If you have any issues with the steps above, please email help@finos.org so we can help you resolve before reviewing and accepting your pull request.

* Need an ICLA? Unsure if you are covered under an existing CCLA? Email [help@finos.org](mailto:help@finos.org?subject=CLA)

## 1. Create New Models and Edit Existing Models
### Introduction
FINOS hosts a shared version of Legend Studio in the public cloud, which is available to prototype collaborative data modeling, at https://legend.finos.org/studio. If you would like to access the existing models, please **request access to the modeling instance** at [finos.org/legend](https://www.finos.org/legend).

Once you have requested access to the modeling instance, follow the instructions in the [Legend Documentation Site](https://legend.finos.org/docs/getting-started/studio#create-a-model) to get started and create a new model or edit existing ones. 
If you have questions or encounter any issues, please raise an issue at https://github.com/finos/legend/issues.
### [Roles](roles.md)
### [Create a workspace](create-workspace.md)
### [Create a model](create-model.md)
### [Create a diagram](create-diagram.md)
### [Edit a model](edit-model.md)
### [Create model to model mapping](create-model-to-model-mapping.md)
### [Review and commit changes](review-and-commit-changes.md)
### [Review process](review-process.md)
### [Sync changes beyond Legend](sync-changes-beyond-legend.md)

### Suggest Modeling Use Cases
If you have suggestions or ideas for modeling use cases for which Legend may be appropriate, we'd love to hear your ideas -- send a note with your suggestion to the [Legend General List](legend@finos.org).

### Background: The Legend Pilot - Shared Modeling in Legend (January - September 2020)
In January 2020, FINOS launched a pilot with FINOS member organizations interested in evaluating Legend-PURE/Legend. Modeling occurred on the FINOS hosted, shared version of Legend Studio in the public cloud, which was used by FINOS members to collaborate on Legend Studio by building extensions to the [ISDA Common Domain Model (CDM)](https://www.isda.org/2018/11/22/isda-cdm-factsheet/). Modeling occurred in two workstreams: **FX Options** and **Commodities Reference Data**, which concluded their work in September 2020. We expect that further working groups may use Legend for data modeling in these and/or other areas after the first wave of code has been open sourced in October 2020.

## 2. Contribute Code 
### Propose Changes (Make Pull Requests) to Underlying Legend-PURE and Legend Code
The source code to Legend-PURE and Legend is available to the public and the project welcomes pull requests to these code bases.
### [Overall Code Contribution Workflow](contribute-code.md)
### [Legend Language](legend-language.md)
### [Released Functions](released-functions.md)
### [Upcoming Functions](upcoming-functions.md)

## 3. Build out documentation 
### [Contribute Documentation](contribute-documentation)
### [Running the Docs Site Locally on Your Machine](run-docs-site.md)

## 4. Contribute issues: identify bugs, suggest new features, and provide feedback on prioritization 
### [Contribute issues](contribute-issues.md)

# Legend Contribution and Governance Policies

### Roles

The project community consists of Contributors and Maintainers:
* A **Contributor** is anyone who submits a contribution to the project. (Contributions may include code, issues, comments, documentation, media, or any combination of the above.)
* A **Maintainer** is a Contributor who, by virtue of their contribution history, has been given write access to project repositories and may merge approved contributions.
* The **Lead Maintainer** is the project's interface with the FINOS team and Board. They are responsible for approving [quarterly project reports](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/93225748/Board+Reporting+and+Program+Health+Checks) and communicating on behalf of the project. The Lead Maintainer is elected by a vote of the Maintainers. 

### Contribution Rules

Anyone is welcome to submit a contribution to the project. The rules below apply to all contributions. (The key words "MUST", "SHALL", "SHOULD", "MAY", etc. in this document are to be interpreted as described in [IETF RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).)

* All contributions MUST be submitted as pull requests, including contributions by Maintainers.
* All pull requests SHOULD be reviewed by a Maintainer (other than the Contributor) before being merged.
* Pull requests for non-trivial contributions SHOULD remain open for a review period sufficient to give all Maintainers a sufficient opportunity to review and comment on them.
* After the review period, if no Maintainer has an objection to the pull request, any Maintainer MAY merge it.
* If any Maintainer objects to a pull request, the Maintainers SHOULD try to come to consensus through discussion. If not consensus can be reached, any Maintainer MAY call for a vote on the contribution.

### Maintainer Voting

The Maintainers MAY hold votes only when they are unable to reach consensus on an issue. Any Maintainer MAY call a vote on a contested issue, after which Maintainers SHALL have 36 hours to register their votes. Votes SHALL take the form of "+1" (agree), "-1" (disagree), "+0" (abstain). Issues SHALL be decided by the majority of votes cast. If there is only one Maintainer, they SHALL decide any issue otherwise requiring a Maintainer vote. If a vote is tied, the Lead Maintainer MAY cast an additional tie-breaker vote.

The Maintainers SHALL decide the following matters by consensus or, if necessary, a vote:
* Contested pull requests
* Election and removal of the Lead Maintainer
* Election and removal of Maintainers

All Maintainer votes MUST be carried out transparently, with all discussion and voting occurring in public, either:
* in comments associated with the relevant issue or pull request, if applicable;
* on the project mailing list or other official public communication channel; or
* during a regular, minuted project meeting.

### Maintainer Qualifications

Any Contributor who has made a substantial contribution to the project MAY apply (or be nominated) to become a Maintainer. The existing Maintainers SHALL decide whether to approve the nomination according to the Maintainer Voting process above.

### Changes to this Document

This document MAY be amended by a vote of the Maintainers according to the Maintainer Voting process above.
