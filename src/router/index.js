import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import Layout from "@/layout/index";
import Home from "@/layout/home.vue";

import homeRouter from "./home"
import mainPage from "./mainpage"
import person from "./person";
import login from "./login";
const routes = [{
    path: "/",
    redirect: "/advertpage"
  },
  {
    path: "/index",
    redirect: "/home",
    component: Layout,
    children: [{
        path: "/home",
        name: "首页",
        redirect: "/recommend",
        component: Home,
        children: homeRouter
      },
      ...mainPage
    ]
  },
  ...person,
  ...login,


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "con"
});

export default router;