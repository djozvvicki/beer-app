<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Beer } from "../types";

const route = useRoute();

const beer = ref<Beer | null>(null);

const endpoint = new URL(`https://api.punkapi.com/v2/beers`);

onMounted(async () => {
  try {
    const { data } = await axios.get(
      endpoint.toString() + `/${route.params.id ?? "all"}`
    );

    beer.value = data[0];
  } catch (err) {
    console.error(err);
  }
});

const authorName = (): string => {
  if (beer.value) {
    const { contributed_by } = beer.value;

    return contributed_by.substring(
      contributed_by.indexOf("<") + 1,
      contributed_by.indexOf(">")
    );
  } else {
    return "";
  }
};
</script>

<template>
  <div class="relative text-black text-xl p-5">
    <div v-if="beer">
      <img
        :src="beer.image_url"
        :alt="beer.name"
        class="h-96 border border-gray-200 px-2 py-5 shadow-md mr-10 float-left"
      />
      <div>
        <h1 class="text-4xl pt-3 font-bold">{{ beer.name }}</h1>
        <div class="flex mt-4 mb-2">
          <span class="">{{ beer.tagline }}</span>
          <span class="ml-5"><strong>IBU:</strong> {{ beer.ibu }}</span>
          <span class="ml-5"><strong>ABV:</strong> {{ beer.abv }}</span>
        </div>
        <p class="max-w-4xl">
          {{ beer.description }}
        </p>
      </div>
      <ul class="clear-both pt-5 list-disc">
        <h3 class="text-3xl font-bold mb-3">Food pairing</h3>
        <li class="ml-10" v-for="food_pair in beer.food_pairing">
          {{ food_pair }}
        </li>
      </ul>
      <div class="flex">
        <h3 class="font-bold mb-3 mt-5">Author:</h3>
        <p class="mb-3 mt-5 ml-5">{{ authorName() }}</p>
      </div>
    </div>

    <div v-else>Loading...</div>
  </div>
</template>
