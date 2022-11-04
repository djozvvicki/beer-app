<script setup lang="ts">
import Button from "primevue/button";

const props = defineProps<{
  content: number;
  isNotFirst?: boolean;
  active: boolean;
}>();

const emits = defineEmits<{
  (e: "changePage"): void;
}>();
</script>

<template>
  <Button
    data-testid="pagination-item"
    name="pagination-item"
    :class="props.active ? 'bg-indigo-400' : ''"
    @click="emits('changePage')"
  >
    {{ props.content }}
  </Button>
</template>

<style scoped></style>
