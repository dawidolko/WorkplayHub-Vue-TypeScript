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
          "Poznaj moje stanowisko pracy i gier. Ryzen 7 5800X, RTX 3060Ti, MacBook Pro M3 i wiele więcej.",
        ogTitle: "BattleStation | Ultimate Gaming & Work Setup",
        ogDescription:
          "Poznaj moje stanowisko pracy i gier. Ryzen 7 5800X, RTX 3060Ti, MacBook Pro M3 i wiele więcej.",
        ogImage: "/products/setup/main-setup.webp",
      });
    },
  },
  {
    path: "/setup",
    name: "Setup",
    component: () => import("../pages/Setup/setup-page.vue"),
    beforeEnter: () => {
      useSeoMeta({
        title: "Setup Overview | Moje Stanowisko",
        description:
          "Kompletny przegląd mojego stanowiska pracy i gier z szczegółowymi zdjęciami.",
        ogTitle: "Setup Overview | Moje Stanowisko",
        ogDescription:
          "Kompletny przegląd mojego stanowiska pracy i gier z szczegółowymi zdjęciami.",
        ogImage: "/products/setup/main-setup.webp",
      });
    },
  },
  {
    path: "/components",
    name: "Components",
    component: () => import("../pages/Components/components-page.vue"),
    beforeEnter: () => {
      useSeoMeta({
        title: "Components | Wszystkie Komponenty",
        description:
          "Szczegółowy przegląd wszystkich komponentów mojego battlestation - PC, laptop, peryferia, audio.",
        ogTitle: "Components | Wszystkie Komponenty",
        ogDescription:
          "Szczegółowy przegląd wszystkich komponentów mojego battlestation - PC, laptop, peryferia, audio.",
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
        title: "Specs | Pełne Specyfikacje",
        description:
          "Kompletne specyfikacje techniczne wszystkich komponentów w moim setupie.",
        ogTitle: "Specs | Pełne Specyfikacje",
        ogDescription:
          "Kompletne specyfikacje techniczne wszystkich komponentów w moim setupie.",
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
        title: "404 | Strona nie znaleziona",
        description: "Strona nie została znaleziona.",
        ogTitle: "404 | Strona nie znaleziona",
        ogDescription: "Strona nie została znaleziona.",
        ogImage: "/products/404.webp",
      });
    },
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("../pages/404/404-page.vue"),
    beforeEnter: () => {
      useSeoMeta({
        title: "404 | Strona nie znaleziona",
        description: "Strona nie została znaleziona.",
        ogTitle: "404 | Strona nie znaleziona",
        ogDescription: "Strona nie została znaleziona.",
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
