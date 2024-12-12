"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[5916],{164:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var a=s(7624),t=s(2172);const l={sidebar_label:"Accelerate Data Accessing (via POSIX)",sidebar_position:1},i="Accelerate Data Accessing (via POSIX)",c={id:"tutorials/dataset-creation/accelerate-data-accessing-posix",title:"Accelerate Data Accessing (via POSIX)",description:"Powered by Alluxio and Fuse, Fluid provides a simple way for users to access files stored in remote filesystems, just like accessing some ordinary file in local filesystems.",source:"@site/versioned_docs/version-v1.0/tutorials/dataset-creation/accelerate-data-accessing-posix.md",sourceDirName:"tutorials/dataset-creation",slug:"/tutorials/dataset-creation/accelerate-data-accessing-posix",permalink:"/docs/tutorials/dataset-creation/accelerate-data-accessing-posix",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v1.0/tutorials/dataset-creation/accelerate-data-accessing-posix.md",tags:[],version:"v1.0",lastUpdatedBy:"chenqiming",lastUpdatedAt:1714050288,formattedLastUpdatedAt:"Apr 25, 2024",sidebarPosition:1,frontMatter:{sidebar_label:"Accelerate Data Accessing (via POSIX)",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Demo-On-the-fly Dataset Cache Scaling",permalink:"/docs/demos/demo-on-the-fly-dataset-cache-scaling"},next:{title:"Accelerate Data Accessing (via HDFS interface)",permalink:"/docs/tutorials/dataset-creation/accelerate-data-accessing-hdfs"}},o={},r=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set Up Workspace",id:"set-up-workspace",level:2},{value:"Install Resources to Kubernetes",id:"install-resources-to-kubernetes",level:2},{value:"Remote File Access",id:"remote-file-access",level:2},{value:"Speed Up Accessing Remote Files",id:"speed-up-accessing-remote-files",level:2},{value:"Clean Up",id:"clean-up",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"accelerate-data-accessing-via-posix",children:"Accelerate Data Accessing (via POSIX)"}),"\n",(0,a.jsxs)(n.p,{children:["Powered by ",(0,a.jsx)(n.a,{href:"https://www.alluxio.io",children:"Alluxio"})," and ",(0,a.jsx)(n.a,{href:"https://github.com/libfuse/libfuse",children:"Fuse"}),", Fluid provides a simple way for users to access files stored in remote filesystems, just like accessing some ordinary file in local filesystems.\nWhat's more, with a powerful caching capability provided, users can enjoy a great speedup on accessing remote files especially for those that have a frequent access pattern."]}),"\n",(0,a.jsx)(n.p,{children:"This tutorial aims to show you an overview of all the features mentioned above."}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.p,{children:["Before everything we are going to do, please refer to ",(0,a.jsx)(n.a,{href:"/docs/get-started/installation",children:"Installation Guide"})," to install Fluid on your Kubernetes Cluster, and make sure all the components used by Fluid are ready like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod -n fluid-system\nNAME                                  READY   STATUS    RESTARTS   AGE\nalluxioruntime-controller-5b64fdbbb-84pc6   1/1     Running   0          8h\ncsi-nodeplugin-fluid-fwgjh                  2/2     Running   0          8h\ncsi-nodeplugin-fluid-ll8bq                  2/2     Running   0          8h\ndataset-controller-5b7848dbbb-n44dj         1/1     Running   0          8h\n"})}),"\n",(0,a.jsx)(n.p,{children:'Normally, you shall see a Pod named "controller-manager" and several Pods named "csi-nodeplugin".\nThe num of "csi-nodeplugin" Pods depends on how many nodes your Kubernetes cluster have(e.g. 2 in this tutorial), so please make sure all "csi-nodeplugin" Pods are working properly.'}),"\n",(0,a.jsx)(n.h2,{id:"set-up-workspace",children:"Set Up Workspace"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ mkdir <any-path>/accelerate\n$ cd <any-path>/accelerate\n"})}),"\n",(0,a.jsx)(n.h2,{id:"install-resources-to-kubernetes",children:"Install Resources to Kubernetes"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Check the ",(0,a.jsx)(n.code,{children:"Dataset"})," object to be created"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ cat<<EOF >dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hbase\nspec:\n  mounts:\n    - mountPoint: https://mirrors.tuna.tsinghua.edu.cn/apache/hbase/stable/\n      name: hbase\nEOF\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Notes: Here, we use THU's tuna Apache mirror site as our ",(0,a.jsx)(n.code,{children:"mountPoint"}),". If your environment isn't in Chinese mainland, please replace it with ",(0,a.jsx)(n.code,{children:"https://downloads.apache.org/hbase/stable/"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Here, we'd like to create a resource object with kind ",(0,a.jsx)(n.code,{children:"Dataset"}),". ",(0,a.jsx)(n.code,{children:"Dataset"})," is a Custom Resource Definition(CRD) defined by Fluid and used to tell Fluid where to find all the data you'd like to access.\nUnder the hood, Fluid uses Alluxio to do some mount operations, so ",(0,a.jsx)(n.code,{children:"mountPoint"})," property can be any legal UFS path acknowledged by Alluxio. Here, we use ",(0,a.jsx)(n.a,{href:"https://docs.alluxio.io/os/user/stable/en/ufs/WEB.html",children:"WebUFS"})," for its simplicity."]}),"\n",(0,a.jsxs)(n.p,{children:["For more information about UFS, please refer to ",(0,a.jsx)(n.a,{href:"https://docs.alluxio.io/os/user/stable/en/ufs/HDFS.html",children:"Alluxio Docs - Storage Integrations"})]}),"\n",(0,a.jsxs)(n.p,{children:["For more information about properties in ",(0,a.jsx)(n.code,{children:"Dataset"}),", please refer to our ",(0,a.jsx)(n.a,{href:"/docs/release-and-API-doc/api-doc",children:"API doc"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["We use hbase v2.2.5 on a mirror site of Apache downloads as an example of remote file. It's nothing special, you can change it to any remote file you like. But please note that, if you are going to use WebUFS like we do, files on Apache sites are highly recommended because you might need some ",(0,a.jsx)(n.a,{href:"https://docs.alluxio.io/os/user/stable/en/ufs/WEB.html#configuring-alluxio",children:"advanced configurations"})," due to current implementation of WebUFS."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Create the ",(0,a.jsx)(n.code,{children:"Dataset"})," object"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f dataset.yaml\ndataset.data.fluid.io/hbase created\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Check status of the ",(0,a.jsx)(n.code,{children:"Dataset"})," object"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get dataset hbase\nNAME    UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE      AGE\nhbase                                                                  NotBound   13s\n"})}),"\n",(0,a.jsxs)(n.p,{children:["With a ",(0,a.jsx)(n.code,{children:"NotBound"})," phase in status, the dataset is not ready cause there isn't any ",(0,a.jsx)(n.code,{children:"AlluxioRuntime"})," object supporting it. We'll create one in the following steps."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Check the ",(0,a.jsx)(n.code,{children:"AlluxioRuntime"})," object to be created"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'$ cat<<EOF >runtime.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: hbase\nspec:\n  replicas: 2\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\nEOF\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Create a ",(0,a.jsx)(n.code,{children:"AlluxioRuntime"})," object"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f runtime.yaml\nalluxioruntime.data.fluid.io/hbase created\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Get the ",(0,a.jsx)(n.code,{children:"AlluxioRuntime"})," object"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get alluxioruntime\nNAME    AGE\nhbase   55s\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"AlluxioRuntime"})," is another CRD defined by Fluid. An ",(0,a.jsx)(n.code,{children:"AluxioRuntime"})," object describes specifications used to run an Alluxio instance."]}),"\n",(0,a.jsxs)(n.p,{children:["Wait for a while, and make sure all components defined in the ",(0,a.jsx)(n.code,{children:"AlluxioRuntime"})," object are ready. You shall see something like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod\nNAME                 READY   STATUS    RESTARTS   AGE\nhbase-master-0       2/2     Running   0          62s\nhbase-worker-0       2/2     Running   0          27s\nhbase-worker-1       2/2     Running   0          27s\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Check status of the ",(0,a.jsx)(n.code,{children:"Dataset"})," object again"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get dataset hbase\nNAME    UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nhbase   443.5MiB         0B       4GiB             0%                  Bound   2m39s\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Dataset"})," object has been updated since a related Alluxio instance is ready and successfully bounded to the ",(0,a.jsx)(n.code,{children:"Dataset"})," object."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Check status of the ",(0,a.jsx)(n.code,{children:"AlluxioRuntime"})," object"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get alluxioruntime hbase -o wide\nNAME    READY MASTERS   DESIRED MASTERS   MASTER PHASE   READY WORKERS   DESIRED WORKERS   WORKER PHASE   READY FUSES   DESIRED FUSES   FUSE PHASE   AGE\nhbase   1               1                 Ready          2               2                 Ready          0             0               Ready        2m50s\n"})}),"\n",(0,a.jsx)(n.p,{children:"Detailed information about the Alluxio instance is provided here."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Check related PersistentVolume and PersistentVolumeClaim"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pv\nNAME    CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM           STORAGECLASS   REASON   AGE\nhbase   100Gi      RWX            Retain           Bound    default/hbase                           18m\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pvc\nNAME    STATUS   VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS   AGE\nhbase   Bound    hbase    100Gi      RWX                           18m\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Related PV and PVC have been created by Fluid since the ",(0,a.jsx)(n.code,{children:"Dataset"})," object is ready(bounded).\nWorkloads are now able to access remote files by mounting PVC."]}),"\n",(0,a.jsx)(n.h2,{id:"remote-file-access",children:"Remote File Access"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Check the app to be created"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ cat<<EOF >nginx.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      volumeMounts:\n        - mountPath: /data\n          name: hbase-vol\n  volumes:\n    - name: hbase-vol\n      persistentVolumeClaim:\n        claimName: hbase\nEOF\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Run a demo app to access remote files"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f nginx.yaml\n"})}),"\n",(0,a.jsx)(n.p,{children:"Login to nginx Pod:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl exec -it nginx -- bash\n"})}),"\n",(0,a.jsx)(n.p,{children:"Check file status:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ ls -1 /data/hbase\nCHANGES.md\nRELEASENOTES.md\napi_compare_2.2.5RC0_to_2.2.4.html\nhbase-2.2.5-bin.tar.gz\nhbase-2.2.5-client-bin.tar.gz\nhbase-2.2.5-src.tar.gz\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ du -h /data/hbase/*\n174K    /data/hbase/CHANGES.md\n106K    /data/hbase/RELEASENOTES.md\n115K    /data/hbase/api_compare_2.2.5RC0_to_2.2.4.html\n211M    /data/hbase/hbase-2.2.5-bin.tar.gz\n1.0K    /data/hbase/hbase-2.2.5-bin.tar.gz.asc\n512     /data/hbase/hbase-2.2.5-bin.tar.gz.sha512\n200M    /data/hbase/hbase-2.2.5-client-bin.tar.gz\n1.0K    /data/hbase/hbase-2.2.5-client-bin.tar.gz.asc\n512     /data/hbase/hbase-2.2.5-client-bin.tar.gz.sha512\n34M     /data/hbase/hbase-2.2.5-src.tar.gz\n1.0K    /data/hbase/hbase-2.2.5-src.tar.gz.asc\n512     /data/hbase/hbase-2.2.5-src.tar.gz.sha512\n"})}),"\n",(0,a.jsx)(n.p,{children:"Logout:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ exit\n"})}),"\n",(0,a.jsx)(n.p,{children:"As you may have seen, all the files on the WebUFS(e.g. hbase-related files on Apache mirror in our case) appear no differences from any other file in the local filesystem of the nginx Pod."}),"\n",(0,a.jsx)(n.h2,{id:"speed-up-accessing-remote-files",children:"Speed Up Accessing Remote Files"}),"\n",(0,a.jsx)(n.p,{children:"To demonstrate how great speedup you may enjoy when accessing remote files, here is a demo job:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Check the test job to be launched"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'$ cat<<EOF >app.yaml\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: fluid-copy-test\nspec:\n  template:\n    spec:\n      restartPolicy: OnFailure\n      containers:\n        - name: busybox\n          image: busybox\n          command: ["/bin/sh"]\n          args: ["-c", "set -x; time cp -r /data/hbase ./"]\n          volumeMounts:\n            - mountPath: /data\n              name: hbase-vol\n      volumes:\n        - name: hbase-vol\n          persistentVolumeClaim:\n            claimName: hbase\nEOF\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Launch a test job"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f app.yaml\njob.batch/fluid-test created\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Under the hood, the test job executes a shell command ",(0,a.jsx)(n.code,{children:"time cp -r /data/hbase ./"})," and prints its result.\nWait for a while and make sure the job has completed. You can check its runnning status by:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod\nNAME                    READY   STATUS      RESTARTS   AGE\nfluid-copy-test-h59w9   0/1     Completed   0          1m25s\n...\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Note: the ",(0,a.jsx)(n.code,{children:"h59w9"})," in ",(0,a.jsx)(n.code,{children:"fluid-copy-test-h59w9"})," is a specifier generated by the Job we created. It's highly possible that you may have different specifier in your environment. Please remember replace it with your own specifier in the following steps"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Check running time of the test job"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl logs fluid-copy-test-h59w9\n+ time cp -r /data/hbase ./\nreal  1m 2.74s\nuser  0m 0.00s\nsys   0m 1.35s\n"})}),"\n",(0,a.jsx)(n.p,{children:"It's our first time to read such a file, and it takes us about 63s. It may be not as fast as you expected but:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Check status of the dataset"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get dataset hbase\nNAME    UFS TOTAL SIZE   CACHED     CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nhbase   443.5MiB         443.5MiB   4GiB             100%                Bound   9m27s\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now, all the remote files have been cached in Alluxio."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Re-Launch the test job"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl delete -f app.yaml\n$ kubectl create -f app.yaml\n"})}),"\n",(0,a.jsx)(n.p,{children:"It'll finish very soon after creation this time:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod\nNAME                    READY   STATUS      RESTARTS   AGE\nfluid-copy-test-d9h2x   0/1     Completed   0          24s\n...\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl logs fluid-copy-test-d9h2x\n+ time cp -r /data/hbase ./\nreal  0m 2.94s\nuser  0m 0.00s\nsys   0m 1.27s\n"})}),"\n",(0,a.jsx)(n.p,{children:"The same read operation takes only 3s this time."}),"\n",(0,a.jsx)(n.p,{children:"The great speedup attributes to the powerful caching capability provided by Alluxio. That means that once you access some remote file, it will be cached in Alluxio, and your next following operations will enjoy a local access instead of a remote one, and thus a great speedup."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Note: Time spent for the test job depends on your network environment. If it takes too long for you to complete the job, changing a mirror or some smaller file might help."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"clean-up",children:"Clean Up"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl delete -f .\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},2172:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>i});var a=s(1504);const t={},l=a.createContext(t);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);