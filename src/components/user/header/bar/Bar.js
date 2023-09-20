import React from "react";

// import styles
import "./Bar.css";

// import imagess
import nusaiba from "../../../../assets/images/logo/nusaiba-amerta-teknik.jpeg";

function Bar() {
  return (
    <div className="container-fluid bg-light d-none d-lg-block">
      <div className="row align-items-center top-bar">
        {/* title - start */}
        <div className="col-lg-3 col-md-12 text-center text-lg-start bar-title">
          <a href="/" className="navbar-brand m-0 p-0">
            <h1 className="text-primary m-0">
              <img
                src={nusaiba}
                alt=""
                style={{
                  height: "3rem",
                  marginRight: "0.5rem",
                }}
              />
              PT Nusaiba Amerta Teknik
            </h1>
          </a>
        </div>
        {/* title - end */}

        <div className="col-lg-9 col-md-12 text-end">
          {/* location - start */}
          <div className="h-100 d-inline-flex align-items-center me-4 bar-loc">
            <i className="fa fa-map-marker-alt text-primary me-2"></i>
            <p className="m-0">Jakarta Barat, Indonesia</p>
          </div>
          {/* location - end */}

          {/* e-mail - start */}
          <div className="h-100 d-inline-flex align-items-center me-4 bar-mail">
            <i className="far fa-envelope-open text-primary me-2"></i>
            <p className="m-0">pt.nusaibaamertateknik@gmail.com</p>
          </div>
          {/* e-mail - end */}

          {/* social media - start */}
          <div className="h-100 d-inline-flex align-items-center">
            {/* facebook - start */}
            <a
              className="btn btn-sm-square bg-white text-primary me-1"
              href="/"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            {/* facebook - end */}

            {/* twitter - start */}
            <a
              className="btn btn-sm-square bg-white text-primary me-1"
              href="/"
            >
              <i className="fab fa-twitter"></i>
            </a>
            {/* twitter - end */}

            {/* instagram - start */}
            <a
              className="btn btn-sm-square bg-white text-primary me-1"
              href="/"
            >
              <i className="fab fa-instagram"></i>
            </a>
            {/* instagram - end */}

            {/* linkedin - start */}
            <a
              className="btn btn-sm-square bg-white text-primary me-0"
              href="/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            {/* linkedin - end */}
          </div>
          {/* social media - end */}
        </div>
      </div>
    </div>
  );
}

export default Bar;
