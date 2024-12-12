"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[9808],{3548:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var i=t(7624),a=t(2172);const o={sidebar_label:"Pod Scheduling Optimization",sidebar_position:4},s="Pod Scheduling Optimization",d={id:"tutorials/advanced/pod-scheduling-optimization",title:"Pod Scheduling Optimization",description:"To help users better use Fluid, we provide a series of scheduling plugins. By automatically injecting affinity-related information for Pods, we optimize the scheduling results of Pods and improve the overall efficiency of cluster usage.",source:"@site/versioned_docs/version-v0.9/tutorials/advanced/pod-scheduling-optimization.md",sourceDirName:"tutorials/advanced",slug:"/tutorials/advanced/pod-scheduling-optimization",permalink:"/zh/docs/v0.9/tutorials/advanced/pod-scheduling-optimization",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v0.9/tutorials/advanced/pod-scheduling-optimization.md",tags:[],version:"v0.9",lastUpdatedBy:"chenqiming",lastUpdatedAt:1714041983,formattedLastUpdatedAt:"2024\u5e744\u670825\u65e5",sidebarPosition:4,frontMatter:{sidebar_label:"Pod Scheduling Optimization",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Alluxio TieredStore Configuration",permalink:"/zh/docs/v0.9/tutorials/advanced/alluxio-tieredstore-configuration"},next:{title:"Pod Scheduling Base on Runtime Tiered Locality",permalink:"/zh/docs/v0.9/tutorials/advanced/pod-scheduling-base-on-runtime-tiered-locality"}},l={},r=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Running Demo 1: Create a Pod without a mounted dataset, it will be scheduled to a node as far away from the dataset as possible",id:"running-demo-1-create-a-pod-without-a-mounted-dataset-it-will-be-scheduled-to-a-node-as-far-away-from-the-dataset-as-possible",level:2},{value:"Running Demo 2: Create a Pod with mounted dataset, which will try to schedule to the node where the mounted dataset exists",id:"running-demo-2-create-a-pod-with-mounted-dataset-which-will-try-to-schedule-to-the-node-where-the-mounted-dataset-exists",level:2},{value:"Running Demo 3: Create a Pod with mounted dataset, and schedule pod to the nodes with mounted dataset through specifying Pod Label",id:"running-demo-3-create-a-pod-with-mounted-dataset-and-schedule-pod-to-the-nodes-with-mounted-dataset-through-specifying-pod-label",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"pod-scheduling-optimization",children:"Pod Scheduling Optimization"}),"\n",(0,i.jsx)(n.p,{children:"To help users better use Fluid, we provide a series of scheduling plugins. By automatically injecting affinity-related information for Pods, we optimize the scheduling results of Pods and improve the overall efficiency of cluster usage."}),"\n",(0,i.jsx)(n.p,{children:"Specifically, Fluid, combined with Pod scheduling policies based on datasets layout, can achieve the following functions by injecting scheduling information into Pods through the webhook mechanism."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Support K8s native scheduler, as well as Volcano, Yunikorn, etc. to achieve Pod data affinity scheduling"}),"\n",(0,i.jsx)(n.li,{children:"Scheduling Pods to nodes with data caching capability first"}),"\n",(0,i.jsx)(n.li,{children:"Scheduling Pods forcibly to nodes with data caching capability by specifying the Pod Label"}),"\n",(0,i.jsx)(n.li,{children:"When Pods do not use data sets, they can avoid scheduling to nodes with cache as much as possible"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"The version of k8s you are using needs to support admissionregistration.k8s.io/v1 (Kubernetes version > 1.16 )\nEnabling allowed controllers needs to be configured by passing a flag to the Kubernetes API server. Make sure that your cluster is properly configured."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"--enable-admission-plugins=MutatingAdmissionWebhook\n"})}),"\n",(0,i.jsx)(n.p,{children:"Note that if your cluster has been previously configured with other allowed controllers, you only need to add the MutatingAdmissionWebhook parameter."}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Check all nodes"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl get nodes\nNAME                      STATUS   ROLES    AGE   VERSION\nnode.172.16.0.16   Ready    <none>   16d   v1.20.4-aliyun.1\nnode.172.16.1.84   Ready    <none>   16d   v1.20.4-aliyun.1\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Check the Dataset resource object to be created"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'$ cat<<EOF >dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hbase\nspec:\n  mounts:\n    - mountPoint: https://mirrors.tuna.tsinghua.edu.cn/apache/hbase/stable/\n      name: hbase\n---\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: hbase\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\nEOF\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Create Dataset resource objects"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f dataset-global.yaml\ndataset.data.fluid.io/hbase created\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This configuration file fragment contains a lot of Alluxio-related configuration information that will be used by Fluid to start an Alluxio instance.\nThe ",(0,i.jsx)(n.code,{children:"spec.replicas"})," property in the above configuration fragment is set to 1, which indicates that Fluid will start an Alluxio instance with one Alluxio Master and one Alluxio Worker."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Create AlluxioRuntime resources and check status"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f runtime.yaml\nalluxioruntime.data.fluid.io/hbase created\n\n$  kubectl get po -owide\nNAME                 READY   STATUS    RESTARTS   AGE   IP             NODE                      NOMINATED NODE   READINESS GATES\nhbase-master-0       2/2     Running   0          11m   172.16.0.16    node.172.16.0.16   <none>           <none>\nhbase-worker-0       2/2     Running   0          10m   172.16.1.84    node.172.16.1.84   <none>           <none>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here you can see that there is an Alluxio Worker successfully started and running on node 172.16.1.84."}),"\n",(0,i.jsx)(n.h2,{id:"running-demo-1-create-a-pod-without-a-mounted-dataset-it-will-be-scheduled-to-a-node-as-far-away-from-the-dataset-as-possible",children:"Running Demo 1: Create a Pod without a mounted dataset, it will be scheduled to a node as far away from the dataset as possible"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Create a Pod"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ cat<<EOF >nginx-1.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-1\nspec:\n  containers:\n    - name: nginx-1\n      image: nginx\n      volumeMounts:\n        - mountPath: /data\n          name: hbase-vol\n  volumes:\n    - name: hbase-vol\n      persistentVolumeClaim:\n        claimName: hbase\nEOF\n$ kubectl create -f nginx-1.yaml\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Check the Pod"})}),"\n",(0,i.jsx)(n.p,{children:"Checking the yaml file of Pod, shows that the following affinity constraint information has been injected:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"spec:\n  affinity:\n    nodeAffinity:\n      preferredDuringSchedulingIgnoredDuringExecution:\n        - preference:\n            matchExpressions:\n              - key: fluid.io/dataset-num\n                operator: DoesNotExist\n          weight: 100\n"})}),"\n",(0,i.jsx)(n.p,{children:"As affected by affinity, the Pod is scheduled to the node.172.16.0.16 where there is no cache (i.e. no Alluxio Worker Pod running):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pods nginx-1 -o  custom-columns=NAME:metadata.name,NODE:.spec.nodeName\nNAME    NODE\nnginx-1   node.172.16.0.16\n"})}),"\n",(0,i.jsx)(n.h2,{id:"running-demo-2-create-a-pod-with-mounted-dataset-which-will-try-to-schedule-to-the-node-where-the-mounted-dataset-exists",children:"Running Demo 2: Create a Pod with mounted dataset, which will try to schedule to the node where the mounted dataset exists"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Create a Pod"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ cat<<EOF >nginx-2.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-2\nspec:\n  containers:\n    - name: nginx-2\n      image: nginx\n      volumeMounts:\n        - mountPath: /data\n          name: hbase-vol\n  volumes:\n    - name: hbase-vol\n      persistentVolumeClaim:\n        claimName: hbase\nEOF\n$ kubectl create -f nginx-2.yaml\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Check the Pod"})}),"\n",(0,i.jsx)(n.p,{children:"Checking the yaml file of Pod, shows that the following information has been injected:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'spec:\n  affinity:\n    nodeAffinity:\n      preferredDuringSchedulingIgnoredDuringExecution:\n      - preference:\n          matchExpressions:\n          - key: fluid.io/s-default-hbase\n            operator: In\n            values:\n            - "true"\n        weight: 100\n'})}),"\n",(0,i.jsx)(n.p,{children:"Through the Webhook mechanism, the application Pod is injected with preferred affinity to the cache worker."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pods nginx-2 -o  custom-columns=NAME:metadata.name,NODE:.spec.nodeName\nNAME    NODE\nnginx-1   node.172.16.1.84\n"})}),"\n",(0,i.jsx)(n.p,{children:"From the results, we can see that the pod is scheduled to the node with the data cache (i.e., running the Alluxio Worker Pod)."}),"\n",(0,i.jsx)(n.h2,{id:"running-demo-3-create-a-pod-with-mounted-dataset-and-schedule-pod-to-the-nodes-with-mounted-dataset-through-specifying-pod-label",children:"Running Demo 3: Create a Pod with mounted dataset, and schedule pod to the nodes with mounted dataset through specifying Pod Label"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Create a Pod"})}),"\n",(0,i.jsxs)(n.p,{children:["The Label should be specified in metadata (in format ",(0,i.jsx)(n.code,{children:"fluid.io/dataset.{dataset_name}.sched: required"}),"). Such as ",(0,i.jsx)(n.code,{children:"fluid.io/dataset.hbase.sched: required"}),", which indicates that this pod need to be scheduled to the node with dataset hbase cache."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'$ cat<<EOF >nginx-3.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-3\n  labels:\n    fuse.serverful.fluid.io/inject: "true"\n    fluid.io/dataset.hbase.sched: required\nspec:\n  containers:\n    - name: nginx-3\n      image: nginx\n      volumeMounts:\n        - mountPath: /data\n          name: hbase-vol\n  volumes:\n    - name: hbase-vol\n      persistentVolumeClaim:\n        claimName: hbase\nEOF\n$ kubectl create -f nginx-3.yaml\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Check the Pod"})}),"\n",(0,i.jsx)(n.p,{children:"Checking the yaml file of Pod, shows that the following information has been injected:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'spec:\n  affinity:\n    nodeAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n        nodeSelectorTerms:\n        - matchExpressions:\n          - key: fluid.io/s-default-hbase\n            operator: In\n            values:\n            - "true"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Through the Webhook mechanism, the application Pod is injected with preferred affinity to the cache worker."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pods nginx-3 -o  custom-columns=NAME:metadata.name,NODE:.spec.nodeName\nNAME    NODE\nnginx-3   node.172.16.1.84\n"})}),"\n",(0,i.jsx)(n.p,{children:"From the results, we can see that the pod is scheduled to the node with the data cache (i.e., running the Alluxio Worker Pod)."})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>d,M:()=>s});var i=t(1504);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);