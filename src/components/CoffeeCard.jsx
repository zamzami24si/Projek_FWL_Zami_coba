// src/components/CoffeeCard.jsx
export default function CoffeeCard({ children, className = "" }) {
  return <div className={`bg-white border border-stone-100 shadow-sm rounded-2xl p-5 ${className}`}>{children}</div>;
}