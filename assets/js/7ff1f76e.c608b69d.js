"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"excluding-fields",title:"Excluding Fields"},s=void 0,c={unversionedId:"schema-generator/customizing-schemas/excluding-fields",id:"version-4.x.x/schema-generator/customizing-schemas/excluding-fields",title:"Excluding Fields",description:"There are two ways to ensure the GraphQL schema generation omits fields when using Kotlin reflection:",source:"@site/versioned_docs/version-4.x.x/schema-generator/customizing-schemas/excluding-fields.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/excluding-fields",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/customizing-schemas/excluding-fields",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/schema-generator/customizing-schemas/excluding-fields.md",tags:[],version:"4.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1657216336,formattedLastUpdatedAt:"7/7/2022",frontMatter:{id:"excluding-fields",title:"Excluding Fields"},sidebar:"version-4.x.x/docs",previous:{title:"Documenting Schema",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/customizing-schemas/documenting-fields"},next:{title:"Renaming Fields",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/customizing-schemas/renaming-fields"}},u={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are two ways to ensure the GraphQL schema generation omits fields when using Kotlin reflection:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The first is by marking the field as non-",(0,a.kt)("inlineCode",{parentName:"li"},"public")," scope (",(0,a.kt)("inlineCode",{parentName:"li"},"private"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"protected"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"internal"),")"),(0,a.kt)("li",{parentName:"ul"},"The second method is by annotating the field with ",(0,a.kt)("inlineCode",{parentName:"li"},"@GraphQLIgnore"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class SimpleQuery {\n  @GraphQLIgnore\n  fun notPartOfSchema() = "ignore me!"\n\n  private fun privateFunctionsAreNotVisible() = "ignored private function"\n\n  fun doSomething(value: Int): Boolean = true\n}\n')),(0,a.kt)("p",null,"The above query would produce the following GraphQL schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  doSomething(value: Int!): Boolean!\n}\n")),(0,a.kt)("p",null,"Note that the public method ",(0,a.kt)("inlineCode",{parentName:"p"},"notPartOfSchema")," is not included in the schema."))}d.isMDXComponent=!0}}]);