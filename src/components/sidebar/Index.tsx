import { useLocation } from "react-router-dom";
import Apps from "./Apps";
import Charts from "./Charts";
import Sidebar from "./Sidebar";

const Index = () => {
  const location = useLocation();
  return (
    <aside>
      <Sidebar location={location} />
      <Charts location={location} />
      <Apps location={location} />
    </aside>
  );
};

export default Index;
