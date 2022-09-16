(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{427:function(a,s,e){"use strict";e.r(s);var t=e(19),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"在kubernetes集群上部署fluid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在kubernetes集群上部署fluid"}},[a._v("#")]),a._v(" 在Kubernetes集群上部署Fluid")]),a._v(" "),s("h2",{attrs:{id:"前提条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[a._v("#")]),a._v(" 前提条件")]),a._v(" "),s("ul",[s("li",[a._v("Git")]),a._v(" "),s("li",[a._v("Kubernetes集群（version >= 1.14）, 并且支持CSI功能")]),a._v(" "),s("li",[a._v("kubectl（version >= 1.14）")]),a._v(" "),s("li",[a._v("Helm（version >= 3.0）")])]),a._v(" "),s("p",[a._v("接下来的文档假设您已经配置好上述所有环境。")]),a._v(" "),s("p",[a._v("对于"),s("code",[a._v("kubectl")]),a._v("的安装和配置，请参考"),s("a",{attrs:{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/",target:"_blank",rel:"noopener noreferrer"}},[a._v("此处"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("p",[a._v("对于Helm 3的安装和配置，请参考"),s("a",{attrs:{href:"https://v3.helm.sh/docs/intro/install/",target:"_blank",rel:"noopener noreferrer"}},[a._v("此处"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"fluid安装步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fluid安装步骤"}},[a._v("#")]),a._v(" Fluid安装步骤")]),a._v(" "),s("h3",{attrs:{id:"获取fluid-chart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取fluid-chart"}},[a._v("#")]),a._v(" 获取Fluid Chart")]),a._v(" "),s("p",[a._v("您可以从"),s("a",{attrs:{href:"https://github.com/fluid-cloudnative/fluid/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("Fluid Releases"),s("OutboundLink")],1),a._v("下载最新的Fluid安装包。")]),a._v(" "),s("h3",{attrs:{id:"使用helm安装fluid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用helm安装fluid"}},[a._v("#")]),a._v(" 使用Helm安装Fluid")]),a._v(" "),s("p",[a._v("创建命名空间：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl create ns fluid-system\n")])])]),s("p",[a._v("安装Fluid：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ helm "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" fluid fluid.tgz\nNAME: fluid\nLAST DEPLOYED: Fri Jul "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("24")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v(":10:18 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("\nNAMESPACE: default\nSTATUS: deployed\nREVISION: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\nTEST SUITE: None\n")])])]),s("blockquote",[s("p",[s("code",[a._v("helm install")]),a._v("命令的一般格式是"),s("code",[a._v("helm install <RELEASE_NAME> <SOURCE>")]),a._v("，在上面的命令中，第一个"),s("code",[a._v("fluid")]),a._v("指定了安装的release名字，这可以自行更改，第二个"),s("code",[a._v("fluid.tgz")]),a._v("指定了helm chart所在路径。")])]),a._v(" "),s("h3",{attrs:{id:"使用helm将fluid更新到最新版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用helm将fluid更新到最新版本"}},[a._v("#")]),a._v(" 使用Helm将Fluid更新到最新版本")]),a._v(" "),s("p",[a._v("如果您此前已经安装过旧版本的Fluid，可以使用Helm进行更新。\n更新前，建议确保AlluxioRuntime资源对象中的各个组件已经顺利启动完成，也就是类似以下状态：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl get pod\nNAME                 READY   STATUS    RESTARTS   AGE\nhbase-fuse-chscz     "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          9h\nhbase-fuse-fmhr5     "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          9h\nhbase-master-0       "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          9h\nhbase-worker-bdbjg   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          9h\nhbase-worker-rznd5   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          9h\n")])])]),s("p",[a._v("由于helm upgrade不会更新CRD，需要先对其手动进行更新：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" zxvf fluid-0.5.0.tgz ./\n$ kubectl apply "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" fluid/crds/.\n")])])]),s("p",[a._v("更新：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ helm upgrade fluid fluid/\nRelease "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fluid"')]),a._v(" has been upgraded. Happy Helming"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\nNAME: fluid\nLAST DEPLOYED: Fri Mar "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(" 09:22:32 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("\nNAMESPACE: default\nSTATUS: deployed\nREVISION: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\nTEST SUITE: None\n")])])]),s("p",[a._v("此时，旧版本的controller不会自动结束，新版本的controller会停留在Pending状态：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" fluid-system get pods\nNAME                                         READY   STATUS    RESTARTS   AGE\nalluxioruntime-controller-56687869f6-g9l9n   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("/1     Pending   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          96s\nalluxioruntime-controller-5b64fdbbb-j9h6r    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          3m55s\ncsi-nodeplugin-fluid-r6crn                   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          94s\ncsi-nodeplugin-fluid-wvhdn                   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          87s\ndataset-controller-5b7848dbbb-rjkl9          "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          3m55s\ndataset-controller-64bf45c497-w8ncb          "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("/1     Pending   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          96s\n")])])]),s("p",[a._v("手动进行删除：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" fluid-system delete pod alluxioruntime-controller-5b64fdbbb-j9h6r \n$ kubectl "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" fluid-system delete pod dataset-controller-5b7848dbbb-rjkl9\n")])])]),s("blockquote",[s("p",[a._v("建议您从v0.3和v0.4升级。如果您安装的是更旧版本的Fluid，建议重新进行安装。")])]),a._v(" "),s("h3",{attrs:{id:"检查各组件状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检查各组件状态"}},[a._v("#")]),a._v(" 检查各组件状态")]),a._v(" "),s("p",[s("strong",[a._v("查看Fluid使用的CRD:")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl get crd "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" data.fluid.io\nalluxiodataloads.data.fluid.io          "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("-03-12T00:00:47Z\nalluxioruntimes.data.fluid.io           "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("-03-12T00:00:47Z\ndatabackups.data.fluid.io               "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("-03-12T00:03:45Z\ndataloads.data.fluid.io                 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("-03-12T00:00:47Z\ndatasets.data.fluid.io                  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("-03-12T00:00:47Z\njindoruntimes.data.fluid.io             "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("-03-12T00:03:45Z\n")])])]),s("p",[s("strong",[a._v("查看各Pod的状态:")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl get pod "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" fluid-system\nNAME                                         READY   STATUS    RESTARTS   AGE\nalluxioruntime-controller-5dfb5c7966-mkgzb   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          2d1h\ncsi-nodeplugin-fluid-64h69                   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          2d1h\ncsi-nodeplugin-fluid-tc7fx                   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          2d1h\ndataset-controller-7c4bc68b96-26mcb          "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          2d1h\n")])])]),s("p",[a._v("如果Pod状态如上所示，那么Fluid就可以正常使用了！")]),a._v(" "),s("p",[s("strong",[a._v("查看各Pod内程序的版本:")])]),a._v(" "),s("p",[a._v("csi-nodeplugin、alluxioruntime-controller、dataset-controller在启动时，会将自身的版本信息打印到日志中。"),s("br"),a._v("\n如果您使用我们提供的charts进行安装，它们的版本应该是完全一致的。"),s("br"),a._v("\n如果您是手动安装部署，它们的版本可能不完全一致，可以分别依次查看：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ kubectl logs csi-nodeplugin-fluid-tc7fx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" plugins  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" fluid-system "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v("\n$ kubectl logs alluxioruntime-controller-5dfb5c7966-mkgzb "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" fluid-system "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v("\n$ kubectl logs dataset-controller-7c4bc68b96-26mcb  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" fluid-system "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v("\n")])])]),s("p",[a._v("打印出的日志如下格式：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("/10/27 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":16:02 BuildDate: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-10-26_14:04:22\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("/10/27 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":16:02 GitCommit: f2c3a3fa1335cb0384e565f17a4f3284a6507cef\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("/10/27 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":16:02 GitTreeState: dirty\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("/10/27 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":16:02 GoVersion: go1.14.2\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("/10/27 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":16:02 Compiler: gc\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("/10/27 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":16:02 Platform: linux/amd64\n")])])]),s("p",[a._v("若Pod打印的日志已经被清理掉，可以执行下列命令查看版本：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ kubectl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" csi-nodeplugin-fluid-tc7fx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" plugins  fluid-csi version "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" fluid-system\n$ kubectl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" alluxioruntime-controller-5dfb5c7966-mkgzb alluxioruntime-controller version "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" fluid-system\n$ kubectl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" dataset-controller-7c4bc68b96-26mcb dataset-controller version "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v("  fluid-system \n")])])]),s("h3",{attrs:{id:"fluid使用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fluid使用示例"}},[a._v("#")]),a._v(" Fluid使用示例")]),a._v(" "),s("p",[a._v("有关Fluid的使用示例,可以参考我们提供的示例文档:")]),a._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/samples/"}},[a._v("远程文件访问加速")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/samples/data_co_locality.html"}},[a._v("数据缓存亲和性调度")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/samples/machinelearning.html"}},[a._v("用Fluid加速机器学习训练")])],1)]),a._v(" "),s("h3",{attrs:{id:"卸载fluid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载fluid"}},[a._v("#")]),a._v(" 卸载Fluid")]),a._v(" "),s("p",[a._v("为了安全的卸载fluid，在卸载前，首先需要检查fluid相关的自定义资源对象是否已被清除：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl get crds "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" custom-columns"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("NAME:.metadata.name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" data.fluid.io  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("':t;N;s/\\n/,/;b t'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" kubectl get --all-namespaces\n")])])]),s("p",[a._v("如果确认已经删除所有资源对象，则可以安全卸载fluid：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ helm delete fluid\n$ kubectl delete "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" fluid/crds\n$ kubectl delete ns fluid-system\n")])])]),s("blockquote",[s("p",[s("code",[a._v("helm delete")]),a._v("命令中的"),s("code",[a._v("fluid")]),a._v("对应安装时指定的<RELEASE_NAME>。")])]),a._v(" "),s("h3",{attrs:{id:"高级配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高级配置"}},[a._v("#")]),a._v(" 高级配置")]),a._v(" "),s("p",[a._v("在一些特定的云厂商实现下， 默认mount根目录"),s("code",[a._v("/runtime-mnt")]),a._v("是不可写的,因此需要修改目录位置")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("helm install fluid --set runtime.mountRoot=/var/lib/docker/runtime-mnt fluid\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);