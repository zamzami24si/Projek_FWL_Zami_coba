import PageHeader from "../../components/PageHeader";

export default function Customers() {
  const customersData = Array.from({ length: 30 }).map((_, i) => ({
    id: `CUS-2026${String(i + 1).padStart(3, '0')}`,
    name: ["dwi alfira", "zamzami", "darrel", "apo jo", "hahahah"][i % 5],
    email: `customer${i + 1}@example.com`,
    phone: `0812-7000-${String(100 + i)}`,
    loyalty: i % 3 === 0 ? "Gold" : i % 3 === 1 ? "Silver" : "Bronze",
  }));

  return (
    <div>
      <PageHeader title="Customer List" breadcrumb="Customers">
        <button className="bg-[#4E342E] text-white px-6 py-2 rounded-xl font-bold hover:bg-[#3E2723] transition-all shadow-lg active:scale-95">
          + Add New Customer
        </button>
      </PageHeader>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-stone-50 border-b border-stone-100">
            <tr>
              <th className="p-4 text-stone-400 font-medium">Customer ID</th>
              <th className="p-4 text-stone-400 font-medium">Customer Name</th>
              <th className="p-4 text-stone-400 font-medium">Email</th>
              <th className="p-4 text-stone-400 font-medium">Phone</th>
              <th className="p-4 text-stone-400 font-medium">Loyalty</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-50">
            {customersData.map((item) => (
              <tr key={item.id} className="hover:bg-[#FCF8F5] transition-colors">
                <td className="p-4 font-bold text-[#8B4513]">{item.id}</td>
                <td className="p-4 font-semibold text-stone-700 capitalize">{item.name}</td>
                <td className="p-4 text-stone-500">
                  <a href={`mailto:${item.email}`} className="hover:underline">{item.email}</a>
                </td>
                <td className="p-4 text-stone-500">{item.phone}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.loyalty === 'Gold' ? 'bg-amber-100 text-amber-700' : 
                    item.loyalty === 'Silver' ? 'bg-stone-200 text-stone-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {item.loyalty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}