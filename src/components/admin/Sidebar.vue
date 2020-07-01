<template>
  <div>
    <ul
      class="navbar-nav bg-gradient-secondary sidebar sidebar-dark col-md-3 col-lg-2 col-sm-2 navbar-collapse collapse d-sm-block overflow-auto"
      id="accordionSidebar"
    >
      <div class="sidebar-heading mt-4">管理員</div>

      <li class="nav-item">
        <router-link class="nav-link collapsed" :to="{ name: 'ProductsList'}">
          <font-awesome-icon icon="box-open"/>
          <!-- <font-awesome-icon icon="shopping-cart" class="close-menu" transform="shrink-5 down-1.6 right-1.25" mask="circle" size="1x"/>
            <font-awesome-icon
              :icon="[ 'fab', 'facebook-f' ]"
              transform="shrink-3.5 down-1.6 right-1.25"
              mask="circle"
              rotation="90"
            />
          <font-awesome-icon :icon="['fab', 'instagram']"/>-->
          <!-- <i class="fas fa-fw fa-cog"></i> -->
          <span>產品列表</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link collapsed" :to="{ name: 'OrderList'}">
          <font-awesome-icon icon="list"/>
          <span>訂單列表</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link collapsed" :to="{ name: 'CouponsList'}">
          <font-awesome-icon icon="ticket-alt" :transform="{ rotate: 42 }"/>
          <span>優惠券</span>
        </router-link>
      </li>
      <hr class="sidebar-divider">

      <div class="sidebar-heading">數據統計</div>

      <li class="nav-item">
        <router-link to="/admin/report" class="nav-link" >
          <font-awesome-icon icon="chart-bar"/>
          <span>Charts</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.collapsing {
  &.navbar-collapse {
    position: absolute;
    left: -100%;
    transition: all 0.2s ease;
    display: block;
    opacity: 0.8;
    &.collapsing {
      height: auto !important;
      left: -100%;
      margin-left: 1px;
      transition: all 0.1s ease;
      opacity: 0.9;
    }
    &.show {
      margin-left: 100%;
      transition: all 0.1s ease;
      opacity: 1;
    }
  }
}
.nav-item a.active {
  background: rgb(75, 97, 50);
}
</style>