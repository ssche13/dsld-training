import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";

export default function Osb() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">OSB (Oriented Strand Board)</h2>

      <p className="text-sm leading-relaxed">
        OSB is used as wall sheathing on exterior walls and as gable-end sheathing. You will trace
        exterior walls in AutoCAD and calculate the gable area using the HATCH command.
      </p>

      <Note>
        Trace all exterior walls EXCEPT garage door openings. Garage door openings do not receive OSB
        sheathing and must be excluded from your measurements.
      </Note>

      <h3 className="font-medium text-base text-dsld-text">Exterior Wall Sheathing</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Trace the exterior wall perimeter on the OSB layer, skipping garage door openings.</li>
        <li>Multiply the linear footage by the wall height to get the total exterior wall sheathing area.</li>
        <li>Include all <strong>outcroppings</strong> in your trace.</li>
      </ul>

      <p className="text-sm leading-relaxed">
        <strong>Outcroppings</strong> are any exterior wall projections that extend beyond the main
        building footprint, such as bay windows, fireplace chases, or cantilevered bump-outs. These
        must be included in your OSB measurement.
      </p>

      <Note>
        Hatch lines will be needed for calculating wall sheathing for gables for studs.
      </Note>

      <h3 className="font-medium text-base text-dsld-text">Gable Hatch Lines</h3>
      <ol className="list-decimal pl-6 space-y-1 text-sm">
        <li>Switch to the <strong>OSB/Gable</strong> layer in AutoCAD.</li>
        <li>Use the <strong>HATCH</strong> command to fill the triangular gable area.</li>
        <li>Set the hatch pattern spacing to <strong>16&quot; O.C.</strong> (on center).</li>
        <li>Record the hatched area as the gable OSB square footage.</li>
      </ol>

      <ImagePlaceholder label="CAD image showing OSB tracing with garage door exclusion and outcroppings" />

      <SpreadsheetRef section="OSB" cell="Exterior Walls" />
      <SpreadsheetRef section="OSB" cell="Gable Hatch" />
    </div>
  );
}
