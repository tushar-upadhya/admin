import Li from "../common/CommonLi";

import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";

import { Location } from "react-router-dom";
import CommonHeader from "../common/CommonHeader";

interface IChartsProps {
  location: Location;
}

const Charts = ({ location }: IChartsProps) => {
  return (
    <div>
      <CommonHeader title="Charts" />
      <ul>
        <Li
          url="/admin/chart/bar"
          text="Bar"
          Icon={FaChartBar}
          location={location}
        />
        <Li
          url="/admin/chart/pie"
          text="Pie"
          Icon={FaChartPie}
          location={location}
        />
        <Li
          url="/admin/chart/line"
          text="Line"
          Icon={FaChartLine}
          location={location}
        />
      </ul>
    </div>
  );
};

export default Charts;
