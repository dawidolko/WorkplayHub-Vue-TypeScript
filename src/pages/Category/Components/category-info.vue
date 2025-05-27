<script setup lang="ts">
import { getCategoryDisplayName } from "../../../data/battlestation-utils";

const props = defineProps<{
  category: string;
}>();

const categoryDescriptions: { [key: string]: string } = {
  pc: "Mój główny komputer to potężna maszyna do gier i pracy. Ryzen 7 5800X w połączeniu z RTX 3060Ti i 64GB RAM zapewnia płynność w każdym zadaniu.",
  laptop:
    "MacBook Pro M3 to mój wybór do pracy mobilnej. Chip Apple M3 i 18GB RAM gwarantują wydajność w profesjonalnych aplikacjach.",
  monitors:
    "Setup trzech monitorów zapewnia maksymalną produktywność. Dwa IIYAMA do pracy i HP 144Hz do gier.",
  peripherals:
    "Peryferia Razer zapewniają precyzję i komfort podczas długich sesji gier i pracy.",
  audio:
    "Profesjonalny setup audio z głośnikami EDIFIER i mikrofonem Novox NC1 do streamingu i rozmów.",
  workspace:
    "Ergonomiczne stanowisko pracy z autorskim biurkiem i regulacją wysokości dla maksymalnego komfortu.",
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
          O kategorii <br class="hidden xl:inline" />
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
          <span class="font-semibold">Monitory</span>
        </router-link>
        <router-link
          to="/peripherals"
          class="rounded bg-k-grey p-4 text-center transition hover:bg-k-main"
          :class="{ 'bg-k-main': category === 'peripherals' }">
          <span class="font-semibold">Peryferia</span>
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
