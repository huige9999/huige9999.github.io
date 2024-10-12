(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{498:function(a,s,t){"use strict";t.r(s);var n=t(2),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"iframe元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iframe元素"}},[a._v("#")]),a._v(" iframe元素")]),a._v(" "),s("ul",[s("li",[a._v("在网页中嵌入另一个页面")]),a._v(" "),s("li",[a._v("可替换元素(通常显示的内容取决于元素的属性)")])]),a._v(" "),s("p",[a._v("补充：a元素切换iframe显示的页面")]),a._v(" "),s("p",[a._v('iframe:name="定义的名字"\na:target="定义的名字"')]),a._v(" "),s("p",[a._v("使用场景：我的网站想要放别人网站的视频")]),a._v(" "),s("h2",{attrs:{id:"表单元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单元素"}},[a._v("#")]),a._v(" 表单元素")]),a._v(" "),s("p",[a._v("一系列元素，主要用于收集用户数据")]),a._v(" "),s("h3",{attrs:{id:"input元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input元素"}},[a._v("#")]),a._v(" input元素")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("type属性决定输入框类型\n你想要什么类型的数据?\n比如text、password")]),a._v(" "),s("p",[a._v("emmet语法：input:type")])]),a._v(" "),s("li",[s("p",[a._v("value属性表示输入框的值\n程序要定义或使用的输入框的值")])]),a._v(" "),s("li",[s("p",[a._v("placeholder属性表示提示文本")])])]),a._v(" "),s("p",[s("strong",[a._v("关于 checkbox多选框、radio单选框")]),a._v("\n为了从逻辑上对多选框进行分组，我们可以加上name属性")]),a._v(" "),s("p",[s("strong",[a._v("input元素做按钮")]),a._v("\n按钮类型包括：重置(reset)、提交(submit)、普通按钮(button)")]),a._v(" "),s("h3",{attrs:{id:"select元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#select元素"}},[a._v("#")]),a._v(" select元素")]),a._v(" "),s("p",[a._v("select option配合使用，实现下拉列表")]),a._v(" "),s("p",[s("strong",[a._v("select选项分组")]),a._v("\noption元素外面套一个optgroup元素")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('<select>\n<optgroup label="组名">\n <option value="值">选项</option>\n</optgroup>\n</select>\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"textarea元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#textarea元素"}},[a._v("#")]),a._v(" textarea元素")]),a._v(" "),s("p",[a._v("建议用css样式调整大小")]),a._v(" "),s("p",[a._v("特殊的地方：textarea虽然也是可替换元素，但是它的内容由写的文本决定而不是value属性")]),a._v(" "),s("h3",{attrs:{id:"按钮元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按钮元素"}},[a._v("#")]),a._v(" 按钮元素")]),a._v(" "),s("p",[a._v("type: reset(重置)、submit(提交、默认值)、button(普通)")]),a._v(" "),s("p",[a._v("说明：button是不可替换元素，所以我们可以在button中间写任何内容来丰富按钮的内容(比input做的按钮灵活)")]),a._v(" "),s("h3",{attrs:{id:"配合表单的其他元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配合表单的其他元素"}},[a._v("#")]),a._v(" 配合表单的其他元素")]),a._v(" "),s("ul",[s("li",[a._v("label元素\n通常配合单选和多选框使用")])]),a._v(" "),s("p",[a._v("需求：点击文字的时候也能选中单选\n理解：label是标签的意思，比如衣服上的标签关联这个衣服，同样的道理，label元素将文字和单选框关联起来")]),a._v(" "),s("p",[a._v("使用方式：")]),a._v(" "),s("ol",[s("li",[a._v("input定义个id属性值,label的for属性使用它")]),a._v(" "),s("li",[a._v("label套着input和文字")])]),a._v(" "),s("ul",[s("li",[a._v("datalist元素")])]),a._v(" "),s("p",[a._v("配合input元素使用，实现输入提示功能")]),a._v(" "),s("p",[a._v("使用方式:\ndatalist配合option定义好若干suggestion选项并定义一个id属性值,input的list属性使用它(两者产生关联)")]),a._v(" "),s("ul",[s("li",[a._v("form元素\n包含所有表单元素\n作用：提交表单的时候可以将表单数据以合适的方式提交到服务器(即：它内部封装了表单提交的必要功能)")])]),a._v(" "),s("p",[a._v("使用：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v('form的action="提交的地址"、method="提交方式"')])]),a._v(" "),s("li",[s("p",[a._v("input需要加上name属性，作为提交的字段名")])])]),a._v(" "),s("h3",{attrs:{id:"fieldset元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fieldset元素"}},[a._v("#")]),a._v(" fieldset元素")]),a._v(" "),s("p",[a._v("对表单项进行分组,配合legend元素定义组名")]),a._v(" "),s("p",[a._v("使用：直接用它包裹需要分在一组的表单项即可")]),a._v(" "),s("h2",{attrs:{id:"表单元素美化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单元素美化"}},[a._v("#")]),a._v(" 表单元素美化")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("outline设置input外边框\noutline-offset设置边框偏移量")])]),a._v(" "),s("li",[s("p",[a._v(":focus伪类设置输入框聚焦状态下的样式")])]),a._v(" "),s("li",[s("p",[a._v(":checked伪类设置单选框和复选框选中状态下的样式\n补充：单选/多选框由于是可替换元素，所以一些css样式无法生效(比如background),但我们可以通过它的选中状态来设置它所关联元素的样式!")])]),a._v(" "),s("li",[s("p",[a._v("重置表单元素通常设置border:none、outline:none\n然后再设置自己的border样式")])]),a._v(" "),s("li",[s("p",[a._v("textarea设置resize属性可以让用户自由调整大小")])]),a._v(" "),s("li",[s("p",[a._v("输入框文本内容离边框距离调整：\npadding、text-indent")])]),a._v(" "),s("li",[s("p",[a._v("通过css实现一个可点击的单选框思路:")]),a._v(" "),s("ol",[s("li",[a._v("隐藏真实的单选框")]),a._v(" "),s("li",[a._v("定义普通元素并给它设置单选框样式")]),a._v(" "),s("li",[a._v("通过input:checked+.radio设置自定义单选框选中样式")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('  <label class="radio-item">\n          <input name="gender" type="radio">\n          <span class="radio"></span>\n          <span>男</span>\n </label>\n\n\n // 普通元素做成单选框\n  .radio-item .radio {\n          width: 12px;\n          height: 12px;\n          border: 1px solid #999;\n          border-radius: 50%;\n          cursor: pointer;\n          display: inline-block;\n  }\n  // 设置选中状态的样式\n    .radio-item input:checked+.radio{\n          border-color: #008c8c;\n      }\n  // 隐藏真实的单选框\n   .radio-item input[type="radio"]{\n          display: none;\n      }\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);