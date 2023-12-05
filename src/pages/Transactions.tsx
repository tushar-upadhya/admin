import { Index, CommonTableHOC } from "../components";
import { useState, useCallback } from "react";
import { DataType } from "../interfaces/dataType";
import { columns, transactionsArr } from "../utils/util";

const Transactions = () => {
  const [data] = useState<DataType[]>(transactionsArr);

  const TABLE = useCallback(
    CommonTableHOC<DataType>(
      columns,
      data,
      "dashboard_product_box",
      "Transactions",
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

export default Transactions;
