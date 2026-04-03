import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";


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

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/brick--brick_0.png" alt="Exterior Brick XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Exterior Brick XL</p>
      </div>

      <p className="text-sm leading-relaxed">
        Having to cut bricks around windows requires us to consider the extra exterior finishes of
        brick as well.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Soldier Course &amp; Lintels</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of soldier course above windows and garage doors. (This will be called out on the elevations.)</li>
        <li>Convert opening width to <strong>linear inches + 3in on each side.</strong> <em>(This creates a ledge for the brick build above the openings.)</em></li>
        <li>If the separation between two windows is 6&quot; or less, count as <strong>1</strong> window.</li>
        <li>Your resulting total for each run will match its corresponding lintel size in the <strong>Brick - King (Standard)</strong> section of the spreadsheet.</li>
        <li>Round up to the nearest available lintel and place each count into its corresponding cell.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/brick--brick_1.png" alt="Brick Lintel XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Brick Lintel XL</p>
      </div>

      <SpreadsheetRef section="Exterior" cell="Exterior Brick" />
    </div>
  );
}
