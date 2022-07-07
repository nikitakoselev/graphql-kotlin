"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1011],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),v=a,g=d["".concat(s,".").concat(v)]||d[v]||c[v]||i;return t?n.createElement(g,o(o({ref:r},p),{},{components:t})):n.createElement(g,o({ref:r},p))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(67294);function a(e){var r=e.children,t=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:a},r)}},9877:(e,r,t)=>{t.d(r,{Z:()=>p});var n=t(87462),a=t(67294),i=t(72389),o=t(63725),l=t(86010);const s="tabItem_LplD";function u(e){var r,t,i,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,v=e.groupId,g=e.className,m=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:m.map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes}})),h=(0,o.lx)(f,(function(e,r){return e.value===r.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(r=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value)?r:null==(i=m[0])?void 0:i.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),y=k.tabGroupChoices,w=k.setTabGroupChoices,x=(0,a.useState)(b),N=x[0],O=x[1],S=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var E=y[v];null!=E&&E!==N&&f.some((function(e){return e.value===E}))&&O(E)}var q=function(e){var r=e.currentTarget,t=S.indexOf(r),n=f[t].value;n!==N&&(T(r),O(n),null!=v&&w(v,n))},C=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n=S.indexOf(e.currentTarget)+1;t=S[n]||S[0];break;case"ArrowLeft":var a=S.indexOf(e.currentTarget)-1;t=S[a]||S[S.length-1]}null==(r=t)||r.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},g)},f.map((function(e){var r=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===r?0:-1,"aria-selected":N===r,key:r,ref:function(e){return S.push(e)},onKeyDown:C,onFocus:q,onClick:q},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":N===r})}),null!=t?t:r)}))),u?(0,a.cloneElement)(m.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==N})}))))}function p(e){var r=(0,i.Z)();return a.createElement(u,(0,n.Z)({key:String(r)},e))}},22133:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>u,metadata:()=>c,toc:()=>v});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=t(9877),l=t(58215),s=["components"],u={id:"spring-overview",title:"Spring Server Overview"},p=void 0,c={unversionedId:"server/spring-server/spring-overview",id:"version-4.x.x/server/spring-server/spring-overview",title:"Spring Server Overview",description:"graphql-kotlin-spring-server",source:"@site/versioned_docs/version-4.x.x/server/spring-server/spring-overview.mdx",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-overview",permalink:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-overview",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/server/spring-server/spring-overview.mdx",tags:[],version:"4.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1657216336,formattedLastUpdatedAt:"7/7/2022",frontMatter:{id:"spring-overview",title:"Spring Server Overview"},sidebar:"version-4.x.x/docs",previous:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/4.x.x/server/server-subscriptions"},next:{title:"Writing Schemas with Spring",permalink:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-schema"}},d={},v=[{value:"WebFlux vs WebMVC",id:"webflux-vs-webmvc",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Default Routes",id:"default-routes",level:2}],g={toc:v};function m(e){var r=e.components,u=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},g,u,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/graphql-kotlin-spring-server"},"graphql-kotlin-spring-server"),"\nis a Spring Boot auto-configuration library that automatically configures beans required to start up a reactive GraphQL\nweb server."),(0,i.kt)("h2",{id:"webflux-vs-webmvc"},"WebFlux vs WebMVC"),(0,i.kt)("p",null,"This library is built on a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html"},"Spring WebFlux (reactive)")," stack which is a non-blocking alternative to a traditional ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html"},"Spring Web MVC (servlet)")," based stack.\nSince the frameworks utilize different threading models they cannot and should not be intermixed.\nWhen building a GraphQL server using ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," all your queries and mutations should follow one of the supported ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/async-models"},"asynchronous execution models"),"."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"The simplest way to create a new Kotlin Spring Boot app is by generating one using ",(0,i.kt)("a",{parentName:"p",href:"https://start.spring.io/"},"Spring Initializr.")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Image of https://start.spring.io/",src:t(84086).Z,width:"1689",height:"726"})),(0,i.kt)("p",null,"Once you get the sample application setup locally, you will need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," dependency:"),(0,i.kt)(o.Z,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"gradle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("com.expediagroup", "graphql-kotlin-spring-server", latestVersion)\n'))),(0,i.kt)(l.Z,{value:"maven",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-spring-server</artifactId>\n    <version>${latestVersion}</version>\n</dependency>\n")))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"At a minimum, in order for ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," to automatically configure your GraphQL web server you need to\nspecify a list of supported packages that can be scanned for exposing your schema objects through reflections."),(0,i.kt)("p",null,"You can do this through the spring application config or by overriding the ",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorConfig")," bean. See customization below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'graphql:\n  packages:\n    - "com.your.package"\n')),(0,i.kt)("h2",{id:"default-routes"},"Default Routes"),(0,i.kt)("p",null,"Your newly created GraphQL server starts up with following preconfigured default routes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"/graphql")," - GraphQL server endpoint used for processing queries and mutations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"/subscriptions")," - GraphQL server endpoint used for processing subscriptions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"/sdl")," - Convenience endpoint that returns current schema in Schema Definition Language format"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"/playground")," - Prisma Labs ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/prisma-labs/graphql-playground"},"GraphQL Playground IDE")," endpoint")))}m.isMDXComponent=!0},84086:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/spring-initializer-a906245aeee5602ea82b7bb98a9a50bb.png"}}]);