"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[5760],{6052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=n(7624),i=n(2172);const o={slug:"fluid-0.5",title:"Fluid 0.5 release: open the way of online elastic expansion of dataset cache",authors:["gurong"],tags:["release"]},s="Fluid 0.5 release: open the way of online elastic expansion of dataset cache",r={permalink:"/zh/blog/fluid-0.5",editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/blog/2021-03-19-fluid-release-0.5.md",source:"@site/blog/2021-03-19-fluid-release-0.5.md",title:"Fluid 0.5 release: open the way of online elastic expansion of dataset cache",description:"Guide:  in order to solve the problems of heterogeneous data source access, slow I/O speed of storage and calculation separation, low efficiency of scenario perception and low scheduling, the open source project fluid was jointly launched by pasalab, Alibaba and alluxio of Nanjing University in june2020 in order to solve the problems of heterogeneous data source access, slow storage / computing separation I/O speed, low efficiency of scenario perception and scheduling.",date:"2021-03-19T00:00:00.000Z",formattedDate:"2021\u5e743\u670819\u65e5",tags:[{label:"release",permalink:"/zh/blog/tags/release"}],readingTime:9.755,hasTruncateMarker:!1,authors:[{name:"Rong Gu",title:"Fluid Open Source Project Community Chair",url:"https://github.com/RongGu",imageURL:"https://github.com/RongGu.png",key:"gurong"}],frontMatter:{slug:"fluid-0.5",title:"Fluid 0.5 release: open the way of online elastic expansion of dataset cache",authors:["gurong"],tags:["release"]},unlisted:!1,prevItem:{title:'Our Paper "Fluid: Dataset Abstraction and Elastic Acceleration for Cloud-native Deep Learning Training Job" is Accepted by IEEE ICDE 2022',permalink:"/zh/blog/fluid-icde-paper"},nextItem:{title:"Fluid 0.4 new release: supports data preheating and optimizes small file  scenarios",permalink:"/zh/blog/fluid-0.4"}},c={authorsImageUrls:[void 0]},l=[{value:"Enrich the operation function of data set",id:"enrich-the-operation-function-of-data-set",level:2},{value:"1. data set online elastic cache expansion",id:"1-data-set-online-elastic-cache-expansion",level:3},{value:"2. backup and recovery of metadata",id:"2-backup-and-recovery-of-metadata",level:3},{value:"3. observability optimization of data set",id:"3-observability-optimization-of-data-set",level:3},{value:"1) combination with Prometheus",id:"1-combination-with-prometheus",level:4},{value:"2) hit rate index of new dataset cache",id:"2-hit-rate-index-of-new-dataset-cache",level:4},{value:"Support deployment of diverse environment configuration",id:"support-deployment-of-diverse-environment-configuration",level:2},{value:"1. support fuse global mode",id:"1-support-fuse-global-mode",level:3},{value:"2. support HDFS user level configuration",id:"2-support-hdfs-user-level-configuration",level:3},{value:"Implementation of new data cache engine",id:"implementation-of-new-data-cache-engine",level:2},{value:"Summary",id:"summary",level:2},{value:"Acknowledge",id:"acknowledge",level:2},{value:"Introduction to the author",id:"introduction-to-the-author",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Guide:"}),"  in order to solve the problems of heterogeneous data source access, slow I/O speed of storage and calculation separation, low efficiency of scenario perception and low scheduling, the open source project fluid was jointly launched by pasalab, Alibaba and alluxio of Nanjing University in june2020 in order to solve the problems of heterogeneous data source access, slow storage / computing separation I/O speed, low efficiency of scenario perception and scheduling."]}),"\n",(0,a.jsx)(t.p,{children:"Fluid is an efficient support platform for data intensive applications in cloud native environment. Since the open source release, the project has attracted the attention of experts and engineers in many related fields. The community has been evolving with the positive feedback of all. Recently, fluid 0.5 version has been officially released. In this version, fluid mainly adds three aspects to improve:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"It is rich in the operation functions of data sets, and supports online elastic expansion, metadata backup and recovery."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Support the deployment of various environments and meet the user's personalized deployment and configuration requirements."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Add data cache engine implementation, and increase the engine selection of users on the public cloud."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Fluid open source project address"})," : ",(0,a.jsx)(t.a,{href:"https://github.com/fluid-cloudnative/fluid",children:"https://github.com/fluid-cloudnative/fluid"})]}),"\n",(0,a.jsx)(t.p,{children:"The development requirements of these three main functions come from the actual production feedback of many community users. In addition, fluid v0.5 has also carried out some bug fixes and document updates. Welcome to experience fluid v0.5!"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Fluidv0.5 download link"})," : ",(0,a.jsx)(t.a,{href:"https://github.com/fluid-cloudnative/fluid/releases",children:"https://github.com/fluid-cloudnative/fluid/releases"})]}),"\n",(0,a.jsx)(t.p,{children:"The following is a further introduction to the release features of this new version."}),"\n",(0,a.jsx)(t.h2,{id:"enrich-the-operation-function-of-data-set",children:"Enrich the operation function of data set"}),"\n",(0,a.jsx)(t.p,{children:"In this version, fluid focuses on enriching the relevant operation functions of the core abstract object, dataset, so that data intensive applications can better utilize the basic functions of elasticity and observability provided by cloud natively, and enhance the user's flexibility in data set management."}),"\n",(0,a.jsx)(t.h3,{id:"1-data-set-online-elastic-cache-expansion",children:"1. data set online elastic cache expansion"}),"\n",(0,a.jsx)(t.p,{children:"This is the function that community users have been looking forward to! Before fluid v0.5, if the user wants to adjust the cache capability of the dataset, it needs to be done by uninstalling the cache engine and redeploying it all. This approach is time-consuming and must also consider the high cost of all data cache loss. Therefore, in the new version, we provide the support for the data set to expand the cache elasticity. Users can increase the cache capacity of a dataset on-the-fly in a non-stop manner according to their own scenario requirements to accelerate data access (expansion) or reduce the cache capacity (shrink) of a dataset that is not frequently used, Thus, more precise elastic resource allocation can be realized and resource utilization rate can be improved. The built-in controller of fluid selects the appropriate expansion node according to the policy, for example, when scaling, it will take the task situation on the node and the node cache ratio as the filter condition."}),"\n",(0,a.jsx)(t.p,{children:"To perform the elastic data set cache capacity elastic expansion, the user only needs to run the following command:"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"kubectl scale alluxioruntimes.data.fluid.io {datasetName} --replicas={num}"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Where dataset name corresponds to the name of the dataset, replica specifies the number of cache nodes."}),"\n",(0,a.jsx)(t.p,{children:"The video of manual expansion and its effect of data set is as follows:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/video/on-the-fly.mp4",children:(0,a.jsx)(t.img,{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/on-the-fly.jfif",alt:"fly-demo"})})}),"\n",(0,a.jsxs)(t.p,{children:["For more details on manual scaling of datasets, refer to ",(0,a.jsx)(t.a,{href:"/docs/tutorials/dataset-operation/cache-runtime-manually-scaling",children:"documentation"})]}),"\n",(0,a.jsx)(t.h3,{id:"2-backup-and-recovery-of-metadata",children:"2. backup and recovery of metadata"}),"\n",(0,a.jsx)(t.p,{children:"This feature enhances the flexibility of fluid dataset metadata management. Previous fluid v0.4 has supported loading metadata for datasets (for example, file system inode tree) to the local and records some key statistics (for example, the size of the data volume and the number of files) of the dataset. However, once the user destroys the local dataset, all the metadata information will be lost, and the data set needs to be retrieved from the underlying storage system again when rebuilding the dataset."}),"\n",(0,a.jsx)(t.p,{children:"Therefore, in fluid v0.5, we add a k8s custom resource object, DataBackup, which provides the user with a declarative API interface to control the related behavior of data backup. A simple example of building a DataBackup custom resource object is as follows:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"apiVersion: data.fluid.io/v1alpha1\r\nkind: DataBackup\r\nmetadata:\r\n\tname: hbase-backup\r\nspec:\r\n\tdataset: hbase\r\n\tbackupPath: pvc://<pvcName>/subpath1/subpath2/\n"})}),"\n",(0,a.jsx)(t.p,{children:"When you create the dataset again, you need to add a field that specifies the location of the backup file:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"\r\napiVersion: data.fluid.io/v1alpha1\r\nkind: Dataset\r\nmetadata:\r\n\tname: hbase\r\nspec:\r\n\tdataRestoreLocation:\r\n\t\tpath: pvc://pvc-local/subpath1/\r\nmounts:\r\n\t- mountPoint: https://mirrors.tuna.tsinghua.edu.cn/apache/hbase/2.2.6/\r\n\n"})}),"\n",(0,a.jsx)(t.p,{children:"At this point, fluid will first load metadata and dataset statistics from the backup file, thus greatly improving the loading speed of metadata."}),"\n",(0,a.jsx)(t.h3,{id:"3-observability-optimization-of-data-set",children:"3. observability optimization of data set"}),"\n",(0,a.jsx)(t.p,{children:"Fluid v0.5 also further enhances the observability of the dataset, which includes two parts:"}),"\n",(0,a.jsx)(t.h4,{id:"1-combination-with-prometheus",children:"1) combination with Prometheus"}),"\n",(0,a.jsx)(t.p,{children:'This feature supports the collection of data set availability and performance indicators and is visualized through grafana. At present, the implementation of alloxioruntime is supported. Users can easily understand the performance indicators such as current cache node, cache space, existing cache ratio, remote reading, short-circuit reading and so on. The whole configuration process is very simple, and it achieves the effect of "out of the box" for the data set monitoring system.'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-elastic-04.webp",alt:"prometheus"})}),"\n",(0,a.jsx)(t.h4,{id:"2-hit-rate-index-of-new-dataset-cache",children:"2) hit rate index of new dataset cache"}),"\n",(0,a.jsx)(t.p,{children:"This feature can identify how many of the access to the dataset in the last 1 minute has hit the distributed cache. On the one hand, the indicator can help users analyze the performance bottleneck in their data intensive applications, and quantitatively check the effect of fluid in the workflow of the whole application; On the other hand, it can help users to balance the application performance and cache resource occupation, and make reasonable expansion decision."}),"\n",(0,a.jsx)(t.p,{children:"This indicator is added to the dataset CRD resource status of 'dataset.status.cachestates' in the future v0.5, specifically including:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Cache hit ratio: the percentage of access to distributed cache hits in the past minute."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Local hit ratio: the percentage of access hit by the local cache in the past minute."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Remote hit ratio: the percentage of access to remote cache hits in the past minute."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Note: for distributed cache, there are two different cache hits for data hits ",(0,a.jsx)(t.strong,{children:"Local cache hit"})," refers to the access initiator can access the cache data directly at the same node ",(0,a.jsx)(t.strong,{children:"Remote cache hit"})," refers to the access to cache data on other nodes through the network by the initiator."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"In fluid v0.5, users can easily view cache hit indicators using the following command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"\r\nkubectl get dataset <dataset-name> -o wide\r\n\r\nNAME ... CACHE HIT RATIO AGE\r\n\r\n<dataset-name> ... 86.2% 16m\r\n\n"})}),"\n",(0,a.jsx)(t.h2,{id:"support-deployment-of-diverse-environment-configuration",children:"Support deployment of diverse environment configuration"}),"\n",(0,a.jsx)(t.p,{children:"Since the release of fluid 0.4, we have increased support for fluid deployment configuration in a variety of environments according to the problems and requirements of community users' actual deployment feedback."}),"\n",(0,a.jsx)(t.h3,{id:"1-support-fuse-global-mode",children:"1. support fuse global mode"}),"\n",(0,a.jsx)(t.p,{children:"In fluid, the remote files defined in the dataset resource object are schedulable, which means that you can manage the remote file cache to the location on the kubernetes cluster as you do managing pod. The calculated pod can access the data file through the fuse client. In previous versions of fluid, fuse clients always schedule to the nodes where the cache is located, but users are not free to control the dispatch of fuse."}),"\n",(0,a.jsx)(t.p,{children:"In fluid v0.5, we added a global deployment pattern to fuse. In this mode, fuse is deployed globally to all nodes by default. Users can also influence the scheduling results of fuse by specifying the nodeselector of fuse. At the same time, cache will be deployed on nodes with a large number of calculated pods."}),"\n",(0,a.jsx)(t.h3,{id:"2-support-hdfs-user-level-configuration",children:"2. support HDFS user level configuration"}),"\n",(0,a.jsx)(t.p,{children:"Many community users use the distributed cache system, alloxo, as the cache engine for fluid data sets. In the case of data set persistence stored in HDFS file system, to make aluxo access to the underlying HDFS, the aluxo cluster needs to obtain all kinds of configuration information of the HDFS in advance."}),"\n",(0,a.jsx)(t.p,{children:"In fluid v0.5, we use kubernetes' native resources to support the above scenarios. Users need to create the relevant configuration files (e.g. ` HDFS site.xml 'and' core site.xml ') in the kubernetes environment in the form of' configmap ', and then reference the' configmap 'created above in the created' alloxioruntime 'resource object to achieve the above functions."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"An example of the alloxioruntime"})," resource object is as follows:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"apiVersion: data.fluid.io/v1alpha1\r\nkind: AlluxioRuntime\r\nmetadata:\r\n\tname: my-hdfs\r\nspec:\r\n\t...\r\n\thadoopConfig: <configmap-name>\r\n\t...\r\n\n"})}),"\n",(0,a.jsx)(t.p,{children:"At this point, the created cluster of aluxo will be able to access the data in the HDFS cluster normally. For more information, refer to the sample documentation"}),"\n",(0,a.jsx)(t.h2,{id:"implementation-of-new-data-cache-engine",children:"Implementation of new data cache engine"}),"\n",(0,a.jsx)(t.p,{children:"The default distributed cache runtime used by fluid is alluxioruntime. In order to support the needs of users in different environments for the cache system, fluid has made the distributed cache runtime access framework into a pluggable architecture in the previous version. In fluid v0.5, community contributors from Alibaba cloud developed jindoruntime based on the framework and added an execution engine implementation to support fluid dataset data management and caching. Users can use the cache mode of jindofs to access and cache remote files in fluid through jindoruntime. Using and deploying jindoruntime on fluid is simple, compatible with the native k8s environment and out of the box."}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(t.p,{children:["In fluid v0.5, we have enriched and enhanced the functional features and user experience of fluid.\r\n",(0,a.jsx)(t.strong,{children:"First of all"})," , fluid v0.5 further adds the function operation of dataset:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Provide online elastic capacity expansion and contraction of data sets, and realize more flexible and fine cluster resource allocation control."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The new DataBackup CRD realizes the backup and recovery of dataset file metadata and other information, and helps complete the rapid restart of dataset caching system."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"A cache hit rate indicator is added to help users better quantify and analyze the acceleration effect provided by fluid."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Secondly"})," , fluid supports more environment modes and configurations to meet the deployment requirements of more real scenarios."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Finally"})," , fluid adds a distributed cache runtime based on jindofs - jindoruntime, which provides users with different cache engine choices in diversified deployment environments."]}),"\n",(0,a.jsx)(t.p,{children:"We will continue to pay extensive attention to and adopt community suggestions to promote the long-term development of the fluid project, and look forward to hearing more feedback from you. If you have any questions or suggestions, welcome to join the fluid user group to participate in communication or discuss with us on GitHub:"}),"\n",(0,a.jsx)(t.h2,{id:"acknowledge",children:"Acknowledge"}),"\n",(0,a.jsx)(t.p,{children:"Thanks to the community partners who contributed to this version, including Wang Tao from Alibaba cloud, Xie Yuandong from Tencent cloud, Qiu Lingwei from China Telecom, Xu Zhihao, Hou Haojun, Chen Guowang, Chen Yuquan and other students from pasalab of Nanjing University."}),"\n",(0,a.jsx)(t.h2,{id:"introduction-to-the-author",children:"Introduction to the author"}),"\n",(0,a.jsx)(t.p,{children:"Dr. Gu Rong, associate researcher of Computer Department of Nanjing University, member of PMC of fluid open source project co founder and alluxio open source project, research direction of big data processing system, has published more than 30 papers in Frontier Journal conferences in TPDS, ICDE, jpdc, IPDPS, ICPP and other fields, and presided over general projects / youth projects of National Natural Science Foundation of China There are a number of projects specially funded by China Postdoctoral Science Foundation. The research results have been applied to Alibaba, Baidu, byte beat, Sinopec, Huatai Securities and other companies and open source projects Apache spark and alluxio, and won the first prize of Jiangsu Science and technology in 2018 and the youth science and technology award of Jiangsu computer society in 2019, Served as a member of the system software special committee of China Computer Society / communication member of the big data special committee and Secretary General of the big data special committee of Jiangsu computer society."})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>s});var a=n(1504);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);