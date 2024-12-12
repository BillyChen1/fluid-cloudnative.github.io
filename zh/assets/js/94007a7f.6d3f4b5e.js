"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[2160],{7708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(7624),r=t(2172);const i={sidebar_label:"Runtime Monitoring",sidebar_position:1},a="Runtime Monitoring",s={id:"operation-guide/runtime-monitoring",title:"Runtime Monitoring",description:"Note: Prometheus requires In-Cluster deployment.",source:"@site/versioned_docs/version-v0.9/operation-guide/runtime-monitoring.md",sourceDirName:"operation-guide",slug:"/operation-guide/runtime-monitoring",permalink:"/zh/docs/v0.9/operation-guide/runtime-monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v0.9/operation-guide/runtime-monitoring.md",tags:[],version:"v0.9",lastUpdatedBy:"chenqiming",lastUpdatedAt:1714041983,formattedLastUpdatedAt:"2024\u5e744\u670825\u65e5",sidebarPosition:1,frontMatter:{sidebar_label:"Runtime Monitoring",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Support Image Pull Secrets",permalink:"/zh/docs/v0.9/tutorials/advanced/support-image-pull-secrets"},next:{title:"Cache Runtime Auto Scaling",permalink:"/zh/docs/v0.9/operation-guide/cache-runtime-auto-scaling"}},l={},c=[{value:"1. Deploy or configure Prometheus",id:"1-deploy-or-configure-prometheus",level:2},{value:"2. Deploy Grafana in a quick try if you don&#39;t have installed.",id:"2-deploy-grafana-in-a-quick-try-if-you-dont-have-installed",level:2},{value:"3. Configure Grafana",id:"3-configure-grafana",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"runtime-monitoring",children:"Runtime Monitoring"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Note: Prometheus requires In-Cluster deployment."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"1-deploy-or-configure-prometheus",children:"1. Deploy or configure Prometheus"}),"\n",(0,o.jsxs)(n.p,{children:["If there is no Prometheus in your cluster, you can use the following example for a quick try. However, this method is not recommended for production use. Please follow the ",(0,o.jsx)(n.a,{href:"https://prometheus.io/docs/prometheus/latest/installation/",children:"Installation guide"})," to set up Prometheus correctly in your production environment."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ cd community\n$ kubectl apply -f integration/prometheus/prometheus.yaml\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you have Prometheus in your cluster, you can write the following configuration to the Prometheus configuration file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"scrape_configs:\n  - job_name: 'alluxio runtime'\n    metrics_path: /metrics/prometheus\n    kubernetes_sd_configs:\n      - role: endpoints\n    relabel_configs:\n    - source_labels: [__meta_kubernetes_service_label_monitor]\n      regex: alluxio_runtime_metrics\n      action: keep\n    - source_labels: [__meta_kubernetes_endpoint_port_name]\n      regex: web\n      action: keep\n    - source_labels: [__meta_kubernetes_namespace]\n      target_label: namespace\n      replacement: $1\n      action: replace\n    - source_labels: [__meta_kubernetes_service_label_release]\n      target_label: fluid_runtime\n      replacement: $1\n      action: replace\n    - source_labels: [__meta_kubernetes_endpoint_address_target_name]\n      target_label: pod\n      replacement: $1\n      action: replace\n"})}),"\n",(0,o.jsx)(n.h2,{id:"2-deploy-grafana-in-a-quick-try-if-you-dont-have-installed",children:"2. Deploy Grafana in a quick try if you don't have installed."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# docker deployment\n$ docker run -d \\\n  -p 3000:3000 \\\n  --name=grafana \\\n  --restart=always \\\n  --name grafana \\\n  grafana/grafana\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can install grafana in Kubernetes by following ",(0,o.jsx)(n.a,{href:"https://github.com/grafana/helm-charts/blob/main/charts/grafana/README.md",children:"docs"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"3-configure-grafana",children:"3. Configure Grafana"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Log-in Grafana\nFor docker deployment, visit ",(0,o.jsx)(n.code,{children:"http://$grafana-node-ip:3000"}),"; for In-CLuster deployment, visit ",(0,o.jsx)(n.code,{children:"http://$grafana-node-ip:NodePort"})," with default account and password ",(0,o.jsx)(n.code,{children:"admin:admin"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"# Check NodePort\n$ kubectl describe svc monitoring-grafana -n kube-system\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"First check the Prometheus svc port"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'$ kubectl get svc -n kube-system | grep prometheus-svc\nprometheus-svc             NodePort    10.100.0.144   <none>        9090:31245/TCP           22h\n$ kubectl describe svc prometheus-svc -n kube-system\nName:                     prometheus-svc\nNamespace:                kube-system\nLabels:                   kubernetes.io/name=Prometheus\n                          name=prometheus-svc\nAnnotations:              kubectl.kubernetes.io/last-applied-configuration:\n                            {"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"labels":{"kubernetes.io/name":"Prometheus","name":"prometheus-svc"},"nam...\nSelector:                 app=prometheus\nType:                     NodePort\nIP:                       10.100.0.144\nPort:                     prometheus  9090/TCP\nTargetPort:               9090/TCP\nNodePort:                 prometheus  31245/TCP\nEndpoints:                10.99.224.138:9090\nSession Affinity:         None\nExternal Traffic Policy:  Cluster\nEvents:                   <none>\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Configure Prometheus data source"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(2760).c+"",width:"1003",height:"929"})}),"\n",(0,o.jsxs)(n.p,{children:["Note: For Grafana In-Cluster deployment, the URL should be Service Endpoints; for docker deployment, the URL should be Prometheus deployment node-ip",":NodePort",".\nAfter importing, click Save & Test to show that the Data source is working."]}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"Import the template file"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Grafana chooses to import the template Json file ",(0,o.jsx)(n.code,{children:"fluid-prometheus-grafana-monitor.json"}),", which is located at ",(0,o.jsx)(n.code,{children:"integration/prometheus/fluid-prometheus-grafana-monitor.json"})]}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsx)(n.li,{children:"Start Fluid Job"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'$ cat<<EOF >dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: spark\nspec:\n  mounts:\n    - mountPoint: https://mirrors.bit.edu.cn/apache/spark/\n      name: spark\n---\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: spark\nspec:\n  replicas: 2\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 1Gi\n        high: "0.95"\n        low: "0.7"\n  # By default, after v0.5.0, aluxio runtime has Prometheous data turned on, if you need to turn it off you can actively set disablePrometheus: true\n  # disablePrometheus: false  \nEOF\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Note: Prometheous is turned on by default. If you need to turn off Prometheous, you can set disablePrometheus: true, default is false"}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{start:"6",children:["\n",(0,o.jsx)(n.li,{children:"Checking the monitor\nIn grafana HOME, you can find the view named Fluid-Prometheus-Grafana-Monitor, as follows:"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(6400).c+"",width:"1890",height:"931"})}),"\n",(0,o.jsx)(n.p,{children:"Note\uff1aUser of runtime correspond to Fluid Alluxio runtime user; fluid_runtime correspond to Fluid runtime name; namespace correspond to Fluid runtime namespace."})]})}function u(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},6400:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/grafana-monitor-d8848e1c3e30ea2c2a933467c967e970.jpg"},2760:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/grafana-prometheus-setting-edcb1eb034d167ac2e59abdfec166e57.jpg"},2172:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>a});var o=t(1504);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);