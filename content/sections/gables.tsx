import SpreadsheetRef from "@/components/SpreadsheetRef";
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
      <ol className="list-decimal pl-6 space-y-1 text-sm">
        <li>Using the elevation drawings, trace all gables.</li>
        <li>Place <strong>16&quot; hatch lines</strong> inside each traced gable area.</li>
        <li>Explode the hatch pattern, then pull the hatch lines out.</li>
        <li>Also trace the <strong>top plate</strong> of all gables and pull those out.</li>
      </ol>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/imagea.png" alt="AutoCAD gable sketch with 16-inch hatch lines" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Gable CAD sketch with hatch lines</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">Calculating the Count</h3>
      <p className="text-sm leading-relaxed">
        Once you have the total measurements, use the following formula:
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-md p-3 text-sm font-mono">
        Total linear feet of gable + hatch lines + top plate / 30 = your count
      </div>

      <p className="text-sm leading-relaxed">
        Place the resulting count in the appropriate section of the estimating spreadsheet.
      </p>

      <SpreadsheetRef section="Gables" cell="Gable Count" />

      <Tip>
        Make sure you explode the hatch lines before measuring. If you skip the explode step, the
        individual line lengths will not be accessible for your linear footage calculation.
      </Tip>
    </div>
  );
}
