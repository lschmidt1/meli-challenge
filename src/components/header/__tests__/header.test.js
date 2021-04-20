import { shallow, render } from "enzyme";
import Header from "../header";

describe("<Header />", () => {
  describe("should render correctly", () => {
    test("by matching snapshot", () => {
      const component = shallow(<Header />);
      expect(component).toMatchSnapshot();
    });
  });
  test("button click should execute function", () => {
    const clickFn = jest.fn();
    const component = shallow(<button onClick={clickFn}></button>);
    component.find("button").props().onClick();
    expect(clickFn).toHaveBeenCalledTimes(1);
  });
});

/*   it('should render banner text correctly with given strings', () => {
    const strings = ['one', 'two'];
    const component = shallow(<MyComponent list={strings} />);
    expect(component).toMatchSnapshot();
  }); */
