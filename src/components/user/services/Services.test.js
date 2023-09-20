import React from "react";
import { render } from "@testing-library/react";

// import components
import Services from "./Services";

test("renders the Services component without errors", () => {
  render(<Services />);
});
