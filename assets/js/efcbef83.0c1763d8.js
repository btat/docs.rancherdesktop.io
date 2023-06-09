"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[2174],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n(34334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(83117),r=n(67294),o=n(34334),l=n(12466),i=n(76775),s=n(91980),u=n(67392),p=n(50012);function c(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:n,groupId:a}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=s??c;return f({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,o]),tabValues:o}}var h=n(72389),y="tabList__CuJ",b="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(c(t),s(a))},f=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:f,onClick:d},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},86004:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(83117),r=(n(67294),n(3905)),o=n(74866),l=n(85162);const i={title:"Skaffold and Rancher Desktop"},s=void 0,u={unversionedId:"how-to-guides/skaffold-and-rancher-desktop",id:"version-1.6/how-to-guides/skaffold-and-rancher-desktop",title:"Skaffold and Rancher Desktop",description:"Skaffold is a command line tool that facilitates continuous development for Kubernetes-native applications. Skaffold handles the workflow for building, pushing, and deploying your application, and it provides building blocks for creating CI/CD pipelines. This enables you to focus on iterating on your application locally while Skaffold continuously deploys to your local or remote Kubernetes cluster. To learn more about Skaffold, refer to the project docs here.",source:"@site/versioned_docs/version-1.6/how-to-guides/skaffold-and-rancher-desktop.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/skaffold-and-rancher-desktop",permalink:"/1.6/how-to-guides/skaffold-and-rancher-desktop",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.6/how-to-guides/skaffold-and-rancher-desktop.md",tags:[],version:"1.6",frontMatter:{title:"Skaffold and Rancher Desktop"},sidebar:"tutorialSidebar",previous:{title:"Rancher on Rancher Desktop",permalink:"/1.6/how-to-guides/rancher-on-rancher-desktop"},next:{title:"Provisioning Scripts",permalink:"/1.6/how-to-guides/provisioning-scripts"}},p={},c=[],d={toc:c};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Skaffold is a command line tool that facilitates continuous development for Kubernetes-native applications. Skaffold handles the workflow for building, pushing, and deploying your application, and it provides building blocks for creating CI/CD pipelines. This enables you to focus on iterating on your application locally while Skaffold continuously deploys to your local or remote Kubernetes cluster. To learn more about Skaffold, refer to the project docs ",(0,r.kt)("a",{parentName:"p",href:"https://skaffold.dev/docs/"},"here"),"."),(0,r.kt)("p",null,"In order to demonstrate the steps to set up Skaffold with Rancher Desktop, a sample nodejs app example is provided within the Rancher Desktop docs repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/tree/main/assets/express-sample"},"here"),". "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important: Skaffold only works with ",(0,r.kt)("inlineCode",{parentName:"strong"},"dockerd")," (Moby).")," Therefore, make sure to select your runtime as ",(0,r.kt)("inlineCode",{parentName:"p"},"dockerd")," from the ",(0,r.kt)("strong",{parentName:"p"},"Kubernetes Settings")," panel in the Rancher Desktop UI. ")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://skaffold.dev/docs/install/"},"https://skaffold.dev/docs/install/")," to install Skaffold.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io.git"},"Rancher Desktop docs repository")," and navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"express-sample")," in a terminal as follows: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"cd docs.rancherdesktop.io/assets/express-sample\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"skaffold init"),"."),(0,r.kt)("p",{parentName:"li"},"Per the ",(0,r.kt)("a",{parentName:"p",href:"https://skaffold.dev/docs/pipeline-stages/init/#build-config-initialization"},"Skaffold docs"),",",(0,r.kt)("inlineCode",{parentName:"p"},"skaffold init")," walks through your project directory and looks for any build configuration files such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle/pom.xml"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"requirements.txt"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"go.mod"),". "),(0,r.kt)("p",{parentName:"li"},"We will select ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," in our example. This will generate the initial configuration file that you can modify as needed. When prompted, select ",(0,r.kt)("inlineCode",{parentName:"p"},"yes")," to write your config to ",(0,r.kt)("inlineCode",{parentName:"p"},"skaffold.yaml"),". ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your editor, review your ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"manifests.yaml")," files. Note that in ",(0,r.kt)("inlineCode",{parentName:"p"},"manifests.yaml"),", you will have a deployment config as well as a service config. It is only necessary to have 1 ",(0,r.kt)("inlineCode",{parentName:"p"},"replica")," for testing purposes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Back in your terminal, you'll notice that you will have two options: ",(0,r.kt)("inlineCode",{parentName:"p"},"skaffold run")," that lets you build and deploy, and ",(0,r.kt)("inlineCode",{parentName:"p"},"skaffold dev")," that allows you to enter development mode with auto-redeploy. We will use ",(0,r.kt)("inlineCode",{parentName:"p"},"skaffold dev")," in this example."),(0,r.kt)("p",{parentName:"li"}," As you will need to have push access to the image repository, you can either use your docker login, or you can set up a local registry: "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"docker-hub",label:"Docker Hub",default:!0,mdxType:"TabItem"},(0,r.kt)("p",{parentName:"li"},"  Before running ",(0,r.kt)("inlineCode",{parentName:"p"},"skaffold dev"),", use your docker login if you have a ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub")," account. Then, in the files ",(0,r.kt)("inlineCode",{parentName:"p"},"skaffold.yaml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"manifests.yaml")," replace ",(0,r.kt)("inlineCode",{parentName:"p"},"matamagu/express-sample")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_DOCKER_HUB_USERNAME/express-sample")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"skaffold dev")," will push the built image to DockerHub.")),(0,r.kt)(l.Z,{value:"local-registry",label:"Local Registry",mdxType:"TabItem"},"You can set up a local registry by first running this command:",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker run -d -p 5000:5000 --restart=always --name registry registry:2\n")),(0,r.kt)("p",{parentName:"li"},"  Then:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"skaffold dev --default-repo=localhost:5000\n")))),(0,r.kt)("p",{parentName:"li"},"As you go through your development, Skaffold will detect any changes and will automatically go through the build and deployment process again. You will be able to see any changes reflected in the cluster.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Point your web browser to ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3000"),", and you will see the ",(0,r.kt)("inlineCode",{parentName:"p"},"express-sample")," screen."))))}f.isMDXComponent=!0}}]);