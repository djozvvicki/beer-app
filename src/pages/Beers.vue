<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Beer } from "../types";
import Loader from "../components/Loader.vue";
import DetailsBeerImage from "../components/DetailsBeerImage.vue";
import DetailsBeerFoodPairing from "../components/DetailsBeerFoodPairing.vue";
import DetailsBeerDescription from "../components/DetailsBeerDescription.vue";
import DetailsBeerAuthorName from "../components/DetailsBeerAuthorName.vue";

const router = useRouter();
const route = useRoute();

const beer = ref<Beer | null>(null);

const endpoint = new URL(`https://api.punkapi.com/v2/beers`);

const getValidID = (id: string | string[]) => {
  if (typeof id !== "string") router.push("/");

  const ID = Number(id);

  if (isNaN(ID)) {
    router.push("/");
  }

  return ID;
};

onMounted(async () => {
  try {
    const id = getValidID(route.params.id);

    const { data } = await axios.get(endpoint.toString() + `/${id ?? 1}`);

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
  }

  return "";
};
</script>

<template>
  <div class="relative text-black text-xl p-5">
    <div v-if="beer">
      <DetailsBeerImage :imageURL="beer.image_url" :name="beer.name" />
      <DetailsBeerDescription
        :abv="beer.abv"
        :name="beer.name"
        :description="beer.description"
        :ibu="beer.ibu"
        :tagline="beer.tagline"
      />
      <DetailsBeerFoodPairing :foodPairing="beer.food_pairing" />
      <DetailsBeerAuthorName :author="authorName" />
      <div
        class="absolute top-4 right-4 p-2 rounded-full border-2 duration-150 border-black hover:cursor-pointer"
        @click="router.back()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-arrow-left translate-x-0 hover:-translate-x-1 duration-150"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <line x1="5" y1="12" x2="11" y2="18"></line>
          <line x1="5" y1="12" x2="11" y2="6"></line>
        </svg>
      </div>
    </div>
    <Loader v-else />
  </div>
</template>
