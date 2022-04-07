---
id: create-model-to-model-mapping
title: Create model-to-model mapping
sidebar_label: Create model-to-model mapping
---

Create a model transformation using model-to-model mappings. Model transformations are used to connect different models.

## Create a Mapping between source and target class

Let's start by defining the target class, for which we would like to create the mapping for.

1. Create a new class called `NewPerson`.
2. Add a property to `NewPerson` called **name**. Make the property a string with a [cardinality](../language/legend-language.md#class) of 1.
3. Let's also add a property to our existing `Person` class called **lastName**. Make the property a string with a [cardinality](../language/legend-language.md#class) of 1.
4. Click the **+** icon and select **New Mapping** to create a new mapping called **NewPersonMapping**.  
5. Drag and drop the **NewPerson** target class into the **Add a mapping element** section on the left.
6. Hit the **create** button using the default setting. 

Let's define the source class for our mapping and specifiy the transformation.

7. Drag and drop the  `Person` source class into the **choose a source** section on the right.
8. To specify the transformation add the following expression for the **name** property: `$src.firstName + ' ' + $src.lastName`. You can also drag and drop the **firstName** and **lastName** properties from the `Person` source class into the function panel.

![Create model-to-model](../assets/create-M2M.gif)

## Add a Mapping Test

It is good practice to add test to any mapping that you specifiy. Let's create one.

1. Right click on the `NewPerson` class and select **Test**. Alternatively, you can click on the **+** icon in the bottom left panel to add a test.

We now need to create a sample query to test if our model-to-model mapping executes correctly.

2. Click on the **pencil** icon to edit your query.
3. Let's create a very simple query. First, let's make sure to select the **Graph Fetch** option for model-to-model queries. Studio does not currently support Projection queries on top of model-to-model mappings. Let's drag and drop the **name** property from the explorer panel into the fetch structure panel. 
4. Hit the **Save Query** button. 

*Please refer to our create a query section of the docs for more detailed information about the **Query Editor** (coming soon!).*

Studio is generating sample input data for your defined query. You can also modify it if you want.

5. Hit the **generate Result** icon.
6. Congrats! You now have a mapping test and can run it any time to validate the execution of your model-to-model mapping.

## Execute a Model-to-Model Mapping

You can also execute a model-to-model mapping directly. 

1. Right click on the `NewPerson` class and select **Execute**
2. Create a sample query by clicking on the **pencil** icon. 
3. Drag and drop the **name** property from the explorer panel into the fetch structure panel.
4. Select **Check graph fetch**
5. Hit the **Save Query** button
6. Hit the **Execute button** to execute the defined query using the auto-generated data from Studio

You can promote this ad hoc execution to a test by clicking on the **beaker** icon.

### Execute a Model-to-Model Mapping with Constraints

Remember that we can add a [constraint](../studio/create-data-model#add-a-constraint) on classes? We can can also execute model-to-model mappings with constraints to check if the constraint criteria are violated.

Let's create a constraint on the `NewPerson` class that checksq if the name value is empty `$this.name-> == ''`

1. Right click on the `NewPerson` class and select **Execute**
2. Create a sample query by clicking on the **pencil** icon
3. Drag and drop the **name** property from the explorer panel into the fetch structure panel
4. Select **Check graph fetch**
5. Hit the **Save Query** button
6. Let's remove the **firstName** test data to intentionally violate the constraint criteria that we specified on our `NewPerson` class
7. Hit the **Execute button** to execute the defined query

Studio will show a **defect** with the details about the violated constraint. Constraints can be both on source and target class.