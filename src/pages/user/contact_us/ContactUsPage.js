import React from "react";

// import components
import Bar from "../../../components/user/header/bar/Bar";
import Navigation from "../../../components/user/header/navigation/Navigation";
import ContactUs from "../../../components/user/contact_us/ContactUs";
import Footer from "../../../components/user/footer/Footer";

// import styles
import "../../../assets/styles/user/Header.css";
import "./ContactUsPage.css";

function ContactUsPage() {
  return (
    <div>
      {/* navigation - start */}
      <Bar />
      <Navigation />
      {/* navigation - end */}

      {/* header - start */}
      <div className="container-fluid page-header mb-5 py-5">
        <div className="container">
          {/* title - start */}
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Hubungi Kami
          </h1>
          {/* title - end */}

          {/* navigation - start */}
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb text-uppercase">
              {/* menu - home - start */}
              <li className="breadcrumb-item">
                <a className="text-white" href="/">
                  Home
                </a>
              </li>
              {/* menu - home - end */}

              {/* menu - about - start */}
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Contact Us
              </li>
              {/* menu - about - end */}
            </ol>
          </nav>
          {/* navigation - end */}
        </div>
      </div>
      {/* header - end */}

      {/* hero - start */}
      <ContactUs />
      {/* hero - end */}

      {/* footer - start */}
      <Footer />
      {/* footer - end */}
    </div>
  );
}

export default ContactUsPage;
