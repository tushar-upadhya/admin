import Li from "../common/CommonLi";

import { FaGamepad, FaStopwatch } from "react-icons/fa";
import { RiCoupon3Fill } from "react-icons/ri";

import { Location } from "react-router-dom";
import CommonHeader from "../common/CommonHeader";

interface IAppsProps {
  location: Location;
}

const Apps = ({ location }: IAppsProps) => {
  return (
    <div>
      <CommonHeader title="Apps" />
      <ul>
        <Li
          url="/app/stopwatch"
          text="Stopwatch"
          Icon={FaStopwatch}
          location={location}
        />
        <Li
          url="/app/coupon"
          text="Coupon"
          Icon={RiCoupon3Fill}
          location={location}
        />
        <Li url="/app/toss" text="Toss" Icon={FaGamepad} location={location} />
      </ul>
    </div>
  );
};

export default Apps;
