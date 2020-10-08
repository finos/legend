---
id: language
title: Alloy Language
sidebar_label: Language
---
The Alloy language is an immutable functional language based on the Unified Modeling Language (UML) and inspired by Object Constraint Language (OCL).  It provides an accelerated data modeling experience that enables:
-	Building of logical data models that can help describe business concepts and their data relationships.  
-	Enrichment of the model with executable constraints, derivations and model-to-model mappings.   
-	Execution of model queries in various environments (the Alloy language can be transformed into other languages).

## Types 

The type system for the Alloy language is described below.  Generics are supported but are reserved for meta-modeling and not exposed for use in data modeling.

### Primitive Types
The following primitive data types are supported.  Perform typical arithmetic and logical operations on them for use in writing constraints, derivations and transformations.  Use them to express the data types of attributes in a data model.
- Number (Integer, Float)
- String
- Boolean
- Date (StrictDate, DateTime)
> - The <code>Date</code> type is an abstract class with 2 subtypes: <code>StrictDate</code> and <code>DateTime</code>. A <code>Date</code> is automatically cast into one of these two types.
> - The syntax for <code>StrictDate</code> is <code>\%\<YYYY\>\-\<MM\>\-\<DD\></code>
> - The syntax for <code>DateTime</code> is <code>\%\<YYYY\>\-\<MM\>\-\<DD\>T\<HH\>\:\<MM\>\:\<SS\></code>


### Class
Create or model a business concept using a <code>Class</code>.  Attributes in a <code>Class</code> can be described using the primitive types above.  

The following example creates a class called <code>Firm</code> with an attribute called <code>name</code>.  The attribute <code>name</code> is of type of <code>String</code> with a *cardinality* of 1.

```alloy
Class Firm 
{
  name: String[1];  
}
```

> **Cardinality** <a id="language-cardinality"></a>\
> Cardinality (or multiplicity) indicates the range in the size of the set. 
> In the example above, the <code>[1]</code> indicates that <code>name</code> attribute must always be of size 1. It _does not_ indicate the length of the <code>String</code>.   
> Cardinality can also be defined as a range.  For example, <code>[0..1]</code> to show nullability of an attribute or <code>[2..*]</code> to show a required minimum of a size of 2 with an unlimited max. 

### Enum
Create a set of pre-defined, related values using <code>Enum</code>.
```alloy
Enum CompanyType
{
  Corporation,
  LimitedLiabilityCorporation
}
```
Leverage this enumeration in a <code>Class</code> to define the type of an attribute.  

For example, add an attribute called <code>companyType</code> with a type of <code>CompanyType</code> to the <code>Firm</code> class created above.  Using an `Enum` restricts and defines the set of values that <code>companyType</code> attribute can have.
```alloy
Class Firm 
{
  name:        String[1];  
  companyType: CompanyType[1];
}
```

## Functions
A subset of the available functions that can aid in the writing of model constraints, derivations, and model-to-model mappings are described below.  

A full list of supported functions in the January release can be found [here](/docs/getting-started/released-functions).

### Variable
The keyword <code>let</code> is used to create and assign a variable.   Use <code>$</code> to reference the variable in subsequent statements.
```alloy
let myVar = 0.75;
let x = $myVar;
```
### Arrow notation
Use the arrow notation to call a function. Reading from left to right, the input (LHS) is being passed into a function (RHS).  
```alloy
$myVar->ceiling();
```
### Lambda
A lambda (anonymous) function is written as <code>{parameter | body with operation}</code>.  A <code>{}</code> is only required when there is more than one parameter.
```alloy
myInteger | $myInteger + 33
```
### If, Map, Filter
There is no control flow defined in the language.  <code>If</code>, <code>map</code> and <code>filter</code> are implemented as functions.  <code>Fold</code> is also available but not supported for data modeling since it is not easy to translate <code>fold</code> to other languages.

- **If**\
Implement an <code>if</code> condition with the following syntax.
```alloy
if ( <<condition>> ,
     | <<resultIfTrue>> ,
     | <<resultIfFalse>>
   );
```
- **Map**\
Iterate over a collection using <code>map</code>
```alloy
$myCollection->map( y| $y+1);
```
- **Filter**\
Define a filter using the following syntax.
```alloy
x | filter($x.name->startsWith('S'))
```

## Extensions
Similar to UML, the language supports the following extensions: stereotype, profile and constraint.  The language supports an additional extension called derivation (or qualified property).  A derivation allows defining an attribute in the data model using functions that can operate on other attributes in the data model. 

### Stereotype
```alloy
Class <<extension.important>> Firm 
{
  name:        String[1];  
  companyType: CompanyType[1];
}
```

### Tagged Value
```alloy
Class <<extension.important>> {doc.doc = 'Represent a company.'} Firm 
{
  name:        String[1];  
  companyType: CompanyType[1];
}
```

### Constraint
```alloy
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
```alloy
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
The language offers a domain-specific language (DSL) that supports model-to-model mappings in the January pilot release.  Future releases will enable model-to-database mappings.

### Model-To-Model Mapping
```alloy
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
