(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),i=(n(0),n(182)),o={id:"lists",title:"Lists"},l={unversionedId:"schema-generator/writing-schemas/lists",id:"schema-generator/writing-schemas/lists",isDocsHomePage:!1,title:"Lists",description:"Both kotlin.Array and kotlin.collections.List are automatically mapped to the GraphQL List type (for unsupported",source:"@site/docs/schema-generator/writing-schemas/lists.md",slug:"/schema-generator/writing-schemas/lists",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/lists",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/writing-schemas/lists.md",version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1621323280,sidebar:"docs",previous:{title:"Enums",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/enums"},next:{title:"Interfaces",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/interfaces"}},p=[{value:"Primitive Arrays",id:"primitive-arrays",children:[]},{value:"Unsupported Collection Types",id:"unsupported-collection-types",children:[]}],s={toc:p};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Both ",Object(i.b)("inlineCode",{parentName:"p"},"kotlin.Array")," and ",Object(i.b)("inlineCode",{parentName:"p"},"kotlin.collections.List")," are automatically mapped to the GraphQL ",Object(i.b)("inlineCode",{parentName:"p"},"List")," type (for unsupported\nuse cases see below). Type arguments provided to Kotlin collections are used as the type arguments in the GraphQL ",Object(i.b)("inlineCode",{parentName:"p"},"List"),"\ntype. Kotlin specialized classes (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"IntArray"),") representing arrays of Java primitive types without boxing overhead\nare also supported."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"class SimpleQuery {\n    fun generateList(): List<Int> {\n        // some logic here that generates list\n    }\n\n    fun doSomethingWithIntArray(ints: IntArray): String {\n        // some logic here that processes array\n    }\n\n    fun doSomethingWithIntList(ints: List<Int>): String {\n        // some logic here that processes list\n    }\n}\n")),Object(i.b)("p",null,"The above Kotlin class would produce the following GraphQL schema:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n    generateList: [Int!]!\n    doSomethingWithIntArray(ints: [Int!]!): String!\n    doSomethingWithIntList(ints: [Int!]!): String!\n}\n")),Object(i.b)("h2",{id:"primitive-arrays"},"Primitive Arrays"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," supports the following primitive array types without autoboxing overhead. Similarly to\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"kotlin.Array")," of objects the underlying type is automatically mapped to GraphQL ",Object(i.b)("inlineCode",{parentName:"p"},"List")," type."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Kotlin Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"kotlin.IntArray"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"kotlin.LongArray"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"kotlin.ShortArray"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"kotlin.FloatArray"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"kotlin.DoubleArray"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"kotlin.CharArray"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"kotlin.BooleanArray"))))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The underlying GraphQL types of primitive arrays will be corresponding to the built-in scalar types or extended scalar types provided by ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-java"),"."))),Object(i.b)("h2",{id:"unsupported-collection-types"},"Unsupported Collection Types"),Object(i.b)("p",null,"Currently, the GraphQL spec only supports ",Object(i.b)("inlineCode",{parentName:"p"},"Lists"),". Therefore, even though Java and Kotlin support number of other collection\ntypes, ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," only explicitly supports ",Object(i.b)("inlineCode",{parentName:"p"},"Lists")," and primitive arrays. Other collection types\nsuch as ",Object(i.b)("inlineCode",{parentName:"p"},"Sets")," (see ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/201"},"#201"),") and arbitrary ",Object(i.b)("inlineCode",{parentName:"p"},"Map")," data\nstructures are not supported out of the box. While we do not reccomend using ",Object(i.b)("inlineCode",{parentName:"p"},"Map")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Set")," in the schema,\nthey are supported with the use of the schema hooks."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"override fun willResolveMonad(type: KType): KType = when (type.classifier) {\n    Set::class -> List::class.createType(type.arguments)\n    else -> type\n}\n")),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/discussions/1110"},"Discussion #1110")," for more details."))}c.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=c(n),m=r,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return n?a.a.createElement(u,l(l({ref:t},s),{},{components:n})):a.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);