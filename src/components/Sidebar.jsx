import { FaCoffee, FaClipboardList, FaUsers, FaChartLine, FaBoxOpen } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-3 transition-all duration-300
    ${isActive ? 
        "text-white bg-[#4E342E] font-bold shadow-lg transform scale-105" : 
        "text-stone-500 hover:text-[#4E342E] hover:bg-stone-100"
    }`;

  return (
    <div className="w-[280px] bg-[#FCF8F5] border-r border-stone-200 min-h-screen p-6 flex flex-col gap-6 shadow-sm">
      {/* Logo Section */}
      <div className="mb-8 px-4">
        <div className="flex items-center gap-2">
            <FaCoffee className="text-3xl text-[#4E342E]" />
            <span className="text-2xl font-black tracking-tight text-[#4E342E]">
              Brew<span className="text-[#8B4513]">.</span>Bean
            </span>
        </div>
        <p className="text-stone-400 text-[10px] uppercase tracking-widest mt-1 font-bold">
          Barista Control Center
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 text-sm font-medium">
        <ul className="space-y-2 list-none p-0">
          <li className="text-[10px] text-stone-400 uppercase font-bold px-4 mb-2 tracking-widest">
            General
          </li>
          
          <li>
            <NavLink to="/" className={menuClass}>
              <FaChartLine /> <span>Insights</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" className={menuClass}>
              <FaBoxOpen /> <span>Products</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/orders" className={menuClass}>
              <FaClipboardList /> <span>Brew Orders</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/customers" className={menuClass}>
              <FaUsers /> <span>Coffee Lovers</span>
            </NavLink>
          </li>
          
          <li className="mt-8 text-[10px] text-stone-400 uppercase font-bold px-4 mb-2 tracking-widest">
            System Test
          </li>
          <li><NavLink to="/error-400" className={menuClass}>Bad Request</NavLink></li>
          <li><NavLink to="/error-403" className={menuClass}>Forbidden</NavLink></li>
        </ul>
      </nav>
      
      {/* Footer Card */}
      <div className="p-4 bg-[#4E342E] rounded-2xl text-white text-center">
          <p className="text-[10px] opacity-70">Shift Mode</p>
          <p className="text-xs font-bold italic">"Morning Rush ☕"</p>
      </div>
    </div>
  );
}