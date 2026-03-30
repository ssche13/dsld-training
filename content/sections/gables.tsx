import SpreadsheetRef from "@/components/SpreadsheetRef";
import Tip from "@/components/callouts/Tip";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";

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
        <li>Trace the <strong>top plate</strong> of all gables, then pull those lines out.</li>
      </ul>

      <ImagePlaceholder label="Gables for Walls" />

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/imagea.png" alt="AutoCAD gable sketch with 16-inch hatch lines" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Gable CAD sketch with hatch lines</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">Calculating the Count</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Get the <strong>total linear footage</strong> of the gable(s), hatch lines, and top plate(s) together.</li>
        <li>Divide by 30.</li>
        <li>Round up, then place the resulting count into the appropriate cell of the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="Gables for Walls XL" />

      <SpreadsheetRef section="Gables" cell="Gable Count" />

      <Tip>
        Make sure you explode the hatch lines before measuring. If you skip the explode step, the
        individual line lengths will not be accessible for your linear footage calculation.
      </Tip>
    </div>
  );
}
