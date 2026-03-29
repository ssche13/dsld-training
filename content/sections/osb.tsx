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
        <li>Trace the exterior wall perimeter on the OSB layer, skipping garage door openings.</li>
        <li>Take each total linear run of matching plate heights and add them together, then divide by 4 rounding up to the next whole number.</li>
        <li>Include all <strong>outcroppings</strong> in your trace, including gables that are hatched to 16&apos;&apos; O.C.</li>
      </ul>

      <p className="text-sm leading-relaxed">
        <strong>Outcroppings</strong> are any exterior wall projections that extend beyond the main
        building footprint, such as bay windows, fireplace chases, or cantilevered bump-outs. These
        must be included in your OSB measurement.
      </p>

      <ImagePlaceholder label="OSB CAD" />

      <p className="text-sm leading-relaxed">
        Place your number into the Wall Sheathing section of the spreadsheet next to its
        corresponding ceiling height.
      </p>

      <ImagePlaceholder label="Wall Sheathing XL" />

      <h3 className="font-medium text-base text-dsld-text">Wall Sheathing for Gables</h3>
      <ol className="list-decimal pl-6 space-y-1 text-sm">
        <li>Use <strong>POLYAREA</strong> to calculate the area of the gable(s).</li>
        <li>Divide by 32.</li>
        <li>Multiply by 1.1.</li>
        <li>Round to the next whole number.</li>
        <li>Add 1 for the garage.</li>
        <li>Add 4 for the catwalk in the attic.</li>
        <li>Put your total in the <strong>Extra Areas</strong> section of the spreadsheet.</li>
      </ol>

      <ImagePlaceholder label="Extra Areas XL" />

      <h3 className="font-medium text-base text-dsld-text">Studs</h3>
      <ol className="list-decimal pl-6 space-y-1 text-sm">
        <li>Take the total linear feet of the hatch lines you placed inside the gable(s).</li>
        <li>Divide by 30.</li>
        <li>Enter your number in the 2 appropriate cells in the spreadsheet:</li>
      </ol>

      <ImagePlaceholder label="OSB Studs XL" />

      <SpreadsheetRef section="OSB" cell="Exterior Walls" />
      <SpreadsheetRef section="OSB" cell="Gable Hatch" />
    </div>
  );
}
