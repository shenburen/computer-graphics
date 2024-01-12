import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:module",
      component: () => import("@/views/Container.vue"),
    },
    /* {
      path: "/triangle/webgl",
      component: () => import("@/views/webgl/Triangle.vue"),
    },
    {
      path: "/triangle/webgpu",
      component: () => import("@/views/webgpu/Triangle.vue"),
    }, */
  ],
});

export default router;
