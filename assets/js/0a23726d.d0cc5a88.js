"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[70],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64154:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var r=n(83117),a=(n(67294),n(3905));const i={sidebar_label:"Emulation",title:"Emulation (macOS)"},o=void 0,u={unversionedId:"ui/preferences/virtual-machine/emulation",id:"ui/preferences/virtual-machine/emulation",title:"Emulation (macOS)",description:"QEMU",source:"@site/docs/ui/preferences/virtual-machine/emulation.md",sourceDirName:"ui/preferences/virtual-machine",slug:"/ui/preferences/virtual-machine/emulation",permalink:"/next/ui/preferences/virtual-machine/emulation",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/preferences/virtual-machine/emulation.md",tags:[],version:"current",frontMatter:{sidebar_label:"Emulation",title:"Emulation (macOS)"},sidebar:"tutorialSidebar",previous:{title:"Environment",permalink:"/next/ui/preferences/application/environment"},next:{title:"Hardware",permalink:"/next/ui/preferences/virtual-machine/hardware"}},c={},l=[{value:"QEMU",id:"qemu",level:3},{value:"VZ",id:"vz",level:3}],p={toc:l};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/preferences/virtual-machine/emulation"})),(0,a.kt)("h3",{id:"qemu"},"QEMU"),(0,a.kt)("p",null," ",(0,a.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/macOS_virtualMachine_tabEmulation.png",alt:null})),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://www.qemu.org/documentation/"},(0,a.kt)("strong",{parentName:"a"},"QEMU"))," option is enabled by default and turns on a guest operating system. You can switch the virtual machine type after the first run."),(0,a.kt)("h3",{id:"vz"},"VZ"),(0,a.kt)("p",null," ",(0,a.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/macOS_virtualMachine_tabEmulation_vz.png",alt:null})),(0,a.kt)("admonition",{title:"warning",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This is an ",(0,a.kt)("em",{parentName:"p"},"experimental")," setting. The setting is available for ARM machines on  macOS 13.3 or later, and Intel machines on macOS 13.0 or later.")),(0,a.kt)("p",null,"You can also enable the ",(0,a.kt)("strong",{parentName:"p"},"VZ")," option to use the native macOS ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/virtualization"},"Virtualization.Framework")," for running a guest machine."),(0,a.kt)("p",null,"The suboption ",(0,a.kt)("strong",{parentName:"p"},"VZ option")," can also be enabled if using ",(0,a.kt)("strong",{parentName:"p"},"VZ")," as your virtual machine type. The suboption enables ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/virtualization/running_intel_binaries_in_linux_vms_with_rosetta"},"Rosetta support")," and allows users to run applications that contain x86_64 instructions on Apple hardware."))}s.isMDXComponent=!0}}]);