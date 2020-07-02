<template>
  <div>
    <div class="container p-3 p-md-4">
      <div class="jam-icon text-center">
        <img src="@/assets/images/jam.png">
      </div>
      <h2 class="jam-title">購物車內容</h2>
      <div class="my-4" v-if="cart.total">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" width="130" class="d-md-table-cell d-none text-center">商品圖片</th>
              <th scope="col">商品名稱</th>
              <th scope="col" width="170" class="d-md-table-cell d-none text-center">數量</th>
              <th width="80" class="text-center">刪除</th>
              <th scope="col" width="130" class="text-right">金額</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id">
              <td class="d-md-block d-none text-center">
                <div class="cart-image d-inline-block" :style="{ 'backgroundImage':`url('${item.product.imageUrl}')` }"></div>
              </td>
              <td class="align-middle cart-product">
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">
                  已套用優惠券<br>
                  <small>{{ item.coupon.title }}</small>
                  </div>
                <div class="d-md-none mt-3">
                  <div class="input-group">
                    <button class="btn btn-sm btn-outline-primary mr-1 px-1 rounded"
                    @click.prevent="changeQty(item.id, item.product.id, item.qty, false)"
                    :disabled="item.qty === 1 ? true : false"
                    >－</button>
                    <input
                      type="number"
                      disabled
                      class="form-control form-control-sm border-primary rounded text-center"
                      v-model="item.qty"
                    >
                    <button class="btn btn-sm btn-outline-primary ml-1 px-1 rounded"
                    @click.prevent="changeQty(item.id, item.product.id, item.qty, true)"
                    >＋</button>
                  </div>
                </div>
              </td>
              <td class="align-middle text-nowrap d-md-table-cell d-none">
                <div class="input-group">
                  <button class="btn btn-sm btn-outline-primary mr-2 rounded"
                  @click.prevent="changeQty(item.id, item.product.id, item.qty, false)"
                  :disabled="item.qty === 1 ? true : false"
                  >－</button>
                  <input
                    type="number"
                    disabled
                    class="form-control form-control-sm border-primary rounded text-center"
                    v-model="item.qty"
                  >
                  <button class="btn btn-sm btn-outline-primary ml-2 rounded"
                  @click.prevent="changeQty(item.id, item.product.id, item.qty, true)"
                  >＋</button>
                </div>
              </td>
              <td scope="row" class="align-middle text-center">
                <button class="btn btn-sm btn-outline-danger"
                @click="removeCartItem(item.id)"
                >
                  <font-awesome-icon icon="trash-alt"/>
                </button>
              </td>
              <td class="align-middle text-right">{{ item.total | currency }}元</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="d-md-none">
              <td colspan="5">
                <div class="input-group input-group-sm mr-auto w-100">
                  <input type="text" class="form-control" placeholder="請輸入 houdao 或 code 看看" v-model="couponCode">
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button"
                    @click="addCouponCode"
                    >套用優惠碼</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="4" class="d-md-table-cell d-none">
                <div class="input-group input-group-sm mr-auto w-50">
                  <input type="text" class="form-control" placeholder="請輸入 houdao 或 code 看看" v-model="couponCode">
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button"
                    @click="addCouponCode"
                    >套用優惠碼</button>
                  </div>
                </div>
              </td>
              <td colspan="5" class="text-right">
                小計:
                <span class="mr-1">{{ cart.total | currency }}元</span>
              </td>
            </tr>
            <tr>
              <td colspan="5" class="text-right text-success" style="border:none" 
                v-if="(cart.total - cart.final_total) > 0"
                >
                折扣金額:
                <span class="ml-4 mr-1">{{ cart.total - cart.final_total | currency }}元</span>
              </td>
            </tr>
            <tr>
              <td colspan="5" class="text-right text-danger font-weight-bold">
                總計:
                <span class="h2">{{ cart.final_total | currency }}元</span>
              </td>
            </tr>
          </tfoot>
        </table>
        <div class="text-right">
          <router-link to="/customer_order" class="py-2 btn btn-light-red m-md-0 mr-2">
            確認訂單，前往下一步
            <font-awesome-icon icon="angle-right" class="angle-right mr-1"/>
          </router-link>
        </div>
      </div>
      <div class="my-4 text-center" v-else>
        <p style="padding:80px 0">您還未加入商品至購物車，快來去逛逛吧!</p>
        <router-link to="/products" class="btn btn-light-red py-2">
          前往購物商場
          <font-awesome-icon icon="angle-right" class="angle-right mr-1"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  data () {
    return {
      couponCode: '',
    }
  },
  created() {
    this.getCart();
  },
  computed: {
    ...mapGetters('cartModules', ['cart']),
  },
  methods: {
    ...mapActions('cartModules', ['getCart']),
    addtoCart (id, qty = 1) {
      this.$store.dispatch('cartModules/addtoCart', {id, qty});
    },
    removeCartItem(id) {
      this.$store.dispatch('cartModules/removeCartItem', id);
    },
    changeQty(originCartId, originProductId, qty, qtyStatus) {
      let newQty;
      if (qtyStatus === true) {
        newQty = qty + 1;
      } else if (qty === 1) {
        newQty = 1;
      } else {
        newQty = qty - 1;
      }
      this.$store.dispatch('cartModules/changeQty', {originCartId, originProductId, newQty});
    },
    addCouponCode() {
      const coupon = {
        code: this.couponCode,
      }
      this.$store.dispatch('cartModules/addCouponCode', coupon);
    }
  },
};
</script>

<style lang="scss">
</style>