"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[591],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),s=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=s(e.components);return r.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(t),m=n,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(h,i(i({ref:a},p),{},{components:t})):r.createElement(h,i({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var d={};for(var l in a)hasOwnProperty.call(a,l)&&(d[l]=a[l]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},87523:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var r=t(87462),n=t(63366),o=(t(67294),t(3905)),i=["components"],d={id:"data-loader",title:"Data Loaders"},l=void 0,s={unversionedId:"server/data-loader/data-loader",id:"server/data-loader/data-loader",title:"Data Loaders",description:"Data Loaders are a popular caching pattern from the JavaScript GraphQL implementation.",source:"@site/docs/server/data-loader/data-loader.md",sourceDirName:"server/data-loader",slug:"/server/data-loader/",permalink:"/graphql-kotlin/docs/server/data-loader/",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/data-loader/data-loader.md",tags:[],version:"current",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1657216336,formattedLastUpdatedAt:"7/7/2022",frontMatter:{id:"data-loader",title:"Data Loaders"},sidebar:"docs",previous:{title:"Automatic Persisted Queries (APQ)",permalink:"/graphql-kotlin/docs/server/automatic-persisted-queries/"},next:{title:"Data Loader Instrumentations",permalink:"/graphql-kotlin/docs/server/data-loader/data-loader-instrumentation"}},p={},c=[{value:"<code>KotlinDataLoader</code>",id:"kotlindataloader",level:2},{value:"<code>KotlinDataLoaderRegistryFactory</code>",id:"kotlindataloaderregistryfactory",level:2},{value:"<code>KotlinDataLoaderRegistry</code>",id:"kotlindataloaderregistry",level:2},{value:"<code>getValueFromDataLoader</code>",id:"getvaluefromdataloader",level:2}],u={toc:c};function m(e){var a=e.components,t=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Data Loaders are a popular caching pattern from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql/dataloader"},"JavaScript GraphQL implementation"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java")," provides ",(0,o.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/v16/batching/"},"support for this pattern"),"\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoaderRegistry"),"."),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," allows you to abstract the schema generation and data fetching code, you may not even need\ndata loaders if instead you have some persistant cache on your server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class User(val id: ID) {\n    // The friendService and userService, which have nothing to do with GraphQL,\n    // should be concerned with caching and batch calls instead of your schema classes\n    fun getFriends(): List<User> {\n        val friends: List<ID> = friendService.getFriends(id)\n        return userService.getUsers(friends)\n    }\n\n}\n")),(0,o.kt)("p",null,"If you still want to use data loaders though, they are supported through the common interfaces."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-dataloader")," module provides convenient abstractions over the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/java-dataloader"},"java-dataloader"),"."),(0,o.kt)("h2",{id:"kotlindataloader"},(0,o.kt)("inlineCode",{parentName:"h2"},"KotlinDataLoader")),(0,o.kt)("p",null,"To help in the registration of ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoaders"),", we have created an interface ",(0,o.kt)("inlineCode",{parentName:"p"},"KotlinDataLoader"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface KotlinDataLoader<K, V> {\n    val dataLoaderName: String\n    fun getDataLoader(): DataLoader<K, V>\n}\n")),(0,o.kt)("p",null,"This allows for library users to still have full control over the creation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," and its various configuration\noptions but also allows common server code to handle the registration, generation and execution of the request."),(0,o.kt)("h2",{id:"kotlindataloaderregistryfactory"},(0,o.kt)("inlineCode",{parentName:"h2"},"KotlinDataLoaderRegistryFactory")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/graphql-request-handler"},"GraphQLRequestHandler")," accepts an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"KotlinDataLoaderRegistryFactory"),".\nwhich generates a new ",(0,o.kt)("inlineCode",{parentName:"p"},"KotlinDataLoaderRegistry")," on every request. The registry is a map of a unique data loader names to a ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," object that handles the cache for an output type in your graph.\nA ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," caches the types by some unique value, usually by the type id, and can handle different types of batch requests."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class UserDataLoader : KotlinDataLoader<ID, User> {\n    override val dataLoaderName = "UserDataLoader"\n    override fun getDataLoader() = DataLoaderFactory.newDataLoader<ID, User> { ids ->\n        CompletableFuture.supplyAsync {\n            ids.map { id -> userService.getUser(id) }\n        }\n    }\n}\n\nclass FriendsDataLoader : KotlinDataLoader<ID, List<User>> {\n    override val dataLoaderName = "FriendsDataLoader"\n    override fun getDataLoader() = DataLoaderFactory.newDataLoader<ID, User>(\n        { ids ->\n            CompletableFuture.supplyAsync {\n                ids.map { id ->\n                    val friends: List<ID> = friendService.getFriends(id)\n                    userService.getUsers(friends)\n                }\n            }\n        },\n        DataLoaderOptions.newOptions().setCachingEnabled(false)\n    )\n}\n\nval dataLoaderRegistryFactory = KotlinDataLoaderRegistryFactory(\n    UserDataLoader(), FriendsDataLoader()\n)\n\nval dataLoaderRegistry = dataLoaderRegistryFactory.generate()\n')),(0,o.kt)("h2",{id:"kotlindataloaderregistry"},(0,o.kt)("inlineCode",{parentName:"h2"},"KotlinDataLoaderRegistry")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/executions/graphql-kotlin-dataloader/src/main/kotlin/com/expediagroup/graphql/dataloader/KotlinDataLoaderRegistry.kt"},"KotlinDataLoaderRegistry"),"\nis a decorator of the original ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/java-dataloader/blob/master/src/main/java/org/dataloader/DataLoaderRegistry.java"},"DataLoaderRegistry"),"\nthat keeps track of all underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader"),"s futures. By keeping track of to cache map containing returned futures,\nwe get more granular control when to dispatch data loader calls."),(0,o.kt)("h2",{id:"getvaluefromdataloader"},(0,o.kt)("inlineCode",{parentName:"h2"},"getValueFromDataLoader")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," includes a helpful extension function on the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataFetchingEnvironment")," so that you can easily retrieve values from the data loaders in your schema code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class User(val id: ID) {\n    @GraphQLDescription("Get the users friends using data loader")\n    fun getFriends(dataFetchingEnvironment: DataFetchingEnvironment): CompletableFuture<List<User>> {\n        return dataFetchingEnvironment.getValueFromDataLoader("FriendsDataLoader", id)\n    }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Given that ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java")," relies on ",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture"),"s for scheduling and asynchronous execution of ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," calls,\ncurrently we don't provide any native support for ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," pattern using coroutines. Instead, return\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," directly from your ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader"),"s. See issue ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/986"},"#986"),"."))))}m.isMDXComponent=!0}}]);