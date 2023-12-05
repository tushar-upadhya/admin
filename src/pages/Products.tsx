import { useCallback } from "react";
import { CommonTableHOC, Index } from "../components";

import { useState } from "react";
import { Link } from "react-router-dom";

import { FaPlus } from "react-icons/fa";
import { DataType } from "../interfaces/dataType";
import { ProductColumns, productsArr } from "../utils/util";

const Products = () => {
  const [data] = useState<DataType[]>(productsArr);

  const TABLE = useCallback(
    CommonTableHOC<DataType>(
      ProductColumns,
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
