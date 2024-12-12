"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[8e3],{544:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=i(7624),o=i(2172);const r={sidebar_label:"Roadmap",sidebar_position:2},a="Roadmap",s={id:"release-and-API-doc/roadmap",title:"Roadmap",description:"Fluid 2024 Roadmap",source:"@site/versioned_docs/version-v0.9/release-and-API-doc/roadmap.md",sourceDirName:"release-and-API-doc",slug:"/release-and-API-doc/roadmap",permalink:"/docs/v0.9/release-and-API-doc/roadmap",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v0.9/release-and-API-doc/roadmap.md",tags:[],version:"v0.9",lastUpdatedBy:"chenqiming",lastUpdatedAt:1714041983,formattedLastUpdatedAt:"Apr 25, 2024",sidebarPosition:2,frontMatter:{sidebar_label:"Roadmap",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"API Doc",permalink:"/docs/v0.9/release-and-API-doc/api-doc"}},d={},l=[{value:"Fluid 2024 Roadmap",id:"fluid-2024-roadmap",level:2},{value:"Objective: Achieve orchestration of data operations and Kubernetes job scheduling systems",id:"objective-achieve-orchestration-of-data-operations-and-kubernetes-job-scheduling-systems",level:3},{value:"Objective: Simplify the work of operation and maintenance and AI developers through Python SDK",id:"objective-simplify-the-work-of-operation-and-maintenance-and-ai-developers-through-python-sdk",level:3},{value:"Objective: Further deeply integrate the machine learning ecosystem to simplify the user experience",id:"objective-further-deeply-integrate-the-machine-learning-ecosystem-to-simplify-the-user-experience",level:3},{value:"Objective: Continuous security enhancement",id:"objective-continuous-security-enhancement",level:3},{value:"Objective: Simplicity and reliability, friendlier to users and developers",id:"objective-simplicity-and-reliability-friendlier-to-users-and-developers",level:3},{value:"Objective: Enhance code quality &amp; security improvements &amp; documentation for produciton ready:",id:"objective-enhance-code-quality--security-improvements--documentation-for-produciton-ready",level:3}];function c(e){const n={h1:"h1",h2:"h2",h3:"h3",li:"li",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"roadmap",children:"Roadmap"}),"\n",(0,t.jsx)(n.h2,{id:"fluid-2024-roadmap",children:"Fluid 2024 Roadmap"}),"\n",(0,t.jsx)(n.h3,{id:"objective-achieve-orchestration-of-data-operations-and-kubernetes-job-scheduling-systems",children:"Objective: Achieve orchestration of data operations and Kubernetes job scheduling systems"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Support temporality through Kueue","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Once data migration is completed, run data preheating, triggering the running of machine learning tasks (such as tfjob, mpiJob, pytorchJob, sparkJob)"}),"\n",(0,t.jsx)(n.li,{children:"After computation is completed, data migration and cache cleaning can be carried out"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Choose data access methods based on the scheduling results of the Kubernetes scheduler (default scheduler, Volcano, YuniKorn)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If scheduled to ordinary nodes with shared operating system kernels, adaptively use csi plugin mode"}),"\n",(0,t.jsx)(n.li,{children:"If scheduled to Kata container nodes with independent operating system kernels, you can use the sidecar mode adaptively and support scalable modifications by cloud vendors"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"objective-simplify-the-work-of-operation-and-maintenance-and-ai-developers-through-python-sdk",children:"Objective: Simplify the work of operation and maintenance and AI developers through Python SDK"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Support basic data operation"}),"\n",(0,t.jsx)(n.li,{children:"Combine with Hugging face and Pytorch to support transparent data acceleration through pre-reading and multi-stream reading"}),"\n",(0,t.jsx)(n.li,{children:"Support defining automated data flow operations"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"objective-further-deeply-integrate-the-machine-learning-ecosystem-to-simplify-the-user-experience",children:"Objective: Further deeply integrate the machine learning ecosystem to simplify the user experience"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Integrate with Kubeflow Pipelines to accelerate datasets in the pipeline"}),"\n",(0,t.jsx)(n.li,{children:"Integrate with Fairing for model development and deployment in the notebook environment"}),"\n",(0,t.jsx)(n.li,{children:"Integrate with KServe to facilitate model deployment"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"objective-continuous-security-enhancement",children:"Objective: Continuous security enhancement"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Minimum container permission (remove the privileged permission of FUSE Pod)"}),"\n",(0,t.jsx)(n.li,{children:"Minimum rbac permission"}),"\n",(0,t.jsx)(n.li,{children:"Minimal container image installation"}),"\n",(0,t.jsx)(n.li,{children:"Continuously provide best practice documentation"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"objective-simplicity-and-reliability-friendlier-to-users-and-developers",children:"Objective: Simplicity and reliability, friendlier to users and developers"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Simplify deployment","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Merge Dataset/Runtime controllers into one binary package"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Simplify usage","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Support Runtimeless, Dataset as the single API entry for users to use Fluid"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"objective-enhance-code-quality--security-improvements--documentation-for-produciton-ready",children:"Objective: Enhance code quality & security improvements & documentation for produciton ready:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Improve code quality"}),"\n",(0,t.jsx)(n.li,{children:"Reduce repetitive code"}),"\n",(0,t.jsx)(n.li,{children:"Improve test coverage"}),"\n",(0,t.jsxs)(n.li,{children:["Security hardening","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Minimize the permissions of controller's RBAC"}),"\n",(0,t.jsx)(n.li,{children:"Regularly review and update the permissions when new runtime is introduced"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Enhance observability","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Provide monitoring and alerts for Datasets"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Enhance the quality of documentation","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Organize the documentation so users can navigate it easily and find the information"}),"\n",(0,t.jsx)(n.li,{children:"Provide more practical examples and tutorials can significantly improve the user's comprehension and learning process."}),"\n",(0,t.jsx)(n.li,{children:"Maintain consistency in language, style, and formatting throughout the documentation"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>s,M:()=>a});var t=i(1504);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);