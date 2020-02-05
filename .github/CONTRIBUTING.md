# Contributing to Alloy
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
We welcome your help building out the documentation site. The process to make changes to the documentation site is the same as that which is described in the "Making Code (Including Documentation) Changes" section.

### Propose Changes (Make Pull Requests) to Underlying PURE and Alloy Code (Phase 2)
In phase 2, once the underlying code to PURE and Alloy have been open sourced into FINOS and source code made available to the public, the project will welcome pull requests to these code bases. 

## Making Code (Including Documentation) Changes
### Prerequisites
#### Github ID
#### FINOS Contributor License Agreement
A CLA is a document that specifies how a project is allowed to use your
contribution; they are commonly used in many open source projects.

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


## Contributing Issues
### Prerequisites

* [ ] Have you [searched for duplicates](https://github.com/finos/purealloy/issues?utf8=%E2%9C%93&q=)?  A simple search for exception error messages or a summary of the unexpected behaviour should suffice.
* [ ] Are you running the latest version?
* [ ] Are you sure this is a bug or missing capability?

### Raising an Issue
* Create your issue [here](https://github.com/finos/purealloy/issues/new).
* New issues contain two templates in the description: bug report and enhancement request. Please pick the most appropriate for your issue, **then delete the other**.
  * Please also tag the new issue with either "Bug" or "Enhancement".
* Please use [Markdown formatting](https://help.github.com/categories/writing-on-github/)
liberally to assist in readability.
  * [Code fences](https://help.github.com/articles/creating-and-highlighting-code-blocks/) for exception stack traces and log entries, for example, massively improve readability.