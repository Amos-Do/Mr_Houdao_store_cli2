webpackJsonp([8],{lGBN:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Dd8w"),i=e.n(a),r=e("NYxO"),l={data:function(){return{orderId:""}},created:function(){this.orderId=this.$route.params.orderId,console.log(this.orderId),this.getOrder()},computed:i()({},Object(r.c)("orderModules",["order"]),Object(r.c)("cartModules",["addAnimated"])),methods:{getOrder:function(){this.$store.dispatch("orderModules/getOrder",this.orderId),this.$store.commit("cartModules/ADDANIMATED",!0)}}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"container p-3 p-md-4"},[t._m(0),t._v(" "),e("h2",{staticClass:"jam-title"},[t._v("訂單付款")]),t._v(" "),e("div",{staticClass:"row mb-5"},[e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"alert alert-success rounded-pill text-center",attrs:{role:"alert"}},[t._v("\n          1.填寫訂單\n          "),e("font-awesome-icon",{staticClass:"ml-2",attrs:{icon:"check"}})],1)]),t._v(" "),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"alert alert-success rounded-pill text-center",attrs:{role:"alert"}},[t._v("\n          2.確認付款\n          "),e("font-awesome-icon",{staticClass:"ml-2",attrs:{icon:"check"}})],1)]),t._v(" "),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"alert alert-success rounded-pill text-center",attrs:{role:"alert"}},[t._v("\n          3.訂單完成\n          "),e("font-awesome-icon",{staticClass:"ml-2",attrs:{icon:"check"}})],1)])]),t._v(" "),e("div",{staticClass:"my-6 text-center border"},[e("div",{staticClass:"d-inline-block bg-secondary text-light rounded-circle p-2 my-4",class:{"bounce-animated":t.addAnimated}},[e("font-awesome-icon",{attrs:{icon:"check",size:"3x"}})],1),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"row my-4"},[e("table",{staticClass:"table table-borderless mx-auto col-10 col-md-6 col-lg-4 text-left"},[e("tbody",[e("tr",[e("th",{staticClass:"align-middle p-1",attrs:{width:"120"}},[t._v("訂單成立時間")]),t._v(" "),e("td",{staticClass:"align-middle p-1 text-danger"},[t._v(t._s(t._f("turnTime")(t.order.create_at)))])]),t._v(" "),e("tr",[e("th",{staticClass:"align-middle p-1",attrs:{width:"120"}},[t._v("您的訂單編號")]),t._v(" "),e("td",{staticClass:"align-middle p-1 text-danger"},[t._v(t._s(t.order.id))])]),t._v(" "),e("tr",[e("th",{staticClass:"align-middle p-1",attrs:{width:"120"}},[t._v("您的訂單金額")]),t._v(" "),e("td",{staticClass:"align-middle text-danger p-1"},[t._v(t._s(t._f("currency")(t.order.total))+" 元")])])])])]),t._v(" "),t._m(2)]),t._v(" "),e("div",{staticClass:"my-4 text-center"},[e("router-link",{staticClass:"btn btn-light-red py-2",attrs:{to:"/products"}},[t._v("\n        繼續選購\n        "),e("font-awesome-icon",{staticClass:"angle-right mr-1",attrs:{icon:"angle-right"}})],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"jam-icon text-center"},[s("img",{attrs:{src:e("l/Rc")}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{staticClass:"text-center",staticStyle:{"line-height":"2rem"}},[this._v("\n        感謝您的訂購\n        "),s("br",{staticClass:"d-md-none"}),this._v(" "),s("span",{staticClass:"d-none d-md-inline"},[this._v("，")]),this._v("歡迎您再次光臨!\n      ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"text-gray-700"},[s("p",{staticClass:"mb-1"},[this._v("付款成功後，我們將會盡快出貨給您。")]),this._v(" "),s("p",{staticClass:"mb-1"},[this._v("為了保持產品新鮮，厚道先生堅持新鮮現做，請您耐心等候。")]),this._v(" "),s("p",{staticClass:"mb-4"},[this._v("如有其它變更需求，請致電客服0800-000-000將有專員為您服務。")])])}]},n=e("VU/8")(l,c,!1,null,null,null);s.default=n.exports}});
//# sourceMappingURL=8.b7b55144fa91e39f639c.js.map