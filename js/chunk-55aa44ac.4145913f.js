(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55aa44ac"],{5391:function(t,e,a){"use strict";var o=a("d8bb"),n=a.n(o);n.a},a83c:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("section",{staticClass:"wrap scroll"},[a("div",{staticClass:"main_table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.comments,stripe:"","max-height":"600","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{prop:"id",label:"编号",width:"90",sortable:""}}),a("el-table-column",{attrs:{label:"用户名","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.user_id?a("span",[t._v("\n              "+t._s(e.row.user.username)+"\n            ")]):a("span",[t._v("\n              (游客) "+t._s(e.row.username)+"\n            ")])]}}])}),a("el-table-column",{attrs:{prop:"content",label:"评论内容","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"article_id",label:"文章ID",width:"90",sortable:""}}),a("el-table-column",{attrs:{prop:"article.title",label:"文章标题","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"created_at",label:"创建日期","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){t.deleteBtn(e.row.id)}}},[t._v("删除")])]}}])})],1),t.pageModel.sumCount>10?a("page",{attrs:{pageModel:t.pageModel},on:{selectList:t.selectRoleList}}):t._e()],1)])])},n=[],l=a("14eb"),s={components:{page:l["a"]},data:function(){return{loading:!0,comments:[],pageModel:{page:1,sumCount:10}}},created:function(){this.getComment()},methods:{getComment:function(){var t=this;this.loading=!0,this.$post("/apis/comment/read",this.pageModel).then(function(e){1==e.data.status?(console.log(e.data),t.comments=e.data.data,t.pageModel.sumCount=e.data.total):t.$message.error("获取数据失败！"),t.loading=!1})},selectRoleList:function(){this.getComment()},deleteBtn:function(t){var e=this;this.$confirm("是否删除该评论?","提示",{type:"warning"}).then(function(){e.$post("/apis/comment/remove",{id:t}).then(function(t){1==t.data.status?e.$message.success(t.data.msg):e.$message.error(t.data.msg)})})}}},i=s,r=(a("5391"),a("2877")),c=Object(r["a"])(i,o,n,!1,null,"c8475672",null);c.options.__file="comment.vue";e["default"]=c.exports},d8bb:function(t,e,a){}}]);