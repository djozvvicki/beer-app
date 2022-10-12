<script setup lang="ts">
import PaginationItem from "./PaginationItem.vue";
</script>

<template>
  <div class="flex flex-wrap w-1/6 relative bottom-2 right-5 ml-auto">
    <PaginationItem
      v-for="num in [1, 2, 3, 4]"
      :key="num"
      :content="num"
      :isNotFirst="num !== 1"
      @changePage="$emit('changePage', num)"
    />
  </div>
</template>
