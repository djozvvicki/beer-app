<script setup lang="ts">
import { ref } from "vue";
import { convertBeerIBUType } from "../utils/index";

const props = defineProps<{
  beerIBU: number;
  beerIBUType: boolean;
}>();

const emits = defineEmits<{
  (e: "toggle:IBUType"): void;
  (e: "update:beerIBU", beerIBU: number): void;
}>();

const beerIBU = ref<number>(props.beerIBU);
</script>

<template>
  <div class="flex flex-row w-3/4 md:w-1/2">
    <input
      data-testid="ibuInput-input"
      class="w-10/12 outline-none rounded-xl py-2 px-5 focus:border-black hover:border-black border-gray-200 duration-150 border border-solid bg-transparent placeholder:opacity-50 rounded-r-none"
      type="text"
      name="ibu"
      placeholder="IBU Number"
      v-model="beerIBU"
      @input="emits('update:beerIBU', Number(beerIBU))"
    />
    <button
      data-testid="ibuInput-button"
      class="w-2/12 hover:cursor-pointer hover:bg-black hover:text-white duration-150 focus:bg-black focus:text-white rounded-xl border-solid border border-black-900 border-l-0 rounded-l-none"
      type="button"
      name="ibuType"
      @click="emits('toggle:IBUType')"
    >
      {{ convertBeerIBUType(props.beerIBUType) }}
    </button>
  </div>
</template>
