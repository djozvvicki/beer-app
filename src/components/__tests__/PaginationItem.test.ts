import PaginationItem from "../PaginationItem.vue";
import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/vue";

describe("PaginationItem.vue", () => {
  it("should emits 'changePage' after click", async () => {
    const wrapper = render(PaginationItem, {
      props: {
        content: 1,
      },
    });

    const paginationItem = await wrapper.findByTestId("pagination-item");

    await fireEvent.click(paginationItem);

    expect(wrapper.emitted()).ownProperty("changePage");
  });

  it("should has class 'bg-indigo-400' after render", async () => {
    const wrapper = render(PaginationItem, {
      props: {
        content: 1,
        active: true,
      },
    });

    const paginationItem = await wrapper.findByTestId("pagination-item");

    expect(paginationItem.classList.contains("bg-indigo-400")).toBe(true);
  });

  it("shoud has not class 'bg-indigo-400' after render", async () => {
    const wrapper = render(PaginationItem, {
      props: {
        content: 2,
        isNotFirst: true,
        active: false,
      },
    });

    const paginationItem = await wrapper.findByTestId("pagination-item");

    expect(paginationItem.classList.contains("bg-indigo-400")).toBe(false);
  });
});
