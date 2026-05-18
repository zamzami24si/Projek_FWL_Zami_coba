import { FiArrowUpRight } from "react-icons/fi";

export default function Analytics() {
  // Data produk populer dengan gambar asli sesuai screenshot produk Anda
  const popularProducts = [
    {
      name: "Cappuccino",
      sales: "245 sales",
      amount: "$1,225",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=150&auto=format&fit=crop&q=60" // Foto kopi dari atas background gelap
    },
    {
      name: "Croissant",
      sales: "189 sales",
      amount: "$945",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=150&auto=format&fit=crop&q=60" // Foto croissant mentega emas
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">Analytics</h1>
        <p className="text-stone-500 text-sm mt-1">Track your business performance and insights</p>
      </div>

      {/* Top Cards Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Average Order Value */}
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm space-y-4">
          <div className="flex justify-between items-start">
            <div className="bg-amber-50 w-10 h-10 rounded-xl text-[#6F3414] font-bold text-lg flex items-center justify-center">
              $
            </div>
            <span className="text-emerald-600 bg-emerald-50 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
              <FiArrowUpRight /> +3.2%
            </span>
          </div>
          <div>
            <p className="text-stone-400 text-xs font-medium">Average Order Value</p>
            <h3 className="text-3xl font-bold text-stone-900 mt-1">$14.50</h3>
          </div>
        </div>

        {/* Orders per Day */}
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm space-y-4">
          <div className="flex justify-between items-start">
            {/* Menggunakan Icon Box SVG atau Text bersih, bukan emoji */}
            <div className="bg-amber-50 w-10 h-10 rounded-xl text-[#6F3414] font-bold text-base flex items-center justify-center">
              📦
            </div>
            <span className="text-emerald-600 bg-emerald-50 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
              <FiArrowUpRight /> +8.5%
            </span>
          </div>
          <div>
            <p className="text-stone-400 text-xs font-medium">Orders per Day</p>
            <h3 className="text-3xl font-bold text-stone-900 mt-1">62</h3>
          </div>
        </div>
      </div>

      {/* Charts & Popular Products Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Weekly Revenue Line Chart */}
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
          <h3 className="text-stone-900 font-bold text-base mb-4">Weekly Revenue</h3>
          <div className="relative h-64 w-full flex items-end">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200">
              <line x1="0" y1="50" x2="500" y2="50" stroke="#F5F5F4" strokeDasharray="4 4" />
              <line x1="0" y1="100" x2="500" y2="100" stroke="#F5F5F4" strokeDasharray="4 4" />
              <line x1="0" y1="150" x2="500" y2="150" stroke="#F5F5F4" strokeDasharray="4 4" />
              
              <path
                d="M 20 130 Q 100 90 150 70 T 280 110 T 400 30 T 480 60"
                fill="none"
                stroke="#6F3414"
                strokeWidth="3"
              />
              <circle cx="20" cy="130" r="5" fill="#6F3414" stroke="white" strokeWidth="2" />
              <circle cx="110" cy="100" r="5" fill="#6F3414" stroke="white" strokeWidth="2" />
              <circle cx="180" cy="75" r="5" fill="#6F3414" stroke="white" strokeWidth="2" />
              <circle cx="260" cy="112" r="5" fill="#6F3414" stroke="white" strokeWidth="2" />
              <circle cx="360" cy="45" r="5" fill="#6F3414" stroke="white" strokeWidth="2" />
              <circle cx="450" cy="65" r="5" fill="#6F3414" stroke="white" strokeWidth="2" />
            </svg>
            <div className="absolute left-0 top-0 text-[10px] text-stone-400 font-medium space-y-[45px]">
              <div>2400</div>
              <div>1800</div>
              <div>1200</div>
              <div>600</div>
            </div>
          </div>
        </div>

        {/* Sales by Category Pie Chart */}
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col justify-between">
          <h3 className="text-stone-900 font-bold text-base mb-2">Sales by Category</h3>
          <div className="flex flex-col items-center justify-center flex-1 py-4">
            <div className="relative w-44 h-44">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="16" fill="#E69138" />
                <circle cx="16" cy="16" r="16" fill="transparent" stroke="#6F3414" strokeWidth="32" strokeDasharray="75 100" />
                <circle cx="16" cy="16" r="16" fill="transparent" stroke="#B45F06" strokeWidth="32" strokeDasharray="30 100" strokeDashoffset="-75" />
              </svg>
              <div className="absolute top-4 right-2 text-xs font-bold text-[#6F3414]">Coffee: 45%</div>
            </div>
          </div>
          <div className="flex justify-center gap-6 text-xs font-semibold text-stone-600 mt-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#6F3414] rounded-full" /> Coffee
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#B45F06] rounded-full" /> Bakery
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#E69138] rounded-full" /> Others
            </div>
          </div>
        </div>
      </div>

      {/* POPULAR PRODUCTS SECTION - Menggunakan Tag Image Asli Sesuai Mockup */}
      <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
        <h3 className="text-stone-900 font-bold text-base mb-4">Popular Products</h3>
        <div className="space-y-3">
          {popularProducts.map((product, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-between p-3 rounded-xl border border-stone-50 bg-stone-50/30 hover:bg-stone-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                {/* Image Rendering menggantikan emoji sebelumnya */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-12 h-12 rounded-xl object-cover shadow-sm border border-stone-100" 
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
  );
}