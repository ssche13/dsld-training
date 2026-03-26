export default function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-r-lg border-l-4 border-dsld-blue bg-dsld-blue-light p-4">
      <p className="mb-1 text-sm font-bold uppercase tracking-wide text-dsld-blue">Note</p>
      <div className="text-sm text-dsld-text">{children}</div>
    </div>
  );
}
