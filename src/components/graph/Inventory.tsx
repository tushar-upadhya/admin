import CategoryItem from "./CategoryItem";
import data from "../../json/data.json";
import { CommonHeader } from "..";

const Inventory = () => {
  return (
    <div className="dashboard_categories">
      <CommonHeader title="Inventory" />

      <div>
        {data.categories.map(({ heading, value }) => (
          <CategoryItem
            key={heading}
            heading={heading}
            value={value}
            color={`hsl(${value * 4}, 70%, 50%)`}
          />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
