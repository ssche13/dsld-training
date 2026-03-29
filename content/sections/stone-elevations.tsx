import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";
import ColorSwatch from "@/components/ColorSwatch";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";

export default function StoneElevations() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Stone</h2>

      <p className="text-sm leading-relaxed">
        Stone is an exterior cladding material identified on the elevation drawings. It is represented
        by <ColorSwatch color="cyan" /> <strong>cyan</strong> polylines in the elevation takeoff.
      </p>

      <h3 className="font-medium text-base text-dsld-text">How to Estimate</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Identify all stone areas on each elevation using the elevation correlation groups (A/G/S, B/H/T, etc.).</li>
        <li>Use <strong>POLYAREA</strong> to calculate the total square footage of stone areas, subtracting openings that are not doors or windows.</li>
        <li>For water tables, keystones, and other stone details called out on the elevations, measure the <strong>total linear feet</strong> and use the correct sizing from the parts lists.</li>
      </ul>

      <ImagePlaceholder label="Stone elevation areas and details from PDF drawing" />

      <h3 className="font-medium text-base text-dsld-text">Entering into the Spreadsheet</h3>
      <p className="text-sm leading-relaxed">
        Enter the total square footage into the Stone section of the estimating spreadsheet. Stone
        detail counts (water tables, keystones, etc.) go in their corresponding cells.
      </p>

      <ImagePlaceholder label="Stone section in estimating spreadsheet" />

      <SpreadsheetRef section="Exterior Finishes" cell="Stone SF / Details" />

      <Note>
        Stone and brick often appear together on the same elevation. Make sure to separate
        measurements by material type — do not combine stone and brick areas.
      </Note>
    </div>
  );
}
