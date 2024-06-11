import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Tambah from "@/views/Tambah.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/tambah",
    name: "tambah",
    component: Tambah,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
