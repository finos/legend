---
id: released-functions
title: Released Functions
sidebar_label: Released Functions
---

## abs

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">abs</span>(<span class="pureGrammar-functionVariable">number</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">number</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">abs</span>(<span class="pureGrammar-functionVariable">int</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">int</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

- <span class="pureGrammar-usageLabel">Usage</span>
```
{|Person->getAll()->project({p|$p.firstName}, 'firstName')->groupBy('firstName', 'new'->agg({e|$e}, {y|$y->count()->abs()}))}
```

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">abs</span>(<span class="pureGrammar-functionVariable">float</span>: <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">float</span>: <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">abs</span>(<span class="pureGrammar-functionVariable">decimal</span>: <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">decimal</span>: <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## add

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">add</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">val</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">val</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## adjust

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">adjust</span>(<span class="pureGrammar-functionVariable">date</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">number</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">unit</span>: <span class="pureGrammar-genericType">DurationUnit</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">date</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">number</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">unit</span>: <span class="pureGrammar-genericType">DurationUnit</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## and

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">and</span>(<span class="pureGrammar-functionVariable">first</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">second</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">first</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">second</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">and</span>(<span class="pureGrammar-functionVariable">vals</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">vals</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## assert

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">assert</span>(<span class="pureGrammar-functionVariable">condition</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">formatString</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">formatArgs</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">condition</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">formatString</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">formatArgs</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">assert</span>(<span class="pureGrammar-functionVariable">condition</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">messageFunction</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;-&#62;<span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">condition</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">messageFunction</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;-&#62;<span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">assert</span>(<span class="pureGrammar-functionVariable">condition</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">message</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">condition</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">message</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">assert</span>(<span class="pureGrammar-functionVariable">condition</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">condition</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## at

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">at</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">key</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">key</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## average

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">average</span>(<span class="pureGrammar-functionVariable">numbers</span>: <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">numbers</span>: <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">average</span>(<span class="pureGrammar-functionVariable">numbers</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">numbers</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">average</span>(<span class="pureGrammar-functionVariable">numbers</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">numbers</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## cast

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">cast</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">source</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">m</span>], <span class="pureGrammar-functionVariable">object</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">source</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">m</span>]
  - <span class="pureGrammar-parameterName">object</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## ceiling

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">ceiling</span>(<span class="pureGrammar-functionVariable">number</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">number</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## chunk

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">chunk</span>(<span class="pureGrammar-functionVariable">source</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">val</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">source</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">val</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## compare

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">compare</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">a</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">b</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">a</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">b</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## concatenate

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">concatenate</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">set1</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">set2</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">set1</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">set2</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## contains

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">contains</span>(<span class="pureGrammar-functionVariable">collection</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">value</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">collection</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">value</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">contains</span>(<span class="pureGrammar-functionVariable">source</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">val</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">source</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">val</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## convert

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">convert</span>(<span class="pureGrammar-functionVariable">unit</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">targetUnit</span>: <span class="pureGrammar-genericType">Unit</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">unit</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">targetUnit</span>: <span class="pureGrammar-genericType">Unit</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## cos

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">cos</span>(<span class="pureGrammar-functionVariable">number</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">number</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## count

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">count</span>(<span class="pureGrammar-functionVariable">s</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">s</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## date

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">date</span>(<span class="pureGrammar-functionVariable">year</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">month</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">day</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">hour</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">DateTime</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">year</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">month</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">day</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">hour</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">DateTime</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">date</span>(<span class="pureGrammar-functionVariable">year</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">month</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">day</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">StrictDate</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">year</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">month</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">day</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">StrictDate</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">date</span>(<span class="pureGrammar-functionVariable">year</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">year</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">date</span>(<span class="pureGrammar-functionVariable">year</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">month</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">year</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">month</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">date</span>(<span class="pureGrammar-functionVariable">year</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">month</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">day</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">hour</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">minute</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">DateTime</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">year</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">month</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">day</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">hour</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">minute</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">DateTime</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">date</span>(<span class="pureGrammar-functionVariable">year</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">month</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">day</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">hour</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">minute</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">second</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">DateTime</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">year</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">month</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">day</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">hour</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">minute</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">second</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">DateTime</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## dateDiff

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">dateDiff</span>(<span class="pureGrammar-functionVariable">d1</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">d2</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">du</span>: <span class="pureGrammar-genericType">DurationUnit</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">d1</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">d2</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">du</span>: <span class="pureGrammar-genericType">DurationUnit</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## datePart

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">datePart</span>(<span class="pureGrammar-functionVariable">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## dayOfMonth

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">dayOfMonth</span>(<span class="pureGrammar-functionVariable">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## dayOfWeekNumber

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">dayOfWeekNumber</span>(<span class="pureGrammar-functionVariable">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## distinct

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">distinct</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">s</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">s</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## divide

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">divide</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## drop

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">drop</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">count</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">count</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## endsWith

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">endsWith</span>(<span class="pureGrammar-functionVariable">source</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">val</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">source</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">val</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## enumValues

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">enumValues</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">enum</span>: <span class="pureGrammar-genericType">Enumeration&#60;<span class="pureGrammar-genericType">T</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">enum</span>: <span class="pureGrammar-genericType">Enumeration&#60;<span class="pureGrammar-genericType">T</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## eq

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">eq</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## equal

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">equal</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## exists

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">exists</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">value</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">func</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">value</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">func</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## extractEnumValue

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">extractEnumValue</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">enum</span>: <span class="pureGrammar-genericType">Enumeration&#60;<span class="pureGrammar-genericType">T</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">value</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">enum</span>: <span class="pureGrammar-genericType">Enumeration&#60;<span class="pureGrammar-genericType">T</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">value</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## filter

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">filter</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">value</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">func</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">value</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">func</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## first

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">first</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">0..1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## firstDayOfMonth

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">firstDayOfMonth</span>(<span class="pureGrammar-functionVariable">date</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">date</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## firstDayOfQuarter

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">firstDayOfQuarter</span>(<span class="pureGrammar-functionVariable">date</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">StrictDate</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">date</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">StrictDate</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## firstDayOfThisMonth

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">firstDayOfThisMonth</span>(): <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">



