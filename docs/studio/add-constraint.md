---
id: add-property
title: Add a property
sidebar_label: Add a property
---

## Add a constraint

Use constraints to define a validation or condition on the model that's expected to be met. The return type for a constraint is **Boolean**.  

1. Go to the **Constraints** tab and click the **+** icon.
2. Type in a name for the constraint and the expression.  

    Let's add a constraint called `nameNotEmpty` using the following expression: `$this.name->isNotEmpty()`.

3. Press **F9** to compile the expression.

![add constraint](../assets/add-constraint.gif)


## Next steps

- [Execute a model-to-model mapping](execute-model-to-model-mapping.md)
- [Review and commit changes](review-and-commit-changes.md)
- [Language](../language/legend-language.md)
