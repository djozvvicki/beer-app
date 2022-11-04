<script setup lang="ts">
const props = defineProps<{
  name: string;
  tagline: string;
  ibu: number;
  abv: number;
  description: string;
}>();
</script>

<template>
  <div class="w-full md:w-9">
    <h1 class="text-4xl pt-3 font-bold">{{ name }}</h1>
    <div class="flex mt-4 mb-2">
      <span class="">{{ tagline }}</span>
      <span class="ml-5"><strong>IBU:</strong> {{ ibu }}</span>
      <span class="ml-5"><strong>ABV:</strong> {{ abv }}</span>
    </div>
    <p class="max-w-4xl">
      {{ description }}
    </p>
  </div>
</template>
