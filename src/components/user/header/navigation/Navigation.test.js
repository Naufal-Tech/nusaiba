import React from "react";
import { render } from "@testing-library/react";

// import components
import Navigation from "./Navigation";

test("renders the Navigation component without errors", () => {
  render(<Navigation />);
});
