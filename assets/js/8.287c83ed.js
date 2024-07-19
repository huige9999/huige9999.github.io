(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{442:function(t,a,s){t.exports=s.p+"assets/img/1.ce7e6066.png"},443:function(t,a,s){t.exports=s.p+"assets/img/2.9d0bf26a.png"},444:function(t,a,s){t.exports=s.p+"assets/img/3.dad03e69.png"},445:function(t,a,s){t.exports=s.p+"assets/img/5.4deb706e.png"},446:function(t,a,s){t.exports=s.p+"assets/img/6.0be07a45.png"},447:function(t,a,s){t.exports=s.p+"assets/img/4.92f687b9.png"},448:function(t,a,s){t.exports=s.p+"assets/img/7.ab50b1f6.png"},472:function(t,a,s){"use strict";s.r(a);var r=s(2),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"效果预览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#效果预览"}},[t._v("#")]),t._v(" 效果预览")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://static-mp-9dce15e7-ff51-47fb-856d-8e74f2e81915.next.bspapp.com/mahjong/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("预览地址"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:s(442),alt:"示例图"}})]),t._v(" "),a("h2",{attrs:{id:"宏观分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏观分析"}},[t._v("#")]),t._v(" 宏观分析")]),t._v(" "),a("h3",{attrs:{id:"前置基础知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置基础知识"}},[t._v("#")]),t._v(" 前置基础知识")]),t._v(" "),a("ul",[a("li",[t._v("只考虑数字牌且只有一种牌型“万”的情况(1到9表示1万到9万)")]),t._v(" "),a("li",[t._v("麻将的胡牌规则为：符合公式 mAAA+nABC+DD 其中 m、n为自然数且m + n = 4 或者符合公式 7DD")]),t._v(" "),a("li",[t._v("同一个值的牌有4张，比如有4张1万，4张2万，4张3万，4张4万，4张5万，4张6万，4张7万，4张8万，4张9万")]),t._v(" "),a("li",[t._v("听牌表示玩家手里有13张牌，再摸一张符合麻将胡牌规则的牌就能胡了，此时这13张牌的状态符合听牌条件")])]),t._v(" "),a("h3",{attrs:{id:"实现思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现思路"}},[t._v("#")]),t._v(" 实现思路")]),t._v(" "),a("ol",[a("li",[t._v("首先生成一副牌(4张1万、4张2万、4张3万....、4张9万)")]),t._v(" "),a("li",[t._v("打乱这副牌")]),t._v(" "),a("li",[t._v("从打乱的牌中取出13张牌")]),t._v(" "),a("li",[t._v("判断是否存在[1,9] 能使得这13张牌胡牌")]),t._v(" "),a("li",[t._v("如果有则说明13张牌听牌了，没有的话重新执行1->4")])]),t._v(" "),a("h2",{attrs:{id:"细节分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#细节分析"}},[t._v("#")]),t._v(" 细节分析")]),t._v(" "),a("h3",{attrs:{id:"如何判断14张牌是否胡牌"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何判断14张牌是否胡牌"}},[t._v("#")]),t._v(" 如何判断14张牌是否胡牌?")]),t._v(" "),a("h4",{attrs:{id:"_1-分成两种情况maaa-nabc-dd和7dd来讨论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-分成两种情况maaa-nabc-dd和7dd来讨论"}},[t._v("#")]),t._v(" 1. 分成两种情况mAAA+nABC+DD和7DD来讨论")]),t._v(" "),a("p",[a("img",{attrs:{src:s(443),alt:"example"}})]),t._v(" "),a("h4",{attrs:{id:"_2-先来研究maaa-nabc-dd的情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-先来研究maaa-nabc-dd的情况"}},[t._v("#")]),t._v(" 2. 先来研究mAAA+nABC+DD的情况")]),t._v(" "),a("h5",{attrs:{id:"step1-检查aaa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step1-检查aaa"}},[t._v("#")]),t._v(" step1: 检查AAA")]),t._v(" "),a("p",[a("img",{attrs:{src:s(444),alt:"example"}})]),t._v(" "),a("h5",{attrs:{id:"step2-检查abc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step2-检查abc"}},[t._v("#")]),t._v(" step2:检查ABC")]),t._v(" "),a("p",[a("img",{attrs:{src:s(445),alt:"alt text"}})]),t._v(" "),a("h5",{attrs:{id:"step3-检查dd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step3-检查dd"}},[t._v("#")]),t._v(" step3:检查DD")]),t._v(" "),a("p",[a("img",{attrs:{src:s(446),alt:"alt text"}})]),t._v(" "),a("h5",{attrs:{id:"step4-最后再来看下递归的出口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step4-最后再来看下递归的出口"}},[t._v("#")]),t._v(" step4：最后再来看下递归的出口")]),t._v(" "),a("p",[a("img",{attrs:{src:s(447),alt:"alt text"}})]),t._v(" "),a("h4",{attrs:{id:"_3-再来研究7dd的情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-再来研究7dd的情况"}},[t._v("#")]),t._v(" 3. 再来研究7DD的情况")]),t._v(" "),a("p",[a("img",{attrs:{src:s(448),alt:"alt text"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);