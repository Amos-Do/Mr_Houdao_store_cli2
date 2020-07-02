import axios from 'axios';

export default {
  namespaced: true,
  strict: true,
  state: {
    cart: {},
    addAnimated: false,
  },
  actions: {
    getCart(context) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then(response => {
        context.commit('LOADING', false, { root: true });
        context.commit('CART', response.data.data);
      });
    },
    removeCartItem(context, id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      context.commit('LOADING', true, { root: true });
      axios.delete(api).then(response => {
        if (response.data.success) {
          context.commit('LOADING', false, { root: true });
          context.dispatch('getCart');
        }
      });
    },
    addtoCart(context, {id, qty}) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const cart = {
        product_id: id,
        qty
      };
      context.commit('LOADING', true, { root: true });
      context.commit('ADDANIMATED', true)
      axios.post(api, { data: cart }).then(response => {
        if (response.data.success) {
          context.dispatch('getCart');
          context.commit('LOADING', false, { root: true });
          context.commit('ADDANIMATED', false)
          context.dispatch('alertModules/updateMessage', { message: response.data.message, status: 'success' }, { root: true });
        } else {
          context.dispatch('alertModules/updateMessage', { message: '加入購物車失敗，請稍後再試', status: 'danger' }, { root: true });
        }
      });
    },
    changeQty(context, { originCartId, originProductId, newQty }) {
      const delApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${originCartId}`;
      const addApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit('LOADING', true, { root: true });
      const cart = {
        product_id: originProductId,
        qty: newQty,
      };
      axios.all([axios.delete(delApi), axios.post(addApi, { data: cart })])
        .then(axios.spread(() => {
          context.dispatch('getCart');
          context.commit('LOADING', false, { root: true });
        }));
    },
    addCouponCode(context, coupon) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      context.commit('LOADING', true, { root: true });
      axios.post(api, {data: coupon}).then(response => {
        if (response.data.success) {
          context.commit('LOADING', false, { root: true });
          context.dispatch('alertModules/updateMessage', { message: response.data.message, status: 'success' }, { root: true });
          context.dispatch('getCart');
        } else {
          context.commit('LOADING', false, { root: true });
          context.dispatch('alertModules/updateMessage', { message: response.data.message, status: 'danger' }, { root: true });
          context.dispatch('getCart');
        }
      });
    }
  },
  mutations: {
    CART(state, payload) {
      state.cart = payload;
    },
    ADDANIMATED(state, payload) {
      state.addAnimated = payload;
    },
  },
  getters: {
    cart: state => state.cart,
    addAnimated: state => state.addAnimated,
  },
}