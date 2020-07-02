<template>
  <div>
    <nav class="navbar navbar-expand-md p-md-0 fixed-top nav">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <font-awesome-icon icon="bars"/>
        </button>
        <h1 class="text-hide mb-0">
          <router-link class="navbar-brand mx-0 py-0 py-md-1" to="/index">
            <img src="@/assets/images/logo_1@3x.png" style="height:55px;">
            <img
              class="d-none d-md-inline-block"
              src="@/assets/images/logo_2@3x.png"
              style="height:32px;"
            >
          </router-link>厚道先生
        </h1>
        <div
          class="collapse navbar-collapse justify-content-end order-2"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link px-md-3" to="/index">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link px-md-3" to="/products">購物商場</router-link>
            </li>
            <li class="nav-item" v-if="!status">
              <router-link class="nav-link px-md-3" to="/login">後台登入</router-link>
            </li>
            <li class="nav-item" v-if="status">
              <router-link class="nav-link px-md-3" to="/admin/products_list">進入後台</router-link>
            </li>
          </ul>
        </div>
        <div class="nav-item dropdown cart-icon order-md-2">
          <a
            class="nav-link dropdown-toggle pulse-animated"
            :class="{ 'bounce-animated': addAnimated}"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <font-awesome-icon
              icon="shopping-cart"
              class="shopping-cart text-secondary"
              transform="grow-3"
            />
            <span
              class="badge badge-light-red rounded-circle text-light"
              v-if="cart.total"
            >{{ cart.carts.length }}</span>
          </a>
          <div class="dropdown-menu dropdown-menu-right px-2" aria-labelledby="navbarDropdown">
            <div class="mt-3 text-center" v-if="!cart.total">
              <p>購物車是空的！</p>
              <router-link to="/products" class="btn btn-secondary w-100 text-light">前往購物商場</router-link>
            </div>
            <div v-else>
              <div class="overflow-auto" style="max-height:300px;">
                <table class="table table-borderless">
                  <thead>
                    <th>名稱</th>
                    <th class="text-center text-nowrap">數量</th>
                    <th width="80" class="text-right">金額</th>
                    <th class="text-center">刪除</th>
                  </thead>
                  <tbody class>
                    <tr class="border-top" v-for="item in cart.carts" :key="item.id">
                      <th class="align-middle cart-product">{{ item.product.title }}</th>
                      <td class="text-center align-middle">{{ item.qty }}</td>
                      <td class="text-right align-middle text-nowrap">{{ item.total | currency }}</td>
                      <td>
                        <button
                          class="btn btn-sm btn-outline-light-red"
                          @click="removeCartItem(item.id)"
                        >
                          <font-awesome-icon icon="trash-alt"/>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <router-link to="/cart" class="btn btn-secondary w-100 text-light mt-2">查看我的購物車</router-link>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
    <div
      id="carouselIndicators"
      class="carousel slide carousel-fade"
      data-ride="carousel"
      data-touch="true"
    >
      <!-- <ol class="carousel-indicators">
        <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselIndicators" data-slide-to="1"></li>
        <li data-target="#carouselIndicators" data-slide-to="2"></li>
        <li data-target="#carouselIndicators" data-slide-to="3"></li>
      </ol>-->
      <div class="carousel-inner vw-100">
        <div class="carousel-item active mw-100 vh-100 d-flex">
          <div class="carousel-content container">
            <p class="mb-0 text-light px-3">厚道先生 醬汁專門</p>
            <h2>
              Healthy sauce
              <br>
              <span class="text-secondary">for you</span>
            </h2>
            <font-awesome-icon icon="angle-double-down" class="angle-double-down"/>
          </div>
        </div>
        <div class="carousel-item mw-100 vh-100 d-flex"></div>
        <div class="carousel-item mw-100 vh-100 d-flex"></div>
        <div class="carousel-item mw-100 vh-100 d-flex"></div>
      </div>
    </div>
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
    this.getCart();
    this.$store.dispatch('check')
  },
  computed: {
    ...mapGetters('cartModules',['cart','addAnimated']),
    ...mapGetters(['status']),
  },
  methods: {
    ...mapActions('cartModules',['getCart']),
    removeCartItem(id) {
      this.$store.dispatch('cartModules/removeCartItem', id);
    }
  },
  mounted() {
    $(window).scroll(function() {
      var windowHeight = $(window).height();
      $(".nav").each(function() {
        var thisPos = $(this).offset().top;
        if (windowHeight / 2 < thisPos) {
          $(this).addClass("nav-light");
        } else {
          $(this).removeClass("nav-light");
        }
      });
    });

    $(".dropdown-menu").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  }
};
</script>

<style lang="scss">
</style>