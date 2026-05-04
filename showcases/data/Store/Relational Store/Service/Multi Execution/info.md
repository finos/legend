---
environments (QA / UAT / PROD) or routing by region, while keeping a single URL pattern.
is used at runtime. This is the standard pattern for promoting the same service across
or shared, and a `key` field selects which `executions['<key>']` block (mapping + runtime)
A `Service` can declare `execution: Multi` instead of `Single`. The query is parameterless

---
description: A Service whose execution is keyed (e.g. environment) and routes to a different mapping/runtime per key.
title: Service - Multi Execution

