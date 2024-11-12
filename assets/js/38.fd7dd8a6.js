(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{558:function(s,e,a){"use strict";a.r(e);var n=a(2),t=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"不确定的动态依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不确定的动态依赖"}},[s._v("#")]),s._v(" 不确定的动态依赖")]),s._v(" "),e("h3",{attrs:{id:"存在的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存在的问题"}},[s._v("#")]),s._v(" 存在的问题")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('const module = document.getElementById("txt").value;\nconst a = require("./utils/" + module); // 动态依赖\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("像这种需要靠用户输入之后才能确定的依赖，webpack 的处理方式是：将 utils 文件夹下的所有文件都打包进来")]),s._v(" "),e("h3",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),e("p",[s._v("确定一个范围，让 webpack 只打包这个范围内的文件。")]),s._v(" "),e("p",[s._v("其实"),e("code",[s._v('require("./utils/" + module)')]),s._v("会被转换成"),e("code",[s._v("require.context('./utils')")]),s._v("(仅在 webpack 运行过程中有效)")]),s._v(" "),e("h4",{attrs:{id:"require-context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#require-context"}},[s._v("#")]),s._v(" require.context")]),s._v(" "),e("ul",[e("li",[s._v("参数 1：目录，哪个目录中的模块需要添加到打包结果")]),s._v(" "),e("li",[s._v("参数 2：是否递归寻找子目录，如果为 true，表示需要寻找子目录")]),s._v(" "),e("li",[s._v("参数 3：正则表达式，凡是匹配的才会加入到打包结果")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 生成一个上下文\nconst context = require.context(\"./utils\", true, /\\.js$/);\n// 在这个上下文中查看a模块\nconst a = context('./a.js')\n// 返回上下文中的所有模块\ncontext.keys();\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"案例导出当前目录中的所有模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#案例导出当前目录中的所有模块"}},[s._v("#")]),s._v(" 案例导出当前目录中的所有模块")]),s._v(" "),e("p",[s._v("目录结构为：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("utils/index.js(入口文件)\nutils/a.js\nutils/b.js\nutils/c.js\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// utils/index.js:\n\nconst context = require.context("./",true,/\\.js$/);\nfor(const key of context.keys()){\n  if(key !== "./index.js") {\n    const filename = key.substr(2);\n    exports[filename] = context(key)\n  }\n}\n\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h2",{attrs:{id:"搭建多页应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建多页应用"}},[s._v("#")]),s._v(" 搭建多页应用")]),s._v(" "),e("p",[s._v("适用于传统的前端开发")]),s._v(" "),e("h3",{attrs:{id:"场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[s._v("#")]),s._v(" 场景")]),s._v(" "),e("ul",[e("li",[s._v("你正在开发一些纯粹的静态页面，页面中有少量的 ajax。比如活动促销页面、抽奖页面等。")]),s._v(" "),e("li",[s._v("你正在开发一些 JS 功能，这些代码主要用于制作页面上的一些动态效果，比如 jquery 实现轮播图、分页等")]),s._v(" "),e("li",[s._v("其他不使用前端框架的工程")])]),s._v(" "),e("h3",{attrs:{id:"配置细节"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置细节"}},[s._v("#")]),s._v(" 配置细节")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("融合配置，若属性冲突则后面的覆盖前面的\nmerge(基础配置,dev/prod环境配置)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("页面结构：\n\npages/index/(首页)\n  index.html(页面模板)\n  index.js(入口js)\n  index.css(样式文件)\n\npages/common/header/(公共模块)\n  index.html\n  index.js\n  index.css\n\n通过HTMLWepbackPlugin插件使用index.html作为模板将js引入，而js中引入了css\n\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('pages/index/index.html:\n\n\x3c!-- 引入公共页头 --\x3e\n   <%= require("html-loader!../common/header/index.html") %>\n   <div class="main-container">首页</div>\n   \x3c!-- 引入公共页尾 --\x3e\n   <%= require("html-loader!../common/footer/index.html") %>\n\n   loader内联加载\n   将首尾的html文件内容通过html-loader插入到对应的位置\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h2",{attrs:{id:"搭建-vue-应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建-vue-应用"}},[s._v("#")]),s._v(" 搭建 Vue 应用")]),s._v(" "),e("h3",{attrs:{id:"配置细节-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置细节-2"}},[s._v("#")]),s._v(" 配置细节")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// 使用了babel-loader\n { test: /\\.js$/, use: "babel-loader" },\n\n// babel使用了vue预设,专门用来编译Vue代码\nbabel.config.js:\n  module.exports = {\n    presets: ["vue"],\n};\n\n\n// 使用vue-loader专门用来编译.vue文件\n    {\n        test: /\\.vue$/,\n        use: "vue-loader",\n      },\n\nvue-loader核心使用了vue-template-compiler,它内部还会依赖file-loader、url-loader等其他loader\n\n\n// 加一个VueLoaderPlugin用来对整个打包流程进行控制\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("p",[e("strong",[s._v("核心：使用了vue-loader和VueLoaderPlugin")])]),s._v(" "),e("h2",{attrs:{id:"搭建-node-应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建-node-应用"}},[s._v("#")]),s._v(" 搭建 Node 应用")]),s._v(" "),e("h3",{attrs:{id:"node开发流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node开发流程"}},[s._v("#")]),s._v(" Node开发流程")]),s._v(" "),e("p",[e("strong",[s._v("流程1：直接开发，直接部署")])]),s._v(" "),e("ol",[e("li",[s._v("搭建 node 工程，直接开发")]),s._v(" "),e("li",[s._v("开发过程中使用 git 进行管理")]),s._v(" "),e("li",[s._v("开发完成后，提交 git")]),s._v(" "),e("li",[s._v("进入部署服务器，从 git 中拉取最新代码，然后"),e("code",[s._v("npm install")]),s._v(" (服务器和开发环境的工程结构是一样的)")])]),s._v(" "),e("p",[s._v("存在的问题：")]),s._v(" "),e("ol",[e("li",[s._v("服务器在"),e("code",[s._v("npm install")]),s._v("的过程中，会占用比较大的网络资源")]),s._v(" "),e("li",[s._v("代码没有压缩，拉取速度较慢")]),s._v(" "),e("li",[s._v("开发过程中，无法使用较新的语法")]),s._v(" "),e("li",[s._v("开发过程中，无法使用 ES6 模块化")])]),s._v(" "),e("p",[e("strong",[s._v("流程2：直接开发，用 webpack 打包，然后部署")])]),s._v(" "),e("ol",[e("li",[s._v("搭建 node + webpack 工程")]),s._v(" "),e("li",[s._v("开发后，使用 webpack 打包")]),s._v(" "),e("li",[s._v("将打包结果上传到服务器，服务器直接运行")])]),s._v(" "),e("p",[s._v("生产环境的运行：")]),s._v(" "),e("ol",[e("li",[s._v("监控源代码目录，如果源代码有变动")]),s._v(" "),e("li",[s._v("将环境变量设置为"),e("code",[s._v("development")]),s._v("，然后进行打包")]),s._v(" "),e("li",[s._v("运行打包结果")])]),s._v(" "),e("h3",{attrs:{id:"配置细节-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置细节-3"}},[s._v("#")]),s._v(" 配置细节")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// 设置跨平台环境变量然后打包\n "build": "cross-env NODE_ENV=production webpack"\n\n// 监控源代码目录，如果代码有变化则执行构建，然后运行dist目录下的代码(保证和生产环境运行的代码一致)\n "dev": "nodemon --watch src --exec \'npm run dev:build && npm run dev:exec\'",\n "dev:build": "cross-env NODE_ENV=development webpack",\n "dev:exec": "node dist/index",\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('webpack.config.js:\n\ntarget: "node", // 指定打包的目标环境为node 默认为web\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"搭建全栈应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建全栈应用"}},[s._v("#")]),s._v(" 搭建全栈应用")]),s._v(" "),e("p",[s._v("比如：使用vue开发前端，express开发后端，将这两者结合起来就是全栈应用。")]),s._v(" "),e("h3",{attrs:{id:"目录结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),e("p",[s._v("源代码：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("client目录：\n   利用脚手架或者自己用webpack搭建的前端项目\n\nserver目录：\n   纯node代码\n\ncommon目录：\n   存放一些公共代码，比如lodash、moment等\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("client、server有各自的node_modules,外层还有个node_modules")]),s._v(" "),e("p",[s._v("打包后的dist:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  dist目录：\n    public目录：存放客户端的代码\n    index.js： 服务端代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"配置细节-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置细节-4"}},[s._v("#")]),s._v(" 配置细节")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('webpack.config.js:\n// 入口是服务端的Js(客户端打包的只是静态资源是依附于服务端的)\n  entry: "./server/index.js",\n  target: "node", // 指定打包的目标环境为node 默认为web\n  node: false, // 关闭wepback对node的模拟行为\n\n\nvue.config.js:\nmodule.exports = {\n  outputDir: "../dist/public",\n};\n// 再对客户端进行打包，将打包结果放入dist/public目录下\n\n\npackage.json: // 合并命令 npm-run-all可以运行多个命令 -s 串行执行\n "build": "npm-run-all -s build:server build:client",\n "build:server": "cross-env NODE_ENV=production webpack",\n "build:client": "cd client && npm run build"\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);