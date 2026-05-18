// src/components/CoffeeSkeleton.jsx
export default function CoffeeSkeleton() {
  return (
    <div className="animate-pulse flex space-x-4 border border-stone-100 p-4 rounded-xl bg-white">
      <div className="rounded-xl bg-stone-200 h-12 w-12"></div>
      <div className="flex-1 space-y-2 py-1">
        <div className="h-3 bg-stone-200 rounded w-1/3"></div>
        <div className="h-3 bg-stone-200 rounded w-1/2"></div>
      </div>
    </div>
  );
}