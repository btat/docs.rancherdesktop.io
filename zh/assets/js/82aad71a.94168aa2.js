"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[738],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85938:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=t(83117),o=(t(67294),t(3905));const i={sidebar_label:"\u7f51\u7edc",title:"\u7f51\u7edc\uff08Windows\uff09"},a=void 0,c={unversionedId:"ui/preferences/wsl/network",id:"version-1.10/ui/preferences/wsl/network",title:"\u7f51\u7edc\uff08Windows\uff09",description:"Networking Tunnel",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.10/ui/preferences/wsl/network.md",sourceDirName:"ui/preferences/wsl",slug:"/ui/preferences/wsl/network",permalink:"/zh/1.10/ui/preferences/wsl/network",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.10/ui/preferences/wsl/network.md",tags:[],version:"1.10",frontMatter:{sidebar_label:"\u7f51\u7edc",title:"\u7f51\u7edc\uff08Windows\uff09"},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u6210",permalink:"/zh/1.10/ui/preferences/wsl/integrations"},next:{title:"\u4ee3\u7406",permalink:"/zh/1.10/ui/preferences/wsl/proxy"}},s={},u=[{value:"Networking Tunnel",id:"networking-tunnel",level:3}],l={toc:u};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Windows_wsl_tabNetwork.png",alt:null})),(0,o.kt)("h3",{id:"networking-tunnel"},"Networking Tunnel"),(0,o.kt)("admonition",{title:"\u8b66\u544a",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u4e00\u4e2a",(0,o.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u6027"),"\u8bbe\u7f6e\u3002")),(0,o.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"Network")," \u89c6\u56fe\u542f\u7528\u6216\u7981\u7528\u7f51\u7edc\u96a7\u9053\u3002\u5e94\u7528\u66f4\u6539\u540e\uff0cKubernetes \u5c06\u91cd\u542f\u3002\u6709\u5173\u5b9e\u9a8c\u6027 Rancher Desktop Network \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop-networking"},"\u5f00\u53d1\u8005\u8bf4\u660e"),"\u3002"))}p.isMDXComponent=!0}}]);