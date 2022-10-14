# Overview

This document describes the creation and use of a Legend Studio project.  In this example, we will be doing the following :

* Creating a new Legend Studio project 
* Adding a model to the newly created Stuio project 
* Executing a model to model mapping
* Executing a relational mapping

The instructions below assume a working installation of Legend.

## Creating a new project 

1/ Navigate to the home page. Click on the "+" sign next to "Choose an existing project". See [Screenshot - Homepage ](images/1-homepage.png)

2/ Complete the form and click "Create". See [Screenshot - Create project](images/2a-create-project.png)

3/ A few seconds later the project is created. A Studio project is backed by a Gitlab project. 

You can navigate to your Gitlab instance and find this Gitlab project. See [Screenshot - Gitlab project](images/2b-gitlab-project.png)

4/ Next we create a workspace. A workspace is where models are edited. A workspace is backed by a branch in the corresponding Gitlab project.  

Click on the "+" sign next to "You have no workspaces. Please create one". See [Screenshot - Create workspace](images/4-create-workspace.png)

5/ Once the workspace has been created, click on "Edit workspace" to start creating your Legend model. See [Screenshot - Edit Workspace](images/5-workspace-created.png)

## Adding a model 

1/ The Studio UI provides various UI widgets to create a Legend model. It also provides a "text mode" where the model can be created by directly typing in code in the Pure modeling language. 

To keep this example small, we will copy/paste a complete Legend model using "text mode".

2/ First, switch to "text mode" by hitting "F8". See [Screenshot - Text Mode](images/7-text-mode.png)

Open [Example model](https://raw.githubusercontent.com/epsstan/legend/refactored-installers-v1/installers/docker-compose/example1/model.txt) in a browser and copy the model. (Ctrl+A, Ctrl+C).

Next, paste the model into Studio. (Ctrl+V).

3/ "Compile" the model by hitting "F9". Once compilation completes, the explorer pane on the left has entries for the various model elements that were added.  See [Screenshot - Compilation](images/8-compilation-success.png)

4/ Finally, exit out of text mode by hitting "F8". See [Screenshot - UI Mode](images/9-back-to-ui-mode.png)

## Executing a model to model mapping

A model to model to mapping allows data that conforms to one model to be mapped to another model.

As a concrete example, consider data about employees modelled as follows :

```
[
	{
		"fullName": "John Smith"
	}
]
```

We might want to consume this data, extract the first and last names and model the data as follows :

```
[	{
		"firstName" : "John",
		"lastName": "Smith"
	}
]
```

In Legend, this is accomplished by defining a model for the "source" data, and mapping that to a "target" model. See [Screenshot - Model To Model Mapping](images/10-model-to-model-mapping.png)

Once a mapping has been defined, it can be executed. One way to execute, is to write a test. The test accepts some input test data, runs it through the defined mapping and verifies if the output of the mapping meets the expected output.

Click on "test_1" in the test window and then click on "Run Test" (top right blue button) to execute the test. See [Screenshot - Model To Model Model Mapping Test](images/11-model-to-model-mapping-test.png)

## Executing a relational mapping 

A model to model mapping allows a model to be mapped to another model. A relational mapping allows mapping a model to data stored in a relational database. 

The mapping below shows how the first and last name attributes of the Person model are sourced from the FIRST_NAME and LAST_NAME columns from a PERSON table. See [Screenshot - Model To Relational Mapping](images/12-relational-mapping.png).

And just like a model to model mapping, a relational mapping can be executed by writing a test. In this case, test data can be provided as SQL statements. These are used to populate an in-memory H2 database. See [Screenshot - Model To Relational Mapping Test](images/13-relational-mapping-test.png)

:








