// src/components/CoffeeAlert.jsx
export default function CoffeeAlert({ message, type = "success" }) {
  const styles = {
    success: "bg-emerald-50 text-emerald-800 border-emerald-100",
    warning: "bg-amber-50 text-amber-800 border-amber-100"
  };
  return (
    <div className={`p-4 rounded-xl border text-xs font-semibold shadow-sm ${styles[type]}`}>
      🔔 {message}
    </div>
  );
}