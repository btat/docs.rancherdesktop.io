"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[2971],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93687:function(e,n,t){var r=t(10412);const a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=a?"ios":"android",l=a?"macOS":o?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},81754:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=t(83117),a=(t(67294),t(3905)),o=t(93687);const i={sidebar_label:"General",title:"General"},l=void 0,c={unversionedId:"ui/preferences/container-engine/general",id:"ui/preferences/container-engine/general",title:"General",description:"Set the [container runtime] for Rancher Desktop. Users have the option of [containerd] which provides namespaces for containers and the use of nerdctl or [dockerd (moby)] which enables the Docker API and the use of the Docker CLI. Only one container runtime will function at a time.",source:"@site/docs/ui/preferences/container-engine/general.md",sourceDirName:"ui/preferences/container-engine",slug:"/ui/preferences/container-engine/general",permalink:"/next/ui/preferences/container-engine/general",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/preferences/container-engine/general.md",tags:[],version:"current",frontMatter:{sidebar_label:"General",title:"General"},sidebar:"tutorialSidebar",previous:{title:"Proxy",permalink:"/next/ui/preferences/wsl/proxy"},next:{title:"Allowed Images",permalink:"/next/ui/preferences/container-engine/allowed-images"}},s={},u=[{value:"Container Engine",id:"container-engine",level:4}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},d=p("Tabs"),f=p("TabItem"),m={toc:u};function v(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/preferences/container-engine/general"})),(0,a.kt)("p",null,"Set the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/container-runtimes/"},"container runtime")," for Rancher Desktop. Users have the option of ",(0,a.kt)("a",{parentName:"p",href:"https://containerd.io/"},"containerd")," which provides namespaces for containers and the use of nerdctl or ",(0,a.kt)("a",{parentName:"p",href:"https://mobyproject.org/"},"dockerd (moby)")," which enables the Docker API and the use of the Docker CLI. Only one container runtime will function at a time."),(0,a.kt)(d,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,a.kt)(f,{value:"Windows",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/Windows_containerEngine_tabGeneral.png",alt:null}))),(0,a.kt)(f,{value:"macOS",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/macOS_containerEngine_tabGeneral.png",alt:null}))),(0,a.kt)(f,{value:"Linux",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/Linux_containerEngine_tabGeneral.png",alt:null})))),(0,a.kt)("h4",{id:"container-engine"},"Container Engine"),(0,a.kt)("p",null,"When switching to a different container runtime: Workloads and images that have been built or pulled using the current container runtime are not available on the container runtime being switched to."))}v.isMDXComponent=!0}}]);