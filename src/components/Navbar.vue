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
        @update:beerName="$emit('update:beerName', $event)"
      />
      <IBUInput
        :beerIBU="beerIBU"
        @update:beerIBU="$emit('update:beerIBU', $event)"
        :beerIBUType="beerIBUType"
        @toggleIBUType="$emit('toggleIBUType')"
      />
      <NavbarButton
        content="Search"
        name="search-button"
        @handleClick="$emit('handleSearchClick')"
      />
      <NavbarButton
        content="Reset"
        name="reset-button"
        @handleClick="$emit('handleResetClick')"
      />
    </div>
  </div>
</template>
