"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8995],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7630:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(8168),a=r(8587),o=(r(6540),r(5680)),i=["components"],l={id:"studio-enumeration",title:"Create an Enumeration",sidebar_label:"Enumeration"},s=void 0,u={unversionedId:"tutorials/studio-enumeration",id:"tutorials/studio-enumeration",title:"Create an Enumeration",description:"Enumeration",source:"@site/../docs/tutorials/studio-enumeration.md",sourceDirName:"tutorials",slug:"/tutorials/studio-enumeration",permalink:"/docs/tutorials/studio-enumeration",draft:!1,tags:[],version:"current",frontMatter:{id:"studio-enumeration",title:"Create an Enumeration",sidebar_label:"Enumeration"},sidebar:"docs",previous:{title:"Class",permalink:"/docs/tutorials/studio-class"},next:{title:"Profile",permalink:"/docs/tutorials/studio-profile"}},c={},p=[{value:"Enumeration",id:"enumeration",level:2},{value:"More",id:"more",level:2}],m={toc:p},d="wrapper";function y(e){var t=e.components,l=(0,a.A)(e,i);return(0,o.yg)(d,(0,n.A)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"enumeration"},"Enumeration"),(0,o.yg)("p",null,"An enumeration is a set of pre-defined values. It has a concept similar to enums in programming languages.  "),(0,o.yg)("p",null,"To create an ",(0,o.yg)("a",{parentName:"p",href:"/docs/overview/data-modeling-concepts/#enumeration"},"enumeration"),":"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Click the ",(0,o.yg)("kbd",null,"+")," icon on the left-hand side and select ",(0,o.yg)("kbd",null,"New Enumeration"),", and provide a meaningful name to your Enumeration."),(0,o.yg)("li",{parentName:"ol"},"Let's create an enumeration called ",(0,o.yg)("strong",{parentName:"li"},"CompanyType")," with the values ",(0,o.yg)("strong",{parentName:"li"},"LLC")," and ",(0,o.yg)("strong",{parentName:"li"},"Corporation"),"."),(0,o.yg)("li",{parentName:"ol"},"Let's navigate back to the ",(0,o.yg)("inlineCode",{parentName:"li"},"Firm")," class and add a property named ",(0,o.yg)("strong",{parentName:"li"},"firmType"),"."),(0,o.yg)("li",{parentName:"ol"},"Select ",(0,o.yg)("strong",{parentName:"li"},"CompanyType")," for the property type and a ",(0,o.yg)("a",{parentName:"li",href:"/docs/reference/legend-language#class"},"cardinality")," of 1.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Select property type and cardinality",src:r(8902).A,width:"1384",height:"767"})),(0,o.yg)("p",null,"In the ",(0,o.yg)("a",{parentName:"p",href:"/docs/showcases/showcase-projects/#logical-modeling-basic"},"basic logical modeling")," showcase project, ProductSynonymType is an enumeration. "),(0,o.yg)("h2",{id:"more"},"More"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/showcases/showcase-projects"},"Showcase projects")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/overview/legend-features"},"Legend Features")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/overview/legend-glossary"},"Legend Glossary")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/reference/legend-language"},"Reference documentation")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/tutorials/studio-workspace"},"Studio tutorials")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/tutorials/query-builder"},"Query tutorials"))))}y.isMDXComponent=!0},8902:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/add-enum-0523e0879fe43fbe6590a2ed6efd7272.gif"}}]);