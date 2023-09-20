// import React, { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

// import styles
import "react-toastify/dist/ReactToastify.css";
import "./Footer.css";

// import images
import NPN from "../../../assets/images/logo/npn-dev-club.jpeg";

function Footer() {
  // current year
  const currentYear = new Date().getFullYear();

  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://159.65.133.142/api/v1/newsletter", data)
      .then((response) => {
        toast.success("Berlangganan newsletter berhasil");
        reset();
        console.log(response.data);
      })
      .catch((error) => {
        toast.error("Berlangganan newsletter tidak berhasil");
        console.log(error);
      });
  };

  return (
    <div
      className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
      // data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          {/* address - start */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Alamat</h4>

            {/* address - start */}
            <div className="row align-items-center">
              <i className="col-1 fa fa-map-marker-alt me-2"></i>
              <p className="col mb-2">
                Jl Letjend S. Parman Kav 22-24 <br />
                Jakarta Barat, 11480
              </p>
            </div>
            {/* address - end */}

            {/* phone number - start */}
            <div className="row align-items-center">
              <i className="col-1 fa fa-phone-alt me-2"></i>
              <p className="col mb-2">021 - 29021873</p>
            </div>
            {/* phone number - end */}

            {/* e-mail address - start */}
            <div className="row align-items-center">
              <i className="col-1 fa fa-envelope me-2"></i>
              <p className="col mb-2">
                pt.nusaibaamertateknik
                <br />
                @gmail.com
              </p>
            </div>
            {/* e-mail address - end */}

            {/* social media - start */}
            <div className="d-flex pt-2 gap-2">
              {/* facebook - start */}
              <a className="btn btn-outline-light btn-social" href="/">
                <i className="fab fa-facebook-f"></i>
              </a>
              {/* facebook - end */}

              {/* twitter - start */}
              <a className="btn btn-outline-light btn-social" href="/">
                <i className="fab fa-twitter"></i>
              </a>
              {/* twitter - end */}

              {/* instagram - start */}
              <a className="btn btn-outline-light btn-social" href="/">
                <i className="fab fa-instagram"></i>
              </a>
              {/* instagram - end */}

              {/* linkedin - start */}
              <a className="btn btn-outline-light btn-social" href="/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              {/* linkedin - end */}
            </div>
            {/* social media - end */}
          </div>
          {/* address - end */}

          {/* opening hours - start */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Jam Buka</h4>

            {/* weekday - start */}
            <h6 className="text-light">Senin - Jum'at:</h6>
            <p className="mb-4">09.00 AM - 09.00 PM</p>
            {/* weekday - end */}

            {/* weekend - start */}
            <h6 className="text-light">Sabtu - Minggu:</h6>
            <p className="mb-0">09.00 AM - 12.00 PM</p>
            {/* weekend - end */}
          </div>
          {/* opening hours - end */}

          {/* service - start */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Layanan</h4>
            <a className="btn btn-link" href="/services">
              Air Conditioner
            </a>
            <a className="btn btn-link" href="/services">
              Kelistrikan
            </a>
            <a className="btn btn-link" href="/services">
              Konstruksi Bangunan
            </a>
            <a className="btn btn-link" href="/services">
              Perbaikan Pipa Air
            </a>
            <a className="btn btn-link" href="/services">
              Perbaikan Mesin
            </a>
            <a className="btn btn-link" href="/services">
              Sewa
            </a>
            <a className="btn btn-link" href="/services">
              Jual
            </a>
          </div>
          {/* service - end */}

          {/* newsletter - start */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Newsletter</h4>
            <p>
              Jangan lewatkan penawaran terbaru kami, daftar newsletter
              sekarang!
            </p>

            <div
              className="position-relative mx-auto"
              style={{ marginTop: "1rem" }}
            >
              {/* toastify - start */}
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="colored"
              />
              {/* Same as */}
              <ToastContainer />
              {/* toastify - end */}

              {/* form newsletter - start */}
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* input - e-mail - start */}
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="E-mail"
                  style={{ height: "3.375rem", border: "0" }}
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />

                <div>
                  {errors.email && errors.email.type === "required" && (
                    <span className="text-danger">
                      Harapn masukkan alamat e-mail
                    </span>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <span className="text-danger">
                      Harap masukkan alamat e-mail yang benar
                    </span>
                  )}
                </div>
                {/* input - e-mail - end */}
                {/* submit button - start */}
                <button
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2 "
                  type="submit"
                  style={{ height: "2.375rem" }}
                >
                  Berlangganan
                </button>
              </form>
              {/* form newsletter - end */}
            </div>
          </div>
          {/* newsletter - end */}
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          <div className="row">
            {/* copyright - start */}
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              PT Nusaiba Amerta Teknik &copy; {currentYear} All Rights Reserved
            </div>
            {/* copyright - end */}

            {/* powered by - start */}
            <div className="col-md-6 text-center text-md-end">
              Powered By
              <a href="/" style={{ textDecoration: "none" }}>
                {" "}
                <img
                  src={NPN}
                  alt=""
                  style={{ width: "1rem", borderRadius: "50px" }}
                />{" "}
                NPN Dev Club
              </a>
            </div>
            {/* powered by - end */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
