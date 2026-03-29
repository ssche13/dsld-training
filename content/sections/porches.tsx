import SpreadsheetRef from "@/components/SpreadsheetRef";
import Tip from "@/components/callouts/Tip";
import Note from "@/components/callouts/Note";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";

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
        <li>Trace the porches and pull them out.</li>
        <li>Add hatch lines at 16&apos;&apos; O.C. and pull those out.</li>
        <li>In the freshly emptied boxes, draw a 4x8 box using the POLYLINE command to fill in the porches you traced. Consider the waste factor that is left over from boxes that exceed the area of the traced porches so that you are not over-estimating.</li>
        <li>Count the boxes, then place that count in 4x8-1/4&apos;&apos; Beaded Cement Soffit cell of the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="Porches CAD and Beaded Soffit" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Get the linear footage of the hatch lines you pulled out previously and insert them into the 1x4 on porches cell in the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="1x4 porches" />

      <SpreadsheetRef section="Concrete" cell="Total SF of Covered Porches" />
      <SpreadsheetRef section="Concrete" cell="Total SF of Uncovered Porches" />
    </div>
  );
}
