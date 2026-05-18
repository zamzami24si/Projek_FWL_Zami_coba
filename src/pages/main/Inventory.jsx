import { FiAlertTriangle, FiSearch } from "react-icons/fi";

export default function Inventory() {
  const stockItems = [
    { name: "Coffee Beans (Arabica)", cat: "Ingredients", qty: "25 kg", min: "10 kg", status: "In Stock", updated: "2026-01-07" },
    { name: "Milk", cat: "Ingredients", qty: "50 liters", min: "20 liters", status: "In Stock", updated: "2026-01-08" },
    { name: "Flour", cat: "Ingredients", qty: "8 kg", min: "15 kg", status: "Low Stock", updated: "2026-01-06" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">Inventory</h1>
        <p className="text-stone-500 text-sm mt-1">Track and manage your stock levels</p>
      </div>

      {/* Warning Alert Box */}
      <div className="bg-amber-50/60 border border-amber-200/70 p-4 rounded-xl flex items-start gap-3">
        <FiAlertTriangle className="text-amber-600 text-lg mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-sm text-amber-900">Low Stock Alert</h4>
          <p className="text-xs text-amber-700 mt-1">
            3 items running low on stock: Flour, Paper Cups (16oz), Vanilla Extract
          </p>
        </div>
      </div>

      {/* Filter and Table Control */}
      <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm flex flex-col sm:flex-row justify-between gap-4 items-center">
        {/* Input dengan Ikon Search */}
        <div className="relative w-full sm:w-80">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 text-base" />
          <input 
            type="text" 
            placeholder="Search inventory..." 
            className="border border-stone-200 bg-stone-50/50 text-sm rounded-xl pl-11 pr-4 py-2 w-full outline-none focus:ring-1 focus:ring-[#6F3414] focus:bg-white transition-all"
          />
        </div>
        
        {/* Filter Kategori */}
        <div className="flex gap-2 text-xs font-semibold self-end sm:self-center">
          <button className="bg-[#6F3414] text-white px-4 py-2 rounded-lg shadow-sm">All</button>
          <button className="bg-stone-100 text-stone-600 px-4 py-2 rounded-lg hover:bg-stone-200/70 transition-colors">Ingredients</button>
          <button className="bg-stone-100 text-stone-600 px-4 py-2 rounded-lg hover:bg-stone-200/70 transition-colors">Supplies</button>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-stone-50/70 border-b border-stone-100 text-stone-500 font-semibold text-xs uppercase tracking-wider">
              <tr>
                <th className="p-4 pl-6">Item Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Min Stock</th>
                <th className="p-4">Status</th>
                <th className="p-4">Last Updated</th>
                <th className="p-4 pr-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-medium text-stone-600">
              {stockItems.map((item, i) => (
                <tr key={i} className="hover:bg-stone-50/40 transition-colors group">
                  <td className="p-4 pl-6 text-stone-900 font-semibold">{item.name}</td>
                  <td className="p-4">
                    <span className="text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md font-medium">
                      {item.cat}
                    </span>
                  </td>
                  <td className="p-4 text-stone-800 font-semibold">{item.qty}</td>
                  <td className="p-4 text-stone-400 font-normal">{item.min}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide ${
                      item.status === 'In Stock' 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-100/50' 
                        : 'bg-rose-50 text-rose-700 border border-rose-100/50'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  {/* Kolom Baru Sesuai Gambar */}
                  <td className="p-4 text-stone-400 font-normal text-xs">{item.updated}</td>
                  {/* Desain Button Sesuai Gambar */}
                  <td className="p-4 pr-6">
                    <div className="flex justify-center items-center gap-4">
                      <button className="text-stone-400 hover:text-stone-900 font-medium text-lg transition-colors p-1">
                        &mdash;
                      </button>
                      <button className="text-stone-400 hover:text-stone-900 font-medium text-lg transition-colors p-1">
                        +
                      </button>
                    </div>
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