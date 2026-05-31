import { NavLink } from "react-router-dom";
// Mengimpor ikon menu termasuk FiLayers untuk halaman praktikum Components
import { FiGrid, FiCoffee, FiShoppingCart, FiPackage, FiBarChart2, FiSettings, FiLayers } from "react-icons/fi";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-3 space-x-3 transition-all duration-200 text-sm font-medium
    ${isActive ? 
        "text-white bg-[#8B4513]/40 font-semibold" : 
        "text-white/70 hover:text-white hover:bg-white/10"
    }`;

  return (
    <div className="w-[240px] bg-[#6F3414] text-white min-h-screen p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        {/* Logo Section */}
        <div className="flex items-center gap-3 px-2 py-4">
          <FiCoffee className="text-2xl" />
          <span className="text-xl font-bold tracking-wide leading-tight">
            Coffee &<br />Bakery
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          <NavLink to="/" className={menuClass}>
            <FiGrid className="text-lg" /> <span>Dashboard</span>
          </NavLink>

          <NavLink to="/products" className={menuClass}>
            <FiCoffee className="text-lg" /> <span>Products</span>
          </NavLink>

          <NavLink to="/orders" className={menuClass}>
            <FiShoppingCart className="text-lg" /> <span>Orders</span>
          </NavLink>

          <NavLink to="/inventory" className={menuClass}>
            <FiPackage className="text-lg" /> <span>Inventory</span>
          </NavLink>

          <NavLink to="/analytics" className={menuClass}>
            <FiBarChart2 className="text-lg" /> <span>Analytics</span>
          </NavLink>

          <NavLink to="/fitur-xyz" className={menuClass}>
            <FiBarChart2 className="text-lg" /> <span>FiturXYZ</span>
          </NavLink>

          {/* MENU PRAKTIKUM: REUSABLE COMPONENTS */}
          <NavLink to="/components" className={menuClass}>
            <FiLayers className="text-lg" /> <span>Components</span>
          </NavLink>
        </nav>
      </div>

      {/* Settings Bottom */}
      <div className="px-2 pb-4">
        <NavLink to="/settings" className={menuClass}>
          <FiSettings className="text-lg" /> <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
}