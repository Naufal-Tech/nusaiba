import React from "react";
import { render } from "@testing-library/react";

// import components
import Booking from "./Booking";

test("renders the Booking component without errors", () => {
  render(<Booking />);
});
