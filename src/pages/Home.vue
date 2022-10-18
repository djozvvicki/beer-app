<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Beer } from "../types";
import { useRoute, useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import Pagination from "../components/Pagination.vue";
import BeersList from "../components/BeersList.vue";
import BasicLayout from "../components/BasicLayout.vue";
import { fetchBeers, validatePage, toggleActiveBtn } from "../utils/index";
import { debounce } from "lodash";

const router = useRouter();
const route = useRoute();

const beers = ref<Beer[]>([]);

const page = ref<number>(validatePage(Number(route.query.page)));

const beerName = ref<string>("");
const beerIBU = ref<number>(0);
const beerIBUType = ref<boolean>(true);

const toggleIBUType = (): void => {
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

const handlePageChange = (pageNum: number) => {
  const newPage = validatePage(pageNum);

  page.value = newPage;

  router.push({
    query: {
      page: newPage,
    },
  });

  toggleActiveBtn(page);
  fetchBeers(beers, newPage, beerName.value, beerIBU.value, beerIBUType.value);
};

const handleChangeBeerName = debounce((newBeerName: string) => {
  fetchBeers(beers, page.value, newBeerName, beerIBU.value, beerIBUType.value);
}, 500);

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
      @update:beerName="handleChangeBeerName"
      :beerIBU="beerIBU"
      @update:beerIBU="beerIBU = $event"
      :beerIBUType="beerIBUType"
      @handleResetClick="handleResetClick"
      @handleSearchClick="handleSearchClick"
      @toggle:IBUType="toggleIBUType"
    />
    <BeersList :beers="beers" />
    <Pagination @changePage="handlePageChange" />
  </BasicLayout>
</template>
