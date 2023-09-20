import React from "react";
// import React, { useRef } from "react";
//import { useRouter } from 'next/router';
import { Menu } from "primereact/menu";

function SideBar() {
  //const router = useRouter();
  const items = [
    {
      label: "Dashboard",
      items: [
        {
          label: "Data Booking",
          icon: "pi pi-inbox",
          url: "/portal-admin/dashboard",
        },
        {
          label: "Newsletter",
          icon: "pi pi-send",
          url: "/portal-admin/newletter",
        },
      ],
    },
  ];

  return (
    <div>
      <Menu model={items} />
    </div>
  );
}

export default SideBar;
