---
id: studio-mapping-test
title: Mapping Tests
sidebar_label: Mapping Tests
---

## Sample Grammar 
Click [here](..\assets\mapping-test\showcase-grammar.pure) for sample grammar for model to model mapping test.

## Walkthrough 

Model To Model Mapping Test Walkthrough

![Mapping Test - Suite Tab](..\assets\mapping-test\mapping-test-model-to-model-walkthrough.gif)

## Step by Step (Model To Model)


After defining your transformation from a source (relational/service store/model) to a model through a Mapping, you can create Mapping Test Suites to ensure your transformations are what you expected. This will help in ensuring expected results remain the same with incoming model and mapping changes.

Mapping Test Suites have been added to another tab in the mapping editor.

![Mapping Test - Suite Tab](..\assets\mapping-test\mapping-test-model-to-model-1-testing-tab.JPG)


![Mapping Test - Create Suite](..\assets\mapping-test\mapping-test-model-to-model-2-create-suite.JPG)

When creating a mapping suite, you will need to provide a suite name, the first test name and what mapped model you want to add a suite for.
When creating your test, your mapping will be analyzed and a graph fetch query of your class will be created to help you get started with a test. We will add any mapped property to your graph fetch query and when possible generate test data to get you started. 

![Mapping Test - Suite Modal](..\assets\mapping-test\mapping-test-model-to-model-3-create-suite-modal.JPG)


As seen below, after creating your suite, the top panel will hold your query. This query can continue to be edited by our embedded query builder.

On the bottom panel, you will have the first test, with the assoicated input data, documentation and expected result.

From here you can generate the expected results based on the input data, continue editing your input data or add documentation to your test.


In the below example we have the graph fetch query for `_Firm`, with input data for the firm `Apple`, and some documnetation.

You can run the test by clicking the **play** button.

![Mapping Test - Suite Layout](..\assets\mapping-test\mapping-test-model-to-model-4-suite-layout.JPG)


Mapping Tests Suites share an overall query which each indiviual tests shared an input data. Next we will add data for the firm `Google`.

![Mapping Test - Run Test](..\assets\mapping-test\mapping-test-model-to-model-5-run-test.JPG)



![Mapping Test - Add Test](..\assets\mapping-test\mapping-test-model-to-model-6-create-test.JPG)

Here you can see the two tests for the query fetching `_Firm` with two distinct input data.

![Mapping Test - Suite Layout](..\assets\mapping-test\mapping-test-model-to-model-7-tests.JPG)


There will be cases where you want to leverage predefined data defined through `Data Element`. Here you can use the **Shared Data** button. 
![Mapping Test - Shared Data](..\assets\mapping-test\mapping-test-model-to-model-8-shared-data.JPG)


This modal will give you all the defined shared data in your project and dependencies. For this example we will leverage the IBM shared data defined in out project.

![Mapping Test - Shared Data Modal](..\assets\mapping-test\mapping-test-model-to-model-9-shared-data-modal.JPG)

Below you can see our test suite with our three tests each with its own test data inlcuding `IBM` leveraging a `DataElement`. All tests have passed.
![Mapping Test - 3 tests](..\assets\mapping-test\mapping-test-model-to-model-10-shared-data-all.JPG)


When running a test, the results will show in the **Result** tab. The Generate button on top will replace your expected results with the actual results of the query. 
![Mapping Test - Failing Test](..\assets\mapping-test\mapping-test-model-to-model-11-failure.JPG)

When your test is failing you can see the diff of what you expected and what the actual results were. 
![Mapping Test - Failing Test Diff](..\assets\mapping-test\mapping-test-model-to-model-12-failure-diffs.JPG)






