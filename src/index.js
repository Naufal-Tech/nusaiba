import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import lab page
import Lab from "../src/pages/LabPage";

// import user pages
import HomePage from "../src/pages/user/home/HomePage";
import AboutUsPage from "../src/pages/user/about_us/AboutUsPage";
import ServicesPage from "../src/pages/user/services/ServicesPage";
import ContactUsPage from "../src/pages/user/contact_us/ContactUsPage";
import NotFoundPage from "../src/pages/user/not_found/NotFoundPage";

// import admin pages
import LoginAdmin from "./pages/admin/auth/login/LoginPage";
import DashboardPage from "./pages/admin/dashboard/DashboardPage";

// import styles
import "../src/assets/styles/user/Main.css";

// report web vitals
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      {/* component lab - start */}
      <Route path="/lab" element={<Lab />} />
      {/* component lab - end */}

      {/* user pages - start */}
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      {/* user pages - end */}

      {/* admin pages - start */}
      <Route path="/portal-admin/login" element={<LoginAdmin />} />
      <Route path="/portal-admin/dashboard" element={<DashboardPage />} />
      {/* admin pages - end */}
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
