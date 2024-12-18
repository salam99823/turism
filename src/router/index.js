import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/attractions",
      name: "attractions",
      component: () => import("../views/Attractions.vue"),
    },
    {
      path: "/hotels",
      name: "hotels",
      component: () => import("../views/Hotels.vue"),
    },
    {
      path: "/cultural-centers",
      name: "cultural-centers",
      component: () => import("../views/CulturalCenters.vue"),
    },
    {
      path: "/cafe",
      name: "cafe",
      component: () => import("../views/Cafe.vue"),
    },
    {
      path: "/tours",
      name: "tours",
      component: () => import("../views/Tours.vue"),
    },
  ],
});

export default router;
