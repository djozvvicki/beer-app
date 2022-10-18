<script setup lang="ts">
import { Beer } from "../types/index";

const props = defineProps<{
  beers: Beer[];
}>();
</script>

<template>
  <div
    class="w-screen flex-wrap flex justify-center mr-auto ml-auto relative mb-5"
  >
    <router-link
      data-testid="beer"
      :to="{ path: `/beers/${beer.id}` }"
      class="flex flex-col w-10/12 md:w-2/6 lg:w-1/5 py-5 bg-white justify-center relative outline-none z-0 hover:z-1 items-center border border-gray-200 shadow-md shadow-gray-100 m-1 p-3 hover:scale-105 ease-in-out focus:scale-105 duration-300"
      :key="beer.name"
      v-for="beer in props.beers"
      v-if="props.beers && props.beers.length > 0"
    >
      <p class="text-2xl font-bold text-center mb-3">{{ beer.name }}</p>
      <p class="text-xl">
        <span> IBU: {{ beer.ibu ?? "null" }} </span>
        <span> Food Pairing: {{ beer.food_pairing.length }}</span>
      </p>
    </router-link>

    <div
      class="flex hover:cursor-pointer select-none flex-col w-10/12 md:w-2/6 lg:w-1/5 bg-white justify-center relative outline-none z-0 hover:z-1 items-center h-32 border border-gray-200 shadow-md shadow-gray-100 m-1 p-3 hover:scale-105 ease-in-out focus:scale-105 duration-300"
      v-else
    >
      <p data-testid="no-beers" class="text-2xl">No beers</p>
    </div>
  </div>
</template>
