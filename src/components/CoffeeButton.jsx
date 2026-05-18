// src/components/CoffeeButton.jsx
export default function CoffeeButton({ children, type = "primary", onClick, className = "" }) {
  const styles = {
    primary: "bg-[#6F3414] hover:bg-[#59290f] text-white shadow-sm",
    secondary: "bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200",
    accent: "bg-amber-500 hover:bg-amber-600 text-stone-950",
    danger: "bg-rose-600 hover:bg-rose-700 text-white"
  };
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${styles[type]} ${className}`}>
      {children}
    </button>
  );
}