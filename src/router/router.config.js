import Vr from '@/pages/VrPreview/Vr.vue'
// 1. 定义一些路由
const routes = [
  {
    path: '/',
    component: () => import('@/pages/Home/HomePage.vue'),
    meta: { title: '首页' },
  },
  {
    path: '/case',
    component: () => import('@/pages/Case/CasePage.vue'),
    meta: { title: '首页' },
  },
  {
    path: '/case_detail/:id',
    component: () => import('@/pages/CaseDetail/index.vue'),
    meta: { title: '案例详情' },
  },
  {
    path: '/service_flow',
    component: () => import('@/pages/ServiceFlow/ServiceFlowPage.vue'),
    meta: { title: '服务流程' },
  },
  {
    path: '/team',
    component: () => import('@/pages/Team/TeamPage.vue'),
    meta: { title: '团队介绍' },
  },
  {
    path: '/vr/:id',
    component: Vr,
    meta: { title: '全景预览' },
  },
  {
    path: '/about',
    component: () => import('@/pages/About/AboutPage.vue'),
    meta: { title: '关于我们' },
  },
  {
    path: '/service_flow',
    component: () => import('@/pages/ServiceFlow/ServiceFlowPage.vue'),
    meta: { title: '服务流程' },
  },
]

export default routes
