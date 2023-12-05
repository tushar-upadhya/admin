import {
  CommonDoughnutCharts,
  CommonHeader,
  CommonPieCharts,
  Index,
} from "../../components";

import { categories } from "../../json/data.json";

const Pie = () => {
  return (
    <div className="admin_container">
      <Index />

      <main className="chart_container">
        <CommonHeader title="Pie & Doughnut Charts" />

        <section>
          <div>
            <CommonPieCharts
              labels={["Processing", "Shipped", "Delivered"]}
              data={[12, 9, 13]}
              backgroundColor={[
                `hsl(110,80%, 80%)`,
                `hsl(110,80%, 50%)`,
                `hsl(110,40%, 50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <CommonHeader title="Order Fulfillment Ratio" />
        </section>

        <section>
          <div>
            <CommonDoughnutCharts
              labels={categories.map((i) => i.heading)}
              data={categories.map((i) => i.value)}
              backgroundColor={categories.map(
                (i) => `hsl(${i.value * 4},${i.value}%, 50%)`
              )}
              legends={false}
              offset={[0, 0, 0, 80]}
            />
          </div>
          <CommonHeader title="Product Categories Ratio" />
        </section>
      </main>
    </div>
  );
};

export default Pie;
