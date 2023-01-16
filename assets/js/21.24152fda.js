(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{385:function(e,a,t){"use strict";t.r(a);var i=t(19),n=Object(i.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"fluid-an-important-puzzle-for-big-data-and-ai-to-embrace-cloud-nativity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fluid-an-important-puzzle-for-big-data-and-ai-to-embrace-cloud-nativity"}},[e._v("#")]),e._v(" Fluid: an important puzzle for big data and AI to embrace cloud Nativity")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-tech-puzzle.webp",alt:"fluid_blog"}})]),e._v(" "),a("p",[e._v("Thanks to the efficient deployment and agile iteration brought by containerization, as well as the natural advantages of cloud computing in resource cost and elastic expansion, the cloud native choreography framework represented by Kubernetes attracts more and more AI and big data applications to deploy and run on it. However, there has been a lack of a native component in the cloud native Computing Foundation (CNCF) to help these data intensive applications access data efficiently, safely and conveniently in the cloud native scenario.")]),e._v(" "),a("p",[e._v("How to drive big data and AI applications to run efficiently in cloud native scenarios is an important challenge with both theoretical significance and application value:")]),e._v(" "),a("ul",[a("li",[e._v("On the one hand, to solve this problem, we need to consider a series of theoretical and technical problems, such as application collaborative choreography, scheduling optimization, data caching and so on;")]),e._v(" "),a("li",[e._v("On the other hand, the solution of this problem can effectively promote the application of big data and AI in broad cloud service scenarios;")])]),e._v(" "),a("p",[e._v("In order to systematically solve related problems, academia and industry cooperated closely and launched fluid open source cooperation project.")]),e._v(" "),a("h2",{attrs:{id:"what-is-fluid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-fluid"}},[e._v("#")]),e._v(" What is Fluid?")]),e._v(" "),a("p",[e._v("Fluid is an open source cloud native infrastructure project. Driven by the separation of computing and storage, fluid aims to provide a layer of efficient and convenient data abstraction for AI and big data cloud native applications, abstracting data from storage, so as to achieve the following goals:")]),e._v(" "),a("ul",[a("li",[e._v("Through "),a("strong",[e._v("data affinity scheduling")]),e._v(" and "),a("strong",[e._v("distributed cache engine acceleration")]),e._v(", the integration between data and computing is realized, so as to accelerate the access of computing to data;")]),e._v(" "),a("li",[e._v("The data is managed independently of the storage, and the resource is isolated through the namespace of Kubernetes to realize the data security isolation;")]),e._v(" "),a("li",[e._v("The data from different storage is combined for operation, which has the opportunity to break the data island effect caused by the difference of different storage.")])]),e._v(" "),a("p",[e._v("Through the data layer abstraction provided by Kubernetes service, data can be flexibly and efficiently moved, copied, expelled, transformed and managed between storage sources such as HDFS, OSS, CEPH, etc. and cloud native application computing on the upper layer of Kubernetes like fluid. The specific data operation is transparent to users. Users no longer need to worry about the efficiency of accessing remote data, the convenience of managing data sources, and how to help Kubernetes  make operation and maintenance scheduling decisions. Users only need to directly access the abstracted data in the most natural way of Kubernetes native data volume, and all the remaining tasks and underlying details are handed over to fluid for processing.")]),e._v(" "),a("p",[e._v("Currently, fluid project mainly focuses on two important scenarios: data set choreography and application choreography. Data set choreography can cache the data of the specified data set to the Kubernetes node of the specified characteristics; Application choreography schedules the specified application to a node that can or has stored the specified data set. The two can also be combined to form a collaborative choreography scenario, that is, node resource scheduling considering data sets and application requirements.")]),e._v(" "),a("h2",{attrs:{id:"why-does-cloud-native-need-fluid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-does-cloud-native-need-fluid"}},[e._v("#")]),e._v(" Why does cloud native need fluid?")]),e._v(" "),a("p",[e._v('There are natural differences in design concept and mechanism between cloud native environment and big data processing framework. Hadoop big data ecology, which is deeply influenced by Google\'s three papers GFS, MapReduce and BigTable, has believed in and practiced the concept of "mobile computing rather than data" since its birth. Therefore, in order to reduce data transmission, the design of data intensive computing framework and its application represented by spark, hive and MapReduce takes more consideration of data localization architecture. But with the change of the times, in order to give consideration to the flexibility of resource expansion and the cost of use, the architecture of separation of computing and storage is popular in the more emerging cloud native environment. Therefore, a component like fluid is needed in the cloud native environment to supplement the lack of data locality brought by big data framework embracing cloud native.')]),e._v(" "),a("p",[e._v("In addition, in the cloud native environment, applications are usually deployed in a stateless microservice mode, not centered on data processing; Data intensive frameworks and applications usually focus on data abstraction and carry out the assignment and execution of related computing jobs and tasks. When the data intensive framework is integrated into the cloud native environment, it also needs a data abstraction centric scheduling and allocation framework like fluid to work together.")]),e._v(" "),a("p",[a("strong",[e._v("Aiming at the problem that Kubernetes lacks intelligent perception and scheduling optimization of application data, and the limitation that the data choreography engine taking Alluxio as an example is difficult to directly control the cloud native infrastructure layer, fluid proposes a series of innovative methods, such as data application collaborative choreography, intelligent perception and joint optimization, And form a set of cloud native scene data intensive application efficient support platform")])]),e._v(" "),a("p",[e._v("The specific architecture is shown in the figure below:")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://kubeflow.oss-cn-beijing.aliyuncs.com/Static/architecture.png",alt:"fluid_archi"}})]),e._v(" "),a("h2",{attrs:{id:"demonstration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demonstration"}},[e._v("#")]),e._v(" Demonstration")]),e._v(" "),a("p",[e._v("We provide a demo of the video to show you how to improve the speed of AI model training on the cloud through fluid. In this demo, using the same resnet50 test code, fluid acceleration has obvious advantages over native ossfs direct access in terms of training speed per second and total training time, and the training time is reduced by 69%.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/oosfs-fluid.webp",alt:"69"}})]),e._v(" "),a("p",[e._v("Video presentation:")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/video/machineLearning.mp4",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/machineLearning.png",alt:"demo"}}),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"experience-fluid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#experience-fluid"}},[e._v("#")]),e._v(" Experience fluid?")]),e._v(" "),a("p",[e._v("Fluid needs to run in kubernetes v1.14 and above, and support CSI storage. The deployment and management of fluid operator is realized by the package management tool helm V3 on kubernetes platform. Before running fluid, make sure that helm is properly installed in the kubernetes cluster. You can refer to "),a("a",{attrs:{href:"/guide/get_started"}},[e._v("document")]),e._v(", install and use fluid.")])])}),[],!1,null,null,null);a.default=n.exports}}]);