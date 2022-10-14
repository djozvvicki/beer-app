import BeersList from "../BeersList.vue";
import { expect, describe, it } from "vitest";
import { render, RenderResult } from "@testing-library/vue";
import axios from "axios";

describe("BeersList.vue", () => {
  it("should render 'No beers' when beers prop is empty", async () => {
    const wrapper = render(BeersList, {
      props: {
        beers: [],
      },
    });

    const noBeers = await wrapper.findByTestId("no-beers");

    expect(noBeers.textContent).toEqual("No beers");
  });

  it("should render beers' list with 25 elements when beers prop has elements", async () => {
    const { data } = await axios.get("https://api.punkapi.com/v2/beers?page=1");

    const wrapper: RenderResult = render(BeersList, {
      props: {
        beers: data,
      },
    });

    const beersItems = await wrapper.findAllByTestId("beer");

    expect(beersItems.length).toEqual(25);
  });
});
