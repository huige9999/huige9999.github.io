(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{445:function(t,a,s){t.exports=s.p+"assets/img/guanwang11.81b1b18d.png"},497:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"问题背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题背景"}},[t._v("#")]),t._v(" 问题背景")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// router-link to设置链接跳转地址\n <router-link to="/statement" target="_blank">法律声明</router-link>\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("在https://域名 访问当前页面时，渲染出来的a标签地址是正常的")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<a href="/statement"/>\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("在https://域名/a/ 访问时,渲染出来的a标签地址会拼接到/a后面")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<a href="/a/statement"/>\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("而把域名后的斜杠去掉，就正常了")]),t._v(" "),a("p",[t._v("这一现象很明显反映出：链接地址写的是相对路径，即：router-link的to属性值没有带斜杠")]),t._v(" "),a("p",[t._v("https://域名/a/情况下，相对于/a/下所以是 /a/statement\nhttps://域名/a情况下，相对于/下所以是/statement")]),t._v(" "),a("p",[t._v("可是这么明显的问题指向为什么我会想不到呢?")]),t._v(" "),a("p",[a("strong",[t._v("项目环境")]),t._v("\n本项目使用了PrerenderSPAPlugin插件，该插件在项目构建阶段会开启一个Chrome内核按照路由把对应的页面提前渲染成html。\n而渲染出的html文件中,a标签的地址就是/statment\n我认为预渲染出的html是纯静态的，不应该受网页地址的影响，所以陷入了误区!")]),t._v(" "),a("h2",{attrs:{id:"问题分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题分析"}},[t._v("#")]),t._v(" 问题分析")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("router-link组件会被渲染成a标签\nrouterlink内部会根据当前页面路径、目标路径来设置a标签的href值\n"),a("img",{attrs:{src:s(445),alt:"alt text"}})])]),t._v(" "),a("li",[a("p",[t._v("预渲染出的页面不是纯静态的Html，带有编译了vue框架的js代码还在(即：js渲染html这一过程还是会执行),所以渲染出来的a标签值是动态的")])])]),t._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("预渲染或者SSR技术方案既能解决SEO问题，也能保持单页应用的流畅体验")])]),t._v(" "),a("li",[a("p",[t._v("服务端渲染是在构建阶段提前渲染出html这样方便SEO以及防止白屏\n发布到线上后和原来的单页应用一样，通过Js渲染出页面")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);