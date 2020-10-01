# Alloy Contribution and Governance Policies

This document describes the contribution process and governance policies of the FINOS Alloy project. The project is also governed by the [Linux Foundation Antitrust Policy](https://www.linuxfoundation.org/antitrust-policy/), and the FINOS [IP Policy](IP-Policy.pdf), [Code of Conduct](Code-of-Conduct.md), [Collaborative Principles](Collaborative-Principles.md), and [Meeting Procedures](Meeting-Procedures.md).

## Ways of Contributing 
### Participate in the Pilot
In Q1 2020 (i.e., now) FINOS is conducting a pilot with member organizations interested in evaluating PURE/Alloy. For more information about the pilot and how to generally get involved with Alloy see the [Alloy page on finos.org](https://www.finos.org/alloy).

#### Shared Modeling in Alloy
During the pilot, modelers will collaborate using Alloy to build shared models. Examples of the types of models that might be modeled during the pilot include:
* FX options
* RFQ
* ESG Data

### Suggest Modeling Use Cases
If you have suggestions or ideas for modeling use cases for which Alloy may be appropriate, we'd love to hear your ideas -- send a note with your suggestion to the [Alloy General List](alloy@finos.org).

### Help Build the Documentation
#### Suggest Topics
Suggesting topics you think should be included in this documentation site is a great, easy way to get involved with Alloy. A good way of a suggesting a topic for the docs site is by [opening an issue in our Github repo](https://github.com/finos/purealloy/issues/new/choose). Ideas are also welcome via the [Alloy General List](alloy@finos.org).

#### Make Suggested Edits and Adds in the Documentation Site
We welcome your help building out the documentation site. The process to make changes to the documentation site is the same as that which is described in the ["Making Code (Including Documentation) Changes" section](CONTRIBUTING.md#making-code-including-documentation-changes).

### Propose Changes (Make Pull Requests) to Underlying PURE and Alloy Code (Phase 2)
In phase 2, once the underlying code to PURE and Alloy have been open sourced into FINOS and source code made available to the public, the project will welcome pull requests to these code bases. 

## Making Code (Including Documentation) Changes
### Prerequisites
#### Github ID
Alloy makes use of both GitLab and GitHub infrastructure but, consistent with the FINOS infrastructure strategy, uses GitHub accounts as its default for authentication. All committers to FINOS repos, including pilot phase modelers, must have GitHub IDs.

#### FINOS Contributor License Agreement ("CLA")
A Contributor License Agreement ("CLA") is a document that specifies how a project is allowed to use your contribution; they are commonly used in many open source projects.

_NOTE:_ All contributors must have a contributor license agreement (CLA) on file with FINOS before their pull requests will be merged. Please review the FINOS [contribution requirements](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530375/Contribution+Compliance+Requirements) and submit (or have your employer submit) the required CLA before submitting a pull request.

_NOTE:_ Commits and pull requests to FINOS project repositories, including Alloy, will only be accepted from those contributors with an active, executed Individual Contributor License Agreement (ICLA) with FINOS OR who are covered under an existing and active Corporate Contribution License Agreement (CCLA) executed with FINOS. See the [Contribute page on the FINOS Wiki for more information](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/83034172/Contribute). Commits from individuals not covered under an ICLA or CCLA will be flagged and blocked by the FINOS ["CLA Bot" tool](https://github.com/finos/cla-bot). Please note that some CCLAs require individuals/employees to be explicitly named on the CCLA. PRs submitted to the purealloy project cannot be accepted until you have a CLA in place with the Foundation. CLAs are also required for modelers participating in the pilot. 

* Need an ICLA? Unsure if you are covered under an existing CCLA? Email [help@finos.org](mailto:help@finos.org?subject=CLA)

### Overall Code Contribution Workflow

1. Read our [contribution guidelines](.github/CONTRIBUTING.md) and [Community Code of Conduct](https://www.finos.org/code-of-conduct)
2. Fork the Alloy repository (<https://github.com/finos/purealloy/fork>)
3. Create your feature branch (`git checkout -b feature/fooBar`)
4. Make and test locally your changes
5. Add your changes (`git add <filename containing fooBar change>`)
4. Commit your changes (`git commit -m 'Add some fooBar'`)
5. Push to the branch (`git push origin feature/fooBar`)
6. Optional but Recommeded: Do a build in/from your fork; further evaluate and test
7. If all looks good, propose a pull request into the [FINOS PURE/Alloy GitHub Repo](https://github.com/finos/purealloy/pull/new/master) from your fork.

#### Proposing and Submitting Pull Requests (Code & Docs)
To make review of PRs easier, please:

 * Please make sure your PRs will merge cleanly - PRs that don't are unlikely to be accepted.
 * For code contributions, follow the existing code layout.
 * For documentation contributions, follow the general structure, language, and tone of the [existing docs](https://github.com/finos/purealloy/wiki).
 * Keep commits small and cohesive - if you have multiple contributions, please submit them as independent commits (and ideally as independent PRs too).
 * Reference issue #s if your PR has anything to do with an issue (even if it doesn't address it).
 * Minimise non-functional changes (e.g. whitespace).
 * Ensure all new files include a header comment block containing the [Apache License v2.0 and your copyright information](http://www.apache.org/licenses/LICENSE-2.0#apply).
 * If necessary (e.g. due to 3rd party dependency licensing requirements), update the [NOTICE file](https://github.com/finos/purealloy/blob/master/NOTICE) with any new attribution or other notices


#### Commit and PR Messages
* **Reference issues, wiki pages, and pull requests liberally!**
* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move button left..." not "Moves button left...")
* Limit the first line to 72 characters or less


### Running the Docs Site Locally on Your Machine
In order to make edits to the website itself, you'll probably want to run the website locally, you must have:
- A Git client installed, to checkout the code from github.com/finos/purealloy (`master` branch); note that the `git` command must be available via command-line, as it's needed to run the `build-site.sh` script
- [Yarn installed](https://yarnpkg.com/lang/en/docs/install)

```
git clone git@github.com:<yourfork>/purealloy.git
git checkout -b feature/myProposedDocChanges
cd purealloy ; ./build-site.sh
cd website ; yarn start
```
This will automatically open a browser, pointing to http://localhost:3000, where the website will be staged; file changes will be live rendered, which speeds up the editorial workflow. 

Note: The `build-site.sh` script will pull content from other Git repositories, mapping the `docs` folder into `modules/<repository-name>`; for example, all files and folders under https://gitlab.com/finosfoundation/purealloy-modeling-samples/tree/master/docs are available under the `/models/purealloy-modeling-samples` URL suffix.

Once you are satisfied with your documentation changes, commit and propse them in line with the general process described above. Specifically for documentation edits, it might look like:
* Commit your changes `git commit -am '<short description of what docs you changed/added>'`
* Push to the branch to your forked repo on GitHub `git push origin myProposedDocChanges`
* Review and test your changes in your fork
* If you're happy with the documentation changes, propose a pull request into the [FINOS PURE/Alloy GitHub Repo](github.com/finos/purealloy) from your fork.

To learn more about Docusaurus see
* https://github.com/finos/purealloy/tree/master/website
* https://finosfoundation.atlassian.net/wiki/spaces/FDX/pages/844759075/Using+Docusaurus+recommended 
* https://docusaurus.io

*Note* [The documentation build script](https://github.com/finos/purealloy/blob/master/build-site.sh) can be configued to pull in and include files from GitLab.com repositories housing modeling documentation into the GitHub pages / Docusaurus powered site.

## Contribution Process
### Prerequisites

* [ ] Have you [searched for duplicates](https://github.com/finos/purealloy/issues?utf8=%E2%9C%93&q=)?  A simple search for exception error messages or a summary of the unexpected behaviour should suffice.
* [ ] Are you running the latest version?
* [ ] Are you sure this is a bug or missing capability?

### Making a Contribution

Before making a contribution, please take the following steps:
1. Check whether there's already an open issue related to your proposed contribution. If there is, join the discussion and propose your contribution there.
2. If there isn't already a relevant issue, create one, describing your contribution and the problem you're trying to solve.
3. Respond to any questions or suggestions raised in the issue by other developers.
4. Fork the project repository and prepare your proposed contribution.
5. Submit a pull request.

### Raising an Issue
* Create your issue [here](https://github.com/finos/purealloy/issues/new).
* New issues contain two templates in the description: bug report and enhancement request. Please pick the most appropriate for your issue, **then delete the other**.
  * Please also tag the new issue with either "Bug" or "Enhancement".
* Please use [Markdown formatting](https://help.github.com/categories/writing-on-github/)
liberally to assist in readability.
  * [Code fences](https://help.github.com/articles/creating-and-highlighting-code-blocks/) for exception stack traces and log entries, for example, massively improve readability.

## On-line Collaboration
* [Alloy General List](https://groups.google.com/a/finos.org/forum/#!forum/alloy)
    * Subscribe w/ email to [alloy+subscribe@finos.org](alloy+subscribe@finos.org)
    * Post with email to [alloy@finos.org](alloy+subscribe@finos.org)

* Github / Gitlab Issues & Kanban
    * Github Issues (https://github.com/finos/purealloy/issues)
    * Github Kanban(https://github.com/orgs/finos/projects/5)

* Alloy Updates from FINOS
    * [Subscribe at https://www.finos.org/alloy](https://www.finos.org/alloy)

## Governance
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