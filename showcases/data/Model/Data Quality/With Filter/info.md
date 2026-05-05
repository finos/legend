---
title: Data Quality - Validation with Filter
description: A `DataQualityValidation` that narrows the population being validated using a `filter` lambda.
---

`DataQualityValidation` accepts an optional `filter: <var>: <Class>[1] | <boolean>` clause
that restricts the population the validation runs against. This is useful when:

- a constraint should only apply to a subset (e.g. adults, EU customers, ACTIVE trades);
- you want to split a single validation into multiple slice-specific reports;
- the underlying class has historical data that pre-dates the constraint.

The filter applies to the root class of the `validationTree`; structural sub-fetches
inherit the filtered scope.

