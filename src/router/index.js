import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/admin/Login'
import Dashboard from '@/components/pages/admin/Dashboard'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.name === "Index") {
      return {
        x: 0,
        y: 0
      }
    } else {
      return { x: 0, y: 700 }
    }
  },
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    {
      path: '/',
      redirect: '/index',
      component: () => import('@/components/pages/frontend/Layout'),
      children: [
        {
          path: 'index',
          name: 'Index',
          component: () => import('@/components/pages/frontend/Index'),
        },
        {
          path: 'products',
          name: 'Products',
          component: () => import('@/components/pages/frontend/Products'),
        },
        {
          path: 'product_detail/:id',
          name: 'ProductDetail',
          component: () => import('@/components/pages/frontend/ProductDetail'),
        },
        {
          path: 'cart',
          name: 'Cart',
          component: () => import('@/components/pages/frontend/Cart'),
        },
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: () => import('@/components/pages/frontend/CustomerOrder'),
        },
        {
          path: 'payment/:orderId',
          name: 'Payment',
          component: () => import('@/components/pages/frontend/Payment'),
        },
        {
          path: 'pay_complate/:orderId',
          name: 'PayComplate',
          component: () => import('@/components/pages/frontend/PayComplate'),
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '/admin/products_list',
          name: 'ProductsList',
          component: () => import('@/components/pages/admin/ProductsList.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/admin/coupons_list',
          name: 'CouponsList',
          component: () => import('@/components/pages/admin/CouponsList.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/admin/order_list',
          name: 'OrderList',
          component: () => import('@/components/pages/admin/OrderList.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/admin/report',
          name: 'Report',
          component: () => import('@/components/pages/admin/Report.vue'),
          meta: { requiresAuth: true },
        }
      ]
    }
  ]
})
