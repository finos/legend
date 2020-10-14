---
id: contribute-code
title: Contribute code
sidebar_label: Contribute code
---

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

## Next steps

- [Report a bug](report-bug.md)
- [Contribute to models](contribute-to-models.md)
- [Contribute to documentation](contribute-documentation.md)
