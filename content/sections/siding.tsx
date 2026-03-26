import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";

export default function Siding() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Siding</h2>

      <p className="text-sm leading-relaxed">
        Siding estimation covers lap siding as specified on the elevation drawings. Calculate the
        total square footage of wall area that receives siding.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Lap Siding</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Identify all wall faces that call for lap siding from the elevations.</li>
        <li>Calculate gross wall area and subtract window/door openings.</li>
        <li>Enter the net square footage into the spreadsheet.</li>
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
