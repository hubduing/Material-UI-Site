import React from "react";
import Main from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
describe("Main Component", () => {
  
  test("renders the main heading", () => {
    render(<Main />);
    const headingElement = screen.getByRole("heading", {
      name: /Material UI Site/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
  
  test("renders the learn more button", () => {
    render(<Main />);
    const buttonElement = screen.getByRole("button", {
      name: /Learn more/i,
    });
    expect(buttonElement).toBeInTheDocument();
  });
  
  test("renders the paragraph text", () => {
    render(<Main />);
    const paragraphElement = screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit./i);
    expect(paragraphElement).toBeInTheDocument();
  });
  
});
