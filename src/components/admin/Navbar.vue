<template>
  <div>
    <!-- Topbar -->
    <nav class="navbar navbar-expand navbar-light bg-white topbar fixed-top shadow">
      <router-link to="/admin/products_list" class="sidebar-brand d-flex align-items-center justify-content-center">
        <img src="@/assets/images/logo_1@3x.png">
        <img src="@/assets/images/logo_2@3x.png" style="height:32px; margin-left:8px;">
      </router-link>
      <ul class="navbar-nav ml-auto">
        <!-- Nav Item - Alerts -->
        <li class="nav-item dropdown no-arrow mx-1 d-none d-sm-block">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="alertsDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <font-awesome-icon icon="bell" transform="grow-3.5"/>
            <!-- Counter - Alerts -->
            <span class="badge badge-danger badge-counter">3+</span>
          </a>
          <!-- Dropdown - Alerts -->
          <div
            class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="alertsDropdown"
          >
            <h6 class="dropdown-header">Alerts Center</h6>
            <a class="dropdown-item d-flex align-items-center" href="#">
              <div class="mr-3">
                <div class="icon-circle bg-primary">
                  <i class="fas fa-file-alt text-white"></i>
                </div>
              </div>
              <div>
                <div class="small text-gray-500">December 12, 2019</div>
                <span class="font-weight-bold">A new monthly report is ready to download!</span>
              </div>
            </a>
            <a class="dropdown-item d-flex align-items-center" href="#">
              <div class="mr-3">
                <div class="icon-circle bg-success">
                  <i class="fas fa-donate text-white"></i>
                </div>
              </div>
              <div>
                <div class="small text-gray-500">December 7, 2019</div>$290.29 has been deposited into your account!
              </div>
            </a>
            <a class="dropdown-item d-flex align-items-center" href="#">
              <div class="mr-3">
                <div class="icon-circle bg-warning">
                  <i class="fas fa-exclamation-triangle text-white"></i>
                </div>
              </div>
              <div>
                <div class="small text-gray-500">December 2, 2019</div>Spending Alert: We've noticed unusually high spending for your account.
              </div>
            </a>
            <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
          </div>
        </li>

        <div class="topbar-divider d-none d-sm-block"></div>
        <li class="nav-item mx-1">
          <router-link to="/index" class="nav-link">
            <font-awesome-icon icon="home" class="mr-2"/>
            <span class="d-none d-sm-block">進入前台</span>
          </router-link>
        </li>
        <li class="nav-item mx-1">
          <a class="nav-link" href="#" @click.prevent="signout">
            <font-awesome-icon icon="sign-out-alt" class="mr-2"/>
            <span class="d-none d-sm-block">Logout</span>
          </a>
        </li>
        <li class="nav-item mx-1 sidebar-btn">
          <a
            class="nav-link"
            data-toggle="collapse"
            href="#accordionSidebar"
            role="button"
            aria-expanded="false"
            aria-controls="accordionSidebar"
          >
            <font-awesome-icon icon="bars" class="mr-2"/>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    signout() {
      const api = `${process.env.VUE_APP_API}/logout`;
      const vm = this;
      this.$http.post(api).then(response => {
        console.log(response.data);
        this.$router.push("/index");
      });
    }
  }
};
</script>

<style lang="scss" >
.sidebar-brand img {
  &:first-of-type {
    height: 32px;
    @media (min-width: 576px) {
      height: 55px;
    }
  }
}

.sidebar-btn {
  @media (min-width: 576px) {
    display: none;
  }
}
</style>