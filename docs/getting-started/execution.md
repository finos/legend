---
id: execution
title: Alloy Execution
sidebar_label: Execution
---

Alloy provides an execution feature to run queries, constraints and model-to-model/model-to-database transformations. 

Use live data (pulled from physical data stores) or generated sample data as inputs to the executions and review the results to to test your model as you build it.  

You can save these tests and continue to enhance your data models with the comfort that your changes can be tested against expected results.  

## Execute a model-to-model mapping

### Execute panel
Drag the panel up from the bottom of the Studio screen.
![](assets/execute_step1.JPG)

### Select the target model
Select the edit button to select the `NewPerson` class for testing.  Then select the attribute(s) to test. The source model is auto populated.

![](assets/execute_step2.JPG)

### Execute the mapping and review the results
![](assets/execute_step3.JPG)

### Promote the execution to a test
Save this exection as a test to be run as part of the pipeline.
![](assets/execute_step4.JPG)

