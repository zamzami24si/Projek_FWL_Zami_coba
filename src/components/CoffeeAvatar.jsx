// src/components/CoffeeAvatar.jsx
export default function CoffeeAvatar({ name, image }) {
  if (image) return <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover border border-stone-200" />;
  return (
    <div className="w-10 h-10 rounded-full bg-amber-100 text-[#6F3414] border border-amber-200 flex items-center justify-center font-bold text-sm">
      {name ? name.charAt(0).toUpperCase() : "C"}
    </div>
  );
}