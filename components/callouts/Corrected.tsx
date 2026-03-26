export default function Corrected({ was, now }: { was: string; now: React.ReactNode }) {
  return (
    <div className="my-4 rounded-r-lg border-l-4 border-dsld-orange bg-dsld-orange-light p-4">
      <p className="mb-1 text-sm font-bold uppercase tracking-wide text-dsld-orange">Corrected</p>
      <p className="mb-2 text-sm text-dsld-gray line-through">{was}</p>
      <div className="text-sm font-medium text-dsld-text">{now}</div>
    </div>
  );
}
