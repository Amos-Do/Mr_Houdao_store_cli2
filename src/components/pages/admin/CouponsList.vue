<template>
  <div class="mt-4">
    <div class="text-right">
      <button class="btn btn-secondary text-light" @click="openModal(true)">建立新的優惠券</button>
    </div>
    <table class="table mt-4 table-bordered table-hover">
      <thead>
        <th>名稱</th>
        <th width="150" class="text-left">優惠代碼</th>
        <th width="150" class="text-left">折扣百分比</th>
        <th width="150" class="text-left">到期日</th>
        <th width="150" class="text-center">是否啟用</th>
        <th width="130" class="text-center">編輯</th>
      </thead>
      <tbody>                                             
        <tr v-for="(item) in coupons" :key="item.id" class="align-middle">
          <td class="align-middle">{{item.title}}</td>
          <td class="text-left align-middle text-success" :class="{ 'text-black-50': (!item.is_enabled) ? true : false }">
            {{item.code}}
          </td>
          <td class="text-left align-middle">{{item.percent + '%'}}</td>
          <td class="text-left align-middle">{{item.due_date | turnTime}}</td>
          <td class="text-center align-middle">
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td class="text-center">
            <button class="btn btn-outline-secondary btn-sm" @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="delModal(item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pagination="pagination" @changePage="getCoupons"></Pagination>
    <!-- Modal -->
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-secondary text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span v-text="'編輯：'+ editTitle" v-if="editTitle"></span>
              <span v-else>新增優惠券</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input
                type="text"
                class="form-control"
                id="title"
                v-model="tempCoupon.title"
                placeholder="請輸入標題"
              >
            </div>

            <div class="form-group">
              <label for="code">優惠代碼</label>
              <input
                type="text"
                class="form-control"
                id="code"
                v-model="tempCoupon.code"
                placeholder="請輸入優惠代碼"
              >
            </div>

            <div class="form-group">
              <label for="due_date">到期日</label>
              <input
                type="date"
                class="form-control"
                id="due_date"
                v-model="due_date"
                placeholder="請輸入優惠代碼"
              >
            </div>

            <div class="form-group">
              <label for="percent">折扣百分比</label>
              <input
                type="number"
                class="form-control"
                id="percent"
                v-model="tempCoupon.percent"
                value="100"
                min="1"
                max="100"
              >
            </div>

            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="tempCoupon.is_enabled"
                  :true-value="1"
                  :false-value="0"
                  id="is_enabled"
                >
                <label class="form-check-label" for="is_enabled">是否啟用</label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-secondary" @click="updateCoupons">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- delModal -->
    <div
      class="modal fade"
      id="delcouponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempCoupon.title }}</strong> 優惠券(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" :disabled="status.delLoading" data-dismiss="modal">取消</button>
            <button
              type="button"
              class="btn btn-danger"
              :disabled="status.delLoading"
              @click="deletCoupon"
            >
              確認刪除
              <font-awesome-icon icon="spinner" spin v-if="status.delLoading"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";

export default {
  data() {
    return {
      coupons: {},
      tempCoupon: {},
      pagination: {},
      editTitle: "",
      due_date: "",
      isNew: false,
      status: {
        delLoading: false
      }
    };
  },
  components: {
    Pagination
  },
  // 轉換時間格式 轉為 timestamp
  watch: {
    due_date() {
      const vm = this;
      //                     new Date('') 會轉換為毫秒(timestamp)   /1000 轉換為秒
      const timestamp = Math.floor(new Date(vm.due_date) / 1000);
      vm.tempCoupon.due_date = timestamp;
    }
  },
  created() {
    this.getCoupons();
  },
  methods: {
    getCoupons(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/coupons?page=${page}`;
      const vm = this;
      this.$store.commit('LOADING', true, { root: true });
      this.$http.get(api).then(response => {
        console.log(response.data);
        this.$store.commit('LOADING', false, { root: true });
        vm.coupons = response.data.coupons;
        vm.pagination = response.data.pagination;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        const day = new Date();
        const today = {
          year: day.getFullYear(),
          month: day.getMonth()+1,
          date: day.getDate(),
        }
        let month = today.month.toString().length === 1 ? `0${today.month}` : `${today.month}`;
        this.due_date = `${today.year}-${month}-${today.date}`;

        this.tempCoupon = {};
        this.editTitle = "";
        this.isNew = true;
      } else {
        this.tempCoupon = Object.assign({}, item);
        this.editTitle = this.tempCoupon.title;
        this.isNew = false;
        // 把 Timestamp 再轉換為日期字串，呈現到 Modal 畫面上
        //                          將秒 轉為 毫秒 利後續轉換
        const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
          .toISOString() // 取得 ISO 格式的日期字串，日期會變成類似這種格式：2011-10-05T14:48:00.000Z
          .split("T"); // 以字母”T”為中心，將這段字串切成兩半，並取得前半段
        console.log(dateAndTime);
        this.due_date = dateAndTime[0];
      }
      $("#couponModal").modal("show");
    },
    updateCoupons() {
      let api = `${process.env.VUE_APP_API}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/coupon`;
      let httpMethod = "post";
      const vm = this;
      if (!vm.isNew) {
        // 修改 coupon api
        api = `${process.env.VUE_APP_API}/api/${
          process.env.VUE_APP_CUSTOMPATH
        }/admin/coupon/${vm.tempCoupon.id}`;
        httpMethod = "put";
      } else {
        vm.pagination.current_page = 1;
      }
      this.$store.commit('LOADING', true, { root: true });
      this.$http[httpMethod](api, { data: vm.tempCoupon }).then(response => {
        console.log(response.data);
        if (response.data.success) {
          this.$store.commit('LOADING', false, { root: true });
          $("#couponModal").modal("hide");
          vm.$store.dispatch('alertModules/updateMessage', { message: response.data.message, status: 'success' }, { root: true });
          vm.getCoupons(vm.pagination.current_page);
          vm.tempCoupon = {};
          vm.editTitle = "";
        } else {
          this.$store.commit('LOADING', false, { root: true });
          $("#couponModal").modal("hide");
          vm.$store.dispatch('alertModules/updateMessage', { message: response.data.message, status: 'danger' }, { root: true });
          vm.tempCoupon = {};
          vm.editTitle = "";
        }
      });
    },
    delModal(item) {
      this.tempCoupon = item;
      $("#delcouponModal").modal("show");
      console.log(this.tempCoupon.id);
    },
    deletCoupon() {
      const api = `${process.env.VUE_APP_API}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/coupon/${this.tempCoupon.id}`;
      const vm = this;
      vm.status.delLoading = true;
      this.$http.delete(api).then(response => {
        if (response.data.success) {
          console.log(response.data);
          $("#delcouponModal").modal("hide");
          vm.$store.dispatch('alertModules/updateMessage', { message: response.data.message, status: 'success' }, { root: true });
          vm.status.delLoading = false;
          vm.getCoupons(vm.pagination.current_page);
        } else {
          vm.$store.dispatch('alertModules/updateMessage', { message: response.data.message, status: 'danger' }, { root: true });
          vm.status.delLoading = false;
          vm.getCoupons(vm.pagination.current_page);
        }
      });
    }
  }
};
</script>