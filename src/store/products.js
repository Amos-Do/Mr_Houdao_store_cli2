import axios from 'axios';

export default {
  // state 屬於模組區域變數
  // actions, mutations, getters 屬於全域變數
  
  namespaced: true, // 希望能夠分開管理，因此把模組內的 actions, mutations, getters 都變成區域變數，避免命名衝突
  strict: true,
  state: {
    products: [],
    product: [],
    category: 'all',
  },
  // 操作行為
  actions: {
    getProducts (context) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then(response => {
        context.commit('LOADING', false, { root: true });
        context.commit('PRODUCTS', response.data.products);
      });
    },
    getProduct(context, id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then(response => {
        // vm.product = response.data.product;
        context.commit('LOADING', false, { root: true });
        context.commit('PRODUCT', response.data.product);
      });
    }
  },
  // 實際操作資料狀態
  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload.filter(item => {
        return item.is_enabled === 1
      })
    },
    SELECTCATEGORY(state, payload) {
      if (payload === '最新商品') {
        state.category = payload;
      } else if (payload === '誠心推薦') {
        state.category = payload;
      } else {
        state.category = payload;
      }
    },
    PRODUCT(state, payload) {
      state.product = payload;
    }
  },
  getters: {
    products: state => state.products,
    category: state => state.category,
    categoryProducts (state) {
      const sortProducts = [];
      if (state.category === '最新商品') {
        state.products.forEach(item => {
          if (item.category === state.category) {
            sortProducts.push(item);
          }
        });
        return sortProducts;
      } else if (state.category === '誠心推薦') {
        state.products.forEach(item => {
          if (item.category === state.category) {
            sortProducts.push(item);
          }
        });
        return sortProducts;
      } else {
        return state.products;
      }
    },
    product: state => state.product,
  }
}