import { shallow } from "enzyme";
import App from "./App";
import { TestScheduler } from "@jest/core";

describe("<App/>", () => {
  test("App renders without crashing", () => {
    const wrapper = shallow(<App />);
  });
});
