// src/components/CoffeeSectionHeader.jsx
export default function CoffeeSectionHeader({ title, subtitle }) {
  return (
    <div className="border-b border-stone-100 pb-3 mb-4">
      <h3 className="text-base font-bold text-stone-900">{title}</h3>
      {subtitle && <p className="text-xs text-stone-400 mt-0.5">{subtitle}</p>}
    </div>
  );
}