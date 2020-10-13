---
id: contribute-code
title: Contribute code
sidebar_label: Contribute code
---

# Contribute code

This page lists the prerequisites and workflow for contributing code changes to Legend.

## Prerequisites

### GitHub ID

Legend uses both GitLab and GitHub infrastructure but, consistent with the FINOS infrastructure strategy, uses GitHub accounts as the default for authentication. All committers to FINOS repos must have GitHub IDs.

### FINOS Contributor License Agreement (CLA)

A Contributor License Agreement (CLA) is a document that specifies how a project is allowed to use your contribution. They're commonly used in open source projects.

**Note:** Commits and pull requests to FINOS project repositories (including Legend) are only accepted from contributors with an active, executed Individual Contributor License Agreement (ICLA) with FINOS *or* who are covered under an existing and active Corporate Contribution License Agreement (CCLA) executed with FINOS. See the [Contribute page on the FINOS Wiki for more information](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/83034172/Contribute). Commits from individuals not covered under an ICLA or CCLA will be flagged and blocked by the FINOS [CLA Bot tool](https://github.com/finos/cla-bot). Some CCLAs require individuals/employees to be explicitly named on the CCLA. PRs submitted to the Legend project can't be accepted until you have a CLA in place with the Foundation. CLAs are also required for modelers participating in the pilot.

Email [help@finos.org](mailto:help@finos.org?subject=CLA) if you need an ICLA or to see if you're covered under an existing CCLA.

## Code contribution workflow

The following list is a high-level overview of the code contribution workflow.

1. Read our [Community Code of Conduct](https://www.finos.org/code-of-conduct).
2. Fork the Legend repository (<https://github.com/finos/legend/fork>).
3. Create your feature branch (`git checkout -b feature/fooBar`).
4. Make and test your changes locally.
5. Add your changes (`git add <filename containing fooBar change>`).
6. Commit your changes (`git commit -m 'Add some fooBar'`).
7. Push to the branch (`git push origin feature/fooBar`).
8. Optional but recommeded: Do a build in/from your fork; further evaluate and test it.
9. If all looks good, propose a pull request into the [FINOS PURE/Legend GitHub Repo](https://github.com/finos/legend/pull/new/master) from your fork.

### Propose and submit pull requests (code and docs)

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

## Running the docs site locally on your machine

To make edits to the website itself, you need to run the website locally. You must have:

- A Git client installed to checkout the code from github.com/finos/legend (`master` branch). The `git` command must be available via command-line, as it's needed to run the `build-site.sh` script.
- [Yarn installed](https://yarnpkg.com/lang/en/docs/install).

The following code automatically launches a browser and takes you to the staging website, located at http://localhost:3000. File changes are live rendered, speeding up the editorial workflow.

```git
git clone git@github.com:<yourfork>/purealloy.git
git checkout -b feature/myProposedDocChanges
cd purealloy ; ./build-site.sh
cd website ; yarn start
```

**Note:** The `build-site.sh` script pulls content from other Git repositories, mapping the `docs` folder into `modules/<repository-name>`. For example, all files and folders under https://gitlab.com/finosfoundation/purealloy-modeling-samples/tree/master/docs are available under the `/models/purealloy-modeling-samples` URL suffix.

Once you're satisfied with your documentation changes, commit and propose them in line with the general process described above. Specifically for doc edits, it might look like this:

- Commit your changes (`git commit -am <short description of what docs you changed/added>`).
- Push to the branch to your forked repo on GitHub (`git push origin myProposedDocChanges`).
- Review and test the changes in your fork.
- If all looks good, propose a pull request into the [FINOS PURE/Legend GitHub Repo](github.com/finos/legend) from your fork.

## More info

To learn more about Docusaurus, read the following resources:

- https://github.com/finos/legend/tree/master/website
- https://finosfoundation.atlassian.net/wiki/spaces/FDX/pages/844759075/Using+Docusaurus+recommended 
- https://docusaurus.io

**Note:** [The documentation build script](https://github.com/finos/legend/blob/master/build-site.sh) can be configued to pull in and include files from GitLab repositories housing modeling documentation into the GitHub pages/Docusaurus-powered site.

## Next steps

- [Report a bug](report-bug.md)
- [Contribute to models](contribute-to-models.md)
- [Contribute to documentation](contribute-documentation.md)
