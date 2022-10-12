<script setup lang="ts">
import { Beer } from "../types/index";
import NoItemsFound from "./NoItemsFound.vue";
const props = defineProps<{
  beers: Beer[];
}>();
</script>

<template>
  <router-link
    :to="{ path: `/beers/${beer.id}` }"
    class="flex flex-col w-96 md:w-1/3 lg:w-1/4 bg-white justify-center relative outline-none z-0 hover:z-1 items-center h-32 border border-gray-200 shadow-md shadow-gray-100 m-1 p-3 hover:scale-105 ease-in-out focus:scale-105 duration-300"
    :key="beer.name"
    v-for="beer in props.beers"
    v-if="props.beers.length > 0"
  >
    <p class="text-2xl font-bold text-center">{{ beer.name }}</p>
    <p class="text-xl">
      <span> IBU: {{ beer.ibu ?? "-" }} </span>
      <span> Food Pairing: {{ beer.food_pairing.length }}</span>
    </p>
  </router-link>
  <NoItemsFound v-else />
</template>
