import React from "react";
import { render } from "@testing-library/react";

// import components
import Clients from "./Clients";

test("renders the Clients component without errors", () => {
  render(<Clients />);
});
