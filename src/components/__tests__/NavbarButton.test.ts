import NavbarButton from "../NavbarButton.vue";
import { expect, describe, it } from "vitest";
import { render, fireEvent } from "@testing-library/vue";

describe("NavbarButton.vue", () => {
  it("should emits 'handleClick' after click", async () => {
    const wrapper = render(NavbarButton, {
      props: {
        role: "Search",
        name: "search-input",
        content: "Search",
      },
    });

    const searchInput = await wrapper.findByRole("Search");

    await fireEvent.click(searchInput);

    expect(wrapper.emitted()).ownProperty("handleClick");
  });
});
