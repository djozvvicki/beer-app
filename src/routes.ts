import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./pages/Home.vue"),
      meta: {
        transition: "bottom-slide",
      },
    },
    {
      path: "/beers/:id",
      name: "Beers",
      component: () => import("./pages/Beers.vue"),
      meta: {
        transition: "top-slide",
      },
    },
  ],
});

export default router;
