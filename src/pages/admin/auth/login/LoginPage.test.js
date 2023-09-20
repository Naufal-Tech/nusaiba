import React from "react";
import { render } from "@testing-library/react";

// import page
import LoginPage from "./LoginPage";

test("renders the Login page without errors", () => {
  render(<LoginPage />);
});
