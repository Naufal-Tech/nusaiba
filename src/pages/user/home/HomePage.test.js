import React from "react";
import { render } from "@testing-library/react";

// import page
import HomePage from "./HomePage";

test("renders the Home page without errors", () => {
  render(<HomePage />);
});
