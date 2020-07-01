<template>
  <div>
    <div class="container p-3 p-md-4">
      <div class="jam-icon text-center">
        <img src="@/assets/images/jam.png">
      </div>
      <h2 class="jam-title">訂單付款</h2>
      <div class="row mb-5">
        <div class="col-sm-4">
          <div class="alert alert-success rounded-pill text-center" role="alert">
            1.填寫訂單
            <font-awesome-icon icon="check" class="ml-2"/>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="alert alert-success rounded-pill text-center" role="alert">
            2.確認付款
            <font-awesome-icon icon="check" class="ml-2"/>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="alert alert-success rounded-pill text-center" role="alert">
            3.訂單完成
            <font-awesome-icon icon="check" class="ml-2"/>
          </div>
        </div>
      </div>
      <div class="my-6 text-center border">
        <div class="d-inline-block bg-secondary text-light rounded-circle p-2 my-4" :class="{ 'bounce-animated': addAnimated }">
          <font-awesome-icon icon="check" size="3x"/>
        </div>
        <h4 class="text-center" style="line-height: 2rem;">
          感謝您的訂購
          <br class="d-md-none">
          <span class="d-none d-md-inline">，</span>歡迎您再次光臨!
        </h4>
        <div class="row my-4">
          <table class="table table-borderless mx-auto col-10 col-md-6 col-lg-4 text-left">
            <tbody>
              <tr>
                <th width="120" class="align-middle p-1">訂單成立時間</th>
                <td class="align-middle p-1 text-danger">{{order.create_at | turnTime}}</td>
              </tr>
              <tr>
                <th width="120" class="align-middle p-1">您的訂單編號</th>
                <td class="align-middle p-1 text-danger">{{order.id}}</td>
              </tr>
              <tr>
                <th width="120" class="align-middle p-1">您的訂單金額</th>
                <td class="align-middle text-danger p-1">{{order.total | currency}} 元</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="text-gray-700">
          <p class="mb-1">付款成功後，我們將會盡快出貨給您。</p>
          <p class="mb-1">為了保持產品新鮮，厚道先生堅持新鮮現做，請您耐心等候。</p>
          <p class="mb-4">如有其它變更需求，請致電客服0800-000-000將有專員為您服務。</p>
        </div>
      </div>
      <div class="my-4 text-center">
        <router-link to="/products" class="btn btn-light-red py-2">
          繼續選購
          <font-awesome-icon icon="angle-right" class="angle-right mr-1"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  data() {
    return {
      orderId: '',
    }
  },
  created() {
    this.orderId = this.$route.params.orderId;
    console.log(this.orderId);
    this.getOrder();
  },
  computed: {
    ...mapGetters('orderModules',['order']),
    ...mapGetters('cartModules',['addAnimated']),
  },
  methods: {
    getOrder() {
      this.$store.dispatch('orderModules/getOrder', this.orderId);
      this.$store.commit('cartModules/ADDANIMATED', true);
      // this.$store.dispatch('orderModules/getAnimated');
      // const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${this.orderId}`;
      // const vm = this;
      // vm.isLoading = true;
      // this.$http.get(api).then(response => {
      //   vm.isLoading = false;
      //   console.log(response.data);
      //   vm.order = response.data.order
      // })
    },
    
  }
};
</script>