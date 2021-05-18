(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),i=(a(0),a(182)),o={id:"spring-beans",title:"Automatically Created Beans",original_id:"spring-beans"},b={unversionedId:"spring-server/spring-beans",id:"version-3.x.x/spring-server/spring-beans",isDocsHomePage:!1,title:"Automatically Created Beans",description:"graphql-kotlin-spring-server automatically creates all the necessary beans to start GraphQL web server. Many of the beans are conditionally created and default behavior",source:"@site/versioned_docs/version-3.x.x/spring-server/spring-beans.md",slug:"/spring-server/spring-beans",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-beans",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/spring-server/spring-beans.md",version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1621323280,sidebar:"version-3.x.x/docs",previous:{title:"Spring Server Overview",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-overview"},next:{title:"Configuration Properties",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-properties"}},c=[{value:"Schema Generation",id:"schema-generation",children:[]},{value:"Execution",id:"execution",children:[]}],l={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," automatically creates all the necessary beans to start GraphQL web server. Many of the beans are conditionally created and default behavior\ncan be customized by providing custom beans in your application context. See sections below for the information about all automatically created beans."),Object(i.b)("h2",{id:"schema-generation"},"Schema Generation"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Bean"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"FederatedSchemaGeneratorHooks"),Object(i.b)("td",{parentName:"tr",align:"left"},"Schema generator hooks used to build federated schema.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("em",{parentName:"td"},"Created only if federation is enabled"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"FederatedSchemaGeneratorConfig"),Object(i.b)("td",{parentName:"tr",align:"left"},"Federated schema generator configuration information. You can customize the configuration by providing ",Object(i.b)("inlineCode",{parentName:"td"},"TopLevelNames"),", ",Object(i.b)("inlineCode",{parentName:"td"},"FederatedSchemaGeneratorHooks")," and ",Object(i.b)("inlineCode",{parentName:"td"},"KotlinDataFetcherFactoryProvider")," beans.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("em",{parentName:"td"},"Created instead of default ",Object(i.b)("inlineCode",{parentName:"em"},"SchemaGeneratorConfig")," if federation is enabled"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"FederatedTypeRegistry"),Object(i.b)("td",{parentName:"tr",align:"left"},"Default type registry without any resolvers. See ",Object(i.b)("a",{parentName:"td",href:"/graphql-kotlin/docs/3.x.x/federated/type-resolution"},"Federated Type Resolution")," for more details.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("em",{parentName:"td"},"Created only if federation is enabled. You should register your custom type registry bean whenever implementing federated GraphQL schema with extended types"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"GraphQLSchema"),Object(i.b)("td",{parentName:"tr",align:"left"},"GraphQL schema generated based on the schema generator configuration and  ",Object(i.b)("inlineCode",{parentName:"td"},"Query"),", ",Object(i.b)("inlineCode",{parentName:"td"},"Mutation")," and ",Object(i.b)("inlineCode",{parentName:"td"},"Subscription")," objects available in the application context.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"KotlinDataFetcherFactoryProvider"),Object(i.b)("td",{parentName:"tr",align:"left"},"Factory used during schema construction to obtain ",Object(i.b)("inlineCode",{parentName:"td"},"DataFetcherFactory")," that should be used for target function (using Spring aware ",Object(i.b)("inlineCode",{parentName:"td"},"SpringDataFetcher"),") and property resolution.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"SchemaGeneratorConfig"),Object(i.b)("td",{parentName:"tr",align:"left"},"Schema generator configuration information, see ",Object(i.b)("a",{parentName:"td",href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/generator-config"},"Schema Generator Configuration")," for details. Can be customized by providing ",Object(i.b)("inlineCode",{parentName:"td"},"TopLevelNames"),", ",Object(i.b)("a",{parentName:"td",href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/generator-config"},"SchemaGeneratorHooks")," and ",Object(i.b)("inlineCode",{parentName:"td"},"KotlinDataFetcherFactoryProvider")," beans.")))),Object(i.b)("h2",{id:"execution"},"Execution"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Bean"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"ContextWebFilter"),Object(i.b)("td",{parentName:"tr",align:"left"},"Default web filter that populates GraphQL context in the reactor subscriber context.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"DataFetcherExceptionHandler"),Object(i.b)("td",{parentName:"tr",align:"left"},"GraphQL exception handler used from the various execution strategies, defaults to ",Object(i.b)("a",{parentName:"td",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/exception/KotlinDataFetcherExceptionHandler.kt"},"KotlinDataFetcherExceptionHandler"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"DataLoaderRegistryFactory"),Object(i.b)("td",{parentName:"tr",align:"left"},"Factory used to create DataLoaderRegistry instance per query execution. See ",Object(i.b)("a",{parentName:"td",href:"https://www.graphql-java.com/documentation/v14/batching/"},"graphql-java documentation")," for more details.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"GraphQL"),Object(i.b)("td",{parentName:"tr",align:"left"},"GraphQL query execution engine generated using ",Object(i.b)("inlineCode",{parentName:"td"},"GraphQLSchema")," with default async execution strategies. GraphQL engine can be customized by optionally providing a list of ",Object(i.b)("a",{parentName:"td",href:"https://www.graphql-java.com/documentation/v14/instrumentation/"},"Instrumentation")," beans (which can be ordered by implementing Spring Ordered interface), ",Object(i.b)("a",{parentName:"td",href:"https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/execution/ExecutionIdProvider.java"},"ExecutionIdProvider")," and ",Object(i.b)("a",{parentName:"td",href:"https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/execution/preparsed/PreparsedDocumentProvider.java"},"PreparsedDocumentProvider")," in the application context.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"GraphQLContextFactory"),Object(i.b)("td",{parentName:"tr",align:"left"},"Factory used by context WebFilter to generate GraphQL context based on the incoming request. GraphQL context can be any object. Defaults to empty ",Object(i.b)("a",{parentName:"td",href:"/graphql-kotlin/docs/3.x.x/spring-server/spring-graphql-context"},"GraphQLContext"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"QueryHandler"),Object(i.b)("td",{parentName:"tr",align:"left"},"Handler invoked from GraphQL query route that executes the incoming request, defaults to ",Object(i.b)("a",{parentName:"td",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/QueryHandler.kt"},"SimpleQueryHandler"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"SubscriptionHandler"),Object(i.b)("td",{parentName:"tr",align:"left"},"Web socket handler for executing GraphQL subscriptions, defaults to ",Object(i.b)("a",{parentName:"td",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/SubscriptionHandler.kt#L49"},"SimpleSubscriptionHandler"),".",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("em",{parentName:"td"},"Created only if ",Object(i.b)("inlineCode",{parentName:"em"},"Subscription")," bean is available in the context."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"WebSocketHandlerAdapter"),Object(i.b)("td",{parentName:"tr",align:"left"},"See ",Object(i.b)("a",{parentName:"td",href:"https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/reactive/socket/server/support/WebSocketHandlerAdapter.html"},"Spring documentation"),".",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("em",{parentName:"td"},"Created only if ",Object(i.b)("inlineCode",{parentName:"em"},"Subscription")," bean is available in the context."))))),Object(i.b)("p",null,"The following beans are currently automatically created and cannot be disabled:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default routes for GraphQL queries/mutations and SDL endpoint"),Object(i.b)("li",{parentName:"ul"},"Default route for ",Object(i.b)("a",{parentName:"li",href:"https://github.com/prisma-labs/graphql-playground"},"Prisma Labs Playground"),", created only if playground is enabled"),Object(i.b)("li",{parentName:"ul"},"Default ",Object(i.b)("inlineCode",{parentName:"li"},"ApolloSubscriptionProtocolHandler")," for handling GraphQL subscriptions, created only if ",Object(i.b)("inlineCode",{parentName:"li"},"Subscription")," bean is available in the context"),Object(i.b)("li",{parentName:"ul"},"Default ",Object(i.b)("inlineCode",{parentName:"li"},"SubscriptionWebSocketHandler")," that utilizes above subscription protocol handler, created only if ",Object(i.b)("inlineCode",{parentName:"li"},"Subscription")," bean is available in the context"),Object(i.b)("li",{parentName:"ul"},"Default subscription handler mapping, created only if ",Object(i.b)("inlineCode",{parentName:"li"},"Subscription")," bean is available in the context")))}p.isMDXComponent=!0},182:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,u=d["".concat(o,".").concat(m)]||d[m]||s[m]||i;return a?n.a.createElement(u,b(b({ref:t},l),{},{components:a})):n.a.createElement(u,b({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var l=2;l<i;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);