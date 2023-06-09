"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[8527],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(y,a(a({ref:r},s),{},{components:t})):n.createElement(y,a({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71303:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=t(83117),o=(t(67294),t(3905));const i={sidebar_label:"Proxy",title:"Proxy"},a=void 0,c={unversionedId:"ui/preferences/wsl/proxy",id:"ui/preferences/wsl/proxy",title:"Proxy",description:"WSL Proxy",source:"@site/docs/ui/preferences/wsl/proxy.md",sourceDirName:"ui/preferences/wsl",slug:"/ui/preferences/wsl/proxy",permalink:"/next/ui/preferences/wsl/proxy",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/preferences/wsl/proxy.md",tags:[],version:"current",frontMatter:{sidebar_label:"Proxy",title:"Proxy"},sidebar:"tutorialSidebar",previous:{title:"Network",permalink:"/next/ui/preferences/wsl/network"},next:{title:"General",permalink:"/next/ui/preferences/container-engine/general"}},l={},p=[{value:"WSL Proxy",id:"wsl-proxy",level:3},{value:"Proxy address",id:"proxy-address",level:3},{value:"Authentication information",id:"authentication-information",level:3}],s={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/wsl/Windows_WSL_tabProxy.png",alt:null})),(0,o.kt)("h3",{id:"wsl-proxy"},"WSL Proxy"),(0,o.kt)("p",null,"Rancher Desktop now allows local, corporate, or VPN proxy server support for Windows users. The implementation can be enabled or disabled through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Proxy")," tab to capture network traffic and forward it to an http proxy. Once all information has been input, click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Apply")," button to have changes immediately take effect."),(0,o.kt)("h3",{id:"proxy-address"},"Proxy address"),(0,o.kt)("p",null,"Users can input their proxy IP address and port number in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Proxy address")," fields."),(0,o.kt)("h3",{id:"authentication-information"},"Authentication information"),(0,o.kt)("p",null,"If your proxy requires authentication then users can input their username and password in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authentication information")," fields."))}u.isMDXComponent=!0}}]);