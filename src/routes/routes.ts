import LandingPage from "../pages/Landing/landing-page.vue";
import { createRouter, createWebHistory } from "vue-router";
import { useSeoMeta } from "@unhead/vue";
import { categoryRoute, componentRoute } from "./route-utils";

const routes = [
  {
    path: "/",
    name: "Home",
    component: LandingPage,
    beforeEnter: () => {
      useSeoMeta({
        title: "BattleStation | Ultimate Gaming & Work Setup",
        description:
          "Get to know my work and gaming station. Ryzen 7 5800X, RTX 3060Ti, MacBook Pro M3, and more.",
        ogTitle: "BattleStation | Ultimate Gaming & Work Setup",
        ogDescription:
          "Get to know my work and gaming station. Ryzen 7 5800X, RTX 3060Ti, MacBook Pro M3, and more.",
        ogImage: "/products/setup/main-setup.jpg",
      });
    },
  },
  {
    path: "/setup",
    name: "Setup",
    component: () => import("../pages/Setup/setup-page.vue"),
    beforeEnter: () => {
      useSeoMeta({
        title: "Setup Overview | My Workstation",
        description:
          "Complete overview of my work and gaming station with detailed photos.",
        ogTitle: "Setup Overview | My Workstation",
        ogDescription:
          "Complete overview of my work and gaming station with detailed photos.",
        ogImage: "/products/setup/main-setup.jpg",
      });
    },
  },
  {
    path: "/components",
    name: "Components",
    component: () => import("../pages/Components/components-page.vue"),
    beforeEnter: () => {
      useSeoMeta({
        title: "Components | All Components",
        description:
          "Detailed overview of all my battlestation components - PC, laptop, peripherals, audio.",
        ogTitle: "Components | All Components",
        ogDescription:
          "Detailed overview of all my battlestation components - PC, laptop, peripherals, audio.",
        ogImage: "/products/components/components-grid.webp",
      });
    },
  },
  {
    path: "/specs",
    name: "Specs",
    component: () => import("../pages/Specs/specs-page.vue"),
    beforeEnter: () => {
      useSeoMeta({
        title: "Specs | Full Specifications",
        description:
          "Complete technical specifications of all components in my setup.",
        ogTitle: "Specs | Full Specifications",
        ogDescription:
          "Complete technical specifications of all components in my setup.",
        ogImage: "/products/specs/specs-overview.webp",
      });
    },
  },

  categoryRoute("pc"),
  categoryRoute("laptop"),
  categoryRoute("monitors"),
  categoryRoute("peripherals"),
  categoryRoute("audio"),
  categoryRoute("workspace"),

  componentRoute("pc"),
  componentRoute("laptop"),
  componentRoute("monitors"),
  componentRoute("peripherals"),
  componentRoute("audio"),
  componentRoute("workspace"),

  {
    path: "/404",
    component: () => import("../pages/404/404-page.vue"),
    beforeEnter: () => {
      useSeoMeta({
        title: "404 | Page not found",
        description: "Page not found.",
        ogTitle: "404 | Page not found",
        ogDescription: "Page not found.",
        ogImage: "/products/404.webp",
      });
    },
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("../pages/404/404-page.vue"),
    beforeEnter: () => {
      useSeoMeta({
        title: "404 | Page not found",
        description: "Page not found.",
        ogTitle: "404 | Page not found",
        ogDescription: "Page not found.",
        ogImage: "/products/404.webp",
      });
    },
  },
];

const Router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(_1, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default Router;
