import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";

export default function Siding() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Siding</h2>

      <p className="text-sm leading-relaxed">
        Siding estimation covers lap siding and Board &amp; Batten (B&amp;B) as specified on the
        elevation drawings.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Lap Siding</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Identify all wall faces that call for lap siding from the elevations.</li>
        <li>Calculate total SF using <strong>POLYAREA</strong>.</li>
        <li>Subtract openings: doors, windows, vents, and garage doors.</li>
        <li>Enter the net square footage into the spreadsheet.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Board &amp; Batten (B&amp;B) Sheets</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use 4x8, 4x9, 4x10, or 4x12&rsquo; Hardie Smooth panels depending on where the wall meets
          soffit or the top plate height inside porch areas.</li>
        <li>Draw 4x8 boxes using POLYLINE to fill the B&amp;B areas on the elevations.</li>
        <li>For <strong>8&rsquo; plate heights</strong>: count goes in <em>4x8-1/4 Non-Vented Smooth Cement Soffit</em>.</li>
        <li>For <strong>9&rsquo; or 10&rsquo; plate heights</strong>: count goes in <em>4x10 Smooth Hardie Panel</em>.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">B&amp;B Battens (Strips)</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Battens are 2&quot; Hardie strips, typically spaced at 16&quot; O.C.</li>
        <li>Copy the B&amp;B areas to the side. Include doors in the area but exclude windows and vents.</li>
        <li>Hatch inside the walls (with openings excluded) using a copy of the siding takeoff lines from the elevations at 16&quot; O.C.</li>
        <li>Pull the lines out and explode them.</li>
        <li>Get total linear feet, multiply by <strong>1.2</strong>, then divide by <strong>12</strong>. Round up to get the batten count.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Z-Flashing</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Z-flashing is needed on seams between panels.</li>
        <li>Also needed where siding meets brick (kills on brick).</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">5/4x4x12 Cement Smooth Trim</h3>
      <p className="text-sm leading-relaxed">
        5/4x4x12 Cement Smooth Trim are for windows, doors, vents, garages, corners, and beams. All should be included.
      </p>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/imagee.png" alt="Soffit, Fascia and Cement Trim spreadsheet section" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Soffit &amp; Fascia / Cement Trim spreadsheet section</p>
      </div>

      <Note>
        Lines should be drawn on the bottom of doors, windows, and vents as well. Not just the top.
      </Note>

      <SpreadsheetRef section="Exterior" cell="Siding" />

      <Note>
        Do not confuse soffit quantities with siding quantities. They are separate line items in the
        spreadsheet.
      </Note>
    </div>
  );
}
