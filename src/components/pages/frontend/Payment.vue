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
            <font-awesome-icon icon="check" class="ml-2" />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="alert alert-success rounded-pill text-center" role="alert">2.確認付款</div>
        </div>
        <div class="col-sm-4">
          <div class="alert alert-light rounded-pill text-center" role="alert">3.訂單完成</div>
        </div>
      </div>
      <div class="my-4 row">
        <table class="table border mx-auto col-10 col-md-8">
          <thead class="bg-gray-100" style="border-top: 5px solid #87A861">
            <tr>
              <th colspan="2">訂單訊息</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th width="200" class="align-middle">收件人姓名</th>
              <td class="align-middle">{{order.user.name}}</td>
            </tr>
            <tr>
              <th width="200" class="align-middle">收件人電話</th>
              <td class="align-middle">{{order.user.tel}}</td>
            </tr>
            <tr>
              <th width="200" class="align-middle">Email</th>
              <td class="align-middle">{{order.user.email}}</td>
            </tr>
            <tr>
              <th width="200" class="align-middle">收件人地址</th>
              <td class="align-middle">{{order.user.address}}</td>
            </tr>
            <tr>
              <th width="200" class="align-middle">備註</th>
              <td class="align-middle">{{order.message}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="my-4 row">
        <table class="table border mx-auto col-10 col-md-8">
          <thead class="bg-gray-100" style="border-top: 5px solid #EB8489">
            <tr>
              <th colspan="2">訂單資料</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th width="200" class="align-middle">訂單成立時間</th>
              <td class="align-middle">{{order.create_at | turnTime}}</td>
            </tr>
            <tr>
              <th width="200" class="align-middle">訂單編號</th>
              <td class="align-middle">{{order.id}}</td>
            </tr>
            <tr>
              <th width="200" class="align-middle">總金額</th>
              <td class="align-middle text-danger">{{order.total | currency}} 元</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="my-4 row justify-content-center">
        <div class="text-right col-10 col-md-8 px-0">
            <button class="btn btn-light-red"
            @click.prevent="payOrder"
            >確認付款</button>
        </div>
      </div>
      
    </div>

    <!-- Modal -->
    <div class="modal fade" id="CreateOrder" tabindex="-1" role="dialog" aria-labelledby="CreateOrderCenterTitle" aria-hidden="true"  data-backdrop="static">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body leave-modal">
            <p>您的訂單尚未付款，確定要離開此頁?</p>
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
      orderId: '',
      isLeave: false,
    }
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
  computed: {
    ...mapGetters('orderModules',['order'])
  },
  methods: {
    getOrder() {
      this.$store.dispatch('orderModules/getOrder', this.orderId);
    },
    payOrder() {
      this.$store.dispatch('orderModules/payOrder', this.orderId);
      this.isLeave = true;
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
}
</script>