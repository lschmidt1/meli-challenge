import { render } from "enzyme"
import App from './App';
import { TestScheduler } from "@jest/core";

describe("<App/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<App />);
  })
  test("App renders correctly", () => {
    expect(wrapper.toBeTruthy)
  })
})