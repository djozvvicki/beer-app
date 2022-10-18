<script setup lang="ts">
const props = defineProps<{
  foodPairing: string[];
}>();
</script>

<template>
  <ul class="clear-both pt-5 list-disc">
    <h3 class="text-3xl font-bold mb-3">Food pairing</h3>
    <li class="ml-10" v-for="food_pair in foodPairing">
      {{ food_pair }}
    </li>
  </ul>
</template>
