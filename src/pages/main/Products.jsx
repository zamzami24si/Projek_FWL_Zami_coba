import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom"; 

export default function Products() {
  // Data produk bertema Coffee Shop
  const productsData = Array.from({ length: 30 }).map((_, i) => {
    const items = [
      { name: "Arabica Gayo", cat: "Beans", brand: "Sumatra" },
      { name: "V60 Dripper", cat: "Equipment", brand: "Hario" },
      { name: "Espresso Machine", cat: "Equipment", brand: "Nuova" },
      { name: "Caramel Macchiato", cat: "Beverage", brand: "Brew.Bean" },
      { name: "Robusta Temanggung", cat: "Beans", brand: "Java" },
      { name: "Milk Frother", cat: "Equipment", brand: "LatteArt" }
    ];
    
    const selected = items[i % items.length];

    return {
      id: i + 1, 
      code: `BRW-${2000 + i + 1}`,
      title: `${selected.name} ${i > 5 ? '#' + (i + 1) : ""}`,
      category: selected.cat,
      brand: selected.brand,
      price: (Math.floor(Math.random() * 50) + 5) * 10000, // Harga range 50rb - 500rb
      stock: Math.floor(Math.random() * 50) + 1 
    };
  });

  return (
    <div className="p-6">
      <PageHeader title="Menu & Inventory" breadcrumb="Products">
        <button className="bg-[#4E342E] text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:bg-[#3E2723] transition-colors">
          + Add New Item
        </button>
      </PageHeader>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-stone-50">
            <tr className="text-stone-400 text-xs uppercase tracking-wider">
              <th className="p-4 font-bold">SKU</th>
              <th className="p-4 font-bold">Item Name</th>
              <th className="p-4 font-bold">Category</th>
              <th className="p-4 font-bold">Origin/Brand</th>
              <th className="p-4 font-bold">Price</th>
              <th className="p-4 font-bold">Stock</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-50 text-sm">
            {productsData.map((p) => (
              <tr key={p.id} className="hover:bg-stone-50/50 transition-colors">
                <td className="p-4 font-mono text-stone-400">{p.code}</td>
                
                <td className="p-4 font-semibold">
                  <Link 
                    to={`/products/${p.id}`} 
                    className="text-[#8B4513] hover:text-[#4E342E] hover:underline"
                  >
                    {p.title}
                  </Link>
                </td>
                
                <td className="p-4 text-stone-600">
                   <span className="bg-stone-100 px-2 py-1 rounded text-[10px] font-bold uppercase">
                     {p.category}
                   </span>
                </td>
                <td className="p-4 text-stone-600">{p.brand}</td>
                <td className="p-4 font-bold text-stone-800">
                  Rp {p.price.toLocaleString("id-ID")}
                </td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                    p.stock > 10 ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                  }`}>
                    {p.stock} pcs
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