"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[626],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n(34334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(83117),r=n(67294),o=n(34334),l=n(12466),i=n(76775),u=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=g({queryString:n,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),k(e)}),[s,k,o]),tabValues:o}}var f=n(72389),h="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==i&&(p(t),u(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function T(e){const t=(0,f.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},53637:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var a=n(83117),r=(n(67294),n(3905)),o=n(74866),l=n(85162);const i={title:"Working with Images"},u=void 0,s={unversionedId:"tutorials/working-with-images",id:"version-1.6/tutorials/working-with-images",title:"Working with Images",description:"Rancher Desktop provides the ability to build, push, and pull images via the",source:"@site/versioned_docs/version-1.6/tutorials/working-with-images.md",sourceDirName:"tutorials",slug:"/tutorials/working-with-images",permalink:"/1.6/tutorials/working-with-images",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.6/tutorials/working-with-images.md",tags:[],version:"1.6",frontMatter:{title:"Working with Images"},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/1.6/getting-started/features"},next:{title:"Working with Containers",permalink:"/1.6/tutorials/working-with-containers"}},c={},p=[{value:"General Usage",id:"general-usage",level:2},{value:"Listing Images",id:"listing-images",level:2},{value:"Building Images",id:"building-images",level:2},{value:"Building Local Images",id:"building-local-images",level:3},{value:"Tagging Images",id:"tagging-images",level:2},{value:"Removing Images",id:"removing-images",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rancher Desktop provides the ability to build, push, and pull images via the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containerd/nerdctl"},"NERDCTL")," project and the Docker CLI."),(0,r.kt)("p",null,"Note, both ",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," are put into the path automatically. This occurs during the installer on Windows, and upon first run on macOS and Linux."),(0,r.kt)("h2",{id:"general-usage"},"General Usage"),(0,r.kt)("p",null,"Using either tool requires Rancher Desktop to be running with the appropriate container runtime. For ",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl"),", use the containerd runtime. For ",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),", use the Moby runtime."),(0,r.kt)("p",null,"You can learn about all of the command options and display the help documentation by running:"),(0,r.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl -h\n")),(0,r.kt)("p",null,"Unlike Docker, containerd features its own namespaces. By default, nerdctl images are stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," namespace. If you want your images available for use by Kubernetes, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--namespace k8s.io")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-n k8s.io")," CLI argument. You can also switch to a namespace called ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," or any other name using the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--namespace <NAMESPACE_NAME>"),".  Note that nerdctl namespaces are separate and independent from Kubernetes and ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," namespaces.")),(0,r.kt)(l.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker --help\n")))),(0,r.kt)("h2",{id:"listing-images"},"Listing Images"),(0,r.kt)("p",null,"To see the images currently available, run the following command:"),(0,r.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl images\n"))),(0,r.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker images\n")))),(0,r.kt)("h2",{id:"building-images"},"Building Images"),(0,r.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Building images has a similar feel to existing tools. For example, consider\nrunning ",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl")," from a directory with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," where the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is\nusing a scratch image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl build .\n[+] Building 0.1s (4/4) FINISHED\n => [internal] load build definition from Dockerfile\n => => transferring dockerfile: 31B\n => [internal] load .dockerignore\n => => transferring context: 2B\n => [internal] load build context\n => => transferring context: 33B\n => CACHED [1/1] ADD anvil-app /\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl")," has options for tagging at the same time as building and other options you've\ncome to expect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl build -t TAG .\n")),(0,r.kt)("p",null,"To build an image for use with Kubernetes, specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s.io")," namespace as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl build -n k8s.io .\n"))),(0,r.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("p",null,"Consider running ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," from a directory with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," where the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is\nusing a scratch image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker build .\nSending build context to Docker daemon  13.93MB\nStep 1/5 : FROM some-repo/some-image\n ---\x3e e57ace221dff\n...\n ---\x3e fd984c4cbf97\nSuccessfully built fd984c4cbf97\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker")," has options for tagging at the same time as building and other options you've\ncome to expect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker build -t TAG .\n")))),(0,r.kt)("h3",{id:"building-local-images"},"Building Local Images"),(0,r.kt)("p",null,"In order to demonstrate the steps to build local images and run apps, a sample nodejs app is provided within the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io.git"},"Rancher Desktop docs repository"),". To get started, clone the repository and cd into ",(0,r.kt)("inlineCode",{parentName:"p"},"assets/express-sample")," in a terminal."),(0,r.kt)("p",null,"Run the following command to build image from Dockerfile:"),(0,r.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nerdctl --namespace k8s.io build -t expressapp:v1.0 .\n"))),(0,r.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker build -t expressapp:v1.0 .\n")))),(0,r.kt)("p",null,"Run the following command to run container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl run --image expressapp:v1.0 expressapp\nkubectl port-forward pods/expressapp 3000:3000\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," When adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," tag, be sure to also specify the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"imagePullPolicy: Never\n")),(0,r.kt)("h2",{id:"tagging-images"},"Tagging Images"),(0,r.kt)("p",null,"If you want to tag an existing image you've built you can use the following\ncommand:"),(0,r.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]\n"))),(0,r.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]\n")))),(0,r.kt)("h2",{id:"removing-images"},"Removing Images"),(0,r.kt)("p",null,"To remove an image, run the following command:"),(0,r.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl rmi IMAGE\n"))),(0,r.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker rmi IMAGE\n")))))}m.isMDXComponent=!0}}]);