import { shallow, mount, render } from "enzyme";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ProductCard from "../productCard";

describe("<ProductCard />", () => {
  let component;

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <ProductCard />
      </BrowserRouter>
    );
  });
  describe("should render correctly", () => {
    test("by matching snapshot", () => {
      expect(component).toMatchSnapshot();
    });
  });

  it("doesn't render without props", () => {
    component = mount(
      <BrowserRouter>
        <ProductCard />
      </BrowserRouter>
    );
    expect(component.find("#productCard").exists()).toBe(false);
  });

  it("renders with product props", () => {
    const product = {};
    component = mount(
      <BrowserRouter>
        <ProductCard product={product} />
      </BrowserRouter>
    );
    expect(component.find("#productCard").exists()).toBe(true);
  });
});
