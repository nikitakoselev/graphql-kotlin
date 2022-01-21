"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(944),o=n(6010);const l="tabItem_vU9c",i="tabItemActive_cw6a";var s=37,p=39;const c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,d=e.values,u=e.groupId,m=e.className,g=(0,r.Z)(),h=g.tabGroupChoices,f=g.setTabGroupChoices,v=(0,a.useState)(c),k=v[0],b=v[1],y=a.Children.toArray(e.children),w=[];if(null!=u){var x=h[u];null!=x&&x!==k&&d.some((function(e){return e.value===x}))&&b(x)}var N=function(e){var t=e.currentTarget,n=w.indexOf(t),a=d[n].value;b(a),null!=u&&(f(u,a),setTimeout((function(){var e,n,a,r,o,l,s,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,l=window,s=l.innerHeight,p=l.innerWidth,n>=0&&o<=p&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case p:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case s:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:N,onClick:N},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(9443);const o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2940:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,metadata:()=>c,toc:()=>d,default:()=>m});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(1395),i=n(8215),s=["components"],p={id:"getting-started",title:"Getting Started",slug:"/"},c={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"GraphQL Kotlin is a collection of libraries, built on top of graphql-java, that simplify running GraphQL clients and servers in Kotlin.",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/",permalink:"/graphql-kotlin/docs/",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/getting-started.mdx",version:"current",lastUpdatedBy:"jgorman-exp",lastUpdatedAt:1642776214,formattedLastUpdatedAt:"1/21/2022",frontMatter:{id:"getting-started",title:"Getting Started",slug:"/"},sidebar:"docs",next:{title:"Examples",permalink:"/graphql-kotlin/docs/examples"}},d=[{value:"Installation",id:"installation",children:[]},{value:"Generating a Schema",id:"generating-a-schema",children:[{value:"Apollo Federation",id:"apollo-federation",children:[]}]},{value:"Running a Server",id:"running-a-server",children:[]},{value:"Creating a Client",id:"creating-a-client",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Blogs and Videos",id:"blogs-and-videos",children:[]},{value:"Additional resources",id:"additional-resources",children:[]}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GraphQL Kotlin is a collection of libraries, built on top of ",(0,o.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/"},"graphql-java"),", that simplify running GraphQL clients and servers in Kotlin."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Using a JVM dependency manager, link any ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-*")," library to your project."),(0,o.kt)(l.Z,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"gradle",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("com.expediagroup", "graphql-kotlin-spring-server", latestVersion)\n'))),(0,o.kt)(i.Z,{value:"maven",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-spring-server</artifactId>\n    <version>${latestVersion}</version>\n</dependency>\n")))),(0,o.kt)("h2",{id:"generating-a-schema"},"Generating a Schema"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," to generate a schema from Kotlin code and expose it with any server library."),(0,o.kt)("p",null,"See the docs in ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/schema-generator-getting-started"},"Schema Generator Getting Started"),"."),(0,o.kt)("h3",{id:"apollo-federation"},"Apollo Federation"),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation"),", you can generate an ",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/federation-spec/"},"Apollo Federation")," compliant schema."),(0,o.kt)("p",null,"See the docs in ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/federation/apollo-federation"},"Apollo Federation"),"."),(0,o.kt)("h2",{id:"running-a-server"},"Running a Server"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," is a combination of the schema generator, federation, and server libraries. If you are looking to run a GraphQL server, this is the place to start."),(0,o.kt)("p",null,"See the docs in ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/graphql-server"},"GraphQL Kotlin Server"),"."),(0,o.kt)("h2",{id:"creating-a-client"},"Creating a Client"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-plugins")," can be used to generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-client")," from an existing schema that is easy to use and type-safe."),(0,o.kt)("p",null,"See the docs in ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/client/client-overview"},"Client Overview"),"."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"examples")," module is a collection of working code and examples on how to use all of the ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," modules."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/examples"},"example docs")," for more info."),(0,o.kt)("h2",{id:"blogs-and-videos"},"Blogs and Videos"),(0,o.kt)("p",null,"You can find more posts and recorded conference talks on GraphQL and ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," on our ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/blogs-and-videos"},"Blogs and Videos")," page."),(0,o.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://graphql.org/"},"GraphQL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.graphql-java.com/documentation/"},"graphql-java"))))}m.isMDXComponent=!0},6010:(e,t,n)=>{function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);