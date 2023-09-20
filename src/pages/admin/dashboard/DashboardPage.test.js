import React from "react";
import { render } from "@testing-library/react";

// import page
import DashboardPage from "./DashboardPage";

test("renders the Dashboard page without errors", () => {
  render(<DashboardPage />);
});
