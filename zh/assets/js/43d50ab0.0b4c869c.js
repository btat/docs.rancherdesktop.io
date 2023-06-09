"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[2513],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,k=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93687:function(e,n,t){var r=t(10412);const a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=a?"ios":"android",o=a?"macOS":l?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(67294),a=t(34334),l="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(83117),a=t(67294),l=t(34334),i=t(12466),o=t(76775),s=t(91980),u=t(67392),c=t(50012);function p(e){return function(e){var n;return(null==(n=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function k(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=d(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[s,u]=k({queryString:t,groupId:r}),[p,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),b=(()=>{const e=s??p;return f({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var b=t(72389),g="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=u[t].value;r!==o&&(p(n),s(r))},f=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>c.push(e),onKeyDown:f,onClick:d},i,{className:(0,l.Z)("tabs__item",y,null==i?void 0:i.className,{"tabs__item--active":o===n})}),t??n)})))}function h(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function E(e){const n=m(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g)},a.createElement(v,(0,r.Z)({},e,n)),a.createElement(h,(0,r.Z)({},e,n)))}function w(e){const n=(0,b.Z)();return a.createElement(E,(0,r.Z)({key:String(n)},e))}},87848:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=t(83117),a=(t(67294),t(3905)),l=t(74866),i=t(85162),o=t(93687);const s={title:"\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6"},u=void 0,c={unversionedId:"getting-started/deployment",id:"version-1.8/getting-started/deployment",title:"\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6",description:"\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\u63d0\u4f9b 2 \u4e2a\u529f\u80fd\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.8/getting-started/deployment.md",sourceDirName:"getting-started",slug:"/getting-started/deployment",permalink:"/zh/1.8/getting-started/deployment",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.8/getting-started/deployment.md",tags:[],version:"1.8",frontMatter:{title:"\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/zh/1.8/getting-started/installation"},next:{title:"\u901a\u7528",permalink:"/zh/1.8/ui/general"}},p={},d=[{value:"\u542f\u52a8\u9996\u9009\u503c",id:"\u542f\u52a8\u9996\u9009\u503c",level:3},{value:"\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f\u548c\u4f4d\u7f6e",id:"\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f\u548c\u4f4d\u7f6e",level:3},{value:"\u5220\u9664\u73b0\u6709\u914d\u7f6e\u6587\u4ef6",id:"\u5220\u9664\u73b0\u6709\u914d\u7f6e\u6587\u4ef6",level:4},{value:"\u9ed8\u8ba4\u4f7f\u7528 \u201cmoby\u201d \u5bb9\u5668\u5f15\u64ce\u5e76\u7981\u7528 Kubernetes",id:"\u9ed8\u8ba4\u4f7f\u7528-moby-\u5bb9\u5668\u5f15\u64ce\u5e76\u7981\u7528-kubernetes",level:4},{value:"\u5c06\u955c\u50cf\u5217\u8868\u9501\u5b9a\u4e3a\u4ec5\u5141\u8bb8 \u201cbusybox\u201d \u548c \u201cnginx\u201d",id:"\u5c06\u955c\u50cf\u5217\u8868\u9501\u5b9a\u4e3a\u4ec5\u5141\u8bb8-busybox-\u548c-nginx",level:4},{value:"\u9a8c\u8bc1\u955c\u50cf\u4ed3\u5e93\u8bbe\u7f6e",id:"\u9a8c\u8bc1\u955c\u50cf\u4ed3\u5e93\u8bbe\u7f6e",level:4},{value:"\u5c06\u6240\u6709\u5f53\u524d\u8bbe\u7f6e\u8f6c\u6362\u4e3a\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6",id:"\u5c06\u6240\u6709\u5f53\u524d\u8bbe\u7f6e\u8f6c\u6362\u4e3a\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6",level:4},{value:"\u9ed8\u8ba4\u4f7f\u7528 \u201cmoby\u201d \u5bb9\u5668\u5f15\u64ce\u5e76\u7981\u7528 Kubernetes",id:"\u9ed8\u8ba4\u4f7f\u7528-moby-\u5bb9\u5668\u5f15\u64ce\u5e76\u7981\u7528-kubernetes-1",level:4},{value:"\u5c06\u955c\u50cf\u5217\u8868\u9501\u5b9a\u4e3a\u4ec5\u5141\u8bb8 \u201cbusybox\u201d \u548c \u201cnginx\u201d",id:"\u5c06\u955c\u50cf\u5217\u8868\u9501\u5b9a\u4e3a\u4ec5\u5141\u8bb8-busybox-\u548c-nginx-1",level:4},{value:"\u9a8c\u8bc1 plist \u6587\u4ef6",id:"\u9a8c\u8bc1-plist-\u6587\u4ef6",level:4},{value:"\u5c06\u6240\u6709\u5f53\u524d\u8bbe\u7f6e\u8f6c\u6362\u4e3a\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6",id:"\u5c06\u6240\u6709\u5f53\u524d\u8bbe\u7f6e\u8f6c\u6362\u4e3a\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6-1",level:4},{value:"\u9ed8\u8ba4\u4f7f\u7528 \u201cmoby\u201d \u5bb9\u5668\u5f15\u64ce\u5e76\u7981\u7528 Kubernetes",id:"\u9ed8\u8ba4\u4f7f\u7528-moby-\u5bb9\u5668\u5f15\u64ce\u5e76\u7981\u7528-kubernetes-2",level:4},{value:"\u5c06\u955c\u50cf\u5217\u8868\u9501\u5b9a\u4e3a\u4ec5\u5141\u8bb8 \u201cbusybox\u201d \u548c \u201cnginx\u201d",id:"\u5c06\u955c\u50cf\u5217\u8868\u9501\u5b9a\u4e3a\u4ec5\u5141\u8bb8-busybox-\u548c-nginx-2",level:4},{value:"\u5df2\u77e5\u95ee\u9898\u548c\u9650\u5236",id:"\u5df2\u77e5\u95ee\u9898\u548c\u9650\u5236",level:3}],f={toc:d};function k(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\u63d0\u4f9b 2 \u4e2a\u529f\u80fd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u201cDefaults\u201d \u63d0\u4f9b\u9996\u6b21\u8fd0\u884c\u65f6\uff08\u6216\u6062\u590d\u51fa\u5382\u8bbe\u7f6e\u540e\uff09\u5e94\u7528\u7684\u9996\u9009\u9879\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u201cLocked\u201d \u8bbe\u7f6e\u5141\u8bb8\u7ba1\u7406\u5458\u56fa\u5b9a\u9996\u9009\u503c\u3002")),(0,a.kt)("p",null,"\u5b83\u4eec\u53ef\u4ee5\u7531 \u201cadmin\u201d \u6216 \u201cuser\u201d \u6307\u5b9a\u3002\u5982\u679c \u201cadmin\u201d \u4e0a\u4e0b\u6587\u4e2d\u5b58\u5728 \u201cdefaults\u201d \u6216 \u201clocked\u201d \u8bbe\u7f6e\uff0c\u5219\u4f1a\u5ffd\u7565 \u201cuser\u201d \u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("h3",{id:"\u542f\u52a8\u9996\u9009\u503c"},"\u542f\u52a8\u9996\u9009\u503c"),(0,a.kt)("p",null,"Rancher Desktop \u8bbe\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u52a0\u8f7d \u201cadmin\u201d \u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\uff08\u201cdefaults\u201d \u548c \u201clocked\u201d\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u90fd\u4e0d\u5b58\u5728\uff0c\u5219\u52a0\u8f7d \u201cuser\u201d \u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\uff08\u540c\u6837\u662f \u201cdefaults\u201d \u548c \u201clocked\u201d\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u4ece ",(0,a.kt)("inlineCode",{parentName:"li"},"settings.json")," \u6587\u4ef6\u52a0\u8f7d\u4fdd\u5b58\u7684\u9996\u9009\u9879"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u4fdd\u5b58\u7684\u8bbe\u7f6e\uff0c\u8bf7\u6539\u7528\u4e4b\u524d\u52a0\u8f7d\u7684 \u201cdefaults\u201d \u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u7528\u4e8e\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u7684\u547d\u4ee4\u884c\u53c2\u6570\u503c\u590d\u5236\u5230\u8bbe\u7f6e\u4e2d"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e\u4ecd\u7136\u5b8c\u5168\u4e3a\u7a7a\uff0c\u5219\u663e\u793a\u9996\u6b21\u8fd0\u884c\u5bf9\u8bdd\u6846"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5185\u7f6e\u5e94\u7528\u7a0b\u5e8f\u9ed8\u8ba4\u503c\u586b\u5145\u4efb\u4f55\u7f3a\u5931\u7684\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u5c06 \u201clocked\u201d \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u503c\u590d\u5236\u5230\u5f53\u524d\u8bbe\u7f6e\u4e0a")),(0,a.kt)("p",null,"\u7528\u6237\u65e0\u6cd5\u901a\u8fc7 GUI \u6216 CLI \u4fee\u6539\u5df2\u88ab\u914d\u7f6e\u6587\u4ef6\u9501\u5b9a\u7684\u8bbe\u7f6e\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u914d\u7f6e\u6587\u4ef6\u5b58\u5728\u4f46\u65e0\u6cd5\u6b63\u786e\u89e3\u6790\uff0cRancher Desktop \u5c06\u62d2\u7edd\u52a0\u8f7d\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)("p",null,"Rancher Desktop \u4e0d\u4f1a\u4fee\u6539\u6216\u5220\u9664\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\u3002\u5b83\u4eec\u4e0d\u4f1a\u53d7\u5230\u6062\u590d\u51fa\u5382\u8bbe\u7f6e\u6216\u5378\u8f7d\u7684\u5f71\u54cd\u3002"),(0,a.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u7684\u7ed3\u6784\u4e0e\u5e94\u7528\u7a0b\u5e8f\u8bbe\u7f6e\u5339\u914d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="rdctl list-settings"',title:'"rdctl','list-settings"':!0},'{\n  ...\n  "containerEngine": {\n    "allowedImages": {\n      "enabled": false,\n      "patterns": []\n    },\n    "name": "containerd"\n  },\n  ...\n}\n')),(0,a.kt)("p",null,"\u4e0b\u9762\u9488\u5bf9\u5404\u7cfb\u7edf\u7684\u6587\u6863\u8bf4\u660e\u4e86\u5982\u4f55\u521b\u5efa\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\uff0c\u8be5\u914d\u7f6e\u6587\u4ef6\u5c06\u9ed8\u8ba4\u5bb9\u5668\u5f15\u64ce\u66f4\u6539\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"moby"),"\uff0c\u7981\u7528 Kubernetes\uff0c\u5e76\u5c06\u955c\u50cf\u5217\u8868\u9501\u5b9a\u4e3a\u4ec5\u5141\u8bb8 ",(0,a.kt)("inlineCode",{parentName:"p"},"busybox")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx"),"\u3002"),(0,a.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f\u548c\u4f4d\u7f6e"},"\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f\u548c\u4f4d\u7f6e"),(0,a.kt)("p",null,"\u4e0d\u540c\u7cfb\u7edf\u4f7f\u7528\u7684\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\u5b58\u50a8\u683c\u5f0f\u548c\u4f4d\u7f6e\u4e0d\u540c\u3002"),(0,a.kt)(l.Z,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Windows",mdxType:"TabItem"},(0,a.kt)("p",null,"\u5728 Windows \u4e0a\uff0c\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\u5b58\u50a8\u5728\u955c\u50cf\u4ed3\u5e93\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u7ec4\u7b56\u7565\u8fdb\u884c\u5206\u53d1\u3002"),(0,a.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u7684\u4f4d\u7f6e\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HKEY_LOCAL_MACHINE\\Software\\Rancher Desktop\\Profile\\Defaults\nHKEY_LOCAL_MACHINE\\Software\\Rancher Desktop\\Profile\\Locked\nHKEY_CURRENT_USER\\Software\\Rancher Desktop\\Profile\\Defaults\nHKEY_CURRENT_USER\\Software\\Rancher Desktop\\Profile\\Locked\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"reg")," \u5de5\u5177\u53ef\u7528\u4e8e\u624b\u52a8\u521b\u5efa\u914d\u7f6e\u6587\u4ef6\u3002\u8981\u521b\u5efa \u201cadmin\u201d \u914d\u7f6e\u6587\u4ef6\uff0c\u5fc5\u987b\u4ece\u63d0\u5347\u7684 shell \u4e2d\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u5e03\u5c14\u503c\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"REG_DWORD")," \u683c\u5f0f\u5b58\u50a8\uff0c\u5e76\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"REG_MULTI_SZ")," \u4e2d\u5217\u51fa\u3002"),(0,a.kt)("h4",{id:"\u5220\u9664\u73b0\u6709\u914d\u7f6e\u6587\u4ef6"},"\u5220\u9664\u73b0\u6709\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'reg delete "HKCU\\Software\\Rancher Desktop\\Profile" /f\n')),(0,a.kt)("h4",{id:"\u9ed8\u8ba4\u4f7f\u7528-moby-\u5bb9\u5668\u5f15\u64ce\u5e76\u7981\u7528-kubernetes"},"\u9ed8\u8ba4\u4f7f\u7528 \u201cmoby\u201d \u5bb9\u5668\u5f15\u64ce\u5e76\u7981\u7528 Kubernetes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'reg add "HKCU\\Software\\Rancher Desktop\\Profile\\Defaults\\containerEngine" /v name /t REG_SZ -d moby\nreg add "HKCU\\Software\\Rancher Desktop\\Profile\\Defaults\\kubernetes" /v enabled /t REG_DWORD -d 0\n')),(0,a.kt)("h4",{id:"\u5c06\u955c\u50cf\u5217\u8868\u9501\u5b9a\u4e3a\u4ec5\u5141\u8bb8-busybox-\u548c-nginx"},"\u5c06\u955c\u50cf\u5217\u8868\u9501\u5b9a\u4e3a\u4ec5\u5141\u8bb8 \u201cbusybox\u201d \u548c \u201cnginx\u201d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'reg add "HKCU\\Software\\Rancher Desktop\\Profile\\Locked\\containerEngine\\allowedImages" /v enabled /t REG_DWORD -d 1\nreg add "HKCU\\Software\\Rancher Desktop\\Profile\\Locked\\containerEngine\\allowedImages" /v patterns /t REG_MULTI_SZ -d busybox\\0nginx\n')),(0,a.kt)("h4",{id:"\u9a8c\u8bc1\u955c\u50cf\u4ed3\u5e93\u8bbe\u7f6e"},"\u9a8c\u8bc1\u955c\u50cf\u4ed3\u5e93\u8bbe\u7f6e"),(0,a.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u5bfc\u51fa\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"*.reg")," \u6587\u4ef6\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'C:\\>reg export "HKCU\\Software\\Rancher Desktop\\Profile" rd.reg\nThe operation completed successfully.\n')),(0,a.kt)("p",null,"\u8be5\u6587\u4ef6\u53ef\u7528\u4e8e\u5c06\u914d\u7f6e\u6587\u4ef6\u5206\u53d1\u5230\u5176\u4ed6\u673a\u5668\u3002\u8bf7\u6ce8\u610f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"REG_MULTI_SZ")," \u503c\u4ee5 UTF16LE \u7f16\u7801\uff0c\u56e0\u6b64\u4e0d\u6613\u8bfb\u53d6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="HKCU\\Software\\Rancher Desktop\\Profile"',title:'"HKCU\\Software\\Rancher','Desktop\\Profile"':!0},'Windows Registry Editor Version 5.00\n\n[HKEY_CURRENT_USER\\Software\\Rancher Desktop\\Profile]\n\n[HKEY_CURRENT_USER\\Software\\Rancher Desktop\\Profile\\Defaults]\n\n[HKEY_CURRENT_USER\\Software\\Rancher Desktop\\Profile\\Defaults\\containerEngine]\n"name"="moby"\n\n[HKEY_CURRENT_USER\\Software\\Rancher Desktop\\Profile\\Defaults\\kubernetes]\n"enabled"=dword:00000000\n\n[HKEY_CURRENT_USER\\Software\\Rancher Desktop\\Profile\\Locked]\n\n[HKEY_CURRENT_USER\\Software\\Rancher Desktop\\Profile\\Locked\\containerEngine]\n\n[HKEY_CURRENT_USER\\Software\\Rancher Desktop\\Profile\\Locked\\containerEngine\\allowedImages]\n"enabled"=dword:00000001\n"patterns"=hex(7):62,00,75,00,73,00,79,00,62,00,6f,00,78,00,00,00,6e,00,67,00,\\\n  69,00,6e,00,78,00,00,00,00,00\n'))),(0,a.kt)(i.Z,{value:"macOS",mdxType:"TabItem"},(0,a.kt)("p",null,"\u5728 macOS \u4e0a\uff0c\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\u5b58\u50a8\u4e3a plist \u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u7684\u4f4d\u7f6e\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/Library/Preferences/io.rancherdesktop.profile.defaults.plist\n/Library/Preferences/io.rancherdesktop.profile.locked.plist\n~/Library/Preferences/io.rancherdesktop.profile.defaults.plist\n~/Library/Preferences/io.rancherdesktop.profile.locked.plist\n")),(0,a.kt)("h4",{id:"\u5c06\u6240\u6709\u5f53\u524d\u8bbe\u7f6e\u8f6c\u6362\u4e3a\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6"},"\u5c06\u6240\u6709\u5f53\u524d\u8bbe\u7f6e\u8f6c\u6362\u4e3a\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u8981\u5c06\u73b0\u6709\u8bbe\u7f6e\u8f6c\u6362\u4e3a\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\uff0c\u4e00\u79cd\u7b80\u5355\u65b9\u6cd5\u662f\u5c06\u5b83\u4eec\u4ece JSON \u8f6c\u6362\u4e3a plist XML \u683c\u5f0f\uff0c\u7136\u540e\u5728\u7f16\u8f91\u5668\u4e2d\u624b\u52a8\u4fee\u6539\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rdctl list-settings | plutil -convert xml1 - -o ~/Library/Preferences/io.rancherdesktop.profile.defaults.plist\n")),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u7f16\u8f91\u5668\u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"plutil")," \u5de5\u5177\u624b\u52a8\u521b\u5efa\u914d\u7f6e\u6587\u4ef6\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"defaults")," \u5b9e\u7528\u7a0b\u5e8f\u4e0d\u8d77\u4f5c\u7528\uff0c\u56e0\u4e3a\u5b83\u65e0\u6cd5\u521b\u5efa\u5d4c\u5957\u952e\u3002"),(0,a.kt)("h4",{id:"\u9ed8\u8ba4\u4f7f\u7528-moby-\u5bb9\u5668\u5f15\u64ce\u5e76\u7981\u7528-kubernetes-1"},"\u9ed8\u8ba4\u4f7f\u7528 \u201cmoby\u201d \u5bb9\u5668\u5f15\u64ce\u5e76\u7981\u7528 Kubernetes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'DEFAULTS=~/Library/Preferences/io.rancherdesktop.profile.defaults.plist\nplutil -create xml1 "$DEFAULTS"\n\nplutil -insert containerEngine -dictionary "$DEFAULTS"\nplutil -insert containerEngine.name -string moby "$DEFAULTS"\n\nplutil -insert kubernetes -dictionary "$DEFAULTS"\nplutil -insert kubernetes.enabled -bool false "$DEFAULTS"\n')),(0,a.kt)("h4",{id:"\u5c06\u955c\u50cf\u5217\u8868\u9501\u5b9a\u4e3a\u4ec5\u5141\u8bb8-busybox-\u548c-nginx-1"},"\u5c06\u955c\u50cf\u5217\u8868\u9501\u5b9a\u4e3a\u4ec5\u5141\u8bb8 \u201cbusybox\u201d \u548c \u201cnginx\u201d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'LOCKED=~/Library/Preferences/io.rancherdesktop.profile.locked.plist\nplutil -create xml1 "$LOCKED"\n\nplutil -insert containerEngine -dictionary "$LOCKED"\nplutil -insert containerEngine.allowedImages -dictionary "$LOCKED"\nplutil -insert containerEngine.allowedImages.enabled -bool true "$LOCKED"\n\nplutil -insert containerEngine.allowedImages.patterns -array "$LOCKED"\nplutil -insert containerEngine.allowedImages.patterns -string busybox -append "$LOCKED"\nplutil -insert containerEngine.allowedImages.patterns -string nginx -append "$LOCKED"\n')),(0,a.kt)("h4",{id:"\u9a8c\u8bc1-plist-\u6587\u4ef6"},"\u9a8c\u8bc1 plist \u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="~/Library/Preferences/io.rancherdesktop.profile.defaults.plist"',title:'"~/Library/Preferences/io.rancherdesktop.profile.defaults.plist"'},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n    <key>containerEngine</key>\n    <dict>\n        <key>name</key>\n        <string>moby</string>\n    </dict>\n    <key>kubernetes</key>\n    <dict>\n        <key>enabled</key>\n        <false/>\n    </dict>\n</dict>\n</plist>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="~/Library/Preferences/io.rancherdesktop.profile.locked.plist"',title:'"~/Library/Preferences/io.rancherdesktop.profile.locked.plist"'},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n    <key>containerEngine</key>\n    <dict>\n        <key>allowedImages</key>\n        <dict>\n            <key>enabled</key>\n            <true/>\n            <key>patterns</key>\n            <array>\n                <string>busybox</string>\n                <string>nginx</string>\n            </array>\n        </dict>\n    </dict>\n</dict>\n</plist>\n'))),(0,a.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,a.kt)("p",null,"\u5728 Linux \u4e0a\uff0c\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\u4ee5 JSON \u683c\u5f0f\u5b58\u50a8\u3002"),(0,a.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u7684\u4f4d\u7f6e\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/etc/rancher-desktop/defaults.json\n/etc/rancher-desktop/locked.json\n~/.config/rancher-desktop.defaults.json\n~/.config/rancher-desktop.locked.json\n")),(0,a.kt)("h4",{id:"\u5c06\u6240\u6709\u5f53\u524d\u8bbe\u7f6e\u8f6c\u6362\u4e3a\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6-1"},"\u5c06\u6240\u6709\u5f53\u524d\u8bbe\u7f6e\u8f6c\u6362\u4e3a\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u7531\u4e8e\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\u4ee5 JSON \u683c\u5f0f\u5b58\u50a8\uff0c\u56e0\u6b64\u521b\u5efa\u914d\u7f6e\u6587\u4ef6\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u5c06\u5f53\u524d\u5e94\u7528\u7a0b\u5e8f\u8bbe\u7f6e\u4fdd\u5b58\u5230\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e\uff0c\u7136\u540e\u4f7f\u7528\u6587\u672c\u7f16\u8f91\u5668\u5fae\u8c03\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rdctl list-settings > ~/.config/rancher-desktop.defaults.json\n")),(0,a.kt)("h4",{id:"\u9ed8\u8ba4\u4f7f\u7528-moby-\u5bb9\u5668\u5f15\u64ce\u5e76\u7981\u7528-kubernetes-2"},"\u9ed8\u8ba4\u4f7f\u7528 \u201cmoby\u201d \u5bb9\u5668\u5f15\u64ce\u5e76\u7981\u7528 Kubernetes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="~/.config/rancher-desktop.defaults.json"',title:'"~/.config/rancher-desktop.defaults.json"'},'{\n  "containerEngine": {\n    "name": "moby"\n  },\n  "kubernetes": {\n    "enabled": false\n  }\n}\n')),(0,a.kt)("h4",{id:"\u5c06\u955c\u50cf\u5217\u8868\u9501\u5b9a\u4e3a\u4ec5\u5141\u8bb8-busybox-\u548c-nginx-2"},"\u5c06\u955c\u50cf\u5217\u8868\u9501\u5b9a\u4e3a\u4ec5\u5141\u8bb8 \u201cbusybox\u201d \u548c \u201cnginx\u201d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="~/.config/rancher-desktop.locked.json"',title:'"~/.config/rancher-desktop.locked.json"'},'{\n  "containerEngine": {\n    "allowedImages": {\n      "enabled": true,\n      "patterns": ["busybox","nginx"]\n    }\n  }\n}\n')))),(0,a.kt)("h3",{id:"\u5df2\u77e5\u95ee\u9898\u548c\u9650\u5236"},"\u5df2\u77e5\u95ee\u9898\u548c\u9650\u5236"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"containerEngine.allowedImages")," \u662f\u5f53\u524d\u552f\u4e00\u53ef\u4ee5\u9501\u5b9a\u7684\u8bbe\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728 macOS \u4e0a\uff0c\u683c\u5f0f\u4e0d\u6b63\u786e\u7684\u914d\u7f6e\u6587\u4ef6\u4f1a\u88ab\u5ffd\u7565\uff0c\u800c\u4e0d\u662f\u963b\u6b62\u5e94\u7528\u7a0b\u5e8f\u52a0\u8f7d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u901a\u8fc7\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"diagnostics.showMuted"),"\uff08Windows \u4e0a\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"WSL.integrations"),"\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728 macOS \u548c Linux \u4e0a\uff0c\u5982\u679c \u201cdefaults\u201d \u914d\u7f6e\u6587\u4ef6\u672a\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"application.pathManagementStrategy")," \u914d\u7f6e\u503c\uff0c\u5219\u4ecd\u4f1a\u663e\u793a\u4e00\u4e2a\u7b80\u77ed\u7684\u9996\u6b21\u8fd0\u884c\u5bf9\u8bdd\u6846\u3002")))}k.isMDXComponent=!0}}]);