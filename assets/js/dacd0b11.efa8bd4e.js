"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7469],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(t),c=i,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return t?a.createElement(g,l(l({ref:n},d),{},{components:t})):a.createElement(g,l({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),l=["components"],o={id:"legend-language",title:"Legend Language",sidebar_label:"Language"},p=void 0,s={unversionedId:"reference/legend-language",id:"reference/legend-language",title:"Legend Language",description:"The Legend language is an an immutable functional language based on the Unified Modeling Language (UML) and inspired by Object Constraint Language (OCL). It provides an accelerated data modeling experience that enables:",source:"@site/../docs/reference/legend-language.md",sourceDirName:"reference",slug:"/reference/legend-language",permalink:"/docs/reference/legend-language",draft:!1,tags:[],version:"current",frontMatter:{id:"legend-language",title:"Legend Language",sidebar_label:"Language"},sidebar:"docs",previous:{title:"Showcase Projects",permalink:"/docs/showcases/showcase-projects"},next:{title:"Released Functions",permalink:"/docs/reference/released-functions"}},d={},m=[{value:"Types",id:"types",level:2},{value:"Primitive types",id:"primitive-types",level:3},{value:"Class",id:"class",level:3},{value:"Enum",id:"enum",level:3},{value:"Functions",id:"functions",level:2},{value:"Variable",id:"variable",level:3},{value:"Arrow notation",id:"arrow-notation",level:3},{value:"Lambda",id:"lambda",level:3},{value:"If, map, and filter",id:"if-map-and-filter",level:3},{value:"Extensions",id:"extensions",level:2},{value:"Stereotype",id:"stereotype",level:3},{value:"Tagged value",id:"tagged-value",level:3},{value:"Constraint",id:"constraint",level:3},{value:"Derivation",id:"derivation",level:3},{value:"Mappings",id:"mappings",level:2},{value:"Model-to-model mapping",id:"model-to-model-mapping",level:3},{value:"Next steps",id:"next-steps",level:2}],u={toc:m},c="wrapper";function g(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Legend language is an an immutable functional language based on the Unified Modeling Language (UML) and inspired by Object Constraint Language (OCL). It provides an accelerated data modeling experience that enables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Building of logical data models that can help describe business concepts and their data relationships.  "),(0,r.kt)("li",{parentName:"ul"},"Enrichment of the model with executable constraints, derivations, and model-to-model mappings."),(0,r.kt)("li",{parentName:"ul"},"Execution of model queries in various environments (the Legend language can be transformed into other languages).")),(0,r.kt)("h2",{id:"types"},"Types"),(0,r.kt)("p",null,"The type system for the Legend language is described below. Generics are supported but are reserved for meta-modeling and aren't exposed for use in data modeling."),(0,r.kt)("h3",{id:"primitive-types"},"Primitive types"),(0,r.kt)("p",null,"The following primitive data types are supported. Perform typical arithmetic and logical operations on them for use in writing constraints, derivations, and transformations. Use them to express the data types of attributes in a data model."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Number (integer, float)"),(0,r.kt)("li",{parentName:"ul"},"String"),(0,r.kt)("li",{parentName:"ul"},"Boolean"),(0,r.kt)("li",{parentName:"ul"},"Date (StrictDate, DateTime)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The date type is an abstract class with two subtypes: ",(0,r.kt)("inlineCode",{parentName:"li"},"StrictDate")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"DateTime"),". A date is automatically cast into one of these two types."),(0,r.kt)("li",{parentName:"ul"},"The syntax for ",(0,r.kt)("inlineCode",{parentName:"li"},"StrictDate")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"%YYYY-MM-DD")),(0,r.kt)("li",{parentName:"ul"},"The syntax for ",(0,r.kt)("inlineCode",{parentName:"li"},"DateTime")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"%YYYY-MM-DD'T'HH:MM:SS"))))),(0,r.kt)("h3",{id:"class"},"Class"),(0,r.kt)("p",null,"Create or model a business concept using a ",(0,r.kt)("inlineCode",{parentName:"p"},"class"),". Attributes in a ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," can be described using the primitive types above.  "),(0,r.kt)("p",null,"The following example creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"Firm")," with an attribute called ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),". The attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," is a string with a ",(0,r.kt)("em",{parentName:"p"},"cardinality")," of 1."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Legend"},"\nClass Firm\n{\n  name: String[1];  \n}\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cardinality")," (or multiplicity) indicates the range in the size of the set. In the example above, the ",(0,r.kt)("inlineCode",{parentName:"p"},"[1]")," indicates that the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," attribute must always be of size 1. It ",(0,r.kt)("em",{parentName:"p"},"does not")," indicate the length of the string. Cardinality can also be defined as a range. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"[0..1]")," to show nullability of an attribute, or ",(0,r.kt)("inlineCode",{parentName:"p"},"[2..*]")," to show a required minimum size of 2 and an unlimited max."),(0,r.kt)("h3",{id:"enum"},"Enum"),(0,r.kt)("p",null,"Create a set of pre-defined, related values using ",(0,r.kt)("inlineCode",{parentName:"p"},"enum"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Legend"},"\nEnum CompanyType\n{\n  Corporation,\n  LimitedLiabilityCorporation\n}\n\n")),(0,r.kt)("p",null,"Leverage this enumeration in a ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," to define the type of an attribute.  "),(0,r.kt)("p",null,"For example, add an attribute called ",(0,r.kt)("inlineCode",{parentName:"p"},"companyType")," with a type of ",(0,r.kt)("inlineCode",{parentName:"p"},"CompanyType")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"firm")," class created above. Using an ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," restricts and defines the set of values that ",(0,r.kt)("inlineCode",{parentName:"p"},"companyType")," attribute can have."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Legend"},"\nClass Firm\n{\n  name:        String[1];  \n  companyType: CompanyType[1];\n}\n\n")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("p",null,"A subset of the available functions that can aid in the writing of model constraints, derivations, and model-to-model mappings are described below.  "),(0,r.kt)("p",null,"A full list of supported functions can be found at ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/released-functions"},"Released functions"),"."),(0,r.kt)("h3",{id:"variable"},"Variable"),(0,r.kt)("p",null,"The keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," is used to create and assign a variable. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," to reference the variable in subsequent statements."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Legend"},"\nlet myVar = 0.75;\nlet x = $myVar;\n\n")),(0,r.kt)("h3",{id:"arrow-notation"},"Arrow notation"),(0,r.kt)("p",null,"Use the arrow notation to call a function. Reading from left to right, the input (LHS) is being passed into a function (RHS)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Legend"},"\n$myVar->ceiling();\n\n")),(0,r.kt)("h3",{id:"lambda"},"Lambda"),(0,r.kt)("p",null,"A lambda (anonymous) function is written as ",(0,r.kt)("inlineCode",{parentName:"p"},"{parameter | body with operation}"),". A ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," is only required when there's more than one parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Legend"},"\nmyInteger | $myInteger + 33\n\n")),(0,r.kt)("h3",{id:"if-map-and-filter"},"If, map, and filter"),(0,r.kt)("p",null,"There's no control flow defined in the language. ",(0,r.kt)("inlineCode",{parentName:"p"},"If"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," are implemented as functions. ",(0,r.kt)("inlineCode",{parentName:"p"},"Fold")," is also available but not supported for data modeling since it's not easy to translate ",(0,r.kt)("inlineCode",{parentName:"p"},"fold")," to other languages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"If")),(0,r.kt)("p",{parentName:"li"},"Implement an ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," condition with the following syntax."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-Legend"},"\nif ( <!condition>> ,\n    | <!resultIfTrue>> ,\n    | <!resultIfFalse>>\n  );\n\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Map")),(0,r.kt)("p",{parentName:"li"},"Iterate over a collection using ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-Legend"},"\n$myCollection->map( y| $y+1);\n\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Filter")),(0,r.kt)("p",{parentName:"li"},"Define a filter using the following syntax."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-Legend"},"\nx | filter($x.name->startsWith('S'))\n\n")))),(0,r.kt)("h2",{id:"extensions"},"Extensions"),(0,r.kt)("p",null,"Like UML, the Legend language supports the following extensions: stereotype, profile, and constraint. The language supports an additional extension called derivation (or qualified property). A derivation allows defining an attribute in the data model using functions that can operate on other attributes in the data model."),(0,r.kt)("h3",{id:"stereotype"},"Stereotype"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Legend"},"\nClass <!extension.important>> Firm\n{\n  name:        String[1];  \n  companyType: CompanyType[1];\n}\n\n")),(0,r.kt)("h3",{id:"tagged-value"},"Tagged value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Legend"},"\nClass <!extension.important>> {doc.doc = 'Represent a company.'} Firm\n{\n  name:        String[1];  \n  companyType: CompanyType[1];\n}\n\n")),(0,r.kt)("h3",{id:"constraint"},"Constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Legend"},"\nClass <!extension.important>> {doc.doc = 'Represent a company.'} Firm\n[\n  isCorporation: $this.companyType == CompanyType.Corporation\n]\n{\n  name:        String[1];  \n  companyType: CompanyType[1];\n}\n\n")),(0,r.kt)("h3",{id:"derivation"},"Derivation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Legend"},"\nClass <!extension.important>> {doc.doc = 'Represent a company.'} Firm\n[\n  isCorporation: $this.companyType == CompanyType.Corporation\n]\n{\n  name:            String[1];  \n  companyType:     CompanyType[1];\n  isCorporation(): {\n    if($this.companyType == CompanyType.Corporation,\n      | true,\n      | false\n    )\n  }:Boolean[1];\n}\n\n")),(0,r.kt)("h2",{id:"mappings"},"Mappings"),(0,r.kt)("p",null,"The language offers a domain-specific language (DSL) that supports model-to-model mappings in the January pilot release."),(0,r.kt)("h3",{id:"model-to-model-mapping"},"Model-to-model mapping"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Legend"},"\nClass NewFirm\n{\n  shortenedCompanyType: String[1];  \n}\n\nMapping MyModelToModelMapping\n(\n  NewFirm[newFirmTag] : FirmX\n  {\n    ~src Firm\n    shortenedCompanyType: if(\n      $src.companyType == CompanyType.LimitedLiabilityCorporation,\n      | 'LLC',\n      | $src.companyType->toString()\n    );\n  }\n)\n\n")),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/released-functions"},"Released functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/upcoming-functions"},"Upcoming functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/community/contribute-to-legend"},"Contribute to Legend"))))}g.isMDXComponent=!0}}]);