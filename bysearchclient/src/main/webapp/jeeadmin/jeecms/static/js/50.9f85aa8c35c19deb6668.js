webpackJsonp([50],{MOuR:function(n,t,e){"use strict";function a(n){e("oiO7")}Object.defineProperty(t,"__esModule",{value:!0});var r=e("PHrY"),s={data:function(){return{loading:!0,rules:{distName:[{required:!0,message:"此项必填",trigger:"blur"}]},params:{origName:"",distName:"",root:""}}},methods:{reName:function(n){var t=this;this.$refs[n].validate(function(n){if(!n)return document.querySelector("#main").scrollTop=0,!1;var e=t.params;r.p(e).then(function(n){t.loading=!1,200==n.code?(t.$message.success("修改成功"),t.$router.push({path:"/templatelist",query:{name:t.params.root}})):t.$router.push({path:"/templatelist",query:{name:t.params.root}})}).catch(function(n){t.loading=!1,t.$message.error("修改失败"),t.$router.push({path:"/templatelist",query:{name:t.params.root}})})})},back:function(){this.$router.push({path:"/templatelist",query:{name:this.params.root}})}},created:function(){var n=this.$route.query.name,t=this.$route.query.root;this.params.origName=n,this.params.distName=n,this.params.root=t}},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("cms-back"),n._v(" "),e("el-form",{ref:"topicInfo",staticClass:"cms-form",staticStyle:{padding:"0",margin:"0"},attrs:{model:n.params,rules:n.rules,"label-width":"162px"}},[e("el-form-item",{staticClass:"flex-100",attrs:{label:"原名称"}},[n._v("\n                    "+n._s(n.params.origName)+"\n            ")]),n._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"新名称",prop:"distName"}},[e("el-input",{staticClass:"cms-width",staticStyle:{width:"280px"},model:{value:n.params.distName,callback:function(t){n.$set(n.params,"distName",t)},expression:"params.distName"}})],1)],1),n._v(" "),e("div",{staticClass:"form-footer"},[e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/templaterename",expression:"'/templaterename'"}],attrs:{type:"primary"},on:{click:function(t){n.reName("topicInfo")}}},[n._v("修改")]),n._v(" "),e("el-button",{attrs:{type:"info"}},[n._v("重置")])],1)],1)},o=[],m={render:i,staticRenderFns:o},l=m,u=e("8AGX"),p=a,c=u(s,l,!1,p,null,null);t.default=c.exports},oC1P:function(n,t,e){t=n.exports=e("l95E")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},oiO7:function(n,t,e){var a=e("oC1P");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("8bSs")("535a92b4",a,!0)}});