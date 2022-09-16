(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{404:function(e,s,a){"use strict";a.r(s);var t=a(19),n=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),s("p",[e._v("You may encounter various problems during installation or development in Fluid. Usually, logs are useful for debugging. But the Runtime containers where Fluid's underlying Distributed Cache Engine is running, are distributed on different hosts under distributed environment, so it's quite annoying to collect these logs one by one. To make this troublesome work easier, we provided a "),s("a",{attrs:{href:"https://raw.githubusercontent.com/fluid-cloudnative/fluid/master/tools/diagnose-fluid.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("shell script"),s("OutboundLink")],1),e._v(" to help users collect logs more quickly. This document describes how to use that script.")]),e._v(" "),s("h2",{attrs:{id:"diagnose-fluid-using-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#diagnose-fluid-using-script"}},[e._v("#")]),e._v(" Diagnose Fluid using Script")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Make sure that script is executable")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" a+x diagnose-fluid.sh\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Get help message")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./diagnose-fluid.sh \nUsage:\n    ./diagnose-fluid.sh COMMAND "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nCOMMAND:\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v("\n        Display this "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v(" message.\n    collect\n        Collect pods logs of controller and runtime.\nOPTIONS:\n    -r, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--name")]),e._v(" name\n        Set the name of runtime.\n    -n, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--namespace")]),e._v(" name\n        Set the namespace of runtime.\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Collect logs")]),e._v(" "),s("p",[e._v("You can collect all the Runtime container logs for given name and namespace with:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./diagnose-fluid.sh collect "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--name")]),e._v(" cifar10 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--namespace")]),e._v(" default\n")])])]),s("blockquote",[s("p",[s("strong",[e._v("NOTES")]),e._v(":")]),e._v(" "),s("p",[e._v("As you can see from above command and help message, option "),s("code",[e._v("--name")]),e._v(" and "),s("code",[e._v("--namespace")]),e._v(" specified the name and namespace of Alluxio Runtime respectively.")])]),e._v(" "),s("p",[e._v("All the logs will be packed in a package under execution path.")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);