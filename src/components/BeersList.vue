<script setup lang="ts">
import { Beer } from "../types/index";

const props = defineProps<{
  beers: Beer[];
}>();
</script>

<template>
  <div
    class="beersList w-screen flex flex-row flex-wrap justify-content-center text-700 gap-2 p-3"
  >
    <router-link
      v-if="props.beers && props.beers.length > 0"
      v-for="beer in props.beers"
      data-testid="beer"
      :to="{ path: `/beers/${beer.id}` }"
      class="flex flex-column w-3 no-underline text-900 shadow-1 p-2 text-center beerItem"
      :key="beer.name"
    >
      <p class="text-2xl font-bold text-center mb-3">{{ beer.name }}</p>
      <p class="text-xl">
        <span> IBU: {{ beer.ibu ?? "null" }} </span>
        <span> Food Pairing: {{ beer.food_pairing.length }}</span>
      </p>
    </router-link>
    <div
      class="flex flex-column w-3 no-underline text-900 shadow-1 p-2 text-center"
      v-else
    >
      <div data-testid="no-beers" class="text-lg">No beers</div>
    </div>
  </div>
</template>

<style>
.beersList {
  height: calc(100vh - 5rem);
  overflow: hidden;
  overflow-y: scroll;
}

.beerItem:hover {
  transform: scale(105%);
  transition: transform 0.15s ease-in-out;
}
</style>
