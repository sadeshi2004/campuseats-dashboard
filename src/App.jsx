import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import MenuPage from "./features/menu/pages/MenuPage";
import DishDetailPage from "./features/menu/pages/DishDetailPage";
import OrderPage from "./features/menu/pages/OrderPage";

function App() {
  return (
    <div>
      <h1>CampusEats Dashboard</h1>

      <nav>
        <NavLink to="/">Menu</NavLink>
        <NavLink to="/order">Place Order</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/dish/:id" element={<DishDetailPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/swagger/*" element={<Navigate to="/" replace />} />
        <Route path="*" element={<h2 style={{ textAlign: "center", marginTop: "50px" }}>404 — Page not found</h2>} />
      </Routes>
    </div>
  );
}

export default App;

