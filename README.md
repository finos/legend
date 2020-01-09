Badges go here (see [shields.io](https://shields.io/), for examples).

[![Build Status](https://travis-ci.com/finos-admin/purealloy.svg?token=pqqpLyKQyKTy9sWFPywW&branch=master)](https://travis-ci.com/finos-admin/purealloy)
[![FINOS - Incubating](https://cdn.jsdelivr.net/gh/finos/contrib-toolbox@master/images/badge-incubating.svg)](https://finosfoundation.atlassian.net/wiki/display/FINOS/Incubating)

# PURE/Alloy

On November 20, 2019, at FINOS' flagship conference, the Open Source Strategy Forum, FINOS Platinum member Goldman Sachs announced its intention to open source two products - a modeling language internally named "PURE", and a visual modeling platform that generates PURE models known in Goldman Sachs as "Alloy" - into FINOS.

Read more on https://www.finos.org/pure-alloy.

This repository currently hosts:
- PURE/Alloy User Guide (composed in markdown file format and stored in the `docs/` folder)
- Issue/task management and (threaded) discussions, using GitHub Issues and Projects (Kanban), to track activity around documentation, deployments and questions/support requests.

## Installation
TBD

## Usage example
TBD

## Development setup
TBD

## Website local run
In order to run the website, you must have:
- A Git client installed, to checkout the code from github.com/finos/purealloy (`master` branch); note that the `git` command must be available via command-line, as it's needed to run the `build-site.sh` script
- [Yarn installed](https://yarnpkg.com/lang/en/docs/install)

```
git clone git@github.com:finos/purealloy.git
./build-site.sh
cd website ; yarn start
```
This will automatically open a browser, pointing to http://localhost:3000 , where the website will be staged; file changes will be live rendered, which speeds up the editorial workflow.

The `build-site.sh` script will pull content from other Git repositories, mapping the `docs` folder into `modules/<repository-name>`; for example, all files and folders under https://gitlab.com/finosfoundation/purealloy-modeling-samples/tree/master/docs are available under the `/models/purealloy-modeling-samples` URL suffix.

You can read more about Docusaurus on https://github.com/finos/purealloy/tree/master/website and https://docusaurus.io .

## Roadmap

- Phase 1 (Q4 2019): Stand-up and deploy external "sandbox" instance of Alloy for shared modeling; Open Source Strategy Forum announcement; internal code evaluation and preparation for open sourcing
- Phase 2 (Q1 2020): Pilot using the external sandbox instance of Alloy development of common, shared models written in PURE with interested industry participants; continue to prepare code for open sourcing. Develop initial shared roadmap for PURE and Alloy extensions and new features for project developers to work on; identify priority areas for further collaborative model development.
- Phase 3 (Mid 2020): Complete technical and legal reviews of code for release per FINOS contribution process; make underlying PURE and Alloy code bases available as open source under an Apache 2.0 license in a FINOS GitLab repository. Begin accepting pull requests into PURE and Alloy from developers outside Goldman Sachs.
For more information about PURE/Alloy, including some of the motivations behind the decision to open source these two products, see the [PURE/Alloy press release](https://www.finos.org/press/goldman-announces-pure-alloy-contribution).

## Contributing

1. Fork it (<https://github.com/finos/purealloy/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Read our [contribution guidelines](.github/CONTRIBUTING.md) and [Community Code of Conduct](https://www.finos.org/code-of-conduct)
4. Commit your changes (`git commit -am 'Add some fooBar'`)
5. Push to the branch (`git push origin feature/fooBar`)
6. Create a new Pull Request

_NOTE:_ Commits and pull requests to FINOS repositories will only be accepted from those contributors with an active, executed Individual Contributor License Agreement (ICLA) with FINOS OR who are covered under an existing and active Corporate Contribution License Agreement (CCLA) executed with FINOS. Commits from individuals not covered under an ICLA or CCLA will be flagged and blocked by the FINOS Clabot tool. Please note that some CCLAs require individuals/employees to be explicitly named on the CCLA.

*Need an ICLA? Unsure if you are covered under an existing CCLA? Email [help@finos.org](mailto:help@finos.org)*


## License

Copyright 2019 Goldman Sachs

Distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

SPDX-License-Identifier: [Apache-2.0](https://spdx.org/licenses/Apache-2.0)
