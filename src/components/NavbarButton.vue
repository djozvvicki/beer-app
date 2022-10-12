<script setup lang="ts">
const props = defineProps<{
  content: string;
  name: string;
}>();

const emits = defineEmits<{
  (e: "handleClick"): void;
}>();
</script>

<template>
  <input
    class="hover:cursor-pointer bg-black hover:bg-white focus:bg-white text-white hover:text-black focus:text-black py-2 px-5 border-2 border-solid border-black ml-5 mr-1 rounded-xl ease-in-out transition-colors duration-300"
    type="button"
    :value="props.content"
    :name="props.name"
    @click="emits('handleClick')"
  />
</template>
