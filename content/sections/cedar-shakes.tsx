import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";
import ColorSwatch from "@/components/ColorSwatch";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";

export default function CedarShakes() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Cedar Shakes</h2>

      <p className="text-sm leading-relaxed">
        Cedar shakes are a decorative exterior cladding typically found on gable accents, dormers,
        and other featured areas of the elevation. They are represented by{" "}
        <ColorSwatch color="purple" /> <strong>purple</strong> polylines in the elevation takeoff.
      </p>

      <h3 className="font-medium text-base text-dsld-text">How to Estimate</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Identify all cedar shake areas on the elevation drawings.</li>
        <li>Use <strong>POLYAREA</strong> to calculate the total square footage of cedar shake areas.</li>
        <li>Subtract any openings (windows, vents) within the shake areas.</li>
      </ul>

      <ImagePlaceholder label="Cedar shake areas on elevation drawing" />

      <h3 className="font-medium text-base text-dsld-text">Entering into the Spreadsheet</h3>
      <p className="text-sm leading-relaxed">
        Enter the total square footage into the Cedar Shakes section of the estimating spreadsheet.
      </p>

      <ImagePlaceholder label="Cedar shakes section in estimating spreadsheet" />

      <SpreadsheetRef section="Exterior Finishes" cell="Cedar Shakes SF" />

      <Note>
        Cedar shakes are often confused with board and batten on elevations. Double-check the
        elevation notes and material callouts to confirm the finish type before estimating.
      </Note>
    </div>
  );
}
