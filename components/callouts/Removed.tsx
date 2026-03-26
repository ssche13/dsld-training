export default function Removed({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-r-lg border-l-4 border-dsld-red bg-dsld-red-light p-4">
      <p className="mb-1 text-sm font-bold uppercase tracking-wide text-dsld-red">Removed from V1.2</p>
      <div className="text-sm text-dsld-gray line-through">{children}</div>
    </div>
  );
}
