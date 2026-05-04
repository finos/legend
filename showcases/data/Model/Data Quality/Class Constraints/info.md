---
title: Data Quality - Class Constraints
description: Define data-integrity rules directly on a Class via the `[ ... ]` constraints block.
---

Every Pure `Class` can carry a `[ ... ]` constraints block listing predicates that any
instance of the class must satisfy. There are two equivalent forms:

- **Short form** — `name: <boolean expression on $this>` — quick to write, defaults to
  enforcement level `Error`.
- **Long form** — `name ( ~function: <expr> ~enforcementLevel: Error|Warn ~message: <expr> )`
  — lets you also set the enforcement level (`Error` blocks; `Warn` only logs) and a
  custom message.

Constraints are evaluated whenever an instance is created (e.g. via `new` / graph fetch
materialisation) and surface in mapping tests, `DataQualityValidation` and service
`postValidations`.

