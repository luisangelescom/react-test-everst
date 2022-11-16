import { create, ReactTestRenderer } from "react-test-renderer";

import App from "./App";
import LoadingData from "./components/loading-data";

let component: ReactTestRenderer;
describe("renders learn react link", () => {
  beforeEach(() => {
    component = create(<App />);
  });

  it("render component div", () => {
    const div = component.root.findByType("div");
    expect(div).toBeDefined();
    expect(div.props.className).toEqual("container");
  });

  it("The container has a loading at the start of the app.", () => {
    const divContainer = component.root.findByType("div");
    const div = divContainer.findByType(LoadingData).findByType("div");
    const divLoading = div.findAllByType("h1");
    expect(div.props.className).toEqual("center-loading");
    expect(divLoading.length > 0).toBeTruthy();
  });
});
