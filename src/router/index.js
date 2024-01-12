import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: "/",
      component: () => import("@/views/Menu.vue"),
    }, */
  ],
});

export default router;
