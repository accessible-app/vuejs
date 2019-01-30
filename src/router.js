import Vue from "vue";
import Router from "vue-router";
import ProductListing from "./views/ProductListing.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: ProductListing,
      meta: { title: "Accessibooks - Products" }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      meta: { title: "Accessibooks - About us" }
    },
    {
      path: "/settings",
      name: "settings",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
          import(/* webpackChunkName: "about" */ "./views/Settings.vue"),
      meta: { title: "Accessibooks - My Settings" }
    },
    {
      path: "/orders",
      name: "orders",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
          import(/* webpackChunkName: "about" */ "./views/Orders.vue"),
      meta: { title: "Accessibooks - My past orders" }
    }
  ]
});
