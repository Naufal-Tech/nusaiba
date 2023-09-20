import React from "react";

// import components
import FormLogin from "../../../../components/admin/auth/login/FormLogin";
// import FooterAdmin from "../../../../components/admin/footer/Footer";

// import styles
import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <div>
      {/* section - start */}
      <div className={`${styles["login-form"]}`}>
        <FormLogin />
      </div>
      {/* section - end */}

      {/* footer - start */}
      {/* <FooterAdmin /> */}
      {/* footer - end */}
    </div>
  );
}

export default LoginPage;
