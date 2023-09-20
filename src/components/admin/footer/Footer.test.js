import React from "react";
import { render } from "@testing-library/react";

// import page
import Footer from "./Footer";

test("renders the Footer component without errors", () => {
  render(<Footer />);
});
