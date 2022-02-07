---
id: connect-data-to-model
title: Connect data to model
sidebar_label: Connect data to a data model
---

Connect data to a data model to start querying data leveraging the business-friendly terms and data relationships defined in the data model.

## Create a Relational Database

Define the schema definition of the relational database you wish to connect to the data model.

1. Hit the **+** icon.
2. Select **New Relational Database**
3. Enter the name of the Database, for example **H2DemoDataBase**

The Studio form mode currently does not support defining the Relational Database schema. Please select **Edit in text mode** to continue.

4. Define the database by adding tables, columns and joins.

Please refer to below sample SQL snippet to set up a in-memory H2 demo database.

###Relational
Database demo::H2DemoDataBase
(
  Table FirmTable
  (
    id INTEGER PRIMARY KEY,
    legal_name VARCHAR(200)
  )
  Table EmployeeTable
  (
    id INTEGER PRIMARY KEY,
    firm_id INTEGER,
    full_name VARCHAR(200),
    country_id INTEGER
  )
  Table CountryTable
  (
    id INTEGER PRIMARY KEY,
    country_name VARCHAR(200)
  )

  Join FirmEmployee(EmployeeTable.firm_id = FirmTable.id)
  Join EmployeeCountry(EmployeeTable.country_id = CountryTable.id)
)

## Create a Relational Mapping

Map the columns of your relational tables to the properties defined in the data model. 

### Define the Relational Mapping

1. Hit the **+** icon.
2. Select **New Mapping**
3. Enter the name of the Mapping, for example **DemoRelationalMapping**
4. Define the mapping target: Drag a class into the editor where it says **Add a mapping element**, for example the `Firm` class. Then select **Create**.
5. Define the mapping source: Drag the **H2DemoDataBase** Relational Database in the editor where it says **Choose a source**.
6. Choose the table specified in the Relational Database schema that contains the columns you wish to map to your data model properties. Let's choose the **FirmTable**.
7. Map the column names on the left-hand side to the property names in the center of the editor screen. Let's map the **legal_name** column to the **legalName** property.

#### Execute the Relational Mapping

To ensure that the mapping has been done correctly and the desired data is actually returned, let's execute the relational mapping.

1. Right click on the class you wish to test execution for. Let's aim to query Firm data by right-clicking on the `Firm` class and selecting **Execute**.
2. Hit the **Edit Query** button to define your test query. 
3. Create test data either from SQL or csv.
4. Hit the **Execute** button to test execution.

#### Create Relational Mapping Test

It is good practice to define tests for each of your relational mappings. That way, changes to the model and mappings can be performed more safely.

1. Right click on the class you wish to set up the test for. Let's set up a test for the `Firm` class by right-clicking on it and selecting **Test**.
2. Alternatively, you can select the **+** icon where it says **Let's add some tests!**. Select the class from the dropdown you wish to create the test for.
2. Hit the **Edit Query** button to define your test query. 
3. Create test data either from SQL or csv.
4. Hit the **Execute** button to test execution.

You can test all the queries and relational mappings at once by hitting the **Run All Tests** button.

## Create a Connection

Define the Connection details between the relational database and the data model. 

1. Hit the **+** icon.
2. Select **New Connection**
3. Enter the name of the Connection, for example **H2DemoConnection**
4. Select **Relational** Model Connection

Start entering the Connection details in the **General** tab. First, choose the **Database type**.

### Database type

Specify the type of relational database you wish to connect to. Studio currently supports:
 * H2 (in-memory test database)
 * Snowflake
 * BigQuery

 ### Datasource

 Specify the connection details of your selected database type. 

 #### H2

 To execute against an in-memory H2 test data base, you would need to define test data by adding SQL to **Test data setup SQL**

 #### H2 Embedded

 *Coming soon*

 #### Static

 *More details coming soon*

 Specify Static connection details by adding the below details.

* Host
* port 
* Database

 #### Snowflake

 *More details coming soon*

 Specify Snowflake connection details by adding the below details.

 * Account
 * Region
 * Warehouse
 * Database
 * Cloud type


 #### BigQuery

*More details coming soon*

 Specify BigQuery connection details by adding the below details.

 * Project id
 * Default dataset


### Authentication

Define how access to the database should be authenticated in the **Authentication** specifications.

#### H2 Default

No further input needed if you select the **H2 Default** authentication specifications.

#### Delegated Kerberos

*More details coming soon*

 Specify **Delegated Kerberos** authentication details by adding the below details.

 * Server principal

 #### Snowflake Public

 *More details coming soon*

 Specify **Snowflake** authentication details by adding the below details.

 * Private key vault reference
 * Pass phrase vault reference
 * Public user name

 #### Gcp Application Default Credentials

 *More details coming soon*

 Specify **GCP** authentication details.

 #### Username password

*More details coming soon*

 Specify **Username password** authentication details. 

 ## Create a Runtime

 The combination of the relational mapping and the connection details are specified in the **Runtime**. 

1. Hit the **+** icon.
2. Select **New Runtime**
3. Enter the name of the Connection, for example **H2DemoRuntime**
4. Select the **relational mapping** you want to specify for your runtime, for example **DemoRelationalMapping**
