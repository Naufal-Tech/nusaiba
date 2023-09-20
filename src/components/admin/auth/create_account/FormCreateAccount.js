import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

// styles from prime react
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function FormCreateAccount() {
  const [password, setPassword] = useState("");
  const [generatePassword, setGeneratePassword] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);

  // role accounts
  const roles = [
    { name: "Master", code: "MSTR" },
    { name: "Super Admin", code: "SADM" },
    { name: "Admin", code: "ADM" },
  ];

  // generate rendom password

  return (
    <div>
      {/* form create account - start */}
      <form className="card flex justify-content-center text-center gap-3 p-5">
        {/* title - start */}
        <h1 className="my-3">Create Account</h1>
        {/* title - end */}

        {/* form full name - start */}
        <div className="p-inputgroup">
          {/* icon full name - start */}
          <span className="p-inputgroup-addon ">
            <i className="pi pi-id-card p-float-label"></i>
          </span>
          {/* icon full name - end */}

          {/* input full name - start  */}
          <InputText placeholder="Full Name" />
          {/* input full name - end  */}
        </div>
        {/* form full name - end */}

        {/* form username - start */}
        <div className="p-inputgroup">
          {/* icon username - start */}
          <span className="p-inputgroup-addon ">
            <i className="pi pi-user p-float-label"></i>
          </span>
          {/* icon username - end */}

          {/* input username - start  */}
          <InputText placeholder="Username" />
          {/* input username - end  */}
        </div>
        {/* form username - end */}

        {/* form e-mail - start */}
        <div className="p-inputgroup">
          {/* icon e-mail - start */}
          <span className="p-inputgroup-addon ">
            <i className="pi pi-at p-float-label"></i>
          </span>
          {/* icon e-mail - end */}

          {/* input e-mail - start  */}
          <InputText placeholder="E-mail" />
          {/* input e-mail - end  */}
        </div>
        {/* form e-mail - end */}

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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            toggleMask
          />
          {/* input password - end */}

          {/* button generate random password - start */}
          <Button onClick={generatePassword}>
            <i className="pi pi-refresh" style={{ rotate: "120deg" }}></i>
          </Button>
          {/* button generate random password - end */}
        </div>
        {/* form password - ends */}

        {/* role account - start */}
        <Dropdown
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.value)}
          options={roles}
          optionLabel="name"
          placeholder="Role"
          // className="w-full md:w-14rem"
        />
        {/* role account - end */}

        {/* button submit - start */}
        <Button
          className="my-3"
          label="Submit"
          type="submit"
          icon="pi pi-check"
        />
        {/* button submit - end */}
      </form>
      {/* form create account - end */}
    </div>
  );
}

export default FormCreateAccount;
