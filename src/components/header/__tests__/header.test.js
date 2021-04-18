import { shallow, render } from "enzyme";
import Header from "../header";

describe("<Header />", () => {
  describe("should render correctly", () => {
    test("by matching snapshot", () => {
      const { container } = render(<Header />);
      expect(container).toMatchSnapshot();
    });
  });
  test("button click should execute onSubmit function", () => {
    const clickFn = jest.fn();
    const component = shallow(<button onClick={clickFn}></button>);
    expect(component.find("button").exists()).toBe(true);
    component.find("button").simulate("click");
    expect(clickFn).toHaveBeenCalled();
  });
});

/*   it('should render banner text correctly with given strings', () => {
    const strings = ['one', 'two'];
    const component = shallow(<MyComponent list={strings} />);
    expect(component).toMatchSnapshot();
  }); */
