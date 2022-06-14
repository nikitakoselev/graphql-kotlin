"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"introspection",title:"Introspection"},s=void 0,p={unversionedId:"schema-generator/execution/introspection",id:"schema-generator/execution/introspection",title:"Introspection",description:"By default, GraphQL servers expose a built-in system, called introspection, that exposes details about the underlying schema.",source:"@site/docs/schema-generator/execution/introspection.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/introspection",permalink:"/graphql-kotlin/docs/schema-generator/execution/introspection",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/execution/introspection.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1655246154,formattedLastUpdatedAt:"6/14/2022",frontMatter:{id:"introspection",title:"Introspection"},sidebar:"docs",previous:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/schema-generator/execution/subscriptions"},next:{title:"Apollo Federation",permalink:"/graphql-kotlin/docs/schema-generator/federation/apollo-federation"}},c={},u=[{value:"Introspection types",id:"introspection-types",level:2},{value:"Disabling Introspection",id:"disabling-introspection",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, GraphQL servers expose a built-in system, called ",(0,a.kt)("strong",{parentName:"p"},"introspection"),", that exposes details about the underlying schema.\nClients can use introspection to obtain information about all the supported queries as well as all the types exposed in the schema."),(0,a.kt)("h2",{id:"introspection-types"},"Introspection types"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"_","_","schema")," - root level query field that provides information about all entry points (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"queryType"),"), all types exposed\nby the schema (including built-in scalars and introspection types) as well as all directives supported by the system"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"_","_","type(name: String!)")," - root level query field that provides information about the requested type (if it exists)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"typename"))," - field that can be added to ",(0,a.kt)("em",{parentName:"li"},"ANY")," selection and will return the name of the enclosing type,\nis often used in polymorphic queries in order to easily determine underlying implementation type"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Directive, DirectiveLocation, EnumValue, Field, InputValue, Schema, Type, TypeKind"))," - built-in\nintrospection types that are used to describe the schema.")),(0,a.kt)("p",null,"For example, the query below will return a root Query object name as well as names of all types and all directives."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  __schema {\n    queryType {\n      name\n    }\n    types {\n      name\n    }\n    directives {\n      name\n    }\n  }\n}\n")),(0,a.kt)("p",null,"Additional information on introspection can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/learn/introspection/"},"GraphQL.org"),"."),(0,a.kt)("h2",{id:"disabling-introspection"},"Disabling Introspection"),(0,a.kt)("p",null,"Introspection system can be disabled by specifying ",(0,a.kt)("inlineCode",{parentName:"p"},"introspectionEnabled=false")," configuration option on an instance of\n",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorConfig")," that will be used by the ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGenerator")," to generate the GraphQL schema."),(0,a.kt)("p",null,"Many GraphQL tools (e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prisma-labs/graphql-playground"},"GraphQL Playground")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphiql"},"GraphiQL"),")\nrely on introspection queries to function properly. Disabling introspection will prevent clients from accessing ",(0,a.kt)("inlineCode",{parentName:"p"},"__schema"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"__type")," fields. This may break some of the functionality that your clients might rely on and should be used with\nextreme caution."))}d.isMDXComponent=!0}}]);