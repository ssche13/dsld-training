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
        <li>Living rooms, dining rooms, and master bedrooms are common locations.</li>
        <li>Bathrooms, closets, and utility rooms typically do not receive crown.</li>
        <li>Rooms with vaulted or tray ceilings may have special crown details — check the ceiling plan.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">How to Measure</h3>
      <p className="text-sm leading-relaxed">
        Measure the room perimeter for each room that calls for crown molding. Unlike baseboards, you
        do not subtract door openings since crown runs continuously along the ceiling line.
      </p>

      <SpreadsheetRef section="Trim" cell="Crown" />

      <Note>
        Crown molding quantities can change by elevation. Always verify which elevation you are
        estimating before entering values.
      </Note>
    </div>
  );
}
