(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74dc2182"],{"7f7f":function(t,s,r){var o=r("86cc").f,e=Function.prototype,a=/^\s*function ([^ (]*)/,n="name";n in e||r("9e1e")&&o(e,n,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},9729:function(t,s,r){"use strict";r.r(s);var o=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"main"},[r("div",{staticClass:"regiter-box"},[r("div",{staticClass:"title"},[t._v("修改密码")]),r("Form",{ref:"formCustom",attrs:{model:t.formCustom,"label-position":"top",rules:t.ruleCustom}},[t.alert.msg?r("Alert",{attrs:{type:t.alert.type,"show-icon":""}},[t._v(t._s(t.alert.msg))]):t._e(),r("FormItem",{attrs:{label:"当前密码",prop:"old_password"}},[r("Input",{attrs:{type:"password",size:"large"},model:{value:t.formCustom.old_password,callback:function(s){t.$set(t.formCustom,"old_password",s)},expression:"formCustom.old_password"}},[r("Icon",{attrs:{slot:"prefix",type:"md-lock"},slot:"prefix"})],1)],1),r("FormItem",{attrs:{label:"新密码",prop:"new_password"}},[r("Input",{attrs:{type:"password",size:"large"},model:{value:t.formCustom.new_password,callback:function(s){t.$set(t.formCustom,"new_password",s)},expression:"formCustom.new_password"}},[r("Icon",{attrs:{slot:"prefix",type:"md-lock"},slot:"prefix"})],1)],1),r("FormItem",{attrs:{label:"确认新密码",prop:"rep_password"}},[r("Input",{attrs:{type:"password",size:"large"},model:{value:t.formCustom.rep_password,callback:function(s){t.$set(t.formCustom,"rep_password",s)},expression:"formCustom.rep_password"}},[r("Icon",{attrs:{slot:"prefix",type:"md-lock"},slot:"prefix"})],1)],1),r("FormItem",[r("Button",{attrs:{type:"primary",long:"",size:"large",loading:t.loading},on:{click:function(s){return t.handleSubmit("formCustom")}}},[t._v("修改密码")])],1)],1),r("div",{staticClass:"text-center"},[t._v("\n      忘记密码?你可以"),r("router-link",{attrs:{to:"/recover"}},[t._v("重置密码")])],1)],1)])},e=[],a=(r("7f7f"),{data:function(){var t=this,s=function(s,r,o){""===r?o(new Error("确认新密码不能为空")):r!==t.formCustom.new_password?o(new Error("两次输入的密码不一致!")):o()};return{loading:!1,alert:{type:"error",msg:""},formCustom:{old_password:"",new_password:"",rep_password:""},ruleCustom:{old_password:[{required:!0,message:"密码不能为空",trigger:"change"}],new_password:[{required:!0,message:"新密码不能为空",trigger:"change"}],rep_password:[{required:!0,validator:s,trigger:"blur"}]}}},methods:{handleSubmit:function(t){var s=this;this.$refs[t].validate(function(t){t&&s.changePasswd()})},changePasswd:function(){var t=this;this.loading=!0,this.$post("/apis/user/resetpassword",this.formCustom).then(function(s){t.alert={type:"success",msg:s.message},t.loading=!1,setTimeout(function(){t.$router.push("/person")},1500)}).catch(function(s){t.loading=!1})}}}),n=a,i=(r("d352"),r("2877")),l=Object(i["a"])(n,o,e,!1,null,"5ed4979f",null);s["default"]=l.exports},"991b":function(t,s,r){},d352:function(t,s,r){"use strict";var o=r("991b"),e=r.n(o);e.a}}]);