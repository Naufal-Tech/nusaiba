import React from "react";
import { render } from "@testing-library/react";

// import components
import Explore from "./Explore";

test("renders the Explore component without errors", () => {
  render(<Explore />);
});
