(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(182)),i={id:"maven-plugin",title:"Maven Plugin",original_id:"maven-plugin"},c={unversionedId:"plugins/maven-plugin",id:"version-3.x.x/plugins/maven-plugin",isDocsHomePage:!1,title:"Maven Plugin",description:"GraphQL Kotlin Maven Plugin provides functionality to introspect GraphQL schemas and generate a lightweight GraphQL HTTP client.",source:"@site/versioned_docs/version-3.x.x/plugins/maven-plugin.md",slug:"/plugins/maven-plugin",permalink:"/graphql-kotlin/docs/3.x.x/plugins/maven-plugin",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/plugins/maven-plugin.md",version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1621323280,sidebar:"version-3.x.x/docs",previous:{title:"Gradle Plugin",permalink:"/graphql-kotlin/docs/3.x.x/plugins/gradle-plugin"},next:{title:"Releasing a new version",permalink:"/graphql-kotlin/docs/3.x.x/contributors/release-proc"}},o=[{value:"Goals",id:"goals",children:[{value:"download-sdl",id:"download-sdl",children:[]},{value:"generate-client",id:"generate-client",children:[]},{value:"generate-test-client",id:"generate-test-client",children:[]},{value:"introspect-schema",id:"introspect-schema",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Downloading Schema SDL",id:"downloading-schema-sdl",children:[]},{value:"Introspecting Schema",id:"introspecting-schema",children:[]},{value:"Generating Client",id:"generating-client",children:[]},{value:"Generating Client with Custom Scalars",id:"generating-client-with-custom-scalars",children:[]},{value:"Generating Test Client",id:"generating-test-client",children:[]},{value:"Complete Minimal Configuration Example",id:"complete-minimal-configuration-example",children:[]},{value:"Complete Configuration Example",id:"complete-configuration-example",children:[]}]}],b={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"GraphQL Kotlin Maven Plugin provides functionality to introspect GraphQL schemas and generate a lightweight GraphQL HTTP client."),Object(l.b)("h2",{id:"goals"},"Goals"),Object(l.b)("p",null,"You can find detailed information about ",Object(l.b)("inlineCode",{parentName:"p"},"graphql-kotlin-maven-plugin")," and all its goals by running ",Object(l.b)("inlineCode",{parentName:"p"},"mvn help:describe -Dplugin=com.expediagroup:graphql-kotlin-maven-plugin -Ddetail"),"."),Object(l.b)("h3",{id:"download-sdl"},"download-sdl"),Object(l.b)("p",null,"GraphQL endpoints are often public and as such many servers might disable introspection queries in production environment.\nSince GraphQL schema is needed to generate type safe clients, as alternative GraphQL servers might expose private\nendpoints (e.g. accessible only from within network, etc) that could be used to download schema in Schema Definition\nLanguage (SDL) directly. This Mojo attempts to download schema from the specified ",Object(l.b)("inlineCode",{parentName:"p"},"graphql.endpoint"),", validates the\nresult whether it is a valid schema and saves it locally as ",Object(l.b)("inlineCode",{parentName:"p"},"schema.graphql")," under build directory. In general, this\ngoal provides limited functionality by itself and instead should be used to generate input for the subsequent\n",Object(l.b)("inlineCode",{parentName:"p"},"generate-client")," goal."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Attributes")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",Object(l.b)("inlineCode",{parentName:"li"},"generate-sources"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"endpoint")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"Target GraphQL server SDL endpoint that will be used to download schema.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"User property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"graphql.endpoint"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"headers")),Object(l.b)("td",{parentName:"tr",align:null},"Map","<","String, Any",">"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on a SDL request.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"timeoutConfiguration")),Object(l.b)("td",{parentName:"tr",align:null},"TimeoutConfiguration"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Optional timeout configuration (in milliseconds) to download schema from SDL endpoint before we cancel the request.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default values are:")," connect timeout = 5000, read timeout = 15000.",Object(l.b)("br",null))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameter Details")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("em",{parentName:"p"},"timeoutConfiguration")," - Timeout configuration that allows you to specify connect and read timeout values in milliseconds."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-xml"},"\n<timeoutConfiguration>\n    \x3c!-- timeout values in milliseconds \n    connect1000\n    read30000\n--&gt;\n\n")))),Object(l.b)("h3",{id:"generate-client"},"generate-client"),Object(l.b)("p",null,"Generate GraphQL client code based on the provided GraphQL schema and target queries."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Attributes")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",Object(l.b)("inlineCode",{parentName:"li"},"generate-sources")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Requires Maven Project")),Object(l.b)("li",{parentName:"ul"},"Generated classes are automatically added to the list of compiled sources.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"allowDeprecatedFields")),Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is:")," ",Object(l.b)("inlineCode",{parentName:"td"},"false"),".",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"User property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"graphql.allowDeprecatedFields"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"converters")),Object(l.b)("td",{parentName:"tr",align:null},"Map","<","String, ScalarConverter",">"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Custom GraphQL scalar to converter mapping containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"outputDirectory")),Object(l.b)("td",{parentName:"tr",align:null},"File"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Target directory where to store generated files.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"${project.build.directory}/generated-sources/graphql"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"packageName")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"Target package name for generated code.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"User property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"graphql.packageName"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"queryFileDirectory")),Object(l.b)("td",{parentName:"tr",align:null},"File"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",Object(l.b)("inlineCode",{parentName:"td"},"queryFiles")," property instead.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is:")," ",Object(l.b)("inlineCode",{parentName:"td"},"src/main/resources"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"queryFiles")),Object(l.b)("td",{parentName:"tr",align:null},"Listfile"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can also specify `` directory containing all the files. If this property is specified it will take precedence over the corresponding directory property.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"``"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.",Object(l.b)("strong",{parentName:"td"},"User property is"),": ``.")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameter Details")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("em",{parentName:"p"},"converters")," - Custom GraphQL scalar to converter mapping containing information about corresponding Java type and converter that should be used to serialize/deserialize values."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-xml"},"\n\n  \n    \n    java.util.UUID\n    \n    com.example.UUIDScalarConverter\n  \n--&gt;\n\n")))),Object(l.b)("h3",{id:"generate-test-client"},"generate-test-client"),Object(l.b)("p",null,"Generate GraphQL test client code based on the provided GraphQL schema and target queries."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Attributes")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Default Lifecycle Phase"),": ``"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Requires Maven Project")),Object(l.b)("li",{parentName:"ul"},"Generated classes are automatically added to the list of test compiled sources.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"``"),Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",Object(l.b)("strong",{parentName:"td"},"Default value is:")," ",Object(l.b)("inlineCode",{parentName:"td"},".**User property is**: "),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"``"),Object(l.b)("td",{parentName:"tr",align:null},"Map","<","String, ScalarConverter",">"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Custom GraphQL scalar to converter mapping containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"``"),Object(l.b)("td",{parentName:"tr",align:null},"File"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Target directory where to store generated files.",Object(l.b)("strong",{parentName:"td"},"Default value is"),": ``")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"``"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"Target package name for generated code.",Object(l.b)("strong",{parentName:"td"},"User property is"),": ``.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"``"),Object(l.b)("td",{parentName:"tr",align:null},"File"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",Object(l.b)("inlineCode",{parentName:"td"},"property instead.**Default value is:**"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"``"),Object(l.b)("td",{parentName:"tr",align:null},"List"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can also specify `` directory containing all the files. If this property is specified it will take precedence over the corresponding directory property.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"``"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.",Object(l.b)("strong",{parentName:"td"},"User property is"),": ``.")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameter Details")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("em",{parentName:"p"},"converters")," - Custom GraphQL scalar to converter mapping containing information about corresponding Java type and converter that should be used to serialize/deserialize values."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-xml"},"\n\n  \n    \n    java.util.UUID\n    \n    com.example.UUIDScalarConverter\n  \n--&gt;\n\n")))),Object(l.b)("h3",{id:"introspect-schema"},"introspect-schema"),Object(l.b)("p",null,"Executes GraphQL introspection query against specified ",Object(l.b)("inlineCode",{parentName:"p"},"and saves the underlying schema file as")," under build directory. In general, this goal provides limited functionality by itself and instead\nshould be used to generate input for the subsequent `` goal."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Attributes")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Default Lifecycle Phase"),": ``")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"``"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"Target GraphQL server endpoint that will be used to execute introspection queries.",Object(l.b)("strong",{parentName:"td"},"User property is"),": ``.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"``"),Object(l.b)("td",{parentName:"tr",align:null},"Map","<","String, Any",">"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on an introspection query.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"``"),Object(l.b)("td",{parentName:"tr",align:null},"TimeoutConfiguration"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Optional timeout configuration(in milliseconds) to execute introspection query before we cancel the request.",Object(l.b)("strong",{parentName:"td"},"Default values are:")," connect timeout = 5000, read timeout = 15000.")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameter Details")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("em",{parentName:"p"},"timeoutConfiguration")," - Timeout configuration that allows you to specify connect and read timeout values in milliseconds."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-xml"},"\n\n    1000\n    30000\n--&gt;\n\n")))),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("h3",{id:"downloading-schema-sdl"},"Downloading Schema SDL"),Object(l.b)("p",null,"Download SDL Mojo requires target GraphQL server ",Object(l.b)("inlineCode",{parentName:"p"},"to be specified. Task can be executed directly from the\ncommand line by explicitly specifying")," property."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\n\n\n")),Object(l.b)("p",null,"Mojo can also be configured in your Maven build file"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"\n\n\n")),Object(l.b)("p",null,"By default, ",Object(l.b)("inlineCode",{parentName:"p"},"goal will be executed as part of the")," ",Object(l.b)("a",{parentName:"p",href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html"},"build lifecycle phase"),"."),Object(l.b)("h3",{id:"introspecting-schema"},"Introspecting Schema"),Object(l.b)("p",null,"Introspection Mojo requires target GraphQL server ",Object(l.b)("inlineCode",{parentName:"p"},"to be specified. Task can be executed directly from the\ncommand line by explicitly specifying")," property"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\n\n\n")),Object(l.b)("p",null,"Mojo can also be configured in your Maven build file"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"\n\n\n")),Object(l.b)("p",null,"By default, ",Object(l.b)("inlineCode",{parentName:"p"},"goal will be executed as part of the")," ",Object(l.b)("a",{parentName:"p",href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html"},"build lifecycle phase"),"."),Object(l.b)("h3",{id:"generating-client"},"Generating Client"),Object(l.b)("p",null,"This Mojo generates GraphQL client code based on the provided queries using target GraphQL ",Object(l.b)("inlineCode",{parentName:"p"},". Classes are\ngenerated under specified "),". When using default configuration and storing GraphQL queries under ``\ndirectories, task can be executed directly from the command line by explicitly providing required properties."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\n\n\n")),Object(l.b)("p",null,"Mojo can also be configured in your Maven build file to become part of your build lifecycle. Plugin also provides additional\nconfiguration options that are not available on command line."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"\n\n\n")),Object(l.b)("p",null,"This will process all GraphQL queries located under `` and generate corresponding GraphQL Kotlin clients.\nGenerated classes will be automatically added to the project compile sources."),Object(l.b)("p",null,">"," NOTE: You might need to explicitly add generated clients to your project sources for your IDE to recognize them. See\n",">"," ",Object(l.b)("a",{parentName:"p",href:"https://www.mojohaus.org/build-helper-maven-plugin/"},"build-helper-maven-plugin")," for details."),Object(l.b)("h3",{id:"generating-client-with-custom-scalars"},"Generating Client with Custom Scalars"),Object(l.b)("p",null,"By default, all custom GraphQL scalars will be serialized as Strings. You can override this default behavior by specifying\ncustom ",Object(l.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-client/src/main/kotlin/com/expediagroup/graphql/client/converter/ScalarConverter.kt"},"scalar converter"),"."),Object(l.b)("p",null,"For example given following custom scalar in our GraphQL schema"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},"\n\n\n")),Object(l.b)("p",null,"We can create a custom converter to automatically convert this custom scalar to ``"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},"\n\n\n")),Object(l.b)("p",null,"Afterwards we need to configure our plugin to use this custom converter"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"\n\n                    \n                        \n                        java.util.UUID\n                        \n                        com.example.UUIDScalarConverter\n                    \n                \n                com.example.generated\n                mySchema.graphql\n            \n        \n    \n--&gt;\n\n")),Object(l.b)("h3",{id:"generating-test-client"},"Generating Test Client"),Object(l.b)("p",null,"This Mojo generates GraphQL Kotlin test client code based on the provided queries using target GraphQL ",Object(l.b)("inlineCode",{parentName:"p"},". Classes\nare generated under specified "),". When using default configuration and storing GraphQL queries under ``\ndirectories, task can be executed directly from the command line by explicitly providing required properties."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\n\n\n")),Object(l.b)("p",null,"Mojo can also be configured in your Maven build file to become part of your build lifecycle. Plugin also provides additional\nconfiguration options that are not available on command line."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"\n\n\n")),Object(l.b)("p",null,"This will process all GraphQL queries located under `` and generate corresponding GraphQL Kotlin test clients.\nGenerated classes will be automatically added to the project test compile sources."),Object(l.b)("p",null,">"," NOTE: You might need to explicitly add generated test clients to your project test sources for your IDE to recognize them.\n",">"," See ",Object(l.b)("a",{parentName:"p",href:"https://www.mojohaus.org/build-helper-maven-plugin/"},"build-helper-maven-plugin")," for details."),Object(l.b)("h3",{id:"complete-minimal-configuration-example"},"Complete Minimal Configuration Example"),Object(l.b)("p",null,"Following is the minimal configuration that runs introspection query against a target GraphQL server and generates a corresponding schema.\nThis generated schema is subsequently used to generate GraphQL client code based on the queries provided under `` directory."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"\n\n\n")),Object(l.b)("p",null,">"," NOTE: Both ",Object(l.b)("inlineCode",{parentName:"p"},"and")," goals are bound to the same ",Object(l.b)("inlineCode",{parentName:"p"},"Maven lifecycle phase.\n&gt; As opposed to Gradle, Maven does not support explicit ordering of different goals bound to the same build phase. Maven\n&gt; Mojos will be executed in the order they are defined in your")," build file."),Object(l.b)("h3",{id:"complete-configuration-example"},"Complete Configuration Example"),Object(l.b)("p",null,"Following is a configuration example that downloads schema SDL from a target GraphQL server that is then used to generate\nthe GraphQL client code based on the provided query."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},'\n\n                true\n                \n                    \n                    \n                        \n                        java.util.UUID\n                        \n                        com.example.UUIDScalarConverter\n                    \n                \n                \n                    My-Custom-Header\n                \n                \n                    \n                    1000\n                    30000\n                \n                \n                    ${"{"}project.basedir{"}"}/src/main/resources/queries/MyQuery.graphql\n                \n            \n        \n    \n--&gt;\n\n')))}p.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||l;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<l;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);