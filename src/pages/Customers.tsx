import { Column } from "react-table";
import { Index, CommonTableHOC } from "../components";
import { useState, useCallback } from "react";
import { FaTrash } from "react-icons/fa";
import { DataType } from "../utils/interfaces/interface";

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

const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

const arr: DataType[] = [
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img}
        alt="Shoes"
      />
    ),
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img2}
        alt="Shoes"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];
const Customers = () => {
  const [data] = useState<DataType[]>(arr);

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
