---
title: Snowflake Connection
description: Showcase of a Snowflake RelationalDatabaseConnection using key-pair auth.
---

A Snowflake `RelationalDatabaseConnection` requires the warehouse / account / region in
its `specification` and a Snowflake-specific authentication strategy. The example below
uses `SnowflakePublic` (key-pair) auth, which references the private key and pass phrase
from a vault.

