<template>
  <div class="mt-4">
    <table class="table mt-4 table-bordered table-hover">
      <thead>
        <th width="150" class="text-left">購買時間</th>
        <th width="150" class="text-left">Email</th>
        <th class="text-left">購買款項</th>
        <th width="130" class="text-right">應付金額</th>
        <th width="130" class="text-center">是否付款</th>
      </thead>
      <tbody>
        <tr v-for="(item) in orders" :key="item.id" class="align-middle">
          <td class="align-middle">{{item.create_at | turnTime}}</td>
          <td class="text-left align-middle">{{item.user.email}}</td>
          <td class="text-left align-middle">
            <ul class="list-unstyled" >
              <li v-for="productItem in item.products" :key="productItem.id">
                {{ productItem.product.title }}：{{ productItem.qty }} {{ productItem.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right align-middle">{{item.total | currency}}</td>
          <td class="text-left align-middle text-success" v-if="item.is_paid">已付款</td>
          <td class="text-left align-middle text-muted" v-else>尚未付款</td>
        </tr>
      </tbody>
    </table>
    <Pagination :pagination="pagination" @changePage="getOrders"></Pagination>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";

export default {
  data() {
    return {
      orders: {},
      pagination: {},
    };
  },
  components: {
    Pagination
  },
  created() {
    this.getOrders();
  },
  methods: {
    getOrders(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/orders?page=${page}`;
      const vm = this;
      this.$store.commit('LOADING', true, { root: true });
      this.$http.get(api).then(response => {
        console.log(response.data);
        this.$store.commit('LOADING', false, { root: true });
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
      });
    }
  }
};
</script>