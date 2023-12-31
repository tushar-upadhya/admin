import { Index, CommonLineCharts, CommonHeader } from "../../components";
import { months } from "../../utils/util";

const Line = () => {
  return (
    <div className="admin_container">
      <Index />

      <main className="chart_container">
        <CommonHeader title="Line Charts" />

        <section>
          <CommonLineCharts
            data={[
              200, 444, 444, 556, 778, 455, 990, 1444, 256, 447, 1000, 1200,
            ]}
            label="Users"
            borderColor="rgb(53, 162, 255)"
            backgroundColor="rgba(53, 162, 255,0.5)"
            labels={months}
          />

          <CommonHeader title="Active Users" />
        </section>
        <section>
          <CommonLineCharts
            data={[40, 60, 244, 100, 143, 120, 41, 47, 50, 56, 32]}
            backgroundColor={"hsla(269,80%,40%,0.4)"}
            borderColor={"hsl(269,80%,40%)"}
            label="Products"
            labels={months}
          />
          <CommonHeader title="Total Products (SKU)" />
        </section>
      </main>
    </div>
  );
};

export default Line;
