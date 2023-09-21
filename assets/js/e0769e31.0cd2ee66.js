"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[948],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32694:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var r=n(83117),o=(n(67294),n(3905));const a={title:"Working with Containers"},i=void 0,l={unversionedId:"tutorials/working-with-containers",id:"tutorials/working-with-containers",title:"Working with Containers",description:"nerdctl is a Docker-compatible CLI for containerd. The primary goal of nerdctl is to facilitate experimenting with cutting-edge features of containerd that are not present in Docker.",source:"@site/docs/tutorials/working-with-containers.md",sourceDirName:"tutorials",slug:"/tutorials/working-with-containers",permalink:"/next/tutorials/working-with-containers",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/tutorials/working-with-containers.md",tags:[],version:"current",frontMatter:{title:"Working with Containers"},sidebar:"tutorialSidebar",previous:{title:"Working with Images",permalink:"/next/tutorials/working-with-images"},next:{title:"Hello World Example",permalink:"/next/how-to-guides/hello-world-example"}},p={},c=[{value:"Running Containers",id:"running-containers",level:2},{value:"Docker Compose",id:"docker-compose",level:2},{value:"Exposing a Port",id:"exposing-a-port",level:2},{value:"Exposing the port of a running container",id:"exposing-the-port-of-a-running-container",level:3},{value:"Targeting a Kubernetes Namespace",id:"targeting-a-kubernetes-namespace",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=s("Tabs"),u=s("TabItem"),m={toc:c};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/tutorials/working-with-containers"})),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"nerdctl")," is a Docker-compatible CLI for containerd. The primary goal of ",(0,o.kt)("inlineCode",{parentName:"p"},"nerdctl")," is to facilitate experimenting with cutting-edge features of containerd that are not present in Docker."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/moby/moby"},"Moby")," is an open-source project that was created by Docker to enable and accelerate software containerization. Components include container build tools, a container registry, orchestration tools, and a runtime, and more. The Docker CLI uses the Moby runtime. "),(0,o.kt)("h2",{id:"running-containers"},"Running Containers"),(0,o.kt)("p",null,"To run a container with the default ",(0,o.kt)("inlineCode",{parentName:"p"},"bridge")," CNI network (10.4.0.0/24):"),(0,o.kt)(d,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(u,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nerdctl run -it --rm alpine\n"))),(0,o.kt)(u,{value:"docker",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -it --rm alpine\n")))),(0,o.kt)("p",null,"To build an image using BuildKit:"),(0,o.kt)(d,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(u,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nerdctl build -t foo /some-dockerfile-directory\nnerdctl run -it --rm foo\n"))),(0,o.kt)(u,{value:"docker",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker build -t foo /some-dockerfile-directory\ndocker run -it --rm foo\n")))),(0,o.kt)("p",null,"To build and send output to a local directory using BuiltKit:"),(0,o.kt)(d,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(u,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nerdctl build -o type=local,dest=. /some-dockerfile-directory\n"))),(0,o.kt)(u,{value:"docker",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker build -o type=local,dest=. /some-dockerfile-directory\n")))),(0,o.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,o.kt)("p",null,"Docker Compose is a tool for defining and running multi-container Docker applications. "),(0,o.kt)(d,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(u,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"nerdctl-compose")," CLI is designed to be compatible with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nerdctl compose up -d\nnerdctl compose down\n"))),(0,o.kt)(u,{value:"docker",mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"compose")," command in the Docker CLI supports most of the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose")," commands and flags. It is expected to be a drop-in replacement for ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker compose up -d\ndocker compose down\n")))),(0,o.kt)("h2",{id:"exposing-a-port"},"Exposing a Port"),(0,o.kt)("p",null,"To expose port 8000 for a container:"),(0,o.kt)(d,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(u,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nerdctl run -d -p 8000:80 nginx\n"))),(0,o.kt)(u,{value:"docker",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d -p 8000:80 nginx\n")))),(0,o.kt)("p",null,"You can then access the container via the browser here: ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8000/"},"http://localhost:8000/"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: By default the exposed ports are accessible on all network interfaces on macOS and Linux. However, on Windows, the exposed ports are currently only accessible through the localhost network interface (see issue ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/rancher-sandbox/rancher-desktop/issues/1180"},"#1180"),").  As a workaround, you can ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/rancher-sandbox/rancher-desktop/issues/1180#issuecomment-1005514200"},"configure a ",(0,o.kt)("inlineCode",{parentName:"a"},"portproxy")," on the windows host")," to expose the port to additional network interfaces.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"netsh interface portproxy add v4tov4 listenport=8080 listenaddress=0.0.0.0 connectport=8080 connectaddress=localhost\n")),(0,o.kt)("h3",{id:"exposing-the-port-of-a-running-container"},"Exposing the port of a running container"),(0,o.kt)("p",null,"If you forgot to expose the port as part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," command, you can follow the steps below to start a proxy container that forwards traffic to the original container. This hack helps you avoid restarting the container and is especially useful when dealing with containerized services with longer startup times. With full disclosure, this hack is based on the suggestions in this ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/19897743/exposing-a-port-on-a-live-docker-container"},"stackoverflow discussion")," and this ",(0,o.kt)("a",{parentName:"p",href:"https://iximiuz.com/en/posts/docker-publish-port-of-running-container/"},"blog post"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Let's say you ran a container without publishing the port (by mistake).")),(0,o.kt)(d,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(u,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nerdctl run -d --name rd-nginx nginx\n"))),(0,o.kt)(u,{value:"docker",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d --name rd-nginx nginx\n")))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Set port variables to be used in the subsequent commands.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Powershell\n$HOST_PORT=8080\n$CONTAINER_PORT=80\n\n# Bash\nexport HOST_PORT=8080\nexport CONTAINER_PORT=80\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Get the container IP address. If you did not give a name to the container at the time of starting it, you can pass the container id in place of the container name ",(0,o.kt)("inlineCode",{parentName:"li"},"rd-nginx")," in the commands below.")),(0,o.kt)(d,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(u,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Powershell\n$CONTAINER_IP=$(nerdctl inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rd-nginx)\n\n# Bash\nexport CONTAINER_IP=$(nerdctl inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rd-nginx)\n"))),(0,o.kt)(u,{value:"docker",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Powershell\n$CONTAINER_IP=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rd-nginx)\n\n# Bash\nexport CONTAINER_IP=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rd-nginx)\n")))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Start a proxy container to forward traffic to the original container.")),(0,o.kt)(d,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(u,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nerdctl run --rm -p ${HOST_PORT}:${CONTAINER_PORT} alpine/socat TCP-LISTEN:${CONTAINER_PORT},fork TCP-CONNECT:${CONTAINER_IP}:${CONTAINER_PORT}\n"))),(0,o.kt)(u,{value:"docker",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --rm -p ${HOST_PORT}:${CONTAINER_PORT} alpine/socat TCP-LISTEN:${CONTAINER_PORT},fork TCP-CONNECT:${CONTAINER_IP}:${CONTAINER_PORT}\n")))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Once the proxy container is successfully run, you can access the NGINX server at ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:8080")," from your host machine.")),(0,o.kt)("h2",{id:"targeting-a-kubernetes-namespace"},"Targeting a Kubernetes Namespace"),(0,o.kt)("p",null,"You may also target a Kubernetes namespace with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--namespace")," parameter with ",(0,o.kt)("inlineCode",{parentName:"p"},"containerd"),". Please note that ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," doesn't use namespaces."),(0,o.kt)(d,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(u,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nerdctl --namespace k8s.io build -t demo:latest /code/demos/rd/anvil-app\nnerdctl --namespace k8s.io ps\n")))))}k.isMDXComponent=!0}}]);