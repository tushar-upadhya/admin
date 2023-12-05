import { Index, CommonTableHOC } from "../components";
import { useState, useCallback } from "react";
import { DataType } from "../interfaces/dataType";
import { CustomerColumns, customersArr } from "../utils/util";

const Customers = () => {
  const [data] = useState<DataType[]>(customersArr);

  const TABLE = useCallback(
    CommonTableHOC<DataType>(
      CustomerColumns,
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
