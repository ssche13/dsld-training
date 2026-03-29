import SpreadsheetRef from "@/components/SpreadsheetRef";
import Tip from "@/components/callouts/Tip";
import Note from "@/components/callouts/Note";

export default function Granite() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Granite Countertops</h2>

      <p className="text-sm leading-relaxed">
        Granite countertop estimation covers countertop square footage and backsplash linear inches.
        Measurements are taken from the cabinet layout drawing in AutoCAD using color-coded polylines.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Color Coding</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><strong className="text-yellow-600">Yellow</strong> — Vanity tops (bathrooms).</li>
        <li><strong className="text-red-600">Red</strong> — Kitchen countertops and other areas (laundry, mudroom, outdoor kitchen).</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Countertop Square Footage</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use POLYLINE to trace around each granite countertop area with the appropriate color.</li>
        <li>Account for the 1.5&quot; lip &mdash; this is normally shown as a dotted line around the cabinets on the plan.</li>
        <li>Use <strong>POLYAREA</strong> to get the square footage of each countertop area.</li>
        <li>Sum all areas and enter into the spreadsheet.</li>
      </ul>

      <SpreadsheetRef section="Granite" cell="Total SF" />

      <h3 className="font-medium text-base text-dsld-text">Backsplash Measurement</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Explode the countertop polylines into regular lines.</li>
        <li>Remove any lines that are <strong>not</strong> touching a wall.</li>
        <li>Pull out the remaining lines and convert them to linear inches.</li>
        <li>Include sinks in the backsplash measurement &mdash; do not deduct for them.</li>
        <li>Exclude appliances such as refrigerators and stoves &mdash; no backsplash behind these.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Where to Enter Backsplash</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><strong className="text-red-600">Red lines</strong> (kitchen and other areas) &rarr; Kitchen 4&quot; Splash section.</li>
        <li><strong className="text-yellow-600">Yellow lines</strong> (vanity areas) &rarr; Vanity 4&quot; Splash section.</li>
      </ul>

      <Note>
        The total of the red and yellow lines after being exploded and adjusted are to be converted to linear inches before being inputted into the splash sections.
      </Note>

      <Tip>
        Do not deduct for sink or cooktop cutouts — the granite fabricator handles cutouts separately.
      </Tip>
    </div>
  );
}
