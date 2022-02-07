---
id: add-property
title: Add a property
sidebar_label: Add a property
---

## Create a Profile

Capture additional information (metadata) about the data model by creating a Profile. Profiles store and manage tagged values and stereotypes.

1. Click the **+** icon.

2. Click **New Profile**.

### Create a tagged value

Use tagged values to add context to your data model. For example, we can add the tagged value `alias` to our `Firm` class to make it easier for others to navigate our data model.

1. In the Profile editor, go to the **Tags** tab and click the **+** icon.

2. Type in `alias`.

### Add a tagged value to a class

1. Select the `Firm` class

2. Go to the **Tagged Values** tab

3. Drag and drop the **Profile** element into the Tagged Value tab OR hit the **+** icon.

4. Select `alias`.

5. Type in `Organization`.

The `Firm` class now shows the additional context.

### Create a stereotype

Use stereotypes to extend metadata information about a model. For example, you can annotate your model with labels like *legacy* or *deprecated*.

1. In the Profile editor, go to the **Stereotypes** tab and click the **+** icon.

2. Type in `deprecated`.

### Add a stereotype to a class

1. Select the `Firm` class

2. Go to the **Stereoptypes** tab

3. Drag and drop the **Profile** element into the Stereotypes tab OR hit the **+** icon.

4. Select `deprecated`.

The `Firm` class now shows the additional metadata information.

![add profile](../assets/add-profile.gif)

## Next steps

- [Execute a model-to-model mapping](execute-model-to-model-mapping.md)
- [Review and commit changes](review-and-commit-changes.md)
- [Language](../language/legend-language.md)
