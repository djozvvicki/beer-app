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
  (e: "update:beerIBU", beerIBU: number): void;
}>();

const beerIBU = ref<number>(props.beerIBU);
</script>

<template>
  <div class="p-inputgroup">
    <InputNumber
      data-testid="ibuInput-input"
      type="text"
      name="ibu"
      placeholder="IBU Number"
      v-model="beerIBU"
      @input="emits('update:beerIBU', Number(beerIBU))"
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
