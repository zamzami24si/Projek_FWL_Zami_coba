import { Outlet } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";

export default function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FDFBF9] relative overflow-hidden">
            {/* Dekorasi Background */}
            <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-[#4E342E]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[#8B4513]/5 rounded-full blur-3xl"></div>

            <div className="bg-white p-10 rounded-[40px] shadow-2xl shadow-stone-200/50 w-full max-w-md border border-stone-100 z-10">
                <div className="flex flex-col items-center justify-center mb-8">
                    <div className="w-16 h-16 bg-[#4E342E] rounded-2xl flex items-center justify-center shadow-lg mb-4">
                        <FaCoffee className="text-3xl text-white" />
                    </div>
                    <h1 className="text-3xl font-black text-[#4E342E] tracking-tighter">
                        Brew.Bean<span className="text-[#8B4513]"> Admin</span>
                    </h1>
                    <p className="text-stone-400 text-xs mt-2 uppercase tracking-[0.2em] font-bold">Authenticating Barista</p>
                </div>

                <Outlet/>

                <div className="mt-10 pt-6 border-t border-stone-100 text-center">
                    <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest leading-relaxed">
                        © 2026 Brew & Bean Coffee Roasters. <br/>Crafted with Passion by Zamzami.
                    </p>
                </div>
            </div>
        </div>
    )
}