// src/components/CoffeeStatCard.jsx
export default function CoffeeStatCard({ title, value, icon, rate }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex justify-between items-start">
      <div className="space-y-2">
        <p className="text-stone-400 text-xs font-semibold uppercase tracking-wider">{title}</p>
        <h3 className="text-2xl font-bold text-stone-900">{value}</h3>
        {rate && <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">{rate}</span>}
      </div>
      <div className="w-10 h-10 bg-amber-50 text-[#6F3414] rounded-xl flex items-center justify-center font-bold text-lg">{icon}</div>
    </div>
  );
}