"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[6234],{2532:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=i(7624),t=i(2172);const s={sidebar_label:"Alibaba's Case Study",sidebar_position:1},o="Alibaba's Case Study",r={id:"case-study/alibaba-case-study",title:"Alibaba's Case Study",description:"This article discusses the significant role of Fluid with JindoCache in the large-scale model training within Alibaba Group.",source:"@site/versioned_docs/version-v1.0.0/case-study/alibaba-case-study.md",sourceDirName:"case-study",slug:"/case-study/alibaba-case-study",permalink:"/zh/docs/case-study/alibaba-case-study",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v1.0.0/case-study/alibaba-case-study.md",tags:[],version:"v1.0.0",lastUpdatedBy:"chenqiming",lastUpdatedAt:1713345055,formattedLastUpdatedAt:"2024\u5e744\u670817\u65e5",sidebarPosition:1,frontMatter:{sidebar_label:"Alibaba's Case Study",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Access via REST",permalink:"/zh/docs/developer-guide/client-usage/access-via-REST"},next:{title:"Weibo's Case Study",permalink:"/zh/docs/case-study/weibo-case-study"}},c={},d=[{value:"1. Background Information",id:"1-background-information",level:2},{value:"2. Chanllenges",id:"2-chanllenges",level:2},{value:"3. Efficient Cache Scheduling Acceleration System for Deep Learning Tasks",id:"3-efficient-cache-scheduling-acceleration-system-for-deep-learning-tasks",level:2},{value:"3.1 Components of the Project Architecture",id:"31-components-of-the-project-architecture",level:3},{value:"Fluid",id:"fluid",level:4},{value:"JindoCache",id:"jindocache",level:4},{value:"KubeDL",id:"kubedl",level:4},{value:"Overall Project Architecture",id:"overall-project-architecture",level:4},{value:"3.2 Benefits of JindoCache-based Fluid",id:"32-benefits-of-jindocache-based-fluid",level:3},{value:"3.3 Practice",id:"33-practice",level:3},{value:"3.4 Experience",id:"34-experience",level:3},{value:"Experience is summarized from the practice in the following five aspects:",id:"experience-is-summarized-from-the-practice-in-the-following-five-aspects",level:4},{value:"3.5 Results",id:"35-results",level:3},{value:"Read Sample Acceleration",id:"read-sample-acceleration",level:4},{value:"Checkpoint Acceleration",id:"checkpoint-acceleration",level:4},{value:"5. Summary and Outlook",id:"5-summary-and-outlook",level:2},{value:"Reference",id:"reference",level:2}];function l(e){const a={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"alibabas-case-study",children:"Alibaba's Case Study"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"This article discusses the significant role of Fluid with JindoCache in the large-scale model training within Alibaba Group."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:"By Wang Tao (Yangli), Chen Qiukai (Qiusuo) and Xu Zhihao (Dongyun)"})}),"\n",(0,n.jsx)(a.h2,{id:"1-background-information",children:"1. Background Information"}),"\n",(0,n.jsx)(a.p,{children:"In 2024, new technology trends, such as the large model, artificial intelligence generated content (AIGC), and multi-modal technologies, begin to be integrated with actual business and put into production. These new technology trends not only increase the requirement for computing power, but also bring greater challenges to the underlying infrastructure."}),"\n",(0,n.jsx)(a.p,{children:"In the computing field, heterogeneous hardware, such as graphics processing units (GPUs) and field programmable gate arrays (FPGAs), adapts to changing needs through short-cycle iterations and evolution. Alibaba Group adopts a variety of scheduling methods, such as centralized scheduling, unified resource pool, and comprehensive elasticity, to meet complex computing needs."}),"\n",(0,n.jsx)(a.p,{children:"In the storage field, classic microservices applications achieve a balance between performance and efficiency based on the cloud-native architecture. However, for computing-intensive applications with the largest increase in the computing capacity, such as distributed AI training and big data, data locality directly affects the operation efficiency and throughput of computing jobs. The consumption of network I/O operations also indirectly increases the bandwidth costs. In addition, in predictable scenarios, the size of datasets will continue to grow rapidly. Accelerating data access with appropriate data cache affinity technologies will be the key to improving the efficiency of computing jobs while reducing costs."}),"\n",(0,n.jsxs)(a.p,{children:["Datasets in large model training and multimedia scenarios mainly consist of pictures and audio files. ",(0,n.jsx)(a.a,{href:"https://www.alibabacloud.com/en/product/object-storage-service",children:"Object Storage Service"})," (OSS) is naturally suitable for managing the data. It is also a storage service for most online computing jobs. For example, data read operations in training scenarios have the following characteristics:"]}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Sequential randomization of datasets causes failures of conventional standalone cache policies."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Datasets are read for multiple times during multiple epochs."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"A dataset may be reused in different jobs."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"To sum up, distributed caches and file systems are naturally suitable for accelerating I/O operations in multiple AI platform business domains of Alibaba Group."}),"\n",(0,n.jsx)(a.h2,{id:"2-chanllenges",children:"2. Chanllenges"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"The compute-storage separation architecture improves the flexibility of data access and horizontal scaling of computing resources, but leads to a high latency in data access. This is unfriendly to training scenarios with a high requirement for data cache affinity. Machine learning tasks for business teams must frequently access sample datasets and checkpoints in OSS in real time during training. When OSS has limited bandwidth or high load, data access to OSS is one to two orders of magnitude slower than that to local files, and causes high bandwidth costs."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"The Kubernetes scheduler is unaware of data caches, and access to a data source remains slow after multiple times of access. In practice, the same data is repeatedly accessed by deep learning tasks, including tasks with the same model but different hyperparameters, tasks with fine-tuned models but the same input, and AutoML tasks. Repeated data access by the deep learning tasks results in reusable data caches. However, because the native Kubernetes scheduler is unaware of caches, the result of application scheduling is poor, caches cannot be reused, and performance cannot be improved."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"OSS has become the bottleneck of concurrent data access, and stability is faced with great challenges. A large number of machine learning tasks concurrently access OSS during simultaneous training. Such concurrent machine learning training causes high I/O load, and OSS is prone to single points of failure (SPOFs). When bandwidth of OSS is limited, all machine learning tasks are affected."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Training files are scattered, and metadata access is under high pressure. Training data files of machine learning tasks are usually scattered in different paths, and list operations for reading the files take an extended period of time. The performance of list operations in OSS is suboptimal. When performed at a large scale, these operations are prone to timeouts or failures due to the heavy load on metadata access."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"I/O stability directly affects business operation. Poor I/O stability leads to unstable business performance or even causes task failures. FUSE-based storage clients are more prone to such problems. If these problems cannot be automatically solved, cluster training tasks may be interrupted. Maintaining I/O stability is one of the keys to ensuring smooth business operation."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Based on analysis of the preceding typical data access patterns, it is found in practice that expensive computing resources such as GPUs cannot be fully utilized due to I/O performance issues. The nature of machine learning training results in scattered data file access and high metadata access load. If metadata and file data can be cached in a fine-grained manner, cache efficiency and disk utilization can be improved, and metadata loss caused by file lookup operations can also be mitigated."}),"\n",(0,n.jsx)(a.h2,{id:"3-efficient-cache-scheduling-acceleration-system-for-deep-learning-tasks",children:"3. Efficient Cache Scheduling Acceleration System for Deep Learning Tasks"}),"\n",(0,n.jsx)(a.p,{children:"To improve efficiency of large-scale machine learning model training for Alibaba Group, better data localization must be achieved for data access during model training. Therefore, the following objectives are established:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"ully utilize local data access in computing: Repeated read operations through the network are prevented, and the time taken by I/O operations in the computing pipeline is minimized, thus accelerating training for machine learning models and improving GPU utilization of clusters."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Reduce the load on OSS: Applications read some data from local storage, thus reducing the latency in data access and the load on the bandwidth of OSS."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Leverage the cache nodes for hot datasets: Tasks are intelligently scheduled onto data cache nodes without user awareness, thus accelerating the operation of common model training programs."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Separate metadata caches from data caches: You can separately cache metadata of files and customize cache policies."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Read data through POSIX-based APIs: You do not need to use different data access APIs during model development and training, thus reducing the costs of developing machine learning model programs."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"31-components-of-the-project-architecture",children:"3.1 Components of the Project Architecture"}),"\n",(0,n.jsx)(a.h4,{id:"fluid",children:"Fluid"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://github.com/fluid-cloudnative/fluid",children:"Fluid"})," is an open source scalable distributed data orchestration and acceleration system. It enables data access for data-intensive applications such as AI and big data based on the Kubernetes standard without user awareness. It is intended to build an efficient support platform for data-intensive applications in cloud-native environments. Based on data layer abstraction provided by Kubernetes services, Fluid can flexibly and efficiently move, replicate, evict, transform, and manage data between storage sources such as HDFS, OSS, and Ceph and upper-layer cloud-native computing applications of Kubernetes. Specific data operations are performed without user awareness. You do not need to worry about the efficiency of accessing remote data, the convenience of managing data sources, or how to help Kubernetes make O&M and scheduling decisions. You can directly access abstracted data from Kubernetes-native persistent volumes (PVs) and persistent volume claims (PVCs). Remaining tasks and underlying details are all handled by Fluid."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Fluid",src:i(496).c+"",width:"1830",height:"908"})}),"\n",(0,n.jsxs)(a.p,{children:["Fluid supports multiple runtimes, including JindoRuntime, AlluxioRuntime, JuiceFSRuntime, and GooseFSRuntime. JindoRuntime has outstanding capabilities, performance, and stability, and is applied in many scenarios. ",(0,n.jsx)(a.a,{href:"https://github.com/aliyun/alibabacloud-jindodata/blob/master/docs/user/6.x/6.2.0/jindo_fluid/jindo_fluid_overview.md",children:"JindoRuntime"})," is a distributed cache runtime of Fluid. It is built on JindoCache, a distributed cache acceleration engine."]}),"\n",(0,n.jsx)(a.h4,{id:"jindocache",children:"JindoCache"}),"\n",(0,n.jsx)(a.p,{children:"JindoCache, formerly known as JindoFSx, is a cloud-native data lake acceleration service provided by the data lake management team of Alibaba Cloud. JindoCache supports acceleration features such as data caching and metadata caching. JindoCache can use different CacheSets for different file paths to provide different read/write policies to meet the requirements for access acceleration in different scenarios of data lakes."}),"\n",(0,n.jsx)(a.p,{children:"JindoCache is applicable to the following scenarios:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Online analytical processing (OLAP) (Presto queries), to improve query performance and reduce query time."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"DataServing (HBase), to significantly reduce the P99 latency and request costs."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Big data analysis (Hive/Spark reports), to reduce report output time and costs of computing clusters."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Data lakehouse, to reduce request costs and the catalog latency."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"AI and training acceleration, to reduce the costs of using AI clusters and provide more comprehensive capability support."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"JindoCache",src:i(5696).c+"",width:"1000",height:"615"})}),"\n",(0,n.jsx)(a.h4,{id:"kubedl",children:"KubeDL"}),"\n",(0,n.jsxs)(a.p,{children:["KubeDL is a Kubernetes (ASI)-based AI workload orchestration system for managing the lifecycle of distributed AI workloads, interaction with layer-1 scheduling, failure tolerance and recovery, as well as dataset and runtime acceleration. It supports the stable operation of more than 10,000 AI training tasks on different platforms in the unified resource pool of Alibaba Group every day, including but not limited to tasks related to Taobao, Alimama, and DAMO Academy business domains. You can download the ",(0,n.jsx)(a.a,{href:"https://github.com/kubedl-io/kubedl",children:"open source edition of KubeDL"})," from GitHub."]}),"\n",(0,n.jsx)(a.h4,{id:"overall-project-architecture",children:"Overall Project Architecture"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"architecture",src:i(5324).c+"",width:"1000",height:"1071"})}),"\n",(0,n.jsx)(a.h3,{id:"32-benefits-of-jindocache-based-fluid",children:"3.2 Benefits of JindoCache-based Fluid"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Fluid can orchestrate datasets in Kubernetes clusters to co-deploy data and computing, and provide PVC-based APIs for seamlessly integrating Kubernetes applications. JindoRuntime can accelerate data access and caching in OSS. POSIX-based APIs of FUSE allow you to easily access large numbers of files in OSS the way you access local disks. Deep learning training tools such as PyTorch can read training data through POSIX-based APIs."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Fluid provides distributed metadata and data caches."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Fluid supports metadata preloading to prevent a large number of metadata operations on training files in OSS, and supports data preloading to prevent contention for data access due to data pulling during training."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Data affinity scheduling of Fluid is called by using KubeDL. You do not need to know the locations of nodes where caches are stored or nodes that may be migrated at any time in scaling scenarios. Fluid schedules tasks with data dependencies in combination with cache nodes to short-circuit read operations and maximize performance."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"JindoCache provides a variety of distributed caches. You can select appropriate cache policies based on your business requirements. For example, the cache-aside (lazy loading) policy is selected for cache read operations: When an application needs to read data, it first checks the cache to determine whether the data is available. If the data is available (the cache is hit), the cached data is returned. If the data is unavailable (the cache is missed), the data is queried from the underlying storage, added to the cache, and then returned to the caller. In addition, the write-through policy is selected for cache write operations. Files written by an application to the underlying file system are also written to the cache system. This way, this part of data can be directly read from the cache system next time, thus greatly improving read efficiency."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Fluid supports self-healing of FUSE mount targets. It can automatically check and recover disconnection of FUSE mount targets caused by out-of-memory (OOM) and other exceptions. This prevents data access exceptions and ensures the stable operation of online business on AI platforms."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"33-practice",children:"3.3 Practice"}),"\n",(0,n.jsx)(a.p,{children:"In practice within Alibaba Group, end-to-end data I/O acceleration is provided for AI platforms based on job orchestration capabilities of KubeDL and caching capabilities of JindoRuntime-based Fluid in combination with idle local resources such as memory and high-performance disks in the huge heterogeneous computing resource pool of Alibaba Group."}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"The huge unified heterogeneous resource pool of Alibaba Group provides resource sales levels with differentiated service level objectives (SLOs) and contains a variety of resources at different levels, including highly guaranteed resources, spot instance resources, periodically offline resources, and normal offline resources. Models, SSDs, and high-performance network interface cards (NICs) of different generations are used with multi-level cache media of JindoCache to make full use of idle resources in the unified resource pool."}),"\n",(0,n.jsx)(a.li,{children:"Based on the composition of JindoCache clusters, highly guaranteed computing resources are used to run metadata services, and elastic offline resources are used to run I/O bound cache node services. This fully incorporates the scheduling characteristics of the resource pool of Alibaba Group and minimizes user costs."}),"\n",(0,n.jsx)(a.li,{children:"KubeDL provides distributed training task management, and Fluid provides dataset management. They support automatic reuse of the same data sources of different users across jobs and even automatic reuse of the same data sources of different platforms in the unified resource pool. Based on the reference count of jobs, KubeDL can automatically recycle idle datasets to reduce user costs."}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"34-experience",children:"3.4 Experience"}),"\n",(0,n.jsx)(a.h4,{id:"experience-is-summarized-from-the-practice-in-the-following-five-aspects",children:"Experience is summarized from the practice in the following five aspects:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Select appropriate cache nodes: JindoRuntime can achieve higher local data access performance. In production, nodes with poor disk and network I/O performance are not suitable for caching data. Therefore, select nodes with large disk sizes and high network I/O performance. Fluid supports scheduling of datasets, in other words, scheduling of cache nodes. It schedules cache nodes based on the node affinity of datasets so that the cache nodes can provide efficient cache services."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Configure the cache capacity and path: You can specify the ",(0,n.jsx)(a.code,{children:"mounts"})," field of datasets and tieredstore of JindoRuntime to set the mount directory of data. To prevent excessive data from being cached, you can specify tieredstore of JindoRuntime to limit the maximum cache capacity and watermark. Data that exceeds the watermark is automatically discarded. You can also specify tieredstore to set the cache path and storage media, such as SSD, memory, or HDD, to meet the needs of various scenarios. In multi-node scenarios, the replacement feature of datasets allow you to deploy multiple datasets in one cluster."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Set cache security policies: When you create a dataset in Fluid, you may need to configure sensitive information in ",(0,n.jsx)(a.code,{children:"mounts"}),", such as the AccessKey ID and AccessKey secret of your OSS account. To ensure security, Fluid allows you to use secrets to configure the sensitive information. You can create a secret and specify the name of the secret in the ",(0,n.jsx)(a.code,{children:"EncryptOptions"})," field of the dataset to bind the sensitive information."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Data preloading: After you create a dataset and JindoRuntime, all files in the data directory are downloaded when you access the mounted data for the first time. This causes a waste of space and network resources if the data directory contains data that is not needed. To prevent this problem, Fluid supports data preloading and metadata caching. You can create a dataload to read the path of data to be preloaded. This way, data can be dynamically injected. Dataloads can cache metadata and block access to non-preloaded data, thus greatly improving the efficiency of data access."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Enable self-healing of FUSE mount targets in Fluid: During the operation of online business, FUSE processes may crash and restart due to insufficient memory resources. Consequently, FUSE mount targets in the business container are disconnected, and data access exceptions occur, affecting the availability of online business. You can enable self-healing of FUSE mount targets in Fluid. This way, Fluid automatically detects and fixes disconnected mount targets to continuously ensure the stable operation of online business."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"35-results",children:"3.5 Results"}),"\n",(0,n.jsx)(a.h4,{id:"read-sample-acceleration",children:"Read Sample Acceleration"}),"\n",(0,n.jsx)(a.p,{children:"The effect of Fluid is verified in an end-to-end manner based on real user jobs in the production environment."}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Task"}),": LLaMA 13B pre-training task"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Test environment:"})}),"\n",(0,n.jsx)(a.p,{children:"Cluster and model: high-performance A800 server cluster equipped with remote direct memory access (RDMA) NICs and NVMe disks"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Default specifications of Fluid :"})," 24 \xd7 32Gi cache workers and NVMe disks, which are more cost-effective than memory"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Conclusion:"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"LLaMA 13B Pre-trained Model"})}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"I/O access mode"}),(0,n.jsx)(a.th,{children:"GPU Util"}),(0,n.jsx)(a.th,{children:"SM Util"}),(0,n.jsx)(a.th,{children:"TFLOPs (log)"}),(0,n.jsx)(a.th,{children:"TFLOPs (amperf)"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Direct connection"}),(0,n.jsx)(a.td,{children:"100%"}),(0,n.jsx)(a.td,{children:"~60%"}),(0,n.jsx)(a.td,{children:"~135"}),(0,n.jsx)(a.td,{children:"Up to 60 (avg: 10m)"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Fluid with JindoRuntime"}),(0,n.jsx)(a.td,{children:"100%"}),(0,n.jsx)(a.td,{children:"Up to 80% (increased by 33%)"}),(0,n.jsx)(a.td,{children:"Up to 160 (increased by 18%)"}),(0,n.jsx)(a.td,{children:"Up to 72 (avg: 10m) (increased by 20%)"})]})]})]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Monitoring Data: Direct Connection without Caching"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"w/o-cache-1",src:i(1640).c+"",width:"1000",height:"357"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"w/o-cache-2",src:i(5956).c+"",width:"1000",height:"370"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"w/o-cache-3",src:i(4480).c+"",width:"1000",height:"364"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Monitoring Data: Caching Enabled"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"with-cache-1",src:i(9708).c+"",width:"989",height:"377"})}),"\n",(0,n.jsx)(a.p,{children:"The overall average GPU utilization is also close to 100%, and the loads of GPUs are uniform and are all close to 100%."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"with-cache-2",src:i(2352).c+"",width:"1000",height:"392"})}),"\n",(0,n.jsx)(a.h4,{id:"checkpoint-acceleration",children:"Checkpoint Acceleration"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Training and Offline Inference Scenarios"}),"\r\nA distributed training task loads a checkpoint model file to continue training each time it is restarted. The model size ranges from tens of GB to hundreds of MB. In addition, a large number of offline inference tasks occupy many spot instance resources in the unified resource pool. Resources of an inference task can be preempted at any time, and the task will reload the model for offline inference after a failover. Therefore, a large number of jobs load the same checkpoint file after restart."]}),"\n",(0,n.jsx)(a.p,{children:"Distributed cache acceleration of Fluid converts multiple remote read operations into a single local read operation. This greatly accelerates job failovers and prevents bandwidth costs caused by multiple repeated read operations. In a typical large model scenario, the size of the model file is approximately 20 GB based on the 7B parameter size with FP16 precision. Fluid reduces the model loading time from 10 minutes to approximately 30 seconds."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Inference",src:i(9188).c+"",width:"1000",height:"243"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Spot Scenarios of Training (write-through)"}),"\r\nIn spot scenarios of distributed training, if resources of a synchronous training task are preempted, it is usually restarted globally through a failover to continue training. KubeDL cooperates with layer-1 scheduling to instruct, through interactive preemption, the rank 0 node of the training task to record an on-demand checkpoint to save the latest training progress. After the restart, the task can reload the latest checkpoint to continue training as soon as possible. This leverages low costs of spot instance resources and minimizes the costs of training interruption."]}),"\n",(0,n.jsx)(a.p,{children:"The write-through feature in the latest version of JindoRuntime of Fluid allows a restarted task to immediately load the latest model file from the local cache cluster, instead of passively loading the latest model file from the remote storage. The end-to-end failover time is reduced from 10 minutes to 2 minutes on average. This reduces the loss of idle computing power by 80%."}),"\n",(0,n.jsx)(a.h2,{id:"5-summary-and-outlook",children:"5. Summary and Outlook"}),"\n",(0,n.jsx)(a.p,{children:"JindoRuntime-based Fluid plays an important role in large-scale machine learning model training for Alibaba Group. In read sample acceleration, it greatly increases the system throughput and achieves more balanced load utilization between GPUs. In addition, the abstraction layer of JindoRuntime shields the differences between JindoCache versions, thus supporting seamless upgrades. In checkpoint acceleration, end-to-end model loading is significantly accelerated, thus significantly improving performance at low costs."}),"\n",(0,n.jsx)(a.p,{children:"In the future, Fluid is to be applied in more scenarios and provide extended features based on existing ones:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Automatically recycles idle datasets based on reference counts, to automatically manage idle datasets."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Intelligently preloads data: automatically preloads data based on the data access mode of tasks, preloads or evicts data by directory priority, and supports splitting of a preload task by directory for parallel preloading."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Adopts the RDMA technology to increase the throughput of workers in clusters, to fully utilize high-performance network infrastructure of clusters."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Based on cache acceleration capabilities and multi-JindoCache orchestration capabilities of Fluid, the operation mode and integration of upper-layer systems are to be optimized, to improve hardware and software collaboration and further enhance performance and support new hardware."}),"\n",(0,n.jsx)(a.h2,{id:"reference",children:"Reference"}),"\n",(0,n.jsxs)(a.p,{children:["[1] Fluid: ",(0,n.jsx)(a.a,{href:"https://github.com/fluid-cloudnative/fluid",children:"https://github.com/fluid-cloudnative/fluid"})]}),"\n",(0,n.jsxs)(a.p,{children:["[2] JindoCache: ",(0,n.jsx)(a.a,{href:"https://github.com/aliyun/alibabacloud-jindodata/blob/master/docs/user/6.x/6.2.0/jindo_fluid/jindo_fluid_overview.md",children:"https://github.com/aliyun/alibabacloud-jindodata/blob/master/docs/user/6.x/6.2.0/jindo_fluid/jindo_fluid_overview.md"})]})]})}function h(e={}){const{wrapper:a}={...(0,t.M)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},5324:(e,a,i)=>{i.d(a,{c:()=>n});const n=i.p+"assets/images/ali-architecture-ab33bffb6d5c85a262ad64e5774981be.png"},496:(e,a,i)=>{i.d(a,{c:()=>n});const n=i.p+"assets/images/ali-fluid-0eac4aa5089416b15556997fc205f339.png"},9188:(e,a,i)=>{i.d(a,{c:()=>n});const n=i.p+"assets/images/ali-inference-4c22062a009e5348bc46c7dc49f44f41.png"},5696:(e,a,i)=>{i.d(a,{c:()=>n});const n=i.p+"assets/images/ali-jindo-bd3a18eb06b9708e37247c130d1be128.png"},9708:(e,a,i)=>{i.d(a,{c:()=>n});const n=i.p+"assets/images/ali-with-cache-1-b62e99da573ac9ea971f266f7b68f8d4.png"},2352:(e,a,i)=>{i.d(a,{c:()=>n});const n=i.p+"assets/images/ali-with-cache-2-460b92a8829207a720c1d6144450ff3f.png"},1640:(e,a,i)=>{i.d(a,{c:()=>n});const n=i.p+"assets/images/ali-wo-cache-1-d3671b03ad6ca54ced00a43fb14dc15f.png"},5956:(e,a,i)=>{i.d(a,{c:()=>n});const n=i.p+"assets/images/ali-wo-cache-2-9357516db7ec35961405f257f200ce6c.png"},4480:(e,a,i)=>{i.d(a,{c:()=>n});const n=i.p+"assets/images/ali-wo-cache-3-10b74b5380b758fd38d168855e13bd83.png"},2172:(e,a,i)=>{i.d(a,{I:()=>r,M:()=>o});var n=i(1504);const t={},s=n.createContext(t);function o(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);