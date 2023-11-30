import CategoryItem from "./CategoryItem";

import data from "../../json/data.json";

const Inventory = () => {
  return (
    <div className="dashboard_categories">
      <h2>Inventory</h2>
      {data.categories.map((i) => (
        <CategoryItem
          key={i.heading}
          heading={i.heading}
          value={i.value}
          color={`hsl(${i.value * 4},${i.value}%,50%)`}
        />
      ))}
    </div>
  );
};

export default Inventory;
