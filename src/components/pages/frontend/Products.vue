<template>
  <div id="porducts">
    <div class="container p-3 p-md-4">
      <nav aria-label="breadcrumb ">
        <ol class="breadcrumb bg-white">
          <li class="breadcrumb-item">
            <router-link to="/index" class="text-gray-600">首頁</router-link>
          </li>
          <li class="breadcrumb-item text-secondary active" aria-current="page">購物商場</li>
        </ol>
      </nav>
      <div class="products row">
        <div class="sort col-lg-2">
          <ul class="sort-items list-unstyled d-flex flex-lg-column justify-content-around">
            <li>
              <a
                href="#"
                class="rounded bg-secondary px-1 px-sm-3"
                :class="{ 'active': category === 'all' }"
                @click.prevent="selectCategory('all')"
              >
                <font-awesome-icon icon="box-open" class="mr-1"/>所有商品
              </a>
            </li>
            <li>
              <a
                href="#"
                class="rounded bg-secondary px-1 px-sm-3"
                :class="{ 'active': category === '最新商品' }"
                @click.prevent="selectCategory('最新商品')"
              >
                <font-awesome-layers class="fa-size mr-1">
                  <font-awesome-icon icon="certificate" class="text-light-red"/>
                  <font-awesome-layers-text
                    class="fa-inverse"
                    transform="shrink-11.5 rotate--30"
                    value="NEW"
                    style="font-weight:900"
                  />
                </font-awesome-layers>最新商品
              </a>
            </li>
            <li>
              <a
                href="#"
                class="rounded bg-secondary px-1 px-sm-3"
                :class="{ 'active': category === '誠心推薦' }"
                @click.prevent="selectCategory('誠心推薦')"
              >
                <font-awesome-icon icon="thumbs-up" class="mr-1"/>誠心推薦
              </a>
            </li>
          </ul>
        </div>
        <div class="products-list col-lg-10">
          <div class="row">
            <div
              class="col-lg-4 col-md-6 col-12 mb-3"
              v-for="item in categoryProducts"
              :key="item.id"
            >
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
                  >加入購物車</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  created() {
    this.getProducts();
  },
  computed: {
    ...mapGetters("productsModules", [
      "products",
      "category",
      "categoryProducts"
    ]),
    ...mapGetters("cartModules", ["cart"])
  },
  methods: {
    ...mapActions("productsModules", ["getProducts"]),
    selectCategory(name) {
      this.$store.commit("productsModules/SELECTCATEGORY", name);
    },
    addtoCart(id, qty = 1) {
      const target = this.cart.carts.filter(item => item.product_id === id);
      if (target.length > 0) {
        const originCartId = target[0].id;
        const originQty = target[0].qty;
        const originProductId = target[0].product_id;
        const newQty = Number(qty) + Number(originQty);
        this.$store.dispatch("cartModules/changeQty", { originCartId, originProductId, newQty });
      } else {
        this.$store.dispatch("cartModules/addtoCart", { id, qty });
      }

    }
  }
};
</script>