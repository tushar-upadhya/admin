import { useCallback } from "react";
import { CommonTableHOC, Index } from "../components";
import { Column } from "react-table";

import { useState } from "react";
import { Link } from "react-router-dom";

import { FaPlus } from "react-icons/fa";
import { DataType } from "../interfaces/dataType";
import { productsArr } from "../utils/util";

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const Products = () => {
  const [data] = useState<DataType[]>(productsArr);

  const TABLE = useCallback(
    CommonTableHOC<DataType>(
      columns,
      data,
      "dashboard_product_box",
      "Products",
      true
    ),
    []
  );

  return (
    <div className="admin_container">
      <Index />

      <main>{TABLE()}</main>
      <Link to="/product/new" className="create_product_btn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
