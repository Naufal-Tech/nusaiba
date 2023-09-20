import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
// import env from "react-dotenv";
// import axios from "axios";

// styles
// import styles from "./FormLogin.module.css";

// images
// import logo from "../../../../assets/images/logo/nusaiba-amerta-teknik.jpeg";

function FormLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post("/api/login", { username, password });
      const res = username === "admin" && password === "admin";
      localStorage.setItem("auth", password);
      navigate("/portal-admin/dashboard");
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {/* form login account - start */}
      <form
        className="card flex justify-content-center gap-3 p-5"
        onSubmit={handleSubmit}
      >
        {/* title - start */}
        <h1 className="my-3 text-center">Login Account</h1>
        {/* title - end */}

        {/* form username - start */}
        <div className="p-inputgroup">
          {/* icon username - start */}
          <span className="p-inputgroup-addon ">
            <i className="pi pi-user p-float-label"></i>
          </span>
          {/* icon username - end */}

          {/* input username - start  */}
          <InputText
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* input username - end  */}
        </div>
        {/* form username - end */}

        {/* form password - start */}
        <div className="p-inputgroup">
          {/* icon password - start */}
          <span className="p-inputgroup-addon">
            <i className="pi pi-key"></i>
          </span>
          {/* icon password - end */}

          {/* input password - start */}
          <Password
            placeholder="Password"
            feedback={false}
            toggleMask
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* input password - end */}
        </div>
        {/* form password - ends */}

        {/* forgot password - start */}
        <div>
          <a href="/http://localhost:3000/portal-admin/forget-password">
            Forget Password?
          </a>
        </div>
        {/* forgot password - end */}

        {/* button submit - start */}
        <Button
          className="my-3"
          icon="pi pi-check"
          label="Submit"
          type="submit"
        />
        {/* button submit - end */}
      </form>
      {/* form login account - end */}
    </div>
  );
}

export default FormLogin;
