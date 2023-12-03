import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Suspense, lazy } from "react";

import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Customers = lazy(() => import("./pages/Customers"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Products />} />
          <Route path="/transaction" element={<Transactions />} />
          <Route path="/customer" element={<Customers />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
