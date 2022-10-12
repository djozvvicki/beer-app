import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./pages/Home.vue"),
    },
    {
      path: "/beers/:id",
      name: "Beers",
      component: () => import("./pages/Beers.vue"),
    },
  ],
});

export default router;
