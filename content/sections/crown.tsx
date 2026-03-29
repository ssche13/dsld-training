import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";

export default function Crown() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Crown Molding</h2>

      <p className="text-sm leading-relaxed">
        Crown molding is decorative trim installed at the junction of walls and ceilings. Not all
        rooms receive crown molding — check the plan specifications for which rooms are included.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Where Crown Is Typically Installed</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Kitchen, foyer, living room, dining room, and breakfast area — these main areas receive 7-1/4&quot; crown.</li>
        <li>Tray ceilings receive 5-1/4&quot; crown.</li>
        <li>Bathrooms, closets, and utility rooms typically do not receive crown.</li>
      </ul>

      <Note>
        Because main areas and tray ceilings use different crown sizes, they should be counted
        separately in the spreadsheet — one entry for 7-1/4&quot; crown and one for 5-1/4&quot; crown.
      </Note>

      <h3 className="font-medium text-base text-dsld-text">How to Measure</h3>
      <p className="text-sm leading-relaxed">
        Measure the room perimeter for each room that calls for crown molding. Unlike baseboards, you
        do not subtract door openings since crown runs continuously along the ceiling line. Keep
        7-1/4&quot; and 5-1/4&quot; measurements separate.
      </p>

      <SpreadsheetRef section="Trim" cell="Crown 7-1/4" />
      <SpreadsheetRef section="Trim" cell="Crown 5-1/4 (Tray)" />

      <Note>
        Crown molding quantities can change by elevation. Always verify which elevation you are
        estimating before entering values.
      </Note>
    </div>
  );
}
