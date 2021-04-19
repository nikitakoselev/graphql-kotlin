(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(181)),o={id:"type-resolution",title:"Federated Type Resolution"},s={unversionedId:"schema-generator/federation/type-resolution",id:"schema-generator/federation/type-resolution",isDocsHomePage:!1,title:"Federated Type Resolution",description:"In traditional (i.e. non-federated) GraphQL servers, each one of the output types is accessible through a traversal of",source:"@site/docs/schema-generator/federation/type-resolution.md",slug:"/schema-generator/federation/type-resolution",permalink:"/graphql-kotlin/docs/schema-generator/federation/type-resolution",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/federation/type-resolution.md",version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1618874903,sidebar:"docs",previous:{title:"Federated Directives",permalink:"/graphql-kotlin/docs/schema-generator/federation/federated-directives"},next:{title:"Federation Tracing",permalink:"/graphql-kotlin/docs/schema-generator/federation/federation-tracing"}},d=[{value:"<code>_entities</code> query",id:"_entities-query",children:[{value:"Federated Type Resolver",id:"federated-type-resolver",children:[]}]}],c={toc:d};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In traditional (i.e. non-federated) GraphQL servers, each one of the output types is accessible through a traversal of\nthe GraphQL schema from a corresponding query, mutation or subscription root type. Since federated GraphQL types might\nbe accessed outside of the query path we need a mechanism to access them in a consistent manner."),Object(i.b)("h2",{id:"_entities-query"},Object(i.b)("inlineCode",{parentName:"h2"},"_entities")," query"),Object(i.b)("p",null,"A federated GraphQL server provides a custom ",Object(i.b)("inlineCode",{parentName:"p"},"_entities")," query that allows retrieving any of the federated extended types.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"_entities"),' query accept list of "representation" objects that provide all required fields to resolve the type and\nreturn an ',Object(i.b)("inlineCode",{parentName:"p"},"_Entity")," union type of all supported federated types. Representation objects are just a map of all the fields\nreferenced in ",Object(i.b)("inlineCode",{parentName:"p"},"@key")," directives as well as the target ",Object(i.b)("inlineCode",{parentName:"p"},"__typename")," information. If federated query type fragments also\nreference fields with ",Object(i.b)("inlineCode",{parentName:"p"},"@requires")," and ",Object(i.b)("inlineCode",{parentName:"p"},"@provides")," directives, then those referenced fields should also be specified in\nthe target representation object."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"_entities")," queries are automatically generated by the federated gateway and their usage is transparent for the gateway clients."))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"query ($_representations: [_Any!]!) {\n  _entities(representations: $_representations) {\n    ... on SomeFederatedType {\n      fieldA\n      fieldB\n    }\n  }\n}\n")),Object(i.b)("h3",{id:"federated-type-resolver"},"Federated Type Resolver"),Object(i.b)("p",null,"In order to simplify the integrations, ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," provides a default ",Object(i.b)("inlineCode",{parentName:"p"},"_entities")," query resolver that\nretrieves the\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/execution/FederatedTypeResolver.kt"},"FederatedTypeResolver"),"\nthat is used to resolve the specified ",Object(i.b)("inlineCode",{parentName:"p"},"__typename"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"FederatedTypeResolver.typeName")," specifies the GraphQL type name that should match up to the ",Object(i.b)("inlineCode",{parentName:"p"},"__typename")," field in the ",Object(i.b)("inlineCode",{parentName:"p"},"_entities")," query."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"FederatedTypeResolver.resolve")," accepts a list of representations of the target types which should be resolved in the same order\nas they were specified in the list of representations. Each passed in representation should either be resolved to a\ntarget entity or ",Object(i.b)("inlineCode",{parentName:"p"},"NULL")," if entity cannot be resolved."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'// This service does not own the "Product" type but is extending it with new fields\n@KeyDirective(fields = FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n  fun newField(): String = getNewFieldByProductId(id)\n}\n\n// This is how the "Product" class is created from the "_entities" query\nclass ProductResolver : FederatedTypeResolver<Product> {\n    override val typeName: String = "Product"\n\n    override suspend fun resolve(representations: List<Map<String, Any>>): List<Product?> = representations.map {\n        val id = it["id"]?.toString()\n\n        // Instantiate product using id, otherwise return null\n        if (id != null) {\n            Product(id)\n        } else {\n            null\n        }\n    }\n}\n\n// If you are using "graphql-kotlin-spring-server", your FederatedTypeResolvers can be marked as Spring beans\n// and will automatically be added to the hooks\nval resolvers = listOf(productResolver)\nval hooks = FederatedSchemaGeneratorHooks(resolvers)\nval config = FederatedSchemaGeneratorConfig(supportedPackages = listOf("org.example"), hooks = hooks)\nval schema = toFederatedSchema(config)\n')))}l.isMDXComponent=!0},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,h=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return n?a.a.createElement(h,s(s({ref:t},c),{},{components:n})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);