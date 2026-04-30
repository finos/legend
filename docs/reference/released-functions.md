---
id: released-functions
title: Released Functions
sidebar_label: Released Functions
---

## abs

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">abs</span>(<span className="pureGrammar-functionVariable">number</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">number</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">abs</span>(<span className="pureGrammar-functionVariable">int</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">int</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

- <span className="pureGrammar-usageLabel">Usage</span>
```
{|Person->getAll()->project({p|$p.firstName}, 'firstName')->groupBy('firstName', 'new'->agg({e|$e}, {y|$y->count()->abs()}))}
```

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">abs</span>(<span className="pureGrammar-functionVariable">float</span>: <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">float</span>: <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">abs</span>(<span className="pureGrammar-functionVariable">decimal</span>: <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">decimal</span>: <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## add

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">add</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">val</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">val</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## adjust

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">adjust</span>(<span className="pureGrammar-functionVariable">date</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">number</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">unit</span>: <span className="pureGrammar-genericType">DurationUnit</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">date</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">number</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">unit</span>: <span className="pureGrammar-genericType">DurationUnit</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## and

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">and</span>(<span className="pureGrammar-functionVariable">first</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">second</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">first</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">second</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">and</span>(<span className="pureGrammar-functionVariable">vals</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">vals</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## assert

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">assert</span>(<span className="pureGrammar-functionVariable">condition</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">formatString</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">formatArgs</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">condition</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">formatString</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">formatArgs</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">assert</span>(<span className="pureGrammar-functionVariable">condition</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">messageFunction</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;-&#62;<span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">condition</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">messageFunction</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;-&#62;<span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">assert</span>(<span className="pureGrammar-functionVariable">condition</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">message</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">condition</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">message</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">assert</span>(<span className="pureGrammar-functionVariable">condition</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">condition</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## at

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">at</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">key</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">key</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## average

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">average</span>(<span className="pureGrammar-functionVariable">numbers</span>: <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">numbers</span>: <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">average</span>(<span className="pureGrammar-functionVariable">numbers</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">numbers</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">average</span>(<span className="pureGrammar-functionVariable">numbers</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">numbers</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## cast

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">cast</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">source</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">m</span>], <span className="pureGrammar-functionVariable">object</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">source</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">m</span>]
  - <span className="pureGrammar-parameterName">object</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## ceiling

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">ceiling</span>(<span className="pureGrammar-functionVariable">number</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">number</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## chunk

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">chunk</span>(<span className="pureGrammar-functionVariable">source</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">val</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">source</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">val</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## compare

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">compare</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">a</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">b</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">a</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">b</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## concatenate

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">concatenate</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">set1</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">set2</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">set1</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">set2</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## contains

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">contains</span>(<span className="pureGrammar-functionVariable">collection</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">value</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">collection</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">value</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">contains</span>(<span className="pureGrammar-functionVariable">source</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">val</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">source</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">val</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## convert

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">convert</span>(<span className="pureGrammar-functionVariable">unit</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">targetUnit</span>: <span className="pureGrammar-genericType">Unit</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">unit</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">targetUnit</span>: <span className="pureGrammar-genericType">Unit</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## cos

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">cos</span>(<span className="pureGrammar-functionVariable">number</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">number</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## count

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">count</span>(<span className="pureGrammar-functionVariable">s</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">s</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## date

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">date</span>(<span className="pureGrammar-functionVariable">year</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">month</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">day</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">hour</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">DateTime</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">year</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">month</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">day</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">hour</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">DateTime</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">date</span>(<span className="pureGrammar-functionVariable">year</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">month</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">day</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">StrictDate</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">year</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">month</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">day</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">StrictDate</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">date</span>(<span className="pureGrammar-functionVariable">year</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">year</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">date</span>(<span className="pureGrammar-functionVariable">year</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">month</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">year</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">month</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">date</span>(<span className="pureGrammar-functionVariable">year</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">month</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">day</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">hour</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">minute</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">DateTime</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">year</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">month</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">day</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">hour</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">minute</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">DateTime</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">date</span>(<span className="pureGrammar-functionVariable">year</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">month</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">day</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">hour</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">minute</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">second</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">DateTime</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">year</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">month</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">day</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">hour</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">minute</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">second</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">DateTime</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## dateDiff

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">dateDiff</span>(<span className="pureGrammar-functionVariable">d1</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">d2</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">du</span>: <span className="pureGrammar-genericType">DurationUnit</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">d1</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">d2</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">du</span>: <span className="pureGrammar-genericType">DurationUnit</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## datePart

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">datePart</span>(<span className="pureGrammar-functionVariable">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## dayOfMonth

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">dayOfMonth</span>(<span className="pureGrammar-functionVariable">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## dayOfWeekNumber

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">dayOfWeekNumber</span>(<span className="pureGrammar-functionVariable">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## distinct

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">distinct</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">s</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">s</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## divide

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">divide</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## drop

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">drop</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">count</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">count</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## endsWith

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">endsWith</span>(<span className="pureGrammar-functionVariable">source</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">val</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">source</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">val</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## enumValues

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">enumValues</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">enum</span>: <span className="pureGrammar-genericType">Enumeration&#60;<span className="pureGrammar-genericType">T</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">enum</span>: <span className="pureGrammar-genericType">Enumeration&#60;<span className="pureGrammar-genericType">T</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## eq

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">eq</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## equal

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">equal</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## exists

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">exists</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">value</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">func</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">value</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">func</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## extractEnumValue

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">extractEnumValue</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">enum</span>: <span className="pureGrammar-genericType">Enumeration&#60;<span className="pureGrammar-genericType">T</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">value</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">enum</span>: <span className="pureGrammar-genericType">Enumeration&#60;<span className="pureGrammar-genericType">T</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">value</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## filter

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">filter</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">value</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">func</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">value</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">func</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## first

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">first</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">0..1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## firstDayOfMonth

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">firstDayOfMonth</span>(<span className="pureGrammar-functionVariable">date</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">date</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## firstDayOfQuarter

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">firstDayOfQuarter</span>(<span className="pureGrammar-functionVariable">date</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">StrictDate</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">date</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">StrictDate</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## firstDayOfThisMonth

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">firstDayOfThisMonth</span>(): <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">



