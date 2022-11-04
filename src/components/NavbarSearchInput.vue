<script setup lang="ts">
import { ref } from "vue";
import InputSearch from "primevue/inputtext";

const props = defineProps<{
  beerName: string;
}>();

const emits = defineEmits<{
  (e: "update:beerName", beerName: string): void;
}>();

const beerName = ref<string>(props.beerName);
</script>

<template>
  <InputSearch
    class="mb-2 w-11 md:w-6 lg:mb-0"
    role="searchInput"
    type="search"
    name="search"
    autocomplete="off"
    placeholder="Search by name.."
    v-model="beerName"
    @input="emits('update:beerName', beerName)"
  />
</template>
