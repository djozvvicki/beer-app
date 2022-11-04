<script setup lang="ts">
import { ref } from "vue";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";

const props = defineProps<{
  beerIBU: number;
  beerIBUType: boolean;
}>();

const emits = defineEmits<{
  (e: "toggle:IBUType"): void;
  (e: "update:beerIBU", $event: any): void;
}>();

const beerIBU = ref<number>(props.beerIBU);

const handleInput = (event: any) => {
  beerIBU.value = event.value ?? 0;
  emits("update:beerIBU", event.value ?? 0);
};
</script>

<template>
  <div class="p-inputgroup mb-2 lg:mb-0 w-11 md:w-6">
    <InputNumber
      data-testid="ibuInput-input"
      type="number"
      name="ibu"
      placeholder="IBU Number"
      v-model="beerIBU"
      @input="handleInput"
    />
    <Button
      data-testid="ibuInput-button"
      :icon.lr="props.beerIBUType ? 'pi pi-arrow-down' : 'pi pi-arrow-up'"
      name="ibuType"
      v-model="props.beerIBUType"
      @click="emits('toggle:IBUType')"
    />
  </div>
</template>