</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## firstDayOfThisQuarter

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">firstDayOfThisQuarter</span>(): <span className="pureGrammar-genericType">StrictDate</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">



</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">StrictDate</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## firstDayOfThisYear

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">firstDayOfThisYear</span>(): <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">



</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## firstDayOfWeek

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">firstDayOfWeek</span>(<span className="pureGrammar-functionVariable">date</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">date</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## firstDayOfYear

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">firstDayOfYear</span>(<span className="pureGrammar-functionVariable">date</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">date</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## floor

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">floor</span>(<span className="pureGrammar-functionVariable">number</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">number</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## fold

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">fold</span>&#60;T, V&#62;(<span className="pureGrammar-functionVariable">value</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">func</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>],<span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">m</span>]-><span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">m</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">accumulator</span>: <span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">m</span>]): <span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">m</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">value</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">func</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>],<span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">m</span>]-><span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">m</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">accumulator</span>: <span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">m</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">m</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## forAll

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">forAll</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">value</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">func</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">value</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">func</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## format

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">format</span>(<span className="pureGrammar-functionVariable">format</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">args</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">format</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">args</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## generateGuid

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">generateGuid</span>(): <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">



</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## greaterThan

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## greaterThanEqual

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">greaterThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## hasDay

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">hasDay</span>(<span className="pureGrammar-functionVariable">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## hasHour

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">hasHour</span>(<span className="pureGrammar-functionVariable">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## hasMinute

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">hasMinute</span>(<span className="pureGrammar-functionVariable">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## hasMonth

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">hasMonth</span>(<span className="pureGrammar-functionVariable">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## hasSecond

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">hasSecond</span>(<span className="pureGrammar-functionVariable">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## hasSubsecond

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">hasSubsecond</span>(<span className="pureGrammar-functionVariable">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## hasSubsecondWithAtLeastPrecision

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">hasSubsecondWithAtLeastPrecision</span>(<span className="pureGrammar-functionVariable">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">minPrecision</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">minPrecision</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## hasYear

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">hasYear</span>(<span className="pureGrammar-functionVariable">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## hour

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">hour</span>(<span className="pureGrammar-functionVariable">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## id

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">id</span>(<span className="pureGrammar-functionVariable">instance</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">instance</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## if

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">if</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">test</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">valid</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;-&#62;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">invalid</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;-&#62;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">test</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">valid</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;-&#62;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">invalid</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;-&#62;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## in

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">in</span>(<span className="pureGrammar-functionVariable">value</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">collection</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">value</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">collection</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">in</span>(<span className="pureGrammar-functionVariable">value</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">collection</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">value</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">collection</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## indexOf

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">indexOf</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">value</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">value</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">indexOf</span>(<span className="pureGrammar-functionVariable">str</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">toFind</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">fromIndex</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">str</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">toFind</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">fromIndex</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">indexOf</span>(<span className="pureGrammar-functionVariable">str</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">toFind</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">str</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">toFind</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## init

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">init</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## instanceOf

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">instanceOf</span>(<span className="pureGrammar-functionVariable">instance</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">type</span>: <span className="pureGrammar-genericType">Type</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">instance</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">type</span>: <span className="pureGrammar-genericType">Type</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## is

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">is</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## isDistinct

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">isDistinct</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">collection</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">graphFetchTree</span>: <span className="pureGrammar-genericType">RootGraphFetchTree&#60;<span className="pureGrammar-genericType">T</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">collection</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">graphFetchTree</span>: <span className="pureGrammar-genericType">RootGraphFetchTree&#60;<span className="pureGrammar-genericType">T</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">isDistinct</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## isEmpty

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">isEmpty</span>(<span className="pureGrammar-functionVariable">p</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">p</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">isEmpty</span>(<span className="pureGrammar-functionVariable">p</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">p</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## isEqual

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">isEqual</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">c1</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">c2</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">graphFetchTree</span>: <span className="pureGrammar-genericType">RootGraphFetchTree&#60;<span className="pureGrammar-genericType">T</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">c1</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">c2</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">graphFetchTree</span>: <span className="pureGrammar-genericType">RootGraphFetchTree&#60;<span className="pureGrammar-genericType">T</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## isNotEmpty

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">isNotEmpty</span>(<span className="pureGrammar-functionVariable">p</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">p</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">isNotEmpty</span>(<span className="pureGrammar-functionVariable">p</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">p</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## joinStrings

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">joinStrings</span>(<span className="pureGrammar-functionVariable">strings</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">prefix</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">separator</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">suffix</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">strings</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">prefix</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">separator</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">suffix</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">joinStrings</span>(<span className="pureGrammar-functionVariable">strings</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">separator</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">strings</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">separator</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

- <span className="pureGrammar-usageLabel">Usage</span>
```
{|Firm->getAll()->groupBy({f|$f.legalName}, {x|$x.employees->map({v_automap|$v_automap.firstName})}->agg({y|$y->joinStrings('*')}), ['legalName', 'employeesFirstName'])}
```

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">joinStrings</span>(<span className="pureGrammar-functionVariable">strings</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">strings</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## last

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">last</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">0..1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## length

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">length</span>(<span className="pureGrammar-functionVariable">str</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">str</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## lessThan

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThan</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## lessThanEqual

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">lessThanEqual</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## letFunction

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">letFunction</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## limit

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">limit</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">count</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">count</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## map

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">map</span>&#60;T, V&#62;(<span className="pureGrammar-functionVariable">value</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">func</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">&#42;</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">value</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">func</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">&#42;</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">map</span>&#60;T, V&#62;(<span className="pureGrammar-functionVariable">value</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">func</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">0..1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">0..1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">value</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">func</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">0..1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">map</span>&#60;T, V&#62;(<span className="pureGrammar-functionVariable">value</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>], <span className="pureGrammar-functionVariable">func</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">m</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">value</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]
  - <span className="pureGrammar-parameterName">func</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">m</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## match

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">match</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">var</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">functions</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">Nil</span>[<span className="pureGrammar-multiplicity">n</span>]-><span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">var</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">functions</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">Nil</span>[<span className="pureGrammar-multiplicity">n</span>]-><span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## matches

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">matches</span>(<span className="pureGrammar-functionVariable">string</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">regexp</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">string</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">regexp</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## max

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">max</span>(<span className="pureGrammar-functionVariable">ints</span>: <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]): <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">ints</span>: <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">max</span>(<span className="pureGrammar-functionVariable">numbers</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]): <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">numbers</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">max</span>(<span className="pureGrammar-functionVariable">ints</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">ints</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">max</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">max</span>(<span className="pureGrammar-functionVariable">ints</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">0..1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">ints</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">max</span>(<span className="pureGrammar-functionVariable">numbers</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">numbers</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">max</span>(<span className="pureGrammar-functionVariable">ints</span>: <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">0..1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">ints</span>: <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## min

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">min</span>(<span className="pureGrammar-functionVariable">ints</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">0..1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">ints</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">min</span>(<span className="pureGrammar-functionVariable">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">left</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">right</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">min</span>(<span className="pureGrammar-functionVariable">ints</span>: <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]): <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">ints</span>: <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">min</span>(<span className="pureGrammar-functionVariable">numbers</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">numbers</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">min</span>(<span className="pureGrammar-functionVariable">ints</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">ints</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">min</span>(<span className="pureGrammar-functionVariable">ints</span>: <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">0..1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">ints</span>: <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">min</span>(<span className="pureGrammar-functionVariable">numbers</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]): <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">numbers</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## minus

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">minus</span>(<span className="pureGrammar-functionVariable">ints</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">ints</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">minus</span>(<span className="pureGrammar-functionVariable">float</span>: <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">float</span>: <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">minus</span>(<span className="pureGrammar-functionVariable">decimal</span>: <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">decimal</span>: <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">minus</span>(<span className="pureGrammar-functionVariable">numbers</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">numbers</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## minute

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">minute</span>(<span className="pureGrammar-functionVariable">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## monthNumber

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">monthNumber</span>(<span className="pureGrammar-functionVariable">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## mostRecentDayOfWeek

<div className="pureGrammar-function"><div className="pureGrammar-functionDoc">Returns the most recent instance of the given day of the week that is no later than the given date.</div>

<div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">mostRecentDayOfWeek</span>(<span className="pureGrammar-functionVariable">date</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">day</span>: <span className="pureGrammar-genericType">DayOfWeek</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">date</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">day</span>: <span className="pureGrammar-genericType">DayOfWeek</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionDoc">Returns the most recent instance of the given day of the week that is no later than today.</div>

<div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">mostRecentDayOfWeek</span>(<span className="pureGrammar-functionVariable">day</span>: <span className="pureGrammar-genericType">DayOfWeek</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">day</span>: <span className="pureGrammar-genericType">DayOfWeek</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## new

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">new</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">class</span>: <span className="pureGrammar-genericType">Class&#60;<span className="pureGrammar-genericType">T</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">id</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">keyExpressions</span>: <span className="pureGrammar-genericType">KeyExpression</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">class</span>: <span className="pureGrammar-genericType">Class&#60;<span className="pureGrammar-genericType">T</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">id</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">keyExpressions</span>: <span className="pureGrammar-genericType">KeyExpression</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## newUnit

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">newUnit</span>(<span className="pureGrammar-functionVariable">type</span>: <span className="pureGrammar-genericType">Unit</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">value</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">type</span>: <span className="pureGrammar-genericType">Unit</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">value</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## not

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">not</span>(<span className="pureGrammar-functionVariable">bool</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">bool</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## now

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">now</span>(): <span className="pureGrammar-genericType">DateTime</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">



</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">DateTime</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## or

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">or</span>(<span className="pureGrammar-functionVariable">first</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">second</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">first</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">second</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">or</span>(<span className="pureGrammar-functionVariable">vals</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">vals</span>: <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## orElse

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">orElse</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">maybe</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">dflt</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">maybe</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">dflt</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## parseBoolean

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">parseBoolean</span>(<span className="pureGrammar-functionVariable">string</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">string</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## parseDate

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">parseDate</span>(<span className="pureGrammar-functionVariable">string</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">string</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## parseDecimal

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">parseDecimal</span>(<span className="pureGrammar-functionVariable">string</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">string</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## parseFloat

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">parseFloat</span>(<span className="pureGrammar-functionVariable">string</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">string</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## parseInteger

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">parseInteger</span>(<span className="pureGrammar-functionVariable">string</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">string</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## plus

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">plus</span>(<span className="pureGrammar-functionVariable">ints</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">ints</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">plus</span>(<span className="pureGrammar-functionVariable">decimal</span>: <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">decimal</span>: <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">plus</span>(<span className="pureGrammar-functionVariable">numbers</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">numbers</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">plus</span>(<span className="pureGrammar-functionVariable">float</span>: <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">float</span>: <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">plus</span>(<span className="pureGrammar-functionVariable">strings</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">strings</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## previousDayOfWeek

<div className="pureGrammar-function"><div className="pureGrammar-functionDoc">Returns the most recent instance of the given day of the week that is strictly before today.</div>

<div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">previousDayOfWeek</span>(<span className="pureGrammar-functionVariable">day</span>: <span className="pureGrammar-genericType">DayOfWeek</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">day</span>: <span className="pureGrammar-genericType">DayOfWeek</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionDoc">Returns the most recent instance of the given day of the week that is strictly before the given date.</div>

<div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">previousDayOfWeek</span>(<span className="pureGrammar-functionVariable">date</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">day</span>: <span className="pureGrammar-genericType">DayOfWeek</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">date</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">day</span>: <span className="pureGrammar-genericType">DayOfWeek</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## quarterNumber

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">quarterNumber</span>(<span className="pureGrammar-functionVariable">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## range

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">range</span>(<span className="pureGrammar-functionVariable">stop</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">stop</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">range</span>(<span className="pureGrammar-functionVariable">start</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">stop</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">step</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">start</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">stop</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">step</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">range</span>(<span className="pureGrammar-functionVariable">start</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">stop</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">start</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">stop</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## rem

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">rem</span>(<span className="pureGrammar-functionVariable">dividend</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">divisor</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">dividend</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">divisor</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## removeDuplicates

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">removeDuplicates</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">col</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">col</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">removeDuplicates</span>&#60;T, V&#62;(<span className="pureGrammar-functionVariable">col</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">key</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">eql</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">1</span>],<span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">col</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">key</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">eql</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">1</span>],<span className="pureGrammar-genericType">V</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">removeDuplicates</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">col</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">eql</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>],<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">col</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">eql</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>],<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## removeDuplicatesBy

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">removeDuplicatesBy</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">col</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">key</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">col</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">key</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## replace

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">replace</span>(<span className="pureGrammar-functionVariable">source</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">toReplace</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">replacement</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">source</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">toReplace</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">replacement</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## reverse

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">reverse</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## round

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">round</span>(<span className="pureGrammar-functionVariable">decimal</span>: <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">scale</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">decimal</span>: <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">scale</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">round</span>(<span className="pureGrammar-functionVariable">number</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">number</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## second

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">second</span>(<span className="pureGrammar-functionVariable">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## sin

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">sin</span>(<span className="pureGrammar-functionVariable">number</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">number</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## size

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">size</span>(<span className="pureGrammar-functionVariable">p</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">p</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## slice

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">slice</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">start</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">end</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">start</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">end</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## sort

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">sort</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">col</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">col</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">sort</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">col</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>], <span className="pureGrammar-functionVariable">comp</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>],<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">col</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]
  - <span className="pureGrammar-parameterName">comp</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>],<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">sort</span>&#60;T, U&#62;(<span className="pureGrammar-functionVariable">col</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>], <span className="pureGrammar-functionVariable">key</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">U</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">comp</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">U</span>[<span className="pureGrammar-multiplicity">1</span>],<span className="pureGrammar-genericType">U</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">col</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]
  - <span className="pureGrammar-parameterName">key</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">U</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">comp</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">U</span>[<span className="pureGrammar-multiplicity">1</span>],<span className="pureGrammar-genericType">U</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## sortBy

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">sortBy</span>&#60;T, U&#62;(<span className="pureGrammar-functionVariable">col</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>], <span className="pureGrammar-functionVariable">key</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">U</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">0..1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">col</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]
  - <span className="pureGrammar-parameterName">key</span>: <span className="pureGrammar-genericType">Function&#60;<span className="pureGrammar-genericType">&#123;<span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]-><span className="pureGrammar-genericType">U</span>[<span className="pureGrammar-multiplicity">1</span>]&#125;</span>&#60;</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">m</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## split

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">split</span>(<span className="pureGrammar-functionVariable">str</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">token</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">str</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">token</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## startsWith

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">startsWith</span>(<span className="pureGrammar-functionVariable">source</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">val</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">source</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">val</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Boolean</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

