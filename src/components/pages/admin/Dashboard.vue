<template>
  <div>
    <loading :active.sync="isLoading">
      <template slot="default">
        <img src="@/assets/images/loading.png">
      </template>
    </loading>
    <Navbar/>
    <Alert/>
    <div class="container-fluid" style="margin-top:70px;">
      <div class="row">
        <Sidebar/>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 col-sm-10 px-md-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import Alert from "@/components/AlertMessage";

import {mapGetters} from 'vuex';

export default {
  components: {
    Navbar,
    Sidebar,
    Alert
  },
  computed: {
    ...mapGetters(['isLoading'])
  },
};
</script>
