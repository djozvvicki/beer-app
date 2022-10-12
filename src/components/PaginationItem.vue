<script setup lang="ts">
const props = defineProps<{
  content: number;
  isNotFirst?: boolean;
}>();
</script>

<template>
  <button
    class="w-1/4 p-1 border border-gray-400 outline-none hover:bg-black duration-300 hover:text-white focus:bg-black focus:text-white"
    :class="isNotFirst ? 'border-l-0' : ''"
    name="pagination-item"
    @click="$emit('changePage')"
  >
    {{ props.content }}
  </button>
</template>
