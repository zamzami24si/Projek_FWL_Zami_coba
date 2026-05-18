import { useState } from "react";
import { FaBell, FaSearch, FaTimes } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div id="header-container" className="flex justify-between items-center bg-white p-4 rounded-2xl border border-stone-100 shadow-sm">
            {/* Search Bar - Trigger Modal */}
            <div id="search-bar" onClick={() => setIsSearchOpen(true)} className="cursor-pointer flex items-center justify-between border border-stone-200 rounded-xl px-4 py-2 w-64 bg-stone-50 hover:bg-stone-100 transition-colors">
                <input
                    id="search-input"
                    type="text"
                    placeholder="Search Here..."
                    className="bg-transparent outline-none text-sm text-stone-600 pointer-events-none"
                    readOnly
                />
                <FaSearch id="search-icon" className="text-stone-400" />
            </div>

            {/* MODAL SEARCH */}
            {isSearchOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-xl rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-[#4E342E]">Quick Search</h3>
                            <button onClick={() => setIsSearchOpen(false)} className="text-stone-400 hover:text-red-500 transition-colors">
                                <FaTimes />
                            </button>
                        </div>
                        <input 
                            className="w-full p-4 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#4E342E] outline-none transition-all text-stone-700" 
                            placeholder="Type menu, customer name, or order ID..."
                            autoFocus
                        />
                        <div className="mt-4 text-sm text-stone-400">Press Esc or click close to exit</div>
                    </div>
                </div>
            )}

            <div id="icons-container" className="flex items-center gap-6">
                <div id="notification-icon" className="relative cursor-pointer text-stone-600 hover:text-[#4E342E] transition-colors text-xl">
                    <FaBell />
                    <span id="notification-badge" className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">50</span>
                </div>
                <div id="chart-icon" className="cursor-pointer text-xl">
                    <FcAreaChart />
                </div>
                <div id="settings-icon" className="cursor-pointer text-stone-600 hover:text-[#4E342E] transition-colors text-xl">
                    <SlSettings />
                </div>

                <div id="profile-container" className="flex items-center gap-3 border-l border-stone-200 pl-6">
                    <span id="profile-text" className="text-sm text-stone-600">
                        Hello, <b className="text-[#4E342E]">M.Zamzami</b>
                    </span>
                    <img
                        id="profile-avatar"
                        src="/Img/foto1a.jpg"
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover border border-stone-200 shadow-sm"
                    />
                </div>
            </div>
        </div>
    );
}