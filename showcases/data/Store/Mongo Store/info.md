---
title: MongoDB Query
description: Example of querying MongoDB
---

This showcase exemplifies how we can connect to MongoDB and run queries on it.

The connection is made using the database type, store, and authentication method. In this project, we used kerberos for authentication.
Elements can be found in the domain directory, and these are all the models queries can be run on.
The mapping here is used to map the mongo store to a person class, and the binding in this project is used to map json to elements.
Finally the service is how the query is run. A mapping and runtime is required for a service.