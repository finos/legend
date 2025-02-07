---
Title: Relation Function Class Mapping
Description: End-to-End example for writing Relation Function Class Mappings
---

This showcase demonstrates how to write Relation Function Class Mappings.

This allows you to map classes to functions returning a 'new' TDS (Relation). Supported class properties can only be primitives
having multiplicity 1 and get mapped to individual columns in the mapped relation.

Queries can also use a mixture of Relational and Relation Function class mappings.

Your relation expression can contain complex joins, aggregates and window columns, thus providing a more powerful alternative to
Relational Store views.

You can execute the service tests to see how all of this works end-to-end. You can also generate plan for the services and inspect
the generated SQL.