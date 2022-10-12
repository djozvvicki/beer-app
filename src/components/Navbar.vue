<script setup lang="ts">
import { ref } from "vue";
import SearchInput from "./SearchInput.vue";
import IBUInput from "./IBUInput.vue";
import NavbarButton from "./NavbarButton.vue";
import Logo from "./Logo.vue";

const props = defineProps<{
  beerName: string;
  beerIBU: number;
  beerIBUType: boolean;
}>();

const emits = defineEmits<{
  (e: "handleSearchClick"): void;
  (e: "handleResetClick"): void;
  (e: "toggle:IBUType"): void;
  (e: "update:beerName", $event: any): void;
  (e: "update:beerIBU", $event: any): void;
}>();

const beerName = ref<string>(props.beerName);
const beerIBU = ref<number>(props.beerIBU);
</script>

<template>
  <div
    class="flex sticky bg-white top-0 z-10 py-3 px-5 w-100% flex-row items-cebter justify-between shadow-black-400 shadow-md mb-5"
  >
    <Logo />
    <div>
      <SearchInput
        :beerName="beerName"
        @update:beerName="emits('update:beerName', $event)"
      />
      <IBUInput
        :beerIBU="beerIBU"
        @update:beerIBU="emits('update:beerIBU', $event)"
        :beerIBUType="beerIBUType"
        @toggle:IBUType="emits('toggle:IBUType')"
      />
      <NavbarButton
        content="Search"
        name="search-button"
        @handleClick="emits('handleSearchClick')"
      />
      <NavbarButton
        content="Reset"
        name="reset-button"
        @handleClick="emits('handleResetClick')"
      />
    </div>
  </div>
</template>
