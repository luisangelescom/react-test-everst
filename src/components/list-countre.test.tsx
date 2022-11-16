import { create, ReactTestRenderer } from "react-test-renderer";
import ListCountry from "./ListCountry";

let component: ReactTestRenderer;

const props = {
  results: [],
  onClick: () => {},
};

describe("Renders learn react link show-data", () => {
  beforeEach(() => {
    component = create(<ListCountry {...props} />);
  });

  it("Component is rendered", () => {
    expect(component).toBeDefined();
  });

  it("Click on an element", () => {
    component.update(
      <ListCountry
        results={[
          {
            code: "Mx",
            name: "Mexico",
          },
        ]}
        onClick={props.onClick}
      />
    );

    const div = component.root.findByType("div");
    const buttones = div.findAllByType("button");

    buttones.forEach((button) => {
      expect(button.props.onClick());
    });
  });
});
