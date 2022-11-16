import { createRef } from "react";
import { create, ReactTestRenderer } from "react-test-renderer";
import Form from "./Form";

let component: ReactTestRenderer;

const props = {
  onSubmit: jest.fn((event) => {
    console.log("click =)");
  }),
  onChange: jest.fn(() => {
    console.log("click =)");
  }),
};

describe("Renders learn react link show-data", () => {
  beforeEach(() => {
    const ref = createRef<HTMLInputElement>();
    component = create(
      <Form
        onChange={props.onSubmit}
        onSubmit={props.onSubmit}
        innerRef={ref}
      />
    );
  });

  it("click onsubmit", () => {
    const form = component.root.findByType("form");
    form.props.onSubmit();
    expect(props.onSubmit).toHaveBeenCalled();
  });
});
