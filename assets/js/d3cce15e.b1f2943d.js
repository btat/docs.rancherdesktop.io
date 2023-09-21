"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[1852],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=a.createContext({}),u=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(r.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(t),c=i,h=m["".concat(r,".").concat(c)]||m[c]||p[c]||l;return t?a.createElement(h,s(s({ref:n},d),{},{components:t})):a.createElement(h,s({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=m;var o={};for(var r in n)hasOwnProperty.call(n,r)&&(o[r]=n[r]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<l;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93687:function(e,n,t){var a=t(10412);const i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),s=i?"ios":"android",o=i?"macOS":l?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:s,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},88669:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return s},metadata:function(){return r},toc:function(){return d}});var a=t(83117),i=(t(67294),t(3905)),l=t(93687);const s={title:"Installing and Uninstalling Rancher Desktop Extensions"},o=void 0,r={unversionedId:"how-to-guides/installing-uninstalling-extensions",id:"how-to-guides/installing-uninstalling-extensions",title:"Installing and Uninstalling Rancher Desktop Extensions",description:"The Extensions feature introduced in the v1.9.0-tech-preview release enables you to use Docker Desktop Extensions within Rancher Desktop. The feature helps you extend Rancher Desktop's functionality to meet your additional needs. This guide will demonstrate how to install and uninstall Docker extensions in Rancher Desktop.",source:"@site/docs/how-to-guides/installing-uninstalling-extensions.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/installing-uninstalling-extensions",permalink:"/next/how-to-guides/installing-uninstalling-extensions",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/installing-uninstalling-extensions.md",tags:[],version:"current",frontMatter:{title:"Installing and Uninstalling Rancher Desktop Extensions"},sidebar:"tutorialSidebar",previous:{title:"Hello World Example",permalink:"/next/how-to-guides/hello-world-example"},next:{title:"Transfer Container Images",permalink:"/next/how-to-guides/transfer-container-images"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installing Extensions",id:"installing-extensions",level:3},{value:"Using the UI",id:"using-the-ui",level:4},{value:"Using the Command Line",id:"using-the-command-line",level:4},{value:"Using the UI",id:"using-the-ui-1",level:4},{value:"Using the Command Line",id:"using-the-command-line-1",level:4},{value:"Using the UI",id:"using-the-ui-2",level:4},{value:"Using the Command Line",id:"using-the-command-line-2",level:4},{value:"Uninstalling Extensions",id:"uninstalling-extensions",level:3},{value:"Using the UI",id:"using-the-ui-3",level:4},{value:"Using the Command Line",id:"using-the-command-line-3",level:4},{value:"Using the UI",id:"using-the-ui-4",level:4},{value:"Using the Command Line",id:"using-the-command-line-4",level:4},{value:"Using the UI",id:"using-the-ui-5",level:4},{value:"Using the Command Line",id:"using-the-command-line-5",level:4}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)},m=p("Tabs"),c=p("TabItem"),h={toc:d};function g(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/installing-uninstalling-extensions"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Extensions")," feature introduced in the ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," release enables you to use ",(0,i.kt)("strong",{parentName:"p"},"Docker Desktop Extensions")," within Rancher Desktop. The feature helps you extend Rancher Desktop's functionality to meet your additional needs. This guide will demonstrate how to install and uninstall Docker extensions in Rancher Desktop."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Rancher Desktop Extensions are available as part of release ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," or later."),(0,i.kt)("h3",{id:"installing-extensions"},"Installing Extensions"),(0,i.kt)("p",null,"There are two ways in which you can install extensions, a method using the UI and another using the ",(0,i.kt)("inlineCode",{parentName:"p"},"rdctl extension install")," command."),(0,i.kt)(m,{groupId:"os",defaultValue:l.Z.defaultOs,mdxType:"Tabs"},(0,i.kt)(c,{value:"Windows",mdxType:"TabItem"},(0,i.kt)("h4",{id:"using-the-ui"},"Using the UI"),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Extensions")," from the main UI to navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Catalog")," tab. Here you can search through extensions available for use which can be downloaded and installed using the ",(0,i.kt)("strong",{parentName:"p"},"Install")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/Windows_Extensions.png",alt:null})," "),(0,i.kt)("h4",{id:"using-the-command-line"},"Using the Command Line"),(0,i.kt)("p",null,"We have also extended the ",(0,i.kt)("inlineCode",{parentName:"p"},"rdctl")," command line in the ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," release to install extensions. Please use the command below to install extensions:"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"<tag>")," parameter is optional.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rdctl extension install <image-id>:<tag>\n"))),(0,i.kt)(c,{value:"macOS",mdxType:"TabItem"},(0,i.kt)("h4",{id:"using-the-ui-1"},"Using the UI"),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Extensions")," from the main UI to navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Catalog")," tab. Here you can search through extensions available for use which can be downloaded and installed using the ",(0,i.kt)("strong",{parentName:"p"},"Install")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/macOS_Extensions.png",alt:null})),(0,i.kt)("h4",{id:"using-the-command-line-1"},"Using the Command Line"),(0,i.kt)("p",null,"We have also extended the ",(0,i.kt)("inlineCode",{parentName:"p"},"rdctl")," command line in the ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," release to install extensions. Please use the command below to install extensions:"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"<tag>")," parameter is optional.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rdctl extension install <image-id>:<tag>\n"))),(0,i.kt)(c,{value:"Linux",mdxType:"TabItem"},(0,i.kt)("h4",{id:"using-the-ui-2"},"Using the UI"),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Extensions")," from the main UI to navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Catalog")," tab. Here you can search through extensions available for use which can be downloaded and installed using the ",(0,i.kt)("strong",{parentName:"p"},"Install")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/Linux_Extensions.png",alt:null})),(0,i.kt)("h4",{id:"using-the-command-line-2"},"Using the Command Line"),(0,i.kt)("p",null,"We have also extended the ",(0,i.kt)("inlineCode",{parentName:"p"},"rdctl")," command line in the ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," release to install extensions. Please use the command below to install extensions:"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"<tag>")," parameter is optional.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rdctl extension install <image-id>:<tag>\n")))),(0,i.kt)("h3",{id:"uninstalling-extensions"},"Uninstalling Extensions"),(0,i.kt)("p",null,"Additionally, there are two ways in which you can uninstall extensions, a method using the UI and another using the ",(0,i.kt)("inlineCode",{parentName:"p"},"rdctl extension uninstall")," command."),(0,i.kt)(m,{groupId:"os",defaultValue:l.Z.defaultOs,mdxType:"Tabs"},(0,i.kt)(c,{value:"Windows",mdxType:"TabItem"},(0,i.kt)("h4",{id:"using-the-ui-3"},"Using the UI"),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Extensions")," from the main UI to navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Catalog")," tab. On this view, you can search through the available extensions, and uninstall the already installed extensions. Extensions can also be uninstalled from the ",(0,i.kt)("strong",{parentName:"p"},"Installed")," tab by clicking the ",(0,i.kt)("strong",{parentName:"p"},"Remove")," button."),(0,i.kt)(m,{mdxType:"Tabs"},(0,i.kt)(c,{value:"Catalog",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/Windows_Extensions.png",alt:null}))),(0,i.kt)(c,{value:"Installed",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/Windows_Extensions-Installed.png",alt:null})))),(0,i.kt)("h4",{id:"using-the-command-line-3"},"Using the Command Line"),(0,i.kt)("p",null,"We have also extended the ",(0,i.kt)("inlineCode",{parentName:"p"},"rdctl")," command line in the ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," release to uninstall extensions. Please use the command below to uninstall extensions:"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"<tag>")," parameter is optional.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rdctl extension uninstall <image-id>:<tag>\n"))),(0,i.kt)(c,{value:"macOS",mdxType:"TabItem"},(0,i.kt)("h4",{id:"using-the-ui-4"},"Using the UI"),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Extensions")," from the main UI to navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Catalog")," tab. On this view, you can search through the available extensions, and uninstall the already installed extensions. Extensions can also be uninstalled from the ",(0,i.kt)("strong",{parentName:"p"},"Installed")," tab by clicking the ",(0,i.kt)("strong",{parentName:"p"},"Remove")," button."),(0,i.kt)(m,{mdxType:"Tabs"},(0,i.kt)(c,{value:"Catalog",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/macOS_Extensions.png",alt:null}))),(0,i.kt)(c,{value:"Installed",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/macOS_Extensions-Installed.png",alt:null})))),(0,i.kt)("h4",{id:"using-the-command-line-4"},"Using the Command Line"),(0,i.kt)("p",null,"We have also extended the ",(0,i.kt)("inlineCode",{parentName:"p"},"rdctl")," command line in the ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," release to uninstall extensions. Please use the command below to uninstall extensions:"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"<tag>")," parameter is optional.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rdctl extension uninstall <image-id>:<tag>\n"))),(0,i.kt)(c,{value:"Linux",mdxType:"TabItem"},(0,i.kt)("h4",{id:"using-the-ui-5"},"Using the UI"),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Extensions")," from the main UI to navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Catalog")," tab. On this view, you can search through the available extensions, and uninstall the already installed extensions. Extensions can also be uninstalled from the ",(0,i.kt)("strong",{parentName:"p"},"Installed")," tab by clicking the ",(0,i.kt)("strong",{parentName:"p"},"Remove")," button."),(0,i.kt)(m,{mdxType:"Tabs"},(0,i.kt)(c,{value:"Catalog",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/Linux_Extensions.png",alt:null}))),(0,i.kt)(c,{value:"Installed",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/Linux_Extensions-Installed.png",alt:null})))),(0,i.kt)("h4",{id:"using-the-command-line-5"},"Using the Command Line"),(0,i.kt)("p",null,"We have also extended the ",(0,i.kt)("inlineCode",{parentName:"p"},"rdctl")," command line in the ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," release to uninstall extensions. Please use the command below to uninstall extensions:"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"<tag>")," parameter is optional.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rdctl extension uninstall <image-id>:<tag>\n")))))}g.isMDXComponent=!0}}]);