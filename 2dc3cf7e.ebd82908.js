(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{182:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),l=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},g=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),g=r,b=u["".concat(o,".").concat(g)]||u[g]||d[g]||a;return t?i.a.createElement(b,s(s({ref:n},c),{},{components:t})):i.a.createElement(b,s({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),i=t(7),a=(t(0),t(182)),o={id:"spring-schema",title:"Writing Schemas with Spring"},s={unversionedId:"server/spring-server/spring-schema",id:"server/spring-server/spring-schema",isDocsHomePage:!1,title:"Writing Schemas with Spring",description:"In order to expose your queries, mutations, and subscriptions in the GraphQL schema create beans that",source:"@site/docs/server/spring-server/spring-schema.md",slug:"/server/spring-server/spring-schema",permalink:"/graphql-kotlin/docs/server/spring-server/spring-schema",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/spring-server/spring-schema.md",version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1621323280,sidebar:"docs",previous:{title:"Spring Server Overview",permalink:"/graphql-kotlin/docs/server/spring-server/spring-overview"},next:{title:"Generating GraphQL Context",permalink:"/graphql-kotlin/docs/server/spring-server/spring-graphql-context"}},p=[{value:"Spring Beans",id:"spring-beans",children:[]},{value:"Spring Beans in Arguments",id:"spring-beans-in-arguments",children:[]}],c={toc:p};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In order to expose your queries, mutations, and subscriptions in the GraphQL schema create beans that\nimplement the corresponding marker interface and they will be automatically picked up by ",Object(a.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),"\nauto-configuration library."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin"},"data class Widget(val id: ID, val value: String)\n\n@Component\nclass WidgetQuery : Query {\n  fun widget(id: ID): Widget = getWidgetFromDB(id)\n}\n\n@Component\nclass WidgetMutation : Mutation {\n  fun updateWidget(id: ID, value: String): Boolean = updateWidgetInDB(id, value)\n}\n\n@Component\nclass WidgetSubscription : Subscription {\n  fun widgetChanges(id: ID): Publisher<Widget> = getPublisherOfUpdates(id)\n}\n")),Object(a.b)("p",null,"will result in a Spring Boot reactive GraphQL web application with following schema."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: Query\n  mutation: Mutation\n  subscription: Subscription\n}\n\ntype Widget {\n    id: ID!\n    value: String!\n}\n\ntype Query {\n  widget(id: ID!): Widget!\n}\n\ntype Mutation {\n    updateWidget(id: ID!, value: String!): Boolean!\n}\n\ntype Subscription {\n    widgetChanges(id: ID!): Widget!\n}\n")),Object(a.b)("h2",{id:"spring-beans"},"Spring Beans"),Object(a.b)("p",null,"Since the top level objects are Spring components, Spring will automatically autowire dependent beans as normal. Refer to ",Object(a.b)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/"},"Spring Documentation")," for details."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass WidgetQuery(private val repository: WidgetRepository) : Query {\n    fun getWidget(id: Int): Widget = repository.findWidget(id)\n}\n")),Object(a.b)("h2",{id:"spring-beans-in-arguments"},"Spring Beans in Arguments"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides Spring-aware data fetcher that automatically autowires Spring beans when they are\nspecified as function arguments. ",Object(a.b)("inlineCode",{parentName:"p"},"@Autowired")," arguments should be explicitly excluded from the GraphQL schema by also\nspecifying ",Object(a.b)("inlineCode",{parentName:"p"},"@GraphQLIgnore"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass SpringQuery : Query {\n    fun getWidget(@GraphQLIgnore @Autowired repository: WidgetRepository, id: Int): Widget = repository.findWidget(id)\n}\n")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"If you are using custom data fetcher make sure that you extend ",Object(a.b)("inlineCode",{parentName:"p"},"SpringDataFetcher")," instead of the base ",Object(a.b)("inlineCode",{parentName:"p"},"FunctionDataFetcher")," to keep this functionallity."))),Object(a.b)("p",null,"We have examples of these techniques implemented in Spring boot in the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/query/NestedQueries.kt"},"example\napp"),"."))}l.isMDXComponent=!0}}]);