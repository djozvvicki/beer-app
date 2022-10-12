<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  beerName: string;
}>();

const emits = defineEmits<{
  (e: "update:beerName", beerName: string): void;
}>();

const beerName = ref<string>(props.beerName);
</script>

<template>
  <input
    class="outline-none rounded-xl py-2 px-5 mr-3 border-gray-200 border border-solid bg-transparent placeholder:opacity-50 focus:border-black hover:border-black duration-150"
    type="search"
    name="search"
    autocomplete="off"
    placeholder="Search beer name.."
    v-model="beerName"
    @input="emits('update:beerName', beerName)"
  />
</template>
