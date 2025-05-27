<script setup lang="ts">
import Navigation from "../../components/navigation-global.vue";
import Footer from "../../components/footer-global.vue";
import {
  getAllCategories,
  getComponentsByCategory,
} from "../../data/battlestation-utils";

// English category names
const getCategoryDisplayNameEnglish = (category: string): string => {
  const displayNames: { [key: string]: string } = {
    pc: "Gaming PC",
    laptop: "Laptop",
    monitors: "Monitors",
    peripherals: "Peripherals",
    audio: "Audio Equipment",
    workspace: "Workspace",
  };

  return displayNames[category] || category;
};
</script>

<template>
  <Navigation color="black" />
  <header class="flex w-full flex-col items-center bg-black lg:rounded-b-lg">
    <div
      class="my-10 flex w-4/5 max-w-6xl flex-col items-center justify-center lg:my-20">
      <h1
        class="text-4xl font-semibold uppercase tracking-wider text-white antialiased">
        Full Specifications
      </h1>
    </div>
  </header>
  <main
    class="main-container flex h-full w-screen flex-col items-center bg-white">
    <section class="mt-16 flex w-4/5 max-w-6xl flex-col md:mt-32">
      <div v-for="category in getAllCategories()" :key="category" class="mb-16">
        <h2 class="text-3xl font-bold text-k-black mb-8">
          {{ getCategoryDisplayNameEnglish(category) }}
        </h2>

        <div class="space-y-8">
          <div
            v-for="component in getComponentsByCategory(category)"
            :key="component.id"
            class="border border-k-grey rounded-lg p-6">
            <div class="flex items-start gap-6">
              <div class="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  :src="component.image"
                  :alt="component.name"
                  class="w-full h-full object-cover" />
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-3">
                  <h3 class="text-xl font-bold text-k-black">
                    {{ component.name }}
                  </h3>
                  <span
                    v-if="component.type === 'main'"
                    class="px-3 py-1 bg-k-main text-sm font-semibold rounded">
                    MAIN
                  </span>
                </div>
                <p class="text-lg text-k-black opacity-80 mb-3">
                  {{ component.model }}
                </p>
                <p class="text-k-black opacity-60 mb-4">
                  {{ component.description }}
                </p>

                <div class="bg-k-light-grey p-4 rounded-lg">
                  <h4 class="font-semibold text-k-black mb-3">
                    Detailed specifications:
                  </h4>
                  <div class="grid gap-2 md:grid-cols-2">
                    <div
                      v-for="(spec, index) in component.specs"
                      :key="index"
                      class="flex items-center text-sm">
                      <span
                        class="w-2 h-2 bg-k-main rounded-full mr-3 flex-shrink-0"></span>
                      <span class="text-k-black">{{ spec }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>
