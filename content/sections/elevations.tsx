import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";

export default function Elevations() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Elevations</h2>

      <p className="text-sm leading-relaxed">
        Elevation pages show the exterior appearance of each side of the house — front, rear, left,
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
        The elevation correlation groups are: A/G/S, B/H/T, C/I/U, D/J/V, E/K/W, and F/L/X. Make
        sure you are referencing the correct elevation group for your assigned plan.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Estimation</h3>
      <p className="text-sm leading-relaxed">
        Color-coded polylines are used to represent the different types of cladding:
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Brick - Red</li>
        <li>Vinyl/Lapped Siding - Magenta</li>
        <li>Stucco - Orange</li>
        <li>Board and Batten - Green</li>
        <li>Stone - Cyan</li>
        <li>Cedar Shakes - Purple</li>
        <li>Doors, Windows, Vents, and Garage Doors - Yellow</li>
      </ul>

      <p className="text-sm leading-relaxed">
        Start by using a <strong>yellow polyline</strong> to outline doors, windows, vents, and
        garage doors. These items will be subtracted from your estimation.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>For windows, doors, and vents, your polylines should always be inside the trim line. Exclude the trim from your polylines.</li>
      </ul>

      <p className="text-sm leading-relaxed">
        Using the appropriate colors, draw polylines around each wall on each side of the elevation.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>For porches and hidden areas, draw a line from the foundation to the plate height. Then, make a rectangle based on the length of wall section the cladding would need to cover.</li>
        <li>For gables/dormers, trace separately from the walls.</li>
      </ul>

      <Note>
        Polylines on clad areas representing porches will always go up to the plate height of that
        corresponding part of the home.
      </Note>

      <ImagePlaceholder label="Elevations CAD" />
      <ImagePlaceholder label="Elevations Porches CAD" />
      <ImagePlaceholder label="Elevations Gables CAD" />

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/image6.png" alt="Brick elevation with gable" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Brick elevation with gable</p>
      </div>

      <SpreadsheetRef section="Elevations" cell="Front Elevation" />
      <SpreadsheetRef section="Elevations" cell="Rear Elevation" />
    </div>
  );
}
