import React, { useState } from "react";
import { FiPlus, FiSearch, FiEdit2, FiTrash2 } from "react-icons/fi";

export default function Products() {
  // Data produk menggunakan URL image berkualitas tinggi sesuai gambar mockup asli Anda
  const initialProducts = [
    {
      id: 1,
      name: "Cappuccino",
      category: "Coffee",
      price: 4.50,
      stock: 100,
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Croissant",
      category: "Bakery",
      price: 3.50,
      stock: 45,
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Artisan Bread",
      category: "Bakery",
      price: 6.00,
      stock: 30,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=80"
    }
  ];

  const [products] = useState(initialProducts);
  const [activeTab, setActiveTab] = useState("All");

  // Penyaringan kategori produk
  const filteredProducts = activeTab === "All" 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <div className="space-y-6">
      {/* Header Panel */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-stone-900">Products</h1>
          <p className="text-stone-500 text-sm mt-1">Manage your coffee and bakery products</p>
        </div>
        <button className="bg-[#6F3414] hover:bg-[#59290f] text-white px-4 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 shadow-sm transition-colors">
          <FiPlus className="text-base" /> Add Product
        </button>
      </div>

      {/* Kontrol Utama: Pencarian dan Filter Tab */}
      <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm flex flex-col sm:flex-row justify-between gap-4 items-center">
        {/* Kolom Search Input dengan Ikon */}
        <div className="relative w-full sm:w-80">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 text-base" />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="border border-stone-200 bg-stone-50/50 text-sm rounded-xl pl-11 pr-4 py-2 w-full outline-none focus:ring-1 focus:ring-[#6F3414] focus:bg-white transition-all"
          />
        </div>
        
        {/* Kategori Tab Filter */}
        <div className="flex gap-2 text-xs font-bold self-end sm:self-center">
          {["All", "Coffee", "Bakery"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === tab
                  ? "bg-[#6F3414] text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200/70"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid List Kartu Produk */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow"
          >
            {/* Bagian Atas: Gambar Produk Melengkung */}
            <div className="relative h-48 w-full bg-stone-100 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Bagian Tengah: Informasi Deskripsi */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-bold text-stone-900 text-base leading-snug">{product.name}</h3>
                  <span className="font-bold text-[#6F3414] text-base">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                
                <div>
                  <span className="text-[10px] uppercase tracking-wider bg-amber-50 text-amber-800 font-bold px-2 py-0.5 rounded-md border border-amber-100/50">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Status Sisa Stok */}
              <div className="text-xs text-stone-400 font-medium pt-1">
                Stock: <span className="text-stone-700 font-semibold">{product.stock}</span>
              </div>
            </div>

            {/* Bagian Bawah: Panel Aksi Modifikasi (Edit/Delete) */}
            <div className="px-5 pb-5 pt-1 grid grid-cols-4 gap-2">
              <button className="col-span-3 bg-stone-50 hover:bg-stone-100 text-stone-700 font-semibold text-xs py-2.5 px-3 rounded-xl border border-stone-200/60 flex items-center justify-center gap-1.5 transition-colors">
                <FiEdit2 className="text-xs" /> Edit
              </button>
              <button className="bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl border border-rose-100 flex items-center justify-center transition-colors">
                <FiTrash2 className="text-sm" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}