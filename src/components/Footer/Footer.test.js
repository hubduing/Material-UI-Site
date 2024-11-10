import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./index";

describe("Footer Component", () => {
  const handleChange = jest.fn();
  const value = "recents";

  beforeEach(() => {
    render(<Footer value={value} handleChange={handleChange} />);
  });

  test("renders footer title", () => {
    const titleElement = screen.getByText(/footer/i);
    expect(titleElement).toBeTruthy();
  });

  test("renders BottomNavigationAction for Recents", () => {
    const recentsButton = screen.getByRole("button", { name: /recents/i });
    expect(recentsButton).toBeTruthy();
  });

  test("renders BottomNavigationAction for Favorites", () => {
    const favoritesButton = screen.getByRole("button", { name: /favorites/i });
    expect(favoritesButton).toBeTruthy();
  });

  test("renders BottomNavigationAction for Nearby", () => {
    const nearbyButton = screen.getByRole("button", { name: /nearby/i });
    expect(nearbyButton).toBeTruthy();
  });

  test("renders BottomNavigationAction for Folder", () => {
    const folderButton = screen.getByRole("button", { name: /folder/i });
    expect(folderButton).toBeTruthy();
  });

  test("renders footer subtitle", () => {
    const subtitleElement = screen.getByText(/material ui site/i);
    expect(subtitleElement).toBeTruthy();
  });

  test("calls handleChange when a BottomNavigationAction is clicked", () => {
    const recentsButton = screen.getByRole("button", { name: /recents/i });
    recentsButton.click();
    expect(handleChange).toHaveBeenCalled();
  });
});
