import { shallow, mount, render } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import ProductsList from "../productsList";

describe("<ProductsList />", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );
  });
  describe("should render correctly", () => {
    test("by matching snapshot", () => {
      expect(component).toMatchSnapshot();
    });
  });

  test("if there are no products loaded, list should be null", () => {
    expect(component.find("ul").exists()).toBe(false);
  });
});
