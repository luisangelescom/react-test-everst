import { render, screen } from "@testing-library/react";
import Header from "./header";

beforeEach(() => {
  render(<Header />);
});

test("renders learn react link", () => {
  // render(<Header />);
  const linkElement = screen.getByLabelText(/Header/i);
  expect(linkElement).toBeInTheDocument();
});

test("input opciones", () => {
  // render(<Header />);
  const linkElement = screen.getByLabelText(/Header/i);
  expect(linkElement).toBeInTheDocument();

  screen.getAllByText("Header");

  screen.getByLabelText("Username", { selector: "input" });
  screen.getByPlaceholderText("Username");
});

test("Test ByTest", () => {
  // render(<Header />);
  screen.getByText(/about/i);
  screen.getByText(/Send data/i);
});

test("Test ByDisplayValue", () => {
  // render(<Header />);
  screen.getByDisplayValue("Norris");

  screen.getByDisplayValue("Alaska");
});

test("Test img", () => {
  // render(<Header />);
  screen.getByAltText(/incredibles.*? poster/i);
});

test("Test by title", () => {
  // render(<Header />);
  screen.getByTitle(/delete/i);
});

test("Test PorTestId", () => {
  // screen.getByTestId("custom-element");
});
