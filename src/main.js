import Vue from 'vue';
import App from './App';
import router from './router';

// vuex
// import Vuex from 'vuex';

// axios
import axios from 'axios';
import VueAxios from 'vue-axios';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText  } from '@fortawesome/vue-fontawesome';

// vue-loading-overlay
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

// VeeValidate
import { ValidationProvider, ValidationObserver} from 'vee-validate';
import { extend } from 'vee-validate';
import { email, required } from 'vee-validate/dist/rules';
import { configure } from 'vee-validate';

import 'bootstrap';

import store from './store'; // 載入匯出的 Vuex store 


// 自定義
import './bus';
import currencyFilter from '@/filters/currency';
import turnTimestamp from '@/filters/turnTimestamp';
import $ from 'jquery';


Vue.use(VueAxios, axios);
// Vue.use(Vuex);
Vue.config.productionTip = false;
window.$ = $;

// bootstrap
library.add(fab, far, fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('turnTime', turnTimestamp);

axios.defaults.withCredentials = true;

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
extend('email', email);
extend('required', { 
  ...required,
  message: '這個{_field_}欄位必須填寫'
})
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 導覽守衛
router.beforeEach((to, from, next) => {
  console.log('to', to, 'from', from, 'next', next)
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    const vm = this;
    axios.post(api).then(response => {
      console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({ path:'/login'})
      }
    });
  } else {
    next();
  }
})