import { render, fireEvent, screen } from "../../../test-utils";
import React from "react";
import Breadcrumbs from "../breadcrumbs";

describe("<Breadcrumbs />", () => {
  describe("should render correctly", () => {
    test("by matching snapshot", () => {
      const component = render(<Breadcrumbs />);
      expect(component).toMatchSnapshot();
    });
  });

  it("doesn't render without props", () => {
    render(<Breadcrumbs />);
    expect(screen.queryByRole("breadText")).toBeNull();
  });
});
