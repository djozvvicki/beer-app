<script setup lang="ts">
const props = defineProps<{
  imageURL: string;
  name: string;
}>();
</script>

<template>
  <div class="w-full sm:w-10rem flex justify-content-center h-18rem">
    <img :src="imageURL" :alt="name" class="h-full" />
  </div>
</template>
