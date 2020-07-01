<template>
  <div class="message-alert">
    <div
      class="alert alert-dismissible"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages"
      :key="i"
    >
      {{ item.message }}
      <button
        type="button"
        class="close"
        @click="REMOVEMESSAGE(i)"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "Navbar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters('alertModules', ['messages']),
  },
  methods: {
    ...mapMutations('alertModules', ['REMOVEMESSAGE']),
    // updateMessage(message, status) {
    //   const timestamp = Math.floor(new Date() / 1000);
    //   this.messages.push({
    //     message,     // 訊息內容
    //     status,      // 樣式
    //     timestamp    // 用時間來當作 id
    //   });
    //   this.removeMessageWithTiming(timestamp);
    // },
    // removeMessage(num) {
    //   this.messages.splice(num, 1);
    // },
    // // 更新觸發，每當五秒時，就移除訊息
    // removeMessageWithTiming(timestamp) {
    //   const vm = this;
    //   setTimeout(() => {
    //     vm.messages.forEach((item, i) => {
    //       if (item.timestamp === timestamp) {
    //         vm.messages.splice(i, 1);
    //       }
    //     });
    //   }, 5000);
    // }
  },
  // created() {
  //   const vm = this;
  //   // 自定義名稱 'messsage:push' 
  //   // message: 傳入參數
  //   // status: 樣式，預設值為 warning
  //   // 外層使用 $on 註冊 : 监听当前实例上的自定义事件。事件可以由 vm.$emit 触发。回调函数会接收所有传入事件触发函数的额外参数。
  //   // 直接呼叫 vue 實體下的 $bus 
  //   // 指在 $bus 上透過 Vue 的 $on 掛載監聽事件，監聽事件也就是 'message:push' 名稱是可以自定義的
  //   vm.$bus.$on('message:push', (message, status = 'warning') => {
  //     vm.updateMessage(message, status);
  //   });
  //   // 內層使用 $emit 觸發
  //   // vm.$bus.$emit('message:push', message, status);
  // }
};
</script>

<style scope>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 56px;
  right: 20px;
  z-index: 999999;
}
</style>