(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{560:function(a,_,v){"use strict";v.r(_);var t=v(2),s=Object(t.a)({},(function(){var a=this,_=a._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h2",{attrs:{id:"单调有界收敛准则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#单调有界收敛准则"}},[a._v("#")]),a._v(" 单调有界收敛准则")]),a._v(" "),_("p",[a._v("数列Xn单调、有界(增上界、减下界)则极限存在")]),a._v(" "),_("h3",{attrs:{id:"解题思路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[a._v("#")]),a._v(" 解题思路")]),a._v(" "),_("ol",[_("li",[a._v("先看单调性")]),a._v(" "),_("li",[a._v("在确定对应方向是否有界")])]),a._v(" "),_("blockquote",[_("p",[a._v("一般在求单调性的过程中，有界性会顺带明确。因为求数列单调性会确定某个不等式的关系，该关系能反映出是否有界")])]),a._v(" "),_("h3",{attrs:{id:"解题小结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解题小结"}},[a._v("#")]),a._v(" 解题小结")]),a._v(" "),_("p",[a._v("若题目给出递推公式(后一项和前一项的关系)，一般考虑单调有界收敛准则")]),a._v(" "),_("p",[a._v("对{Xn}放缩的方法：")]),a._v(" "),_("ul",[_("li",[a._v("观察法，用数学归纳法")]),a._v(" "),_("li",[a._v("常见不等式")])]),a._v(" "),_("blockquote",[_("p",[a._v("x平方+y平方 >= 2xy\n当x属于(0,PI/2)时,sinx < x < tanx")])]),a._v(" "),_("p",[a._v("对于放缩的理解：当前表达式A不好求解，表达式B简单，找出A与B的不等式关系，然后用B代替A，再求解B")]),a._v(" "),_("h2",{attrs:{id:"夹逼定理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#夹逼定理"}},[a._v("#")]),a._v(" 夹逼定理")]),a._v(" "),_("p",[a._v("数列：n向右无限延展的过程中，有Xn<=Yn<=Zn，且Xn的极限=Zn的极限=a，那么Yn的极限=a")]),a._v(" "),_("p",[a._v("函数：x趋向于x0的过程中，有X(x)<=Y(x)<=Z(x)，且X(x)的极限=Z(x)的极限=A,那么Y(x)的极限=A")]),a._v(" "),_("blockquote",[_("p",[a._v("夹逼定理的本质是对求极限的数列或函数进行放缩")])]),a._v(" "),_("h3",{attrs:{id:"放缩的原则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#放缩的原则"}},[a._v("#")]),a._v(" 放缩的原则")]),a._v(" "),_("ul",[_("li",[a._v("不改变极限值")]),a._v(" "),_("li",[a._v("尽量简化计算")])]),a._v(" "),_("blockquote",[_("p",[a._v("解题思路：估极限 然后观察法")])]),a._v(" "),_("h3",{attrs:{id:"无穷数列的和式极限"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#无穷数列的和式极限"}},[a._v("#")]),a._v(" 无穷数列的和式极限")]),a._v(" "),_("ol",[_("li",[a._v("夹逼定理")]),a._v(" "),_("li",[a._v("定积分定义\n标志：求和k从1到n,f(k/n).(1/n)")])]),a._v(" "),_("ul",[_("li",[_("p",[a._v("分子不变的情况：\n看首尾")])]),a._v(" "),_("li",[_("p",[a._v("分子变化的情况\nstep1: 固定分子为k，对分母进行放缩\nstep2: 三边同时求和")])])]),a._v(" "),_("h2",{attrs:{id:"连续与间断"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#连续与间断"}},[a._v("#")]),a._v(" 连续与间断")]),a._v(" "),_("h3",{attrs:{id:"连续的定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#连续的定义"}},[a._v("#")]),a._v(" 连续的定义")]),a._v(" "),_("p",[a._v("lim(x->a)f(x) = f(a)\n即：函数在某点处的极限值等于函数值则称函数在该点处连续")]),a._v(" "),_("blockquote",[_("p",[a._v("连续的条件：1. a处有定义 2. a处极限存在 3.极限值=函数值")])]),a._v(" "),_("p",[_("strong",[a._v("连续的等价定义(增量形式)")])]),a._v(" "),_("p",[a._v("lim(增量x->0)增量y = 0\n或lim(增量x->0)f(a+增量x) - f(a) = 0")]),a._v(" "),_("h3",{attrs:{id:"左右连续"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#左右连续"}},[a._v("#")]),a._v(" 左右连续")]),a._v(" "),_("p",[a._v("该点处，左极限或者右极限=函数值")]),a._v(" "),_("blockquote",[_("p",[a._v("连续的充要条件：左连续=右连续=函数值")])]),a._v(" "),_("h3",{attrs:{id:"区间连续"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#区间连续"}},[a._v("#")]),a._v(" 区间连续")]),a._v(" "),_("p",[a._v("(a,b)区间每一点都连续，则f(x)在(a,b)内连续\na处右连续，b处左连续，则f(x)在[a,b]上连续")]),a._v(" "),_("h3",{attrs:{id:"连续函数的结论"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#连续函数的结论"}},[a._v("#")]),a._v(" 连续函数的结论")]),a._v(" "),_("ul",[_("li",[a._v("连续函数的和、差、积、商仍连续")]),a._v(" "),_("li",[a._v("连续函数有限复合仍连续")]),a._v(" "),_("li",[a._v("连续且单调的函数的反函数仍然单调连续")]),a._v(" "),_("li",[a._v("基本初等函数在其定义域连续")]),a._v(" "),_("li",[a._v("初等函数在其定义区间连续")])]),a._v(" "),_("h3",{attrs:{id:"间断点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#间断点"}},[a._v("#")]),a._v(" 间断点")]),a._v(" "),_("p",[a._v("f(x)在x0处不连续，则间断(即该点函数值不等于极限值)")]),a._v(" "),_("h3",{attrs:{id:"间断点的分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#间断点的分类"}},[a._v("#")]),a._v(" 间断点的分类")]),a._v(" "),_("h4",{attrs:{id:"第一类间断点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第一类间断点"}},[a._v("#")]),a._v(" 第一类间断点")]),a._v(" "),_("p",[a._v("定义：左右极限均存在")]),a._v(" "),_("p",[a._v("继续划分：")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("可去间断点\n左右极限相等\n可去间断点可以通过补充定义使其连续\n举例：sinx/x的在0处极限为0，函数值不存在，可以补充定义0处函数值为0使其连续\n函数图像描述：看上去是连续的，但是某个点是空的")])]),a._v(" "),_("li",[_("p",[a._v("跳跃间断点\n左右极限不相等\n举例：f(x)= { x^2 + 1(x>=0),-1 (x < 0)}\n函数图像描述：某个点处跳跃了")])])]),a._v(" "),_("h4",{attrs:{id:"第二类间断点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第二类间断点"}},[a._v("#")]),a._v(" 第二类间断点")]),a._v(" "),_("p",[a._v("定义：左右极限至少一个不存在")]),a._v(" "),_("p",[a._v("继续划分：")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("无穷间断点\n左右极限至少有一个无穷\n函数图像描述：向无穷远处发散")])]),a._v(" "),_("li",[_("p",[a._v("震荡间断点\n左右极限均不为无穷\n函数图像描述：来回震荡\n举例：sin(1/x)在x=0处的极限时而为1，时而为-1")])])]),a._v(" "),_("h3",{attrs:{id:"间断点的解题思路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#间断点的解题思路"}},[a._v("#")]),a._v(" 间断点的解题思路")]),a._v(" "),_("ul",[_("li",[a._v("找出函数可去间断点的个数\n先找函数无定义的点，然后再从这些点中筛选出极限存在的点(满足未定式)")])]),a._v(" "),_("h2",{attrs:{id:"闭区间上连续函数的性质"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#闭区间上连续函数的性质"}},[a._v("#")]),a._v(" 闭区间上连续函数的性质")]),a._v(" "),_("h3",{attrs:{id:"_1-最值定理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-最值定理"}},[a._v("#")]),a._v(" 1. 最值定理")]),a._v(" "),_("p",[a._v('f("可c") = m <= f(x) <= M = f("爱它"),"可c","爱它"属于[a,b]')]),a._v(" "),_("p",[_("strong",[a._v("推论:f(x) 在 [a,b]有界")])]),a._v(" "),_("h3",{attrs:{id:"_2-介值定理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-介值定理"}},[a._v("#")]),a._v(" 2. 介值定理")]),a._v(" "),_("p",[a._v("f(x)可取介于m,M之间的一切值(通常与最值定理联用)")]),a._v(" "),_("p",[a._v('任意满足 m<=A<=M,存在"可c"属于[a,b]使得f("可c")=a')]),a._v(" "),_("blockquote",[_("p",[a._v('注："最+介" 当所证明结论中，中值"可C"属于[a,b]时')])]),a._v(" "),_("h3",{attrs:{id:"_3-零点定理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-零点定理"}},[a._v("#")]),a._v(" 3. 零点定理")]),a._v(" "),_("p",[a._v("端点处函数值异号，则存在\"可c\"属于(a,b)，使得f('可c') = 0")]),a._v(" "),_("h4",{attrs:{id:"解题步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解题步骤"}},[a._v("#")]),a._v(" 解题步骤")]),a._v(" "),_("ol",[_("li",[a._v('"可c" -> x')]),a._v(" "),_("li",[a._v("右边 = 0")]),a._v(" "),_("li",[a._v("左边 = f(x)")])])])}),[],!1,null,null,null);_.default=s.exports}}]);