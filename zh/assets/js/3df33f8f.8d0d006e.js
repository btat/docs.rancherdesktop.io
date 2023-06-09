"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[1183],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93687:function(e,t,a){var n=a(10412);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a(34334),l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(83117),r=a(67294),l=a(34334),i=a(12466),o=a(76775),u=a(91980),s=a(67392),c=a(50012);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,s]=g({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),v=(()=>{const e=u??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var v=a(72389),b="tabList__CuJ",k="tabItem_LNqP";function h(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==o&&(p(t),u(n))},d=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,v.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},6368:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var n=a(83117),r=(a(67294),a(3905)),l=a(74866),i=a(85162),o=a(93687);const u={sidebar_label:"\u955c\u50cf",title:"\u955c\u50cf"},s=void 0,c={unversionedId:"ui/images",id:"version-1.9-tech-preview/ui/images",title:"\u955c\u50cf",description:"Images \u9009\u9879\u5361\u5141\u8bb8\u4f60\u7ba1\u7406\u865a\u62df\u673a\u4e0a\u7684\u955c\u50cf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.9-tech-preview/ui/images.md",sourceDirName:"ui",slug:"/ui/images",permalink:"/zh/1.9-tech-preview/ui/images",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9-tech-preview/ui/images.md",tags:[],version:"1.9-tech-preview",frontMatter:{sidebar_label:"\u955c\u50cf",title:"\u955c\u50cf"},sidebar:"tutorialSidebar",previous:{title:"\u7aef\u53e3\u8f6c\u53d1",permalink:"/zh/1.9-tech-preview/ui/port-forwarding"},next:{title:"\u6545\u969c\u6392\u9664",permalink:"/zh/1.9-tech-preview/ui/troubleshooting"}},p={},m=[{value:"Scanning Images",id:"scanning-images",level:3},{value:"Adding Images",id:"adding-images",level:3},{value:"Pulling Images",id:"pulling-images",level:4},{value:"Building Images",id:"building-images",level:4}],d={toc:m};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Images")," \u9009\u9879\u5361\u5141\u8bb8\u4f60\u7ba1\u7406\u865a\u62df\u673a\u4e0a\u7684\u955c\u50cf\u3002"),(0,r.kt)("p",null,"\u8981\u6539\u7528 nerdctl \u7ba1\u7406\u955c\u50cf\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"../tutorials/working-with-images"},"\u955c\u50cf"),"\u3002"),(0,r.kt)(l.Z,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/ui-main/Windows_Images.png",alt:null}))),(0,r.kt)(i.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/ui-main/macOS_Images.png",alt:null}))),(0,r.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/ui-main/Linux_Images.png",alt:null})))),(0,r.kt)("h3",{id:"scanning-images"},"Scanning Images"),(0,r.kt)("p",null,"\u6b64\u529f\u80fd\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/trivy"},"Trivy")," \u6765\u626b\u63cf\u4f60\u7684\u955c\u50cf\uff0c\u4ece\u800c\u67e5\u627e\u6f0f\u6d1e\u548c\u914d\u7f6e\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u8981\u626b\u63cf\u955c\u50cf\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ece\u955c\u50cf\u5217\u8868\u4e2d\uff0c\u627e\u5230\u8981\u626b\u63cf\u7684\u955c\u50cf\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Scan"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u663e\u793a\u6309\u4e25\u91cd\u7a0b\u5ea6\u6392\u5e8f\u7684\u6f0f\u6d1e\u6458\u8981\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},">")," \u67e5\u770b\u200b\u200b\u6bcf\u4e2a\u6f0f\u6d1e\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5176\u4e2d\u5305\u62ec\u6f0f\u6d1e\u8be6\u60c5\u7684\u94fe\u63a5\u3002")),(0,r.kt)("h3",{id:"adding-images"},"Adding Images"),(0,r.kt)("h4",{id:"pulling-images"},"Pulling Images"),(0,r.kt)("p",null,"\u6b64\u9009\u9879\u53ef\u4ee5\u8ba9\u4f60\u5c06\u955c\u50cf\u4ece\u955c\u50cf\u4ed3\u5e93\u62c9\u53d6\u5230\u4f60\u7684\u865a\u62df\u673a\u4e2d\u3002"),(0,r.kt)("p",null,"\u8981\u62c9\u53d6\u955c\u50cf\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb\u53f3\u4e0a\u89d2\u7684 ",(0,r.kt)("strong",{parentName:"li"},"+")," \u6309\u94ae\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Pull")," \u9009\u9879\u5361\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f93\u5165\u8981\u62c9\u53d6\u7684\u955c\u50cf\u7684\u540d\u79f0\u3002",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u955c\u50cf\u662f\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub")," \u4e2d\u63d0\u53d6\u7684\uff08\u683c\u5f0f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"repo/image[:tag]"),"\uff09\u3002\u8981\u4ece\u5176\u4ed6\u955c\u50cf\u4ed3\u5e93\u4e2d\u62c9\u53d6\uff0c\u8bf7\u5305\u542b\u4e3b\u673a\u540d ",(0,r.kt)("inlineCode",{parentName:"p"},"registry.example.com/repo/image[:tag]"),"\u3002"))),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Pull"),"\u3002")),(0,r.kt)("h4",{id:"building-images"},"Building Images"),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u9009\u9879\u6784\u5efa\u955c\u50cf\u5e76\u5c06\u5176\u6dfb\u52a0\u5230\u4f60\u7684\u865a\u62df\u673a\u3002"),(0,r.kt)("p",null,"\u8981\u6784\u5efa\u955c\u50cf\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb\u53f3\u4e0a\u89d2\u7684 ",(0,r.kt)("strong",{parentName:"li"},"+")," \u6309\u94ae\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Build")," \u9009\u9879\u5361\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f93\u5165\u6784\u5efa\u7684\u955c\u50cf\u7684\u540d\u79f0\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"repo/image"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"repo/image:tag"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"registry.example.com/repo/image")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"registry.example.com/repo/image:tag"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Build"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u6587\u4ef6\u6d4f\u89c8\u5668\u4e2d\uff0c\u9009\u62e9\u8981\u7528\u6765\u6784\u5efa\u955c\u50cf\u7684 Dockerfile\u3002")))}g.isMDXComponent=!0}}]);