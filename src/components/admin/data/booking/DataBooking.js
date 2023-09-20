// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Paginator } from "primereact/paginator";
import axios from "axios";

function DataBooking() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("").then((data) => setProducts(data));
  }, []);

  // pagination
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };
  return (
    <div>
      {/* data booing customer - start */}
      <div
      // className="card"
      >
        <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
          <Column field="number" header="No."></Column>
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="address" header="Address"></Column>
          <Column field="date" header="Date"></Column>
          <Column field="service" header="Service"></Column>
          <Column field="note" header="Note"></Column>
        </DataTable>
      </div>
      {/* data booing customer - end */}

      {/* pagination - start */}
      <div className="my-3">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={120} // contoh jika terdapat 120 data
          rowsPerPageOptions={[10, 20, 30]}
          onPageChange={onPageChange}
        />
      </div>
      {/* pagination - end */}
    </div>
  );
}

export default DataBooking;
