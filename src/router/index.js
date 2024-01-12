import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/triangle/webgl",
      component: () => import("@/views/webgl/Triangle.vue"),
    },
    {
      path: "/triangle/webgpu",
      component: () => import("@/views/webgpu/Triangle.vue"),
    },
  ],
});

export default router;
