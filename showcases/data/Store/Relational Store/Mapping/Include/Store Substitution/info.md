---
title: Relational Database Mapping with Store Substitution
description: An example of a mapping using store substitution across mappings.
---

# What is Store Substitution?
The Store Substitution feature allows us to replace a store from an included mapping with a store of our choosing. 
Store substitution replaces all references of db1 to db2 when notating by [db1->db2].

Without the store substitution, the compiler can misinterpret it as a cross-store join,
which can have several consequences:
- Degraded performance
- Potential permissions errors when creating temp tables(TDS_VAR)
- Values not being recognized

In the following showcase, we use store substitution correctly in SubstitutesCorrectly
and incorrectly in NeedsSubstitution.

This showcase has 2 separate stores to illustrate 2 potential different database types.

---

# Showcase Explanation
We include BaseMapping in both SubstitutesCorrectly and NeedsSubstitution.

In SubstitutesCorrectly, we indicate a store substitution by [stores::OriginalDB->stores::SubstitutedDB]
which tells the pure compiler to use SubstitutedDB for BaseMapping instead of the originally defined OriginalDB.
This gives us a shorthand way to reuse the original mapping for the firm class with a different store without
having to use a cross-store join or having to create a new mapping to map to SubstitutedDB.

Without the store substitution (like in NeedsSubstitution), we would use OriginalDB to get the values
we return via query. Using OriginalDB in this case could lead to misinterpreted cross store
joins and potential performance hits/errors since we have to create a temp table to create
the TDS join.

---
# How do you know if you need a store substitution?
We can confirm whether or not we perform a store substitution correctly by:
- Enter in form mode(F8)
- Click on the function that is using the included mapping
- Click on the dropdown on the run button
- Generate plan
- Switch to JSON mode

If we see tdsvar_0 in the JSON, then that means there is a temp table being created
and that a store substitution would make the query more efficient and/or potentially get rid of errors.

If there is no tdsvar_0, then the store substitution is correct.

If we do that with the 2 functions in this showcase, we can see that SubstitutesCorrectly
does not have a tdsvar_0 while NeedsSubstitution does. That means that SubstitutesCorrectly
is performing the store substitution correctly while NeedsSubstitution is not.

---
# Will a store substitution fix my errors?
Some key characteristics of situations in which store substitution related errors occur are:
- Using a TDS join
- Seeing a column TDSVAR_0 in the error message