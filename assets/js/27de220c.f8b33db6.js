"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(d,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={id:"studio-project-dependencies",title:"Define Project Dependencies",sidebar_label:"Define Project Dependencies"},d=void 0,s={unversionedId:"tutorials/studio-project-dependencies",id:"tutorials/studio-project-dependencies",title:"Define Project Dependencies",description:"Define project dependencies",source:"@site/../docs/tutorials/studio-project-dependencies.md",sourceDirName:"tutorials",slug:"/tutorials/studio-project-dependencies",permalink:"/docs/tutorials/studio-project-dependencies",draft:!1,tags:[],version:"current",frontMatter:{id:"studio-project-dependencies",title:"Define Project Dependencies",sidebar_label:"Define Project Dependencies"},sidebar:"docs",previous:{title:"Studio Tests",permalink:"/docs/tutorials/studio-tests"},next:{title:"Manage Model Info & Workspaces",permalink:"/docs/tutorials/studio-manage-model-information"}},l={},p=[{value:"Define project dependencies",id:"define-project-dependencies",level:2},{value:"Dependency version control",id:"dependency-version-control",level:2},{value:"More",id:"more",level:2}],u={toc:p},f="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"define-project-dependencies"},"Define project dependencies"),(0,i.kt)("p",null,"When you add a ",(0,i.kt)("a",{parentName:"p",href:"/docs/overview/legend-glossary/#project-dependencies"},"project dependency"),', all its dependencies are included as well. For example, if model $A$ creates a dependency on "Listed Product", and "Listed Product" depends upon the "Foundation" model, you ',(0,i.kt)("em",{parentName:"p"},"do not")," need to add a separate dependency to Foundation for model $A$ to depend on it. The dependency is already included in your dependency to other projects."),(0,i.kt)("h2",{id:"dependency-version-control"},"Dependency version control"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Tutorial coming soon.")),(0,i.kt)("h2",{id:"more"},"More"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/showcases/showcase-projects"},"Showcase projects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/overview/legend-features"},"Legend Features")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/overview/legend-glossary"},"Legend Glossary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/legend-language"},"Reference documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/studio-workspace"},"Studio tutorials")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/query-builder"},"Query tutorials"))))}m.isMDXComponent=!0}}]);