import Pagination from "../Pagination.vue";
import { expect, describe, it } from "vitest";
import { render, fireEvent } from "@testing-library/vue";

describe("Pagination.vue", () => {
  it("should render 4 children", async () => {
    const wrapper = render(Pagination);

    const paginationChildren = await wrapper.findAllByTestId("pagination-item");

    expect(paginationChildren.length).toBe(4);
  });

  it("should emit 'changePage' with new page number when pagination item was clicked", async () => {
    const wrapper = render(Pagination);

    const paginationItems = await wrapper.findAllByTestId("pagination-item");

    paginationItems.forEach(async (item) => {
      await fireEvent.click(item);

      expect(wrapper.emitted().changePage).toContainEqual([
        Number(item.textContent),
      ]);
    });
  });
});
