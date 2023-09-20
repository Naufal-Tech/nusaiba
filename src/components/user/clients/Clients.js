import React from "react";

// import styles
import "./Clients.css";

// import images
import bri from "../../../assets/images/logo/bank-bri.png";
import bi from "../../../assets/images/logo/bank-indonesia.png";
import gramedia from "../../../assets/images/logo/gramedia.png";
import lkh from "../../../assets/images/logo/kementrian-lkh.png";
import kominfo from "../../../assets/images/logo/kominfo.png";
import maybank from "../../../assets/images/logo/maybank.png";
import pertamina from "../../../assets/images/logo/pertamina.png";
import pos from "../../../assets/images/logo/pos-indonesia.png";
import kai from "../../../assets/images/logo/pt-kai.png";
import shell from "../../../assets/images/logo/shell.png";
import sriwijaya from "../../../assets/images/logo/sriwijaya-air.png";
import telkom from "../../../assets/images/logo/telkom-indonesia.png";
import wika from "../../../assets/images/logo/wika.png";

function Clients() {
  return (
    <div className="container-xxl py-5" id="clients">
      <div className="container">
        {/* title - start */}
        <div className="text-center">
          <h6 className="text-secondary text-uppercase">Klien Kami</h6>
          <h1 className="mb-5">Klien Kami yang Berharga</h1>
        </div>
        {/* title - end */}

        {/* our clients - start */}
        <div className="row gap-5 justify-content-center logo-clients">
          <img className="col" src={bri} alt="" />
          <img className="col" src={bi} alt="" />
          <img className="col" src={gramedia} alt="" />
          <img className="col" src={lkh} alt="" />
          <img className="col" src={kominfo} alt="" />
          <img className="col" src={maybank} alt="" />
          <img className="col" src={pertamina} alt="" />
          <img className="col" src={pos} alt="" />
          <img className="col" src={kai} alt="" />
          <img className="col" src={shell} alt="" />
          <img className="col" src={sriwijaya} alt="" />
          <img className="col" src={telkom} alt="" />
          <img className="col" src={wika} alt="" />

          {/* duplicats */}
          <img className="col" src={bri} alt="" />
          <img className="col" src={bi} alt="" />
          <img className="col" src={gramedia} alt="" />
          <img className="col" src={lkh} alt="" />
          <img className="col" src={kominfo} alt="" />
          <img className="col" src={maybank} alt="" />
          <img className="col" src={pertamina} alt="" />
          <img className="col" src={pos} alt="" />
          <img className="col" src={kai} alt="" />
          <img className="col" src={shell} alt="" />
          <img className="col" src={sriwijaya} alt="" />
        </div>
        {/* our clients - end */}
      </div>
    </div>
  );
}

export default Clients;
