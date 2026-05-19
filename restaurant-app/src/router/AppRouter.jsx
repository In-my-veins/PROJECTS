import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CoffeeMenu from "../pages/CoffeeMenu";
import FoodMenu from "../pages/FoodMenu";
import Dashboard from "../pages/admin/Dashboard";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee" element={<CoffeeMenu />} />
        <Route path="/food" element={<FoodMenu />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}