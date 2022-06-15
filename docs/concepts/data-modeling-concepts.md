---
id: data-modeling-concepts
title: Elements of a Data Model
sidebar_label: Data Modeling Concepts
---

Data models allow you to describe your data and data relationships. 

## Classes

Classes define a business concept.

## Properties

Properties are components of classes that define the attributes of a business concept. Properties can be both primitives (like strings or integers) or other properties. Use properties in a class to define attributes of the business concept.

## Derived properties

Derived properties use functions to operate on other attributes in the data model.

## Tagged values

Tagged values allow you to add context to your data model. Tagged values can be added at the class level and at the property level.

## Stereotypes

Stereotypes allow you to extend metadata information about a model.

## Enumeration
An enumeration is a model attribute that has a finite list of values.

## Constraints

A data model has built-in governance features, called _data quality controls_. You create data quality controls every time you define a model. Constraints are governance tools added on top of quality controls. Use constraints to define a validation or condition on the model that's expected to be met.

Quality controls can be used to monitor all sorts of data qualities, such as:
- **Type**: ensures that the data is in the form of a string, integer, date, or other data type.
- **Multiplicity**: ensures that there are zero, one, many, or few instances of a certain piece of data.
- **Enumeration**: validates whether data entries are found in a pre-defined list (for exmaple, all U.S. states like NY, CT, NJ)
- **Other criteria**: for instance, that the name length is greater than two characters.

Constraints don't block data - they only raise exceptions.

## Quality controls

Quality controls are added onto properties. Properties are attributes of classes. For example, if you have a class called "Name", you might have two properties called "firstName" and "lastName"

## Super types

Super types show a relationship between classes or business concepts within a model. Add a super type to the model to show a hierarchical relationship between classes or business concepts. 

## Functions

Functions are used to derive new values from existing values using various operations. 

## Data Types 
_COMING SOON_
