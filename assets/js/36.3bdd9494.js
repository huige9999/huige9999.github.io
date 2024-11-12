(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{534:function(a,t,s){"use strict";s.r(t);var v=s(2),_=Object(v.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("标准库（标准API）")]),a._v(" "),t("ul",[t("li",[a._v("库：library")]),a._v(" "),t("li",[a._v("API：应用程序编程接口，Application Programing Interface")]),a._v(" "),t("li",[a._v("标准：ECMAScript标准")])]),a._v(" "),t("h2",{attrs:{id:"object和function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object和function"}},[a._v("#")]),a._v(" Object和Function")]),a._v(" "),t("h3",{attrs:{id:"object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[a._v("#")]),a._v(" Object")]),a._v(" "),t("h4",{attrs:{id:"静态成员"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态成员"}},[a._v("#")]),a._v(" 静态成员")]),a._v(" "),t("ul",[t("li",[a._v("keys(某个对象)，得到某个对象的所有属性名数组")]),a._v(" "),t("li",[a._v("values(某个对象)，得到某个对象的所有属性值数组")]),a._v(" "),t("li",[a._v("entries(某个对象)，得到某个对象的所有属性名和属性值的数组")])]),a._v(" "),t("h4",{attrs:{id:"实例成员"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例成员"}},[a._v("#")]),a._v(" 实例成员")]),a._v(" "),t("blockquote",[t("p",[a._v("实例成员可以被重写")])]),a._v(" "),t("p",[t("strong",[a._v("所有对象，都拥有Object的所有实例成员")])]),a._v(" "),t("ul",[t("li",[a._v("toString方法：得到某个对象的字符串格式")])]),a._v(" "),t("p",[a._v('默认情况下，该方法返回"[object Object]";')]),a._v(" "),t("ul",[t("li",[a._v("valueOf方法：得到某个对象的值")])]),a._v(" "),t("p",[a._v("默认情况下，返回该对象本身")]),a._v(" "),t("blockquote",[t("p",[a._v("在JS中，当自动的进行类型转换时，如果要对一个对象进行转换，实际上是先调用对象的valueOf方法，然后调用返回结果的toString方法，将得到的结果进行进一步转换。")])]),a._v(" "),t("h3",{attrs:{id:"function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function"}},[a._v("#")]),a._v(" Function")]),a._v(" "),t("p",[t("strong",[a._v("所有函数都具有Function中的实例成员")])]),a._v(" "),t("p",[t("strong",[a._v("语法：arguments：在函数中使用，获取该函数调用时，传递的所有参数")])]),a._v(" "),t("p",[t("strong",[a._v("arguments是一个类数组（也称为伪数组：没有通过Array构造函数创建的类似于数组结构的对象），伪数组会缺少大量的数组实例方法")])]),a._v(" "),t("p",[t("strong",[a._v("arguments数组中的值，会与对应的形参映射")])]),a._v(" "),t("h4",{attrs:{id:"实例成员-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例成员-2"}},[a._v("#")]),a._v(" 实例成员")]),a._v(" "),t("ul",[t("li",[a._v("length属性，得到函数形参数量")]),a._v(" "),t("li",[a._v("apply方法：调用函数，同时指定函数中的this指向，参数以数组传递")]),a._v(" "),t("li",[a._v("call方法：调用函数，同时指定函数中的this指向，参数以列表传递")]),a._v(" "),t("li",[a._v("bind方法：得到一个新函数，该函数中的this始终指向指定的值。")])]),a._v(" "),t("p",[a._v("通常，可以利用apply、call方法，将某个伪数组转换伪真数组。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" //将arguments转换为真数组\n var newArr = [].slice.call(arguments)\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"array构造器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#array构造器"}},[a._v("#")]),a._v(" Array构造器")]),a._v(" "),t("p",[a._v("凡是通过Array构造函数创建的对象，都是数组")]),a._v(" "),t("h3",{attrs:{id:"静态成员-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态成员-2"}},[a._v("#")]),a._v(" 静态成员")]),a._v(" "),t("ul",[t("li",[a._v("from方法：可以将一个伪数组转换为真数组")]),a._v(" "),t("li",[a._v("isArray方法：判断一个给定的数据，是否为一个真数组")]),a._v(" "),t("li",[a._v("of方法：类似于中括号创建数组，依次赋予数组每一项的值")])]),a._v(" "),t("h3",{attrs:{id:"实例成员-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例成员-3"}},[a._v("#")]),a._v(" 实例成员")]),a._v(" "),t("ul",[t("li",[a._v("fill方法：用某个数据填充数组")]),a._v(" "),t("li",[a._v("pop")]),a._v(" "),t("li",[a._v("push")]),a._v(" "),t("li",[a._v("reverse：将当前数组颠倒顺序")]),a._v(" "),t("li",[a._v("shift")]),a._v(" "),t("li",[a._v("sort：对数组进行排序")]),a._v(" "),t("li",[a._v("splice")]),a._v(" "),t("li",[a._v("unshift")])]),a._v(" "),t("p",[a._v("纯函数、无副作用函数：不会导致当前对象发生改变")]),a._v(" "),t("ul",[t("li",[a._v("concat")]),a._v(" "),t("li",[a._v("includes: 数组中是否包含满足条件的元素")]),a._v(" "),t("li",[a._v("join")]),a._v(" "),t("li",[a._v("slice")]),a._v(" "),t("li",[a._v("indexOf")]),a._v(" "),t("li",[a._v("lastIndexOf")]),a._v(" "),t("li",[a._v("forEach: 遍历数组")]),a._v(" "),t("li",[a._v("every：是否所有元素都满足条件")]),a._v(" "),t("li",[a._v("some：是否至少有一个元素满足条件")]),a._v(" "),t("li",[a._v("filter：过滤，得到满足条件的元素组成的新数组")]),a._v(" "),t("li",[a._v("find: 查找第一个满足条件的元素，返回元素本身，如果没有找到，返回undefined")]),a._v(" "),t("li",[a._v("findIndex: 查找第一个满足条件的元素，返回元素的下标")]),a._v(" "),t("li",[a._v("map：映射，将数组的每一项映射称为另外一项")]),a._v(" "),t("li",[a._v("reduce：统计，累计")])]),a._v(" "),t("h2",{attrs:{id:"原始类型的包装器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原始类型的包装器"}},[a._v("#")]),a._v(" 原始类型的包装器")]),a._v(" "),t("ul",[t("li",[a._v("new 包装器(值)：返回的是一个对象")]),a._v(" "),t("li",[a._v("包装器(值)：返回的是一个原始类型")])]),a._v(" "),t("h3",{attrs:{id:"number"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[a._v("#")]),a._v(" Number")]),a._v(" "),t("h4",{attrs:{id:"静态成员-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态成员-3"}},[a._v("#")]),a._v(" 静态成员")]),a._v(" "),t("p",[a._v("，")]),a._v(" "),t("ul",[t("li",[a._v("isNaN")]),a._v(" "),t("li",[a._v("isFinite")]),a._v(" "),t("li",[a._v("isInteger：判断一个数据是否是整数")]),a._v(" "),t("li",[a._v("parseFloat: 将一个数据转换为小数")]),a._v(" "),t("li",[a._v("parseInt：将以一个数据转换为整数直接舍去小数部分")])]),a._v(" "),t("p",[a._v("parseInt、parseFloat要求参数是一个字符串，如果不是字符串，则会先转换为字符串。\n从字符串开始位置进行查找，找到第一个有效的数字进行转换，如果没有找到，则返回NaN，左右空白字符会忽略")]),a._v(" "),t("p",[a._v("parseInt，可以传入第二个参数，表示将给定的字符串，识别为多少进制。")]),a._v(" "),t("h4",{attrs:{id:"实例成员-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例成员-4"}},[a._v("#")]),a._v(" 实例成员")]),a._v(" "),t("ul",[t("li",[a._v("toFixed方法：会有四舍五入")]),a._v(" "),t("li",[a._v("toPrecision：以指定的精度返回一个数字字符串")])]),a._v(" "),t("h3",{attrs:{id:"boolean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#boolean"}},[a._v("#")]),a._v(" Boolean")]),a._v(" "),t("h3",{attrs:{id:"string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[a._v("#")]),a._v(" String")]),a._v(" "),t("h4",{attrs:{id:"静态成员-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态成员-4"}},[a._v("#")]),a._v(" 静态成员")]),a._v(" "),t("ul",[t("li",[a._v("fromCharCode：通过unicode编码创建字符串")])]),a._v(" "),t("h4",{attrs:{id:"实例成员-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例成员-5"}},[a._v("#")]),a._v(" 实例成员")]),a._v(" "),t("ul",[t("li",[a._v("length：字符串长度")])]),a._v(" "),t("p",[a._v("字符串是一个伪数组")]),a._v(" "),t("ul",[t("li",[a._v("charAt：得到指定位置的字符")]),a._v(" "),t("li",[a._v("charCodeAt")]),a._v(" "),t("li",[a._v("concat")]),a._v(" "),t("li",[a._v("includes")]),a._v(" "),t("li",[a._v("endsWith")]),a._v(" "),t("li",[a._v("startsWith")]),a._v(" "),t("li",[a._v("indexOf")]),a._v(" "),t("li",[a._v("lastIndexOf")]),a._v(" "),t("li",[a._v("padStart")]),a._v(" "),t("li",[a._v("padEnd")]),a._v(" "),t("li",[a._v("repeat")]),a._v(" "),t("li",[a._v("slice：从某个位置取到某个位置；位置可以是负数；")]),a._v(" "),t("li",[a._v("substr: 从某个位置开始取，取指定的长度；位置可以是负数；")]),a._v(" "),t("li",[a._v("substring：从某个位置取到某个位置；不可以是负数；参数位置是可调换的。")]),a._v(" "),t("li",[a._v("toLowerCase")]),a._v(" "),t("li",[a._v("toUpperCase")]),a._v(" "),t("li",[a._v("split：分割字符串")])]),a._v(" "),t("h2",{attrs:{id:"math对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#math对象"}},[a._v("#")]),a._v(" Math对象")]),a._v(" "),t("p",[a._v("提供了一系列与数学相关的成员")]),a._v(" "),t("blockquote",[t("p",[a._v("常量：永远不会变化的数据。常量一般命名时所有字母大写，如果有多个单词，用下划线分割。")])]),a._v(" "),t("ul",[t("li",[a._v("random方法: 产生一个0~1之间的随机数")]),a._v(" "),t("li",[a._v("PI属性：得到圆周率")]),a._v(" "),t("li",[a._v("abs方法：求绝对值")]),a._v(" "),t("li",[a._v("floor方法：对一个数向下取整")]),a._v(" "),t("li",[a._v("ceil方法：对一个数向上取整")]),a._v(" "),t("li",[a._v("max方法：得到一组数字的最大值；如果无参，得到-Infinity")]),a._v(" "),t("li",[a._v("min方法：得到一组数字的最小值；如果无参，得到Infinity")]),a._v(" "),t("li",[a._v("pow方法：求一个数字的幂次方")]),a._v(" "),t("li",[a._v("round方法：得到一个四舍五入的整数")])]),a._v(" "),t("h2",{attrs:{id:"date构造函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#date构造函数"}},[a._v("#")]),a._v(" Date构造函数")]),a._v(" "),t("h3",{attrs:{id:"术语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#术语"}},[a._v("#")]),a._v(" 术语")]),a._v(" "),t("ol",[t("li",[a._v("时间单位")])]),a._v(" "),t("p",[a._v("年（year）\n月（month）\n日（date）\n小时（hour）\n分钟（minute）\n秒（second）  =  1000ms\n毫秒（millisecond，ms） = 1000 us\n微秒（microsecond，us） = 1000 ns\n纳秒（nanosecond，ns）")]),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[a._v("UTC和GMT")])]),a._v(" "),t("p",[a._v("世界划分为24个时区，北京在东8区，格林威治在0时区。")]),a._v(" "),t("p",[a._v("GMT：Greenwish Mean Time 格林威治世界时。太阳时，精确到毫秒。\nUTC：Universal Time Coodinated 世界协调时。以原子时间为计时标准，精确到纳秒。")]),a._v(" "),t("p",[a._v("UTC和GMT之间误差不超过0.9秒")]),a._v(" "),t("p",[a._v("GMT+0800  东8区")]),a._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[a._v("时间戳")])]),a._v(" "),t("p",[a._v("数字")]),a._v(" "),t("p",[a._v("1970-1-1 凌晨  到 某个时间  所经过的毫秒数")]),a._v(" "),t("h3",{attrs:{id:"创建时间对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建时间对象"}},[a._v("#")]),a._v(" 创建时间对象")]),a._v(" "),t("ul",[t("li",[a._v("直接调用函数（不适用new），忽略所有参数，直接返回当前时间的字符串。")]),a._v(" "),t("li",[a._v("new Date(): 创建日期对象")])]),a._v(" "),t("ol",[t("li",[a._v("无参，当前时间")]),a._v(" "),t("li",[a._v("1个参数，参数为数字，表示传入的是时间戳")]),a._v(" "),t("li",[a._v("两个参数以上，分别表示：年、月、日、时、分、秒、毫秒")])]),a._v(" "),t("p",[a._v("注意：月份的数字从0开始计算。")]),a._v(" "),t("p",[a._v("如果缺失参数，日期部分默认为1，时分秒毫秒默认为0。")]),a._v(" "),t("p",[a._v("月、日、时、分、秒、毫秒，均可以传递负数，如果传递负数，会根据指定日期进行计算。")]),a._v(" "),t("h3",{attrs:{id:"实例成员-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例成员-6"}},[a._v("#")]),a._v(" 实例成员")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("getDate方法：得到日期部分")])]),a._v(" "),t("li",[t("p",[a._v("getDay方法：得到星期几，0表示星期天")])]),a._v(" "),t("li",[t("p",[a._v("getFullYear方法：得到年份")])]),a._v(" "),t("li",[t("p",[a._v("getHours方法：得到小时部分")])]),a._v(" "),t("li",[t("p",[a._v("getMinutes方法：得到分钟部分")])]),a._v(" "),t("li",[t("p",[a._v("getSeconds方法：得到秒部分")])]),a._v(" "),t("li",[t("p",[a._v("getMilliseconds方法：得到毫秒部分")])]),a._v(" "),t("li",[t("p",[a._v("getTime方法：得到时间戳")])]),a._v(" "),t("li",[t("p",[a._v("getMonth方法：得到月，从0开始计算")])]),a._v(" "),t("li",[t("p",[a._v("setDate方法：设置日期")])]),a._v(" "),t("li",[t("p",[a._v("setMonth方法：设置月份")])]),a._v(" "),t("li",[t("p",[a._v("setFullYear方法：设置年")])]),a._v(" "),t("li",[t("p",[a._v("setMinutes方法")])]),a._v(" "),t("li",[t("p",[a._v("setSeconds方法")])]),a._v(" "),t("li",[t("p",[a._v("setMilliseconds方法")])]),a._v(" "),t("li",[t("p",[a._v("setTime方法：重新设置时间戳")])]),a._v(" "),t("li",[t("p",[a._v("toDateString方法：将日期部分转换为可读的字符串。")])]),a._v(" "),t("li",[t("p",[a._v("toISOString方法：将整个对象转换为ISO标准的字符串格式。")])]),a._v(" "),t("li",[t("p",[a._v("toLocaleDateString方法：根据当前系统的地区设置，将日期部分转换为可读的字符串")])]),a._v(" "),t("li",[t("p",[a._v("toLocaleString方法：根据当前系统的地区设置，将整个日期对象转换为可读的字符串")])]),a._v(" "),t("li",[t("p",[a._v("toLocaleTimeString方法：根据当前系统的地区设置，将时间部分转换为可读的字符串")])])]),a._v(" "),t("h3",{attrs:{id:"日期的运算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日期的运算"}},[a._v("#")]),a._v(" 日期的运算")]),a._v(" "),t("p",[a._v("日期对象重写了Object中的valueOf方法，返回的是一个数字，表示时间戳")]),a._v(" "),t("p",[a._v("因此，日期对象可以进行数学运算")]),a._v(" "),t("h2",{attrs:{id:"正则表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[a._v("#")]),a._v(" 正则表达式")]),a._v(" "),t("p",[a._v("正则表达式是国际标准，跨越语言")]),a._v(" "),t("p",[a._v("正则表达式是一个规则，用于验证字符串。")]),a._v(" "),t("h3",{attrs:{id:"基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[a._v("#")]),a._v(" 基础")]),a._v(" "),t("ol",[t("li",[a._v("字面量匹配")])]),a._v(" "),t("p",[a._v("规则中直接书写字面量字符")]),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[a._v("特殊字符")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(".   \n^\n$\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("转义符")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("\\n\n\\r\n\\t\n\\s\n\\S\n\\b\n\\B\n\\d\n\\D\n\\w\n\\W\n\\u\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br")])]),t("p",[a._v("转义符可以将特殊字符转义")]),a._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[a._v("字符集")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[字符范围]\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("匹配中文： "),t("code",[a._v("[\\u4e00-\\u9FA5]")])]),a._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[a._v("量词")])]),a._v(" "),t("p",[a._v("前面的规则出现的次数")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("*\n+\n?\n{n}: 匹配n个\n{n,}: 匹配>=n个\n{n,m}: 匹配n-m个\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("h3",{attrs:{id:"js中的应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js中的应用"}},[a._v("#")]),a._v(" JS中的应用")]),a._v(" "),t("p",[a._v("js中，正则表达式表现为一个对象，该对象是通过构造函数RegExp")]),a._v(" "),t("h4",{attrs:{id:"创建正则对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建正则对象"}},[a._v("#")]),a._v(" 创建正则对象")]),a._v(" "),t("ol",[t("li",[a._v("字面量模式")]),a._v(" "),t("li",[a._v("构造函数模式")])]),a._v(" "),t("h4",{attrs:{id:"正则实例成员"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则实例成员"}},[a._v("#")]),a._v(" 正则实例成员")]),a._v(" "),t("ul",[t("li",[a._v("global")]),a._v(" "),t("li",[a._v("ignoreCase")]),a._v(" "),t("li",[a._v("multiline")]),a._v(" "),t("li",[a._v("source")]),a._v(" "),t("li",[a._v("test方法：验证某个字符串是否满足规则")]),a._v(" "),t("li",[a._v("exec方法：execute，执行匹配，得到匹配结果。")])]),a._v(" "),t("blockquote",[t("p",[a._v("正则表达式，默认情况下，适用贪婪模式\n在量词后，加上?，表示进入非贪婪模式")])]),a._v(" "),t("h4",{attrs:{id:"字符串对象中的正则方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符串对象中的正则方法"}},[a._v("#")]),a._v(" 字符串对象中的正则方法")]),a._v(" "),t("ul",[t("li",[a._v("split")]),a._v(" "),t("li",[a._v("replace")]),a._v(" "),t("li",[a._v("search")]),a._v(" "),t("li",[a._v("match")])]),a._v(" "),t("h3",{attrs:{id:"进阶"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进阶"}},[a._v("#")]),a._v(" 进阶")]),a._v(" "),t("h4",{attrs:{id:"捕获组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#捕获组"}},[a._v("#")]),a._v(" 捕获组")]),a._v(" "),t("p",[a._v("用小括号包裹的部分叫做捕获组，捕获组会出现在匹配结果中")]),a._v(" "),t("p",[a._v("捕获组可以命名，叫做具名捕获组")]),a._v(" "),t("p",[a._v("非捕获组")]),a._v(" "),t("h4",{attrs:{id:"反向引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反向引用"}},[a._v("#")]),a._v(" 反向引用")]),a._v(" "),t("p",[a._v("在正则表达式中，使用某个捕获组，"),t("code",[a._v("\\捕获组编号")])]),a._v(" "),t("h4",{attrs:{id:"正向断言-预查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正向断言-预查"}},[a._v("#")]),a._v(" 正向断言(预查)")]),a._v(" "),t("p",[a._v("检查某个字符后面的字符是否满足某个规则，该规则不成为匹配结果，并且不称为捕获组")]),a._v(" "),t("h4",{attrs:{id:"负向断言-预查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#负向断言-预查"}},[a._v("#")]),a._v(" 负向断言(预查)")]),a._v(" "),t("p",[a._v("检查某个字符后面的字符是否不满足某个规则，该规则不成为匹配结果，并且不称为捕获组")]),a._v(" "),t("h2",{attrs:{id:"错误处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误处理"}},[a._v("#")]),a._v(" 错误处理")]),a._v(" "),t("p",[a._v("JS中的错误分为：")]),a._v(" "),t("ol",[t("li",[a._v("语法错误：会导致整个脚本块无法执行。")]),a._v(" "),t("li",[a._v("运行错误\n"),t("ol",[t("li",[a._v("运行报错：会导致当前脚本块后续代码无法执行")]),a._v(" "),t("li",[a._v("运行结果不符合预期")])])])]),a._v(" "),t("h3",{attrs:{id:"调试错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调试错误"}},[a._v("#")]),a._v(" 调试错误")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("控制台打印")])]),a._v(" "),t("li",[t("p",[a._v("断点调试")])])]),a._v(" "),t("h3",{attrs:{id:"抛出错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抛出错误"}},[a._v("#")]),a._v(" 抛出错误")]),a._v(" "),t("p",[a._v("错误在js中本质上是一个对象，抛出错误的语法为：")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throw")]),a._v(" 错误对象"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("错误对象的构造函数为Error")]),a._v(" "),t("h3",{attrs:{id:"捕获错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#捕获错误"}},[a._v("#")]),a._v(" 捕获错误")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("try")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//代码块1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("catch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("错误对象"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//代码块2")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("finally")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//代码块3")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br")])]),t("p",[a._v("当运行代码1的时候，如果发生错误，立即停止代码1的执行，转而执行代码2，错误对象为抛出的错误对象。无论代码1和代码2是否，最终都将执行代码3")])])}),[],!1,null,null,null);t.default=_.exports}}]);