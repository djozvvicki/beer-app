import { Ref } from "vue";
import axios from "axios";
import { Beer } from "../types";

export const fetchBeers = async (
  beers: Ref<Beer[]>,
  page: number,
  beerName: string,
  beerIBU: number,
  beerIBUType: boolean
): Promise<void> => {
  try {
    let endpoint = `https://api.punkapi.com/v2/beers?page=${page ?? 1}`;

    if (beerName.length > 0) {
      endpoint += `&beer_name=${beerName.toLowerCase()}`;
    }

    if (beerIBU > 0) {
      endpoint += `&ibu_${convertBeerIBUType(
        beerIBUType
      ).toLowerCase()}=${beerIBU}`;
    }

    const { data } = await axios.get(endpoint);

    beers.value = data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      alert(err.message);
    } else {
      console.error(err);
    }
  }
};

export const toggleActiveBtn = (page: Ref<number>) => {
  const btns = document.getElementsByName("pagination-item");

  btns.forEach((btn) => {
    const actualPage = validatePage(Number(btn.textContent));

    if (actualPage === page.value) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
};

export const validatePage = (page: number): number => {
  if (!isNaN(page)) {
    if (page > 0 && page <= 4) return page;
    if (page > 4) return 4;
  }
  return 1;
};

export const convertBeerIBUType = (type: boolean): "GT" | "LT" => {
  return type ? "GT" : "LT";
};
