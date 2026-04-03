import ColorSwatch from "@/components/ColorSwatch";
import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Elevations() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Elevations</h2>

      <p className="text-sm leading-relaxed">
        Elevation pages show the exterior appearance of each side of the house &mdash; front, rear, left,
        and right. These drawings are essential for estimating exterior finishes, trim, windows, and
        roof details. It is recommended to use the <strong>Elevations</strong> page in the PDF plan
        drawing to assist with the calculations that follow.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Reading Elevation Pages</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Identify which elevation letter you are working with (A through X).</li>
        <li>Note all exterior finish materials called out on each face (brick, siding, stucco, etc.).</li>
        <li>Record gable details, roof pitches, and any special trim, accent features, or decorative elements.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Elevation Correlations</h3>
      <p className="text-sm leading-relaxed">
        Different plan variants share the same basic structure but have different exterior styling.
        The elevation correlation groups are: <strong>A/G/S, B/H/T, C/I/U, D/J/V, E/K/W, and F/L/X.</strong>{" "}
        Make sure you are referencing the correct elevation group for your assigned plan.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Estimation</h3>
      <p className="text-sm leading-relaxed">
        Color-coded polylines are used to represent the different types of cladding:
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><ColorSwatch color="red" /> <strong>Red</strong> = Brick</li>
        <li><ColorSwatch color="magenta" /> <strong>Magenta</strong> = Vinyl/Lapped Siding</li>
        <li><ColorSwatch color="orange" /> <strong>Orange</strong> = Stucco</li>
        <li><ColorSwatch color="green" /> <strong>Green</strong> = Board and Batten</li>
        <li><ColorSwatch color="cyan" /> <strong>Cyan</strong> = Stone</li>
        <li><ColorSwatch color="purple" /> <strong>Purple</strong> = Cedar Shakes</li>
        <li><ColorSwatch color="yellow" /> <strong>Yellow</strong> = Doors, Windows, Vents, and Garage Doors</li>
      </ul>

      <p className="text-sm leading-relaxed">
        Start by using <strong>POLYLINE</strong> to trace <strong>yellow lines</strong> along the perimeter of doors, windows, vents, and garage doors. These items will be subtracted from your estimation.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Your polylines should always be inside the trim line, not outside of it.</li>
      </ul>

      <CmsImage src="/images/cms/elevations--docx_0.png" alt="Elevations CAD" />

      <p className="text-sm leading-relaxed">
        Use <strong>POLYLINE</strong> in the appropriate colors to trace each side of the elevation.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>For <strong>porches and hidden areas,</strong> draw a line from the foundation to the plate height. Make a rectangle from that line based on the length of wall section the cladding would need to cover.</li>
      </ul>

      <CmsImage src="/images/cms/elevations--docx_1.png" alt="Elevations Porches CAD" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>For <strong>gables/dormers,</strong> trace separately from the walls.</li>
      </ul>

      <CmsImage src="/images/cms/elevations--docx_2.png" alt="Elevations Gables CAD" />

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/image6.png" alt="Brick elevation with gable" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Brick elevation with gable</p>
      </div>

      <Note>
        Polylines on clad areas representing porches will always go up to the plate height of that
        corresponding part of the home.
      </Note>
    </div>
  );
}
