"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[6352],{4556:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(7624),s=t(2172);const i={sidebar_label:"Access via REST",sidebar_position:3},o="Access via REST",r={id:"developer-guide/client-usage/access-via-REST",title:"Access via REST",description:"Alluxio provides an access interface based on the Restful API for secondary development in Python, Java and Golang. AlluxioRuntime also provides support for this, and the feature is not turned on by default. It can be turned on via a CRD declaration.",source:"@site/versioned_docs/version-v1.0.0/developer-guide/client-usage/access-via-REST.md",sourceDirName:"developer-guide/client-usage",slug:"/developer-guide/client-usage/access-via-REST",permalink:"/zh/docs/developer-guide/client-usage/access-via-REST",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v1.0.0/developer-guide/client-usage/access-via-REST.md",tags:[],version:"v1.0.0",lastUpdatedBy:"chenqiming",lastUpdatedAt:1713345055,formattedLastUpdatedAt:"2024\u5e744\u670817\u65e5",sidebarPosition:3,frontMatter:{sidebar_label:"Access via REST",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to Use Client other than Go Client",permalink:"/zh/docs/developer-guide/client-usage/how-to-use-client-other-than-go-client"},next:{title:"Alibaba's Case Study",permalink:"/zh/docs/case-study/alibaba-case-study"}},d={},l=[{value:"Running",id:"running",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"access-via-rest",children:"Access via REST"}),"\n",(0,a.jsxs)(n.p,{children:["Alluxio provides an access interface based on the ",(0,a.jsx)(n.a,{href:"https://docs.alluxio.io/os/user/stable/en/api/FS-API.html",children:"Restful API"})," for secondary development in Python, Java and Golang. AlluxioRuntime also provides support for this, and the feature is not turned on by default. It can be turned on via a CRD declaration."]}),"\n",(0,a.jsx)(n.h2,{id:"running",children:"Running"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Create Dataset and AlluxioRuntime resource objects"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'$ cat<<EOF >dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: spark\nspec:\n  mounts:\n    - mountPoint: https://mirrors.bit.edu.cn/apache/spark/\n      name: spark\n---\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: spark\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 1Gi\n        high: "0.95"\n        low: "0.7"\n  properties:\n    alluxio.user.streaming.data.timeout: 300sec\n  apiGateway:\n    enabled: true\nEOF\n'})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Note: Just set apiGateway to true to enable this capability."}),"\n"]}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Check Access Endpoint"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"$  kubectl get alluxioruntimes.data.fluid.io  -owide\nNAME    READY MASTERS   DESIRED MASTERS   MASTER PHASE   READY WORKERS   DESIRED WORKERS   WORKER PHASE   READY FUSES   DESIRED FUSES   FUSE PHASE   API GATEWAY                    AGE\nspark   1               1                 Ready          1               1                 Ready          0             0               Ready        spark-master-0.default:20009   110s\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can see that the API Gateway is accessed at spark-master-0.default:20009. You can access it from this address."})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>o});var a=t(1504);const s={},i=a.createContext(s);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);