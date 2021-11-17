(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4998],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>d,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=s(a),g=n,u=h["".concat(p,".").concat(g)]||h[g]||c[g]||o;return a?r.createElement(u,i(i({ref:t},d),{},{components:a})):r.createElement(u,i({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5563:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>d,default:()=>h});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),i=["components"],l={id:"getting-started",title:"Getting Started",original_id:"getting-started",slug:"/"},p=void 0,s={unversionedId:"getting-started",id:"version-3.x.x/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"GraphQL Kotlin is a collection of libraries, built on top of graphql-java, that aim to simplify running GraphQL in Kotlin",source:"@site/versioned_docs/version-3.x.x/getting-started.md",sourceDirName:".",slug:"/",permalink:"/graphql-kotlin/docs/3.x.x/",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/getting-started.md",version:"3.x.x",lastUpdatedBy:"Jonathan Hollingsworth",lastUpdatedAt:1637108411,formattedLastUpdatedAt:"11/17/2021",frontMatter:{id:"getting-started",title:"Getting Started",original_id:"getting-started",slug:"/"},sidebar:"version-3.x.x/docs",next:{title:"Examples",permalink:"/graphql-kotlin/docs/3.x.x/examples"}},d=[{value:"Modules",id:"modules",children:[]},{value:"Installation",id:"installation",children:[{value:"Maven",id:"maven",children:[]},{value:"Gradle",id:"gradle",children:[]}]},{value:"Generating a Schema",id:"generating-a-schema",children:[{value:"Apollo Federation",id:"apollo-federation",children:[]}]},{value:"Running a Server",id:"running-a-server",children:[]},{value:"Creating a Client",id:"creating-a-client",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Blogs and Videos",id:"blogs-and-videos",children:[]}],c={toc:d};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GraphQL Kotlin is a collection of libraries, built on top of ",(0,o.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/"},"graphql-java"),", that aim to simplify running GraphQL in Kotlin"),(0,o.kt)("h2",{id:"modules"},"Modules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/examples"},"examples"),"\n\u2014 Example apps that use graphql-kotlin libraries to test and demonstrate usages"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/graphql-kotlin-client"},"graphql-kotlin-client")," (",(0,o.kt)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-client"},"Javadoc"),")\n\u2014 Lightweight GraphQL Kotlin HTTP client"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/graphql-kotlin-schema-generator"},"graphql-kotlin-schema-generator")," (",(0,o.kt)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-schema-generator"},"Javadoc"),")\n\u2014 Code only GraphQL schema generation for Kotlin"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/graphql-kotlin-federation"},"graphql-kotlin-federation")," (",(0,o.kt)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-federation"},"Javadoc"),")\n\u2014 Schema generator extension to build federated GraphQL schemas"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/graphql-kotlin-spring-server"},"graphql-kotlin-spring-server")," (",(0,o.kt)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-spring-server"},"Javadoc"),")\n\u2014 Spring Boot auto-configuration library to create GraphQL server"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/graphql-kotlin-types"},"graphql-kotlin-types")," (",(0,o.kt)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-types"},"Javadoc"),")\n\u2014 Core types used by both client and server"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/plugins"},"plugins"),"\n\u2014 GraphQL Kotlin Gradle and Maven plugins")),(0,o.kt)("p",null,"If you encounter any problems using this library please open up a new\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues"},"Issue")),(0,o.kt)("p",null,"Additional resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://graphql.org/"},"GraphQL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.graphql-java.com/documentation/"},"graphql-java"))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Using a JVM dependency manager, link any ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-*")," library to your project. You can see the latest\nversion and other examples in ",(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/com.expediagroup/graphql-kotlin-spring-server"},"Sonatype Central\nRepository")),(0,o.kt)("h3",{id:"maven"},"Maven"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n  <groupId>com.expediagroup</groupId>\n  <artifactId>graphql-kotlin-spring-server</artifactId>\n  <version>${latestVersion}</version>\n</dependency>\n\n")),(0,o.kt)("h3",{id:"gradle"},"Gradle"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nimplementation("com.expediagroup", "graphql-kotlin-spring-server", latestVersion)\n\n')),(0,o.kt)("h2",{id:"generating-a-schema"},"Generating a Schema"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," to generate a schema from Kotlin code and expose it with any server library."),(0,o.kt)("p",null,"See the docs in ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/schema-generator-getting-started"},"Schema Generator Getting Started"),"."),(0,o.kt)("h3",{id:"apollo-federation"},"Apollo Federation"),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation"),", you can generate an ",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/federation-spec/"},"Apollo Federation")," compliant schema."),(0,o.kt)("p",null,"See the docs in ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/federated/apollo-federation"},"Apollo Federation"),"."),(0,o.kt)("h2",{id:"running-a-server"},"Running a Server"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," is a combination of the schema generator, fedeation, and server libraries. If you are looking to run a GraphQL server, this is the place to start."),(0,o.kt)("p",null,"See the docs in ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/spring-server/spring-overview"},"Spring Server Overview"),"."),(0,o.kt)("h2",{id:"creating-a-client"},"Creating a Client"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-plugins")," can be used to generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-client")," from an existing schema that is easy to use and type-safe."),(0,o.kt)("p",null,"See the docs in ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/client/client-overview"},"Client Overview"),"."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"examples")," module is a collection of working code and examples on how to use all of the ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," modules."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/examples"},"example docs")," for more info."),(0,o.kt)("h2",{id:"blogs-and-videos"},"Blogs and Videos"),(0,o.kt)("p",null,"You can find more posts and recorded conference talks on GraphQL and ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," on our ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/blogs-and-videos"},"Blogs and Videos")," page."))}h.isMDXComponent=!0}}]);