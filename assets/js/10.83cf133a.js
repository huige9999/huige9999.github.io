(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{476:function(t,a,s){t.exports=s.p+"assets/img/guanwang.3968ca99.png"},477:function(t,a,s){t.exports=s.p+"assets/img/guanwang2.14ac33cf.png"},478:function(t,a,s){t.exports=s.p+"assets/img/guanwang3.eaf2967e.png"},479:function(t,a,s){t.exports=s.p+"assets/img/guanwang4.ad932614.png"},480:function(t,a,s){t.exports=s.p+"assets/img/guanwang5.749a7eab.png"},516:function(t,a,s){"use strict";s.r(a);var n=s(2),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-问题描述"}},[t._v("#")]),t._v(" 1. 问题描述")]),t._v(" "),a("p",[a("img",{attrs:{src:s(476),alt:"图1"}})]),t._v(" "),a("p",[t._v("正常文档流下，块盒的宽度撑满整个包含块的、但是如上图所示：页面容器宽度的数值是正确的(和包含块的宽度一致，都是1000px)，但是视觉效果上却并没有撑满整个父容器？")]),t._v(" "),a("h2",{attrs:{id:"_2-探索研究"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-探索研究"}},[t._v("#")]),t._v(" 2. 探索研究")]),t._v(" "),a("p",[t._v("我将页面中内容溢出的模块暂时注释起来，然后刷新页面就正常了!\n"),a("img",{attrs:{src:s(477),alt:"图2"}})]),t._v(" "),a("p",[t._v("选一个内容溢出的模块进行研究：\n"),a("img",{attrs:{src:s(478),alt:"图3"}}),t._v("\n这个模块的父容器是按正常文档流布局的，它的宽度是正常的\n"),a("img",{attrs:{src:s(479),alt:"图3"}}),t._v("\n但是它的子元素用了网格布局，强行设置5列，导致内容溢出。\n从而破坏了正常文档流布局的规则！")]),t._v(" "),a("h2",{attrs:{id:"_3-总结与归纳"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-总结与归纳"}},[t._v("#")]),t._v(" 3. 总结与归纳")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("一些特殊的布局(比如flex布局、网格布局等)或者样式规则(white-space:nowrap等)会导致内容溢出")])]),t._v(" "),a("li",[a("p",[t._v("正常文档流下，父盒子都是正常遵循文档流的规则，一旦某个子盒子的内容溢出，会导致滚动条的出现\n"),a("img",{attrs:{src:s(480),alt:"图3"}})])]),t._v(" "),a("li",[a("p",[t._v("至于问题描述中所说的：“"),a("em",[t._v("页面容器宽度的数值是正确的(和包含块的宽度一致，都是1000px)，但是视觉效果上却并没有撑满整个父容器？”")]),t._v("\n这个我认为是开发者工具的bug,并且经测试偶尔会出现这种情况")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);