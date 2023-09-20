import React from "react";

// import styles
import "./Navigation.css";

function Navigation() {
  return (
    <div className="container-fluid nav-bar bg-light sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 py-lg-0 px-lg-4">
        {/* title - start */}
        <a
          href="/"
          className="navbar-brand d-flex align-items-center m-0 p-0 d-lg-none"
        >
          <h1 className="text-primary m-0">PT. Nusaiba Amerta Teknik</h1>
        </a>
        {/* title - end */}

        {/* button expand - start */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        {/* button expand - end */}

        {/*  menu - start */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav me-auto">
            {/* menu - home - start */}
            <a href="/" className="nav-item nav-link">
              Home
            </a>
            {/* menu - home - end */}

            {/* menu - about - start */}
            <a href="/about-us" className="nav-item nav-link">
              About Us
            </a>
            {/* menu - about - end */}

            {/* menu - service - start */}
            <a href="/services" className="nav-item nav-link">
              Services
            </a>
            {/* menu - service - end */}

            {/* menu - service - start */}
            {/* <a href="#clients" className="nav-item nav-link">
              Clients
            </a> */}
            {/* menu - service - end */}

            {/* menu - service - start */}
            {/* <a href="#booking" className="nav-item nav-link">
              Booking
            </a> */}
            {/* menu - service - end */}

            {/* contact - service - start */}
            <a href="/contact-us" className="nav-item nav-link">
              Contact Us
            </a>
            {/* contact - service - end */}

            {/* menu - drop down - start */}
            <div className="nav-item dropdown">
              {/* <a
                href="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a> */}

              {/* drop down - menu - start */}
              {/* <div className="dropdown-menu fade-up m-0">
                <a href="#booking" className="dropdown-item">
                  Booking
                </a>
                <a href="team.html" className="dropdown-item">
                  Technicians
                </a>
                <a href="#clients" className="dropdown-item">
                  Clients
                </a>
              </div> */}
              {/* drop down - menu - end */}
            </div>
            {/* menu - drop down - end */}

            {/* menu - contact - start */}
            {/* <a href="contact.html" className="nav-item nav-link">
              Contact
            </a> */}
            {/* menu - contact - end */}
          </div>

          {/* call center - start */}
          <div className="mt-4 mt-lg-0 me-lg-n4 py-3 px-4 bg-primary d-flex align-items-center call-center">
            <div
              className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
              style={{ width: "45px", height: "45px" }}
            >
              <i className="fa fa-phone-alt text-primary"></i>
            </div>
            <div className="ms-3">
              <p className="mb-1 text-white">Layanan Darurat 24/7</p>
              <h5 className="m-0" style={{ color: "var(--secondary)" }}>
                021 - 29021873
              </h5>
            </div>
          </div>
          {/* call center - end */}
        </div>
        {/* menu - end */}
      </nav>
    </div>
  );
}

export default Navigation;
