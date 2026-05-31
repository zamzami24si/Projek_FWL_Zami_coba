import { FiCoffee, FiGrid, FiShoppingBag, FiLayers, FiBarChart2, FiSettings, FiCpu } from "react-icons/fi";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation();

 // Daftar menu sidebar - Tambahkan FiturXYZ di sini 👇
  const menuItems = [
    { path: "/", name: "Dashboard", icon: <FiGrid /> },
    { path: "/products", name: "Products", icon: <FiCoffee /> },
    { path: "/orders", name: "Orders", icon: <FiShoppingBag /> },
    { path: "/inventory", name: "Inventory", icon: <FiLayers /> },
    { path: "/analytics", name: "Analytics", icon: <FiBarChart2 /> },
    { path: "/fitur-xyz", name: "FiturXYZ", icon: <FiLayers /> }, 
    { path: "/components", name: "Components", icon: <FiCpu /> },
  ];

  return (
    <div className="flex min-h-screen bg-stone-50">
      {/* SIDEBAR */}
      <div className="w-64 bg-[#6F3414] text-white flex flex-col justify-between p-4 fixed h-full">
        <div className="space-y-8">
          {/* Logo Brand Head */}
          <div className="flex items-center gap-3 px-2 pt-2">
            <FiCoffee className="text-2xl text-amber-100 flex-shrink-0" /> 
            <span className="font-bold text-xl tracking-tight leading-tight">
              Coffee &<br />Bakery
            </span>
          </div>

          {/* Navigasi Menu Utama */}
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#87431D] text-white shadow-inner"
                      : "text-stone-300 hover:bg-stone-800/20 hover:text-white"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Menu Settings Terpisah di Bawah */}
        <div>
          <Link
            to="/settings"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
              location.pathname === "/settings"
                ? "bg-[#87431D] text-white"
                : "text-stone-300 hover:bg-stone-800/20 hover:text-white"
            }`}
          >
            <FiSettings className="text-lg" />
            Settings
          </Link>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="flex-1 pl-64">
        {/* Top Navbar */}
        <header className="bg-white/80 backdrop-blur-md border-b border-stone-100 py-4 px-8 flex justify-between items-center sticky top-0 z-10">
          <button className="bg-[#6F3414] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-sm hover:bg-[#59290f] transition-all">
            📇 View Client Store
          </button>
        </header>

        {/* Halaman Anak (Dashboard, Products, Components, dll) */}
        <main className="p-8 max-w-7xl mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}