import CategoryItem from "./CategoryItem";
import data from "../../json/data.json";

const Inventory = () => {
  return (
    <div className="dashboard_categories">
      <h2>Inventory</h2>
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
