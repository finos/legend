"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,m=c["".concat(p,".").concat(d)]||c[d]||h[d]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},p="GraphQL",s={unversionedId:"tutorials/graphql-tutorial",id:"tutorials/graphql-tutorial",title:"GraphQL",description:"This tutorial demonstrates the uses of the GraphQL protocol in Legend.",source:"@site/../docs/tutorials/graphql-tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/graphql-tutorial",permalink:"/docs/tutorials/graphql-tutorial",draft:!1,tags:[],version:"current",frontMatter:{}},u={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"1. Install Legend",id:"1-install-legend",level:3},{value:"2. Index Studio Project",id:"2-index-studio-project",level:3},{value:"3. Start a GraphiQL client",id:"3-start-a-graphiql-client",level:3},{value:"Tutorial",id:"tutorial",level:2},{value:"GraphQL Primer",id:"graphql-primer",level:3},{value:"Legend GraphQL Queries",id:"legend-graphql-queries",level:3},{value:"GraphQL Schema Generation",id:"graphql-schema-generation",level:3},{value:"Upcoming Features",id:"upcoming-features",level:2},{value:"Known bugs",id:"known-bugs",level:2},{value:"Reference",id:"reference",level:2},{value:"Code",id:"code",level:2}],h={toc:c},d="wrapper";function m(e){var t=e.components,i=(0,a.Z)(e,o);return(0,l.kt)(d,(0,r.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"graphql"},"GraphQL"),(0,l.kt)("p",null,"This tutorial demonstrates the uses of the GraphQL protocol in Legend. "),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"An installation of Legend with the following components :",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Studio "),(0,l.kt)("li",{parentName:"ul"},"Engine "),(0,l.kt)("li",{parentName:"ul"},"Depot Store "),(0,l.kt)("li",{parentName:"ul"},"Depot "),(0,l.kt)("li",{parentName:"ul"},"GraphiQL client"))),(0,l.kt)("li",{parentName:"ul"},"Legend Studio Project - ",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.com/finosfoundation/legend/showcase/legend-graphql-showcase"},"https://gitlab.com/finosfoundation/legend/showcase/legend-graphql-showcase")," ")),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("h3",{id:"1-install-legend"},"1. Install Legend"),(0,l.kt)("p",null,"This showcase uses the Docker Compose installers documented ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/finos/legend/tree/master/installers/docker-compose"},"here"),"."),(0,l.kt)("p",null,"The command below installs and starts Legend Studio, Query, Engine, Depot Store and Depot Store."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./docker-compose.sh --profile query up -d --force-recreate \n")),(0,l.kt)("h3",{id:"2-index-studio-project"},"2. Index Studio Project"),(0,l.kt)("p",null,"This tutorial uses Legend Depot to get the serialized Legend models (also called 'entities')."),(0,l.kt)("p",null,"The command below adds the models of the 'Legend GraphQL Showcase' Studio project to the depot. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -v -X GET "http://localhost:6201/depot-store/api/queue/PROD-4567/org.finos.legend.showcase/graphql/1.0.1?maxRetries=5" -H "accept: text/plain"\n')),(0,l.kt)("h3",{id:"3-start-a-graphiql-client"},"3. Start a GraphiQL client"),(0,l.kt)("p",null,"The command below starts an Apache httpd server that serves a HTML page that implements a GraphiQL client."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./docker-compose.sh --profile graphiql up -d --force-recreate\nCreating legend-httpd ... done\n")),(0,l.kt)("h2",{id:"tutorial"},"Tutorial"),(0,l.kt)("h3",{id:"graphql-primer"},"GraphQL Primer"),(0,l.kt)("p",null,"In GraphQL, we start by defining an object type that is the basis for all query operations :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"type Query {\n  firmByLegalName(legalName: String!):Firm \n}\n")),(0,l.kt)("p",null,"With this definition in place, we can query a GraphQL server that implements the above types, as follows :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'query Query1 {\n  firmByLegalName(legalName :"ACME Corp.") {\n    employees {\n      firstName\n      lastName\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"legend-graphql-queries"},"Legend GraphQL Queries"),(0,l.kt)("p",null,"In Legend, we support GraphQL by bridging the GraphQL protocol to Legend's GraphFetch protocol. In other words, Legend consumes a GraphQL query, converts it into GraphFetch and then executes the GraphFetch protocol."),(0,l.kt)("p",null,"Just like we defined the root object type in GraphQL, we define a root Legend class that will be the basis of all query operations."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Class domain::Query\n{\n  firmByLegalName(legalName: String[1]) {domain::Firm.all()->filter(f|$f.legalName == $legalName)->first()}: domain::Firm[0..1];\n}\n")),(0,l.kt)("p",null,"With this class defined, we can start querying using GraphQL. "),(0,l.kt)("p",null,"To query, navigate to the GraphiQL client (http://localhost:9099/graphiql) and enter the following GraphQL query."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'query Query1 {\n  firmByLegalName(legalName :"ACME Corp.") {\n        employees {\n      firstName\n      lastName\n    }\n  }\n}\n')),(0,l.kt)("p",null,"When the query is executed, you should see a response as follows :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "data": {\n    "firmByLegalName": {\n      "employees": [\n        {\n          "firstName": "Road",\n          "lastName": "Runner"\n        },\n        {\n          "firstName": "Wile",\n          "lastName": "Coyote"\n        }\n      ]\n    }\n  }\n}\n')),(0,l.kt)("p",null,"The HTML input element at the top of the GraphiQL client provides Legend with the metadata that it needs to execute the GraphQL/GraphFetch query."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://localhost:6300/api/graphQL/v1/execution/execute/prod/org.finos.legend.showcase/graphql/1.0.1/query/domain::Query/mapping/mapping::relational::Firm_Person/runtime/connection::runtime::h2\n")),(0,l.kt)("p",null,"In the example above, we are providing the following metadata to Legend "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"http://localhost:6300/api/graphQL/v1/execution/execute/prod/")," - The ",(0,l.kt)("inlineCode",{parentName:"li"},"prod")," path indicates that model entities should be sourced from Legend Depot"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"org.finos.legend.showcase/graphql/1.0.1")," - The Maven coordinates of the model entities "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"query/domain::Query")," - The Legend class that defines the GraphQL query root"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mapping/mapping::relational::Firm_Person")," - The Legend mapping to be used to execute the underlying GraphFetch query. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"runtime/connection::runtime::h2")," - The Legend runtime to be used to execute the underlying GraphFetch query.")),(0,l.kt)("h3",{id:"graphql-schema-generation"},"GraphQL Schema Generation"),(0,l.kt)("p",null,"Legend is also able to generate GraphQL schemas from the Pure model. "),(0,l.kt)("p",null,"First, create a new package. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"new package",src:n(7175).Z,width:"1199",height:"912"})),(0,l.kt)("p",null,"Then, in the package, create a file generation."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"new package",src:n(9350).Z,width:"1189",height:"915"})),(0,l.kt)("p",null,"Once the generation has been created, generated GraphQL schemas are shown. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"new package",src:n(7520).Z,width:"1412",height:"979"})),(0,l.kt)("h2",{id:"upcoming-features"},"Upcoming Features"),(0,l.kt)("p",null,"The following features are not supported as yet but will be added soon. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Querying using input types "),(0,l.kt)("li",{parentName:"ul"},"GraphQL schema generation for input types ")),(0,l.kt)("h2",{id:"known-bugs"},"Known bugs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Out of order field arguments - Arguments have to be specified in the same order as in the Pure Query class")),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("p",null,"Reference documentation on the design/implementation of the GraphQL integration can be found ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/finos/legend-engine/blob/master/docs/graphQL/graphQL.md"},"here")),(0,l.kt)("h2",{id:"code"},"Code"),(0,l.kt)("p",null,"Legend Engine source code is in the Maven modules named ",(0,l.kt)("inlineCode",{parentName:"p"},"legend-engine-xt-graphQL-XXXX")))}m.isMDXComponent=!0},9350:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gql-create-file-generation-82b5fe9904598c5f3a13cc8ca43c8177.png"},7175:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gql-create-generation-a4dec66b9c0f5b094acff836b6ae36c9.png"},7520:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gql-file-generation-7d8afc68533d1a73b771eeb8de877aba.png"}}]);