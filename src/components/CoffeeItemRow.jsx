// src/components/CoffeeItemRow.jsx
export default function CoffeeItemRow({ image, title, subtext, price }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl border border-stone-50 bg-stone-50/30">
      <div className="flex items-center gap-3">
        <img src={image} alt={title} className="w-12 h-12 rounded-xl object-cover border border-stone-100" />
        <div>
          <h4 className="font-bold text-stone-900 text-sm">{title}</h4>
          <p className="text-xs text-stone-400 font-medium">{subtext}</p>
        </div>
      </div>
      <span className="font-bold text-stone-800 text-sm">{price}</span>
    </div>
  );
}