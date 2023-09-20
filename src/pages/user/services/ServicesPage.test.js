import React from "react";
import { render } from "@testing-library/react";

// import page
import ServicePage from "./ServicePage";

test("renders the Service page without errors", () => {
  render(<ServicePage />);
});
