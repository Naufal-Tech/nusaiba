import React from "react";

function FooterAdmin() {
  return (
    <div className="m-3">
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              PT Nusaiba Amerta Teknik &copy; 2022 All Rights Reserved
            </div>
            <div className="col-md-6 text-center text-md-end">
              Powered By{" "}
              <a className="border-bottom" href="/">
                NPN Dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterAdmin;
