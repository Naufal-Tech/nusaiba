import React from "react";
import { render } from "@testing-library/react";

// import page
import Error404Page from "./Error404Page";

test("renders the Error 404 page without errors", () => {
  render(<Error404Page />);
});
