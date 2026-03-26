import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";

export default function Elevations() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Elevations</h2>

      <p className="text-sm leading-relaxed">
        Elevation pages show the exterior appearance of each side of the house — front, rear, left,
        and right. These drawings are essential for estimating exterior finishes, trim, windows, and
        roof details.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Reading Elevation Pages</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Identify which elevation letter you are working with (A through X).</li>
        <li>Note all exterior finish materials called out on each face (brick, siding, stucco, etc.).</li>
        <li>Count windows, doors, and decorative elements visible on each elevation.</li>
        <li>Record gable details, roof pitches, and any special trim or accent features.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Elevation Correlations</h3>
      <p className="text-sm leading-relaxed">
        Different plan variants share the same basic structure but have different exterior styling.
        The elevation correlation groups are: A/G/S, B/H/T, C/I/U, D/J/V, E/K/W, and F/L/X. Make
        sure you are referencing the correct elevation group for your assigned plan.
      </p>

      <SpreadsheetRef section="Elevations" cell="Front Elevation" />
      <SpreadsheetRef section="Elevations" cell="Rear Elevation" />

      <Note>
        Some plans have optional elevation upgrades. Always check the request notes for which
        elevation variant is being estimated.
      </Note>

      <Note>
        Polylines on clad areas representing porches will always go up to the plate height of that corresponding part of the home.
      </Note>

      <h3 className="font-medium text-base text-dsld-text">Brick</h3>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/image6.png" alt="Brick elevation with gable" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Brick elevation with gable</p>
      </div>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>3 sqft should be added for both windows and doors.</li>
      </ul>
    </div>
  );
}
