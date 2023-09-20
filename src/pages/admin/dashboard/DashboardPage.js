import React from "react";

// import components
import SideBar from "../../../components/admin/header/navigation/Navigation";
import DataBooking from "../../../components/admin/data/booking/DataBooking";

function DashboardPage() {
  return (
    <div className="container my-3">
      <div className="row">
        {/* side bar - start */}
        <div className="col-2">
          <SideBar />
        </div>
        {/* side bar - end */}

        {/* table - start */}
        <div className="col">
          <DataBooking />
        </div>
        {/* table - end */}
      </div>
    </div>
  );
}

export default DashboardPage;
