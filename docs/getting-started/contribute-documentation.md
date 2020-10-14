---
id: contribute-documentation
title: Contribute documentation
sidebar_label: Contribute documentation
---

## Suggest topics

You can get involved with Legend by suggesting topics you'd like to see in our documentation. Suggest a topic for our docs by [opening an issue in our GitHub repo](https://github.com/finos/legend/issues/new/choose). Ideas are also welcome through the [Legend General List](mailto:Legend@finos.org).

## Edit the documentation site directly

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

- [Contribute code](contribute-code.md)
- [Report a bug](report-bug.md)
- [Contribute to models](contribute-to-models.md)
