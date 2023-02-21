---
id: data-modeling-concepts
title: Elements of a Data Model
sidebar_label: Data Modeling
---
Data models allow you to describe your data and data relationships. 

## Class

Classes define a business concept.

[Create a class](../tutorials/studio-create-model.md/#class).

## Property

Properties are components of classes that define the attributes of a business concept. Properties can be both primitives (like strings or integers) or other properties. Use properties in a class to define attributes of the business concept.

[Create a property](../tutorials/studio-create-model.md/#property---non-primitive-data-type).

## Derived property

Derived properties use functions to operate on other attributes in the data model.

[Create a derived property](../tutorials/studio-create-model.md/#derived-property).

## Tagged value

Tagged values allow you to add context to your data model. Tagged values can be added at the class level and at the property level.

[Add a tagged value](../tutorials/studio-create-model.md/#add-a-tagged-value-to-a-class).

## Stereotype

Stereotypes allow you to extend metadata information about a model.

[Create a stereotype](../tutorials/studio-create-model.md/#class-stereotype).


## Enumeration

An enumeration is a model attribute that has a finite list of values.

[Create an enumeration](../tutorials/studio-create-model.md/#enumeration).

## Constraint

A data model has built-in governance features, called _data quality controls_. You create data quality controls every time you define a model. Constraints are governance tools added on top of quality controls. Use constraints to define a validation or condition on the model that's expected to be met.

[Add a constraint](../tutorials/studio-create-model.md/#constraint).

## Super type

Super types show a relationship between classes or business concepts within a model. Add a super type to the model to show a hierarchical relationship between classes or business concepts. 

[Create a super type](../tutorials/studio-create-model.md/#supertype).

## Data Types 
_COMING SOON_
