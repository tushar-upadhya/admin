import Header from "../components/Header";
import Widget from "../components/Widget";
import Inventory from "../components/graph/Inventory";
import RevenueChart from "../components/graph/RevenueChart";
import Index from "../components/sidebar/Index";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <Index />
      <main className="dashboard">
        <Header />

        <section className="widget_container">
          <Widget
            percentage={40}
            amount={true}
            value={2000}
            heading="Revenue"
            color="rgb(0,155,255)"
          />

          <Widget
            percentage={-40}
            amount={false}
            value={400}
            heading="Users"
            color="rgb(0,198,255)"
          />

          <Widget
            percentage={80}
            amount={false}
            value={85000}
            heading="Transactions"
            color="rgb(255, 196, 0)"
          />
          <Widget
            percentage={-40}
            amount={false}
            value={400}
            heading="Products"
            color="rgb(76 0 255)"
          />
        </section>

        <section className="graph_container">
          <RevenueChart />
          <Inventory />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
