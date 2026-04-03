import Tip from "@/components/callouts/Tip";

export default function Gables() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Gables</h2>

      <p className="text-sm leading-relaxed">
        Wall calculations are also needed for gables. This section covers how to trace gable areas
        from the elevations and calculate the framing count for the estimating spreadsheet.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Tracing Gables in AutoCAD</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Trace all gables using the <strong>Elevations</strong> page of the PDF.</li>
        <li>Place <strong>16&quot; hatch lines O.C.</strong></li>
        <li><strong>Explode</strong> the hatch pattern, then pull those lines out.</li>
        <li>Copy the top plate lines directly above to represent your <strong>double top plate</strong>.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/gables--docx_0.png" alt="Gables for Walls" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Gables for Walls</p>
      </div>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>TLEN</strong> to get the total linear footage of the gable(s), hatch lines, and double top plate together.</li>
        <li>Multiply by 1.1.</li>
        <li>Divide by 30.</li>
        <li>Round up, then place the resulting count into the <strong>2x4 16&apos; knee</strong> cell of the <strong>Wall Takeoffs</strong> section of the spreadsheet.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/gables--gables_0.png" alt="Gables for Walls XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Gables for Walls XL</p>
      </div>

      <Tip>
        Make sure you explode the hatch lines before measuring. If you skip the explode step, the
        individual line lengths will not be accessible for your linear footage calculation.
      </Tip>
    </div>
  );
}
