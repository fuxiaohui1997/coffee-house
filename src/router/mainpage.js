export default [{
    path: "/category",
    name: "分类",
    component: () => import("../views/main/category.vue"),

  },
  {
    path: "/cart",
    name: "购物车",
    component: () => import("../views/main/cart.vue"),
  },
  {
    path: "/person",
    name: "个人中心",
    component: () => import("../views/main/person.vue"),
  },
  {
    path: "/message",
    name: "消息",
    component: () => import("../views/main/message.vue"),
  }
]