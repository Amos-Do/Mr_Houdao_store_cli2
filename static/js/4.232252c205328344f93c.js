webpackJsonp([4],{"+EWZ":function(t,e){},l068:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Dd8w"),r=s.n(a),l=s("NYxO"),i={data:function(){return{form:{user:{name:"",email:"",tel:"",address:""},message:"",isLeave:!1}}},created:function(){this.getCart()},computed:r()({},Object(l.c)("cartModules",["cart"])),methods:r()({},Object(l.b)("cartModules",["getCart"]),{creatOrder:function(){var t=this,e=this,s=e.form;this.$refs.form.validate().then(function(a){a?(e.$store.dispatch("orderModules/creatOrder",s),t.isLeave=!0):e.$store.dispatch("alertModules/updateMessage",{message:"欄位填寫不完整",status:"danger"},{root:!0})})}}),beforeRouteLeave:function(t,e,s){this.isLeave?s():($("#CreateOrder").modal("show"),$(".confirm").on("click",function(){s()}),$(".cancel").on("click",function(){s(!1)}))}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container p-3 p-md-4"},[t._m(0),t._v(" "),s("h2",{staticClass:"jam-title"},[t._v("建立訂單")]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"my-4 row"},[s("table",{staticClass:"table border mx-auto col-10 col-md-8"},[t._m(2),t._v(" "),s("tbody",t._l(t.cart.carts,function(e){return s("tr",{key:e.id},[s("td",{staticClass:"d-sm-block d-none text-center"},[s("div",{staticClass:"cart-image d-inline-block",style:{backgroundImage:"url('"+e.product.imageUrl+"')"}})]),t._v(" "),s("td",{staticClass:"align-middle",staticStyle:{width:"auto"}},[s("span",[t._v(t._s(e.product.title))]),t._v(" "),s("br"),t._v(" "),s("span",{staticClass:"text-gray-600"},[t._v("x "+t._s(e.qty+" "+e.product.unit))]),t._v(" "),s("br"),t._v(" "),e.coupon?s("small",{staticClass:"text-success"},[t._v("優惠券-"+t._s(e.coupon.title))]):t._e()]),t._v(" "),s("td",{staticClass:"align-middle text-right border-right"},[t._v(t._s(t._f("currency")(e.total))+"元")])])}),0),t._v(" "),s("tfoot",[s("tr",[t.cart.total-t.cart.final_total>0?s("td",{staticClass:"text-right text-success",attrs:{colspan:"3"}},[t._v("\n              折扣金額:\n              "),s("span",{staticClass:"ml-4 mr-1"},[t._v(t._s(t._f("currency")(t.cart.total-t.cart.final_total))+"元")])]):t._e()]),t._v(" "),s("tr",[s("td",{staticClass:"bg-secondary text-right text-light font-weight-bold",attrs:{colspan:"3"}},[t._v("\n              總計:\n              "),s("span",{staticClass:"h2"},[t._v(t._s(t._f("currency")(t.cart.final_total))+"元")])])])])])]),t._v(" "),s("ValidationObserver",{ref:"form",staticClass:"my-5 row justify-content-center"},[s("form",{staticClass:"mx-auto col-12 col-md-8",on:{submit:function(e){return e.preventDefault(),t.creatOrder(e)}}},[s("h5",{staticClass:"mb-5 text-center"},[t._v("填寫訂單資料")]),t._v(" "),s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group col-md-6"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("label",{attrs:{for:"username"}},[t._v("收件人姓名*")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:r,attrs:{type:"text",name:"姓名",id:"username",placeholder:"輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),t._v(" "),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}])})],1),t._v(" "),s("div",{staticClass:"form-group col-md-6"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("label",{attrs:{for:"usertel"}},[t._v("收件人電話*")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:r,attrs:{type:"tel",name:"收件人電話",id:"usertel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),t._v(" "),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}])})],1)]),t._v(" "),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("label",{attrs:{for:"useremail"}},[t._v("Email*")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:r,attrs:{type:"email",name:"Email",id:"useremail",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),t._v(" "),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}])})],1),t._v(" "),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("label",{attrs:{for:"useraddress"}},[t._v("收件人地址*")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:r,attrs:{type:"text",name:"收件人地址",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t._v(" "),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}])})],1),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"comment"}},[t._v("備註")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-light-red"},[t._v("確認送出訂單")])])])])],1),t._v(" "),t._m(3)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"jam-icon text-center"},[e("img",{attrs:{src:s("l/Rc")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mb-5"},[e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"alert alert-success rounded-pill text-center",attrs:{role:"alert"}},[this._v("1.填寫訂單")])]),this._v(" "),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"alert alert-light rounded-pill text-center",attrs:{role:"alert"}},[this._v("2.確認付款")])]),this._v(" "),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"alert alert-light rounded-pill text-center",attrs:{role:"alert"}},[this._v("3.訂單完成")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"bg-gray-100",staticStyle:{"border-top":"5px solid #87A861"}},[e("tr",[e("th",{attrs:{colspan:"3"}},[this._v("訂單明細")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal fade",attrs:{id:"CreateOrder",tabindex:"-1",role:"dialog","aria-labelledby":"CreateOrderCenterTitle","aria-hidden":"true","data-backdrop":"static"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-body leave-modal"},[e("p",[this._v("您的訂單尚未成立，確定要離開此頁?")]),this._v(" "),e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-outline-secondary mr-2 confirm",attrs:{type:"button","data-dismiss":"modal"}},[this._v("確定")]),this._v(" "),e("button",{staticClass:"btn btn-danger cancel",attrs:{type:"button","data-dismiss":"modal"}},[this._v("取消")])])])])])])}]};var n=s("VU/8")(i,o,!1,function(t){s("+EWZ")},null,null);e.default=n.exports}});
//# sourceMappingURL=4.232252c205328344f93c.js.map