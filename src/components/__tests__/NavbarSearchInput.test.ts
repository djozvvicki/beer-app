import { fireEvent, render } from "@testing-library/vue";
import SearchInput from "../SearchInput.vue";
import { describe, it, expect } from "vitest";

describe("SearchInput.vue", () => {
  it("should emits 'update:beerName' after update", async () => {
    const wrapper = render(SearchInput, {
      props: {
        beerName: "",
      },
    });

    const searchInput = await wrapper.findByRole("searchInput");

    await fireEvent.update(searchInput, "abc");

    expect(wrapper.emitted()).ownProperty("update:beerName");
  });
});
