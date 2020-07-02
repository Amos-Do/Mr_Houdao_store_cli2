import axios from 'axios';
import router from '../router';

export default {
  namespaced: true,
  strict: true,
  state: {
    order: {
      user:{}
    },
  },
  // 操作行為
  actions: {
    creatOrder(context, order) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      context.commit('LOADING', true, { root: true });
      axios.post(api, { data: order }).then(response => {
        if (response.data.success) {
          context.commit('LOADING', false, { root: true });
          // 成功後跳到指定 付款頁面，並帶上 orderId
          // router.push(`/payment/${response.data.orderId}`);
          router.replace(`/payment/${response.data.orderId}`);
        } else {
          context.commit('LOADING', false, { root: true });
          context.dispatch('alertModules/updateMessage', { message: '出現錯誤，請重新再試', status: 'danger' }, { root: true });
        }
      });
    },
    getOrder(context, orderId) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${orderId}`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then(response => {
        context.commit('LOADING', false, { root: true });
        context.commit('GETORDER', response.data.order);
        // vm.order = response.data.order
        
      })
    },
    payOrder(context, orderId) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${orderId}`;
      context.commit('LOADING', true, { root: true });
      axios.post(api).then(response => {
        if(response.data.success) {
          context.commit('LOADING', false, { root: true });
          router.replace(`/pay_complate/${orderId}`);
          // router.push(`/pay_complate/${orderId}`);
        } else {
          context.dispatch('alertModules/updateMessage', { message: '付款失敗，請稍後再結帳', status: 'danger' }, { root: true });
        }
      })
    },
  },
  // 實際操作資料狀態
  mutations: {
    GETORDER(state, payload) {
      state.order = payload;
    }
  },
  getters: {
    order: state => state.order,
  },
}