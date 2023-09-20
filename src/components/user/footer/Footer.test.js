import React from "react";
import { render } from "@testing-library/react";

// import components
import Footer from "./Footer";

test("renders the Footer component without errors", () => {
  render(<Footer />);
});
