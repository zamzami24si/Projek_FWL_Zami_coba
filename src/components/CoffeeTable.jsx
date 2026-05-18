// src/components/CoffeeTable.jsx
export default function CoffeeTable({ headers, children }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-stone-100">
      <table className="w-full text-sm text-left text-stone-600">
        <thead className="text-xs text-stone-500 uppercase bg-stone-50/70 border-b border-stone-100">
          <tr>
            {headers.map((h, i) => <th key={i} className="px-4 py-3 font-bold">{h}</th>)}
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-100">{children}</tbody>
      </table>
    </div>
  );
}