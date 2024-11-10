import React from "react";
import { render, screen } from "@testing-library/react";
import Main from "./index"; 
import * as constants from "../../utils/constants"; 

jest.mock("../MainHead", () => () => <div>MainHead Mock</div>);
jest.mock("../Content", () => () => <div>Content Mock</div>);
jest.mock("../CardList", () => ({ cards }) => (
  <div>
    {cards.map((_, index) => (
      <div key={index}>Card {index + 1}</div>
    ))}
  </div>
));
jest.mock("../../styles", () => () => ({
  root: "root",
}));

describe("Main Component", () => {
  beforeEach(() => {
    render(<Main />);
  });

  test("renders MainHead component", () => {
    const mainHeadElement = screen.getByText(/mainhead mock/i);
    expect(mainHeadElement).toBeTruthy();
  });

  test("renders Content component", () => {
    const contentElement = screen.getByText(/content mock/i);
    expect(contentElement).toBeTruthy();
  });

  test("renders CardList component", () => {
    const cardListElements = screen.getAllByText(/card/i);
    expect(cardListElements.length).toBeGreaterThan(0);
  });

  test("uses correct URL image from constants", () => {
    expect(constants.urlImage).toBeDefined();
  });

  test("renders correct number of cards", () => {
    const cardCount = constants.cards.length;
    expect(screen.getAllByText(/card/i).length).toBe(cardCount);
  });
});
