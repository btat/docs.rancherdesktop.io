"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[6461],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,h=d["".concat(u,".").concat(f)]||d[f]||l[f]||a;return n?r.createElement(h,c(c({ref:t},p),{},{components:n})):r.createElement(h,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30832:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return s}});var r=n(83117),o=(n(67294),n(3905));const a={title:"\u6982\u8ff0",slug:"/"},c=void 0,i={unversionedId:"getting-started/introduction",id:"getting-started/introduction",title:"\u6982\u8ff0",description:"Rancher Desktop \u662f\u4e00\u6b3e\u5728\u684c\u9762\u4e0a\u63d0\u4f9b\u5bb9\u5668\u548c Kubernetes \u7ba1\u7406\u7684\u5e94\u7528\u3002\u5b83\u9002\u7528\u4e8e Mac\uff08\u5305\u62ec Intel \u548c Apple \u82af\u7247\uff09\u3001Windows \u548c Linux\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/",permalink:"/zh/next/",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/getting-started/introduction.md",tags:[],version:"current",frontMatter:{title:"\u6982\u8ff0",slug:"/"},sidebar:"tutorialSidebar",next:{title:"\u5b89\u88c5",permalink:"/zh/next/getting-started/installation"}},u={},s=[{value:"\u5bb9\u5668\u7ba1\u7406",id:"\u5bb9\u5668\u7ba1\u7406",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Rancher \u4e0e Rancher Desktop",id:"rancher-\u4e0e-rancher-desktop",level:2}],p={toc:s};function l(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rancher Desktop \u662f\u4e00\u6b3e\u5728\u684c\u9762\u4e0a\u63d0\u4f9b\u5bb9\u5668\u548c Kubernetes \u7ba1\u7406\u7684\u5e94\u7528\u3002\u5b83\u9002\u7528\u4e8e Mac\uff08\u5305\u62ec Intel \u548c Apple \u82af\u7247\uff09\u3001Windows \u548c Linux\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(59465).Z,width:"1813",height:"596"}),"\n",(0,o.kt)("em",{parentName:"p"},"\u4e0a\u56fe\u5de6\u8fb9\u662f Mac \u4e0a\u7684 Kubernetes \u8bbe\u7f6e\uff0c\u53f3\u8fb9\u662f Windows\u3002")),(0,o.kt)("h2",{id:"\u5bb9\u5668\u7ba1\u7406"},"\u5bb9\u5668\u7ba1\u7406"),(0,o.kt)("p",null,"Rancher Desktop \u63d0\u4f9b\u4e86\u6784\u5efa\u3001\u63a8\u9001\u548c\u62c9\u53d6\u5bb9\u5668\u955c\u50cf\u4ee5\u53ca\u8fd0\u884c\u5bb9\u5668\u7684\u529f\u80fd\uff0c\u8fd9\u4e9b\u529f\u80fd\u53ef\u4ee5\u901a\u8fc7 Docker CLI\uff08\u5f53\u4f60\u9009\u62e9 Moby/dockerd \u4f5c\u4e3a\u5f15\u64ce\u65f6\uff09\u6216 nerdctl\uff08\u5f53\u4f60\u9009\u62e9 containerd \u4f5c\u4e3a\u5f15\u64ce\u65f6\uff09\u5b9e\u73b0\uff0c\u800c ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containerd/nerdctl"},"nerdctl"),' \u662f containerd \u9879\u76ee\u63d0\u4f9b\u7684 "\u517c\u5bb9 containerd \u7684 Docker CLI"\u3002'),(0,o.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,"Kubernetes \u5185\u7f6e\u5728 Rancher Desktop \u4e2d\uff0c\u7531 ",(0,o.kt)("a",{parentName:"p",href:"https://k3s.io/"},"K3s")," \u63d0\u4f9b\u3002K3s \u662f\u4e00\u4e2a\u7ecf\u8fc7\u8ba4\u8bc1\u7684\u8f7b\u91cf\u7ea7\u53d1\u884c\u7248\u3002\u901a\u8fc7 Rancher Desktop\uff0c\u4f60\u80fd\u591f ",(0,o.kt)("em",{parentName:"p"},"\u9009\u62e9\u4f60\u7684 Kubernetes \u7248\u672c"),"\uff0c\u5e76\u4e14",(0,o.kt)("em",{parentName:"p"},"\u4e00\u952e\u91cd\u7f6e Kubernetes \u6216 Kubernetes \u4ee5\u53ca\u6574\u4e2a\u5bb9\u5668\u8fd0\u884c\u65f6"),"\u3002"),(0,o.kt)("h2",{id:"rancher-\u4e0e-rancher-desktop"},"Rancher \u4e0e Rancher Desktop"),(0,o.kt)("p",null,"\u867d\u7136 ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/"},"Rancher")," \u548c Rancher Desktop \u7684\u540d\u5b57\u91cc\u90fd\u5305\u542b ",(0,o.kt)("em",{parentName:"p"},"Rancher"),"\uff0c\u4f46\u5b83\u4eec\u7684\u529f\u80fd\u662f\u6709\u5dee\u522b\u7684\u3002Rancher Desktop \u4e0d\u662f\u684c\u9762\u7248 Rancher\u3002Rancher \u662f\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u7684\u5f3a\u5927\u89e3\u51b3\u65b9\u6848\uff0cRancher Desktop \u63d0\u4f9b\u672c\u5730 Kubernetes \u548c\u5bb9\u5668\u7ba1\u7406\u5e73\u53f0\uff0c\u8fd9\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\u76f8\u8f85\u76f8\u6210\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u8981\u5728\u672c\u5730\u7cfb\u7edf\u4e0a\u8fd0\u884c Rancher\uff0c\u4f60\u53ef\u4ee5\u5c06 Rancher \u5b89\u88c5\u5230 Rancher Desktop \u4e2d\u3002"))}l.isMDXComponent=!0},59465:function(e,t,n){t.Z=n.p+"assets/images/intro-8e083250899e4ad7a467e4b9c4daf381.png"}}]);