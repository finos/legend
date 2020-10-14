---
id: legend-language
title: Legend language
sidebar_label: Legend language
---

The Legend language is an an immutable functional language based on the Unified Modeling Language (UML) and inspired by Object Constraint Language (OCL). It provides an accelerated data modeling experience that enables:

- Building of logical data models that can help describe business concepts and their data relationships.  
- Enrichment of the model with executable constraints, derivations, and model-to-model mappings.
- Execution of model queries in various environments (the Legend language can be transformed into other languages).

## Types

The type system for the Legend language is described below. Generics are supported but are reserved for meta-modeling and aren't exposed for use in data modeling.

### Primitive types

The following primitive data types are supported. Perform typical arithmetic and logical operations on them for use in writing constraints, derivations, and transformations. Use them to express the data types of attributes in a data model.

- Number (integer, float)
- String
- Boolean
- Date (StrictDate, DateTime)
  - The date type is an abstract class with two subtypes: `StrictDate` and `DateTime`. A date is automatically cast into one of these two types.
  - The syntax for `StrictDate` is `\%\<YYYY\>\-\<MM\>\-\<DD\>`
  - The syntax for `DateTime` is `\%\<YYYY\>\-\<MM\>\-\<DD\>T\<HH\>\:\<MM\>\:\<SS\>`

### Class

Create or model a business concept using a `class`. Attributes in a `class` can be described using the primitive types above.  

The following example creates a `class` called `Firm` with an attribute called `name`. The attribute `name` is a string with a *cardinality* of 1.

```Legend
Class Firm
{
  name: String[1];  
}
```

**Cardinality** (or multiplicity) indicates the range in the size of the set. In the example above, the `[1]` indicates that the `name` attribute must always be of size 1. It _does not_ indicate the length of the string. Cardinality can also be defined as a range. For example, `[0..1]` to show nullability of an attribute, or `[2..*]` to show a required minimum size of 2 and an unlimited max.

### Enum

Create a set of pre-defined, related values using `enum`.

```Legend
Enum CompanyType
{
  Corporation,
  LimitedLiabilityCorporation
}
```

Leverage this enumeration in a `class` to define the type of an attribute.  

For example, add an attribute called `companyType` with a type of `CompanyType` to the `firm` class created above. Using an `enum` restricts and defines the set of values that `companyType` attribute can have.

```Legend
Class Firm
{
  name:        String[1];  
  companyType: CompanyType[1];
}
```

## Functions

A subset of the available functions that can aid in the writing of model constraints, derivations, and model-to-model mappings are described below.  

A full list of supported functions can be found at [Released functions](released-functions.md).

### Variable

The keyword `let` is used to create and assign a variable. Use `$` to reference the variable in subsequent statements.

```Legend
let myVar = 0.75;
let x = $myVar;
```

### Arrow notation

Use the arrow notation to call a function. Reading from left to right, the input (LHS) is being passed into a function (RHS).

```Legend
$myVar->ceiling();
```

### Lambda

A lambda (anonymous) function is written as `{parameter | body with operation}`. A `{}` is only required when there's more than one parameter.

```Legend
myInteger | $myInteger + 33
```

### If, map, and filter

There's no control flow defined in the language. `If`, `map` and `filter` are implemented as functions. `Fold` is also available but not supported for data modeling since it's not easy to translate `fold` to other languages.

- **If**
  
  Implement an `if` condition with the following syntax.

  ```Legend
  if ( <<condition>> ,
      | <<resultIfTrue>> ,
      | <<resultIfFalse>>
    );
  ```

- **Map**

  Iterate over a collection using `map`.

  ```Legend
  $myCollection->map( y| $y+1);
  ```

- **Filter**

  Define a filter using the following syntax.

  ```Legend
  x | filter($x.name->startsWith('S'))
  ```

## Extensions

Like UML, the Legend language supports the following extensions: stereotype, profile, and constraint. The language supports an additional extension called derivation (or qualified property). A derivation allows defining an attribute in the data model using functions that can operate on other attributes in the data model.

### Stereotype

```Legend
Class <<extension.important>> Firm
{
  name:        String[1];  
  companyType: CompanyType[1];
}
```

### Tagged value

```Legend
Class <<extension.important>> {doc.doc = 'Represent a company.'} Firm
{
  name:        String[1];  
  companyType: CompanyType[1];
}
```

### Constraint

```Legend
Class <<extension.important>> {doc.doc = 'Represent a company.'} Firm
[
  size: $this.companyType == CompanyType.Corporation
]
{
  name:        String[1];  
  companyType: CompanyType[1];
}
```

### Derivation

```Legend
Class <<extension.important>> {doc.doc = 'Represent a company.'} Firm
[
  size: $this.companyType == CompanyType.Corporation
]
{
  name:            String[1];  
  companyType:     CompanyType[1];
  isCorporation(): {
    if($this.companyType == CompanyType.Corporation,
      | true,
      | false
    )
  }:Boolean[1];
}
```

## Mappings

The language offers a domain-specific language (DSL) that supports model-to-model mappings in the January pilot release.

### Model-to-model mapping

```Legend
Class NewFirm
{
  shortenedCompanyType: String[1];  
}

Mapping MyModelToModelMapping
(
  NewFirm[newFirmTag] : Kittos
  {
    ~src Firm
    shortenedCompanyType: if(
      $src.companyType == CompanyType.LimitedLiabilityCorporation,
      | 'LLC',
      | $src.companyType->toString()
    );
  }
)
```

## Next steps

- [Released functions](released-functions.md)
- [Upcoming functions](upcoming-functions.md)
- [Exeuction](execution.md)
