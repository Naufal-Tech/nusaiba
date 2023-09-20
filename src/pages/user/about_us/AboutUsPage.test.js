import React from "react";
import { render } from "@testing-library/react";

// import page
import AboutUsPage from "./AboutUsPage";

test("renders the About Us page without errors", () => {
  render(<AboutUsPage />);
});
