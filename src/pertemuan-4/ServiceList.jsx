import React, { useState } from "react";
import servicesData from "./services.json";

export default function ServiceList() {
  // 1. State Management
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedCategory: "",
    viewMode: "guest", // Mode tampilan: guest atau admin
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  // 2. Logic Filter
  const filteredData = servicesData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(dataForm.searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(dataForm.searchTerm.toLowerCase());
    
    const matchesCategory = dataForm.selectedCategory 
      ? item.category === dataForm.selectedCategory 
      : true;

    return matchesSearch && matchesCategory;
  });

  // 3. Unique Categories for Filter
  const categories = [...new Set(servicesData.map((item) => item.category))];

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-blue-900">Tech Gear & Services</h1>

      {/* Kontrol Panel: Search & Filter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border">
        <input
          type="text"
          name="searchTerm"
          placeholder="Search items..."
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={handleChange}
        />
        <select
          name="selectedCategory"
          className="p-2 border border-gray-300 rounded-lg"
          onChange={handleChange}
        >
          <option value="">All Categories</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>
        <select
          name="viewMode"
          className="p-2 border border-gray-300 rounded-lg font-semibold bg-blue-50 text-blue-800"
          onChange={handleChange}
        >
          <option value="guest">View as Guest (Cards)</option>
          <option value="admin">View as Admin (Table)</option>
        </select>
      </div>

      {/* 4. Rendering Tampilan */}
      {dataForm.viewMode === "guest" ? (
        // TAMPILAN GUEST: Responsive Grid Cards
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredData.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-100">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-xl font-bold mt-1 text-gray-800">{item.name}</h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-1">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] rounded-md font-medium">#{tag}</span>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t flex justify-between items-center">
                  <p className="text-lg font-bold text-green-600">Rp {item.price.toLocaleString()}</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700">Detail</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // TAMPILAN ADMIN: Responsive Table
        <div className="overflow-x-auto bg-white rounded-xl shadow-md border">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name & ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specs</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Warranty</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-bold text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">ID: {item.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold">{item.details.provider.name}</div>
                    <div className="text-xs text-gray-400">{item.details.provider.location}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-xs space-y-1">
                      {Object.entries(item.details.specifications).map(([k, v]) => (
                        <div key={k}><span className="font-bold capitalize">{k}:</span> {v}</div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-blue-600">Rp {item.price.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                      {item.details.warranty.period} - {item.details.warranty.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Empty State */}
      {filteredData.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-xl">No services or gear found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}