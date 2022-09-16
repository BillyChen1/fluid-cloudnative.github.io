(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{390:function(e,t,a){"use strict";a.r(t);var n=a(19),i=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"fluid-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fluid-overview"}},[e._v("#")]),e._v(" Fluid Overview")]),e._v(" "),t("h2",{attrs:{id:"target-functions-and-scenarios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#target-functions-and-scenarios"}},[e._v("#")]),e._v(" Target Functions and Scenarios")]),e._v(" "),t("p",[e._v("Fluid is an open source cloud native infrastructure component. In the treand of computation and stroage separation, the goal of Fluid is to build an efficient data abstraction layer for AI and Big Data cloud native applications. It provides the following functions:")]),e._v(" "),t("ol",[t("li",[e._v("Through data affinity scheduling and distributed cache acceleration, realizing the fusion of data and computation, to speed up the data access from computation.")]),e._v(" "),t("li",[e._v("Storing and managing data independently, and isolating the resource by Kubernetes namespace, to realize data isolation safely.")]),e._v(" "),t("li",[e._v("Unifying the data from different storage, to avoid the islanding effect of data.")])]),e._v(" "),t("p",[e._v("Through the data abstraction layer served on Kubernetes, the data will just be like the fluid, waving across the storage sources(such as HDFS, OSS, Ceph) and the cloud native applications on Kubernetes. It can be moved, copied, evicted, transformed and managed flexibly. Besides, All the data operations are transparent to users. Users do not need to worry about the efficiency of remote data access nor the convenience of data source management. User just need to access the data abstracted from the Kubernetes native data volume, and all the left tasks and details are handled by Fluid.")]),e._v(" "),t("p",[e._v("Fluid currently mainly focuses on the dataset orchestration and application orchestration these two important scenarios. The dataset orchestration can arrange the cached dataset to the specific Kubernetes node, while the application orchestration can arrange the the applications to nodes with the pre-loaded datasets. These two can work together to form the co-orchestration scenario, which take both the dataset specifications and application characteristics into consideration during resouce scheduling.")]),e._v(" "),t("h2",{attrs:{id:"why-cloud-native-needs-fluid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-cloud-native-needs-fluid"}},[e._v("#")]),e._v(" Why Cloud Native Needs Fluid")]),e._v(" "),t("p",[e._v("There exist a nature divergence between the cloud native environment and the earlier big data processing framework. Deeply affected by Google's GFS, MapReduce, BigTable influential papers, the open souce big data ecosystem keeps the concept of 'moving data but not moving computation' during system design. Therefore, data-intensive computing frameworks, such as Spark, Hive, MapReduce, aim to reduce data transmission, and consider more data locality architecture during the design. However, as time changes, for both consider the flexibility of the resource scalability and usage cost, compution and storage separation architecture has been widely used in the cloud native environment. sThus, the cloud native ecosystem need an component like Fluid to make up the lost data locality when the big data architecture embraces cloud native architecture.")]),e._v(" "),t("p",[e._v("Besides, in the cloud native environment, applications are usually deployed in the stateless micro-service style, but focus on data processing. However, the data-intensive frameworks and applications always focus on data abstraction, and schedules and executes the computing jobs and tasks. When data-intensive frameworks are deployed in cluod native environment, it needs component like Fluid to handle the data scheduling in cloud.")]),e._v(" "),t("p",[e._v("To resolve the issue that Kubernetes lacks the awareness and optimization for application data, Fluid put forward a series of innovative methods suach as co-orchestration, intelligent awareness, join-optimization, to form an efficient supporting platform for data-intensive applications in cloud native environment.")]),e._v(" "),t("p",[e._v("The architecture of Fluid in Kubernetes is as following:\n")]),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"/architecture.png",title:"architecture",height:"80%",width:"80%",alt:""}})]),t("p"),e._v(" "),t("h2",{attrs:{id:"concept"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concept"}},[e._v("#")]),e._v(" Concept")]),e._v(" "),t("p",[t("strong",[e._v("Dataset")]),e._v(":  A set of logically related data that will be used by a computing engine, such as Spark for big data and TensorFlow for AI scenarios. The management of dataset has many metrics, has multiple dimensions, such as security, version management and data acceleration. And we hope to start with data acceleration and provide support for the management of data sets.")]),e._v(" "),t("p",[t("strong",[e._v("Runtime")]),e._v(":  Security, version management and data acceleration, and defines a series of life cycle interfaces. You can implement them.")]),e._v(" "),t("p",[t("strong",[e._v("AlluxioRuntime")]),e._v(": From "),t("a",{attrs:{href:"https://www.alluxio.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Alluixo"),t("OutboundLink")],1),e._v(",\nFluid manages and schedules Alluxio Runtime to achieve dataset visibility, elastic scaling, and data migration. It is an engine which supports data management and caching of datasets.")]),e._v(" "),t("h2",{attrs:{id:"demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[e._v("#")]),e._v(" Demo")]),e._v(" "),t("p",[e._v("We provide demo to show how to improve the AI model traning speed in Cloud by using Fluid.")]),e._v(" "),t("h3",{attrs:{id:"demo-1-accelerate-remote-file-accessing-with-fluid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demo-1-accelerate-remote-file-accessing-with-fluid"}},[e._v("#")]),e._v(" Demo 1: Accelerate Remote File Accessing with Fluid")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/video/remote-file-accessing.mp4",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/remoteData_demo.png",alt:""}}),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"demo-2-machine-learning-with-fluid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demo-2-machine-learning-with-fluid"}},[e._v("#")]),e._v(" Demo 2: Machine Learning with Fluid")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/video/machineLearning.mp4",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/machineLearning.png",alt:""}}),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"quick-start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[e._v("#")]),e._v(" Quick Start")]),e._v(" "),t("p",[e._v("Fluid needs to run on Kubernetes v1.14 or above version, also needs to support CSI storage. The deployment and management of Fluid Operator is through Helm v3 which is the package mangement tool on Kubernetes platform. Please make sure the Helm is correctly installed in the Kubernetes cluster before running Fluid.")]),e._v(" "),t("p",[e._v("You can refer to the following documents to insall and use Fluid.")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/guide/get_started.html"}},[e._v("English")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/zh/guide/get_started.html"}},[e._v("简体中文")])],1)])])}),[],!1,null,null,null);t.default=i.exports}}]);