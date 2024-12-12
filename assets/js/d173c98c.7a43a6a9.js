"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[6387],{2392:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>i});var s=n(7624),t=n(2172);const l={sidebar_label:"Accelerate Data Access by MEM or SSD",sidebar_position:2},d="Accelerate Data Access by MEM or SSD",r={id:"tutorials/advanced/accelerate-data-access-by-mem-or-ssd",title:"Accelerate Data Access by MEM or SSD",description:"This tutorial introduces examples for accelerate data by memory or ssd.",source:"@site/versioned_docs/version-v1.0/tutorials/advanced/accelerate-data-access-by-mem-or-ssd.md",sourceDirName:"tutorials/advanced",slug:"/tutorials/advanced/accelerate-data-access-by-mem-or-ssd",permalink:"/docs/tutorials/advanced/accelerate-data-access-by-mem-or-ssd",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v1.0/tutorials/advanced/accelerate-data-access-by-mem-or-ssd.md",tags:[],version:"v1.0",lastUpdatedBy:"chenqiming",lastUpdatedAt:1714050288,formattedLastUpdatedAt:"Apr 25, 2024",sidebarPosition:2,frontMatter:{sidebar_label:"Accelerate Data Access by MEM or SSD",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Machine Learning Workload",permalink:"/docs/tutorials/advanced/machine-learning-workload"},next:{title:"Alluxio TieredStore Configuration",permalink:"/docs/tutorials/advanced/alluxio-tieredstore-configuration"}},c={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Example",id:"example",level:2},{value:"Accelerate data by Mem",id:"accelerate-data-by-mem",level:3},{value:"Accelerate data by SSD",id:"accelerate-data-by-ssd",level:3}];function o(e){const a={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"accelerate-data-access-by-mem-or-ssd",children:"Accelerate Data Access by MEM or SSD"}),"\n",(0,s.jsx)(a.p,{children:"This tutorial introduces examples for accelerate data by memory or ssd.\nFluid supports different speed up options such as memory, ssd, hdd and so on.\nWe give an example for accelerate data by mem or ssd using AlluxioRumtime."}),"\n",(0,s.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(a.p,{children:["Before everything we are going to do, please refer to ",(0,s.jsx)(a.a,{href:"/docs/get-started/installation",children:"Installation Guide"})," to install Fluid on your Kubernetes Cluster, and make sure all the components used by Fluid are ready like this:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ kubectl get pod -n fluid-system\nNAME                                        READY   STATUS    RESTARTS      AGE\nalluxioruntime-controller-7c54d9c76-vsrxg   1/1     Running   2 (17h ago)   18h\ncsi-nodeplugin-fluid-ggtjp                  2/2     Running   0             18h\ncsi-nodeplugin-fluid-krkbz                  2/2     Running   0             18h\ndataset-controller-bdfbccd8c-8zds6          1/1     Running   0             18h\nfluid-webhook-5984784577-m2xr4              1/1     Running   0             18h\nfluidapp-controller-564dcd469-8dggv         1/1     Running   0             18h\n"})}),"\n",(0,s.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"https://github.com/Alluxio/alluxio",children:"Alluxio"})," supports tieredstores to store cached data in different location, for example different directories with different storage types.\nFluid leverages tieredstores of Alluxio to achieve accelerating by mem or ssd."]}),"\n",(0,s.jsx)(a.h3,{id:"accelerate-data-by-mem",children:"Accelerate data by Mem"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Set Up Workspace"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ mkdir <any-path>/mem\n$ cd <any-path>/mem\n"})}),"\n",(0,s.jsxs)(a.p,{children:["Here is an typical example for accelerating data by ",(0,s.jsx)(a.strong,{children:"MEM"})," using AlluxioRuntime:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-yaml",children:"cat<<EOF >runtime-mem.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: hbase-mem\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\nEOF\n"})}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsxs)(a.p,{children:["Note that ",(0,s.jsx)(a.code,{children:"mediumtype"})," is ",(0,s.jsx)(a.code,{children:"MEM"}),"\uff0cwhich means accelerate data by mem.",(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.code,{children:"quota: 2Gi"})," specifies maximium cache capacity."]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"Create the corresponding dataset bound to the above AlluxioRuntime:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-yaml",children:"cat<<EOF >dataset-mem.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hbase-mem\nspec:\n  mounts:\n    - mountPoint: https://downloads.apache.org/hbase/stable/\n      name: hbase-mem\nEOF\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ kubectl create -f dataset-mem.yaml\n$ kubectl create -f runtime-mem.yaml\n"})}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"data warm-up"}),"\uff08more details about data warmup please refer to ",(0,s.jsx)(a.a,{href:"/docs/tutorials/dataset-operation/data-preloading",children:"data warmup"}),"\uff09\uff1a"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-yaml",children:"cat<<EOF >dataload-mem.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: DataLoad\nmetadata:\n  name: hbase-dataload\nspec:\n  dataset:\n    name: hbase-mem\n    namespace: default\nEOF\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ kubectl create -f dataload-mem.yaml\n"})}),"\n",(0,s.jsx)(a.p,{children:"Wait a moment and data has all been loaded into the cache\uff1a"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ kubectl get dataset\nNAME        UFS TOTAL SIZE   CACHED      CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nhbase-mem   569.12MiB        569.12MiB   2.00GiB          100.0%              Bound   5m15s\n"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Create a job to test accelerate data by mem\uff1a"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-yaml",children:'cat<<EOF >app-mem.yaml\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: fluid-mem-copy-test\n  labels:\n    fluid.io/dataset.hbase-mem.sched: required\nspec:\n  template:\n    spec:\n      restartPolicy: OnFailure\n      containers:\n        - name: busybox\n          image: busybox\n          command: ["/bin/sh"]\n          args: ["-c", "set -x; time cp -r /data/hbase-mem ./"]\n          volumeMounts:\n            - mountPath: /data\n              name: hbase-vol\n      volumes:\n        - name: hbase-vol\n          persistentVolumeClaim:\n            claimName: hbase-mem\nEOF\n'})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ kubectl apply -f app-mem.yaml\n"})}),"\n",(0,s.jsxs)(a.p,{children:["Under the hood, the test job executes a shell command ",(0,s.jsx)(a.code,{children:"time cp -r /data/hbase ./"})," and prints its result.\nWait for a while and make sure the job has completed. You can check its runnning status by:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ kubectl get pod\nNAME                              READY   STATUS      RESTARTS   AGE\nfluid-mem-copy-test-r5vqg         0/1     Completed   0          18s\n...\n------\n$ kubectl logs fluid-mem-copy-test-r5vqg\n+ time cp -r /data/hbase-mem ./\nreal    0m 4.22s\nuser    0m 0.00s\nsys     0m 1.34s\n"})}),"\n",(0,s.jsx)(a.p,{children:"The read option using memory accelerate uses 4.22s."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Clean up:"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ kubectl delete -f .\n"})}),"\n",(0,s.jsx)(a.h3,{id:"accelerate-data-by-ssd",children:"Accelerate data by SSD"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Set Up Workspace"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"$ mkdir <any-path>/ssd\n$ cd <any-path>/ssd\n"})}),"\n",(0,s.jsxs)(a.p,{children:["Here is an typical example for accelerating data by ",(0,s.jsx)(a.strong,{children:"SSD"})," using AlluxioRuntime:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-yaml",children:"cat<<EOF >runtime-ssd.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: hbase-ssd\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: SSD\n        path: /mnt/ssd\n        quota: 2Gi\nEOF\n"})}),"\n",(0,s.jsxs)(a.p,{children:["Note that ",(0,s.jsx)(a.code,{children:"mediumtype"})," is ",(0,s.jsx)(a.code,{children:"SSD"}),"\uff0cwhich means accelerate data by SSD."]}),"\n",(0,s.jsx)(a.p,{children:"Create the corresponding dataset bound to the above AlluxioRuntime:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-yaml",children:"cat<<EOF >dataset-ssd.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hbase-ssd\nspec:\n  mounts:\n    - mountPoint: https://downloads.apache.org/hbase/stable/\n      name: hbase-ssd\nEOF\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ kubectl create -f runtime-ssd.yaml\n$ kubectl create -f dataset-ssd.yaml\n"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"data warmup\uff1a"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-yaml",children:"cat<<EOF >dataload-ssd.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: DataLoad\nmetadata:\n  name: hbase-dataload\nspec:\n  dataset:\n    name: hbase-ssd\n    namespace: default\nEOF\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ kubectl create -f dataload-ssd.yaml\n"})}),"\n",(0,s.jsx)(a.p,{children:"Wait a moment and data has all been loaded into the cache\uff1a"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ kubectl get dataset\nNAME        UFS TOTAL SIZE   CACHED      CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nhbase-ssd   569.12MiB        569.12MiB   2.00GiB          100.0%              Bound   5m28s\n"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Create a job to test accelerate data by ssd:"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-yaml",children:'cat<<EOF >app-ssd.yaml\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: fluid-ssd-copy-test\n  labels:\n    fluid.io/dataset.hbase-ssd.sched: required\nspec:\n  template:\n    spec:\n      restartPolicy: OnFailure\n      containers:\n        - name: busybox\n          image: busybox\n          command: ["/bin/sh"]\n          args: ["-c", "set -x; time cp -r /data/hbase-ssd ./"]\n          volumeMounts:\n            - mountPath: /data\n              name: hbase-vol\n      volumes:\n        - name: hbase-vol\n          persistentVolumeClaim:\n            claimName: hbase-ssd\nEOF\n'})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ kubectl apply -f app-ssd.yaml\n"})}),"\n",(0,s.jsx)(a.p,{children:"Wait for a while and make sure the job has completed. You can check its runnning status by:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ kubectl get pod\nNAME                              READY   STATUS      RESTARTS   AGE\nfluid-ssd-copy-test-b4bwv         0/1     Completed   0          18s\n...\n\n$ kubectl logs fluid-ssd-copy-test-b4bwv\n+ time cp -r /data/hbase-ssd ./\nreal    0m 4.84s\nuser    0m 0.00s\nsys     0m 1.80s\n"})}),"\n",(0,s.jsx)(a.p,{children:"The read option using ssd accelerate uses 4.84s."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Clean up:"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ kubectl delete -f .\n"})}),"\n",(0,s.jsxs)(a.p,{children:["More detailed Configuration about AlluxioRuntime, please refer to ",(0,s.jsx)(a.a,{href:"/docs/tutorials/advanced/alluxio-tieredstore-configuration",children:"Alluxio Tieredstore Configuration"}),"."]})]})}function m(e={}){const{wrapper:a}={...(0,t.M)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},2172:(e,a,n)=>{n.d(a,{I:()=>r,M:()=>d});var s=n(1504);const t={},l=s.createContext(t);function d(e){const a=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(l.Provider,{value:a},e.children)}}}]);