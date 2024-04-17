"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[9904],{8148:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=a(7624),t=a(2172);const i={sidebar_label:"Machine Learning Workload",sidebar_position:1},r="Machine Learning Workload",o={id:"tutorials/advanced/machine-learning-workload",title:"Machine Learning Workload",description:"This article describes how to deploy ImageNet dataset stored on Aliyun OSS to Kubernetes cluster with Fluid, and train a ResNet-50 model on this dataset using Arena. In this article, we perform machine learning training on 4 nodes, each node with 8 GPU cards.",source:"@site/docs/tutorials/advanced/machine-learning-workload.md",sourceDirName:"tutorials/advanced",slug:"/tutorials/advanced/machine-learning-workload",permalink:"/zh/docs/next/tutorials/advanced/machine-learning-workload",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/docs/tutorials/advanced/machine-learning-workload.md",tags:[],version:"current",lastUpdatedBy:"chenqiming",lastUpdatedAt:1712563663,formattedLastUpdatedAt:"2024\u5e744\u67088\u65e5",sidebarPosition:1,frontMatter:{sidebar_label:"Machine Learning Workload",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Accelerate Different Storage with Fluid",permalink:"/zh/docs/next/tutorials/storage-acceleration/accelerate-different-storage-with-fluid"},next:{title:"Accelerate Data Access by MEM or SSD",permalink:"/zh/docs/next/tutorials/advanced/accelerate-data-access-by-mem-or-ssd"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploy Dataset on Kubernetes Cluster with Fluid",id:"deploy-dataset-on-kubernetes-cluster-with-fluid",level:2},{value:"Create Dataset and Runtime",id:"create-dataset-and-runtime",level:3},{value:"Example: Run Deep Learning Frameworks Using Arena",id:"example-run-deep-learning-frameworks-using-arena",level:2},{value:"Clean Up",id:"clean-up",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"machine-learning-workload",children:"Machine Learning Workload"}),"\n",(0,s.jsxs)(n.p,{children:["This article describes how to deploy ",(0,s.jsx)(n.a,{href:"http://www.image-net.org/",children:"ImageNet"})," dataset stored on ",(0,s.jsx)(n.a,{href:"https://cn.aliyun.com/product/oss",children:"Aliyun OSS"})," to Kubernetes cluster with Fluid, and train a ResNet-50 model on this dataset using ",(0,s.jsx)(n.a,{href:"https://github.com/kubeflow/arena",children:"Arena"}),". In this article, we perform machine learning training on 4 nodes, each node with 8 GPU cards."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/fluid-cloudnative/fluid",children:"Fluid"})," (version >= 0.1.0)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/kubeflow/arena",children:"Arena"}),"\uff08version >= 0.4.0\uff09"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/tensorflow/tensorflow",children:"TensorFlow"})," (version = 1.14)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/horovod/horovod",children:"Horovod"})," (version=0.18.1)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/tensorflow/benchmarks/tree/cnn_tf_v1.14_compatible",children:"Benchmark"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NOTE"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The document requires Fluid installed on your Kubernetes cluster. Please refer to ",(0,s.jsx)(n.a,{href:"/docs/get-started/installation",children:"Fluid Installation Guide"})," to finish installation before going to the next step."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Arena is a CLI that is convenient for data scientists to run and monitor machine learning tasks. See ",(0,s.jsx)(n.a,{href:"https://github.com/kubeflow/arena/blob/master/docs/installation/INSTALL_FROM_BINARY.md",children:"Arena Installation Tutorial"})," for more information."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"This Demo uses Horovod + TensorFlow + Benchmark, they are all open source version."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deploy-dataset-on-kubernetes-cluster-with-fluid",children:"Deploy Dataset on Kubernetes Cluster with Fluid"}),"\n",(0,s.jsx)(n.h3,{id:"create-dataset-and-runtime",children:"Create Dataset and Runtime"}),"\n",(0,s.jsxs)(n.p,{children:["The following ",(0,s.jsx)(n.code,{children:"dataset.yaml"})," file defined a ",(0,s.jsx)(n.code,{children:"Dataset"})," and ",(0,s.jsx)(n.code,{children:"Runtime"}),"  separated by ",(0,s.jsx)(n.code,{children:"---"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The dataset is stored on ",(0,s.jsx)(n.a,{href:"https://cn.aliyun.com/product/oss",children:"Alibaba Cloud OSS"}),". To ensure that Alluxio can successfully mount the dataset, please make sure that configurations in the ",(0,s.jsx)(n.code,{children:"dataset.yaml"})," are correct set, including ",(0,s.jsx)(n.code,{children:"mountPoint"}),", ",(0,s.jsx)(n.code,{children:"fs.oss.accessKeyId"}),", ",(0,s.jsx)(n.code,{children:"fs.oss.accessKeySecret"})," and ",(0,s.jsx)(n.code,{children:"fs.oss.endpoint"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["See Alluxio's official document ",(0,s.jsx)(n.a,{href:"https://docs.alluxio.io/os/user/stable/en/ufs/OSS.html",children:"Aliyun Object Storage Service"})," for more examples of using OSS in Alluxio."]}),"\n",(0,s.jsxs)(n.p,{children:["If you'd like to prepare dataset by yourself\uff0c please download the dataset from ",(0,s.jsx)(n.a,{href:"http://image-net.org/download-images",children:"http://image-net.org/download-images"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If you'd like to download the imagenet dataset from us, please open an issue in Fluid community to ask for it."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This document takes 4 machines to training machine learning tasks, so ",(0,s.jsx)(n.code,{children:"spec.replicas"})," is set to ",(0,s.jsx)(n.code,{children:"4"}),". To ensure that the data is cached on the V100 machine, ",(0,s.jsx)(n.code,{children:"nodeAffinity"})," is configured. In addition, the following configuration file ",(0,s.jsx)(n.code,{children:"dataset.yaml"})," also sets many parameters based on our experience to optimize the IO performance of Alluxio in machine learning tasks, including Alluxio, Fuse and JVM levels. You can adjust these parameters according to the test environment and task requirements."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ cat << EOF >> dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: imagenet\nspec:\n  mounts:\n  - mountPoint: oss://<OSS_BUCKET>/<OSS_DIRECTORY>/\n    name: imagenet\n    options:\n      fs.oss.accessKeyId: <OSS_ACCESS_KEY_ID>\n      fs.oss.accessKeySecret: <OSS_ACCESS_KEY_SECRET>\n      fs.oss.endpoint: <OSS_ENDPOINT>\n  nodeAffinity:\n    required:\n      nodeSelectorTerms:\n        - matchExpressions:\n            - key: aliyun.accelerator/nvidia_name\n              operator: In\n              values:\n                - Tesla-V100-SXM2-16GB\n---\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: imagenet\nspec:\n  replicas: 4\n  data:\n    replicas: 1\n#  alluxioVersion:\n#    image: registry.cn-huhehaote.aliyuncs.com/alluxio/alluxio\n#    imageTag: "2.3.0-SNAPSHOT-bbce37a"\n#    imagePullPolicy: Always\n  tieredstore:\n    levels:\n      - mediumtype: SSD\n        path: /var/lib/docker/alluxio\n        quota: 50Gi\n        high: "0.99"\n        low: "0.8"\nEOF\n'})}),"\n",(0,s.jsx)(n.p,{children:"Create Dataset and Alluxio Runtime with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f dataset.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Check the status Alluxio Runtime, and  there should be ",(0,s.jsx)(n.code,{children:"1"})," Master\uff0c",(0,s.jsx)(n.code,{children:"4"})," Worker and ",(0,s.jsx)(n.code,{children:"4"})," Fuse running:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl describe alluxioruntime imagenet \nName:         imagenet\nNamespace:    default\nLabels:       <none>\nAnnotations:  <none>\nAPI Version:  data.fluid.io/v1alpha1\nKind:         AlluxioRuntime\nMetadata:\n  # more metadata\nSpec:\n  # more spec\nStatus:\n  Cache States:\n    Cache Capacity:     200GiB\n    Cached:             0B\n    Cached Percentage:  0%\n  Conditions:\n    # more conditions\n  Current Fuse Number Scheduled:    4\n  Current Master Number Scheduled:  1\n  Current Worker Number Scheduled:  4\n  Desired Fuse Number Scheduled:    4\n  Desired Master Number Scheduled:  1\n  Desired Worker Number Scheduled:  4\n  Fuse Number Available:            4\n  Fuse Numb    Status:                True\n    Type:                  Ready\n  Phase:                   Bound\n  Runtimes:\n    Category:   Accelerate\n    Name:       imagenet\n    Namespace:  default\n    Type:       alluxio\n  Ufs Total:    143.7GiB\nEvents:         <none>\n"})}),"\n",(0,s.jsx)(n.p,{children:"At the same time, Dataset is bound to Alluxio Runtime:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl describe dataset\nName:         imagenet\nNamespace:    default\nLabels:       <none>\nAnnotations:  <none>\nAPI Version:  data.fluid.io/v1alpha1\nKind:         Dataset\nMetadata:\n  # more metadata\nSpec:\n  # more spec\nStatus:\n  Cache States:\n    Cache Capacity:     200GiB\n    Cached:             0B\n    Cached Percentage:  0%\n  Conditions:\n    Last Transition Time:  2020-08-18T11:01:09Z\n    Last Update Time:      2020-08-18T11:02:48Z\n    Message:               The ddc runtime is ready.\n    Reason:                DatasetReady\n    Status:                True\n    Type:                  Ready\n  Phase:                   Bound\n  Runtimes:\n    Category:   Accelerate\n    Name:       imagenet\n    Namespace:  default\n    Type:       alluxio\n  Ufs Total:    143.7GiB\nEvents:         <none>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["A pv and pvc named ",(0,s.jsx)(n.code,{children:"imagenet"})," are successfully created. So far, the dataset stored on cloud has been successfully deployed to the Kubernetes cluster."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pv,pvc\nNAME                        CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM              STORAGECLASS   REASON   AGE\npersistentvolume/imagenet   100Gi      RWX            Retain           Bound    default/imagenet                           7m11s\n\nNAME                             STATUS   VOLUME     CAPACITY   ACCESS MODES   STORAGECLASS   AGE\npersistentvolumeclaim/imagenet   Bound    imagenet   100Gi      RWX                           7m11s\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example-run-deep-learning-frameworks-using-arena",children:"Example: Run Deep Learning Frameworks Using Arena"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Arena"})," provides a convenient way to help users submit and monitor machine learning tasks. In this article, we use ",(0,s.jsx)(n.code,{children:"Arena"})," to simplify the deployment process of machine learning tasks."]}),"\n",(0,s.jsxs)(n.p,{children:["If you have installed ",(0,s.jsx)(n.code,{children:"Arena"})," and dataset has been successfully deployed to the local cluster, you can start training a ResNet50 model by simply executing the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"arena submit mpi \\\n    --name horovod-resnet50-v2-4x8-fluid \\\n    --gpus=8 \\\n    --workers=4 \\\n    --working-dir=/horovod-demo/tensorflow-demo/ \\\n    --data imagenet:/data \\\n    -e DATA_DIR=/data/imagenet \\\n    -e num_batch=1000 \\\n    -e datasets_num_private_threads=8 \\\n    --image=registry.cn-hangzhou.aliyuncs.com/tensorflow-samples/horovod-benchmark-dawnbench-v2:0.18.1-tf1.14.0-torch1.2.0-mxnet1.5.0-py3.6 \\\n    ./launch-example.sh 4 8\n"})}),"\n",(0,s.jsx)(n.p,{children:"Notes\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--name"}),"\uff1aspecify the name of job, ",(0,s.jsx)(n.code,{children:"horovod-resnet50-v2-4x8-fluid"})," in this example"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--workers"}),"\uff1aspecify the number of nodes (workers) participating in training"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--gpus"}),"\uff1aspecify the number of GPUs used by each worker"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--working-dir"}),"\uff1aspecify working directory"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--data"}),"\uff1atell workers to mount a volume named ",(0,s.jsx)(n.code,{children:"imagenet"})," to the directory ",(0,s.jsx)(n.code,{children:"/data"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-e DATA_DIR"}),"\uff1aspecify the directory where dataset locates"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"./launch-example.sh 4 8"}),"\uff1arun shell script to launch training process"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Check whether the task is executed normally:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ arena get horovod-resnet50-v2-4x8-fluid -e\nSTATUS: RUNNING\nNAMESPACE: default\nPRIORITY: N/A\nTRAINING DURATION: 16s\n\nNAME                           STATUS   TRAINER  AGE  INSTANCE                                      NODE\nhorovod-resnet50-v2-4x8-fluid  RUNNING  MPIJOB   16s  horovod-resnet50-v2-4x8-fluid-launcher-czlfn  192.168.1.21\nhorovod-resnet50-v2-4x8-fluid  RUNNING  MPIJOB   16s  horovod-resnet50-v2-4x8-fluid-worker-0        192.168.1.16\nhorovod-resnet50-v2-4x8-fluid  RUNNING  MPIJOB   16s  horovod-resnet50-v2-4x8-fluid-worker-1        192.168.1.21\nhorovod-resnet50-v2-4x8-fluid  RUNNING  MPIJOB   16s  horovod-resnet50-v2-4x8-fluid-worker-2        192.168.1.25\nhorovod-resnet50-v2-4x8-fluid  RUNNING  MPIJOB   16s  horovod-resnet50-v2-4x8-fluid-worker-3        192.168.3.29\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you find that ",(0,s.jsx)(n.code,{children:"4"})," workers are in the ",(0,s.jsx)(n.code,{children:"RUNNING"})," state, congratulations!  It means that you have successfully started the training."]}),"\n",(0,s.jsx)(n.p,{children:"If you want to know where the training is going, please check the Arena log:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ arena logs --tail 100 -f horovod-resnet50-v2-4x8-fluid\n"})}),"\n",(0,s.jsx)(n.h2,{id:"clean-up",children:"Clean Up"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl delete -f dataset.yaml\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2172:(e,n,a)=>{a.d(n,{I:()=>o,M:()=>r});var s=a(1504);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);