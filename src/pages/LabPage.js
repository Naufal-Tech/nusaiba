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
            {errors.fullname && errors.fullname.type === "required" && (
              <span className="text-danger">Harap masukan nama lengkap</span>
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
              <span className="text-danger">Harapn masukkan alamat e-mail</span>
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
              <span className="text-danger">Harap masukan nomor telepon</span>
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
              <span className="text-danger">Harap masukan subjek</span>
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
  );
}

export default ContactUs;
