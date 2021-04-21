import { shallow, mount } from "enzyme";
import { render, fireEvent, screen } from "../../../test-utils";
import React from "react";
import ProductCard from "../productCard";

describe("<ProductCard />", () => {
  describe("should render correctly", () => {
    test("by matching snapshot", () => {
      const component = render(<ProductCard />);
      expect(component).toMatchSnapshot();
    });
  });

  it("doesn't render without props", () => {
    render(<ProductCard />);
    expect(screen.queryByRole("body")).toBeNull();
  });

  it("renders with product props", () => {
    const product = {};
    render(<ProductCard product={product} />);
    expect(screen.queryByRole("body")).toBeInTheDocument();
  });
});
