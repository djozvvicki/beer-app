<script setup lang="ts">
const props = defineProps<{
  author: () => string;
}>();
</script>

<template>
  <div class="flex">
    <h3 class="font-bold mb-3 mt-5">Author:</h3>
    <p class="mb-3 mt-5 ml-5">{{ author() }}</p>
  </div>
</template>
