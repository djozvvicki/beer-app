<script setup lang="ts">
import Button from "primevue/button";

const props = defineProps<{
  content: string;
  name: string;
  role: string;
}>();

const emits = defineEmits<{
  (e: "handleClick"): void;
}>();
</script>

<template>
  <Button
    :role="props.role"
    class="mr-2"
    :name="props.name"
    @click="emits('handleClick')"
  >
    {{ props.content }}
  </Button>
</template>
