---
title: Service - Multi Execution
description: A Service whose execution is keyed (e.g. environment) and routes to a different mapping/runtime per key.
---

A `Service` can declare `execution: Multi` instead of `Single`. The query is parameterless
or shared, and a `key` field selects which `executions['<key>']` block (mapping + runtime)
is used at runtime. This is the standard pattern for promoting the same service across
environments (QA / UAT / PROD) or routing by region, while keeping a single URL pattern.
