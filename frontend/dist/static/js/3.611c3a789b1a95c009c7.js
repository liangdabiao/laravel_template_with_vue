webpackJsonp([3,10,15,19],{"19/X":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'\n.dashboard-container[data-v-2d7e794c] {\n  margin: 30px;\n}\n.dashboard-text[data-v-2d7e794c] {\n  font-size: 30px;\n  line-height: 46px;\n}\n.clearfix[data-v-2d7e794c]:before,\n.clearfix[data-v-2d7e794c]:after {\n  display: table;\n  content: "";\n}\n.clearfix[data-v-2d7e794c]:after {\n  clear: both;\n}\n.el-card[data-v-2d7e794c] {\n  height: 350px;\n  border: 1px solid #1e4db95e;\n}\n#dashboard-container .el-card .el-card__header[data-v-2d7e794c] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #0c172fb0 !important;\n}\n.el-table_body-wrapper[data-v-2d7e794c] {\n  overflow-y: scroll;\n}\n#introduction .el-card__body[data-v-2d7e794c] {\n  padding-top: 10px;\n}\n[data-v-0bfbb486].el-card__body[data-v-2d7e794c] {\n  padding: 10px !important;\n}\n.desc[data-v-2d7e794c] {\n  text-indent: 2em;\n  line-height: 1.5;\n}\ntable.log-info[data-v-2d7e794c] {\n  margin-top: 15px;\n  border-collapse: collapse;\n}\ntable.browsersupport[data-v-2d7e794c] {\n  margin-top: 15px;\n  border-collapse: collapse;\n}\ntable.dataintable[data-v-2d7e794c] {\n  border: 1px solid #aaa;\n  width: 100%;\n}\ntable.browsersupport th[data-v-2d7e794c], table.log-info th[data-v-2d7e794c] {\n  padding: 0;\n  height: 36px;\n  vertical-align: middle;\n  text-align: center;\n  background-color: #F5F5F5;\n  border: 1px solid #ddd;\n}\ntable.dataintable tr[data-v-2d7e794c]:nth-child(even) {\n  background-color: #fff;\n}\ntable.browsersupport td[data-v-2d7e794c] {\n  padding: 0;\n  height: 86px;\n  width: 86px;\n  vertical-align: middle;\n  background: #fdfcf8 no-repeat center;\n  border: 1px solid #ddd;\n}\ntable.log-info td[data-v-2d7e794c] {\n  padding: 0;\n  height: 36px;\n  text-align: center;\n  vertical-align: middle;\n  background: #fdfcf8 no-repeat center;\n  border: 1px solid #ddd;\n}\ntable.browsersupport td a[data-v-2d7e794c]:hover {\n  color: #00f;\n  text-decoration: underline;\n}\ntable.browsersupport td[data-v-2d7e794c] {\n  text-align: center;\n}\n.el-tabs__header[data-v-2d7e794c] {\n  margin: 0 0 5px;\n}\n.page[data-v-2d7e794c] {\n  margin-top: 5px;\n  text-align: center;\n}\n.desc .el-tag[data-v-2d7e794c] {\n  display: inline-block;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n.el-table .cell[data-v-2d7e794c] {\n  line-height: 20px;\n}\n',""])},"5Yde":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"dataintable todo-list"},[a("tbody",[t._m(0),t._v(" "),t._l(t.list,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.desc))]),t._v(" "),a("td",[t._v(t._s(e.date))])])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("标识")]),this._v(" "),e("th",[this._v("名称")]),this._v(" "),e("th",[this._v("描述")]),this._v(" "),e("th",[this._v("时间")])])}]};var d=a("VU/8")({name:"DataTable",props:["list"]},n,!1,function(t){a("7i4r")},null,null);e.default=d.exports},"7i4r":function(t,e,a){var n=a("hpdA");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("6d978a90",n,!0)},ARoL:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),d=a.n(n),r=a("NYxO"),s=a("truu"),o=a("qEOw"),i=(a("TvqX"),{name:"dashboard",components:{DataTable:a("5Yde").default},data:function(){return{sessionInfo:[],leaderInfo:[],activeName2:"first",task:"task-completed",tableData:[{name:"基本构架",desc:"完成SPA前端页面搭建",date:"2018.2",isSuccess:!0},{name:"权限控制集成",desc:"控制权限到按钮级别",date:"2018.3",isSuccess:!0},{name:"第三方用户登录",desc:"集成第三方用户登录功能",date:"2018.6",isSuccess:!0},{name:"日志",desc:"集成登录和业务日志业务",date:"2018.6",isSuccess:!0},{name:"首页优化",desc:"首页面板的优化",date:"2018.6",isSuccess:!1}],logs:[],current_page:1,total:0,pageSize:5,todoList:{completed:[{id:1,name:"基础",desc:"后端API，前端SPA结构成型",date:"2018.2"},{id:2,name:"权限控制",desc:"权限集成，权限控制到按钮",date:"2018.2"},{id:3,name:"短信",desc:"系统集成短信通知API",date:"2018.6"},{id:4,name:"第三方登录",desc:"第三方登录集成到项目",date:"2018.6"},{id:5,name:"日志",desc:"集成日志功能，能显示日志",date:"2018.6"}],doing:[{id:6,name:"首页",desc:"优化首页面板",date:"进行中"}],plan:[{id:7,name:"QQ登录",desc:"集成QQ登录到项目",date:"计划中"},{id:8,name:"客服",desc:"集成客服功能，实现IM通讯",date:"计划中"},{id:9,name:"微信",desc:"集成微信公众号的基本管理功能",date:"计划中"}]},sponsor:["rcyboom","hello","Baoming_Wong","灯火阑珊","无骑士","Mr.king","河豚","杨威利de红茶","风--自由","李晓峰","往事如风","黑白","A You","曾欧文","梦","rough","breath呼哈卢","laravel_vue","刘天承","姜维","王小涛","A.T.","枫叶","刘洋","天空的颜色","ComeZc","LGY"]}},computed:d()({},Object(r.b)(["name","roles"])),methods:{pagination:function(t){this.current_page=t,this.fetchData()},sizeChange:function(t){this.pageSize=t,this.fetchData()},fetchData:function(){var t=this;Object(o.getLogInfo)(this.current_page,this.pageSize).then(function(e){t.logs=e.data,t.total=e.total}).catch(function(t){console.log(error)})},adjustDom:function(){for(var t=document.documentElement.querySelectorAll(".el-card__body"),e=0,a=t.length;e<a;e++)t[e].style.cssText="padding-top: 0;";for(var n=document.documentElement.querySelectorAll(".el-card__header"),d=0,r=n.length;d<r;d++)n[d].style.cssText="border-bottom: 1px solid rgba(20, 132, 210, 0.71);";var s=document.documentElement.querySelectorAll("#sponsor .el-tag");for(d=0,r=s.length;d<r;d++)s[d].style.cssText="display: inline-block; margin-right: 5px; margin-bottom: 5px;"},getSession:function(){var t=this;Object(s.getInfo)().then(function(e){t.sessionInfo=e.data}).catch(function(t){console.log(error)})},getLeader:function(){var t=this;getInfoByLeader().then(function(e){t.leaderInfo=e.data}).catch(function(e){t.$message({type:"error",message:e.response.data.message})})}},created:function(){var t=this.tableData.length;if(t>4)for(var e=0;e<t-4;e++)this.tableData.shift();this.fetchData()},mounted:function(){this.adjustDom()}}),l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container",attrs:{id:"dashboard-container"}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"box-card",attrs:{id:"introduction"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("介绍")])]),t._v(" "),a("el-tabs",{model:{value:t.activeName2,callback:function(e){t.activeName2=e},expression:"activeName2"}},[a("el-tab-pane",{attrs:{label:"系统描述",name:"first"}},[a("p",{staticClass:"desc"},[t._v("\n               本系统结合后端代码，主要是让大家熟悉前后端分离开发的过程，快速过度到前后端分离开发的体系。\n               本系统源码主要适合以下场景：\n                "),a("ol",[a("li",[t._v("PC端后台系统")]),t._v(" "),a("li",[t._v("web管理系统开发")]),t._v(" "),a("li",[t._v("各类API开发与扩展")])])])]),t._v(" "),a("el-tab-pane",{attrs:{label:" 技术交流",name:"third"}},[a("table",{staticClass:"dataintable browsersupport"},[a("tbody",[a("tr",[a("th",[t._v("QQ群")]),t._v(" "),a("th",[t._v("公众号")]),t._v(" "),a("th",[t._v("微信")]),t._v(" "),a("th",[t._v("博客")])]),t._v(" "),a("tr",[a("td",{},[a("img",{attrs:{width:"80",height:"80",src:"https://github.com/wmhello/laravel_template_with_vue/raw/master/Screenshots/qq_qrcode.jpg",alt:"QQ群二维码"}}),t._v(" "),a("p"),a("h3",[t._v("106822531")]),t._v(" "),a("p")]),t._v(" "),a("td",{},[a("img",{attrs:{src:"https://github.com/wmhello/laravel_template_with_vue/raw/master/Screenshots/gzh.jpg",height:"80",width:"80",alt:"QQ二维码"}}),t._v(" "),a("p"),a("h3",[t._v("computer_life")]),a("p")]),t._v(" "),a("td",{},[a("img",{attrs:{src:"https://github.com/wmhello/laravel_template_with_vue/raw/master/Screenshots/weixin1.png",alt:"微信二维码",width:"80",height:"80"}}),t._v(" "),a("p"),a("h3",[t._v("xpyzwm")]),a("p")]),t._v(" "),a("td",{},[a("img",{attrs:{src:"data:image/png;base64,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",alt:"",width:"80",height:"80"}}),t._v(" "),a("p"),a("h3",[a("a",{attrs:{href:"https://wmhello.github.io"}},[t._v("地址")])]),a("p")])])])])]),t._v(" "),a("el-tab-pane",{attrs:{label:"教学及其他",name:"fourth"}},[a("p",{staticClass:"desc"},[t._v("本人长期从事有偿教学，如果你想系统的学习web程序开发、微信开发和webapp的开发，\n              想成为业界最受欢迎的全栈工程师，可以联系我。学习内容涉及PHP、laravel、javascript、vue.js、es6、前端工程化、SEO优化、前后端分离开发等知识\n              ")])])],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("功能进度列表")])]),t._v(" "),a("el-tabs",{model:{value:t.task,callback:function(e){t.task=e},expression:"task"}},[a("el-tab-pane",{attrs:{label:"已完成",name:"task-completed"}},[a("data-table",{attrs:{list:t.todoList.completed}})],1),t._v(" "),a("el-tab-pane",{attrs:{label:"进行中",name:"task-doing"}},[a("data-table",{attrs:{list:t.todoList.doing}})],1),t._v(" "),a("el-tab-pane",{attrs:{label:"计划中",name:"task-plan"}},[a("data-table",{attrs:{list:t.todoList.plan}})],1)],1)],1)],1)],1),t._v(" "),a("div",{staticStyle:{height:"10px"}}),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("el-card",{ref:"log",staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("系统日志")])]),t._v(" "),a("table",{staticClass:"dataintable log-info"},[a("tbody",[a("tr",[a("th",[t._v("标识")]),t._v(" "),a("th",[t._v("用户")]),t._v(" "),a("th",[t._v("操作")]),t._v(" "),a("th",[t._v("描述")])]),t._v(" "),t._l(t.logs,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(e.user_name))]),t._v(" "),a("td",[t._v(t._s(e.type))]),t._v(" "),a("td",[t._v(t._s(e.desc))])])})],2)]),t._v(" "),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{background:"","current-page":t.current_page,layout:"total,prev, pager, next","page-size":t.pageSize,total:t.total},on:{"current-change":t.pagination,"size-change":t.sizeChange,"update:currentPage":function(e){t.current_page=e},"update:pageSize":function(e){t.pageSize=e}}})],1)])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("赞助人员列表")])]),t._v(" "),a("p",{staticClass:"desc"},[t._v("\n          程序开源后得到了许多好心人的赞助，有的甚至没有留下名字，所以无法做到每个不漏的列出。感谢你们，你们的认可是我一直进行改进的动力。\n        ")]),t._v(" "),a("div",{attrs:{id:"sponsor"}},t._l(t.sponsor,function(e){return a("el-tag",{key:e,domProps:{innerHTML:t._s(e)}})}))])],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(i,l,!1,function(t){a("G5/T")},"data-v-2d7e794c",null);e.default=c.exports},"G5/T":function(t,e,a){var n=a("19/X");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("7deaf7a8",n,!0)},hpdA:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.dataintable{\n    border: 1px solid #aaa;\n    width: 100%;\n}\n.dataintable th{\n    padding: 0;\n    height: 36px;\n    vertical-align: middle;\n    text-align: center;\n    background-color: #F5F5F5;\n    border: 1px solid #ddd;\n}\ntable.todo-list{\n    border-collapse: collapse;\n}\ntable.todo-list td{\n      padding: 0;\n      height: 36px;\n      text-align: center;\n      vertical-align: middle;\n      background: #fdfcf8 no-repeat center;\n      border: 1px solid #ddd;\n}\n",""])},qEOw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getLogInfo=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Object(n.a)({url:"/api/logs",method:"get",params:{pageSize:e,page:t}})};var n=a("Vo7i")},truu:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getInfo=function(){return Object(n.a)({url:"/api/session",method:"get"})},e.getInfoById=function(t){return Object(n.a)({url:"/api/session/"+t,method:"get"})},e.updateInfo=function(t,e){return e.year=parseInt(e.year.getFullYear()),Object(n.a)({url:"/api/session/"+t,method:"patch",data:e})},e.addInfo=function(t){return t.year=parseInt(t.year.getFullYear()),Object(n.a)({url:"/api/session",method:"post",data:t})},e.deleteInfoById=function(t){return Object(n.a)({url:"/api/session/"+t,method:"delete"})},e.Model=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;this.year=t,this.team=e,this.one=a,this.two=n,this.three=d};var n=a("Vo7i")}});