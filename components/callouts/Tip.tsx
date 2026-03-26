export default function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-r-lg border-l-4 border-dsld-green bg-dsld-green-light p-4">
      <p className="mb-1 text-sm font-bold uppercase tracking-wide text-dsld-green">Tip</p>
      <div className="text-sm text-dsld-text">{children}</div>
    </div>
  );
}
