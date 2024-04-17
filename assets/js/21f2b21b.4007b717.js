"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[5240],{4180:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var i=t(7624),s=t(2172);const r={sidebar_label:"Accelerate HostPath with Fluid",sidebar_position:1},a="Accelerate HostPath with Fluid",d={id:"tutorials/storage-acceleration/accelerate-hostPath-with-fluid",title:"Accelerate HostPath with Fluid",description:"Scenario: training ResNet50",source:"@site/docs/tutorials/storage-acceleration/accelerate-hostPath-with-fluid.md",sourceDirName:"tutorials/storage-acceleration",slug:"/tutorials/storage-acceleration/accelerate-hostPath-with-fluid",permalink:"/docs/next/tutorials/storage-acceleration/accelerate-hostPath-with-fluid",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/docs/tutorials/storage-acceleration/accelerate-hostPath-with-fluid.md",tags:[],version:"current",lastUpdatedBy:"ZhangXiaozheng",lastUpdatedAt:1712661563,formattedLastUpdatedAt:"Apr 9, 2024",sidebarPosition:1,frontMatter:{sidebar_label:"Accelerate HostPath with Fluid",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Set Access Mode",permalink:"/docs/next/tutorials/dataset-security/set-access-mode"},next:{title:"Accelerate PVC with Fluid",permalink:"/docs/next/tutorials/storage-acceleration/accelerate-pvc-with-fluid"}},l={},h=[{value:"Scenario: training ResNet50",id:"scenario-training-resnet50",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Hardware Configuration",id:"hardware-configuration",level:3},{value:"Software Configuration",id:"software-configuration",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Known Constraints",id:"known-constraints",level:2},{value:"Data Preparation",id:"data-preparation",level:2},{value:"NFS dawnbench",id:"nfs-dawnbench",level:2},{value:"Deploy Dataset",id:"deploy-dataset",level:3},{value:"Dawnbench",id:"dawnbench",level:3},{value:"Single machine with eight GPUs",id:"single-machine-with-eight-gpus",level:4},{value:"Four machines with eight GPUs",id:"four-machines-with-eight-gpus",level:4},{value:"Accelerate hostPath with Fluid",id:"accelerate-hostpath-with-fluid-1",level:2},{value:"Deploy Dataset",id:"deploy-dataset-1",level:3},{value:"Dawnbench",id:"dawnbench-1",level:3},{value:"Single machine with eight GPUs",id:"single-machine-with-eight-gpus-1",level:4},{value:"Four machines with eight GPUs",id:"four-machines-with-eight-gpus-1",level:4},{value:"Experiment Results",id:"experiment-results",level:2},{value:"horovod-1x8",id:"horovod-1x8",level:3},{value:"horovod-4x8",id:"horovod-4x8",level:3},{value:"Analysis",id:"analysis",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"accelerate-hostpath-with-fluid",children:"Accelerate HostPath with Fluid"}),"\n",(0,i.jsx)(n.h2,{id:"scenario-training-resnet50",children:"Scenario: training ResNet50"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Device\uff1a V100 x8"}),"\n",(0,i.jsx)(n.li,{children:"NFS Server\uff1a38037492dc-pol25.cn-shanghai.nas.aliyuncs.com"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.h3,{id:"hardware-configuration",children:"Hardware Configuration"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Cluster"}),(0,i.jsx)(n.th,{children:"Alibaba Cloud Kubernetes. v1.16.9-aliyun.1"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ECS Instance"}),(0,i.jsxs)(n.td,{children:["ECS specifications\uff1aecs.gn6v-c10g1.20xlarge",(0,i.jsx)("br",{}),"    CPU\uff1a82 cores"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Distributed Storage"}),(0,i.jsx)(n.td,{children:"NAS"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"software-configuration",children:"Software Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Software version: 0.18.1-tf1.14.0-torch1.2.0-mxnet1.5.0-py3.6"}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/fluid-cloudnative/fluid",children:"Fluid"})," (version >= 0.3.0)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/kubeflow/arena",children:"Arena"}),"\uff08version >= 0.4.0\uff09"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/horovod/horovod",children:"Horovod"})," (version=0.18.1)"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/tensorflow/benchmarks/tree/cnn_tf_v1.14_compatible",children:"Benchmark"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"known-constraints",children:"Known Constraints"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Implementing mounts via hostPath is not the recommended way, as it relies on mount point maintenance methods outside of Kubernetes, which are actually unreliable and can trigger data inconsistency issues."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"data-preparation",children:"Data Preparation"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Download the dataset"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ wget http://imagenet-tar.oss-cn-shanghai.aliyuncs.com/imagenet.tar.gz\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Extract the dataset"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ tar -I pigz -xvf imagenet.tar.gz\n"})}),"\n",(0,i.jsx)(n.h2,{id:"nfs-dawnbench",children:"NFS dawnbench"}),"\n",(0,i.jsx)(n.h3,{id:"deploy-dataset",children:"Deploy Dataset"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Mount the dataset on the NFS Server"}),"\n",(0,i.jsx)(n.li,{children:"Mount NFS to a host path"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ sudo mount -t nfs -o vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport <YOUR_NFS_SERVER>:<YOUR_PATH_TO_DATASET> /mnt/nfs-imagenet\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Check if NFS has been successfully mounted"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ mount | grep nfs\n<YOUR_NFS_SERVER>:<YOUR_PATH_TO_DATASET> on /mnt/nfs-imagenet type nfs (rw,relatime,vers=3,rsize=1048576,wsize=1048576,namlen=255,hard,nolock,noresvport,proto=tcp,timeo=600,retrans=2,sec=sys,mountaddr=192.168.1.28,mountvers=3,mountport=2049,mountproto=tcp,local_lock=all,addr=192.168.1.28)\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NOTE:"})," ",(0,i.jsx)(n.br,{}),"\n","Modify ",(0,i.jsx)(n.code,{children:"<YOUR_NFS_SERVER>"})," and ",(0,i.jsx)(n.code,{children:"<YOUR_PATH_TO_DATASET>"})," in the above commands to your nfs server address and mount path."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"dawnbench",children:"Dawnbench"}),"\n",(0,i.jsx)(n.h4,{id:"single-machine-with-eight-gpus",children:"Single machine with eight GPUs"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"arena submit mpijob \\\n--name horovod-v2-nfs-hostpath-1x8-093000 \\\n--gpus=8 \\\n--workers=1 \\\n--working-dir=/horovod-demo/tensorflow-demo/ \\\n--data-dir /mnt/nfs-imagenet:/data \\\n-e DATA_DIR=/data/imagenet \\\n-e num_batch=1000 \\\n-e datasets_num_private_threads=8 \\\n--image=registry.cn-hangzhou.aliyuncs.com/tensorflow-samples/horovod-benchmark-dawnbench-v2:0.18.1-tf1.14.0-torch1.2.0-mxnet1.5.0-py3.6 \\\n./launch-example.sh 1 8\n"})}),"\n",(0,i.jsx)(n.h4,{id:"four-machines-with-eight-gpus",children:"Four machines with eight GPUs"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"arena submit mpi \\\n--name horovod-v2-nfs-hostpath-4x8-092921 \\\n--gpus=8 \\\n--workers=4 \\ \n--working-dir=/horovod-demo/tensorflow-demo/ \\ \n--data-dir /mnt/nfs-imagenet:/data \\\n-e DATA_DIR=/data/imagenet \\\n-e num_batch=1000 \\\n-e datasets_num_private_threads=8 \\\n--image=registry.cn-hangzhou.aliyuncs.com/tensorflow-samples/horovod-benchmark-dawnbench-v2:0.18.1-tf1.14.0-torch1.2.0-mxnet1.5.0-py3.6 \\\n./launch-example.sh 4 8\n"})}),"\n",(0,i.jsx)(n.h2,{id:"accelerate-hostpath-with-fluid-1",children:"Accelerate hostPath with Fluid"}),"\n",(0,i.jsx)(n.h3,{id:"deploy-dataset-1",children:"Deploy Dataset"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Follow the previous steps to complete NFS mounting"}),"\n",(0,i.jsx)(n.li,{children:"Deploy Fluid to accelerate hostPath mounted NFS"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'$ cat <<EOF > dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: imagenet\nspec:\n  mounts:\n  - mountPoint: local:///mnt/nfs-imagenet\n    name: imagenet\n  nodeAffinity:\n    required:\n      nodeSelectorTerms:\n        - matchExpressions:\n            - key: aliyun.accelerator/nvidia_name\n              operator: In\n              values:\n                - Tesla-V100-SXM2-16GB\n---\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: imagenet\nspec:\n  replicas: 4\n  data:\n    replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /alluxio/ram \n        quota: 50Gi\n        high: "0.99"\n        low: "0.8"\nEOF\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NOTE:"}),"\\"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mounts.mountPoint"})," specifies the host path to be mounted by the ",(0,i.jsx)(n.code,{children:"local://"})," prefix (e.g. ",(0,i.jsx)(n.code,{children:"/mnt/nfs-imagenet"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Keep the number of workers for ",(0,i.jsx)(n.code,{children:"spec.replicas"})," and dawnbench consistent. For example: 1 for a single machine with eight GPUs, 4 for four machines with eight GPUs"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"nodeSelectorTerms"})," is to restrict the deployment of the dataset to machines with V100, which should be adjusted according to the experimental environment."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ kubectl create -f dataset.yaml\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Check the deployment"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ kubectl get pv,pvc\nNAME                        CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM              STORAGECLASS   REASON   AGE\npersistentvolume/imagenet   100Gi      RWX            Retain           Bound    default/imagenet                           3h28m\n\nNAME                             STATUS   VOLUME     CAPACITY   ACCESS MODES   STORAGECLASS   AGE\npersistentvolumeclaim/imagenet   Bound    imagenet   100Gi      RWX                           3h28m\n"})}),"\n",(0,i.jsx)(n.h3,{id:"dawnbench-1",children:"Dawnbench"}),"\n",(0,i.jsx)(n.h4,{id:"single-machine-with-eight-gpus-1",children:"Single machine with eight GPUs"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"arena submit mpi \\\n--name horovod-v2-nfs-fluid-1x8-093009 \\\n--gpus=8 \\\n--workers=1 \\\n--working-dir=/horovod-demo/tensorflow-demo/ \\\n--data imagenet:/data \\\n-e DATA_DIR=/data/imagenet/imagenet \\\n-e num_batch=1000 \\\n-e datasets_num_private_threads=8 \\\n--image=registry.cn-hangzhou.aliyuncs.com/tensorflow-samples/horovod-benchmark-dawnbench-v2:0.18.1-tf1.14.0-torch1.2.0-mxnet1.5.0-py3.6 \\\n./launch-example.sh 1 8\n"})}),"\n",(0,i.jsx)(n.h4,{id:"four-machines-with-eight-gpus-1",children:"Four machines with eight GPUs"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"arena submit mpi \\\n--name horovod-v2-nfs-fluid-4x8-092910 \\\n--gpus=8 \\\n--workers=4 \\\n--working-dir=/horovod-demo/tensorflow-demo/ \\\n--data imagenet:/data \\\n-e DATA_DIR=/data/imagenet/imagenet \\\n-e num_batch=1000 \\\n-e datasets_num_private_threads=8 \\\n--image=registry.cn-hangzhou.aliyuncs.com/tensorflow-samples/horovod-benchmark-dawnbench-v2:0.18.1-tf1.14.0-torch1.2.0-mxnet1.5.0-py3.6 \\\n./launch-example.sh 4 8\n"})}),"\n",(0,i.jsx)(n.h2,{id:"experiment-results",children:"Experiment Results"}),"\n",(0,i.jsx)(n.h3,{id:"horovod-1x8",children:"horovod-1x8"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"nfs-hostpath"}),(0,i.jsx)(n.th,{children:"fluid (cold)"}),(0,i.jsx)(n.th,{children:"fluid (warm)"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Training time"}),(0,i.jsx)(n.td,{children:"4h20m36s"}),(0,i.jsx)(n.td,{children:"4h21m56s"}),(0,i.jsx)(n.td,{children:"4h2m16s"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Speed at the 1000 step(images/second)"}),(0,i.jsx)(n.td,{children:"2426.4"}),(0,i.jsx)(n.td,{children:"2467.2"}),(0,i.jsx)(n.td,{children:"8959.7"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Speed at the last step(images/second)"}),(0,i.jsx)(n.td,{children:"8218.1"}),(0,i.jsx)(n.td,{children:"8219.8"}),(0,i.jsx)(n.td,{children:"8275.8"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"steps"}),(0,i.jsx)(n.td,{children:"56300"}),(0,i.jsx)(n.td,{children:"56300"}),(0,i.jsx)(n.td,{children:"56300"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Accuracy @ 5"}),(0,i.jsx)(n.td,{children:"0.9280"}),(0,i.jsx)(n.td,{children:"0.9288"}),(0,i.jsx)(n.td,{children:"0.9291"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"horovod-4x8",children:"horovod-4x8"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"nfs-hostpath"}),(0,i.jsx)(n.th,{children:"fluid (cold)"}),(0,i.jsx)(n.th,{children:"fluid (warm)"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Training time"}),(0,i.jsx)(n.td,{children:"2h9m21s"}),(0,i.jsx)(n.td,{children:"1h40m15s"}),(0,i.jsx)(n.td,{children:"1h29m55s"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Speed at the 1000 step(images/second)"}),(0,i.jsx)(n.td,{children:"3219.2"}),(0,i.jsx)(n.td,{children:"11067.2"}),(0,i.jsx)(n.td,{children:"21951.3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Speed at the last step(images/second)"}),(0,i.jsx)(n.td,{children:"15855.7"}),(0,i.jsx)(n.td,{children:"20964.4"}),(0,i.jsx)(n.td,{children:"21869.8"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"steps"}),(0,i.jsx)(n.td,{children:"14070"}),(0,i.jsx)(n.td,{children:"14070"}),(0,i.jsx)(n.td,{children:"14070"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Accuracy @ 5"}),(0,i.jsx)(n.td,{children:"0.9227"}),(0,i.jsx)(n.td,{children:"0.9232"}),(0,i.jsx)(n.td,{children:"0.9228"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"analysis",children:"Analysis"}),"\n",(0,i.jsxs)(n.p,{children:["From the test results, the Fluid acceleration on 1x8 has no obvious enhancement,\nwhile in the improvements of 4x8, the effect is very obvious.\nIn warm data scenario, the training time can be shortened ",(0,i.jsx)(n.strong,{children:"(129-89)/129 = 31 %"}),";\nIn cold data scenario, training time can be shortened ",(0,i.jsx)(n.strong,{children:"\uff08129-100\uff09/129 = 22 %"}),".\nThis is because NFS bandwidth became a bottleneck under 4x8;\nFluid based on Alluxio provides distributed cache data reading capability for P2P data."]})]})}function c(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>d,M:()=>a});var i=t(1504);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);