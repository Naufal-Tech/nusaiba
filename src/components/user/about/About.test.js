import React from "react";
import { render } from "@testing-library/react";

// import components
import About from "./About";

test("renders the About component without errors", () => {
  render(<About />);
});
