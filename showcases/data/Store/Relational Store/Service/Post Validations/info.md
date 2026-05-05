---
title: Service - Post Validations
description: A Service that declares `postValidations` checking the shape / contents of the result after each invocation.
---

`postValidations` are assertions that run **on the result** of each service invocation
(in addition to test-suite assertions, which run only at test time). Each entry has:

- `description` — human-readable explanation of what is being asserted;
- `params` — values for any service parameters (must match the service's parameter count);
- `assertions` — named lambdas of the form `name: tds: TabularDataSet[1] | <boolean>;`,
  where the parameter type matches the service execution's return type
  (e.g. `TabularDataSet[1]` for `project` queries).

A common helper is
`meta::legend::service::validation::assertTabularDataSetEmpty('message')`, which fails
if the input TDS has any rows — useful to encode "no row should ever match this
forbidden pattern".

