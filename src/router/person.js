export default [{
    path: "/points",
    name: "积分",
    component: () => import("../components/person/points.vue")
  },
  {
    path: "/address",
    name: "地址",
    component: () => import("../components/person/address.vue"),

  },
  {
    path: "/order",
    name: "确认订单",
    component: () => import("../components/person/order.vue"),

  },
  {
    path: "/orders",
    name: "订单",
    component: () => import("../components/person/orders.vue"),

  },
  {
    path: "/legal",
    name: "积分规则",
    component: () => import("../components/details/legal.vue")
  },
  {
    path: "/search",
    name: "搜索",
    component: () => import("../components/myPublic/search.vue")
  },
  {
    path: "/details",
    name: "详情",
    component: () => import("../components/details/details.vue")
  },
]