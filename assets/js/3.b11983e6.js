(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{319:function(t,e,a){},320:function(t,e,a){},326:function(t,e,a){},343:function(t,e,a){"use strict";a(319)},344:function(t,e,a){"use strict";a(320)},351:function(t,e,a){"use strict";a(326)},366:function(t,e,a){"use strict";var i={name:"Home",components:{NavLink:a(318).a},computed:{data(){return this.$page.frontmatter},featureSection(){return{text:this.data.featureSection}},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}},fluidGithubLink:()=>({link:"https://github.com/fluid-cloudnative/fluid",text:"Github"}),fluidDownloadLink(){return{link:"https://github.com/fluid-cloudnative/fluid/releases",text:this.data.downloadText}}}},n=(a(343),a(344),a(19)),s=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero",height:"200px",width:"200px"}}):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[e("b",[t._v(t._s(t.data.tagline||t.$description||"Welcome to your VuePress site"))])]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("el-button",{attrs:{type:"primary",icon:"el-icon-git",onclick:"window.open('https://github.com/fluid-cloudnative/fluid','_blank')"}},[e("i",{staticClass:"el-icon-git"}),t._v("  Github\n         ")]),t._v(" "),e("el-button",{attrs:{type:"primary",icon:"el-icon-download",onclick:"window.open('https://github.com/fluid-cloudnative/fluid/releases','_blank')"}},[t._v("\n           "+t._s(t.fluidDownloadLink.text)+"\n         ")]),t._v(" "),e("el-button",{attrs:{type:"primary",icon:"el-icon-s-management"}},[e("NavLink",{staticStyle:{color:"#fff"},attrs:{item:t.actionLink}})],1)],1):t._e()]),t._v(" "),e("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[e("h1",[e("a",{staticClass:"header-anchor",attrs:{href:"#Features"}},[t._v("#")]),t._v("\n        "+t._s(t.featureSection.text)+"\n     ")]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,i){return e("div",{key:i,staticClass:"feature"},[e("center",[e("img",{attrs:{src:t.$site.themeConfig.featureLogos[i],height:"50px"}})]),t._v(" "),e("center",[e("h2",[t._v(t._s(a.title))])]),t._v(" "),e("p",[t._v(t._s(a.details))])],1)})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),e("div"),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n       "+t._s(t.data.footer)+"\n     ")]):t._e()],1)])}),[],!1,null,"6b161647",null);e.a=s.exports},367:function(t,e,a){"use strict";var i=a(345),n=a(365),s=a(368),o=a(341);function l(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var r={name:"Navbar",components:{SidebarButton:s.a,NavLinks:o.a,SearchBox:n.a,AlgoliaSearchBox:i.a},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(l(this.$el,"paddingLeft"))+parseInt(l(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},c=(a(351),a(19)),u=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.hlogo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.hlogo),alt:t.$siteTitle}}):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.a=u.exports}}]);