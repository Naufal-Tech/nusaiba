import React from "react";
import { Helmet } from "react-helmet";

// import styles
import "./About.css";

// import images
import img01 from "../../../assets/images/activity/WhatsApp Image 2023-03-28 at 21.34.19.jpeg";
import img02 from "../../../assets/images/activity/WhatsApp Image 2023-03-28 at 21.34.14 (2).jpeg";

function About() {
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

      {/* component - start */}
      <div className="container-xxl py-5" id="about">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-secondary text-uppercase">Tentang Kami</h6>
              <h1 className="mb-4">
                Kami Perusahaan Mekanikal Elektrikal Terpercaya
              </h1>
              <p className="mb-4">
                Usaha kami bergerak di bidang mechanical electrical, jasa
                instalasi listrik, sipil, plumbing, perawatan gedung,
                pembangunan gedung, perawataan serta perbaikan AC (Air
                Conditoner) dan general Ssupply. Kami memiliki komitmen yang
                tinggi terhadap customer yang memerlukan jasa dan bantuan kami.
              </p>
              <p className="fw-medium text-primary">
                <i className="fa fa-check text-success me-3"></i>Perumahan &
                komersial
              </p>
              <p className="fw-medium text-primary">
                <i className="fa fa-check text-success me-3"></i>Layanan
                berkualitas di harga terjangkau
              </p>
              <p className="fw-medium text-primary">
                <i className="fa fa-check text-success me-3"></i>Segera 24/7
                layanan darurat
              </p>
              <div className="bg-primary d-flex align-items-center p-4 mt-5">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-phone-alt fa-2x text-primary"></i>
                </div>
                <div className="ms-3">
                  <p className="fs-5 fw-medium mb-2 text-white">
                    Layanan Darurat 24/7
                  </p>
                  <h3 className="m-0" style={{ color: "var(--secondary)" }}>
                    021 - 29021873
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-4" style={{ minHeight: "500px" }}>
              <div
                className="position-relative h-100 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src={img01}
                  style={{ objectFit: "cover", padding: "0 0 50px 100px" }}
                  alt=""
                />
                <img
                  className="position-absolute start-0 bottom-0 img-fluid bg-white pt-2 pe-2 w-50 h-50"
                  src={img02}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* component - end */}
    </div>
  );
}

export default About;
