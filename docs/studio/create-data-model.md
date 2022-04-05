---
id: create-data-model
title: Create a data model
sidebar_label: Create a data model
---

Use data models to describe your data and data relationships.

## Define a new model package

Create a package to start defining model hierarchies to group models into logical concepts.

1. Click the **+** icon next on the top left corner to add a new Element.
2. Click **New package** to start a model hierarchy. Let's call this package **demo**.

![create package](../assets/create-hierarchy.gif)
## Define a new class

Use classes to define a business concept.

1. Click the **+** icon (make sure your **demo** package is selected).
2. Click **New Class**.

    Let's create 2 classes. One that is called `Person` and another one that is called `Firm`.

    Studio displays a visualization of the class and a tabbed list of the possible model enrichments.

![create class](../assets/create-class.gif)
## Add a property (primitive data type)

Use properties in a class to define attributes of the business concept.

1. Select the `Person` and `Firm` class respectively.
2. Go to the **Properties** tab and click the **+** icon.
3. Type in the name of your property and specify the [data type](../language/legend-language.md#primitive-types) and [cardinality](../language/legend-language.md#class).

    For our `Person` class, let's create a property called `firstName` of type `String` with [cardinality](../language/legend-language.md#class) of 1. Let's add the property `id` of type `String` with the [cardinality](../language/legend-language.md#class) of 1 in our `Firm` class.

![add property](../assets/add-property.gif)
## Add a derived property

Derived properties are properties using functions that can operate on other attributes in the data model.

1. Select the `Person` class.
2. Go to the **Derived Properties** tab and click the **+** icon.
3. Type in the name of your property and specify the [data type](../language/legend-language.md#primitive-types) and [cardinality](../language/legend-language.md#class).
4. Type in the expression.

    Let's add a derived property called `firstNameCount` using the following expression: `$this.firstName->count()`.

4. Select a return [data type](../language/legend-language.md#primitive-types) of `Integer` and [cardinality](../language/legend-language.md#class) of 1.
5. Press **F9** to compile the expression.

![add derived property](../assets/add-derived-property2.gif)

## Add a constraint

Use constraints to define a validation or condition on the model that's expected to be met.

1. Select the `Person` class.
2. Go to the **Constraints** tab and click the **+** icon.
3. Type in a name for the constraint and the expression.  

    Let's add a constraint called `firstNameNotEmpty` using the following expression: `$this.firstName->isNotEmpty()`.

3. Press **F9** to compile the expression.

![add constraint](../assets/add-constraint2.gif)

## Create a Profile

Capture additional information (metadata) about the data model by creating a Profile. Profiles store and manage tagged values and stereotypes.

1. Click the **+** icon.

2. Click **New Profile**.
### Create a tag in your Profile

Use tagged values to add context to your data model. For example, we can add the tagged value **alias** to our `Firm` class to make it easier for others to navigate our data model.

1. In the Profile editor, go to the **Tags** tab and click the **+** icon.

2. Type in `alias`.

### Add a tagged value to a class

1. Select the `Firm` class

2. Go to the **Tagged Values** tab

3. Drag and drop the **Profile** element into the Tagged Value tab OR hit the **+** icon.

4. Select **alias**.

5. Type in **Organization**.

The `Firm` class now shows the additional context.

### Create a stereotype in your Profile

Use stereotypes to extend metadata information about a model. For example, you can annotate your model with labels like *legacy* or *deprecated*.

1. In the Profile editor, go to the **Stereotypes** tab and click the **+** icon.

2. Type in **deprecated**.

### Add a stereotype to a class

1. Select the `Firm` class

2. Go to the **Stereoptypes** tab

3. Drag and drop the **Profile** element into the Stereotypes tab OR hit the **+** icon.

4. Select **deprecated**.

The `Firm` class now shows the additional metadata information.

![add profile](../assets/create-a-profile.gif)

## Create and add an enumeration

A model attribute that has a finite list of values can be defined with an enumeration.

1. Click the **+** icon on the left-hand side and select **Add an enumeration**.
2. Let's create an enumeration called **CompanyType** with the values **LLC** and **Corporation**.
3. Let's navigate back to our `Firm` class and add a property named **firmType**.
4. Select **CompanyType** for the property type and a [cardinality](../language/legend-language.md#class) of 1.

    ![Select property type and cardinality](../assets/add-enum.GIF)

## Add a super type

Add a Super Type to the model to show a hierarchical relationship between classes or business concepts. 

Let's create a new class called `LegalEntity`. 

1. Moving back to the `Firm` class, go to the **Super Types** tab and click the **+** icon.
2. Select the `LegalEntity` class from the dropdown.

    The model visualization on the left now shows the **LegalEntity** class as a super type of **Firm**.

    ![Add a super type](../assets/add-super-type.GIF)

## Add a property (non-primitive data type)

Create a relationship between the **Person** and **Firm** classes.

1. Select the `Firm` class, 
2. Create property with the following values:
    - Name: **employees**
    - Type: **Person**
    - Cardinality: **0..**

![Add a super type](../assets/add-non-primitive-data-type.GIF)