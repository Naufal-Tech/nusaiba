import React from "react";
import { Helmet } from "react-helmet";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// import styles
import "@splidejs/react-splide/css";
import "./Explore.css";

function Explore() {
  return (
    <div>
      {/* helmet - start */}
      <Helmet>
        <title>Jelajahi Layanan Kami - Pelayanan Kami</title>
        <meta
          name="description"
          content="Pemasangan AC, isi freon, tukar tambah AC baru/bekas, service AC, wiring panel, penarikan kabel baru, perbaikan listrik yang korslet, desain kelistrikan hunian, service closet, service urinoir, instalasi air, STP dan WTP, service mesin pompa air, service kipas angin, service mesin cuci, service Kulkas, jual beli AC baru dan bekas, jual beli sparepart AC, jual beli Peralatan rumah tangga, sewa AC standing, sewa sound system, sewa peralatan untuk acara pernikahan atau ulang tahun."
        />
      </Helmet>
      {/* helmet - end */}

      {/* component - start */}
      <div className="container-fluid py-5 px-4 px-lg-0" id="service">
        <div className="row g-0">
          {/* experience - start */}
          <div className="col-lg-3 d-none d-lg-flex">
            <div className="d-flex align-items-center justify-content-center bg-primary w-100 h-100">
              <h1
                className="display-3 text-white m-0"
                style={{ transform: "rotate(-90deg)" }}
              >
                Layanan
                <br />
                Berpengalaman
              </h1>
            </div>
          </div>
          {/* experience - end */}

          {/* explore - start */}
          <div className="col-md-12 col-lg-9">
            <div className="ms-lg-5 ps-lg-5">
              {/* title - start */}
              <div
                className="text-center text-lg-start wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <h6 className="text-secondary text-uppercase">
                  Pelayanan Kami
                </h6>
                <h1 className="mb-5">Jelajahi Layanan Kami</h1>
              </div>
              {/* title - end */}

              {/* carousel - start */}
              <div
              // className="owl-carousel service-carousel position-relative wow fadeInUp"
              // data-wow-delay="0.1s"
              >
                <Splide
                  options={{
                    perPage: 3,
                    rewind: true,
                    gap: "1rem",
                    breakpoints: {
                      768: {
                        perPage: 2,
                      },
                      480: {
                        perPage: 1,
                      },
                    },
                  }}
                >
                  {/* card - air conditioner - start */}
                  <SplideSlide>
                    <div className="bg-light p-4">
                      {/* header - start */}
                      <div
                        className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
                        style={{ width: "75px", height: "75px" }}
                      >
                        <i className="fa fa-wind fa-2x text-primary"></i>
                      </div>
                      <h4 className="mb-3">
                        Memperbaiki AC (Air Conditioner){" "}
                      </h4>
                      <p>
                        Service AC profesional, perbaiki AC Anda dengan cepat
                        dan mudah.
                      </p>
                      {/* header - end */}

                      {/* service quality - start */}
                      <div style={{ padding: "1rem 0" }}>
                        <p className="text-primary fw-medium">
                          <i className="fa fa-check text-success me-2"></i>
                          Layanan berkualitas
                        </p>
                        <p className="text-primary fw-medium">
                          <i className="fa fa-check text-success me-2"></i>
                          Kepuasan pelanggan
                        </p>
                        <p className="text-primary fw-medium">
                          <i className="fa fa-check text-success me-2"></i>
                          Dukungan 24/7
                        </p>
                      </div>
                      {/* service quality - end */}

                      {/* read more button - start */}
                      {/* <a href="/" className="btn bg-white text-primary w-100 mt-2">
                      Read More
                      <i className="fa fa-arrow-right text-secondary ms-2"></i>
                    </a> */}
                      {/* read more button - end */}
                    </div>
                  </SplideSlide>
                  {/* card - air condititoner - end */}

                  {/* card - electrical repair - start */}
                  <SplideSlide>
                    <div className="bg-light p-4">
                      {/* header - start */}
                      <div
                        className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
                        style={{ width: "75px", height: "75px" }}
                      >
                        <i className="fa fa-bolt fa-2x text-primary"></i>
                      </div>
                      <h4 className="mb-3">Perbaikan Listrik</h4>
                      <p>
                        Solusi listrik bermasalah? Percayakan perbaikan pada
                        ahli kami. Hemat waktu dan tenaga!
                      </p>
                      {/* header - end */}

                      {/* service quality - start */}
                      <div style={{ padding: "1rem 0" }}>
                        <p className="text-primary fw-medium">
                          <i className="fa fa-check text-success me-2"></i>
                          Layanan berkualitas
                        </p>
                        <p className="text-primary fw-medium">
                          <i className="fa fa-check text-success me-2"></i>
                          Kepuasan pelanggan
                        </p>
                        <p className="text-primary fw-medium">
                          <i className="fa fa-check text-success me-2"></i>
                          Dukungan 24/7
                        </p>
                      </div>
                      {/* service quality - end */}

                      {/* read more button - start */}
                      {/* <a href="/" className="btn bg-white text-primary w-100 mt-2">
                      Read More
                      <i className="fa fa-arrow-right text-secondary ms-2"></i>
                    </a> */}
                      {/* read more button - end */}
                    </div>
                  </SplideSlide>
                  {/* card - electrical rapair - end */}

                  {/* card - plumbing repair - start */}
                  <SplideSlide>
                    <div className="bg-light p-4">
                      {/* header - start */}
                      <div
                        className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
                        style={{ width: "75px", height: "75px" }}
                      >
                        <i className="fa fa-tint fa-2x text-primary"></i>
                      </div>
                      <h4 className="mb-3">Perbaikan Pipa Air</h4>
                      <p>
                        Perbaikan pipa air cepat dan handal dalam 24 jam.
                        Hubungi kami sekarang!
                      </p>
                      {/* header - end */}

                      {/* service quality - start */}
                      <div style={{ padding: "1rem 0" }}>
                        <p className="text-primary fw-medium">
                          <i className="fa fa-check text-success me-2"></i>
                          Layanan berkualitas
                        </p>
                        <p className="text-primary fw-medium">
                          <i className="fa fa-check text-success me-2"></i>
                          Kepuasan pelanggan
                        </p>
                        <p className="text-primary fw-medium">
                          <i className="fa fa-check text-success me-2"></i>
                          Dukungan 24/7
                        </p>
                      </div>
                      {/* service quality - end */}

                      {/* read more button - start */}
                      {/* <a href="/" className="btn bg-white text-primary w-100 mt-2">
                      Read More
                      <i className="fa fa-arrow-right text-secondary ms-2"></i>
                    </a> */}
                      {/* read more button - end */}
                    </div>
                  </SplideSlide>
                  {/* card - plumbing repair - end */}

                  {/* card - building construction repair - start */}
                  <SplideSlide>
                    <div className="bg-light p-4">
                      {/* header - start */}
                      <div
                        className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
                        style={{ width: "75px", height: "75px" }}
                      >
                        <i className="fa fa-helmet-safety fa-2x text-primary"></i>
                      </div>
                      <h4 className="mb-3">Perbaikan Konstruksi Bangunan</h4>
                      <p>
                        Perbaikan konstruksi bangunan? Tidak perlu khawatir,
                        kami ahlinya!
                      </p>
                      {/* header - end */}

                      {/* service quality - start */}
                      <div style={{ padding: "1rem 0" }}>
                        <p className="text-primary fw-medium">
                          <i className="fa fa-check text-success me-2"></i>
                          Layanan berkualitas
                        </p>
                        <p className="text-primary fw-medium">
                          <i className="fa fa-check text-success me-2"></i>
                          Kepuasan pelanggan
                        </p>
                        <p className="text-primary fw-medium">
                          <i className="fa fa-check text-success me-2"></i>
                          Dukungan 24/7
                        </p>
                      </div>
                      {/* service quality - end */}

                      {/* read more button - start */}
                      {/* <a href="/" className="btn bg-white text-primary w-100 mt-2">
                      Read More
                      <i className="fa fa-arrow-right text-secondary ms-2"></i>
                    </a> */}
                      {/* read more button - start */}
                    </div>
                  </SplideSlide>
                  {/* card - building construction repair - end */}
                </Splide>
              </div>
              {/* carousel - end */}
            </div>
          </div>
          {/* explore - end */}
        </div>
      </div>
      {/* component - end */}
    </div>
  );
}

export default Explore;
