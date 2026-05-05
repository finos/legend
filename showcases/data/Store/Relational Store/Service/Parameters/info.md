---
title: Service - Parameters
description: A Service whose query takes one or more parameters that become URL/query parameters at runtime.
---

A `Service` query can take typed parameters (`p1: String[1]`, `minAge: Integer[1]`, etc.).
Parameters declared in the query become callable arguments of the service. Test asserts
provide concrete parameter values inline as the first element of each `{ [..params..], res|... }`
tuple — supporting strings, numbers, dates, enums and lists.

 