import React from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import axios from "axios";

// import styles
import "./Booking.css";

function Booking() {
  // date picker can't select days before today
  const minDate = new Date().toISOString().split("T")[0];

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://159.65.133.142/api/v1/booking", data)
      .then((response) => {
        toast.success("Booking berhasil!");
        console.log(response.data);
      })
      .catch((error) => {
        toast.error("Booking tidak berhasil!");
        console.log(error);
      });
  };

  return (
    <div>
      {/* helmet - start */}
      <Helmet>
        <title>Booking Layanan Darurat - 24 Jam 7 Hari Seminggu</title>
        <meta name="description" content="Book our emergency services 24/7" />
      </Helmet>
      {/* helmet - end */}

      {/* component - start */}
      <div className="container-fluid my-5 px-0" id="booking">
        {/* video player - start */}
        <div className="video wow fadeInUp" data-wow-delay="0.1s">
          <button
            type="button"
            className="btn-play"
            data-bs-toggle="modal"
            data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
            data-bs-target="#videoModal"
          >
            <span></span>
          </button>

          {/* modal - start */}
          <div
            className="modal fade"
            id="videoModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content rounded-0">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Youtube Video
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {/* <!-- 16:9 aspect ratio --> */}
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      id="video"
                      src=""
                      title="video"
                      allowFullScreen
                      allowscriptaccess="always"
                      allow="autoplay"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            {/* modal - end */}
          </div>

          {/* title - start */}
          <h1 className="text-white mb-4">Layanan Darurat</h1>
          <h3 className="text-white mb-0">24 Jam 7 Hari Seminggu</h3>
          {/* title - end */}
        </div>
        {/* video player - end */}

        {/* booking form - start */}
        <div
          className="container position-relative wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ marginTop: "-6rem" }}
        >
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bg-light text-center p-5">
                {/* title form - start */}
                <h1 className="mb-4">Booking Layanan Kami</h1>
                {/* title form - end */}

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
                <ToastContainer />
                {/* toastify - end */}

                {/* input form booking - start */}
                <form className="row g-4" onSubmit={handleSubmit(onSubmit)}>
                  {/* input - full name - start */}
                  <div className="col-12 col-sm-6">
                    <input
                      className="p-3 border-0 w-100"
                      type="text"
                      placeholder="Nama Lengkap"
                      {...register("fullname", {
                        required: true,
                      })}
                    />

                    <div>
                      {errors.fullname &&
                        errors.fullname.type === "required" && (
                          <span className="text-danger">
                            Harap masukan nama lengkap
                          </span>
                        )}
                    </div>
                  </div>
                  {/* input - full name - end */}

                  {/* input - e-mail - start */}
                  <div className="col-12 col-sm-6">
                    <input
                      className="p-3 border-0 w-100"
                      type="email"
                      placeholder="E-mail"
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
                  </div>

                  {/* input - e-mail - end */}

                  {/* input - phone number - start */}
                  <div className="col-12 col-sm-6">
                    <input
                      className="p-3 border-0 w-100"
                      placeholder="Nomor Telepon"
                      {...register("phone", {
                        required: true,
                        pattern: /^08\d{8,}$/,
                      })}
                    />

                    <div>
                      {errors.phone && errors.phone.type === "required" && (
                        <span className="text-danger">
                          Harap masukan nomor telepon
                        </span>
                      )}
                      {errors.phone && errors.phone.type === "pattern" && (
                        <span className="text-danger">
                          Harap masukan nomor telepon yang benar
                        </span>
                      )}
                    </div>
                  </div>
                  {/* input - phone number - end */}

                  {/* input - datepicker - start */}
                  <div className="col-12 col-sm-6">
                    <input
                      className="p-3 border-0 w-100"
                      type="date"
                      placeholder="Tanggal"
                      min={minDate}
                      {...register("booking_date", {
                        required: true,
                      })}
                    />

                    <div>
                      {errors.booking_date &&
                        errors.booking_date.type === "required" && (
                          <span className="text-danger">
                            Harap masukan tanggal booking
                          </span>
                        )}
                    </div>
                  </div>
                  {/* input - datepicker - end */}

                  {/* input - service options - start  */}
                  <div className="col-12">
                    <select
                      className="form-select p-3 border-0 w-100 text-center"
                      aria-label="Pilih Layanan"
                      {...register("layanan", { required: true })}
                    >
                      <option>Pilih Layanan</option>
                      <option defaultValue="Air Conditioner">
                        Air Conditioner
                      </option>
                      <option defaultValue="Kelistrikan">Kelistrikan</option>
                      <option defaultValue="Konstruksi Bangunan">
                        Konstruksi Bangunan
                      </option>
                      <option defaultValue="Perbaikan Pipa Air">
                        Perbaikan Pipa Air
                      </option>
                      <option defaultValue="Perbaikan Mesin">
                        Perbaikan Mesin
                      </option>
                      <option defaultValue="Jual">Jual</option>
                      <option defaultValue="Sewa">Sewa</option>
                    </select>

                    <div>
                      {errors.booking_date &&
                        errors.booking_date.type === "required" && (
                          <span className="text-danger">
                            Harap masukan layanan booking
                          </span>
                        )}
                    </div>
                  </div>
                  {/* input - service options - end  */}

                  {/* input - special request - start */}
                  <div>
                    <textarea
                      className="form-control p-3 border-0 w-100"
                      type="text"
                      placeholder="Permintaan"
                      style={{ height: "112px" }}
                      {...register("permintaan_special")}
                    />
                  </div>
                  {/* input - special request - end */}

                  {/* submit button - start */}
                  <div>
                    <button
                      className="btn btn-primary w-100"
                      type="submit"
                      style={{ height: "56px" }}
                    >
                      Kirim
                    </button>
                  </div>
                  {/* submit button - end */}
                </form>
                {/* input form booking - end */}
              </div>
            </div>
          </div>
          {/* booking form - end */}
        </div>
      </div>
      {/* component - end */}
    </div>
  );
}

export default Booking;
