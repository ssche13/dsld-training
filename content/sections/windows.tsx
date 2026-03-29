import SpreadsheetRef from "@/components/SpreadsheetRef";
import Tip from "@/components/callouts/Tip";
import Note from "@/components/callouts/Note";

export default function Windows() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Windows</h2>

      <p className="text-sm leading-relaxed">
        Window estimation is based on the window schedule included in the plan set. The schedule
        lists every window by mark number, size, type, and quantity.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Reading the Window Schedule</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Locate the window schedule on the plan — it is typically on the elevation or detail sheet.</li>
        <li>Each window mark (e.g., W1, W2) corresponds to a specific size and type.</li>
        <li>Verify the count on the schedule against the windows shown on the floor plan.</li>
        <li>Note any special window types: fixed, casement, sliding, or bay.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Entering into the Spreadsheet</h3>
      <p className="text-sm leading-relaxed">
        Transfer each window mark, size, type, and quantity from the schedule into the Windows tab of
        the estimating spreadsheet. Ensure the total count matches the plan.
      </p>

      <SpreadsheetRef section="Windows" cell="Window Schedule" />

      <Tip>
        Cross-check the window count on the floor plan against the schedule. Discrepancies are
        common and should be flagged for your team leader.
      </Tip>

      <Note>
        Always cross-check window counts and sizes between the CAD drawing and the floor plan to
        catch any discrepancies.
      </Note>
    </div>
  );
}
