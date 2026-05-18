import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function Dashboard() {
  // Data Pesanan Terbaru (Sesuai dengan screenshot dashboard Anda)
  const recentOrders = [
    {
      id: "#1234",
      customer: "Sarah Johnson",
      items: "2x Cappuccino, 1x Croissant",
      total: "$12.50",
      status: "Completed",
    },
    {
      id: "#1235",
      customer: "Mike Davis",
      items: "1x Latte, 2x Muffin",
      total: "$15.00",
      status: "Preparing",
    }
  ];

  // Data Produk Populer (Menggunakan gambar asli Unsplash, bukan emoji/ikon kecil)
  const popularProducts = [
    {
      name: "Cappuccino",
      sales: "245 sales",
      amount: "$1,225",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Croissant",
      sales: "189 sales",
      amount: "$945",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=150&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header Selamat Datang */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">Dashboard</h1>
        <p className="text-stone-500 text-sm mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Grid Kartu Statistik Atas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Revenue */}
        <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <span className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center text-[#6F3414] font-bold text-sm">$</span>
            <span className="text-emerald-600 text-xs font-bold flex items-center gap-0.5"><FiArrowUpRight /> +12.5%</span>
          </div>
          <div>
            <p className="text-stone-400 text-xs font-medium">Total Revenue</p>
            <h3 className="text-2xl font-bold text-stone-900 mt-0.5">$12,458</h3>
          </div>
        </div>

        {/* Orders Today */}
        <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <span className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center text-lg">🛍️</span>
            <span className="text-emerald-600 text-xs font-bold flex items-center gap-0.5"><FiArrowUpRight /> +8.2%</span>
          </div>
          <div>
            <p className="text-stone-400 text-xs font-medium">Orders Today</p>
            <h3 className="text-2xl font-bold text-stone-900 mt-0.5">142</h3>
          </div>
        </div>

        {/* Total Customers */}
        <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <span className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center text-base">👥</span>
            <span className="text-emerald-600 text-xs font-bold flex items-center gap-0.5"><FiArrowUpRight /> +5.1%</span>
          </div>
          <div>
            <p className="text-stone-400 text-xs font-medium">Total Customers</p>
            <h3 className="text-2xl font-bold text-stone-900 mt-0.5">1,284</h3>
          </div>
        </div>

        {/* Growth */}
        <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <span className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center text-base">📈</span>
            <span className="text-emerald-600 text-xs font-bold flex items-center gap-0.5"><FiArrowUpRight /> +2.3%</span>
          </div>
          <div>
            <p className="text-stone-400 text-xs font-medium">Growth</p>
            <h3 className="text-2xl font-bold text-stone-900 mt-0.5">23.4%</h3>
          </div>
        </div>
      </div>

      {/* Konten Utama Baris Bawah */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        
        {/* PANEL KIRI: Recent Orders */}
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm lg:col-span-3">
          <h3 className="text-stone-900 font-bold text-base mb-4">Recent Orders</h3>
          <div className="space-y-3">
            {recentOrders.map((order, i) => (
              <div key={i} className="flex justify-between items-center p-4 rounded-xl border border-stone-100 bg-stone-50/20">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-stone-400 font-semibold">{order.id}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      order.status === "Completed" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm">{order.customer}</h4>
                  {/* Teks nama item dibuat miring halus sesuai desain asli */}
                  <p className="text-xs text-stone-400 font-normal italic">{order.items}</p>
                </div>
                <span className="font-bold text-stone-800 text-sm">{order.total}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PANEL KANAN: Popular Products */}
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm lg:col-span-2 flex flex-col justify-between">
          <div>
            <h3 className="text-stone-900 font-bold text-base mb-4">Popular Products</h3>
            <div className="space-y-3">
              {popularProducts.map((product, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-stone-50 bg-stone-50/40">
                  <div className="flex items-center gap-3.5">
                    {/* Menggunakan tag img asli berukuran pas, menggantikan emoji kotak lama */}
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-12 h-12 rounded-xl object-cover shadow-sm border border-stone-100 flex-shrink-0" 
                    />
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm">{product.name}</h4>
                      <p className="text-xs text-stone-400 font-medium mt-0.5">{product.sales}</p>
                    </div>
                  </div>
                  <span className="font-bold text-stone-800 text-sm">{product.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}