</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## firstDayOfThisQuarter

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">firstDayOfThisQuarter</span>(): <span class="pureGrammar-genericType">StrictDate</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">



</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">StrictDate</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## firstDayOfThisYear

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">firstDayOfThisYear</span>(): <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">



</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## firstDayOfWeek

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">firstDayOfWeek</span>(<span class="pureGrammar-functionVariable">date</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">date</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## firstDayOfYear

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">firstDayOfYear</span>(<span class="pureGrammar-functionVariable">date</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">date</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## floor

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">floor</span>(<span class="pureGrammar-functionVariable">number</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">number</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## fold

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">fold</span>&#60;T, V&#62;(<span class="pureGrammar-functionVariable">value</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">func</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>],<span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">m</span>]-><span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">m</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">accumulator</span>: <span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">m</span>]): <span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">m</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">value</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">func</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>],<span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">m</span>]-><span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">m</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">accumulator</span>: <span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">m</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">m</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## forAll

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">forAll</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">value</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">func</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">value</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">func</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## format

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">format</span>(<span class="pureGrammar-functionVariable">format</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">args</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">format</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">args</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## generateGuid

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">generateGuid</span>(): <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">



</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## greaterThan

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## greaterThanEqual

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">greaterThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## hasDay

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">hasDay</span>(<span class="pureGrammar-functionVariable">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## hasHour

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">hasHour</span>(<span class="pureGrammar-functionVariable">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## hasMinute

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">hasMinute</span>(<span class="pureGrammar-functionVariable">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## hasMonth

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">hasMonth</span>(<span class="pureGrammar-functionVariable">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## hasSecond

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">hasSecond</span>(<span class="pureGrammar-functionVariable">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## hasSubsecond

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">hasSubsecond</span>(<span class="pureGrammar-functionVariable">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## hasSubsecondWithAtLeastPrecision

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">hasSubsecondWithAtLeastPrecision</span>(<span class="pureGrammar-functionVariable">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">minPrecision</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">minPrecision</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## hasYear

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">hasYear</span>(<span class="pureGrammar-functionVariable">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## hour

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">hour</span>(<span class="pureGrammar-functionVariable">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## id

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">id</span>(<span class="pureGrammar-functionVariable">instance</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">instance</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## if

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">if</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">test</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">valid</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;-&#62;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">invalid</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;-&#62;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">test</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">valid</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;-&#62;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">invalid</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;-&#62;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## in

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">in</span>(<span class="pureGrammar-functionVariable">value</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">collection</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">value</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">collection</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">in</span>(<span class="pureGrammar-functionVariable">value</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">collection</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">value</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">collection</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## indexOf

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">indexOf</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">value</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">value</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">indexOf</span>(<span class="pureGrammar-functionVariable">str</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">toFind</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">fromIndex</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">str</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">toFind</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">fromIndex</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">indexOf</span>(<span class="pureGrammar-functionVariable">str</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">toFind</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">str</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">toFind</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## init

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">init</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## instanceOf

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">instanceOf</span>(<span class="pureGrammar-functionVariable">instance</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">type</span>: <span class="pureGrammar-genericType">Type</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">instance</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">type</span>: <span class="pureGrammar-genericType">Type</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## is

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">is</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## isDistinct

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">isDistinct</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">collection</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">graphFetchTree</span>: <span class="pureGrammar-genericType">RootGraphFetchTree&#60;<span class="pureGrammar-genericType">T</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">collection</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">graphFetchTree</span>: <span class="pureGrammar-genericType">RootGraphFetchTree&#60;<span class="pureGrammar-genericType">T</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">isDistinct</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## isEmpty

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">isEmpty</span>(<span class="pureGrammar-functionVariable">p</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">p</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">isEmpty</span>(<span class="pureGrammar-functionVariable">p</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">p</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## isEqual

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">isEqual</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">c1</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">c2</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">graphFetchTree</span>: <span class="pureGrammar-genericType">RootGraphFetchTree&#60;<span class="pureGrammar-genericType">T</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">c1</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">c2</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">graphFetchTree</span>: <span class="pureGrammar-genericType">RootGraphFetchTree&#60;<span class="pureGrammar-genericType">T</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## isNotEmpty

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">isNotEmpty</span>(<span class="pureGrammar-functionVariable">p</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">p</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">isNotEmpty</span>(<span class="pureGrammar-functionVariable">p</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">p</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## joinStrings

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">joinStrings</span>(<span class="pureGrammar-functionVariable">strings</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">prefix</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">separator</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">suffix</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">strings</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">prefix</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">separator</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">suffix</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">joinStrings</span>(<span class="pureGrammar-functionVariable">strings</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">separator</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">strings</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">separator</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

- <span class="pureGrammar-usageLabel">Usage</span>
```
{|Firm->getAll()->groupBy({f|$f.legalName}, {x|$x.employees->map({v_automap|$v_automap.firstName})}->agg({y|$y->joinStrings('*')}), ['legalName', 'employeesFirstName'])}
```

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">joinStrings</span>(<span class="pureGrammar-functionVariable">strings</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">strings</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## last

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">last</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">0..1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## length

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">length</span>(<span class="pureGrammar-functionVariable">str</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">str</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## lessThan

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThan</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## lessThanEqual

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">lessThanEqual</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## letFunction

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">letFunction</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## limit

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">limit</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">count</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">count</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## map

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">map</span>&#60;T, V&#62;(<span class="pureGrammar-functionVariable">value</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">func</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">&#42;</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">value</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">func</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">&#42;</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">map</span>&#60;T, V&#62;(<span class="pureGrammar-functionVariable">value</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">func</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">0..1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">0..1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">value</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">func</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">0..1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">map</span>&#60;T, V&#62;(<span class="pureGrammar-functionVariable">value</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>], <span class="pureGrammar-functionVariable">func</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">m</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">value</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]
  - <span class="pureGrammar-parameterName">func</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">m</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## match

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">match</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">var</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">functions</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">Nil</span>[<span class="pureGrammar-multiplicity">n</span>]-><span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">var</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">functions</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">Nil</span>[<span class="pureGrammar-multiplicity">n</span>]-><span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## matches

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">matches</span>(<span class="pureGrammar-functionVariable">string</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">regexp</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">string</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">regexp</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## max

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">max</span>(<span class="pureGrammar-functionVariable">ints</span>: <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]): <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">ints</span>: <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">max</span>(<span class="pureGrammar-functionVariable">numbers</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]): <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">numbers</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">max</span>(<span class="pureGrammar-functionVariable">ints</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">ints</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">max</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">max</span>(<span class="pureGrammar-functionVariable">ints</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">0..1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">ints</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">max</span>(<span class="pureGrammar-functionVariable">numbers</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">numbers</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">max</span>(<span class="pureGrammar-functionVariable">ints</span>: <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">0..1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">ints</span>: <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## min

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">min</span>(<span class="pureGrammar-functionVariable">ints</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">0..1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">ints</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">min</span>(<span class="pureGrammar-functionVariable">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">left</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">right</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">min</span>(<span class="pureGrammar-functionVariable">ints</span>: <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]): <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">ints</span>: <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">min</span>(<span class="pureGrammar-functionVariable">numbers</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">numbers</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">min</span>(<span class="pureGrammar-functionVariable">ints</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">ints</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">min</span>(<span class="pureGrammar-functionVariable">ints</span>: <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">0..1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">ints</span>: <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">min</span>(<span class="pureGrammar-functionVariable">numbers</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]): <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">numbers</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## minus

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">minus</span>(<span class="pureGrammar-functionVariable">ints</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">ints</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">minus</span>(<span class="pureGrammar-functionVariable">float</span>: <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">float</span>: <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">minus</span>(<span class="pureGrammar-functionVariable">decimal</span>: <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">decimal</span>: <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">minus</span>(<span class="pureGrammar-functionVariable">numbers</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">numbers</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## minute

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">minute</span>(<span class="pureGrammar-functionVariable">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## monthNumber

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">monthNumber</span>(<span class="pureGrammar-functionVariable">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## mostRecentDayOfWeek

<div class="pureGrammar-function"><div class="pureGrammar-functionDoc">Returns the most recent instance of the given day of the week that is no later than the given date.</div>

<div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">mostRecentDayOfWeek</span>(<span class="pureGrammar-functionVariable">date</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">day</span>: <span class="pureGrammar-genericType">DayOfWeek</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">date</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">day</span>: <span class="pureGrammar-genericType">DayOfWeek</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionDoc">Returns the most recent instance of the given day of the week that is no later than today.</div>

<div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">mostRecentDayOfWeek</span>(<span class="pureGrammar-functionVariable">day</span>: <span class="pureGrammar-genericType">DayOfWeek</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">day</span>: <span class="pureGrammar-genericType">DayOfWeek</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## new

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">new</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">class</span>: <span class="pureGrammar-genericType">Class&#60;<span class="pureGrammar-genericType">T</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">id</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">keyExpressions</span>: <span class="pureGrammar-genericType">KeyExpression</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">class</span>: <span class="pureGrammar-genericType">Class&#60;<span class="pureGrammar-genericType">T</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">id</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">keyExpressions</span>: <span class="pureGrammar-genericType">KeyExpression</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## newUnit

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">newUnit</span>(<span class="pureGrammar-functionVariable">type</span>: <span class="pureGrammar-genericType">Unit</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">value</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">type</span>: <span class="pureGrammar-genericType">Unit</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">value</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## not

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">not</span>(<span class="pureGrammar-functionVariable">bool</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">bool</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## now

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">now</span>(): <span class="pureGrammar-genericType">DateTime</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">



</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">DateTime</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## or

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">or</span>(<span class="pureGrammar-functionVariable">first</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">second</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">first</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">second</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">or</span>(<span class="pureGrammar-functionVariable">vals</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">vals</span>: <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## orElse

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">orElse</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">maybe</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">dflt</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">maybe</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">dflt</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## parseBoolean

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">parseBoolean</span>(<span class="pureGrammar-functionVariable">string</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">string</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## parseDate

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">parseDate</span>(<span class="pureGrammar-functionVariable">string</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">string</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## parseDecimal

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">parseDecimal</span>(<span class="pureGrammar-functionVariable">string</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">string</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## parseFloat

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">parseFloat</span>(<span class="pureGrammar-functionVariable">string</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">string</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## parseInteger

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">parseInteger</span>(<span class="pureGrammar-functionVariable">string</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">string</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## plus

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">plus</span>(<span class="pureGrammar-functionVariable">ints</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">ints</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">plus</span>(<span class="pureGrammar-functionVariable">decimal</span>: <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">decimal</span>: <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">plus</span>(<span class="pureGrammar-functionVariable">numbers</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">numbers</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">plus</span>(<span class="pureGrammar-functionVariable">float</span>: <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">float</span>: <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">plus</span>(<span class="pureGrammar-functionVariable">strings</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">strings</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## previousDayOfWeek

<div class="pureGrammar-function"><div class="pureGrammar-functionDoc">Returns the most recent instance of the given day of the week that is strictly before today.</div>

<div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">previousDayOfWeek</span>(<span class="pureGrammar-functionVariable">day</span>: <span class="pureGrammar-genericType">DayOfWeek</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">day</span>: <span class="pureGrammar-genericType">DayOfWeek</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionDoc">Returns the most recent instance of the given day of the week that is strictly before the given date.</div>

<div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">previousDayOfWeek</span>(<span class="pureGrammar-functionVariable">date</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">day</span>: <span class="pureGrammar-genericType">DayOfWeek</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">date</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">day</span>: <span class="pureGrammar-genericType">DayOfWeek</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## quarterNumber

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">quarterNumber</span>(<span class="pureGrammar-functionVariable">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## range

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">range</span>(<span class="pureGrammar-functionVariable">stop</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">stop</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">range</span>(<span class="pureGrammar-functionVariable">start</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">stop</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">step</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">start</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">stop</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">step</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">range</span>(<span class="pureGrammar-functionVariable">start</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">stop</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">start</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">stop</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## rem

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">rem</span>(<span class="pureGrammar-functionVariable">dividend</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">divisor</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">dividend</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">divisor</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## removeDuplicates

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">removeDuplicates</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">col</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">col</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">removeDuplicates</span>&#60;T, V&#62;(<span class="pureGrammar-functionVariable">col</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">key</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">eql</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">1</span>],<span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">col</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">key</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">eql</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">1</span>],<span class="pureGrammar-genericType">V</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">removeDuplicates</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">col</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">eql</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>],<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">col</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">eql</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>],<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## removeDuplicatesBy

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">removeDuplicatesBy</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">col</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">key</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">col</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">key</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## replace

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">replace</span>(<span class="pureGrammar-functionVariable">source</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">toReplace</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">replacement</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">source</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">toReplace</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">replacement</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## reverse

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">reverse</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## round

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">round</span>(<span class="pureGrammar-functionVariable">decimal</span>: <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">scale</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">decimal</span>: <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">scale</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">round</span>(<span class="pureGrammar-functionVariable">number</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">number</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## second

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">second</span>(<span class="pureGrammar-functionVariable">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## sin

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">sin</span>(<span class="pureGrammar-functionVariable">number</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">number</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## size

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">size</span>(<span class="pureGrammar-functionVariable">p</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">p</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## slice

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">slice</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">start</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">end</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">start</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">end</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## sort

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">sort</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">col</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">col</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">sort</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">col</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>], <span class="pureGrammar-functionVariable">comp</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>],<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">col</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]
  - <span class="pureGrammar-parameterName">comp</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>],<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">sort</span>&#60;T, U&#62;(<span class="pureGrammar-functionVariable">col</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>], <span class="pureGrammar-functionVariable">key</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">U</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">comp</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">U</span>[<span class="pureGrammar-multiplicity">1</span>],<span class="pureGrammar-genericType">U</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">col</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]
  - <span class="pureGrammar-parameterName">key</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">U</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">comp</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">U</span>[<span class="pureGrammar-multiplicity">1</span>],<span class="pureGrammar-genericType">U</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## sortBy

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">sortBy</span>&#60;T, U&#62;(<span class="pureGrammar-functionVariable">col</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>], <span class="pureGrammar-functionVariable">key</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">U</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">0..1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">col</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]
  - <span class="pureGrammar-parameterName">key</span>: <span class="pureGrammar-genericType">Function&#60;<span class="pureGrammar-genericType">&#123;<span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]-><span class="pureGrammar-genericType">U</span>[<span class="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">m</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## split

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">split</span>(<span class="pureGrammar-functionVariable">str</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">token</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">str</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">token</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## startsWith

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">startsWith</span>(<span class="pureGrammar-functionVariable">source</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">val</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">source</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">val</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Boolean</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

