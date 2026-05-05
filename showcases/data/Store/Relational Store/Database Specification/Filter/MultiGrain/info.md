---
title: Relational Database Specification with MultiGrainFilter
description: Example of database specification using MultiGrainFilter to filter at multiple grains.
---

A `MultiGrainFilter` is declared exactly like a regular `Filter` but is intended to be applied
through joins at multiple grains of a model. The engine treats it differently when propagating
the filter through related tables: it is pushed down to every related table that exposes the
filtered column (rather than only the table where the filter is declared), which is useful when
the same business filter (e.g. "active records only", "EU region only") must apply consistently
across a fact table and all of its dimensions.

