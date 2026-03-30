import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";

export default function Osb() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">OSB (Oriented Strand Board)</h2>

      <p className="text-sm leading-relaxed">
        OSB is used as wall sheathing on exterior walls and as gable-end sheathing. You will trace
        exterior walls in AutoCAD for the linear footage and calculate the gable area using the{" "}
        <strong>HATCH</strong> command.
      </p>

      <Note>
        Trace all exterior walls EXCEPT garage door openings. Garage door openings do not receive OSB
        sheathing and must be excluded from your measurements.
      </Note>

      <h3 className="font-medium text-base text-dsld-text">Exterior Wall Sheathing</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>POLYLINE</strong> to trace along the exterior wall perimeter on the OSB layer in a color of your choice, skipping garage door openings.</li>
        <li>Include all <strong>outcroppings</strong> in your trace, including gables that you will hatch at <strong>16&quot; O.C.</strong> Be sure to trace these lines in a <strong>separate color</strong> than what you used for the perimeter. (Outcroppings are any exterior wall projections that extend beyond the main building footprint, such as bay windows, fireplace chases, or cantilevered bump-outs. These <strong>must</strong> be included in your OSB measurement.)</li>
      </ul>

      <ImagePlaceholder label="OSB CAD" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Get the <strong>total linear feet</strong> of each run of matching plate heights and add them together.</li>
        <li>Divide by 4.</li>
        <li>Round up, then place the resulting count based on plate height into the <strong>Wall Sheathing</strong> section of the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="Wall Sheathing XL" />

      <h3 className="font-medium text-base text-dsld-text">Wall Sheathing for Gables</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>POLYAREA</strong> to calculate the total square footage of the gable(s).</li>
        <li>Divide by 32.</li>
        <li>Multiply by 1.1</li>
        <li>Round to the next whole number.</li>
        <li>Add 1 for each garage.</li>
        <li>Add 4 for the catwalk in the attic. If there are two locations for attic access, add 7.</li>
        <li>Place the resulting total into the <strong>Extra Areas</strong> section of the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="Extra Areas XL" />

      <h3 className="font-medium text-base text-dsld-text">Studs</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Get the <strong>total linear feet</strong> of the hatch lines you placed inside the gable(s).</li>
        <li>Divide by 30.</li>
        <li>Place the resulting total into these two cells in the spreadsheet:</li>
      </ul>

      <ImagePlaceholder label="OSB Studs XL" />

      <SpreadsheetRef section="OSB" cell="Exterior Walls" />
      <SpreadsheetRef section="OSB" cell="Gable Hatch" />
    </div>
  );
}
