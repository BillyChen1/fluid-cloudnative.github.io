(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{396:function(e,a,s){"use strict";s.r(a);var t=s(19),n=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"demo-cache-co-locality-for-workload-scheduling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo-cache-co-locality-for-workload-scheduling"}},[e._v("#")]),e._v(" DEMO - Cache Co-locality for Workload Scheduling")]),e._v(" "),a("p",[e._v("In Fluid, remote files specified in "),a("code",[e._v("Dataset")]),e._v(" object are schedulable, which means you are able to control where to put your data in a k8s cluster,\njust like what you may have done to Pods. Also, Fluid is able to make cache co-locality scheduling decisions for workloads to minimize overhead costs.")]),e._v(" "),a("p",[e._v("This demo will show you an overview about features mentioned above.")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("Before everything we are going to do, please refer to "),a("RouterLink",{attrs:{to:"/userguide/install.html"}},[e._v("Installation Guide")]),e._v(" to install Fluid on your Kubernetes Cluster, and make sure all the components used by Fluid are ready like this:")],1),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl get pod "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-n")]),e._v(" fluid-system\nNAME                                  READY   STATUS    RESTARTS   AGE\nalluxioruntime-controller-5b64fdbbb-84pc6   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          8h\ncsi-nodeplugin-fluid-fwgjh                  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("/2     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          8h\ncsi-nodeplugin-fluid-ll8bq                  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("/2     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          8h\ndataset-controller-5b7848dbbb-n44dj         "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          8h\n")])])]),a("p",[e._v('Normally, you shall see a Pod named "dataset-controller", a Pod named "alluxioruntime-controller" and several Pods named "csi-nodeplugin".\nThe num of "csi-nodeplugin" Pods depends on how many nodes your Kubernetes cluster have(e.g. 2 in this demo), so please make sure all "csi-nodeplugin" Pods are working properly.')]),e._v(" "),a("h2",{attrs:{id:"set-up-workspace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-workspace"}},[e._v("#")]),e._v(" Set Up Workspace")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("any-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/co-locality\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("any-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/co-locality\n")])])]),a("h2",{attrs:{id:"install-resources-to-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-resources-to-kubernetes"}},[e._v("#")]),e._v(" Install Resources to Kubernetes")]),e._v(" "),a("p",[a("strong",[e._v("Check all nodes in your Kubernetes cluster")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl get nodes\nNAME                       STATUS   ROLES    AGE     VERSION\ncn-beijing.192.168.1.146   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   7d14h   v1.16.9-aliyun.1\ncn-beijing.192.168.1.147   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   7d14h   v1.16.9-aliyun.1\n")])])]),a("p",[a("strong",[e._v("Label one of the nodes")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl label nodes cn-beijing.192.168.1.146 hbase-cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\n")])])]),a("p",[e._v("Since we'll use "),a("code",[e._v("NodeSelector")]),e._v(" to manage where to put our data, we mark the desired node by labeling it.")]),e._v(" "),a("p",[a("strong",[e._v("Check all nodes again")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl get "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("node")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-L")]),e._v(" hbase-cache\nNAME                       STATUS   ROLES    AGE     VERSION            HBASE-CACHE\ncn-beijing.192.168.1.146   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   7d14h   v1.16.9-aliyun.1   "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\ncn-beijing.192.168.1.147   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   7d14h   v1.16.9-aliyun.1   \n")])])]),a("p",[e._v("Only one of the two nodes holds a label "),a("code",[e._v("hbase-cache=true")]),e._v(". In the following steps, we are going to make sure it's the only location the data cache can be put on.")]),e._v(" "),a("p",[a("strong",[e._v("Check the "),a("code",[e._v("Dataset")]),e._v(" object to be created")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ cat"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("dataset.yaml")]),e._v('\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hbase\nspec:\n  mounts:\n    - mountPoint: https://downloads.apache.org/hbase/stable/\n      name: hbase\n  nodeAffinity:\n    required:\n      nodeSelectorTerms:\n        - matchExpressions:\n            - key: hbase-cache\n              operator: In\n              values:\n                - "true"\nEOF')]),e._v("\n")])])]),a("p",[e._v("We defined a "),a("code",[e._v("nodeSelectorTerm")]),e._v(" in "),a("code",[e._v("Dataset")]),e._v(" object's "),a("code",[e._v("spec")]),e._v(" to make sure only nodes with label "),a("code",[e._v("hbase-cache=true")]),e._v(" are considered to be available for the dataset.")]),e._v(" "),a("p",[a("strong",[e._v("Create the dataset object")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl create "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v(" dataset.yaml\ndataset.data.fluid.io/hbase created\n")])])]),a("p",[a("strong",[e._v("Check the "),a("code",[e._v("AlluxioRuntime")]),e._v(" object to be created")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ cat"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("runtime.yaml")]),e._v('\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: hbase\nspec:\n  replicas: 2\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\nEOF')]),e._v("\n")])])]),a("p",[e._v("In this snippet of yaml, there are many specifications used by Fluid to launch an Alluxio instance. The "),a("code",[e._v("spec.replicas")]),e._v(" in the yaml above is set to 2, which means an Alluxio instance with 1 master and 2 workers is expected to be launched.")]),e._v(" "),a("p",[a("strong",[e._v("Create the "),a("code",[e._v("AlluxioRuntime")]),e._v(" object")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl create "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v(" runtime.yaml\nalluxioruntime.data.fluid.io/hbase created\n\n$ kubectl get pod "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-o")]),e._v(" wide\nNAME                 READY   STATUS    RESTARTS   AGE    IP              NODE                       NOMINATED NODE   READINESS GATES\nhbase-fuse-42csf     "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          104s   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".1.146   cn-beijing.192.168.1.146   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nhbase-master-0       "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("/2     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          3m3s   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".1.147   cn-beijing.192.168.1.147   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nhbase-worker-l62m4   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("/2     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          104s   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".1.146   cn-beijing.192.168.1.146   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("While two running workers are expected, there's only one running on the node with label "),a("code",[e._v("hbase-cache=true")]),e._v(". The "),a("code",[e._v("nodeSelectorTerm")]),e._v(" stops another worker from being deployed.")]),e._v(" "),a("p",[a("strong",[e._v("Check status of the "),a("code",[e._v("AlluxioRuntime")]),e._v(" object")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl get alluxioruntime hbase "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-o")]),e._v(" wide\nNAME    READY MASTERS   DESIRED MASTERS   MASTER PHASE   READY WORKERS   DESIRED WORKERS   WORKER PHASE   READY FUSES   DESIRED FUSES   FUSE PHASE     AGE\nhbase   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("               "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("                 Ready          "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("               "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("                 PartialReady   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("               PartialReady   4m3s\n")])])]),a("p",[e._v("As expected, "),a("code",[e._v("Worker Phase")]),e._v(" is "),a("code",[e._v("PartialReady")]),e._v(" and "),a("code",[e._v("Ready Workers: 1")]),e._v(" is less than "),a("code",[e._v("Desired Workers: 2")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Check the workload to be created")])]),e._v(" "),a("p",[e._v("A sample workload is provided to demonstrate how cache co-locality scheduling works. Let's check it out first:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ cat"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("app.yaml")]),e._v('\napiVersion: apps/v1beta1\nkind: StatefulSet\nmetadata:\n  name: nginx\n  labels:\n    app: nginx\nspec:\n  replicas: 2\n  serviceName: "nginx"\n  podManagementPolicy: "Parallel"\n  selector: # define how the deployment finds the pods it manages\n    matchLabels:\n      app: nginx\n  template: # define the pods specifications\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      affinity:\n        # prevent two Nginx Pod from being scheduled at the same Node\n        # just for demonstrating co-locality demo\n        podAntiAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n          - labelSelector:\n              matchExpressions:\n              - key: app\n                operator: In\n                values:\n                - nginx\n            topologyKey: "kubernetes.io/hostname"\n      containers:\n        - name: nginx\n          image: nginx\n          volumeMounts:\n            - mountPath: /data\n              name: hbase-vol\n      volumes:\n        - name: hbase-vol\n          persistentVolumeClaim:\n            claimName: hbase\nEOF')]),e._v("\n")])])]),a("p",[e._v("The "),a("code",[e._v("podAntiAffinity")]),e._v(" property might be a little confusing.\nHere is the explanation: The "),a("code",[e._v("podAntiAffinity")]),e._v(" property makes sure all pods created by the workload should be distributed across different nodes, which can provide us a clear view of how cache co-locality scheduling works.\nIn short, it's just a property for demonstration, you don't need to put much focus on that 😃")]),e._v(" "),a("p",[a("strong",[e._v("Run the workload")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl create "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v(" app.yaml\nstatefulset.apps/nginx created\n")])])]),a("p",[a("strong",[e._v("Check status of the workload")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl get pod "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-o")]),e._v(" wide "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-l")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("nginx\nNAME      READY   STATUS    RESTARTS   AGE    IP              NODE                       NOMINATED NODE   READINESS GATES\nnginx-0   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          2m5s   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".1.146   cn-beijing.192.168.1.146   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nnginx-1   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("/1     Pending   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          2m5s   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("                     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("Only one Pod is ready, and running on the only node that matches the "),a("code",[e._v("nodeSelectorTerm")])]),e._v(" "),a("p",[a("strong",[e._v("Check the reason why it's still not ready")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl describe pod nginx-1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nEvents:\n  Type     Reason            Age        From               Message\n  ----     ------            ----       ----               -------\n  Warning  FailedScheduling  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("unknown"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("  default-scheduler  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("/2 nodes are available: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" didn"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'t match pod affinity/anti-affinity, 1 node(s) didn'")]),e._v("t satisfy existing pods anti-affinity rules, "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" had volume "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("node")]),e._v(" affinity conflict.\n  Warning  FailedScheduling  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("unknown"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("  default-scheduler  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("/2 nodes are available: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" didn"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'t match pod affinity/anti-affinity, 1 node(s) didn'")]),e._v("t satisfy existing pods anti-affinity rules, "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" had volume "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("node")]),e._v(" affinity conflict.\n")])])]),a("p",[e._v("As you may have seen, for one reason, "),a("code",[e._v("podAntiAffinity")]),e._v(" prevents "),a("code",[e._v("nginx-1")]),e._v(" Pod from being scheduled together with "),a("code",[e._v("nginx-0")]),e._v(". For another, there's only one node satisfying the given affinity condition.")]),e._v(" "),a("p",[a("strong",[e._v("Label another node")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl label "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("node")]),e._v(" cn-beijing.192.168.1.147 hbase-cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\n")])])]),a("p",[e._v("Now all of the two nodes hold the same label "),a("code",[e._v("hbase-cache=true")]),e._v(", re-check all the pods:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl get pod "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-o")]),e._v(" wide\nNAME                 READY   STATUS    RESTARTS   AGE   IP              NODE                       NOMINATED NODE   READINESS GATES\nhbase-fuse-42csf     "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          44m   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".1.146   cn-beijing.192.168.1.146   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nhbase-fuse-kth4g     "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          10m   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".1.147   cn-beijing.192.168.1.147   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nhbase-master-0       "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("/2     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          46m   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".1.147   cn-beijing.192.168.1.147   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nhbase-worker-l62m4   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("/2     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          44m   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".1.146   cn-beijing.192.168.1.146   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nhbase-worker-rvncl   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("/2     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          10m   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".1.147   cn-beijing.192.168.1.147   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("There're two running Alluxio workers now.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl get alluxioruntime hbase "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-o")]),e._v(" wide\nNAME    READY MASTERS   DESIRED MASTERS   MASTER PHASE   READY WORKERS   DESIRED WORKERS   WORKER PHASE   READY FUSES   DESIRED FUSES   FUSE PHASE   AGE\nhbase   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("               "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("                 Ready          "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("               "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("                 Ready          "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("               Ready        46m43s\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl get pod "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-l")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-o")]),e._v(" wide\nNAME      READY   STATUS    RESTARTS   AGE   IP              NODE                       NOMINATED NODE   READINESS GATES\nnginx-0   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          21m   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".1.146   cn-beijing.192.168.1.146   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nnginx-1   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          21m   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".1.147   cn-beijing.192.168.1.147   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("Another nginx Pod is also no longer pending.")]),e._v(" "),a("p",[e._v("In conclusion, schedulable data cache and cache co-locality scheduling for workloads are both supported by Fluid. Usually, they work together and offer a more flexible way to users who need some data management in Kubernetes.")]),e._v(" "),a("h2",{attrs:{id:"clean-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clean-up"}},[e._v("#")]),e._v(" Clean Up")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl delete "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# unlabel nodes")]),e._v("\n$ kubectl label "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("node")]),e._v(" cn-beijing.192.168.1.146 hbase-cache-\n$ kubectl label "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("node")]),e._v(" cn-beijing.192.168.1.147 hbase-cache-\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);