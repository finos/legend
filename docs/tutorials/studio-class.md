---
id: studio-class
title: Create a Class
sidebar_label: Class
---

## Class

To create a [class](../overview/legend-glossary.md/#class):

1. Right-click any package on the left side of the panel, or click the `+` near the name of your project.
2. Under `Class view`, you'll see a list of class forms as well as a diagram view of your class. You can add tags, stereotypes, properties, constraints, qualified properties, and super types to your model.

1. Click the <kbd>+</kbd> icon. Make sure the correct package (i.e. **demo**) is selected.
2. Click <kbd>New class</kbd>.

   Let's create 2 classes. One that is called `Person` and another one that is called `Firm`.

   Studio displays a visualization of the class and a tabbed list of the possible model enrichments.

![create class](../assets/create-class.gif)

In the [basic logical modeling](../showcases/showcase-projects.md/#logical-modeling-basic), Account, Product, and Trade are classes.

## Property

Class properties define attributes of a business concept. To create a [property](../overview/legend-glossary.md/#property):

### Property - primitive data type

1. Select the `Person` and `Firm` class respectively.
2. Go to the <kbd>Properties</kbd> tab and click the <kbd>+</kbd> icon.
3. Type in the name of your property and specify the [data type](../reference/legend-language.md#primitive-types) and [cardinality](../reference/legend-language.md#class).

   For our `Person` class, let's create a property called `firstName` of type `String` with [cardinality](../reference/legend-language.md#class) of 1. Let's add the property `id` of type `String` with the [cardinality](../reference/legend-language.md#class) of 1 in our `Firm` class.

![add property](../assets/add-property.gif)

### Property - non-primitive data type

Create a relationship between the **Person** and **Firm** classes.

1. Select the `Firm` class,
2. Create property with the following values:
   - Name: **employees**
   - Type: **Person**
   - Cardinality: **0..**

![Add a super type](../assets/add-non-primitive-data-type.gif)

### Derived property

To create a [derived property](../overview/legend-glossary.md/#derived-property):

1. Select the `Person` class.
2. Go to the <kbd>Derived properties</kbd> tab and click the <kbd>+</kbd> icon.
3. Type in the name of your property and specify the [data type](../reference/legend-language.md#primitive-types) and [cardinality](../reference/legend-language.md#class).
4. Type in the expression.

   Let's add a derived property called `firstNameCount` using the following expression: `$this.firstName->count()`.

5. Select a return [data type](../reference/legend-language.md#primitive-types) of `Integer` and [cardinality](../reference/legend-language.md#class) of 1.
6. Press **F9** to compile the expression.

![add derived property](../assets/add-derived-property2.gif)

### Quality control for properties

#### Type 

_COMING SOON_

#### Multiplicity

_COMING SOON_

#### Enumeration

_COMING SOON_

#### Constraint
_COMING SOON_

## Constraint

To add a [constraint](../overview/legend-glossary.md/#constraint):

1. Select the `Person` class.
2. Go to the <kbd>Constraints</kbd> tab and click the <kbd>+</kbd> icon.
3. Type in a name for the constraint and the expression.

   Let's add a constraint called `firstNameNotEmpty` using the following expression: `$this.firstName->isNotEmpty()`.

4. Press <kbd>F9</kbd> to compile the expression.

![add constraint](../assets/add-constraint2.gif)

#### Model constraint feedback

When typing constraints and qualified properties, you will get immediate parsing feedback. You can compile your code by pressing `F9`.


## More
- [Showcase projects](../showcases/showcase-projects.md)
- [Legend Features](../overview/legend-features.md)
- [Legend Glossary](../overview/legend-glossary.md)
- [Reference documentation](../reference/legend-language.md)
- [Studio tutorials](../tutorials/studio-workspace.md)
- [Query tutorials](../tutorials/query-builder.md)

