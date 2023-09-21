"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[4267],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93687:function(e,t,n){var a=n(10412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",l=r?"macOS":i?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},37028:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=n(83117),r=(n(67294),n(3905)),i=n(93687);const o={sidebar_label:"\u8bca\u65ad",title:"\u8bca\u65ad"},l=void 0,s={unversionedId:"ui/diagnostics",id:"ui/diagnostics",title:"\u8bca\u65ad",description:"Diagnostics \u529f\u80fd\u901a\u8fc7\u5728\u540e\u53f0\u8fd0\u884c\u591a\u9879\u68c0\u67e5\u6765\u68c0\u6d4b\u73af\u5883\u4e2d\u7684\u5e38\u89c1\u95ee\u9898\uff08\u4f8b\u5982\u4e0d\u6ee1\u8db3\u6700\u4f4e\u8981\u6c42\u3001\u914d\u7f6e\u9519\u8bef\u7b49\uff09\uff0c\u5e2e\u52a9\u4f60\u81ea\u884c\u6392\u9664\u548c\u4fee\u590d Rancher Desktop \u5e94\u7528\u7a0b\u5e8f\u7684\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/ui/diagnostics.md",sourceDirName:"ui",slug:"/ui/diagnostics",permalink:"/zh/next/ui/diagnostics",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/diagnostics.md",tags:[],version:"current",frontMatter:{sidebar_label:"\u8bca\u65ad",title:"\u8bca\u65ad"},sidebar:"tutorialSidebar",previous:{title:"\u6545\u969c\u6392\u9664",permalink:"/zh/next/ui/troubleshooting"},next:{title:"\u6269\u5c55",permalink:"/zh/next/ui/extensions"}},u={},c=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=p("Tabs"),m=p("TabItem"),f={toc:c};function v(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Diagnostics")," \u529f\u80fd\u901a\u8fc7\u5728\u540e\u53f0\u8fd0\u884c\u591a\u9879\u68c0\u67e5\u6765\u68c0\u6d4b\u73af\u5883\u4e2d\u7684\u5e38\u89c1\u95ee\u9898\uff08\u4f8b\u5982\u4e0d\u6ee1\u8db3\u6700\u4f4e\u8981\u6c42\u3001\u914d\u7f6e\u9519\u8bef\u7b49\uff09\uff0c\u5e2e\u52a9\u4f60\u81ea\u884c\u6392\u9664\u548c\u4fee\u590d Rancher Desktop \u5e94\u7528\u7a0b\u5e8f\u7684\u95ee\u9898\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1aRancher Desktop ",(0,r.kt)("em",{parentName:"p"},"\u4e0d\u4f1a"),"\u5c06\u8bca\u65ad\u6570\u636e\u53d1\u9001\u5230\u4efb\u4f55\u8fdc\u7a0b\u670d\u52a1\u5668\u8fdb\u884c\u5904\u7406\u6216\u5b58\u50a8\u3002"),(0,r.kt)(d,{groupId:"os",defaultValue:i.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(m,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/ui-main/Windows_Diagnostics.png",alt:null}))),(0,r.kt)(m,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/ui-main/macOS_Diagnostics.png",alt:null}))),(0,r.kt)(m,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/ui-main/Linux_Diagnostics.png",alt:null})))),(0,r.kt)("p",null,"\u6bcf\u6b21\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u65f6\u90fd\u4f1a\u8fd0\u884c\u8bca\u65ad\u68c0\u67e5\u3002\u5982\u679c\u53d1\u73b0\u4efb\u4f55\u95ee\u9898\uff0c\u5219\u5931\u8d25\u68c0\u67e5\u7684\u6570\u91cf\u4f1a\u663e\u793a\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\u7684 ",(0,r.kt)("em",{parentName:"p"},"Diagnostics")," \u83dc\u5355\u6587\u672c\u7684\u65c1\u8fb9\u3002",(0,r.kt)("em",{parentName:"p"},"Diagnostics")," \u9009\u9879\u5361\u4f1a\u663e\u793a\u8bca\u65ad\u6d4b\u8bd5\u7684\u7ed3\u679c\uff0c\u7a81\u51fa\u663e\u793a\u9700\u8981\u6ce8\u610f\u7684\u533a\u57df\uff0c\u5e76\u6307\u5bfc\u4f60\u89e3\u51b3\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u8fdb\u884c\u4e86\u975e\u6807\u51c6\u8bbe\u7f6e\uff0c\u5e76\u4e14\u77e5\u9053\u8fd9\u4e9b\u68c0\u67e5\u4e0d\u9002\u7528\u4e8e\u4f60\u7684\u60c5\u51b5\uff0c\u4f60\u53ef\u4ee5\u5728\u6b64\u9009\u9879\u5361\u4e0a mute/unmute \u4e2a\u522b\u68c0\u67e5\u3002\u4f60\u8fd8\u53ef\u4ee5\u968f\u65f6\u91cd\u65b0\u8fd0\u884c\u8bca\u65ad\u7a0b\u5e8f\uff0c\u4ece\u800c\u9a8c\u8bc1\u4f60\u5bf9\u73af\u5883\u6240\u505a\u7684\u66f4\u6539\u662f\u5426\u5df2\u7ecf\u89e3\u51b3\u4e86\u95ee\u9898\u3002"))}v.isMDXComponent=!0}}]);