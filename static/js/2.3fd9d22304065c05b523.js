webpackJsonp([2],{"3CiT":function(t,s,i){t.exports=i.p+"static/img/introduction_1@.ea2003f.png"},"9QOu":function(t,s,i){t.exports=i.p+"static/img/features2.2b7049a.jpg"},E1Rg:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("Dd8w"),e=i.n(a),n=i("NYxO"),r={data:function(){return{}},created:function(){this.getProducts()},computed:e()({},Object(n.c)("productsModules",["products"]),Object(n.c)("cartModules",["cart"]),{newProducts:function(){var t=this.$store.state.productsModules.products.filter(function(t){return"最新商品"===t.category}),s=t.length;return t.filter(function(t,i){return i<=s-1&&i>=s-3})}}),methods:e()({},Object(n.b)("productsModules",["getProducts"]),{addtoCart:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=this.cart.carts.filter(function(s){return s.product_id===t});if(i.length>0){var a=i[0].id,e=i[0].qty,n=i[0].product_id,r=Number(s)+Number(e);this.$store.dispatch("cartModules/changeQty",{originCartId:a,originProductId:n,newQty:r})}else this.$store.dispatch("cartModules/addtoCart",{id:t,qty:s})}}),mounted:function(){$(window).scroll(function(){var t=$(window).scrollTop(),s=$(window).height();$(".animated").each(function(){var i=$(this).offset().top;s+t>=i&&$(this).addClass("fadeIn")})})}},c={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[t._m(0),t._v(" "),i("section",{attrs:{id:"features"}},[i("div",{staticClass:"container features-info d-flex flex-wrap flex-md-nowrap p-3 px-md-5 py-md-3 align-items-center animated"},[t._m(1),t._v(" "),i("div",{staticClass:"features-content my-5 my-md-0 ml-md-3 ml-lg-5"},[i("p",[i("font-awesome-icon",{staticClass:"check-icon",attrs:{icon:"check"}}),t._v("獨家減糖配方\n        ")],1),t._v(" "),i("p",[i("font-awesome-icon",{staticClass:"check-icon",attrs:{icon:"check"}}),t._v("使用天然食材「銀耳」內富含膠質\n        ")],1),t._v(" "),i("p",[i("font-awesome-icon",{staticClass:"check-icon",attrs:{icon:"check"}}),t._v("最簡單的心，做出最單純的醬\n        ")],1)])])]),t._v(" "),i("section",{staticClass:"bg-light-bule",attrs:{id:"flagship1"}},[i("div",{staticClass:"container p-3 p-md-5 animated"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-8 flagship py-5 py-md-0"},[t._m(2),t._v(" "),i("router-link",{staticClass:"btn d-block btn-primary text-light align-self-end",attrs:{to:"/product_detail/-MAabq6vbpG_PVUZv4sU"}},[t._v("\n            More\n            "),i("font-awesome-icon",{staticClass:"angle-right mr-1",attrs:{icon:"angle-right"}})],1)],1),t._v(" "),i("div",{staticClass:"col-md-4 text-center image1-container"})])])]),t._v(" "),i("section",{staticClass:"bg-yellow",attrs:{id:"flagship2"}},[i("div",{staticClass:"container p-3 p-md-5 animated"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-5 text-center image2-container order-1 order-md-0"}),t._v(" "),i("div",{staticClass:"col-md-7 flagship flagship2-content px-5 py-md-0"},[t._m(3),t._v(" "),i("router-link",{staticClass:"btn d-block btn-deep-yellow text-primary align-self-end",attrs:{to:"/product_detail/-MAabRrHcsXKOJbcHbgF"}},[t._v("\n            More\n            "),i("font-awesome-icon",{staticClass:"angle-right mr-1",attrs:{icon:"angle-right"}})],1)],1)])])]),t._v(" "),i("section",{staticClass:"bg-pink",attrs:{id:"flagship3"}},[i("div",{staticClass:"container p-3 p-md-5 animated"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-8 flagship py-5 py-md-0"},[t._m(4),t._v(" "),i("router-link",{staticClass:"btn d-block btn-light-red text-light align-self-end",attrs:{to:"/product_detail/-MAaaSrCF-wlOtnipJsE"}},[t._v("\n            More\n            "),i("font-awesome-icon",{staticClass:"angle-right mr-1",attrs:{icon:"angle-right"}})],1)],1),t._v(" "),i("div",{staticClass:"col-md-4 text-center image3-container"})])])]),t._v(" "),i("section",{attrs:{id:"newProducts"}},[i("div",{staticClass:"container p-3 p-md-5 animated"},[t._m(5),t._v(" "),i("h3",{staticClass:"jam-title"},[t._v("NEW PRODUCTS")]),t._v(" "),i("div",{staticClass:"row"},t._l(t.newProducts,function(s){return i("div",{key:s.id,staticClass:"col-lg-4 col-md-6 col-12 mb-3"},[i("div",{staticClass:"card product-card"},[i("div",{staticClass:"product-img",style:{backgroundImage:"url('"+s.imageUrl+"')"}},[i("router-link",{attrs:{to:{name:"ProductDetail",params:{id:s.id}}}},[i("div",{staticClass:"more"},[t._v("詳細商品...")])])],1),t._v(" "),i("div",{staticClass:"card-body p-0 pt-4 pm-2 align-items-"},[i("h5",{staticClass:"card-title"},[t._v(t._s(s.title))]),t._v(" "),i("p",{staticClass:"card-text card-content text-gray-700"},[t._v(t._s(s.description))]),t._v(" "),i("div",{staticClass:"card-price pt-3 d-flex justify-content-between align-items-end"},[i("span",{staticClass:"price text-danger"},[t._v(t._s(t._f("currency")(s.price))+" 元")]),t._v(" "),s.origin_price?i("span",{staticClass:"orange-price"},[t._v(t._s(t._f("currency")(s.origin_price))+" 元")]):t._e()]),t._v(" "),i("button",{staticClass:"btn btn-outline-secondary w-100 mt-3",attrs:{type:"button"},on:{click:function(i){return t.addtoCart(s.id)}}},[t._v("\n                加入購物車\n              ")])])])])}),0),t._v(" "),i("div",{staticClass:"text-right"},[i("router-link",{attrs:{to:"/products"}},[i("button",{staticClass:"btn btn-light-red text-light btn-lg",attrs:{type:"button"}},[t._v("\n            滿滿的醬，更多在購物商場\n            "),i("font-awesome-icon",{staticClass:"angle-right mr-1",attrs:{icon:"angle-right"}})],1)])],1)])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{attrs:{id:"brand"}},[a("div",{staticClass:"container brand-info d-flex flex-wrap flex-md-nowrap p-3 px-md-5 pt-md-5 pb-md-3 justify-content-around align-items-center animated"},[a("div",{staticClass:"brand-content py-5 py-md-0"},[a("em",[t._v("Welcome!")]),t._v(" "),a("h3",[a("span",[t._v("Mr.")]),t._v("HOUDAO\n        ")]),t._v(" "),a("p",[t._v("\n          厚道先生認為\n          "),a("br"),t._v("一道菜的成敗在於醬汁是否讓這道菜更出色\n          "),a("br"),t._v("於是 『 厚道先生 醬汁專門 』\n          "),a("br"),t._v("就此誕生\n        ")]),t._v(" "),a("span",[t._v("厚道先生")])]),t._v(" "),a("img",{attrs:{src:i("3CiT"),alt:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"features-imgs order-2 order-md-0"},[s("img",{staticClass:"top-img",attrs:{src:i("9QOu"),alt:""}}),this._v(" "),s("img",{staticClass:"under-img",attrs:{src:i("NTSM"),alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("\n            吃過厚道先生藍莓果醬的朋友一定都曉得\n            "),s("br"),this._v("裡面除了滿滿的藍莓 還是滿滿的藍莓！\n            "),s("br"),this._v("本週末是否來一罐藍莓果醬\n            "),s("br"),this._v("度過幸福又健康的早餐時光呢？\n          ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("\n            厚道先生從小家裡就種鳳梨\n            "),s("br"),this._v("就獨愛台農17號-金鑽鳳梨\n            "),s("br"),this._v("因為它擁有接近土鳳梨的香氣\n            "),s("br"),this._v("肉質纖維細，香甜飽滿\n            "),s("br"),this._v("另外一樣最愛的水果-Kiwi\n            "),s("br"),this._v("做成金鑽鳳梨奇異果醬\n          ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("\n            厚道先生處理草莓的過程可是完全不馬虎！\n            "),s("br"),this._v("首先 將葉子去除\n            "),s("br"),this._v("並清洗藏在葉子下的髒東西\n            "),s("br"),this._v("接著用大量Ro水清洗每一顆草莓\n            "),s("br"),this._v("最後再逐一切去頭部\n            "),s("br"),this._v("酸酸甜甜的草莓果醬\n            "),s("br"),this._v("讓你買的安心吃的放心\n          ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"jam-icon text-center"},[s("img",{attrs:{src:i("l/Rc")}})])}]},o=i("VU/8")(r,c,!1,null,null,null);s.default=o.exports},NTSM:function(t,s,i){t.exports=i.p+"static/img/features1.7cdd031.jpg"}});
//# sourceMappingURL=2.3fd9d22304065c05b523.js.map