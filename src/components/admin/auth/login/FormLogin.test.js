import React from "react";
import { render } from "@testing-library/react";

// import page
import Login from "./FormLogin";

test("renders the Login component without errors", () => {
  render(<Login />);
});
