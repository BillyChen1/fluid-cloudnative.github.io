"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[5740],{9112:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var s=t(7624),l=t(2172);const a={sidebar_label:"Set FUSE Clean Policy",sidebar_position:6},i="Set FUSE Clean Policy",d={id:"tutorials/advanced/set-fuse-clean-policy",title:"Set FUSE Clean Policy",description:"FUSE clean policy is set under the property spec.fuse.cleanPolicy of Runtime. There are 2 clean policies for FUSE Pod. OnRuntimeDeleted means that the FUSE Pod is cleaned only when the cache runtime is deleted, and OnDemand means that when the FUSE Pod is not used by any application Pod, the FUSE Pod will be cleaned.",source:"@site/docs/tutorials/advanced/set-fuse-clean-policy.md",sourceDirName:"tutorials/advanced",slug:"/tutorials/advanced/set-fuse-clean-policy",permalink:"/docs/next/tutorials/advanced/set-fuse-clean-policy",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/docs/tutorials/advanced/set-fuse-clean-policy.md",tags:[],version:"current",lastUpdatedBy:"chenqiming",lastUpdatedAt:1712563663,formattedLastUpdatedAt:"Apr 8, 2024",sidebarPosition:6,frontMatter:{sidebar_label:"Set FUSE Clean Policy",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Pod Scheduling Base on Runtime Tiered Locality",permalink:"/docs/next/tutorials/advanced/pod-scheduling-base-on-runtime-tiered-locality"},next:{title:"How to Enable FUSE Auto-recovery",permalink:"/docs/next/tutorials/advanced/how-to-enable-fuse-auto-recovery"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Demo",id:"demo",level:2}];function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,l.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"set-fuse-clean-policy",children:"Set FUSE Clean Policy"}),"\n",(0,s.jsxs)(n.p,{children:["FUSE clean policy is set under the property ",(0,s.jsx)(n.code,{children:"spec.fuse.cleanPolicy"})," of ",(0,s.jsx)(n.code,{children:"Runtime"}),". There are 2 clean policies for FUSE Pod. ",(0,s.jsx)(n.code,{children:"OnRuntimeDeleted"})," means that the FUSE Pod is cleaned only when the cache runtime is deleted, and ",(0,s.jsx)(n.code,{children:"OnDemand"})," means that when the FUSE Pod is not used by any application Pod, the FUSE Pod will be cleaned.\nBy default, the cleanup policy for FUSE Pod is ",(0,s.jsx)(n.code,{children:"OnRuntimeDeleted"})]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.p,{children:["Before running this example, please refer to the ",(0,s.jsx)(n.a,{href:"/docs/get-started/installation",children:"Installation Documentation"})," to complete the installation, and check that each Fluid component is normal run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod -n fluid-system\nNAME                                   READY   STATUS    RESTARTS   AGE\ncsi-nodeplugin-fluid-5w7gk             2/2     Running   0          4m50s\ncsi-nodeplugin-fluid-h6wm7             2/2     Running   0          4m50s\ncsi-nodeplugin-fluid-nlkc4             2/2     Running   0          4m50s\ndataset-controller-74554dfc4f-gwxmb    1/1     Running   0          4m50s\nfluid-webhook-5c77b8b4f9-xgpv8         1/1     Running   0          4m50s\nfluidapp-controller-7bb7bdb5d7-k7hdc   1/1     Running   0          4m50s\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Typically, you will see a pod named ",(0,s.jsx)(n.code,{children:"dataset-controller"}),", a pod named ",(0,s.jsx)(n.code,{children:"alluxioruntime-controller"}),", and several pods named ",(0,s.jsx)(n.code,{children:"csi-nodeplugin"})," running. Among them, the number of ",(0,s.jsx)(n.code,{children:"csi-nodeplugin"})," these pods depends on the number of nodes in your Kubernetes cluster."]}),"\n",(0,s.jsx)(n.h2,{id:"demo",children:"Demo"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Check ",(0,s.jsx)(n.code,{children:"DataSet"})," and ",(0,s.jsx)(n.code,{children:"AlluxioRuntime"})," Objects to be Created"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ cat dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hbase\nspec:\n  mounts:\n    - mountPoint: https://mirrors.bit.edu.cn/apache/hbase/stable/\n      name: hbase\n---\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: hbase\nspec:\n  replicas: 2\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\n  fuse:\n    cleanPolicy: OnDemand\n'})}),"\n",(0,s.jsxs)(n.p,{children:["We set FUSE's cleanup policy to ",(0,s.jsx)(n.code,{children:"OnDemand"}),". When the FUSE Pod is not used by any application Pod, the FUSE Pod will be cleaned."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Create ",(0,s.jsx)(n.code,{children:"DataSet"})," and ",(0,s.jsx)(n.code,{children:"AlluxioRuntime"})," Objects"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl craete -f dataset.yaml\ndataset.data.fluid.io/hbase created\nalluxioruntime.data.fluid.io/hbase created\n$ kubectl get pods\nNAME             READY   STATUS    RESTARTS   AGE\nhbase-master-0   2/2     Running   0          2m32s\nhbase-worker-0   2/2     Running   0          2m3s\nhbase-worker-1   2/2     Running   0          2m2s\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Create Application Pod"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ cat nginx.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      volumeMounts:\n        - mountPath: /data\n          name: hbase-vol\n  volumes:\n    - name: hbase-vol\n      persistentVolumeClaim:\n        claimName: hbase\n$ kubectl create -f nginx.yaml\npod/nginx created\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Check Pods"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pods\nNAME               READY   STATUS    RESTARTS   AGE\nhbase-fuse-4ncs2   1/1     Running   0          85s\nhbase-master-0     2/2     Running   0          4m31s\nhbase-worker-0     2/2     Running   0          4m2s\nhbase-worker-1     2/2     Running   0          4m1s\nnginx              1/1     Running   0          85s\n"})}),"\n",(0,s.jsx)(n.p,{children:"After creating the application Pod, we find that the FUSE Pod is successfully created."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Delete Application Pod"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ kubectl delete -f nginx.yaml\npod "nginx" deleted\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Check Pods Again"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pods\nNAME             READY   STATUS    RESTARTS   AGE\nhbase-master-0   2/2     Running   0          5m\nhbase-worker-0   2/2     Running   0          4m31s\nhbase-worker-1   2/2     Running   0          4m30s\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that the FUSE clean policy is set to ",(0,s.jsx)(n.code,{children:"OnDemand"}),". After the application Pod is deleted, the FUSE Pod is no longer used by it, so the FUSE Pod is cleaned."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Set ",(0,s.jsx)(n.code,{children:"cleanPolicy"})," to  ",(0,s.jsx)(n.code,{children:"OnRuntimeDeleted"})]})}),"\n",(0,s.jsxs)(n.p,{children:["Set the property ",(0,s.jsx)(n.code,{children:"cleanPolicy"})," of ",(0,s.jsx)(n.code,{children:"AlluxioRuntime"})," to ",(0,s.jsx)(n.code,{children:"OnRuntimeDeleted"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ cat dataset.yaml\n...\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: hbase\nspec:\n  replicas: 2\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\n  fuse:\n    cleanPolicy: OnRuntimeDeleted\n$ kubectl apply -f dataset.yaml\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Create Application Pod Again"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f nginx.yaml\npod/nginx created\n$ kubectl get pod\nNAME               READY   STATUS    RESTARTS   AGE\nhbase-fuse-bl9w6   1/1     Running   0          7s\nhbase-master-0     2/2     Running   0          12m\nhbase-worker-0     2/2     Running   0          11m\nhbase-worker-1     2/2     Running   0          11m\nnginx              1/1     Running   0          7s\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Delete Application Pod"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ kubectl delete -f nginx.yaml\npod "nginx" deleted\n$ kubectl get pod\nNAME               READY   STATUS    RESTARTS   AGE\nhbase-fuse-bl9w6   1/1     Running   0          92s\nhbase-master-0     2/2     Running   0          13m\nhbase-worker-0     2/2     Running   0          13m\nhbase-worker-1     2/2     Running   0          12m\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Since ",(0,s.jsx)(n.code,{children:"cleanPolicy"})," was set to ",(0,s.jsx)(n.code,{children:"OnRuntimeDeleted"}),", after deleting the application pod, we found that the FUSE pod was not cleaned."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Delete ",(0,s.jsx)(n.code,{children:"AlluxioRuntime"})]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ kubectl delete alluxioruntime hbase\nalluxioruntime.data.fluid.io "hbase" deleted\n$ kubectl get pod\nNo resources found in default namespace.\n$ kubectl get alluxioruntime\nNo resources found in default namespace.\n'})}),"\n",(0,s.jsxs)(n.p,{children:["FUSE Pods are also cleaned after removing ",(0,s.jsx)(n.code,{children:"AlluxioRuntime"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Clean up the Environment"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ kubectl delete dataset hbase\ndataset.data.fluid.io "hbase" deleted\n'})})]})}function u(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>d,M:()=>i});var s=t(1504);const l={},a=s.createContext(l);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);