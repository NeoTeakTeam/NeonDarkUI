import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./HomeView.vue";
import GalleryView from "./GalleryView.vue";

const routes = [
    { path: "/", component: HomeView },
    { path: "/gallery", component: GalleryView }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
