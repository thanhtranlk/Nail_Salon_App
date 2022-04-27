import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "login",
    //component: LoginView,
    component: () => import('../views/LoginView.vue')
  },
  {
    path: "/about",
    name: "about",
   // props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: '/booking',
    name: 'booking',
    
    component: () => import('../views/BookView.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServiceView.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
