---
title: Service - Test Suites
description: A Service using the modern `testSuites` block with named tests, inline connection data and EqualToJson assertions.
---

`testSuites` is the modern (recommended) way to declare service tests. Each suite can
provide test data per `connection` (using `ExternalFormat` for JSON / flatdata, or
`Relational #{ ... }#` for relational stores), and each test inside the suite has named
asserts (typically `EqualToJson`). This is the same model used by `MappingTests` and
function tests, and it allows multiple independent test cases per service.

