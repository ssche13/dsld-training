import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";

export default function Brick() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Brick</h2>

      <p className="text-sm leading-relaxed">
        Brick is the <strong>most common</strong> exterior cladding that you will identify on the
        elevation drawings.
      </p>

      <h3 className="font-medium text-base text-dsld-text">How to Estimate</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>POLYAREA</strong> to get the <strong>total square footage</strong> of all polylines indicative of brick.</li>
        <li>Subtract out doors, windows, vents, and garage doors.</li>
        <li>Add 3sqft for each window.</li>
        <li>Add 1sqft per linear foot of turned brick or water table cap.</li>
        <li>Round up, then place the resulting total into the one white cell in the <strong>Exterior Brick</strong> section of the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="Exterior Brick XL" />

      <p className="text-sm leading-relaxed">
        Having to cut bricks around windows requires us to consider the extra exterior finishes of
        brick as well.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Soldier Course &amp; Lintels</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of soldier course above windows and garage doors. (This will be called out on the elevations.)</li>
        <li>Convert to <strong>linear inches.</strong></li>
        <li>Add 3in for each side, so 6in total for 1 run. (<u>1 window or garage door = 1 run</u>)</li>
        <li>Apply the same rule from the Siding section, where two windows are represented as one if there is less than a 6&quot; separation between them.</li>
        <li>Your resulting total for each run will match its corresponding lintel size in the <strong>Brick - King (Standard)</strong> section of the spreadsheet.</li>
        <li>Place 1 count for each window or garage door based on lintel size in its corresponding cell.</li>
      </ul>

      <ImagePlaceholder label="Brick Lintel XL" />

      <SpreadsheetRef section="Exterior" cell="Exterior Brick" />
    </div>
  );
}
