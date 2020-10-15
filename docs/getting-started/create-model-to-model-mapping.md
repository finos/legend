---
id: create-model-to-model-mapping
title: Create model-to-model mapping
sidebar_label: Create model-to-model mapping
---

Create a model transformation using model-to-model mappings. Model transformations are used to connect different models.

1. Add a property to `Person` called `lastName`. Make the property a string with a [cardinality](legend-language.md#class) of 1.
2. Create a new class called `NewPerson`.
3. Add a property to `NewPerson` called `name`. Make the property a string with a [cardinality](legend-language.md#class) of 1.

    ![Create model-to-model mapping](../assets/create-model-to-model-mapping.JPG)

4. Click the **+** icon next to project and select **Add a new mapping** to create a new mapping called **NewPersonMapping**.  

    ![Add new mapping](../assets/add-new-mapping.JPG)

5. Drag and drop the **NewPerson** class into the **Add a mapping element** section.
6. Select a mapping element type of **Pure**.  

    ![Create new mapping](../assets/create-new-mapping.JPG)

7. Click on the **edit** icon and select the **Person** class.

    ![Select the source class](../assets/select-source-class.JPG)

8. Add the following expression for the `name` property: `$src.firstName + ' ' + $src.lastName`.

    ![Add expression to property](../assets/add-expression-to-property.JPG)

9. Review the text view of the mapping:

    ![Text view of the mapping](../assets/text-view-mapping.JPG)

## Next steps

- [Execute a model-to-model mapping](execute-model-to-model-mapping.md)
- [Review and commit changes](review-and-commit-changes.md)
- [Language](legend-language.md)