- <span className="pureGrammar-usageLabel">Usage</span>
```
{|Person->getAll()->project({a|$a.firstName->startsWith('tri')}, 'a')}
```

</div>
</div>
</div>

## substring

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">substring</span>(<span className="pureGrammar-functionVariable">str</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">start</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">str</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">start</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">substring</span>(<span className="pureGrammar-functionVariable">str</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">start</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">end</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">str</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">start</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">end</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## tail

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">tail</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## take

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">take</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">count</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">set</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">count</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## times

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">times</span>(<span className="pureGrammar-functionVariable">decimal</span>: <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">decimal</span>: <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">times</span>(<span className="pureGrammar-functionVariable">ints</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">ints</span>: <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">times</span>(<span className="pureGrammar-functionVariable">ints</span>: <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">ints</span>: <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">times</span>(<span className="pureGrammar-functionVariable">numbers</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">numbers</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## toDecimal

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">toDecimal</span>(<span className="pureGrammar-functionVariable">number</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">number</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Decimal</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## toFloat

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">toFloat</span>(<span className="pureGrammar-functionVariable">number</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">number</span>: <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Float</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## toLower

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">toLower</span>(<span className="pureGrammar-functionVariable">source</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">source</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## toOne

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">toOne</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">values</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">values</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## toOneMany

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">toOneMany</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">values</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">values</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1..&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## toRepresentation

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">toRepresentation</span>(<span className="pureGrammar-functionVariable">any</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">any</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## toString

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">toString</span>(<span className="pureGrammar-functionVariable">any</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">any</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## toUpper

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">toUpper</span>(<span className="pureGrammar-functionVariable">source</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">source</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## toUpperFirstCharacter

