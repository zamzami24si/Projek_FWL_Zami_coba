// src/components/CoffeeHeroBlock.jsx
export default function CoffeeHeroBlock({ title, description, actionText }) {
  return (
    <div className="bg-gradient-to-r from-[#6F3414] to-[#4a220d] text-white p-8 rounded-2xl shadow-sm relative overflow-hidden">
      <div className="max-w-md space-y-3 relative z-10">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <p className="text-stone-300 text-xs leading-relaxed">{description}</p>
        <button className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs px-4 py-2 rounded-xl transition-colors">{actionText}</button>
      </div>
      <div className="absolute -right-8 -bottom-8 text-8xl opacity-10 pointer-events-none select-none">☕</div>
    </div>
  );
}