"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[1890],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66823:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var n=r(83117),o=(r(67294),r(3905));const a={title:"Create a Multi-Node Cluster with k3d"},s=void 0,i={unversionedId:"how-to-guides/create-multi-node-cluster",id:"version-1.10/how-to-guides/create-multi-node-cluster",title:"Create a Multi-Node Cluster with k3d",description:"Rancher Desktop provides a single cluster with single node setup, which is adequate for most local development scenarios. However, there are use cases where, the ability to create a multi node cluster or spin up multiple clusters with flexibilty to switch between clusters is required. Eventhough Rancher Desktop doesn't have in-built multi node/cluster functionality, you can use k3d with Rancher Desktop to accomplish the same. k3d is a lightweight wrapper to run k3s (a minimal Kubernetes distribution, which is used by Rancher Desktop as well) in docker. k3d makes it very easy to create single- and multi-node k3s clusters in docker, e.g. for local development on Kubernetes.",source:"@site/versioned_docs/version-1.10/how-to-guides/create-multi-node-cluster.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/create-multi-node-cluster",permalink:"/1.10/how-to-guides/create-multi-node-cluster",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.10/how-to-guides/create-multi-node-cluster.md",tags:[],version:"1.10",frontMatter:{title:"Create a Multi-Node Cluster with k3d"},sidebar:"tutorialSidebar",previous:{title:"Transfer Container Images",permalink:"/1.10/how-to-guides/transfer-container-images"},next:{title:"Setup NGINX Ingress Controller",permalink:"/1.10/how-to-guides/setup-NGINX-Ingress-Controller"}},l={},u=[{value:"Steps to spin up a multi-node cluster",id:"steps-to-spin-up-a-multi-node-cluster",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},p=c("Tabs"),d=c("TabItem"),m={toc:u};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/create-multi-node-cluster"})),(0,o.kt)("p",null,"Rancher Desktop provides a ",(0,o.kt)("strong",{parentName:"p"},"single cluster with single node")," setup, which is adequate for most local development scenarios. However, there are use cases where, the ability to create a multi node cluster or spin up multiple clusters with flexibilty to switch between clusters is required. Eventhough Rancher Desktop doesn't have in-built multi node/cluster functionality, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://k3d.io"},"k3d")," with Rancher Desktop to accomplish the same. k3d is a lightweight wrapper to run k3s (a minimal Kubernetes distribution, which is used by Rancher Desktop as well) in docker. k3d makes it very easy to create single- and multi-node k3s clusters in docker, e.g. for local development on Kubernetes."),(0,o.kt)("h3",{id:"steps-to-spin-up-a-multi-node-cluster"},"Steps to spin up a multi-node cluster"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure ",(0,o.kt)("strong",{parentName:"p"},"dockerd(moby)")," is selected as the Container Runtime in the ",(0,o.kt)("strong",{parentName:"p"},"Kubernetes Settings")," page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install k3d."))),(0,o.kt)(p,{groupId:"installation-approach",mdxType:"Tabs"},(0,o.kt)(d,{value:"wget",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget -q -O - https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash\n"))),(0,o.kt)(d,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash\n")))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"k3d cluster create")," command to spin up multi node clusters. For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"k3d cluster create two-node-cluster --agents 2\nk3d cluster create three-node-cluster --agents 3\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"k3d sets the newly created cluster as active. You can switch between clusters via ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl config use-context")," command. For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl config use-context k3d-two-node-cluster\n")),(0,o.kt)("p",null,"To learn more about ",(0,o.kt)("strong",{parentName:"p"},"k3s")," and ",(0,o.kt)("strong",{parentName:"p"},"k3d"),", refer to these projects' docs at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.k3s.io/"},"k3s docs")," and ",(0,o.kt)("a",{parentName:"p",href:"https://k3d.io/"},"k3d docs"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u26a0\ufe0f Please note that the clusters created by ",(0,o.kt)("inlineCode",{parentName:"strong"},"k3d")," are not managed by Rancher Desktop GUI.")))}h.isMDXComponent=!0}}]);