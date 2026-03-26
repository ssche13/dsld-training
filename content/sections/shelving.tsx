import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";

export default function Shelving() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Shelving</h2>

      <p className="text-sm leading-relaxed">
        Shelving includes wire shelving and wood shelving installed in closets, pantries, and laundry
        rooms. Quantities are based on the linear footage of shelving shown on the floor plan.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Types of Shelving</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><strong>Wire shelving</strong> — Standard in most closets. Measured by linear feet of shelf and rod.</li>
        <li><strong>Wood shelving</strong> — Used in pantries and linen closets. Measured by linear feet per shelf tier.</li>
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
        <li>Measure the width of each shelving run shown on the plan.</li>
        <li>Count the number of shelf tiers if multiple levels are indicated.</li>
        <li>Wherever there are multiple shelves/rods called out in the closet elevations, the CAD sketch should be copied over to match the count in the PDF drawing.</li>
      </ul>

      <Note>
        Example: If there are 5 shelves in the Pantry, the shelving sketch for the pantry in CAD should be copied 5 times.
      </Note>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Once you have finished drawing the shelving and copying the appropriate quantities, keep one set unedited and copy over another set.</li>
        <li>The set you copied will be exploded into a 16x40 rectangle, and you will repeat the process you did for crown. Group each color together to minimize confusion.</li>
        <li>Total the linear footage by shelving type and enter into the spreadsheet.</li>
      </ul>

      <SpreadsheetRef section="Trim" cell="Shelving" />
    </div>
  );
}
