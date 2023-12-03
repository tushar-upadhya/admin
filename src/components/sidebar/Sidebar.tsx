import Li from "../common/CommonLi";

import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";

import { Location } from "react-router-dom";
import CommonHeader from "../common/CommonHeader";

interface ISidebarProps {
  location: Location;
}

const Sidebar = ({ location }: ISidebarProps) => {
  return (
    <div>
      <CommonHeader title="Dashboard" />
      <ul>
        <Li
          url="/"
          text="Dashboard"
          Icon={RiDashboardFill}
          location={location}
        />
        <Li
          url="/product"
          text="Product"
          Icon={RiShoppingBag3Fill}
          location={location}
        />
        <Li
          url="/customer"
          text="Customer"
          Icon={IoIosPeople}
          location={location}
        />
        <Li
          url="/transaction"
          text="Transaction"
          Icon={AiFillFileText}
          location={location}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
