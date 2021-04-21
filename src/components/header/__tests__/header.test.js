import { shallow, mount } from "enzyme";
import { render, fireEvent, screen } from "../../../test-utils";
import userEvent from "@testing-library/user-event";
import Header from "../header";
import App from "../../../App";

describe("<Header />", () => {
  describe("should render correctly", () => {
    test("by matching snapshot", () => {
      const component = render(<Header />);
      expect(component).toMatchSnapshot();
    });
  });

  it("renders an empty input", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("searchInput").value).toEqual("");
  });

  test("doing a product search should fulfill products list", async () => {
    render(<App />);
    const searchInput = screen.getByRole("searchInput");
    userEvent.type(searchInput, "apple ipad");
    const submitButton = screen.getByRole("submitButton");
    fireEvent.click(submitButton);
    const productsList = await screen.findByRole("productsList");
    expect(productsList).toBeInTheDocument();
  });
});
