import SpreadsheetRef from "@/components/SpreadsheetRef";
import Tip from "@/components/callouts/Tip";
import Note from "@/components/callouts/Note";

export default function Porches() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Porches</h2>

      <Note>
        Trainees must explode the hatch lines before pulling them out and doing
        calculations on them.
      </Note>

      <p className="text-sm leading-relaxed">
        Porch estimation covers both covered and uncovered porches. The key measurement is the total
        square footage of each porch type, which drives the concrete, framing, and finish material
        quantities.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Covered Porches</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Covered porches have a roof structure overhead — include the front entry, rear covered patio, and any side porches.</li>
        <li>Measure the floor area of each covered porch from the floor plan in AutoCAD.</li>
        <li>Covered porches require additional framing, roofing, and ceiling finish materials.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Uncovered Porches</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Uncovered porches (patios) are concrete slabs without a roof structure.</li>
        <li>Measure the slab area from the floor plan.</li>
        <li>These only require concrete and formwork — no roofing or ceiling materials.</li>
      </ul>

      <SpreadsheetRef section="Concrete" cell="Total SF of Covered Porches" />
      <SpreadsheetRef section="Concrete" cell="Total SF of Uncovered Porches" />

      <Tip>
        Keep covered and uncovered porch areas separate in the spreadsheet. Combining them will cause
        errors in the roofing and framing material calculations.
      </Tip>
    </div>
  );
}
