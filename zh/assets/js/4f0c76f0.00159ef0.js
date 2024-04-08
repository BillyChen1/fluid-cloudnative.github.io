"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[4264],{3972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(7624),s=n(2172);const o={sidebar_label:"FAQ",sidebar_position:2},i="FAQ",r={id:"troubleshooting-and-faq/faq",title:"FAQ",description:"1. Why do I fail to install fluid with Helm?",source:"@site/docs/troubleshooting-and-faq/faq.md",sourceDirName:"troubleshooting-and-faq",slug:"/troubleshooting-and-faq/faq",permalink:"/zh/docs/troubleshooting-and-faq/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/docs/troubleshooting-and-faq/faq.md",tags:[],version:"current",lastUpdatedBy:"chenqiming",lastUpdatedAt:1712561572,formattedLastUpdatedAt:"2024\u5e744\u67088\u65e5",sidebarPosition:2,frontMatter:{sidebar_label:"FAQ",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/zh/docs/troubleshooting-and-faq/troubleshooting"},next:{title:"Release",permalink:"/zh/docs/release-and-API-doc/release"}},l={},d=[{value:"1. Why do I fail to install fluid with Helm?",id:"1-why-do-i-fail-to-install-fluid-with-helm",level:2},{value:"2. Why can&#39;t I delete Runtime?",id:"2-why-cant-i-delete-runtime",level:2},{value:"3.Why do I run the example Speed up Accessing Remote Files, and I will encounter an input/output error when copying files for the first time. Similar to the following",id:"3why-do-i-run-the-example-speed-up-accessing-remote-files-and-i-will-encounter-an-inputoutput-error-when-copying-files-for-the-first-time-similar-to-the-following",level:2},{value:"4. Why does the <code>driver name fuse.csi.fluid.io not found in the list of registered CSI drivers</code> error appear when I create a task to mount the PVC created by Runtime?",id:"4-why-does-the-driver-name-fusecsifluidio-not-found-in-the-list-of-registered-csi-drivers-error-appear-when-i-create-a-task-to-mount-the-pvc-created-by-runtime",level:2},{value:"5. After upgrading fluid, why does the dataset created in the older version miss some fields compared to a newly created dataset, when querying them via <code>kubectl get</code> command\uff1f",id:"5-after-upgrading-fluid-why-does-the-dataset-created-in-the-older-version-miss-some-fields-compared-to-a-newly-created-dataset-when-querying-them-via-kubectl-get-command",level:2},{value:"6. Why do I run the example Nonroot access, and I  encounter mkdir permission denied error",id:"6-why-do-i-run-the-example-nonroot-access-and-i--encounter-mkdir-permission-denied-error",level:2},{value:"7. Why does Volume Attachment timeout occur when PVC is used in an application?",id:"7-why-does-volume-attachment-timeout-occur-when-pvc-is-used-in-an-application",level:2},{value:"8. After creating Dataset and AlluxioRuntime, When does alluxio master Pod enter into the CrashLoopBackOff state?",id:"8-after-creating-dataset-and-alluxioruntime-when-does-alluxio-master-pod-enter-into-the-crashloopbackoff-state",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"faq",children:"FAQ"}),"\n",(0,a.jsx)(t.h2,{id:"1-why-do-i-fail-to-install-fluid-with-helm",children:"1. Why do I fail to install fluid with Helm?"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Answer"}),": It is recommended to follow the ",(0,a.jsx)(t.a,{href:"/docs/get-started/installation",children:"Fluid installation document"})," to confirm whether the Fluid components are operating normally."]}),"\n",(0,a.jsxs)(t.p,{children:["The Fluid installation document is deployed based on ",(0,a.jsx)(t.code,{children:"Helm 3"})," as an example. If you use a version below ",(0,a.jsx)(t.code,{children:"Helm 3"})," to deploy Fluid and encounter the situation of ",(0,a.jsx)(t.code,{children:"CRD not starting normally"}),". This may be because ",(0,a.jsx)(t.code,{children:"Helm 3"})," and above versions will automatically install CRD during ",(0,a.jsx)(t.code,{children:"helm install"})," but the lower version of Helm will not. See the ",(0,a.jsx)(t.a,{href:"https://helm.sh/docs/chart_best_practices/custom_resource_definitions/",children:"Helm official documentation"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"In this case, you need to install CRD manually:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubectl create -f fluid/crds\n"})}),"\n",(0,a.jsx)(t.h2,{id:"2-why-cant-i-delete-runtime",children:"2. Why can't I delete Runtime?"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Answer"}),": Please check the related Pod running status and Runtime Events."]}),"\n",(0,a.jsx)(t.p,{children:"As long as any active Pod is still using the Volume created by Fluid, Fluid will not complete the delete operation."}),"\n",(0,a.jsxs)(t.p,{children:["The following commands can quickly find these active Pods. When using it, replace ",(0,a.jsx)(t.code,{children:"<dataset_name>"})," and ",(0,a.jsx)(t.code,{children:"<dataset_namespace>"})," with yours:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubectl describe pvc <dataset_name> -n <dataset_namespace> | \\\n\tawk '/^Mounted/ {flag=1}; /^Events/ {flag=0}; flag' | \\\n\tawk 'NR==1 {print $3}; NR!=1 {print $1}' | \\\n\txargs -I {} kubectl get po {} | \\\n\tgrep -E \"Running|Terminating|Pending\" | \\\n\tcut -d \" \" -f 1\n"})}),"\n",(0,a.jsxs)(t.h2,{id:"3why-do-i-run-the-example-speed-up-accessing-remote-files-and-i-will-encounter-an-inputoutput-error-when-copying-files-for-the-first-time-similar-to-the-following",children:["3.Why do I run the example ",(0,a.jsx)(t.a,{href:"/docs/tutorials/dataset-creation/accelerate-data-accessing-posix",children:"Speed up Accessing Remote Files"}),", and I will encounter an input/output error when copying files for the first time. Similar to the following"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"time cp ./pyspark-2.4.6.tar.gz /tmp/\ncp: error reading \u2018./pyspark-2.4.6.tar.gz\u2019: Input/output error\ncp: failed to extend \u2018/tmp/pyspark-2.4.6.tar.gz\u2019: Input/output error\n\nreal\t3m15.795s\nuser\t0m0.001s\nsys\t0m0.092s\n"})}),"\n",(0,a.jsx)(t.p,{children:"What caused this to happen?"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Answer"}),": The purpose of this example is to allow users to use the existing mirror download address of Apache software based on HTTP protocol to demonstrate the ability of data copy acceleration without building UFS (underlayer file system). However, in actual scenarios, the implementation of WebUFS is generally not used. But there are three limitations in this example\uff1a"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Availability and access speed of Apache software mirror download address."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"WebUFS is derived from Alluxio's community contribution and it is not the optimal implementation. For example, the implementation is not based on offset-based breakpoint resuming, which leads to the need to trigger WebUFS to read a large number of data blocks for each remote read operation."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Since the copy behavior is implemented based on Fuse, the upper limit of each Fuse chunk read is 128KB under the Linux Kernel; The larger the file is, the first copy will trigger a large number of reading operations."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"In response to this problem, we proposed an optimized solution:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"When configuring read, set the block size and chunk size to be larger than the file size, so as to avoid the influence of frequent reading in Fuse implementation."}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"alluxio.user.block.size.bytes.default: 256MB\nalluxio.user.streaming.reader.chunk.size.bytes: 256MB\nalluxio.user.local.reader.chunk.size.bytes: 256MB\nalluxio.worker.network.reader.buffer.size: 256MB\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsx)(t.li,{children:"In order to ensure that the target file can be downloaded successfully, the timeout of the block download can be adjusted. The timeout period in the example is 5 minutes. If your network condition is not good, you can set a longer time as appropriate."}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"alluxio.user.streaming.data.timeout: 300sec\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsx)(t.li,{children:"You can try to load the file manually."}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubectl exec -it hbase-master-0 bash\ntime alluxio fs  distributedLoad --replication 1 /\n"})}),"\n",(0,a.jsxs)(t.h2,{id:"4-why-does-the-driver-name-fusecsifluidio-not-found-in-the-list-of-registered-csi-drivers-error-appear-when-i-create-a-task-to-mount-the-pvc-created-by-runtime",children:["4. Why does the ",(0,a.jsx)(t.code,{children:"driver name fuse.csi.fluid.io not found in the list of registered CSI drivers"})," error appear when I create a task to mount the PVC created by Runtime?"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Answer"}),": Please check whether the kubelet configuration of the node on which the task is scheduled is the default value ",(0,a.jsx)(t.code,{children:"/var/lib/kubelet"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["First, Please on the work node of Kubernetes execute ",(0,a.jsx)(t.code,{children:"ps -ef | grep kubelet | grep -i root-dir"}),",Check whether Kubernetes's root-dir, If not ",(0,a.jsx)(t.code,{children:"/var/lib/kubelet"}),", Please Modify ",(0,a.jsx)(t.code,{children:"fluid/values.yaml"}),","]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"csi:\n  plugins:\n    image: fluidcloudnative/fluid-csi:v0.8.0-e7cc7ce\n  kubelet:\n    rootDir: you kubelet root dir\n"})}),"\n",(0,a.jsxs)(t.p,{children:["run again ",(0,a.jsx)(t.code,{children:"helm uninstall fluid && heml install fluid [/opt/fluid]"}),"\uff0c Check whether it is normal."]}),"\n",(0,a.jsx)(t.p,{children:"Second, check whether Fluid's CSI component is normal using the command."}),"\n",(0,a.jsxs)(t.p,{children:["The following command can find the Pod quickly. When using it, replace the ",(0,a.jsx)(t.code,{children:"<node_name>"})," and ",(0,a.jsx)(t.code,{children:"<fluid_namespace>"})," with yours:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubectl get pod -n <fluid_namespace> -o wide | grep <node_name> | grep csi-nodeplugin\n\n# <pod_name> the pod name of last step\nkubectl logs -f <pod_name> node-driver-registrar -n <fluid_namespace>\nkubectl logs -f <pod_name> plugins -n <fluid_namespace>\n"})}),"\n",(0,a.jsx)(t.p,{children:"If there is no error in the Log of the above steps, check whether the csidriver object exists:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubectl get csidriver\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If the CSI driver object exists, please check if the CSI registered node contains ",(0,a.jsx)(t.code,{children:"<node_name>"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubectl get csinode | grep <node_name>\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If the above command has no output, check whether the kubelet configuration of the node on which the task is scheduled is the default value ",(0,a.jsx)(t.code,{children:"/var/lib/kubelet"}),". Because Fluid's CSI component is registered to kubelet through a fixed address socket, the default value is ",(0,a.jsx)(t.code,{children:"--csi-address=/var/lib/kubelet/csi-plugins/fuse.csi.fluid.io/csi.sock --kubelet-registration-path=/var/lib/kubelet/csi-plugins/fuse.csi.fluid.io/csi.sock"}),"."]}),"\n",(0,a.jsxs)(t.h2,{id:"5-after-upgrading-fluid-why-does-the-dataset-created-in-the-older-version-miss-some-fields-compared-to-a-newly-created-dataset-when-querying-them-via-kubectl-get-command",children:["5. After upgrading fluid, why does the dataset created in the older version miss some fields compared to a newly created dataset, when querying them via ",(0,a.jsx)(t.code,{children:"kubectl get"})," command\uff1f"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Answer"}),": During the upgrading, we may have upgraded the CRDs. The dataset created in the older version will set the new fields in the CRDs to null\nFor example, if you upgrade from v0.4 or before, the dataset did not have a 'FileNum' field at that time\nAfter upgrading fluid, if you use the ",(0,a.jsx)(t.code,{children:"kubectl get"})," command, you cannot query the FileNum of the dataset"]}),"\n",(0,a.jsx)(t.p,{children:"You can recreate the dataset, and the new dataset will display these fields normally"}),"\n",(0,a.jsxs)(t.h2,{id:"6-why-do-i-run-the-example-nonroot-access-and-i--encounter-mkdir-permission-denied-error",children:["6. Why do I run the example ",(0,a.jsx)(t.a,{href:"/docs/tutorials/dataset-security/using-fluid-to-access-non-root-users-data",children:"Nonroot access"}),", and I  encounter mkdir permission denied error"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Answer"}),": In the non-root scenario, you have to check if you pass the right user info to runtime first. Secondly, you should check the alluxio master pod status, and use journalctl to see the kubelet logs in the node of alluxio master pod. The mkdir error was caused when mounting the hostpath to the container and therefore we have to check the root has the right permission to exec the directory. For example in the below root have permission to operator /dir"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"$ stat /dir\n  File: \u2018/dir\u2019\n  Size: 32              Blocks: 0          IO Block: 4096   directory\nDevice: fd00h/64768d    Inode: 83          Links: 3\nAccess: (0755/drwxr-xr-x)  Uid: (    0/    root)   Gid: (    0/    root)\nAccess: 2021-04-14 23:35:47.928805350 +0800\nModify: 2021-01-19 00:16:21.539559082 +0800\nChange: 2021-01-19 00:16:21.539559082 +0800\n Birth: -\n\n"})}),"\n",(0,a.jsx)(t.h2,{id:"7-why-does-volume-attachment-timeout-occur-when-pvc-is-used-in-an-application",children:"7. Why does Volume Attachment timeout occur when PVC is used in an application?"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Answer"}),": The Volume Attachment timeout problem is caused by the Kubelet not\nreceiving a response from the CSI Driver when making a request to it.\nThis problem is caused by the fact that the CSI Driver is not installed, or Kubelet does not have permission to access the CSI Driver.\nSince the CSI Driver is called back by Kubelet, if the CSI Driver is not installed or Kubelet does not have permission to view the CSI Driver, the CSI Plugin will not be triggered correctly."]}),"\n",(0,a.jsxs)(t.p,{children:["First, you must use the command ",(0,a.jsx)(t.code,{children:"kubectl get csidriver"})," to check whether the CSI driver is installed.\nIf not, you should use the command ",(0,a.jsx)(t.code,{children:"kubectl apply -f charts/fluid/fluid/templates/CSI/driver.yaml"})," to install it, and then observe whether the PVC is successfully mounted into the application.\nIf it is not solved, you shall use the command ",(0,a.jsx)(t.code,{children:"export KUBECONFIG=/etc/kubernetes/kubelet.conf && kubectl get csidriver"})," to check Kubelet whether has permission to see the CSI Driver or not."]}),"\n",(0,a.jsx)(t.h2,{id:"8-after-creating-dataset-and-alluxioruntime-when-does-alluxio-master-pod-enter-into-the-crashloopbackoff-state",children:"8. After creating Dataset and AlluxioRuntime, When does alluxio master Pod enter into the CrashLoopBackOff state?"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Answer"}),": First, use the command ",(0,a.jsx)(t.code,{children:"kubectl describe pod <dataset_name>-master-0"})," to query the reason why did Pod exit by mistake."]}),"\n",(0,a.jsx)(t.p,{children:"Alluxio master Pod consists of two containers, alluxio-master, and alluxio-job-master. If one of the containers exits by mistake, you should view the output log before it exits."}),"\n",(0,a.jsx)(t.p,{children:"For example, alluxio-job-master printed the following logs before exiting:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"$ kubectl logs imagenet-master-0  -c alluxio-job-master -p\n2021-06-08 12:03:47,611 INFO  MetricsSystem - Starting sinks with config: {}.\n2021-06-08 12:03:47,616 INFO  MetricsHeartbeatContext - Created metrics heartbeat with ID app-1642528563209467270. This ID will be used for identifying info from the client. It can be set manually through the alluxio.user.app.id property\n2021-06-08 12:03:47,656 INFO  TieredIdentityFactory - Initialized tiered identity TieredIdentity(node=132.252.41.86, rack=null)\n2021-06-08 12:03:47,697 INFO  ExtensionFactoryRegistry - Loading core jars from /opt/alluxio-release-2.5.0-2-SNAPSHOT/lib\n2021-06-08 12:03:47,784 INFO  ExtensionFactoryRegistry - Loading extension jars from /opt/alluxio-release-2.5.0-2-SNAPSHOT/extensions\n2021-06-08 12:03:50,767 ERROR AlluxioJobMasterProcess - java.net.UnknownHostException: jfk8snode43: jfk8snode43: Temporary failure in name resolution\njava.lang.RuntimeException: java.net.UnknownHostException: jfk8snode43: jfk8snode43: Temporary failure in name resolution\n        at alluxio.util.network.NetworkAddressUtils.getLocalIpAddress(NetworkAddressUtils.java:514)\n        at alluxio.util.network.NetworkAddressUtils.getLocalHostName(NetworkAddressUtils.java:436)\n        at alluxio.util.network.NetworkAddressUtils.getConnectHost(NetworkAddressUtils.java:313)\n        at alluxio.underfs.JobUfsManager.connectUfs(JobUfsManager.java:55)\n        at alluxio.underfs.AbstractUfsManager.getOrAdd(AbstractUfsManager.java:150)\n        at alluxio.underfs.AbstractUfsManager.lambda$addMount$0(AbstractUfsManager.java:171)\n        at alluxio.underfs.UfsManager$UfsClient.acquireUfsResource(UfsManager.java:61)\n        at alluxio.master.journal.ufs.UfsJournal.<init>(UfsJournal.java:150)\n        at alluxio.master.journal.ufs.UfsJournalSystem.createJournal(UfsJournalSystem.java:83)\n        at alluxio.master.journal.ufs.UfsJournalSystem.createJournal(UfsJournalSystem.java:53)\n        at alluxio.master.AbstractMaster.<init>(AbstractMaster.java:73)\n        at alluxio.master.job.JobMaster.<init>(JobMaster.java:157)\n        at alluxio.master.AlluxioJobMasterProcess.<init>(AlluxioJobMasterProcess.java:92)\n        at alluxio.master.AlluxioJobMasterProcess$Factory.create(AlluxioJobMasterProcess.java:269)\n        at alluxio.master.AlluxioJobMaster.main(AlluxioJobMaster.java:45)\nCaused by: java.net.UnknownHostException: jfk8snode43: jfk8snode43: Temporary failure in name resolution\n        at java.net.InetAddress.getLocalHost(InetAddress.java:1506)\n        at alluxio.util.network.NetworkAddressUtils.getLocalIpAddress(NetworkAddressUtils.java:472)\n        ... 14 more\nCaused by: java.net.UnknownHostException: jfk8snode43: Temporary failure in name resolution\n        at java.net.Inet4AddressImpl.lookupAllHostAddr(Native Method)\n        at java.net.InetAddress$2.lookupAllHostAddr(InetAddress.java:929)\n        at java.net.InetAddress.getAddressesFromNameService(InetAddress.java:1324)\n        at java.net.InetAddress.getLocalHost(InetAddress.java:1501)\n        ... 15 more\n2021-06-08 12:03:50,773 ERROR AlluxioJobMaster - Failed to create job master process\njava.lang.RuntimeException: java.net.UnknownHostException: jfk8snode43: jfk8snode43: Temporary failure in name resolution\n        at alluxio.util.network.NetworkAddressUtils.getLocalIpAddress(NetworkAddressUtils.java:514)\n        at alluxio.util.network.NetworkAddressUtils.getLocalHostName(NetworkAddressUtils.java:436)\n        at alluxio.util.network.NetworkAddressUtils.getConnectHost(NetworkAddressUtils.java:313)\n        at alluxio.underfs.JobUfsManager.connectUfs(JobUfsManager.java:55)\n        at alluxio.underfs.AbstractUfsManager.getOrAdd(AbstractUfsManager.java:150)\n        at alluxio.underfs.AbstractUfsManager.lambda$addMount$0(AbstractUfsManager.java:171)\n        at alluxio.underfs.UfsManager$UfsClient.acquireUfsResource(UfsManager.java:61)\n        at alluxio.master.journal.ufs.UfsJournal.<init>(UfsJournal.java:150)\n        at alluxio.master.journal.ufs.UfsJournalSystem.createJournal(UfsJournalSystem.java:83)\n        at alluxio.master.journal.ufs.UfsJournalSystem.createJournal(UfsJournalSystem.java:53)\n        at alluxio.master.AbstractMaster.<init>(AbstractMaster.java:73)\n        at alluxio.master.job.JobMaster.<init>(JobMaster.java:157)\n        at alluxio.master.AlluxioJobMasterProcess.<init>(AlluxioJobMasterProcess.java:92)\n        at alluxio.master.AlluxioJobMasterProcess$Factory.create(AlluxioJobMasterProcess.java:269)\n        at alluxio.master.AlluxioJobMaster.main(AlluxioJobMaster.java:45)\nCaused by: java.net.UnknownHostException: jfk8snode43: jfk8snode43: Temporary failure in name resolution\n        at java.net.InetAddress.getLocalHost(InetAddress.java:1506)\n        at alluxio.util.network.NetworkAddressUtils.getLocalIpAddress(NetworkAddressUtils.java:472)\n        ... 14 more\nCaused by: java.net.UnknownHostException: jfk8snode43: Temporary failure in name resolution\n        at java.net.Inet4AddressImpl.lookupAllHostAddr(Native Method)\n        at java.net.InetAddress$2.lookupAllHostAddr(InetAddress.java:929)\n        at java.net.InetAddress.getAddressesFromNameService(InetAddress.java:1324)\n        at java.net.InetAddress.getLocalHost(InetAddress.java:1501)\n        ... 15 more\n2021-06-08 12:03:50,917 INFO  NettyUtils - EPOLL_MODE is available\n2021-06-08 12:03:51,319 WARN  MetricsHeartbeatContext - Failed to heartbeat to the metrics master before exit\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This error is generally due to the host where aluxio master Pod is located, does not configure the mapping relationship between the hostname and IP in DNS server or ",(0,a.jsx)(t.code,{children:"/etc/hosts"})," file, resulting in the failure of aluxio-job-master to resolve the host name."]}),"\n",(0,a.jsxs)(t.p,{children:["At this time, you need to log in to the host where aluxio master Pod is located, execute the command ",(0,a.jsx)(t.code,{children:"hostname"})," to query the hostname, and write its mapping relationship with IP to the ",(0,a.jsx)(t.code,{children:"/etc/hosts"})," file."]}),"\n",(0,a.jsx)(t.p,{children:"You can search in the issue of this project to find solutions to the error information you encounter. If there is no issue that can solve your problem, you can also propose a new issue."})]})}function u(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>i});var a=n(1504);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);