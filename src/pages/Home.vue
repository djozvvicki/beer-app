<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Beer } from "../types";
import { useRoute, useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import Pagination from "../components/Pagination..vue";
import BeersList from "../components/BeersList.vue";
import BasicLayout from "../components/BasicLayout.vue";
import {
  fetchBeers,
  validatePage,
  toggleActiveBtn,
  convertBeerIBUType,
} from "../utils/index";

const router = useRouter();
const route = useRoute();

const beers = ref<Beer[]>([]);

const page = ref<number>(validatePage(Number(route.query.page)));

const beerName = ref<string>("");
const beerIBU = ref<number>(0);
const beerIBUType = ref<boolean>(true);

const toggleIBUType = (e: Event): void => {
  if (beerIBUType.value) {
    beerIBUType.value = false;
  } else {
    beerIBUType.value = true;
  }
};

const handleSearchClick = (): void => {
  fetchBeers(
    beers,
    page.value,
    beerName.value,
    beerIBU.value,
    beerIBUType.value
  );
};

const handleResetClick = (): void => {
  page.value = 1;
  beerName.value = "";
  beerIBUType.value = true;
  beerIBU.value = 0;

  router.push({
    query: {},
  });

  toggleActiveBtn(page);
  fetchBeers(
    beers,
    page.value,
    beerName.value,
    beerIBU.value,
    beerIBUType.value
  );
};

const handlePageChange = (e: Event) => {
  const target = e.target as HTMLButtonElement;

  const newPage = validatePage(Number(target.textContent));

  if (target.textContent !== null && target.textContent.length > 0) {
    page.value = newPage;

    router.push({
      query: {
        page: newPage,
      },
    });
  }

  toggleActiveBtn(page);
  fetchBeers(beers, newPage, beerName.value, beerIBU.value, beerIBUType.value);
};

onMounted(() => {
  fetchBeers(
    beers,
    page.value,
    beerName.value,
    beerIBU.value,
    beerIBUType.value
  );

  router.replace({
    query: {
      page: page.value,
    },
  });

  toggleActiveBtn(page);
});
</script>

<template>
  <BasicLayout>
    <Navbar
      :beerName="beerName"
      @update:beerName="beerName = $event"
      :beerIBU="beerIBU"
      @update:beerIBU="beerIBU = $event"
      :beerIBUType="beerIBUType"
      :handleResetClick="handleResetClick"
      :handleSearchClick="handleSearchClick"
      :toggleIBUType="toggleIBUType"
    />
    <BeersList :beers="beers" />
    <Pagination :handlePageChange="handlePageChange" />
  </BasicLayout>
</template>
