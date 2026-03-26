import SpreadsheetRef from "@/components/SpreadsheetRef";

export default function LedgerBoards() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Ledger Boards</h2>

      <p className="text-sm leading-relaxed">
        Ledger boards are horizontal framing members attached to the side of a wall or beam to
        support the ends of joists, rafters, or other structural elements. They are commonly used
        where a porch roof or second-floor framing ties into the main structure.
      </p>

      <h3 className="font-medium text-base text-dsld-text">How to Measure</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Identify all ledger board locations on the framing plan.</li>
        <li>Measure the linear footage of each ledger board using the DIST or PLINE command in AutoCAD.</li>
        <li>Note the lumber size specified for each ledger (e.g., 2x8, 2x10).</li>
        <li>Record the total linear footage by size in the spreadsheet.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Common Locations</h3>
      <p className="text-sm leading-relaxed">
        Look for ledger boards at porch connections, second-story floor transitions, and anywhere
        joists bear on a wall rather than sitting on top of a beam or plate.
      </p>

      <SpreadsheetRef section="Framing" cell="Ledger Boards" />
    </div>
  );
}
