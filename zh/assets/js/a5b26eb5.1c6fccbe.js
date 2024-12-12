"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[2808],{8004:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=t(7624),o=t(2172);const a={sidebar_label:"How to Ensure the Completion of Serverless Tasks",sidebar_position:2},r="How to Ensure the Completion of Serverless Tasks",l={id:"tutorials/advanced/serverless/how-to-ensure-the-completion-of-serverless-tasks",title:"How to Ensure the Completion of Serverless Tasks",description:"Background",source:"@site/versioned_docs/version-v0.9/tutorials/advanced/serverless/how-to-ensure-the-completion-of-serverless-tasks.md",sourceDirName:"tutorials/advanced/serverless",slug:"/tutorials/advanced/serverless/how-to-ensure-the-completion-of-serverless-tasks",permalink:"/zh/docs/v0.9/tutorials/advanced/serverless/how-to-ensure-the-completion-of-serverless-tasks",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v0.9/tutorials/advanced/serverless/how-to-ensure-the-completion-of-serverless-tasks.md",tags:[],version:"v0.9",lastUpdatedBy:"chenqiming",lastUpdatedAt:1714041983,formattedLastUpdatedAt:"2024\u5e744\u670825\u65e5",sidebarPosition:2,frontMatter:{sidebar_label:"How to Ensure the Completion of Serverless Tasks",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to Run in Knative Environment",permalink:"/zh/docs/v0.9/tutorials/advanced/serverless/how-to-run-in-knative-environment"},next:{title:"Using Fluid on ARM64 Platform",permalink:"/zh/docs/v0.9/tutorials/advanced/using-fluid-on-arm64-platform"}},i={},d=[{value:"Background",id:"background",level:2},{value:"Installation",id:"installation",level:2},{value:"Demo",id:"demo",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"how-to-ensure-the-completion-of-serverless-tasks",children:"How to Ensure the Completion of Serverless Tasks"}),"\n",(0,s.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,s.jsx)(n.p,{children:"In the serverless scenario, Workload such as Job, when the user container of the Pod completes the task and exits, the\nFuse Sidecar can also actively exit.\nThis enables the Job Controller to correctly determine the completion status of the Pod. However, the fuse container\nitself does not have an exit mechanism, and the Fluid Application Controller will detect the pods with the fluid label\nin the cluster.\nAfter the user container exits, the fuse container is exited normally to reach the state where the job is completed."}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["You can download the latest Fluid installation package\nfrom ",(0,s.jsx)(n.a,{href:"https://github.com/fluid-cloudnative/fluid/releases",children:"Fluid Releases"}),".\nRefer to the ",(0,s.jsx)(n.a,{href:"/docs/get-started/installation",children:"Installation Documentation"})," to complete the installation. And check that the\ncomponents of Fluid are running normally (here takes JuiceFSRuntime as an example):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl -n fluid-system get po\nNAME                                         READY   STATUS    RESTARTS   AGE\ndataset-controller-86768b56fb-4pdts          1/1     Running   0          36s\nfluid-webhook-f77465869-zh8rv                1/1     Running   0          62s\nfluidapp-controller-597dbd77dd-jgsbp         1/1     Running   0          81s\njuicefsruntime-controller-65d54bb48f-vnzpj   1/1     Running   0          99s\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Typically, you will see a Pod named ",(0,s.jsx)(n.code,{children:"dataset-controller"}),", a Pod named ",(0,s.jsx)(n.code,{children:"juicefsruntime-controller"}),", a Pod\nnamed ",(0,s.jsx)(n.code,{children:"fluid-webhook"})," and a Pod named ",(0,s.jsx)(n.code,{children:"fluidapp-controller"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"demo",children:"Demo"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Create dataset and runtime"})}),"\n",(0,s.jsxs)(n.p,{children:["Create corresponding Runtime resources and Datasets with the same name for different types of runtimes. Take JuiceFSRuntime as an example here. For details, please refer to ",(0,s.jsx)(n.a,{href:"https://github.com/fluid-cloudnative/fluid/blob/master/docs/en/samples/juicefs_runtime.md",children:"Documentation"}),", as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get juicefsruntime\nNAME      WORKER PHASE   FUSE PHASE   AGE\njfsdemo   Ready          Ready        2m58s\n$ kubectl get dataset\nNAME      UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\njfsdemo   [Calculating]    N/A                       N/A                 Bound   2m55s\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Create Job"})}),"\n",(0,s.jsxs)(n.p,{children:["To use Fluid in a serverless scenario, you need to add the ",(0,s.jsx)(n.code,{children:'serverless.fluid.io/inject: "true"'})," label to the application pod. as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'$ cat<<EOF >sample.yaml\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: demo-app\nspec:\n  template:\n    metadata:\n      labels:\n        serverless.fluid.io/inject: "true"\n    spec:\n      containers:\n        - name: demo\n          image: busybox\n          args:\n            - -c\n            - echo $(date -u) >> /data/out.txt\n          command:\n            - /bin/sh\n          volumeMounts:\n            - mountPath: /data\n              name: demo\n      restartPolicy: Never\n      volumes:\n        - name: demo\n          persistentVolumeClaim:\n            claimName: jfsdemo\n  backoffLimit: 4\nEOF\n$ kubectl create -f sample.yaml\njob.batch/demo-app created\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Check if the Pod is completed"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get job\nNAME       COMPLETIONS   DURATION   AGE\ndemo-app   1/1           14s        46s\n$ kubectl get po\nNAME               READY   STATUS      RESTARTS      AGE\ndemo-app-wdfr8     0/2     Completed   0             25s\njfsdemo-worker-0   1/1     Running     0             14m\n"})}),"\n",(0,s.jsx)(n.p,{children:"It can be seen that the job has been completed, and its pod has two containers, both of which have been completed."})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>r});var s=t(1504);const o={},a=s.createContext(o);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);