import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/map",
    name: "map",
    component: () => import(/* webpackChunkName: "map" */ "../views/Map.vue")
  },
  {
    path: "/report",
    name: "",
    component: () =>
      import(/* webpackChunkName: "report" */ "../views/Report.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
