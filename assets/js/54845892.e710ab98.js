"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4094],{5680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),y=n,g=d["".concat(s,".").concat(y)]||d[y]||c[y]||o;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},1586:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(8168),n=a(8587),o=(a(6540),a(5680)),i=["components"],l={id:"legend-glossary",title:"Glossary of Data Modeling Concepts",sidebar_label:"Glossary"},s=void 0,p={unversionedId:"overview/legend-glossary",id:"overview/legend-glossary",title:"Glossary of Data Modeling Concepts",description:"This page provides an overview of Data modeling concepts. See Legend features for an overview of Legend features.",source:"@site/../docs/overview/legend-glossary.md",sourceDirName:"overview",slug:"/overview/legend-glossary",permalink:"/docs/overview/legend-glossary",draft:!1,tags:[],version:"current",frontMatter:{id:"legend-glossary",title:"Glossary of Data Modeling Concepts",sidebar_label:"Glossary"},sidebar:"docs",previous:{title:"Legend Features",permalink:"/docs/overview/legend-features"},next:{title:"Build Data Models",permalink:"/docs/user-journeys/build-data-model"}},u={},d=[{value:"Class",id:"class",level:2},{value:"Constant",id:"constant",level:2},{value:"Constraint",id:"constraint",level:2},{value:"Data model",id:"data-model",level:2},{value:"Data type",id:"data-type",level:2},{value:"Derived property",id:"derived-property",level:2},{value:"Diagram",id:"diagram",level:2},{value:"Enumeration",id:"enumeration",level:2},{value:"Functions",id:"functions",level:2},{value:"Internalize",id:"internalize",level:3},{value:"Externalize",id:"externalize",level:3},{value:"Milestoning",id:"milestoning",level:2},{value:"OLAP",id:"olap",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Property",id:"property",level:2},{value:"Relational database",id:"relational-database",level:2},{value:"Stereotype",id:"stereotype",level:2},{value:"Super type",id:"super-type",level:2},{value:"More",id:"more",level:2}],c={toc:d},y="wrapper";function g(e){var t=e.components,a=(0,n.A)(e,i);return(0,o.yg)(y,(0,r.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This page provides an overview of Data modeling concepts. See ",(0,o.yg)("a",{parentName:"p",href:"/docs/overview/legend-features"},"Legend features")," for an overview of Legend features."),(0,o.yg)("h2",{id:"class"},"Class"),(0,o.yg)("p",null,"Classes define business concepts."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/tutorials/studio-class"},"Create a class")),(0,o.yg)("h2",{id:"constant"},"Constant"),(0,o.yg)("p",null,"Constants are static values set to a variable name that can be leveraged within your query. They remain the same for all query executions. "),(0,o.yg)("h2",{id:"constraint"},"Constraint"),(0,o.yg)("p",null,"Constraints are governance tools added on top of quality controls. Use constraints to define a validation or condition on the model that's expected to be met."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/tutorials/studio-class/#constraint"},"Add a constraint")),(0,o.yg)("h2",{id:"data-model"},"Data model"),(0,o.yg)("p",null,"Data models allow you to describe your data and data relationships. "),(0,o.yg)("h2",{id:"data-type"},"Data type"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Coming soon.")),(0,o.yg)("h2",{id:"derived-property"},"Derived property"),(0,o.yg)("p",null,"Derived properties use functions to operate on other attributes in the data model."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/tutorials/studio-class/#derived-property"},"Create a derived property")),(0,o.yg)("h2",{id:"diagram"},"Diagram"),(0,o.yg)("p",null,"Diagrams are visual representations of data models to better visualize and communicate about data and their relationships."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/tutorials/studio-diagram"},"Create a diagram")),(0,o.yg)("h2",{id:"enumeration"},"Enumeration"),(0,o.yg)("p",null,"An enumeration is a model attribute that has a finite list of values."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/tutorials/studio-enumeration"},"Create an enumeration")),(0,o.yg)("h2",{id:"functions"},"Functions"),(0,o.yg)("p",null,"Functions are used to derive new values from existing values using various operations."),(0,o.yg)("h3",{id:"internalize"},"Internalize"),(0,o.yg)("p",null,"Internalize is a function used to deserialize source data into model instances using a binding definition. It accepts a class, binding, and source data."),(0,o.yg)("h3",{id:"externalize"},"Externalize"),(0,o.yg)("p",null,"Externalize is a function to serialize model instances into a serializable string using binding definition. It accepts model instances, binding and graphfetch tree."),(0,o.yg)("h2",{id:"milestoning"},"Milestoning"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Coming soon.")),(0,o.yg)("h2",{id:"olap"},"OLAP"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Coming soon.")),(0,o.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,o.yg)("p",null,"Parameters are variables assigned to your query. They are dynamic in nature and can change for each execution."),(0,o.yg)("h2",{id:"property"},"Property"),(0,o.yg)("p",null,"Properties are components of classes that define the attributes of a business concept. Properties can be both primitives (like strings or integers) or other properties. Use properties in a class to define attributes of the business concept."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/tutorials/studio-class/#property---non-primitive-data-type"},"Create a property")),(0,o.yg)("h2",{id:"relational-database"},"Relational database"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Coming soon.")),(0,o.yg)("h2",{id:"stereotype"},"Stereotype"),(0,o.yg)("p",null,"Stereotypes allow you to extend metadata information about a model."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/tutorials/studio-class/#class-stereotype"},"Create a stereotype"),"."),(0,o.yg)("h2",{id:"super-type"},"Super type"),(0,o.yg)("p",null,"Super types show a relationship between classes or business concepts within a model. "),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/tutorials/studio-class/#supertype"},"Create a super type"),"."),(0,o.yg)("h2",{id:"more"},"More"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/overview/legend-features"},"Legend Features")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/showcases/showcase-projects"},"Showcase projects")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/reference/legend-language"},"Reference documentation")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/tutorials/studio-workspace"},"Studio tutorials")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/tutorials/query-builder"},"Query tutorials"))))}g.isMDXComponent=!0}}]);