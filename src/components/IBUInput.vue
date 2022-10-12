<script setup lang="ts">
import { ref } from "vue";
import { convertBeerIBUType } from "../utils/index";

const props = defineProps<{
  beerIBU: number;
  beerIBUType: boolean;
}>();

const emits = defineEmits(["toggle:IBUType", "update:beerIBU"]);

const beerIBU = ref<number>(props.beerIBU);
</script>

<template>
  <input
    class="outline-none rounded-xl py-2 px-5 focus:border-black hover:border-black border-gray-200 duration-150 border border-solid bg-transparent placeholder:opacity-50 rounded-r-none"
    type="text"
    name="ibu"
    placeholder="IBU Number"
    v-model="beerIBU"
    @change="emits('update:beerIBU', Number(beerIBU))"
  />

  <button
    class="hover:cursor-pointer hover:bg-black hover:text-white duration-150 focus:bg-black focus:text-white py-2 px-5 rounded-xl border-solid border border-black-900 border-l-0 rounded-l-none"
    type="button"
    name="ibuType"
    @click="emits('toggle:IBUType')"
  >
    {{ convertBeerIBUType(props.beerIBUType) }}
  </button>
</template>
