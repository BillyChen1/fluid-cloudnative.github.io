(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{435:function(a,s,e){"use strict";e.r(s);var t=e(19),n=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"示例-远程web文件访问加速"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-远程web文件访问加速"}},[a._v("#")]),a._v(" 示例 - 远程Web文件访问加速")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/video/remote-file-accessing.mp4",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/remoteData_demo.png",alt:""}}),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("通过"),s("a",{attrs:{href:"https://www.alluxio.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("Alluxio"),s("OutboundLink")],1),a._v("和"),s("a",{attrs:{href:"https://github.com/libfuse/libfuse",target:"_blank",rel:"noopener noreferrer"}},[a._v("Fuse"),s("OutboundLink")],1),a._v("，Fluid为用户提供了一种更为简单的文件访问接口，使得任意运行在Kubernetes集群上的程序能够像访问本地文件一样轻松访问存储在远程文件系统中的文件。更为重要的是，Fluid借助Alluxio提供了强大的文件缓存能力，这意味着用户在访问远程文件时，尤其是那些具有较高访问频率的远程文件时，用户可以享受到大幅度的文件访问速度的提升。")]),a._v(" "),s("p",[a._v("本文档通过一个简单的例子演示了上述功能特性")]),a._v(" "),s("h2",{attrs:{id:"前提条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[a._v("#")]),a._v(" 前提条件")]),a._v(" "),s("p",[a._v("在运行该示例之前，请参考"),s("RouterLink",{attrs:{to:"/zh/guide/get_started.html"}},[a._v("安装文档")]),a._v("完成安装，并检查Fluid各组件正常运行：")],1),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl get pod "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" fluid-system\nNAME                                  READY   STATUS    RESTARTS   AGE\nalluxioruntime-controller-5b64fdbbb-84pc6   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          8h\ncsi-nodeplugin-fluid-fwgjh                  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          8h\ncsi-nodeplugin-fluid-ll8bq                  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          8h\ndataset-controller-5b7848dbbb-n44dj         "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          8h\n")])])]),s("p",[a._v("通常来说，你会看到一个名为"),s("code",[a._v("controller-manager")]),a._v("的Pod和多个名为"),s("code",[a._v("csi-nodeplugin")]),a._v("的Pod正在运行。其中，"),s("code",[a._v("csi-nodeplugin")]),a._v("这些Pod的数量取决于你的Kubernetes集群中结点的数量。")]),a._v(" "),s("h2",{attrs:{id:"新建工作环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建工作环境"}},[a._v("#")]),a._v(" 新建工作环境")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("any-path"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/accelerate\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("any-path"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/accelerate\n")])])]),s("h2",{attrs:{id:"运行示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行示例"}},[a._v("#")]),a._v(" 运行示例")]),a._v(" "),s("p",[s("strong",[a._v("查看待创建的Dataset资源对象")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ cat"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),s("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("dataset.yaml")]),a._v("\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hbase\nspec:\n  mounts:\n    - mountPoint: https://mirrors.tuna.tsinghua.edu.cn/apache/hbase/stable/\n      name: hbase\nEOF")]),a._v("\n")])])]),s("blockquote",[s("p",[a._v("注意: 上述"),s("code",[a._v("mountPoint")]),a._v("中使用了Apache清华镜像源进行演示，如果你的环境位于海外，请更换为"),s("code",[a._v("https://downloads.apache.org/hbase/stable/")]),a._v("进行尝试")])]),a._v(" "),s("p",[a._v("在这里，我们将要创建一个kind为"),s("code",[a._v("Dataset")]),a._v("的资源对象(Resource object)。"),s("code",[a._v("Dataset")]),a._v("是Fluid所定义的一个Custom Resource Definition(CRD)，该CRD被用来告知Fluid在哪里可以找到你所需要的数据。Fluid将该CRD对象中定义的"),s("code",[a._v("mountPoint")]),a._v("属性挂载到Alluxio之上，因此该属性可以是任何合法的能够被Alluxio识别的UFS地址。在本示例中，为了简单，我们使用"),s("a",{attrs:{href:"https://docs.alluxio.io/os/user/stable/cn/ufs/WEB.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("WebUFS"),s("OutboundLink")],1),a._v("进行演示。")]),a._v(" "),s("p",[a._v("更多有关UFS的信息，请参考"),s("a",{attrs:{href:"https://docs.alluxio.io/os/user/stable/cn/ufs/OSS.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Alluxio文档-底层存储系统"),s("OutboundLink")],1),a._v("部分。")]),a._v(" "),s("blockquote",[s("p",[a._v("本示例将以Apache镜像站点上的Hbase v2.25相关资源作为演示中使用的远程文件。这个选择并没有任何特殊之处，你可以将这个远程文件修改为任意你喜欢的远程文件。但是，如果你想要和我们一样使用WebUFS进行操作的话，最好还是选择一个Apache镜像源站点( e.g. "),s("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/apache",target:"_blank",rel:"noopener noreferrer"}},[a._v("清华镜像源"),s("OutboundLink")],1),a._v(" )，因为根据目前WebUFS的实现，如果你选择其他更加复杂的网页作为WebUFS，你可能需要进行更多"),s("a",{attrs:{href:"https://docs.alluxio.io/os/user/stable/cn/ufs/WEB.html#%E9%85%8D%E7%BD%AEalluxio",target:"_blank",rel:"noopener noreferrer"}},[a._v("更复杂的配置"),s("OutboundLink")],1)])]),a._v(" "),s("p",[s("strong",[a._v("创建Dataset资源对象")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl create "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" dataset.yaml\ndataset.data.fluid.io/hbase created\n")])])]),s("p",[s("strong",[a._v("查看Dataset资源对象状态")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl get dataset hbase\nNAME    UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE      AGE\nhbase                                                                  NotBound   13s\n")])])]),s("p",[a._v("如上所示，"),s("code",[a._v("status")]),a._v("中的"),s("code",[a._v("phase")]),a._v("属性值为"),s("code",[a._v("NotBound")]),a._v("，这意味着该"),s("code",[a._v("Dataset")]),a._v("资源对象目前还未与任何"),s("code",[a._v("AlluxioRuntime")]),a._v("资源对象绑定，接下来，我们将创建一个"),s("code",[a._v("AlluxioRuntime")]),a._v("资源对象。")]),a._v(" "),s("p",[s("strong",[a._v("查看待创建的AlluxioRuntime资源对象")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ cat"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),s("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("runtime.yaml")]),a._v('\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: hbase\nspec:\n  replicas: 2\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\nEOF')]),a._v("\n")])])]),s("p",[s("strong",[a._v("创建AlluxioRuntime资源对象")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl create "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" runtime.yaml\nalluxioruntime.data.fluid.io/hbase created\n")])])]),s("p",[s("strong",[a._v("检查AlluxioRuntime资源对象是否已经创建")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl get alluxioruntime\nNAME    AGE\nhbase   55s\n")])])]),s("p",[s("code",[a._v("AlluxioRuntime")]),a._v("是另一个Fluid定义的CRD。一个"),s("code",[a._v("AlluxioRuntime")]),a._v("资源对象描述了在Kubernetes集群中运行一个Alluxio实例所需要的配置信息。")]),a._v(" "),s("p",[a._v("等待一段时间，让AlluxioRuntime资源对象中的各个组件得以顺利启动，你会看到类似以下状态：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl get pod\nNAME                 READY   STATUS    RESTARTS   AGE\nhbase-fuse-hvxgh     "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          27s\nhbase-fuse-sjhxk     "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          27s\nhbase-master-0       "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          62s\nhbase-worker-92cln   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          27s\nhbase-worker-rlb5w   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          27s\n")])])]),s("p",[s("strong",[a._v("再次查看Dataset资源对象状态")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl get dataset hbase\nNAME    UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nhbase   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v(".5MiB         0B       4GiB             "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("%                  Bound   2m39s\n")])])]),s("p",[a._v("因为已经与一个成功启动的AlluxioRuntime绑定，该Dataset资源对象的状态得到了更新，此时"),s("code",[a._v("PHASE")]),a._v("属性值已经变为"),s("code",[a._v("Bound")]),a._v("状态。通过上述命令可以获知有关资源对象的基本信息")]),a._v(" "),s("p",[s("strong",[a._v("查看AlluxioRuntime状态")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl get alluxioruntime hbase "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" wide\nNAME    READY MASTERS   DESIRED MASTERS   MASTER PHASE   READY WORKERS   DESIRED WORKERS   WORKER PHASE   READY FUSES   DESIRED FUSES   FUSE PHASE   AGE\nhbase   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("               "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("                 Ready          "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("               "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("                 Ready          "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("             "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("               Ready        2m50s\n")])])]),s("p",[s("code",[a._v("AlluxioRuntime")]),a._v("资源对象的"),s("code",[a._v("status")]),a._v("中包含了更多更详细的信息")]),a._v(" "),s("p",[s("strong",[a._v("查看与远程文件关联的PersistentVolume以及PersistentVolumeClaim")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl get "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("pv")]),a._v("\nNAME    CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM           STORAGECLASS   REASON   AGE\nhbase   100Gi      RWX            Retain           Bound    default/hbase                           18m\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl get pvc\nNAME    STATUS   VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS   AGE\nhbase   Bound    hbase    100Gi      RWX                           18m\n")])])]),s("p",[s("code",[a._v("Dataset")]),a._v("资源对象准备完成后（即与Alluxio实例绑定后），与该资源对象关联的PV, PVC已经由Fluid生成，应用可以通过该PVC完成远程文件在Pod中的挂载，并通过挂载目录实现远程文件访问")]),a._v(" "),s("h2",{attrs:{id:"远程文件访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#远程文件访问"}},[a._v("#")]),a._v(" 远程文件访问")]),a._v(" "),s("p",[s("strong",[a._v("查看待创建的应用")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ cat"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),s("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("nginx.yaml")]),a._v("\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      volumeMounts:\n        - mountPath: /data\n          name: hbase-vol\n  volumes:\n    - name: hbase-vol\n      persistentVolumeClaim:\n        claimName: hbase\nEOF")]),a._v("\n")])])]),s("p",[s("strong",[a._v("启动应用进行远程文件访问")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl create "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" nginx.yaml\n")])])]),s("p",[a._v("登录Nginx Pod:")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" nginx -- "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n")])])]),s("p",[a._v("查看远程文件挂载情况：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-1")]),a._v(" /data/hbase\nCHANGES.md\nRELEASENOTES.md\napi_compare_2.2.5RC0_to_2.2.4.html\nhbase-2.2.5-bin.tar.gz\nhbase-2.2.5-client-bin.tar.gz\nhbase-2.2.5-src.tar.gz\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" /data/hbase/*\n174K    /data/hbase/CHANGES.md\n106K    /data/hbase/RELEASENOTES.md\n115K    /data/hbase/api_compare_2.2.5RC0_to_2.2.4.html\n211M    /data/hbase/hbase-2.2.5-bin.tar.gz\n200M    /data/hbase/hbase-2.2.5-client-bin.tar.gz\n34M     /data/hbase/hbase-2.2.5-src.tar.gz\n")])])]),s("p",[a._v("登出Nginx Pod:")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v("\n")])])]),s("p",[a._v("正如你所见，WebUFS上所存储的全部文件(也就是hbase v2.2.5的相关文件)可以和本地文件完全没有区别的方式存在于某个Pod中，并且可以被该Pod十分方便地访问")]),a._v(" "),s("h2",{attrs:{id:"远程文件访问加速"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#远程文件访问加速"}},[a._v("#")]),a._v(" 远程文件访问加速")]),a._v(" "),s("p",[a._v("为了演示在访问远程文件时，你能获得多大的加速效果，我们提供了一个测试作业的样例:")]),a._v(" "),s("p",[s("strong",[a._v("查看待创建的测试作业")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ cat"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),s("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("app.yaml")]),a._v('\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: fluid-copy-test\nspec:\n  template:\n    spec:\n      restartPolicy: OnFailure\n      containers:\n        - name: busybox\n          image: busybox\n          command: ["/bin/sh"]\n          args: ["-c", "set -x; time cp -r /data/hbase ./"]\n          volumeMounts:\n            - mountPath: /data\n              name: hbase-vol\n      volumes:\n        - name: hbase-vol\n          persistentVolumeClaim:\n            claimName: hbase\nEOF')]),a._v("\n")])])]),s("p",[s("strong",[a._v("启动测试作业")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl create "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" app.yaml\njob.batch/fluid-test created\n")])])]),s("p",[a._v("该测试程序会执行"),s("code",[a._v("time cp -r /data/hbase ./")]),a._v("的shell命令，其中"),s("code",[a._v("/data/hbase")]),a._v("是远程文件在Pod中挂载的位置，该命令完成后会在终端显示命令执行的时长：")]),a._v(" "),s("p",[a._v("等待一段时间,待该作业运行完成,作业的运行状态可通过以下命令查看:")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl get pod\nNAME                    READY   STATUS      RESTARTS   AGE\nfluid-copy-test-h59w9   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("/1     Completed   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          1m25s\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),s("p",[a._v("如果看到如上结果,则说明该作业已经运行完成")]),a._v(" "),s("blockquote",[s("p",[a._v("注意: "),s("code",[a._v("fluid-copy-test-h59w9")]),a._v("中的"),s("code",[a._v("h59w9")]),a._v("为作业生成的标识,在你的环境中,这个标识可能不同,接下来的命令中涉及该标识的地方请以你的环境为准")])]),a._v(" "),s("p",[s("strong",[a._v("查看测试作业完成时间")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl logs fluid-copy-test-h59w9\n+ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("time")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" /data/hbase ./\nreal  0m "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("41")]),a._v(".21s\nuser  0m "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(".00s\nsys   0m "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(".35s\n")])])]),s("p",[a._v("可见，第一次远程文件的读取耗费了接近41s的时间。当然，你可能会觉得这并没有你预期的那么快，但是：")]),a._v(" "),s("p",[s("strong",[a._v("查看Dataset资源对象状态")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl get dataset hbase\nNAME    UFS TOTAL SIZE   CACHED     CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nhbase   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v(".5MiB         "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v(".5MiB   4GiB             "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("%                Bound   9m27s\n")])])]),s("p",[a._v("现在，所有远程文件都已经被缓存在了Alluxio中")]),a._v(" "),s("p",[s("strong",[a._v("再次启动测试作业")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl delete "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" app.yaml\n$ kubectl create "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" app.yaml\n")])])]),s("p",[a._v("由于远程文件已经被缓存，此次测试作业能够迅速完成：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl get pod\nNAME                    READY   STATUS      RESTARTS   AGE\nfluid-copy-test-d9h2x   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("/1     Completed   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          24s\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl logs fluid-copy-test-d9h2x\n+ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("time")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" /data/hbase ./\nreal  0m "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(".40s\nuser  0m "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(".00s\nsys   0m "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(".27s\n")])])]),s("p",[a._v("同样的文件访问操作仅耗费了0.4s")]),a._v(" "),s("p",[a._v("这种大幅度的加速效果归因于Alluxio所提供的强大的缓存能力，这种缓存能力意味着，只要你访问某个远程文件一次，该文件就会被缓存在Alluxio中，你的所有接下来的重复访问都不再需要进行远程文件读取，而是从Alluxio中直接获取数据，因此对于数据的访问加速也就不难解释了。")]),a._v(" "),s("blockquote",[s("p",[a._v("注意： 上述文件的访问速度与示例运行环境的网络条件有关，如果文件访问速度过慢，请更换更小的远程文件尝试")])]),a._v(" "),s("h2",{attrs:{id:"环境清理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境清理"}},[a._v("#")]),a._v(" 环境清理")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl delete "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);