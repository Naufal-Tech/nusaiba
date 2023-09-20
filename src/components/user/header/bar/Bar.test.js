import React from "react";
import { render } from "@testing-library/react";

// import components
import Bar from "./Bar";

test("renders the Bar component without errors", () => {
  render(<Bar />);
});
