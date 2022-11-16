import { act, create, ReactTestRenderer } from "react-test-renderer";
import ListCountry from "./ListCountry";
// import ListCountry from "./ListCountry";
import ShowData from "./show-data";

let component: ReactTestRenderer;

const event = {
  preventDefault: jest.fn(),
};

const props = {
  data: [
    {
      name: "Mexico",
      code: "Mx",
    },
  ],
};

describe("Renders learn react link show-data", () => {
  beforeEach(() => {
    component = create(<ShowData {...props} />);
  });

  it("Component is rendered", () => {
    expect(component).toBeDefined();
  });

  it("The container has the border class", () => {
    const divParent = component.root.findByType("div");
    expect(divParent.props.className).toEqual("border-container");
  });

  it("Render the input", async () => {
    const divParent = component.root.findByType("div");
    const form = divParent.findByType("form");
    const input = form.findByType("input");

    await act(() => {
      input.props.onChange({
        target: {
          value: "Mexico",
        },
      });
    });

    await act(() => {
      form.props.onSubmit(event);
    });
    component.update(<ShowData data={[]} />);

    const listCountry = divParent.findByType(ListCountry);
    const divCountry = listCountry.findByType("div");
    const element = divCountry.findAllByType("button");
    await act(() => {
      element[0].props.onClick();
    });
  });
});
