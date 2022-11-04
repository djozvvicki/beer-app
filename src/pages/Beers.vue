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
import Button from "primevue/button";

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
  <div class="relative text-xl p-5">
    <div v-if="beer" class="flex flex-wrap">
      <DetailsBeerImage :imageURL="beer.image_url" :name="beer.name" />
      <DetailsBeerDescription
        class="w-seventy"
        :abv="beer.abv"
        :name="beer.name"
        :description="beer.description"
        :ibu="beer.ibu"
        :tagline="beer.tagline"
      />
      <DetailsBeerFoodPairing class="" :foodPairing="beer.food_pairing" />
      <DetailsBeerAuthorName :author="authorName" />
      <Button
        class="absolute top-0 right-0 m-3"
        @click="router.back()"
        icon="pi pi-arrow-left"
      />
    </div>
    <Loader v-else />
  </div>
</template>

<style scoped>
.w-seventy {
  width: 70%;
}
</style>
