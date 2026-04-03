import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Osb() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">OSB (Oriented Strand Board)</h2>

      <p className="text-sm leading-relaxed">
        OSB is used as wall sheathing on exterior walls, as gable-end sheathing, and interior walls
        that touch exterior walls.
      </p>

      <Note>
        Trace all exterior walls EXCEPT garage door openings. Garage door openings do not receive OSB
        sheathing and must be excluded from your measurements.
      </Note>

      <h3 className="font-medium text-base text-dsld-text">Exterior Wall Sheathing</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>POLYLINE</strong> to trace along the exterior wall perimeter on top of the floor plan in a color of your choice, skipping garage door openings.</li>
        <li>Include all <strong>outcroppings</strong> in your trace, including gables. Be sure to trace these lines in a <strong>separate color</strong> than what you used for the perimeter. (Outcroppings are any exterior wall projections that extend beyond the main building footprint, such as bay windows, fireplace chases, or cantilevered bump-outs. These <strong>must</strong> be included in your OSB measurement.)</li>
      </ul>

      <CmsImage src="/images/cms/osb--docx_0.png" alt="OSB CAD" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of each run of matching plate heights and add them together.</li>
        <li>Divide by 4.</li>
        <li>Round up, then place the resulting count based on plate height into the <strong>Wall Sheathing</strong> section of the spreadsheet.</li>
      </ul>

      <CmsImage src="/images/cms/osb--osb_0.png" alt="Wall Sheathing XL" />

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

      <CmsImage src="/images/cms/osb--osb_1.png" alt="Extra Areas XL" />

      <h3 className="font-medium text-base text-dsld-text">Studs</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of the hatch lines you placed inside the gable(s) previously.</li>
        <li>Divide by 30.</li>
        <li>Place the resulting total into these two cells in the spreadsheet:</li>
      </ul>

      <CmsImage src="/images/cms/osb--osb_2.png" alt="OSB Studs XL" />

      <h3 className="font-medium text-base text-dsld-text">Zero Lot Line Walls</h3>
      <p className="text-sm leading-relaxed">
        <strong>5/8x4x9 OSB</strong> must be used where these walls appear. Rare occasion, but should be noted.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Identify all zero lot line walls. A common indication is a wall that has no roof overhang.</li>
        <li>Use <strong>TLEN</strong> to get the total linear footage of all zero lot line walls.</li>
        <li>Divide by 4.</li>
        <li>Place the resulting total into the <strong>Zero Lot Line Exterior Firerock</strong> section of the spreadsheet.</li>
      </ul>

      <CmsImage src="/images/cms/osb--osb_3.png" alt="Zero Lot XL" />
    </div>
  );
}
