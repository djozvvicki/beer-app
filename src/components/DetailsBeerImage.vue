<script setup lang="ts">
const props = defineProps<{
  imageURL: string;
  name: string;
}>();
</script>

<template>
  <img
    :src="imageURL"
    :alt="name"
    class="h-96 border border-gray-200 px-2 py-5 shadow-md mr-10 float-left"
  />
</template>
