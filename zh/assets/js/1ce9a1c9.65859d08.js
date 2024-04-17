"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[6576],{6596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=t(7624),i=t(2172);const a={sidebar_label:"Quick Start",sidebar_position:1},l="Quick Start",r={id:"get-started/quick-start",title:"Quick Start",description:"This document mainly describes how to deploy Fluid with Helm, and use Fluid to create a dataset and speed up your application.",source:"@site/versioned_docs/version-v1.0.0/get-started/quick-start.md",sourceDirName:"get-started",slug:"/get-started/quick-start",permalink:"/zh/docs/get-started/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v1.0.0/get-started/quick-start.md",tags:[],version:"v1.0.0",lastUpdatedBy:"chenqiming",lastUpdatedAt:1713345055,formattedLastUpdatedAt:"2024\u5e744\u670817\u65e5",sidebarPosition:1,frontMatter:{sidebar_label:"Quick Start",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Architecture and Concepts",permalink:"/zh/docs/core-concepts/architecture-and-concepts"},next:{title:"Installation",permalink:"/zh/docs/get-started/installation"}},c={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Deploy Fluid",id:"deploy-fluid",level:2},{value:"Create a Dataset",id:"create-a-dataset",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"quick-start",children:"Quick Start"}),"\n",(0,s.jsx)(n.p,{children:"This document mainly describes how to deploy Fluid with Helm, and use Fluid to create a dataset and speed up your application."}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Kubernetes 1.18+"}),"\n",(0,s.jsx)(n.p,{children:"If you don't have a Kubernetes now, we highly recommend you use a cloud Kubernetes service. Usually, with a few steps, you can get your own Kubernetes Cluster. Here's some of the certified cloud Kubernetes services:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://aws.amazon.com/eks/",children:"Amazon Elastic Kubernetes Service"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://cloud.google.com/kubernetes-engine/",children:"Google Kubernetes Engine"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/aks/tutorial-kubernetes-deploy-cluster",children:"Azure Kubernetes Service"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.aliyun.com/product/kubernetes",children:"Aliyun Container Service for Kubernetes"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Note: While convenient, Minikube is not recommended to deploy Fluid due to its limited functionalities."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Kubectl 1.18+"}),"\n",(0,s.jsx)(n.p,{children:"Please make sure your kubectl is properly configured to interact with your Kubernetes environment."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://helm.sh/docs/intro/install/",children:"Helm 3"})}),"\n",(0,s.jsx)(n.p,{children:"In the following steps, we'll deploy Fluid with Helm 3"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deploy-fluid",children:"Deploy Fluid"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create namespace for Fluid"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl create ns fluid-system\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add Fluid repository to Helm repos and keep it up-to-date"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ helm repo add fluid https://fluid-cloudnative.github.io/charts\n$ helm repo update\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Deploy Fluid with Helm"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ helm install fluid fluid/fluid\nNAME: fluid\nLAST DEPLOYED: Tue Jul  7 11:22:07 2020\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check running status of Fluid"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get po -n fluid-system\nNAME                                         READY   STATUS    RESTARTS   AGE\nalluxioruntime-controller-64948b68c9-zzsx2   1/1     Running   0          108s\ncsi-nodeplugin-fluid-2mfcr                   2/2     Running   0          108s\ncsi-nodeplugin-fluid-l7lv6                   2/2     Running   0          108s\ndataset-controller-5465c4bbf9-5ds5p          1/1     Running   0          108s\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"create-a-dataset",children:"Create a Dataset"}),"\n",(0,s.jsxs)(n.p,{children:["Fluid provides cloud-native data acceleration and management capabilities, and use ",(0,s.jsx)(n.em,{children:"dataset"})," as a high-level abstraction to facilitate user management. Here we will show you how to create a dataset with Fluid."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a Dataset object through the CRD file, which describes the source of the dataset."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ cat<<EOF >dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: demo\nspec:\n  mounts:\n    - mountPoint: https://mirrors.bit.edu.cn/apache/spark/\n      name: spark\nEOF\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl create -f dataset.yaml\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create an ",(0,s.jsx)(n.code,{children:"AlluxioRuntime"})," CRD object to support the dataset we created. We use ",(0,s.jsx)(n.a,{href:"https://www.alluxio.io/",children:"Alluxio"})," as its runtime here."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ cat<<EOF >runtime.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: demo\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\nEOF\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Create ",(0,s.jsx)(n.em,{children:"Alluxio"})," Runtime with ",(0,s.jsx)(n.code,{children:"kubectl"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl create -f runtime.yaml  \n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Next, we create an application to access this dataset. Here we will access the same data multiple times and compare the time consumed by each access."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ cat<<EOF >app.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: demo-app\nspec:\n  containers:\n    - name: demo\n      image: nginx\n      volumeMounts:\n        - mountPath: /data\n          name: demo\n  volumes:\n    - name: demo\n      persistentVolumeClaim:\n        claimName: demo\nEOF\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Create Pod with ",(0,s.jsx)(n.code,{children:"kubectl"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f app.yaml\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Dive into the container to access data, the first access will take longer."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ kubectl exec -it demo-app -- bash\n$ du -sh /data/spark/spark-3.0.3/spark-3.0.3-bin-without-hadoop.tgz\n150M\t/data/spark/spark-3.0.3/spark-3.0.3-bin-without-hadoop.tgz\n$ time cp /data/spark/spark-3.0.3/spark-3.0.3-bin-without-hadoop.tgz /dev/null\nreal\t0m13.171s\nuser\t0m0.002s\nsys\t0m0.028s\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In order to avoid the influence of other factors like page cache, we will delete the previous container, create the same application, and try to access the same file. Since the file has been cached by alluxio at this time, you can see that it takes significantly less time now."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ kubectl delete -f app.yaml && kubectl create -f app.yaml\n$ kubectl exec -it demo-app -- bash\n$ time cp /data/spark/spark-3.0.3/spark-3.0.3-bin-without-hadoop.tgz /dev/null\nreal\t0m0.344s\nuser\t0m0.002s\nsys\t0m0.020s\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We've created a dataset and did some management in a very simple way. For more detail about Fluid, we provide several tutorial docs for you:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/tutorials/dataset-creation/accelerate-data-accessing-posix",children:"Speed Up Accessing Remote Files"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/tutorials/dataset-creation/cache-co-locality",children:"Cache Co-locality for Workload Scheduling"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/tutorials/advanced/machine-learning-workload",children:"Accelerate Machine Learning Training with Fluid"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>l});var s=t(1504);const i={},a=s.createContext(i);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);