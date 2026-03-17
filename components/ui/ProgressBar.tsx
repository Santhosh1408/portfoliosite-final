export default function ProgressBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="py-3">
      <div className="flex items-center justify-between text-xs font-bold tracking-widest uppercase text-slate-500">
        <span>{label}</span>
        <span className="text-brand">{value}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-slate-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-brand"
          style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        />
      </div>
    </div>
  );
}