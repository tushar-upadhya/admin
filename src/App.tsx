import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Suspense, lazy } from "react";
import { Loader } from "./components";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Customers = lazy(() => import("./pages/Customers"));

// charts
const Bar = lazy(() => import("./pages/charts/Bar"));
const Line = lazy(() => import("./pages/charts/Line"));
const Pie = lazy(() => import("./pages/charts/Pie"));

// apps

const StopWatch = lazy(() => import("./pages/apps/StopWatch"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Toss = lazy(() => import("./pages/apps/Toss"));

// management
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(
  () => import("./pages/management/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/management/TransactionManagement")
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Products />} />
          <Route path="/transaction" element={<Transactions />} />
          <Route path="/customer" element={<Customers />} />

          {/* management */}
          <Route path="/product/new" element={<NewProduct />} />
          <Route path="/product/:id" element={<ProductManagement />} />
          <Route path="/transaction/:id" element={<TransactionManagement />} />

          {/* charts */}
          <Route path="/chart/bar" element={<Bar />} />
          <Route path="/chart/pie" element={<Pie />} />
          <Route path="/chart/line" element={<Line />} />

          {/* apps */}
          <Route path="/app/stopwatch" element={<StopWatch />} />
          <Route path="/app/coupon" element={<Coupon />} />
          <Route path="/app/toss" element={<Toss />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
