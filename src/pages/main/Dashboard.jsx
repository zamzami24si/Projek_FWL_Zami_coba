import { FaCoffee, FaTruckLoading, FaCheckCircle, FaWallet, FaUserCircle } from "react-icons/fa";

export default function Dashboard() {
    const stats = [
        { label: "Cups Brewed", value: "342", icon: <FaCoffee />, color: "bg-orange-100 text-orange-700" },
        { label: "In Delivery", value: "18", icon: <FaTruckLoading />, color: "bg-blue-100 text-blue-700" },
        { label: "Success Rate", value: "98%", icon: <FaCheckCircle />, color: "bg-green-100 text-green-700" },
        { label: "Daily Revenue", value: "Rp 4.2M", icon: <FaWallet />, color: "bg-stone-100 text-stone-700" },
    ];

    const recentOrders = [
        { id: "#B881", name: "Dwi Alfira", brew: "Caramel Macchiato", size: "Large", status: "Brewing" },
        { id: "#B882", name: "M. Zamzami", brew: "Espresso Double", size: "Normal", status: "Ready" },
        { id: "#B883", name: "Darrel", brew: "Matcha Latte", size: "Large", status: "Canceled" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-xl mb-4`}>
                            {stat.icon}
                        </div>
                        <p className="text-stone-400 text-sm font-medium">{stat.label}</p>
                        <h4 className="text-2xl font-bold text-stone-800">{stat.value}</h4>
                    </div>
                ))}
            </div>

            {/* Recent Orders Table */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-stone-800">Live Orders Queue</h3>
                    <button className="text-[#4E342E] text-sm font-bold hover:underline">View All Kitchen</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-stone-400 text-sm border-b border-stone-50">
                                <th className="pb-4 font-semibold text-left">Customer</th>
                                <th className="pb-4 font-semibold text-left">Brew Item</th>
                                <th className="pb-4 font-semibold text-left">Size</th>
                                <th className="pb-4 font-semibold text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-50">
                            {recentOrders.map((order, i) => (
                                <tr key={i} className="group hover:bg-stone-50/50 transition-colors">
                                    <td className="py-4 flex items-center gap-3">
                                        <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center overflow-hidden">
                                            <FaUserCircle className="text-2xl text-stone-400" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-stone-700">{order.name}</p>
                                            <p className="text-[10px] text-stone-400">{order.id}</p>
                                        </div>
                                    </td>
                                    <td className="py-4 font-medium text-stone-600">{order.brew}</td>
                                    <td className="py-4 text-stone-500">{order.size}</td>
                                    <td className="py-4 text-center">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                            order.status === 'Ready' ? 'bg-green-100 text-green-600' : 
                                            order.status === 'Brewing' ? 'bg-orange-100 text-orange-600' : 'bg-red-100 text-red-600'
                                        }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}