import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";

export default function Shelving() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Shelving</h2>

      <p className="text-sm leading-relaxed">
        Shelving includes wire shelving and wood shelving installed in closets, pantries, and laundry
        rooms. Quantities are counted by sorting color-coded lines into a 16&rsquo; rectangle using the
        same method as crown counting.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Color Coding</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><strong className="text-green-600">Green</strong> — Shelf Support</li>
        <li><strong className="text-red-600">Red</strong> — Shelf</li>
        <li><strong className="text-blue-600">Blue</strong> — Rod</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">How to Measure</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use the closet elevations to aid with shelving calculations.
          <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
            <img src="/images/manual-notes/imagec.png" alt="Closet elevation drawings showing shelf and rod layout" className="w-full rounded" />
            <p className="mt-1 text-center text-xs text-gray-500">Closet elevations showing shelf and rod layout</p>
          </div>
        </li>
        <li>Open the floor plan and identify all closets, pantries, and laundry rooms.</li>
        <li>Draw color-coded lines for each shelving component (Green = Shelf Support, Red = Shelf, Blue = Rod).</li>
        <li>Wherever there are multiple shelves/rods called out in the closet elevations, the CAD sketch should be copied over to match the count in the PDF drawing.</li>
      </ul>

      <Note>
        Example: If there are 5 shelves in the Pantry, the shelving sketch for the pantry in CAD should be copied 5 times.
      </Note>

      <h3 className="font-medium text-base text-dsld-text">Counting Method</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Once you have finished drawing the shelving and copying the appropriate quantities, keep one set unedited and copy over another set.</li>
        <li>Sort the color-coded lines into a closed 16&rsquo; rectangle. This is the same method used for crown counting.</li>
        <li>Use the <strong>&ldquo;Group Lines by Boundary&rdquo;</strong> command to count the lines inside the rectangle.</li>
        <li>Group each color together to minimize confusion.</li>
        <li>Enter the counts into the spreadsheet.</li>
      </ul>

      <SpreadsheetRef section="Trim" cell="Shelving" />
    </div>
  );
}
