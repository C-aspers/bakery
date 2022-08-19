import { Routes, Route, Navigate } from "react-router-dom";
import HomePages from "./pages/HomePages";
import ProductsPages from "./pages/ProductsPages";
import "./App.css";

import Navbar from "./components/NavbarLayout/Navbar";
import Footers from "./components/Footers/Footers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/*" element={<HomePages />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/products" element={<ProductsPages />} />
      </Routes>

      <Footers />
    </div>
  );
}

export default App;
