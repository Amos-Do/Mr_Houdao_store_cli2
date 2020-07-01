<template>
  <div>
    <div class="d-flex justify-content-between my-4">
      <h1 class="h3 text-gray-800">產品列表</h1>
      <div class="text-right">
        <button class="btn btn-secondary text-light" @click="openModal(true)">建立新產品</button>
      </div>
    </div>

    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">產品總覽</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th width="120" class="text-center">分類</th>
                <th>名稱</th>
                <th width="100" class="text-right">原價</th>
                <th width="100" class="text-right">售價</th>
                <th width="100" class="text-center">是否啟用</th>
                <th width="130" class="text-center">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in products" :key="item.id" class="align-middle">
                <td class="text-center align-middle">{{item.category}}</td>
                <td class="align-middle">{{item.title}}</td>
                <td class="text-right align-middle">{{item.origin_price | currency}}</td>
                <td class="text-right align-middle">{{item.price | currency}}</td>
                <td class="text-center align-middle">
                  <span v-if="item.is_enabled" class="text-success">啟用</span>
                  <span v-else>未啟用</span>
                </td>
                <td class="text-center">
                  <button class="btn btn-outline-secondary btn-sm" @click="openModal(false,item)">編輯</button>
                  <button class="btn btn-outline-danger btn-sm" @click="delModal(item)">刪除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Pagination :pagination="pagination" @changePage="getProducts"></Pagination>
    <!-- Modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-secondary text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span v-text="'編輯：'+ editTitle" v-if="editTitle"></span>
              <span v-else>新增產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    v-model="tempProduct.imageUrl"
                    placeholder="請輸入圖片連結"
                  >
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                    <font-awesome-icon icon="spinner" spin v-if="status.fileUpLoading"/>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="uploadFile"
                  >
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl" alt>
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="tempProduct.title"
                    placeholder="請輸入標題"
                  >
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      v-model="tempProduct.category"
                      placeholder="請輸入分類"
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      v-model="tempProduct.unit"
                      placeholder="請輸入單位"
                    >
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      v-model="tempProduct.origin_price"
                      placeholder="請輸入原價"
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      v-model="tempProduct.price"
                      placeholder="請輸入售價"
                    >
                  </div>
                </div>
                <hr>

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    v-model="tempProduct.description"
                    placeholder="請輸入產品描述"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    v-model="tempProduct.content"
                    placeholder="請輸入產品說明內容"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                    >
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-secondary text-light" @click="updateProduct">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- delModal -->
    <div
      class="modal fade"
      id="delProductModal"
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
            <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" :disabled="status.delLoading" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" :disabled="status.delLoading" @click="deletProduct">
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
import Pagination from '@/components/Pagination';

