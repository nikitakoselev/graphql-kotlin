"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"graphql-context-factory",title:"GraphQLContextFactory"},s=void 0,c={unversionedId:"server/graphql-context-factory",id:"version-5.x.x/server/graphql-context-factory",title:"GraphQLContextFactory",description:"If you are using graphql-kotlin-spring-server, see the Spring specific documentation.",source:"@site/versioned_docs/version-5.x.x/server/graphql-context-factory.md",sourceDirName:"server",slug:"/server/graphql-context-factory",permalink:"/graphql-kotlin/docs/5.x.x/server/graphql-context-factory",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/server/graphql-context-factory.md",tags:[],version:"5.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1657216336,formattedLastUpdatedAt:"7/7/2022",frontMatter:{id:"graphql-context-factory",title:"GraphQLContextFactory"},sidebar:"version-5.x.x/docs",previous:{title:"GraphQLRequestParser",permalink:"/graphql-kotlin/docs/5.x.x/server/graphql-request-parser"},next:{title:"GraphQLRequestHandler",permalink:"/graphql-kotlin/docs/5.x.x/server/graphql-request-handler"}},p={},u=[{value:"Nullable Context",id:"nullable-context",level:2},{value:"Suspendable Factory",id:"suspendable-factory",level:2},{value:"Server-Specific Abstractions",id:"server-specific-abstractions",level:2},{value:"HTTP Headers and Cookies",id:"http-headers-and-cookies",level:2},{value:"Federated Tracing",id:"federated-tracing",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),", see the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/server/spring-server/spring-graphql-context"},"Spring specific documentation"),"."))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContextFactory")," is a generic method for generating a GraphQL context for each request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface GraphQLContextFactory<out Context : GraphQLContext, Request> {\n    suspend fun generateContext(request: Request): Context?\n    suspend fun generateContextMap(request: Request): Map<*, Any>?\n}\n")),(0,o.kt)("p",null,"Given the generic server request, the interface should create a legacy ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," class and a new context map to be used for every new operation.\nThe legacy context class must implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," interface from ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),".\nSee ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/schema-generator/execution/contextual-data"},"execution context")," for more info on how the context can be used in the schema functions."),(0,o.kt)("h2",{id:"nullable-context"},"Nullable Context"),(0,o.kt)("p",null,"The factory may return ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," if a context is not required for execution. This allows the library to have a default factory that just returns ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),".\nIf your custom factory never returns ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", then there is no need to use nullable arguments.\nHowever, if your custom factory may return ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", you must define the context argument as nullable in the schema functions or a runtime exception will be thrown."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Deprecated\ndata class CustomContext(val value: String) : GraphQLContext\n\nclass CustomFactory : GraphQLContextFactory<CustomContext, ServerRequest> {\n    override suspend fun generateContext(request: ServerRequest): Context? {\n        if (isSpecialRequest(request)) {\n            return null\n        }\n\n        val value = callSomeSuspendableService(request)\n        return CustomContext(value)\n    }\n\n    override suspend fun generateContextMap(request: ServerRequest): Map<*, Any>? {\n        if (isSpecialRequest(request)) {\n            return null\n        }\n\n        val value = callSomeSuspendableService(request)\n        return mapOf("myKey" to value)\n    }\n}\n\nclass MyQuery : Query {\n\n    fun getResults(dfe: DataFetchingEnvironment, input: String): String {\n        val contextMapValue = dfe.graphQLContext.get("myKey")\n        val contextObjectValue = (dfe.context as? CustomContext)?.value\n        val contextValue = contextMapValue ?: contextObjectValue\n        if (contextValue != null) {\n            return getDataWithContextValue(input, contextValue)\n        }\n\n        return getBasicData(input)\n    }\n}\n')),(0,o.kt)("h2",{id:"suspendable-factory"},"Suspendable Factory"),(0,o.kt)("p",null,"The interface is marked as a ",(0,o.kt)("inlineCode",{parentName:"p"},"suspend")," function to allow the asynchronous fetching of context data.\nThis may be helpful if you need to call some other services to calculate a context value."),(0,o.kt)("h2",{id:"server-specific-abstractions"},"Server-Specific Abstractions"),(0,o.kt)("p",null,"A specific ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-*-server")," library may provide an abstract class on top of this interface so users only have to be concerned with the context class and not the server class type.\nFor example the ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides the following class, which sets the request type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"abstract class SpringGraphQLContextFactory<out T : GraphQLContext> : GraphQLContextFactory<T, ServerRequest>\n")),(0,o.kt)("h2",{id:"http-headers-and-cookies"},"HTTP Headers and Cookies"),(0,o.kt)("p",null,"For common use cases around authorization, authentication, or tracing you may need to read HTTP headers and cookies.\nThis should be done in the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContextFactory")," and relevant data should be added to the context to be accessible during schema exectuion."),(0,o.kt)("h2",{id:"federated-tracing"},"Federated Tracing"),(0,o.kt)("p",null,"If you need ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/schema-generator/federation/federation-tracing"},"federation tracing support"),", the context must implement the separate ",(0,o.kt)("inlineCode",{parentName:"p"},"FederatedGraphQLContext")," interface from ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation"),"."),(0,o.kt)("p",null,"The reference server implementation ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/server/spring-server/spring-graphql-context"},"supports federated tracing in the context"),"."))}h.isMDXComponent=!0}}]);