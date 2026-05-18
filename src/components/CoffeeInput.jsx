// src/components/CoffeeInput.jsx
export default function CoffeeInput({ label, type = "text", placeholder, defaultValue }) {
  return (
    <div className="space-y-1 w-full">
      {label && <label className="text-xs font-bold text-stone-600 uppercase tracking-wide">{label}</label>}
      <input type={type} placeholder={placeholder} defaultValue={defaultValue} className="w-full border border-stone-200 bg-stone-50/50 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-1 focus:ring-[#6F3414] focus:bg-white transition-all" />
    </div>
  );
}