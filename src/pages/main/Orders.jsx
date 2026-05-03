import PageHeader from "../../components/PageHeader";

export default function Orders() {
  const ordersData = Array.from({ length: 30 }).map((_, i) => ({
    // Tambahkan backtick (`) di awal dan akhir string template
    id: `#ORD-${800 + i}`,
    name: ["dwi", "zami", "darrel", "apo"][i % 4],
    status: ["Completed", "Pending", "Cancelled"][i % 3],
    // Tambahkan backtick (`) agar sintaks string template berfungsi
    price: `Rp ${(Math.floor(Math.random() * 200) + 50)}.000`,
    // Tambahkan backtick (`) untuk format tanggal
    date: `2026-04-${String((i % 28) + 1).padStart(2, '0')}`
  }));

  return (
    <div>
      <PageHeader title="Order List" breadcrumb="Orders">
        <button className="bg-green-500 text-white px-6 py-2 rounded-xl font-bold shadow-lg">
          + Add New Order
        </button>
      </PageHeader>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr className="text-gray-400">
              <th className="p-4 font-medium">Order ID</th>
              <th className="p-4 font-medium">Customer Name</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Total Price</th>
              <th className="p-4 font-medium">Order Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {ordersData.map((o) => (
              <tr key={o.id} className="hover:bg-gray-50">
                <td className="p-4 font-bold">{o.id}</td>
                <td className="p-4 font-semibold text-gray-700">{o.name}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-md text-xs font-bold ${
                    o.status === 'Completed' ? 'bg-green-100 text-green-600' : 
                    o.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {o.status}
                  </span>
                </td>
                <td className="p-4 font-bold text-gray-800">{o.price}</td>
                <td className="p-4 text-gray-500">{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}