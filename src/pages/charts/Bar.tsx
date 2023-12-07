import { Index, CommonBarCharts, CommonHeader } from "../../components";
import { months } from "../../utils/util";

const Bar = () => {
  return (
    <div className="admin_container">
      <Index />

      <main className="chart-container">
        <CommonHeader title="Bar Charts" />

        <section>
          <CommonBarCharts
            data_1={[200, 444, 343, 556, 778, 455, 990]}
            data_2={[300, 144, 433, 655, 237, 755, 190]}
            title_1="Products"
            title_2="Users"
            bgColor_1={`hsl(260,50%,30%)`}
            bgColor_2={`hsl(360,90%,90%)`}
          />

          <CommonHeader title="Top Selling Products & Top Customers" />
        </section>
        <section>
          <CommonBarCharts
            horizontal={true}
            data_1={[
              200, 444, 343, 556, 778, 455, 990, 444, 122, 334, 890, 909,
            ]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor_1={`hsl(180, 40%, 50%)`}
            bgColor_2=""
            labels={months}
          />

          <CommonHeader title="Orders throughout the year" />
        </section>
      </main>
    </div>
  );
};

export default Bar;
