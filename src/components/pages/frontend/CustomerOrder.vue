<template>
  <div>
    <div class="container p-3 p-md-4">
      <div class="jam-icon text-center">
        <img src="@/assets/images/jam.png">
      </div>
      <h2 class="jam-title">建立訂單</h2>
      <div class="row mb-5">
        <div class="col-sm-4">
          <div class="alert alert-success rounded-pill text-center" role="alert">1.填寫訂單</div>
        </div>
        <div class="col-sm-4">
          <div class="alert alert-light rounded-pill text-center" role="alert">2.確認付款</div>
        </div>
        <div class="col-sm-4">
          <div class="alert alert-light rounded-pill text-center" role="alert">3.訂單完成</div>
        </div>
      </div>
      <div class="my-4 row">
        <table class="table border mx-auto col-10 col-md-8">
          <thead class="bg-gray-100" style="border-top: 5px solid #87A861">
            <tr>
              <th colspan="3">訂單明細</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id">
              <td class="d-sm-block d-none text-center">
                <div
                  class="cart-image d-inline-block"
                  :style="{ 'backgroundImage':`url('${item.product.imageUrl}')` }"
                ></div>
              </td>
              <td class="align-middle" style="width:auto;">
                <span>{{ item.product.title }}</span>
                <br>
                <span class="text-gray-600">x {{`${item.qty} ${item.product.unit}`}}</span>
                <br>
                <small class="text-success" v-if="item.coupon">優惠券-{{ item.coupon.title }}</small>
              </td>
              <td class="align-middle text-right border-right">{{ item.total | currency }}元</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <!-- <td colspan="3" class="text-right border-top" style="border:none">
                運費:
                <span class="ml-4 mr-1">$0</span>
              </td> -->
              <td colspan="3" class="text-right text-success"
                v-if="(cart.total - cart.final_total) > 0"
                >
                折扣金額:
                <span class="ml-4 mr-1">{{ cart.total - cart.final_total | currency }}元</span>
              </td>
            </tr>
            <tr>
              <td colspan="3" class="bg-secondary text-right text-light font-weight-bold">
                總計:
                <span class="h2">{{ cart.final_total | currency }}元</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <!-- 訂單資料 -->
      <ValidationObserver ref="form" class="my-5 row justify-content-center">
        <form class="mx-auto col-12 col-md-8" @submit.prevent="creatOrder">
          <h5 class="mb-5 text-center">填寫訂單資料</h5>
          <div class="form-row">
            <div class="form-group col-md-6">
              <validation-provider rules="required" v-slot="{errors, classes}">
                <label for="username">收件人姓名*</label>
                <input
                  type="text"
                  class="form-control"
                  name="姓名"
                  id="username"
                  placeholder="輸入姓名"
                  v-model="form.user.name"
                  :class="classes"
                >
                <span class="text-danger">{{errors[0]}}</span>
              </validation-provider>
            </div>
            <div class="form-group col-md-6">
              <validation-provider rules="required" v-slot="{errors, classes}">
                <label for="usertel">收件人電話*</label>
                <input
                  type="tel"
                  class="form-control"
                  name="收件人電話"
                  id="usertel"
                  placeholder="請輸入電話"
                  v-model="form.user.tel"
                  :class="classes"
                >
                <span class="text-danger">{{errors[0]}}</span>
              </validation-provider>
            </div>
          </div>

          <div class="form-group">
            <validation-provider rules="required|email" v-slot="{errors, classes}">
              <label for="useremail">Email*</label>
              <input
                type="email"
                class="form-control"
                name="Email"
                id="useremail"
                placeholder="請輸入 Email"
                v-model="form.user.email"
                :class="classes"
              >
              <span class="text-danger">{{errors[0]}}</span>
            </validation-provider>
          </div>

          <div class="form-group">
            <validation-provider rules="required" v-slot="{errors, classes}">
              <label for="useraddress">收件人地址*</label>
              <input
                type="text"
                class="form-control"
                name="收件人地址"
                id="useraddress"
                placeholder="請輸入地址"
                v-model="form.user.address"
                :class="classes"
              >
              <span class="text-danger">{{errors[0]}}</span>
            </validation-provider>
          </div>

          <div class="form-group">
            <label for="comment">備註</label>
            <textarea
              name
              id="comment"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <div class="text-right">
            <button class="btn btn-light-red">確認送出訂單</button>
          </div>
        </form>
      </ValidationObserver>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="CreateOrder" tabindex="-1" role="dialog" aria-labelledby="CreateOrderCenterTitle" aria-hidden="true"  data-backdrop="static">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body leave-modal">
            <p>您的訂單尚未成立，確定要離開此頁?</p>
            <div class="text-right">
              <button type="button" class="btn btn-outline-secondary mr-2 confirm" data-dismiss="modal">確定</button>
              <button type="button" class="btn btn-danger cancel" data-dismiss="modal">取消</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  data() {
    return {
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: "",
        isLeave: false,
      },
    };
  },
  created() {
    this.getCart();
  },
  computed: {
    ...mapGetters('cartModules', ['cart']),
  },
  methods: {
    ...mapActions('cartModules', ['getCart']),
    // getCart() {
    //   const api = `${process.env.VUE_APP_API}/api/${
    //     process.env.VUE_APP_CUSTOMPATH
    //   }/cart`;
    //   const vm = this;
    //   vm.isLoading = true;
    //   this.$http.get(api).then(response => {
    //     console.log("cart", response.data);
    //     vm.isLoading = false;
    //     vm.cart = response.data.data;
    //   });
    // },
    creatOrder() {
      // const api = `${process.env.VUE_APP_API}/api/${
      //   process.env.VUE_APP_CUSTOMPATH
      // }/order`;
      const vm = this;
      const order = vm.form;
      this.$refs.form.validate().then(success => {
        if (success) {
          vm.$store.dispatch('orderModules/creatOrder', order);
          this.isLeave = true;
          // vm.isLoading = true;
          // this.$http.post(api, { data: vm.form }).then(response => {
          //   console.log(response.data);
          //   if (response.data.success) {
          //     vm.isLoading = false;
          //     // 成功後跳到指定 付款頁面，並帶上 orderId
          //     vm.$router.push(`/payment/${response.data.orderId}`);
          //     // vm.getCart()
          //   }
          // });
        } else {
          vm.$store.dispatch('alertModules/updateMessage', { message: '欄位填寫不完整', status: 'danger' }, { root: true });
        }
      });
    }
  },
  beforeRouteLeave (to, from, next) {
    const vm = this;
    if(vm.isLeave) {
      next();
    } else {
      $('#CreateOrder').modal('show');

      $('.confirm').on('click', () => {
        next();
      });
      $('.cancel').on('click', () => {
        next(false);
      });
    }
  }
};
</script>

<style lang="scss">
.alert-light {
  background: #f7f7f7;
  border-color: #f2f2f2;
  color: #919191;
}
</style>