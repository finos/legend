"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8742],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>h});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=i,h=d["".concat(l,".").concat(u)]||d[u]||g[u]||s;return t?r.createElement(h,a(a({ref:n},p),{},{components:t})):r.createElement(h,a({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3269:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(8168),i=t(8587),s=(t(6540),t(5680)),a=["components"],o={},l="Service Store",c={unversionedId:"tutorials/servicestore-tutorial",id:"tutorials/servicestore-tutorial",title:"Service Store",description:'This tutorial demonstrates the uses of "Service Store"',source:"@site/../docs/tutorials/servicestore-tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/servicestore-tutorial",permalink:"/docs/tutorials/servicestore-tutorial",draft:!1,tags:[],version:"current",frontMatter:{}},p={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Example",id:"example",level:2},{value:"Setup",id:"setup",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"1. Basic modeling",id:"1-basic-modeling",level:3},{value:"2. Service Store",id:"2-service-store",level:3},{value:"3. Binding",id:"3-binding",level:3},{value:"4. Mapping",id:"4-mapping",level:3},{value:"5. Connection",id:"5-connection",level:3},{value:"6. Legend Service",id:"6-legend-service",level:3},{value:"7. Execution",id:"7-execution",level:3},{value:"Reference",id:"reference",level:2},{value:"Code",id:"code",level:2}],g={toc:d},u="wrapper";function h(e){var n=e.components,o=(0,i.A)(e,a);return(0,s.yg)(u,(0,r.A)({},g,o,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"service-store"},"Service Store"),(0,s.yg)("p",null,'This tutorial demonstrates the uses of "Service Store" '),(0,s.yg)("h2",{id:"requirements"},"Requirements"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},"An installation of Legend with the following components :"),(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},"Studio "),(0,s.yg)("li",{parentName:"ul"},"Engine "),(0,s.yg)("li",{parentName:"ul"},"SDLC"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},"Familiarity with the following Legend concepts :"),(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},"Data modeling with classes, associations "),(0,s.yg)("li",{parentName:"ul"},"Data modeling with stores, mappings, connections and runtimes "),(0,s.yg)("li",{parentName:"ul"},"Data modeling with Legend services ")))),(0,s.yg)("p",null,"Installation instructions can be found here ",(0,s.yg)("a",{parentName:"p",href:"https://legend.finos.org/docs/getting-started/installation-guide"},"https://legend.finos.org/docs/getting-started/installation-guide")),(0,s.yg)("h2",{id:"example"},"Example"),(0,s.yg)("p",null,"Legend Studio Project - ",(0,s.yg)("a",{parentName:"p",href:"https://gitlab.com/finosfoundation/legend/showcase/legend-showcase-service-store"},"https://gitlab.com/finosfoundation/legend/showcase/legend-showcase-service-store")," "),(0,s.yg)("h2",{id:"setup"},"Setup"),(0,s.yg)("p",null,"N/A"),(0,s.yg)("h2",{id:"tutorial"},"Tutorial"),(0,s.yg)("p",null,"In Legend, a ",(0,s.yg)("inlineCode",{parentName:"p"},"Store"),' is a "system" that stores data. A common store is a relational database like say Postgres. '),(0,s.yg)("p",null,"But data is stored and served by other systems that are not databases. A ",(0,s.yg)("inlineCode",{parentName:"p"},"ServiceStore"),' treats a REST/HTTP based API (or "service") as a store of data.'),(0,s.yg)("p",null,"This allows users to model and access data the same way irrespective of whether the data is from a relational database or a REST API.  "),(0,s.yg)("p",null,"With this definition in place, we can query a GraphQL server that implements the above types, as follows :"),(0,s.yg)("h3",{id:"1-basic-modeling"},"1. Basic modeling"),(0,s.yg)("p",null,"We start with a simple model of ",(0,s.yg)("inlineCode",{parentName:"p"},"User"),"s and ",(0,s.yg)("inlineCode",{parentName:"p"},"Repositories"),". This tutorial demonstrates how we map these logical concepts to the ",(0,s.yg)("a",{parentName:"p",href:"https://docs.github.com/en/rest?apiVersion=2022-11-28"},"Github API"),"."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"// A user is associated with one/more repositories\n\nClass legend::showcase::servicestore::models::Repository\n{\n  id: Integer[1];\n  name: String[1];\n  full_name: String[1];\n  private: Boolean[1];\n}\n\nClass legend::showcase::servicestore::models::User\n{\n  name: String[0..1];\n  email: String[0..1];\n  login: String[1];\n  id: Integer[1];\n  node_id: String[1];\n  avatar_url: String[1];\n  gravatar_id: String[1];\n  // elided ... \n  site_admin: Boolean[1];\n  starred_at: String[0..1];\n}\n\nAssociation legend::showcase::servicestore::models::UserRepository\n{\n  user: legend::showcase::servicestore::models::User[0..1];\n  repositories: legend::showcase::servicestore::models::Repository[*];\n}\n")),(0,s.yg)("h3",{id:"2-service-store"},"2. Service Store"),(0,s.yg)("p",null,"The ",(0,s.yg)("inlineCode",{parentName:"p"},"ServiceStore"),' DSL is how we describe the logical shape of an API or "service" that provides data.'),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"###ServiceStore\nServiceStore legend::showcase::servicestore::store::GithubApis\n(\n  Service UsersApi\n  (\n    path : '/users';\n    method : GET;\n    response : [legend::showcase::servicestore::models::User <- legend::showcase::servicestore::store::GithubApisBinding];\n    security : [];\n  )\n  ServiceGroup UserApiGroup\n  (\n    path : '/users';\n\n    Service UserApi\n    (\n      path : '/{username}';\n      method : GET;\n      parameters :\n      (\n        username : String ( location = path )\n      );\n      response : legend::showcase::servicestore::models::User <- legend::showcase::servicestore::store::GithubApisBinding;\n      security : [];\n    )\n    Service RepoApi\n    (\n      path : '/{username}/repos';\n      method : GET;\n      parameters :\n      (\n        username : String ( location = path )\n      );\n      response : legend::showcase::servicestore::models::Repository <- legend::showcase::servicestore::store::GithubApisBinding;\n      security : [];\n    )\n  )\n)\n")),(0,s.yg)("p",null,'In the example above, we declare a "service" called ',(0,s.yg)("inlineCode",{parentName:"p"},"UserApi")," that is accessible over an HTTP path ",(0,s.yg)("inlineCode",{parentName:"p"},"/users/{username}")," and returns data that can be mapped to the logical model class ",(0,s.yg)("inlineCode",{parentName:"p"},"legend::showcase::servicestore::models::User")),(0,s.yg)("h3",{id:"3-binding"},"3. Binding"),(0,s.yg)("p",null,"A binding is how we bind to an eternal data format. The ",(0,s.yg)("inlineCode",{parentName:"p"},"Service")," definition points to a ",(0,s.yg)("inlineCode",{parentName:"p"},"Binding"),". "),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"Service UserApi\n    (\n      path : '/{username}';\n      method : GET;\n      parameters :\n      (\n        username : String ( location = path )\n      );\n      response : legend::showcase::servicestore::models::User <- legend::showcase::servicestore::store::GithubApisBinding;\n      security : [];\n    )\n")),(0,s.yg)("p",null,'The definition of the binding declares that the "service" returns data of type JSON.'),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"###ExternalFormat\nBinding legend::showcase::servicestore::store::GithubApisBinding\n{\n  contentType: 'application/json';\n  modelIncludes: [\n    legend::showcase::servicestore::models::User,\n    legend::showcase::servicestore::models::Repository\n  ];\n}\n")),(0,s.yg)("h3",{id:"4-mapping"},"4. Mapping"),(0,s.yg)("p",null,"Just as with other stores in Legend, the logical model is mapped to the logical definition of the store."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"###Mapping\nMapping legend::showcase::servicestore::mapping::GithubAPIMapping\n(\n  *legend::showcase::servicestore::models::User[user]: ServiceStore\n  {\n    ~service [legend::showcase::servicestore::store::GithubApis] UsersApi\n    ~service [legend::showcase::servicestore::store::GithubApis] UserApiGroup.UserApi\n    (\n      ~request\n      (\n        parameters\n        (\n          username = $this.login\n        )\n      )\n    )\n  }\n  // elided ...\n  \n  legend::showcase::servicestore::models::UserRepository: XStore\n  {\n    user[repo, user]: $that.login == $this.username,\n    repositories[user, repo]: $that.username == $this.login\n  }\n)\n")),(0,s.yg)("p",null,"In the example above, we map the logical class ",(0,s.yg)("inlineCode",{parentName:"p"},"legend::showcase::servicestore::models::User")," to the data returned by the ",(0,s.yg)("inlineCode",{parentName:"p"},"UsersApi"),". "),(0,s.yg)("p",null,"We also map the class to the data returned by the ",(0,s.yg)("inlineCode",{parentName:"p"},"UserApiGroup.UserApi"),". Since this service definition accepts a ",(0,s.yg)("inlineCode",{parentName:"p"},"username")," parameter, we map the parameter as well. "),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"TODO - Update the explanation of parameter mapping and also describe XStore\n")),(0,s.yg)("h3",{id:"5-connection"},"5. Connection"),(0,s.yg)("p",null,'So far we have modeled a logical "service". Using the ',(0,s.yg)("inlineCode",{parentName:"p"},"Connection")," we describe a specific physical service. "),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"###Connection\nServiceStoreConnection legend::showcase::servicestore::connection::GithubConnection\n{\n  store: legend::showcase::servicestore::store::GithubApis;\n  baseUrl: 'https://api.github.com';\n}\n")),(0,s.yg)("p",null,"In the above example, we declare that we want to consume data from the Github API hosted at ",(0,s.yg)("inlineCode",{parentName:"p"},"https://api.github.com"),"."),(0,s.yg)("p",null,"For production use cases, the ",(0,s.yg)("inlineCode",{parentName:"p"},"Connection")," should include a definition of the authentication protocol to be used when connecting to the service."),(0,s.yg)("h3",{id:"6-legend-service"},"6. Legend Service"),(0,s.yg)("p",null,'Finally, we have a "Legend Service" that groups all the above concepts.'),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"###Service\nService legend::showcase::servicestore::service::FetchGithubUsers\n{\n  pattern: '/legend/showcase/servicestore/fetchUsers';\n  owners:\n  [\n    'hardik121998'\n  ];\n  documentation: '';\n  autoActivateUpdates: true;\n  execution: Single\n  {\n    query: |legend::showcase::servicestore::models::User.all()->graphFetch(#{legend::showcase::servicestore::models::User{avatar_url,email,events_url,followers_url,following_url,gists_url,gravatar_id,html_url,id,login,name,node_id,organizations_url,received_events_url,repos_url,site_admin,starred_at,starred_url,subscriptions_url,type,url}}#)->serialize(#{legend::showcase::servicestore::models::User{avatar_url,email,events_url,followers_url,following_url,gists_url,gravatar_id,html_url,id,login,name,node_id,organizations_url,received_events_url,repos_url,site_admin,starred_at,starred_url,subscriptions_url,type,url}}#);\n    mapping: legend::showcase::servicestore::mapping::GithubAPIMapping;\n    runtime: legend::showcase::servicestore::runtime::ServiceStoreRuntime;\n  }\n")),(0,s.yg)("h3",{id:"7-execution"},"7. Execution"),(0,s.yg)("p",null,"When the above service is executed, Legend connects to the Github API via the ",(0,s.yg)("inlineCode",{parentName:"p"},"Connection"),", fetches the data and maps it to the logical domain classes.  "),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"Service UI",src:t(1593).A,width:"1288",height:"851"})),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"Service Execution",src:t(9448).A,width:"1319",height:"946"})),(0,s.yg)("h2",{id:"reference"},"Reference"),(0,s.yg)("p",null,"Reference documentation on the design/implementation of the ServiceStore integration can be found ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/finos/legend-engine/tree/master/docs/store/extensions/ServiceStore"},"here")),(0,s.yg)("h2",{id:"code"},"Code"),(0,s.yg)("p",null,"Legend Engine source code is in the Maven modules named ",(0,s.yg)("inlineCode",{parentName:"p"},"legend-engine-xt-servicestore-XXXX")))}h.isMDXComponent=!0},9448:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/service-execution-45a869ecbd550009f3ea2bff29841dd3.png"},1593:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/service-12144f4991e835195d2ec93c646328fc.png"}}]);