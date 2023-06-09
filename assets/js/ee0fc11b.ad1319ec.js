"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[264],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},93687:function(e,t,a){var n=a(10412);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",i=r?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(34334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(83117),r=a(67294),l=a(34334),o=a(12466),i=a(76775),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=g({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var b=a(72389),k="tabList__CuJ",y="tabItem_LNqP";function h(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",y,null==o?void 0:o.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},25234:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=a(83117),r=(a(67294),a(3905)),l=a(74866),o=a(85162);a(93687);const i={sidebar_label:"Allowed Images",title:"Allowed Images"},s=void 0,u={unversionedId:"ui/preferences/container-engine/allowed-images",id:"ui/preferences/container-engine/allowed-images",title:"Allowed Images",description:"The Allowed Images tab lets you control which registry artifacts you can access within Rancher Desktop. For example, you may want to pull container images only from your organization's private registry or only from your department-specific namespace in your organization's registry, etc. You can specify image name patterns to allow accessing images only from specific registries and/or repositories.",source:"@site/docs/ui/preferences/container-engine/allowed-images.md",sourceDirName:"ui/preferences/container-engine",slug:"/ui/preferences/container-engine/allowed-images",permalink:"/next/ui/preferences/container-engine/allowed-images",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/preferences/container-engine/allowed-images.md",tags:[],version:"current",frontMatter:{sidebar_label:"Allowed Images",title:"Allowed Images"},sidebar:"tutorialSidebar",previous:{title:"General",permalink:"/next/ui/preferences/container-engine/general"},next:{title:"Kubernetes",permalink:"/next/ui/preferences/kubernetes"}},c={},p=[{value:"Allowed image patterns",id:"allowed-image-patterns",level:4},{value:"How to specify Allowed Image patterns",id:"how-to-specify-allowed-image-patterns",level:5},{value:"Examples",id:"examples",level:4}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Allowed Images")," tab lets you control which registry artifacts you can access within Rancher Desktop. For example, you may want to pull container images only from your organization's private registry or only from your department-specific namespace in your organization's registry, etc. You can specify image name patterns to allow accessing images only from specific registries and/or repositories."),(0,r.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/preferences/Windows_containerEngine_tabAllowedImages.png",alt:null}))),(0,r.kt)(o.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/preferences/macOS_containerEngine_tabAllowedImages.png",alt:null}))),(0,r.kt)(o.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/preferences/Linux_containerEngine_tabAllowedImages.png",alt:null})))),(0,r.kt)("h4",{id:"allowed-image-patterns"},"Allowed image patterns"),(0,r.kt)("p",null,"Check the ",(0,r.kt)("strong",{parentName:"p"},"Enable")," checkbox to enable Rancher Desktop to apply the specified patterns while pulling or pushing images, which means only images whose names match at least one of the specified patterns will be allowed."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("strong",{parentName:"p"},"+")," and ",(0,r.kt)("strong",{parentName:"p"},"-")," buttons to add/remove image name patterns."),(0,r.kt)("h5",{id:"how-to-specify-allowed-image-patterns"},"How to specify Allowed Image patterns"),(0,r.kt)("p",null,"You can specify Allowed Image patterns using the format ",(0,r.kt)("inlineCode",{parentName:"p"},"[registry/][:port/][organization/]repository[:tag]"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If not specified in an Allowed Image pattern,"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"registry")," defaults to Docker Hub (",(0,r.kt)("inlineCode",{parentName:"li"},"docker.io"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port")," defaults to 433. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"organization")," for Docker Hub defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"library"),", and does not apply to other registries."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tag")," defaults to anything and ",(0,r.kt)("strong",{parentName:"li"},"not")," just to ",(0,r.kt)("inlineCode",{parentName:"li"},"latest"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Filtering by ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," does not actually work; the corresponding digests (",(0,r.kt)("inlineCode",{parentName:"p"},"repository@digest"),") will have to be added to the allow list as well, making this impractical. Please file a Github issue if you have a use-case that requires filtering based on tags!"),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pattern"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"busybox")),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the ",(0,r.kt)("inlineCode",{parentName:"td"},"busybox")," repository in the ",(0,r.kt)("inlineCode",{parentName:"td"},"library")," organization of the ",(0,r.kt)("inlineCode",{parentName:"td"},"docker.io")," registry.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"suse/")),(0,r.kt)("td",{parentName:"tr",align:null},"Allow any image in the ",(0,r.kt)("inlineCode",{parentName:"td"},"suse")," organization of the ",(0,r.kt)("inlineCode",{parentName:"td"},"docker.io")," registry. ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Note:")," A trailing slash at the end of the repository means a single segment follows, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"suse/nginx"),", but not ",(0,r.kt)("inlineCode",{parentName:"td"},"suse/cap/uaa"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"suse//")),(0,r.kt)("td",{parentName:"tr",align:null},"Allow any image in the ",(0,r.kt)("inlineCode",{parentName:"td"},"suse")," organization of the ",(0,r.kt)("inlineCode",{parentName:"td"},"docker.io")," registry. ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Note:")," A trailing double slash at the end of the repository means one or more segments follow, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"suse/cap/uaa"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"registry.internal:5000")),(0,r.kt)("td",{parentName:"tr",align:null},"Allow any image from the ",(0,r.kt)("inlineCode",{parentName:"td"},"registry.internal:5000")," registry.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"registry.suse.com/nginx")),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the image ",(0,r.kt)("inlineCode",{parentName:"td"},"nginx")," from the ",(0,r.kt)("inlineCode",{parentName:"td"},"registry.suse.com")," registry. ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Note:")," Non-DockerHub registries do not have the concept of organizations at the top level, so no default ",(0,r.kt)("inlineCode",{parentName:"td"},"library")," organization is implied.")))))}m.isMDXComponent=!0}}]);