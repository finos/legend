---
title: Diagrams - Basic
description: Showcase of a Diagram element rendering classes, properties (associations) and generalizations.
---

A `Diagram` is a packageable element that renders a set of `Class`es, their `Property` /
`Association` links and `Generalization` relationships at fixed positions, allowing the
model to be visualised in Studio. Each placed class is a `classView` with a stable id and
a `position` / `rectangle` (top-left corner and size). Edges are `propertyView` (for
properties or associations) or `generalizationView`, and reference the source / target
`classView` ids plus an optional poly-line `points`.

