(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return h}));var a=n(3),r=n(7),o=(n(0),n(182)),i={id:"graphql-java-comparison",title:"GraphQL Java Comparison"},c={unversionedId:"graphql-java-comparison",id:"version-3.x.x/graphql-java-comparison",isDocsHomePage:!1,title:"GraphQL Java Comparison",description:"graphql-java is one of the most popular JVM based GraphQL implemenations. GraphQL Kotlin is",source:"@site/versioned_docs/version-3.x.x/graphql-java-comparison.md",slug:"/graphql-java-comparison",permalink:"/graphql-kotlin/docs/3.x.x/graphql-java-comparison",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/graphql-java-comparison.md",version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1621323280},s=[{value:"GraphQL Java Schema",id:"graphql-java-schema",children:[]},{value:"GraphQL Kotlin Schema",id:"graphql-kotlin-schema",children:[]}],l={toc:s};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://graphql-java.com/"},"graphql-java")," is one of the most popular JVM based GraphQL implemenations. GraphQL Kotlin is\nbuilt on top of ",Object(o.b)("inlineCode",{parentName:"p"},"grahpql-java")," as it can be easily extended with additional functionality and this implementation\nhas been used and tested by many users."),Object(o.b)("h3",{id:"graphql-java-schema"},"GraphQL Java Schema"),Object(o.b)("p",null,"The most common way to create the schema in ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-java")," is to first manually write the SDL file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"\nschema {\n    query: Query\n}\n\ntype Query {\n    bookById(id: ID): Book\n}\n\ntype Book {\n    id: ID!\n    name: String!\n    pageCount: Int!\n    author: Author\n}\n\ntype Author {\n    id: ID!\n    firstName: String!\n    lastName: String!\n}\n\n")),Object(o.b)("p",null,"Then write the runtime code that matches this schema to build the ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," object."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'\n// Internal DB class, not schema class\nclass Book(\n    val id: ID,\n    val name: String,\n    val totalPages: Int, // This needs to be renamed to pageCount\n    val authorId: ID // This is not in the schema\n)\n\n// Internal DB class, not schema class\nclass Author(\n    val id: ID,\n    val firstName: String,\n    val lastName: String\n)\n\nclass GraphQLDataFetchers {\n    private val books: List<Book> = booksFromDB()\n    private val authors: List<Author> = authorsFromDB()\n\n    fun getBookByIdDataFetcher() = DataFetcher { dataFetchingEnvironment ->\n        val bookId: String = dataFetchingEnvironment.getArgument("id")\n        return books.firstOrNull { it.id == bookId }\n    }\n\n    fun getAuthorDataFetcher() = DataFetcher { dataFetchingEnvironment ->\n        val book: Book = dataFetchingEnvironment.getSource() as Book\n        return authors.firstOrNull { it.id == book.authorId }\n    }\n\n    fun getPageCountDataFetcher() = DataFetcher { dataFetchingEnvironment ->\n        val book: Book = dataFetchingEnvironment.getSource() as Book\n        return book.totalPages\n    }\n}\n\nval schemaParser = SchemaParser()\nval schemaGenerator = SchemaGenerator()\nval schemaFile = loadSchema("schema.graphqls")\nval typeRegistry = schemaParser.parse(schemaFile)\nval graphQLDataFetchers = GraphQLDataFetchers()\n\nval runtimeWiring = RuntimeWiring.newRuntimeWiring()\n    .type(\n        newTypeWiring("Query")\n            .dataFetcher("bookById", graphQLDataFetchers.getBookByIdDataFetcher())\n    )\n    .type(\n        newTypeWiring("Book")\n            .dataFetcher("author", graphQLDataFetchers.getAuthorDataFetcher())\n            .dataFetcher("pageCount", graphQLDataFetchers.getPageCountDataFetcher())\n    )\n    .build()\n\n// Combine the types and runtime code together to make a schema\nval graphQLSchema: GraphQLSchema = schemaGenerator.makeExecutableSchema(typeDefinitionRegistry, runtimeWiring)\n\n')),Object(o.b)("p",null,"This means that there are two sources of truth for your schema and changes in either have to be reflected in both locations.\nAs your schema scales to hundreds of types and many different resolvers, it can get more difficult to track what code needs to be changed if you want to add a new field,\ndeprecate or delete an existing one, or fix a bug in the resolver code."),Object(o.b)("p",null,"These errors will hopefully be caught by your build or automated tests, but it is another layer your have to be worried about when creating your API."),Object(o.b)("h3",{id:"graphql-kotlin-schema"},"GraphQL Kotlin Schema"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," aims to simplify this process by using Kotlin reflection to generate the schema for you.\nAll you need to do is write your schema code in a Kotlin class with public functions or properties."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'\nprivate val books: List<Book> = booksFromDB()\nprivate val authors: List<Author> = authorsFromDB()\n\nclass Query {\n    fun bookById(id: ID): Book? = books.find { it.id == id }\n}\n\nclass Book(\n    val id: ID,\n    val name: String,\n    private val totalPages: Int,\n    private val authorId: ID\n) {\n    fun author(): Author? = authors.find { it.id == authorId }\n    fun pageCount(): Int = totalPages\n}\n\nclass Author(\n    val id: ID,\n    val firstName: String,\n    val lastName: String\n)\n\nval config = SchemaGeneratorConfig(supportedPackages = "com.example")\nval queries = listOf(TopLevelObject(Query()))\nval schema: GraphQLSchema = toSchema(config, queries)\n\n')),Object(o.b)("p",null,"This makes changes in code directly reflect to your schema and you can still produce the ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," to print and export an SDL file."))}h.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),h=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=h(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=h(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);