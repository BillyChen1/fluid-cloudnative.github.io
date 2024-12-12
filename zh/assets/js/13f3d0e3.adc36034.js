"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[2436],{6152:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>r});var t=o(7624),s=o(2172);const i={sidebar_label:"Troubleshooting",sidebar_position:1},l="Troubleshooting",d={id:"troubleshooting-and-faq/troubleshooting",title:"Troubleshooting",description:"You may encounter various problems during installation or development in Fluid. Usually, logs are useful for debugging. But the Runtime containers where Fluid's underlying Distributed Cache Engine is running, are distributed on different hosts under distributed environment, so it's quite annoying to collect these logs one by one.",source:"@site/versioned_docs/version-v1.0/troubleshooting-and-faq/troubleshooting.md",sourceDirName:"troubleshooting-and-faq",slug:"/troubleshooting-and-faq/troubleshooting",permalink:"/zh/docs/troubleshooting-and-faq/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v1.0/troubleshooting-and-faq/troubleshooting.md",tags:[],version:"v1.0",lastUpdatedBy:"chenqiming",lastUpdatedAt:1714050288,formattedLastUpdatedAt:"2024\u5e744\u670825\u65e5",sidebarPosition:1,frontMatter:{sidebar_label:"Troubleshooting",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Zuoyebang's Case Study",permalink:"/zh/docs/case-study/zuoyebang-case-study"},next:{title:"FAQ",permalink:"/zh/docs/troubleshooting-and-faq/faq"}},a={},r=[{value:"Diagnose Fluid using Script",id:"diagnose-fluid-using-script",level:2},{value:"Debug Fuse Pod",id:"debug-fuse-pod",level:2},{value:"Check Application Pods Events",id:"check-application-pods-events",level:3},{value:"Get the information of the Fuse Pod corresponding to this application Pod",id:"get-the-information-of-the-fuse-pod-corresponding-to-this-application-pod",level:3},{value:"Troubleshoot the Fuse Pod",id:"troubleshoot-the-fuse-pod",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.p,{children:"You may encounter various problems during installation or development in Fluid. Usually, logs are useful for debugging. But the Runtime containers where Fluid's underlying Distributed Cache Engine is running, are distributed on different hosts under distributed environment, so it's quite annoying to collect these logs one by one.\nTo make this troublesome work easier, we provided a shell script to help users collect logs more quickly. This document describes how to use that script."}),"\n",(0,t.jsx)(n.p,{children:"Alluxio:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"wget https://raw.githubusercontent.com/fluid-cloudnative/fluid/master/tools/diagnose-fluid-alluxio.sh"})}),"\n",(0,t.jsx)(n.p,{children:"JuiceFS:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"wget https://raw.githubusercontent.com/fluid-cloudnative/fluid/master/tools/diagnose-fluid-juicefs.sh"})}),"\n",(0,t.jsx)(n.p,{children:"GooseFS:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"wget https://raw.githubusercontent.com/fluid-cloudnative/fluid/master/tools/diagnose-fluid-goosefs.sh"})}),"\n",(0,t.jsx)(n.p,{children:"JindoFS:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"wget https://raw.githubusercontent.com/fluid-cloudnative/fluid/master/tools/diagnose-fluid-jindo.sh"})}),"\n",(0,t.jsx)(n.h2,{id:"diagnose-fluid-using-script",children:"Diagnose Fluid using Script"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fluid provides different diagnostic scripts for different Runtimes, but the usage is the same. You can download the runtime diagnostic scripts you use:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# Alluxio:\nwget https://raw.githubusercontent.com/fluid-cloudnative/fluid/master/tools/diagnose-fluid-alluxio.sh\n# JuiceFS:\nwget https://raw.githubusercontent.com/fluid-cloudnative/fluid/master/tools/diagnose-fluid-juicefs.sh\n# GooseFS:\nwget https://raw.githubusercontent.com/fluid-cloudnative/fluid/master/tools/diagnose-fluid-goosefs.sh\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Make sure that script is executable, take ",(0,t.jsx)(n.code,{children:"diagnose-fluid-alluxio.sh"})," as an example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ chmod a+x diagnose-fluid-alluxio.sh\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Get help message"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ ./diagnose-fluid-alluxio.sh\nUsage:\n    ./diagnose-fluid-alluxio.sh COMMAND [OPTIONS]\nCOMMAND:\n    help\n        Display this help message.\n    collect\n        Collect pods logs of controller and runtime.\nOPTIONS:\n    -r, --name name\n        Set the name of runtime.\n    -n, --namespace name\n        Set the namespace of runtime.\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Collect logs"}),"\n",(0,t.jsx)(n.p,{children:"You can collect all the Runtime container logs for given name and namespace with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ ./diagnose-fluid-alluxio.sh collect --name cifar10 --namespace default\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NOTES"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:["As you can see from above command and help message, option ",(0,t.jsx)(n.code,{children:"--name"})," and ",(0,t.jsx)(n.code,{children:"--namespace"})," specified the name and namespace of Alluxio Runtime respectively."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All the logs will be packed in a package under execution path."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"debug-fuse-pod",children:"Debug Fuse Pod"}),"\n",(0,t.jsxs)(n.p,{children:["If the application Pod is in the ",(0,t.jsx)(n.code,{children:"ContainerCreating"})," or ",(0,t.jsx)(n.code,{children:"Pending"})," state for a long time and cannot be created due to the CSI Plugin issue, it is usually caused by the state of the Fuse Pod in the same node is not correct. You can follow these steps to troubleshoot."]}),"\n",(0,t.jsx)(n.h3,{id:"check-application-pods-events",children:"Check Application Pods Events"}),"\n",(0,t.jsx)(n.p,{children:"The first step in debugging Fuse is to check the application Pod information. Use the following command to check the current status and recent events of the Pod."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl describe pods ${POD_NAME}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Similar to the following information, but may not be identical, but all point to the reason for FailedMount."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl describe po nginx-0\n...\nEvents:\n  Type     Reason       Age   From               Message\n  ----     ------       ----  ----               -------\n  Normal   Scheduled    30s   default-scheduler  Successfully assigned default/nginx-0 to testnode\n  Warning  FailedMount  1s    kubelet            MountVolume.MountDevice failed for volume "default-shared-data" : rpc error: code = Unknown desc = fuse pod on node testnode is not ready\n'})}),"\n",(0,t.jsx)(n.h3,{id:"get-the-information-of-the-fuse-pod-corresponding-to-this-application-pod",children:"Get the information of the Fuse Pod corresponding to this application Pod"}),"\n",(0,t.jsx)(n.p,{children:"At this point you need to check the status of the Fuse Pod of this node, first use the following command to get the information of the node where the current application Pod is located, the output corresponding to the NODE column is the node where the application Pod is located."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl get pods ${POD_NAME} -owide\n"})}),"\n",(0,t.jsx)(n.p,{children:"For example, the following node where Fuse Pod is located is testnode:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl get pods  nginx-0 -owide\nNAME      READY   STATUS              RESTARTS   AGE   IP       NODE                       NOMINATED NODE   READINESS GATES\nnginx-0   0/1     ContainerCreating   0          17m   <none>   testnode   <none>           <none>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get this Fuse Pod's detail information:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:" kubectl get po -owide | grep ${NODE_NAME} | grep -i fuse\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the following example, the Fuse Pod is ",(0,t.jsx)(n.code,{children:"shared-data-alluxio-fuse-w6lcp"}),", and you can see that the Pod is in a failed state:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl get po -owide | grep testnode | grep fuse\nshared-data-alluxio-fuse-w6lcp   0/1     CrashLoopBackOff    10         29m   192.168.0.233   testnode   <none>           <none>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"troubleshoot-the-fuse-pod",children:"Troubleshoot the Fuse Pod"}),"\n",(0,t.jsxs)(n.p,{children:["You can follow the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/",children:"Kubernetes documentation"})," to troubleshoot the issue with this Fuse Pod."]})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2172:(e,n,o)=>{o.d(n,{I:()=>d,M:()=>l});var t=o(1504);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);