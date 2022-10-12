<script setup lang="ts">
import { Beer } from "../types/index";
import BeersListItem from "./BeersListItem.vue";

const props = defineProps<{
  beers: Beer[];
}>();
</script>

<template>
  <div
    class="w-screen flex-wrap flex justify-center mr-auto ml-auto relative mb-5"
  >
    <BeersListItem :beers="props.beers" />
  </div>
</template>
