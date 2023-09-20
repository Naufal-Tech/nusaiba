import React from "react";
import { render } from "@testing-library/react";

// import page
import ContactUsPage from "./ContactUsPage";

test("renders the Contact Us page without errors", () => {
  render(<ContactUsPage />);
});
