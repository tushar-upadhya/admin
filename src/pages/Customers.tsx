import { Column } from "react-table";
import { Index, CommonTableHOC } from "../components";
import { useState, useCallback } from "react";
import { DataType } from "../interfaces/dataType";
import { customersArr } from "../utils/util";

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const Customers = () => {
  const [data] = useState<DataType[]>(customersArr);

  const TABLE = useCallback(
    CommonTableHOC<DataType>(
      columns,
      data,
      "dashboard_product_box",
      "Customers",
      true
    ),
    []
  );
  return (
    <div className="admin_container">
      <Index />

      <main>{TABLE()}</main>
    </div>
  );
};

export default Customers;
