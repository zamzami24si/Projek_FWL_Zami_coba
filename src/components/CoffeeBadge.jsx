// src/components/CoffeeBadge.jsx
export default function CoffeeBadge({ children, status = "active" }) {
  const styles = {
    active: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    pending: "bg-amber-50 text-amber-700 border border-amber-200",
    danger: "bg-rose-50 text-rose-700 border border-rose-200"
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold ${styles[status]}`}>
      {children}
    </span>
  );
}