- <span class="pureGrammar-usageLabel">Usage</span>
```
{|Person->getAll()->project({a|$a.firstName->startsWith('tri')}, 'a')}
```

</div>
</div>
</div>

## substring

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">substring</span>(<span class="pureGrammar-functionVariable">str</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">start</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">str</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">start</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">substring</span>(<span class="pureGrammar-functionVariable">str</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">start</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">end</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">str</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">start</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">end</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## tail

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">tail</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## take

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">take</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">count</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">set</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">count</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## times

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">times</span>(<span class="pureGrammar-functionVariable">decimal</span>: <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">decimal</span>: <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">times</span>(<span class="pureGrammar-functionVariable">ints</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">ints</span>: <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">times</span>(<span class="pureGrammar-functionVariable">ints</span>: <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">ints</span>: <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">times</span>(<span class="pureGrammar-functionVariable">numbers</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">numbers</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## toDecimal

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">toDecimal</span>(<span class="pureGrammar-functionVariable">number</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">number</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Decimal</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## toFloat

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">toFloat</span>(<span class="pureGrammar-functionVariable">number</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">number</span>: <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Float</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## toLower

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">toLower</span>(<span class="pureGrammar-functionVariable">source</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">source</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## toOne

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">toOne</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">values</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">values</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## toOneMany

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">toOneMany</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">values</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">values</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## toRepresentation

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">toRepresentation</span>(<span class="pureGrammar-functionVariable">any</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">any</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## toString

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">toString</span>(<span class="pureGrammar-functionVariable">any</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">any</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## toUpper

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">toUpper</span>(<span class="pureGrammar-functionVariable">source</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">source</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## toUpperFirstCharacter

