export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-100 bg-white shadow-sm text-sm font-semibold text-slate-700">
      {children}
    </span>
  );
}