export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      pagination: {},
      editTitle: "",
      isNew: false,
      status: {
        fileUpLoading: false,
        delLoading: false
      }
    };
  },
  components: {
    Pagination,
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/products?page=${page}`;
      const vm = this;
      // vm.isLoading = true;
      this.$store.commit('LOADING', true, { root: true });
      this.$http.get(api).then(response => {
        console.log(response.data);
        // vm.isLoading = false;
        this.$store.commit('LOADING', false, { root: true });
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.editTitle = "";
        this.isNew = true;
      } else {
        // 避免物件傳參考特性，用 es6 assign 的方法可以進行深拷貝（把 item 寫到空的物件裡）
        this.tempProduct = Object.assign({}, item);
        this.editTitle = this.tempProduct.title;
        this.isNew = false;
      }
      $("#productModal").modal("show");
      $("#customFile").val("");
    },
    updateProduct() {
      let api = `${process.env.VUE_APP_API}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/product`;
      let httpMethod = "post";
      const vm = this;
      // 如果不是新增的，就替換 api 和 httpMethod
      if (!vm.isNew) {
        // 修改產品 api
        api = `${process.env.VUE_APP_API}/api/${
          process.env.VUE_APP_CUSTOMPATH
        }/admin/product/${vm.tempProduct.id}`;
        httpMethod = "put";
      } else {
        // 新增產品時，頁面回歸 第一頁
        vm.pagination.current_page = 1;
      }
      this.$store.commit('LOADING', true, { root: true });
      // 注意傳過去的資料是否正確
      this.$http[httpMethod](api, { data: vm.tempProduct }).then(response => {
        console.log(response.data);
        if (response.data.success) {
          this.$store.commit('LOADING', false, { root: true });
          $("#productModal").modal("hide");
          // this.$bus.$emit("message:push", response.data.message, "success");
          vm.$store.dispatch('alertModules/updateMessage', { message: response.data.message, status: 'success' }, { root: true });
          // 新增或更新產品，回到原本頁數
          vm.getProducts(vm.pagination.current_page);
          vm.tempProduct = {};
          vm.editTitle = "";
        } else {
          this.$store.commit('LOADING', false, { root: true });
          $("#productModal").modal("hide");
          vm.getProducts(vm.pagination.current_page);
          console.log("新增失敗");
          // 內層使用 $emit 來觸發外層的 alert
          // this.$bus.$emit("message:push", response.data.message, "danger");
          vm.$store.dispatch('alertModules/updateMessage', { message: response.data.message, status: 'danger' }, { root: true });
          vm.tempProduct = {};
          vm.editTitle = "";
        }
      });
    },
    delModal(item) {
      this.tempProduct = item;
      $("#delProductModal").modal("show");
      console.log(this.tempProduct.id);
    },
    deletProduct() {
      const api = `${process.env.VUE_APP_API}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/product/${this.tempProduct.id}`;
      const vm = this;
      vm.status.delLoading = true;
      this.$http.delete(api).then(response => {
        if (response.data.success) {
          console.log(response.data);
          $("#delProductModal").modal("hide");
          // this.$bus.$emit("message:push", response.data.message, "success");
          vm.$store.dispatch('alertModules/updateMessage', { message: response.data.message, status: 'success' }, { root: true });
          vm.status.delLoading = false;
          vm.getProducts(vm.pagination.current_page);
        } else {
          // this.$bus.$emit("message:push", response.data.message, "danger");
          vm.$store.dispatch('alertModules/updateMessage', { message: response.data.message, status: 'danger' }, { root: true });
          vm.status.delLoading = false;
          vm.getProducts(vm.pagination.current_page);
        }
      });
    },
    uploadFile() {
      this.status.fileUpLoading = false;
      console.log(this);
      // 取出檔案
      const uploadFiled = this.$refs.files.files[0];
      const vm = this;
      // 模擬傳統表單送出的行為 formData
      const formData = new FormData();
      // 新增欄位，加入檔案
      formData.append("file-to-upload", uploadFiled);
      const url = `${process.env.VUE_APP_API}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/upload`;
      vm.status.fileUpLoading = true;
      // 送出            傳送 formData 本身, 改成 formData 格式(物件)
      this.$http
        .post(url, formData, {
          header: {
            "content-type": "multipart/form-data"
          }
        })
        .then(response => {
          console.log(response.data);
          if (response.data.success) {
            // vm.tempProduct.imageUrl = response.data.imageUrl;
            // vue 中，建立實體後才加入的屬性因為沒有被給予 getter 及 setter ，所以不會被響應系統察覺
            // console.log(vm.tempProduct)
            // 使用 set 方法加入的屬性則會被賦予 getter 及 setter
            vm.$set(vm.tempProduct, "imageUrl", response.data.imageUrl);
            vm.status.fileUpLoading = false;
          } else {
            vm.status.fileUpLoading = false;
            // 內層使用 $emit 來觸發外層的 alert
            // this.$bus.$emit("message:push", response.data.message, "danger");
            vm.$store.dispatch('alertModules/updateMessage', { message: response.data.message, status: 'danger' }, { root: true });
            $("#customFile").val("");
          }
        });
    }
  }
};
</script>