"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[1809],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},93687:function(e,t,a){var n=a(10412);const i=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),r=i?"ios":"android",l=i?"macOS":o?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294),i=a(34334),o="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return T}});var n=a(83117),i=a(67294),o=a(34334),r=a(12466),l=a(76775),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){var t;return(null==(t=i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function d(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,i.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??p;return h({value:e,tabValues:o})?e:null})();(0,i.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var k=a(72389),v="tabList__CuJ",b="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(p(t),s(n))},h=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:r}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},r,{className:(0,o.Z)("tabs__item",b,null==r?void 0:r.className,{"tabs__item--active":l===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return i.createElement("div",{className:(0,o.Z)("tabs-container",v)},i.createElement(g,(0,n.Z)({},e,t)),i.createElement(w,(0,n.Z)({},e,t)))}function T(e){const t=(0,k.Z)();return i.createElement(y,(0,n.Z)({key:String(t)},e))}},33735:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=a(83117),i=(a(67294),a(3905)),o=a(74866),r=a(85162),l=a(93687);const s={sidebar_label:"Application",title:"Application"},c=void 0,u={unversionedId:"ui/preferences/application",id:"version-1.8/ui/preferences/application",title:"Application",description:"General",source:"@site/versioned_docs/version-1.8/ui/preferences/application.md",sourceDirName:"ui/preferences",slug:"/ui/preferences/application",permalink:"/1.8/ui/preferences/application",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.8/ui/preferences/application.md",tags:[],version:"1.8",frontMatter:{sidebar_label:"Application",title:"Application"},sidebar:"tutorialSidebar",previous:{title:"Diagnostics",permalink:"/1.8/ui/diagnostics"},next:{title:"Virtual Machine",permalink:"/1.8/ui/preferences/virtual-machine"}},p={},d=[{value:"General",id:"general",level:3},{value:"Automatic Updates",id:"automatic-updates",level:4},{value:"Statistics",id:"statistics",level:4},{value:"Administrative Access",id:"administrative-access",level:4},{value:"Automatic Updates",id:"automatic-updates-1",level:4},{value:"Statistics",id:"statistics-1",level:4},{value:"Administrative Access",id:"administrative-access-1",level:4},{value:"Automatic Updates",id:"automatic-updates-2",level:4},{value:"Statistics",id:"statistics-2",level:4},{value:"Behavior",id:"behavior",level:3},{value:"Startup",id:"startup",level:4},{value:"Background",id:"background",level:4},{value:"Notification Icon",id:"notification-icon",level:4},{value:"Startup",id:"startup-1",level:4},{value:"Background",id:"background-1",level:4},{value:"Notification Icon",id:"notification-icon-1",level:4},{value:"Startup",id:"startup-2",level:4},{value:"Background",id:"background-2",level:4},{value:"Notification Icon",id:"notification-icon-2",level:4},{value:"Environment",id:"environment",level:3},{value:"Configure PATH",id:"configure-path",level:4},{value:"Configure PATH",id:"configure-path-1",level:4}],h={toc:d};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"general"},"General"),(0,i.kt)("p",null,"Allows for enablement of automatic updates, as well as an optional field to allow Rancher Desktop to collect anonymous statistics to help improve the application."),(0,i.kt)(o.Z,{groupId:"os",defaultValue:l.Z.defaultOs,mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Windows",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/Windows_application_tabGeneral.png",alt:null})),(0,i.kt)("h4",{id:"automatic-updates"},"Automatic Updates"),(0,i.kt)("p",null,"When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started."),(0,i.kt)("h4",{id:"statistics"},"Statistics"),(0,i.kt)("p",null,"This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected.")),(0,i.kt)(r.Z,{value:"macOS",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/macOS_application_tabGeneral.png",alt:null})),(0,i.kt)("h4",{id:"administrative-access"},"Administrative Access"),(0,i.kt)("p",null,"Allows Rancher Desktop to acquire administrative access (sudo access) when starting for some operations. This allows for enhanced functionality, including bridged networking and default docker socket support. Changes will only be applied next time Rancher Desktop starts."),(0,i.kt)("h4",{id:"automatic-updates-1"},"Automatic Updates"),(0,i.kt)("p",null,"When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started."),(0,i.kt)("h4",{id:"statistics-1"},"Statistics"),(0,i.kt)("p",null,"This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected.")),(0,i.kt)(r.Z,{value:"Linux",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/Linux_application_tabGeneral.png",alt:null})),(0,i.kt)("h4",{id:"administrative-access-1"},"Administrative Access"),(0,i.kt)("p",null,"Allows Rancher Desktop to acquire administrative access (sudo access) when starting for some operations. This allows for enhanced functionality, including bridged networking and default docker socket support. Changes will only be applied next time Rancher Desktop starts."),(0,i.kt)("h4",{id:"automatic-updates-2"},"Automatic Updates"),(0,i.kt)("p",null,"When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started."),(0,i.kt)("h4",{id:"statistics-2"},"Statistics"),(0,i.kt)("p",null,"This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected."))),(0,i.kt)("h3",{id:"behavior"},"Behavior"),(0,i.kt)("p",null,"Allows for configuration of application behavior upon startup, background process behavior, and notification icon display."),(0,i.kt)(o.Z,{groupId:"os",defaultValue:l.Z.defaultOs,mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Windows",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/Windows_application_tabBehavior.png",alt:null})),(0,i.kt)("h4",{id:"startup"},"Startup"),(0,i.kt)("p",null,"Rancher Desktop can automatically be started as part of the user login process. This will take all other behavior settings from the page into account as well."),(0,i.kt)("h4",{id:"background"},"Background"),(0,i.kt)("p",null,"When Rancher Desktop is started in the background, it will not have an application window, nor an entry in the task switcher or task bar. The application window can still be opened via the context menu of the notification icon."),(0,i.kt)("p",null,"When Rancher Desktop is launched again while already running in the background then the application window is shown and the application is added to the task switcher and task bar. This can be used to gain access to the background application again when the notification icon is unavailable as well."),(0,i.kt)("p",null,"Rancher Desktop normally remains running in the background even when the main application window is closed (and the application therefore removed from the task switcher and task bar), but can be configured to terminate the application as well when the main window is closed."),(0,i.kt)("h4",{id:"notification-icon"},"Notification Icon"),(0,i.kt)("p",null,"Rancher Desktop shows the application status with a notification icon. The context menu of the icon provides more status information and provides quick access to other functionality of the application. This options will disable the creation of the notification icon.")),(0,i.kt)(r.Z,{value:"macOS",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/macOS_application_tabBehavior.png",alt:null})),(0,i.kt)("h4",{id:"startup-1"},"Startup"),(0,i.kt)("p",null,"Rancher Desktop can automatically be started as part of the user login process. This will take all other behavior settings from the page into account as well."),(0,i.kt)("h4",{id:"background-1"},"Background"),(0,i.kt)("p",null,"When Rancher Desktop is started in the background, it will not have an application window, nor an entry in the app switcher or the dock. The application window can still be opened via the context menu of the notification icon in the menu bar."),(0,i.kt)("p",null,"When Rancher Desktop is launched again while already running in the background then the application window is shown and the application is added to the app switcher and the dock. This can be used to gain access to the background application again when the notification icon is unavailable as well."),(0,i.kt)("p",null,"Rancher Desktop normally remains running in the background even when the main application window is closed (and the application therefore removed from the app switcher and the dock), but can be configured to terminate the application as well when the main window is closed."),(0,i.kt)("h4",{id:"notification-icon-1"},"Notification Icon"),(0,i.kt)("p",null,"Rancher Desktop shows the application status with a notification icon in the menu bar. The context menu of the icon provides more status information and provides quick access to other functionality of the application. This options will disable the creation of the notification icon.")),(0,i.kt)(r.Z,{value:"Linux",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/Linux_application_tabBehavior.png",alt:null})),(0,i.kt)("h4",{id:"startup-2"},"Startup"),(0,i.kt)("p",null,"Rancher Desktop can automatically be started as part of the user login process. This will take all other behavior settings from the page into account as well."),(0,i.kt)("h4",{id:"background-2"},"Background"),(0,i.kt)("p",null,"When Rancher Desktop is started in the background, it will not have an application window, nor an entry in the task switcher or task bar. The application window can still be opened via the context menu of the notification icon."),(0,i.kt)("p",null,"When Rancher Desktop is launched again while already running in the background then the application window is shown and the application is added to the task switcher and task bar. This can be used to gain access to the background application again when the notification icon is unavailable as well."),(0,i.kt)("p",null,"Rancher Desktop normally remains running in the background even when the main application window is closed (and the application therefore removed from the task switcher and task bar), but can be configured to terminate the application as well when the main window is closed."),(0,i.kt)("h4",{id:"notification-icon-2"},"Notification Icon"),(0,i.kt)("p",null,"Rancher Desktop shows the application status with a notification icon. The context menu of the icon provides more status information and provides quick access to other functionality of the application. This options will disable the creation of the notification icon."))),(0,i.kt)("h3",{id:"environment"},"Environment"),(0,i.kt)("p",null,"Allows for configuration of the ",(0,i.kt)("inlineCode",{parentName:"p"},"$PATH")," variable in the users shell in order to interact with Rancher Desktop installed utilities."),(0,i.kt)(o.Z,{groupId:"os",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"macOS",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/macOS_application_tabEnvironment.png",alt:null})),(0,i.kt)("h4",{id:"configure-path"},"Configure PATH"),(0,i.kt)("p",null,"A Rancher Desktop installation comes with command-line utilities that are used to interface with its various features. Some examples of these utilities are ",(0,i.kt)("inlineCode",{parentName:"p"},"docker"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nerdctl"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"helm"),". These utilities are located in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," - you may see which utilities are included in your installation by running ",(0,i.kt)("inlineCode",{parentName:"p"},"ls ~/.rd/bin"),"."),(0,i.kt)("p",null,"In order to use the utilities, ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," must be in the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," variable in your shell."),(0,i.kt)("p",null,"There are two options for doing this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Automatic"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," management will add ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," to your ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," by modifying your shell .rc files for you."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Manual"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," management does not change anything - in this mode, you must add ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," to your ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," yourself."))),(0,i.kt)(r.Z,{value:"Linux",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/Linux_application_tabEnvironment.png",alt:null})),(0,i.kt)("h4",{id:"configure-path-1"},"Configure PATH"),(0,i.kt)("p",null,"A Rancher Desktop installation comes with command-line utilities that are used to interface with its various features. Some examples of these utilities are ",(0,i.kt)("inlineCode",{parentName:"p"},"docker"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nerdctl"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"helm"),". These utilities are located in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," - you may see which utilities are included in your installation by running ",(0,i.kt)("inlineCode",{parentName:"p"},"ls ~/.rd/bin"),"."),(0,i.kt)("p",null,"In order to use the utilities, ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," must be in the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," variable in your shell."),(0,i.kt)("p",null,"There are two options for doing this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Automatic"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," management will add ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," to your ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," by modifying your shell .rc files for you."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Manual"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," management does not change anything - in this mode, you must add ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," to your ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," yourself.")))))}m.isMDXComponent=!0}}]);