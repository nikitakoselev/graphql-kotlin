"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[5173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"annotations",title:"Annotations"},c=void 0,l={unversionedId:"schema-generator/customizing-schemas/annotations",id:"schema-generator/customizing-schemas/annotations",title:"Annotations",description:"graphql-kotlin-schema-generator ships with a number of annotation classes to allow you to enhance your GraphQL schema",source:"@site/docs/schema-generator/customizing-schemas/annotations.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/annotations",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/annotations",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/customizing-schemas/annotations.md",tags:[],version:"current",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1657216336,formattedLastUpdatedAt:"7/7/2022",frontMatter:{id:"annotations",title:"Annotations"},sidebar:"docs",previous:{title:"Nested Resolvers and Shared Arguments",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/nested-arguments"},next:{title:"Generator Configuration & Hooks",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/generator-config"}},p={},m=[],u={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," ships with a number of annotation classes to allow you to enhance your GraphQL schema\nfor things that can't be directly derived from Kotlin reflection."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./documenting-schema"},"@GraphQLDescription")," - Provide a description for a GraphQL field"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./directives"},"@GraphQLDirective")," - Registers directive on a GraphQL field"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./excluding-fields"},"@GraphQLIgnore")," - Exclude field from the GraphQL schema"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./renaming-fields"},"@GraphQLName")," - Override the name used for the type"),(0,o.kt)("li",{parentName:"ul"},"Kotlin built in ",(0,o.kt)("a",{parentName:"li",href:"./deprecating-schema"},"@Deprecated")," - Apply the GraphQL ",(0,o.kt)("inlineCode",{parentName:"li"},"@deprecated")," directive on the field"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./custom-type-reference"},"@GraphQLType")," - Allows specifying a return type that is not the Kotlin code")))}h.isMDXComponent=!0}}]);