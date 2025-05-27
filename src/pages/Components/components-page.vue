<script setup lang="ts">
import Navigation from "../../components/navigation-global.vue";
import Footer from "../../components/footer-global.vue";
import {
  getAllCategories,
  getComponentsByCategory,
  getCategoryDisplayName,
} from "../../data/battlestation-utils";
</script>

<template>
  <Navigation color="black" />
  <header class="flex w-full flex-col items-center bg-black lg:rounded-b-lg">
    <div
      class="my-10 flex w-4/5 max-w-6xl flex-col items-center justify-center lg:my-20">
      <h1
        class="text-4xl font-semibold uppercase tracking-wider text-white antialiased">
        Wszystkie Komponenty
      </h1>
    </div>
  </header>
  <main
    class="main-container flex h-full w-screen flex-col items-center bg-white">
    <section class="mt-16 flex w-4/5 max-w-6xl flex-col md:mt-32">
      <div v-for="category in getAllCategories()" :key="category" class="mb-16">
        <div class="mb-8 flex items-center justify-between">
          <h2 class="text-3xl font-bold text-k-black">
            {{ getCategoryDisplayName(category) }}
          </h2>
          <router-link
            :to="`/${category}`"
            class="text-k-main font-semibold hover:underline">
            Zobacz wszystkie
          </router-link>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="component in getComponentsByCategory(category)"
            :key="component.id"
            class="rounded-lg overflow-hidden bg-k-grey hover:shadow-lg transition-shadow">
            <div class="aspect-square overflow-hidden">
              <img
                :src="component.image"
                :alt="component.name"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="p-4">
              <div class="flex items-center gap-2 mb-2">
                <span
                  v-if="component.type === 'main'"
                  class="px-2 py-1 bg-k-main text-xs font-semibold rounded">
                  GŁÓWNY
                </span>
                <span class="text-xs text-k-black opacity-60 uppercase">
                  {{ getCategoryDisplayName(component.category) }}
                </span>
              </div>
              <h3 class="font-semibold text-k-black mb-1">
                {{ component.name }}
              </h3>
              <p class="text-sm text-k-black opacity-80 mb-2">
                {{ component.model }}
              </p>
              <p class="text-xs text-k-black opacity-60 mb-3">
                {{ component.description }}
              </p>
              <div class="flex justify-between items-center">
                <div class="text-xs text-k-black opacity-60">
                  {{ component.specs.length }} specyfikacji
                </div>
                <router-link
                  :to="`/${component.category}`"
                  class="text-xs text-k-main font-semibold hover:underline">
                  Zobacz więcej
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>
