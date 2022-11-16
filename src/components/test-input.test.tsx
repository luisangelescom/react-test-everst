import { create, ReactTestRenderer } from "react-test-renderer";
import TextInput from "./text-input";

let component: ReactTestRenderer;

describe("Renders learn react link show-data", () => {
  beforeEach(() => {
    component = create(<TextInput />);
  });

  it("Component is rendered", () => {
    expect(component).toBeDefined();
  });
});
