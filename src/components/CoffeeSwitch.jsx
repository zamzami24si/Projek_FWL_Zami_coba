// src/components/CoffeeSwitch.jsx
export default function CoffeeSwitch({ label, defaultChecked }) {
  return (
    <div className="flex justify-between items-center bg-stone-50 p-3 rounded-xl border border-stone-100 w-full">
      <span className="text-sm font-bold text-stone-700">{label}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" defaultChecked={defaultChecked} className="sr-only peer" />
        <div className="w-11 h-6 bg-stone-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
      </label>
    </div>
  );
}