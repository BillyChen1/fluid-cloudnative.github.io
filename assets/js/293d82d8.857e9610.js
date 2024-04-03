"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[6252],{2532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=n(7624),a=n(2172);const s={sidebar_label:"Concepts",sidebar_position:3},c="Concept",r={id:"core-concepts/concepts",title:"Concept",description:"Dataset",source:"@site/docs/core-concepts/concepts.md",sourceDirName:"core-concepts",slug:"/core-concepts/concepts",permalink:"/docs/core-concepts/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/docs/core-concepts/concepts.md",tags:[],version:"current",lastUpdatedBy:"chenqiming",lastUpdatedAt:1712114955,formattedLastUpdatedAt:"Apr 3, 2024",sidebarPosition:3,frontMatter:{sidebar_label:"Concepts",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/core-concepts/architecture"},next:{title:"Speed Up Accessing Remote Files",permalink:"/docs/user-manual/data-accelerate/accelerate_data_accessing"}},o={},d=[{value:"Dataset",id:"dataset",level:2},{value:"Runtime",id:"runtime",level:2},{value:"Operations",id:"operations",level:2},{value:"Data Prefetch",id:"data-prefetch",level:3},{value:"Scale up and down",id:"scale-up-and-down",level:3},{value:"Data Migration",id:"data-migration",level:3}];function l(e){const t={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"concept",children:"Concept"}),"\n",(0,i.jsx)(t.h2,{id:"dataset",children:"Dataset"}),"\n",(0,i.jsx)(t.p,{children:"A dataset is a collection of logically related data that is used by computation engines, such as Spark for big data and TensorFlow for AI. Intelligent applications of these datasets create core value for industry."}),"\n",(0,i.jsx)(t.p,{children:"Dataset management has multiple dimensions, including security, version control, and data acceleration. We aim to provide support for dataset management with a focus on data acceleration. For example, we support aggregation of data from different storage sources, portability, and data features."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Data Source"}),": Supports multiple data sources with different protocols, including HDFS, S3, OSS, and the native Kubernetes Persistent Volume Claim protocol. Multiple data sources can also be mounted under different subdirectories in a unified namespace."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Placement Policy"}),":\ncached dataset on nodes of different types using the strong and weak affinity and toleration of the nodeAffinity in Kubernetes semantics."]}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)("img",{src:"/concepts/dataset.png",title:"perspective",height:"60%",width:"60%",alt:""})}),"\n",(0,i.jsx)(t.p,{children:"At the same time, Dataset provides observability, such as how much data is in the dataset, how much cache space is currently available, and what the cache hit rate is. Users can use this information to decide whether to scale up or down."}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)("img",{src:"/concepts/dataset-status.png",title:"perspective",height:"60%",width:"60%",alt:""})}),"\n",(0,i.jsx)(t.h2,{id:"runtime",children:"Runtime"}),"\n",(0,i.jsx)(t.p,{children:"Dataset is a unified abstract concept, and the actual data operations are implemented by specific runtimes. Due to the differences in storage, there are different runtime interfaces. The introduction of runtime is necessary for accessing the data. The API specification here can be defined relatively flexibly, but the lifecycle of the runtime is unifiedly defined by Fluid, and the implementer of the runtime needs to complete the specific implementation according to the common interface definition."}),"\n",(0,i.jsx)(t.p,{children:"In Fluid, the Runtime is divided into two main categories:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"CacheRuntime implements cache acceleration, including the open-source distributed cache Alluxio which mainly accelerates S3, HDFS, and JuiceFS, JindoFS which accelerates OSS and OSS+HDFS, and GooseFS which supports COS."}),"\n",(0,i.jsx)(t.li,{children:"ThinRuntime provides a unified access interface, such as supporting distributed storage systems like s3fs and nfs-fuse."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"operations",children:"Operations"}),"\n",(0,i.jsx)(t.p,{children:"Fluid's universal data operations describe operations such as data prefetch, data migration, elastic scaling, cache cleaning, metadata backup, and recovery."}),"\n",(0,i.jsx)(t.h3,{id:"data-prefetch",children:"Data Prefetch"}),"\n",(0,i.jsx)(t.p,{children:"The directory to be prefetched and the preheating strategy can be one-time, scheduled, or event-triggered can be specified."}),"\n",(0,i.jsx)(t.h3,{id:"scale-up-and-down",children:"Scale up and down"}),"\n",(0,i.jsx)(t.p,{children:"Support manual scaling, elastic scaling, and scheduled scaling as various strategies for scaling."}),"\n",(0,i.jsx)(t.h3,{id:"data-migration",children:"Data Migration"}),"\n",(0,i.jsx)(t.p,{children:"Supports both importing data from external storage into a dataset before using it, and using a dataset while importing data into it."}),"\n",(0,i.jsx)(t.p,{children:"Full concept\uff1a"}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)("img",{src:"/concepts/concept.png",title:"perspective",height:"60%",width:"60%",alt:""})})]})}function p(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>c});var i=n(1504);const a={},s=i.createContext(a);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);