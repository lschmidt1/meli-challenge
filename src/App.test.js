import { shallow } from "enzyme";
import App from "./App";
import { render, fireEvent, screen } from "./test-utils";

describe("<App/>", () => {
  describe("App renders without crashing", () => {
    const component = render(<App />);
    test("by matching snapshot", () => {
      expect(component).toMatchSnapshot();
    });
  });
});
