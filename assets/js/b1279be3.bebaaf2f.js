"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[3531],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93687:function(e,t,n){var a=n(10412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",o=r?"macOS":i?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n(34334),i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(83117),r=n(67294),i=n(34334),l=n(12466),o=n(76775),s=n(91980),u=n(67392),p=n(50012);function c(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=k({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=s??c;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var f=n(72389),v="tabList__CuJ",b="tabItem_LNqP";function w(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==o&&(c(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v)},r.createElement(w,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},95608:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(83117),r=(n(67294),n(3905)),i=n(74866),l=n(85162),o=n(93687);const s={title:"Running When Offline"},u=void 0,p={unversionedId:"how-to-guides/running-air-gapped",id:"version-1.9/how-to-guides/running-air-gapped",title:"Running When Offline",description:"Rancher Desktop can be run when offline, aka in air-gapped mode. This document covers requirements",source:"@site/versioned_docs/version-1.9/how-to-guides/running-air-gapped.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/running-air-gapped",permalink:"/1.9/how-to-guides/running-air-gapped",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/how-to-guides/running-air-gapped.md",tags:[],version:"1.9",frontMatter:{title:"Running When Offline"},sidebar:"tutorialSidebar",previous:{title:"Increasing Open File Limit",permalink:"/1.9/how-to-guides/increasing-open-file-limit"},next:{title:"Architecture",permalink:"/1.9/references/architecture"}},c={},d=[{value:"A Note for Windows users",id:"a-note-for-windows-users",level:3},{value:"Network-Sensitive areas",id:"network-sensitive-areas",level:3},{value:"Existing Deployments",id:"existing-deployments",level:3},{value:"Preparing an Air-Gapped System",id:"preparing-an-air-gapped-system",level:3},{value:"The Cache Directory",id:"the-cache-directory",level:4},{value:"The kuberlr Directory",id:"the-kuberlr-directory",level:4},{value:"A Note on Versions",id:"a-note-on-versions",level:5}],m={toc:d};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rancher Desktop can be run when offline, aka in air-gapped mode. This document covers requirements\nand possible problems when running in air-gapped mode."),(0,r.kt)("h3",{id:"a-note-for-windows-users"},"A Note for Windows users"),(0,r.kt)("p",null,"This document uses Powershell syntax for environment variables. If you're using the Command shell\ninstead, where you see an environment variable reference of ",(0,r.kt)("inlineCode",{parentName:"p"},"$env:FOO"),", please substitute it with ",(0,r.kt)("inlineCode",{parentName:"p"},"%FOO%"),"."),(0,r.kt)("h3",{id:"network-sensitive-areas"},"Network-Sensitive areas"),(0,r.kt)("p",null,"There are two areas where Rancher Desktop assumes network availability and will recover in an air-gapped situation:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pulling Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s")," images into the ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s")," cache directory")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"kuberlr")," as a version-aware wrapper around ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),", so the client never differs from the Kubernetes server by more than one minor version."))),(0,r.kt)("h3",{id:"existing-deployments"},"Existing Deployments"),(0,r.kt)("p",null,"If Rancher Desktop has been installed on a machine initially with networked access, it can\nbe run subsequently on that machine after network connectivity has been turned off. The main\ndifference in core functionality is that the list of versions of Kubernetes available in drop-down menus\nis limited to those versions that have actually been downloaded and stored in the cache."),(0,r.kt)("p",null,"There is a problem using the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," client, because of the ",(0,r.kt)("inlineCode",{parentName:"p"},"kuberlr")," wrapper (Windows users should add the ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," suffix to each executable utility file)."),(0,r.kt)("p",null,"In this case, we're discussing a system that was initialized when connected to the internet, but we're about\nto take the machine offline for future use."),(0,r.kt)("p",null,"Suppose there are three versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-desktop")," cache."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"1.24.3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"1.21.14")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"1.19.16"))),(0,r.kt)("p",null,"But suppose that on this system we only ran ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," when using versions ",(0,r.kt)("inlineCode",{parentName:"p"},"1.24.3")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"1.21.14"),". This means that\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.kuberlr/PLATFORM-ARCH/")," directory (",(0,r.kt)("inlineCode",{parentName:"p"},"$env:HOMEDRIVE%\\$env:HOMEPATH/.kuberlr/windows-amd64")," on Windows) will contain only two files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"kubectl1.24.3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"kubectl1.21.14"))),(0,r.kt)("p",null,"If we go offline and use the UI to switch to Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"1.19.16"),", when ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," is run, the system will fail.\nThe problem is that ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"kuberlr"),", which will try to download ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl 1.19.16")," and install it\nin the ",(0,r.kt)("inlineCode",{parentName:"p"},".kuberlr")," directory, but won't be able to access it."),(0,r.kt)("p",null,"So in this case, it would be best to prepare a connected system for disconnecting by selecting each available version of\nKubernetes currently in the cache, and running ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl --context rancher-desktop cluster-info")," to ensure that an appropriate\nversion of the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," client is installed."),(0,r.kt)("p",null,"You ",(0,r.kt)("em",{parentName:"p"},"could")," install versioned ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),"s manually. This is covered in the next section."),(0,r.kt)("h3",{id:"preparing-an-air-gapped-system"},"Preparing an Air-Gapped System"),(0,r.kt)("p",null,"Here we assume you have some kind of removable media which you can populate on an internet-connected system, and then move over to the air-gapped system."),(0,r.kt)("p",null,"There are two directories that need to be populated in order for Rancher Desktop to function off-line:"),(0,r.kt)("h4",{id:"the-cache-directory"},"The Cache Directory"),(0,r.kt)("p",null,"To populate a source disk (which we refer to here as ",(0,r.kt)("inlineCode",{parentName:"p"},"%SOURCEDISK%"),", although it is probably some kind of removable medium like a USB thumb drive), you need the following files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"k3s-versions.json")," -- this file is created by Rancher Desktop. It reads a raw JSON file from ",(0,r.kt)("inlineCode",{parentName:"li"},"https://update.k3s.io/v1-release/channels")," and converts it into a different kind of JSON file. Currently there is no utility to do that conversion; the easiest way to get this file is to run Rancher Desktop on a connected system and save the ",(0,r.kt)("inlineCode",{parentName:"li"},"CACHE/k3s-versions.json")," file (see below for where ",(0,r.kt)("inlineCode",{parentName:"li"},"CACHE")," exists on different platforms)."),(0,r.kt)("li",{parentName:"ul"},"Tar archives of Kubernetes K3s images. These are listed at ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/releases"},"https://github.com/k3s-io/k3s/releases"),". You'll want to download either the ",(0,r.kt)("inlineCode",{parentName:"li"},"k3s-airgap-images-amd64.tar")," for AMD/Intel machines, ",(0,r.kt)("inlineCode",{parentName:"li"},"k3s-airgap-images-arm64.tar")," for M1 machines, or the respective ",(0,r.kt)("inlineCode",{parentName:"li"},"*.tar.zst")," compressed tarball if you are using ",(0,r.kt)("inlineCode",{parentName:"li"},"k3s")," v1.26.1 and above. Finally you'll need to download the ",(0,r.kt)("inlineCode",{parentName:"li"},"k3s")," executable for the selected version. For example, the following commands will let you work with K3s v1.24.3 build 1 offline:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd .../CACHE\nmkdir v1.24.3+k3s1\ncd v1.24.3+k3s1\nwget https://github.com/k3s-io/k3s/releases/download/v1.24.3%2Bk3s1/k3s-airgap-images-amd64.tar\nwget https://github.com/k3s-io/k3s/releases/download/v1.24.3%2Bk3s1/sha256sum-amd64.txt\nwget https://github.com/k3s-io/k3s/releases/download/v1.24.3%2Bk3s1/k3s\n")),(0,r.kt)(i.Z,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,"On Windows, the cache directory is at ",(0,r.kt)("inlineCode",{parentName:"p"},"$env:HOMEDRIVE%\\$env:HOMEPATH\\AppData\\Local\\rancher-desktop\\cache\\k3s"),", and can be created with the command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir -Force $env:HOMEDRIVE%\\$env:HOMEPATH\\AppData\\Local\\rancher-desktop\\cache\\k3s\n")),(0,r.kt)("p",null,"Assuming you have some source media, you would also run the following commands to pre-populate the cache:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"copy-item -Force $env:SOURCEDISK\\k3s-versions.json $env:HOMEDRIVE%\\$env:HOMEPATH\\AppData\\Local\\rancher-desktop\\cache\\\ncopy-item -Recurse -Force $env:SOURCEDISK\\v<MAJOR>.<MINOR>.<PATCH>+k3s<BUILD> $env:HOMEDRIVE%\\$env:HOMEPATH\\AppData\\Local\\rancher-desktop\\cache\\k3s\\\n"))),(0,r.kt)(l.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,"On macOS, the cache directory is at ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/Library/Caches/rancher-desktop")," and the commands to populate it would be"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CACHEDIR=$HOME/Library/Caches/rancher-desktop\nmkdir -p $CACHEDIR/k3s\ncp $SOURCEDISK/k3s-versions.json $CACHEDIR/\ncp -r $SOURCEDISK/v<MAJOR>.<MINOR>.<PATCH>+k3s<BUILD> $CACHEDIR/k3s/\n"))),(0,r.kt)(l.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,"On Linux, the cache directory is at ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.cache/rancher-desktop")," and the commands to populate it would be"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CACHEDIR=$HOME/.cache/rancher-desktop\nmkdir -p $CACHEDIR/k3s\ncp $SOURCEDISK/k3s-versions.json $CACHEDIR/\ncp -r $SOURCEDISK/v<MAJOR>.<MINOR>.<PATCH>+k3s<BUILD> $CACHEDIR/k3s/\n")))),(0,r.kt)("h4",{id:"the-kuberlr-directory"},"The kuberlr Directory"),(0,r.kt)("p",null,"The location of this directory is more straightforward. On all platforms, it's at ",(0,r.kt)("inlineCode",{parentName:"p"},"HOME/.kuberlr/PLATFORM-ARCH")," where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOME")," is the home directory: usually ",(0,r.kt)("inlineCode",{parentName:"li"},"$env:HOMEDRIVE%\\$env:HOMEPATH")," on Windows, and ",(0,r.kt)("inlineCode",{parentName:"li"},"~")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME")," on macOS and Linux."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PLATFORM")," is one of ",(0,r.kt)("inlineCode",{parentName:"li"},"windows"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"linux"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"darwin"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ARCH")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"aarch64")," on M1 machines, and ",(0,r.kt)("inlineCode",{parentName:"li"},"amd64")," everywhere else.")),(0,r.kt)("p",null,"To populate it, determine which versions of Kubernetes you'll be using, and download the appropriate executables from the internet. These would be in:"),(0,r.kt)(i.Z,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://dl.k8s.io/VERSION/bin/PLATFORM/CPU/kubectl.exe"))),(0,r.kt)(l.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://dl.k8s.io/VERSION/bin/PLATFORM/CPU/kubectl"))),(0,r.kt)(l.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://dl.k8s.io/VERSION/bin/PLATFORM/CPU/kubectl")))),(0,r.kt)("p",null,"Where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VERSION")," will have the form ",(0,r.kt)("inlineCode",{parentName:"li"},"vMAJOR.MINOR.PATCH")," (like ",(0,r.kt)("inlineCode",{parentName:"li"},"v1.22.1"),"),"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PLATFORM")," will be one of ",(0,r.kt)("inlineCode",{parentName:"li"},"darwin"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"linux"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"windows"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CPU")," will ",(0,r.kt)("inlineCode",{parentName:"li"},"arm64")," on M1 machines and ",(0,r.kt)("inlineCode",{parentName:"li"},"amd64")," everywhere else.")),(0,r.kt)("p",null,"For example, to get a kubectl for Windows that will work with Kubernetes v1.22, this Windows command-shell (not PowerShell) command will put it on the ",(0,r.kt)("inlineCode",{parentName:"p"},"SOURCEDISK"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget -O %SOURCEDISK/kubectl1.22.1.exe https://dl.k8s.io/v1.22.1/bin/windows/amd64/kubectl.exe\n")),(0,r.kt)("h5",{id:"a-note-on-versions"},"A Note on Versions"),(0,r.kt)("p",null,"Kubectl clients are guaranteed to work with servers that are running the same MAJOR version and differ in the MINOR version by at most 1. So for example, if your organization is working with Kubernetes versions v1.21.x, v1.22.x, and v1.23.x, for any patch-version of ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", you would only need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl1.22.x")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},".kuberlr")," directory. But if you copy a ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.24.x")," of Kubernetes into the ",(0,r.kt)("inlineCode",{parentName:"p"},"CACHE")," directory, you'll need to ensure there's a compatible ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},".kuberlr")," directory as well (any of ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.23.x"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.24.x"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.25.x")," would suffice)."))}k.isMDXComponent=!0}}]);