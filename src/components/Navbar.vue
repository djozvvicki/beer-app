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
    data-testid="navbar"
    class="flex flex-col lg:flex-row justify-between sticky bg-white top-0 z-10 py-3 px-5 w-100% shadow-black-400 shadow-md mb-5"
  >
    <Logo />
    <div
      class="flex h-48 lg:h-auto flex-col lg:flex-row items-center justify-evenly"
    >
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
      <div class="flex justify-around align-center">
        <NavbarButton
          role="searchButton"
          content="Search"
          name="search-button"
          @handleClick="emits('handleSearchClick')"
        />
        <NavbarButton
          role="resetButton"
          content="Reset"
          name="reset-button"
          @handleClick="emits('handleResetClick')"
        />
      </div>
    </div>
  </div>
</template>
