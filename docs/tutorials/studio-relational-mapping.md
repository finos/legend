---
id: studio-relational-mapping
title: Create a Relational Mapping
sidebar_label: Relational Mapping
---

## Create a Relational Database

Define the schema definition of the relational database you wish to connect to the data model.

1. Hit the <kbd>+</kbd> icon.
2. Select <kbd>New Relational Database</kbd>.
3. Enter the name of the Database, for example <kbd>H2DemoDataBase</kbd>.

The Studio form mode currently does not support defining the Relational Database schema. Please select <kbd>Edit in text mode</kbd> to continue.

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

1. Hit the <kbd>+</kbd> icon.
2. Select <kbd>New mapping</kbd>
3. Enter the name of the Mapping, for example <kbd>DemoRelationalMapping</kbd>.
4. Define the mapping target: Drag a class into the editor where it says <kbd>Add a mapping element</kbd> for example the `Firm` class. Then select<kbd>Create</kbd>.
5. Define the mapping source: Drag the <kbd>H2DemoDataBase</kbd> Relational Database in the editor where it says <kbd>Choose a source</kbd>.
6. Choose the table specified in the Relational Database schema that contains the columns you wish to map to your data model properties. Let's choose the **FirmTable**.
7. Map the column names on the left-hand side to the property names in the center of the editor screen. Let's map the **legal_name** column to the **legalName** property.

#### Execute the Relational Mapping

To ensure that the mapping has been done correctly and the desired data is actually returned, let's execute the relational mapping.

1. Right click on the class you wish to test execution for. Let's aim to query Firm data by right-clicking on the `Firm` class and selecting <kbd>Execute</kbd>.
2. Hit the <kbd>Edit query</kbd> button to define your test query.
3. Create test data either from SQL or csv.
4. Hit the <kbd>Execute</kbd> button to test execution.

#### Create Relational Mapping Test

It is good practice to define tests for each of your relational mappings. That way, changes to the model and mappings can be performed more safely.

1. Right click on the class you wish to set up the test for. Let's set up a test for the `Firm` class by right-clicking on it and selecting <kbd>Test</kbd>.
2. Alternatively, you can select the <kbd>+</kbd> icon where it says <kbd>Let's add some tests!</kbd>. Select the class from the dropdown you wish to create the test for.
3. Hit the <kbd>Edit query</kbd> button to define your test query.
4. Create test data either from SQL or csv.
5. Hit the <kbd>Execute</kbd> button to test execution.

You can test all the queries and relational mappings at once by hitting the <kbd>Run all tests</kbd> button.

## Create a Connection

Define the Connection details between the relational database and the data model.

1. Hit the <kbd>+</kbd> icon.
2. Select <kbd>New connection</kbd>
3. Enter the name of the Connection, for example <kbd>H2DemoConnection</kbd>.
4. Select <kbd>Relational</kbd> Model Connection

Start entering the Connection details in the <kbd>General</kbd> tab. First, choose the <kbd>Database type</kbd>.

### Database type

Specify the type of relational database you wish to connect to. Studio currently supports:

- H2 (in-memory test database)
- Snowflake
- BigQuery

### Datasource

Specify the connection details of your selected database type.

#### H2

To execute against an in-memory H2 test data base, you would need to define test data by adding SQL to <kbd>Test data setup SQL</kbd>.

#### H2 Embedded

_Coming soon_

#### Static

_More details coming soon_

Specify Static connection details by adding the below details.

- Host
- port
- Database

#### Snowflake

_More details coming soon_

Specify Snowflake connection details by adding the below details.

- Account
- Region
- Warehouse
- Database
- Cloud type

#### BigQuery

_More details coming soon_

Specify BigQuery connection details by adding the below details.

- Project id
- Default dataset

### Authentication

Define how access to the database should be authenticated in the **Authentication** specifications.

#### H2 Default

No further input needed if you select the **H2 Default** authentication specifications.

#### Snowflake Public

_More details coming soon_

Specify **Snowflake** authentication details by adding the below details.

- Private key vault reference
- Pass phrase vault reference
- Public user name

#### Gcp Application Default Credentials

_More details coming soon_

Specify **GCP** authentication details.

#### Username password

_More details coming soon_

Specify **Username password** authentication details.


## Create a Runtime

The combination of the relational mapping and the connection details are specified in the **Runtime**.

1. Hit the <kbd>+</kbd> icon.
2. Select <kbd>New runtime</kbd>
3. Enter the name of the Connection, for example <kbd>H2DemoRuntime</kbd>.
4. Select the **relational mapping** you want to specify for your runtime, for example **DemoRelationalMapping**
