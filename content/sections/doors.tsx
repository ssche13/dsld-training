import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";

export default function Doors() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Doors</h2>

      <p className="text-sm leading-relaxed">
        Door estimation uses the door schedule from the plan set. The schedule provides each door
        mark, size, type (interior/exterior), and swing direction.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Reading the Door Schedule</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Locate the door schedule — usually on the same sheet as the window schedule.</li>
        <li>Each door mark (e.g., D1, D2) identifies a specific size and style.</li>
        <li>Note the door type: interior hollow-core, interior solid-core, exterior, sliding glass, etc.</li>
        <li>Verify the count matches the doors shown on the floor plan.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Items to Track</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Door slab (the door itself).</li>
        <li>Door frame and jamb.</li>
        <li>Hardware (hinges, locksets, handles).</li>
        <li>Exterior doors may require thresholds and weatherstripping.</li>
      </ul>

      <SpreadsheetRef section="Doors" cell="Door Schedule" />

      <Note>
        Garage entry doors and exterior doors are separate line items from interior doors. Make sure
        you place each type in the correct section of the spreadsheet.
      </Note>
    </div>
  );
}