<div className="pureGrammar-function"><div className="pureGrammar-functionDoc">Upper cases the first charater of the provided string</div>

<div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">toUpperFirstCharacter</span>(<span className="pureGrammar-functionVariable">values</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">values</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## today

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">today</span>(): <span className="pureGrammar-genericType">StrictDate</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">



</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">StrictDate</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

- <span className="pureGrammar-usageLabel">Usage</span>
```
{|Trade->getAll()->filter({t|$t.settlementDateTime->datePart() == today()})->project({t|$t.id}, 'tradeId')}
```

</div>
</div>
</div>

## trim

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">trim</span>(<span className="pureGrammar-functionVariable">str</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">str</span>: <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## union

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">union</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">set1</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">set2</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">set1</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">set2</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## unitType

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">unitType</span>(<span className="pureGrammar-functionVariable">unit</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">unit</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">String</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## unitValue

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">unitValue</span>(<span className="pureGrammar-functionVariable">unit</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">unit</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Number</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## weekOfYear

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">weekOfYear</span>(<span className="pureGrammar-functionVariable">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## whenSubType

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">whenSubType</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">source</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>], <span className="pureGrammar-functionVariable">object</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">source</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">&#42;</span>]
  - <span className="pureGrammar-parameterName">object</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">&#42;</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">whenSubType</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">source</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>], <span className="pureGrammar-functionVariable">object</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">0..1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">source</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">1</span>]
  - <span className="pureGrammar-parameterName">object</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">whenSubType</span>&#60;T&#62;(<span className="pureGrammar-functionVariable">source</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">0..1</span>], <span className="pureGrammar-functionVariable">object</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">0..1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">source</span>: <span className="pureGrammar-genericType">Any</span>[<span className="pureGrammar-multiplicity">0..1</span>]
  - <span className="pureGrammar-parameterName">object</span>: <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">T</span>[<span className="pureGrammar-multiplicity">0..1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## year

<div className="pureGrammar-function"><div className="pureGrammar-functionSignature"><span className="pureGrammar-functionName">year</span>(<span className="pureGrammar-functionVariable">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]): <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]</div>

<div className="pureGrammar-functionDetails">
<div className="pureGrammar-functionParameters">

- <span className="pureGrammar-parametersLabel">Parameters</span>

  - <span className="pureGrammar-parameterName">d</span>: <span className="pureGrammar-genericType">Date</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionReturns">

- <span className="pureGrammar-returnsLabel">Returns</span>

  - <span className="pureGrammar-genericType">Integer</span>[<span className="pureGrammar-multiplicity">1</span>]

</div>
<div className="pureGrammar-functionUsage">

</div>
</div>
</div>

## More
- [Showcase projects](../showcases/showcase-projects.md)
- [Legend features](../overview/legend-features.md)
- [Legend glossary](../overview/legend-glossary.md)
- [User journeys](../user-journeys/build-data-model.md)
- [Studio tutorials](../tutorials/studio-workspace.md)
- [Query tutorials](../tutorials/query-builder.md)
- [Contribute to Legend](../community/contribute-to-legend.md)
