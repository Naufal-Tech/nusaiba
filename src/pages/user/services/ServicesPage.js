import React from "react";
import { Helmet } from "react-helmet";

// import component
import Bar from "../../../components/user/header/bar/Bar";
import Navigation from "../../../components/user/header/navigation/Navigation";
import Services from "../../../components/user/services/Services";
import Booking from "../../../components/user/booking/Booking";
import Footer from "../../../components/user/footer/Footer";

// import styles
import "../../../assets/styles/user/Header.css";

function ServicesPage() {
  return (
    <div>
      {/* helmet - start */}
      <Helmet>
        <title>Kami Perusahaan Mekanikal Elektrikal Terpercaya</title>
        <meta
          name="description"
          content="Usaha kami bergerak di bidang mechanical electrical, jasa instalasi listrik, sipil, plumbing, perawatan gedung, pembangunan gedung, perawataan serta perbaikan AC (Air Conditoner) dan general Ssupply."
        />
        <meta
          name="keywords"
          content="perusahaan, mekanikal, elektrikal, terpercaya, instalasi, listrik, sipil, plumbing, perawatan, gedung, pembangunan, AC, supply"
        />
      </Helmet>
      {/* helmet - end */}

      {/* top bar - start */}
      <Bar />
      <Navigation />
      {/* top bar - end */}

      {/* header - start */}
      <div className="container-fluid page-header mb-5 py-5">
        <div className="container">
          {/* title - start */}
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Layanan Kami
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
                Services
              </li>
              {/* menu - about - end */}
            </ol>
          </nav>
          {/* navigation - end */}
        </div>
      </div>
      {/* header - end */}

      {/* section - start */}
      <Services />
      <Booking />
      {/* section - end */}

      {/* footer - start */}
      <Footer />
      {/* footer - end */}
    </div>
  );
}

export default ServicesPage;
