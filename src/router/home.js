export default [{
    path: "/recommend",
    name: "推荐",
    component: () => import("../components/home/recommend.vue"),
  },
  {
    path: "/brand",
    name: "品牌",
    component: () => import("../components/home/brand.vue"),
  },
  {
    path: "/discount",
    name: "折扣",
    component: () => import("../components/home/discount.vue"),
  },
  {
    path: "/benefits",
    name: "实惠",
    component: () => import("../components/home/benefits.vue"),
  },
  {
    path: "/sales",
    name: "销量",
    component: () => import("../components/home/sales.vue"),
  },
]