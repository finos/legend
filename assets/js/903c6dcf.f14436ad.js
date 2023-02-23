"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2258],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?a.createElement(v,o(o({ref:t},c),{},{components:r})):a.createElement(v,o({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2683:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"create-apis",title:"Generate APIs to Programmatically Send and Receive Data to/from Multiple Sources",sidebar_label:"Create Data Model APIs"},s=void 0,u={unversionedId:"user-journeys/create-apis",id:"user-journeys/create-apis",title:"Generate APIs to Programmatically Send and Receive Data to/from Multiple Sources",description:"Overview",source:"@site/../docs/user-journeys/create-apis.md",sourceDirName:"user-journeys",slug:"/user-journeys/create-apis",permalink:"/docs/user-journeys/create-apis",draft:!1,tags:[],version:"current",frontMatter:{id:"create-apis",title:"Generate APIs to Programmatically Send and Receive Data to/from Multiple Sources",sidebar_label:"Create Data Model APIs"},sidebar:"docs",previous:{title:"Map to Data Models",permalink:"/docs/user-journeys/map-models"},next:{title:"Find Data Models",permalink:"/docs/user-journeys/find"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:3},{value:"Showcase projects",id:"showcase-projects",level:3},{value:"Define a data service querying your data model and define tests to ensure it does not break",id:"define-a-data-service-querying-your-data-model-and-define-tests-to-ensure-it-does-not-break",level:2},{value:"Query and edit a service query in the Query Editor",id:"query-and-edit-a-service-query-in-the-query-editor",level:2},{value:"Retrieve services metadata via API endpoints",id:"retrieve-services-metadata-via-api-endpoints",level:2},{value:"More",id:"more",level:2}],p={toc:d},m="wrapper";function v(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Coming soon")),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/overview/legend-glossary/#service"},"Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/overview/legend-glossary/#service-editor"},"Service Editor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/overview/legend-glossary/#connection"},"Connection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/overview/legend-glossary/#mapping-editor"},"Mapping Editor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/overview/legend-glossary/#runtime"},"Runtime"))),(0,i.kt)("h3",{id:"showcase-projects"},"Showcase projects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Coming soon"))),(0,i.kt)("h2",{id:"define-a-data-service-querying-your-data-model-and-define-tests-to-ensure-it-does-not-break"},"Define a data service querying your data model and define tests to ensure it does not break"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tutorial:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/services-service"},"Create a service")))),(0,i.kt)("li",{parentName:"ul"},"Showcase project: ",(0,i.kt)("em",{parentName:"li"},"coming soon"))),(0,i.kt)("h2",{id:"query-and-edit-a-service-query-in-the-query-editor"},"Query and edit a service query in the Query Editor"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tutorial:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/query-builder/#edit-a-service-query"},"Edit service query")))),(0,i.kt)("li",{parentName:"ul"},"Showcase project: ",(0,i.kt)("em",{parentName:"li"},"coming soon"))),(0,i.kt)("h2",{id:"retrieve-services-metadata-via-api-endpoints"},"Retrieve services metadata via API endpoints"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tutorial: ",(0,i.kt)("em",{parentName:"li"},"coming soon")),(0,i.kt)("li",{parentName:"ul"},"Showcase project: ",(0,i.kt)("em",{parentName:"li"},"coming soon"))),(0,i.kt)("h2",{id:"more"},"More"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/overview/legend-features"},"Legend Features")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/overview/legend-glossary"},"Legend Glossary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/showcases/showcase-projects"},"Showcase projects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/legend-language"},"Reference documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/studio-workspace"},"Studio tutorials")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/query-builder"},"Query tutorials"))))}v.isMDXComponent=!0}}]);