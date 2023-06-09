"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9312],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79857:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l}});var o=n(83117),i=(n(67294),n(3905));const r={title:"Debugging a Container App with VS Code Docker extension"},a=void 0,s={unversionedId:"how-to-guides/vs-code-docker",id:"version-1.7/how-to-guides/vs-code-docker",title:"Debugging a Container App with VS Code Docker extension",description:"The VS Code Docker extension makes it easy to build, manage, debug and deploy containerized applications in Visual Studio Code.",source:"@site/versioned_docs/version-1.7/how-to-guides/vs-code-docker.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/vs-code-docker",permalink:"/1.7/how-to-guides/vs-code-docker",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/how-to-guides/vs-code-docker.md",tags:[],version:"1.7",frontMatter:{title:"Debugging a Container App with VS Code Docker extension"},sidebar:"tutorialSidebar",previous:{title:"Setup NGINX Ingress Controller",permalink:"/1.7/how-to-guides/setup-NGINX-Ingress-Controller"},next:{title:"VS Code Remote Containers",permalink:"/1.7/how-to-guides/vs-code-remote-containers"}},p={},l=[{value:"Steps to debug a sample application running within a container",id:"steps-to-debug-a-sample-application-running-within-a-container",level:3}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The VS Code Docker extension makes it easy to build, manage, debug and deploy containerized applications in Visual Studio Code."),(0,i.kt)("h3",{id:"steps-to-debug-a-sample-application-running-within-a-container"},"Steps to debug a sample application running within a container"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install and launch Rancher Desktop. Select ",(0,i.kt)("inlineCode",{parentName:"li"},"dockerd (moby)")," as the Container Runtime from the ",(0,i.kt)("inlineCode",{parentName:"li"},"Kubernetes Settings")," menu.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(16388).Z,width:"1155",height:"743"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Install and launch Visual Studio Code or Visual Studio Code Insiders. This tutorial uses Visual Studio Code.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(33106).Z,width:"1158",height:"741"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Install the VS Code Docker extension from the marketplace. ")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(73603).Z,width:"1261",height:"813"})," "),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can use the samples provided at this Github repository, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bwateratmsft/samples"},"https://github.com/bwateratmsft/samples"),". Clone this repository and open ",(0,i.kt)("inlineCode",{parentName:"p"},"expressapp")," folder in your VS Code session. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Open the command palette (Ctrl+Shift+P, F1, or Cmd+Shift+P) and run "Add Docker Files to Workspace". Since this is an Express app, Select ',(0,i.kt)("inlineCode",{parentName:"p"},"Node.js")," as the Application Platform and ",(0,i.kt)("inlineCode",{parentName:"p"},"3000")," (or any other available port) as the ",(0,i.kt)("inlineCode",{parentName:"p"},"port"),". As it's a simple example, select ",(0,i.kt)("inlineCode",{parentName:"p"},"No")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Include optional Docker Compose files")," prompt. This step adds a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Launch Configuration")," required to debug the application."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(36566).Z,width:"1053",height:"702"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Insert a breakpoint in the code.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(23963).Z,width:"1059",height:"704"})),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},'In the Debug window at the top, switch the active debug configuration to "Docker Node.js Launch". Press ',(0,i.kt)("inlineCode",{parentName:"li"},"F5")," to start the application container in ",(0,i.kt)("inlineCode",{parentName:"li"},"Debug")," mode. You will see the sample application's landing page opening in your browser, and the code execution stopping at the breakpoint. From here, you can debug the application as if it's running on your host.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(78956).Z,width:"1054",height:"704"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(20743).Z,width:"1054",height:"701"})),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sometimes, the application might not break at the set breakpoint on the first run as the debugging process may not have started. In this case, refresh the browser to trigger the execution again to hit the breakpoint. You can also get around this behavior by setting the property ",(0,i.kt)("inlineCode",{parentName:"p"},"inspectMode: 'break'")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"task.json")," file to prevent the app from running until the debugger attaches.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On some machines, the firewall settings might prevent the debugging process from establishing a connection between the host and the container processes. In this case, you can add a firewall rule to allow communication between the VM where the container is running and the host where you have the VS Code session running. On Windows, you can add a firewall rule by running the below command from a privileged powershell:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"New-NetFirewallRule -Action Allow -Description 'Allow communication from WSL containers' -Direction Inbound -Enabled True -InterfaceAlias 'vEthernet (WSL)' -Name 'WSL Inbound' -DisplayName 'WSL Inbound'\n")))}d.isMDXComponent=!0},16388:function(e,t,n){t.Z=n.p+"assets/images/rd-main-682924ff059ac64a1aa2636e09ce2ef3.png"},36566:function(e,t,n){t.Z=n.p+"assets/images/vscode-docker-add-docker-files-1-e19810f9204feb5e440424de9e3101cc.png"},20743:function(e,t,n){t.Z=n.p+"assets/images/vscode-docker-debug-breakpoint-hit-42fb73fe3c0f223c2d0f06bdb7d555f6.png"},23963:function(e,t,n){t.Z=n.p+"assets/images/vscode-docker-debug-breakpoint-f30564461f6e03aa061fb9904d4c3c91.png"},78956:function(e,t,n){t.Z=n.p+"assets/images/vscode-docker-debug-configuration-c646939163651c68beb853de2f45a4ed.png"},73603:function(e,t,n){t.Z=n.p+"assets/images/vscode-docker-marketplace-0aca928329baea1157f0fa92111e99d0.png"},33106:function(e,t,n){t.Z=n.p+"assets/images/vscode-main-f178361041b0f3168d8041a308fa00b1.png"}}]);