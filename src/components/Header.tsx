import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";

import userImage from "../assets/tushar.png";

const Header = () => {
  return (
    <div className="bar">
      <BsSearch />

      <input type="text" placeholder="Search " />

      <FaRegBell />

      <img src={userImage} alt="user" />
    </div>
  );
};

export default Header;
