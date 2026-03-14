import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  //   it and test both are same
  test("Should load Input name", () => {
    // render
    render(<Contact />);

    //   Query
    const inputName = screen.getByPlaceholderText("name"); // JSX Element (React Element)

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("should load 2 input boxes", () => {
    render(<Contact></Contact>);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
