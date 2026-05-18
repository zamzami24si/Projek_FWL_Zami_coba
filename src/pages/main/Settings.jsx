import { FiSave, FiLock, FiCoffee, FiUser } from "react-icons/fi";

export default function Settings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">Settings</h1>
        <p className="text-stone-500 text-sm mt-1">Manage your bakery shop configurations and system preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Kiri: Form Identitas Toko */}
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
            <FiCoffee className="text-[#6F3414] text-xl" />
            <h3 className="text-stone-900 font-bold text-base">Store Profile</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-600 uppercase tracking-wider">Store Name</label>
              <input 
                type="text" 
                defaultValue="Coffee & Bakery HQ"
                className="w-full border border-stone-200 bg-stone-50/50 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-1 focus:ring-[#6F3414] focus:bg-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-600 uppercase tracking-wider">Business Email</label>
              <input 
                type="email" 
                defaultValue="hello@coffeebakery.com"
                className="w-full border border-stone-200 bg-stone-50/50 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-1 focus:ring-[#6F3414] focus:bg-white"
              />
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-bold text-stone-600 uppercase tracking-wider">Store Address</label>
              <textarea 
                rows="3"
                defaultValue="Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan"
                className="w-full border border-stone-200 bg-stone-50/50 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-1 focus:ring-[#6F3414] focus:bg-white resize-none"
              />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button className="bg-[#6F3414] hover:bg-[#59290f] text-white px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 shadow-sm transition-colors">
              <FiSave /> Save Changes
            </button>
          </div>
        </div>

        {/* Kanan: Sistem Keamanan & Status Toko */}
        <div className="space-y-6">
          {/* Kartu Status Operasional */}
          <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm space-y-4">
            <h3 className="text-stone-900 font-bold text-sm uppercase tracking-wider text-stone-500">Store Status</h3>
            <div className="flex justify-between items-center bg-stone-50 p-3 rounded-xl border border-stone-100">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-stone-800">Accepting Orders</span>
                <span className="text-xs text-stone-400">Toggle cash register status</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-stone-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
              </label>
            </div>
          </div>

          {/* Kartu Ganti Password */}
          <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-stone-50 pb-2">
              <FiLock className="text-stone-500" />
              <h3 className="text-stone-900 font-bold text-sm">Security</h3>
            </div>
            <div className="space-y-3">
              <input 
                type="password" 
                placeholder="Current Password"
                className="w-full border border-stone-200 bg-stone-50/50 text-xs rounded-xl px-4 py-2.5 outline-none focus:ring-1 focus:ring-[#6F3414]"
              />
              <input 
                type="password" 
                placeholder="New Password"
                className="w-full border border-stone-200 bg-stone-50/50 text-xs rounded-xl px-4 py-2.5 outline-none focus:ring-1 focus:ring-[#6F3414]"
              />
              <button className="w-full bg-stone-100 hover:bg-stone-200/80 text-stone-700 font-bold text-xs py-2.5 rounded-xl transition-colors">
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}