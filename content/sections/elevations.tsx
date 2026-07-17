import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Elevations() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Elevations</h2>

      <p className="text-sm leading-relaxed">Elevation pages show the exterior appearance of each side of the house — front, rear, left, and right. These drawings are essential for estimating exterior finishes, trim, windows, and roof details. It is recommended to use the <strong>Elevations</strong> page in the PDF plan drawing to assist with the calculations that follow.</p>

      <h3 className="font-medium text-base text-dsld-text">Reading Elevation Pages</h3>

      <ol className="list-decimal pl-6 space-y-2 text-sm">

        <li>Identify which elevation letter you are working with</li>

        <li>Note all exterior finish materials called out on each face (brick, siding, stucco, etc.).</li>

        <li>Record gable details, roof pitches, and any special trim, accent features, or decorative elements.</li>

      </ol>

      <h3 className="font-medium text-base text-dsld-text">Elevation Correlations</h3>

      <p className="text-sm leading-relaxed">Different plan variants share the same basic structure but have different exterior styling. The elevation correlation groups are: <strong>A/G/S, B/H/T, C/I/U, D/J/V, E/K/W, and F/L/X.</strong> Make sure you are referencing the correct elevation group for your assigned plan.</p>

      <h3 className="font-medium text-base text-dsld-text">AutoCAD Setup</h3>

      <p className="text-sm leading-relaxed">Color-coded polylines are used to represent the different types of cladding:</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li><strong>Red</strong> = Brick</li>

        <li><strong>Magenta</strong> = Vinyl/Lapped Siding</li>

        <li><strong>Orange</strong> = Stucco</li>

        <li><strong>Green</strong> = Board and Batten</li>

        <li><strong>Cyan</strong> = Stone</li>

        <li><strong>Purple</strong> = Cedar Shakes</li>

        <li><strong>Yellow</strong> = Doors, Windows, Vents, and Garage Doors</li>

      </ul>

      <p className="text-sm leading-relaxed">Start by using <strong>POLYLINE</strong> to trace <strong>yellow </strong>polylines along the perimeter of doors, windows, louvered vents, and garage doors. These items will be subtracted from your estimation.</p>

      <p className="text-sm leading-relaxed"><strong>Your polylines should always be inside the trim line, not outside of it.</strong></p>

      <CmsImage src="/images/cms/elevations--course_0.png" alt="AutoCAD Setup – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>POLYLINE</strong> in the appropriate colors to trace each side of the elevation.</li>

        <li>For <strong>porches and hidden areas,</strong> draw a line from the foundation to the plate height. Make a rectangle from that line based on the length of wall section the cladding would need to cover.</li>

      </ul>

      <CmsImage src="/images/cms/elevations--course_1.png" alt="AutoCAD Setup – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>For <strong>gables/dormers,</strong> trace separately from the walls.</li>

      </ul>

      <p className="text-sm leading-relaxed">Copy everything off to the side. You should have something that looks like this:</p>

      <CmsImage src="/images/cms/elevations--course_2.png" alt="AutoCAD Setup – example 3" />

      <Note>Polylines on clad areas representing porches will always go up to the plate height.</Note>

      <h3 className="font-medium text-base text-dsld-text">Perimeter of Shutters and Windows</h3>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>TLEN</strong> to get the total linear footage of all brick windows, non-brick windows, and recessed shutters, respectively.</li>

        <li>Place each quantity into their corresponding cells in the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/elevations--course_3.png" alt="Perimeter of Shutters and Windows – example 1" />
    </div>
  );
}
