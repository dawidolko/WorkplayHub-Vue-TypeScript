<script setup lang="ts">
import { getCategoryDisplayName } from "../../../data/battlestation-utils";

const props = defineProps<{
  category: string;
}>();

const categoryDescriptions: { [key: string]: string } = {
  pc: "My main computer is a powerful machine for gaming and work. Ryzen 7 5800X combined with RTX 3060Ti and 64GB RAM ensures smooth performance in every task.",
  laptop:
    "MacBook Pro M3 is my choice for mobile work. Apple M3 chip and 18GB RAM guarantee performance in professional applications.",
  monitors:
    "Three-monitor setup ensures maximum productivity. Two IIYAMA for work and HP 144Hz for gaming.",
  peripherals:
    "Razer peripherals provide precision and comfort during long gaming and work sessions.",
  audio:
    "Professional audio setup with EDIFIER speakers and Novox NC1 microphone for streaming and calls.",
  workspace:
    "Ergonomic workstation with custom desk and height adjustment for maximum comfort.",
};

const categoryName = getCategoryDisplayName(props.category);
const description = categoryDescriptions[props.category] || "";
</script>

<template>
  <section
    class="mt-20 flex h-full flex-col items-center justify-center md:mt-32 lg:mt-40">
    <div
      class="flex h-full w-4/5 max-w-6xl flex-col items-center gap-10 md:w-11/12 lg:w-4/5">
      <div class="flex h-full flex-col items-center justify-center text-center">
        <h3 class="text-4xl font-semibold uppercase text-k-black md:text-5xl">
          About <br class="hidden xl:inline" />
          <span class="text-k-main">{{ categoryName }}</span>
        </h3>
        <p class="mt-6 max-w-3xl tracking-wide text-black opacity-70 md:mt-8">
          {{ description }}
        </p>
      </div>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 mt-8">
        <router-link
          to="/pc"
          class="rounded bg-k-grey p-4 text-center transition hover:bg-k-main"
          :class="{ 'bg-k-main': category === 'pc' }">
          <span class="font-semibold">PC</span>
        </router-link>
        <router-link
          to="/laptop"
          class="rounded bg-k-grey p-4 text-center transition hover:bg-k-main"
          :class="{ 'bg-k-main': category === 'laptop' }">
          <span class="font-semibold">Laptop</span>
        </router-link>
        <router-link
          to="/monitors"
          class="rounded bg-k-grey p-4 text-center transition hover:bg-k-main"
          :class="{ 'bg-k-main': category === 'monitors' }">
          <span class="font-semibold">Monitors</span>
        </router-link>
        <router-link
          to="/peripherals"
          class="rounded bg-k-grey p-4 text-center transition hover:bg-k-main"
          :class="{ 'bg-k-main': category === 'peripherals' }">
          <span class="font-semibold">Peripherals</span>
        </router-link>
        <router-link
          to="/audio"
          class="rounded bg-k-grey p-4 text-center transition hover:bg-k-main"
          :class="{ 'bg-k-main': category === 'audio' }">
          <span class="font-semibold">Audio</span>
        </router-link>
        <router-link
          to="/workspace"
          class="rounded bg-k-grey p-4 text-center transition hover:bg-k-main"
          :class="{ 'bg-k-main': category === 'workspace' }">
          <span class="font-semibold">Workspace</span>
        </router-link>
      </div>
    </div>
  </section>
</template>
