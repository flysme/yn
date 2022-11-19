// 1. 定义一些路由
const routes = [
  { path: "/", component: () => import("@/pages/Home/HomePage.vue") },
  { path: "/case", component: () => import("@/pages/Case/CasePage.vue") },
  { path: "/team", component: () => import("@/pages/Team/TeamPage.vue") },
  { path: "/about", component: () => import("@/pages/About/AboutPage.vue") },
  {
    path: "/service_flow",
    component: () => import("@/pages/ServiceFlow/ServiceFlowPage.vue"),
  },
];

export default routes;
