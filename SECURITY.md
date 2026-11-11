# Security Policy

FINOS projects support responsible disclosure of security vulnerabilities and adhere to the [FINOS Security Vulnerabilities Responsible Disclosure Policy](https://community.finos.org/docs/governance/Software-Projects/cve-responsible-disclosure). 

If you find something you believe to be a security issue, we encourage and appreciate your report. Please report the issue privately to the [project maintainers](./MAINTAINERS.md) using one of the following methods:

## Reporting a Vulnerability

- **GitHub Security Reports:** In order for the vulnerability reports to reach maintainers as soon as possible, the preferred way is to use the ["Report a vulnerability"](https://github.com/finos/legend/security) button under our "Security and quality" tab. This creates a private communication channel between you and the maintainers.
- **Email:** If you are unable to or have strong reasons not to use the GitHub Security vulnerability reporting feature, please email the maintainers directly and CC: [security@finos.org](mailto:security@finos.org) with a description of the vulnerability, along with relevant details (Impact, Patches, Workarounds, References and Screenshots).

## Vulnerability Process

1. **Report the vulnerability privately** using one of the methods above. Do not create a public GitHub Issue or make any public reference to the vulnerability.
2. The project team will acknowledge receipt of your report and triage the issue. If a vulnerability is confirmed, the team will work with you to investigate and resolve it. *(Note: Maintainers must review the escalation requirements below during triage).*
3. Once a fix is available, a release will be made and the vulnerability will be publicly disclosed in accordance with the [FINOS policy](https://community.finos.org/docs/governance/Software-Projects/cve-responsible-disclosure).

## CRA Escalation (For Maintainers)

CRA stewardship: This project is supported under the Linux Foundation CRA stewardship framework. Security vulnerabilities should be reported through the mechanisms described in this file, which we will coordinate with our CRA steward. For actively exploited vulnerabilities and severe incidents that may require CRA escalation, please use the project's emergency security reporting mechanisms as appropriate. Read more at https://www.linuxfoundation.org/security .

**Project maintainers MUST escalate** the issue to the LF steward at [steward@linuxfoundation.org](mailto:steward@linuxfoundation.org) if the project experiences either of the following:

* **Actively exploited vulnerabilities:** a security vulnerability where the project has reliable evidence that a malicious actor has exploited it.
* **Severe incident:** a security compromise of the project’s own IT infrastructure.

Ordinary vulnerabilities with no evidence of exploitation are not CRA escalation events. Escalate those that are actively exploited.
