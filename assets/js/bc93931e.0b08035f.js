"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[5529],{8076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=n(7624),s=n(2172);const a={sidebar_label:"Architecture and Concepts",sidebar_position:3},c="Architecture and Concepts",r={id:"core-concepts/architecture-and-concepts",title:"Architecture and Concepts",description:"Architecture",source:"@site/versioned_docs/version-v1.0/core-concepts/architecture-and-concepts.md",sourceDirName:"core-concepts",slug:"/core-concepts/architecture-and-concepts",permalink:"/docs/core-concepts/architecture-and-concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v1.0/core-concepts/architecture-and-concepts.md",tags:[],version:"v1.0",lastUpdatedBy:"chenqiming",lastUpdatedAt:1714050288,formattedLastUpdatedAt:"Apr 25, 2024",sidebarPosition:3,frontMatter:{sidebar_label:"Architecture and Concepts",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Key Features",permalink:"/docs/core-concepts/key-features"},next:{title:"Quick Start",permalink:"/docs/get-started/quick-start"}},o={},d=[{value:"Architecture",id:"architecture",level:2},{value:"Key Concepts",id:"key-concepts",level:2}];function l(e){const t={h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"architecture-and-concepts",children:"Architecture and Concepts"}),"\n",(0,i.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(t.p,{children:"Fluid is built in the Kubernetes native fashion. It lies between existing underlying cloud native storage systems and the upper layer data-intensive applications. The architecture of Fluid in Kubernetes is as following:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:n(9668).c+"",width:"700",height:"608"}),"\nSpecifically, Fluid's architecture is logically split into ",(0,i.jsx)(t.strong,{children:"control plane"})," and ",(0,i.jsx)(t.strong,{children:"data plane"}),". The following diagram shows the different components."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Control Plane"}),"\uff1aThe control plane is composed of ",(0,i.jsx)(t.strong,{children:"Dataset/Runtime Operator"})," and ",(0,i.jsx)(t.strong,{children:"Application Manager"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Dataset/Runtime Operator"}),": Responsible for the scheduling and orchestration of datasets and their supporting runtimes in Kubernetes. This includes scheduling, migration, and elastic scaling of the runtime for datasets, as well as automated operations for dataset support, such as fine-grained data preheating, such as specifying preheating for a specific folder; controlling metadata backup and recovery to improve data access performance for scenarios with massive small files; and setting pinning policies for cached data to avoid performance fluctuations caused by data eviction."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Application Manager"}),":  Responsible for the scheduling and operation of application Pods that use datasets, which is divided into two core components: the Scheduler and the Webhook."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Scheduler: schedule application Pods that use datasets in the Kubernetes cluster. By incorporating cached information obtained from the Runtime, Pods that use datasets are preferentially scheduled to nodes that have data caching, without the need for users to specify caching nodes."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Sidecar Webhook: For Kubernetes environments where the csi-plugin cannot be run, the Sidecar webhook automatically replaces the PVC with a FUSE sidecar and controls the startup order of containers in the Pod to ensure that the FUSE container starts first."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Data Plane"}),"\uff1aThe data plane is composed of Runtime Plugin and CSI Plugin."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Runtime Plugin"}),": As a highly extensible plugin, it can support various data access engines. Fluid achieves this by abstracting some common features, such as the use of cache media, quotas, directories, etc., making it extensible with different distributed cache engine implementation technologies. For example, the AlluxioRuntime uses a Master-Slave architecture, while the JuiceFSRuntime uses a Worker P2P architecture, both of which can be configured in the CRD of the Runtime. This plugin not only supports specific Runtimes like Alluxio and JuiceFS, but also supports a generic ThinRuntime, enabling users to access generic storage without the need for development."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"CSI Plugin"}),": The storage client is started in a containerized manner, completely decoupled from the business container. Upgrading the CSI plugin will not affect the business container, and it also supports deploying multiple versions of the storage client in the same Kubernetes cluster. Running the client independently in a Pod also provides observability within the Kubernetes system. Additionally, resource quotas can be set for the client's computing resources."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(8472).c+"",width:"1000",height:"490"})}),"\n",(0,i.jsx)(t.h2,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,i.jsx)(t.p,{children:"For achieving its goals, Fluid provides some core concepts."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Dataset"}),": A Dataset is a set of data logically related that can be used by computing engines, such as Spark for big data analytics and TensorFlow for AI applications."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Same as native Kubernetes API definitions, including CRDs"}),"\n",(0,i.jsx)(t.li,{children:"Users describe the data\u2019s source, type, access mode and cache location"}),"\n",(0,i.jsxs)(t.li,{children:["Users can use observability to make scaling decisions of distributed cache\n",(0,i.jsx)(t.img,{src:n(3992).c+"",width:"700",height:"252"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Dataset management has multiple dimensions, including security, version control, and data acceleration. We aim to provide support for dataset management with a focus on data acceleration. For example, we support aggregation of data from different storage sources, portability, and data features."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Data Source"}),": Supports multiple data sources with different protocols, including HDFS, S3, OSS, and the native Kubernetes Persistent Volume Claim protocol. Multiple data sources can also be mounted under different subdirectories in a unified namespace."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Placement Policy"}),": cached dataset on nodes of different types using the strong and weak affinity and toleration of the nodeAffinity in Kubernetes semantics.\n",(0,i.jsx)(t.img,{src:n(5848).c+"",width:"800",height:"297"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"At the same time, Dataset provides observability, such as how much data is in the dataset, how much cache space is currently available, and what the cache hit rate is. Users can use this information to decide whether to scale up or down."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Runtime"}),":  Dataset is a unified abstract concept, and the actual data operations are implemented by specific runtimes. Due to the differences in storage, there are different runtime interfaces. The introduction of runtime is necessary for accessing the data. The API specification here can be defined relatively flexibly, but the lifecycle of the runtime is defined by Fluid in a unified manner, and the implementer of the runtime needs to complete the specific implementation according to the common interface definition. The Runtime enforces dataset isolation/share, provides version management, and enables data acceleration by defining a set of interfaces to handle DataSets throughout their lifecycle, allowing for the implementation of management and acceleration functionalities behind these interfaces. Fluid has two kind of Runtime: CacheRuntime and ThinRuntime."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"CacheRuntime, which implements distributed caching solutions including Alluxio, JuiceFS, Vineyard and others"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["ThinRuntime, that provides a unified access interface to systems like CubeFS, GlusterFS, NFS and others.\n",(0,i.jsx)(t.img,{src:n(778).c+"",width:"800",height:"105"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Data Operations"}),": Unlike traditional PVC-based storage abstraction, Fluid takes an Application-oriented perspective to abstract the \u201cprocess of manipulating data on Kubernetes\u201d. It introduces the concept of elastic Dataset and implements it as a first-class citizen in Kubernetes to enable Dataset CRUD operation, permission control, and data access acceleration. Besides the basic operations like creation, Fluid also provides a set of operations for the defined  Dataset for users to manipulate the data flow, such as data prefetch, data migration, elastic scaling, cache cleaning, metadata backup, and recovery."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Data Prefetch: The directory to be prefetched and the preheating strategy can be one-time, scheduled, or event-triggered can be specified."}),"\n",(0,i.jsx)(t.li,{children:"Data Migration: Supports both importing data from external storage into a dataset before using it, and using a dataset while importing data into it."}),"\n",(0,i.jsx)(t.li,{children:"Data Process: Support  transform, split, applying dimensionality reduction to data\ndistributed cache scale up and down."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(4876).c+"",width:"800",height:"631"})})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},9668:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/architecture-eab7e9388e26cd467b0edacb5d52f0f8.png"},8472:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/components-442a7fd2019bf630e0338f78090afb97.png"},778:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/dataset-kubectl-59089f6f9eab479e67906af1fef26170.png"},5848:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/dataset-yaml-3784736d9af66496123610592b52b965.png"},3992:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/dataset-3e9219f1740dd11f4e4924d6977cfb34.png"},4876:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/oprations-37d9c4e19bf0011e7939773b5233991c.png"},2172:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>c});var i=n(1504);const s={},a=i.createContext(s);function c(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);