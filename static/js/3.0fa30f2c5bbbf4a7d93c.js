webpackJsonp([3],{nMWk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Dd8w"),n=a.n(s),o=a("NYxO"),r={data:function(){return{couponCode:""}},created:function(){this.getCart()},computed:n()({},Object(o.c)("cartModules",["cart"])),methods:n()({},Object(o.b)("cartModules",["getCart"]),{addtoCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("cartModules/addtoCart",{id:t,qty:e})},removeCartItem:function(t){this.$store.dispatch("cartModules/removeCartItem",t)},changeQty:function(t,e,a,s){var n=void 0;n=!0===s?a+1:1===a?1:a-1,console.log(n),this.$store.dispatch("cartModules/changeQty",{originCartId:t,originProductId:e,newQty:n})},addCouponCode:function(){var t={code:this.couponCode};this.$store.dispatch("cartModules/addCouponCode",t)}})},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container p-3 p-md-4"},[t._m(0),t._v(" "),a("h2",{staticClass:"jam-title"},[t._v("購物車內容")]),t._v(" "),t.cart.total?a("div",{staticClass:"my-4"},[a("table",{staticClass:"table"},[t._m(1),t._v(" "),a("tbody",t._l(t.cart.carts,function(e){return a("tr",{key:e.id},[a("td",{staticClass:"d-md-block d-none text-center"},[a("div",{staticClass:"cart-image d-inline-block",style:{backgroundImage:"url('"+e.product.imageUrl+"')"}})]),t._v(" "),a("td",{staticClass:"align-middle cart-product"},[t._v("\n              "+t._s(e.product.title)+"\n              "),e.coupon?a("div",{staticClass:"text-success"},[t._v("\n                已套用優惠券"),a("br"),t._v(" "),a("small",[t._v(t._s(e.coupon.title))])]):t._e(),t._v(" "),a("div",{staticClass:"d-md-none mt-3"},[a("div",{staticClass:"input-group"},[a("button",{staticClass:"btn btn-sm btn-outline-primary mr-1 px-1 rounded",attrs:{disabled:1===e.qty},on:{click:function(a){return a.preventDefault(),t.changeQty(e.id,e.product.id,e.qty,!1)}}},[t._v("－")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.qty,expression:"item.qty"}],staticClass:"form-control form-control-sm border-primary rounded text-center",attrs:{type:"number",disabled:""},domProps:{value:e.qty},on:{input:function(a){a.target.composing||t.$set(e,"qty",a.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-sm btn-outline-primary ml-1 px-1 rounded",on:{click:function(a){return a.preventDefault(),t.changeQty(e.id,e.product.id,e.qty,!0)}}},[t._v("＋")])])])]),t._v(" "),a("td",{staticClass:"align-middle text-nowrap d-md-table-cell d-none"},[a("div",{staticClass:"input-group"},[a("button",{staticClass:"btn btn-sm btn-outline-primary mr-2 rounded",attrs:{disabled:1===e.qty},on:{click:function(a){return a.preventDefault(),t.changeQty(e.id,e.product.id,e.qty,!1)}}},[t._v("－")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.qty,expression:"item.qty"}],staticClass:"form-control form-control-sm border-primary rounded text-center",attrs:{type:"number",disabled:""},domProps:{value:e.qty},on:{input:function(a){a.target.composing||t.$set(e,"qty",a.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-sm btn-outline-primary ml-2 rounded",on:{click:function(a){return a.preventDefault(),t.changeQty(e.id,e.product.id,e.qty,!0)}}},[t._v("＋")])])]),t._v(" "),a("td",{staticClass:"align-middle text-center",attrs:{scope:"row"}},[a("button",{staticClass:"btn btn-sm btn-outline-danger",on:{click:function(a){return t.removeCartItem(e.id)}}},[a("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)]),t._v(" "),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(e.total))+"元")])])}),0),t._v(" "),a("tfoot",[a("tr",{staticClass:"d-md-none"},[a("td",{attrs:{colspan:"5"}},[a("div",{staticClass:"input-group input-group-sm mr-auto w-75"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.couponCode,expression:"couponCode"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.couponCode},on:{input:function(e){e.target.composing||(t.couponCode=e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v("套用優惠碼")])])])])]),t._v(" "),a("tr",[a("td",{staticClass:"d-md-table-cell d-none",attrs:{colspan:"4"}},[a("div",{staticClass:"input-group input-group-sm mr-auto w-50"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.couponCode,expression:"couponCode"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.couponCode},on:{input:function(e){e.target.composing||(t.couponCode=e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v("套用優惠碼")])])])]),t._v(" "),a("td",{staticClass:"text-right",attrs:{colspan:"5"}},[t._v("\n              小計:\n              "),a("span",{staticClass:"mr-1"},[t._v(t._s(t._f("currency")(t.cart.total))+"元")])])]),t._v(" "),a("tr",[t.cart.total-t.cart.final_total>0?a("td",{staticClass:"text-right text-success",staticStyle:{border:"none"},attrs:{colspan:"5"}},[t._v("\n              折扣金額:\n              "),a("span",{staticClass:"ml-4 mr-1"},[t._v(t._s(t._f("currency")(t.cart.total-t.cart.final_total))+"元")])]):t._e()]),t._v(" "),a("tr",[a("td",{staticClass:"text-right text-danger font-weight-bold",attrs:{colspan:"5"}},[t._v("\n              總計:\n              "),a("span",{staticClass:"h2"},[t._v(t._s(t._f("currency")(t.cart.final_total))+"元")])])])])]),t._v(" "),a("div",{staticClass:"text-right"},[a("router-link",{staticClass:"py-2 btn btn-light-red m-md-0 mr-2",attrs:{to:"/customer_order"}},[t._v("\n          確認訂單，前往下一步\n          "),a("font-awesome-icon",{staticClass:"angle-right mr-1",attrs:{icon:"angle-right"}})],1)],1)]):a("div",{staticClass:"my-4 text-center"},[a("p",{staticStyle:{padding:"80px 0"}},[t._v("您還未加入商品至購物車，快來去逛逛吧!")]),t._v(" "),a("router-link",{staticClass:"btn btn-light-red py-2",attrs:{to:"/products"}},[t._v("\n        前往購物商場\n        "),a("font-awesome-icon",{staticClass:"angle-right mr-1",attrs:{icon:"angle-right"}})],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"jam-icon text-center"},[e("img",{attrs:{src:a("l/Rc")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"d-md-table-cell d-none text-center",attrs:{scope:"col",width:"130"}},[t._v("商品圖片")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("商品名稱")]),t._v(" "),a("th",{staticClass:"d-md-table-cell d-none text-center",attrs:{scope:"col",width:"170"}},[t._v("數量")]),t._v(" "),a("th",{staticClass:"text-center",attrs:{width:"80"}},[t._v("刪除")]),t._v(" "),a("th",{staticClass:"text-right",attrs:{scope:"col",width:"130"}},[t._v("金額")])])])}]};var c=a("VU/8")(r,i,!1,function(t){a("sPLS")},null,null);e.default=c.exports},sPLS:function(t,e){}});
//# sourceMappingURL=3.0fa30f2c5bbbf4a7d93c.js.map