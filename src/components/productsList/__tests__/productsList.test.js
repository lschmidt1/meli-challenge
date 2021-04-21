import React from "react";
import { render, fireEvent, screen } from "../../../test-utils";
import * as redux from "react-redux";
import ProductsList from "../productsList";

describe("<ProductsList />", () => {
  describe("should render correctly", () => {
    test("by matching snapshot", () => {
      const component = render(<ProductsList />);
      expect(component).toMatchSnapshot();
    });
  });
});
