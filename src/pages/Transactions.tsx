import { Index, CommonTableHOC } from "../components";
import { Column } from "react-table";
import { useState, useCallback } from "react";
import { DataType } from "../interfaces/dataType";
import { transactionsArr } from "../utils/util";

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const Transactions = () => {
  const [data] = useState<DataType[]>(transactionsArr);

  const TABLE = useCallback(
    CommonTableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
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
