// src/components/CoffeeSelect.jsx
export default function CoffeeSelect({ label, options = [] }) {
  return (
    <div className="space-y-1 w-full">
      {label && <label className="text-xs font-bold text-stone-600 uppercase tracking-wide">{label}</label>}
      <select className="w-full border border-stone-200 bg-stone-50/50 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-1 focus:ring-[#6F3414] focus:bg-white transition-all">
        {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
      </select>
    </div>
  );
}