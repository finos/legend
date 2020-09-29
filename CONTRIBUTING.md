# Alloy Contribution and Governance Policies

This document describes the contribution process and governance policies of the FINOS Alloy project. The project is also governed by the [Linux Foundation Antitrust Policy](https://www.linuxfoundation.org/antitrust-policy/), and the FINOS [IP Policy](IP-Policy.pdf), [Code of Conduct](Code-of-Conduct.md), [Collaborative Principles](Collaborative-Principles.md), and [Meeting Procedures](Meeting-Procedures.md).

## Contribution Process

Before making a contribution, please take the following steps:
1. Check whether there's already an open issue related to your proposed contribution. If there is, join the discussion and propose your contribution there.
2. If there isn't already a relevant issue, create one, describing your contribution and the problem you're trying to solve.
3. Respond to any questions or suggestions raised in the issue by other developers.
4. Fork the project repository and prepare your proposed contribution.
5. Submit a pull request.

NOTE: All contributors must have a contributor license agreement (CLA) on file with FINOS before their pull requests will be merged. Please review the FINOS [contribution requirements](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530375/Contribution+Compliance+Requirements) and submit (or have your employer submit) the required CLA before submitting a pull request.

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
