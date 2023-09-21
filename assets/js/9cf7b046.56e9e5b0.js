"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[4413],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93687:function(e,t,n){var a=n(10412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",o=r?"macOS":i?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n(34334),i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(83117),r=n(67294),i=n(34334),l=n(12466),o=n(76775),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=f({queryString:n,groupId:a}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),h=(()=>{const e=s??p;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),v(e)}),[u,v,i]),tabValues:i}}var h=n(72389),b="tabList__CuJ",g="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(p(t),s(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,i.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=v(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},69498:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(83117),r=(n(67294),n(3905)),i=n(74866),l=n(85162);n(93687);const o={sidebar_label:"Volumes",title:"Volumes (macOS & Linux)"},s=void 0,u={unversionedId:"ui/preferences/virtual-machine/volumes",id:"version-1.9/ui/preferences/virtual-machine/volumes",title:"Volumes (macOS & Linux)",description:"Mount Type",source:"@site/versioned_docs/version-1.9/ui/preferences/virtual-machine/volumes.md",sourceDirName:"ui/preferences/virtual-machine",slug:"/ui/preferences/virtual-machine/volumes",permalink:"/1.9/ui/preferences/virtual-machine/volumes",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/ui/preferences/virtual-machine/volumes.md",tags:[],version:"1.9",frontMatter:{sidebar_label:"Volumes",title:"Volumes (macOS & Linux)"},sidebar:"tutorialSidebar",previous:{title:"Network",permalink:"/1.9/ui/preferences/virtual-machine/network"},next:{title:"Integrations",permalink:"/1.9/ui/preferences/wsl/integrations"}},c={},p=[{value:"Mount Type",id:"mount-type",level:2},{value:"reverse-sshfs",id:"reverse-sshfs",level:3},{value:"9p",id:"9p",level:3},{value:"virtiofs",id:"virtiofs",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mount-type"},"Mount Type"),(0,r.kt)("h3",{id:"reverse-sshfs"},"reverse-sshfs"),(0,r.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_virtualMachine_tabVolumes.png",alt:null}))),(0,r.kt)(l.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Linux_virtualMachine_tabVolumes.png",alt:null})))),(0,r.kt)("p",null,'Users can enable the "',(0,r.kt)("a",{parentName:"p",href:"https://github.com/lima-vm/lima/blob/master/docs/mount.md#reverse-sshfs"},"reverse-sshfs"),'" mount type from the ',(0,r.kt)("inlineCode",{parentName:"p"},"Volumes")," tab. This exposes the filesystem by running an SFTP server on the host. The host instance will then intitiate an SSH connection into the guest allowing it to connect to the SFTP server. This is the default mount type used in the application."),(0,r.kt)("h3",{id:"9p"},"9p"),(0,r.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_virtualMachine_tabVolumes_9P.png",alt:null}))),(0,r.kt)(l.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Linux_virtualMachine_tabVolumes_9P.png",alt:null})))),(0,r.kt)("admonition",{title:"warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is an ",(0,r.kt)("strong",{parentName:"p"},"experimental")," setting.")),(0,r.kt)("p",null,'Users can enable the "',(0,r.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/Documentation/filesystems/9p.txt"},"9p"),'" mount type from the ',(0,r.kt)("inlineCode",{parentName:"p"},"Volumes")," tab. This will expose the filesystem by using QEMU's ",(0,r.kt)("inlineCode",{parentName:"p"},"virtio-9p-pci")," devices."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cache Mode:\nSpecifies a caching policy that has a default setting as ",(0,r.kt)("inlineCode",{parentName:"p"},"mmap"),". The caching options are ",(0,r.kt)("inlineCode",{parentName:"p"},"[none, loose, fscache, mmap]"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Memory Size In KiB:\nUsers can specify the number of bytes to use for the "9p" packet size. The minimum value is 4 KiB and the default size is 128 KiB.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Protocol Version:\nUsers can select the "9p" protocol version. The options include ',(0,r.kt)("inlineCode",{parentName:"p"},"[9p2000, 9p2000.u, 9p2000.L]")," and the default protocol setting is ",(0,r.kt)("inlineCode",{parentName:"p"},"9p200.L"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Security Model:\nUsers can select a supported security model with options being ",(0,r.kt)("inlineCode",{parentName:"p"},"[passthrough, mapped-xattr, mapped-file, none]"),". The default security setting value is ",(0,r.kt)("inlineCode",{parentName:"p"},"none"),"."))),(0,r.kt)("h3",{id:"virtiofs"},"virtiofs"),(0,r.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_virtualMachine_tabVolumes_virtiofs.png",alt:null})))),(0,r.kt)("admonition",{title:"warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is an ",(0,r.kt)("strong",{parentName:"p"},"experimental")," setting.")),(0,r.kt)("p",null,'Users can enable the "',(0,r.kt)("a",{parentName:"p",href:"https://virtio-fs.gitlab.io/"},"virtiofs"),'" mount type from the ',(0,r.kt)("inlineCode",{parentName:"p"},"Volumes")," tab. This is implemented using the Apple ",(0,r.kt)("inlineCode",{parentName:"p"},"Virtualization.Framework")," shared directory device."))}d.isMDXComponent=!0}}]);