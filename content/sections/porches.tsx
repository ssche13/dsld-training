import SpreadsheetRef from "@/components/SpreadsheetRef";
import Tip from "@/components/callouts/Tip";
import Note from "@/components/callouts/Note";


export default function Porches() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Porches</h2>

      <Note>
        Always remember to explode your hatch lines before pulling them out and doing
        calculations on them.
      </Note>

      <p className="text-sm leading-relaxed">
        Porch estimation covers both covered and uncovered porches. Covered porches have a roof
        structure overhead — include the front entry, rear covered patio, and any side porches.
        Uncovered porches (patios) are concrete slabs without a roof structure. The key measurement
        is the total square footage of each porch type, which drives the concrete, framing, and
        finish material quantities.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Calculations</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>POLYLINE</strong> to trace the porches, then pull them off to the side.</li>
        <li>Add hatch lines at <strong>16&quot; O.C.</strong></li>
        <li>Explode, then pull the hatch lines out.</li>
        <li>In the freshly emptied polylines, draw <strong>4x8 boxes</strong> using the <strong>POLYLINE</strong> command to fill in the porches you traced. Consider the waste factor that is left over from boxes that exceed the area of the traced porches so that you are not over-estimating.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/porches--docx_0.png" alt="Porches CAD" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Porches CAD</p>
      </div>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count the boxes, then place that count in <strong>4x8-1/4&quot; Beaded Cement Soffit</strong> cell of the spreadsheet.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/porches--porches_0.png" alt="Beaded Soffit XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Beaded Soffit XL</p>
      </div>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Get the <strong>total linear footage</strong> of the hatch lines you pulled out previously and insert them into the <strong>1x4 on porches</strong> cell in the spreadsheet.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/porches--porches_1.png" alt="1x4 porches" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">1x4 porches</p>
      </div>

      <SpreadsheetRef section="Concrete" cell="Total SF of Covered Porches" />
      <SpreadsheetRef section="Concrete" cell="Total SF of Uncovered Porches" />
    </div>
  );
}
