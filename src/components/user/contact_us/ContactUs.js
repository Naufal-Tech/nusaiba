// import React, { useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import axios from "axios";

// import styles
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://159.65.133.142/api/v1/contact-us", data)
      .then((response) => {
        toast.success("Pesan telah terkirim!");
        console.log(response.data);
      })
      .catch((error) => {
        toast.error("Gagal mengirim pesan!");
        console.log(error);
      });
  };

  return (
    <div>
      {/* hero - start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              {/* title - start */}
              <h6 className="text-secondary text-uppercase">Hubungi Kami</h6>
              <h1 className="mb-4">Hubungi untuk Permintaan Apa Pun</h1>
              {/* title - end */}

              {/* description - start */}
              <p className="mb-4">
                Jika Anda memiliki kebutuhan atau permintaan apa pun yang perlu
                dipenuhi, jangan ragu untuk menghubungi kami. Tim kami siap
                melayani dengan sepenuh hati dan membantu Anda dalam segala hal
                yang Anda butuhkan.
              </p>
              {/* description - end */}

              {/* google maps - start */}
              {/* google maps cannot display - must have a key */}
              <iframe
                className="bg-light"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.8691846842585!2d106.79567664766799!3d-6.200656586344969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6befa400001%3A0x62d93d9ffc4a31c9!2s1%2C%2035th%20Fl%2C%20Grand%20Slipi%20Tower%2C%20Jl.%20Letjen%20S.%20Parman%20No.22%2C%20RW.4%2C%20Palmerah%2C%20Kec.%20Palmerah%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011480!5e0!3m2!1sen!2sid!4v1680503524162!5m2!1sen!2sid"
                title="maps"
                width="100%"
                height="400vh"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* google maps - end */}
            </div>

            {/* form card- start */}
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-light p-5 h-100 d-flex align-items-center">
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
                {/* toastify - end */}

                {/* form - start */}
                <form className="row g-4" onSubmit={handleSubmit(onSubmit)}>
                  {/* input - full name - start */}
                  <div className="col-12">
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
                  <div className="col-12">
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
                  <div className="col-12">
                    <input
                      className="p-3 border-0 w-100"
                      type="tel"
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

                  {/* input - subject - start */}
                  <div className="col-12">
                    <input
                      className="p-3 border-0 w-100"
                      type="text"
                      placeholder="Subjek"
                      {...register("subject", { required: true })}
                    />

                    <div>
                      {errors.subject && errors.subject.type === "required" && (
                        <span className="text-danger">
                          Harap masukan subjek
                        </span>
                      )}
                    </div>
                  </div>
                  {/* input - subject - end */}

                  {/* input - massage - start */}
                  <div className="col-12">
                    <textarea
                      className="form-control p-3 border-0 w-100"
                      type="text"
                      placeholder="Pesan"
                      style={{ height: "112px" }}
                      {...register("pesan", { required: true })}
                    />

                    <div>
                      {errors.pesan && errors.pesan.type === "required" && (
                        <span className="text-danger">Harap masukan pesan</span>
                      )}
                    </div>
                  </div>
                  {/* input - massage - end */}

                  {/* sent button - start */}
                  <div>
                    <button
                      className="btn btn-primary w-100"
                      type="submit"
                      style={{ height: "56px" }}
                    >
                      Kirim
                    </button>
                  </div>
                  {/* sent button - end */}
                </form>
                {/* form - end */}
              </div>
            </div>
            {/* form cart - end */}
          </div>
        </div>
      </div>
      {/* hero - end */}
    </div>
  );
}

export default ContactUs;
