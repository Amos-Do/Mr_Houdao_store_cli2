<template>
  <div>
    <!-- 品牌介紹 -->
    <section id="brand">
      <div
        class="container brand-info d-flex flex-wrap flex-md-nowrap p-3 px-md-5 pt-md-5 pb-md-3 justify-content-around align-items-center animated"
      >
        <div class="brand-content py-5 py-md-0">
          <em>Welcome!</em>
          <h3>
            <span>Mr.</span>HOUDAO
          </h3>
          <p>
            厚道先生認為
            <br>一道菜的成敗在於醬汁是否讓這道菜更出色
            <br>於是 『 厚道先生 醬汁專門 』
            <br>就此誕生
          </p>
          <span>厚道先生</span>
        </div>
        <img class src="@/assets/images/introduction_1@.png" alt>
      </div>
    </section>
    <!-- 特色 -->
    <section id="features">
      <div
        class="container features-info d-flex flex-wrap flex-md-nowrap p-3 px-md-5 py-md-3 align-items-center animated"
      >
        <div class="features-imgs order-2 order-md-0">
          <img class="top-img" src="@/assets/images/features2.jpg" alt>
          <img class="under-img" src="@/assets/images/features1.jpg" alt>
        </div>
        <div class="features-content my-5 my-md-0 ml-md-3 ml-lg-5">
          <p>
            <font-awesome-icon icon="check" class="check-icon"/>獨家減糖配方
          </p>
          <p>
            <font-awesome-icon icon="check" class="check-icon"/>使用天然食材「銀耳」內富含膠質
          </p>
          <p>
            <font-awesome-icon icon="check" class="check-icon"/>最簡單的心，做出最單純的醬
          </p>
        </div>
      </div>
    </section>
    <section id="flagship1" class="bg-light-bule">
      <div class="container p-3 p-md-5 animated">
        <div class="row">
          <div class="col-md-8 flagship py-5 py-md-0">
            <p>
              吃過厚道先生藍莓果醬的朋友一定都曉得
              <br>裡面除了滿滿的藍莓 還是滿滿的藍莓！
              <br>本週末是否來一罐藍莓果醬
              <br>度過幸福又健康的早餐時光呢？
            </p>
            <router-link
              to="/product_detail/-MAabq6vbpG_PVUZv4sU"
              class="btn d-block btn-primary text-light align-self-end"
            >
              More
              <font-awesome-icon icon="angle-right" class="angle-right mr-1"/>
            </router-link>
          </div>
          <div class="col-md-4 text-center image1-container"></div>
        </div>
      </div>
    </section>
    <section id="flagship2" class="bg-yellow">
      <div class="container p-3 p-md-5 animated">
        <div class="row">
          <div class="col-md-5 text-center image2-container order-1 order-md-0"></div>
          <div class="col-md-7 flagship flagship2-content px-5 py-md-0">
            <p>
              厚道先生從小家裡就種鳳梨
              <br>就獨愛台農17號-金鑽鳳梨
              <br>因為它擁有接近土鳳梨的香氣
              <br>肉質纖維細，香甜飽滿
              <br>另外一樣最愛的水果-Kiwi
              <br>做成金鑽鳳梨奇異果醬
            </p>
            <router-link
              to="/product_detail/-MAabRrHcsXKOJbcHbgF"
              class="btn d-block btn-deep-yellow text-primary align-self-end"
            >
              More
              <font-awesome-icon icon="angle-right" class="angle-right mr-1"/>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section id="flagship3" class="bg-pink">
      <div class="container p-3 p-md-5 animated">
        <div class="row">
          <div class="col-md-8 flagship py-5 py-md-0">
            <p>
              厚道先生處理草莓的過程可是完全不馬虎！
              <br>首先 將葉子去除
              <br>並清洗藏在葉子下的髒東西
              <br>接著用大量Ro水清洗每一顆草莓
              <br>最後再逐一切去頭部
              <br>酸酸甜甜的草莓果醬
              <br>讓你買的安心吃的放心
            </p>
            <router-link
              to="/product_detail/-MAaaSrCF-wlOtnipJsE"
              class="btn d-block btn-light-red text-light align-self-end"
            >
              More
              <font-awesome-icon icon="angle-right" class="angle-right mr-1"/>
            </router-link>
          </div>
          <div class="col-md-4 text-center image3-container"></div>
        </div>
      </div>
    </section>
    <section id="newProducts">
      <div class="container p-3 p-md-5 animated">
        <div class="jam-icon text-center">
          <img src="@/assets/images/jam.png">
        </div>
        <h3 class="jam-title">NEW PRODUCTS</h3>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12 mb-3" v-for="item in newProducts" :key="item.id">
            <div class="card product-card">
              <div class="product-img" :style="{ 'backgroundImage':`url('${item.imageUrl}')` }">
                <router-link :to="{ name: 'ProductDetail', params: { id: item.id }}">
                  <div class="more">詳細商品...</div>
                </router-link>
              </div>
              <div class="card-body p-0 pt-4 pm-2 align-items-">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text card-content text-gray-700">{{ item.description }}</p>
                <div class="card-price pt-3 d-flex justify-content-between align-items-end">
                  <span class="price text-danger">{{ item.price | currency }} 元</span>
                  <span
                    class="orange-price"
                    v-if="item.origin_price"
                  >{{ item.origin_price | currency }} 元</span>
                </div>
                <button
                  type="button"
                  class="btn btn-outline-secondary w-100 mt-3"
                  @click="addtoCart(item.id)"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="text-right">
          <router-link to="/products">
            <button type="button" class="btn btn-light-red text-light btn-lg">
              滿滿的醬，更多在購物商場
              <font-awesome-icon icon="angle-right" class="angle-right mr-1"/>
            </button>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  data() {
    return {
    };
  },
  created() {
    this.getProducts();
  },
  computed: {
    ...mapGetters('productsModules',['products']),
    ...mapGetters('cartModules', ['cart']),
    newProducts() {
      const vm = this;
      const allNewProducts = vm.$store.state.productsModules.products.filter(item => {
        return item.category === "最新商品";
      });
      let allLen = allNewProducts.length;
      return allNewProducts.filter((item, index) => {
        return index <= allLen - 1 && index >= allLen - 3;
      });
    }
    // products() {
    //   return this.$store.state.products;
    // },
    // newProducts() {
    //   return this.$store.state.newProducts;
    // }
  },
  methods: {
    ...mapActions('productsModules',['getProducts']),
    // getProducts() {
    //   this.$store.dispatch('getProducts');
    //   // this.$store.commit('NEWPRODUCTS');
    //   // const api = `${process.env.VUE_APP_API}/api/${
    //   //   process.env.VUE_APP_CUSTOMPATH
    //   // }/products/all`;
    //   // const vm = this;
    //   // // vm.$store.state.isLoading = true;
    //   // // dipatch 呼叫 actions 的 function 並傳入 payload
    //   // vm.$store.dispatch("updateLoading", true);
    //   // // vm.$store.commit('LOADING', true);
    //   // this.$http.get(api).then(response => {
    //   //   console.log(response.data);
    //   //   // vm.$store.state.isLoading = false;
    //   //   vm.$store.dispatch("updateLoading", false);
    //   //   // vm.$store.commit('LOADING', false);
    //   //   response.data.products.forEach(item => {
    //   //     if (item.is_enabled === 1) {
    //   //       vm.products.push(item);
    //   //     }
    //   //   });
    //   //   vm.getNewProducts();
    //   // });
    // },
    // getNewProducts() {
    //   const vm = this;
    //   const allNewProducts = vm.products.filter(item => {
    //     return item.category === "最新商品";
    //   });
    //   let allLen = allNewProducts.length;
    //   vm.newProducts = allNewProducts.filter((item, index) => {
    //     return index <= allLen - 1 && index >= allLen - 3;
    //   });
    // },
    addtoCart(id, qty = 1) {
      const target = this.cart.carts.filter((item) => item.product_id === id);
      console.log(target);
      if (target.length > 0) {
        const originCartId = target[0].id;
        const originQty = target[0].qty;
        const originProductId = target[0].product_id;
        const newQty = Number(qty) + Number(originQty);
        console.log('newQty',newQty);
        this.$store.dispatch('cartModules/changeQty', { originCartId, originProductId, newQty });
      } else {
        this.$store.dispatch('cartModules/addtoCart', {id, qty})
      }
      // const api = `${process.env.VUE_APP_API}/api/${
      //   process.env.VUE_APP_CUSTOMPATH
      // }/cart`;
      // const cart = {
      //   product_id: id,
      //   qty
      // };
      // const vm = this;
      // vm.addtoCartLoading = id;
      // this.$http.post(api, { data: cart }).then(response => {
      //   if (response.data.success) {
      //     vm.addtoCartLoading = "";
      //     this.$bus.$emit("message:push", response.data.message, "success");
      //   } else {
      //     vm.addtoCartLoading = "";
      //     this.$bus.$emit(
      //       "message:push",
      //       "加入購物車失敗，請稍後再試",
      //       "danger"
      //     );
      //   }
      // });
    }
  },
  mounted() {
    $(window).scroll(function() {
      var scrollPos = $(window).scrollTop();
      var windowHeight = $(window).height();

      $(".animated").each(function() {
        var thisPos = $(this).offset().top;
        if (windowHeight + scrollPos >= thisPos) {
          $(this).addClass("fadeIn");
        }
      });
    });
  }
};
</script>