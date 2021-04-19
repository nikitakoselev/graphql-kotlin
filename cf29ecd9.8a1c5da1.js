(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(181)),i={id:"introspection",title:"Introspection",original_id:"introspection"},c={unversionedId:"schema-generator/execution/introspection",id:"version-3.x.x/schema-generator/execution/introspection",isDocsHomePage:!1,title:"Introspection",description:"By default, GraphQL servers expose a built-in system, called introspection, that exposes details about the underlying schema.",source:"@site/versioned_docs/version-3.x.x/schema-generator/execution/introspection.md",slug:"/schema-generator/execution/introspection",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/introspection",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/execution/introspection.md",version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1618874903,sidebar:"version-3.x.x/docs",previous:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/subscriptions"},next:{title:"Apollo Federation",permalink:"/graphql-kotlin/docs/3.x.x/federated/apollo-federation"}},s=[{value:"Introspection types",id:"introspection-types",children:[]},{value:"Disabling Introspection",id:"disabling-introspection",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"By default, GraphQL servers expose a built-in system, called ",Object(a.b)("strong",{parentName:"p"},"introspection"),", that exposes details about the underlying schema.\nClients can use introspection to obtain information about all the supported queries as well as all the types exposed in the schema."),Object(a.b)("h2",{id:"introspection-types"},"Introspection types"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"_","_","schema")," - root level query field that provides information about all entry points (e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"queryType"),"), all types exposed\nby the schema (including built-in scalars and introspection types) as well as all directives supported by the system"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"_","_","type(name: String!)")," - root level query field that provides information about the requested type (if it exists)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"typename")," - field that can be added to ",Object(a.b)("em",{parentName:"strong"},"ANY")," selection and will return the name of the enclosing type, ","`"),"typename","`","\nis often used in polymorphic queries in order to easily determine underlying implementation type"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Directive"),", ","_"),"DirectiveLocation","_",", ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"EnumValue"),", ","_"),"Field","_",", ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"InputValue"),", ","_"),"Schema","_",", ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Type"),", ","_"),"TypeKind","_"," - built-in\nintrospection types that are used to describe the schema.")),Object(a.b)("p",null,"For example, the query below will return a root Query object name as well as names of all types and all directives."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"\nquery {\n  __schema {\n    queryType {\n      name\n    }\n    types {\n      name\n    }\n    directives {\n      name\n    }\n  }\n}\n\n")),Object(a.b)("p",null,"Additional information on introspection can be found on ",Object(a.b)("a",{parentName:"p",href:"https://graphql.org/learn/introspection/"},"GraphQL.org"),"."),Object(a.b)("h2",{id:"disabling-introspection"},"Disabling Introspection"),Object(a.b)("p",null,"Introspection system can be disabled by specifying ",Object(a.b)("inlineCode",{parentName:"p"},"introspectionEnabled=false")," configuration option on an instance of\n",Object(a.b)("inlineCode",{parentName:"p"},"SchemaGeneratorConfig")," that will be used by the ",Object(a.b)("inlineCode",{parentName:"p"},"SchemaGenerator")," to generate the GraphQL schema."),Object(a.b)("p",null,"Many GraphQL tools (e.g. ",Object(a.b)("a",{parentName:"p",href:"https://github.com/prisma-labs/graphql-playground"},"GraphQL Playground")," or ",Object(a.b)("a",{parentName:"p",href:"https://github.com/graphql/graphiql"},"GraphiQL"),")\nrely on introspection queries to function properly. Disabling introspection will prevent clients from accessing ",Object(a.b)("inlineCode",{parentName:"p"},"__schema"),"\nand ",Object(a.b)("inlineCode",{parentName:"p"},"__type")," fields. This may break some of the functionality that your clients might rely on and should be used with\nextreme caution."))}l.isMDXComponent=!0},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||a;return n?o.a.createElement(d,c(c({ref:t},p),{},{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);