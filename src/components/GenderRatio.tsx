import { CommonDoughnutCharts, CommonHeader } from ".";

import { BiMaleFemale } from "react-icons/bi";

const GenderRatio = () => {
  return (
    <div className="gender_chart">
      <CommonHeader title="Gender Ratio" />

      <CommonDoughnutCharts
        labels={["Female", "Male"]}
        data={[12, 19]}
        backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
        cutout={90}
      />

      <p>
        <BiMaleFemale />
      </p>
    </div>
  );
};

export default GenderRatio;
