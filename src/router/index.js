import employeer from "@/pages/e-employeer.vue";
import index from "@/pages/e-index.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/search",
    name: "index",
    component: index,
  },
  {
    path: "/",
    name: "employeer",
    component: employeer,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
