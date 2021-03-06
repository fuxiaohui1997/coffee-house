export default [{
    path: "/guidepage",
    name: "引导页",
    component: () => import("../views/login/guidepage.vue"),

  },
  {
    path: "/advertpage",
    name: "广告页",
    component: () => import("../views/login/advertpage.vue"),
    // 独享路由守卫
    beforeEnter: (to, from, next) => {
      // 1.通过存储过程，判断存储中是否存在数据
      if (localStorage.advertpage) {
        // 2.有参数值，进入过引导页，直接跳转广告页
        // localStorage.advertpage = "";
        next();
      } else {
        // 3.没有参数值，进入引导页
        localStorage.advertpage = true;
        next("/guidepage");
      }
    }
  },
  {
    path: "/login",
    name: "登录",
    component: () => import("../views/login/login.vue")
  },
  {
    path: "/regist",
    name: "注册",
    component: () => import("../views/login/regist.vue")
  }
]