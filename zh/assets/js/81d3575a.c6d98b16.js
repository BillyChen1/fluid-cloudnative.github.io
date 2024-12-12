"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[3384],{4008:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var a=t(7624),s=t(2172);const i={sidebar_label:"Accelerate Data Accessing (via HDFS interface)",sidebar_position:2},o="Accelerate Data Accessing (via HDFS interface)",l={id:"tutorials/dataset-creation/accelerate-data-accessing-hdfs",title:"Accelerate Data Accessing (via HDFS interface)",description:"This tutorial introduces how to use HDFS Client to access remote files by Alluxio in Fluid, and it can accelerate the access of remote files powered by the file cache ability of Alluxio.",source:"@site/versioned_docs/version-v0.9/tutorials/dataset-creation/accelerate-data-accessing-hdfs.md",sourceDirName:"tutorials/dataset-creation",slug:"/tutorials/dataset-creation/accelerate-data-accessing-hdfs",permalink:"/zh/docs/v0.9/tutorials/dataset-creation/accelerate-data-accessing-hdfs",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v0.9/tutorials/dataset-creation/accelerate-data-accessing-hdfs.md",tags:[],version:"v0.9",lastUpdatedBy:"chenqiming",lastUpdatedAt:1714041983,formattedLastUpdatedAt:"2024\u5e744\u670825\u65e5",sidebarPosition:2,frontMatter:{sidebar_label:"Accelerate Data Accessing (via HDFS interface)",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Accelerate Data Accessing (via POSIX)",permalink:"/zh/docs/v0.9/tutorials/dataset-creation/accelerate-data-accessing-posix"},next:{title:"Cache Co-locality",permalink:"/zh/docs/v0.9/tutorials/dataset-creation/cache-co-locality"}},c={},r=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set Up Workspace",id:"set-up-workspace",level:2},{value:"Install Resources to Kubernetes",id:"install-resources-to-kubernetes",level:2},{value:"Access files through HDFS Client",id:"access-files-through-hdfs-client",level:2},{value:"Clean Up Environment",id:"clean-up-environment",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"accelerate-data-accessing-via-hdfs-interface",children:"Accelerate Data Accessing (via HDFS interface)"}),"\n",(0,a.jsxs)(n.p,{children:["This tutorial introduces how to use HDFS Client to access remote files by ",(0,a.jsx)(n.a,{href:"https://www.alluxio.io",children:"Alluxio"})," in Fluid, and it can accelerate the access of remote files powered by the file cache ability of Alluxio."]}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.p,{children:["Before everything we are going to do, please refer to ",(0,a.jsx)(n.a,{href:"/docs/get-started/installation",children:"Installation Guide"})," to install Fluid on your Kubernetes Cluster, and make sure all the components used by Fluid are ready like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod -n fluid-system\nNAME                                  READY   STATUS    RESTARTS   AGE\nalluxioruntime-controller-5b64fdbbb-84pc6   1/1     Running   0          8h\ncsi-nodeplugin-fluid-fwgjh                  2/2     Running   0          8h\ncsi-nodeplugin-fluid-ll8bq                  2/2     Running   0          8h\ndataset-controller-5b7848dbbb-n44dj         1/1     Running   0          8h\n"})}),"\n",(0,a.jsx)(n.h2,{id:"set-up-workspace",children:"Set Up Workspace"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ mkdir <any-path>/hdfs\n$ cd <any-path>/hdfs\n"})}),"\n",(0,a.jsx)(n.h2,{id:"install-resources-to-kubernetes",children:"Install Resources to Kubernetes"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Check the ",(0,a.jsx)(n.code,{children:"Dataset"})," object to be created"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ cat<<EOF >dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hadoop\nspec:\n  mounts:\n    - mountPoint: https://mirrors.tuna.tsinghua.edu.cn/apache/hadoop/core/current/\n      name: hadoop\nEOF\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Here, we'd like to create a resource object with kind ",(0,a.jsx)(n.code,{children:"Dataset"}),". ",(0,a.jsx)(n.code,{children:"Dataset"})," is a Custom Resource Definition(CRD) defined by Fluid and used to tell Fluid where to find all the data you'd like to access.\nUnder the hood, Fluid uses Alluxio to do some mount operations, so ",(0,a.jsx)(n.code,{children:"mountPoint"})," property can be any legal UFS path acknowledged by Alluxio. Here, we use ",(0,a.jsx)(n.a,{href:"https://docs.alluxio.io/os/user/stable/en/ufs/WEB.html",children:"WebUFS"})," for its simplicity."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Create a Dataset resource object"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f dataset.yaml\ndataset.data.fluid.io/hadoop created\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Inspect the status of the Dataset resource object"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get dataset hadoop\nNAME     UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE      AGE\nhadoop                                                                  NotBound   1m\n"})}),"\n",(0,a.jsxs)(n.p,{children:["As shown above, the value of attribute ",(0,a.jsx)(n.code,{children:"phase"})," in ",(0,a.jsx)(n.code,{children:"status"})," is ",(0,a.jsx)(n.code,{children:"NotBound"}),", which means that the ",(0,a.jsx)(n.code,{children:"Dataset"})," resource object is not binded with any ",(0,a.jsx)(n.code,{children:"AlluxioRuntime"})," resource object currently. Next, we will create an ",(0,a.jsx)(n.code,{children:"AlluxioRuntime"})," resource object."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Inspect the AlluxioRuntime resource object to be created"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'$ cat<<EOF >runtime.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: hadoop\nspec:\n  replicas: 2\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Create an AlluxioRuntime resource object"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl apply -f runtime.yaml\nalluxioruntime.data.fluid.io/hadoop created\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Inspect the status of the AlluxioRuntime resource object"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"AlluxioRuntime"})," is a CRD defined by another Fluid. An ",(0,a.jsx)(n.code,{children:"AlluxioRuntime"})," resource object describes configuration information needed by running an Alluxio instance in a Kubernetes cluster."]}),"\n",(0,a.jsx)(n.p,{children:"Wait until each component in the AlluxioRuntime resource object starts successfully, and you will see status like the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ hdfs kubectl get pods\nNAME                            READY   STATUS    RESTARTS   AGE\nhadoop-master-0                 2/2     Running   0          106s\nhadoop-worker-0                 2/2     Running   0          64s\nhadoop-worker-1                 2/2     Running   0          64s\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get alluxioruntime hadoop\nNAME     MASTER PHASE   WORKER PHASE   FUSE PHASE   AGE\nhadoop   Ready          Ready          Ready        116s\n"})}),"\n",(0,a.jsx)(n.p,{children:"Inspect the status of the Dataset again, and you will find that it has been binded with AlluxioRuntime."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get dataset hadoop\nNAME     UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nhadoop   390.2MiB         0B       4GiB             0%                  Bound   55m\n"})}),"\n",(0,a.jsx)(n.p,{children:"When the Dataset resource object is prepared, i.e. has been binded with an Alluxio instance, PV and PVC related to the resource object has been generated by Fluid. Via the PVC, applications are able to mount remote files in Pod, and enable remote file access by mounting directories."}),"\n",(0,a.jsx)(n.h2,{id:"access-files-through-hdfs-client",children:"Access files through HDFS Client"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Prepare test program"})}),"\n",(0,a.jsx)(n.p,{children:"This example uses HDFS Java Client to access files, and the following dependencies need to be introduced when writing client code"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>org.apache.hadoop</groupId>\n  <artifactId>hadoop-client</artifactId>\n  <version>${hadoop.version}</version>\n</dependency>\n<dependency>\n  <groupId>org.apache.hadoop</groupId>\n  <artifactId>hadoop-hdfs</artifactId>\n  <version>${hadoop.version}</version>\n</dependency>\n<dependency>\n  <groupId>org.alluxio</groupId>\n  <artifactId>alluxio-core-client</artifactId>\n  <version>${alluxio.version}</version>\n  <type>pom</type>\n</dependency>\n<dependency>\n  <groupId>org.alluxio</groupId>\n  <artifactId>alluxio-core-client-hdfs</artifactId>\n  <version>${alluxio.version}</version>\n</dependency>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["At the same time, add the configuration of alluxio in core-site.xml. For details and troubleshooting, please refer to ",(0,a.jsx)(n.a,{href:"https://docs.alluxio.io/os/user/stable/en/compute/Hadoop-MapReduce.html",children:"Running Hadoop MapReduce on Alluxio"}),"\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<property>\n  <name>fs.alluxio.impl</name>\n  <value>alluxio.hadoop.FileSystem</value>\n  <description>The Alluxio FileSystem</description>\n</property>\n"})}),"\n",(0,a.jsx)(n.p,{children:"When accessing files through the HDFS client, you need to specify the HDFS server address"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'final String HDFS_URL = "alluxio://hadoop-master-0.default.svc.cluster.local:"+ System.getenv("HADOOP_PORT") + "/hadoop";\nConfiguration conf = new Configuration();\nFileSystem fs = FileSystem.get(URI.create(HDFS_URL), conf);\n'})}),"\n",(0,a.jsx)(n.p,{children:"Note that the HDFS_URL domain name rule here is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"alluxio://{HCFS URL}/{DATASET_NAME}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Where DATASET_NAME is the name of the Dataset created earlier, in this case it is hadoop. The Endpoint can be obtained through the following command to obtain the HCFS (Hadoop Compatible FileSystem) URL"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:" kubectl get datasets.data.fluid.io -owide\nNAME    UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE   HCFS URL                                 AGE\nhbase   443.49MiB        0.00B    4.00GiB          0.0%                Bound   alluxio://hbase-master-0.default:19998   97s\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For the complete test code, please refer to ",(0,a.jsx)(n.a,{href:"https://github.com/fluid-cloudnative/fluid/tree/master/samples/hdfs",children:"samples/hdfs"}),". We made the test code into a mirror to facilitate the next test. The mirror address is registry.cn-hangzhou.aliyuncs.com/qiulingwei/fluid-hdfs-demo:1.2.0"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"The test program to be created"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'$ cat<<EOF >app.yaml\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: fluid-hdfs-demo\nspec:\n  template:\n    spec:\n      restartPolicy: OnFailure\n      containers:\n        - name: fluid-hdfs-demo\n          image: registry.cn-hangzhou.aliyuncs.com/qiulingwei/fluid-hdfs-demo:1.3.0\n          imagePullPolicy: Always\n          env:\n          - name: HADOOP_PORT\n            value: "19998"\nEOF\n'})}),"\n",(0,a.jsx)(n.p,{children:"Here, you need to replace 19998 in the environment variable with the actual port in the HCFS (Hadoop Compatible FileSystem) URL just queried"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Start the test program"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl apply -f app.yaml\njob.batch/fluid-hdfs-demo created\n"})}),"\n",(0,a.jsx)(n.p,{children:"In the test program, we first traverse the Dataset to see which files are there, and then copy these files to the local to see the acceleration effect of accessing remote files."}),"\n",(0,a.jsx)(n.p,{children:"Wait for a period of time, after the job is completed, the running status of the job can be viewed by the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pods\nNAME                            READY   STATUS      RESTARTS   AGE\nfluid-hdfs-demo-8q9b7           0/1     Completed   0          14m\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Check the execution time"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl logs fluid-hdfs-demo-8q9b7\n## RELEASENOTES.md\n## hadoop-3.1.3-src.tar.gz\n## CHANGES.md\n## hadoop-3.1.3-site.tar.gz\n## hadoop-3.1.3-rat.txt\n## hadoop-3.1.3.tar.gz\ncopy directory cost:67520ms\n"})}),"\n",(0,a.jsx)(n.p,{children:"It took more than 67 seconds to execute the job for the first time."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Check status of the ",(0,a.jsx)(n.code,{children:"Dataset"})," object"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get dataset hadoop\nNAME     UFS TOTAL SIZE   CACHED     CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nhadoop   390.2MiB         388.4MiB   4GiB             99%                 Bound   88m\n"})}),"\n",(0,a.jsx)(n.p,{children:"We can see that all remote files have been cached in Alluxio."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Launch a test job again"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl delete -f app.yaml\n$ kubectl create -f app.yaml\n"})}),"\n",(0,a.jsx)(n.p,{children:"Since the remote files have been cached, the time consumption of this job is greatly reduced."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl logs fluid-hdfs-demo-pxt45\n## RELEASENOTES.md\n## hadoop-3.1.3-src.tar.gz\n## CHANGES.md\n## hadoop-3.1.3-site.tar.gz\n## hadoop-3.1.3-rat.txt\n## hadoop-3.1.3.tar.gz\ncopy directory cost:1300ms\n"})}),"\n",(0,a.jsx)(n.p,{children:"We repeat the job, taking only 1.3 seconds to access the same file."}),"\n",(0,a.jsx)(n.p,{children:"This great acceleration effect is attributed to the powerful caching capability provided by Alluxio. This caching capability means that as long as you access a remote file once, the file will be cached in Alluxio,and all your subsequent repeated accesses no longer require remote file reading, but obtain data directly from Alluxio, so it is not difficult to explain the acceleration of data access."}),"\n",(0,a.jsx)(n.h2,{id:"clean-up-environment",children:"Clean Up Environment"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl delete -f .\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>o});var a=t(1504);const s={},i=a.createContext(s);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);