<div class="pureGrammar-function"><div class="pureGrammar-functionDoc">Upper cases the first charater of the provided string</div>

<div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">toUpperFirstCharacter</span>(<span class="pureGrammar-functionVariable">values</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">values</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## today

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">today</span>(): <span class="pureGrammar-genericType">StrictDate</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">



</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">StrictDate</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

- <span class="pureGrammar-usageLabel">Usage</span>
```
{|Trade->getAll()->filter({t|$t.settlementDateTime->datePart() == today()})->project({t|$t.id}, 'tradeId')}
```

</div>
</div>
</div>

## trim

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">trim</span>(<span class="pureGrammar-functionVariable">str</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">str</span>: <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## union

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">union</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">set1</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">set2</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">set1</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">set2</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## unitType

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">unitType</span>(<span class="pureGrammar-functionVariable">unit</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">unit</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">String</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## unitValue

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">unitValue</span>(<span class="pureGrammar-functionVariable">unit</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">unit</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Number</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## weekOfYear

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">weekOfYear</span>(<span class="pureGrammar-functionVariable">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## whenSubType

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">whenSubType</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">source</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>], <span class="pureGrammar-functionVariable">object</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">source</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">&#42;</span>]
  - <span class="pureGrammar-parameterName">object</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">&#42;</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">whenSubType</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">source</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>], <span class="pureGrammar-functionVariable">object</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">0..1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">source</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">1</span>]
  - <span class="pureGrammar-parameterName">object</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">whenSubType</span>&#60;T&#62;(<span class="pureGrammar-functionVariable">source</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">0..1</span>], <span class="pureGrammar-functionVariable">object</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">0..1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">source</span>: <span class="pureGrammar-genericType">Any</span>[<span class="pureGrammar-multiplicity">0..1</span>]
  - <span class="pureGrammar-parameterName">object</span>: <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">T</span>[<span class="pureGrammar-multiplicity">0..1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>

## year

<div class="pureGrammar-function"><div class="pureGrammar-functionSignature"><span class="pureGrammar-functionName">year</span>(<span class="pureGrammar-functionVariable">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]): <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]</div>

<div class="pureGrammar-functionDetails">
<div class="pureGrammar-functionParameters">

- <span class="pureGrammar-parametersLabel">Parameters</span>

  - <span class="pureGrammar-parameterName">d</span>: <span class="pureGrammar-genericType">Date</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionReturns">

- <span class="pureGrammar-returnsLabel">Returns</span>

  - <span class="pureGrammar-genericType">Integer</span>[<span class="pureGrammar-multiplicity">1</span>]

</div>
<div class="pureGrammar-functionUsage">

</div>
</div>
</div>
