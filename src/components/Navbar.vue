<script setup lang="ts">
import { ref } from "vue";
import NavbarSearchInput from "./NavbarSearchInput.vue";
import NavbarIBUInput from "./NavbarIBUInput.vue";
import NavbarButton from "./NavbarButton.vue";
import NavbarLogo from "./NavbarLogo.vue";

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
    class="flex justify-content-between shadow-2 h-5rem p-2"
  >
    <NavbarLogo />
    <div class="flex align-items-center h-full">
      <NavbarSearchInput
        :beerName="beerName"
        class="mr-2"
        @update:beerName="emits('update:beerName', $event)"
      />
      <NavbarIBUInput
        :beerIBU="beerIBU"
        @update:beerIBU="emits('update:beerIBU', $event)"
        :beerIBUType="beerIBUType"
        @toggle:IBUType="emits('toggle:IBUType')"
      />
      <div class="relative flex m-2">
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
