"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1264],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>y});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,y=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return t?n.createElement(y,l(l({ref:r},u),{},{components:t})):n.createElement(y,l({ref:r},u))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1495:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=t(8168),a=t(8587),o=(t(6540),t(5680)),l=["components"],i={id:"external-format",title:"External Format & Bindings",sidebar_label:"External Format & Bindings"},c=void 0,s={unversionedId:"reference/external-format",id:"reference/external-format",title:"External Format & Bindings",description:"External Format",source:"@site/../docs/reference/external-format.md",sourceDirName:"reference",slug:"/reference/external-format",permalink:"/docs/reference/external-format",draft:!1,tags:[],version:"current",frontMatter:{id:"external-format",title:"External Format & Bindings",sidebar_label:"External Format & Bindings"},sidebar:"docs",previous:{title:"Stores",permalink:"/docs/reference/stores"},next:{title:"Query Protocol",permalink:"/docs/reference/query-protocol"}},u={},m=[{value:"External Format",id:"external-format",level:2},{value:"Bindings",id:"bindings",level:2},{value:"Protobuf",id:"protobuf",level:3},{value:"JSON Schema",id:"json-schema",level:3},{value:"Java",id:"java",level:3},{value:"Avro",id:"avro",level:3},{value:"Python",id:"python",level:3},{value:"More",id:"more",level:2}],p={toc:m},d="wrapper";function y(e){var r=e.components,t=(0,a.A)(e,l);return(0,o.yg)(d,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"external-format"},"External Format"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/finos/legend-engine/tree/master/docs/externalFormat"},"External Format technical documentation"))),(0,o.yg)("h2",{id:"bindings"},"Bindings"),(0,o.yg)("h3",{id:"protobuf"},"Protobuf"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Coming soon.")),(0,o.yg)("h3",{id:"json-schema"},"JSON Schema"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Coming soon.")),(0,o.yg)("h3",{id:"java"},"Java"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/finos/legend-engine/blob/master/docs/java/codeGen.md"},"Java technical documentation"))),(0,o.yg)("h3",{id:"avro"},"Avro"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Coming soon.")),(0,o.yg)("h3",{id:"python"},"Python"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Coming soon.")),(0,o.yg)("h2",{id:"more"},"More"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/showcases/showcase-projects"},"Showcase projects")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/overview/legend-features"},"Legend features")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/overview/legend-glossary"},"Legend glossary")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/user-journeys/build-data-model"},"User journeys")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/tutorials/studio-workspace"},"Studio tutorials")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/tutorials/query-builder"},"Query tutorials")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/community/contribute-to-legend"},"Contribute to Legend"))))}y.isMDXComponent=!0}}]);