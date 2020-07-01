import Vue from 'vue';

// $bus 掛載在 vue 的原型下 （ $bus 可以自命名），直接將 Vue 的實體建立在 $bus 原型內，所以可以直接對 $bus 做呼叫
Vue.prototype.$bus = new Vue();
// 完成後 注入到 main.js

// Message
// vm.$bus.$emit('message:push', message, status);
// 自定義名稱 'messsage:push' 
// message: 傳入參數
// status: 樣式，預設值為 warning