import { CommonBarCharts } from "..";

const RevenueChart = () => {
  return (
    <div className="revenue_chart">
      <h2>Revenue & Transaction</h2>
      <CommonBarCharts
        data_2={[300, 144, 433, 655, 237, 755, 190]}
        data_1={[200, 444, 343, 556, 778, 455, 990]}
        title_1="Revenue"
        title_2="Transaction"
        bgColor_1="rgb(0,115,255)"
        bgColor_2="rgba(53,162,235,0.8)"
      />
    </div>
  );
};

export default RevenueChart;
