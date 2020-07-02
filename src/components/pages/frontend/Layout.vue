<template>
  <div>
    <loading :active.sync="isLoading">
      <template slot="default">
        <img src="@/assets/images/loading.png">
      </template>
    </loading>
    <Nav/>
    <Alert/>
    <router-view></router-view>
    <GoTop/>
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/frontend/Nav';
import Footer from '@/components/frontend/Footer';
import Alert from "@/components/AlertMessage";
import GoTop from "@/components/frontend/GoTop";

import {mapGetters} from 'vuex';

export default {
  data () {
    return {

    }
  },
  components: {
    Nav,
    Footer,
    Alert,
    GoTop,
  },
  computed: {
    ...mapGetters(['isLoading'])
  },
}
</script>