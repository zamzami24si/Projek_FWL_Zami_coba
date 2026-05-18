export default function Orders() {
  const ordersData = [
    { id: "#1234", customer: "Sarah Johnson", items: "2x Cappuccino, 1x Croissant", datetime: "2026-01-08 09:30 AM", total: "$12.50", status: "Completed" },
    { id: "#1235", customer: "Mike Davis", items: "1x Latte, 2x Muffin", datetime: "2026-01-08 10:15 AM", total: "$15.00", status: "Preparing" },
    { id: "#1236", customer: "Emma Wilson", items: "3x Espresso, 1x Bagel", datetime: "2026-01-08 10:45 AM", total: "$18.75", status: "Pending" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
        <p className="text-stone-500 text-sm mt-1">Manage and track all customer orders</p>
      </div>

      {/* Filter & Search Controls */}
      <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm flex flex-col sm:flex-row justify-between gap-4 items-center">
        <input 
          type="text" 
          placeholder="Search by order ID or customer..." 
          className="border border-stone-200 bg-stone-50 text-sm rounded-xl px-4 py-2 w-full sm:w-80 outline-none focus:ring-1 focus:ring-[#6F3414]"
        />
        <div className="flex gap-2 text-xs font-semibold overflow-x-auto w-full sm:w-auto">
          <button className="bg-[#6F3414] text-white px-4 py-2 rounded-lg">All</button>
          <button className="bg-stone-100 text-stone-600 px-4 py-2 rounded-lg hover:bg-stone-200">Pending</button>
          <button className="bg-stone-100 text-stone-600 px-4 py-2 rounded-lg hover:bg-stone-200">Preparing</button>
          <button className="bg-stone-100 text-stone-600 px-4 py-2 rounded-lg hover:bg-stone-200">Completed</button>
          <button className="bg-stone-100 text-stone-600 px-4 py-2 rounded-lg hover:bg-stone-200">Cancelled</button>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-stone-50 border-b border-stone-100 text-stone-500 font-medium">
              <tr>
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Items</th>
                <th className="p-4">Date & Time</th>
                <th className="p-4">Total</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700 font-medium">
              {ordersData.map((o) => (
                <tr key={o.id} className="hover:bg-stone-50/50 transition-colors">
                  <td className="p-4 text-stone-400 font-normal">{o.id}</td>
                  <td className="p-4 text-stone-800 font-semibold">{o.customer}</td>
                  <td className="p-4 text-stone-500 font-normal">{o.items}</td>
                  <td className="p-4 text-stone-400 text-xs font-normal whitespace-pre-line">{o.datetime}</td>
                  <td className="p-4 text-stone-800 font-bold">{o.total}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-lg text-xs font-bold inline-block border ${
                      o.status === 'Completed' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 
                      o.status === 'Preparing' ? 'bg-amber-50 border-amber-200 text-amber-700' : 
                      'bg-blue-50 border-blue-200 text-blue-700'
                    }`}>
                      {o.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button className="text-stone-400 hover:text-stone-700 text-base">👁</button>
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