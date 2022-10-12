<script setup lang="ts">
import PaginationItem from "./PaginationItem.vue";

const emits = defineEmits<{
  (e: "changePage", num: number): void;
}>();
</script>

<template>
  <div class="flex flex-wrap w-1/6 relative bottom-2 right-5 ml-auto">
    <PaginationItem
      v-for="num in [1, 2, 3, 4]"
      :key="num"
      :content="num"
      :isNotFirst="num !== 1"
      @changePage="emits('changePage', num)"
    />
  </div>
</template>
