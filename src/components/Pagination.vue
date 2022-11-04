<script setup lang="ts">
import PaginationItem from "./PaginationItem.vue";
import { useRoute } from "vue-router";
import { validatePage } from "../utils";

const emits = defineEmits<{
  (e: "changePage", num: number): void;
}>();

const route = useRoute();

const isActive = (num: number) =>
  validatePage(Number(route.query.page)) === num;
</script>

<template>
  <footer
    role="pagination"
    class="p-inputgroup absolute bottom-0 flex flex flex-col justify-content-end pr-6 mt-3 mb-3"
  >
    <PaginationItem
      v-for="num in [1, 2, 3, 4]"
      :key="num"
      :content="num"
      :active="isActive(num)"
      :isNotFirst="num !== 1"
      @changePage="emits('changePage', num)"
    />
  </footer>
</template>
