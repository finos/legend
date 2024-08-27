---
title: Having clause in Alloy
description: Using services to simulate HAVING in SQL statements
---

This project showcases how services can be used to simulate the same behavior as the HAVING clause in a typical SQL SELECT statement.
The service here behaves the same as if this query was run:
SELECT
    username,
    count(distinct(department))
FROM table
GROUP BY username
HAVING count(distinct(department)) > 1
