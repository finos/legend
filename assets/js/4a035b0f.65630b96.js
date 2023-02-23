"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5479],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7976:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={id:"studio-m2m-mapping",title:"Create a Model-to-Model Mapping",sidebar_label:"Connect Model to Model"},s=void 0,p={unversionedId:"tutorials/studio-m2m-mapping",id:"tutorials/studio-m2m-mapping",title:"Create a Model-to-Model Mapping",description:"Create a Mapping between source and target class",source:"@site/../docs/tutorials/studio-m2m-mapping.md",sourceDirName:"tutorials",slug:"/tutorials/studio-m2m-mapping",permalink:"/docs/tutorials/studio-m2m-mapping",draft:!1,tags:[],version:"current",frontMatter:{id:"studio-m2m-mapping",title:"Create a Model-to-Model Mapping",sidebar_label:"Connect Model to Model"},sidebar:"docs",previous:{title:"Measure",permalink:"/docs/tutorials/studio-measure"},next:{title:"Connect Model to Data",permalink:"/docs/tutorials/studio-relational-mapping"}},c={},d=[{value:"Create a Mapping between source and target class",id:"create-a-mapping-between-source-and-target-class",level:2},{value:"Create a Mapping Test",id:"create-a-mapping-test",level:2},{value:"Execute a Model-to-Model Mapping",id:"execute-a-model-to-model-mapping",level:2},{value:"Execute a Model-to-Model Mapping with Constraints",id:"execute-a-model-to-model-mapping-with-constraints",level:3},{value:"More",id:"more",level:2}],u={toc:d},m="wrapper";function k(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)(m,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-a-mapping-between-source-and-target-class"},"Create a Mapping between source and target class"),(0,o.kt)("p",null,"Let's start by defining the target class, for which we would like to create the mapping."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new class called ",(0,o.kt)("inlineCode",{parentName:"li"},"NewPerson"),"."),(0,o.kt)("li",{parentName:"ol"},"Add a property to ",(0,o.kt)("inlineCode",{parentName:"li"},"NewPerson")," called ",(0,o.kt)("strong",{parentName:"li"},"name"),". Make the property a string with a ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/legend-language#class"},"cardinality")," of 1."),(0,o.kt)("li",{parentName:"ol"},"Add a property to the existing ",(0,o.kt)("inlineCode",{parentName:"li"},"Person")," class called ",(0,o.kt)("strong",{parentName:"li"},"lastName"),". Make the property a string with a ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/legend-language#class"},"cardinality")," of 1."),(0,o.kt)("li",{parentName:"ol"},"Click the",(0,o.kt)("kbd",null,"+")," icon and select",(0,o.kt)("kbd",null,"New Mapping")," to create a new mapping called ",(0,o.kt)("strong",{parentName:"li"},"NewPersonMapping"),"."),(0,o.kt)("li",{parentName:"ol"},"Drag and drop the ",(0,o.kt)("strong",{parentName:"li"},"NewPerson")," target class into the ",(0,o.kt)("strong",{parentName:"li"},"Add a mapping element")," section on the left."),(0,o.kt)("li",{parentName:"ol"},"Hit the ",(0,o.kt)("kbd",null,"Create")," button using the default setting.")),(0,o.kt)("p",null,"Define the source class for our mapping and specifiy the transformation."),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Drag and drop the ",(0,o.kt)("inlineCode",{parentName:"li"},"Person")," source class into the ",(0,o.kt)("kbd",null,"Choose a source")," section on the right."),(0,o.kt)("li",{parentName:"ol"},"To specify the transformation, add the following expression for the ",(0,o.kt)("strong",{parentName:"li"},"name")," property: ",(0,o.kt)("inlineCode",{parentName:"li"},"$src.firstName + ' ' + $src.lastName"),". You can also drag and drop the ",(0,o.kt)("strong",{parentName:"li"},"firstName")," and ",(0,o.kt)("strong",{parentName:"li"},"lastName")," properties from the ",(0,o.kt)("inlineCode",{parentName:"li"},"Person")," source class into the function panel.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create model-to-model",src:a(1857).Z,width:"1385",height:"762"})),(0,o.kt)("h2",{id:"create-a-mapping-test"},"Create a Mapping Test"),(0,o.kt)("p",null,"Legend provides an execution feature to run queries, constraints, and model-to-model/model-to-database transformations. You can use live data (pulled from physical data stores) or generated sample data as inputs to the executions, and review the results to test your model as you build it."),(0,o.kt)("p",null,"You can save these tests and continue to enhance your data models with the comfort that your changes can be tested against expected results."),(0,o.kt)("p",null,"It is good practice to add test to any mapping that you specify:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Right click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"NewPerson")," class and select",(0,o.kt)("kbd",null,"Test"),". Alternatively, you can click on the ",(0,o.kt)("kbd",null,"+")," icon in the bottom left panel to add a test.")),(0,o.kt)("p",null,"Create a sample query to test if the model-to-model mapping executes correctly:"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"pencil")," icon to edit your query."),(0,o.kt)("li",{parentName:"ol"},"Create a very simple query. Make sure to select the ",(0,o.kt)("kbd",null,"Graph fetch")," option for model-to-model queries. Studio does not currently support Projection queries on top of model-to-model mappings. Drag and drop the ",(0,o.kt)("strong",{parentName:"li"},"name")," property from the explorer panel into the fetch structure panel."),(0,o.kt)("li",{parentName:"ol"},"Hit the ",(0,o.kt)("kbd",null,"Save query")," button.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Refer to the ",(0,o.kt)("a",{parentName:"em",href:"/docs/tutorials/query-builder/#create-a-query"},"create a query")," section of the docs for more detailed information about the ",(0,o.kt)("strong",{parentName:"em"},"Query Editor"))),(0,o.kt)("p",null,"Studio generates sample input data for your defined query. You can also modify it if you want:"),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Hit the ",(0,o.kt)("strong",{parentName:"li"},"generate Result")," icon."),(0,o.kt)("li",{parentName:"ol"},"Congrats! You now have a mapping test and can run it any time to validate the execution of your model-to-model mapping.")),(0,o.kt)("h2",{id:"execute-a-model-to-model-mapping"},"Execute a Model-to-Model Mapping"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Drag the ",(0,o.kt)("kbd",null,"Execute")," panel up from the bottom of Studio screen.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the edit button to select the ",(0,o.kt)("inlineCode",{parentName:"p"},"NewPerson")," class for testing. Then select the attribute(s) to test. The source model is auto-populated.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Execute the mapping and review the results.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save this execution as a test to run as part of the pipeline."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Save execution as a test",src:a(5005).Z,width:"2273",height:"964"})))),(0,o.kt)("p",null,"You can promote this ad hoc execution to a test by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"beaker")," icon."),(0,o.kt)("h3",{id:"execute-a-model-to-model-mapping-with-constraints"},"Execute a Model-to-Model Mapping with Constraints"),(0,o.kt)("p",null,"Remember that we can add a ",(0,o.kt)("a",{parentName:"p",href:"../tutorials/studio-create-model/#constraint-1"},"constraint")," on classes? We can also execute model-to-model mappings with constraints to check if the constraint criteria are violated."),(0,o.kt)("p",null,"Let's create a constraint on the ",(0,o.kt)("inlineCode",{parentName:"p"},"NewPerson")," class that checks if the name value is empty ",(0,o.kt)("inlineCode",{parentName:"p"},"$this.name-> == ''")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Right click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"NewPerson")," class and select ",(0,o.kt)("kbd",null,"Execute")),(0,o.kt)("li",{parentName:"ol"},"Create a sample query by clicking on the ",(0,o.kt)("strong",{parentName:"li"},"pencil")," icon"),(0,o.kt)("li",{parentName:"ol"},"Drag and drop the ",(0,o.kt)("strong",{parentName:"li"},"name")," property from the explorer panel into the fetch structure panel"),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("kbd",null,"Check graph fetch")),(0,o.kt)("li",{parentName:"ol"},"Hit the ",(0,o.kt)("kbd",null,"Save query")," button"),(0,o.kt)("li",{parentName:"ol"},"Let's remove the ",(0,o.kt)("strong",{parentName:"li"},"firstName")," test data to intentionally violate the constraint criteria that we specified on our ",(0,o.kt)("inlineCode",{parentName:"li"},"NewPerson")," class"),(0,o.kt)("li",{parentName:"ol"},"Hit the ",(0,o.kt)("kbd",null,"Execute")," button to execute the defined query")),(0,o.kt)("p",null,"Studio will show a ",(0,o.kt)("strong",{parentName:"p"},"defect")," with the details about the violated constraint. Constraints can be both on source and target classes."),(0,o.kt)("h2",{id:"more"},"More"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/showcases/showcase-projects"},"Showcase projects")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/overview/legend-features"},"Legend Features")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/overview/legend-glossary"},"Legend Glossary")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/reference/legend-language"},"Reference documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/studio-workspace"},"Studio tutorials")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/query-builder"},"Query tutorials"))))}k.isMDXComponent=!0},1857:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-M2M-104d5683b8f82bab3868ffb05ddd551c.gif"},5005:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/execution-35b51d1e628dc67bd6a08d1d724f1740.gif"}}]);