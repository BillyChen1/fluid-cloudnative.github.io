"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[2180],{2796:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var i=l(7624),o=l(2172);const s={sidebar_label:"Developer Guide",sidebar_position:1},r="Developer Guide",t={id:"developer-manual/how_to_develop",title:"Developer Guide",description:"Requirements",source:"@site/docs/developer-manual/how_to_develop.md",sourceDirName:"developer-manual",slug:"/developer-manual/how_to_develop",permalink:"/docs/developer-manual/how_to_develop",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/docs/developer-manual/how_to_develop.md",tags:[],version:"current",lastUpdatedBy:"chenqiming",lastUpdatedAt:1712114955,formattedLastUpdatedAt:"Apr 3, 2024",sidebarPosition:1,frontMatter:{sidebar_label:"Developer Guide",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pod Scheduling Base on Runtime Tiered Locality",permalink:"/docs/user-manual/scheduling/tiered_locality_schedule"},next:{title:"Setting up Fluid Development Environment with Kind on MacOS",permalink:"/docs/developer-manual/dev_with_kind"}},a={},c=[{value:"Requirements",id:"requirements",level:2},{value:"How to Build, Run and Debug",id:"how-to-build-run-and-debug",level:2},{value:"Get Source Code",id:"get-source-code",level:3},{value:"Build Binary",id:"build-binary",level:3},{value:"Build Images",id:"build-images",level:3},{value:"Run Your Fluid on Kubernetes Cluster",id:"run-your-fluid-on-kubernetes-cluster",level:3},{value:"Unit Testing",id:"unit-testing",level:3},{value:"Basic Tests",id:"basic-tests",level:4},{value:"Integration Tests",id:"integration-tests",level:4},{value:"Running Fluid Controller Components Locally",id:"running-fluid-controller-components-locally",level:3},{value:"Debugging Fluid Components",id:"debugging-fluid-components",level:3},{value:"Debugging with Local Command Line",id:"debugging-with-local-command-line",level:4},{value:"Debugging with VSCode Locally",id:"debugging-with-vscode-locally",level:4},{value:"Debugging Controller Components",id:"debugging-controller-components",level:5},{value:"Debugging WebHook Components",id:"debugging-webhook-components",level:5},{value:"Remote Debugging",id:"remote-debugging",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"developer-guide",children:"Developer Guide"}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Git"}),"\n",(0,i.jsx)(n.li,{children:"Golang (version >= 1.13)"}),"\n",(0,i.jsx)(n.li,{children:"Docker (version >= 19.03)"}),"\n",(0,i.jsx)(n.li,{children:"Kubernetes (version >= 1.14)"}),"\n",(0,i.jsx)(n.li,{children:"GNU Make"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For installation of Golang, please refer to ",(0,i.jsx)(n.a,{href:"https://golang.org/dl/",children:"Install Golang"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"make"})," is usually in a ",(0,i.jsx)(n.code,{children:"build-essential"})," package in your distribution's package manager of choice. Make sure you have ",(0,i.jsx)(n.code,{children:"make"})," on your machine."]}),"\n",(0,i.jsxs)(n.p,{children:["There're great chances that you may want to run your implementation in a real Kubernetes cluster, so probably a Docker is needed for some necessary operations like building images.\nSee ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"Install Docker"})," for more information."]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-build-run-and-debug",children:"How to Build, Run and Debug"}),"\n",(0,i.jsx)(n.h3,{id:"get-source-code",children:"Get Source Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ mkdir -p $GOPATH/src/github.com/fluid-cloudnative/\n$ cd $GOPATH/src/github.com/fluid-cloudnative\n$ git clone https://github.com/fluid-cloudnative/fluid.git\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NOTE"}),": In this document, we build, run and debug under non-module environment."]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/golang/go/wiki/Modules",children:"Go Modules"})," for more information if some issue occurs to you."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"build-binary",children:"Build Binary"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Makefile"})," under project directory provides many tasks you may want to use including Test, Build, Debug, Deploy etc."]}),"\n",(0,i.jsx)(n.p,{children:"You can simply get a binary by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"# build dataset-controller, alluxioruntime-controller and csi Binary\n$ make build\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"# if you only want to build alluxioruntime-controller\n$ make alluxioruntime-controller-build\n"})}),"\n",(0,i.jsxs)(n.p,{children:["By default, the binary would be put under ",(0,i.jsx)(n.code,{children:"<fluid-path>/bin"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"build-images",children:"Build Images"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Set tags for images"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"# set name for image of dataset-controller\n$ export DATASET_CONTROLLER_IMG=<your-registry>/<your-namespace>/<img-name>\n# set name for image of alluxioruntime-controller\n$ export ALLUXIORUNTIME_CONTROLLER_IMG=<your-registry>/<your-namespace>/<img-name>\n# set name for image of  CSI\n$ export CSI_IMG=<your-registry>/<your-namespace>/<csi-img-name>\n# set name for image of init-user\n$ export INIT_USERS_IMG=<your-registry>/<your-namespace>/<csi-img-name>\n\n# build all images\n$ make docker-build-all\n\n# build and push all images using docker buildx (Run QEMU emulation before docker buildx, as below)\n$ docker run --rm --privileged multiarch/qemu-user-static --reset -p yes\n$ make docker-buildx-all-push\n"})}),"\n",(0,i.jsx)(n.p,{children:"Before running Fluid, you need to push the built image to an accessible image registry."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Login to a image registry"}),"\n",(0,i.jsx)(n.p,{children:"Make sure you've login to a docker image registry that you'd like to push your image to:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ sudo docker login <docker-registry>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"push your images:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ make docker-push-all\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"run-your-fluid-on-kubernetes-cluster",children:"Run Your Fluid on Kubernetes Cluster"}),"\n",(0,i.jsxs)(n.p,{children:["In the following steps, we assume you have properly configured ",(0,i.jsx)(n.code,{children:"KUBECONFIG"})," environment variable or set up ",(0,i.jsx)(n.code,{children:"~/.kube/config"}),". See ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/",children:"Kubeconfig docs"})," for more information."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Push your images to a image registry accessible to your Kubernetes cluster"}),"\n",(0,i.jsx)(n.p,{children:"If your images are pushed to some private repositories, make sure your Kubernetes cluster hold credentials for accessing those repositories."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Change image  in the samples we provide:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# <fluid-path>/config/fluid/patches/image_in_manager.yaml\n...\n...\ncontainers:\n  - name: manager\n    image: <registry>/<namespace>/<img-repo>:<img-tag>\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# <fluid-path>/config/fluid/patches/image_in_csi-plugin.yaml\n...\n...\ncontainers:\n  - name: plugins\n    image: <registry>/<namespace>/<csi-img-name>:<csi-img-tag>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install CRDs"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl apply -k config/crd\n"})}),"\n",(0,i.jsx)(n.p,{children:"Check CRD with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl get crd | grep fluid\nalluxiodataloads.data.fluid.io          2020-08-22T03:53:46Z\nalluxioruntimes.data.fluid.io           2020-08-22T03:53:46Z\ndatasets.data.fluid.io                  2020-08-22T03:53:46Z\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install your implementation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl apply -k config/fluid\n"})}),"\n",(0,i.jsx)(n.p,{children:"Check Fluid system with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod -n fluid-system\nNAME                                  READY   STATUS    RESTARTS   AGE\ncontroller-manager-7fd6457ccf-p7j2x   1/1     Running   0          84s\ncsi-nodeplugin-fluid-pj9tv            2/2     Running   0          84s\ncsi-nodeplugin-fluid-t8ctj            2/2     Running   0          84s\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run samples to verify your implementation"}),"\n",(0,i.jsx)(n.p,{children:"Here is a sample provided by us, you may want to rewrite it according to your implementation."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl apply -k config/samples\n"})}),"\n",(0,i.jsx)(n.p,{children:"Check sample pods:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod\nNAME                   READY   STATUS    RESTARTS   AGE\ncifar10-fuse-vb6l4     1/1     Running   0          6m15s\ncifar10-fuse-vtqpx     1/1     Running   0          6m15s\ncifar10-master-0       2/2     Running   0          8m24s\ncifar10-worker-729xz   2/2     Running   0          6m15s\ncifar10-worker-d6kmd   2/2     Running   0          6m15s\nnginx-0                1/1     Running   0          8m30s\nnginx-1                1/1     Running   0          8m30s\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check logs to verify your implementation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl logs -n fluid-system <controller_manager_name>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Clean up"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl delete -k config/samples\n$ kubectl delete -k config/fluid\n$ kubectl delete -k config/crd\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"unit-testing",children:"Unit Testing"}),"\n",(0,i.jsx)(n.h4,{id:"basic-tests",children:"Basic Tests"}),"\n",(0,i.jsx)(n.p,{children:"Execute following command from project root to run basic unit tests:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ make unit-test\n"})}),"\n",(0,i.jsx)(n.h4,{id:"integration-tests",children:"Integration Tests"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"kubebuilder"})," provided a integration test framework based on ",(0,i.jsx)(n.a,{href:"https://godoc.org/sigs.k8s.io/controller-runtime/pkg/envtest",children:"envtest"})," package. You must install ",(0,i.jsx)(n.code,{children:"kubebuilder"})," before running integration tests:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ os=$(go env GOOS)\n$ arch=$(go env GOARCH)\n$ curl -L https://go.kubebuilder.io/dl/2.3.1/${os}/${arch} | tar -xz -C /tmp/\n$ sudo mv /tmp/kubebuilder_2.3.1_${os}_${arch} /usr/local/kubebuilder\n$ export PATH=$PATH:/usr/local/kubebuilder/bin\n"})}),"\n",(0,i.jsx)(n.p,{children:"Next, run all unit tests (integration tests included) with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ make test\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NOTE:"})," When running unit tests on a non-linux system such as macOS, if testing failed and says ",(0,i.jsx)(n.code,{children:"exec format error"}),", you may need to check whether ",(0,i.jsx)(n.code,{children:"GOOS"})," is consistent with your actual OS."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"running-fluid-controller-components-locally",children:"Running Fluid Controller Components Locally"}),"\n",(0,i.jsxs)(n.p,{children:["The Fluid controller component supports local operation or debugging. The Fluid controller components include Dataset Controller, various runtime controllers, and Application Controller. Before running the controller component locally, it is necessary to configure kubeconfig in advance in the local environment (configured through the ",(0,i.jsx)(n.code,{children:"KUBECONFIG"})," environment variable or through the ",(0,i.jsx)(n.code,{children:"$HOME/.kube/config"})," file) and be able to access a Kubernetes cluster normally."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The Fluid CSI plugin cannot run locally to interact with the Kubernetes cluster. To run such components, it is necessary to first perform image construction, manually replace the corresponding image address of ",(0,i.jsx)(n.code,{children:"charts/fluid/fluid/values.yaml"}),", and then deploy it to the Kubernetes cluster."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The runtime controller depends on ",(0,i.jsx)(n.a,{href:"https://helm.sh/",children:(0,i.jsx)(n.code,{children:"heml"})}),". And related Helm Charts to function properly. Therefore, before running the Runtime Controller, execute the following command to configure the environment:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create a soft link for the helm command locally"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ ln -s $(which helm) /usr/local/bin/ddc-helm\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Create a soft link directory for related Charts locally"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ ln -s $GOPATH/src/github.com/fluid-cloudnative/fluid/charts $HOME/charts\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Taking the Alluxio Runtime Controller as an example, run the component locally using the following command\uff1a"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'# Configure environment variable parameters related to AlluxioRuntime\n$ export ALLUXIO_RUNTIME_IMAGE_ENV="alluxio/alluxio-dev:2.9.0"\n$ export ALLUXIO_FUSE_IMAGE_ENV="alluxio/alluxio-dev:2.9.0\n$ export DEFAULT_INIT_IMAGE_ENV="fluidcloudnative/init-users:v0.8.0-5bb4677"\n$ export MOUNT_ROOT="/runtime-mnt"\n$ export HOME="$HOME"\n\n# Open the development debugging mode, open leader-election, and start alluxioruntime-controller\n$ ./bin/alluxioruntime-controller start --development=true --enable-leader-election\n'})}),"\n",(0,i.jsx)(n.h3,{id:"debugging-fluid-components",children:"Debugging Fluid Components"}),"\n",(0,i.jsxs)(n.p,{children:["The Fluid controller component supports local operation or debugging. The Fluid controller components include Dataset Controller, various runtime controllers, and Application Controller. Before running the controller component locally, it is necessary to configure kubeconfig in advance in the local environment (configured through the ",(0,i.jsx)(n.code,{children:"KUBECONFIG"})," environment variable or through the ",(0,i.jsx)(n.code,{children:"$HOME/.kube/config"})," file) and be able to access a Kubernetes cluster normally."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The Fluid CSI plugin cannot run locally to interact with the Kubernetes cluster. To run such components, it is necessary to first perform image construction, manually replace the corresponding image address of ",(0,i.jsx)(n.code,{children:"charts/fluid/fluid/values.yaml"}),", and then deploy it to the Kubernetes cluster."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"debugging-with-local-command-line",children:"Debugging with Local Command Line"}),"\n",(0,i.jsxs)(n.p,{children:["Ensure that go help is installed in the environment, and refer to the ",(0,i.jsx)(n.a,{href:"https://github.com/go-delve/delve/tree/master/Documentation/installation",children:"go installation manual"})," for the specific installation process"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ dlv debug cmd/alluxio/main.go\n"})}),"\n",(0,i.jsx)(n.h4,{id:"debugging-with-vscode-locally",children:"Debugging with VSCode Locally"}),"\n",(0,i.jsxs)(n.p,{children:["If VSCode is used as the development environment, the ",(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=golang.go",children:"Go plugin"})," of VSCode can be directly installed and conduct local debugging."]}),"\n",(0,i.jsx)(n.h5,{id:"debugging-controller-components",children:"Debugging Controller Components"}),"\n",(0,i.jsxs)(n.p,{children:["Taking debugging the Alluxio Runtime Controller as an example, the Go code debugging task is defined in ",(0,i.jsx)(n.code,{children:"./.vscode/launch.json"})," as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "version": "0.2.0",\n    "configurations": [\n       {\n            "name": "Alluxio Runtime Controller",\n            "type": "go",\n            "request": "launch",\n            "mode": "debug",\n            "program": "cmd/alluxio/main.go",\n            "args": ["start", "--development=true", "--enable-leader-election"],\n            "env": {\n                "KUBECONFIG": "<path>/<to>/<kubeconfig>",\n                "ALLUXIO_RUNTIME_IMAGE_ENV": "alluxio/alluxio-dev:2.9.0",\n                "ALLUXIO_FUSE_IMAGE_ENV": "alluxio/alluxio-dev:2.9.0",\n                "DEFAULT_INIT_IMAGE_ENV": "fluidcloudnative/init-users:v0.8.0-5bb4677",\n                "MOUNT_ROOT": "/runtime-mnt",\n                "HOME": "<HOME_PATH>"\n            }\n        },\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.h5,{id:"debugging-webhook-components",children:"Debugging WebHook Components"}),"\n",(0,i.jsx)(n.p,{children:"Proxy access to WebHook in the cluster to the local machine:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"# 1. Install kt-connect\uff08https://github.com/alibaba/kt-connect\uff09\n$ curl -OL https://github.com/alibaba/kt-connect/releases/download/v0.3.7/ktctl_0.3.7_Linux_x86_64.tar.gz\n$ tar zxf ktctl_0.3.7_Linux_x86_64.tar.gz\n$ mv ktctl /usr/local/bin/ktctl\n$ ktctl --version\n\n# 2. Proxy access to WebHook in the cluster to the local machine\n$ ktctl\xa0exchange\xa0fluid-pod-admission-webhook \xa0--kubeconfig\xa0<path>/<to>/<kubeconfig>\xa0--namespace\xa0fluid-system\xa0--expose\xa09443\xa0\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Set the debug task in ",(0,i.jsx)(n.code,{children:"./.vscode/launch.json"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "version": "0.2.0",\n    "configurations": [\n       {\n            "name": "Fluid Webhook",\n            "type": "go",\n            "request": "launch",\n            "mode": "debug",\n            "program": "cmd/webhook/main.go",\n            "args": ["start", "--development=true", "--full-go-profile=false", "--pprof-addr=:6060"],\n            "env": {\n                "TIME_TRACK_DEBUG": "true",\n                "MY_POD_NAMESPACE": "fluid-system"\n            }\n        },\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"remote-debugging",children:"Remote Debugging"}),"\n",(0,i.jsx)(n.p,{children:"For components such as Fluid Webhook and Fluid CSI plugins, remote debugging is usually the more commonly used method. Please ensure that go help is correctly installed on both the local machine and component images."}),"\n",(0,i.jsx)(n.p,{children:"On remote host:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'$ dlv debug --headless --listen ":12345" --log --api-version=2 cmd/alluxio/main.go\n'})}),"\n",(0,i.jsx)(n.p,{children:"This will cause the remote host's debugging program to listen to the specified port (e.g. 12345)"}),"\n",(0,i.jsx)(n.p,{children:"On local machine:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'$ dlv connect "<remote-addr>:12345" --api-version=2\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Note: To debug remotely, make sure the specified port is not occupied and the firewall has been properly configured."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2172:(e,n,l)=>{l.d(n,{I:()=>t,M:()=>r});var i=l(1504);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);