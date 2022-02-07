---
id: add-property
title: Add a property
sidebar_label: Add a property
---

## Add a derived property

Derived properties are properties defined using functions that can operate on other attributes in the data model.

1. Go to the **Derived Properties** tab and click the **+** icon.
2. Type in the name of your property and specify the [data type](../language/legend-language.md#primitive-types) and [cardinality](../language/legend-language.md#class).
3. Type in the expression.

    Let's add a derived property called `employeeCount` using the following expression: `$this.employees->count()`.

4. Select a return [data type](../language/legend-language.md#primitive-types) of `Integer` and [cardinality](../language/legend-language.md#class) of 1.
5. Press **F9** to compile the expression.

![add derived property](../assets/add-derived-property.gif)

## Next steps

- [Execute a model-to-model mapping](execute-model-to-model-mapping.md)
- [Review and commit changes](review-and-commit-changes.md)
- [Language](../language/legend-language.md)
