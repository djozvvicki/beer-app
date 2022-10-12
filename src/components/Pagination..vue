<script setup lang="ts">
import PaginationItem from "./PaginationItem.vue";
const props = defineProps<{
  handlePageChange: Function;
}>();
</script>

<template>
  <div class="flex flex-wrap w-1/6 relative bottom-2 right-5 ml-auto">
    <PaginationItem :handlePageChange="props.handlePageChange" :content="1" />
    <PaginationItem
      :handlePageChange="props.handlePageChange"
      :content="2"
      :isNotFirst="true"
    />
    <PaginationItem
      :handlePageChange="props.handlePageChange"
      :content="3"
      :isNotFirst="true"
    />
    <PaginationItem
      :handlePageChange="props.handlePageChange"
      :content="4"
      :isNotFirst="true"
    />
  </div>
</template>
